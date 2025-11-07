// https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to a directory on local disk that contains one or more certificate files that will be used to validate the certificate presented by the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#ca_cert_directory Request#ca_cert_directory}
  */
  readonly caCertDirectory?: string;
  /**
  * Path to a file on local disk that will be used to validate the certificate presented by the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#ca_cert_file Request#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Path to a file on local disk that contains the PEM-encoded certificate to present to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#cert_file Request#cert_file}
  */
  readonly certFile?: string;
  /**
  * Path to a directory on local disk that contains one or more certificate files that will be used to validate the certificate presented by the server for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_ca_cert_directory Request#destroy_ca_cert_directory}
  */
  readonly destroyCaCertDirectory?: string;
  /**
  * Path to a file on local disk that will be used to validate the certificate presented by the server for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_ca_cert_file Request#destroy_ca_cert_file}
  */
  readonly destroyCaCertFile?: string;
  /**
  * Path to a file on local disk that contains the PEM-encoded certificate to present to the server for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_cert_file Request#destroy_cert_file}
  */
  readonly destroyCertFile?: string;
  /**
  * Map of headers to attach to the destroy API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_headers Request#destroy_headers}
  */
  readonly destroyHeaders?: { [key: string]: string };
  /**
  * Path to a file on local disk that contains the PEM-encoded private key for which the authentication certificate was issued for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_key_file Request#destroy_key_file}
  */
  readonly destroyKeyFile?: string;
  /**
  * Maximum number of tries until it is marked as failed for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_max_retry Request#destroy_max_retry}
  */
  readonly destroyMaxRetry?: number;
  /**
  * Destroy HTTP method to use in the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_method Request#destroy_method}
  */
  readonly destroyMethod?: string;
  /**
  * A request body to attach to the destroy API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_request_body Request#destroy_request_body}
  */
  readonly destroyRequestBody?: string;
  /**
  * Map of parameters to attach to the destroy API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_request_parameters Request#destroy_request_parameters}
  */
  readonly destroyRequestParameters?: { [key: string]: string };
  /**
  * A list of expected response codes for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_response_codes Request#destroy_response_codes}
  */
  readonly destroyResponseCodes?: string[];
  /**
  * Interval between each attempt for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_retry_interval Request#destroy_retry_interval}
  */
  readonly destroyRetryInterval?: number;
  /**
  * Set this to true to disable verification of the server's TLS certificate for the destroy call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_skip_tls_verify Request#destroy_skip_tls_verify}
  */
  readonly destroySkipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds before each request times out for the destroy call. Defaults to 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_timeout Request#destroy_timeout}
  */
  readonly destroyTimeout?: number;
  /**
  * Destroy API endpoint to call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#destroy_url Request#destroy_url}
  */
  readonly destroyUrl?: string;
  /**
  * Map of headers to attach to the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#headers Request#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * List of JSON fields to ignore during drift detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#ignore_response_fields Request#ignore_response_fields}
  */
  readonly ignoreResponseFields?: string[];
  /**
  * Path to a file on local disk that contains the PEM-encoded private key for which the authentication certificate was issued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#key_file Request#key_file}
  */
  readonly keyFile?: string;
  /**
  * Maximum number of tries until it is marked as failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#max_retry Request#max_retry}
  */
  readonly maxRetry?: number;
  /**
  * HTTP method to use in the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#method Request#method}
  */
  readonly method: string;
  /**
  * Friendly name for this API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#name Request#name}
  */
  readonly name: string;
  /**
  * Path to a PEM-encoded CA certificate for the read request (TLS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_ca_cert_directory Request#read_ca_cert_directory}
  */
  readonly readCaCertDirectory?: string;
  /**
  * Path to a PEM-encoded CA certificate for the read request (TLS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_ca_cert_file Request#read_ca_cert_file}
  */
  readonly readCaCertFile?: string;
  /**
  * Path to a PEM-encoded certificate for the read request (TLS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_cert_file Request#read_cert_file}
  */
  readonly readCertFile?: string;
  /**
  * Map of headers for the read request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_headers Request#read_headers}
  */
  readonly readHeaders?: { [key: string]: string };
  /**
  * Path to a PEM-encoded private key for the read request (TLS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_key_file Request#read_key_file}
  */
  readonly readKeyFile?: string;
  /**
  * HTTP method for reading resource state. Required if `skip_read` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_method Request#read_method}
  */
  readonly readMethod?: string;
  /**
  * Optional request parameters to add to the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_parameters Request#read_parameters}
  */
  readonly readParameters?: { [key: string]: string };
  /**
  * Optional request body to use for the read request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_request_body Request#read_request_body}
  */
  readonly readRequestBody?: string;
  /**
  * Expected response codes for the read request. Required if `skip_read` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_response_codes Request#read_response_codes}
  */
  readonly readResponseCodes?: string[];
  /**
  * Skip TLS verification for the read request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_skip_tls_verify Request#read_skip_tls_verify}
  */
  readonly readSkipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * API endpoint for reading resource state. Required if `skip_read` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#read_url Request#read_url}
  */
  readonly readUrl?: string;
  /**
  * A request body to attach to the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#request_body Request#request_body}
  */
  readonly requestBody?: string;
  /**
  * Map of parameters to attach to the API call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#request_parameters Request#request_parameters}
  */
  readonly requestParameters?: { [key: string]: string };
  /**
  * A list of expected response codes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#response_codes Request#response_codes}
  */
  readonly responseCodes: string[];
  /**
  * Interval between each attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#retry_interval Request#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Set this to true to skip issuing a request when the resource is being destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#skip_destroy Request#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktf.IResolvable;
  /**
  * Set to true to skip the read operation (no drift detection). Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#skip_read Request#skip_read}
  */
  readonly skipRead?: boolean | cdktf.IResolvable;
  /**
  * Set this to true to disable verification of the server's TLS certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#skip_tls_verify Request#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds before each request times out. Defaults to 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#timeout Request#timeout}
  */
  readonly timeout?: number;
  /**
  * Api endpoint to call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#url Request#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request terracurl_request}
*/
export class Request extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "terracurl_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Request resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Request to import
  * @param importFromId The id of the existing Request that should be imported. Refer to the {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Request to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "terracurl_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devops-rob/terracurl/2.1.0/docs/resources/request terracurl_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestConfig
  */
  public constructor(scope: Construct, id: string, config: RequestConfig) {
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
    this._destroyCaCertDirectory = config.destroyCaCertDirectory;
    this._destroyCaCertFile = config.destroyCaCertFile;
    this._destroyCertFile = config.destroyCertFile;
    this._destroyHeaders = config.destroyHeaders;
    this._destroyKeyFile = config.destroyKeyFile;
    this._destroyMaxRetry = config.destroyMaxRetry;
    this._destroyMethod = config.destroyMethod;
    this._destroyRequestBody = config.destroyRequestBody;
    this._destroyRequestParameters = config.destroyRequestParameters;
    this._destroyResponseCodes = config.destroyResponseCodes;
    this._destroyRetryInterval = config.destroyRetryInterval;
    this._destroySkipTlsVerify = config.destroySkipTlsVerify;
    this._destroyTimeout = config.destroyTimeout;
    this._destroyUrl = config.destroyUrl;
    this._headers = config.headers;
    this._ignoreResponseFields = config.ignoreResponseFields;
    this._keyFile = config.keyFile;
    this._maxRetry = config.maxRetry;
    this._method = config.method;
    this._name = config.name;
    this._readCaCertDirectory = config.readCaCertDirectory;
    this._readCaCertFile = config.readCaCertFile;
    this._readCertFile = config.readCertFile;
    this._readHeaders = config.readHeaders;
    this._readKeyFile = config.readKeyFile;
    this._readMethod = config.readMethod;
    this._readParameters = config.readParameters;
    this._readRequestBody = config.readRequestBody;
    this._readResponseCodes = config.readResponseCodes;
    this._readSkipTlsVerify = config.readSkipTlsVerify;
    this._readUrl = config.readUrl;
    this._requestBody = config.requestBody;
    this._requestParameters = config.requestParameters;
    this._responseCodes = config.responseCodes;
    this._retryInterval = config.retryInterval;
    this._skipDestroy = config.skipDestroy;
    this._skipRead = config.skipRead;
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

  // destroy_ca_cert_directory - computed: false, optional: true, required: false
  private _destroyCaCertDirectory?: string; 
  public get destroyCaCertDirectory() {
    return this.getStringAttribute('destroy_ca_cert_directory');
  }
  public set destroyCaCertDirectory(value: string) {
    this._destroyCaCertDirectory = value;
  }
  public resetDestroyCaCertDirectory() {
    this._destroyCaCertDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyCaCertDirectoryInput() {
    return this._destroyCaCertDirectory;
  }

  // destroy_ca_cert_file - computed: false, optional: true, required: false
  private _destroyCaCertFile?: string; 
  public get destroyCaCertFile() {
    return this.getStringAttribute('destroy_ca_cert_file');
  }
  public set destroyCaCertFile(value: string) {
    this._destroyCaCertFile = value;
  }
  public resetDestroyCaCertFile() {
    this._destroyCaCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyCaCertFileInput() {
    return this._destroyCaCertFile;
  }

  // destroy_cert_file - computed: false, optional: true, required: false
  private _destroyCertFile?: string; 
  public get destroyCertFile() {
    return this.getStringAttribute('destroy_cert_file');
  }
  public set destroyCertFile(value: string) {
    this._destroyCertFile = value;
  }
  public resetDestroyCertFile() {
    this._destroyCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyCertFileInput() {
    return this._destroyCertFile;
  }

  // destroy_headers - computed: false, optional: true, required: false
  private _destroyHeaders?: { [key: string]: string }; 
  public get destroyHeaders() {
    return this.getStringMapAttribute('destroy_headers');
  }
  public set destroyHeaders(value: { [key: string]: string }) {
    this._destroyHeaders = value;
  }
  public resetDestroyHeaders() {
    this._destroyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyHeadersInput() {
    return this._destroyHeaders;
  }

  // destroy_key_file - computed: false, optional: true, required: false
  private _destroyKeyFile?: string; 
  public get destroyKeyFile() {
    return this.getStringAttribute('destroy_key_file');
  }
  public set destroyKeyFile(value: string) {
    this._destroyKeyFile = value;
  }
  public resetDestroyKeyFile() {
    this._destroyKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyKeyFileInput() {
    return this._destroyKeyFile;
  }

  // destroy_max_retry - computed: false, optional: true, required: false
  private _destroyMaxRetry?: number; 
  public get destroyMaxRetry() {
    return this.getNumberAttribute('destroy_max_retry');
  }
  public set destroyMaxRetry(value: number) {
    this._destroyMaxRetry = value;
  }
  public resetDestroyMaxRetry() {
    this._destroyMaxRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyMaxRetryInput() {
    return this._destroyMaxRetry;
  }

  // destroy_method - computed: false, optional: true, required: false
  private _destroyMethod?: string; 
  public get destroyMethod() {
    return this.getStringAttribute('destroy_method');
  }
  public set destroyMethod(value: string) {
    this._destroyMethod = value;
  }
  public resetDestroyMethod() {
    this._destroyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyMethodInput() {
    return this._destroyMethod;
  }

  // destroy_request_body - computed: false, optional: true, required: false
  private _destroyRequestBody?: string; 
  public get destroyRequestBody() {
    return this.getStringAttribute('destroy_request_body');
  }
  public set destroyRequestBody(value: string) {
    this._destroyRequestBody = value;
  }
  public resetDestroyRequestBody() {
    this._destroyRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyRequestBodyInput() {
    return this._destroyRequestBody;
  }

  // destroy_request_parameters - computed: false, optional: true, required: false
  private _destroyRequestParameters?: { [key: string]: string }; 
  public get destroyRequestParameters() {
    return this.getStringMapAttribute('destroy_request_parameters');
  }
  public set destroyRequestParameters(value: { [key: string]: string }) {
    this._destroyRequestParameters = value;
  }
  public resetDestroyRequestParameters() {
    this._destroyRequestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyRequestParametersInput() {
    return this._destroyRequestParameters;
  }

  // destroy_request_url_string - computed: true, optional: false, required: false
  public get destroyRequestUrlString() {
    return this.getStringAttribute('destroy_request_url_string');
  }

  // destroy_response_codes - computed: false, optional: true, required: false
  private _destroyResponseCodes?: string[]; 
  public get destroyResponseCodes() {
    return this.getListAttribute('destroy_response_codes');
  }
  public set destroyResponseCodes(value: string[]) {
    this._destroyResponseCodes = value;
  }
  public resetDestroyResponseCodes() {
    this._destroyResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyResponseCodesInput() {
    return this._destroyResponseCodes;
  }

  // destroy_retry_interval - computed: true, optional: true, required: false
  private _destroyRetryInterval?: number; 
  public get destroyRetryInterval() {
    return this.getNumberAttribute('destroy_retry_interval');
  }
  public set destroyRetryInterval(value: number) {
    this._destroyRetryInterval = value;
  }
  public resetDestroyRetryInterval() {
    this._destroyRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyRetryIntervalInput() {
    return this._destroyRetryInterval;
  }

  // destroy_skip_tls_verify - computed: false, optional: true, required: false
  private _destroySkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get destroySkipTlsVerify() {
    return this.getBooleanAttribute('destroy_skip_tls_verify');
  }
  public set destroySkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._destroySkipTlsVerify = value;
  }
  public resetDestroySkipTlsVerify() {
    this._destroySkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroySkipTlsVerifyInput() {
    return this._destroySkipTlsVerify;
  }

  // destroy_timeout - computed: true, optional: true, required: false
  private _destroyTimeout?: number; 
  public get destroyTimeout() {
    return this.getNumberAttribute('destroy_timeout');
  }
  public set destroyTimeout(value: number) {
    this._destroyTimeout = value;
  }
  public resetDestroyTimeout() {
    this._destroyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyTimeoutInput() {
    return this._destroyTimeout;
  }

  // destroy_url - computed: false, optional: true, required: false
  private _destroyUrl?: string; 
  public get destroyUrl() {
    return this.getStringAttribute('destroy_url');
  }
  public set destroyUrl(value: string) {
    this._destroyUrl = value;
  }
  public resetDestroyUrl() {
    this._destroyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyUrlInput() {
    return this._destroyUrl;
  }

  // drift_marker - computed: true, optional: false, required: false
  public get driftMarker() {
    return this.getStringAttribute('drift_marker');
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

  // ignore_response_fields - computed: false, optional: true, required: false
  private _ignoreResponseFields?: string[]; 
  public get ignoreResponseFields() {
    return this.getListAttribute('ignore_response_fields');
  }
  public set ignoreResponseFields(value: string[]) {
    this._ignoreResponseFields = value;
  }
  public resetIgnoreResponseFields() {
    this._ignoreResponseFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseFieldsInput() {
    return this._ignoreResponseFields;
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

  // read_ca_cert_directory - computed: false, optional: true, required: false
  private _readCaCertDirectory?: string; 
  public get readCaCertDirectory() {
    return this.getStringAttribute('read_ca_cert_directory');
  }
  public set readCaCertDirectory(value: string) {
    this._readCaCertDirectory = value;
  }
  public resetReadCaCertDirectory() {
    this._readCaCertDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCaCertDirectoryInput() {
    return this._readCaCertDirectory;
  }

  // read_ca_cert_file - computed: false, optional: true, required: false
  private _readCaCertFile?: string; 
  public get readCaCertFile() {
    return this.getStringAttribute('read_ca_cert_file');
  }
  public set readCaCertFile(value: string) {
    this._readCaCertFile = value;
  }
  public resetReadCaCertFile() {
    this._readCaCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCaCertFileInput() {
    return this._readCaCertFile;
  }

  // read_cert_file - computed: false, optional: true, required: false
  private _readCertFile?: string; 
  public get readCertFile() {
    return this.getStringAttribute('read_cert_file');
  }
  public set readCertFile(value: string) {
    this._readCertFile = value;
  }
  public resetReadCertFile() {
    this._readCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCertFileInput() {
    return this._readCertFile;
  }

  // read_headers - computed: false, optional: true, required: false
  private _readHeaders?: { [key: string]: string }; 
  public get readHeaders() {
    return this.getStringMapAttribute('read_headers');
  }
  public set readHeaders(value: { [key: string]: string }) {
    this._readHeaders = value;
  }
  public resetReadHeaders() {
    this._readHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readHeadersInput() {
    return this._readHeaders;
  }

  // read_key_file - computed: false, optional: true, required: false
  private _readKeyFile?: string; 
  public get readKeyFile() {
    return this.getStringAttribute('read_key_file');
  }
  public set readKeyFile(value: string) {
    this._readKeyFile = value;
  }
  public resetReadKeyFile() {
    this._readKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readKeyFileInput() {
    return this._readKeyFile;
  }

  // read_method - computed: false, optional: true, required: false
  private _readMethod?: string; 
  public get readMethod() {
    return this.getStringAttribute('read_method');
  }
  public set readMethod(value: string) {
    this._readMethod = value;
  }
  public resetReadMethod() {
    this._readMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readMethodInput() {
    return this._readMethod;
  }

  // read_parameters - computed: false, optional: true, required: false
  private _readParameters?: { [key: string]: string }; 
  public get readParameters() {
    return this.getStringMapAttribute('read_parameters');
  }
  public set readParameters(value: { [key: string]: string }) {
    this._readParameters = value;
  }
  public resetReadParameters() {
    this._readParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readParametersInput() {
    return this._readParameters;
  }

  // read_request_body - computed: false, optional: true, required: false
  private _readRequestBody?: string; 
  public get readRequestBody() {
    return this.getStringAttribute('read_request_body');
  }
  public set readRequestBody(value: string) {
    this._readRequestBody = value;
  }
  public resetReadRequestBody() {
    this._readRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRequestBodyInput() {
    return this._readRequestBody;
  }

  // read_response_codes - computed: false, optional: true, required: false
  private _readResponseCodes?: string[]; 
  public get readResponseCodes() {
    return this.getListAttribute('read_response_codes');
  }
  public set readResponseCodes(value: string[]) {
    this._readResponseCodes = value;
  }
  public resetReadResponseCodes() {
    this._readResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readResponseCodesInput() {
    return this._readResponseCodes;
  }

  // read_skip_tls_verify - computed: false, optional: true, required: false
  private _readSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get readSkipTlsVerify() {
    return this.getBooleanAttribute('read_skip_tls_verify');
  }
  public set readSkipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._readSkipTlsVerify = value;
  }
  public resetReadSkipTlsVerify() {
    this._readSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readSkipTlsVerifyInput() {
    return this._readSkipTlsVerify;
  }

  // read_url - computed: false, optional: true, required: false
  private _readUrl?: string; 
  public get readUrl() {
    return this.getStringAttribute('read_url');
  }
  public set readUrl(value: string) {
    this._readUrl = value;
  }
  public resetReadUrl() {
    this._readUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readUrlInput() {
    return this._readUrl;
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

  // retry_interval - computed: true, optional: true, required: false
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

  // skip_destroy - computed: true, optional: true, required: false
  private _skipDestroy?: boolean | cdktf.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktf.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
  }

  // skip_read - computed: true, optional: true, required: false
  private _skipRead?: boolean | cdktf.IResolvable; 
  public get skipRead() {
    return this.getBooleanAttribute('skip_read');
  }
  public set skipRead(value: boolean | cdktf.IResolvable) {
    this._skipRead = value;
  }
  public resetSkipRead() {
    this._skipRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipReadInput() {
    return this._skipRead;
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
      destroy_ca_cert_directory: cdktf.stringToTerraform(this._destroyCaCertDirectory),
      destroy_ca_cert_file: cdktf.stringToTerraform(this._destroyCaCertFile),
      destroy_cert_file: cdktf.stringToTerraform(this._destroyCertFile),
      destroy_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._destroyHeaders),
      destroy_key_file: cdktf.stringToTerraform(this._destroyKeyFile),
      destroy_max_retry: cdktf.numberToTerraform(this._destroyMaxRetry),
      destroy_method: cdktf.stringToTerraform(this._destroyMethod),
      destroy_request_body: cdktf.stringToTerraform(this._destroyRequestBody),
      destroy_request_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._destroyRequestParameters),
      destroy_response_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destroyResponseCodes),
      destroy_retry_interval: cdktf.numberToTerraform(this._destroyRetryInterval),
      destroy_skip_tls_verify: cdktf.booleanToTerraform(this._destroySkipTlsVerify),
      destroy_timeout: cdktf.numberToTerraform(this._destroyTimeout),
      destroy_url: cdktf.stringToTerraform(this._destroyUrl),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      ignore_response_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreResponseFields),
      key_file: cdktf.stringToTerraform(this._keyFile),
      max_retry: cdktf.numberToTerraform(this._maxRetry),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      read_ca_cert_directory: cdktf.stringToTerraform(this._readCaCertDirectory),
      read_ca_cert_file: cdktf.stringToTerraform(this._readCaCertFile),
      read_cert_file: cdktf.stringToTerraform(this._readCertFile),
      read_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._readHeaders),
      read_key_file: cdktf.stringToTerraform(this._readKeyFile),
      read_method: cdktf.stringToTerraform(this._readMethod),
      read_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._readParameters),
      read_request_body: cdktf.stringToTerraform(this._readRequestBody),
      read_response_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readResponseCodes),
      read_skip_tls_verify: cdktf.booleanToTerraform(this._readSkipTlsVerify),
      read_url: cdktf.stringToTerraform(this._readUrl),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestParameters),
      response_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseCodes),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
      skip_read: cdktf.booleanToTerraform(this._skipRead),
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
      destroy_ca_cert_directory: {
        value: cdktf.stringToHclTerraform(this._destroyCaCertDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_ca_cert_file: {
        value: cdktf.stringToHclTerraform(this._destroyCaCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_cert_file: {
        value: cdktf.stringToHclTerraform(this._destroyCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._destroyHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destroy_key_file: {
        value: cdktf.stringToHclTerraform(this._destroyKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_max_retry: {
        value: cdktf.numberToHclTerraform(this._destroyMaxRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destroy_method: {
        value: cdktf.stringToHclTerraform(this._destroyMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_request_body: {
        value: cdktf.stringToHclTerraform(this._destroyRequestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_request_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._destroyRequestParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destroy_response_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destroyResponseCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destroy_retry_interval: {
        value: cdktf.numberToHclTerraform(this._destroyRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destroy_skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._destroySkipTlsVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destroy_timeout: {
        value: cdktf.numberToHclTerraform(this._destroyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destroy_url: {
        value: cdktf.stringToHclTerraform(this._destroyUrl),
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
      ignore_response_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreResponseFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      read_ca_cert_directory: {
        value: cdktf.stringToHclTerraform(this._readCaCertDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_ca_cert_file: {
        value: cdktf.stringToHclTerraform(this._readCaCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_cert_file: {
        value: cdktf.stringToHclTerraform(this._readCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._readHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      read_key_file: {
        value: cdktf.stringToHclTerraform(this._readKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_method: {
        value: cdktf.stringToHclTerraform(this._readMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._readParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      read_request_body: {
        value: cdktf.stringToHclTerraform(this._readRequestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_response_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readResponseCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      read_skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._readSkipTlsVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_url: {
        value: cdktf.stringToHclTerraform(this._readUrl),
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
      skip_destroy: {
        value: cdktf.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_read: {
        value: cdktf.booleanToHclTerraform(this._skipRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
