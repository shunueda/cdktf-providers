// https://registry.terraform.io/providers/viktorradnai/bcrypt/0.1.2/docs/resources/hash
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HashConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cleartext value to hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/viktorradnai/bcrypt/0.1.2/docs/resources/hash#cleartext Hash#cleartext}
  */
  readonly cleartext: string;
  /**
  * The cost parameter for the bcrypt algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/viktorradnai/bcrypt/0.1.2/docs/resources/hash#cost Hash#cost}
  */
  readonly cost?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/viktorradnai/bcrypt/0.1.2/docs/resources/hash bcrypt_hash}
*/
export class Hash extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bcrypt_hash";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hash resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hash to import
  * @param importFromId The id of the existing Hash that should be imported. Refer to the {@link https://registry.terraform.io/providers/viktorradnai/bcrypt/0.1.2/docs/resources/hash#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hash to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bcrypt_hash", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/viktorradnai/bcrypt/0.1.2/docs/resources/hash bcrypt_hash} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HashConfig
  */
  public constructor(scope: Construct, id: string, config: HashConfig) {
    super(scope, id, {
      terraformResourceType: 'bcrypt_hash',
      terraformGeneratorMetadata: {
        providerName: 'bcrypt',
        providerVersion: '0.1.2',
        providerVersionConstraint: '0.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleartext = config.cleartext;
    this._cost = config.cost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleartext - computed: false, optional: false, required: true
  private _cleartext?: string; 
  public get cleartext() {
    return this.getStringAttribute('cleartext');
  }
  public set cleartext(value: string) {
    this._cleartext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cleartext: cdktf.stringToTerraform(this._cleartext),
      cost: cdktf.numberToTerraform(this._cost),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cleartext: {
        value: cdktf.stringToHclTerraform(this._cleartext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
