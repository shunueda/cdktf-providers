// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/group_crypto_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupCryptoPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Fortanix DSM group object cryptographic policy definition as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/group_crypto_policy#cryptographic_policy GroupCryptoPolicy#cryptographic_policy}
  */
  readonly cryptographicPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/group_crypto_policy#id GroupCryptoPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Fortanix DSM group object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/group_crypto_policy#name GroupCryptoPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/group_crypto_policy dsm_group_crypto_policy}
*/
export class GroupCryptoPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_group_crypto_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupCryptoPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupCryptoPolicy to import
  * @param importFromId The id of the existing GroupCryptoPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/group_crypto_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupCryptoPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_group_crypto_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/group_crypto_policy dsm_group_crypto_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupCryptoPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GroupCryptoPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_group_crypto_policy',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cryptographicPolicy = config.cryptographicPolicy;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // approval_policy - computed: true, optional: false, required: false
  public get approvalPolicy() {
    return this.getStringAttribute('approval_policy');
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new cdktf.StringMap(this, "creator");
  public get creator() {
    return this._creator;
  }

  // cryptographic_policy - computed: false, optional: false, required: true
  private _cryptographicPolicy?: string; 
  public get cryptographicPolicy() {
    return this.getStringAttribute('cryptographic_policy');
  }
  public set cryptographicPolicy(value: string) {
    this._cryptographicPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptographicPolicyInput() {
    return this._cryptographicPolicy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
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
      cryptographic_policy: cdktf.stringToTerraform(this._cryptographicPolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cryptographic_policy: {
        value: cdktf.stringToHclTerraform(this._cryptographicPolicy),
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
