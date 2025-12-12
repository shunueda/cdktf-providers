// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchDataStreamLifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Every document added to this data stream will be stored at least for this time frame. When empty, every document in this data stream will be stored indefinitely
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#data_retention ElasticsearchDataStreamLifecycle#data_retention}
  */
  readonly dataRetention?: string;
  /**
  * Downsampling configuration objects, each defining an after interval representing when the backing index is meant to be downsampled and a fixed_interval representing the downsampling interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#downsampling ElasticsearchDataStreamLifecycle#downsampling}
  */
  readonly downsampling?: ElasticsearchDataStreamLifecycleDownsampling[] | cdktf.IResolvable;
  /**
  * Data stream lifecycle on/off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#enabled ElasticsearchDataStreamLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines how wildcard patterns in the `indices` parameter match data streams and indices. Supports comma-separated values, such as `closed,hidden`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#expand_wildcards ElasticsearchDataStreamLifecycle#expand_wildcards}
  */
  readonly expandWildcards?: string;
  /**
  * Name of the data stream. Supports wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#name ElasticsearchDataStreamLifecycle#name}
  */
  readonly name: string;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#elasticsearch_connection ElasticsearchDataStreamLifecycle#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchDataStreamLifecycleElasticsearchConnection[] | cdktf.IResolvable;
}
export interface ElasticsearchDataStreamLifecycleDownsampling {
  /**
  * Interval representing when the backing index is meant to be downsampled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#after ElasticsearchDataStreamLifecycle#after}
  */
  readonly after: string;
  /**
  * The interval at which to aggregate the original time series index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#fixed_interval ElasticsearchDataStreamLifecycle#fixed_interval}
  */
  readonly fixedInterval: string;
}

export function elasticsearchDataStreamLifecycleDownsamplingToTerraform(struct?: ElasticsearchDataStreamLifecycleDownsampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: cdktf.stringToTerraform(struct!.after),
    fixed_interval: cdktf.stringToTerraform(struct!.fixedInterval),
  }
}


export function elasticsearchDataStreamLifecycleDownsamplingToHclTerraform(struct?: ElasticsearchDataStreamLifecycleDownsampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: cdktf.stringToHclTerraform(struct!.after),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_interval: {
      value: cdktf.stringToHclTerraform(struct!.fixedInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchDataStreamLifecycleDownsamplingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchDataStreamLifecycleDownsampling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after;
    }
    if (this._fixedInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedInterval = this._fixedInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDataStreamLifecycleDownsampling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after = undefined;
      this._fixedInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after = value.after;
      this._fixedInterval = value.fixedInterval;
    }
  }

  // after - computed: false, optional: false, required: true
  private _after?: string; 
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string) {
    this._after = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // fixed_interval - computed: false, optional: false, required: true
  private _fixedInterval?: string; 
  public get fixedInterval() {
    return this.getStringAttribute('fixed_interval');
  }
  public set fixedInterval(value: string) {
    this._fixedInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIntervalInput() {
    return this._fixedInterval;
  }
}

export class ElasticsearchDataStreamLifecycleDownsamplingList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchDataStreamLifecycleDownsampling[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchDataStreamLifecycleDownsamplingOutputReference {
    return new ElasticsearchDataStreamLifecycleDownsamplingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchDataStreamLifecycleElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#api_key ElasticsearchDataStreamLifecycle#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#bearer_token ElasticsearchDataStreamLifecycle#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#ca_data ElasticsearchDataStreamLifecycle#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#ca_file ElasticsearchDataStreamLifecycle#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#cert_data ElasticsearchDataStreamLifecycle#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#cert_file ElasticsearchDataStreamLifecycle#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#endpoints ElasticsearchDataStreamLifecycle#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#es_client_authentication ElasticsearchDataStreamLifecycle#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#headers ElasticsearchDataStreamLifecycle#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#insecure ElasticsearchDataStreamLifecycle#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#key_data ElasticsearchDataStreamLifecycle#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#key_file ElasticsearchDataStreamLifecycle#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#password ElasticsearchDataStreamLifecycle#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#username ElasticsearchDataStreamLifecycle#username}
  */
  readonly username?: string;
}

export function elasticsearchDataStreamLifecycleElasticsearchConnectionToTerraform(struct?: ElasticsearchDataStreamLifecycleElasticsearchConnection | cdktf.IResolvable): any {
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


export function elasticsearchDataStreamLifecycleElasticsearchConnectionToHclTerraform(struct?: ElasticsearchDataStreamLifecycleElasticsearchConnection | cdktf.IResolvable): any {
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

export class ElasticsearchDataStreamLifecycleElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchDataStreamLifecycleElasticsearchConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ElasticsearchDataStreamLifecycleElasticsearchConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ElasticsearchDataStreamLifecycleElasticsearchConnectionList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchDataStreamLifecycleElasticsearchConnection[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchDataStreamLifecycleElasticsearchConnectionOutputReference {
    return new ElasticsearchDataStreamLifecycleElasticsearchConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle elasticstack_elasticsearch_data_stream_lifecycle}
*/
export class ElasticsearchDataStreamLifecycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_data_stream_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchDataStreamLifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchDataStreamLifecycle to import
  * @param importFromId The id of the existing ElasticsearchDataStreamLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchDataStreamLifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_data_stream_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_data_stream_lifecycle elasticstack_elasticsearch_data_stream_lifecycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchDataStreamLifecycleConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchDataStreamLifecycleConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_data_stream_lifecycle',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataRetention = config.dataRetention;
    this._downsampling.internalValue = config.downsampling;
    this._enabled = config.enabled;
    this._expandWildcards = config.expandWildcards;
    this._name = config.name;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_retention - computed: false, optional: true, required: false
  private _dataRetention?: string; 
  public get dataRetention() {
    return this.getStringAttribute('data_retention');
  }
  public set dataRetention(value: string) {
    this._dataRetention = value;
  }
  public resetDataRetention() {
    this._dataRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInput() {
    return this._dataRetention;
  }

  // downsampling - computed: false, optional: true, required: false
  private _downsampling = new ElasticsearchDataStreamLifecycleDownsamplingList(this, "downsampling", false);
  public get downsampling() {
    return this._downsampling;
  }
  public putDownsampling(value: ElasticsearchDataStreamLifecycleDownsampling[] | cdktf.IResolvable) {
    this._downsampling.internalValue = value;
  }
  public resetDownsampling() {
    this._downsampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downsamplingInput() {
    return this._downsampling.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expand_wildcards - computed: true, optional: true, required: false
  private _expandWildcards?: string; 
  public get expandWildcards() {
    return this.getStringAttribute('expand_wildcards');
  }
  public set expandWildcards(value: string) {
    this._expandWildcards = value;
  }
  public resetExpandWildcards() {
    this._expandWildcards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandWildcardsInput() {
    return this._expandWildcards;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchDataStreamLifecycleElasticsearchConnectionList(this, "elasticsearch_connection", false);
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchDataStreamLifecycleElasticsearchConnection[] | cdktf.IResolvable) {
    this._elasticsearchConnection.internalValue = value;
  }
  public resetElasticsearchConnection() {
    this._elasticsearchConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionInput() {
    return this._elasticsearchConnection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_retention: cdktf.stringToTerraform(this._dataRetention),
      downsampling: cdktf.listMapper(elasticsearchDataStreamLifecycleDownsamplingToTerraform, false)(this._downsampling.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expand_wildcards: cdktf.stringToTerraform(this._expandWildcards),
      name: cdktf.stringToTerraform(this._name),
      elasticsearch_connection: cdktf.listMapper(elasticsearchDataStreamLifecycleElasticsearchConnectionToTerraform, true)(this._elasticsearchConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_retention: {
        value: cdktf.stringToHclTerraform(this._dataRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downsampling: {
        value: cdktf.listMapperHcl(elasticsearchDataStreamLifecycleDownsamplingToHclTerraform, false)(this._downsampling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchDataStreamLifecycleDownsamplingList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expand_wildcards: {
        value: cdktf.stringToHclTerraform(this._expandWildcards),
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
      elasticsearch_connection: {
        value: cdktf.listMapperHcl(elasticsearchDataStreamLifecycleElasticsearchConnectionToHclTerraform, true)(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchDataStreamLifecycleElasticsearchConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
