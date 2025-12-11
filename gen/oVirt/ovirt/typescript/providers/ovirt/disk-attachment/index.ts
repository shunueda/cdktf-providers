// https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines whether the disk is active in the virtual machine it is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment#active DiskAttachment#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the disk is bootable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment#bootable DiskAttachment#bootable}
  */
  readonly bootable?: boolean | cdktf.IResolvable;
  /**
  * ID of the disk to attach. This disk must either be shared or not yet attached to a different VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment#disk_id DiskAttachment#disk_id}
  */
  readonly diskId: string;
  /**
  * Type of interface to use for attaching disk. One of: `ide`, `sata`, `spapr_vscsi`, `virtio`, `virtio_scsi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment#disk_interface DiskAttachment#disk_interface}
  */
  readonly diskInterface: string;
  /**
  * ID of the VM the disk should be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment#vm_id DiskAttachment#vm_id}
  */
  readonly vmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment ovirt_disk_attachment}
*/
export class DiskAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_disk_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskAttachment to import
  * @param importFromId The id of the existing DiskAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_disk_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.2.0/docs/resources/disk_attachment ovirt_disk_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DiskAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_disk_attachment',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.2.0',
        providerVersionConstraint: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._bootable = config.bootable;
    this._diskId = config.diskId;
    this._diskInterface = config.diskInterface;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // bootable - computed: false, optional: true, required: false
  private _bootable?: boolean | cdktf.IResolvable; 
  public get bootable() {
    return this.getBooleanAttribute('bootable');
  }
  public set bootable(value: boolean | cdktf.IResolvable) {
    this._bootable = value;
  }
  public resetBootable() {
    this._bootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootableInput() {
    return this._bootable;
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // disk_interface - computed: false, optional: false, required: true
  private _diskInterface?: string; 
  public get diskInterface() {
    return this.getStringAttribute('disk_interface');
  }
  public set diskInterface(value: string) {
    this._diskInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInterfaceInput() {
    return this._diskInterface;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      bootable: cdktf.booleanToTerraform(this._bootable),
      disk_id: cdktf.stringToTerraform(this._diskId),
      disk_interface: cdktf.stringToTerraform(this._diskInterface),
      vm_id: cdktf.stringToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootable: {
        value: cdktf.booleanToHclTerraform(this._bootable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_interface: {
        value: cdktf.stringToHclTerraform(this._diskInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
