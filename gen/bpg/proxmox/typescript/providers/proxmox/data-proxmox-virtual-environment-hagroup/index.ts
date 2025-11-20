// https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hagroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentHagroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the High Availability group to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hagroup#group DataProxmoxVirtualEnvironmentHagroup#group}
  */
  readonly group: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hagroup proxmox_virtual_environment_hagroup}
*/
export class DataProxmoxVirtualEnvironmentHagroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_hagroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentHagroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentHagroup to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentHagroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hagroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentHagroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_hagroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hagroup proxmox_virtual_environment_hagroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentHagroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentHagroupConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_hagroup',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.87.0',
        providerVersionConstraint: '0.87.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // no_failback - computed: true, optional: false, required: false
  public get noFailback() {
    return this.getBooleanAttribute('no_failback');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new cdktf.NumberMap(this, "nodes");
  public get nodes() {
    return this._nodes;
  }

  // restricted - computed: true, optional: false, required: false
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
