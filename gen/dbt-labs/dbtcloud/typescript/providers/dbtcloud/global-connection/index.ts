// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apache Spark connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#apache_spark GlobalConnection#apache_spark}
  */
  readonly apacheSpark?: GlobalConnectionApacheSpark;
  /**
  * Athena connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#athena GlobalConnection#athena}
  */
  readonly athena?: GlobalConnectionAthena;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#bigquery GlobalConnection#bigquery}
  */
  readonly bigquery?: GlobalConnectionBigquery;
  /**
  * Databricks connection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#databricks GlobalConnection#databricks}
  */
  readonly databricks?: GlobalConnectionDatabricks;
  /**
  * Microsoft Fabric connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#fabric GlobalConnection#fabric}
  */
  readonly fabric?: GlobalConnectionFabric;
  /**
  * Connection name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#name GlobalConnection#name}
  */
  readonly name: string;
  /**
  * External OAuth configuration ID (only Snowflake for now)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#oauth_configuration_id GlobalConnection#oauth_configuration_id}
  */
  readonly oauthConfigurationId?: number;
  /**
  * PostgreSQL connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#postgres GlobalConnection#postgres}
  */
  readonly postgres?: GlobalConnectionPostgres;
  /**
  * Private Link Endpoint ID. This ID can be found using the `privatelink_endpoint` data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#private_link_endpoint_id GlobalConnection#private_link_endpoint_id}
  */
  readonly privateLinkEndpointId?: string;
  /**
  * Redshift connection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#redshift GlobalConnection#redshift}
  */
  readonly redshift?: GlobalConnectionRedshift;
  /**
  * Snowflake connection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#snowflake GlobalConnection#snowflake}
  */
  readonly snowflake?: GlobalConnectionSnowflake;
  /**
  * Starburst/Trino connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#starburst GlobalConnection#starburst}
  */
  readonly starburst?: GlobalConnectionStarburst;
  /**
  * Azure Synapse Analytics connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#synapse GlobalConnection#synapse}
  */
  readonly synapse?: GlobalConnectionSynapse;
  /**
  * Teradata connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#teradata GlobalConnection#teradata}
  */
  readonly teradata?: GlobalConnectionTeradata;
}
export interface GlobalConnectionApacheSpark {
  /**
  * Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#auth GlobalConnection#auth}
  */
  readonly auth?: string;
  /**
  * Spark cluster for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#cluster GlobalConnection#cluster}
  */
  readonly cluster: string;
  /**
  * Connection retries. Default=0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#connect_retries GlobalConnection#connect_retries}
  */
  readonly connectRetries?: number;
  /**
  * Connection time out in seconds. Default=10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#connect_timeout GlobalConnection#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Hostname of the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#host GlobalConnection#host}
  */
  readonly host: string;
  /**
  * Authentication method for the connection (http or thrift).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#method GlobalConnection#method}
  */
  readonly method: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#organization GlobalConnection#organization}
  */
  readonly organization?: string;
  /**
  * Port for the connection. Default=443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port?: number;
  /**
  * User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#user GlobalConnection#user}
  */
  readonly user?: string;
}

export function globalConnectionApacheSparkToTerraform(struct?: GlobalConnectionApacheSpark | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    connect_retries: cdktf.numberToTerraform(struct!.connectRetries),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    organization: cdktf.stringToTerraform(struct!.organization),
    port: cdktf.numberToTerraform(struct!.port),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function globalConnectionApacheSparkToHclTerraform(struct?: GlobalConnectionApacheSpark | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_retries: {
      value: cdktf.numberToHclTerraform(struct!.connectRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionApacheSparkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionApacheSpark | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._connectRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectRetries = this._connectRetries;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionApacheSpark | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._cluster = undefined;
      this._connectRetries = undefined;
      this._connectTimeout = undefined;
      this._host = undefined;
      this._method = undefined;
      this._organization = undefined;
      this._port = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._cluster = value.cluster;
      this._connectRetries = value.connectRetries;
      this._connectTimeout = value.connectTimeout;
      this._host = value.host;
      this._method = value.method;
      this._organization = value.organization;
      this._port = value.port;
      this._user = value.user;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // connect_retries - computed: true, optional: true, required: false
  private _connectRetries?: number; 
  public get connectRetries() {
    return this.getNumberAttribute('connect_retries');
  }
  public set connectRetries(value: number) {
    this._connectRetries = value;
  }
  public resetConnectRetries() {
    this._connectRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectRetriesInput() {
    return this._connectRetries;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GlobalConnectionAthena {
  /**
  * Specify the database (data catalog) to build models into (lowercase only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#database GlobalConnection#database}
  */
  readonly database: string;
  /**
  * Number of times to retry boto3 requests (e.g. deleting S3 files for materialized tables).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#num_boto3_retries GlobalConnection#num_boto3_retries}
  */
  readonly numBoto3Retries?: number;
  /**
  * Number of times to retry iceberg commit queries to fix ICEBERG_COMMIT_ERROR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#num_iceberg_retries GlobalConnection#num_iceberg_retries}
  */
  readonly numIcebergRetries?: number;
  /**
  * Number of times to retry a failing query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#num_retries GlobalConnection#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Interval in seconds to use for polling the status of query results in Athena.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#poll_interval GlobalConnection#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * AWS region of your Athena instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#region_name GlobalConnection#region_name}
  */
  readonly regionName: string;
  /**
  * Prefix for storing tables, if different from the connection's S3 staging directory. Must be in the format 's3://bucket-name/path/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#s3_data_dir GlobalConnection#s3_data_dir}
  */
  readonly s3DataDir?: string;
  /**
  * How to generate table paths in the S3 data directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#s3_data_naming GlobalConnection#s3_data_naming}
  */
  readonly s3DataNaming?: string;
  /**
  * S3 location to store Athena query results and metadata. Must be in the format 's3://bucket-name/path/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#s3_staging_dir GlobalConnection#s3_staging_dir}
  */
  readonly s3StagingDir: string;
  /**
  * Prefix for storing temporary tables, if different from the connection's S3 data directory. Must be in the format 's3://bucket-name/path/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#s3_tmp_table_dir GlobalConnection#s3_tmp_table_dir}
  */
  readonly s3TmpTableDir?: string;
  /**
  * Identifier of Athena Spark workgroup for running Python models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#spark_work_group GlobalConnection#spark_work_group}
  */
  readonly sparkWorkGroup?: string;
  /**
  * Identifier of Athena workgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#work_group GlobalConnection#work_group}
  */
  readonly workGroup?: string;
}

export function globalConnectionAthenaToTerraform(struct?: GlobalConnectionAthena | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    num_boto3_retries: cdktf.numberToTerraform(struct!.numBoto3Retries),
    num_iceberg_retries: cdktf.numberToTerraform(struct!.numIcebergRetries),
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    poll_interval: cdktf.numberToTerraform(struct!.pollInterval),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    s3_data_dir: cdktf.stringToTerraform(struct!.s3DataDir),
    s3_data_naming: cdktf.stringToTerraform(struct!.s3DataNaming),
    s3_staging_dir: cdktf.stringToTerraform(struct!.s3StagingDir),
    s3_tmp_table_dir: cdktf.stringToTerraform(struct!.s3TmpTableDir),
    spark_work_group: cdktf.stringToTerraform(struct!.sparkWorkGroup),
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}


export function globalConnectionAthenaToHclTerraform(struct?: GlobalConnectionAthena | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_boto3_retries: {
      value: cdktf.numberToHclTerraform(struct!.numBoto3Retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_iceberg_retries: {
      value: cdktf.numberToHclTerraform(struct!.numIcebergRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_dir: {
      value: cdktf.stringToHclTerraform(struct!.s3DataDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_naming: {
      value: cdktf.stringToHclTerraform(struct!.s3DataNaming),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_staging_dir: {
      value: cdktf.stringToHclTerraform(struct!.s3StagingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_tmp_table_dir: {
      value: cdktf.stringToHclTerraform(struct!.s3TmpTableDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_work_group: {
      value: cdktf.stringToHclTerraform(struct!.sparkWorkGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktf.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionAthenaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionAthena | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._numBoto3Retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBoto3Retries = this._numBoto3Retries;
    }
    if (this._numIcebergRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numIcebergRetries = this._numIcebergRetries;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._s3DataDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDir = this._s3DataDir;
    }
    if (this._s3DataNaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataNaming = this._s3DataNaming;
    }
    if (this._s3StagingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3StagingDir = this._s3StagingDir;
    }
    if (this._s3TmpTableDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3TmpTableDir = this._s3TmpTableDir;
    }
    if (this._sparkWorkGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkWorkGroup = this._sparkWorkGroup;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionAthena | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._numBoto3Retries = undefined;
      this._numIcebergRetries = undefined;
      this._numRetries = undefined;
      this._pollInterval = undefined;
      this._regionName = undefined;
      this._s3DataDir = undefined;
      this._s3DataNaming = undefined;
      this._s3StagingDir = undefined;
      this._s3TmpTableDir = undefined;
      this._sparkWorkGroup = undefined;
      this._workGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._numBoto3Retries = value.numBoto3Retries;
      this._numIcebergRetries = value.numIcebergRetries;
      this._numRetries = value.numRetries;
      this._pollInterval = value.pollInterval;
      this._regionName = value.regionName;
      this._s3DataDir = value.s3DataDir;
      this._s3DataNaming = value.s3DataNaming;
      this._s3StagingDir = value.s3StagingDir;
      this._s3TmpTableDir = value.s3TmpTableDir;
      this._sparkWorkGroup = value.sparkWorkGroup;
      this._workGroup = value.workGroup;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // num_boto3_retries - computed: false, optional: true, required: false
  private _numBoto3Retries?: number; 
  public get numBoto3Retries() {
    return this.getNumberAttribute('num_boto3_retries');
  }
  public set numBoto3Retries(value: number) {
    this._numBoto3Retries = value;
  }
  public resetNumBoto3Retries() {
    this._numBoto3Retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBoto3RetriesInput() {
    return this._numBoto3Retries;
  }

  // num_iceberg_retries - computed: false, optional: true, required: false
  private _numIcebergRetries?: number; 
  public get numIcebergRetries() {
    return this.getNumberAttribute('num_iceberg_retries');
  }
  public set numIcebergRetries(value: number) {
    this._numIcebergRetries = value;
  }
  public resetNumIcebergRetries() {
    this._numIcebergRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numIcebergRetriesInput() {
    return this._numIcebergRetries;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: number; 
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }
  public set pollInterval(value: number) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // s3_data_dir - computed: false, optional: true, required: false
  private _s3DataDir?: string; 
  public get s3DataDir() {
    return this.getStringAttribute('s3_data_dir');
  }
  public set s3DataDir(value: string) {
    this._s3DataDir = value;
  }
  public resetS3DataDir() {
    this._s3DataDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDirInput() {
    return this._s3DataDir;
  }

  // s3_data_naming - computed: false, optional: true, required: false
  private _s3DataNaming?: string; 
  public get s3DataNaming() {
    return this.getStringAttribute('s3_data_naming');
  }
  public set s3DataNaming(value: string) {
    this._s3DataNaming = value;
  }
  public resetS3DataNaming() {
    this._s3DataNaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataNamingInput() {
    return this._s3DataNaming;
  }

  // s3_staging_dir - computed: false, optional: false, required: true
  private _s3StagingDir?: string; 
  public get s3StagingDir() {
    return this.getStringAttribute('s3_staging_dir');
  }
  public set s3StagingDir(value: string) {
    this._s3StagingDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StagingDirInput() {
    return this._s3StagingDir;
  }

  // s3_tmp_table_dir - computed: false, optional: true, required: false
  private _s3TmpTableDir?: string; 
  public get s3TmpTableDir() {
    return this.getStringAttribute('s3_tmp_table_dir');
  }
  public set s3TmpTableDir(value: string) {
    this._s3TmpTableDir = value;
  }
  public resetS3TmpTableDir() {
    this._s3TmpTableDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TmpTableDirInput() {
    return this._s3TmpTableDir;
  }

  // spark_work_group - computed: false, optional: true, required: false
  private _sparkWorkGroup?: string; 
  public get sparkWorkGroup() {
    return this.getStringAttribute('spark_work_group');
  }
  public set sparkWorkGroup(value: string) {
    this._sparkWorkGroup = value;
  }
  public resetSparkWorkGroup() {
    this._sparkWorkGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkWorkGroupInput() {
    return this._sparkWorkGroup;
  }

  // work_group - computed: false, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface GlobalConnectionBigquery {
  /**
  * OAuth Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#application_id GlobalConnection#application_id}
  */
  readonly applicationId?: string;
  /**
  * OAuth Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#application_secret GlobalConnection#application_secret}
  */
  readonly applicationSecret?: string;
  /**
  * Auth Provider X509 Cert URL for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#auth_provider_x509_cert_url GlobalConnection#auth_provider_x509_cert_url}
  */
  readonly authProviderX509CertUrl: string;
  /**
  * Auth URI for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#auth_uri GlobalConnection#auth_uri}
  */
  readonly authUri: string;
  /**
  * Service Account email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#client_email GlobalConnection#client_email}
  */
  readonly clientEmail: string;
  /**
  * Client ID of the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#client_id GlobalConnection#client_id}
  */
  readonly clientId: string;
  /**
  * Client X509 Cert URL for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#client_x509_cert_url GlobalConnection#client_x509_cert_url}
  */
  readonly clientX509CertUrl: string;
  /**
  * Dataproc cluster name for PySpark workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#dataproc_cluster_name GlobalConnection#dataproc_cluster_name}
  */
  readonly dataprocClusterName?: string;
  /**
  * Google Cloud region for PySpark workloads on Dataproc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#dataproc_region GlobalConnection#dataproc_region}
  */
  readonly dataprocRegion?: string;
  /**
  * Project to bill for query execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#execution_project GlobalConnection#execution_project}
  */
  readonly executionProject?: string;
  /**
  * The GCP project ID to use for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#gcp_project_id GlobalConnection#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * URI for a Google Cloud Storage bucket to host Python code executed via Datapro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#gcs_bucket GlobalConnection#gcs_bucket}
  */
  readonly gcsBucket?: string;
  /**
  * Service Account to impersonate when running queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#impersonate_service_account GlobalConnection#impersonate_service_account}
  */
  readonly impersonateServiceAccount?: string;
  /**
  * Maximum timeout for the job creation step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#job_creation_timeout_seconds GlobalConnection#job_creation_timeout_seconds}
  */
  readonly jobCreationTimeoutSeconds?: number;
  /**
  * Timeout in seconds for job execution, to be used for the bigquery_v1 adapter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#job_execution_timeout_seconds GlobalConnection#job_execution_timeout_seconds}
  */
  readonly jobExecutionTimeoutSeconds?: number;
  /**
  * Total number of seconds to wait while retrying the same query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#job_retry_deadline_seconds GlobalConnection#job_retry_deadline_seconds}
  */
  readonly jobRetryDeadlineSeconds?: number;
  /**
  * Location to create new Datasets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#location GlobalConnection#location}
  */
  readonly location?: string;
  /**
  * Max number of bytes that can be billed for a given BigQuery query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#maximum_bytes_billed GlobalConnection#maximum_bytes_billed}
  */
  readonly maximumBytesBilled?: number;
  /**
  * The priority with which to execute BigQuery queries (batch or interactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#priority GlobalConnection#priority}
  */
  readonly priority?: string;
  /**
  * Private Key for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#private_key GlobalConnection#private_key}
  */
  readonly privateKey: string;
  /**
  * Private Key ID for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#private_key_id GlobalConnection#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * Number of retries for queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#retries GlobalConnection#retries}
  */
  readonly retries?: number;
  /**
  * OAuth scopes for the BigQuery connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#scopes GlobalConnection#scopes}
  */
  readonly scopes?: string[];
  /**
  * Timeout in seconds for queries, to be used ONLY for the bigquery_v0 adapter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#timeout_seconds GlobalConnection#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Token URI for the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#token_uri GlobalConnection#token_uri}
  */
  readonly tokenUri: string;
  /**
  * Whether to use the latest bigquery_v1 adapter (use this for BQ WIF). If true, the `job_execution_timeout_seconds` field will be used. Warning! changing the adapter version (from legacy to latest or vice versa) is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#use_latest_adapter GlobalConnection#use_latest_adapter}
  */
  readonly useLatestAdapter?: boolean | cdktf.IResolvable;
}

export function globalConnectionBigqueryToTerraform(struct?: GlobalConnectionBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    application_secret: cdktf.stringToTerraform(struct!.applicationSecret),
    auth_provider_x509_cert_url: cdktf.stringToTerraform(struct!.authProviderX509CertUrl),
    auth_uri: cdktf.stringToTerraform(struct!.authUri),
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_x509_cert_url: cdktf.stringToTerraform(struct!.clientX509CertUrl),
    dataproc_cluster_name: cdktf.stringToTerraform(struct!.dataprocClusterName),
    dataproc_region: cdktf.stringToTerraform(struct!.dataprocRegion),
    execution_project: cdktf.stringToTerraform(struct!.executionProject),
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
    gcs_bucket: cdktf.stringToTerraform(struct!.gcsBucket),
    impersonate_service_account: cdktf.stringToTerraform(struct!.impersonateServiceAccount),
    job_creation_timeout_seconds: cdktf.numberToTerraform(struct!.jobCreationTimeoutSeconds),
    job_execution_timeout_seconds: cdktf.numberToTerraform(struct!.jobExecutionTimeoutSeconds),
    job_retry_deadline_seconds: cdktf.numberToTerraform(struct!.jobRetryDeadlineSeconds),
    location: cdktf.stringToTerraform(struct!.location),
    maximum_bytes_billed: cdktf.numberToTerraform(struct!.maximumBytesBilled),
    priority: cdktf.stringToTerraform(struct!.priority),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
    retries: cdktf.numberToTerraform(struct!.retries),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    token_uri: cdktf.stringToTerraform(struct!.tokenUri),
    use_latest_adapter: cdktf.booleanToTerraform(struct!.useLatestAdapter),
  }
}


export function globalConnectionBigqueryToHclTerraform(struct?: GlobalConnectionBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_secret: {
      value: cdktf.stringToHclTerraform(struct!.applicationSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_provider_x509_cert_url: {
      value: cdktf.stringToHclTerraform(struct!.authProviderX509CertUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_uri: {
      value: cdktf.stringToHclTerraform(struct!.authUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_x509_cert_url: {
      value: cdktf.stringToHclTerraform(struct!.clientX509CertUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataproc_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.dataprocClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataproc_region: {
      value: cdktf.stringToHclTerraform(struct!.dataprocRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_project: {
      value: cdktf.stringToHclTerraform(struct!.executionProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_bucket: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impersonate_service_account: {
      value: cdktf.stringToHclTerraform(struct!.impersonateServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_creation_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.jobCreationTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_execution_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.jobExecutionTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_retry_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.jobRetryDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_bytes_billed: {
      value: cdktf.numberToHclTerraform(struct!.maximumBytesBilled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_id: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_uri: {
      value: cdktf.stringToHclTerraform(struct!.tokenUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_latest_adapter: {
      value: cdktf.booleanToHclTerraform(struct!.useLatestAdapter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionBigqueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionBigquery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._applicationSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecret = this._applicationSecret;
    }
    if (this._authProviderX509CertUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProviderX509CertUrl = this._authProviderX509CertUrl;
    }
    if (this._authUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUri = this._authUri;
    }
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientX509CertUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientX509CertUrl = this._clientX509CertUrl;
    }
    if (this._dataprocClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocClusterName = this._dataprocClusterName;
    }
    if (this._dataprocRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocRegion = this._dataprocRegion;
    }
    if (this._executionProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionProject = this._executionProject;
    }
    if (this._gcpProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProjectId = this._gcpProjectId;
    }
    if (this._gcsBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucket = this._gcsBucket;
    }
    if (this._impersonateServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.impersonateServiceAccount = this._impersonateServiceAccount;
    }
    if (this._jobCreationTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCreationTimeoutSeconds = this._jobCreationTimeoutSeconds;
    }
    if (this._jobExecutionTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobExecutionTimeoutSeconds = this._jobExecutionTimeoutSeconds;
    }
    if (this._jobRetryDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobRetryDeadlineSeconds = this._jobRetryDeadlineSeconds;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._maximumBytesBilled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBytesBilled = this._maximumBytesBilled;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._tokenUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUri = this._tokenUri;
    }
    if (this._useLatestAdapter !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLatestAdapter = this._useLatestAdapter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._applicationSecret = undefined;
      this._authProviderX509CertUrl = undefined;
      this._authUri = undefined;
      this._clientEmail = undefined;
      this._clientId = undefined;
      this._clientX509CertUrl = undefined;
      this._dataprocClusterName = undefined;
      this._dataprocRegion = undefined;
      this._executionProject = undefined;
      this._gcpProjectId = undefined;
      this._gcsBucket = undefined;
      this._impersonateServiceAccount = undefined;
      this._jobCreationTimeoutSeconds = undefined;
      this._jobExecutionTimeoutSeconds = undefined;
      this._jobRetryDeadlineSeconds = undefined;
      this._location = undefined;
      this._maximumBytesBilled = undefined;
      this._priority = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
      this._retries = undefined;
      this._scopes = undefined;
      this._timeoutSeconds = undefined;
      this._tokenUri = undefined;
      this._useLatestAdapter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._applicationSecret = value.applicationSecret;
      this._authProviderX509CertUrl = value.authProviderX509CertUrl;
      this._authUri = value.authUri;
      this._clientEmail = value.clientEmail;
      this._clientId = value.clientId;
      this._clientX509CertUrl = value.clientX509CertUrl;
      this._dataprocClusterName = value.dataprocClusterName;
      this._dataprocRegion = value.dataprocRegion;
      this._executionProject = value.executionProject;
      this._gcpProjectId = value.gcpProjectId;
      this._gcsBucket = value.gcsBucket;
      this._impersonateServiceAccount = value.impersonateServiceAccount;
      this._jobCreationTimeoutSeconds = value.jobCreationTimeoutSeconds;
      this._jobExecutionTimeoutSeconds = value.jobExecutionTimeoutSeconds;
      this._jobRetryDeadlineSeconds = value.jobRetryDeadlineSeconds;
      this._location = value.location;
      this._maximumBytesBilled = value.maximumBytesBilled;
      this._priority = value.priority;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
      this._retries = value.retries;
      this._scopes = value.scopes;
      this._timeoutSeconds = value.timeoutSeconds;
      this._tokenUri = value.tokenUri;
      this._useLatestAdapter = value.useLatestAdapter;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_secret - computed: false, optional: true, required: false
  private _applicationSecret?: string; 
  public get applicationSecret() {
    return this.getStringAttribute('application_secret');
  }
  public set applicationSecret(value: string) {
    this._applicationSecret = value;
  }
  public resetApplicationSecret() {
    this._applicationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretInput() {
    return this._applicationSecret;
  }

  // auth_provider_x509_cert_url - computed: false, optional: false, required: true
  private _authProviderX509CertUrl?: string; 
  public get authProviderX509CertUrl() {
    return this.getStringAttribute('auth_provider_x509_cert_url');
  }
  public set authProviderX509CertUrl(value: string) {
    this._authProviderX509CertUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderX509CertUrlInput() {
    return this._authProviderX509CertUrl;
  }

  // auth_uri - computed: false, optional: false, required: true
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_x509_cert_url - computed: false, optional: false, required: true
  private _clientX509CertUrl?: string; 
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }
  public set clientX509CertUrl(value: string) {
    this._clientX509CertUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientX509CertUrlInput() {
    return this._clientX509CertUrl;
  }

  // dataproc_cluster_name - computed: false, optional: true, required: false
  private _dataprocClusterName?: string; 
  public get dataprocClusterName() {
    return this.getStringAttribute('dataproc_cluster_name');
  }
  public set dataprocClusterName(value: string) {
    this._dataprocClusterName = value;
  }
  public resetDataprocClusterName() {
    this._dataprocClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocClusterNameInput() {
    return this._dataprocClusterName;
  }

  // dataproc_region - computed: false, optional: true, required: false
  private _dataprocRegion?: string; 
  public get dataprocRegion() {
    return this.getStringAttribute('dataproc_region');
  }
  public set dataprocRegion(value: string) {
    this._dataprocRegion = value;
  }
  public resetDataprocRegion() {
    this._dataprocRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocRegionInput() {
    return this._dataprocRegion;
  }

  // execution_project - computed: false, optional: true, required: false
  private _executionProject?: string; 
  public get executionProject() {
    return this.getStringAttribute('execution_project');
  }
  public set executionProject(value: string) {
    this._executionProject = value;
  }
  public resetExecutionProject() {
    this._executionProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionProjectInput() {
    return this._executionProject;
  }

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // gcs_bucket - computed: false, optional: true, required: false
  private _gcsBucket?: string; 
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }
  public set gcsBucket(value: string) {
    this._gcsBucket = value;
  }
  public resetGcsBucket() {
    this._gcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketInput() {
    return this._gcsBucket;
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: string; 
  public get impersonateServiceAccount() {
    return this.getStringAttribute('impersonate_service_account');
  }
  public set impersonateServiceAccount(value: string) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount;
  }

  // job_creation_timeout_seconds - computed: false, optional: true, required: false
  private _jobCreationTimeoutSeconds?: number; 
  public get jobCreationTimeoutSeconds() {
    return this.getNumberAttribute('job_creation_timeout_seconds');
  }
  public set jobCreationTimeoutSeconds(value: number) {
    this._jobCreationTimeoutSeconds = value;
  }
  public resetJobCreationTimeoutSeconds() {
    this._jobCreationTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCreationTimeoutSecondsInput() {
    return this._jobCreationTimeoutSeconds;
  }

  // job_execution_timeout_seconds - computed: false, optional: true, required: false
  private _jobExecutionTimeoutSeconds?: number; 
  public get jobExecutionTimeoutSeconds() {
    return this.getNumberAttribute('job_execution_timeout_seconds');
  }
  public set jobExecutionTimeoutSeconds(value: number) {
    this._jobExecutionTimeoutSeconds = value;
  }
  public resetJobExecutionTimeoutSeconds() {
    this._jobExecutionTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobExecutionTimeoutSecondsInput() {
    return this._jobExecutionTimeoutSeconds;
  }

  // job_retry_deadline_seconds - computed: false, optional: true, required: false
  private _jobRetryDeadlineSeconds?: number; 
  public get jobRetryDeadlineSeconds() {
    return this.getNumberAttribute('job_retry_deadline_seconds');
  }
  public set jobRetryDeadlineSeconds(value: number) {
    this._jobRetryDeadlineSeconds = value;
  }
  public resetJobRetryDeadlineSeconds() {
    this._jobRetryDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRetryDeadlineSecondsInput() {
    return this._jobRetryDeadlineSeconds;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maximum_bytes_billed - computed: false, optional: true, required: false
  private _maximumBytesBilled?: number; 
  public get maximumBytesBilled() {
    return this.getNumberAttribute('maximum_bytes_billed');
  }
  public set maximumBytesBilled(value: number) {
    this._maximumBytesBilled = value;
  }
  public resetMaximumBytesBilled() {
    this._maximumBytesBilled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesBilledInput() {
    return this._maximumBytesBilled;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // token_uri - computed: false, optional: false, required: true
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
  }

  // use_latest_adapter - computed: false, optional: true, required: false
  private _useLatestAdapter?: boolean | cdktf.IResolvable; 
  public get useLatestAdapter() {
    return this.getBooleanAttribute('use_latest_adapter');
  }
  public set useLatestAdapter(value: boolean | cdktf.IResolvable) {
    this._useLatestAdapter = value;
  }
  public resetUseLatestAdapter() {
    this._useLatestAdapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestAdapterInput() {
    return this._useLatestAdapter;
  }
}
export interface GlobalConnectionDatabricks {
  /**
  * Catalog name if Unity Catalog is enabled in your Databricks workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#catalog GlobalConnection#catalog}
  */
  readonly catalog?: string;
  /**
  * Required to enable Databricks OAuth authentication for IDE developers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#client_id GlobalConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Required to enable Databricks OAuth authentication for IDE developers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#client_secret GlobalConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The hostname of the Databricks cluster or SQL warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#host GlobalConnection#host}
  */
  readonly host: string;
  /**
  * The HTTP path of the Databricks cluster or SQL warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#http_path GlobalConnection#http_path}
  */
  readonly httpPath: string;
}

export function globalConnectionDatabricksToTerraform(struct?: GlobalConnectionDatabricks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    host: cdktf.stringToTerraform(struct!.host),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
  }
}


export function globalConnectionDatabricksToHclTerraform(struct?: GlobalConnectionDatabricks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_path: {
      value: cdktf.stringToHclTerraform(struct!.httpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionDatabricksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionDatabricks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionDatabricks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._host = undefined;
      this._httpPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._host = value.host;
      this._httpPath = value.httpPath;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_path - computed: false, optional: false, required: true
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }
}
export interface GlobalConnectionFabric {
  /**
  * The database to connect to for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#database GlobalConnection#database}
  */
  readonly database: string;
  /**
  * The number of seconds used to establish a connection before failing. Defaults to 0, which means that the timeout is disabled or uses the default system settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#login_timeout GlobalConnection#login_timeout}
  */
  readonly loginTimeout?: number;
  /**
  * The port to connect to for this connection. Default=1433
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port?: number;
  /**
  * The number of seconds used to wait for a query before failing. Defaults to 0, which means that the timeout is disabled or uses the default system settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#query_timeout GlobalConnection#query_timeout}
  */
  readonly queryTimeout?: number;
  /**
  * The number of automatic times to retry a query before failing. Defaults to 1. Queries with syntax errors will not be retried. This setting can be used to overcome intermittent network issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#retries GlobalConnection#retries}
  */
  readonly retries?: number;
  /**
  * The server hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#server GlobalConnection#server}
  */
  readonly server: string;
}

export function globalConnectionFabricToTerraform(struct?: GlobalConnectionFabric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    login_timeout: cdktf.numberToTerraform(struct!.loginTimeout),
    port: cdktf.numberToTerraform(struct!.port),
    query_timeout: cdktf.numberToTerraform(struct!.queryTimeout),
    retries: cdktf.numberToTerraform(struct!.retries),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function globalConnectionFabricToHclTerraform(struct?: GlobalConnectionFabric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_timeout: {
      value: cdktf.numberToHclTerraform(struct!.loginTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_timeout: {
      value: cdktf.numberToHclTerraform(struct!.queryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionFabricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionFabric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._loginTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginTimeout = this._loginTimeout;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._queryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTimeout = this._queryTimeout;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionFabric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._loginTimeout = undefined;
      this._port = undefined;
      this._queryTimeout = undefined;
      this._retries = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._loginTimeout = value.loginTimeout;
      this._port = value.port;
      this._queryTimeout = value.queryTimeout;
      this._retries = value.retries;
      this._server = value.server;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // login_timeout - computed: true, optional: true, required: false
  private _loginTimeout?: number; 
  public get loginTimeout() {
    return this.getNumberAttribute('login_timeout');
  }
  public set loginTimeout(value: number) {
    this._loginTimeout = value;
  }
  public resetLoginTimeout() {
    this._loginTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTimeoutInput() {
    return this._loginTimeout;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // query_timeout - computed: true, optional: true, required: false
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface GlobalConnectionPostgresSshTunnel {
  /**
  * The hostname for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#hostname GlobalConnection#hostname}
  */
  readonly hostname: string;
  /**
  * The HTTP port for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port: number;
  /**
  * The username to use for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#username GlobalConnection#username}
  */
  readonly username: string;
}

export function globalConnectionPostgresSshTunnelToTerraform(struct?: GlobalConnectionPostgresSshTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function globalConnectionPostgresSshTunnelToHclTerraform(struct?: GlobalConnectionPostgresSshTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GlobalConnectionPostgresSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionPostgresSshTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionPostgresSshTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GlobalConnectionPostgres {
  /**
  * The database name for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#dbname GlobalConnection#dbname}
  */
  readonly dbname: string;
  /**
  * The hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#hostname GlobalConnection#hostname}
  */
  readonly hostname: string;
  /**
  * The port to connect to for this connection. Default=5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port?: number;
  /**
  * PostgreSQL SSH Tunnel configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#ssh_tunnel GlobalConnection#ssh_tunnel}
  */
  readonly sshTunnel?: GlobalConnectionPostgresSshTunnel;
}

export function globalConnectionPostgresToTerraform(struct?: GlobalConnectionPostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
    ssh_tunnel: globalConnectionPostgresSshTunnelToTerraform(struct!.sshTunnel),
  }
}


export function globalConnectionPostgresToHclTerraform(struct?: GlobalConnectionPostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbname: {
      value: cdktf.stringToHclTerraform(struct!.dbname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_tunnel: {
      value: globalConnectionPostgresSshTunnelToHclTerraform(struct!.sshTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalConnectionPostgresSshTunnel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionPostgresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionPostgres | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshTunnel = this._sshTunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionPostgres | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbname = undefined;
      this._hostname = undefined;
      this._port = undefined;
      this._sshTunnel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbname = value.dbname;
      this._hostname = value.hostname;
      this._port = value.port;
      this._sshTunnel.internalValue = value.sshTunnel;
    }
  }

  // dbname - computed: false, optional: false, required: true
  private _dbname?: string; 
  public get dbname() {
    return this.getStringAttribute('dbname');
  }
  public set dbname(value: string) {
    this._dbname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbnameInput() {
    return this._dbname;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_tunnel - computed: false, optional: true, required: false
  private _sshTunnel = new GlobalConnectionPostgresSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
  public putSshTunnel(value: GlobalConnectionPostgresSshTunnel) {
    this._sshTunnel.internalValue = value;
  }
  public resetSshTunnel() {
    this._sshTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnelInput() {
    return this._sshTunnel.internalValue;
  }
}
export interface GlobalConnectionRedshiftSshTunnel {
  /**
  * The hostname for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#hostname GlobalConnection#hostname}
  */
  readonly hostname: string;
  /**
  * The HTTP port for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port: number;
  /**
  * The username to use for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#username GlobalConnection#username}
  */
  readonly username: string;
}

export function globalConnectionRedshiftSshTunnelToTerraform(struct?: GlobalConnectionRedshiftSshTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function globalConnectionRedshiftSshTunnelToHclTerraform(struct?: GlobalConnectionRedshiftSshTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GlobalConnectionRedshiftSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionRedshiftSshTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionRedshiftSshTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GlobalConnectionRedshift {
  /**
  * The database name for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#dbname GlobalConnection#dbname}
  */
  readonly dbname: string;
  /**
  * The hostname of the data warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#hostname GlobalConnection#hostname}
  */
  readonly hostname: string;
  /**
  * The port to connect to for this connection. Default=5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port?: number;
  /**
  * Redshift SSH Tunnel configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#ssh_tunnel GlobalConnection#ssh_tunnel}
  */
  readonly sshTunnel?: GlobalConnectionRedshiftSshTunnel;
}

export function globalConnectionRedshiftToTerraform(struct?: GlobalConnectionRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
    ssh_tunnel: globalConnectionRedshiftSshTunnelToTerraform(struct!.sshTunnel),
  }
}


export function globalConnectionRedshiftToHclTerraform(struct?: GlobalConnectionRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbname: {
      value: cdktf.stringToHclTerraform(struct!.dbname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_tunnel: {
      value: globalConnectionRedshiftSshTunnelToHclTerraform(struct!.sshTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "GlobalConnectionRedshiftSshTunnel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshTunnel = this._sshTunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbname = undefined;
      this._hostname = undefined;
      this._port = undefined;
      this._sshTunnel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbname = value.dbname;
      this._hostname = value.hostname;
      this._port = value.port;
      this._sshTunnel.internalValue = value.sshTunnel;
    }
  }

  // dbname - computed: false, optional: false, required: true
  private _dbname?: string; 
  public get dbname() {
    return this.getStringAttribute('dbname');
  }
  public set dbname(value: string) {
    this._dbname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbnameInput() {
    return this._dbname;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_tunnel - computed: false, optional: true, required: false
  private _sshTunnel = new GlobalConnectionRedshiftSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
  public putSshTunnel(value: GlobalConnectionRedshiftSshTunnel) {
    this._sshTunnel.internalValue = value;
  }
  public resetSshTunnel() {
    this._sshTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnelInput() {
    return this._sshTunnel.internalValue;
  }
}
export interface GlobalConnectionSnowflake {
  /**
  * The Snowflake account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#account GlobalConnection#account}
  */
  readonly account: string;
  /**
  * Whether to allow Snowflake OAuth for the connection. If true, the `oauth_client_id` and `oauth_client_secret` fields must be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#allow_sso GlobalConnection#allow_sso}
  */
  readonly allowSso?: boolean | cdktf.IResolvable;
  /**
  * If true, the snowflake client will keep connections for longer than the default 4 hours. This is helpful when particularly long-running queries are executing (> 4 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#client_session_keep_alive GlobalConnection#client_session_keep_alive}
  */
  readonly clientSessionKeepAlive?: boolean | cdktf.IResolvable;
  /**
  * The default database for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#database GlobalConnection#database}
  */
  readonly database: string;
  /**
  * OAuth Client ID. Required to allow OAuth between dbt Cloud and Snowflake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#oauth_client_id GlobalConnection#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * OAuth Client Secret. Required to allow OAuth between dbt Cloud and Snowflake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#oauth_client_secret GlobalConnection#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * The Snowflake role to use when running queries on the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#role GlobalConnection#role}
  */
  readonly role?: string;
  /**
  * The default Snowflake Warehouse to use for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#warehouse GlobalConnection#warehouse}
  */
  readonly warehouse: string;
}

export function globalConnectionSnowflakeToTerraform(struct?: GlobalConnectionSnowflake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    allow_sso: cdktf.booleanToTerraform(struct!.allowSso),
    client_session_keep_alive: cdktf.booleanToTerraform(struct!.clientSessionKeepAlive),
    database: cdktf.stringToTerraform(struct!.database),
    oauth_client_id: cdktf.stringToTerraform(struct!.oauthClientId),
    oauth_client_secret: cdktf.stringToTerraform(struct!.oauthClientSecret),
    role: cdktf.stringToTerraform(struct!.role),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}


export function globalConnectionSnowflakeToHclTerraform(struct?: GlobalConnectionSnowflake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_sso: {
      value: cdktf.booleanToHclTerraform(struct!.allowSso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_session_keep_alive: {
      value: cdktf.booleanToHclTerraform(struct!.clientSessionKeepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauthClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.oauthClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktf.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionSnowflake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._allowSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSso = this._allowSso;
    }
    if (this._clientSessionKeepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSessionKeepAlive = this._clientSessionKeepAlive;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._oauthClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthClientId = this._oauthClientId;
    }
    if (this._oauthClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthClientSecret = this._oauthClientSecret;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionSnowflake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._allowSso = undefined;
      this._clientSessionKeepAlive = undefined;
      this._database = undefined;
      this._oauthClientId = undefined;
      this._oauthClientSecret = undefined;
      this._role = undefined;
      this._warehouse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._allowSso = value.allowSso;
      this._clientSessionKeepAlive = value.clientSessionKeepAlive;
      this._database = value.database;
      this._oauthClientId = value.oauthClientId;
      this._oauthClientSecret = value.oauthClientSecret;
      this._role = value.role;
      this._warehouse = value.warehouse;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // allow_sso - computed: true, optional: true, required: false
  private _allowSso?: boolean | cdktf.IResolvable; 
  public get allowSso() {
    return this.getBooleanAttribute('allow_sso');
  }
  public set allowSso(value: boolean | cdktf.IResolvable) {
    this._allowSso = value;
  }
  public resetAllowSso() {
    this._allowSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSsoInput() {
    return this._allowSso;
  }

  // client_session_keep_alive - computed: true, optional: true, required: false
  private _clientSessionKeepAlive?: boolean | cdktf.IResolvable; 
  public get clientSessionKeepAlive() {
    return this.getBooleanAttribute('client_session_keep_alive');
  }
  public set clientSessionKeepAlive(value: boolean | cdktf.IResolvable) {
    this._clientSessionKeepAlive = value;
  }
  public resetClientSessionKeepAlive() {
    this._clientSessionKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionKeepAliveInput() {
    return this._clientSessionKeepAlive;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface GlobalConnectionStarburst {
  /**
  * The hostname of the account to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#host GlobalConnection#host}
  */
  readonly host: string;
  /**
  * The authentication method. Only LDAP for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#method GlobalConnection#method}
  */
  readonly method?: string;
  /**
  * The port to connect to for this connection. Default=443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port?: number;
}

export function globalConnectionStarburstToTerraform(struct?: GlobalConnectionStarburst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function globalConnectionStarburstToHclTerraform(struct?: GlobalConnectionStarburst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionStarburstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionStarburst | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionStarburst | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._method = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._method = value.method;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GlobalConnectionSynapse {
  /**
  * The database to connect to for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#database GlobalConnection#database}
  */
  readonly database: string;
  /**
  * The server hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#host GlobalConnection#host}
  */
  readonly host: string;
  /**
  * The number of seconds used to establish a connection before failing. Defaults to 0, which means that the timeout is disabled or uses the default system settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#login_timeout GlobalConnection#login_timeout}
  */
  readonly loginTimeout?: number;
  /**
  * The port to connect to for this connection. Default=1433
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port?: number;
  /**
  * The number of seconds used to wait for a query before failing. Defaults to 0, which means that the timeout is disabled or uses the default system settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#query_timeout GlobalConnection#query_timeout}
  */
  readonly queryTimeout?: number;
  /**
  * The number of automatic times to retry a query before failing. Defaults to 1. Queries with syntax errors will not be retried. This setting can be used to overcome intermittent network issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#retries GlobalConnection#retries}
  */
  readonly retries?: number;
}

export function globalConnectionSynapseToTerraform(struct?: GlobalConnectionSynapse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    login_timeout: cdktf.numberToTerraform(struct!.loginTimeout),
    port: cdktf.numberToTerraform(struct!.port),
    query_timeout: cdktf.numberToTerraform(struct!.queryTimeout),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function globalConnectionSynapseToHclTerraform(struct?: GlobalConnectionSynapse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_timeout: {
      value: cdktf.numberToHclTerraform(struct!.loginTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_timeout: {
      value: cdktf.numberToHclTerraform(struct!.queryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionSynapseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionSynapse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._loginTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginTimeout = this._loginTimeout;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._queryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTimeout = this._queryTimeout;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionSynapse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._loginTimeout = undefined;
      this._port = undefined;
      this._queryTimeout = undefined;
      this._retries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._loginTimeout = value.loginTimeout;
      this._port = value.port;
      this._queryTimeout = value.queryTimeout;
      this._retries = value.retries;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // login_timeout - computed: true, optional: true, required: false
  private _loginTimeout?: number; 
  public get loginTimeout() {
    return this.getNumberAttribute('login_timeout');
  }
  public set loginTimeout(value: number) {
    this._loginTimeout = value;
  }
  public resetLoginTimeout() {
    this._loginTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTimeoutInput() {
    return this._loginTimeout;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // query_timeout - computed: true, optional: true, required: false
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }
}
export interface GlobalConnectionTeradata {
  /**
  * The hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#host GlobalConnection#host}
  */
  readonly host: string;
  /**
  * The port to connect to for this connection. Default=1025
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#port GlobalConnection#port}
  */
  readonly port?: string;
  /**
  * The number of seconds used to establish a connection before failing. Defaults to 0, which means that the timeout is disabled or uses the default system settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#request_timeout GlobalConnection#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The number of automatic times to retry a query before failing. Defaults to 1. Queries with syntax errors will not be retried. This setting can be used to overcome intermittent network issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#retries GlobalConnection#retries}
  */
  readonly retries?: number;
  /**
  * The transaction mode to use for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#tmode GlobalConnection#tmode}
  */
  readonly tmode: string;
}

export function globalConnectionTeradataToTerraform(struct?: GlobalConnectionTeradata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    retries: cdktf.numberToTerraform(struct!.retries),
    tmode: cdktf.stringToTerraform(struct!.tmode),
  }
}


export function globalConnectionTeradataToHclTerraform(struct?: GlobalConnectionTeradata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tmode: {
      value: cdktf.stringToHclTerraform(struct!.tmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalConnectionTeradataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalConnectionTeradata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._tmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmode = this._tmode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalConnectionTeradata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._requestTimeout = undefined;
      this._retries = undefined;
      this._tmode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._requestTimeout = value.requestTimeout;
      this._retries = value.retries;
      this._tmode = value.tmode;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // tmode - computed: false, optional: false, required: true
  private _tmode?: string; 
  public get tmode() {
    return this.getStringAttribute('tmode');
  }
  public set tmode(value: string) {
    this._tmode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tmodeInput() {
    return this._tmode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection dbtcloud_global_connection}
*/
export class GlobalConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_global_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalConnection to import
  * @param importFromId The id of the existing GlobalConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_global_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/global_connection dbtcloud_global_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_global_connection',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apacheSpark.internalValue = config.apacheSpark;
    this._athena.internalValue = config.athena;
    this._bigquery.internalValue = config.bigquery;
    this._databricks.internalValue = config.databricks;
    this._fabric.internalValue = config.fabric;
    this._name = config.name;
    this._oauthConfigurationId = config.oauthConfigurationId;
    this._postgres.internalValue = config.postgres;
    this._privateLinkEndpointId = config.privateLinkEndpointId;
    this._redshift.internalValue = config.redshift;
    this._snowflake.internalValue = config.snowflake;
    this._starburst.internalValue = config.starburst;
    this._synapse.internalValue = config.synapse;
    this._teradata.internalValue = config.teradata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adapter_version - computed: true, optional: false, required: false
  public get adapterVersion() {
    return this.getStringAttribute('adapter_version');
  }

  // apache_spark - computed: false, optional: true, required: false
  private _apacheSpark = new GlobalConnectionApacheSparkOutputReference(this, "apache_spark");
  public get apacheSpark() {
    return this._apacheSpark;
  }
  public putApacheSpark(value: GlobalConnectionApacheSpark) {
    this._apacheSpark.internalValue = value;
  }
  public resetApacheSpark() {
    this._apacheSpark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheSparkInput() {
    return this._apacheSpark.internalValue;
  }

  // athena - computed: false, optional: true, required: false
  private _athena = new GlobalConnectionAthenaOutputReference(this, "athena");
  public get athena() {
    return this._athena;
  }
  public putAthena(value: GlobalConnectionAthena) {
    this._athena.internalValue = value;
  }
  public resetAthena() {
    this._athena.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaInput() {
    return this._athena.internalValue;
  }

  // bigquery - computed: false, optional: true, required: false
  private _bigquery = new GlobalConnectionBigqueryOutputReference(this, "bigquery");
  public get bigquery() {
    return this._bigquery;
  }
  public putBigquery(value: GlobalConnectionBigquery) {
    this._bigquery.internalValue = value;
  }
  public resetBigquery() {
    this._bigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryInput() {
    return this._bigquery.internalValue;
  }

  // databricks - computed: false, optional: true, required: false
  private _databricks = new GlobalConnectionDatabricksOutputReference(this, "databricks");
  public get databricks() {
    return this._databricks;
  }
  public putDatabricks(value: GlobalConnectionDatabricks) {
    this._databricks.internalValue = value;
  }
  public resetDatabricks() {
    this._databricks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksInput() {
    return this._databricks.internalValue;
  }

  // fabric - computed: false, optional: true, required: false
  private _fabric = new GlobalConnectionFabricOutputReference(this, "fabric");
  public get fabric() {
    return this._fabric;
  }
  public putFabric(value: GlobalConnectionFabric) {
    this._fabric.internalValue = value;
  }
  public resetFabric() {
    this._fabric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_ssh_tunnel_enabled - computed: true, optional: false, required: false
  public get isSshTunnelEnabled() {
    return this.getBooleanAttribute('is_ssh_tunnel_enabled');
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

  // oauth_configuration_id - computed: false, optional: true, required: false
  private _oauthConfigurationId?: number; 
  public get oauthConfigurationId() {
    return this.getNumberAttribute('oauth_configuration_id');
  }
  public set oauthConfigurationId(value: number) {
    this._oauthConfigurationId = value;
  }
  public resetOauthConfigurationId() {
    this._oauthConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigurationIdInput() {
    return this._oauthConfigurationId;
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new GlobalConnectionPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: GlobalConnectionPostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // private_link_endpoint_id - computed: false, optional: true, required: false
  private _privateLinkEndpointId?: string; 
  public get privateLinkEndpointId() {
    return this.getStringAttribute('private_link_endpoint_id');
  }
  public set privateLinkEndpointId(value: string) {
    this._privateLinkEndpointId = value;
  }
  public resetPrivateLinkEndpointId() {
    this._privateLinkEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEndpointIdInput() {
    return this._privateLinkEndpointId;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new GlobalConnectionRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: GlobalConnectionRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new GlobalConnectionSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: GlobalConnectionSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // starburst - computed: false, optional: true, required: false
  private _starburst = new GlobalConnectionStarburstOutputReference(this, "starburst");
  public get starburst() {
    return this._starburst;
  }
  public putStarburst(value: GlobalConnectionStarburst) {
    this._starburst.internalValue = value;
  }
  public resetStarburst() {
    this._starburst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starburstInput() {
    return this._starburst.internalValue;
  }

  // synapse - computed: false, optional: true, required: false
  private _synapse = new GlobalConnectionSynapseOutputReference(this, "synapse");
  public get synapse() {
    return this._synapse;
  }
  public putSynapse(value: GlobalConnectionSynapse) {
    this._synapse.internalValue = value;
  }
  public resetSynapse() {
    this._synapse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseInput() {
    return this._synapse.internalValue;
  }

  // teradata - computed: false, optional: true, required: false
  private _teradata = new GlobalConnectionTeradataOutputReference(this, "teradata");
  public get teradata() {
    return this._teradata;
  }
  public putTeradata(value: GlobalConnectionTeradata) {
    this._teradata.internalValue = value;
  }
  public resetTeradata() {
    this._teradata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teradataInput() {
    return this._teradata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apache_spark: globalConnectionApacheSparkToTerraform(this._apacheSpark.internalValue),
      athena: globalConnectionAthenaToTerraform(this._athena.internalValue),
      bigquery: globalConnectionBigqueryToTerraform(this._bigquery.internalValue),
      databricks: globalConnectionDatabricksToTerraform(this._databricks.internalValue),
      fabric: globalConnectionFabricToTerraform(this._fabric.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oauth_configuration_id: cdktf.numberToTerraform(this._oauthConfigurationId),
      postgres: globalConnectionPostgresToTerraform(this._postgres.internalValue),
      private_link_endpoint_id: cdktf.stringToTerraform(this._privateLinkEndpointId),
      redshift: globalConnectionRedshiftToTerraform(this._redshift.internalValue),
      snowflake: globalConnectionSnowflakeToTerraform(this._snowflake.internalValue),
      starburst: globalConnectionStarburstToTerraform(this._starburst.internalValue),
      synapse: globalConnectionSynapseToTerraform(this._synapse.internalValue),
      teradata: globalConnectionTeradataToTerraform(this._teradata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apache_spark: {
        value: globalConnectionApacheSparkToHclTerraform(this._apacheSpark.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionApacheSpark",
      },
      athena: {
        value: globalConnectionAthenaToHclTerraform(this._athena.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionAthena",
      },
      bigquery: {
        value: globalConnectionBigqueryToHclTerraform(this._bigquery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionBigquery",
      },
      databricks: {
        value: globalConnectionDatabricksToHclTerraform(this._databricks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionDatabricks",
      },
      fabric: {
        value: globalConnectionFabricToHclTerraform(this._fabric.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionFabric",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_configuration_id: {
        value: cdktf.numberToHclTerraform(this._oauthConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      postgres: {
        value: globalConnectionPostgresToHclTerraform(this._postgres.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionPostgres",
      },
      private_link_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._privateLinkEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift: {
        value: globalConnectionRedshiftToHclTerraform(this._redshift.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionRedshift",
      },
      snowflake: {
        value: globalConnectionSnowflakeToHclTerraform(this._snowflake.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionSnowflake",
      },
      starburst: {
        value: globalConnectionStarburstToHclTerraform(this._starburst.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionStarburst",
      },
      synapse: {
        value: globalConnectionSynapseToHclTerraform(this._synapse.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionSynapse",
      },
      teradata: {
        value: globalConnectionTeradataToHclTerraform(this._teradata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalConnectionTeradata",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
