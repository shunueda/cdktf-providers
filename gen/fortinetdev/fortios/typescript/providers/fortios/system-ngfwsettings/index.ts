// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNgfwsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings#id SystemNgfwsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings#match_timeout SystemNgfwsettings#match_timeout}
  */
  readonly matchTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings#tcp_halfopen_match_timeout SystemNgfwsettings#tcp_halfopen_match_timeout}
  */
  readonly tcpHalfopenMatchTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings#tcp_match_timeout SystemNgfwsettings#tcp_match_timeout}
  */
  readonly tcpMatchTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings#vdomparam SystemNgfwsettings#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings fortios_system_ngfwsettings}
*/
export class SystemNgfwsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_ngfwsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNgfwsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNgfwsettings to import
  * @param importFromId The id of the existing SystemNgfwsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNgfwsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_ngfwsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ngfwsettings fortios_system_ngfwsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNgfwsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemNgfwsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_ngfwsettings',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._matchTimeout = config.matchTimeout;
    this._tcpHalfopenMatchTimeout = config.tcpHalfopenMatchTimeout;
    this._tcpMatchTimeout = config.tcpMatchTimeout;
    this._vdomparam = config.vdomparam;
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

  // match_timeout - computed: true, optional: true, required: false
  private _matchTimeout?: number; 
  public get matchTimeout() {
    return this.getNumberAttribute('match_timeout');
  }
  public set matchTimeout(value: number) {
    this._matchTimeout = value;
  }
  public resetMatchTimeout() {
    this._matchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTimeoutInput() {
    return this._matchTimeout;
  }

  // tcp_halfopen_match_timeout - computed: true, optional: true, required: false
  private _tcpHalfopenMatchTimeout?: number; 
  public get tcpHalfopenMatchTimeout() {
    return this.getNumberAttribute('tcp_halfopen_match_timeout');
  }
  public set tcpHalfopenMatchTimeout(value: number) {
    this._tcpHalfopenMatchTimeout = value;
  }
  public resetTcpHalfopenMatchTimeout() {
    this._tcpHalfopenMatchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfopenMatchTimeoutInput() {
    return this._tcpHalfopenMatchTimeout;
  }

  // tcp_match_timeout - computed: true, optional: true, required: false
  private _tcpMatchTimeout?: number; 
  public get tcpMatchTimeout() {
    return this.getNumberAttribute('tcp_match_timeout');
  }
  public set tcpMatchTimeout(value: number) {
    this._tcpMatchTimeout = value;
  }
  public resetTcpMatchTimeout() {
    this._tcpMatchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMatchTimeoutInput() {
    return this._tcpMatchTimeout;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      match_timeout: cdktf.numberToTerraform(this._matchTimeout),
      tcp_halfopen_match_timeout: cdktf.numberToTerraform(this._tcpHalfopenMatchTimeout),
      tcp_match_timeout: cdktf.numberToTerraform(this._tcpMatchTimeout),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      match_timeout: {
        value: cdktf.numberToHclTerraform(this._matchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_halfopen_match_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpHalfopenMatchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_match_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpMatchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
