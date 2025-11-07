// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, error PDTs will be retried every regenerator cycle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#always_retry_failed_builds Connection#always_retry_failed_builds}
  */
  readonly alwaysRetryFailedBuilds?: boolean | cdktf.IResolvable;
  /**
  * (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#certificate Connection#certificate}
  */
  readonly certificate?: string;
  /**
  * When true, query cost estimate will be displayed in explore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#cost_estimate_enabled Connection#cost_estimate_enabled}
  */
  readonly costEstimateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#database Connection#database}
  */
  readonly database?: string;
  /**
  * Time zone of database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#db_timezone Connection#db_timezone}
  */
  readonly dbTimezone?: string;
  /**
  * <table>
  * <thead>
  * <tr>
  * <th>name</th>
  * <th>dialect_name</th>
  * </tr>
  * </thead>
  * <tbody>
  * <tr>
  * <td>Actian Avalanche</td>
  * <td>actian_avalanche</td>
  * </tr>
  * <tr>
  * <td>Amazon Athena</td>
  * <td>athena</td>
  * </tr>
  * <tr>
  * <td>Amazon Aurora MySQL</td>
  * <td>amazonaurora</td>
  * </tr>
  * <tr>
  * <td>Amazon Redshift</td>
  * <td>redshift</td>
  * </tr>
  * <tr>
  * <td>Apache Druid</td>
  * <td>druid</td>
  * </tr>
  * <tr>
  * <td>Apache Druid 0.13+</td>
  * <td>druid_13</td>
  * </tr>
  * <tr>
  * <td>Apache Druid 0.18+</td>
  * <td>druid_18</td>
  * </tr>
  * <tr>
  * <td>Apache Hive 2</td>
  * <td>hive2</td>
  * </tr>
  * <tr>
  * <td>Apache Hive 2.3+</td>
  * <td>hive2_3</td>
  * </tr>
  * <tr>
  * <td>Apache Hive 3.1.2+</td>
  * <td>hive3</td>
  * </tr>
  * <tr>
  * <td>Apache Spark 1.5+</td>
  * <td>spark1_5</td>
  * </tr>
  * <tr>
  * <td>Apache Spark 2.0</td>
  * <td>spark2_0</td>
  * </tr>
  * <tr>
  * <td>Apache Spark 3+</td>
  * <td>spark_3</td>
  * </tr>
  * <tr>
  * <td>ClickHouse</td>
  * <td>clickhouse</td>
  * </tr>
  * <tr>
  * <td>Cloudera Impala</td>
  * <td>impala</td>
  * </tr>
  * <tr>
  * <td>Cloudera Impala 3.1+</td>
  * <td>impala_3_1</td>
  * </tr>
  * <tr>
  * <td>Cloudera Impala 3.1+ with Native Driver</td>
  * <td>impala_native_3_1</td>
  * </tr>
  * <tr>
  * <td>Cloudera Impala with Native Driver</td>
  * <td>impala_native</td>
  * </tr>
  * <tr>
  * <td>Clustrix</td>
  * <td>clustrix</td>
  * </tr>
  * <tr>
  * <td>DataVirtuality</td>
  * <td>datavirtuality</td>
  * </tr>
  * <tr>
  * <td>Databricks</td>
  * <td>databricks</td>
  * </tr>
  * <tr>
  * <td>Denodo</td>
  * <td>denodo</td>
  * </tr>
  * <tr>
  * <td>Denodo 7</td>
  * <td>denodo7</td>
  * </tr>
  * <tr>
  * <td>Denodo 8</td>
  * <td>denodo8</td>
  * </tr>
  * <tr>
  * <td>Dremio</td>
  * <td>dremio</td>
  * </tr>
  * <tr>
  * <td>Dremio 11+</td>
  * <td>dremio_11</td>
  * </tr>
  * <tr>
  * <td>Exasol</td>
  * <td>exasol</td>
  * </tr>
  * <tr>
  * <td>Firebolt</td>
  * <td>firebolt</td>
  * </tr>
  * <tr>
  * <td>Google BigQuery Legacy SQL</td>
  * <td>bigquery</td>
  * </tr>
  * <tr>
  * <td>Google BigQuery Standard SQL</td>
  * <td>bigquery_standard_sql</td>
  * </tr>
  * <tr>
  * <td>Google Cloud PostgreSQL</td>
  * <td>google_cloud_postgres</td>
  * </tr>
  * <tr>
  * <td>Google Cloud SQL</td>
  * <td>googlecloudsql</td>
  * </tr>
  * <tr>
  * <td>Google Cloud Spanner</td>
  * <td>spanner</td>
  * </tr>
  * <tr>
  * <td>Greenplum</td>
  * <td>greenplum</td>
  * </tr>
  * <tr>
  * <td>IBM DB2</td>
  * <td>db2</td>
  * </tr>
  * <tr>
  * <td>IBM DB2 for AS400 and System i</td>
  * <td>as400</td>
  * </tr>
  * <tr>
  * <td>IBM Netezza</td>
  * <td>netezza</td>
  * </tr>
  * <tr>
  * <td>MariaDB</td>
  * <td>mariadb</td>
  * </tr>
  * <tr>
  * <td>Microsoft Azure PostgreSQL</td>
  * <td>azure_postgres</td>
  * </tr>
  * <tr>
  * <td>Microsoft Azure SQL Database</td>
  * <td>msazuresql</td>
  * </tr>
  * <tr>
  * <td>Microsoft Azure Synapse Analytics</td>
  * <td>mssqldw</td>
  * </tr>
  * <tr>
  * <td>Microsoft SQL Server 2008+</td>
  * <td>mssql_2008</td>
  * </tr>
  * <tr>
  * <td>Microsoft SQL Server 2012+</td>
  * <td>mssql_2012</td>
  * </tr>
  * <tr>
  * <td>Microsoft SQL Server 2016</td>
  * <td>mssql_2016</td>
  * </tr>
  * <tr>
  * <td>Microsoft SQL Server 2017+</td>
  * <td>mssql_2017</td>
  * </tr>
  * <tr>
  * <td>MongoBI</td>
  * <td>mongobi</td>
  * </tr>
  * <tr>
  * <td>MySQL</td>
  * <td>mysql</td>
  * </tr>
  * <tr>
  * <td>MySQL 8.0.12+</td>
  * <td>mysql_8</td>
  * </tr>
  * <tr>
  * <td>Oracle</td>
  * <td>oracle</td>
  * </tr>
  * <tr>
  * <td>Oracle ADWC</td>
  * <td>oracle_dwcs</td>
  * </tr>
  * <tr>
  * <td>PostgreSQL 9.5+</td>
  * <td>postgres</td>
  * </tr>
  * <tr>
  * <td>PostgreSQL pre-9.5</td>
  * <td>postgres9_1</td>
  * </tr>
  * <tr>
  * <td>PrestoDB</td>
  * <td>presto</td>
  * </tr>
  * <tr>
  * <td>PrestoSQL</td>
  * <td>prestosql</td>
  * </tr>
  * <tr>
  * <td>Qubole Presto</td>
  * <td>qubole_presto</td>
  * </tr>
  * <tr>
  * <td>SAP HANA</td>
  * <td>hana</td>
  * </tr>
  * <tr>
  * <td>SAP HANA 2+</td>
  * <td>hana_2</td>
  * </tr>
  * <tr>
  * <td>SingleStore</td>
  * <td>memsql</td>
  * </tr>
  * <tr>
  * <td>SingleStore 7+</td>
  * <td>memsql_7</td>
  * </tr>
  * <tr>
  * <td>Snowflake</td>
  * <td>snowflake</td>
  * </tr>
  * <tr>
  * <td>Teradata</td>
  * <td>teradata</td>
  * </tr>
  * <tr>
  * <td>Trino</td>
  * <td>trino</td>
  * </tr>
  * <tr>
  * <td>Vector</td>
  * <td>vector</td>
  * </tr>
  * <tr>
  * <td>Vertica</td>
  * <td>vertica</td>
  * </tr>
  * </tbody>
  * </table>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#dialect_name Connection#dialect_name}
  */
  readonly dialectName: string;
  /**
  * When disable_context_comment is true comment will not be added to SQL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#disable_context_comment Connection#disable_context_comment}
  */
  readonly disableContextComment?: boolean | cdktf.IResolvable;
  /**
  * (Write-Only) Certificate keyfile type - .json or .p12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#file_type Connection#file_type}
  */
  readonly fileType?: string;
  /**
  * Host name/address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#host Connection#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Additional params to add to JDBC connection string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#jdbc_additional_params Connection#jdbc_additional_params}
  */
  readonly jdbcAdditionalParams?: string;
  /**
  * Cron string specifying when maintenance such as PDT trigger checks and drops should be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#maintenance_cron Connection#maintenance_cron}
  */
  readonly maintenanceCron?: string;
  /**
  * Maximum size of query in GBs (BigQuery only, can be a user_attribute name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#max_billing_gigabytes Connection#max_billing_gigabytes}
  */
  readonly maxBillingGigabytes?: string;
  /**
  * Maximum number of concurrent connection to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#max_connections Connection#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Name of the connection. Also used as the unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#name Connection#name}
  */
  readonly name: string;
  /**
  * An External OAuth Application to use for authenticating to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#oauth_application_id Connection#oauth_application_id}
  */
  readonly oauthApplicationId?: string;
  /**
  * (Write-Only) Password for server authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#password Connection#password}
  */
  readonly password?: string;
  /**
  * PDT builds on this connection can be kicked off and cancelled via API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#pdt_api_control_enabled Connection#pdt_api_control_enabled}
  */
  readonly pdtApiControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of threads to use to build PDTs in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#pdt_concurrency Connection#pdt_concurrency}
  */
  readonly pdtConcurrency?: number;
  /**
  * Connection Pool Timeout, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#pool_timeout Connection#pool_timeout}
  */
  readonly poolTimeout?: number;
  /**
  * Port number on server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#port Connection#port}
  */
  readonly port?: string;
  /**
  * Timezone to use in queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#query_timezone Connection#query_timezone}
  */
  readonly queryTimezone?: string;
  /**
  * Scheme name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#schema Connection#schema}
  */
  readonly schema?: string;
  /**
  * Precache tables in the SQL Runner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#sql_runner_precache_tables Connection#sql_runner_precache_tables}
  */
  readonly sqlRunnerPrecacheTables?: boolean | cdktf.IResolvable;
  /**
  * Fetch Information Schema For SQL Writing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#sql_writing_with_info_schema Connection#sql_writing_with_info_schema}
  */
  readonly sqlWritingWithInfoSchema?: boolean | cdktf.IResolvable;
  /**
  * Use SSL/TLS when connecting to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#ssl Connection#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Name of temporary database (if used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#tmp_db_name Connection#tmp_db_name}
  */
  readonly tmpDbName?: string;
  /**
  * The Id of the ssh tunnel this connection uses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#tunnel_id Connection#tunnel_id}
  */
  readonly tunnelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#user_attribute_fields Connection#user_attribute_fields}
  */
  readonly userAttributeFields?: string[];
  /**
  * (Limited access feature) Are per user db credentials enabled. Enabling will remove previously set username and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#user_db_credentials Connection#user_db_credentials}
  */
  readonly userDbCredentials?: boolean | cdktf.IResolvable;
  /**
  * Username for server authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#username Connection#username}
  */
  readonly username?: string;
  /**
  * Verify the SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#verify_ssl Connection#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
  /**
  * pdt_context_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#pdt_context_override Connection#pdt_context_override}
  */
  readonly pdtContextOverride?: ConnectionPdtContextOverride[] | cdktf.IResolvable;
}
export interface ConnectionPdtContextOverride {
  /**
  * SQL statements (semicolon separated) to issue after connecting to the database. Requires `custom_after_connect_statements` license feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#after_connect_statements Connection#after_connect_statements}
  */
  readonly afterConnectStatements?: string;
  /**
  * (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#certificate Connection#certificate}
  */
  readonly certificate?: string;
  /**
  * Context in which to override (`pdt` is the only allowed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#context Connection#context}
  */
  readonly context?: string;
  /**
  * (Write-Only) Certificate keyfile type - .json or .p12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#file_type Connection#file_type}
  */
  readonly fileType?: string;
  /**
  * Whether or not the password is overridden in this context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#has_password Connection#has_password}
  */
  readonly hasPassword?: string;
  /**
  * Host name/address of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#host Connection#host}
  */
  readonly host: string;
  /**
  * Additional params to add to JDBC connection string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#jdbc_additional_params Connection#jdbc_additional_params}
  */
  readonly jdbcAdditionalParams?: string;
  /**
  * (Write-Only) Password for server authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#password Connection#password}
  */
  readonly password?: string;
  /**
  * Port number on server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#port Connection#port}
  */
  readonly port?: string;
  /**
  * Username for server authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#username Connection#username}
  */
  readonly username?: string;
}

export function connectionPdtContextOverrideToTerraform(struct?: ConnectionPdtContextOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_connect_statements: cdktf.stringToTerraform(struct!.afterConnectStatements),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    context: cdktf.stringToTerraform(struct!.context),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    has_password: cdktf.stringToTerraform(struct!.hasPassword),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_additional_params: cdktf.stringToTerraform(struct!.jdbcAdditionalParams),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectionPdtContextOverrideToHclTerraform(struct?: ConnectionPdtContextOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_connect_statements: {
      value: cdktf.stringToHclTerraform(struct!.afterConnectStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_password: {
      value: cdktf.stringToHclTerraform(struct!.hasPassword),
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
    jdbc_additional_params: {
      value: cdktf.stringToHclTerraform(struct!.jdbcAdditionalParams),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class ConnectionPdtContextOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionPdtContextOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterConnectStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterConnectStatements = this._afterConnectStatements;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._hasPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasPassword = this._hasPassword;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._jdbcAdditionalParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcAdditionalParams = this._jdbcAdditionalParams;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
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

  public set internalValue(value: ConnectionPdtContextOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterConnectStatements = undefined;
      this._certificate = undefined;
      this._context = undefined;
      this._fileType = undefined;
      this._hasPassword = undefined;
      this._host = undefined;
      this._jdbcAdditionalParams = undefined;
      this._password = undefined;
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
      this._afterConnectStatements = value.afterConnectStatements;
      this._certificate = value.certificate;
      this._context = value.context;
      this._fileType = value.fileType;
      this._hasPassword = value.hasPassword;
      this._host = value.host;
      this._jdbcAdditionalParams = value.jdbcAdditionalParams;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // after_connect_statements - computed: false, optional: true, required: false
  private _afterConnectStatements?: string; 
  public get afterConnectStatements() {
    return this.getStringAttribute('after_connect_statements');
  }
  public set afterConnectStatements(value: string) {
    this._afterConnectStatements = value;
  }
  public resetAfterConnectStatements() {
    this._afterConnectStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterConnectStatementsInput() {
    return this._afterConnectStatements;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // has_password - computed: false, optional: true, required: false
  private _hasPassword?: string; 
  public get hasPassword() {
    return this.getStringAttribute('has_password');
  }
  public set hasPassword(value: string) {
    this._hasPassword = value;
  }
  public resetHasPassword() {
    this._hasPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasPasswordInput() {
    return this._hasPassword;
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

  // jdbc_additional_params - computed: false, optional: true, required: false
  private _jdbcAdditionalParams?: string; 
  public get jdbcAdditionalParams() {
    return this.getStringAttribute('jdbc_additional_params');
  }
  public set jdbcAdditionalParams(value: string) {
    this._jdbcAdditionalParams = value;
  }
  public resetJdbcAdditionalParams() {
    this._jdbcAdditionalParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcAdditionalParamsInput() {
    return this._jdbcAdditionalParams;
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

  // port - computed: false, optional: true, required: false
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

export class ConnectionPdtContextOverrideList extends cdktf.ComplexList {
  public internalValue? : ConnectionPdtContextOverride[] | cdktf.IResolvable

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
  public get(index: number): ConnectionPdtContextOverrideOutputReference {
    return new ConnectionPdtContextOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection looker_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/connection looker_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_connection',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysRetryFailedBuilds = config.alwaysRetryFailedBuilds;
    this._certificate = config.certificate;
    this._costEstimateEnabled = config.costEstimateEnabled;
    this._database = config.database;
    this._dbTimezone = config.dbTimezone;
    this._dialectName = config.dialectName;
    this._disableContextComment = config.disableContextComment;
    this._fileType = config.fileType;
    this._host = config.host;
    this._id = config.id;
    this._jdbcAdditionalParams = config.jdbcAdditionalParams;
    this._maintenanceCron = config.maintenanceCron;
    this._maxBillingGigabytes = config.maxBillingGigabytes;
    this._maxConnections = config.maxConnections;
    this._name = config.name;
    this._oauthApplicationId = config.oauthApplicationId;
    this._password = config.password;
    this._pdtApiControlEnabled = config.pdtApiControlEnabled;
    this._pdtConcurrency = config.pdtConcurrency;
    this._poolTimeout = config.poolTimeout;
    this._port = config.port;
    this._queryTimezone = config.queryTimezone;
    this._schema = config.schema;
    this._sqlRunnerPrecacheTables = config.sqlRunnerPrecacheTables;
    this._sqlWritingWithInfoSchema = config.sqlWritingWithInfoSchema;
    this._ssl = config.ssl;
    this._tmpDbName = config.tmpDbName;
    this._tunnelId = config.tunnelId;
    this._userAttributeFields = config.userAttributeFields;
    this._userDbCredentials = config.userDbCredentials;
    this._username = config.username;
    this._verifySsl = config.verifySsl;
    this._pdtContextOverride.internalValue = config.pdtContextOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_retry_failed_builds - computed: false, optional: true, required: false
  private _alwaysRetryFailedBuilds?: boolean | cdktf.IResolvable; 
  public get alwaysRetryFailedBuilds() {
    return this.getBooleanAttribute('always_retry_failed_builds');
  }
  public set alwaysRetryFailedBuilds(value: boolean | cdktf.IResolvable) {
    this._alwaysRetryFailedBuilds = value;
  }
  public resetAlwaysRetryFailedBuilds() {
    this._alwaysRetryFailedBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysRetryFailedBuildsInput() {
    return this._alwaysRetryFailedBuilds;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // cost_estimate_enabled - computed: false, optional: true, required: false
  private _costEstimateEnabled?: boolean | cdktf.IResolvable; 
  public get costEstimateEnabled() {
    return this.getBooleanAttribute('cost_estimate_enabled');
  }
  public set costEstimateEnabled(value: boolean | cdktf.IResolvable) {
    this._costEstimateEnabled = value;
  }
  public resetCostEstimateEnabled() {
    this._costEstimateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costEstimateEnabledInput() {
    return this._costEstimateEnabled;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_timezone - computed: false, optional: true, required: false
  private _dbTimezone?: string; 
  public get dbTimezone() {
    return this.getStringAttribute('db_timezone');
  }
  public set dbTimezone(value: string) {
    this._dbTimezone = value;
  }
  public resetDbTimezone() {
    this._dbTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTimezoneInput() {
    return this._dbTimezone;
  }

  // dialect_name - computed: false, optional: false, required: true
  private _dialectName?: string; 
  public get dialectName() {
    return this.getStringAttribute('dialect_name');
  }
  public set dialectName(value: string) {
    this._dialectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dialectNameInput() {
    return this._dialectName;
  }

  // disable_context_comment - computed: false, optional: true, required: false
  private _disableContextComment?: boolean | cdktf.IResolvable; 
  public get disableContextComment() {
    return this.getBooleanAttribute('disable_context_comment');
  }
  public set disableContextComment(value: boolean | cdktf.IResolvable) {
    this._disableContextComment = value;
  }
  public resetDisableContextComment() {
    this._disableContextComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableContextCommentInput() {
    return this._disableContextComment;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // jdbc_additional_params - computed: false, optional: true, required: false
  private _jdbcAdditionalParams?: string; 
  public get jdbcAdditionalParams() {
    return this.getStringAttribute('jdbc_additional_params');
  }
  public set jdbcAdditionalParams(value: string) {
    this._jdbcAdditionalParams = value;
  }
  public resetJdbcAdditionalParams() {
    this._jdbcAdditionalParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcAdditionalParamsInput() {
    return this._jdbcAdditionalParams;
  }

  // maintenance_cron - computed: false, optional: true, required: false
  private _maintenanceCron?: string; 
  public get maintenanceCron() {
    return this.getStringAttribute('maintenance_cron');
  }
  public set maintenanceCron(value: string) {
    this._maintenanceCron = value;
  }
  public resetMaintenanceCron() {
    this._maintenanceCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceCronInput() {
    return this._maintenanceCron;
  }

  // max_billing_gigabytes - computed: false, optional: true, required: false
  private _maxBillingGigabytes?: string; 
  public get maxBillingGigabytes() {
    return this.getStringAttribute('max_billing_gigabytes');
  }
  public set maxBillingGigabytes(value: string) {
    this._maxBillingGigabytes = value;
  }
  public resetMaxBillingGigabytes() {
    this._maxBillingGigabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBillingGigabytesInput() {
    return this._maxBillingGigabytes;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
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

  // oauth_application_id - computed: false, optional: true, required: false
  private _oauthApplicationId?: string; 
  public get oauthApplicationId() {
    return this.getStringAttribute('oauth_application_id');
  }
  public set oauthApplicationId(value: string) {
    this._oauthApplicationId = value;
  }
  public resetOauthApplicationId() {
    this._oauthApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthApplicationIdInput() {
    return this._oauthApplicationId;
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

  // pdt_api_control_enabled - computed: false, optional: true, required: false
  private _pdtApiControlEnabled?: boolean | cdktf.IResolvable; 
  public get pdtApiControlEnabled() {
    return this.getBooleanAttribute('pdt_api_control_enabled');
  }
  public set pdtApiControlEnabled(value: boolean | cdktf.IResolvable) {
    this._pdtApiControlEnabled = value;
  }
  public resetPdtApiControlEnabled() {
    this._pdtApiControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdtApiControlEnabledInput() {
    return this._pdtApiControlEnabled;
  }

  // pdt_concurrency - computed: false, optional: true, required: false
  private _pdtConcurrency?: number; 
  public get pdtConcurrency() {
    return this.getNumberAttribute('pdt_concurrency');
  }
  public set pdtConcurrency(value: number) {
    this._pdtConcurrency = value;
  }
  public resetPdtConcurrency() {
    this._pdtConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdtConcurrencyInput() {
    return this._pdtConcurrency;
  }

  // pool_timeout - computed: false, optional: true, required: false
  private _poolTimeout?: number; 
  public get poolTimeout() {
    return this.getNumberAttribute('pool_timeout');
  }
  public set poolTimeout(value: number) {
    this._poolTimeout = value;
  }
  public resetPoolTimeout() {
    this._poolTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTimeoutInput() {
    return this._poolTimeout;
  }

  // port - computed: false, optional: true, required: false
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

  // query_timezone - computed: false, optional: true, required: false
  private _queryTimezone?: string; 
  public get queryTimezone() {
    return this.getStringAttribute('query_timezone');
  }
  public set queryTimezone(value: string) {
    this._queryTimezone = value;
  }
  public resetQueryTimezone() {
    this._queryTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimezoneInput() {
    return this._queryTimezone;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // sql_runner_precache_tables - computed: false, optional: true, required: false
  private _sqlRunnerPrecacheTables?: boolean | cdktf.IResolvable; 
  public get sqlRunnerPrecacheTables() {
    return this.getBooleanAttribute('sql_runner_precache_tables');
  }
  public set sqlRunnerPrecacheTables(value: boolean | cdktf.IResolvable) {
    this._sqlRunnerPrecacheTables = value;
  }
  public resetSqlRunnerPrecacheTables() {
    this._sqlRunnerPrecacheTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlRunnerPrecacheTablesInput() {
    return this._sqlRunnerPrecacheTables;
  }

  // sql_writing_with_info_schema - computed: false, optional: true, required: false
  private _sqlWritingWithInfoSchema?: boolean | cdktf.IResolvable; 
  public get sqlWritingWithInfoSchema() {
    return this.getBooleanAttribute('sql_writing_with_info_schema');
  }
  public set sqlWritingWithInfoSchema(value: boolean | cdktf.IResolvable) {
    this._sqlWritingWithInfoSchema = value;
  }
  public resetSqlWritingWithInfoSchema() {
    this._sqlWritingWithInfoSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWritingWithInfoSchemaInput() {
    return this._sqlWritingWithInfoSchema;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // tmp_db_name - computed: false, optional: true, required: false
  private _tmpDbName?: string; 
  public get tmpDbName() {
    return this.getStringAttribute('tmp_db_name');
  }
  public set tmpDbName(value: string) {
    this._tmpDbName = value;
  }
  public resetTmpDbName() {
    this._tmpDbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpDbNameInput() {
    return this._tmpDbName;
  }

  // tunnel_id - computed: false, optional: true, required: false
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  public resetTunnelId() {
    this._tunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }

  // user_attribute_fields - computed: false, optional: true, required: false
  private _userAttributeFields?: string[]; 
  public get userAttributeFields() {
    return this.getListAttribute('user_attribute_fields');
  }
  public set userAttributeFields(value: string[]) {
    this._userAttributeFields = value;
  }
  public resetUserAttributeFields() {
    this._userAttributeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeFieldsInput() {
    return this._userAttributeFields;
  }

  // user_db_credentials - computed: false, optional: true, required: false
  private _userDbCredentials?: boolean | cdktf.IResolvable; 
  public get userDbCredentials() {
    return this.getBooleanAttribute('user_db_credentials');
  }
  public set userDbCredentials(value: boolean | cdktf.IResolvable) {
    this._userDbCredentials = value;
  }
  public resetUserDbCredentials() {
    this._userDbCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDbCredentialsInput() {
    return this._userDbCredentials;
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

  // verify_ssl - computed: false, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // pdt_context_override - computed: false, optional: true, required: false
  private _pdtContextOverride = new ConnectionPdtContextOverrideList(this, "pdt_context_override", true);
  public get pdtContextOverride() {
    return this._pdtContextOverride;
  }
  public putPdtContextOverride(value: ConnectionPdtContextOverride[] | cdktf.IResolvable) {
    this._pdtContextOverride.internalValue = value;
  }
  public resetPdtContextOverride() {
    this._pdtContextOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdtContextOverrideInput() {
    return this._pdtContextOverride.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_retry_failed_builds: cdktf.booleanToTerraform(this._alwaysRetryFailedBuilds),
      certificate: cdktf.stringToTerraform(this._certificate),
      cost_estimate_enabled: cdktf.booleanToTerraform(this._costEstimateEnabled),
      database: cdktf.stringToTerraform(this._database),
      db_timezone: cdktf.stringToTerraform(this._dbTimezone),
      dialect_name: cdktf.stringToTerraform(this._dialectName),
      disable_context_comment: cdktf.booleanToTerraform(this._disableContextComment),
      file_type: cdktf.stringToTerraform(this._fileType),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      jdbc_additional_params: cdktf.stringToTerraform(this._jdbcAdditionalParams),
      maintenance_cron: cdktf.stringToTerraform(this._maintenanceCron),
      max_billing_gigabytes: cdktf.stringToTerraform(this._maxBillingGigabytes),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      name: cdktf.stringToTerraform(this._name),
      oauth_application_id: cdktf.stringToTerraform(this._oauthApplicationId),
      password: cdktf.stringToTerraform(this._password),
      pdt_api_control_enabled: cdktf.booleanToTerraform(this._pdtApiControlEnabled),
      pdt_concurrency: cdktf.numberToTerraform(this._pdtConcurrency),
      pool_timeout: cdktf.numberToTerraform(this._poolTimeout),
      port: cdktf.stringToTerraform(this._port),
      query_timezone: cdktf.stringToTerraform(this._queryTimezone),
      schema: cdktf.stringToTerraform(this._schema),
      sql_runner_precache_tables: cdktf.booleanToTerraform(this._sqlRunnerPrecacheTables),
      sql_writing_with_info_schema: cdktf.booleanToTerraform(this._sqlWritingWithInfoSchema),
      ssl: cdktf.booleanToTerraform(this._ssl),
      tmp_db_name: cdktf.stringToTerraform(this._tmpDbName),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
      user_attribute_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userAttributeFields),
      user_db_credentials: cdktf.booleanToTerraform(this._userDbCredentials),
      username: cdktf.stringToTerraform(this._username),
      verify_ssl: cdktf.booleanToTerraform(this._verifySsl),
      pdt_context_override: cdktf.listMapper(connectionPdtContextOverrideToTerraform, true)(this._pdtContextOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_retry_failed_builds: {
        value: cdktf.booleanToHclTerraform(this._alwaysRetryFailedBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_estimate_enabled: {
        value: cdktf.booleanToHclTerraform(this._costEstimateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_timezone: {
        value: cdktf.stringToHclTerraform(this._dbTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialect_name: {
        value: cdktf.stringToHclTerraform(this._dialectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_context_comment: {
        value: cdktf.booleanToHclTerraform(this._disableContextComment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_type: {
        value: cdktf.stringToHclTerraform(this._fileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_additional_params: {
        value: cdktf.stringToHclTerraform(this._jdbcAdditionalParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_cron: {
        value: cdktf.stringToHclTerraform(this._maintenanceCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_billing_gigabytes: {
        value: cdktf.stringToHclTerraform(this._maxBillingGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
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
      oauth_application_id: {
        value: cdktf.stringToHclTerraform(this._oauthApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdt_api_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._pdtApiControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pdt_concurrency: {
        value: cdktf.numberToHclTerraform(this._pdtConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool_timeout: {
        value: cdktf.numberToHclTerraform(this._poolTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_timezone: {
        value: cdktf.stringToHclTerraform(this._queryTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_runner_precache_tables: {
        value: cdktf.booleanToHclTerraform(this._sqlRunnerPrecacheTables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sql_writing_with_info_schema: {
        value: cdktf.booleanToHclTerraform(this._sqlWritingWithInfoSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tmp_db_name: {
        value: cdktf.stringToHclTerraform(this._tmpDbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_attribute_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userAttributeFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_db_credentials: {
        value: cdktf.booleanToHclTerraform(this._userDbCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_ssl: {
        value: cdktf.booleanToHclTerraform(this._verifySsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pdt_context_override: {
        value: cdktf.listMapperHcl(connectionPdtContextOverrideToHclTerraform, true)(this._pdtContextOverride.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectionPdtContextOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
