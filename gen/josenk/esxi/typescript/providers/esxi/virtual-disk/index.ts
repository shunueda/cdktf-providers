// https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk#id VirtualDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disk dir.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk#virtual_disk_dir VirtualDisk#virtual_disk_dir}
  */
  readonly virtualDiskDir: string;
  /**
  * Disk Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk#virtual_disk_disk_store VirtualDisk#virtual_disk_disk_store}
  */
  readonly virtualDiskDiskStore: string;
  /**
  * Virtual Disk Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk#virtual_disk_name VirtualDisk#virtual_disk_name}
  */
  readonly virtualDiskName?: string;
  /**
  * Virtual Disk size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk#virtual_disk_size VirtualDisk#virtual_disk_size}
  */
  readonly virtualDiskSize?: number;
  /**
  * Virtual Disk type.  (thin, zeroedthick or eagerzeroedthick)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk#virtual_disk_type VirtualDisk#virtual_disk_type}
  */
  readonly virtualDiskType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk esxi_virtual_disk}
*/
export class VirtualDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "esxi_virtual_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualDisk to import
  * @param importFromId The id of the existing VirtualDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "esxi_virtual_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/virtual_disk esxi_virtual_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDiskConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'esxi_virtual_disk',
      terraformGeneratorMetadata: {
        providerName: 'esxi',
        providerVersion: '1.10.3',
        providerVersionConstraint: '1.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._virtualDiskDir = config.virtualDiskDir;
    this._virtualDiskDiskStore = config.virtualDiskDiskStore;
    this._virtualDiskName = config.virtualDiskName;
    this._virtualDiskSize = config.virtualDiskSize;
    this._virtualDiskType = config.virtualDiskType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // virtual_disk_dir - computed: false, optional: false, required: true
  private _virtualDiskDir?: string; 
  public get virtualDiskDir() {
    return this.getStringAttribute('virtual_disk_dir');
  }
  public set virtualDiskDir(value: string) {
    this._virtualDiskDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDiskDirInput() {
    return this._virtualDiskDir;
  }

  // virtual_disk_disk_store - computed: false, optional: false, required: true
  private _virtualDiskDiskStore?: string; 
  public get virtualDiskDiskStore() {
    return this.getStringAttribute('virtual_disk_disk_store');
  }
  public set virtualDiskDiskStore(value: string) {
    this._virtualDiskDiskStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDiskDiskStoreInput() {
    return this._virtualDiskDiskStore;
  }

  // virtual_disk_name - computed: true, optional: true, required: false
  private _virtualDiskName?: string; 
  public get virtualDiskName() {
    return this.getStringAttribute('virtual_disk_name');
  }
  public set virtualDiskName(value: string) {
    this._virtualDiskName = value;
  }
  public resetVirtualDiskName() {
    this._virtualDiskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDiskNameInput() {
    return this._virtualDiskName;
  }

  // virtual_disk_size - computed: true, optional: true, required: false
  private _virtualDiskSize?: number; 
  public get virtualDiskSize() {
    return this.getNumberAttribute('virtual_disk_size');
  }
  public set virtualDiskSize(value: number) {
    this._virtualDiskSize = value;
  }
  public resetVirtualDiskSize() {
    this._virtualDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDiskSizeInput() {
    return this._virtualDiskSize;
  }

  // virtual_disk_type - computed: false, optional: true, required: false
  private _virtualDiskType?: string; 
  public get virtualDiskType() {
    return this.getStringAttribute('virtual_disk_type');
  }
  public set virtualDiskType(value: string) {
    this._virtualDiskType = value;
  }
  public resetVirtualDiskType() {
    this._virtualDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDiskTypeInput() {
    return this._virtualDiskType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      virtual_disk_dir: cdktf.stringToTerraform(this._virtualDiskDir),
      virtual_disk_disk_store: cdktf.stringToTerraform(this._virtualDiskDiskStore),
      virtual_disk_name: cdktf.stringToTerraform(this._virtualDiskName),
      virtual_disk_size: cdktf.numberToTerraform(this._virtualDiskSize),
      virtual_disk_type: cdktf.stringToTerraform(this._virtualDiskType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_disk_dir: {
        value: cdktf.stringToHclTerraform(this._virtualDiskDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_disk_disk_store: {
        value: cdktf.stringToHclTerraform(this._virtualDiskDiskStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_disk_name: {
        value: cdktf.stringToHclTerraform(this._virtualDiskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_disk_size: {
        value: cdktf.numberToHclTerraform(this._virtualDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_disk_type: {
        value: cdktf.stringToHclTerraform(this._virtualDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
