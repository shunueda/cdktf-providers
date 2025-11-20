// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchIndexTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * An ordered list of component template names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#composed_of ElasticsearchIndexTemplate#composed_of}
  */
  readonly composedOf?: string[];
  /**
  * A list of component template names that are ignored if missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#ignore_missing_component_templates ElasticsearchIndexTemplate#ignore_missing_component_templates}
  */
  readonly ignoreMissingComponentTemplates?: string[];
  /**
  * Array of wildcard (*) expressions used to match the names of data streams and indices during creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#index_patterns ElasticsearchIndexTemplate#index_patterns}
  */
  readonly indexPatterns: string[];
  /**
  * Optional user metadata about the index template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#metadata ElasticsearchIndexTemplate#metadata}
  */
  readonly metadata?: string;
  /**
  * Name of the index template to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#name ElasticsearchIndexTemplate#name}
  */
  readonly name: string;
  /**
  * Priority to determine index template precedence when a new data stream or index is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#priority ElasticsearchIndexTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Version number used to manage index templates externally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#version ElasticsearchIndexTemplate#version}
  */
  readonly version?: number;
  /**
  * data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#data_stream ElasticsearchIndexTemplate#data_stream}
  */
  readonly dataStream?: ElasticsearchIndexTemplateDataStream;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#elasticsearch_connection ElasticsearchIndexTemplate#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchIndexTemplateElasticsearchConnection;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#template ElasticsearchIndexTemplate#template}
  */
  readonly template?: ElasticsearchIndexTemplateTemplate;
}
export interface ElasticsearchIndexTemplateDataStream {
  /**
  * If `true`, the data stream supports custom routing. Defaults to `false`. Available only in **8.x**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#allow_custom_routing ElasticsearchIndexTemplate#allow_custom_routing}
  */
  readonly allowCustomRouting?: boolean | cdktf.IResolvable;
  /**
  * If true, the data stream is hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#hidden ElasticsearchIndexTemplate#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexTemplateDataStreamToTerraform(struct?: ElasticsearchIndexTemplateDataStreamOutputReference | ElasticsearchIndexTemplateDataStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_custom_routing: cdktf.booleanToTerraform(struct!.allowCustomRouting),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
  }
}


export function elasticsearchIndexTemplateDataStreamToHclTerraform(struct?: ElasticsearchIndexTemplateDataStreamOutputReference | ElasticsearchIndexTemplateDataStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_custom_routing: {
      value: cdktf.booleanToHclTerraform(struct!.allowCustomRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexTemplateDataStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexTemplateDataStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCustomRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCustomRouting = this._allowCustomRouting;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexTemplateDataStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCustomRouting = undefined;
      this._hidden = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCustomRouting = value.allowCustomRouting;
      this._hidden = value.hidden;
    }
  }

  // allow_custom_routing - computed: false, optional: true, required: false
  private _allowCustomRouting?: boolean | cdktf.IResolvable; 
  public get allowCustomRouting() {
    return this.getBooleanAttribute('allow_custom_routing');
  }
  public set allowCustomRouting(value: boolean | cdktf.IResolvable) {
    this._allowCustomRouting = value;
  }
  public resetAllowCustomRouting() {
    this._allowCustomRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomRoutingInput() {
    return this._allowCustomRouting;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }
}
export interface ElasticsearchIndexTemplateElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#api_key ElasticsearchIndexTemplate#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#bearer_token ElasticsearchIndexTemplate#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#ca_data ElasticsearchIndexTemplate#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#ca_file ElasticsearchIndexTemplate#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#cert_data ElasticsearchIndexTemplate#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#cert_file ElasticsearchIndexTemplate#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#endpoints ElasticsearchIndexTemplate#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#es_client_authentication ElasticsearchIndexTemplate#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#headers ElasticsearchIndexTemplate#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#insecure ElasticsearchIndexTemplate#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#key_data ElasticsearchIndexTemplate#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#key_file ElasticsearchIndexTemplate#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#password ElasticsearchIndexTemplate#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#username ElasticsearchIndexTemplate#username}
  */
  readonly username?: string;
}

export function elasticsearchIndexTemplateElasticsearchConnectionToTerraform(struct?: ElasticsearchIndexTemplateElasticsearchConnectionOutputReference | ElasticsearchIndexTemplateElasticsearchConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    ca_data: cdktf.stringToTerraform(struct!.caData),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    es_client_authentication: cdktf.stringToTerraform(struct!.esClientAuthentication),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function elasticsearchIndexTemplateElasticsearchConnectionToHclTerraform(struct?: ElasticsearchIndexTemplateElasticsearchConnectionOutputReference | ElasticsearchIndexTemplateElasticsearchConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_data: {
      value: cdktf.stringToHclTerraform(struct!.caData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
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
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    es_client_authentication: {
      value: cdktf.stringToHclTerraform(struct!.esClientAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexTemplateElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexTemplateElasticsearchConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._caData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caData = this._caData;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._esClientAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.esClientAuthentication = this._esClientAuthentication;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexTemplateElasticsearchConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._bearerToken = undefined;
      this._caData = undefined;
      this._caFile = undefined;
      this._certData = undefined;
      this._certFile = undefined;
      this._endpoints = undefined;
      this._esClientAuthentication = undefined;
      this._headers = undefined;
      this._insecure = undefined;
      this._keyData = undefined;
      this._keyFile = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._bearerToken = value.bearerToken;
      this._caData = value.caData;
      this._caFile = value.caFile;
      this._certData = value.certData;
      this._certFile = value.certFile;
      this._endpoints = value.endpoints;
      this._esClientAuthentication = value.esClientAuthentication;
      this._headers = value.headers;
      this._insecure = value.insecure;
      this._keyData = value.keyData;
      this._keyFile = value.keyFile;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // ca_data - computed: false, optional: true, required: false
  private _caData?: string; 
  public get caData() {
    return this.getStringAttribute('ca_data');
  }
  public set caData(value: string) {
    this._caData = value;
  }
  public resetCaData() {
    this._caData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDataInput() {
    return this._caData;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // es_client_authentication - computed: false, optional: true, required: false
  private _esClientAuthentication?: string; 
  public get esClientAuthentication() {
    return this.getStringAttribute('es_client_authentication');
  }
  public set esClientAuthentication(value: string) {
    this._esClientAuthentication = value;
  }
  public resetEsClientAuthentication() {
    this._esClientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esClientAuthenticationInput() {
    return this._esClientAuthentication;
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

  // key_data - computed: false, optional: true, required: false
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
}
export interface ElasticsearchIndexTemplateTemplateAlias {
  /**
  * Query used to limit documents the alias can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#filter ElasticsearchIndexTemplate#filter}
  */
  readonly filter?: string;
  /**
  * Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#index_routing ElasticsearchIndexTemplate#index_routing}
  */
  readonly indexRouting?: string;
  /**
  * If true, the alias is hidden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#is_hidden ElasticsearchIndexTemplate#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * If true, the index is the write index for the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#is_write_index ElasticsearchIndexTemplate#is_write_index}
  */
  readonly isWriteIndex?: boolean | cdktf.IResolvable;
  /**
  * The alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#name ElasticsearchIndexTemplate#name}
  */
  readonly name: string;
  /**
  * Value used to route indexing and search operations to a specific shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#routing ElasticsearchIndexTemplate#routing}
  */
  readonly routing?: string;
  /**
  * Value used to route search operations to a specific shard. If specified, this overwrites the routing value for search operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#search_routing ElasticsearchIndexTemplate#search_routing}
  */
  readonly searchRouting?: string;
}

export function elasticsearchIndexTemplateTemplateAliasToTerraform(struct?: ElasticsearchIndexTemplateTemplateAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    index_routing: cdktf.stringToTerraform(struct!.indexRouting),
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    is_write_index: cdktf.booleanToTerraform(struct!.isWriteIndex),
    name: cdktf.stringToTerraform(struct!.name),
    routing: cdktf.stringToTerraform(struct!.routing),
    search_routing: cdktf.stringToTerraform(struct!.searchRouting),
  }
}


export function elasticsearchIndexTemplateTemplateAliasToHclTerraform(struct?: ElasticsearchIndexTemplateTemplateAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_routing: {
      value: cdktf.stringToHclTerraform(struct!.indexRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.isHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_write_index: {
      value: cdktf.booleanToHclTerraform(struct!.isWriteIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing: {
      value: cdktf.stringToHclTerraform(struct!.routing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_routing: {
      value: cdktf.stringToHclTerraform(struct!.searchRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexTemplateTemplateAliasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElasticsearchIndexTemplateTemplateAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._indexRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRouting = this._indexRouting;
    }
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._isWriteIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWriteIndex = this._isWriteIndex;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routing !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing;
    }
    if (this._searchRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchRouting = this._searchRouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexTemplateTemplateAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._indexRouting = undefined;
      this._isHidden = undefined;
      this._isWriteIndex = undefined;
      this._name = undefined;
      this._routing = undefined;
      this._searchRouting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._indexRouting = value.indexRouting;
      this._isHidden = value.isHidden;
      this._isWriteIndex = value.isWriteIndex;
      this._name = value.name;
      this._routing = value.routing;
      this._searchRouting = value.searchRouting;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // index_routing - computed: false, optional: true, required: false
  private _indexRouting?: string; 
  public get indexRouting() {
    return this.getStringAttribute('index_routing');
  }
  public set indexRouting(value: string) {
    this._indexRouting = value;
  }
  public resetIndexRouting() {
    this._indexRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRoutingInput() {
    return this._indexRouting;
  }

  // is_hidden - computed: false, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // is_write_index - computed: false, optional: true, required: false
  private _isWriteIndex?: boolean | cdktf.IResolvable; 
  public get isWriteIndex() {
    return this.getBooleanAttribute('is_write_index');
  }
  public set isWriteIndex(value: boolean | cdktf.IResolvable) {
    this._isWriteIndex = value;
  }
  public resetIsWriteIndex() {
    this._isWriteIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWriteIndexInput() {
    return this._isWriteIndex;
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

  // routing - computed: false, optional: true, required: false
  private _routing?: string; 
  public get routing() {
    return this.getStringAttribute('routing');
  }
  public set routing(value: string) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing;
  }

  // search_routing - computed: false, optional: true, required: false
  private _searchRouting?: string; 
  public get searchRouting() {
    return this.getStringAttribute('search_routing');
  }
  public set searchRouting(value: string) {
    this._searchRouting = value;
  }
  public resetSearchRouting() {
    this._searchRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchRoutingInput() {
    return this._searchRouting;
  }
}

export class ElasticsearchIndexTemplateTemplateAliasList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchIndexTemplateTemplateAlias[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElasticsearchIndexTemplateTemplateAliasOutputReference {
    return new ElasticsearchIndexTemplateTemplateAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchIndexTemplateTemplateLifecycle {
  /**
  * The retention period of the data indexed in this data stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#data_retention ElasticsearchIndexTemplate#data_retention}
  */
  readonly dataRetention: string;
}

export function elasticsearchIndexTemplateTemplateLifecycleToTerraform(struct?: ElasticsearchIndexTemplateTemplateLifecycleOutputReference | ElasticsearchIndexTemplateTemplateLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_retention: cdktf.stringToTerraform(struct!.dataRetention),
  }
}


export function elasticsearchIndexTemplateTemplateLifecycleToHclTerraform(struct?: ElasticsearchIndexTemplateTemplateLifecycleOutputReference | ElasticsearchIndexTemplateTemplateLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_retention: {
      value: cdktf.stringToHclTerraform(struct!.dataRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexTemplateTemplateLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexTemplateTemplateLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRetention = this._dataRetention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexTemplateTemplateLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataRetention = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataRetention = value.dataRetention;
    }
  }

  // data_retention - computed: false, optional: false, required: true
  private _dataRetention?: string; 
  public get dataRetention() {
    return this.getStringAttribute('data_retention');
  }
  public set dataRetention(value: string) {
    this._dataRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInput() {
    return this._dataRetention;
  }
}
export interface ElasticsearchIndexTemplateTemplate {
  /**
  * Mapping for fields in the index. Should be specified as a JSON object of field mappings. See the documentation (https://www.elastic.co/guide/en/elasticsearch/reference/current/explicit-mapping.html) for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#mappings ElasticsearchIndexTemplate#mappings}
  */
  readonly mappings?: string;
  /**
  * Configuration options for the index. See, https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html#index-modules-settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#settings ElasticsearchIndexTemplate#settings}
  */
  readonly settings?: string;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#alias ElasticsearchIndexTemplate#alias}
  */
  readonly alias?: ElasticsearchIndexTemplateTemplateAlias[] | cdktf.IResolvable;
  /**
  * lifecycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#lifecycle ElasticsearchIndexTemplate#lifecycle}
  */
  readonly lifecycle?: ElasticsearchIndexTemplateTemplateLifecycle;
}

export function elasticsearchIndexTemplateTemplateToTerraform(struct?: ElasticsearchIndexTemplateTemplateOutputReference | ElasticsearchIndexTemplateTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mappings: cdktf.stringToTerraform(struct!.mappings),
    settings: cdktf.stringToTerraform(struct!.settings),
    alias: cdktf.listMapper(elasticsearchIndexTemplateTemplateAliasToTerraform, true)(struct!.alias),
    lifecycle: elasticsearchIndexTemplateTemplateLifecycleToTerraform(struct!.lifecycle),
  }
}


export function elasticsearchIndexTemplateTemplateToHclTerraform(struct?: ElasticsearchIndexTemplateTemplateOutputReference | ElasticsearchIndexTemplateTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mappings: {
      value: cdktf.stringToHclTerraform(struct!.mappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.stringToHclTerraform(struct!.settings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktf.listMapperHcl(elasticsearchIndexTemplateTemplateAliasToHclTerraform, true)(struct!.alias),
      isBlock: true,
      type: "set",
      storageClassType: "ElasticsearchIndexTemplateTemplateAliasList",
    },
    lifecycle: {
      value: elasticsearchIndexTemplateTemplateLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "set",
      storageClassType: "ElasticsearchIndexTemplateTemplateLifecycleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexTemplateTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexTemplateTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._alias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexTemplateTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappings = undefined;
      this._settings = undefined;
      this._alias.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappings = value.mappings;
      this._settings = value.settings;
      this._alias.internalValue = value.alias;
      this._lifecycle.internalValue = value.lifecycle;
    }
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings?: string; 
  public get mappings() {
    return this.getStringAttribute('mappings');
  }
  public set mappings(value: string) {
    this._mappings = value;
  }
  public resetMappings() {
    this._mappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // alias - computed: false, optional: true, required: false
  private _alias = new ElasticsearchIndexTemplateTemplateAliasList(this, "alias", true);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: ElasticsearchIndexTemplateTemplateAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new ElasticsearchIndexTemplateTemplateLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: ElasticsearchIndexTemplateTemplateLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template elasticstack_elasticsearch_index_template}
*/
export class ElasticsearchIndexTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_index_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchIndexTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchIndexTemplate to import
  * @param importFromId The id of the existing ElasticsearchIndexTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchIndexTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_index_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_template elasticstack_elasticsearch_index_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchIndexTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchIndexTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_index_template',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._composedOf = config.composedOf;
    this._ignoreMissingComponentTemplates = config.ignoreMissingComponentTemplates;
    this._indexPatterns = config.indexPatterns;
    this._metadata = config.metadata;
    this._name = config.name;
    this._priority = config.priority;
    this._version = config.version;
    this._dataStream.internalValue = config.dataStream;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // composed_of - computed: true, optional: true, required: false
  private _composedOf?: string[]; 
  public get composedOf() {
    return this.getListAttribute('composed_of');
  }
  public set composedOf(value: string[]) {
    this._composedOf = value;
  }
  public resetComposedOf() {
    this._composedOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composedOfInput() {
    return this._composedOf;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing_component_templates - computed: true, optional: true, required: false
  private _ignoreMissingComponentTemplates?: string[]; 
  public get ignoreMissingComponentTemplates() {
    return this.getListAttribute('ignore_missing_component_templates');
  }
  public set ignoreMissingComponentTemplates(value: string[]) {
    this._ignoreMissingComponentTemplates = value;
  }
  public resetIgnoreMissingComponentTemplates() {
    this._ignoreMissingComponentTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingComponentTemplatesInput() {
    return this._ignoreMissingComponentTemplates;
  }

  // index_patterns - computed: false, optional: false, required: true
  private _indexPatterns?: string[]; 
  public get indexPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('index_patterns'));
  }
  public set indexPatterns(value: string[]) {
    this._indexPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPatternsInput() {
    return this._indexPatterns;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // data_stream - computed: false, optional: true, required: false
  private _dataStream = new ElasticsearchIndexTemplateDataStreamOutputReference(this, "data_stream");
  public get dataStream() {
    return this._dataStream;
  }
  public putDataStream(value: ElasticsearchIndexTemplateDataStream) {
    this._dataStream.internalValue = value;
  }
  public resetDataStream() {
    this._dataStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamInput() {
    return this._dataStream.internalValue;
  }

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchIndexTemplateElasticsearchConnectionOutputReference(this, "elasticsearch_connection");
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchIndexTemplateElasticsearchConnection) {
    this._elasticsearchConnection.internalValue = value;
  }
  public resetElasticsearchConnection() {
    this._elasticsearchConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionInput() {
    return this._elasticsearchConnection.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ElasticsearchIndexTemplateTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ElasticsearchIndexTemplateTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      composed_of: cdktf.listMapper(cdktf.stringToTerraform, false)(this._composedOf),
      ignore_missing_component_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreMissingComponentTemplates),
      index_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexPatterns),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      version: cdktf.numberToTerraform(this._version),
      data_stream: elasticsearchIndexTemplateDataStreamToTerraform(this._dataStream.internalValue),
      elasticsearch_connection: elasticsearchIndexTemplateElasticsearchConnectionToTerraform(this._elasticsearchConnection.internalValue),
      template: elasticsearchIndexTemplateTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      composed_of: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._composedOf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ignore_missing_component_templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreMissingComponentTemplates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      index_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexPatterns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_stream: {
        value: elasticsearchIndexTemplateDataStreamToHclTerraform(this._dataStream.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexTemplateDataStreamList",
      },
      elasticsearch_connection: {
        value: elasticsearchIndexTemplateElasticsearchConnectionToHclTerraform(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexTemplateElasticsearchConnectionList",
      },
      template: {
        value: elasticsearchIndexTemplateTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexTemplateTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
