// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenericConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified URL used to send an HTTP request to authenticate the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#authentication_url GenericConnector#authentication_url}
  */
  readonly authenticationUrl: string;
  /**
  * The connect timeout for the HTTP connection, in milliseconds. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#connect_timeout GenericConnector#connect_timeout}
  */
  readonly connectTimeout: number;
  /**
  * An object that can hold any information about the Connector that should be persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#data GenericConnector#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Determines if debug should be enabled to create an event log to assist in debugging integration errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#debug GenericConnector#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * An object that can hold HTTPHeader key and value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#headers GenericConnector#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The basic authentication password to use for requests to the Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#http_authentication_password GenericConnector#http_authentication_password}
  */
  readonly httpAuthenticationPassword?: string;
  /**
  * The basic authentication username to use for requests to the Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#http_authentication_username GenericConnector#http_authentication_username}
  */
  readonly httpAuthenticationUsername?: string;
  /**
  * The Id to use for the new Connector. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#id GenericConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique Connector name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#name GenericConnector#name}
  */
  readonly name: string;
  /**
  * The read timeout for the HTTP connection, in milliseconds. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#read_timeout GenericConnector#read_timeout}
  */
  readonly readTimeout: number;
  /**
  * The Id of an existing Key. The X509 certificate is used for client certificate authentication in requests to the Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#ssl_certificate_key_id GenericConnector#ssl_certificate_key_id}
  */
  readonly sslCertificateKeyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector fusionauth_generic_connector}
*/
export class GenericConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_generic_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenericConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenericConnector to import
  * @param importFromId The id of the existing GenericConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenericConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_generic_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/generic_connector fusionauth_generic_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenericConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: GenericConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_generic_connector',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationUrl = config.authenticationUrl;
    this._connectTimeout = config.connectTimeout;
    this._data = config.data;
    this._debug = config.debug;
    this._headers = config.headers;
    this._httpAuthenticationPassword = config.httpAuthenticationPassword;
    this._httpAuthenticationUsername = config.httpAuthenticationUsername;
    this._id = config.id;
    this._name = config.name;
    this._readTimeout = config.readTimeout;
    this._sslCertificateKeyId = config.sslCertificateKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_url - computed: false, optional: false, required: true
  private _authenticationUrl?: string; 
  public get authenticationUrl() {
    return this.getStringAttribute('authentication_url');
  }
  public set authenticationUrl(value: string) {
    this._authenticationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationUrlInput() {
    return this._authenticationUrl;
  }

  // connect_timeout - computed: false, optional: false, required: true
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_authentication_password - computed: false, optional: true, required: false
  private _httpAuthenticationPassword?: string; 
  public get httpAuthenticationPassword() {
    return this.getStringAttribute('http_authentication_password');
  }
  public set httpAuthenticationPassword(value: string) {
    this._httpAuthenticationPassword = value;
  }
  public resetHttpAuthenticationPassword() {
    this._httpAuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthenticationPasswordInput() {
    return this._httpAuthenticationPassword;
  }

  // http_authentication_username - computed: false, optional: true, required: false
  private _httpAuthenticationUsername?: string; 
  public get httpAuthenticationUsername() {
    return this.getStringAttribute('http_authentication_username');
  }
  public set httpAuthenticationUsername(value: string) {
    this._httpAuthenticationUsername = value;
  }
  public resetHttpAuthenticationUsername() {
    this._httpAuthenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthenticationUsernameInput() {
    return this._httpAuthenticationUsername;
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

  // read_timeout - computed: false, optional: false, required: true
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // ssl_certificate_key_id - computed: false, optional: true, required: false
  private _sslCertificateKeyId?: string; 
  public get sslCertificateKeyId() {
    return this.getStringAttribute('ssl_certificate_key_id');
  }
  public set sslCertificateKeyId(value: string) {
    this._sslCertificateKeyId = value;
  }
  public resetSslCertificateKeyId() {
    this._sslCertificateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateKeyIdInput() {
    return this._sslCertificateKeyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_url: cdktf.stringToTerraform(this._authenticationUrl),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      debug: cdktf.booleanToTerraform(this._debug),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      http_authentication_password: cdktf.stringToTerraform(this._httpAuthenticationPassword),
      http_authentication_username: cdktf.stringToTerraform(this._httpAuthenticationUsername),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      read_timeout: cdktf.numberToTerraform(this._readTimeout),
      ssl_certificate_key_id: cdktf.stringToTerraform(this._sslCertificateKeyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_url: {
        value: cdktf.stringToHclTerraform(this._authenticationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      http_authentication_password: {
        value: cdktf.stringToHclTerraform(this._httpAuthenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_authentication_username: {
        value: cdktf.stringToHclTerraform(this._httpAuthenticationUsername),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_timeout: {
        value: cdktf.numberToHclTerraform(this._readTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_certificate_key_id: {
        value: cdktf.stringToHclTerraform(this._sslCertificateKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
