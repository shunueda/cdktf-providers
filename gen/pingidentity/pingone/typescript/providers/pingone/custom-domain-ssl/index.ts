// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomDomainSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the PEM-encoded certificate to import. The certificate must not be expired, must not be self signed and the domain must match one of the subject alternative name (SAN) values on the certificate.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl#certificate_pem_file CustomDomainSsl#certificate_pem_file}
  */
  readonly certificatePemFile: string;
  /**
  * The ID of the custom domain to set SSL settings for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl#custom_domain_id CustomDomainSsl#custom_domain_id}
  */
  readonly customDomainId: string;
  /**
  * The ID of the environment to configure custom domain SSL in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl#environment_id CustomDomainSsl#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the PEM-encoded certificate chain.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl#intermediate_certificates_pem_file CustomDomainSsl#intermediate_certificates_pem_file}
  */
  readonly intermediateCertificatesPemFile?: string;
  /**
  * A string that specifies the PEM-encoded, unencrypted private key that matches the certificate's public key.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl#private_key_pem_file CustomDomainSsl#private_key_pem_file}
  */
  readonly privateKeyPemFile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl pingone_custom_domain_ssl}
*/
export class CustomDomainSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_custom_domain_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomDomainSsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomDomainSsl to import
  * @param importFromId The id of the existing CustomDomainSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomDomainSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_custom_domain_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/custom_domain_ssl pingone_custom_domain_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomDomainSslConfig
  */
  public constructor(scope: Construct, id: string, config: CustomDomainSslConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_custom_domain_ssl',
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
    this._certificatePemFile = config.certificatePemFile;
    this._customDomainId = config.customDomainId;
    this._environmentId = config.environmentId;
    this._intermediateCertificatesPemFile = config.intermediateCertificatesPemFile;
    this._privateKeyPemFile = config.privateKeyPemFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_expires_at - computed: true, optional: false, required: false
  public get certificateExpiresAt() {
    return this.getStringAttribute('certificate_expires_at');
  }

  // certificate_pem_file - computed: false, optional: false, required: true
  private _certificatePemFile?: string; 
  public get certificatePemFile() {
    return this.getStringAttribute('certificate_pem_file');
  }
  public set certificatePemFile(value: string) {
    this._certificatePemFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemFileInput() {
    return this._certificatePemFile;
  }

  // custom_domain_id - computed: false, optional: false, required: true
  private _customDomainId?: string; 
  public get customDomainId() {
    return this.getStringAttribute('custom_domain_id');
  }
  public set customDomainId(value: string) {
    this._customDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainIdInput() {
    return this._customDomainId;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intermediate_certificates_pem_file - computed: false, optional: true, required: false
  private _intermediateCertificatesPemFile?: string; 
  public get intermediateCertificatesPemFile() {
    return this.getStringAttribute('intermediate_certificates_pem_file');
  }
  public set intermediateCertificatesPemFile(value: string) {
    this._intermediateCertificatesPemFile = value;
  }
  public resetIntermediateCertificatesPemFile() {
    this._intermediateCertificatesPemFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCertificatesPemFileInput() {
    return this._intermediateCertificatesPemFile;
  }

  // private_key_pem_file - computed: false, optional: false, required: true
  private _privateKeyPemFile?: string; 
  public get privateKeyPemFile() {
    return this.getStringAttribute('private_key_pem_file');
  }
  public set privateKeyPemFile(value: string) {
    this._privateKeyPemFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemFileInput() {
    return this._privateKeyPemFile;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_pem_file: cdktf.stringToTerraform(this._certificatePemFile),
      custom_domain_id: cdktf.stringToTerraform(this._customDomainId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      intermediate_certificates_pem_file: cdktf.stringToTerraform(this._intermediateCertificatesPemFile),
      private_key_pem_file: cdktf.stringToTerraform(this._privateKeyPemFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_pem_file: {
        value: cdktf.stringToHclTerraform(this._certificatePemFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domain_id: {
        value: cdktf.stringToHclTerraform(this._customDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intermediate_certificates_pem_file: {
        value: cdktf.stringToHclTerraform(this._intermediateCertificatesPemFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_pem_file: {
        value: cdktf.stringToHclTerraform(this._privateKeyPemFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
