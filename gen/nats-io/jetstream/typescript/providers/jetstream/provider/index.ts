// https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JetstreamProviderConfig {
  /**
  * The contents of the NATS 2.0 Credentials file to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#credential_data JetstreamProvider#credential_data}
  */
  readonly credentialData?: string;
  /**
  * Path to the NATS 2.0 credentials file to use for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#credentials JetstreamProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * Connect using a NKEY seed stored in a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#nkey JetstreamProvider#nkey}
  */
  readonly nkey?: string;
  /**
  * Connect using a password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#password JetstreamProvider#password}
  */
  readonly password?: string;
  /**
  * Comma separated list of NATS servers to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#servers JetstreamProvider#servers}
  */
  readonly servers: string;
  /**
  * Connect using an username, used as token when no password is given
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#user JetstreamProvider#user}
  */
  readonly user?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#alias JetstreamProvider#alias}
  */
  readonly alias?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#tls JetstreamProvider#tls}
  */
  readonly tls?: JetstreamProviderTls;
}
export interface JetstreamProviderTls {
  /**
  * Path to the server root CA file (in PEM format). Needed when the NATS server has TLS enabled with an unknown root CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#ca_file JetstreamProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * The root CA (file) content, in PEM format. Needed when the NATS server has TLS enabled with an unknown root CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#ca_file_data JetstreamProvider#ca_file_data}
  */
  readonly caFileData?: string;
  /**
  * Path to client cert file (in PEM format). Needed when NATS server is configured to verify client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#cert_file JetstreamProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * The cert file content (in PEM format). Needed when NATS server is configured to verify client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#cert_file_data JetstreamProvider#cert_file_data}
  */
  readonly certFileData?: string;
  /**
  * Path to client key file (in PEM format). Needed when NATS server is configured to verify client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#key_file JetstreamProvider#key_file}
  */
  readonly keyFile?: string;
  /**
  * The key file content (in PEM format). Needed when NATS server is configured to verify client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#key_file_data JetstreamProvider#key_file_data}
  */
  readonly keyFileData?: string;
}

export function jetstreamProviderTlsToTerraform(struct?: JetstreamProviderTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    ca_file_data: cdktf.stringToTerraform(struct!.caFileData),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_file_data: cdktf.stringToTerraform(struct!.certFileData),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_file_data: cdktf.stringToTerraform(struct!.keyFileData),
  }
}


export function jetstreamProviderTlsToHclTerraform(struct?: JetstreamProviderTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file_data: {
      value: cdktf.stringToHclTerraform(struct!.caFileData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file_data: {
      value: cdktf.stringToHclTerraform(struct!.certFileData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file_data: {
      value: cdktf.stringToHclTerraform(struct!.keyFileData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs jetstream}
*/
export class JetstreamProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jetstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JetstreamProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JetstreamProvider to import
  * @param importFromId The id of the existing JetstreamProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JetstreamProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jetstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs jetstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JetstreamProviderConfig
  */
  public constructor(scope: Construct, id: string, config: JetstreamProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'jetstream',
      terraformGeneratorMetadata: {
        providerName: 'jetstream',
        providerVersion: '0.2.1'
      },
      terraformProviderSource: 'nats-io/jetstream'
    });
    this._credentialData = config.credentialData;
    this._credentials = config.credentials;
    this._nkey = config.nkey;
    this._password = config.password;
    this._servers = config.servers;
    this._user = config.user;
    this._alias = config.alias;
    this._tls = config.tls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_data - computed: false, optional: true, required: false
  private _credentialData?: string; 
  public get credentialData() {
    return this._credentialData;
  }
  public set credentialData(value: string | undefined) {
    this._credentialData = value;
  }
  public resetCredentialData() {
    this._credentialData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDataInput() {
    return this._credentialData;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // nkey - computed: false, optional: true, required: false
  private _nkey?: string; 
  public get nkey() {
    return this._nkey;
  }
  public set nkey(value: string | undefined) {
    this._nkey = value;
  }
  public resetNkey() {
    this._nkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nkeyInput() {
    return this._nkey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string; 
  public get servers() {
    return this._servers;
  }
  public set servers(value: string | undefined) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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

  // tls - computed: false, optional: true, required: false
  private _tls?: JetstreamProviderTls; 
  public get tls() {
    return this._tls;
  }
  public set tls(value: JetstreamProviderTls | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_data: cdktf.stringToTerraform(this._credentialData),
      credentials: cdktf.stringToTerraform(this._credentials),
      nkey: cdktf.stringToTerraform(this._nkey),
      password: cdktf.stringToTerraform(this._password),
      servers: cdktf.stringToTerraform(this._servers),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
      tls: jetstreamProviderTlsToTerraform(this._tls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_data: {
        value: cdktf.stringToHclTerraform(this._credentialData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nkey: {
        value: cdktf.stringToHclTerraform(this._nkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.stringToHclTerraform(this._servers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
      tls: {
        value: jetstreamProviderTlsToHclTerraform(this._tls),
        isBlock: true,
        type: "set",
        storageClassType: "JetstreamProviderTlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
