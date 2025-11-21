// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/golden_gate_deployment_upgrade
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGoldenGateDeploymentUpgradeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/golden_gate_deployment_upgrade#deployment_upgrade_id DataOciGoldenGateDeploymentUpgrade#deployment_upgrade_id}
  */
  readonly deploymentUpgradeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/golden_gate_deployment_upgrade#id DataOciGoldenGateDeploymentUpgrade#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/golden_gate_deployment_upgrade oci_golden_gate_deployment_upgrade}
*/
export class DataOciGoldenGateDeploymentUpgrade extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_deployment_upgrade";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGoldenGateDeploymentUpgrade resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGoldenGateDeploymentUpgrade to import
  * @param importFromId The id of the existing DataOciGoldenGateDeploymentUpgrade that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/golden_gate_deployment_upgrade#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGoldenGateDeploymentUpgrade to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_deployment_upgrade", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/golden_gate_deployment_upgrade oci_golden_gate_deployment_upgrade} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGoldenGateDeploymentUpgradeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGoldenGateDeploymentUpgradeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_deployment_upgrade',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentUpgradeId = config.deploymentUpgradeId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // deployment_upgrade_id - computed: false, optional: false, required: true
  private _deploymentUpgradeId?: string; 
  public get deploymentUpgradeId() {
    return this.getStringAttribute('deployment_upgrade_id');
  }
  public set deploymentUpgradeId(value: string) {
    this._deploymentUpgradeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentUpgradeIdInput() {
    return this._deploymentUpgradeId;
  }

  // deployment_upgrade_type - computed: true, optional: false, required: false
  public get deploymentUpgradeType() {
    return this.getStringAttribute('deployment_upgrade_type');
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

  // is_cancel_allowed - computed: true, optional: false, required: false
  public get isCancelAllowed() {
    return this.getBooleanAttribute('is_cancel_allowed');
  }

  // is_reschedule_allowed - computed: true, optional: false, required: false
  public get isRescheduleAllowed() {
    return this.getBooleanAttribute('is_reschedule_allowed');
  }

  // is_rollback_allowed - computed: true, optional: false, required: false
  public get isRollbackAllowed() {
    return this.getBooleanAttribute('is_rollback_allowed');
  }

  // is_security_fix - computed: true, optional: false, required: false
  public get isSecurityFix() {
    return this.getBooleanAttribute('is_security_fix');
  }

  // is_snoozed - computed: true, optional: false, required: false
  public get isSnoozed() {
    return this.getBooleanAttribute('is_snoozed');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // ogg_version - computed: true, optional: false, required: false
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }

  // previous_ogg_version - computed: true, optional: false, required: false
  public get previousOggVersion() {
    return this.getStringAttribute('previous_ogg_version');
  }

  // release_type - computed: true, optional: false, required: false
  public get releaseType() {
    return this.getStringAttribute('release_type');
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

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_ogg_version_supported_until - computed: true, optional: false, required: false
  public get timeOggVersionSupportedUntil() {
    return this.getStringAttribute('time_ogg_version_supported_until');
  }

  // time_released - computed: true, optional: false, required: false
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }

  // time_schedule - computed: true, optional: false, required: false
  public get timeSchedule() {
    return this.getStringAttribute('time_schedule');
  }

  // time_schedule_max - computed: true, optional: false, required: false
  public get timeScheduleMax() {
    return this.getStringAttribute('time_schedule_max');
  }

  // time_snoozed_until - computed: true, optional: false, required: false
  public get timeSnoozedUntil() {
    return this.getStringAttribute('time_snoozed_until');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
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
      deployment_upgrade_id: cdktf.stringToTerraform(this._deploymentUpgradeId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_upgrade_id: {
        value: cdktf.stringToHclTerraform(this._deploymentUpgradeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
