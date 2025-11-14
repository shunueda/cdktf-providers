// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_trail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAuditTrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_trail#audit_trail_id DataOciDataSafeAuditTrail#audit_trail_id}
  */
  readonly auditTrailId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_trail oci_data_safe_audit_trail}
*/
export class DataOciDataSafeAuditTrail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_trail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAuditTrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAuditTrail to import
  * @param importFromId The id of the existing DataOciDataSafeAuditTrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_trail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAuditTrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_trail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_audit_trail oci_data_safe_audit_trail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAuditTrailConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAuditTrailConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_trail',
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
    this._auditTrailId = config.auditTrailId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_collection_start_time - computed: true, optional: false, required: false
  public get auditCollectionStartTime() {
    return this.getStringAttribute('audit_collection_start_time');
  }

  // audit_profile_id - computed: true, optional: false, required: false
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }

  // audit_trail_id - computed: false, optional: false, required: true
  private _auditTrailId?: string; 
  public get auditTrailId() {
    return this.getStringAttribute('audit_trail_id');
  }
  public set auditTrailId(value: string) {
    this._auditTrailId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditTrailIdInput() {
    return this._auditTrailId;
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

  // resume_trigger - computed: true, optional: false, required: false
  public get resumeTrigger() {
    return this.getNumberAttribute('resume_trigger');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_trail_id: cdktf.stringToTerraform(this._auditTrailId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_trail_id: {
        value: cdktf.stringToHclTerraform(this._auditTrailId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
