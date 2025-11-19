// https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/emailalias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailaliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/emailalias#emailalias Emailalias#emailalias}
  */
  readonly emailalias: string;
  /**
  * Email alias goto. Comma separated list of email destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/emailalias#goto Emailalias#goto}
  */
  readonly goto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/emailalias#id Emailalias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/emailalias glesys_emailalias}
*/
export class Emailalias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_emailalias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Emailalias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Emailalias to import
  * @param importFromId The id of the existing Emailalias that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/emailalias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Emailalias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_emailalias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/emailalias glesys_emailalias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailaliasConfig
  */
  public constructor(scope: Construct, id: string, config: EmailaliasConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_emailalias',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailalias = config.emailalias;
    this._goto = config.goto;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // emailalias - computed: false, optional: false, required: true
  private _emailalias?: string; 
  public get emailalias() {
    return this.getStringAttribute('emailalias');
  }
  public set emailalias(value: string) {
    this._emailalias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailaliasInput() {
    return this._emailalias;
  }

  // goto - computed: false, optional: false, required: true
  private _goto?: string; 
  public get goto() {
    return this.getStringAttribute('goto');
  }
  public set goto(value: string) {
    this._goto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gotoInput() {
    return this._goto;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      emailalias: cdktf.stringToTerraform(this._emailalias),
      goto: cdktf.stringToTerraform(this._goto),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      emailalias: {
        value: cdktf.stringToHclTerraform(this._emailalias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      goto: {
        value: cdktf.stringToHclTerraform(this._goto),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
