// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HsmKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Key attributes. Options: CKA_ENCRYPT, CKA_DECRYPT, CKA_WRAP, CKA_UNWRAP, CKA_SIGN, CKA_VERIFY, CKA_DERIVE, CKA_MODIFIABLE, CKA_EXTRACTABLE and CKA_SENSITIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key#attributes HsmKey#attributes}
  */
  readonly attributes?: string[];
  /**
  * If true the key will be assigned the following attributes: CKA_SENSITIVE, CKA_ENCRYPT, CKA_DECRYPT, CKA_WRAP and CKA_UNWRAP False by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key#hyok_key HsmKey#hyok_key}
  */
  readonly hyokKey?: boolean | cdktf.IResolvable;
  /**
  * Size of the key. Options: 2048, 3072, 4096 for asymmetric keys. 128, 192 and 256 for symmetric keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key#key_size HsmKey#key_size}
  */
  readonly keySize: number;
  /**
  * Label of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key#label HsmKey#label}
  */
  readonly label?: string;
  /**
  * Mechanism of the key. Options: CKM_RSA_FIPS_186_3_AUX_PRIME_KEY_PAIR_GEN, CKM_RSA_X9_31_KEY_PAIR_GEN, CKM_RSA_FIPS_186_3_PRIME_KEY_PAIR_GEN, CKM_RSA_PKCS_KEY_PAIR_GEN and CKM_AES_KEY_GEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key#mechanism HsmKey#mechanism}
  */
  readonly mechanism: string;
  /**
  * Partition ID in which the key will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key#partition_id HsmKey#partition_id}
  */
  readonly partitionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key ciphertrust_hsm_key}
*/
export class HsmKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_hsm_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HsmKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HsmKey to import
  * @param importFromId The id of the existing HsmKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HsmKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_hsm_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/hsm_key ciphertrust_hsm_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HsmKeyConfig
  */
  public constructor(scope: Construct, id: string, config: HsmKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_hsm_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._hyokKey = config.hyokKey;
    this._keySize = config.keySize;
    this._label = config.label;
    this._mechanism = config.mechanism;
    this._partitionId = config.partitionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // added_attributes - computed: true, optional: false, required: false
  public get addedAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('added_attributes'));
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes'));
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // byok_key - computed: true, optional: false, required: false
  public get byokKey() {
    return this.getBooleanAttribute('byok_key');
  }

  // hyok_key - computed: true, optional: true, required: false
  private _hyokKey?: boolean | cdktf.IResolvable; 
  public get hyokKey() {
    return this.getBooleanAttribute('hyok_key');
  }
  public set hyokKey(value: boolean | cdktf.IResolvable) {
    this._hyokKey = value;
  }
  public resetHyokKey() {
    this._hyokKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyokKeyInput() {
    return this._hyokKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_size - computed: false, optional: false, required: true
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mechanism - computed: false, optional: false, required: true
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // partition_id - computed: false, optional: false, required: true
  private _partitionId?: string; 
  public get partitionId() {
    return this.getStringAttribute('partition_id');
  }
  public set partitionId(value: string) {
    this._partitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIdInput() {
    return this._partitionId;
  }

  // private_key_id - computed: true, optional: false, required: false
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }

  // public_key_id - computed: true, optional: false, required: false
  public get publicKeyId() {
    return this.getStringAttribute('public_key_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      hyok_key: cdktf.booleanToTerraform(this._hyokKey),
      key_size: cdktf.numberToTerraform(this._keySize),
      label: cdktf.stringToTerraform(this._label),
      mechanism: cdktf.stringToTerraform(this._mechanism),
      partition_id: cdktf.stringToTerraform(this._partitionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hyok_key: {
        value: cdktf.booleanToHclTerraform(this._hyokKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mechanism: {
        value: cdktf.stringToHclTerraform(this._mechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_id: {
        value: cdktf.stringToHclTerraform(this._partitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
