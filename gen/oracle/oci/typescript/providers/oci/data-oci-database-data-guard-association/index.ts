// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_data_guard_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseDataGuardAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_data_guard_association#data_guard_association_id DataOciDatabaseDataGuardAssociation#data_guard_association_id}
  */
  readonly dataGuardAssociationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_data_guard_association#database_id DataOciDatabaseDataGuardAssociation#database_id}
  */
  readonly databaseId: string;
}
export interface DataOciDatabaseDataGuardAssociationDataCollectionOptions {
}

export function dataOciDatabaseDataGuardAssociationDataCollectionOptionsToTerraform(struct?: DataOciDatabaseDataGuardAssociationDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseDataGuardAssociationDataCollectionOptionsToHclTerraform(struct?: DataOciDatabaseDataGuardAssociationDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseDataGuardAssociationDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseDataGuardAssociationDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_diagnostics_events_enabled - computed: true, optional: false, required: false
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }

  // is_health_monitoring_enabled - computed: true, optional: false, required: false
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }

  // is_incident_logs_enabled - computed: true, optional: false, required: false
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
}

export class DataOciDatabaseDataGuardAssociationDataCollectionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference {
    return new DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_data_guard_association oci_database_data_guard_association}
*/
export class DataOciDatabaseDataGuardAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_data_guard_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseDataGuardAssociation to import
  * @param importFromId The id of the existing DataOciDatabaseDataGuardAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_data_guard_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseDataGuardAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_data_guard_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_data_guard_association oci_database_data_guard_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseDataGuardAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseDataGuardAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_data_guard_association',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataGuardAssociationId = config.dataGuardAssociationId;
    this._databaseId = config.databaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_lag - computed: true, optional: false, required: false
  public get applyLag() {
    return this.getStringAttribute('apply_lag');
  }

  // apply_rate - computed: true, optional: false, required: false
  public get applyRate() {
    return this.getStringAttribute('apply_rate');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_network_nsg_ids - computed: true, optional: false, required: false
  public get backupNetworkNsgIds() {
    return this.getListAttribute('backup_network_nsg_ids');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // create_async - computed: true, optional: false, required: false
  public get createAsync() {
    return this.getBooleanAttribute('create_async');
  }

  // creation_type - computed: true, optional: false, required: false
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // data_collection_options - computed: true, optional: false, required: false
  private _dataCollectionOptions = new DataOciDatabaseDataGuardAssociationDataCollectionOptionsList(this, "data_collection_options", false);
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }

  // data_guard_association_id - computed: false, optional: false, required: true
  private _dataGuardAssociationId?: string; 
  public get dataGuardAssociationId() {
    return this.getStringAttribute('data_guard_association_id');
  }
  public set dataGuardAssociationId(value: string) {
    this._dataGuardAssociationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGuardAssociationIdInput() {
    return this._dataGuardAssociationId;
  }

  // database_admin_password - computed: true, optional: false, required: false
  public get databaseAdminPassword() {
    return this.getStringAttribute('database_admin_password');
  }

  // database_defined_tags - computed: true, optional: false, required: false
  private _databaseDefinedTags = new cdktf.StringMap(this, "database_defined_tags");
  public get databaseDefinedTags() {
    return this._databaseDefinedTags;
  }

  // database_freeform_tags - computed: true, optional: false, required: false
  private _databaseFreeformTags = new cdktf.StringMap(this, "database_freeform_tags");
  public get databaseFreeformTags() {
    return this._databaseFreeformTags;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_software_image_id - computed: true, optional: false, required: false
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }

  // db_system_defined_tags - computed: true, optional: false, required: false
  private _dbSystemDefinedTags = new cdktf.StringMap(this, "db_system_defined_tags");
  public get dbSystemDefinedTags() {
    return this._dbSystemDefinedTags;
  }

  // db_system_freeform_tags - computed: true, optional: false, required: false
  private _dbSystemFreeformTags = new cdktf.StringMap(this, "db_system_freeform_tags");
  public get dbSystemFreeformTags() {
    return this._dbSystemFreeformTags;
  }

  // db_system_security_attributes - computed: true, optional: false, required: false
  private _dbSystemSecurityAttributes = new cdktf.StringMap(this, "db_system_security_attributes");
  public get dbSystemSecurityAttributes() {
    return this._dbSystemSecurityAttributes;
  }

  // delete_standby_db_home_on_delete - computed: true, optional: false, required: false
  public get deleteStandbyDbHomeOnDelete() {
    return this.getStringAttribute('delete_standby_db_home_on_delete');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // fault_domains - computed: true, optional: false, required: false
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active_data_guard_enabled - computed: true, optional: false, required: false
  public get isActiveDataGuardEnabled() {
    return this.getBooleanAttribute('is_active_data_guard_enabled');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migrate_trigger - computed: true, optional: false, required: false
  public get migrateTrigger() {
    return this.getNumberAttribute('migrate_trigger');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // peer_data_guard_association_id - computed: true, optional: false, required: false
  public get peerDataGuardAssociationId() {
    return this.getStringAttribute('peer_data_guard_association_id');
  }

  // peer_database_id - computed: true, optional: false, required: false
  public get peerDatabaseId() {
    return this.getStringAttribute('peer_database_id');
  }

  // peer_db_home_id - computed: true, optional: false, required: false
  public get peerDbHomeId() {
    return this.getStringAttribute('peer_db_home_id');
  }

  // peer_db_system_id - computed: true, optional: false, required: false
  public get peerDbSystemId() {
    return this.getStringAttribute('peer_db_system_id');
  }

  // peer_db_unique_name - computed: true, optional: false, required: false
  public get peerDbUniqueName() {
    return this.getStringAttribute('peer_db_unique_name');
  }

  // peer_role - computed: true, optional: false, required: false
  public get peerRole() {
    return this.getStringAttribute('peer_role');
  }

  // peer_sid_prefix - computed: true, optional: false, required: false
  public get peerSidPrefix() {
    return this.getStringAttribute('peer_sid_prefix');
  }

  // peer_vm_cluster_id - computed: true, optional: false, required: false
  public get peerVmClusterId() {
    return this.getStringAttribute('peer_vm_cluster_id');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_ip_v6 - computed: true, optional: false, required: false
  public get privateIpV6() {
    return this.getStringAttribute('private_ip_v6');
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_volume_performance_mode - computed: true, optional: false, required: false
  public get storageVolumePerformanceMode() {
    return this.getStringAttribute('storage_volume_performance_mode');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // transport_type - computed: true, optional: false, required: false
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_guard_association_id: cdktf.stringToTerraform(this._dataGuardAssociationId),
      database_id: cdktf.stringToTerraform(this._databaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_guard_association_id: {
        value: cdktf.stringToHclTerraform(this._dataGuardAssociationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
