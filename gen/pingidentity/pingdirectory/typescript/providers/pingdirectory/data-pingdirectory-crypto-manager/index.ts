// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/crypto_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryCryptoManagerConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/crypto_manager pingdirectory_crypto_manager}
*/
export class DataPingdirectoryCryptoManager extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_crypto_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryCryptoManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryCryptoManager to import
  * @param importFromId The id of the existing DataPingdirectoryCryptoManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/crypto_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryCryptoManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_crypto_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/crypto_manager pingdirectory_crypto_manager} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryCryptoManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryCryptoManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_crypto_manager',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher_key_length - computed: true, optional: false, required: false
  public get cipherKeyLength() {
    return this.getNumberAttribute('cipher_key_length');
  }

  // cipher_transformation - computed: true, optional: false, required: false
  public get cipherTransformation() {
    return this.getStringAttribute('cipher_transformation');
  }

  // digest_algorithm - computed: true, optional: false, required: false
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }

  // enable_rsa_key_exchange_cipher_suites - computed: true, optional: false, required: false
  public get enableRsaKeyExchangeCipherSuites() {
    return this.getBooleanAttribute('enable_rsa_key_exchange_cipher_suites');
  }

  // enable_sha_1_cipher_suites - computed: true, optional: false, required: false
  public get enableSha1CipherSuites() {
    return this.getBooleanAttribute('enable_sha_1_cipher_suites');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_wrapping_transformation - computed: true, optional: false, required: false
  public get keyWrappingTransformation() {
    return this.getStringAttribute('key_wrapping_transformation');
  }

  // mac_algorithm - computed: true, optional: false, required: false
  public get macAlgorithm() {
    return this.getStringAttribute('mac_algorithm');
  }

  // mac_key_length - computed: true, optional: false, required: false
  public get macKeyLength() {
    return this.getNumberAttribute('mac_key_length');
  }

  // outbound_ssl_cipher_suite - computed: true, optional: false, required: false
  public get outboundSslCipherSuite() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_ssl_cipher_suite'));
  }

  // outbound_ssl_protocol - computed: true, optional: false, required: false
  public get outboundSslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_ssl_protocol'));
  }

  // signing_encryption_settings_id - computed: true, optional: false, required: false
  public get signingEncryptionSettingsId() {
    return this.getStringAttribute('signing_encryption_settings_id');
  }

  // ssl_cert_nickname - computed: true, optional: false, required: false
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }

  // ssl_cipher_suite - computed: true, optional: false, required: false
  public get sslCipherSuite() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_cipher_suite'));
  }

  // ssl_protocol - computed: true, optional: false, required: false
  public get sslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_protocol'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
