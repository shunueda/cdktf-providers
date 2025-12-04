// https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Shift my UTC offset with daylight savings time (US Only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#daylight_saving_time_enabled Destination#daylight_saving_time_enabled}
  */
  readonly daylightSavingTimeEnabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier for the Group within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#group_id Destination#group_id}
  */
  readonly groupId: string;
  /**
  * The hybrid deployment agent ID that refers to the controller created for the group the connection belongs to. If the value is specified, the system will try to associate the connection with an existing agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#hybrid_deployment_agent_id Destination#hybrid_deployment_agent_id}
  */
  readonly hybridDeploymentAgentId?: string;
  /**
  * Possible values: Directly, SshTunnel, ProxyAgent, PrivateLink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#networking_method Destination#networking_method}
  */
  readonly networkingMethod?: string;
  /**
  * The private link ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#private_link_id Destination#private_link_id}
  */
  readonly privateLinkId?: string;
  /**
  * Data processing location. This is where Fivetran will operate and run computation on data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#region Destination#region}
  */
  readonly region: string;
  /**
  * Specifies whether the setup tests should be run automatically. The default value is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#run_setup_tests Destination#run_setup_tests}
  */
  readonly runSetupTests?: boolean | cdktf.IResolvable;
  /**
  * The destination type id within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#service Destination#service}
  */
  readonly service: string;
  /**
  * Determines the time zone for the Fivetran sync schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#time_zone_offset Destination#time_zone_offset}
  */
  readonly timeZoneOffset: string;
  /**
  * Specifies whether we should trust the certificate automatically. The default value is FALSE. If a certificate is not trusted automatically, it has to be approved with [Certificates Management API Approve a destination certificate](https://fivetran.com/docs/rest-api/certificates#approveadestinationcertificate).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#trust_certificates Destination#trust_certificates}
  */
  readonly trustCertificates?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether we should trust the SSH fingerprint automatically. The default value is FALSE. If a fingerprint is not trusted automatically, it has to be approved with [Certificates Management API Approve a destination fingerprint](https://fivetran.com/docs/rest-api/certificates#approveadestinationfingerprint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#trust_fingerprints Destination#trust_fingerprints}
  */
  readonly trustFingerprints?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#config Destination#config}
  */
  readonly config?: DestinationConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#timeouts Destination#timeouts}
  */
  readonly timeouts?: DestinationTimeouts;
}
export interface DestinationConfigA {
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `aurora_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_postgres_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_data_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_database`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_managed_db_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_rds_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_rds_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rac_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rds_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `panoply`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `periscope_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_databricks_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_gcp_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_rds_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `redshift`: Require TLS through Tunnel
  * 	- Service `sql_server_rds_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `sql_server_warehouse`: Specifies whether TLS is required. Must be populated if `connection_type` is set to `SshTunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#always_encrypted Destination#always_encrypted}
  */
  readonly alwaysEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Application ID of your app created in Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#application_id Destination#application_id}
  */
  readonly applicationId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Password-based or key-based authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#auth Destination#auth}
  */
  readonly auth?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Authentication type
  * 	- Service `databricks`: Authentication type
  * 	- Service `managed_data_lake`: Specifies the authentication types for Fivetran to connect to Databricks. Use this parameter only if you want to use Unity Catalog to manage your Delta Lake tables.
  * 	- Service `new_s3_datalake`: Authentication type
  * 	- Service `onelake`: Authentication type
  * 	- Service `redshift`: Authentication type. Default value: `PASSWORD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#auth_type Destination#auth_type}
  */
  readonly authType?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Your user's access key ID
  * 	- Service `new_s3_datalake`: AWS access key to access the S3 bucket and AWS Glue
  * 	- Service `redshift`: The unique access key ID of the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment.
  * 	- Service `snowflake`: The unique access key ID of the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment, want to use an S3 bucket to stage your data, and `awsBucketAuthType` is set to `IAM_USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#aws_access_key_id Destination#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Type of authentication configured for the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment and want to use an S3 bucket to stage your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#aws_bucket_auth_type Destination#aws_bucket_auth_type}
  */
  readonly awsBucketAuthType?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Your user's secret access key
  * 	- Service `new_s3_datalake`: AWS secret access key to access the S3 bucket and AWS Glue
  * 	- Service `redshift`: The secret access key of the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment.
  * 	- Service `snowflake`: The secret access key of the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment , want to use an S3 bucket to stage your data, and `awsBucketAuthType` is set to `IAM_USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#aws_secret_access_key Destination#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Authentication method for the Azure container you want to use as the external staging for Hybrid Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#azure_storage_account_auth_type Destination#azure_storage_account_auth_type}
  */
  readonly azureStorageAccountAuthType?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Comma-separated list of Confluent Cloud servers in the `server:port` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#bootstrap_servers Destination#bootstrap_servers}
  */
  readonly bootstrapServers?: string[];
  /**
  * Field usage depends on `service` value: 
  * 	- Service `big_query`: Customer bucket. If specified, your GCS bucket will be used to process the data instead of a Fivetran-managed bucket. The bucket must be present in the same location as the dataset location.
  * 	- Service `big_query_dts`: Customer bucket. If specified, your GCS bucket will be used to process the data instead of a Fivetran-managed bucket. The bucket must be present in the same location as the dataset location.
  * 	- Service `databricks`: Your bucket
  * 	- Service `managed_big_query`: Customer bucket. If specified, your GCS bucket will be used to process the data instead of a Fivetran-managed bucket. The bucket must be present in the same location as the dataset location.
  * 	- Service `managed_data_lake`: (Immutable) Name of the S3 or Google Cloud Storage (GCS) bucket you want to use to store your data. Use this parameter only if you want to deploy your data lake on Amazon Web Services (AWS) or GCS.
  * 	- Service `new_s3_datalake`: (Immutable) The name of the bucket to be used as destination
  * 	- Service `redshift`: The name of the storage bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment.
  * 	- Service `snowflake`: The name of the storage bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment and want to use an S3 or GCS bucket to stage your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#bucket Destination#bucket}
  */
  readonly bucket?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Your bucket's region
  * 	- Service `redshift`: The AWS Region of the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment.
  * 	- Service `snowflake`: The AWS Region of the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment and want to use an S3 bucket to stage your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#bucket_region Destination#bucket_region}
  */
  readonly bucketRegion?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Catalog name
  * 	- Service `databricks`: Catalog name
  * 	- Service `managed_data_lake`: Name of the specific catalog in Unity Catalog that you want to use to manage your Delta Lake tables. Use this parameter only if you want to use Unity Catalog with your data lake.
  * 	- Service `new_s3_datalake`: Catalog name
  * 	- Service `onelake`: Catalog name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#catalog Destination#catalog}
  */
  readonly catalog?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Client id of service principal
  * 	- Service `managed_data_lake`: Client ID of the service principal you created for Fivetran. Use this parameter only if you want to deploy your data lake on ADLS.
  * 	- Service `onelake`: Client ID of service principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#client_id Destination#client_id}
  */
  readonly clientId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Databricks deployment cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#cloud_provider Destination#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `panoply`: Cluster ID.
  * 	- Service `periscope_warehouse`: Cluster ID.
  * 	- Service `redshift`: Cluster ID. Must be populated if `connection_type` is set to `SshTunnel` and `auth_type` is set to `IAM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#cluster_id Destination#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `panoply`: Cluster region.
  * 	- Service `periscope_warehouse`: Cluster region.
  * 	- Service `redshift`: Cluster region. Must be populated if `connection_type` is set to `SshTunnel` and `auth_type` is set to `IAM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#cluster_region Destination#cluster_region}
  */
  readonly clusterRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#connection_method Destination#connection_method}
  */
  readonly connectionMethod?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Connection method. Default value: `Directly`.
  * 	- Service `aurora_postgres_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `aurora_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `azure_postgres_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `azure_sql_data_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `azure_sql_database`: Connection method. Default value: `Directly`.
  * 	- Service `azure_sql_managed_db_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `databricks`: Connection method. Default value: `Directly`.
  * 	- Service `managed_data_lake`: connection type
  * 	- Service `maria_rds_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `maria_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `mysql_rds_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `mysql_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `oracle_rac_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `oracle_rds_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `oracle_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `panoply`: Connection method. Default value: `Directly`.
  * 	- Service `periscope_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `postgres_databricks_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `postgres_gcp_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `postgres_rds_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `postgres_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `redshift`: Connection method. Default value: `Directly`.
  * 	- Service `snowflake`: Connection method. Default value: `Directly`.
  * 	- Service `sql_server_rds_warehouse`: Connection method. Default value: `Directly`.
  * 	- Service `sql_server_warehouse`: Connection method. Default value: `Directly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#connection_type Destination#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: (Immutable) Container to store delta table files
  * 	- Service `managed_data_lake`: (Immutable) Name of the ADLS container you want to use to store your data. Use this parameter only if you want to deploy your data lake on ADLS.
  * 	- Service `onelake`: Workspace name to store delta table files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#container_name Destination#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#controller_id Destination#controller_id}
  */
  readonly controllerId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Whether to create external tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#create_external_tables Destination#create_external_tables}
  */
  readonly createExternalTables?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Specifies whether you want Fivetran to create external volumes for unstructured data files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#create_external_volumes Destination#create_external_volumes}
  */
  readonly createExternalVolumes?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Confluent Cloud message format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#data_format Destination#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `big_query`: Data location. Datasets will reside in this location.
  * 	- Service `big_query_dts`: Data location. Datasets will reside in this location.
  * 	- Service `managed_big_query`: Data location. Datasets will reside in this location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#data_set_location Destination#data_set_location}
  */
  readonly dataSetLocation?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: Database name
  * 	- Service `aurora_warehouse`: Database name
  * 	- Service `azure_postgres_warehouse`: Database name
  * 	- Service `azure_sql_data_warehouse`: Database name
  * 	- Service `azure_sql_database`: Database name
  * 	- Service `azure_sql_managed_db_warehouse`: Database name
  * 	- Service `maria_rds_warehouse`: Database name
  * 	- Service `maria_warehouse`: Database name
  * 	- Service `mysql_rds_warehouse`: Database name
  * 	- Service `mysql_warehouse`: Database name
  * 	- Service `oracle_rac_warehouse`: Database name
  * 	- Service `oracle_rds_warehouse`: Database name
  * 	- Service `oracle_warehouse`: Database name
  * 	- Service `panoply`: Database name
  * 	- Service `periscope_warehouse`: Database name
  * 	- Service `postgres_databricks_warehouse`: Database name
  * 	- Service `postgres_gcp_warehouse`: Database name
  * 	- Service `postgres_rds_warehouse`: Database name
  * 	- Service `postgres_warehouse`: Database name
  * 	- Service `redshift`: Database name
  * 	- Service `snowflake`: Database name
  * 	- Service `sql_server_rds_warehouse`: Database name
  * 	- Service `sql_server_warehouse`: Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#database Destination#database}
  */
  readonly database?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Databricks Connection method. Default value: `Directly`.
  * 	- Service `managed_data_lake`: Specifies how you want Fivetran to connect to the Databricks account associated with Unity Catalog. Default value: `Directly`. Use this parameter only if you want to use Unity Catalog with your data lake.
  * 	- Service `new_s3_datalake`: Databricks Connection method. Default value: `Directly`.
  * 	- Service `onelake`: Databricks Connection method. Default value: `Directly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#databricks_connection_type Destination#databricks_connection_type}
  */
  readonly databricksConnectionType?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Tenant ID of your app created in Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#directory_id Destination#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Specifies whether you want Fivetran to disable Vacuum operations on Delta tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#disable_vacuum Destination#disable_vacuum}
  */
  readonly disableVacuum?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Set to `true` if you want to enable external storage for unstructured files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#enable_external_storage_for_unstructured_files Destination#enable_external_storage_for_unstructured_files}
  */
  readonly enableExternalStorageForUnstructuredFiles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#enable_remote_execution Destination#enable_remote_execution}
  */
  readonly enableRemoteExecution?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Populate all tables in a single topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#enable_single_topic Destination#enable_single_topic}
  */
  readonly enableSingleTopic?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `redshift`: Enable to convert JSON data type to SUPER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#enable_super_type Destination#enable_super_type}
  */
  readonly enableSuperType?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: External location to store Delta tables. Default value: `""`  (null). By default, the external tables will reside in the `/{schema}/{table}` path, and if you specify an external location in the `{externalLocation}/{schema}/{table}` path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#external_location Destination#external_location}
  */
  readonly externalLocation?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: External stage storage provider[Internal, S3, Azure,GCS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#external_stage_storage_provider Destination#external_stage_storage_provider}
  */
  readonly externalStageStorageProvider?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: The cloud service provider you want to use for staging data. Use this parameter only if you are using Hybrid Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#external_storage_cloud_provider Destination#external_storage_cloud_provider}
  */
  readonly externalStorageCloudProvider?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: External storage integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#external_storage_integration Destination#external_storage_integration}
  */
  readonly externalStorageIntegration?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: External storage parent folder URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#external_storage_parent_folder_uri Destination#external_storage_parent_folder_uri}
  */
  readonly externalStorageParentFolderUri?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Specifies the external volume path where you want Fivetran to create the unstructured files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#external_volume_location Destination#external_volume_location}
  */
  readonly externalVolumeLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#fivetran_glue_role_arn Destination#fivetran_glue_role_arn}
  */
  readonly fivetranGlueRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#fivetran_msk_role_arn Destination#fivetran_msk_role_arn}
  */
  readonly fivetranMskRoleArn?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `managed_data_lake`: (Immutable) ARN of the IAM role you created for the IAM policy associated with your S3 bucket or Glue catalog. Use this parameter only if you want to deploy your data lake on AWS.
  * 	- Service `new_s3_datalake`: ARN of the role which you created with different required policy mentioned in our setup guide
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#fivetran_role_arn Destination#fivetran_role_arn}
  */
  readonly fivetranRoleArn?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: The path to the JSON file that contains the service account credentials for the GCS bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment and want to use a GCS bucket to stage your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#gcs_service_account_credentials_path Destination#gcs_service_account_credentials_path}
  */
  readonly gcsServiceAccountCredentialsPath?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: Server name
  * 	- Service `aurora_warehouse`: Server name
  * 	- Service `azure_postgres_warehouse`: Server name
  * 	- Service `azure_sql_data_warehouse`: Server name
  * 	- Service `azure_sql_database`: Server name
  * 	- Service `azure_sql_managed_db_warehouse`: Server name
  * 	- Service `maria_rds_warehouse`: Server name
  * 	- Service `maria_warehouse`: Server name
  * 	- Service `mysql_rds_warehouse`: Server name
  * 	- Service `mysql_warehouse`: Server name
  * 	- Service `oracle_rac_warehouse`: Server name
  * 	- Service `oracle_rds_warehouse`: Server name
  * 	- Service `oracle_warehouse`: Server name
  * 	- Service `panoply`: Server name
  * 	- Service `periscope_warehouse`: Server name
  * 	- Service `postgres_databricks_warehouse`: Server name
  * 	- Service `postgres_gcp_warehouse`: Server name
  * 	- Service `postgres_rds_warehouse`: Server name
  * 	- Service `postgres_warehouse`: Server name
  * 	- Service `redshift`: Server name
  * 	- Service `snowflake`: Server name
  * 	- Service `sql_server_rds_warehouse`: Server name
  * 	- Service `sql_server_warehouse`: Server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#host Destination#host}
  */
  readonly host?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: HTTP path
  * 	- Service `databricks`: HTTP path
  * 	- Service `managed_data_lake`: HTTP path of the Databricks account associated with Unity Catalog. Use this parameter only if you want to use Unity Catalog to manage your Delta Lake tables.
  * 	- Service `new_s3_datalake`: HTTP path
  * 	- Service `onelake`: HTTP path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#http_path Destination#http_path}
  */
  readonly httpPath?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Indicates that a private key is encrypted. The default value: `false`. The field can be specified if authentication type is `KEY_PAIR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#is_private_key_encrypted Destination#is_private_key_encrypted}
  */
  readonly isPrivateKeyEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `new_s3_datalake`: We use PrivateLink by default if your s3 bucket is in the same region as Fivetran. Turning on this toggle ensures that Fivetran always connects to s3 bucket over PrivateLink. Learn more in our [PrivateLink documentation](https://fivetran.com/docs/connectors/databases/connection-options/aws-private-link).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#is_private_link_required Destination#is_private_link_required}
  */
  readonly isPrivateLinkRequired?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `redshift`: Is your destination Redshift Serverless
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#is_redshift_serverless Destination#is_redshift_serverless}
  */
  readonly isRedshiftServerless?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `managed_data_lake`: (Immutable) OneLake lakehouse GUID
  * 	- Service `onelake`: (Immutable) OneLake lakehouse GUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#lakehouse_guid Destination#lakehouse_guid}
  */
  readonly lakehouseGuid?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `onelake`: (Immutable) Name of your lakehouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#lakehouse_name Destination#lakehouse_name}
  */
  readonly lakehouseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#msk_sts_region Destination#msk_sts_region}
  */
  readonly mskStsRegion?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Number of partitions per topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#num_of_partitions Destination#num_of_partitions}
  */
  readonly numOfPartitions?: number;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: OAuth 2.0 client ID
  * 	- Service `databricks`: OAuth 2.0 client ID
  * 	- Service `managed_data_lake`: The OAuth 2.0 client ID you created for authenticating Fivetran. Use this parameter only if you want to use OAuth 2.0 as the authentication type for Fivetran to connect to Databricks.
  * 	- Service `new_s3_datalake`: OAuth 2.0 client ID
  * 	- Service `onelake`: OAuth 2.0 client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#oauth2_client_id Destination#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: OAuth 2.0 secret
  * 	- Service `databricks`: OAuth 2.0 secret
  * 	- Service `managed_data_lake`: OAuth 2.0 secret you created for authenticating Fivetran. Use this parameter only if you want to use OAuth 2.0 as the authentication type for Fivetran to connect to Databricks.
  * 	- Service `new_s3_datalake`: OAuth 2.0 secret
  * 	- Service `onelake`: OAuth 2.0 secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#oauth2_secret Destination#oauth2_secret}
  */
  readonly oauth2Secret?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: In case private key is encrypted, you are required to enter passphrase that was used to encrypt the private key. The field can be specified if authentication type is `KEY_PAIR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#passphrase Destination#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: Database user password
  * 	- Service `aurora_warehouse`: Database user password
  * 	- Service `azure_postgres_warehouse`: Database user password
  * 	- Service `azure_sql_data_warehouse`: Database user password
  * 	- Service `azure_sql_database`: Database user password
  * 	- Service `azure_sql_managed_db_warehouse`: Database user password
  * 	- Service `maria_rds_warehouse`: Database user password
  * 	- Service `maria_warehouse`: Database user password
  * 	- Service `mysql_rds_warehouse`: Database user password
  * 	- Service `mysql_warehouse`: Database user password
  * 	- Service `oracle_rac_warehouse`: Database user password
  * 	- Service `oracle_rds_warehouse`: Database user password
  * 	- Service `oracle_warehouse`: Database user password
  * 	- Service `panoply`: Database user password
  * 	- Service `periscope_warehouse`: Database user password
  * 	- Service `postgres_databricks_warehouse`: Database user password
  * 	- Service `postgres_gcp_warehouse`: Database user password
  * 	- Service `postgres_rds_warehouse`: Database user password
  * 	- Service `postgres_warehouse`: Database user password
  * 	- Service `redshift`: Database user password. Required if authentication type is `PASSWORD`.
  * 	- Service `snowflake`: Database user password. The field should be specified if authentication type is `PASSWORD`.
  * 	- Service `sql_server_rds_warehouse`: Database user password
  * 	- Service `sql_server_warehouse`: Database user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#password Destination#password}
  */
  readonly password?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Personal access token
  * 	- Service `databricks`: Personal access token
  * 	- Service `managed_data_lake`: The personal access token you created for authenticating Fivetran. Use this parameter only if you want to use a personal access token as the authentication type for Fivetran to connect to Databricks.
  * 	- Service `new_s3_datalake`: Personal access token
  * 	- Service `onelake`: Personal access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#personal_access_token Destination#personal_access_token}
  */
  readonly personalAccessToken?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Server port number
  * 	- Service `aurora_postgres_warehouse`: Server port number
  * 	- Service `aurora_warehouse`: Server port number
  * 	- Service `azure_postgres_warehouse`: Server port number
  * 	- Service `azure_sql_data_warehouse`: Server port number
  * 	- Service `azure_sql_database`: Server port number
  * 	- Service `azure_sql_managed_db_warehouse`: Server port number
  * 	- Service `databricks`: Server port number
  * 	- Service `managed_data_lake`: Server port number of the Databricks account associated with Unity Catalog. Use this parameter only if you want to use Unity Catalog to manage your Delta Lake tables.
  * 	- Service `maria_rds_warehouse`: Server port number
  * 	- Service `maria_warehouse`: Server port number
  * 	- Service `mysql_rds_warehouse`: Server port number
  * 	- Service `mysql_warehouse`: Server port number
  * 	- Service `new_s3_datalake`: Server port number
  * 	- Service `onelake`: Server port number
  * 	- Service `oracle_rac_warehouse`: Server port number
  * 	- Service `oracle_rds_warehouse`: Server port number
  * 	- Service `oracle_warehouse`: Server port number
  * 	- Service `panoply`: Server port number
  * 	- Service `periscope_warehouse`: Server port number
  * 	- Service `postgres_databricks_warehouse`: Server port number
  * 	- Service `postgres_gcp_warehouse`: Server port number
  * 	- Service `postgres_rds_warehouse`: Server port number
  * 	- Service `postgres_warehouse`: Server port number
  * 	- Service `redshift`: Server port number
  * 	- Service `snowflake`: Server port number
  * 	- Service `sql_server_rds_warehouse`: Server port number
  * 	- Service `sql_server_warehouse`: Server port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#port Destination#port}
  */
  readonly port?: number;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: (Immutable) path/to/data within the container
  * 	- Service `managed_data_lake`: (Immutable) Prefix path or virtual folder path within your bucket or container where you want Fivetran to store your data. Skip this parameter for AWS-based data lakes if the IAM policy configured for your S3 bucket grants access to the entire bucket.
  * 	- Service `new_s3_datalake`: (Immutable) Prefix path of the bucket for which you have configured access policy. It is not required if access has been granted to entire Bucket in the access policy
  * 	- Service `onelake`: (Immutable) path/to/data within your lakehouse inside the Files directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#prefix_path Destination#prefix_path}
  */
  readonly prefixPath?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Private access key.  The field should be specified if authentication type is `KEY_PAIR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#private_key Destination#private_key}
  */
  readonly privateKey?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `big_query`: BigQuery project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#project_id Destination#project_id}
  */
  readonly projectId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `managed_data_lake`: (Immutable) AWS Region of your S3 bucket. Use this parameter only if you want to deploy your data lake on AWS.
  * 	- Service `new_s3_datalake`: Region of your AWS S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#region Destination#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#registry_name Destination#registry_name}
  */
  readonly registryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#registry_sts_region Destination#registry_sts_region}
  */
  readonly registryStsRegion?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Replication factor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#replication_factor Destination#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `aurora_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `azure_postgres_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `azure_sql_data_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `azure_sql_database`: Field to test Self serve Private Link
  * 	- Service `azure_sql_managed_db_warehouse`: Field to test Self serve Private Link
  * 	- Service `databricks`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `maria_rds_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `maria_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `mysql_rds_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `mysql_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `panoply`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `periscope_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `postgres_gcp_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `postgres_rds_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `postgres_warehouse`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `redshift`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `snowflake`: This field is currently being introduced to test the Self-serve Private Link functionality
  * 	- Service `sql_server_rds_warehouse`: Field to test Self serve Private Link
  * 	- Service `sql_server_warehouse`: Field to test Self serve Private Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#resource_id Destination#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: If not specified, Fivetran will use the user's default role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#role Destination#role}
  */
  readonly role?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `redshift`: Role ARN with Redshift permissions. Required if authentication type is `IAM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#role_arn Destination#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `databricks`: Authentication method for the S3 bucket you want to use as the external staging for Hybrid Deployment.
  * 	- Service `redshift`: Type of authentication configured for the S3 bucket you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#s3_bucket_auth_type Destination#s3_bucket_auth_type}
  */
  readonly s3BucketAuthType?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Security protocol for Confluent Cloud interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#sasl_mechanism Destination#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Confluent Cloud SASL key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#sasl_plain_key Destination#sasl_plain_key}
  */
  readonly saslPlainKey?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Confluent Cloud SASL secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#sasl_plain_secret Destination#sasl_plain_secret}
  */
  readonly saslPlainSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#schema_compatibility Destination#schema_compatibility}
  */
  readonly schemaCompatibility?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Schema Registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#schema_registry Destination#schema_registry}
  */
  readonly schemaRegistry?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Schema registry API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#schema_registry_api_key Destination#schema_registry_api_key}
  */
  readonly schemaRegistryApiKey?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Schema registry API secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#schema_registry_api_secret Destination#schema_registry_api_secret}
  */
  readonly schemaRegistryApiSecret?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Schema registry URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#schema_registry_url Destination#schema_registry_url}
  */
  readonly schemaRegistryUrl?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `big_query`: Private key of the customer service account. If specified, your service account will be used to process the data instead of the Fivetran-managed service account.
  * 	- Service `big_query_dts`: Private key of the customer service account. If specified, your service account will be used to process the data instead of the Fivetran-managed service account.
  * 	- Service `managed_big_query`: Private key of the customer service account. If specified, your service account will be used to process the data instead of the Fivetran-managed service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#secret_key Destination#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Secret value for service principal
  * 	- Service `managed_data_lake`: Secret value of the service principal you created for Fivetran. Use this parameter only if you want to deploy your data lake on ADLS.
  * 	- Service `onelake`: Secret value for service principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#secret_value Destination#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `confluent_cloud_wh`: Security protocol for Confluent Cloud interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#security_protocol Destination#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Server Host name
  * 	- Service `databricks`: Server name
  * 	- Service `managed_data_lake`: Server host name of the Databricks account associated with Unity Catalog. Use this parameter only if you want to use Unity Catalog to manage your Delta Lake tables.
  * 	- Service `new_s3_datalake`: Server host name
  * 	- Service `onelake`: Server Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#server_host_name Destination#server_host_name}
  */
  readonly serverHostName?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Should maintain tables in Databricks 
  * 	- Service `managed_data_lake`: Specifies whether you want to manage your Delta Lake tables in Databricks Unity Catalog.
  * 	- Service `new_s3_datalake`: Should maintain tables in Databricks 
  * 	- Service `onelake`: Should maintain tables in Databricks 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#should_maintain_tables_in_databricks Destination#should_maintain_tables_in_databricks}
  */
  readonly shouldMaintainTablesInDatabricks?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `managed_data_lake`: Specifies whether you want to manage your Iceberg tables in AWS Glue. Use this parameter only if you want to deploy your data lake on AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#should_maintain_tables_in_glue Destination#should_maintain_tables_in_glue}
  */
  readonly shouldMaintainTablesInGlue?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Snapshots older than the retention period are deleted every week. Default value: `ONE_WEEK`.
  * 	- Service `managed_data_lake`: Specifies how long you want us to retain your table snapshots. We delete the snapshots that are older than the retention period during our table maintenance operations. Default value: `ONE_WEEK`.
  * 	- Service `new_s3_datalake`: Snapshots older than the retention period are deleted every week. Default value: `ONE_WEEK`.
  * 	- Service `onelake`: Snapshots older than the retention period are deleted every week. Default value: `ONE_WEEK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#snapshot_retention_period Destination#snapshot_retention_period}
  */
  readonly snapshotRetentionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#snowflake_cloud Destination#snowflake_cloud}
  */
  readonly snowflakeCloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#snowflake_region Destination#snowflake_region}
  */
  readonly snowflakeRegion?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `azure_sql_data_warehouse`: The access key of the Azure storage account you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment.
  * 	- Service `databricks`: Your storage account key
  * 	- Service `snowflake`: The access key of the Azure storage account you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment and want to use an Azure Blob storage container to stage your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#storage_account_key Destination#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: (Immutable) Storage account for Azure Data Lake Storage Gen2 name
  * 	- Service `azure_sql_data_warehouse`: The name of the Azure storage account you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment.
  * 	- Service `databricks`: Your storage account name
  * 	- Service `managed_data_lake`: (Immutable) Name of your Azure Data Lake Storage Gen2 (ADLS Gen2) storage account. Use this parameter only if you want to deploy your data lake on ADLS.
  * 	- Service `onelake`: (Immutable) Storage account for Azure Data Lake Storage Gen2 name
  * 	- Service `snowflake`: The name of the Azure storage account you want to use to stage your data. Use this parameter only if you are using Hybrid Deployment and want to use an Azure Blob storage container to stage your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#storage_account_name Destination#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `managed_data_lake`: The cloud storage provider you want to use for your data lake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#storage_provider Destination#storage_provider}
  */
  readonly storageProvider?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `big_query`: Stores JSON columns as JSON instead of STRING. This parameter is applicable only to destinations created before August 1, 2025.
  * 	- Service `big_query_dts`: Stores JSON columns as JSON instead of STRING. This parameter is applicable only to destinations created before August 1, 2025.
  * 	- Service `managed_big_query`: Stores JSON columns as JSON instead of STRING. This parameter is applicable only to destinations created before August 1, 2025.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#support_json_type Destination#support_json_type}
  */
  readonly supportJsonType?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `new_s3_datalake`: (Immutable) The table format in which you want to sync your tables. Valid values are ICEBERG and DELTA_LAKE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#table_format Destination#table_format}
  */
  readonly tableFormat?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `adls`: Tenant id of service principal
  * 	- Service `managed_data_lake`: Tenant ID of the service principal you created for Fivetran. Use this parameter only if you want to deploy your data lake on ADLS.
  * 	- Service `onelake`: Tenant ID of service principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#tenant_id Destination#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `aurora_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_postgres_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_data_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_database`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_managed_db_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_rds_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_rds_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rac_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rds_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `panoply`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `periscope_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_databricks_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_gcp_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_rds_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `redshift`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `sql_server_rds_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `sql_server_warehouse`: SSH server name. Must be populated if `connection_type` is set to `SshTunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#tunnel_host Destination#tunnel_host}
  */
  readonly tunnelHost?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `aurora_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_postgres_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_data_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_database`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_managed_db_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_rds_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_rds_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rac_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rds_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `panoply`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `periscope_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_databricks_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_gcp_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_rds_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `redshift`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `sql_server_rds_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `sql_server_warehouse`: SSH server port name. Must be populated if `connection_type` is set to `SshTunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#tunnel_port Destination#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `aurora_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_postgres_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_data_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_database`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `azure_sql_managed_db_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_rds_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `maria_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_rds_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `mysql_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rac_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_rds_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `oracle_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `panoply`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `periscope_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_databricks_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_gcp_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_rds_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `postgres_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `redshift`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `sql_server_rds_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  * 	- Service `sql_server_warehouse`: SSH user name. Must be populated if `connection_type` is set to `SshTunnel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#tunnel_user Destination#tunnel_user}
  */
  readonly tunnelUser?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `snowflake`: Set to `true` if you want to use an S3 bucket to stage your data. Use this parameter only if you are using Hybrid Deployment and want to use an S3 bucket to stage your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#use_customer_staging Destination#use_customer_staging}
  */
  readonly useCustomerStaging?: boolean | cdktf.IResolvable;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `aurora_postgres_warehouse`: Database user name
  * 	- Service `aurora_warehouse`: Database user name
  * 	- Service `azure_postgres_warehouse`: Database user name
  * 	- Service `azure_sql_data_warehouse`: Database user name
  * 	- Service `azure_sql_database`: Database user name
  * 	- Service `azure_sql_managed_db_warehouse`: Database user name
  * 	- Service `maria_rds_warehouse`: Database user name
  * 	- Service `maria_warehouse`: Database user name
  * 	- Service `mysql_rds_warehouse`: Database user name
  * 	- Service `mysql_warehouse`: Database user name
  * 	- Service `oracle_rac_warehouse`: Database user name
  * 	- Service `oracle_rds_warehouse`: Database user name
  * 	- Service `oracle_warehouse`: Database user name
  * 	- Service `panoply`: Database user name
  * 	- Service `periscope_warehouse`: Database user name
  * 	- Service `postgres_databricks_warehouse`: Database user name
  * 	- Service `postgres_gcp_warehouse`: Database user name
  * 	- Service `postgres_rds_warehouse`: Database user name
  * 	- Service `postgres_warehouse`: Database user name
  * 	- Service `redshift`: Database user name
  * 	- Service `snowflake`: Database user name
  * 	- Service `sql_server_rds_warehouse`: Database user name
  * 	- Service `sql_server_warehouse`: Database user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#user Destination#user}
  */
  readonly user?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `managed_data_lake`: (Immutable) OneLake workspace GUID
  * 	- Service `onelake`: (Immutable) OneLake workspace GUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#workspace_guid Destination#workspace_guid}
  */
  readonly workspaceGuid?: string;
  /**
  * Field usage depends on `service` value: 
  * 	- Service `onelake`: OneLake workspace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#workspace_name Destination#workspace_name}
  */
  readonly workspaceName?: string;
}

export function destinationConfigAToTerraform(struct?: DestinationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_encrypted: cdktf.booleanToTerraform(struct!.alwaysEncrypted),
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    auth: cdktf.stringToTerraform(struct!.auth),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_bucket_auth_type: cdktf.stringToTerraform(struct!.awsBucketAuthType),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    azure_storage_account_auth_type: cdktf.stringToTerraform(struct!.azureStorageAccountAuthType),
    bootstrap_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootstrapServers),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    bucket_region: cdktf.stringToTerraform(struct!.bucketRegion),
    catalog: cdktf.stringToTerraform(struct!.catalog),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_region: cdktf.stringToTerraform(struct!.clusterRegion),
    connection_method: cdktf.stringToTerraform(struct!.connectionMethod),
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    controller_id: cdktf.stringToTerraform(struct!.controllerId),
    create_external_tables: cdktf.booleanToTerraform(struct!.createExternalTables),
    create_external_volumes: cdktf.booleanToTerraform(struct!.createExternalVolumes),
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
    data_set_location: cdktf.stringToTerraform(struct!.dataSetLocation),
    database: cdktf.stringToTerraform(struct!.database),
    databricks_connection_type: cdktf.stringToTerraform(struct!.databricksConnectionType),
    directory_id: cdktf.stringToTerraform(struct!.directoryId),
    disable_vacuum: cdktf.booleanToTerraform(struct!.disableVacuum),
    enable_external_storage_for_unstructured_files: cdktf.booleanToTerraform(struct!.enableExternalStorageForUnstructuredFiles),
    enable_remote_execution: cdktf.booleanToTerraform(struct!.enableRemoteExecution),
    enable_single_topic: cdktf.booleanToTerraform(struct!.enableSingleTopic),
    enable_super_type: cdktf.booleanToTerraform(struct!.enableSuperType),
    external_location: cdktf.stringToTerraform(struct!.externalLocation),
    external_stage_storage_provider: cdktf.stringToTerraform(struct!.externalStageStorageProvider),
    external_storage_cloud_provider: cdktf.stringToTerraform(struct!.externalStorageCloudProvider),
    external_storage_integration: cdktf.stringToTerraform(struct!.externalStorageIntegration),
    external_storage_parent_folder_uri: cdktf.stringToTerraform(struct!.externalStorageParentFolderUri),
    external_volume_location: cdktf.stringToTerraform(struct!.externalVolumeLocation),
    fivetran_glue_role_arn: cdktf.stringToTerraform(struct!.fivetranGlueRoleArn),
    fivetran_msk_role_arn: cdktf.stringToTerraform(struct!.fivetranMskRoleArn),
    fivetran_role_arn: cdktf.stringToTerraform(struct!.fivetranRoleArn),
    gcs_service_account_credentials_path: cdktf.stringToTerraform(struct!.gcsServiceAccountCredentialsPath),
    host: cdktf.stringToTerraform(struct!.host),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    is_private_key_encrypted: cdktf.booleanToTerraform(struct!.isPrivateKeyEncrypted),
    is_private_link_required: cdktf.booleanToTerraform(struct!.isPrivateLinkRequired),
    is_redshift_serverless: cdktf.booleanToTerraform(struct!.isRedshiftServerless),
    lakehouse_guid: cdktf.stringToTerraform(struct!.lakehouseGuid),
    lakehouse_name: cdktf.stringToTerraform(struct!.lakehouseName),
    msk_sts_region: cdktf.stringToTerraform(struct!.mskStsRegion),
    num_of_partitions: cdktf.numberToTerraform(struct!.numOfPartitions),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_secret: cdktf.stringToTerraform(struct!.oauth2Secret),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    password: cdktf.stringToTerraform(struct!.password),
    personal_access_token: cdktf.stringToTerraform(struct!.personalAccessToken),
    port: cdktf.numberToTerraform(struct!.port),
    prefix_path: cdktf.stringToTerraform(struct!.prefixPath),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    registry_sts_region: cdktf.stringToTerraform(struct!.registryStsRegion),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role: cdktf.stringToTerraform(struct!.role),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_bucket_auth_type: cdktf.stringToTerraform(struct!.s3BucketAuthType),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_plain_key: cdktf.stringToTerraform(struct!.saslPlainKey),
    sasl_plain_secret: cdktf.stringToTerraform(struct!.saslPlainSecret),
    schema_compatibility: cdktf.stringToTerraform(struct!.schemaCompatibility),
    schema_registry: cdktf.stringToTerraform(struct!.schemaRegistry),
    schema_registry_api_key: cdktf.stringToTerraform(struct!.schemaRegistryApiKey),
    schema_registry_api_secret: cdktf.stringToTerraform(struct!.schemaRegistryApiSecret),
    schema_registry_url: cdktf.stringToTerraform(struct!.schemaRegistryUrl),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
    server_host_name: cdktf.stringToTerraform(struct!.serverHostName),
    should_maintain_tables_in_databricks: cdktf.booleanToTerraform(struct!.shouldMaintainTablesInDatabricks),
    should_maintain_tables_in_glue: cdktf.booleanToTerraform(struct!.shouldMaintainTablesInGlue),
    snapshot_retention_period: cdktf.stringToTerraform(struct!.snapshotRetentionPeriod),
    snowflake_cloud: cdktf.stringToTerraform(struct!.snowflakeCloud),
    snowflake_region: cdktf.stringToTerraform(struct!.snowflakeRegion),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    storage_provider: cdktf.stringToTerraform(struct!.storageProvider),
    support_json_type: cdktf.booleanToTerraform(struct!.supportJsonType),
    table_format: cdktf.stringToTerraform(struct!.tableFormat),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
    use_customer_staging: cdktf.booleanToTerraform(struct!.useCustomerStaging),
    user: cdktf.stringToTerraform(struct!.user),
    workspace_guid: cdktf.stringToTerraform(struct!.workspaceGuid),
    workspace_name: cdktf.stringToTerraform(struct!.workspaceName),
  }
}


export function destinationConfigAToHclTerraform(struct?: DestinationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_bucket_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.awsBucketAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_account_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageAccountAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootstrapServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.bucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_region: {
      value: cdktf.stringToHclTerraform(struct!.clusterRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_method: {
      value: cdktf.stringToHclTerraform(struct!.connectionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_id: {
      value: cdktf.stringToHclTerraform(struct!.controllerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_external_tables: {
      value: cdktf.booleanToHclTerraform(struct!.createExternalTables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_external_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.createExternalVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_format: {
      value: cdktf.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_set_location: {
      value: cdktf.stringToHclTerraform(struct!.dataSetLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databricks_connection_type: {
      value: cdktf.stringToHclTerraform(struct!.databricksConnectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory_id: {
      value: cdktf.stringToHclTerraform(struct!.directoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_vacuum: {
      value: cdktf.booleanToHclTerraform(struct!.disableVacuum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_external_storage_for_unstructured_files: {
      value: cdktf.booleanToHclTerraform(struct!.enableExternalStorageForUnstructuredFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_remote_execution: {
      value: cdktf.booleanToHclTerraform(struct!.enableRemoteExecution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_single_topic: {
      value: cdktf.booleanToHclTerraform(struct!.enableSingleTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_super_type: {
      value: cdktf.booleanToHclTerraform(struct!.enableSuperType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_location: {
      value: cdktf.stringToHclTerraform(struct!.externalLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_stage_storage_provider: {
      value: cdktf.stringToHclTerraform(struct!.externalStageStorageProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_storage_cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.externalStorageCloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_storage_integration: {
      value: cdktf.stringToHclTerraform(struct!.externalStorageIntegration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_storage_parent_folder_uri: {
      value: cdktf.stringToHclTerraform(struct!.externalStorageParentFolderUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_volume_location: {
      value: cdktf.stringToHclTerraform(struct!.externalVolumeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fivetran_glue_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.fivetranGlueRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fivetran_msk_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.fivetranMskRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fivetran_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.fivetranRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_service_account_credentials_path: {
      value: cdktf.stringToHclTerraform(struct!.gcsServiceAccountCredentialsPath),
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
    is_private_key_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.isPrivateKeyEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_private_link_required: {
      value: cdktf.booleanToHclTerraform(struct!.isPrivateLinkRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_redshift_serverless: {
      value: cdktf.booleanToHclTerraform(struct!.isRedshiftServerless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lakehouse_guid: {
      value: cdktf.stringToHclTerraform(struct!.lakehouseGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lakehouse_name: {
      value: cdktf.stringToHclTerraform(struct!.lakehouseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msk_sts_region: {
      value: cdktf.stringToHclTerraform(struct!.mskStsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_of_partitions: {
      value: cdktf.numberToHclTerraform(struct!.numOfPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_secret: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
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
    personal_access_token: {
      value: cdktf.stringToHclTerraform(struct!.personalAccessToken),
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
    prefix_path: {
      value: cdktf.stringToHclTerraform(struct!.prefixPath),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_sts_region: {
      value: cdktf.stringToHclTerraform(struct!.registryStsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_plain_key: {
      value: cdktf.stringToHclTerraform(struct!.saslPlainKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_plain_secret: {
      value: cdktf.stringToHclTerraform(struct!.saslPlainSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_compatibility: {
      value: cdktf.stringToHclTerraform(struct!.schemaCompatibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_api_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_api_secret: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryApiSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_url: {
      value: cdktf.stringToHclTerraform(struct!.schemaRegistryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: cdktf.stringToHclTerraform(struct!.secretValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_host_name: {
      value: cdktf.stringToHclTerraform(struct!.serverHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_maintain_tables_in_databricks: {
      value: cdktf.booleanToHclTerraform(struct!.shouldMaintainTablesInDatabricks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_maintain_tables_in_glue: {
      value: cdktf.booleanToHclTerraform(struct!.shouldMaintainTablesInGlue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.snapshotRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snowflake_cloud: {
      value: cdktf.stringToHclTerraform(struct!.snowflakeCloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snowflake_region: {
      value: cdktf.stringToHclTerraform(struct!.snowflakeRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_key: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_provider: {
      value: cdktf.stringToHclTerraform(struct!.storageProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_json_type: {
      value: cdktf.booleanToHclTerraform(struct!.supportJsonType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    table_format: {
      value: cdktf.stringToHclTerraform(struct!.tableFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_customer_staging: {
      value: cdktf.booleanToHclTerraform(struct!.useCustomerStaging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_guid: {
      value: cdktf.stringToHclTerraform(struct!.workspaceGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_name: {
      value: cdktf.stringToHclTerraform(struct!.workspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysEncrypted = this._alwaysEncrypted;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsBucketAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsBucketAuthType = this._awsBucketAuthType;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._azureStorageAccountAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageAccountAuthType = this._azureStorageAccountAuthType;
    }
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketRegion = this._bucketRegion;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRegion = this._clusterRegion;
    }
    if (this._connectionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionMethod = this._connectionMethod;
    }
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._controllerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerId = this._controllerId;
    }
    if (this._createExternalTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.createExternalTables = this._createExternalTables;
    }
    if (this._createExternalVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.createExternalVolumes = this._createExternalVolumes;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._dataSetLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetLocation = this._dataSetLocation;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databricksConnectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksConnectionType = this._databricksConnectionType;
    }
    if (this._directoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryId = this._directoryId;
    }
    if (this._disableVacuum !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVacuum = this._disableVacuum;
    }
    if (this._enableExternalStorageForUnstructuredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExternalStorageForUnstructuredFiles = this._enableExternalStorageForUnstructuredFiles;
    }
    if (this._enableRemoteExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteExecution = this._enableRemoteExecution;
    }
    if (this._enableSingleTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSingleTopic = this._enableSingleTopic;
    }
    if (this._enableSuperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSuperType = this._enableSuperType;
    }
    if (this._externalLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLocation = this._externalLocation;
    }
    if (this._externalStageStorageProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalStageStorageProvider = this._externalStageStorageProvider;
    }
    if (this._externalStorageCloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalStorageCloudProvider = this._externalStorageCloudProvider;
    }
    if (this._externalStorageIntegration !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalStorageIntegration = this._externalStorageIntegration;
    }
    if (this._externalStorageParentFolderUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalStorageParentFolderUri = this._externalStorageParentFolderUri;
    }
    if (this._externalVolumeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalVolumeLocation = this._externalVolumeLocation;
    }
    if (this._fivetranGlueRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fivetranGlueRoleArn = this._fivetranGlueRoleArn;
    }
    if (this._fivetranMskRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fivetranMskRoleArn = this._fivetranMskRoleArn;
    }
    if (this._fivetranRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fivetranRoleArn = this._fivetranRoleArn;
    }
    if (this._gcsServiceAccountCredentialsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsServiceAccountCredentialsPath = this._gcsServiceAccountCredentialsPath;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._isPrivateKeyEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrivateKeyEncrypted = this._isPrivateKeyEncrypted;
    }
    if (this._isPrivateLinkRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrivateLinkRequired = this._isPrivateLinkRequired;
    }
    if (this._isRedshiftServerless !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRedshiftServerless = this._isRedshiftServerless;
    }
    if (this._lakehouseGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakehouseGuid = this._lakehouseGuid;
    }
    if (this._lakehouseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakehouseName = this._lakehouseName;
    }
    if (this._mskStsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mskStsRegion = this._mskStsRegion;
    }
    if (this._numOfPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfPartitions = this._numOfPartitions;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2Secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Secret = this._oauth2Secret;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._personalAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalAccessToken = this._personalAccessToken;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefixPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPath = this._prefixPath;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._registryStsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryStsRegion = this._registryStsRegion;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3BucketAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketAuthType = this._s3BucketAuthType;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPlainKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPlainKey = this._saslPlainKey;
    }
    if (this._saslPlainSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPlainSecret = this._saslPlainSecret;
    }
    if (this._schemaCompatibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaCompatibility = this._schemaCompatibility;
    }
    if (this._schemaRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry;
    }
    if (this._schemaRegistryApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryApiKey = this._schemaRegistryApiKey;
    }
    if (this._schemaRegistryApiSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryApiSecret = this._schemaRegistryApiSecret;
    }
    if (this._schemaRegistryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryUrl = this._schemaRegistryUrl;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._serverHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHostName = this._serverHostName;
    }
    if (this._shouldMaintainTablesInDatabricks !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldMaintainTablesInDatabricks = this._shouldMaintainTablesInDatabricks;
    }
    if (this._shouldMaintainTablesInGlue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldMaintainTablesInGlue = this._shouldMaintainTablesInGlue;
    }
    if (this._snapshotRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetentionPeriod = this._snapshotRetentionPeriod;
    }
    if (this._snowflakeCloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeCloud = this._snowflakeCloud;
    }
    if (this._snowflakeRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeRegion = this._snowflakeRegion;
    }
    if (this._storageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountKey = this._storageAccountKey;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._storageProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProvider = this._storageProvider;
    }
    if (this._supportJsonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportJsonType = this._supportJsonType;
    }
    if (this._tableFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFormat = this._tableFormat;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    if (this._useCustomerStaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCustomerStaging = this._useCustomerStaging;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._workspaceGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceGuid = this._workspaceGuid;
    }
    if (this._workspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceName = this._workspaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysEncrypted = undefined;
      this._applicationId = undefined;
      this._auth = undefined;
      this._authType = undefined;
      this._awsAccessKeyId = undefined;
      this._awsBucketAuthType = undefined;
      this._awsSecretAccessKey = undefined;
      this._azureStorageAccountAuthType = undefined;
      this._bootstrapServers = undefined;
      this._bucket = undefined;
      this._bucketRegion = undefined;
      this._catalog = undefined;
      this._clientId = undefined;
      this._cloudProvider = undefined;
      this._clusterId = undefined;
      this._clusterRegion = undefined;
      this._connectionMethod = undefined;
      this._connectionType = undefined;
      this._containerName = undefined;
      this._controllerId = undefined;
      this._createExternalTables = undefined;
      this._createExternalVolumes = undefined;
      this._dataFormat = undefined;
      this._dataSetLocation = undefined;
      this._database = undefined;
      this._databricksConnectionType = undefined;
      this._directoryId = undefined;
      this._disableVacuum = undefined;
      this._enableExternalStorageForUnstructuredFiles = undefined;
      this._enableRemoteExecution = undefined;
      this._enableSingleTopic = undefined;
      this._enableSuperType = undefined;
      this._externalLocation = undefined;
      this._externalStageStorageProvider = undefined;
      this._externalStorageCloudProvider = undefined;
      this._externalStorageIntegration = undefined;
      this._externalStorageParentFolderUri = undefined;
      this._externalVolumeLocation = undefined;
      this._fivetranGlueRoleArn = undefined;
      this._fivetranMskRoleArn = undefined;
      this._fivetranRoleArn = undefined;
      this._gcsServiceAccountCredentialsPath = undefined;
      this._host = undefined;
      this._httpPath = undefined;
      this._isPrivateKeyEncrypted = undefined;
      this._isPrivateLinkRequired = undefined;
      this._isRedshiftServerless = undefined;
      this._lakehouseGuid = undefined;
      this._lakehouseName = undefined;
      this._mskStsRegion = undefined;
      this._numOfPartitions = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2Secret = undefined;
      this._passphrase = undefined;
      this._password = undefined;
      this._personalAccessToken = undefined;
      this._port = undefined;
      this._prefixPath = undefined;
      this._privateKey = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._registryName = undefined;
      this._registryStsRegion = undefined;
      this._replicationFactor = undefined;
      this._resourceId = undefined;
      this._role = undefined;
      this._roleArn = undefined;
      this._s3BucketAuthType = undefined;
      this._saslMechanism = undefined;
      this._saslPlainKey = undefined;
      this._saslPlainSecret = undefined;
      this._schemaCompatibility = undefined;
      this._schemaRegistry = undefined;
      this._schemaRegistryApiKey = undefined;
      this._schemaRegistryApiSecret = undefined;
      this._schemaRegistryUrl = undefined;
      this._secretKey = undefined;
      this._secretValue = undefined;
      this._securityProtocol = undefined;
      this._serverHostName = undefined;
      this._shouldMaintainTablesInDatabricks = undefined;
      this._shouldMaintainTablesInGlue = undefined;
      this._snapshotRetentionPeriod = undefined;
      this._snowflakeCloud = undefined;
      this._snowflakeRegion = undefined;
      this._storageAccountKey = undefined;
      this._storageAccountName = undefined;
      this._storageProvider = undefined;
      this._supportJsonType = undefined;
      this._tableFormat = undefined;
      this._tenantId = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
      this._useCustomerStaging = undefined;
      this._user = undefined;
      this._workspaceGuid = undefined;
      this._workspaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysEncrypted = value.alwaysEncrypted;
      this._applicationId = value.applicationId;
      this._auth = value.auth;
      this._authType = value.authType;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsBucketAuthType = value.awsBucketAuthType;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._azureStorageAccountAuthType = value.azureStorageAccountAuthType;
      this._bootstrapServers = value.bootstrapServers;
      this._bucket = value.bucket;
      this._bucketRegion = value.bucketRegion;
      this._catalog = value.catalog;
      this._clientId = value.clientId;
      this._cloudProvider = value.cloudProvider;
      this._clusterId = value.clusterId;
      this._clusterRegion = value.clusterRegion;
      this._connectionMethod = value.connectionMethod;
      this._connectionType = value.connectionType;
      this._containerName = value.containerName;
      this._controllerId = value.controllerId;
      this._createExternalTables = value.createExternalTables;
      this._createExternalVolumes = value.createExternalVolumes;
      this._dataFormat = value.dataFormat;
      this._dataSetLocation = value.dataSetLocation;
      this._database = value.database;
      this._databricksConnectionType = value.databricksConnectionType;
      this._directoryId = value.directoryId;
      this._disableVacuum = value.disableVacuum;
      this._enableExternalStorageForUnstructuredFiles = value.enableExternalStorageForUnstructuredFiles;
      this._enableRemoteExecution = value.enableRemoteExecution;
      this._enableSingleTopic = value.enableSingleTopic;
      this._enableSuperType = value.enableSuperType;
      this._externalLocation = value.externalLocation;
      this._externalStageStorageProvider = value.externalStageStorageProvider;
      this._externalStorageCloudProvider = value.externalStorageCloudProvider;
      this._externalStorageIntegration = value.externalStorageIntegration;
      this._externalStorageParentFolderUri = value.externalStorageParentFolderUri;
      this._externalVolumeLocation = value.externalVolumeLocation;
      this._fivetranGlueRoleArn = value.fivetranGlueRoleArn;
      this._fivetranMskRoleArn = value.fivetranMskRoleArn;
      this._fivetranRoleArn = value.fivetranRoleArn;
      this._gcsServiceAccountCredentialsPath = value.gcsServiceAccountCredentialsPath;
      this._host = value.host;
      this._httpPath = value.httpPath;
      this._isPrivateKeyEncrypted = value.isPrivateKeyEncrypted;
      this._isPrivateLinkRequired = value.isPrivateLinkRequired;
      this._isRedshiftServerless = value.isRedshiftServerless;
      this._lakehouseGuid = value.lakehouseGuid;
      this._lakehouseName = value.lakehouseName;
      this._mskStsRegion = value.mskStsRegion;
      this._numOfPartitions = value.numOfPartitions;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2Secret = value.oauth2Secret;
      this._passphrase = value.passphrase;
      this._password = value.password;
      this._personalAccessToken = value.personalAccessToken;
      this._port = value.port;
      this._prefixPath = value.prefixPath;
      this._privateKey = value.privateKey;
      this._projectId = value.projectId;
      this._region = value.region;
      this._registryName = value.registryName;
      this._registryStsRegion = value.registryStsRegion;
      this._replicationFactor = value.replicationFactor;
      this._resourceId = value.resourceId;
      this._role = value.role;
      this._roleArn = value.roleArn;
      this._s3BucketAuthType = value.s3BucketAuthType;
      this._saslMechanism = value.saslMechanism;
      this._saslPlainKey = value.saslPlainKey;
      this._saslPlainSecret = value.saslPlainSecret;
      this._schemaCompatibility = value.schemaCompatibility;
      this._schemaRegistry = value.schemaRegistry;
      this._schemaRegistryApiKey = value.schemaRegistryApiKey;
      this._schemaRegistryApiSecret = value.schemaRegistryApiSecret;
      this._schemaRegistryUrl = value.schemaRegistryUrl;
      this._secretKey = value.secretKey;
      this._secretValue = value.secretValue;
      this._securityProtocol = value.securityProtocol;
      this._serverHostName = value.serverHostName;
      this._shouldMaintainTablesInDatabricks = value.shouldMaintainTablesInDatabricks;
      this._shouldMaintainTablesInGlue = value.shouldMaintainTablesInGlue;
      this._snapshotRetentionPeriod = value.snapshotRetentionPeriod;
      this._snowflakeCloud = value.snowflakeCloud;
      this._snowflakeRegion = value.snowflakeRegion;
      this._storageAccountKey = value.storageAccountKey;
      this._storageAccountName = value.storageAccountName;
      this._storageProvider = value.storageProvider;
      this._supportJsonType = value.supportJsonType;
      this._tableFormat = value.tableFormat;
      this._tenantId = value.tenantId;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
      this._useCustomerStaging = value.useCustomerStaging;
      this._user = value.user;
      this._workspaceGuid = value.workspaceGuid;
      this._workspaceName = value.workspaceName;
    }
  }

  // always_encrypted - computed: true, optional: true, required: false
  private _alwaysEncrypted?: boolean | cdktf.IResolvable; 
  public get alwaysEncrypted() {
    return this.getBooleanAttribute('always_encrypted');
  }
  public set alwaysEncrypted(value: boolean | cdktf.IResolvable) {
    this._alwaysEncrypted = value;
  }
  public resetAlwaysEncrypted() {
    this._alwaysEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysEncryptedInput() {
    return this._alwaysEncrypted;
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

  // auth - computed: true, optional: true, required: false
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

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_bucket_auth_type - computed: true, optional: true, required: false
  private _awsBucketAuthType?: string; 
  public get awsBucketAuthType() {
    return this.getStringAttribute('aws_bucket_auth_type');
  }
  public set awsBucketAuthType(value: string) {
    this._awsBucketAuthType = value;
  }
  public resetAwsBucketAuthType() {
    this._awsBucketAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsBucketAuthTypeInput() {
    return this._awsBucketAuthType;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // azure_storage_account_auth_type - computed: false, optional: true, required: false
  private _azureStorageAccountAuthType?: string; 
  public get azureStorageAccountAuthType() {
    return this.getStringAttribute('azure_storage_account_auth_type');
  }
  public set azureStorageAccountAuthType(value: string) {
    this._azureStorageAccountAuthType = value;
  }
  public resetAzureStorageAccountAuthType() {
    this._azureStorageAccountAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountAuthTypeInput() {
    return this._azureStorageAccountAuthType;
  }

  // bootstrap_servers - computed: false, optional: true, required: false
  private _bootstrapServers?: string[]; 
  public get bootstrapServers() {
    return cdktf.Fn.tolist(this.getListAttribute('bootstrap_servers'));
  }
  public set bootstrapServers(value: string[]) {
    this._bootstrapServers = value;
  }
  public resetBootstrapServers() {
    this._bootstrapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_region - computed: false, optional: true, required: false
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
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

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_region - computed: false, optional: true, required: false
  private _clusterRegion?: string; 
  public get clusterRegion() {
    return this.getStringAttribute('cluster_region');
  }
  public set clusterRegion(value: string) {
    this._clusterRegion = value;
  }
  public resetClusterRegion() {
    this._clusterRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRegionInput() {
    return this._clusterRegion;
  }

  // connection_method - computed: true, optional: true, required: false
  private _connectionMethod?: string; 
  public get connectionMethod() {
    return this.getStringAttribute('connection_method');
  }
  public set connectionMethod(value: string) {
    this._connectionMethod = value;
  }
  public resetConnectionMethod() {
    this._connectionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMethodInput() {
    return this._connectionMethod;
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // controller_id - computed: false, optional: true, required: false
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  public resetControllerId() {
    this._controllerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
  }

  // create_external_tables - computed: true, optional: true, required: false
  private _createExternalTables?: boolean | cdktf.IResolvable; 
  public get createExternalTables() {
    return this.getBooleanAttribute('create_external_tables');
  }
  public set createExternalTables(value: boolean | cdktf.IResolvable) {
    this._createExternalTables = value;
  }
  public resetCreateExternalTables() {
    this._createExternalTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createExternalTablesInput() {
    return this._createExternalTables;
  }

  // create_external_volumes - computed: true, optional: true, required: false
  private _createExternalVolumes?: boolean | cdktf.IResolvable; 
  public get createExternalVolumes() {
    return this.getBooleanAttribute('create_external_volumes');
  }
  public set createExternalVolumes(value: boolean | cdktf.IResolvable) {
    this._createExternalVolumes = value;
  }
  public resetCreateExternalVolumes() {
    this._createExternalVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createExternalVolumesInput() {
    return this._createExternalVolumes;
  }

  // data_format - computed: true, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // data_set_location - computed: false, optional: true, required: false
  private _dataSetLocation?: string; 
  public get dataSetLocation() {
    return this.getStringAttribute('data_set_location');
  }
  public set dataSetLocation(value: string) {
    this._dataSetLocation = value;
  }
  public resetDataSetLocation() {
    this._dataSetLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetLocationInput() {
    return this._dataSetLocation;
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

  // databricks_connection_type - computed: true, optional: true, required: false
  private _databricksConnectionType?: string; 
  public get databricksConnectionType() {
    return this.getStringAttribute('databricks_connection_type');
  }
  public set databricksConnectionType(value: string) {
    this._databricksConnectionType = value;
  }
  public resetDatabricksConnectionType() {
    this._databricksConnectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksConnectionTypeInput() {
    return this._databricksConnectionType;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // disable_vacuum - computed: true, optional: true, required: false
  private _disableVacuum?: boolean | cdktf.IResolvable; 
  public get disableVacuum() {
    return this.getBooleanAttribute('disable_vacuum');
  }
  public set disableVacuum(value: boolean | cdktf.IResolvable) {
    this._disableVacuum = value;
  }
  public resetDisableVacuum() {
    this._disableVacuum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVacuumInput() {
    return this._disableVacuum;
  }

  // enable_external_storage_for_unstructured_files - computed: true, optional: true, required: false
  private _enableExternalStorageForUnstructuredFiles?: boolean | cdktf.IResolvable; 
  public get enableExternalStorageForUnstructuredFiles() {
    return this.getBooleanAttribute('enable_external_storage_for_unstructured_files');
  }
  public set enableExternalStorageForUnstructuredFiles(value: boolean | cdktf.IResolvable) {
    this._enableExternalStorageForUnstructuredFiles = value;
  }
  public resetEnableExternalStorageForUnstructuredFiles() {
    this._enableExternalStorageForUnstructuredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExternalStorageForUnstructuredFilesInput() {
    return this._enableExternalStorageForUnstructuredFiles;
  }

  // enable_remote_execution - computed: true, optional: true, required: false
  private _enableRemoteExecution?: boolean | cdktf.IResolvable; 
  public get enableRemoteExecution() {
    return this.getBooleanAttribute('enable_remote_execution');
  }
  public set enableRemoteExecution(value: boolean | cdktf.IResolvable) {
    this._enableRemoteExecution = value;
  }
  public resetEnableRemoteExecution() {
    this._enableRemoteExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteExecutionInput() {
    return this._enableRemoteExecution;
  }

  // enable_single_topic - computed: true, optional: true, required: false
  private _enableSingleTopic?: boolean | cdktf.IResolvable; 
  public get enableSingleTopic() {
    return this.getBooleanAttribute('enable_single_topic');
  }
  public set enableSingleTopic(value: boolean | cdktf.IResolvable) {
    this._enableSingleTopic = value;
  }
  public resetEnableSingleTopic() {
    this._enableSingleTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleTopicInput() {
    return this._enableSingleTopic;
  }

  // enable_super_type - computed: true, optional: true, required: false
  private _enableSuperType?: boolean | cdktf.IResolvable; 
  public get enableSuperType() {
    return this.getBooleanAttribute('enable_super_type');
  }
  public set enableSuperType(value: boolean | cdktf.IResolvable) {
    this._enableSuperType = value;
  }
  public resetEnableSuperType() {
    this._enableSuperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSuperTypeInput() {
    return this._enableSuperType;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // external_location - computed: false, optional: true, required: false
  private _externalLocation?: string; 
  public get externalLocation() {
    return this.getStringAttribute('external_location');
  }
  public set externalLocation(value: string) {
    this._externalLocation = value;
  }
  public resetExternalLocation() {
    this._externalLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLocationInput() {
    return this._externalLocation;
  }

  // external_stage_storage_provider - computed: true, optional: true, required: false
  private _externalStageStorageProvider?: string; 
  public get externalStageStorageProvider() {
    return this.getStringAttribute('external_stage_storage_provider');
  }
  public set externalStageStorageProvider(value: string) {
    this._externalStageStorageProvider = value;
  }
  public resetExternalStageStorageProvider() {
    this._externalStageStorageProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalStageStorageProviderInput() {
    return this._externalStageStorageProvider;
  }

  // external_storage_cloud_provider - computed: true, optional: true, required: false
  private _externalStorageCloudProvider?: string; 
  public get externalStorageCloudProvider() {
    return this.getStringAttribute('external_storage_cloud_provider');
  }
  public set externalStorageCloudProvider(value: string) {
    this._externalStorageCloudProvider = value;
  }
  public resetExternalStorageCloudProvider() {
    this._externalStorageCloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalStorageCloudProviderInput() {
    return this._externalStorageCloudProvider;
  }

  // external_storage_integration - computed: false, optional: true, required: false
  private _externalStorageIntegration?: string; 
  public get externalStorageIntegration() {
    return this.getStringAttribute('external_storage_integration');
  }
  public set externalStorageIntegration(value: string) {
    this._externalStorageIntegration = value;
  }
  public resetExternalStorageIntegration() {
    this._externalStorageIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalStorageIntegrationInput() {
    return this._externalStorageIntegration;
  }

  // external_storage_parent_folder_uri - computed: false, optional: true, required: false
  private _externalStorageParentFolderUri?: string; 
  public get externalStorageParentFolderUri() {
    return this.getStringAttribute('external_storage_parent_folder_uri');
  }
  public set externalStorageParentFolderUri(value: string) {
    this._externalStorageParentFolderUri = value;
  }
  public resetExternalStorageParentFolderUri() {
    this._externalStorageParentFolderUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalStorageParentFolderUriInput() {
    return this._externalStorageParentFolderUri;
  }

  // external_volume_location - computed: false, optional: true, required: false
  private _externalVolumeLocation?: string; 
  public get externalVolumeLocation() {
    return this.getStringAttribute('external_volume_location');
  }
  public set externalVolumeLocation(value: string) {
    this._externalVolumeLocation = value;
  }
  public resetExternalVolumeLocation() {
    this._externalVolumeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVolumeLocationInput() {
    return this._externalVolumeLocation;
  }

  // fivetran_glue_role_arn - computed: false, optional: true, required: false
  private _fivetranGlueRoleArn?: string; 
  public get fivetranGlueRoleArn() {
    return this.getStringAttribute('fivetran_glue_role_arn');
  }
  public set fivetranGlueRoleArn(value: string) {
    this._fivetranGlueRoleArn = value;
  }
  public resetFivetranGlueRoleArn() {
    this._fivetranGlueRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fivetranGlueRoleArnInput() {
    return this._fivetranGlueRoleArn;
  }

  // fivetran_msk_role_arn - computed: false, optional: true, required: false
  private _fivetranMskRoleArn?: string; 
  public get fivetranMskRoleArn() {
    return this.getStringAttribute('fivetran_msk_role_arn');
  }
  public set fivetranMskRoleArn(value: string) {
    this._fivetranMskRoleArn = value;
  }
  public resetFivetranMskRoleArn() {
    this._fivetranMskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fivetranMskRoleArnInput() {
    return this._fivetranMskRoleArn;
  }

  // fivetran_role_arn - computed: false, optional: true, required: false
  private _fivetranRoleArn?: string; 
  public get fivetranRoleArn() {
    return this.getStringAttribute('fivetran_role_arn');
  }
  public set fivetranRoleArn(value: string) {
    this._fivetranRoleArn = value;
  }
  public resetFivetranRoleArn() {
    this._fivetranRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fivetranRoleArnInput() {
    return this._fivetranRoleArn;
  }

  // gcs_service_account_credentials_path - computed: false, optional: true, required: false
  private _gcsServiceAccountCredentialsPath?: string; 
  public get gcsServiceAccountCredentialsPath() {
    return this.getStringAttribute('gcs_service_account_credentials_path');
  }
  public set gcsServiceAccountCredentialsPath(value: string) {
    this._gcsServiceAccountCredentialsPath = value;
  }
  public resetGcsServiceAccountCredentialsPath() {
    this._gcsServiceAccountCredentialsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsServiceAccountCredentialsPathInput() {
    return this._gcsServiceAccountCredentialsPath;
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

  // http_path - computed: false, optional: true, required: false
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  public resetHttpPath() {
    this._httpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // is_private_key_encrypted - computed: true, optional: true, required: false
  private _isPrivateKeyEncrypted?: boolean | cdktf.IResolvable; 
  public get isPrivateKeyEncrypted() {
    return this.getBooleanAttribute('is_private_key_encrypted');
  }
  public set isPrivateKeyEncrypted(value: boolean | cdktf.IResolvable) {
    this._isPrivateKeyEncrypted = value;
  }
  public resetIsPrivateKeyEncrypted() {
    this._isPrivateKeyEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateKeyEncryptedInput() {
    return this._isPrivateKeyEncrypted;
  }

  // is_private_link_required - computed: true, optional: true, required: false
  private _isPrivateLinkRequired?: boolean | cdktf.IResolvable; 
  public get isPrivateLinkRequired() {
    return this.getBooleanAttribute('is_private_link_required');
  }
  public set isPrivateLinkRequired(value: boolean | cdktf.IResolvable) {
    this._isPrivateLinkRequired = value;
  }
  public resetIsPrivateLinkRequired() {
    this._isPrivateLinkRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateLinkRequiredInput() {
    return this._isPrivateLinkRequired;
  }

  // is_redshift_serverless - computed: true, optional: true, required: false
  private _isRedshiftServerless?: boolean | cdktf.IResolvable; 
  public get isRedshiftServerless() {
    return this.getBooleanAttribute('is_redshift_serverless');
  }
  public set isRedshiftServerless(value: boolean | cdktf.IResolvable) {
    this._isRedshiftServerless = value;
  }
  public resetIsRedshiftServerless() {
    this._isRedshiftServerless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedshiftServerlessInput() {
    return this._isRedshiftServerless;
  }

  // lakehouse_guid - computed: false, optional: true, required: false
  private _lakehouseGuid?: string; 
  public get lakehouseGuid() {
    return this.getStringAttribute('lakehouse_guid');
  }
  public set lakehouseGuid(value: string) {
    this._lakehouseGuid = value;
  }
  public resetLakehouseGuid() {
    this._lakehouseGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakehouseGuidInput() {
    return this._lakehouseGuid;
  }

  // lakehouse_name - computed: false, optional: true, required: false
  private _lakehouseName?: string; 
  public get lakehouseName() {
    return this.getStringAttribute('lakehouse_name');
  }
  public set lakehouseName(value: string) {
    this._lakehouseName = value;
  }
  public resetLakehouseName() {
    this._lakehouseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakehouseNameInput() {
    return this._lakehouseName;
  }

  // msk_sts_region - computed: false, optional: true, required: false
  private _mskStsRegion?: string; 
  public get mskStsRegion() {
    return this.getStringAttribute('msk_sts_region');
  }
  public set mskStsRegion(value: string) {
    this._mskStsRegion = value;
  }
  public resetMskStsRegion() {
    this._mskStsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mskStsRegionInput() {
    return this._mskStsRegion;
  }

  // num_of_partitions - computed: true, optional: true, required: false
  private _numOfPartitions?: number; 
  public get numOfPartitions() {
    return this.getNumberAttribute('num_of_partitions');
  }
  public set numOfPartitions(value: number) {
    this._numOfPartitions = value;
  }
  public resetNumOfPartitions() {
    this._numOfPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfPartitionsInput() {
    return this._numOfPartitions;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_secret - computed: false, optional: true, required: false
  private _oauth2Secret?: string; 
  public get oauth2Secret() {
    return this.getStringAttribute('oauth2_secret');
  }
  public set oauth2Secret(value: string) {
    this._oauth2Secret = value;
  }
  public resetOauth2Secret() {
    this._oauth2Secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2SecretInput() {
    return this._oauth2Secret;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
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

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }
  public set personalAccessToken(value: string) {
    this._personalAccessToken = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
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

  // prefix_path - computed: false, optional: true, required: false
  private _prefixPath?: string; 
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }
  public set prefixPath(value: string) {
    this._prefixPath = value;
  }
  public resetPrefixPath() {
    this._prefixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPathInput() {
    return this._prefixPath;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // registry_sts_region - computed: false, optional: true, required: false
  private _registryStsRegion?: string; 
  public get registryStsRegion() {
    return this.getStringAttribute('registry_sts_region');
  }
  public set registryStsRegion(value: string) {
    this._registryStsRegion = value;
  }
  public resetRegistryStsRegion() {
    this._registryStsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryStsRegionInput() {
    return this._registryStsRegion;
  }

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // s3_bucket_auth_type - computed: true, optional: true, required: false
  private _s3BucketAuthType?: string; 
  public get s3BucketAuthType() {
    return this.getStringAttribute('s3_bucket_auth_type');
  }
  public set s3BucketAuthType(value: string) {
    this._s3BucketAuthType = value;
  }
  public resetS3BucketAuthType() {
    this._s3BucketAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketAuthTypeInput() {
    return this._s3BucketAuthType;
  }

  // sasl_mechanism - computed: true, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_plain_key - computed: false, optional: true, required: false
  private _saslPlainKey?: string; 
  public get saslPlainKey() {
    return this.getStringAttribute('sasl_plain_key');
  }
  public set saslPlainKey(value: string) {
    this._saslPlainKey = value;
  }
  public resetSaslPlainKey() {
    this._saslPlainKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPlainKeyInput() {
    return this._saslPlainKey;
  }

  // sasl_plain_secret - computed: false, optional: true, required: false
  private _saslPlainSecret?: string; 
  public get saslPlainSecret() {
    return this.getStringAttribute('sasl_plain_secret');
  }
  public set saslPlainSecret(value: string) {
    this._saslPlainSecret = value;
  }
  public resetSaslPlainSecret() {
    this._saslPlainSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPlainSecretInput() {
    return this._saslPlainSecret;
  }

  // schema_compatibility - computed: true, optional: true, required: false
  private _schemaCompatibility?: string; 
  public get schemaCompatibility() {
    return this.getStringAttribute('schema_compatibility');
  }
  public set schemaCompatibility(value: string) {
    this._schemaCompatibility = value;
  }
  public resetSchemaCompatibility() {
    this._schemaCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaCompatibilityInput() {
    return this._schemaCompatibility;
  }

  // schema_registry - computed: true, optional: true, required: false
  private _schemaRegistry?: string; 
  public get schemaRegistry() {
    return this.getStringAttribute('schema_registry');
  }
  public set schemaRegistry(value: string) {
    this._schemaRegistry = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry;
  }

  // schema_registry_api_key - computed: false, optional: true, required: false
  private _schemaRegistryApiKey?: string; 
  public get schemaRegistryApiKey() {
    return this.getStringAttribute('schema_registry_api_key');
  }
  public set schemaRegistryApiKey(value: string) {
    this._schemaRegistryApiKey = value;
  }
  public resetSchemaRegistryApiKey() {
    this._schemaRegistryApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryApiKeyInput() {
    return this._schemaRegistryApiKey;
  }

  // schema_registry_api_secret - computed: false, optional: true, required: false
  private _schemaRegistryApiSecret?: string; 
  public get schemaRegistryApiSecret() {
    return this.getStringAttribute('schema_registry_api_secret');
  }
  public set schemaRegistryApiSecret(value: string) {
    this._schemaRegistryApiSecret = value;
  }
  public resetSchemaRegistryApiSecret() {
    this._schemaRegistryApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryApiSecretInput() {
    return this._schemaRegistryApiSecret;
  }

  // schema_registry_url - computed: false, optional: true, required: false
  private _schemaRegistryUrl?: string; 
  public get schemaRegistryUrl() {
    return this.getStringAttribute('schema_registry_url');
  }
  public set schemaRegistryUrl(value: string) {
    this._schemaRegistryUrl = value;
  }
  public resetSchemaRegistryUrl() {
    this._schemaRegistryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUrlInput() {
    return this._schemaRegistryUrl;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // security_protocol - computed: true, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // server_host_name - computed: false, optional: true, required: false
  private _serverHostName?: string; 
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }
  public set serverHostName(value: string) {
    this._serverHostName = value;
  }
  public resetServerHostName() {
    this._serverHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostNameInput() {
    return this._serverHostName;
  }

  // should_maintain_tables_in_databricks - computed: true, optional: true, required: false
  private _shouldMaintainTablesInDatabricks?: boolean | cdktf.IResolvable; 
  public get shouldMaintainTablesInDatabricks() {
    return this.getBooleanAttribute('should_maintain_tables_in_databricks');
  }
  public set shouldMaintainTablesInDatabricks(value: boolean | cdktf.IResolvable) {
    this._shouldMaintainTablesInDatabricks = value;
  }
  public resetShouldMaintainTablesInDatabricks() {
    this._shouldMaintainTablesInDatabricks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldMaintainTablesInDatabricksInput() {
    return this._shouldMaintainTablesInDatabricks;
  }

  // should_maintain_tables_in_glue - computed: true, optional: true, required: false
  private _shouldMaintainTablesInGlue?: boolean | cdktf.IResolvable; 
  public get shouldMaintainTablesInGlue() {
    return this.getBooleanAttribute('should_maintain_tables_in_glue');
  }
  public set shouldMaintainTablesInGlue(value: boolean | cdktf.IResolvable) {
    this._shouldMaintainTablesInGlue = value;
  }
  public resetShouldMaintainTablesInGlue() {
    this._shouldMaintainTablesInGlue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldMaintainTablesInGlueInput() {
    return this._shouldMaintainTablesInGlue;
  }

  // snapshot_retention_period - computed: true, optional: true, required: false
  private _snapshotRetentionPeriod?: string; 
  public get snapshotRetentionPeriod() {
    return this.getStringAttribute('snapshot_retention_period');
  }
  public set snapshotRetentionPeriod(value: string) {
    this._snapshotRetentionPeriod = value;
  }
  public resetSnapshotRetentionPeriod() {
    this._snapshotRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionPeriodInput() {
    return this._snapshotRetentionPeriod;
  }

  // snowflake_cloud - computed: true, optional: true, required: false
  private _snowflakeCloud?: string; 
  public get snowflakeCloud() {
    return this.getStringAttribute('snowflake_cloud');
  }
  public set snowflakeCloud(value: string) {
    this._snowflakeCloud = value;
  }
  public resetSnowflakeCloud() {
    this._snowflakeCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeCloudInput() {
    return this._snowflakeCloud;
  }

  // snowflake_region - computed: false, optional: true, required: false
  private _snowflakeRegion?: string; 
  public get snowflakeRegion() {
    return this.getStringAttribute('snowflake_region');
  }
  public set snowflakeRegion(value: string) {
    this._snowflakeRegion = value;
  }
  public resetSnowflakeRegion() {
    this._snowflakeRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeRegionInput() {
    return this._snowflakeRegion;
  }

  // storage_account_key - computed: false, optional: true, required: false
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  public resetStorageAccountKey() {
    this._storageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // storage_provider - computed: true, optional: true, required: false
  private _storageProvider?: string; 
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
  public set storageProvider(value: string) {
    this._storageProvider = value;
  }
  public resetStorageProvider() {
    this._storageProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderInput() {
    return this._storageProvider;
  }

  // support_json_type - computed: true, optional: true, required: false
  private _supportJsonType?: boolean | cdktf.IResolvable; 
  public get supportJsonType() {
    return this.getBooleanAttribute('support_json_type');
  }
  public set supportJsonType(value: boolean | cdktf.IResolvable) {
    this._supportJsonType = value;
  }
  public resetSupportJsonType() {
    this._supportJsonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportJsonTypeInput() {
    return this._supportJsonType;
  }

  // table_format - computed: true, optional: true, required: false
  private _tableFormat?: string; 
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
  public set tableFormat(value: string) {
    this._tableFormat = value;
  }
  public resetTableFormat() {
    this._tableFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFormatInput() {
    return this._tableFormat;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tunnel_host - computed: false, optional: true, required: false
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  public resetTunnelHost() {
    this._tunnelHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: true, required: false
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  public resetTunnelUser() {
    this._tunnelUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }

  // use_customer_staging - computed: true, optional: true, required: false
  private _useCustomerStaging?: boolean | cdktf.IResolvable; 
  public get useCustomerStaging() {
    return this.getBooleanAttribute('use_customer_staging');
  }
  public set useCustomerStaging(value: boolean | cdktf.IResolvable) {
    this._useCustomerStaging = value;
  }
  public resetUseCustomerStaging() {
    this._useCustomerStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomerStagingInput() {
    return this._useCustomerStaging;
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

  // workspace_guid - computed: false, optional: true, required: false
  private _workspaceGuid?: string; 
  public get workspaceGuid() {
    return this.getStringAttribute('workspace_guid');
  }
  public set workspaceGuid(value: string) {
    this._workspaceGuid = value;
  }
  public resetWorkspaceGuid() {
    this._workspaceGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceGuidInput() {
    return this._workspaceGuid;
  }

  // workspace_name - computed: false, optional: true, required: false
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  public resetWorkspaceName() {
    this._workspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }
}
export interface DestinationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#create Destination#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#update Destination#update}
  */
  readonly update?: string;
}

export function destinationTimeoutsToTerraform(struct?: DestinationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function destinationTimeoutsToHclTerraform(struct?: DestinationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination fivetran_destination}
*/
export class Destination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Destination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Destination to import
  * @param importFromId The id of the existing Destination that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Destination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/resources/destination fivetran_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_destination',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.17',
        providerVersionConstraint: '1.9.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._daylightSavingTimeEnabled = config.daylightSavingTimeEnabled;
    this._groupId = config.groupId;
    this._hybridDeploymentAgentId = config.hybridDeploymentAgentId;
    this._networkingMethod = config.networkingMethod;
    this._privateLinkId = config.privateLinkId;
    this._region = config.region;
    this._runSetupTests = config.runSetupTests;
    this._service = config.service;
    this._timeZoneOffset = config.timeZoneOffset;
    this._trustCertificates = config.trustCertificates;
    this._trustFingerprints = config.trustFingerprints;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daylight_saving_time_enabled - computed: true, optional: true, required: false
  private _daylightSavingTimeEnabled?: boolean | cdktf.IResolvable; 
  public get daylightSavingTimeEnabled() {
    return this.getBooleanAttribute('daylight_saving_time_enabled');
  }
  public set daylightSavingTimeEnabled(value: boolean | cdktf.IResolvable) {
    this._daylightSavingTimeEnabled = value;
  }
  public resetDaylightSavingTimeEnabled() {
    this._daylightSavingTimeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daylightSavingTimeEnabledInput() {
    return this._daylightSavingTimeEnabled;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // hybrid_deployment_agent_id - computed: false, optional: true, required: false
  private _hybridDeploymentAgentId?: string; 
  public get hybridDeploymentAgentId() {
    return this.getStringAttribute('hybrid_deployment_agent_id');
  }
  public set hybridDeploymentAgentId(value: string) {
    this._hybridDeploymentAgentId = value;
  }
  public resetHybridDeploymentAgentId() {
    this._hybridDeploymentAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridDeploymentAgentIdInput() {
    return this._hybridDeploymentAgentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // networking_method - computed: true, optional: true, required: false
  private _networkingMethod?: string; 
  public get networkingMethod() {
    return this.getStringAttribute('networking_method');
  }
  public set networkingMethod(value: string) {
    this._networkingMethod = value;
  }
  public resetNetworkingMethod() {
    this._networkingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingMethodInput() {
    return this._networkingMethod;
  }

  // private_link_id - computed: false, optional: true, required: false
  private _privateLinkId?: string; 
  public get privateLinkId() {
    return this.getStringAttribute('private_link_id');
  }
  public set privateLinkId(value: string) {
    this._privateLinkId = value;
  }
  public resetPrivateLinkId() {
    this._privateLinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkIdInput() {
    return this._privateLinkId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // run_setup_tests - computed: true, optional: true, required: false
  private _runSetupTests?: boolean | cdktf.IResolvable; 
  public get runSetupTests() {
    return this.getBooleanAttribute('run_setup_tests');
  }
  public set runSetupTests(value: boolean | cdktf.IResolvable) {
    this._runSetupTests = value;
  }
  public resetRunSetupTests() {
    this._runSetupTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSetupTestsInput() {
    return this._runSetupTests;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // setup_status - computed: true, optional: false, required: false
  public get setupStatus() {
    return this.getStringAttribute('setup_status');
  }

  // time_zone_offset - computed: false, optional: false, required: true
  private _timeZoneOffset?: string; 
  public get timeZoneOffset() {
    return this.getStringAttribute('time_zone_offset');
  }
  public set timeZoneOffset(value: string) {
    this._timeZoneOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneOffsetInput() {
    return this._timeZoneOffset;
  }

  // trust_certificates - computed: true, optional: true, required: false
  private _trustCertificates?: boolean | cdktf.IResolvable; 
  public get trustCertificates() {
    return this.getBooleanAttribute('trust_certificates');
  }
  public set trustCertificates(value: boolean | cdktf.IResolvable) {
    this._trustCertificates = value;
  }
  public resetTrustCertificates() {
    this._trustCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustCertificatesInput() {
    return this._trustCertificates;
  }

  // trust_fingerprints - computed: true, optional: true, required: false
  private _trustFingerprints?: boolean | cdktf.IResolvable; 
  public get trustFingerprints() {
    return this.getBooleanAttribute('trust_fingerprints');
  }
  public set trustFingerprints(value: boolean | cdktf.IResolvable) {
    this._trustFingerprints = value;
  }
  public resetTrustFingerprints() {
    this._trustFingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustFingerprintsInput() {
    return this._trustFingerprints;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DestinationConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DestinationConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DestinationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DestinationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daylight_saving_time_enabled: cdktf.booleanToTerraform(this._daylightSavingTimeEnabled),
      group_id: cdktf.stringToTerraform(this._groupId),
      hybrid_deployment_agent_id: cdktf.stringToTerraform(this._hybridDeploymentAgentId),
      networking_method: cdktf.stringToTerraform(this._networkingMethod),
      private_link_id: cdktf.stringToTerraform(this._privateLinkId),
      region: cdktf.stringToTerraform(this._region),
      run_setup_tests: cdktf.booleanToTerraform(this._runSetupTests),
      service: cdktf.stringToTerraform(this._service),
      time_zone_offset: cdktf.stringToTerraform(this._timeZoneOffset),
      trust_certificates: cdktf.booleanToTerraform(this._trustCertificates),
      trust_fingerprints: cdktf.booleanToTerraform(this._trustFingerprints),
      config: destinationConfigAToTerraform(this._config.internalValue),
      timeouts: destinationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      daylight_saving_time_enabled: {
        value: cdktf.booleanToHclTerraform(this._daylightSavingTimeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hybrid_deployment_agent_id: {
        value: cdktf.stringToHclTerraform(this._hybridDeploymentAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networking_method: {
        value: cdktf.stringToHclTerraform(this._networkingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_link_id: {
        value: cdktf.stringToHclTerraform(this._privateLinkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_setup_tests: {
        value: cdktf.booleanToHclTerraform(this._runSetupTests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone_offset: {
        value: cdktf.stringToHclTerraform(this._timeZoneOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_certificates: {
        value: cdktf.booleanToHclTerraform(this._trustCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trust_fingerprints: {
        value: cdktf.booleanToHclTerraform(this._trustFingerprints),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config: {
        value: destinationConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationConfigA",
      },
      timeouts: {
        value: destinationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
