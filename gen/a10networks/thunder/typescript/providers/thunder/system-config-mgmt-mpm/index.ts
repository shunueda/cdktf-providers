// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfigMgmtMpmAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm#id SystemConfigMgmtMpmA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set max workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm#max_workers SystemConfigMgmtMpmA#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Set minimum idle workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm#min_idle_workers SystemConfigMgmtMpmA#min_idle_workers}
  */
  readonly minIdleWorkers?: number;
  /**
  * Set starting workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm#start_workers SystemConfigMgmtMpmA#start_workers}
  */
  readonly startWorkers?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm#uuid SystemConfigMgmtMpmA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm thunder_system_config_mgmt_mpm}
*/
export class SystemConfigMgmtMpmA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_config_mgmt_mpm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemConfigMgmtMpmA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemConfigMgmtMpmA to import
  * @param importFromId The id of the existing SystemConfigMgmtMpmA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemConfigMgmtMpmA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_config_mgmt_mpm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt_mpm thunder_system_config_mgmt_mpm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfigMgmtMpmAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemConfigMgmtMpmAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_config_mgmt_mpm',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._maxWorkers = config.maxWorkers;
    this._minIdleWorkers = config.minIdleWorkers;
    this._startWorkers = config.startWorkers;
    this._uuid = config.uuid;
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

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_idle_workers - computed: false, optional: true, required: false
  private _minIdleWorkers?: number; 
  public get minIdleWorkers() {
    return this.getNumberAttribute('min_idle_workers');
  }
  public set minIdleWorkers(value: number) {
    this._minIdleWorkers = value;
  }
  public resetMinIdleWorkers() {
    this._minIdleWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleWorkersInput() {
    return this._minIdleWorkers;
  }

  // start_workers - computed: false, optional: true, required: false
  private _startWorkers?: number; 
  public get startWorkers() {
    return this.getNumberAttribute('start_workers');
  }
  public set startWorkers(value: number) {
    this._startWorkers = value;
  }
  public resetStartWorkers() {
    this._startWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWorkersInput() {
    return this._startWorkers;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      min_idle_workers: cdktf.numberToTerraform(this._minIdleWorkers),
      start_workers: cdktf.numberToTerraform(this._startWorkers),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      max_workers: {
        value: cdktf.numberToHclTerraform(this._maxWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_idle_workers: {
        value: cdktf.numberToHclTerraform(this._minIdleWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_workers: {
        value: cdktf.numberToHclTerraform(this._startWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
