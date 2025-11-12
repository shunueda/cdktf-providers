// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConsoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console#baudrate SystemConsole#baudrate}
  */
  readonly baudrate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console#hostname_display_length SystemConsole#hostname_display_length}
  */
  readonly hostnameDisplayLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console#id SystemConsole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console#login SystemConsole#login}
  */
  readonly login?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console#mode SystemConsole#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console#output SystemConsole#output}
  */
  readonly output?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console fortiswitch_system_console}
*/
export class SystemConsole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_console";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemConsole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemConsole to import
  * @param importFromId The id of the existing SystemConsole that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemConsole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_console", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_console fortiswitch_system_console} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConsoleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemConsoleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_console',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baudrate = config.baudrate;
    this._hostnameDisplayLength = config.hostnameDisplayLength;
    this._id = config.id;
    this._login = config.login;
    this._mode = config.mode;
    this._output = config.output;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baudrate - computed: true, optional: true, required: false
  private _baudrate?: string; 
  public get baudrate() {
    return this.getStringAttribute('baudrate');
  }
  public set baudrate(value: string) {
    this._baudrate = value;
  }
  public resetBaudrate() {
    this._baudrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baudrateInput() {
    return this._baudrate;
  }

  // hostname_display_length - computed: true, optional: true, required: false
  private _hostnameDisplayLength?: number; 
  public get hostnameDisplayLength() {
    return this.getNumberAttribute('hostname_display_length');
  }
  public set hostnameDisplayLength(value: number) {
    this._hostnameDisplayLength = value;
  }
  public resetHostnameDisplayLength() {
    this._hostnameDisplayLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameDisplayLengthInput() {
    return this._hostnameDisplayLength;
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

  // login - computed: true, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // output - computed: true, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baudrate: cdktf.stringToTerraform(this._baudrate),
      hostname_display_length: cdktf.numberToTerraform(this._hostnameDisplayLength),
      id: cdktf.stringToTerraform(this._id),
      login: cdktf.stringToTerraform(this._login),
      mode: cdktf.stringToTerraform(this._mode),
      output: cdktf.stringToTerraform(this._output),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baudrate: {
        value: cdktf.stringToHclTerraform(this._baudrate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_display_length: {
        value: cdktf.numberToHclTerraform(this._hostnameDisplayLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output: {
        value: cdktf.stringToHclTerraform(this._output),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
