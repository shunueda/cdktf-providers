// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallipmacbindingSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting#bindthroughfw FirewallipmacbindingSetting#bindthroughfw}
  */
  readonly bindthroughfw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting#bindtofw FirewallipmacbindingSetting#bindtofw}
  */
  readonly bindtofw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting#id FirewallipmacbindingSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting#undefinedhost FirewallipmacbindingSetting#undefinedhost}
  */
  readonly undefinedhost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting#vdomparam FirewallipmacbindingSetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting fortios_firewallipmacbinding_setting}
*/
export class FirewallipmacbindingSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallipmacbinding_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallipmacbindingSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallipmacbindingSetting to import
  * @param importFromId The id of the existing FirewallipmacbindingSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallipmacbindingSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallipmacbinding_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallipmacbinding_setting fortios_firewallipmacbinding_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallipmacbindingSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallipmacbindingSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallipmacbinding_setting',
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
    this._bindthroughfw = config.bindthroughfw;
    this._bindtofw = config.bindtofw;
    this._id = config.id;
    this._undefinedhost = config.undefinedhost;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindthroughfw - computed: true, optional: true, required: false
  private _bindthroughfw?: string; 
  public get bindthroughfw() {
    return this.getStringAttribute('bindthroughfw');
  }
  public set bindthroughfw(value: string) {
    this._bindthroughfw = value;
  }
  public resetBindthroughfw() {
    this._bindthroughfw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindthroughfwInput() {
    return this._bindthroughfw;
  }

  // bindtofw - computed: true, optional: true, required: false
  private _bindtofw?: string; 
  public get bindtofw() {
    return this.getStringAttribute('bindtofw');
  }
  public set bindtofw(value: string) {
    this._bindtofw = value;
  }
  public resetBindtofw() {
    this._bindtofw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindtofwInput() {
    return this._bindtofw;
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

  // undefinedhost - computed: true, optional: true, required: false
  private _undefinedhost?: string; 
  public get undefinedhost() {
    return this.getStringAttribute('undefinedhost');
  }
  public set undefinedhost(value: string) {
    this._undefinedhost = value;
  }
  public resetUndefinedhost() {
    this._undefinedhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedhostInput() {
    return this._undefinedhost;
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
      bindthroughfw: cdktf.stringToTerraform(this._bindthroughfw),
      bindtofw: cdktf.stringToTerraform(this._bindtofw),
      id: cdktf.stringToTerraform(this._id),
      undefinedhost: cdktf.stringToTerraform(this._undefinedhost),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bindthroughfw: {
        value: cdktf.stringToHclTerraform(this._bindthroughfw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindtofw: {
        value: cdktf.stringToHclTerraform(this._bindtofw),
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
      undefinedhost: {
        value: cdktf.stringToHclTerraform(this._undefinedhost),
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
