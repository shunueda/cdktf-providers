// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to create the certificate in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate#environment_id Certificate#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate#id Certificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The contents of a PEM encoded file to import, which should be in plain text format and not base64 encoded.  The certificate should be properly formatted for the PEM format, that includes the correct header/footer lines.  Either `pkcs7_file_base64` or `pem_file` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate#pem_file Certificate#pem_file}
  */
  readonly pemFile?: string;
  /**
  * A base64 encoded PKCS7 (DER) file to import.  Either `pkcs7_file_base64` or `pem_file` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate#pkcs7_file_base64 Certificate#pkcs7_file_base64}
  */
  readonly pkcs7FileBase64?: string;
  /**
  * A string that specifies how the certificate is used. Options are `ENCRYPTION`, `SIGNING`, `SSL/TLS` and `ISSUANCE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate#usage_type Certificate#usage_type}
  */
  readonly usageType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate pingone_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/certificate pingone_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_certificate',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._pemFile = config.pemFile;
    this._pkcs7FileBase64 = config.pkcs7FileBase64;
    this._usageType = config.usageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // key_length - computed: true, optional: false, required: false
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pem_file - computed: false, optional: true, required: false
  private _pemFile?: string; 
  public get pemFile() {
    return this.getStringAttribute('pem_file');
  }
  public set pemFile(value: string) {
    this._pemFile = value;
  }
  public resetPemFile() {
    this._pemFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemFileInput() {
    return this._pemFile;
  }

  // pkcs7_file_base64 - computed: false, optional: true, required: false
  private _pkcs7FileBase64?: string; 
  public get pkcs7FileBase64() {
    return this.getStringAttribute('pkcs7_file_base64');
  }
  public set pkcs7FileBase64(value: string) {
    this._pkcs7FileBase64 = value;
  }
  public resetPkcs7FileBase64() {
    this._pkcs7FileBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs7FileBase64Input() {
    return this._pkcs7FileBase64;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // starts_at - computed: true, optional: false, required: false
  public get startsAt() {
    return this.getStringAttribute('starts_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // usage_type - computed: false, optional: false, required: true
  private _usageType?: string; 
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
  public set usageType(value: string) {
    this._usageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypeInput() {
    return this._usageType;
  }

  // validity_period - computed: true, optional: false, required: false
  public get validityPeriod() {
    return this.getNumberAttribute('validity_period');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      pem_file: cdktf.stringToTerraform(this._pemFile),
      pkcs7_file_base64: cdktf.stringToTerraform(this._pkcs7FileBase64),
      usage_type: cdktf.stringToTerraform(this._usageType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      pem_file: {
        value: cdktf.stringToHclTerraform(this._pemFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkcs7_file_base64: {
        value: cdktf.stringToHclTerraform(this._pkcs7FileBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_type: {
        value: cdktf.stringToHclTerraform(this._usageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
