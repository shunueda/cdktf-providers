// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/client_cert_authority_ocsp_tls_trusted_common_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Certificate Authority.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/client_cert_authority_ocsp_tls_trusted_common_name#cert_authority_name DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonName#cert_authority_name}
  */
  readonly certAuthorityName: string;
  /**
  * The expected Trusted Common Name of the OCSP responder remote certificate.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/client_cert_authority_ocsp_tls_trusted_common_name#ocsp_tls_trusted_common_name DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonName#ocsp_tls_trusted_common_name}
  */
  readonly ocspTlsTrustedCommonName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/client_cert_authority_ocsp_tls_trusted_common_name solacebroker_client_cert_authority_ocsp_tls_trusted_common_name}
*/
export class DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonName extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_client_cert_authority_ocsp_tls_trusted_common_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonName to import
  * @param importFromId The id of the existing DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonName that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/client_cert_authority_ocsp_tls_trusted_common_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_client_cert_authority_ocsp_tls_trusted_common_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/client_cert_authority_ocsp_tls_trusted_common_name solacebroker_client_cert_authority_ocsp_tls_trusted_common_name} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonNameConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerClientCertAuthorityOcspTlsTrustedCommonNameConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_client_cert_authority_ocsp_tls_trusted_common_name',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certAuthorityName = config.certAuthorityName;
    this._ocspTlsTrustedCommonName = config.ocspTlsTrustedCommonName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_authority_name - computed: false, optional: false, required: true
  private _certAuthorityName?: string; 
  public get certAuthorityName() {
    return this.getStringAttribute('cert_authority_name');
  }
  public set certAuthorityName(value: string) {
    this._certAuthorityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthorityNameInput() {
    return this._certAuthorityName;
  }

  // ocsp_tls_trusted_common_name - computed: false, optional: false, required: true
  private _ocspTlsTrustedCommonName?: string; 
  public get ocspTlsTrustedCommonName() {
    return this.getStringAttribute('ocsp_tls_trusted_common_name');
  }
  public set ocspTlsTrustedCommonName(value: string) {
    this._ocspTlsTrustedCommonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspTlsTrustedCommonNameInput() {
    return this._ocspTlsTrustedCommonName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_authority_name: cdktf.stringToTerraform(this._certAuthorityName),
      ocsp_tls_trusted_common_name: cdktf.stringToTerraform(this._ocspTlsTrustedCommonName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_authority_name: {
        value: cdktf.stringToHclTerraform(this._certAuthorityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_tls_trusted_common_name: {
        value: cdktf.stringToHclTerraform(this._ocspTlsTrustedCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
