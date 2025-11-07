// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#comment Appfwpolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#id Appfwpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#logaction Appfwpolicy#logaction}
  */
  readonly logaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#name Appfwpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#newname Appfwpolicy#newname}
  */
  readonly newname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#profilename Appfwpolicy#profilename}
  */
  readonly profilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#rule Appfwpolicy#rule}
  */
  readonly rule: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy citrixadc_appfwpolicy}
*/
export class Appfwpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwpolicy to import
  * @param importFromId The id of the existing Appfwpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicy citrixadc_appfwpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwpolicy',
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
    this._comment = config.comment;
    this._id = config.id;
    this._logaction = config.logaction;
    this._name = config.name;
    this._newname = config.newname;
    this._profilename = config.profilename;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // logaction - computed: true, optional: true, required: false
  private _logaction?: string; 
  public get logaction() {
    return this.getStringAttribute('logaction');
  }
  public set logaction(value: string) {
    this._logaction = value;
  }
  public resetLogaction() {
    this._logaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logactionInput() {
    return this._logaction;
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

  // newname - computed: true, optional: true, required: false
  private _newname?: string; 
  public get newname() {
    return this.getStringAttribute('newname');
  }
  public set newname(value: string) {
    this._newname = value;
  }
  public resetNewname() {
    this._newname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newnameInput() {
    return this._newname;
  }

  // profilename - computed: false, optional: false, required: true
  private _profilename?: string; 
  public get profilename() {
    return this.getStringAttribute('profilename');
  }
  public set profilename(value: string) {
    this._profilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilenameInput() {
    return this._profilename;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      logaction: cdktf.stringToTerraform(this._logaction),
      name: cdktf.stringToTerraform(this._name),
      newname: cdktf.stringToTerraform(this._newname),
      profilename: cdktf.stringToTerraform(this._profilename),
      rule: cdktf.stringToTerraform(this._rule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      logaction: {
        value: cdktf.stringToHclTerraform(this._logaction),
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
      newname: {
        value: cdktf.stringToHclTerraform(this._newname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profilename: {
        value: cdktf.stringToHclTerraform(this._profilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
