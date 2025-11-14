// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeTargetDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#compartment_id DataSafeTargetDatabase#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#defined_tags DataSafeTargetDatabase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#freeform_tags DataSafeTargetDatabase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#id DataSafeTargetDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * connection_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#connection_option DataSafeTargetDatabase#connection_option}
  */
  readonly connectionOption?: DataSafeTargetDatabaseConnectionOption;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#credentials DataSafeTargetDatabase#credentials}
  */
  readonly credentials?: DataSafeTargetDatabaseCredentials;
  /**
  * database_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#database_details DataSafeTargetDatabase#database_details}
  */
  readonly databaseDetails: DataSafeTargetDatabaseDatabaseDetails;
  /**
  * peer_target_database_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#peer_target_database_details DataSafeTargetDatabase#peer_target_database_details}
  */
  readonly peerTargetDatabaseDetails?: DataSafeTargetDatabasePeerTargetDatabaseDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#timeouts DataSafeTargetDatabase#timeouts}
  */
  readonly timeouts?: DataSafeTargetDatabaseTimeouts;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#tls_config DataSafeTargetDatabase#tls_config}
  */
  readonly tlsConfig?: DataSafeTargetDatabaseTlsConfig;
}
export interface DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails {
}

export function dataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_database_id - computed: true, optional: false, required: false
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // infrastructure_type - computed: true, optional: false, required: false
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // pluggable_database_id - computed: true, optional: false, required: false
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // vm_cluster_id - computed: true, optional: false, required: false
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
}

export class DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference {
    return new DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeTargetDatabasePeerTargetDatabasesTlsConfig {
}

export function dataSafeTargetDatabasePeerTargetDatabasesTlsConfigToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabasesTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeTargetDatabasePeerTargetDatabasesTlsConfigToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabasesTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabasesTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabasesTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_store_type - computed: true, optional: false, required: false
  public get certificateStoreType() {
    return this.getStringAttribute('certificate_store_type');
  }

  // key_store_content - computed: true, optional: false, required: false
  public get keyStoreContent() {
    return this.getStringAttribute('key_store_content');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // store_password - computed: true, optional: false, required: false
  public get storePassword() {
    return this.getStringAttribute('store_password');
  }

  // trust_store_content - computed: true, optional: false, required: false
  public get trustStoreContent() {
    return this.getStringAttribute('trust_store_content');
  }
}

export class DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference {
    return new DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeTargetDatabasePeerTargetDatabases {
}

export function dataSafeTargetDatabasePeerTargetDatabasesToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSafeTargetDatabasePeerTargetDatabasesToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSafeTargetDatabasePeerTargetDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_details - computed: true, optional: false, required: false
  private _databaseDetails = new DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList(this, "database_details", false);
  public get databaseDetails() {
    return this._databaseDetails;
  }

  // database_unique_name - computed: true, optional: false, required: false
  public get databaseUniqueName() {
    return this.getStringAttribute('database_unique_name');
  }

  // dataguard_association_id - computed: true, optional: false, required: false
  public get dataguardAssociationId() {
    return this.getStringAttribute('dataguard_association_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataSafeTargetDatabasePeerTargetDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataSafeTargetDatabasePeerTargetDatabasesOutputReference {
    return new DataSafeTargetDatabasePeerTargetDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeTargetDatabaseConnectionOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#connection_type DataSafeTargetDatabase#connection_type}
  */
  readonly connectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#datasafe_private_endpoint_id DataSafeTargetDatabase#datasafe_private_endpoint_id}
  */
  readonly datasafePrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#on_prem_connector_id DataSafeTargetDatabase#on_prem_connector_id}
  */
  readonly onPremConnectorId?: string;
}

export function dataSafeTargetDatabaseConnectionOptionToTerraform(struct?: DataSafeTargetDatabaseConnectionOptionOutputReference | DataSafeTargetDatabaseConnectionOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    datasafe_private_endpoint_id: cdktf.stringToTerraform(struct!.datasafePrivateEndpointId),
    on_prem_connector_id: cdktf.stringToTerraform(struct!.onPremConnectorId),
  }
}


export function dataSafeTargetDatabaseConnectionOptionToHclTerraform(struct?: DataSafeTargetDatabaseConnectionOptionOutputReference | DataSafeTargetDatabaseConnectionOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasafe_private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.datasafePrivateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_prem_connector_id: {
      value: cdktf.stringToHclTerraform(struct!.onPremConnectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseConnectionOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabaseConnectionOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._datasafePrivateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasafePrivateEndpointId = this._datasafePrivateEndpointId;
    }
    if (this._onPremConnectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremConnectorId = this._onPremConnectorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseConnectionOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._datasafePrivateEndpointId = undefined;
      this._onPremConnectorId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._datasafePrivateEndpointId = value.datasafePrivateEndpointId;
      this._onPremConnectorId = value.onPremConnectorId;
    }
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // datasafe_private_endpoint_id - computed: true, optional: true, required: false
  private _datasafePrivateEndpointId?: string; 
  public get datasafePrivateEndpointId() {
    return this.getStringAttribute('datasafe_private_endpoint_id');
  }
  public set datasafePrivateEndpointId(value: string) {
    this._datasafePrivateEndpointId = value;
  }
  public resetDatasafePrivateEndpointId() {
    this._datasafePrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasafePrivateEndpointIdInput() {
    return this._datasafePrivateEndpointId;
  }

  // on_prem_connector_id - computed: true, optional: true, required: false
  private _onPremConnectorId?: string; 
  public get onPremConnectorId() {
    return this.getStringAttribute('on_prem_connector_id');
  }
  public set onPremConnectorId(value: string) {
    this._onPremConnectorId = value;
  }
  public resetOnPremConnectorId() {
    this._onPremConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConnectorIdInput() {
    return this._onPremConnectorId;
  }
}
export interface DataSafeTargetDatabaseCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#password DataSafeTargetDatabase#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#user_name DataSafeTargetDatabase#user_name}
  */
  readonly userName: string;
}

export function dataSafeTargetDatabaseCredentialsToTerraform(struct?: DataSafeTargetDatabaseCredentialsOutputReference | DataSafeTargetDatabaseCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataSafeTargetDatabaseCredentialsToHclTerraform(struct?: DataSafeTargetDatabaseCredentialsOutputReference | DataSafeTargetDatabaseCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class DataSafeTargetDatabaseCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabaseCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DataSafeTargetDatabaseDatabaseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}
  */
  readonly autonomousDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}
  */
  readonly infrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}
  */
  readonly listenerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#pluggable_database_id DataSafeTargetDatabase#pluggable_database_id}
  */
  readonly pluggableDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}
  */
  readonly vmClusterId?: string;
}

export function dataSafeTargetDatabaseDatabaseDetailsToTerraform(struct?: DataSafeTargetDatabaseDatabaseDetailsOutputReference | DataSafeTargetDatabaseDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_database_id: cdktf.stringToTerraform(struct!.autonomousDatabaseId),
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    db_system_id: cdktf.stringToTerraform(struct!.dbSystemId),
    infrastructure_type: cdktf.stringToTerraform(struct!.infrastructureType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
    pluggable_database_id: cdktf.stringToTerraform(struct!.pluggableDatabaseId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    vm_cluster_id: cdktf.stringToTerraform(struct!.vmClusterId),
  }
}


export function dataSafeTargetDatabaseDatabaseDetailsToHclTerraform(struct?: DataSafeTargetDatabaseDatabaseDetailsOutputReference | DataSafeTargetDatabaseDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_database_id: {
      value: cdktf.stringToHclTerraform(struct!.autonomousDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_system_id: {
      value: cdktf.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_type: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    listener_port: {
      value: cdktf.numberToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pluggable_database_id: {
      value: cdktf.stringToHclTerraform(struct!.pluggableDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.vmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseDatabaseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabaseDatabaseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousDatabaseId = this._autonomousDatabaseId;
    }
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._infrastructureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureType = this._infrastructureType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    if (this._pluggableDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabaseId = this._pluggableDatabaseId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._vmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClusterId = this._vmClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseDatabaseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autonomousDatabaseId = undefined;
      this._databaseType = undefined;
      this._dbSystemId = undefined;
      this._infrastructureType = undefined;
      this._instanceId = undefined;
      this._ipAddresses = undefined;
      this._listenerPort = undefined;
      this._pluggableDatabaseId = undefined;
      this._serviceName = undefined;
      this._vmClusterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autonomousDatabaseId = value.autonomousDatabaseId;
      this._databaseType = value.databaseType;
      this._dbSystemId = value.dbSystemId;
      this._infrastructureType = value.infrastructureType;
      this._instanceId = value.instanceId;
      this._ipAddresses = value.ipAddresses;
      this._listenerPort = value.listenerPort;
      this._pluggableDatabaseId = value.pluggableDatabaseId;
      this._serviceName = value.serviceName;
      this._vmClusterId = value.vmClusterId;
    }
  }

  // autonomous_database_id - computed: true, optional: true, required: false
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  public resetAutonomousDatabaseId() {
    this._autonomousDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // infrastructure_type - computed: false, optional: false, required: true
  private _infrastructureType?: string; 
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }
  public set infrastructureType(value: string) {
    this._infrastructureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureTypeInput() {
    return this._infrastructureType;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // listener_port - computed: true, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // pluggable_database_id - computed: true, optional: true, required: false
  private _pluggableDatabaseId?: string; 
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }
  public set pluggableDatabaseId(value: string) {
    this._pluggableDatabaseId = value;
  }
  public resetPluggableDatabaseId() {
    this._pluggableDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseIdInput() {
    return this._pluggableDatabaseId;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // vm_cluster_id - computed: true, optional: true, required: false
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  public resetVmClusterId() {
    this._vmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }
}
export interface DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}
  */
  readonly autonomousDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}
  */
  readonly infrastructureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}
  */
  readonly listenerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#pluggable_database_id DataSafeTargetDatabase#pluggable_database_id}
  */
  readonly pluggableDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}
  */
  readonly vmClusterId?: string;
}

export function dataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference | DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_database_id: cdktf.stringToTerraform(struct!.autonomousDatabaseId),
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    db_system_id: cdktf.stringToTerraform(struct!.dbSystemId),
    infrastructure_type: cdktf.stringToTerraform(struct!.infrastructureType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
    pluggable_database_id: cdktf.stringToTerraform(struct!.pluggableDatabaseId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    vm_cluster_id: cdktf.stringToTerraform(struct!.vmClusterId),
  }
}


export function dataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference | DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_database_id: {
      value: cdktf.stringToHclTerraform(struct!.autonomousDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_system_id: {
      value: cdktf.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_type: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    listener_port: {
      value: cdktf.numberToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pluggable_database_id: {
      value: cdktf.stringToHclTerraform(struct!.pluggableDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.vmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousDatabaseId = this._autonomousDatabaseId;
    }
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._infrastructureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureType = this._infrastructureType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    if (this._pluggableDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluggableDatabaseId = this._pluggableDatabaseId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._vmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClusterId = this._vmClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autonomousDatabaseId = undefined;
      this._databaseType = undefined;
      this._dbSystemId = undefined;
      this._infrastructureType = undefined;
      this._instanceId = undefined;
      this._ipAddresses = undefined;
      this._listenerPort = undefined;
      this._pluggableDatabaseId = undefined;
      this._serviceName = undefined;
      this._vmClusterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autonomousDatabaseId = value.autonomousDatabaseId;
      this._databaseType = value.databaseType;
      this._dbSystemId = value.dbSystemId;
      this._infrastructureType = value.infrastructureType;
      this._instanceId = value.instanceId;
      this._ipAddresses = value.ipAddresses;
      this._listenerPort = value.listenerPort;
      this._pluggableDatabaseId = value.pluggableDatabaseId;
      this._serviceName = value.serviceName;
      this._vmClusterId = value.vmClusterId;
    }
  }

  // autonomous_database_id - computed: true, optional: true, required: false
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  public resetAutonomousDatabaseId() {
    this._autonomousDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
  }

  // infrastructure_type - computed: false, optional: false, required: true
  private _infrastructureType?: string; 
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }
  public set infrastructureType(value: string) {
    this._infrastructureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureTypeInput() {
    return this._infrastructureType;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // listener_port - computed: true, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // pluggable_database_id - computed: true, optional: true, required: false
  private _pluggableDatabaseId?: string; 
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }
  public set pluggableDatabaseId(value: string) {
    this._pluggableDatabaseId = value;
  }
  public resetPluggableDatabaseId() {
    this._pluggableDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseIdInput() {
    return this._pluggableDatabaseId;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // vm_cluster_id - computed: true, optional: true, required: false
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  public resetVmClusterId() {
    this._vmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }
}
export interface DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}
  */
  readonly certificateStoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}
  */
  readonly keyStoreContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}
  */
  readonly storePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}
  */
  readonly trustStoreContent?: string;
}

export function dataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference | DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store_type: cdktf.stringToTerraform(struct!.certificateStoreType),
    key_store_content: cdktf.stringToTerraform(struct!.keyStoreContent),
    status: cdktf.stringToTerraform(struct!.status),
    store_password: cdktf.stringToTerraform(struct!.storePassword),
    trust_store_content: cdktf.stringToTerraform(struct!.trustStoreContent),
  }
}


export function dataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference | DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_store_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_content: {
      value: cdktf.stringToHclTerraform(struct!.keyStoreContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_password: {
      value: cdktf.stringToHclTerraform(struct!.storePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_content: {
      value: cdktf.stringToHclTerraform(struct!.trustStoreContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStoreType = this._certificateStoreType;
    }
    if (this._keyStoreContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreContent = this._keyStoreContent;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._storePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.storePassword = this._storePassword;
    }
    if (this._trustStoreContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreContent = this._trustStoreContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateStoreType = undefined;
      this._keyStoreContent = undefined;
      this._status = undefined;
      this._storePassword = undefined;
      this._trustStoreContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateStoreType = value.certificateStoreType;
      this._keyStoreContent = value.keyStoreContent;
      this._status = value.status;
      this._storePassword = value.storePassword;
      this._trustStoreContent = value.trustStoreContent;
    }
  }

  // certificate_store_type - computed: true, optional: true, required: false
  private _certificateStoreType?: string; 
  public get certificateStoreType() {
    return this.getStringAttribute('certificate_store_type');
  }
  public set certificateStoreType(value: string) {
    this._certificateStoreType = value;
  }
  public resetCertificateStoreType() {
    this._certificateStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreTypeInput() {
    return this._certificateStoreType;
  }

  // key_store_content - computed: true, optional: true, required: false
  private _keyStoreContent?: string; 
  public get keyStoreContent() {
    return this.getStringAttribute('key_store_content');
  }
  public set keyStoreContent(value: string) {
    this._keyStoreContent = value;
  }
  public resetKeyStoreContent() {
    this._keyStoreContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreContentInput() {
    return this._keyStoreContent;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // store_password - computed: true, optional: true, required: false
  private _storePassword?: string; 
  public get storePassword() {
    return this.getStringAttribute('store_password');
  }
  public set storePassword(value: string) {
    this._storePassword = value;
  }
  public resetStorePassword() {
    this._storePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storePasswordInput() {
    return this._storePassword;
  }

  // trust_store_content - computed: true, optional: true, required: false
  private _trustStoreContent?: string; 
  public get trustStoreContent() {
    return this.getStringAttribute('trust_store_content');
  }
  public set trustStoreContent(value: string) {
    this._trustStoreContent = value;
  }
  public resetTrustStoreContent() {
    this._trustStoreContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreContentInput() {
    return this._trustStoreContent;
  }
}
export interface DataSafeTargetDatabasePeerTargetDatabaseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#dataguard_association_id DataSafeTargetDatabase#dataguard_association_id}
  */
  readonly dataguardAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}
  */
  readonly displayName?: string;
  /**
  * database_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#database_details DataSafeTargetDatabase#database_details}
  */
  readonly databaseDetails: DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#tls_config DataSafeTargetDatabase#tls_config}
  */
  readonly tlsConfig?: DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig;
}

export function dataSafeTargetDatabasePeerTargetDatabaseDetailsToTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataguard_association_id: cdktf.stringToTerraform(struct!.dataguardAssociationId),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    database_details: dataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsToTerraform(struct!.databaseDetails),
    tls_config: dataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dataSafeTargetDatabasePeerTargetDatabaseDetailsToHclTerraform(struct?: DataSafeTargetDatabasePeerTargetDatabaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataguard_association_id: {
      value: cdktf.stringToHclTerraform(struct!.dataguardAssociationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    database_details: {
      value: dataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsToHclTerraform(struct!.databaseDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList",
    },
    tls_config: {
      value: dataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeTargetDatabasePeerTargetDatabaseDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataguardAssociationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataguardAssociationId = this._dataguardAssociationId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._databaseDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseDetails = this._databaseDetails?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabasePeerTargetDatabaseDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataguardAssociationId = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._databaseDetails.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataguardAssociationId = value.dataguardAssociationId;
      this._description = value.description;
      this._displayName = value.displayName;
      this._databaseDetails.internalValue = value.databaseDetails;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // dataguard_association_id - computed: true, optional: true, required: false
  private _dataguardAssociationId?: string; 
  public get dataguardAssociationId() {
    return this.getStringAttribute('dataguard_association_id');
  }
  public set dataguardAssociationId(value: string) {
    this._dataguardAssociationId = value;
  }
  public resetDataguardAssociationId() {
    this._dataguardAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataguardAssociationIdInput() {
    return this._dataguardAssociationId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // database_details - computed: false, optional: false, required: true
  private _databaseDetails = new DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference(this, "database_details");
  public get databaseDetails() {
    return this._databaseDetails;
  }
  public putDatabaseDetails(value: DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails) {
    this._databaseDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseDetailsInput() {
    return this._databaseDetails.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}

export class DataSafeTargetDatabasePeerTargetDatabaseDetailsList extends cdktf.ComplexList {
  public internalValue? : DataSafeTargetDatabasePeerTargetDatabaseDetails[] | cdktf.IResolvable

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
  public get(index: number): DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference {
    return new DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeTargetDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#create DataSafeTargetDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#delete DataSafeTargetDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#update DataSafeTargetDatabase#update}
  */
  readonly update?: string;
}

export function dataSafeTargetDatabaseTimeoutsToTerraform(struct?: DataSafeTargetDatabaseTimeouts | cdktf.IResolvable): any {
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


export function dataSafeTargetDatabaseTimeoutsToHclTerraform(struct?: DataSafeTargetDatabaseTimeouts | cdktf.IResolvable): any {
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

export class DataSafeTargetDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeTargetDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeTargetDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataSafeTargetDatabaseTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}
  */
  readonly certificateStoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}
  */
  readonly keyStoreContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}
  */
  readonly storePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}
  */
  readonly trustStoreContent?: string;
}

export function dataSafeTargetDatabaseTlsConfigToTerraform(struct?: DataSafeTargetDatabaseTlsConfigOutputReference | DataSafeTargetDatabaseTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store_type: cdktf.stringToTerraform(struct!.certificateStoreType),
    key_store_content: cdktf.stringToTerraform(struct!.keyStoreContent),
    status: cdktf.stringToTerraform(struct!.status),
    store_password: cdktf.stringToTerraform(struct!.storePassword),
    trust_store_content: cdktf.stringToTerraform(struct!.trustStoreContent),
  }
}


export function dataSafeTargetDatabaseTlsConfigToHclTerraform(struct?: DataSafeTargetDatabaseTlsConfigOutputReference | DataSafeTargetDatabaseTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_store_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_content: {
      value: cdktf.stringToHclTerraform(struct!.keyStoreContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_password: {
      value: cdktf.stringToHclTerraform(struct!.storePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_content: {
      value: cdktf.stringToHclTerraform(struct!.trustStoreContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabaseTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStoreType = this._certificateStoreType;
    }
    if (this._keyStoreContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreContent = this._keyStoreContent;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._storePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.storePassword = this._storePassword;
    }
    if (this._trustStoreContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreContent = this._trustStoreContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateStoreType = undefined;
      this._keyStoreContent = undefined;
      this._status = undefined;
      this._storePassword = undefined;
      this._trustStoreContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateStoreType = value.certificateStoreType;
      this._keyStoreContent = value.keyStoreContent;
      this._status = value.status;
      this._storePassword = value.storePassword;
      this._trustStoreContent = value.trustStoreContent;
    }
  }

  // certificate_store_type - computed: true, optional: true, required: false
  private _certificateStoreType?: string; 
  public get certificateStoreType() {
    return this.getStringAttribute('certificate_store_type');
  }
  public set certificateStoreType(value: string) {
    this._certificateStoreType = value;
  }
  public resetCertificateStoreType() {
    this._certificateStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreTypeInput() {
    return this._certificateStoreType;
  }

  // key_store_content - computed: true, optional: true, required: false
  private _keyStoreContent?: string; 
  public get keyStoreContent() {
    return this.getStringAttribute('key_store_content');
  }
  public set keyStoreContent(value: string) {
    this._keyStoreContent = value;
  }
  public resetKeyStoreContent() {
    this._keyStoreContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreContentInput() {
    return this._keyStoreContent;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // store_password - computed: true, optional: true, required: false
  private _storePassword?: string; 
  public get storePassword() {
    return this.getStringAttribute('store_password');
  }
  public set storePassword(value: string) {
    this._storePassword = value;
  }
  public resetStorePassword() {
    this._storePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storePasswordInput() {
    return this._storePassword;
  }

  // trust_store_content - computed: true, optional: true, required: false
  private _trustStoreContent?: string; 
  public get trustStoreContent() {
    return this.getStringAttribute('trust_store_content');
  }
  public set trustStoreContent(value: string) {
    this._trustStoreContent = value;
  }
  public resetTrustStoreContent() {
    this._trustStoreContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreContentInput() {
    return this._trustStoreContent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database oci_data_safe_target_database}
*/
export class DataSafeTargetDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeTargetDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeTargetDatabase to import
  * @param importFromId The id of the existing DataSafeTargetDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeTargetDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_target_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/data_safe_target_database oci_data_safe_target_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeTargetDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeTargetDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_database',
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._connectionOption.internalValue = config.connectionOption;
    this._credentials.internalValue = config.credentials;
    this._databaseDetails.internalValue = config.databaseDetails;
    this._peerTargetDatabaseDetails.internalValue = config.peerTargetDatabaseDetails;
    this._timeouts.internalValue = config.timeouts;
    this._tlsConfig.internalValue = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_resource_ids - computed: true, optional: false, required: false
  public get associatedResourceIds() {
    return this.getListAttribute('associated_resource_ids');
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // peer_target_databases - computed: true, optional: false, required: false
  private _peerTargetDatabases = new DataSafeTargetDatabasePeerTargetDatabasesList(this, "peer_target_databases", false);
  public get peerTargetDatabases() {
    return this._peerTargetDatabases;
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

  // connection_option - computed: false, optional: true, required: false
  private _connectionOption = new DataSafeTargetDatabaseConnectionOptionOutputReference(this, "connection_option");
  public get connectionOption() {
    return this._connectionOption;
  }
  public putConnectionOption(value: DataSafeTargetDatabaseConnectionOption) {
    this._connectionOption.internalValue = value;
  }
  public resetConnectionOption() {
    this._connectionOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionInput() {
    return this._connectionOption.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataSafeTargetDatabaseCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataSafeTargetDatabaseCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // database_details - computed: false, optional: false, required: true
  private _databaseDetails = new DataSafeTargetDatabaseDatabaseDetailsOutputReference(this, "database_details");
  public get databaseDetails() {
    return this._databaseDetails;
  }
  public putDatabaseDetails(value: DataSafeTargetDatabaseDatabaseDetails) {
    this._databaseDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseDetailsInput() {
    return this._databaseDetails.internalValue;
  }

  // peer_target_database_details - computed: false, optional: true, required: false
  private _peerTargetDatabaseDetails = new DataSafeTargetDatabasePeerTargetDatabaseDetailsList(this, "peer_target_database_details", false);
  public get peerTargetDatabaseDetails() {
    return this._peerTargetDatabaseDetails;
  }
  public putPeerTargetDatabaseDetails(value: DataSafeTargetDatabasePeerTargetDatabaseDetails[] | cdktf.IResolvable) {
    this._peerTargetDatabaseDetails.internalValue = value;
  }
  public resetPeerTargetDatabaseDetails() {
    this._peerTargetDatabaseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTargetDatabaseDetailsInput() {
    return this._peerTargetDatabaseDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeTargetDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeTargetDatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataSafeTargetDatabaseTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataSafeTargetDatabaseTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      connection_option: dataSafeTargetDatabaseConnectionOptionToTerraform(this._connectionOption.internalValue),
      credentials: dataSafeTargetDatabaseCredentialsToTerraform(this._credentials.internalValue),
      database_details: dataSafeTargetDatabaseDatabaseDetailsToTerraform(this._databaseDetails.internalValue),
      peer_target_database_details: cdktf.listMapper(dataSafeTargetDatabasePeerTargetDatabaseDetailsToTerraform, true)(this._peerTargetDatabaseDetails.internalValue),
      timeouts: dataSafeTargetDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
      tls_config: dataSafeTargetDatabaseTlsConfigToTerraform(this._tlsConfig.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      connection_option: {
        value: dataSafeTargetDatabaseConnectionOptionToHclTerraform(this._connectionOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabaseConnectionOptionList",
      },
      credentials: {
        value: dataSafeTargetDatabaseCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabaseCredentialsList",
      },
      database_details: {
        value: dataSafeTargetDatabaseDatabaseDetailsToHclTerraform(this._databaseDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabaseDatabaseDetailsList",
      },
      peer_target_database_details: {
        value: cdktf.listMapperHcl(dataSafeTargetDatabasePeerTargetDatabaseDetailsToHclTerraform, true)(this._peerTargetDatabaseDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabasePeerTargetDatabaseDetailsList",
      },
      timeouts: {
        value: dataSafeTargetDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeTargetDatabaseTimeouts",
      },
      tls_config: {
        value: dataSafeTargetDatabaseTlsConfigToHclTerraform(this._tlsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabaseTlsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
