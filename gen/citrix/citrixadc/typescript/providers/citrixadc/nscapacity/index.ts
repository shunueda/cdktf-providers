// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NscapacityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#bandwidth Nscapacity#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#edition Nscapacity#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#id Nscapacity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#nodeid Nscapacity#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#password Nscapacity#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#platform Nscapacity#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#unit Nscapacity#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#username Nscapacity#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#vcpu Nscapacity#vcpu}
  */
  readonly vcpu?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity citrixadc_nscapacity}
*/
export class Nscapacity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nscapacity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nscapacity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nscapacity to import
  * @param importFromId The id of the existing Nscapacity that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nscapacity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nscapacity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nscapacity citrixadc_nscapacity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NscapacityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NscapacityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nscapacity',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._edition = config.edition;
    this._id = config.id;
    this._nodeid = config.nodeid;
    this._password = config.password;
    this._platform = config.platform;
    this._unit = config.unit;
    this._username = config.username;
    this._vcpu = config.vcpu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // edition - computed: true, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
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

  // nodeid - computed: true, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcpu - computed: true, optional: true, required: false
  private _vcpu?: boolean | cdktf.IResolvable; 
  public get vcpu() {
    return this.getBooleanAttribute('vcpu');
  }
  public set vcpu(value: boolean | cdktf.IResolvable) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      edition: cdktf.stringToTerraform(this._edition),
      id: cdktf.stringToTerraform(this._id),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      password: cdktf.stringToTerraform(this._password),
      platform: cdktf.stringToTerraform(this._platform),
      unit: cdktf.stringToTerraform(this._unit),
      username: cdktf.stringToTerraform(this._username),
      vcpu: cdktf.booleanToTerraform(this._vcpu),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
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
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpu: {
        value: cdktf.booleanToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
