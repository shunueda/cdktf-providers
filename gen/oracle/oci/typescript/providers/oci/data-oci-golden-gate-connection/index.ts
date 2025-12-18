// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGoldenGateConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_connection#connection_id DataOciGoldenGateConnection#connection_id}
  */
  readonly connectionId: string;
}
export interface DataOciGoldenGateConnectionAdditionalAttributes {
}

export function dataOciGoldenGateConnectionAdditionalAttributesToTerraform(struct?: DataOciGoldenGateConnectionAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionAdditionalAttributesToHclTerraform(struct?: DataOciGoldenGateConnectionAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionAdditionalAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionAdditionalAttributes | undefined) {
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

export class DataOciGoldenGateConnectionAdditionalAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionAdditionalAttributesOutputReference {
    return new DataOciGoldenGateConnectionAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionBootstrapServers {
}

export function dataOciGoldenGateConnectionBootstrapServersToTerraform(struct?: DataOciGoldenGateConnectionBootstrapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionBootstrapServersToHclTerraform(struct?: DataOciGoldenGateConnectionBootstrapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionBootstrapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionBootstrapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionBootstrapServers | undefined) {
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

export class DataOciGoldenGateConnectionBootstrapServersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionBootstrapServersOutputReference {
    return new DataOciGoldenGateConnectionBootstrapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionCatalog {
}

export function dataOciGoldenGateConnectionCatalogToTerraform(struct?: DataOciGoldenGateConnectionCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionCatalogToHclTerraform(struct?: DataOciGoldenGateConnectionCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionCatalogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionCatalog | undefined) {
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

export class DataOciGoldenGateConnectionCatalogList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionCatalogOutputReference {
    return new DataOciGoldenGateConnectionCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionIngressIps {
}

export function dataOciGoldenGateConnectionIngressIpsToTerraform(struct?: DataOciGoldenGateConnectionIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionIngressIpsToHclTerraform(struct?: DataOciGoldenGateConnectionIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionIngressIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionIngressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionIngressIps | undefined) {
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

export class DataOciGoldenGateConnectionIngressIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionIngressIpsOutputReference {
    return new DataOciGoldenGateConnectionIngressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionLocks {
}

export function dataOciGoldenGateConnectionLocksToTerraform(struct?: DataOciGoldenGateConnectionLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionLocksToHclTerraform(struct?: DataOciGoldenGateConnectionLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionLocks | undefined) {
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

export class DataOciGoldenGateConnectionLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionLocksOutputReference {
    return new DataOciGoldenGateConnectionLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGoldenGateConnectionStorage {
}

export function dataOciGoldenGateConnectionStorageToTerraform(struct?: DataOciGoldenGateConnectionStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateConnectionStorageToHclTerraform(struct?: DataOciGoldenGateConnectionStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateConnectionStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateConnectionStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateConnectionStorage | undefined) {
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

export class DataOciGoldenGateConnectionStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateConnectionStorageOutputReference {
    return new DataOciGoldenGateConnectionStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_connection oci_golden_gate_connection}
*/
export class DataOciGoldenGateConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGoldenGateConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGoldenGateConnection to import
  * @param importFromId The id of the existing DataOciGoldenGateConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGoldenGateConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_connection oci_golden_gate_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGoldenGateConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGoldenGateConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_connection',
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
    this._connectionId = config.connectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _additionalAttributes = new DataOciGoldenGateConnectionAdditionalAttributesList(this, "additional_attributes", false);
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
  private _bootstrapServers = new DataOciGoldenGateConnectionBootstrapServersList(this, "bootstrap_servers", false);
  public get bootstrapServers() {
    return this._bootstrapServers;
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataOciGoldenGateConnectionCatalogList(this, "catalog", false);
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

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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
  private _ingressIps = new DataOciGoldenGateConnectionIngressIpsList(this, "ingress_ips", false);
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
  private _locks = new DataOciGoldenGateConnectionLocksList(this, "locks", false);
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
  private _storage = new DataOciGoldenGateConnectionStorageList(this, "storage", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
