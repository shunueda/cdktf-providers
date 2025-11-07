// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairsSigningKeyRotationSettingsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Buffer days before key pair expiration for activation of the new key pair. Must be less than or equal to `creation_buffer_days`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#activation_buffer_days KeypairsSigningKeyRotationSettingsA#activation_buffer_days}
  */
  readonly activationBufferDays: number;
  /**
  * Buffer days before key pair expiration for creation of a new key pair. Must be greater than or equal to `activation_buffer_days`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#creation_buffer_days KeypairsSigningKeyRotationSettingsA#creation_buffer_days}
  */
  readonly creationBufferDays: number;
  /**
  * Key algorithm to be used while creating a new key pair. If this property is unset, the key algorithm of the original key pair will be used. Supported algorithms are available through the /keyPairs/keyAlgorithms endpoint. Typically supported values are `RSA` and `EC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#key_algorithm KeypairsSigningKeyRotationSettingsA#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * ID of the key pair to retrieve its rotation settings. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#key_pair_id KeypairsSigningKeyRotationSettingsA#key_pair_id}
  */
  readonly keyPairId: string;
  /**
  * Key size, in bits. If this property is unset, the key size of the original key pair will be used. Supported key sizes are available through the /keyPairs/keyAlgorithms endpoint. Typically supported values are `256`, `384`, and `521` for EC keys and `1024`, `2048`, and `4096` for RSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#key_size KeypairsSigningKeyRotationSettingsA#key_size}
  */
  readonly keySize?: number;
  /**
  * Required if the original key pair used SHA1 algorithm. If this property is unset, the default signature algorithm of the original key pair will be used. Supported signature algorithms are available through the /keyPairs/keyAlgorithms endpoint. Typically supported values are `SHA256withECDSA`, `SHA384withECDSA`, and `SHA512withECDSA` for EC keys, and `SHA256withRSA`, `SHA384withRSA`, and `SHA512withRSA` for RSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#signature_algorithm KeypairsSigningKeyRotationSettingsA#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Valid days for the new key pair to be created. If this property is unset, the validity days of the original key pair will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#valid_days KeypairsSigningKeyRotationSettingsA#valid_days}
  */
  readonly validDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings pingfederate_keypairs_signing_key_rotation_settings}
*/
export class KeypairsSigningKeyRotationSettingsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_keypairs_signing_key_rotation_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeypairsSigningKeyRotationSettingsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeypairsSigningKeyRotationSettingsA to import
  * @param importFromId The id of the existing KeypairsSigningKeyRotationSettingsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeypairsSigningKeyRotationSettingsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_keypairs_signing_key_rotation_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_signing_key_rotation_settings pingfederate_keypairs_signing_key_rotation_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairsSigningKeyRotationSettingsAConfig
  */
  public constructor(scope: Construct, id: string, config: KeypairsSigningKeyRotationSettingsAConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_keypairs_signing_key_rotation_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationBufferDays = config.activationBufferDays;
    this._creationBufferDays = config.creationBufferDays;
    this._keyAlgorithm = config.keyAlgorithm;
    this._keyPairId = config.keyPairId;
    this._keySize = config.keySize;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._validDays = config.validDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_buffer_days - computed: false, optional: false, required: true
  private _activationBufferDays?: number; 
  public get activationBufferDays() {
    return this.getNumberAttribute('activation_buffer_days');
  }
  public set activationBufferDays(value: number) {
    this._activationBufferDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activationBufferDaysInput() {
    return this._activationBufferDays;
  }

  // creation_buffer_days - computed: false, optional: false, required: true
  private _creationBufferDays?: number; 
  public get creationBufferDays() {
    return this.getNumberAttribute('creation_buffer_days');
  }
  public set creationBufferDays(value: number) {
    this._creationBufferDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationBufferDaysInput() {
    return this._creationBufferDays;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // key_pair_id - computed: false, optional: false, required: true
  private _keyPairId?: string; 
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }
  public set keyPairId(value: string) {
    this._keyPairId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // signature_algorithm - computed: true, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // valid_days - computed: true, optional: true, required: false
  private _validDays?: number; 
  public get validDays() {
    return this.getNumberAttribute('valid_days');
  }
  public set validDays(value: number) {
    this._validDays = value;
  }
  public resetValidDays() {
    this._validDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validDaysInput() {
    return this._validDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_buffer_days: cdktf.numberToTerraform(this._activationBufferDays),
      creation_buffer_days: cdktf.numberToTerraform(this._creationBufferDays),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      key_pair_id: cdktf.stringToTerraform(this._keyPairId),
      key_size: cdktf.numberToTerraform(this._keySize),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      valid_days: cdktf.numberToTerraform(this._validDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_buffer_days: {
        value: cdktf.numberToHclTerraform(this._activationBufferDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      creation_buffer_days: {
        value: cdktf.numberToHclTerraform(this._creationBufferDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_id: {
        value: cdktf.stringToHclTerraform(this._keyPairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_days: {
        value: cdktf.numberToHclTerraform(this._validDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
