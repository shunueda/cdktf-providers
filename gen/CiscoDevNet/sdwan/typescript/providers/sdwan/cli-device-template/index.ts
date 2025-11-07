// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CliDeviceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * CLI configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template#cli_configuration CliDeviceTemplate#cli_configuration}
  */
  readonly cliConfiguration: string;
  /**
  * CLI type
  *   - Choices: `device`, `intend`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template#cli_type CliDeviceTemplate#cli_type}
  */
  readonly cliType: string;
  /**
  * The description of the device template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template#description CliDeviceTemplate#description}
  */
  readonly description: string;
  /**
  * The device type (e.g., `vedge-ISR-4331`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template#device_type CliDeviceTemplate#device_type}
  */
  readonly deviceType: string;
  /**
  * The name of the device template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template#name CliDeviceTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template sdwan_cli_device_template}
*/
export class CliDeviceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cli_device_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CliDeviceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CliDeviceTemplate to import
  * @param importFromId The id of the existing CliDeviceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CliDeviceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cli_device_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cli_device_template sdwan_cli_device_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CliDeviceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CliDeviceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cli_device_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cliConfiguration = config.cliConfiguration;
    this._cliType = config.cliType;
    this._description = config.description;
    this._deviceType = config.deviceType;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_configuration - computed: false, optional: false, required: true
  private _cliConfiguration?: string; 
  public get cliConfiguration() {
    return this.getStringAttribute('cli_configuration');
  }
  public set cliConfiguration(value: string) {
    this._cliConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConfigurationInput() {
    return this._cliConfiguration;
  }

  // cli_type - computed: false, optional: false, required: true
  private _cliType?: string; 
  public get cliType() {
    return this.getStringAttribute('cli_type');
  }
  public set cliType(value: string) {
    this._cliType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cliTypeInput() {
    return this._cliType;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_configuration: cdktf.stringToTerraform(this._cliConfiguration),
      cli_type: cdktf.stringToTerraform(this._cliType),
      description: cdktf.stringToTerraform(this._description),
      device_type: cdktf.stringToTerraform(this._deviceType),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_configuration: {
        value: cdktf.stringToHclTerraform(this._cliConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_type: {
        value: cdktf.stringToHclTerraform(this._cliType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
