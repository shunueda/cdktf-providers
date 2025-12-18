// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseDataGuardAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}
  */
  readonly backupNetworkNsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#cluster_placement_group_id DatabaseDataGuardAssociation#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#compute_count DatabaseDataGuardAssociation#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#compute_model DatabaseDataGuardAssociation#compute_model}
  */
  readonly computeModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}
  */
  readonly createAsync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}
  */
  readonly creationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}
  */
  readonly databaseAdminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}
  */
  readonly databaseDefinedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}
  */
  readonly databaseFreeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}
  */
  readonly databaseSoftwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}
  */
  readonly dbSystemDefinedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}
  */
  readonly dbSystemFreeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}
  */
  readonly dbSystemSecurityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}
  */
  readonly deleteStandbyDbHomeOnDelete: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}
  */
  readonly faultDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}
  */
  readonly isActiveDataGuardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#migrate_trigger DatabaseDataGuardAssociation#migrate_trigger}
  */
  readonly migrateTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}
  */
  readonly peerDbHomeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}
  */
  readonly peerDbSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}
  */
  readonly peerDbUniqueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}
  */
  readonly peerSidPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}
  */
  readonly peerVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#private_ip_v6 DatabaseDataGuardAssociation#private_ip_v6}
  */
  readonly privateIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}
  */
  readonly protectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}
  */
  readonly shape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}
  */
  readonly storageVolumePerformanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#subscription_id DatabaseDataGuardAssociation#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}
  */
  readonly transportType: string;
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}
  */
  readonly dataCollectionOptions?: DatabaseDataGuardAssociationDataCollectionOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}
  */
  readonly timeouts?: DatabaseDataGuardAssociationTimeouts;
}
export interface DatabaseDataGuardAssociationDataCollectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}
  */
  readonly isHealthMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled?: boolean | cdktf.IResolvable;
}

export function databaseDataGuardAssociationDataCollectionOptionsToTerraform(struct?: DatabaseDataGuardAssociationDataCollectionOptionsOutputReference | DatabaseDataGuardAssociationDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_diagnostics_events_enabled: cdktf.booleanToTerraform(struct!.isDiagnosticsEventsEnabled),
    is_health_monitoring_enabled: cdktf.booleanToTerraform(struct!.isHealthMonitoringEnabled),
    is_incident_logs_enabled: cdktf.booleanToTerraform(struct!.isIncidentLogsEnabled),
  }
}


export function databaseDataGuardAssociationDataCollectionOptionsToHclTerraform(struct?: DatabaseDataGuardAssociationDataCollectionOptionsOutputReference | DatabaseDataGuardAssociationDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_diagnostics_events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDiagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_health_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isHealthMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_incident_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isIncidentLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseDataGuardAssociationDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseDataGuardAssociationDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDiagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiagnosticsEventsEnabled = this._isDiagnosticsEventsEnabled;
    }
    if (this._isHealthMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthMonitoringEnabled = this._isHealthMonitoringEnabled;
    }
    if (this._isIncidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncidentLogsEnabled = this._isIncidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseDataGuardAssociationDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDiagnosticsEventsEnabled = undefined;
      this._isHealthMonitoringEnabled = undefined;
      this._isIncidentLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDiagnosticsEventsEnabled = value.isDiagnosticsEventsEnabled;
      this._isHealthMonitoringEnabled = value.isHealthMonitoringEnabled;
      this._isIncidentLogsEnabled = value.isIncidentLogsEnabled;
    }
  }

  // is_diagnostics_events_enabled - computed: true, optional: true, required: false
  private _isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable; 
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }
  public set isDiagnosticsEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._isDiagnosticsEventsEnabled = value;
  }
  public resetIsDiagnosticsEventsEnabled() {
    this._isDiagnosticsEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiagnosticsEventsEnabledInput() {
    return this._isDiagnosticsEventsEnabled;
  }

  // is_health_monitoring_enabled - computed: true, optional: true, required: false
  private _isHealthMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }
  public set isHealthMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._isHealthMonitoringEnabled = value;
  }
  public resetIsHealthMonitoringEnabled() {
    this._isHealthMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthMonitoringEnabledInput() {
    return this._isHealthMonitoringEnabled;
  }

  // is_incident_logs_enabled - computed: true, optional: true, required: false
  private _isIncidentLogsEnabled?: boolean | cdktf.IResolvable; 
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
  public set isIncidentLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._isIncidentLogsEnabled = value;
  }
  public resetIsIncidentLogsEnabled() {
    this._isIncidentLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncidentLogsEnabledInput() {
    return this._isIncidentLogsEnabled;
  }
}
export interface DatabaseDataGuardAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}
  */
  readonly update?: string;
}

export function databaseDataGuardAssociationTimeoutsToTerraform(struct?: DatabaseDataGuardAssociationTimeouts | cdktf.IResolvable): any {
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


export function databaseDataGuardAssociationTimeoutsToHclTerraform(struct?: DatabaseDataGuardAssociationTimeouts | cdktf.IResolvable): any {
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

export class DatabaseDataGuardAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseDataGuardAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseDataGuardAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association oci_database_data_guard_association}
*/
export class DatabaseDataGuardAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_data_guard_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseDataGuardAssociation to import
  * @param importFromId The id of the existing DatabaseDataGuardAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseDataGuardAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_data_guard_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_data_guard_association oci_database_data_guard_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseDataGuardAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseDataGuardAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_data_guard_association',
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
    this._availabilityDomain = config.availabilityDomain;
    this._backupNetworkNsgIds = config.backupNetworkNsgIds;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._computeCount = config.computeCount;
    this._computeModel = config.computeModel;
    this._cpuCoreCount = config.cpuCoreCount;
    this._createAsync = config.createAsync;
    this._creationType = config.creationType;
    this._databaseAdminPassword = config.databaseAdminPassword;
    this._databaseDefinedTags = config.databaseDefinedTags;
    this._databaseFreeformTags = config.databaseFreeformTags;
    this._databaseId = config.databaseId;
    this._databaseSoftwareImageId = config.databaseSoftwareImageId;
    this._dbSystemDefinedTags = config.dbSystemDefinedTags;
    this._dbSystemFreeformTags = config.dbSystemFreeformTags;
    this._dbSystemSecurityAttributes = config.dbSystemSecurityAttributes;
    this._deleteStandbyDbHomeOnDelete = config.deleteStandbyDbHomeOnDelete;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._faultDomains = config.faultDomains;
    this._hostname = config.hostname;
    this._id = config.id;
    this._isActiveDataGuardEnabled = config.isActiveDataGuardEnabled;
    this._licenseModel = config.licenseModel;
    this._migrateTrigger = config.migrateTrigger;
    this._nodeCount = config.nodeCount;
    this._nsgIds = config.nsgIds;
    this._peerDbHomeId = config.peerDbHomeId;
    this._peerDbSystemId = config.peerDbSystemId;
    this._peerDbUniqueName = config.peerDbUniqueName;
    this._peerSidPrefix = config.peerSidPrefix;
    this._peerVmClusterId = config.peerVmClusterId;
    this._privateIp = config.privateIp;
    this._privateIpV6 = config.privateIpV6;
    this._protectionMode = config.protectionMode;
    this._shape = config.shape;
    this._storageVolumePerformanceMode = config.storageVolumePerformanceMode;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._timeZone = config.timeZone;
    this._transportType = config.transportType;
    this._dataCollectionOptions.internalValue = config.dataCollectionOptions;
    this._timeouts.internalValue = config.timeouts;
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

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // backup_network_nsg_ids - computed: false, optional: true, required: false
  private _backupNetworkNsgIds?: string[]; 
  public get backupNetworkNsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_network_nsg_ids'));
  }
  public set backupNetworkNsgIds(value: string[]) {
    this._backupNetworkNsgIds = value;
  }
  public resetBackupNetworkNsgIds() {
    this._backupNetworkNsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNetworkNsgIdsInput() {
    return this._backupNetworkNsgIds;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compute_count - computed: true, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // compute_model - computed: true, optional: true, required: false
  private _computeModel?: string; 
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }
  public set computeModel(value: string) {
    this._computeModel = value;
  }
  public resetComputeModel() {
    this._computeModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeModelInput() {
    return this._computeModel;
  }

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // create_async - computed: false, optional: true, required: false
  private _createAsync?: boolean | cdktf.IResolvable; 
  public get createAsync() {
    return this.getBooleanAttribute('create_async');
  }
  public set createAsync(value: boolean | cdktf.IResolvable) {
    this._createAsync = value;
  }
  public resetCreateAsync() {
    this._createAsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAsyncInput() {
    return this._createAsync;
  }

  // creation_type - computed: false, optional: false, required: true
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
  }

  // database_admin_password - computed: false, optional: false, required: true
  private _databaseAdminPassword?: string; 
  public get databaseAdminPassword() {
    return this.getStringAttribute('database_admin_password');
  }
  public set databaseAdminPassword(value: string) {
    this._databaseAdminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAdminPasswordInput() {
    return this._databaseAdminPassword;
  }

  // database_defined_tags - computed: false, optional: true, required: false
  private _databaseDefinedTags?: { [key: string]: string }; 
  public get databaseDefinedTags() {
    return this.getStringMapAttribute('database_defined_tags');
  }
  public set databaseDefinedTags(value: { [key: string]: string }) {
    this._databaseDefinedTags = value;
  }
  public resetDatabaseDefinedTags() {
    this._databaseDefinedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseDefinedTagsInput() {
    return this._databaseDefinedTags;
  }

  // database_freeform_tags - computed: false, optional: true, required: false
  private _databaseFreeformTags?: { [key: string]: string }; 
  public get databaseFreeformTags() {
    return this.getStringMapAttribute('database_freeform_tags');
  }
  public set databaseFreeformTags(value: { [key: string]: string }) {
    this._databaseFreeformTags = value;
  }
  public resetDatabaseFreeformTags() {
    this._databaseFreeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFreeformTagsInput() {
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

  // database_software_image_id - computed: false, optional: true, required: false
  private _databaseSoftwareImageId?: string; 
  public get databaseSoftwareImageId() {
    return this.getStringAttribute('database_software_image_id');
  }
  public set databaseSoftwareImageId(value: string) {
    this._databaseSoftwareImageId = value;
  }
  public resetDatabaseSoftwareImageId() {
    this._databaseSoftwareImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSoftwareImageIdInput() {
    return this._databaseSoftwareImageId;
  }

  // db_system_defined_tags - computed: false, optional: true, required: false
  private _dbSystemDefinedTags?: { [key: string]: string }; 
  public get dbSystemDefinedTags() {
    return this.getStringMapAttribute('db_system_defined_tags');
  }
  public set dbSystemDefinedTags(value: { [key: string]: string }) {
    this._dbSystemDefinedTags = value;
  }
  public resetDbSystemDefinedTags() {
    this._dbSystemDefinedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemDefinedTagsInput() {
    return this._dbSystemDefinedTags;
  }

  // db_system_freeform_tags - computed: false, optional: true, required: false
  private _dbSystemFreeformTags?: { [key: string]: string }; 
  public get dbSystemFreeformTags() {
    return this.getStringMapAttribute('db_system_freeform_tags');
  }
  public set dbSystemFreeformTags(value: { [key: string]: string }) {
    this._dbSystemFreeformTags = value;
  }
  public resetDbSystemFreeformTags() {
    this._dbSystemFreeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemFreeformTagsInput() {
    return this._dbSystemFreeformTags;
  }

  // db_system_security_attributes - computed: false, optional: true, required: false
  private _dbSystemSecurityAttributes?: { [key: string]: string }; 
  public get dbSystemSecurityAttributes() {
    return this.getStringMapAttribute('db_system_security_attributes');
  }
  public set dbSystemSecurityAttributes(value: { [key: string]: string }) {
    this._dbSystemSecurityAttributes = value;
  }
  public resetDbSystemSecurityAttributes() {
    this._dbSystemSecurityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemSecurityAttributesInput() {
    return this._dbSystemSecurityAttributes;
  }

  // delete_standby_db_home_on_delete - computed: false, optional: false, required: true
  private _deleteStandbyDbHomeOnDelete?: string; 
  public get deleteStandbyDbHomeOnDelete() {
    return this.getStringAttribute('delete_standby_db_home_on_delete');
  }
  public set deleteStandbyDbHomeOnDelete(value: string) {
    this._deleteStandbyDbHomeOnDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteStandbyDbHomeOnDeleteInput() {
    return this._deleteStandbyDbHomeOnDelete;
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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // fault_domains - computed: false, optional: true, required: false
  private _faultDomains?: string[]; 
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }
  public set faultDomains(value: string[]) {
    this._faultDomains = value;
  }
  public resetFaultDomains() {
    this._faultDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainsInput() {
    return this._faultDomains;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // is_active_data_guard_enabled - computed: false, optional: true, required: false
  private _isActiveDataGuardEnabled?: boolean | cdktf.IResolvable; 
  public get isActiveDataGuardEnabled() {
    return this.getBooleanAttribute('is_active_data_guard_enabled');
  }
  public set isActiveDataGuardEnabled(value: boolean | cdktf.IResolvable) {
    this._isActiveDataGuardEnabled = value;
  }
  public resetIsActiveDataGuardEnabled() {
    this._isActiveDataGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveDataGuardEnabledInput() {
    return this._isActiveDataGuardEnabled;
  }

  // license_model - computed: false, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // migrate_trigger - computed: false, optional: true, required: false
  private _migrateTrigger?: number; 
  public get migrateTrigger() {
    return this.getNumberAttribute('migrate_trigger');
  }
  public set migrateTrigger(value: number) {
    this._migrateTrigger = value;
  }
  public resetMigrateTrigger() {
    this._migrateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateTriggerInput() {
    return this._migrateTrigger;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // peer_data_guard_association_id - computed: true, optional: false, required: false
  public get peerDataGuardAssociationId() {
    return this.getStringAttribute('peer_data_guard_association_id');
  }

  // peer_database_id - computed: true, optional: false, required: false
  public get peerDatabaseId() {
    return this.getStringAttribute('peer_database_id');
  }

  // peer_db_home_id - computed: true, optional: true, required: false
  private _peerDbHomeId?: string; 
  public get peerDbHomeId() {
    return this.getStringAttribute('peer_db_home_id');
  }
  public set peerDbHomeId(value: string) {
    this._peerDbHomeId = value;
  }
  public resetPeerDbHomeId() {
    this._peerDbHomeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDbHomeIdInput() {
    return this._peerDbHomeId;
  }

  // peer_db_system_id - computed: true, optional: true, required: false
  private _peerDbSystemId?: string; 
  public get peerDbSystemId() {
    return this.getStringAttribute('peer_db_system_id');
  }
  public set peerDbSystemId(value: string) {
    this._peerDbSystemId = value;
  }
  public resetPeerDbSystemId() {
    this._peerDbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDbSystemIdInput() {
    return this._peerDbSystemId;
  }

  // peer_db_unique_name - computed: false, optional: true, required: false
  private _peerDbUniqueName?: string; 
  public get peerDbUniqueName() {
    return this.getStringAttribute('peer_db_unique_name');
  }
  public set peerDbUniqueName(value: string) {
    this._peerDbUniqueName = value;
  }
  public resetPeerDbUniqueName() {
    this._peerDbUniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDbUniqueNameInput() {
    return this._peerDbUniqueName;
  }

  // peer_role - computed: true, optional: false, required: false
  public get peerRole() {
    return this.getStringAttribute('peer_role');
  }

  // peer_sid_prefix - computed: false, optional: true, required: false
  private _peerSidPrefix?: string; 
  public get peerSidPrefix() {
    return this.getStringAttribute('peer_sid_prefix');
  }
  public set peerSidPrefix(value: string) {
    this._peerSidPrefix = value;
  }
  public resetPeerSidPrefix() {
    this._peerSidPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSidPrefixInput() {
    return this._peerSidPrefix;
  }

  // peer_vm_cluster_id - computed: true, optional: true, required: false
  private _peerVmClusterId?: string; 
  public get peerVmClusterId() {
    return this.getStringAttribute('peer_vm_cluster_id');
  }
  public set peerVmClusterId(value: string) {
    this._peerVmClusterId = value;
  }
  public resetPeerVmClusterId() {
    this._peerVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVmClusterIdInput() {
    return this._peerVmClusterId;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // private_ip_v6 - computed: true, optional: true, required: false
  private _privateIpV6?: string; 
  public get privateIpV6() {
    return this.getStringAttribute('private_ip_v6');
  }
  public set privateIpV6(value: string) {
    this._privateIpV6 = value;
  }
  public resetPrivateIpV6() {
    this._privateIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpV6Input() {
    return this._privateIpV6;
  }

  // protection_mode - computed: false, optional: false, required: true
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_volume_performance_mode - computed: true, optional: true, required: false
  private _storageVolumePerformanceMode?: string; 
  public get storageVolumePerformanceMode() {
    return this.getStringAttribute('storage_volume_performance_mode');
  }
  public set storageVolumePerformanceMode(value: string) {
    this._storageVolumePerformanceMode = value;
  }
  public resetStorageVolumePerformanceMode() {
    this._storageVolumePerformanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVolumePerformanceModeInput() {
    return this._storageVolumePerformanceMode;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // transport_type - computed: false, optional: false, required: true
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // data_collection_options - computed: false, optional: true, required: false
  private _dataCollectionOptions = new DatabaseDataGuardAssociationDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: DatabaseDataGuardAssociationDataCollectionOptions) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseDataGuardAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseDataGuardAssociationTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      backup_network_nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupNetworkNsgIds),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compute_count: cdktf.numberToTerraform(this._computeCount),
      compute_model: cdktf.stringToTerraform(this._computeModel),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      create_async: cdktf.booleanToTerraform(this._createAsync),
      creation_type: cdktf.stringToTerraform(this._creationType),
      database_admin_password: cdktf.stringToTerraform(this._databaseAdminPassword),
      database_defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._databaseDefinedTags),
      database_freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._databaseFreeformTags),
      database_id: cdktf.stringToTerraform(this._databaseId),
      database_software_image_id: cdktf.stringToTerraform(this._databaseSoftwareImageId),
      db_system_defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._dbSystemDefinedTags),
      db_system_freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._dbSystemFreeformTags),
      db_system_security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._dbSystemSecurityAttributes),
      delete_standby_db_home_on_delete: cdktf.stringToTerraform(this._deleteStandbyDbHomeOnDelete),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      fault_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._faultDomains),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      is_active_data_guard_enabled: cdktf.booleanToTerraform(this._isActiveDataGuardEnabled),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      migrate_trigger: cdktf.numberToTerraform(this._migrateTrigger),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      peer_db_home_id: cdktf.stringToTerraform(this._peerDbHomeId),
      peer_db_system_id: cdktf.stringToTerraform(this._peerDbSystemId),
      peer_db_unique_name: cdktf.stringToTerraform(this._peerDbUniqueName),
      peer_sid_prefix: cdktf.stringToTerraform(this._peerSidPrefix),
      peer_vm_cluster_id: cdktf.stringToTerraform(this._peerVmClusterId),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_ip_v6: cdktf.stringToTerraform(this._privateIpV6),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      shape: cdktf.stringToTerraform(this._shape),
      storage_volume_performance_mode: cdktf.stringToTerraform(this._storageVolumePerformanceMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      transport_type: cdktf.stringToTerraform(this._transportType),
      data_collection_options: databaseDataGuardAssociationDataCollectionOptionsToTerraform(this._dataCollectionOptions.internalValue),
      timeouts: databaseDataGuardAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_network_nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupNetworkNsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_count: {
        value: cdktf.numberToHclTerraform(this._computeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_model: {
        value: cdktf.stringToHclTerraform(this._computeModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_async: {
        value: cdktf.booleanToHclTerraform(this._createAsync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      creation_type: {
        value: cdktf.stringToHclTerraform(this._creationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_admin_password: {
        value: cdktf.stringToHclTerraform(this._databaseAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._databaseDefinedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      database_freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._databaseFreeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_software_image_id: {
        value: cdktf.stringToHclTerraform(this._databaseSoftwareImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_system_defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dbSystemDefinedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      db_system_freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dbSystemFreeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      db_system_security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dbSystemSecurityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delete_standby_db_home_on_delete: {
        value: cdktf.stringToHclTerraform(this._deleteStandbyDbHomeOnDelete),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._faultDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      is_active_data_guard_enabled: {
        value: cdktf.booleanToHclTerraform(this._isActiveDataGuardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrate_trigger: {
        value: cdktf.numberToHclTerraform(this._migrateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peer_db_home_id: {
        value: cdktf.stringToHclTerraform(this._peerDbHomeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_db_system_id: {
        value: cdktf.stringToHclTerraform(this._peerDbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_db_unique_name: {
        value: cdktf.stringToHclTerraform(this._peerDbUniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_sid_prefix: {
        value: cdktf.stringToHclTerraform(this._peerSidPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._peerVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_v6: {
        value: cdktf.stringToHclTerraform(this._privateIpV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_mode: {
        value: cdktf.stringToHclTerraform(this._protectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_volume_performance_mode: {
        value: cdktf.stringToHclTerraform(this._storageVolumePerformanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_type: {
        value: cdktf.stringToHclTerraform(this._transportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_collection_options: {
        value: databaseDataGuardAssociationDataCollectionOptionsToHclTerraform(this._dataCollectionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseDataGuardAssociationDataCollectionOptionsList",
      },
      timeouts: {
        value: databaseDataGuardAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseDataGuardAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
