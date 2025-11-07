// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairsSslServerCsrResponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CSR response file data in PKCS7 format or as an X.509 certificate. PEM encoding (with or without the header and footer lines) is required. New line characters should be omitted or encoded in this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_response#file_data KeypairsSslServerCsrResponse#file_data}
  */
  readonly fileData: string;
  /**
  * The id of the key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_response#keypair_id KeypairsSslServerCsrResponse#keypair_id}
  */
  readonly keypairId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_response pingfederate_keypairs_ssl_server_csr_response}
*/
export class KeypairsSslServerCsrResponse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_keypairs_ssl_server_csr_response";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeypairsSslServerCsrResponse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeypairsSslServerCsrResponse to import
  * @param importFromId The id of the existing KeypairsSslServerCsrResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_response#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeypairsSslServerCsrResponse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_keypairs_ssl_server_csr_response", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_response pingfederate_keypairs_ssl_server_csr_response} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairsSslServerCsrResponseConfig
  */
  public constructor(scope: Construct, id: string, config: KeypairsSslServerCsrResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_keypairs_ssl_server_csr_response',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileData = config.fileData;
    this._keypairId = config.keypairId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crypto_provider - computed: true, optional: false, required: false
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // file_data - computed: false, optional: false, required: true
  private _fileData?: string; 
  public get fileData() {
    return this.getStringAttribute('file_data');
  }
  public set fileData(value: string) {
    this._fileData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDataInput() {
    return this._fileData;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // keypair_id - computed: false, optional: false, required: true
  private _keypairId?: string; 
  public get keypairId() {
    return this.getStringAttribute('keypair_id');
  }
  public set keypairId(value: string) {
    this._keypairId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairIdInput() {
    return this._keypairId;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_data: cdktf.stringToTerraform(this._fileData),
      keypair_id: cdktf.stringToTerraform(this._keypairId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_data: {
        value: cdktf.stringToHclTerraform(this._fileData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keypair_id: {
        value: cdktf.stringToHclTerraform(this._keypairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
