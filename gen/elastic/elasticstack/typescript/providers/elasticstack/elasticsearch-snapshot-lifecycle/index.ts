// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchSnapshotLifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines how wildcard patterns in the `indices` parameter match data streams and indices. Supports comma-separated values, such as `closed,hidden`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#expand_wildcards ElasticsearchSnapshotLifecycle#expand_wildcards}
  */
  readonly expandWildcards?: string;
  /**
  * Time period after which a snapshot is considered expired and eligible for deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#expire_after ElasticsearchSnapshotLifecycle#expire_after}
  */
  readonly expireAfter?: string;
  /**
  * Feature states to include in the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#feature_states ElasticsearchSnapshotLifecycle#feature_states}
  */
  readonly featureStates?: string[];
  /**
  * If `false`, the snapshot fails if any data stream or index in indices is missing or closed. If `true`, the snapshot ignores missing or closed data streams and indices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#ignore_unavailable ElasticsearchSnapshotLifecycle#ignore_unavailable}
  */
  readonly ignoreUnavailable?: boolean | cdktf.IResolvable;
  /**
  * If `true`, include the cluster state in the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#include_global_state ElasticsearchSnapshotLifecycle#include_global_state}
  */
  readonly includeGlobalState?: boolean | cdktf.IResolvable;
  /**
  * Comma-separated list of data streams and indices to include in the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#indices ElasticsearchSnapshotLifecycle#indices}
  */
  readonly indices?: string[];
  /**
  * Maximum number of snapshots to retain, even if the snapshots have not yet expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#max_count ElasticsearchSnapshotLifecycle#max_count}
  */
  readonly maxCount?: number;
  /**
  * Attaches arbitrary metadata to the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#metadata ElasticsearchSnapshotLifecycle#metadata}
  */
  readonly metadata?: string;
  /**
  * Minimum number of snapshots to retain, even if the snapshots have expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#min_count ElasticsearchSnapshotLifecycle#min_count}
  */
  readonly minCount?: number;
  /**
  * ID for the snapshot lifecycle policy you want to create or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#name ElasticsearchSnapshotLifecycle#name}
  */
  readonly name: string;
  /**
  * If `false`, the entire snapshot will fail if one or more indices included in the snapshot do not have all primary shards available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#partial ElasticsearchSnapshotLifecycle#partial}
  */
  readonly partial?: boolean | cdktf.IResolvable;
  /**
  * Repository used to store snapshots created by this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#repository ElasticsearchSnapshotLifecycle#repository}
  */
  readonly repository: string;
  /**
  * Periodic or absolute schedule at which the policy creates snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#schedule ElasticsearchSnapshotLifecycle#schedule}
  */
  readonly schedule: string;
  /**
  * Name automatically assigned to each snapshot created by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#snapshot_name ElasticsearchSnapshotLifecycle#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#elasticsearch_connection ElasticsearchSnapshotLifecycle#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchSnapshotLifecycleElasticsearchConnection;
}
export interface ElasticsearchSnapshotLifecycleElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#api_key ElasticsearchSnapshotLifecycle#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#bearer_token ElasticsearchSnapshotLifecycle#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#ca_data ElasticsearchSnapshotLifecycle#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#ca_file ElasticsearchSnapshotLifecycle#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#cert_data ElasticsearchSnapshotLifecycle#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#cert_file ElasticsearchSnapshotLifecycle#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#endpoints ElasticsearchSnapshotLifecycle#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#es_client_authentication ElasticsearchSnapshotLifecycle#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#headers ElasticsearchSnapshotLifecycle#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#insecure ElasticsearchSnapshotLifecycle#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#key_data ElasticsearchSnapshotLifecycle#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#key_file ElasticsearchSnapshotLifecycle#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#password ElasticsearchSnapshotLifecycle#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#username ElasticsearchSnapshotLifecycle#username}
  */
  readonly username?: string;
}

export function elasticsearchSnapshotLifecycleElasticsearchConnectionToTerraform(struct?: ElasticsearchSnapshotLifecycleElasticsearchConnectionOutputReference | ElasticsearchSnapshotLifecycleElasticsearchConnection): any {
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


export function elasticsearchSnapshotLifecycleElasticsearchConnectionToHclTerraform(struct?: ElasticsearchSnapshotLifecycleElasticsearchConnectionOutputReference | ElasticsearchSnapshotLifecycleElasticsearchConnection): any {
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

export class ElasticsearchSnapshotLifecycleElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotLifecycleElasticsearchConnection | undefined {
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

  public set internalValue(value: ElasticsearchSnapshotLifecycleElasticsearchConnection | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle elasticstack_elasticsearch_snapshot_lifecycle}
*/
export class ElasticsearchSnapshotLifecycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_snapshot_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchSnapshotLifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchSnapshotLifecycle to import
  * @param importFromId The id of the existing ElasticsearchSnapshotLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchSnapshotLifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_snapshot_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/elasticsearch_snapshot_lifecycle elasticstack_elasticsearch_snapshot_lifecycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchSnapshotLifecycleConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchSnapshotLifecycleConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_snapshot_lifecycle',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expandWildcards = config.expandWildcards;
    this._expireAfter = config.expireAfter;
    this._featureStates = config.featureStates;
    this._ignoreUnavailable = config.ignoreUnavailable;
    this._includeGlobalState = config.includeGlobalState;
    this._indices = config.indices;
    this._maxCount = config.maxCount;
    this._metadata = config.metadata;
    this._minCount = config.minCount;
    this._name = config.name;
    this._partial = config.partial;
    this._repository = config.repository;
    this._schedule = config.schedule;
    this._snapshotName = config.snapshotName;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expand_wildcards - computed: false, optional: true, required: false
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

  // expire_after - computed: false, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }

  // feature_states - computed: true, optional: true, required: false
  private _featureStates?: string[]; 
  public get featureStates() {
    return cdktf.Fn.tolist(this.getListAttribute('feature_states'));
  }
  public set featureStates(value: string[]) {
    this._featureStates = value;
  }
  public resetFeatureStates() {
    this._featureStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStatesInput() {
    return this._featureStates;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_unavailable - computed: false, optional: true, required: false
  private _ignoreUnavailable?: boolean | cdktf.IResolvable; 
  public get ignoreUnavailable() {
    return this.getBooleanAttribute('ignore_unavailable');
  }
  public set ignoreUnavailable(value: boolean | cdktf.IResolvable) {
    this._ignoreUnavailable = value;
  }
  public resetIgnoreUnavailable() {
    this._ignoreUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnavailableInput() {
    return this._ignoreUnavailable;
  }

  // include_global_state - computed: false, optional: true, required: false
  private _includeGlobalState?: boolean | cdktf.IResolvable; 
  public get includeGlobalState() {
    return this.getBooleanAttribute('include_global_state');
  }
  public set includeGlobalState(value: boolean | cdktf.IResolvable) {
    this._includeGlobalState = value;
  }
  public resetIncludeGlobalState() {
    this._includeGlobalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalStateInput() {
    return this._includeGlobalState;
  }

  // indices - computed: true, optional: true, required: false
  private _indices?: string[]; 
  public get indices() {
    return this.getListAttribute('indices');
  }
  public set indices(value: string[]) {
    this._indices = value;
  }
  public resetIndices() {
    this._indices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // metadata - computed: true, optional: true, required: false
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

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
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

  // partial - computed: false, optional: true, required: false
  private _partial?: boolean | cdktf.IResolvable; 
  public get partial() {
    return this.getBooleanAttribute('partial');
  }
  public set partial(value: boolean | cdktf.IResolvable) {
    this._partial = value;
  }
  public resetPartial() {
    this._partial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialInput() {
    return this._partial;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchSnapshotLifecycleElasticsearchConnectionOutputReference(this, "elasticsearch_connection");
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchSnapshotLifecycleElasticsearchConnection) {
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
      expand_wildcards: cdktf.stringToTerraform(this._expandWildcards),
      expire_after: cdktf.stringToTerraform(this._expireAfter),
      feature_states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureStates),
      ignore_unavailable: cdktf.booleanToTerraform(this._ignoreUnavailable),
      include_global_state: cdktf.booleanToTerraform(this._includeGlobalState),
      indices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indices),
      max_count: cdktf.numberToTerraform(this._maxCount),
      metadata: cdktf.stringToTerraform(this._metadata),
      min_count: cdktf.numberToTerraform(this._minCount),
      name: cdktf.stringToTerraform(this._name),
      partial: cdktf.booleanToTerraform(this._partial),
      repository: cdktf.stringToTerraform(this._repository),
      schedule: cdktf.stringToTerraform(this._schedule),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      elasticsearch_connection: elasticsearchSnapshotLifecycleElasticsearchConnectionToTerraform(this._elasticsearchConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expand_wildcards: {
        value: cdktf.stringToHclTerraform(this._expandWildcards),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_after: {
        value: cdktf.stringToHclTerraform(this._expireAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureStates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ignore_unavailable: {
        value: cdktf.booleanToHclTerraform(this._ignoreUnavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_global_state: {
        value: cdktf.booleanToHclTerraform(this._includeGlobalState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      indices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_count: {
        value: cdktf.numberToHclTerraform(this._maxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_count: {
        value: cdktf.numberToHclTerraform(this._minCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial: {
        value: cdktf.booleanToHclTerraform(this._partial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_name: {
        value: cdktf.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_connection: {
        value: elasticsearchSnapshotLifecycleElasticsearchConnectionToHclTerraform(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotLifecycleElasticsearchConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
