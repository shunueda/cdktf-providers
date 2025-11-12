// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaacertparamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams#defaultauthenticationgroup Aaacertparams#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams#groupnamefield Aaacertparams#groupnamefield}
  */
  readonly groupnamefield?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams#id Aaacertparams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams#usernamefield Aaacertparams#usernamefield}
  */
  readonly usernamefield?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams citrixadc_aaacertparams}
*/
export class Aaacertparams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaacertparams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaacertparams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaacertparams to import
  * @param importFromId The id of the existing Aaacertparams that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaacertparams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaacertparams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaacertparams citrixadc_aaacertparams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaacertparamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaacertparamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaacertparams',
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
