// https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultstarterUnsealConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal#id VaultstarterUnseal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unseal keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal#keys VaultstarterUnseal#keys}
  */
  readonly keys: string[];
  /**
  * Specifies an array of PGP public keys passphrase used to decript the unseal keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as secret_shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal#passphrase VaultstarterUnseal#passphrase}
  */
  readonly passphrase?: string[];
  /**
  * Specifies an array of PGP public keys used to decript the unseal keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as secret_shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal#pgp_keys VaultstarterUnseal#pgp_keys}
  */
  readonly pgpKeys?: string[];
  /**
  * Specifies the number of shares the master key was split  into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal#secret_shares VaultstarterUnseal#secret_shares}
  */
  readonly secretShares?: number;
  /**
  * Specifies the number of shares required to reconstruct the master key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal#secret_threshold VaultstarterUnseal#secret_threshold}
  */
  readonly secretThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal vaultstarter_unseal}
*/
export class VaultstarterUnseal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vaultstarter_unseal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultstarterUnseal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultstarterUnseal to import
  * @param importFromId The id of the existing VaultstarterUnseal that should be imported. Refer to the {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultstarterUnseal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vaultstarter_unseal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_unseal vaultstarter_unseal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultstarterUnsealConfig
  */
  public constructor(scope: Construct, id: string, config: VaultstarterUnsealConfig) {
    super(scope, id, {
      terraformResourceType: 'vaultstarter_unseal',
      terraformGeneratorMetadata: {
        providerName: 'vault-starter',
        providerVersion: '0.2.4',
        providerVersionConstraint: '0.2.4'
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
    this._keys = config.keys;
    this._passphrase = config.passphrase;
    this._pgpKeys = config.pgpKeys;
    this._secretShares = config.secretShares;
    this._secretThreshold = config.secretThreshold;
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

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string[]; 
  public get passphrase() {
    return this.getListAttribute('passphrase');
  }
  public set passphrase(value: string[]) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // pgp_keys - computed: false, optional: true, required: false
  private _pgpKeys?: string[]; 
  public get pgpKeys() {
    return this.getListAttribute('pgp_keys');
  }
  public set pgpKeys(value: string[]) {
    this._pgpKeys = value;
  }
  public resetPgpKeys() {
    this._pgpKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeysInput() {
    return this._pgpKeys;
  }

  // secret_shares - computed: false, optional: true, required: false
  private _secretShares?: number; 
  public get secretShares() {
    return this.getNumberAttribute('secret_shares');
  }
  public set secretShares(value: number) {
    this._secretShares = value;
  }
  public resetSecretShares() {
    this._secretShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretSharesInput() {
    return this._secretShares;
  }

  // secret_threshold - computed: false, optional: true, required: false
  private _secretThreshold?: number; 
  public get secretThreshold() {
    return this.getNumberAttribute('secret_threshold');
  }
  public set secretThreshold(value: number) {
    this._secretThreshold = value;
  }
  public resetSecretThreshold() {
    this._secretThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretThresholdInput() {
    return this._secretThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keys),
      passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passphrase),
      pgp_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pgpKeys),
      secret_shares: cdktf.numberToTerraform(this._secretShares),
      secret_threshold: cdktf.numberToTerraform(this._secretThreshold),
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
      keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      passphrase: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passphrase),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pgp_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pgpKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secret_shares: {
        value: cdktf.numberToHclTerraform(this._secretShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_threshold: {
        value: cdktf.numberToHclTerraform(this._secretThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
