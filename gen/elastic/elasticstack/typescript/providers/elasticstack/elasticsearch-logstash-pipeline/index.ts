// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchLogstashPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#description ElasticsearchLogstashPipeline#description}
  */
  readonly description?: string;
  /**
  * Configuration for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline ElasticsearchLogstashPipeline#pipeline}
  */
  readonly pipeline: string;
  /**
  * Time in milliseconds to wait for each event before sending an undersized batch to pipeline workers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_batch_delay ElasticsearchLogstashPipeline#pipeline_batch_delay}
  */
  readonly pipelineBatchDelay?: number;
  /**
  * The maximum number of events an individual worker thread collects before executing filters and outputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_batch_size ElasticsearchLogstashPipeline#pipeline_batch_size}
  */
  readonly pipelineBatchSize?: number;
  /**
  * Sets the pipeline default value for ecs_compatibility, a setting that is available to plugins that implement an ECS compatibility mode for use with the Elastic Common Schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_ecs_compatibility ElasticsearchLogstashPipeline#pipeline_ecs_compatibility}
  */
  readonly pipelineEcsCompatibility?: string;
  /**
  * Identifier for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_id ElasticsearchLogstashPipeline#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Optional JSON metadata about the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_metadata ElasticsearchLogstashPipeline#pipeline_metadata}
  */
  readonly pipelineMetadata?: string;
  /**
  * Set the pipeline event ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_ordered ElasticsearchLogstashPipeline#pipeline_ordered}
  */
  readonly pipelineOrdered?: string;
  /**
  * (Beta) Load Java plugins in independent classloaders to isolate their dependencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_plugin_classloaders ElasticsearchLogstashPipeline#pipeline_plugin_classloaders}
  */
  readonly pipelinePluginClassloaders?: boolean | cdktf.IResolvable;
  /**
  * Forces Logstash to exit during shutdown even if there are still inflight events in memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_unsafe_shutdown ElasticsearchLogstashPipeline#pipeline_unsafe_shutdown}
  */
  readonly pipelineUnsafeShutdown?: boolean | cdktf.IResolvable;
  /**
  * The number of parallel workers used to run the filter and output stages of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#pipeline_workers ElasticsearchLogstashPipeline#pipeline_workers}
  */
  readonly pipelineWorkers?: number;
  /**
  * The maximum number of ACKed events before forcing a checkpoint when persistent queues are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_checkpoint_acks ElasticsearchLogstashPipeline#queue_checkpoint_acks}
  */
  readonly queueCheckpointAcks?: number;
  /**
  * When enabled, Logstash will retry four times per attempted checkpoint write for any checkpoint writes that fail. Any subsequent errors are not retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_checkpoint_retry ElasticsearchLogstashPipeline#queue_checkpoint_retry}
  */
  readonly queueCheckpointRetry?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of written events before forcing a checkpoint when persistent queues are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_checkpoint_writes ElasticsearchLogstashPipeline#queue_checkpoint_writes}
  */
  readonly queueCheckpointWrites?: number;
  /**
  * When enabled, Logstash waits until the persistent queue is drained before shutting down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_drain ElasticsearchLogstashPipeline#queue_drain}
  */
  readonly queueDrain?: boolean | cdktf.IResolvable;
  /**
  * Units for the total capacity of the queue when persistent queues are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_max_bytes ElasticsearchLogstashPipeline#queue_max_bytes}
  */
  readonly queueMaxBytes?: string;
  /**
  * The maximum number of unread events in the queue when persistent queues are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_max_events ElasticsearchLogstashPipeline#queue_max_events}
  */
  readonly queueMaxEvents?: number;
  /**
  * The size of the page data files used when persistent queues are enabled. The queue data consists of append-only data files separated into pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_page_capacity ElasticsearchLogstashPipeline#queue_page_capacity}
  */
  readonly queuePageCapacity?: string;
  /**
  * The internal queueing model for event buffering. Options are memory for in-memory queueing, or persisted for disk-based acknowledged queueing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#queue_type ElasticsearchLogstashPipeline#queue_type}
  */
  readonly queueType?: string;
  /**
  * User who last updated the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#username ElasticsearchLogstashPipeline#username}
  */
  readonly username?: string;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#elasticsearch_connection ElasticsearchLogstashPipeline#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchLogstashPipelineElasticsearchConnection;
}
export interface ElasticsearchLogstashPipelineElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#api_key ElasticsearchLogstashPipeline#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#bearer_token ElasticsearchLogstashPipeline#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#ca_data ElasticsearchLogstashPipeline#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#ca_file ElasticsearchLogstashPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#cert_data ElasticsearchLogstashPipeline#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#cert_file ElasticsearchLogstashPipeline#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#endpoints ElasticsearchLogstashPipeline#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#es_client_authentication ElasticsearchLogstashPipeline#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#headers ElasticsearchLogstashPipeline#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#insecure ElasticsearchLogstashPipeline#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#key_data ElasticsearchLogstashPipeline#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#key_file ElasticsearchLogstashPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#password ElasticsearchLogstashPipeline#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#username ElasticsearchLogstashPipeline#username}
  */
  readonly username?: string;
}

export function elasticsearchLogstashPipelineElasticsearchConnectionToTerraform(struct?: ElasticsearchLogstashPipelineElasticsearchConnectionOutputReference | ElasticsearchLogstashPipelineElasticsearchConnection): any {
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


export function elasticsearchLogstashPipelineElasticsearchConnectionToHclTerraform(struct?: ElasticsearchLogstashPipelineElasticsearchConnectionOutputReference | ElasticsearchLogstashPipelineElasticsearchConnection): any {
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

export class ElasticsearchLogstashPipelineElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchLogstashPipelineElasticsearchConnection | undefined {
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

  public set internalValue(value: ElasticsearchLogstashPipelineElasticsearchConnection | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline elasticstack_elasticsearch_logstash_pipeline}
*/
export class ElasticsearchLogstashPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_logstash_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchLogstashPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchLogstashPipeline to import
  * @param importFromId The id of the existing ElasticsearchLogstashPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchLogstashPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_logstash_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_logstash_pipeline elasticstack_elasticsearch_logstash_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchLogstashPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchLogstashPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_logstash_pipeline',
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
    this._description = config.description;
    this._pipeline = config.pipeline;
    this._pipelineBatchDelay = config.pipelineBatchDelay;
    this._pipelineBatchSize = config.pipelineBatchSize;
    this._pipelineEcsCompatibility = config.pipelineEcsCompatibility;
    this._pipelineId = config.pipelineId;
    this._pipelineMetadata = config.pipelineMetadata;
    this._pipelineOrdered = config.pipelineOrdered;
    this._pipelinePluginClassloaders = config.pipelinePluginClassloaders;
    this._pipelineUnsafeShutdown = config.pipelineUnsafeShutdown;
    this._pipelineWorkers = config.pipelineWorkers;
    this._queueCheckpointAcks = config.queueCheckpointAcks;
    this._queueCheckpointRetry = config.queueCheckpointRetry;
    this._queueCheckpointWrites = config.queueCheckpointWrites;
    this._queueDrain = config.queueDrain;
    this._queueMaxBytes = config.queueMaxBytes;
    this._queueMaxEvents = config.queueMaxEvents;
    this._queuePageCapacity = config.queuePageCapacity;
    this._queueType = config.queueType;
    this._username = config.username;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // pipeline_batch_delay - computed: false, optional: true, required: false
  private _pipelineBatchDelay?: number; 
  public get pipelineBatchDelay() {
    return this.getNumberAttribute('pipeline_batch_delay');
  }
  public set pipelineBatchDelay(value: number) {
    this._pipelineBatchDelay = value;
  }
  public resetPipelineBatchDelay() {
    this._pipelineBatchDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineBatchDelayInput() {
    return this._pipelineBatchDelay;
  }

  // pipeline_batch_size - computed: false, optional: true, required: false
  private _pipelineBatchSize?: number; 
  public get pipelineBatchSize() {
    return this.getNumberAttribute('pipeline_batch_size');
  }
  public set pipelineBatchSize(value: number) {
    this._pipelineBatchSize = value;
  }
  public resetPipelineBatchSize() {
    this._pipelineBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineBatchSizeInput() {
    return this._pipelineBatchSize;
  }

  // pipeline_ecs_compatibility - computed: false, optional: true, required: false
  private _pipelineEcsCompatibility?: string; 
  public get pipelineEcsCompatibility() {
    return this.getStringAttribute('pipeline_ecs_compatibility');
  }
  public set pipelineEcsCompatibility(value: string) {
    this._pipelineEcsCompatibility = value;
  }
  public resetPipelineEcsCompatibility() {
    this._pipelineEcsCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineEcsCompatibilityInput() {
    return this._pipelineEcsCompatibility;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // pipeline_metadata - computed: false, optional: true, required: false
  private _pipelineMetadata?: string; 
  public get pipelineMetadata() {
    return this.getStringAttribute('pipeline_metadata');
  }
  public set pipelineMetadata(value: string) {
    this._pipelineMetadata = value;
  }
  public resetPipelineMetadata() {
    this._pipelineMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineMetadataInput() {
    return this._pipelineMetadata;
  }

  // pipeline_ordered - computed: false, optional: true, required: false
  private _pipelineOrdered?: string; 
  public get pipelineOrdered() {
    return this.getStringAttribute('pipeline_ordered');
  }
  public set pipelineOrdered(value: string) {
    this._pipelineOrdered = value;
  }
  public resetPipelineOrdered() {
    this._pipelineOrdered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineOrderedInput() {
    return this._pipelineOrdered;
  }

  // pipeline_plugin_classloaders - computed: false, optional: true, required: false
  private _pipelinePluginClassloaders?: boolean | cdktf.IResolvable; 
  public get pipelinePluginClassloaders() {
    return this.getBooleanAttribute('pipeline_plugin_classloaders');
  }
  public set pipelinePluginClassloaders(value: boolean | cdktf.IResolvable) {
    this._pipelinePluginClassloaders = value;
  }
  public resetPipelinePluginClassloaders() {
    this._pipelinePluginClassloaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinePluginClassloadersInput() {
    return this._pipelinePluginClassloaders;
  }

  // pipeline_unsafe_shutdown - computed: false, optional: true, required: false
  private _pipelineUnsafeShutdown?: boolean | cdktf.IResolvable; 
  public get pipelineUnsafeShutdown() {
    return this.getBooleanAttribute('pipeline_unsafe_shutdown');
  }
  public set pipelineUnsafeShutdown(value: boolean | cdktf.IResolvable) {
    this._pipelineUnsafeShutdown = value;
  }
  public resetPipelineUnsafeShutdown() {
    this._pipelineUnsafeShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineUnsafeShutdownInput() {
    return this._pipelineUnsafeShutdown;
  }

  // pipeline_workers - computed: false, optional: true, required: false
  private _pipelineWorkers?: number; 
  public get pipelineWorkers() {
    return this.getNumberAttribute('pipeline_workers');
  }
  public set pipelineWorkers(value: number) {
    this._pipelineWorkers = value;
  }
  public resetPipelineWorkers() {
    this._pipelineWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineWorkersInput() {
    return this._pipelineWorkers;
  }

  // queue_checkpoint_acks - computed: false, optional: true, required: false
  private _queueCheckpointAcks?: number; 
  public get queueCheckpointAcks() {
    return this.getNumberAttribute('queue_checkpoint_acks');
  }
  public set queueCheckpointAcks(value: number) {
    this._queueCheckpointAcks = value;
  }
  public resetQueueCheckpointAcks() {
    this._queueCheckpointAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCheckpointAcksInput() {
    return this._queueCheckpointAcks;
  }

  // queue_checkpoint_retry - computed: false, optional: true, required: false
  private _queueCheckpointRetry?: boolean | cdktf.IResolvable; 
  public get queueCheckpointRetry() {
    return this.getBooleanAttribute('queue_checkpoint_retry');
  }
  public set queueCheckpointRetry(value: boolean | cdktf.IResolvable) {
    this._queueCheckpointRetry = value;
  }
  public resetQueueCheckpointRetry() {
    this._queueCheckpointRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCheckpointRetryInput() {
    return this._queueCheckpointRetry;
  }

  // queue_checkpoint_writes - computed: false, optional: true, required: false
  private _queueCheckpointWrites?: number; 
  public get queueCheckpointWrites() {
    return this.getNumberAttribute('queue_checkpoint_writes');
  }
  public set queueCheckpointWrites(value: number) {
    this._queueCheckpointWrites = value;
  }
  public resetQueueCheckpointWrites() {
    this._queueCheckpointWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCheckpointWritesInput() {
    return this._queueCheckpointWrites;
  }

  // queue_drain - computed: false, optional: true, required: false
  private _queueDrain?: boolean | cdktf.IResolvable; 
  public get queueDrain() {
    return this.getBooleanAttribute('queue_drain');
  }
  public set queueDrain(value: boolean | cdktf.IResolvable) {
    this._queueDrain = value;
  }
  public resetQueueDrain() {
    this._queueDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDrainInput() {
    return this._queueDrain;
  }

  // queue_max_bytes - computed: false, optional: true, required: false
  private _queueMaxBytes?: string; 
  public get queueMaxBytes() {
    return this.getStringAttribute('queue_max_bytes');
  }
  public set queueMaxBytes(value: string) {
    this._queueMaxBytes = value;
  }
  public resetQueueMaxBytes() {
    this._queueMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxBytesInput() {
    return this._queueMaxBytes;
  }

  // queue_max_events - computed: false, optional: true, required: false
  private _queueMaxEvents?: number; 
  public get queueMaxEvents() {
    return this.getNumberAttribute('queue_max_events');
  }
  public set queueMaxEvents(value: number) {
    this._queueMaxEvents = value;
  }
  public resetQueueMaxEvents() {
    this._queueMaxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxEventsInput() {
    return this._queueMaxEvents;
  }

  // queue_page_capacity - computed: false, optional: true, required: false
  private _queuePageCapacity?: string; 
  public get queuePageCapacity() {
    return this.getStringAttribute('queue_page_capacity');
  }
  public set queuePageCapacity(value: string) {
    this._queuePageCapacity = value;
  }
  public resetQueuePageCapacity() {
    this._queuePageCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePageCapacityInput() {
    return this._queuePageCapacity;
  }

  // queue_type - computed: false, optional: true, required: false
  private _queueType?: string; 
  public get queueType() {
    return this.getStringAttribute('queue_type');
  }
  public set queueType(value: string) {
    this._queueType = value;
  }
  public resetQueueType() {
    this._queueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTypeInput() {
    return this._queueType;
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

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchLogstashPipelineElasticsearchConnectionOutputReference(this, "elasticsearch_connection");
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchLogstashPipelineElasticsearchConnection) {
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
      description: cdktf.stringToTerraform(this._description),
      pipeline: cdktf.stringToTerraform(this._pipeline),
      pipeline_batch_delay: cdktf.numberToTerraform(this._pipelineBatchDelay),
      pipeline_batch_size: cdktf.numberToTerraform(this._pipelineBatchSize),
      pipeline_ecs_compatibility: cdktf.stringToTerraform(this._pipelineEcsCompatibility),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      pipeline_metadata: cdktf.stringToTerraform(this._pipelineMetadata),
      pipeline_ordered: cdktf.stringToTerraform(this._pipelineOrdered),
      pipeline_plugin_classloaders: cdktf.booleanToTerraform(this._pipelinePluginClassloaders),
      pipeline_unsafe_shutdown: cdktf.booleanToTerraform(this._pipelineUnsafeShutdown),
      pipeline_workers: cdktf.numberToTerraform(this._pipelineWorkers),
      queue_checkpoint_acks: cdktf.numberToTerraform(this._queueCheckpointAcks),
      queue_checkpoint_retry: cdktf.booleanToTerraform(this._queueCheckpointRetry),
      queue_checkpoint_writes: cdktf.numberToTerraform(this._queueCheckpointWrites),
      queue_drain: cdktf.booleanToTerraform(this._queueDrain),
      queue_max_bytes: cdktf.stringToTerraform(this._queueMaxBytes),
      queue_max_events: cdktf.numberToTerraform(this._queueMaxEvents),
      queue_page_capacity: cdktf.stringToTerraform(this._queuePageCapacity),
      queue_type: cdktf.stringToTerraform(this._queueType),
      username: cdktf.stringToTerraform(this._username),
      elasticsearch_connection: elasticsearchLogstashPipelineElasticsearchConnectionToTerraform(this._elasticsearchConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline: {
        value: cdktf.stringToHclTerraform(this._pipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_batch_delay: {
        value: cdktf.numberToHclTerraform(this._pipelineBatchDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pipeline_batch_size: {
        value: cdktf.numberToHclTerraform(this._pipelineBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pipeline_ecs_compatibility: {
        value: cdktf.stringToHclTerraform(this._pipelineEcsCompatibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_metadata: {
        value: cdktf.stringToHclTerraform(this._pipelineMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_ordered: {
        value: cdktf.stringToHclTerraform(this._pipelineOrdered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_plugin_classloaders: {
        value: cdktf.booleanToHclTerraform(this._pipelinePluginClassloaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pipeline_unsafe_shutdown: {
        value: cdktf.booleanToHclTerraform(this._pipelineUnsafeShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pipeline_workers: {
        value: cdktf.numberToHclTerraform(this._pipelineWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_checkpoint_acks: {
        value: cdktf.numberToHclTerraform(this._queueCheckpointAcks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_checkpoint_retry: {
        value: cdktf.booleanToHclTerraform(this._queueCheckpointRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue_checkpoint_writes: {
        value: cdktf.numberToHclTerraform(this._queueCheckpointWrites),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_drain: {
        value: cdktf.booleanToHclTerraform(this._queueDrain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue_max_bytes: {
        value: cdktf.stringToHclTerraform(this._queueMaxBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_max_events: {
        value: cdktf.numberToHclTerraform(this._queueMaxEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_page_capacity: {
        value: cdktf.stringToHclTerraform(this._queuePageCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_type: {
        value: cdktf.stringToHclTerraform(this._queueType),
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
      elasticsearch_connection: {
        value: elasticsearchLogstashPipelineElasticsearchConnectionToHclTerraform(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchLogstashPipelineElasticsearchConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
