// https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultstarterInitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#id VaultstarterInit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies an array of PGP public keys used to encrypt the output unseal keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as secret_shares.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#pgp_keys VaultstarterInit#pgp_keys}
  */
  readonly pgpKeys?: string[];
  /**
  * Specifies an array of PGP public keys used to encrypt the output recovery keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as recovery_shares. This is only available when using Auto Unseal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#recovery_pgp_keys VaultstarterInit#recovery_pgp_keys}
  */
  readonly recoveryPgpKeys?: string[];
  /**
  * Specifies the number of shares to split the recovery key into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#recovery_shares VaultstarterInit#recovery_shares}
  */
  readonly recoveryShares?: number;
  /**
  * Specifies the number of shares required to reconstruct the recovery key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#recovery_threshold VaultstarterInit#recovery_threshold}
  */
  readonly recoveryThreshold?: number;
  /**
  * Specifies a PGP public key used to encrypt the initial root token. The key must be base64-encoded from its original binary representation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#root_token_pgp_key VaultstarterInit#root_token_pgp_key}
  */
  readonly rootTokenPgpKey?: string;
  /**
  * Specifies the number of shares to split the master key into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#secret_shares VaultstarterInit#secret_shares}
  */
  readonly secretShares?: number;
  /**
  * Specifies the number of shares required to reconstruct the master key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#secret_threshold VaultstarterInit#secret_threshold}
  */
  readonly secretThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init vaultstarter_init}
*/
export class VaultstarterInit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vaultstarter_init";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultstarterInit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultstarterInit to import
  * @param importFromId The id of the existing VaultstarterInit that should be imported. Refer to the {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultstarterInit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vaultstarter_init", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs/resources/vaultstarter_init vaultstarter_init} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultstarterInitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VaultstarterInitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vaultstarter_init',
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
    this._pgpKeys = config.pgpKeys;
    this._recoveryPgpKeys = config.recoveryPgpKeys;
    this._recoveryShares = config.recoveryShares;
    this._recoveryThreshold = config.recoveryThreshold;
    this._rootTokenPgpKey = config.rootTokenPgpKey;
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

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // keys_base64 - computed: true, optional: false, required: false
  public get keysBase64() {
    return this.getListAttribute('keys_base64');
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

  // recovery_keys - computed: true, optional: false, required: false
  public get recoveryKeys() {
    return this.getListAttribute('recovery_keys');
  }

  // recovery_keys_base64 - computed: true, optional: false, required: false
  public get recoveryKeysBase64() {
    return this.getListAttribute('recovery_keys_base64');
  }

  // recovery_pgp_keys - computed: false, optional: true, required: false
  private _recoveryPgpKeys?: string[]; 
  public get recoveryPgpKeys() {
    return this.getListAttribute('recovery_pgp_keys');
  }
  public set recoveryPgpKeys(value: string[]) {
    this._recoveryPgpKeys = value;
  }
  public resetRecoveryPgpKeys() {
    this._recoveryPgpKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPgpKeysInput() {
    return this._recoveryPgpKeys;
  }

  // recovery_shares - computed: false, optional: true, required: false
  private _recoveryShares?: number; 
  public get recoveryShares() {
    return this.getNumberAttribute('recovery_shares');
  }
  public set recoveryShares(value: number) {
    this._recoveryShares = value;
  }
  public resetRecoveryShares() {
    this._recoveryShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverySharesInput() {
    return this._recoveryShares;
  }

  // recovery_threshold - computed: false, optional: true, required: false
  private _recoveryThreshold?: number; 
  public get recoveryThreshold() {
    return this.getNumberAttribute('recovery_threshold');
  }
  public set recoveryThreshold(value: number) {
    this._recoveryThreshold = value;
  }
  public resetRecoveryThreshold() {
    this._recoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryThresholdInput() {
    return this._recoveryThreshold;
  }

  // root_token - computed: true, optional: false, required: false
  public get rootToken() {
    return this.getStringAttribute('root_token');
  }

  // root_token_pgp_key - computed: false, optional: true, required: false
  private _rootTokenPgpKey?: string; 
  public get rootTokenPgpKey() {
    return this.getStringAttribute('root_token_pgp_key');
  }
  public set rootTokenPgpKey(value: string) {
    this._rootTokenPgpKey = value;
  }
  public resetRootTokenPgpKey() {
    this._rootTokenPgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootTokenPgpKeyInput() {
    return this._rootTokenPgpKey;
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
      pgp_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pgpKeys),
      recovery_pgp_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recoveryPgpKeys),
      recovery_shares: cdktf.numberToTerraform(this._recoveryShares),
      recovery_threshold: cdktf.numberToTerraform(this._recoveryThreshold),
      root_token_pgp_key: cdktf.stringToTerraform(this._rootTokenPgpKey),
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
      pgp_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pgpKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recovery_pgp_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recoveryPgpKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      recovery_shares: {
        value: cdktf.numberToHclTerraform(this._recoveryShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_threshold: {
        value: cdktf.numberToHclTerraform(this._recoveryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_token_pgp_key: {
        value: cdktf.stringToHclTerraform(this._rootTokenPgpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
