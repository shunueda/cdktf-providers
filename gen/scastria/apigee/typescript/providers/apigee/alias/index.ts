// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#cert_file Alias#cert_file}
  */
  readonly certFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#cert_file_hash Alias#cert_file_hash}
  */
  readonly certFileHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#environment_name Alias#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#file Alias#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#file_hash Alias#file_hash}
  */
  readonly fileHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#format Alias#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#id Alias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#ignore_expiry_validation Alias#ignore_expiry_validation}
  */
  readonly ignoreExpiryValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#ignore_newline_validation Alias#ignore_newline_validation}
  */
  readonly ignoreNewlineValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#key_file Alias#key_file}
  */
  readonly keyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#key_file_hash Alias#key_file_hash}
  */
  readonly keyFileHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#keystore_name Alias#keystore_name}
  */
  readonly keystoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#name Alias#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#password Alias#password}
  */
  readonly password?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias apigee_alias}
*/
export class Alias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alias to import
  * @param importFromId The id of the existing Alias that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/alias apigee_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AliasConfig
  */
  public constructor(scope: Construct, id: string, config: AliasConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_alias',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certFile = config.certFile;
    this._certFileHash = config.certFileHash;
    this._environmentName = config.environmentName;
    this._file = config.file;
    this._fileHash = config.fileHash;
    this._format = config.format;
    this._id = config.id;
    this._ignoreExpiryValidation = config.ignoreExpiryValidation;
    this._ignoreNewlineValidation = config.ignoreNewlineValidation;
    this._keyFile = config.keyFile;
    this._keyFileHash = config.keyFileHash;
    this._keystoreName = config.keystoreName;
    this._name = config.name;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_file_hash - computed: false, optional: true, required: false
  private _certFileHash?: string; 
  public get certFileHash() {
    return this.getStringAttribute('cert_file_hash');
  }
  public set certFileHash(value: string) {
    this._certFileHash = value;
  }
  public resetCertFileHash() {
    this._certFileHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileHashInput() {
    return this._certFileHash;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // file_hash - computed: false, optional: true, required: false
  private _fileHash?: string; 
  public get fileHash() {
    return this.getStringAttribute('file_hash');
  }
  public set fileHash(value: string) {
    this._fileHash = value;
  }
  public resetFileHash() {
    this._fileHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHashInput() {
    return this._fileHash;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // ignore_expiry_validation - computed: false, optional: true, required: false
  private _ignoreExpiryValidation?: boolean | cdktf.IResolvable; 
  public get ignoreExpiryValidation() {
    return this.getBooleanAttribute('ignore_expiry_validation');
  }
  public set ignoreExpiryValidation(value: boolean | cdktf.IResolvable) {
    this._ignoreExpiryValidation = value;
  }
  public resetIgnoreExpiryValidation() {
    this._ignoreExpiryValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExpiryValidationInput() {
    return this._ignoreExpiryValidation;
  }

  // ignore_newline_validation - computed: false, optional: true, required: false
  private _ignoreNewlineValidation?: boolean | cdktf.IResolvable; 
  public get ignoreNewlineValidation() {
    return this.getBooleanAttribute('ignore_newline_validation');
  }
  public set ignoreNewlineValidation(value: boolean | cdktf.IResolvable) {
    this._ignoreNewlineValidation = value;
  }
  public resetIgnoreNewlineValidation() {
    this._ignoreNewlineValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNewlineValidationInput() {
    return this._ignoreNewlineValidation;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_file_hash - computed: false, optional: true, required: false
  private _keyFileHash?: string; 
  public get keyFileHash() {
    return this.getStringAttribute('key_file_hash');
  }
  public set keyFileHash(value: string) {
    this._keyFileHash = value;
  }
  public resetKeyFileHash() {
    this._keyFileHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileHashInput() {
    return this._keyFileHash;
  }

  // keystore_name - computed: false, optional: false, required: true
  private _keystoreName?: string; 
  public get keystoreName() {
    return this.getStringAttribute('keystore_name');
  }
  public set keystoreName(value: string) {
    this._keystoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreNameInput() {
    return this._keystoreName;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_file: cdktf.stringToTerraform(this._certFile),
      cert_file_hash: cdktf.stringToTerraform(this._certFileHash),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      file: cdktf.stringToTerraform(this._file),
      file_hash: cdktf.stringToTerraform(this._fileHash),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      ignore_expiry_validation: cdktf.booleanToTerraform(this._ignoreExpiryValidation),
      ignore_newline_validation: cdktf.booleanToTerraform(this._ignoreNewlineValidation),
      key_file: cdktf.stringToTerraform(this._keyFile),
      key_file_hash: cdktf.stringToTerraform(this._keyFileHash),
      keystore_name: cdktf.stringToTerraform(this._keystoreName),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_file: {
        value: cdktf.stringToHclTerraform(this._certFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_file_hash: {
        value: cdktf.stringToHclTerraform(this._certFileHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_hash: {
        value: cdktf.stringToHclTerraform(this._fileHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      ignore_expiry_validation: {
        value: cdktf.booleanToHclTerraform(this._ignoreExpiryValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_newline_validation: {
        value: cdktf.booleanToHclTerraform(this._ignoreNewlineValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_file: {
        value: cdktf.stringToHclTerraform(this._keyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_file_hash: {
        value: cdktf.stringToHclTerraform(this._keyFileHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keystore_name: {
        value: cdktf.stringToHclTerraform(this._keystoreName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
