// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_delete
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AxdebugDeleteAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delete a capture file (Specify target filename to change)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_delete#capture_file AxdebugDeleteA#capture_file}
  */
  readonly captureFile?: string;
  /**
  * Delete AXDebug config file (Specify target filename to change)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_delete#config_file AxdebugDeleteA#config_file}
  */
  readonly configFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_delete#id AxdebugDeleteA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_delete thunder_axdebug_delete}
*/
export class AxdebugDeleteA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_axdebug_delete";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AxdebugDeleteA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AxdebugDeleteA to import
  * @param importFromId The id of the existing AxdebugDeleteA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_delete#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AxdebugDeleteA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_axdebug_delete", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug_delete thunder_axdebug_delete} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AxdebugDeleteAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AxdebugDeleteAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_axdebug_delete',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._captureFile = config.captureFile;
    this._configFile = config.configFile;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_file - computed: false, optional: true, required: false
  private _captureFile?: string; 
  public get captureFile() {
    return this.getStringAttribute('capture_file');
  }
  public set captureFile(value: string) {
    this._captureFile = value;
  }
  public resetCaptureFile() {
    this._captureFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureFileInput() {
    return this._captureFile;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_file: cdktf.stringToTerraform(this._captureFile),
      config_file: cdktf.stringToTerraform(this._configFile),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_file: {
        value: cdktf.stringToHclTerraform(this._captureFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file: {
        value: cdktf.stringToHclTerraform(this._configFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
