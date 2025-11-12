// https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of device groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group#device_groups DeviceGroup#device_groups}
  */
  readonly deviceGroups?: string[];
  /**
  * A list of device names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group#device_names DeviceGroup#device_names}
  */
  readonly deviceNames?: string[];
  /**
  * An instance name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group#instance DeviceGroup#instance}
  */
  readonly instance?: string;
  /**
  * Device group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group#name DeviceGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group nso_device_group}
*/
export class DeviceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nso_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceGroup to import
  * @param importFromId The id of the existing DeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nso_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device_group nso_device_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nso_device_group',
      terraformGeneratorMetadata: {
        providerName: 'nso',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceGroups = config.deviceGroups;
    this._deviceNames = config.deviceNames;
    this._instance = config.instance;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups?: string[]; 
  public get deviceGroups() {
    return this.getListAttribute('device_groups');
  }
  public set deviceGroups(value: string[]) {
    this._deviceGroups = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups;
  }

  // device_names - computed: false, optional: true, required: false
  private _deviceNames?: string[]; 
  public get deviceNames() {
    return this.getListAttribute('device_names');
  }
  public set deviceNames(value: string[]) {
    this._deviceNames = value;
  }
  public resetDeviceNames() {
    this._deviceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNamesInput() {
    return this._deviceNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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
      device_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceGroups),
      device_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceNames),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
