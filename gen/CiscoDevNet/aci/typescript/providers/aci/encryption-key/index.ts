// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptionKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#annotation EncryptionKey#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#clear_encryption_key EncryptionKey#clear_encryption_key}
  */
  readonly clearEncryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#description EncryptionKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#id EncryptionKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#name_alias EncryptionKey#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#passphrase EncryptionKey#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#passphrase_key_derivation_version EncryptionKey#passphrase_key_derivation_version}
  */
  readonly passphraseKeyDerivationVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#strong_encryption_enabled EncryptionKey#strong_encryption_enabled}
  */
  readonly strongEncryptionEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key aci_encryption_key}
*/
export class EncryptionKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_encryption_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptionKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptionKey to import
  * @param importFromId The id of the existing EncryptionKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptionKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_encryption_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/encryption_key aci_encryption_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptionKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EncryptionKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_encryption_key',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._clearEncryptionKey = config.clearEncryptionKey;
    this._description = config.description;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._passphrase = config.passphrase;
    this._passphraseKeyDerivationVersion = config.passphraseKeyDerivationVersion;
    this._strongEncryptionEnabled = config.strongEncryptionEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // clear_encryption_key - computed: false, optional: true, required: false
  private _clearEncryptionKey?: string; 
  public get clearEncryptionKey() {
    return this.getStringAttribute('clear_encryption_key');
  }
  public set clearEncryptionKey(value: string) {
    this._clearEncryptionKey = value;
  }
  public resetClearEncryptionKey() {
    this._clearEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearEncryptionKeyInput() {
    return this._clearEncryptionKey;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // passphrase_key_derivation_version - computed: true, optional: true, required: false
  private _passphraseKeyDerivationVersion?: string; 
  public get passphraseKeyDerivationVersion() {
    return this.getStringAttribute('passphrase_key_derivation_version');
  }
  public set passphraseKeyDerivationVersion(value: string) {
    this._passphraseKeyDerivationVersion = value;
  }
  public resetPassphraseKeyDerivationVersion() {
    this._passphraseKeyDerivationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseKeyDerivationVersionInput() {
    return this._passphraseKeyDerivationVersion;
  }

  // strong_encryption_enabled - computed: true, optional: true, required: false
  private _strongEncryptionEnabled?: string; 
  public get strongEncryptionEnabled() {
    return this.getStringAttribute('strong_encryption_enabled');
  }
  public set strongEncryptionEnabled(value: string) {
    this._strongEncryptionEnabled = value;
  }
  public resetStrongEncryptionEnabled() {
    this._strongEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongEncryptionEnabledInput() {
    return this._strongEncryptionEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      clear_encryption_key: cdktf.stringToTerraform(this._clearEncryptionKey),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      passphrase_key_derivation_version: cdktf.stringToTerraform(this._passphraseKeyDerivationVersion),
      strong_encryption_enabled: cdktf.stringToTerraform(this._strongEncryptionEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_encryption_key: {
        value: cdktf.stringToHclTerraform(this._clearEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase_key_derivation_version: {
        value: cdktf.stringToHclTerraform(this._passphraseKeyDerivationVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strong_encryption_enabled: {
        value: cdktf.stringToHclTerraform(this._strongEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
