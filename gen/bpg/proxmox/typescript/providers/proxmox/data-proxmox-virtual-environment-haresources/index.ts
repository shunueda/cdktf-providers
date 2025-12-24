// https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/data-sources/virtual_environment_haresources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentHaresourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of High Availability resources to fetch (`vm` or `ct`). All resources will be fetched if this option is unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/data-sources/virtual_environment_haresources#type DataProxmoxVirtualEnvironmentHaresources#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/data-sources/virtual_environment_haresources proxmox_virtual_environment_haresources}
*/
export class DataProxmoxVirtualEnvironmentHaresources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_haresources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentHaresources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentHaresources to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentHaresources that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/data-sources/virtual_environment_haresources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentHaresources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_haresources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/data-sources/virtual_environment_haresources proxmox_virtual_environment_haresources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentHaresourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentHaresourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_haresources',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.90.0',
        providerVersionConstraint: '0.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_ids - computed: true, optional: false, required: false
  public get resourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_ids'));
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
