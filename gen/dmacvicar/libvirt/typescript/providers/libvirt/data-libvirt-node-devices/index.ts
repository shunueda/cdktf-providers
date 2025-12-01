// https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLibvirtNodeDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter devices by capability type. Valid values include:
  * 
  *   - `system` - Host system information
  *   - `pci` - PCI devices
  *   - `usb_device` - USB devices
  *   - `usb` - USB host controllers
  *   - `net` - Network interfaces
  *   - `scsi_host` - SCSI host adapters
  *   - `scsi` - SCSI devices
  *   - `storage` - Storage devices
  *   - `drm` - DRM devices
  *   - `mdev` - Mediated devices
  *   - `ccw` - s390 CCW devices
  *   - `css` - s390 CSS devices
  *   - `ap_queue` - s390 AP queue devices
  *   - `ap_card` - s390 AP card devices
  *   - `ap_matrix` - s390 AP matrix devices
  *   - `ccw_group` - s390 CCW group devices
  * 
  * If not specified, all devices are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_devices#capability DataLibvirtNodeDevices#capability}
  */
  readonly capability?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_devices libvirt_node_devices}
*/
export class DataLibvirtNodeDevices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_node_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLibvirtNodeDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLibvirtNodeDevices to import
  * @param importFromId The id of the existing DataLibvirtNodeDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLibvirtNodeDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_node_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_devices libvirt_node_devices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLibvirtNodeDevicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLibvirtNodeDevicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'libvirt_node_devices',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capability = config.capability;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capability - computed: false, optional: true, required: false
  private _capability?: string; 
  public get capability() {
    return this.getStringAttribute('capability');
  }
  public set capability(value: string) {
    this._capability = value;
  }
  public resetCapability() {
    this._capability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability;
  }

  // devices - computed: true, optional: false, required: false
  public get devices() {
    return cdktf.Fn.tolist(this.getListAttribute('devices'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capability: cdktf.stringToTerraform(this._capability),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capability: {
        value: cdktf.stringToHclTerraform(this._capability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
