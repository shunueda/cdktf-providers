// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaauserVpnintranetapplicationBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding#gotopriorityexpression AaauserVpnintranetapplicationBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding#id AaauserVpnintranetapplicationBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding#intranetapplication AaauserVpnintranetapplicationBinding#intranetapplication}
  */
  readonly intranetapplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding#username AaauserVpnintranetapplicationBinding#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding citrixadc_aaauser_vpnintranetapplication_binding}
*/
export class AaauserVpnintranetapplicationBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaauser_vpnintranetapplication_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaauserVpnintranetapplicationBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaauserVpnintranetapplicationBinding to import
  * @param importFromId The id of the existing AaauserVpnintranetapplicationBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaauserVpnintranetapplicationBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaauser_vpnintranetapplication_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaauser_vpnintranetapplication_binding citrixadc_aaauser_vpnintranetapplication_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaauserVpnintranetapplicationBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AaauserVpnintranetapplicationBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaauser_vpnintranetapplication_binding',
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
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._id = config.id;
    this._intranetapplication = config.intranetapplication;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
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

  // intranetapplication - computed: false, optional: false, required: true
  private _intranetapplication?: string; 
  public get intranetapplication() {
    return this.getStringAttribute('intranetapplication');
  }
  public set intranetapplication(value: string) {
    this._intranetapplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetapplicationInput() {
    return this._intranetapplication;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      id: cdktf.stringToTerraform(this._id),
      intranetapplication: cdktf.stringToTerraform(this._intranetapplication),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gotopriorityexpression: {
        value: cdktf.stringToHclTerraform(this._gotopriorityexpression),
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
      intranetapplication: {
        value: cdktf.stringToHclTerraform(this._intranetapplication),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
