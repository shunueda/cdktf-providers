// https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHttpclientRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#insecure DataHttpclientRequest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#password DataHttpclientRequest#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#request_body DataHttpclientRequest#request_body}
  */
  readonly requestBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#request_headers DataHttpclientRequest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#request_method DataHttpclientRequest#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#timeout DataHttpclientRequest#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#url DataHttpclientRequest#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#username DataHttpclientRequest#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request httpclient_request}
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
  * @param importFromId The id of the existing DataHttpclientRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHttpclientRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "httpclient_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmachard/http-client/0.6.0/docs/data-sources/httpclient_request httpclient_request} Data Source
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
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._insecure = config.insecure;
    this._password = config.password;
    this._requestBody = config.requestBody;
    this._requestHeaders = config.requestHeaders;
    this._requestMethod = config.requestMethod;
    this._timeout = config.timeout;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestHeaders),
      request_method: cdktf.stringToTerraform(this._requestMethod),
      timeout: cdktf.numberToTerraform(this._timeout),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
