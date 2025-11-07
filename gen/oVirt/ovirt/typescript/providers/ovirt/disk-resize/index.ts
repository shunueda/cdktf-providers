// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_resize
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskResizeConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the disk to resize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_resize#disk_id DiskResize#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_resize#id DiskResize#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disk size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_resize#size DiskResize#size}
  */
  readonly size: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_resize ovirt_disk_resize}
*/
export class DiskResize extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_disk_resize";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskResize resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskResize to import
  * @param importFromId The id of the existing DiskResize that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_resize#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskResize to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_disk_resize", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_resize ovirt_disk_resize} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskResizeConfig
  */
  public constructor(scope: Construct, id: string, config: DiskResizeConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_disk_resize',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskId = config.diskId;
    this._id = config.id;
    this._size = config.size;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: cdktf.stringToTerraform(this._diskId),
      id: cdktf.stringToTerraform(this._id),
      size: cdktf.numberToTerraform(this._size),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
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
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
