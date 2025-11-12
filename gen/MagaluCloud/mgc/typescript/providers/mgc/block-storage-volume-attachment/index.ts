// https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/block_storage_volume_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockStorageVolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the block storage volume to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/block_storage_volume_attachment#block_storage_id BlockStorageVolumeAttachment#block_storage_id}
  */
  readonly blockStorageId: string;
  /**
  * The ID of the virtual machine to attach the volume to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/block_storage_volume_attachment#virtual_machine_id BlockStorageVolumeAttachment#virtual_machine_id}
  */
  readonly virtualMachineId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/block_storage_volume_attachment mgc_block_storage_volume_attachment}
*/
export class BlockStorageVolumeAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_block_storage_volume_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockStorageVolumeAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockStorageVolumeAttachment to import
  * @param importFromId The id of the existing BlockStorageVolumeAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/block_storage_volume_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockStorageVolumeAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_block_storage_volume_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/block_storage_volume_attachment mgc_block_storage_volume_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockStorageVolumeAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: BlockStorageVolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_block_storage_volume_attachment',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.0',
        providerVersionConstraint: '0.40.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockStorageId = config.blockStorageId;
    this._virtualMachineId = config.virtualMachineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_storage_id - computed: false, optional: false, required: true
  private _blockStorageId?: string; 
  public get blockStorageId() {
    return this.getStringAttribute('block_storage_id');
  }
  public set blockStorageId(value: string) {
    this._blockStorageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageIdInput() {
    return this._blockStorageId;
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_storage_id: cdktf.stringToTerraform(this._blockStorageId),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_storage_id: {
        value: cdktf.stringToHclTerraform(this._blockStorageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_machine_id: {
        value: cdktf.stringToHclTerraform(this._virtualMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
