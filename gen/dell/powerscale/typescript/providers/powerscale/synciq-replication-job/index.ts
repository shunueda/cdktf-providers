// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynciqReplicationJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action for the job 
  * 				 run - to start the replication job using synciq policy
  * 				 test - to test the replication job using synciq policy, 
  * 				 resync_prep - Resync_prep is a preparation step in PowerScale SyncIQ replication jobs that helps ensure a successful replication operation by performing a series of checks and verifications on the source and target volumes before starting the replication process., 
  * 				 allow_write - allow_write determines whether the replication job allows writes to the target volume during the replication process. When configured, the target volume is writable, and any changes made to the target volume will be replicated to the source volume. This is useful in scenarios where you need to make changes to the target volume, such as updating files or creating new files, while the replication job is running.,
  * 				 allow_write_revert - allow_write_revert determines whether the replication job allows writes to the target volume when reverting a replication job. When configure, the target volume is writable during the revert process, allowing changes made to the target volume during the revert process to be replicated to the source volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job#action SynciqReplicationJob#action}
  */
  readonly action: string;
  /**
  * ID/Name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job#id SynciqReplicationJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * change job state to running or paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job#is_paused SynciqReplicationJob#is_paused}
  */
  readonly isPaused?: boolean | cdktf.IResolvable;
  /**
  * Wait Time for the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job#wait_time SynciqReplicationJob#wait_time}
  */
  readonly waitTime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job powerscale_synciq_replication_job}
*/
export class SynciqReplicationJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_synciq_replication_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynciqReplicationJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynciqReplicationJob to import
  * @param importFromId The id of the existing SynciqReplicationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynciqReplicationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_synciq_replication_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_replication_job powerscale_synciq_replication_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynciqReplicationJobConfig
  */
  public constructor(scope: Construct, id: string, config: SynciqReplicationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_synciq_replication_job',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
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
    this._action = config.action;
    this._id = config.id;
    this._isPaused = config.isPaused;
    this._waitTime = config.waitTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_paused - computed: true, optional: true, required: false
  private _isPaused?: boolean | cdktf.IResolvable; 
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }
  public set isPaused(value: boolean | cdktf.IResolvable) {
    this._isPaused = value;
  }
  public resetIsPaused() {
    this._isPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPausedInput() {
    return this._isPaused;
  }

  // wait_time - computed: true, optional: true, required: false
  private _waitTime?: number; 
  public get waitTime() {
    return this.getNumberAttribute('wait_time');
  }
  public set waitTime(value: number) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      is_paused: cdktf.booleanToTerraform(this._isPaused),
      wait_time: cdktf.numberToTerraform(this._waitTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      is_paused: {
        value: cdktf.booleanToHclTerraform(this._isPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_time: {
        value: cdktf.numberToHclTerraform(this._waitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
