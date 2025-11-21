// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslReplaceCertificateOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * CSR encryption method, optional: RSA, ECC, SM2. (Selectable only if CsrType is Online), default is RSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#cert_csr_encrypt_algo SslReplaceCertificateOperation#cert_csr_encrypt_algo}
  */
  readonly certCsrEncryptAlgo?: string;
  /**
  * CSR encryption parameter, when CsrEncryptAlgo is RSA, you can choose 2048, 4096, etc., and the default is 2048; when CsrEncryptAlgo is ECC, you can choose prime256v1, secp384r1, etc., and the default is prime256v1;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#cert_csr_key_parameter SslReplaceCertificateOperation#cert_csr_key_parameter}
  */
  readonly certCsrKeyParameter?: string;
  /**
  * Certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#certificate_id SslReplaceCertificateOperation#certificate_id}
  */
  readonly certificateId: string;
  /**
  * CSR Content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#csr_content SslReplaceCertificateOperation#csr_content}
  */
  readonly csrContent?: string;
  /**
  * KEY Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#csr_key_password SslReplaceCertificateOperation#csr_key_password}
  */
  readonly csrKeyPassword?: string;
  /**
  * Type, default Original. Available options: Original = original certificate CSR, Upload = manual upload, Online = online generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#csr_type SslReplaceCertificateOperation#csr_type}
  */
  readonly csrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#id SslReplaceCertificateOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reason for reissue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#reason SslReplaceCertificateOperation#reason}
  */
  readonly reason?: string;
  /**
  * Verification type: DNS_AUTO = automatic DNS verification (this verification type is only supported for domain names that are resolved by Tencent Cloud and have normal resolution status), DNS = manual DNS verification, FILE = file verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#valid_type SslReplaceCertificateOperation#valid_type}
  */
  readonly validType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation tencentcloud_ssl_replace_certificate_operation}
*/
export class SslReplaceCertificateOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_replace_certificate_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslReplaceCertificateOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslReplaceCertificateOperation to import
  * @param importFromId The id of the existing SslReplaceCertificateOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslReplaceCertificateOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_replace_certificate_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ssl_replace_certificate_operation tencentcloud_ssl_replace_certificate_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslReplaceCertificateOperationConfig
  */
  public constructor(scope: Construct, id: string, config: SslReplaceCertificateOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_replace_certificate_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certCsrEncryptAlgo = config.certCsrEncryptAlgo;
    this._certCsrKeyParameter = config.certCsrKeyParameter;
    this._certificateId = config.certificateId;
    this._csrContent = config.csrContent;
    this._csrKeyPassword = config.csrKeyPassword;
    this._csrType = config.csrType;
    this._id = config.id;
    this._reason = config.reason;
    this._validType = config.validType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_csr_encrypt_algo - computed: false, optional: true, required: false
  private _certCsrEncryptAlgo?: string; 
  public get certCsrEncryptAlgo() {
    return this.getStringAttribute('cert_csr_encrypt_algo');
  }
  public set certCsrEncryptAlgo(value: string) {
    this._certCsrEncryptAlgo = value;
  }
  public resetCertCsrEncryptAlgo() {
    this._certCsrEncryptAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCsrEncryptAlgoInput() {
    return this._certCsrEncryptAlgo;
  }

  // cert_csr_key_parameter - computed: false, optional: true, required: false
  private _certCsrKeyParameter?: string; 
  public get certCsrKeyParameter() {
    return this.getStringAttribute('cert_csr_key_parameter');
  }
  public set certCsrKeyParameter(value: string) {
    this._certCsrKeyParameter = value;
  }
  public resetCertCsrKeyParameter() {
    this._certCsrKeyParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCsrKeyParameterInput() {
    return this._certCsrKeyParameter;
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // csr_content - computed: false, optional: true, required: false
  private _csrContent?: string; 
  public get csrContent() {
    return this.getStringAttribute('csr_content');
  }
  public set csrContent(value: string) {
    this._csrContent = value;
  }
  public resetCsrContent() {
    this._csrContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrContentInput() {
    return this._csrContent;
  }

  // csr_key_password - computed: false, optional: true, required: false
  private _csrKeyPassword?: string; 
  public get csrKeyPassword() {
    return this.getStringAttribute('csr_key_password');
  }
  public set csrKeyPassword(value: string) {
    this._csrKeyPassword = value;
  }
  public resetCsrKeyPassword() {
    this._csrKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrKeyPasswordInput() {
    return this._csrKeyPassword;
  }

  // csr_type - computed: false, optional: true, required: false
  private _csrType?: string; 
  public get csrType() {
    return this.getStringAttribute('csr_type');
  }
  public set csrType(value: string) {
    this._csrType = value;
  }
  public resetCsrType() {
    this._csrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrTypeInput() {
    return this._csrType;
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

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // valid_type - computed: false, optional: false, required: true
  private _validType?: string; 
  public get validType() {
    return this.getStringAttribute('valid_type');
  }
  public set validType(value: string) {
    this._validType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validTypeInput() {
    return this._validType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_csr_encrypt_algo: cdktf.stringToTerraform(this._certCsrEncryptAlgo),
      cert_csr_key_parameter: cdktf.stringToTerraform(this._certCsrKeyParameter),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      csr_content: cdktf.stringToTerraform(this._csrContent),
      csr_key_password: cdktf.stringToTerraform(this._csrKeyPassword),
      csr_type: cdktf.stringToTerraform(this._csrType),
      id: cdktf.stringToTerraform(this._id),
      reason: cdktf.stringToTerraform(this._reason),
      valid_type: cdktf.stringToTerraform(this._validType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_csr_encrypt_algo: {
        value: cdktf.stringToHclTerraform(this._certCsrEncryptAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_csr_key_parameter: {
        value: cdktf.stringToHclTerraform(this._certCsrKeyParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_content: {
        value: cdktf.stringToHclTerraform(this._csrContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_key_password: {
        value: cdktf.stringToHclTerraform(this._csrKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_type: {
        value: cdktf.stringToHclTerraform(this._csrType),
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
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_type: {
        value: cdktf.stringToHclTerraform(this._validType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
