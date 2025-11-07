// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmImportCertitficateConfig extends cdktf.TerraformMetaArguments {
  /**
  * cert passphrase, A passphrase is a word or phrase that protects files 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate#cert_passphrase CmImportCertitficate#cert_passphrase}
  */
  readonly certPassphrase?: string;
  /**
  * cert content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate#cert_text CmImportCertitficate#cert_text}
  */
  readonly certText?: string;
  /**
  * Import Type, Value can be `PKCS12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate#import_type CmImportCertitficate#import_type}
  */
  readonly importType?: string;
  /**
  * key passphrase, A passphrase is a word or phrase that protects private key files, It prevents unauthorized users from encrypting them. Usually it's just the secret encryption/decryption key used for Ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate#key_passphrase CmImportCertitficate#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * key content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate#key_text CmImportCertitficate#key_text}
  */
  readonly keyText?: string;
  /**
  * The unique user-given name of the certificate. Certificate names cannot contain spaces or special characters. The allowed characters are a-z, A-Z, 0-9, dot(.), dash (-) and underscore (_). Names starting with only a-z, A-Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate#name CmImportCertitficate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate bigipnext_cm_import_certitficate}
*/
export class CmImportCertitficate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_import_certitficate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmImportCertitficate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmImportCertitficate to import
  * @param importFromId The id of the existing CmImportCertitficate that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmImportCertitficate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_import_certitficate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_import_certitficate bigipnext_cm_import_certitficate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmImportCertitficateConfig
  */
  public constructor(scope: Construct, id: string, config: CmImportCertitficateConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_import_certitficate',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certPassphrase = config.certPassphrase;
    this._certText = config.certText;
    this._importType = config.importType;
    this._keyPassphrase = config.keyPassphrase;
    this._keyText = config.keyText;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_passphrase - computed: false, optional: true, required: false
  private _certPassphrase?: string; 
  public get certPassphrase() {
    return this.getStringAttribute('cert_passphrase');
  }
  public set certPassphrase(value: string) {
    this._certPassphrase = value;
  }
  public resetCertPassphrase() {
    this._certPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPassphraseInput() {
    return this._certPassphrase;
  }

  // cert_text - computed: false, optional: true, required: false
  private _certText?: string; 
  public get certText() {
    return this.getStringAttribute('cert_text');
  }
  public set certText(value: string) {
    this._certText = value;
  }
  public resetCertText() {
    this._certText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTextInput() {
    return this._certText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_type - computed: false, optional: true, required: false
  private _importType?: string; 
  public get importType() {
    return this.getStringAttribute('import_type');
  }
  public set importType(value: string) {
    this._importType = value;
  }
  public resetImportType() {
    this._importType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTypeInput() {
    return this._importType;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }

  // key_text - computed: false, optional: true, required: false
  private _keyText?: string; 
  public get keyText() {
    return this.getStringAttribute('key_text');
  }
  public set keyText(value: string) {
    this._keyText = value;
  }
  public resetKeyText() {
    this._keyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTextInput() {
    return this._keyText;
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
      cert_passphrase: cdktf.stringToTerraform(this._certPassphrase),
      cert_text: cdktf.stringToTerraform(this._certText),
      import_type: cdktf.stringToTerraform(this._importType),
      key_passphrase: cdktf.stringToTerraform(this._keyPassphrase),
      key_text: cdktf.stringToTerraform(this._keyText),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_passphrase: {
        value: cdktf.stringToHclTerraform(this._certPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_text: {
        value: cdktf.stringToHclTerraform(this._certText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_type: {
        value: cdktf.stringToHclTerraform(this._importType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_passphrase: {
        value: cdktf.stringToHclTerraform(this._keyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_text: {
        value: cdktf.stringToHclTerraform(this._keyText),
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
