// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_crypto_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccCryptoPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Fortanix DSM account object id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_crypto_policy#acct_id AccCryptoPolicy#acct_id}
  */
  readonly acctId: string;
  /**
  * The Fortanix DSM account object cryptographic policy definition as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_crypto_policy#cryptographic_policy AccCryptoPolicy#cryptographic_policy}
  */
  readonly cryptographicPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_crypto_policy#id AccCryptoPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_crypto_policy dsm_acc_crypto_policy}
*/
export class AccCryptoPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_acc_crypto_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccCryptoPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccCryptoPolicy to import
  * @param importFromId The id of the existing AccCryptoPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_crypto_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccCryptoPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_acc_crypto_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/acc_crypto_policy dsm_acc_crypto_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccCryptoPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccCryptoPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_acc_crypto_policy',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36',
        providerVersionConstraint: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acctId = config.acctId;
    this._cryptographicPolicy = config.cryptographicPolicy;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: false, optional: false, required: true
  private _acctId?: string; 
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }
  public set acctId(value: string) {
    this._acctId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acctIdInput() {
    return this._acctId;
  }

  // approval_policy - computed: true, optional: false, required: false
  public get approvalPolicy() {
    return this.getStringAttribute('approval_policy');
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
      acct_id: cdktf.stringToTerraform(this._acctId),
      cryptographic_policy: cdktf.stringToTerraform(this._cryptographicPolicy),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acct_id: {
        value: cdktf.stringToHclTerraform(this._acctId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
