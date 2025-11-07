// https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTerracurlRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to a directory on local disk that contains one or more certificate files that will be used to validate the certificate presented by the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#ca_cert_directory DataTerracurlRequest#ca_cert_directory}
  */
  readonly caCertDirectory?: string;
  /**
  * Path to a file on local disk that will be used to validate the certificate presented by the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#ca_cert_file DataTerracurlRequest#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Path to a file on local disk that contains the PEM-encoded certificate to present to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#cert_file DataTerracurlRequest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Map of headers to attach to the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#headers DataTerracurlRequest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Path to a file on local disk that contains the PEM-encoded private key for which the authentication certificate was issued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#key_file DataTerracurlRequest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Maximum number of tries until it is marked as failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#max_retry DataTerracurlRequest#max_retry}
  */
  readonly maxRetry?: number;
  /**
  * HTTP method to use in the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#method DataTerracurlRequest#method}
  */
  readonly method: string;
  /**
  * Friendly name for this API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#name DataTerracurlRequest#name}
  */
  readonly name: string;
  /**
  * A request body to attach to the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#request_body DataTerracurlRequest#request_body}
  */
  readonly requestBody?: string;
  /**
  * Map of parameters to attach to the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#request_parameters DataTerracurlRequest#request_parameters}
  */
  readonly requestParameters?: { [key: string]: string };
  /**
  * A list of expected response codes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#response_codes DataTerracurlRequest#response_codes}
  */
  readonly responseCodes: string[];
  /**
  * Interval between each attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#retry_interval DataTerracurlRequest#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Set this to true to disable verification of the server's TLS certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#skip_tls_verify DataTerracurlRequest#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds before each request times out. Defaults to 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#timeout DataTerracurlRequest#timeout}
  */
  readonly timeout?: number;
  /**
  * Api endpoint to call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#url DataTerracurlRequest#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request terracurl_request}
*/
export class DataTerracurlRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "terracurl_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTerracurlRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTerracurlRequest to import
  * @param importFromId The id of the existing DataTerracurlRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTerracurlRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "terracurl_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/data-sources/request terracurl_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTerracurlRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataTerracurlRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'terracurl_request',
      terraformGeneratorMetadata: {
        providerName: 'terracurl',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertDirectory = config.caCertDirectory;
    this._caCertFile = config.caCertFile;
    this._certFile = config.certFile;
    this._headers = config.headers;
    this._keyFile = config.keyFile;
    this._maxRetry = config.maxRetry;
    this._method = config.method;
    this._name = config.name;
    this._requestBody = config.requestBody;
    this._requestParameters = config.requestParameters;
    this._responseCodes = config.responseCodes;
    this._retryInterval = config.retryInterval;
    this._skipTlsVerify = config.skipTlsVerify;
    this._timeout = config.timeout;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert_directory - computed: false, optional: true, required: false
  private _caCertDirectory?: string; 
  public get caCertDirectory() {
    return this.getStringAttribute('ca_cert_directory');
  }
  public set caCertDirectory(value: string) {
    this._caCertDirectory = value;
  }
  public resetCaCertDirectory() {
    this._caCertDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertDirectoryInput() {
    return this._caCertDirectory;
  }

  // ca_cert_file - computed: false, optional: true, required: false
  private _caCertFile?: string; 
  public get caCertFile() {
    return this.getStringAttribute('ca_cert_file');
  }
  public set caCertFile(value: string) {
    this._caCertFile = value;
  }
  public resetCaCertFile() {
    this._caCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertFileInput() {
    return this._caCertFile;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // max_retry - computed: false, optional: true, required: false
  private _maxRetry?: number; 
  public get maxRetry() {
    return this.getNumberAttribute('max_retry');
  }
  public set maxRetry(value: number) {
    this._maxRetry = value;
  }
  public resetMaxRetry() {
    this._maxRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryInput() {
    return this._maxRetry;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: string }; 
  public get requestParameters() {
    return this.getStringMapAttribute('request_parameters');
  }
  public set requestParameters(value: { [key: string]: string }) {
    this._requestParameters = value;
  }
  public resetRequestParameters() {
    this._requestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters;
  }

  // request_url_string - computed: true, optional: false, required: false
  public get requestUrlString() {
    return this.getStringAttribute('request_url_string');
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }

  // response_codes - computed: false, optional: false, required: true
  private _responseCodes?: string[]; 
  public get responseCodes() {
    return this.getListAttribute('response_codes');
  }
  public set responseCodes(value: string[]) {
    this._responseCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodesInput() {
    return this._responseCodes;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // timeout - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert_directory: cdktf.stringToTerraform(this._caCertDirectory),
      ca_cert_file: cdktf.stringToTerraform(this._caCertFile),
      cert_file: cdktf.stringToTerraform(this._certFile),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      key_file: cdktf.stringToTerraform(this._keyFile),
      max_retry: cdktf.numberToTerraform(this._maxRetry),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestParameters),
      response_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseCodes),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      skip_tls_verify: cdktf.booleanToTerraform(this._skipTlsVerify),
      timeout: cdktf.numberToTerraform(this._timeout),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert_directory: {
        value: cdktf.stringToHclTerraform(this._caCertDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_file: {
        value: cdktf.stringToHclTerraform(this._caCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_file: {
        value: cdktf.stringToHclTerraform(this._certFile),
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
      key_file: {
        value: cdktf.stringToHclTerraform(this._keyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retry: {
        value: cdktf.numberToHclTerraform(this._maxRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      response_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._skipTlsVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
