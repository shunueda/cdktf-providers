// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DsmKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Algorithm of the key. Options: RSA1024, RSA2048, RSA3072, RSA4096, AES256, AES128, ARIA128 and ARIA256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#algorithm DsmKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * Description of the DSM key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#description DsmKey#description}
  */
  readonly description?: string;
  /**
  * ID of the DSM domain in which to create the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#domain DsmKey#domain}
  */
  readonly domain: string;
  /**
  * Encryption mode is required for AES symmetric keys only. Options: CBC, CBC_CS1 and XTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#encryption_mode DsmKey#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * Date of key expiry in UTC time in RFC3339 format. For example, 2021-07-03T14:24:001Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#expiration_date DsmKey#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * The key is extractable from the DSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#extractable DsmKey#extractable}
  */
  readonly extractable?: boolean | cdktf.IResolvable;
  /**
  * Name of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#name DsmKey#name}
  */
  readonly name: string;
  /**
  * Object type of the key. Options: asymmetric and symmetric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#object_type DsmKey#object_type}
  */
  readonly objectType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key ciphertrust_dsm_key}
*/
export class DsmKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_dsm_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DsmKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DsmKey to import
  * @param importFromId The id of the existing DsmKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DsmKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_dsm_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/dsm_key ciphertrust_dsm_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DsmKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DsmKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_dsm_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._description = config.description;
    this._domain = config.domain;
    this._encryptionMode = config.encryptionMode;
    this._expirationDate = config.expirationDate;
    this._extractable = config.extractable;
    this._name = config.name;
    this._objectType = config.objectType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // description - computed: false, optional: true, required: false
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // encryption_mode - computed: false, optional: true, required: false
  private _encryptionMode?: string; 
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // expiration_date - computed: true, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // extractable - computed: false, optional: true, required: false
  private _extractable?: boolean | cdktf.IResolvable; 
  public get extractable() {
    return this.getBooleanAttribute('extractable');
  }
  public set extractable(value: boolean | cdktf.IResolvable) {
    this._extractable = value;
  }
  public resetExtractable() {
    this._extractable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractableInput() {
    return this._extractable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      encryption_mode: cdktf.stringToTerraform(this._encryptionMode),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      extractable: cdktf.booleanToTerraform(this._extractable),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_mode: {
        value: cdktf.stringToHclTerraform(this._encryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extractable: {
        value: cdktf.booleanToHclTerraform(this._extractable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
