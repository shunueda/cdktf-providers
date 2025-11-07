// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysProvisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use this option only when the level option is set to custom.F5 Networks recommends that you do not modify this option. The default value is none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#cpu_ratio SysProvision#cpu_ratio}
  */
  readonly cpuRatio?: number;
  /**
  * Use this option only when the level option is set to custom.F5 Networks recommends that you do not modify this option. The default value is none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#disk_ratio SysProvision#disk_ratio}
  */
  readonly diskRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#full_path SysProvision#full_path}
  */
  readonly fullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#id SysProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sets the provisioning level for the requested modules. Changing the level for one module may require modifying the level of another module. For example, changing one module to dedicated requires setting all others to none. Setting the level of a module to none means the module is not activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#level SysProvision#level}
  */
  readonly level?: string;
  /**
  * Use this option only when the level option is set to custom.F5 Networks recommends that you do not modify this option. The default value is none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#memory_ratio SysProvision#memory_ratio}
  */
  readonly memoryRatio?: number;
  /**
  * Name of module to provision in BIG-IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#name SysProvision#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision bigip_sys_provision}
*/
export class SysProvision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_sys_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysProvision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysProvision to import
  * @param importFromId The id of the existing SysProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_sys_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_provision bigip_sys_provision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysProvisionConfig
  */
  public constructor(scope: Construct, id: string, config: SysProvisionConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_sys_provision',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuRatio = config.cpuRatio;
    this._diskRatio = config.diskRatio;
    this._fullPath = config.fullPath;
    this._id = config.id;
    this._level = config.level;
    this._memoryRatio = config.memoryRatio;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_ratio - computed: false, optional: true, required: false
  private _cpuRatio?: number; 
  public get cpuRatio() {
    return this.getNumberAttribute('cpu_ratio');
  }
  public set cpuRatio(value: number) {
    this._cpuRatio = value;
  }
  public resetCpuRatio() {
    this._cpuRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRatioInput() {
    return this._cpuRatio;
  }

  // disk_ratio - computed: false, optional: true, required: false
  private _diskRatio?: number; 
  public get diskRatio() {
    return this.getNumberAttribute('disk_ratio');
  }
  public set diskRatio(value: number) {
    this._diskRatio = value;
  }
  public resetDiskRatio() {
    this._diskRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRatioInput() {
    return this._diskRatio;
  }

  // full_path - computed: true, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
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

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // memory_ratio - computed: false, optional: true, required: false
  private _memoryRatio?: number; 
  public get memoryRatio() {
    return this.getNumberAttribute('memory_ratio');
  }
  public set memoryRatio(value: number) {
    this._memoryRatio = value;
  }
  public resetMemoryRatio() {
    this._memoryRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRatioInput() {
    return this._memoryRatio;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_ratio: cdktf.numberToTerraform(this._cpuRatio),
      disk_ratio: cdktf.numberToTerraform(this._diskRatio),
      full_path: cdktf.stringToTerraform(this._fullPath),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      memory_ratio: cdktf.numberToTerraform(this._memoryRatio),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_ratio: {
        value: cdktf.numberToHclTerraform(this._cpuRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_ratio: {
        value: cdktf.numberToHclTerraform(this._diskRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_path: {
        value: cdktf.stringToHclTerraform(this._fullPath),
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
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_ratio: {
        value: cdktf.numberToHclTerraform(this._memoryRatio),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
