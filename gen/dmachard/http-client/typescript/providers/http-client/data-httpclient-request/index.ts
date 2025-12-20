// https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHttpclientRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA certificate in PEM format to verify server certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#ca_cert DataHttpclientRequest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate in PEM format for mTLS authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#client_cert DataHttpclientRequest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client private key in PEM format for mTLS authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#client_key DataHttpclientRequest#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#expected_status_codes DataHttpclientRequest#expected_status_codes}
  */
  readonly expectedStatusCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#fail_on_http_error DataHttpclientRequest#fail_on_http_error}
  */
  readonly failOnHttpError?: boolean | cdktf.IResolvable;
  /**
  * HTTP version to use (HTTP1.1, HTTP2). Default: HTTP1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#http_version DataHttpclientRequest#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#insecure DataHttpclientRequest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#password DataHttpclientRequest#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#request_body DataHttpclientRequest#request_body}
  */
  readonly requestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#request_headers DataHttpclientRequest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#request_method DataHttpclientRequest#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#timeout DataHttpclientRequest#timeout}
  */
  readonly timeout?: number;
  /**
  * Minimum TLS version (1.0, 1.1, 1.2, 1.3). Default: 1.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#tls_min_version DataHttpclientRequest#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#url DataHttpclientRequest#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#username DataHttpclientRequest#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request httpclient_request}
*/
export class DataHttpclientRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "httpclient_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHttpclientRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHttpclientRequest to import
  * @param importFromId The id of the existing DataHttpclientRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHttpclientRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "httpclient_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmachard/http-client/0.8.0/docs/data-sources/httpclient_request httpclient_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHttpclientRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataHttpclientRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'httpclient_request',
      terraformGeneratorMetadata: {
        providerName: 'http-client',
        providerVersion: '0.8.0',
        providerVersionConstraint: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCert = config.caCert;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._expectedStatusCodes = config.expectedStatusCodes;
    this._failOnHttpError = config.failOnHttpError;
    this._httpVersion = config.httpVersion;
    this._insecure = config.insecure;
    this._password = config.password;
    this._requestBody = config.requestBody;
    this._requestHeaders = config.requestHeaders;
    this._requestMethod = config.requestMethod;
    this._timeout = config.timeout;
    this._tlsMinVersion = config.tlsMinVersion;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // expected_status_codes - computed: false, optional: true, required: false
  private _expectedStatusCodes?: number[]; 
  public get expectedStatusCodes() {
    return this.getNumberListAttribute('expected_status_codes');
  }
  public set expectedStatusCodes(value: number[]) {
    this._expectedStatusCodes = value;
  }
  public resetExpectedStatusCodes() {
    this._expectedStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodesInput() {
    return this._expectedStatusCodes;
  }

  // fail_on_http_error - computed: false, optional: true, required: false
  private _failOnHttpError?: boolean | cdktf.IResolvable; 
  public get failOnHttpError() {
    return this.getBooleanAttribute('fail_on_http_error');
  }
  public set failOnHttpError(value: boolean | cdktf.IResolvable) {
    this._failOnHttpError = value;
  }
  public resetFailOnHttpError() {
    this._failOnHttpError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnHttpErrorInput() {
    return this._failOnHttpError;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // response_body - computed: true, optional: false, required: false
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }

  // response_code - computed: true, optional: false, required: false
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }

  // response_headers - computed: true, optional: false, required: false
  private _responseHeaders = new cdktf.StringMap(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_min_version - computed: false, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert: cdktf.stringToTerraform(this._caCert),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      expected_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._expectedStatusCodes),
      fail_on_http_error: cdktf.booleanToTerraform(this._failOnHttpError),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestHeaders),
      request_method: cdktf.stringToTerraform(this._requestMethod),
      timeout: cdktf.numberToTerraform(this._timeout),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key: {
        value: cdktf.stringToHclTerraform(this._clientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_status_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._expectedStatusCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      fail_on_http_error: {
        value: cdktf.booleanToHclTerraform(this._failOnHttpError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_version: {
        value: cdktf.stringToHclTerraform(this._httpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      request_method: {
        value: cdktf.stringToHclTerraform(this._requestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_min_version: {
        value: cdktf.stringToHclTerraform(this._tlsMinVersion),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
