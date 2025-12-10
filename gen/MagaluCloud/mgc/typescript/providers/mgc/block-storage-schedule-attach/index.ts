// https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/block_storage_schedule_attach
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockStorageScheduleAttachConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the snapshot schedule to attach the volume to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/block_storage_schedule_attach#schedule_id BlockStorageScheduleAttach#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * The ID of the block storage volume to attach to the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/block_storage_schedule_attach#volume_id BlockStorageScheduleAttach#volume_id}
  */
  readonly volumeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/block_storage_schedule_attach mgc_block_storage_schedule_attach}
*/
export class BlockStorageScheduleAttach extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_block_storage_schedule_attach";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockStorageScheduleAttach resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockStorageScheduleAttach to import
  * @param importFromId The id of the existing BlockStorageScheduleAttach that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/block_storage_schedule_attach#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockStorageScheduleAttach to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_block_storage_schedule_attach", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/block_storage_schedule_attach mgc_block_storage_schedule_attach} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockStorageScheduleAttachConfig
  */
  public constructor(scope: Construct, id: string, config: BlockStorageScheduleAttachConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_block_storage_schedule_attach',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._scheduleId = config.scheduleId;
    this._volumeId = config.volumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // schedule_id - computed: false, optional: false, required: true
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      volume_id: cdktf.stringToTerraform(this._volumeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
