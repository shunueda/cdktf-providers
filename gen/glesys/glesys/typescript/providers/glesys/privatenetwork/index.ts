// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatenetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork#id Privatenetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PrivateNetwork name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork#name Privatenetwork#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork glesys_privatenetwork}
*/
export class Privatenetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_privatenetwork";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Privatenetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Privatenetwork to import
  * @param importFromId The id of the existing Privatenetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Privatenetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_privatenetwork", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork glesys_privatenetwork} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatenetworkConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatenetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_privatenetwork',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv6aggregate - computed: true, optional: false, required: false
  public get ipv6Aggregate() {
    return this.getStringAttribute('ipv6aggregate');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
