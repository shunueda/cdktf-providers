// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_target_database_peer_target_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_target_database_peer_target_database#peer_target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#peer_target_database_id}
  */
  readonly peerTargetDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_target_database_peer_target_database#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#target_database_id}
  */
  readonly targetDatabaseId: string;
}
export interface DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails {
}

export function dataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsToTerraform(struct?: DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsToHclTerraform(struct?: DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails | undefined) {
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

export class DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference {
    return new DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig {
}

export function dataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigToTerraform(struct?: DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigToHclTerraform(struct?: DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig | undefined) {
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

export class DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference {
    return new DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_target_database_peer_target_database oci_data_safe_target_database_peer_target_database}
*/
export class DataOciDataSafeTargetDatabasePeerTargetDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_database_peer_target_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeTargetDatabasePeerTargetDatabase to import
  * @param importFromId The id of the existing DataOciDataSafeTargetDatabasePeerTargetDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_target_database_peer_target_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeTargetDatabasePeerTargetDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_target_database_peer_target_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_target_database_peer_target_database oci_data_safe_target_database_peer_target_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_database_peer_target_database',
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
    this._peerTargetDatabaseId = config.peerTargetDatabaseId;
    this._targetDatabaseId = config.targetDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_details - computed: true, optional: false, required: false
  private _databaseDetails = new DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList(this, "database_details", false);
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // peer_target_database_id - computed: false, optional: false, required: true
  private _peerTargetDatabaseId?: string; 
  public get peerTargetDatabaseId() {
    return this.getStringAttribute('peer_target_database_id');
  }
  public set peerTargetDatabaseId(value: string) {
    this._peerTargetDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTargetDatabaseIdInput() {
    return this._peerTargetDatabaseId;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_database_id - computed: false, optional: false, required: true
  private _targetDatabaseId?: string; 
  public get targetDatabaseId() {
    return this.getStringAttribute('target_database_id');
  }
  public set targetDatabaseId(value: string) {
    this._targetDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdInput() {
    return this._targetDatabaseId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      peer_target_database_id: cdktf.stringToTerraform(this._peerTargetDatabaseId),
      target_database_id: cdktf.stringToTerraform(this._targetDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      peer_target_database_id: {
        value: cdktf.stringToHclTerraform(this._peerTargetDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
