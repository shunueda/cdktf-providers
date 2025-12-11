// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessPkiCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Subject Alternative Names to be included in the PKI certificate (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#alt_names DataAkeylessPkiCertificate#alt_names}
  */
  readonly altNames?: string;
  /**
  * The name of the PKI certificate issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#cert_issuer_name DataAkeylessPkiCertificate#cert_issuer_name}
  */
  readonly certIssuerName: string;
  /**
  * The common name to be included in the PKI certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#common_name DataAkeylessPkiCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Certificate Signing Request contents encoded in base64 to generate the certificate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#csr_data_base64 DataAkeylessPkiCertificate#csr_data_base64}
  */
  readonly csrDataBase64?: string;
  /**
  *  A comma-separated list of extended key usage requests which will be used for certificate issuance. Supported values: 'clientauth', 'serverauth'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#extended_key_usage DataAkeylessPkiCertificate#extended_key_usage}
  */
  readonly extendedKeyUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#id DataAkeylessPkiCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * pki key file contents encoded using Base64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#key_data_base64 DataAkeylessPkiCertificate#key_data_base64}
  */
  readonly keyDataBase64?: string;
  /**
  * Updated certificate lifetime in seconds (must be less than the Certificate Issuer default TTL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#ttl DataAkeylessPkiCertificate#ttl}
  */
  readonly ttl?: number;
  /**
  * The URI Subject Alternative Names to be included in the PKI certificate (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#uri_sans DataAkeylessPkiCertificate#uri_sans}
  */
  readonly uriSans?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate akeyless_pki_certificate}
*/
export class DataAkeylessPkiCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_pki_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessPkiCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessPkiCertificate to import
  * @param importFromId The id of the existing DataAkeylessPkiCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessPkiCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_pki_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/pki_certificate akeyless_pki_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessPkiCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessPkiCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_pki_certificate',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._altNames = config.altNames;
    this._certIssuerName = config.certIssuerName;
    this._commonName = config.commonName;
    this._csrDataBase64 = config.csrDataBase64;
    this._extendedKeyUsage = config.extendedKeyUsage;
    this._id = config.id;
    this._keyDataBase64 = config.keyDataBase64;
    this._ttl = config.ttl;
    this._uriSans = config.uriSans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alt_names - computed: false, optional: true, required: false
  private _altNames?: string; 
  public get altNames() {
    return this.getStringAttribute('alt_names');
  }
  public set altNames(value: string) {
    this._altNames = value;
  }
  public resetAltNames() {
    this._altNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames;
  }

  // cert_display_id - computed: true, optional: false, required: false
  public get certDisplayId() {
    return this.getStringAttribute('cert_display_id');
  }

  // cert_issuer_name - computed: false, optional: false, required: true
  private _certIssuerName?: string; 
  public get certIssuerName() {
    return this.getStringAttribute('cert_issuer_name');
  }
  public set certIssuerName(value: string) {
    this._certIssuerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIssuerNameInput() {
    return this._certIssuerName;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // csr_data_base64 - computed: false, optional: true, required: false
  private _csrDataBase64?: string; 
  public get csrDataBase64() {
    return this.getStringAttribute('csr_data_base64');
  }
  public set csrDataBase64(value: string) {
    this._csrDataBase64 = value;
  }
  public resetCsrDataBase64() {
    this._csrDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrDataBase64Input() {
    return this._csrDataBase64;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // extended_key_usage - computed: false, optional: true, required: false
  private _extendedKeyUsage?: string; 
  public get extendedKeyUsage() {
    return this.getStringAttribute('extended_key_usage');
  }
  public set extendedKeyUsage(value: string) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage;
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

  // key_data_base64 - computed: false, optional: true, required: false
  private _keyDataBase64?: string; 
  public get keyDataBase64() {
    return this.getStringAttribute('key_data_base64');
  }
  public set keyDataBase64(value: string) {
    this._keyDataBase64 = value;
  }
  public resetKeyDataBase64() {
    this._keyDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataBase64Input() {
    return this._keyDataBase64;
  }

  // parent_cert - computed: true, optional: false, required: false
  public get parentCert() {
    return this.getStringAttribute('parent_cert');
  }

  // reading_token - computed: true, optional: false, required: false
  public get readingToken() {
    return this.getStringAttribute('reading_token');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uri_sans - computed: false, optional: true, required: false
  private _uriSans?: string; 
  public get uriSans() {
    return this.getStringAttribute('uri_sans');
  }
  public set uriSans(value: string) {
    this._uriSans = value;
  }
  public resetUriSans() {
    this._uriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSansInput() {
    return this._uriSans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_names: cdktf.stringToTerraform(this._altNames),
      cert_issuer_name: cdktf.stringToTerraform(this._certIssuerName),
      common_name: cdktf.stringToTerraform(this._commonName),
      csr_data_base64: cdktf.stringToTerraform(this._csrDataBase64),
      extended_key_usage: cdktf.stringToTerraform(this._extendedKeyUsage),
      id: cdktf.stringToTerraform(this._id),
      key_data_base64: cdktf.stringToTerraform(this._keyDataBase64),
      ttl: cdktf.numberToTerraform(this._ttl),
      uri_sans: cdktf.stringToTerraform(this._uriSans),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alt_names: {
        value: cdktf.stringToHclTerraform(this._altNames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_issuer_name: {
        value: cdktf.stringToHclTerraform(this._certIssuerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_data_base64: {
        value: cdktf.stringToHclTerraform(this._csrDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_key_usage: {
        value: cdktf.stringToHclTerraform(this._extendedKeyUsage),
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
      key_data_base64: {
        value: cdktf.stringToHclTerraform(this._keyDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uri_sans: {
        value: cdktf.stringToHclTerraform(this._uriSans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
