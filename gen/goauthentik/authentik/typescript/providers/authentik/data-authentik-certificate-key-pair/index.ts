// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthentikCertificateKeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, certificate data will be fetched. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair#fetch_certificate DataAuthentikCertificateKeyPair#fetch_certificate}
  */
  readonly fetchCertificate?: boolean | cdktf.IResolvable;
  /**
  * If set to true, private key data will be fetched. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair#fetch_key DataAuthentikCertificateKeyPair#fetch_key}
  */
  readonly fetchKey?: boolean | cdktf.IResolvable;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair#key_data DataAuthentikCertificateKeyPair#key_data}
  */
  readonly keyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair#name DataAuthentikCertificateKeyPair#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair authentik_certificate_key_pair}
*/
export class DataAuthentikCertificateKeyPair extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_certificate_key_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthentikCertificateKeyPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthentikCertificateKeyPair to import
  * @param importFromId The id of the existing DataAuthentikCertificateKeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthentikCertificateKeyPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_certificate_key_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/certificate_key_pair authentik_certificate_key_pair} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthentikCertificateKeyPairConfig
  */
  public constructor(scope: Construct, id: string, config: DataAuthentikCertificateKeyPairConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_certificate_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fetchCertificate = config.fetchCertificate;
    this._fetchKey = config.fetchKey;
    this._keyData = config.keyData;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // fetch_certificate - computed: false, optional: true, required: false
  private _fetchCertificate?: boolean | cdktf.IResolvable; 
  public get fetchCertificate() {
    return this.getBooleanAttribute('fetch_certificate');
  }
  public set fetchCertificate(value: boolean | cdktf.IResolvable) {
    this._fetchCertificate = value;
  }
  public resetFetchCertificate() {
    this._fetchCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchCertificateInput() {
    return this._fetchCertificate;
  }

  // fetch_key - computed: false, optional: true, required: false
  private _fetchKey?: boolean | cdktf.IResolvable; 
  public get fetchKey() {
    return this.getBooleanAttribute('fetch_key');
  }
  public set fetchKey(value: boolean | cdktf.IResolvable) {
    this._fetchKey = value;
  }
  public resetFetchKey() {
    this._fetchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchKeyInput() {
    return this._fetchKey;
  }

  // fingerprint1 - computed: true, optional: false, required: false
  public get fingerprint1() {
    return this.getStringAttribute('fingerprint1');
  }

  // fingerprint256 - computed: true, optional: false, required: false
  public get fingerprint256() {
    return this.getStringAttribute('fingerprint256');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_data - computed: true, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
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

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fetch_certificate: cdktf.booleanToTerraform(this._fetchCertificate),
      fetch_key: cdktf.booleanToTerraform(this._fetchKey),
      key_data: cdktf.stringToTerraform(this._keyData),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fetch_certificate: {
        value: cdktf.booleanToHclTerraform(this._fetchCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fetch_key: {
        value: cdktf.booleanToHclTerraform(this._fetchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_data: {
        value: cdktf.stringToHclTerraform(this._keyData),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
