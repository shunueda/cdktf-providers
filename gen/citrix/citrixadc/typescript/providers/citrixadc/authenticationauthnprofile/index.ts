// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationauthnprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile#authenticationdomain Authenticationauthnprofile#authenticationdomain}
  */
  readonly authenticationdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile#authenticationhost Authenticationauthnprofile#authenticationhost}
  */
  readonly authenticationhost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile#authenticationlevel Authenticationauthnprofile#authenticationlevel}
  */
  readonly authenticationlevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile#authnvsname Authenticationauthnprofile#authnvsname}
  */
  readonly authnvsname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile#id Authenticationauthnprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile#name Authenticationauthnprofile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile citrixadc_authenticationauthnprofile}
*/
export class Authenticationauthnprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationauthnprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationauthnprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationauthnprofile to import
  * @param importFromId The id of the existing Authenticationauthnprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationauthnprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationauthnprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationauthnprofile citrixadc_authenticationauthnprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationauthnprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationauthnprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationauthnprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationdomain = config.authenticationdomain;
    this._authenticationhost = config.authenticationhost;
    this._authenticationlevel = config.authenticationlevel;
    this._authnvsname = config.authnvsname;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticationdomain - computed: true, optional: true, required: false
  private _authenticationdomain?: string; 
  public get authenticationdomain() {
    return this.getStringAttribute('authenticationdomain');
  }
  public set authenticationdomain(value: string) {
    this._authenticationdomain = value;
  }
  public resetAuthenticationdomain() {
    this._authenticationdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationdomainInput() {
    return this._authenticationdomain;
  }

  // authenticationhost - computed: true, optional: true, required: false
  private _authenticationhost?: string; 
  public get authenticationhost() {
    return this.getStringAttribute('authenticationhost');
  }
  public set authenticationhost(value: string) {
    this._authenticationhost = value;
  }
  public resetAuthenticationhost() {
    this._authenticationhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationhostInput() {
    return this._authenticationhost;
  }

  // authenticationlevel - computed: true, optional: true, required: false
  private _authenticationlevel?: number; 
  public get authenticationlevel() {
    return this.getNumberAttribute('authenticationlevel');
  }
  public set authenticationlevel(value: number) {
    this._authenticationlevel = value;
  }
  public resetAuthenticationlevel() {
    this._authenticationlevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationlevelInput() {
    return this._authenticationlevel;
  }

  // authnvsname - computed: false, optional: false, required: true
  private _authnvsname?: string; 
  public get authnvsname() {
    return this.getStringAttribute('authnvsname');
  }
  public set authnvsname(value: string) {
    this._authnvsname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authnvsnameInput() {
    return this._authnvsname;
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
      authenticationdomain: cdktf.stringToTerraform(this._authenticationdomain),
      authenticationhost: cdktf.stringToTerraform(this._authenticationhost),
      authenticationlevel: cdktf.numberToTerraform(this._authenticationlevel),
      authnvsname: cdktf.stringToTerraform(this._authnvsname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticationdomain: {
        value: cdktf.stringToHclTerraform(this._authenticationdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticationhost: {
        value: cdktf.stringToHclTerraform(this._authenticationhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticationlevel: {
        value: cdktf.numberToHclTerraform(this._authenticationlevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authnvsname: {
        value: cdktf.stringToHclTerraform(this._authnvsname),
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
