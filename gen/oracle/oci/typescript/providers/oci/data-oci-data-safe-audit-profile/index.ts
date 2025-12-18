// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAuditProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profile#audit_profile_id DataOciDataSafeAuditProfile#audit_profile_id}
  */
  readonly auditProfileId: string;
}
export interface DataOciDataSafeAuditProfileAuditTrails {
}

export function dataOciDataSafeAuditProfileAuditTrailsToTerraform(struct?: DataOciDataSafeAuditProfileAuditTrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeAuditProfileAuditTrailsToHclTerraform(struct?: DataOciDataSafeAuditProfileAuditTrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeAuditProfileAuditTrailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeAuditProfileAuditTrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeAuditProfileAuditTrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_collection_start_time - computed: true, optional: false, required: false
  public get auditCollectionStartTime() {
    return this.getStringAttribute('audit_collection_start_time');
  }

  // audit_profile_id - computed: true, optional: false, required: false
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }

  // can_update_last_archive_time_on_target - computed: true, optional: false, required: false
  public get canUpdateLastArchiveTimeOnTarget() {
    return this.getBooleanAttribute('can_update_last_archive_time_on_target');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_purge_enabled - computed: true, optional: false, required: false
  public get isAutoPurgeEnabled() {
    return this.getBooleanAttribute('is_auto_purge_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // peer_target_database_key - computed: true, optional: false, required: false
  public get peerTargetDatabaseKey() {
    return this.getNumberAttribute('peer_target_database_key');
  }

  // purge_job_details - computed: true, optional: false, required: false
  public get purgeJobDetails() {
    return this.getStringAttribute('purge_job_details');
  }

  // purge_job_status - computed: true, optional: false, required: false
  public get purgeJobStatus() {
    return this.getStringAttribute('purge_job_status');
  }

  // purge_job_time - computed: true, optional: false, required: false
  public get purgeJobTime() {
    return this.getStringAttribute('purge_job_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_collected - computed: true, optional: false, required: false
  public get timeLastCollected() {
    return this.getStringAttribute('time_last_collected');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // trail_location - computed: true, optional: false, required: false
  public get trailLocation() {
    return this.getStringAttribute('trail_location');
  }

  // trail_source - computed: true, optional: false, required: false
  public get trailSource() {
    return this.getStringAttribute('trail_source');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }
}

export class DataOciDataSafeAuditProfileAuditTrailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeAuditProfileAuditTrailsOutputReference {
    return new DataOciDataSafeAuditProfileAuditTrailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profile oci_data_safe_audit_profile}
*/
export class DataOciDataSafeAuditProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAuditProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAuditProfile to import
  * @param importFromId The id of the existing DataOciDataSafeAuditProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAuditProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_profile oci_data_safe_audit_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAuditProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAuditProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_profile',
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
    this._auditProfileId = config.auditProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_collected_volume - computed: true, optional: false, required: false
  public get auditCollectedVolume() {
    return this.getStringAttribute('audit_collected_volume');
  }

  // audit_profile_id - computed: false, optional: false, required: true
  private _auditProfileId?: string; 
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }
  public set auditProfileId(value: string) {
    this._auditProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProfileIdInput() {
    return this._auditProfileId;
  }

  // audit_trails - computed: true, optional: false, required: false
  private _auditTrails = new DataOciDataSafeAuditProfileAuditTrailsList(this, "audit_trails", false);
  public get auditTrails() {
    return this._auditTrails;
  }

  // change_retention_trigger - computed: true, optional: false, required: false
  public get changeRetentionTrigger() {
    return this.getNumberAttribute('change_retention_trigger');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_override_global_paid_usage - computed: true, optional: false, required: false
  public get isOverrideGlobalPaidUsage() {
    return this.getBooleanAttribute('is_override_global_paid_usage');
  }

  // is_override_global_retention_setting - computed: true, optional: false, required: false
  public get isOverrideGlobalRetentionSetting() {
    return this.getBooleanAttribute('is_override_global_retention_setting');
  }

  // is_paid_usage_enabled - computed: true, optional: false, required: false
  public get isPaidUsageEnabled() {
    return this.getBooleanAttribute('is_paid_usage_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // offline_months - computed: true, optional: false, required: false
  public get offlineMonths() {
    return this.getNumberAttribute('offline_months');
  }

  // offline_months_source - computed: true, optional: false, required: false
  public get offlineMonthsSource() {
    return this.getStringAttribute('offline_months_source');
  }

  // online_months - computed: true, optional: false, required: false
  public get onlineMonths() {
    return this.getNumberAttribute('online_months');
  }

  // online_months_source - computed: true, optional: false, required: false
  public get onlineMonthsSource() {
    return this.getStringAttribute('online_months_source');
  }

  // paid_usage_source - computed: true, optional: false, required: false
  public get paidUsageSource() {
    return this.getStringAttribute('paid_usage_source');
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

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
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
      audit_profile_id: cdktf.stringToTerraform(this._auditProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_profile_id: {
        value: cdktf.stringToHclTerraform(this._auditProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
