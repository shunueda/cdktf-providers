// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaauserIntranetip6BindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding#gotopriorityexpression AaauserIntranetip6Binding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding#id AaauserIntranetip6Binding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding#intranetip6 AaauserIntranetip6Binding#intranetip6}
  */
  readonly intranetip6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding#numaddr AaauserIntranetip6Binding#numaddr}
  */
  readonly numaddr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding#username AaauserIntranetip6Binding#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding citrixadc_aaauser_intranetip6_binding}
*/
export class AaauserIntranetip6Binding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaauser_intranetip6_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaauserIntranetip6Binding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaauserIntranetip6Binding to import
  * @param importFromId The id of the existing AaauserIntranetip6Binding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaauserIntranetip6Binding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaauser_intranetip6_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaauser_intranetip6_binding citrixadc_aaauser_intranetip6_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaauserIntranetip6BindingConfig
  */
  public constructor(scope: Construct, id: string, config: AaauserIntranetip6BindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaauser_intranetip6_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._intranetip6 = config.intranetip6;
    this._numaddr = config.numaddr;
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

  // intranetip6 - computed: false, optional: false, required: true
  private _intranetip6?: string; 
  public get intranetip6() {
    return this.getStringAttribute('intranetip6');
  }
  public set intranetip6(value: string) {
    this._intranetip6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetip6Input() {
    return this._intranetip6;
  }

  // numaddr - computed: true, optional: true, required: false
  private _numaddr?: number; 
  public get numaddr() {
    return this.getNumberAttribute('numaddr');
  }
  public set numaddr(value: number) {
    this._numaddr = value;
  }
  public resetNumaddr() {
    this._numaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaddrInput() {
    return this._numaddr;
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
      intranetip6: cdktf.stringToTerraform(this._intranetip6),
      numaddr: cdktf.numberToTerraform(this._numaddr),
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
      intranetip6: {
        value: cdktf.stringToHclTerraform(this._intranetip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numaddr: {
        value: cdktf.numberToHclTerraform(this._numaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
