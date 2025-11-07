// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandGaiaApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * GAIA API command name or path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api#command_name ManagementCommandGaiaApi#command_name}
  */
  readonly commandName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api#id ManagementCommandGaiaApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Other input parameters for the request payload in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api#other_parameter ManagementCommandGaiaApi#other_parameter}
  */
  readonly otherParameter?: string;
  /**
  * Gateway object name or Gateway IP address or Gateway UID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api#target ManagementCommandGaiaApi#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api checkpoint_management_command_gaia_api}
*/
export class ManagementCommandGaiaApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_gaia_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandGaiaApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandGaiaApi to import
  * @param importFromId The id of the existing ManagementCommandGaiaApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandGaiaApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_gaia_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_gaia_api checkpoint_management_command_gaia_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandGaiaApiConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandGaiaApiConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_gaia_api',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandName = config.commandName;
    this._id = config.id;
    this._otherParameter = config.otherParameter;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_name - computed: false, optional: false, required: true
  private _commandName?: string; 
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
  public set commandName(value: string) {
    this._commandName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandNameInput() {
    return this._commandName;
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

  // other_parameter - computed: false, optional: true, required: false
  private _otherParameter?: string; 
  public get otherParameter() {
    return this.getStringAttribute('other_parameter');
  }
  public set otherParameter(value: string) {
    this._otherParameter = value;
  }
  public resetOtherParameter() {
    this._otherParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherParameterInput() {
    return this._otherParameter;
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_name: cdktf.stringToTerraform(this._commandName),
      id: cdktf.stringToTerraform(this._id),
      other_parameter: cdktf.stringToTerraform(this._otherParameter),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_name: {
        value: cdktf.stringToHclTerraform(this._commandName),
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
      other_parameter: {
        value: cdktf.stringToHclTerraform(this._otherParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
