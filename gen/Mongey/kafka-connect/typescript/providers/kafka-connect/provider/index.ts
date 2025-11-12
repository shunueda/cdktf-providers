// https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaConnectProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#basic_auth_password KafkaConnectProvider#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#basic_auth_username KafkaConnectProvider#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#headers KafkaConnectProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#tls_auth_crt KafkaConnectProvider#tls_auth_crt}
  */
  readonly tlsAuthCrt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#tls_auth_is_insecure KafkaConnectProvider#tls_auth_is_insecure}
  */
  readonly tlsAuthIsInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#tls_auth_key KafkaConnectProvider#tls_auth_key}
  */
  readonly tlsAuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#tls_root_ca_file KafkaConnectProvider#tls_root_ca_file}
  */
  readonly tlsRootCaFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#url KafkaConnectProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#alias KafkaConnectProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs kafka-connect}
*/
export class KafkaConnectProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kafka-connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaConnectProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaConnectProvider to import
  * @param importFromId The id of the existing KafkaConnectProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaConnectProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kafka-connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongey/kafka-connect/0.4.3/docs kafka-connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaConnectProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KafkaConnectProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kafka-connect',
      terraformGeneratorMetadata: {
        providerName: 'kafka-connect',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      terraformProviderSource: 'Mongey/kafka-connect'
    });
    this._basicAuthPassword = config.basicAuthPassword;
    this._basicAuthUsername = config.basicAuthUsername;
    this._headers = config.headers;
    this._tlsAuthCrt = config.tlsAuthCrt;
    this._tlsAuthIsInsecure = config.tlsAuthIsInsecure;
    this._tlsAuthKey = config.tlsAuthKey;
    this._tlsRootCaFile = config.tlsRootCaFile;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this._basicAuthPassword;
  }
  public set basicAuthPassword(value: string | undefined) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this._basicAuthUsername;
  }
  public set basicAuthUsername(value: string | undefined) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // tls_auth_crt - computed: false, optional: true, required: false
  private _tlsAuthCrt?: string; 
  public get tlsAuthCrt() {
    return this._tlsAuthCrt;
  }
  public set tlsAuthCrt(value: string | undefined) {
    this._tlsAuthCrt = value;
  }
  public resetTlsAuthCrt() {
    this._tlsAuthCrt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAuthCrtInput() {
    return this._tlsAuthCrt;
  }

  // tls_auth_is_insecure - computed: false, optional: true, required: false
  private _tlsAuthIsInsecure?: boolean | cdktf.IResolvable; 
  public get tlsAuthIsInsecure() {
    return this._tlsAuthIsInsecure;
  }
  public set tlsAuthIsInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsAuthIsInsecure = value;
  }
  public resetTlsAuthIsInsecure() {
    this._tlsAuthIsInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAuthIsInsecureInput() {
    return this._tlsAuthIsInsecure;
  }

  // tls_auth_key - computed: false, optional: true, required: false
  private _tlsAuthKey?: string; 
  public get tlsAuthKey() {
    return this._tlsAuthKey;
  }
  public set tlsAuthKey(value: string | undefined) {
    this._tlsAuthKey = value;
  }
  public resetTlsAuthKey() {
    this._tlsAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAuthKeyInput() {
    return this._tlsAuthKey;
  }

  // tls_root_ca_file - computed: false, optional: true, required: false
  private _tlsRootCaFile?: string; 
  public get tlsRootCaFile() {
    return this._tlsRootCaFile;
  }
  public set tlsRootCaFile(value: string | undefined) {
    this._tlsRootCaFile = value;
  }
  public resetTlsRootCaFile() {
    this._tlsRootCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRootCaFileInput() {
    return this._tlsRootCaFile;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_auth_password: cdktf.stringToTerraform(this._basicAuthPassword),
      basic_auth_username: cdktf.stringToTerraform(this._basicAuthUsername),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      tls_auth_crt: cdktf.stringToTerraform(this._tlsAuthCrt),
      tls_auth_is_insecure: cdktf.booleanToTerraform(this._tlsAuthIsInsecure),
      tls_auth_key: cdktf.stringToTerraform(this._tlsAuthKey),
      tls_root_ca_file: cdktf.stringToTerraform(this._tlsRootCaFile),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_auth_password: {
        value: cdktf.stringToHclTerraform(this._basicAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tls_auth_crt: {
        value: cdktf.stringToHclTerraform(this._tlsAuthCrt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_auth_is_insecure: {
        value: cdktf.booleanToHclTerraform(this._tlsAuthIsInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_auth_key: {
        value: cdktf.stringToHclTerraform(this._tlsAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_root_ca_file: {
        value: cdktf.stringToHclTerraform(this._tlsRootCaFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
