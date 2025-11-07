// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NvmeHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of Paths Per Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host#max_num_paths NvmeHost#max_num_paths}
  */
  readonly maxNumPaths?: number;
  /**
  * Number of System Ports per Protection Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host#max_num_sys_ports NvmeHost#max_num_sys_ports}
  */
  readonly maxNumSysPorts?: number;
  /**
  * Name of the NVMe host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host#name NvmeHost#name}
  */
  readonly name?: string;
  /**
  * NQN of the NVMe host. This attribute must be set during creation and cannot be modified afterwards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host#nqn NvmeHost#nqn}
  */
  readonly nqn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host powerflex_nvme_host}
*/
export class NvmeHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_nvme_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NvmeHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NvmeHost to import
  * @param importFromId The id of the existing NvmeHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NvmeHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_nvme_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/nvme_host powerflex_nvme_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NvmeHostConfig
  */
  public constructor(scope: Construct, id: string, config: NvmeHostConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_nvme_host',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._maxNumPaths = config.maxNumPaths;
    this._maxNumSysPorts = config.maxNumSysPorts;
    this._name = config.name;
    this._nqn = config.nqn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_num_paths - computed: true, optional: true, required: false
  private _maxNumPaths?: number; 
  public get maxNumPaths() {
    return this.getNumberAttribute('max_num_paths');
  }
  public set maxNumPaths(value: number) {
    this._maxNumPaths = value;
  }
  public resetMaxNumPaths() {
    this._maxNumPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumPathsInput() {
    return this._maxNumPaths;
  }

  // max_num_sys_ports - computed: true, optional: true, required: false
  private _maxNumSysPorts?: number; 
  public get maxNumSysPorts() {
    return this.getNumberAttribute('max_num_sys_ports');
  }
  public set maxNumSysPorts(value: number) {
    this._maxNumSysPorts = value;
  }
  public resetMaxNumSysPorts() {
    this._maxNumSysPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumSysPortsInput() {
    return this._maxNumSysPorts;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nqn - computed: false, optional: false, required: true
  private _nqn?: string; 
  public get nqn() {
    return this.getStringAttribute('nqn');
  }
  public set nqn(value: string) {
    this._nqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nqnInput() {
    return this._nqn;
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_num_paths: cdktf.numberToTerraform(this._maxNumPaths),
      max_num_sys_ports: cdktf.numberToTerraform(this._maxNumSysPorts),
      name: cdktf.stringToTerraform(this._name),
      nqn: cdktf.stringToTerraform(this._nqn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_num_paths: {
        value: cdktf.numberToHclTerraform(this._maxNumPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_num_sys_ports: {
        value: cdktf.numberToHclTerraform(this._maxNumSysPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nqn: {
        value: cdktf.stringToHclTerraform(this._nqn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
