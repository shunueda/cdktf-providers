// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerautoconfigDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default#fgt_policy SwitchcontrollerautoconfigDefault#fgt_policy}
  */
  readonly fgtPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default#icl_policy SwitchcontrollerautoconfigDefault#icl_policy}
  */
  readonly iclPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default#id SwitchcontrollerautoconfigDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default#isl_policy SwitchcontrollerautoconfigDefault#isl_policy}
  */
  readonly islPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default#vdomparam SwitchcontrollerautoconfigDefault#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default fortios_switchcontrollerautoconfig_default}
*/
export class SwitchcontrollerautoconfigDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontrollerautoconfig_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerautoconfigDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerautoconfigDefault to import
  * @param importFromId The id of the existing SwitchcontrollerautoconfigDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerautoconfigDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontrollerautoconfig_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontrollerautoconfig_default fortios_switchcontrollerautoconfig_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerautoconfigDefaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerautoconfigDefaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontrollerautoconfig_default',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fgtPolicy = config.fgtPolicy;
    this._iclPolicy = config.iclPolicy;
    this._id = config.id;
    this._islPolicy = config.islPolicy;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fgt_policy - computed: true, optional: true, required: false
  private _fgtPolicy?: string; 
  public get fgtPolicy() {
    return this.getStringAttribute('fgt_policy');
  }
  public set fgtPolicy(value: string) {
    this._fgtPolicy = value;
  }
  public resetFgtPolicy() {
    this._fgtPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtPolicyInput() {
    return this._fgtPolicy;
  }

  // icl_policy - computed: true, optional: true, required: false
  private _iclPolicy?: string; 
  public get iclPolicy() {
    return this.getStringAttribute('icl_policy');
  }
  public set iclPolicy(value: string) {
    this._iclPolicy = value;
  }
  public resetIclPolicy() {
    this._iclPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iclPolicyInput() {
    return this._iclPolicy;
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

  // isl_policy - computed: true, optional: true, required: false
  private _islPolicy?: string; 
  public get islPolicy() {
    return this.getStringAttribute('isl_policy');
  }
  public set islPolicy(value: string) {
    this._islPolicy = value;
  }
  public resetIslPolicy() {
    this._islPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islPolicyInput() {
    return this._islPolicy;
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
      fgt_policy: cdktf.stringToTerraform(this._fgtPolicy),
      icl_policy: cdktf.stringToTerraform(this._iclPolicy),
      id: cdktf.stringToTerraform(this._id),
      isl_policy: cdktf.stringToTerraform(this._islPolicy),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fgt_policy: {
        value: cdktf.stringToHclTerraform(this._fgtPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icl_policy: {
        value: cdktf.stringToHclTerraform(this._iclPolicy),
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
      isl_policy: {
        value: cdktf.stringToHclTerraform(this._islPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
