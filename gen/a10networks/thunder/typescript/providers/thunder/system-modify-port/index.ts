// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_modify_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemModifyPortAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_modify_port#id SystemModifyPortA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_modify_port#port_index SystemModifyPortA#port_index}
  */
  readonly portIndex?: number;
  /**
  * port number to be configured (Specify port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_modify_port#port_number SystemModifyPortA#port_number}
  */
  readonly portNumber?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_modify_port thunder_system_modify_port}
*/
export class SystemModifyPortA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_modify_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemModifyPortA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemModifyPortA to import
  * @param importFromId The id of the existing SystemModifyPortA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_modify_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemModifyPortA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_modify_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_modify_port thunder_system_modify_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemModifyPortAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemModifyPortAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_modify_port',
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
    this._portIndex = config.portIndex;
    this._portNumber = config.portNumber;
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

  // port_index - computed: false, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }

  // port_number - computed: false, optional: true, required: false
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  public resetPortNumber() {
    this._portNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_index: cdktf.numberToTerraform(this._portIndex),
      port_number: cdktf.numberToTerraform(this._portNumber),
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
      port_index: {
        value: cdktf.numberToHclTerraform(this._portIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
