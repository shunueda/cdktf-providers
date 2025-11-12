// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationcertactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction#defaultauthenticationgroup Authenticationcertaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction#groupnamefield Authenticationcertaction#groupnamefield}
  */
  readonly groupnamefield?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction#id Authenticationcertaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction#name Authenticationcertaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction#twofactor Authenticationcertaction#twofactor}
  */
  readonly twofactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction#usernamefield Authenticationcertaction#usernamefield}
  */
  readonly usernamefield?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction citrixadc_authenticationcertaction}
*/
export class Authenticationcertaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationcertaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationcertaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationcertaction to import
  * @param importFromId The id of the existing Authenticationcertaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationcertaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationcertaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationcertaction citrixadc_authenticationcertaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationcertactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationcertactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationcertaction',
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
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._groupnamefield = config.groupnamefield;
    this._id = config.id;
    this._name = config.name;
    this._twofactor = config.twofactor;
    this._usernamefield = config.usernamefield;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaultauthenticationgroup - computed: true, optional: true, required: false
  private _defaultauthenticationgroup?: string; 
  public get defaultauthenticationgroup() {
    return this.getStringAttribute('defaultauthenticationgroup');
  }
  public set defaultauthenticationgroup(value: string) {
    this._defaultauthenticationgroup = value;
  }
  public resetDefaultauthenticationgroup() {
    this._defaultauthenticationgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthenticationgroupInput() {
    return this._defaultauthenticationgroup;
  }

  // groupnamefield - computed: true, optional: true, required: false
  private _groupnamefield?: string; 
  public get groupnamefield() {
    return this.getStringAttribute('groupnamefield');
  }
  public set groupnamefield(value: string) {
    this._groupnamefield = value;
  }
  public resetGroupnamefield() {
    this._groupnamefield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnamefieldInput() {
    return this._groupnamefield;
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

  // twofactor - computed: true, optional: true, required: false
  private _twofactor?: string; 
  public get twofactor() {
    return this.getStringAttribute('twofactor');
  }
  public set twofactor(value: string) {
    this._twofactor = value;
  }
  public resetTwofactor() {
    this._twofactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twofactorInput() {
    return this._twofactor;
  }

  // usernamefield - computed: true, optional: true, required: false
  private _usernamefield?: string; 
  public get usernamefield() {
    return this.getStringAttribute('usernamefield');
  }
  public set usernamefield(value: string) {
    this._usernamefield = value;
  }
  public resetUsernamefield() {
    this._usernamefield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamefieldInput() {
    return this._usernamefield;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      groupnamefield: cdktf.stringToTerraform(this._groupnamefield),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      twofactor: cdktf.stringToTerraform(this._twofactor),
      usernamefield: cdktf.stringToTerraform(this._usernamefield),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupnamefield: {
        value: cdktf.stringToHclTerraform(this._groupnamefield),
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
      twofactor: {
        value: cdktf.stringToHclTerraform(this._twofactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usernamefield: {
        value: cdktf.stringToHclTerraform(this._usernamefield),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
