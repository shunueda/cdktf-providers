// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#aws_secret_name Certificate#aws_secret_name}
  */
  readonly awsSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#azure_key_vault_name Certificate#azure_key_vault_name}
  */
  readonly azureKeyVaultName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#azure_key_vault_secret_name Certificate#azure_key_vault_secret_name}
  */
  readonly azureKeyVaultSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#certificate_body Certificate#certificate_body}
  */
  readonly certificateBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#certificate_chain Certificate#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#certificate_type Certificate#certificate_type}
  */
  readonly certificateType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#credstash_key_name Certificate#credstash_key_name}
  */
  readonly credstashKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#credstash_table_name Certificate#credstash_table_name}
  */
  readonly credstashTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#csp_account_name Certificate#csp_account_name}
  */
  readonly cspAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#description Certificate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#id Certificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#name Certificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#private_key Certificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#private_key_cipher_text Certificate#private_key_cipher_text}
  */
  readonly privateKeyCipherText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#region Certificate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#secret_name Certificate#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#secret_version Certificate#secret_version}
  */
  readonly secretVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate ciscomcd_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/certificate ciscomcd_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_certificate',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsSecretName = config.awsSecretName;
    this._azureKeyVaultName = config.azureKeyVaultName;
    this._azureKeyVaultSecretName = config.azureKeyVaultSecretName;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._certificateType = config.certificateType;
    this._credstashKeyName = config.credstashKeyName;
    this._credstashTableName = config.credstashTableName;
    this._cspAccountName = config.cspAccountName;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._privateKeyCipherText = config.privateKeyCipherText;
    this._region = config.region;
    this._secretName = config.secretName;
    this._secretVersion = config.secretVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_secret_name - computed: false, optional: true, required: false
  private _awsSecretName?: string; 
  public get awsSecretName() {
    return this.getStringAttribute('aws_secret_name');
  }
  public set awsSecretName(value: string) {
    this._awsSecretName = value;
  }
  public resetAwsSecretName() {
    this._awsSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretNameInput() {
    return this._awsSecretName;
  }

  // azure_key_vault_name - computed: false, optional: true, required: false
  private _azureKeyVaultName?: string; 
  public get azureKeyVaultName() {
    return this.getStringAttribute('azure_key_vault_name');
  }
  public set azureKeyVaultName(value: string) {
    this._azureKeyVaultName = value;
  }
  public resetAzureKeyVaultName() {
    this._azureKeyVaultName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultNameInput() {
    return this._azureKeyVaultName;
  }

  // azure_key_vault_secret_name - computed: false, optional: true, required: false
  private _azureKeyVaultSecretName?: string; 
  public get azureKeyVaultSecretName() {
    return this.getStringAttribute('azure_key_vault_secret_name');
  }
  public set azureKeyVaultSecretName(value: string) {
    this._azureKeyVaultSecretName = value;
  }
  public resetAzureKeyVaultSecretName() {
    this._azureKeyVaultSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultSecretNameInput() {
    return this._azureKeyVaultSecretName;
  }

  // certificate_body - computed: false, optional: false, required: true
  private _certificateBody?: string; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // certificate_type - computed: false, optional: false, required: true
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // credstash_key_name - computed: false, optional: true, required: false
  private _credstashKeyName?: string; 
  public get credstashKeyName() {
    return this.getStringAttribute('credstash_key_name');
  }
  public set credstashKeyName(value: string) {
    this._credstashKeyName = value;
  }
  public resetCredstashKeyName() {
    this._credstashKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credstashKeyNameInput() {
    return this._credstashKeyName;
  }

  // credstash_table_name - computed: false, optional: true, required: false
  private _credstashTableName?: string; 
  public get credstashTableName() {
    return this.getStringAttribute('credstash_table_name');
  }
  public set credstashTableName(value: string) {
    this._credstashTableName = value;
  }
  public resetCredstashTableName() {
    this._credstashTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credstashTableNameInput() {
    return this._credstashTableName;
  }

  // csp_account_name - computed: false, optional: true, required: false
  private _cspAccountName?: string; 
  public get cspAccountName() {
    return this.getStringAttribute('csp_account_name');
  }
  public set cspAccountName(value: string) {
    this._cspAccountName = value;
  }
  public resetCspAccountName() {
    this._cspAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountNameInput() {
    return this._cspAccountName;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_cipher_text - computed: false, optional: true, required: false
  private _privateKeyCipherText?: string; 
  public get privateKeyCipherText() {
    return this.getStringAttribute('private_key_cipher_text');
  }
  public set privateKeyCipherText(value: string) {
    this._privateKeyCipherText = value;
  }
  public resetPrivateKeyCipherText() {
    this._privateKeyCipherText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyCipherTextInput() {
    return this._privateKeyCipherText;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_version - computed: false, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_secret_name: cdktf.stringToTerraform(this._awsSecretName),
      azure_key_vault_name: cdktf.stringToTerraform(this._azureKeyVaultName),
      azure_key_vault_secret_name: cdktf.stringToTerraform(this._azureKeyVaultSecretName),
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      credstash_key_name: cdktf.stringToTerraform(this._credstashKeyName),
      credstash_table_name: cdktf.stringToTerraform(this._credstashTableName),
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_cipher_text: cdktf.stringToTerraform(this._privateKeyCipherText),
      region: cdktf.stringToTerraform(this._region),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_version: cdktf.stringToTerraform(this._secretVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_secret_name: {
        value: cdktf.stringToHclTerraform(this._awsSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_key_vault_name: {
        value: cdktf.stringToHclTerraform(this._azureKeyVaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_key_vault_secret_name: {
        value: cdktf.stringToHclTerraform(this._azureKeyVaultSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_body: {
        value: cdktf.stringToHclTerraform(this._certificateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain: {
        value: cdktf.stringToHclTerraform(this._certificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credstash_key_name: {
        value: cdktf.stringToHclTerraform(this._credstashKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credstash_table_name: {
        value: cdktf.stringToHclTerraform(this._credstashTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_cipher_text: {
        value: cdktf.stringToHclTerraform(this._privateKeyCipherText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_version: {
        value: cdktf.stringToHclTerraform(this._secretVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
