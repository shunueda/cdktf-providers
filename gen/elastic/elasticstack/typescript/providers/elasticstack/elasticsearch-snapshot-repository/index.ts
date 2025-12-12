// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchSnapshotRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the snapshot repository to register or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#name ElasticsearchSnapshotRepository#name}
  */
  readonly name: string;
  /**
  * If true, the request verifies the repository is functional on all master and data nodes in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#verify ElasticsearchSnapshotRepository#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#azure ElasticsearchSnapshotRepository#azure}
  */
  readonly azure?: ElasticsearchSnapshotRepositoryAzure;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#elasticsearch_connection ElasticsearchSnapshotRepository#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchSnapshotRepositoryElasticsearchConnection;
  /**
  * fs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#fs ElasticsearchSnapshotRepository#fs}
  */
  readonly fs?: ElasticsearchSnapshotRepositoryFs;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#gcs ElasticsearchSnapshotRepository#gcs}
  */
  readonly gcs?: ElasticsearchSnapshotRepositoryGcs;
  /**
  * hdfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#hdfs ElasticsearchSnapshotRepository#hdfs}
  */
  readonly hdfs?: ElasticsearchSnapshotRepositoryHdfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#s3 ElasticsearchSnapshotRepository#s3}
  */
  readonly s3?: ElasticsearchSnapshotRepositoryS3;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#url ElasticsearchSnapshotRepository#url}
  */
  readonly url?: ElasticsearchSnapshotRepositoryUrl;
}
export interface ElasticsearchSnapshotRepositoryAzure {
  /**
  * Specifies the path within the container to the repository data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#base_path ElasticsearchSnapshotRepository#base_path}
  */
  readonly basePath?: string;
  /**
  * Maximum size of files in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#chunk_size ElasticsearchSnapshotRepository#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * Azure named client to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#client ElasticsearchSnapshotRepository#client}
  */
  readonly client?: string;
  /**
  * If true, metadata files, such as index mappings and settings, are compressed in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#compress ElasticsearchSnapshotRepository#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Container name. You must create the Azure container before creating the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#container ElasticsearchSnapshotRepository#container}
  */
  readonly container: string;
  /**
  * Location mode. `primary_only` or `secondary_only`. See the [Azure storage redundancy documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#location_mode ElasticsearchSnapshotRepository#location_mode}
  */
  readonly locationMode?: string;
  /**
  * Maximum snapshot restore rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_restore_bytes_per_sec ElasticsearchSnapshotRepository#max_restore_bytes_per_sec}
  */
  readonly maxRestoreBytesPerSec?: string;
  /**
  * Maximum snapshot creation rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_snapshot_bytes_per_sec ElasticsearchSnapshotRepository#max_snapshot_bytes_per_sec}
  */
  readonly maxSnapshotBytesPerSec?: string;
  /**
  * If true, the repository is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#readonly ElasticsearchSnapshotRepository#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
}

export function elasticsearchSnapshotRepositoryAzureToTerraform(struct?: ElasticsearchSnapshotRepositoryAzureOutputReference | ElasticsearchSnapshotRepositoryAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    client: cdktf.stringToTerraform(struct!.client),
    compress: cdktf.booleanToTerraform(struct!.compress),
    container: cdktf.stringToTerraform(struct!.container),
    location_mode: cdktf.stringToTerraform(struct!.locationMode),
    max_restore_bytes_per_sec: cdktf.stringToTerraform(struct!.maxRestoreBytesPerSec),
    max_snapshot_bytes_per_sec: cdktf.stringToTerraform(struct!.maxSnapshotBytesPerSec),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
  }
}


export function elasticsearchSnapshotRepositoryAzureToHclTerraform(struct?: ElasticsearchSnapshotRepositoryAzureOutputReference | ElasticsearchSnapshotRepositoryAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_mode: {
      value: cdktf.stringToHclTerraform(struct!.locationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_restore_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxRestoreBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_snapshot_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxSnapshotBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchSnapshotRepositoryAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotRepositoryAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._locationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationMode = this._locationMode;
    }
    if (this._maxRestoreBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestoreBytesPerSec = this._maxRestoreBytesPerSec;
    }
    if (this._maxSnapshotBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotBytesPerSec = this._maxSnapshotBytesPerSec;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchSnapshotRepositoryAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basePath = undefined;
      this._chunkSize = undefined;
      this._client = undefined;
      this._compress = undefined;
      this._container = undefined;
      this._locationMode = undefined;
      this._maxRestoreBytesPerSec = undefined;
      this._maxSnapshotBytesPerSec = undefined;
      this._readonly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basePath = value.basePath;
      this._chunkSize = value.chunkSize;
      this._client = value.client;
      this._compress = value.compress;
      this._container = value.container;
      this._locationMode = value.locationMode;
      this._maxRestoreBytesPerSec = value.maxRestoreBytesPerSec;
      this._maxSnapshotBytesPerSec = value.maxSnapshotBytesPerSec;
      this._readonly = value.readonly;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // location_mode - computed: false, optional: true, required: false
  private _locationMode?: string; 
  public get locationMode() {
    return this.getStringAttribute('location_mode');
  }
  public set locationMode(value: string) {
    this._locationMode = value;
  }
  public resetLocationMode() {
    this._locationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationModeInput() {
    return this._locationMode;
  }

  // max_restore_bytes_per_sec - computed: false, optional: true, required: false
  private _maxRestoreBytesPerSec?: string; 
  public get maxRestoreBytesPerSec() {
    return this.getStringAttribute('max_restore_bytes_per_sec');
  }
  public set maxRestoreBytesPerSec(value: string) {
    this._maxRestoreBytesPerSec = value;
  }
  public resetMaxRestoreBytesPerSec() {
    this._maxRestoreBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestoreBytesPerSecInput() {
    return this._maxRestoreBytesPerSec;
  }

  // max_snapshot_bytes_per_sec - computed: false, optional: true, required: false
  private _maxSnapshotBytesPerSec?: string; 
  public get maxSnapshotBytesPerSec() {
    return this.getStringAttribute('max_snapshot_bytes_per_sec');
  }
  public set maxSnapshotBytesPerSec(value: string) {
    this._maxSnapshotBytesPerSec = value;
  }
  public resetMaxSnapshotBytesPerSec() {
    this._maxSnapshotBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotBytesPerSecInput() {
    return this._maxSnapshotBytesPerSec;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }
}
export interface ElasticsearchSnapshotRepositoryElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#api_key ElasticsearchSnapshotRepository#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#bearer_token ElasticsearchSnapshotRepository#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#ca_data ElasticsearchSnapshotRepository#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#ca_file ElasticsearchSnapshotRepository#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#cert_data ElasticsearchSnapshotRepository#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#cert_file ElasticsearchSnapshotRepository#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#endpoints ElasticsearchSnapshotRepository#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#es_client_authentication ElasticsearchSnapshotRepository#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#headers ElasticsearchSnapshotRepository#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#insecure ElasticsearchSnapshotRepository#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#key_data ElasticsearchSnapshotRepository#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#key_file ElasticsearchSnapshotRepository#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#password ElasticsearchSnapshotRepository#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#username ElasticsearchSnapshotRepository#username}
  */
  readonly username?: string;
}

export function elasticsearchSnapshotRepositoryElasticsearchConnectionToTerraform(struct?: ElasticsearchSnapshotRepositoryElasticsearchConnectionOutputReference | ElasticsearchSnapshotRepositoryElasticsearchConnection): any {
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


export function elasticsearchSnapshotRepositoryElasticsearchConnectionToHclTerraform(struct?: ElasticsearchSnapshotRepositoryElasticsearchConnectionOutputReference | ElasticsearchSnapshotRepositoryElasticsearchConnection): any {
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

export class ElasticsearchSnapshotRepositoryElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotRepositoryElasticsearchConnection | undefined {
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

  public set internalValue(value: ElasticsearchSnapshotRepositoryElasticsearchConnection | undefined) {
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
export interface ElasticsearchSnapshotRepositoryFs {
  /**
  * Maximum size of files in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#chunk_size ElasticsearchSnapshotRepository#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * If true, metadata files, such as index mappings and settings, are compressed in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#compress ElasticsearchSnapshotRepository#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Location of the shared filesystem used to store and retrieve snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#location ElasticsearchSnapshotRepository#location}
  */
  readonly location: string;
  /**
  * Maximum number of snapshots the repository can contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_number_of_snapshots ElasticsearchSnapshotRepository#max_number_of_snapshots}
  */
  readonly maxNumberOfSnapshots?: number;
  /**
  * Maximum snapshot restore rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_restore_bytes_per_sec ElasticsearchSnapshotRepository#max_restore_bytes_per_sec}
  */
  readonly maxRestoreBytesPerSec?: string;
  /**
  * Maximum snapshot creation rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_snapshot_bytes_per_sec ElasticsearchSnapshotRepository#max_snapshot_bytes_per_sec}
  */
  readonly maxSnapshotBytesPerSec?: string;
  /**
  * If true, the repository is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#readonly ElasticsearchSnapshotRepository#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
}

export function elasticsearchSnapshotRepositoryFsToTerraform(struct?: ElasticsearchSnapshotRepositoryFsOutputReference | ElasticsearchSnapshotRepositoryFs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    compress: cdktf.booleanToTerraform(struct!.compress),
    location: cdktf.stringToTerraform(struct!.location),
    max_number_of_snapshots: cdktf.numberToTerraform(struct!.maxNumberOfSnapshots),
    max_restore_bytes_per_sec: cdktf.stringToTerraform(struct!.maxRestoreBytesPerSec),
    max_snapshot_bytes_per_sec: cdktf.stringToTerraform(struct!.maxSnapshotBytesPerSec),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
  }
}


export function elasticsearchSnapshotRepositoryFsToHclTerraform(struct?: ElasticsearchSnapshotRepositoryFsOutputReference | ElasticsearchSnapshotRepositoryFs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_number_of_snapshots: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_restore_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxRestoreBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_snapshot_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxSnapshotBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchSnapshotRepositoryFsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotRepositoryFs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._maxNumberOfSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfSnapshots = this._maxNumberOfSnapshots;
    }
    if (this._maxRestoreBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestoreBytesPerSec = this._maxRestoreBytesPerSec;
    }
    if (this._maxSnapshotBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotBytesPerSec = this._maxSnapshotBytesPerSec;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchSnapshotRepositoryFs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkSize = undefined;
      this._compress = undefined;
      this._location = undefined;
      this._maxNumberOfSnapshots = undefined;
      this._maxRestoreBytesPerSec = undefined;
      this._maxSnapshotBytesPerSec = undefined;
      this._readonly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkSize = value.chunkSize;
      this._compress = value.compress;
      this._location = value.location;
      this._maxNumberOfSnapshots = value.maxNumberOfSnapshots;
      this._maxRestoreBytesPerSec = value.maxRestoreBytesPerSec;
      this._maxSnapshotBytesPerSec = value.maxSnapshotBytesPerSec;
      this._readonly = value.readonly;
    }
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_number_of_snapshots - computed: false, optional: true, required: false
  private _maxNumberOfSnapshots?: number; 
  public get maxNumberOfSnapshots() {
    return this.getNumberAttribute('max_number_of_snapshots');
  }
  public set maxNumberOfSnapshots(value: number) {
    this._maxNumberOfSnapshots = value;
  }
  public resetMaxNumberOfSnapshots() {
    this._maxNumberOfSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfSnapshotsInput() {
    return this._maxNumberOfSnapshots;
  }

  // max_restore_bytes_per_sec - computed: false, optional: true, required: false
  private _maxRestoreBytesPerSec?: string; 
  public get maxRestoreBytesPerSec() {
    return this.getStringAttribute('max_restore_bytes_per_sec');
  }
  public set maxRestoreBytesPerSec(value: string) {
    this._maxRestoreBytesPerSec = value;
  }
  public resetMaxRestoreBytesPerSec() {
    this._maxRestoreBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestoreBytesPerSecInput() {
    return this._maxRestoreBytesPerSec;
  }

  // max_snapshot_bytes_per_sec - computed: false, optional: true, required: false
  private _maxSnapshotBytesPerSec?: string; 
  public get maxSnapshotBytesPerSec() {
    return this.getStringAttribute('max_snapshot_bytes_per_sec');
  }
  public set maxSnapshotBytesPerSec(value: string) {
    this._maxSnapshotBytesPerSec = value;
  }
  public resetMaxSnapshotBytesPerSec() {
    this._maxSnapshotBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotBytesPerSecInput() {
    return this._maxSnapshotBytesPerSec;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }
}
export interface ElasticsearchSnapshotRepositoryGcs {
  /**
  * Specifies the path within the bucket to the repository data. Defaults to the root of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#base_path ElasticsearchSnapshotRepository#base_path}
  */
  readonly basePath?: string;
  /**
  * The name of the bucket to be used for snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#bucket ElasticsearchSnapshotRepository#bucket}
  */
  readonly bucket: string;
  /**
  * Maximum size of files in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#chunk_size ElasticsearchSnapshotRepository#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * The name of the client to use to connect to Google Cloud Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#client ElasticsearchSnapshotRepository#client}
  */
  readonly client?: string;
  /**
  * If true, metadata files, such as index mappings and settings, are compressed in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#compress ElasticsearchSnapshotRepository#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Maximum snapshot restore rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_restore_bytes_per_sec ElasticsearchSnapshotRepository#max_restore_bytes_per_sec}
  */
  readonly maxRestoreBytesPerSec?: string;
  /**
  * Maximum snapshot creation rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_snapshot_bytes_per_sec ElasticsearchSnapshotRepository#max_snapshot_bytes_per_sec}
  */
  readonly maxSnapshotBytesPerSec?: string;
  /**
  * If true, the repository is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#readonly ElasticsearchSnapshotRepository#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
}

export function elasticsearchSnapshotRepositoryGcsToTerraform(struct?: ElasticsearchSnapshotRepositoryGcsOutputReference | ElasticsearchSnapshotRepositoryGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    client: cdktf.stringToTerraform(struct!.client),
    compress: cdktf.booleanToTerraform(struct!.compress),
    max_restore_bytes_per_sec: cdktf.stringToTerraform(struct!.maxRestoreBytesPerSec),
    max_snapshot_bytes_per_sec: cdktf.stringToTerraform(struct!.maxSnapshotBytesPerSec),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
  }
}


export function elasticsearchSnapshotRepositoryGcsToHclTerraform(struct?: ElasticsearchSnapshotRepositoryGcsOutputReference | ElasticsearchSnapshotRepositoryGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_restore_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxRestoreBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_snapshot_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxSnapshotBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchSnapshotRepositoryGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotRepositoryGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._maxRestoreBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestoreBytesPerSec = this._maxRestoreBytesPerSec;
    }
    if (this._maxSnapshotBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotBytesPerSec = this._maxSnapshotBytesPerSec;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchSnapshotRepositoryGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basePath = undefined;
      this._bucket = undefined;
      this._chunkSize = undefined;
      this._client = undefined;
      this._compress = undefined;
      this._maxRestoreBytesPerSec = undefined;
      this._maxSnapshotBytesPerSec = undefined;
      this._readonly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basePath = value.basePath;
      this._bucket = value.bucket;
      this._chunkSize = value.chunkSize;
      this._client = value.client;
      this._compress = value.compress;
      this._maxRestoreBytesPerSec = value.maxRestoreBytesPerSec;
      this._maxSnapshotBytesPerSec = value.maxSnapshotBytesPerSec;
      this._readonly = value.readonly;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // max_restore_bytes_per_sec - computed: false, optional: true, required: false
  private _maxRestoreBytesPerSec?: string; 
  public get maxRestoreBytesPerSec() {
    return this.getStringAttribute('max_restore_bytes_per_sec');
  }
  public set maxRestoreBytesPerSec(value: string) {
    this._maxRestoreBytesPerSec = value;
  }
  public resetMaxRestoreBytesPerSec() {
    this._maxRestoreBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestoreBytesPerSecInput() {
    return this._maxRestoreBytesPerSec;
  }

  // max_snapshot_bytes_per_sec - computed: false, optional: true, required: false
  private _maxSnapshotBytesPerSec?: string; 
  public get maxSnapshotBytesPerSec() {
    return this.getStringAttribute('max_snapshot_bytes_per_sec');
  }
  public set maxSnapshotBytesPerSec(value: string) {
    this._maxSnapshotBytesPerSec = value;
  }
  public resetMaxSnapshotBytesPerSec() {
    this._maxSnapshotBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotBytesPerSecInput() {
    return this._maxSnapshotBytesPerSec;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }
}
export interface ElasticsearchSnapshotRepositoryHdfs {
  /**
  * Maximum size of files in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#chunk_size ElasticsearchSnapshotRepository#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * If true, metadata files, such as index mappings and settings, are compressed in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#compress ElasticsearchSnapshotRepository#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Whether to load the default Hadoop configuration or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#load_defaults ElasticsearchSnapshotRepository#load_defaults}
  */
  readonly loadDefaults?: boolean | cdktf.IResolvable;
  /**
  * Maximum snapshot restore rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_restore_bytes_per_sec ElasticsearchSnapshotRepository#max_restore_bytes_per_sec}
  */
  readonly maxRestoreBytesPerSec?: string;
  /**
  * Maximum snapshot creation rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_snapshot_bytes_per_sec ElasticsearchSnapshotRepository#max_snapshot_bytes_per_sec}
  */
  readonly maxSnapshotBytesPerSec?: string;
  /**
  * The file path within the filesystem where data is stored/loaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#path ElasticsearchSnapshotRepository#path}
  */
  readonly path: string;
  /**
  * If true, the repository is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#readonly ElasticsearchSnapshotRepository#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * The uri address for hdfs. ex: "hdfs://<host>:<port>/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#uri ElasticsearchSnapshotRepository#uri}
  */
  readonly uri: string;
}

export function elasticsearchSnapshotRepositoryHdfsToTerraform(struct?: ElasticsearchSnapshotRepositoryHdfsOutputReference | ElasticsearchSnapshotRepositoryHdfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    compress: cdktf.booleanToTerraform(struct!.compress),
    load_defaults: cdktf.booleanToTerraform(struct!.loadDefaults),
    max_restore_bytes_per_sec: cdktf.stringToTerraform(struct!.maxRestoreBytesPerSec),
    max_snapshot_bytes_per_sec: cdktf.stringToTerraform(struct!.maxSnapshotBytesPerSec),
    path: cdktf.stringToTerraform(struct!.path),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function elasticsearchSnapshotRepositoryHdfsToHclTerraform(struct?: ElasticsearchSnapshotRepositoryHdfsOutputReference | ElasticsearchSnapshotRepositoryHdfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_defaults: {
      value: cdktf.booleanToHclTerraform(struct!.loadDefaults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_restore_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxRestoreBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_snapshot_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxSnapshotBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchSnapshotRepositoryHdfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotRepositoryHdfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._loadDefaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadDefaults = this._loadDefaults;
    }
    if (this._maxRestoreBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestoreBytesPerSec = this._maxRestoreBytesPerSec;
    }
    if (this._maxSnapshotBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotBytesPerSec = this._maxSnapshotBytesPerSec;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchSnapshotRepositoryHdfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkSize = undefined;
      this._compress = undefined;
      this._loadDefaults = undefined;
      this._maxRestoreBytesPerSec = undefined;
      this._maxSnapshotBytesPerSec = undefined;
      this._path = undefined;
      this._readonly = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkSize = value.chunkSize;
      this._compress = value.compress;
      this._loadDefaults = value.loadDefaults;
      this._maxRestoreBytesPerSec = value.maxRestoreBytesPerSec;
      this._maxSnapshotBytesPerSec = value.maxSnapshotBytesPerSec;
      this._path = value.path;
      this._readonly = value.readonly;
      this._uri = value.uri;
    }
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // load_defaults - computed: false, optional: true, required: false
  private _loadDefaults?: boolean | cdktf.IResolvable; 
  public get loadDefaults() {
    return this.getBooleanAttribute('load_defaults');
  }
  public set loadDefaults(value: boolean | cdktf.IResolvable) {
    this._loadDefaults = value;
  }
  public resetLoadDefaults() {
    this._loadDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadDefaultsInput() {
    return this._loadDefaults;
  }

  // max_restore_bytes_per_sec - computed: false, optional: true, required: false
  private _maxRestoreBytesPerSec?: string; 
  public get maxRestoreBytesPerSec() {
    return this.getStringAttribute('max_restore_bytes_per_sec');
  }
  public set maxRestoreBytesPerSec(value: string) {
    this._maxRestoreBytesPerSec = value;
  }
  public resetMaxRestoreBytesPerSec() {
    this._maxRestoreBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestoreBytesPerSecInput() {
    return this._maxRestoreBytesPerSec;
  }

  // max_snapshot_bytes_per_sec - computed: false, optional: true, required: false
  private _maxSnapshotBytesPerSec?: string; 
  public get maxSnapshotBytesPerSec() {
    return this.getStringAttribute('max_snapshot_bytes_per_sec');
  }
  public set maxSnapshotBytesPerSec(value: string) {
    this._maxSnapshotBytesPerSec = value;
  }
  public resetMaxSnapshotBytesPerSec() {
    this._maxSnapshotBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotBytesPerSecInput() {
    return this._maxSnapshotBytesPerSec;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ElasticsearchSnapshotRepositoryS3 {
  /**
  * Specifies the path to the repository data within its bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#base_path ElasticsearchSnapshotRepository#base_path}
  */
  readonly basePath?: string;
  /**
  * Name of the S3 bucket to use for snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#bucket ElasticsearchSnapshotRepository#bucket}
  */
  readonly bucket: string;
  /**
  * Minimum threshold below which the chunk is uploaded using a single request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#buffer_size ElasticsearchSnapshotRepository#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * The S3 repository supports all S3 canned ACLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#canned_acl ElasticsearchSnapshotRepository#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Maximum size of files in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#chunk_size ElasticsearchSnapshotRepository#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * The name of the S3 client to use to connect to S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#client ElasticsearchSnapshotRepository#client}
  */
  readonly client?: string;
  /**
  * If true, metadata files, such as index mappings and settings, are compressed in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#compress ElasticsearchSnapshotRepository#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Custom S3 service endpoint, useful when using VPC endpoints or non-default S3 URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#endpoint ElasticsearchSnapshotRepository#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Maximum snapshot restore rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_restore_bytes_per_sec ElasticsearchSnapshotRepository#max_restore_bytes_per_sec}
  */
  readonly maxRestoreBytesPerSec?: string;
  /**
  * Maximum snapshot creation rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_snapshot_bytes_per_sec ElasticsearchSnapshotRepository#max_snapshot_bytes_per_sec}
  */
  readonly maxSnapshotBytesPerSec?: string;
  /**
  * If true, path style access pattern will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#path_style_access ElasticsearchSnapshotRepository#path_style_access}
  */
  readonly pathStyleAccess?: boolean | cdktf.IResolvable;
  /**
  * If true, the repository is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#readonly ElasticsearchSnapshotRepository#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * When true, files are encrypted server-side using AES-256 algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#server_side_encryption ElasticsearchSnapshotRepository#server_side_encryption}
  */
  readonly serverSideEncryption?: boolean | cdktf.IResolvable;
  /**
  * Sets the S3 storage class for objects stored in the snapshot repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#storage_class ElasticsearchSnapshotRepository#storage_class}
  */
  readonly storageClass?: string;
}

export function elasticsearchSnapshotRepositoryS3ToTerraform(struct?: ElasticsearchSnapshotRepositoryS3OutputReference | ElasticsearchSnapshotRepositoryS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    canned_acl: cdktf.stringToTerraform(struct!.cannedAcl),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    client: cdktf.stringToTerraform(struct!.client),
    compress: cdktf.booleanToTerraform(struct!.compress),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    max_restore_bytes_per_sec: cdktf.stringToTerraform(struct!.maxRestoreBytesPerSec),
    max_snapshot_bytes_per_sec: cdktf.stringToTerraform(struct!.maxSnapshotBytesPerSec),
    path_style_access: cdktf.booleanToTerraform(struct!.pathStyleAccess),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    server_side_encryption: cdktf.booleanToTerraform(struct!.serverSideEncryption),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function elasticsearchSnapshotRepositoryS3ToHclTerraform(struct?: ElasticsearchSnapshotRepositoryS3OutputReference | ElasticsearchSnapshotRepositoryS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canned_acl: {
      value: cdktf.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_restore_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxRestoreBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_snapshot_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxSnapshotBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_style_access: {
      value: cdktf.booleanToHclTerraform(struct!.pathStyleAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_side_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.serverSideEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchSnapshotRepositoryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotRepositoryS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._maxRestoreBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestoreBytesPerSec = this._maxRestoreBytesPerSec;
    }
    if (this._maxSnapshotBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotBytesPerSec = this._maxSnapshotBytesPerSec;
    }
    if (this._pathStyleAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathStyleAccess = this._pathStyleAccess;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._serverSideEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryption = this._serverSideEncryption;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchSnapshotRepositoryS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basePath = undefined;
      this._bucket = undefined;
      this._bufferSize = undefined;
      this._cannedAcl = undefined;
      this._chunkSize = undefined;
      this._client = undefined;
      this._compress = undefined;
      this._endpoint = undefined;
      this._maxRestoreBytesPerSec = undefined;
      this._maxSnapshotBytesPerSec = undefined;
      this._pathStyleAccess = undefined;
      this._readonly = undefined;
      this._serverSideEncryption = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basePath = value.basePath;
      this._bucket = value.bucket;
      this._bufferSize = value.bufferSize;
      this._cannedAcl = value.cannedAcl;
      this._chunkSize = value.chunkSize;
      this._client = value.client;
      this._compress = value.compress;
      this._endpoint = value.endpoint;
      this._maxRestoreBytesPerSec = value.maxRestoreBytesPerSec;
      this._maxSnapshotBytesPerSec = value.maxSnapshotBytesPerSec;
      this._pathStyleAccess = value.pathStyleAccess;
      this._readonly = value.readonly;
      this._serverSideEncryption = value.serverSideEncryption;
      this._storageClass = value.storageClass;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // buffer_size - computed: true, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // max_restore_bytes_per_sec - computed: false, optional: true, required: false
  private _maxRestoreBytesPerSec?: string; 
  public get maxRestoreBytesPerSec() {
    return this.getStringAttribute('max_restore_bytes_per_sec');
  }
  public set maxRestoreBytesPerSec(value: string) {
    this._maxRestoreBytesPerSec = value;
  }
  public resetMaxRestoreBytesPerSec() {
    this._maxRestoreBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestoreBytesPerSecInput() {
    return this._maxRestoreBytesPerSec;
  }

  // max_snapshot_bytes_per_sec - computed: false, optional: true, required: false
  private _maxSnapshotBytesPerSec?: string; 
  public get maxSnapshotBytesPerSec() {
    return this.getStringAttribute('max_snapshot_bytes_per_sec');
  }
  public set maxSnapshotBytesPerSec(value: string) {
    this._maxSnapshotBytesPerSec = value;
  }
  public resetMaxSnapshotBytesPerSec() {
    this._maxSnapshotBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotBytesPerSecInput() {
    return this._maxSnapshotBytesPerSec;
  }

  // path_style_access - computed: false, optional: true, required: false
  private _pathStyleAccess?: boolean | cdktf.IResolvable; 
  public get pathStyleAccess() {
    return this.getBooleanAttribute('path_style_access');
  }
  public set pathStyleAccess(value: boolean | cdktf.IResolvable) {
    this._pathStyleAccess = value;
  }
  public resetPathStyleAccess() {
    this._pathStyleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathStyleAccessInput() {
    return this._pathStyleAccess;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: boolean | cdktf.IResolvable; 
  public get serverSideEncryption() {
    return this.getBooleanAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: boolean | cdktf.IResolvable) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface ElasticsearchSnapshotRepositoryUrl {
  /**
  * Maximum size of files in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#chunk_size ElasticsearchSnapshotRepository#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * If true, metadata files, such as index mappings and settings, are compressed in snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#compress ElasticsearchSnapshotRepository#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of retries for http and https URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#http_max_retries ElasticsearchSnapshotRepository#http_max_retries}
  */
  readonly httpMaxRetries?: number;
  /**
  * Maximum wait time for data transfers over a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#http_socket_timeout ElasticsearchSnapshotRepository#http_socket_timeout}
  */
  readonly httpSocketTimeout?: string;
  /**
  * Maximum number of snapshots the repository can contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_number_of_snapshots ElasticsearchSnapshotRepository#max_number_of_snapshots}
  */
  readonly maxNumberOfSnapshots?: number;
  /**
  * Maximum snapshot restore rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_restore_bytes_per_sec ElasticsearchSnapshotRepository#max_restore_bytes_per_sec}
  */
  readonly maxRestoreBytesPerSec?: string;
  /**
  * Maximum snapshot creation rate per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#max_snapshot_bytes_per_sec ElasticsearchSnapshotRepository#max_snapshot_bytes_per_sec}
  */
  readonly maxSnapshotBytesPerSec?: string;
  /**
  * If true, the repository is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#readonly ElasticsearchSnapshotRepository#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * URL location of the root of the shared filesystem repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#url ElasticsearchSnapshotRepository#url}
  */
  readonly url: string;
}

export function elasticsearchSnapshotRepositoryUrlToTerraform(struct?: ElasticsearchSnapshotRepositoryUrlOutputReference | ElasticsearchSnapshotRepositoryUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    compress: cdktf.booleanToTerraform(struct!.compress),
    http_max_retries: cdktf.numberToTerraform(struct!.httpMaxRetries),
    http_socket_timeout: cdktf.stringToTerraform(struct!.httpSocketTimeout),
    max_number_of_snapshots: cdktf.numberToTerraform(struct!.maxNumberOfSnapshots),
    max_restore_bytes_per_sec: cdktf.stringToTerraform(struct!.maxRestoreBytesPerSec),
    max_snapshot_bytes_per_sec: cdktf.stringToTerraform(struct!.maxSnapshotBytesPerSec),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function elasticsearchSnapshotRepositoryUrlToHclTerraform(struct?: ElasticsearchSnapshotRepositoryUrlOutputReference | ElasticsearchSnapshotRepositoryUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_socket_timeout: {
      value: cdktf.stringToHclTerraform(struct!.httpSocketTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_number_of_snapshots: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_restore_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxRestoreBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_snapshot_bytes_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.maxSnapshotBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchSnapshotRepositoryUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchSnapshotRepositoryUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._httpMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxRetries = this._httpMaxRetries;
    }
    if (this._httpSocketTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSocketTimeout = this._httpSocketTimeout;
    }
    if (this._maxNumberOfSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfSnapshots = this._maxNumberOfSnapshots;
    }
    if (this._maxRestoreBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRestoreBytesPerSec = this._maxRestoreBytesPerSec;
    }
    if (this._maxSnapshotBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotBytesPerSec = this._maxSnapshotBytesPerSec;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchSnapshotRepositoryUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkSize = undefined;
      this._compress = undefined;
      this._httpMaxRetries = undefined;
      this._httpSocketTimeout = undefined;
      this._maxNumberOfSnapshots = undefined;
      this._maxRestoreBytesPerSec = undefined;
      this._maxSnapshotBytesPerSec = undefined;
      this._readonly = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkSize = value.chunkSize;
      this._compress = value.compress;
      this._httpMaxRetries = value.httpMaxRetries;
      this._httpSocketTimeout = value.httpSocketTimeout;
      this._maxNumberOfSnapshots = value.maxNumberOfSnapshots;
      this._maxRestoreBytesPerSec = value.maxRestoreBytesPerSec;
      this._maxSnapshotBytesPerSec = value.maxSnapshotBytesPerSec;
      this._readonly = value.readonly;
      this._url = value.url;
    }
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // http_max_retries - computed: false, optional: true, required: false
  private _httpMaxRetries?: number; 
  public get httpMaxRetries() {
    return this.getNumberAttribute('http_max_retries');
  }
  public set httpMaxRetries(value: number) {
    this._httpMaxRetries = value;
  }
  public resetHttpMaxRetries() {
    this._httpMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxRetriesInput() {
    return this._httpMaxRetries;
  }

  // http_socket_timeout - computed: false, optional: true, required: false
  private _httpSocketTimeout?: string; 
  public get httpSocketTimeout() {
    return this.getStringAttribute('http_socket_timeout');
  }
  public set httpSocketTimeout(value: string) {
    this._httpSocketTimeout = value;
  }
  public resetHttpSocketTimeout() {
    this._httpSocketTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSocketTimeoutInput() {
    return this._httpSocketTimeout;
  }

  // max_number_of_snapshots - computed: false, optional: true, required: false
  private _maxNumberOfSnapshots?: number; 
  public get maxNumberOfSnapshots() {
    return this.getNumberAttribute('max_number_of_snapshots');
  }
  public set maxNumberOfSnapshots(value: number) {
    this._maxNumberOfSnapshots = value;
  }
  public resetMaxNumberOfSnapshots() {
    this._maxNumberOfSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfSnapshotsInput() {
    return this._maxNumberOfSnapshots;
  }

  // max_restore_bytes_per_sec - computed: false, optional: true, required: false
  private _maxRestoreBytesPerSec?: string; 
  public get maxRestoreBytesPerSec() {
    return this.getStringAttribute('max_restore_bytes_per_sec');
  }
  public set maxRestoreBytesPerSec(value: string) {
    this._maxRestoreBytesPerSec = value;
  }
  public resetMaxRestoreBytesPerSec() {
    this._maxRestoreBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRestoreBytesPerSecInput() {
    return this._maxRestoreBytesPerSec;
  }

  // max_snapshot_bytes_per_sec - computed: false, optional: true, required: false
  private _maxSnapshotBytesPerSec?: string; 
  public get maxSnapshotBytesPerSec() {
    return this.getStringAttribute('max_snapshot_bytes_per_sec');
  }
  public set maxSnapshotBytesPerSec(value: string) {
    this._maxSnapshotBytesPerSec = value;
  }
  public resetMaxSnapshotBytesPerSec() {
    this._maxSnapshotBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotBytesPerSecInput() {
    return this._maxSnapshotBytesPerSec;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository elasticstack_elasticsearch_snapshot_repository}
*/
export class ElasticsearchSnapshotRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_snapshot_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchSnapshotRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchSnapshotRepository to import
  * @param importFromId The id of the existing ElasticsearchSnapshotRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchSnapshotRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_snapshot_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_snapshot_repository elasticstack_elasticsearch_snapshot_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchSnapshotRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchSnapshotRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_snapshot_repository',
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
    this._name = config.name;
    this._verify = config.verify;
    this._azure.internalValue = config.azure;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
    this._fs.internalValue = config.fs;
    this._gcs.internalValue = config.gcs;
    this._hdfs.internalValue = config.hdfs;
    this._s3.internalValue = config.s3;
    this._url.internalValue = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new ElasticsearchSnapshotRepositoryAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ElasticsearchSnapshotRepositoryAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchSnapshotRepositoryElasticsearchConnectionOutputReference(this, "elasticsearch_connection");
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchSnapshotRepositoryElasticsearchConnection) {
    this._elasticsearchConnection.internalValue = value;
  }
  public resetElasticsearchConnection() {
    this._elasticsearchConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionInput() {
    return this._elasticsearchConnection.internalValue;
  }

  // fs - computed: false, optional: true, required: false
  private _fs = new ElasticsearchSnapshotRepositoryFsOutputReference(this, "fs");
  public get fs() {
    return this._fs;
  }
  public putFs(value: ElasticsearchSnapshotRepositoryFs) {
    this._fs.internalValue = value;
  }
  public resetFs() {
    this._fs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsInput() {
    return this._fs.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new ElasticsearchSnapshotRepositoryGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: ElasticsearchSnapshotRepositoryGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // hdfs - computed: false, optional: true, required: false
  private _hdfs = new ElasticsearchSnapshotRepositoryHdfsOutputReference(this, "hdfs");
  public get hdfs() {
    return this._hdfs;
  }
  public putHdfs(value: ElasticsearchSnapshotRepositoryHdfs) {
    this._hdfs.internalValue = value;
  }
  public resetHdfs() {
    this._hdfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsInput() {
    return this._hdfs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new ElasticsearchSnapshotRepositoryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: ElasticsearchSnapshotRepositoryS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new ElasticsearchSnapshotRepositoryUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: ElasticsearchSnapshotRepositoryUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      verify: cdktf.booleanToTerraform(this._verify),
      azure: elasticsearchSnapshotRepositoryAzureToTerraform(this._azure.internalValue),
      elasticsearch_connection: elasticsearchSnapshotRepositoryElasticsearchConnectionToTerraform(this._elasticsearchConnection.internalValue),
      fs: elasticsearchSnapshotRepositoryFsToTerraform(this._fs.internalValue),
      gcs: elasticsearchSnapshotRepositoryGcsToTerraform(this._gcs.internalValue),
      hdfs: elasticsearchSnapshotRepositoryHdfsToTerraform(this._hdfs.internalValue),
      s3: elasticsearchSnapshotRepositoryS3ToTerraform(this._s3.internalValue),
      url: elasticsearchSnapshotRepositoryUrlToTerraform(this._url.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify: {
        value: cdktf.booleanToHclTerraform(this._verify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      azure: {
        value: elasticsearchSnapshotRepositoryAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotRepositoryAzureList",
      },
      elasticsearch_connection: {
        value: elasticsearchSnapshotRepositoryElasticsearchConnectionToHclTerraform(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotRepositoryElasticsearchConnectionList",
      },
      fs: {
        value: elasticsearchSnapshotRepositoryFsToHclTerraform(this._fs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotRepositoryFsList",
      },
      gcs: {
        value: elasticsearchSnapshotRepositoryGcsToHclTerraform(this._gcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotRepositoryGcsList",
      },
      hdfs: {
        value: elasticsearchSnapshotRepositoryHdfsToHclTerraform(this._hdfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotRepositoryHdfsList",
      },
      s3: {
        value: elasticsearchSnapshotRepositoryS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotRepositoryS3List",
      },
      url: {
        value: elasticsearchSnapshotRepositoryUrlToHclTerraform(this._url.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchSnapshotRepositoryUrlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
