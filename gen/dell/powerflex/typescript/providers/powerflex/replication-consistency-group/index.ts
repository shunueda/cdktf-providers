// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReplicationConsistencyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Consistency Mode of the replication consistency group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#curr_consist_mode ReplicationConsistencyGroup#curr_consist_mode}
  */
  readonly currConsistMode?: string;
  /**
  * Replication Consistency Group Destination System ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#destination_system_id ReplicationConsistencyGroup#destination_system_id}
  */
  readonly destinationSystemId: string;
  /**
  * Freeze State of the replication consistency group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#freeze_state ReplicationConsistencyGroup#freeze_state}
  */
  readonly freezeState?: string;
  /**
  * Local Activity State of the replication consistency group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#local_activity_state ReplicationConsistencyGroup#local_activity_state}
  */
  readonly localActivityState?: string;
  /**
  * Replication Consistency Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#name ReplicationConsistencyGroup#name}
  */
  readonly name: string;
  /**
  * Pause Mode of the replication consistency group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#pause_mode ReplicationConsistencyGroup#pause_mode}
  */
  readonly pauseMode?: string;
  /**
  * Replication Consistency Group Protection Domain ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#protection_domain_id ReplicationConsistencyGroup#protection_domain_id}
  */
  readonly protectionDomainId: string;
  /**
  * Replication Consistency Group Remote Protection Domain ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#remote_protection_domain_id ReplicationConsistencyGroup#remote_protection_domain_id}
  */
  readonly remoteProtectionDomainId: string;
  /**
  * Replication Consistency Group RPO in Seconds (min: 15, default 15, max: 3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#rpo_in_seconds ReplicationConsistencyGroup#rpo_in_seconds}
  */
  readonly rpoInSeconds?: number;
  /**
  * Target Volume Access Mode of the replication consistency group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#target_volume_access_mode ReplicationConsistencyGroup#target_volume_access_mode}
  */
  readonly targetVolumeAccessMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group powerflex_replication_consistency_group}
*/
export class ReplicationConsistencyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_replication_consistency_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReplicationConsistencyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReplicationConsistencyGroup to import
  * @param importFromId The id of the existing ReplicationConsistencyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReplicationConsistencyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_replication_consistency_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_consistency_group powerflex_replication_consistency_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReplicationConsistencyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ReplicationConsistencyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_replication_consistency_group',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currConsistMode = config.currConsistMode;
    this._destinationSystemId = config.destinationSystemId;
    this._freezeState = config.freezeState;
    this._localActivityState = config.localActivityState;
    this._name = config.name;
    this._pauseMode = config.pauseMode;
    this._protectionDomainId = config.protectionDomainId;
    this._remoteProtectionDomainId = config.remoteProtectionDomainId;
    this._rpoInSeconds = config.rpoInSeconds;
    this._targetVolumeAccessMode = config.targetVolumeAccessMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abstract_state - computed: true, optional: false, required: false
  public get abstractState() {
    return this.getStringAttribute('abstract_state');
  }

  // active_local - computed: true, optional: false, required: false
  public get activeLocal() {
    return this.getBooleanAttribute('active_local');
  }

  // active_remote - computed: true, optional: false, required: false
  public get activeRemote() {
    return this.getBooleanAttribute('active_remote');
  }

  // curr_consist_mode - computed: true, optional: true, required: false
  private _currConsistMode?: string; 
  public get currConsistMode() {
    return this.getStringAttribute('curr_consist_mode');
  }
  public set currConsistMode(value: string) {
    this._currConsistMode = value;
  }
  public resetCurrConsistMode() {
    this._currConsistMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConsistModeInput() {
    return this._currConsistMode;
  }

  // destination_system_id - computed: false, optional: false, required: true
  private _destinationSystemId?: string; 
  public get destinationSystemId() {
    return this.getStringAttribute('destination_system_id');
  }
  public set destinationSystemId(value: string) {
    this._destinationSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSystemIdInput() {
    return this._destinationSystemId;
  }

  // disaster_recovery_state - computed: true, optional: false, required: false
  public get disasterRecoveryState() {
    return this.getStringAttribute('disaster_recovery_state');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getNumberAttribute('error');
  }

  // failover_state - computed: true, optional: false, required: false
  public get failoverState() {
    return this.getStringAttribute('failover_state');
  }

  // failover_type - computed: true, optional: false, required: false
  public get failoverType() {
    return this.getStringAttribute('failover_type');
  }

  // freeze_state - computed: true, optional: true, required: false
  private _freezeState?: string; 
  public get freezeState() {
    return this.getStringAttribute('freeze_state');
  }
  public set freezeState(value: string) {
    this._freezeState = value;
  }
  public resetFreezeState() {
    this._freezeState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeStateInput() {
    return this._freezeState;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_reason - computed: true, optional: false, required: false
  public get inactiveReason() {
    return this.getNumberAttribute('inactive_reason');
  }

  // last_snap_group_id - computed: true, optional: false, required: false
  public get lastSnapGroupId() {
    return this.getStringAttribute('last_snap_group_id');
  }

  // lifetime_state - computed: true, optional: false, required: false
  public get lifetimeState() {
    return this.getStringAttribute('lifetime_state');
  }

  // local_activity_state - computed: true, optional: true, required: false
  private _localActivityState?: string; 
  public get localActivityState() {
    return this.getStringAttribute('local_activity_state');
  }
  public set localActivityState(value: string) {
    this._localActivityState = value;
  }
  public resetLocalActivityState() {
    this._localActivityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localActivityStateInput() {
    return this._localActivityState;
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

  // pause_mode - computed: true, optional: true, required: false
  private _pauseMode?: string; 
  public get pauseMode() {
    return this.getStringAttribute('pause_mode');
  }
  public set pauseMode(value: string) {
    this._pauseMode = value;
  }
  public resetPauseMode() {
    this._pauseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseModeInput() {
    return this._pauseMode;
  }

  // peer_mdm_id - computed: true, optional: false, required: false
  public get peerMdmId() {
    return this.getStringAttribute('peer_mdm_id');
  }

  // protection_domain_id - computed: false, optional: false, required: true
  private _protectionDomainId?: string; 
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }
  public set protectionDomainId(value: string) {
    this._protectionDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }

  // remote_activity_state - computed: true, optional: false, required: false
  public get remoteActivityState() {
    return this.getStringAttribute('remote_activity_state');
  }

  // remote_disaster_recovery_state - computed: true, optional: false, required: false
  public get remoteDisasterRecoveryState() {
    return this.getStringAttribute('remote_disaster_recovery_state');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_mdm_id - computed: true, optional: false, required: false
  public get remoteMdmId() {
    return this.getStringAttribute('remote_mdm_id');
  }

  // remote_protection_domain_id - computed: false, optional: false, required: true
  private _remoteProtectionDomainId?: string; 
  public get remoteProtectionDomainId() {
    return this.getStringAttribute('remote_protection_domain_id');
  }
  public set remoteProtectionDomainId(value: string) {
    this._remoteProtectionDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteProtectionDomainIdInput() {
    return this._remoteProtectionDomainId;
  }

  // replication_direction - computed: true, optional: false, required: false
  public get replicationDirection() {
    return this.getStringAttribute('replication_direction');
  }

  // rpo_in_seconds - computed: true, optional: true, required: false
  private _rpoInSeconds?: number; 
  public get rpoInSeconds() {
    return this.getNumberAttribute('rpo_in_seconds');
  }
  public set rpoInSeconds(value: number) {
    this._rpoInSeconds = value;
  }
  public resetRpoInSeconds() {
    this._rpoInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInSecondsInput() {
    return this._rpoInSeconds;
  }

  // snap_creation_in_progress - computed: true, optional: false, required: false
  public get snapCreationInProgress() {
    return this.getBooleanAttribute('snap_creation_in_progress');
  }

  // target_volume_access_mode - computed: true, optional: true, required: false
  private _targetVolumeAccessMode?: string; 
  public get targetVolumeAccessMode() {
    return this.getStringAttribute('target_volume_access_mode');
  }
  public set targetVolumeAccessMode(value: string) {
    this._targetVolumeAccessMode = value;
  }
  public resetTargetVolumeAccessMode() {
    this._targetVolumeAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVolumeAccessModeInput() {
    return this._targetVolumeAccessMode;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      curr_consist_mode: cdktf.stringToTerraform(this._currConsistMode),
      destination_system_id: cdktf.stringToTerraform(this._destinationSystemId),
      freeze_state: cdktf.stringToTerraform(this._freezeState),
      local_activity_state: cdktf.stringToTerraform(this._localActivityState),
      name: cdktf.stringToTerraform(this._name),
      pause_mode: cdktf.stringToTerraform(this._pauseMode),
      protection_domain_id: cdktf.stringToTerraform(this._protectionDomainId),
      remote_protection_domain_id: cdktf.stringToTerraform(this._remoteProtectionDomainId),
      rpo_in_seconds: cdktf.numberToTerraform(this._rpoInSeconds),
      target_volume_access_mode: cdktf.stringToTerraform(this._targetVolumeAccessMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      curr_consist_mode: {
        value: cdktf.stringToHclTerraform(this._currConsistMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_system_id: {
        value: cdktf.stringToHclTerraform(this._destinationSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeze_state: {
        value: cdktf.stringToHclTerraform(this._freezeState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_activity_state: {
        value: cdktf.stringToHclTerraform(this._localActivityState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_mode: {
        value: cdktf.stringToHclTerraform(this._pauseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_domain_id: {
        value: cdktf.stringToHclTerraform(this._protectionDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_protection_domain_id: {
        value: cdktf.stringToHclTerraform(this._remoteProtectionDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpo_in_seconds: {
        value: cdktf.numberToHclTerraform(this._rpoInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_volume_access_mode: {
        value: cdktf.stringToHclTerraform(this._targetVolumeAccessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
