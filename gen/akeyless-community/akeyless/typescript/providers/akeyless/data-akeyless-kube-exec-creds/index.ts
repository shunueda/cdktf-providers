// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessKubeExecCredsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Subject Alternative Names to be included in the PKI certificate (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds#alt_names DataAkeylessKubeExecCreds#alt_names}
  */
  readonly altNames?: string;
  /**
  * The name of the PKI certificate issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds#cert_issuer_name DataAkeylessKubeExecCreds#cert_issuer_name}
  */
  readonly certIssuerName: string;
  /**
  * The common name to be included in the PKI certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds#common_name DataAkeylessKubeExecCreds#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds#id DataAkeylessKubeExecCreds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * pki key file contents encoded using Base64. If this option is used, the certificate will be printed to stdout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds#key_data_base64 DataAkeylessKubeExecCreds#key_data_base64}
  */
  readonly keyDataBase64?: string;
  /**
  * The URI Subject Alternative Names to be included in the PKI certificate (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds#uri_sans DataAkeylessKubeExecCreds#uri_sans}
  */
  readonly uriSans?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds akeyless_kube_exec_creds}
*/
export class DataAkeylessKubeExecCreds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_kube_exec_creds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessKubeExecCreds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessKubeExecCreds to import
  * @param importFromId The id of the existing DataAkeylessKubeExecCreds that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessKubeExecCreds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_kube_exec_creds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/kube_exec_creds akeyless_kube_exec_creds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessKubeExecCredsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessKubeExecCredsConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_kube_exec_creds',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
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
    this._id = config.id;
    this._keyDataBase64 = config.keyDataBase64;
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

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
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

  // client_certificate_data - computed: true, optional: false, required: false
  public get clientCertificateData() {
    return this.getStringAttribute('client_certificate_data');
  }

  // client_key_data - computed: true, optional: false, required: false
  public get clientKeyData() {
    return this.getStringAttribute('client_key_data');
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // parent_certificate_data - computed: true, optional: false, required: false
  public get parentCertificateData() {
    return this.getStringAttribute('parent_certificate_data');
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
      id: cdktf.stringToTerraform(this._id),
      key_data_base64: cdktf.stringToTerraform(this._keyDataBase64),
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
