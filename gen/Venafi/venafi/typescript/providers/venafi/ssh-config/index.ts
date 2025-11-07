// https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_config#id SshConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The certificate issuing template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_config#template SshConfig#template}
  */
  readonly template: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_config venafi_ssh_config}
*/
export class SshConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "venafi_ssh_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshConfig to import
  * @param importFromId The id of the existing SshConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "venafi_ssh_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_config venafi_ssh_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SshConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'venafi_ssh_config',
      terraformGeneratorMetadata: {
        providerName: 'venafi',
        providerVersion: '0.23.1'
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
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_public_key - computed: true, optional: false, required: false
  public get caPublicKey() {
    return this.getStringAttribute('ca_public_key');
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

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return this.getListAttribute('principals');
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template: cdktf.stringToTerraform(this._template),
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
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
