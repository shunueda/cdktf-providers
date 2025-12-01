// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the destination within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/destination#id DataFivetranDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataFivetranDestinationConfigA {
}

export function dataFivetranDestinationConfigAToTerraform(struct?: DataFivetranDestinationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranDestinationConfigAToHclTerraform(struct?: DataFivetranDestinationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranDestinationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranDestinationConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranDestinationConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // always_encrypted - computed: true, optional: false, required: false
  public get alwaysEncrypted() {
    return this.getBooleanAttribute('always_encrypted');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.getStringAttribute('auth');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_bucket_auth_type - computed: true, optional: false, required: false
  public get awsBucketAuthType() {
    return this.getStringAttribute('aws_bucket_auth_type');
  }

  // aws_secret_access_key - computed: true, optional: false, required: false
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }

  // azure_storage_account_auth_type - computed: true, optional: false, required: false
  public get azureStorageAccountAuthType() {
    return this.getStringAttribute('azure_storage_account_auth_type');
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return cdktf.Fn.tolist(this.getListAttribute('bootstrap_servers'));
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // bucket_region - computed: true, optional: false, required: false
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_region - computed: true, optional: false, required: false
  public get clusterRegion() {
    return this.getStringAttribute('cluster_region');
  }

  // connection_method - computed: true, optional: false, required: false
  public get connectionMethod() {
    return this.getStringAttribute('connection_method');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // controller_id - computed: true, optional: false, required: false
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }

  // create_external_tables - computed: true, optional: false, required: false
  public get createExternalTables() {
    return this.getBooleanAttribute('create_external_tables');
  }

  // create_external_volumes - computed: true, optional: false, required: false
  public get createExternalVolumes() {
    return this.getBooleanAttribute('create_external_volumes');
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // data_set_location - computed: true, optional: false, required: false
  public get dataSetLocation() {
    return this.getStringAttribute('data_set_location');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // databricks_connection_type - computed: true, optional: false, required: false
  public get databricksConnectionType() {
    return this.getStringAttribute('databricks_connection_type');
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // disable_vacuum - computed: true, optional: false, required: false
  public get disableVacuum() {
    return this.getBooleanAttribute('disable_vacuum');
  }

  // enable_external_storage_for_unstructured_files - computed: true, optional: false, required: false
  public get enableExternalStorageForUnstructuredFiles() {
    return this.getBooleanAttribute('enable_external_storage_for_unstructured_files');
  }

  // enable_remote_execution - computed: true, optional: false, required: false
  public get enableRemoteExecution() {
    return this.getBooleanAttribute('enable_remote_execution');
  }

  // enable_single_topic - computed: true, optional: false, required: false
  public get enableSingleTopic() {
    return this.getBooleanAttribute('enable_single_topic');
  }

  // enable_super_type - computed: true, optional: false, required: false
  public get enableSuperType() {
    return this.getBooleanAttribute('enable_super_type');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // external_location - computed: true, optional: false, required: false
  public get externalLocation() {
    return this.getStringAttribute('external_location');
  }

  // external_stage_storage_provider - computed: true, optional: false, required: false
  public get externalStageStorageProvider() {
    return this.getStringAttribute('external_stage_storage_provider');
  }

  // external_storage_cloud_provider - computed: true, optional: false, required: false
  public get externalStorageCloudProvider() {
    return this.getStringAttribute('external_storage_cloud_provider');
  }

  // external_storage_integration - computed: true, optional: false, required: false
  public get externalStorageIntegration() {
    return this.getStringAttribute('external_storage_integration');
  }

  // external_storage_parent_folder_uri - computed: true, optional: false, required: false
  public get externalStorageParentFolderUri() {
    return this.getStringAttribute('external_storage_parent_folder_uri');
  }

  // external_volume_location - computed: true, optional: false, required: false
  public get externalVolumeLocation() {
    return this.getStringAttribute('external_volume_location');
  }

  // fivetran_glue_role_arn - computed: true, optional: false, required: false
  public get fivetranGlueRoleArn() {
    return this.getStringAttribute('fivetran_glue_role_arn');
  }

  // fivetran_msk_role_arn - computed: true, optional: false, required: false
  public get fivetranMskRoleArn() {
    return this.getStringAttribute('fivetran_msk_role_arn');
  }

  // fivetran_role_arn - computed: true, optional: false, required: false
  public get fivetranRoleArn() {
    return this.getStringAttribute('fivetran_role_arn');
  }

  // gcs_service_account_credentials_path - computed: true, optional: false, required: false
  public get gcsServiceAccountCredentialsPath() {
    return this.getStringAttribute('gcs_service_account_credentials_path');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_path - computed: true, optional: false, required: false
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }

  // is_private_key_encrypted - computed: true, optional: false, required: false
  public get isPrivateKeyEncrypted() {
    return this.getBooleanAttribute('is_private_key_encrypted');
  }

  // is_private_link_required - computed: true, optional: false, required: false
  public get isPrivateLinkRequired() {
    return this.getBooleanAttribute('is_private_link_required');
  }

  // is_redshift_serverless - computed: true, optional: false, required: false
  public get isRedshiftServerless() {
    return this.getBooleanAttribute('is_redshift_serverless');
  }

  // lakehouse_guid - computed: true, optional: false, required: false
  public get lakehouseGuid() {
    return this.getStringAttribute('lakehouse_guid');
  }

  // lakehouse_name - computed: true, optional: false, required: false
  public get lakehouseName() {
    return this.getStringAttribute('lakehouse_name');
  }

  // msk_sts_region - computed: true, optional: false, required: false
  public get mskStsRegion() {
    return this.getStringAttribute('msk_sts_region');
  }

  // num_of_partitions - computed: true, optional: false, required: false
  public get numOfPartitions() {
    return this.getNumberAttribute('num_of_partitions');
  }

  // oauth2_client_id - computed: true, optional: false, required: false
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }

  // oauth2_secret - computed: true, optional: false, required: false
  public get oauth2Secret() {
    return this.getStringAttribute('oauth2_secret');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // personal_access_token - computed: true, optional: false, required: false
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // prefix_path - computed: true, optional: false, required: false
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // registry_name - computed: true, optional: false, required: false
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // registry_sts_region - computed: true, optional: false, required: false
  public get registryStsRegion() {
    return this.getStringAttribute('registry_sts_region');
  }

  // replication_factor - computed: true, optional: false, required: false
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_bucket_auth_type - computed: true, optional: false, required: false
  public get s3BucketAuthType() {
    return this.getStringAttribute('s3_bucket_auth_type');
  }

  // sasl_mechanism - computed: true, optional: false, required: false
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }

  // sasl_plain_key - computed: true, optional: false, required: false
  public get saslPlainKey() {
    return this.getStringAttribute('sasl_plain_key');
  }

  // sasl_plain_secret - computed: true, optional: false, required: false
  public get saslPlainSecret() {
    return this.getStringAttribute('sasl_plain_secret');
  }

  // schema_compatibility - computed: true, optional: false, required: false
  public get schemaCompatibility() {
    return this.getStringAttribute('schema_compatibility');
  }

  // schema_registry - computed: true, optional: false, required: false
  public get schemaRegistry() {
    return this.getStringAttribute('schema_registry');
  }

  // schema_registry_api_key - computed: true, optional: false, required: false
  public get schemaRegistryApiKey() {
    return this.getStringAttribute('schema_registry_api_key');
  }

  // schema_registry_api_secret - computed: true, optional: false, required: false
  public get schemaRegistryApiSecret() {
    return this.getStringAttribute('schema_registry_api_secret');
  }

  // schema_registry_url - computed: true, optional: false, required: false
  public get schemaRegistryUrl() {
    return this.getStringAttribute('schema_registry_url');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // secret_value - computed: true, optional: false, required: false
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }

  // server_host_name - computed: true, optional: false, required: false
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }

  // should_maintain_tables_in_databricks - computed: true, optional: false, required: false
  public get shouldMaintainTablesInDatabricks() {
    return this.getBooleanAttribute('should_maintain_tables_in_databricks');
  }

  // should_maintain_tables_in_glue - computed: true, optional: false, required: false
  public get shouldMaintainTablesInGlue() {
    return this.getBooleanAttribute('should_maintain_tables_in_glue');
  }

  // snapshot_retention_period - computed: true, optional: false, required: false
  public get snapshotRetentionPeriod() {
    return this.getStringAttribute('snapshot_retention_period');
  }

  // snowflake_cloud - computed: true, optional: false, required: false
  public get snowflakeCloud() {
    return this.getStringAttribute('snowflake_cloud');
  }

  // snowflake_region - computed: true, optional: false, required: false
  public get snowflakeRegion() {
    return this.getStringAttribute('snowflake_region');
  }

  // storage_account_key - computed: true, optional: false, required: false
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }

  // storage_account_name - computed: true, optional: false, required: false
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }

  // storage_provider - computed: true, optional: false, required: false
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }

  // support_json_type - computed: true, optional: false, required: false
  public get supportJsonType() {
    return this.getBooleanAttribute('support_json_type');
  }

  // table_format - computed: true, optional: false, required: false
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tunnel_host - computed: true, optional: false, required: false
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }

  // tunnel_port - computed: true, optional: false, required: false
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }

  // tunnel_user - computed: true, optional: false, required: false
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }

  // use_customer_staging - computed: true, optional: false, required: false
  public get useCustomerStaging() {
    return this.getBooleanAttribute('use_customer_staging');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // workspace_guid - computed: true, optional: false, required: false
  public get workspaceGuid() {
    return this.getStringAttribute('workspace_guid');
  }

  // workspace_name - computed: true, optional: false, required: false
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/destination fivetran_destination}
*/
export class DataFivetranDestination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranDestination to import
  * @param importFromId The id of the existing DataFivetranDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/destination fivetran_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_destination',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daylight_saving_time_enabled - computed: true, optional: false, required: false
  public get daylightSavingTimeEnabled() {
    return this.getBooleanAttribute('daylight_saving_time_enabled');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // hybrid_deployment_agent_id - computed: true, optional: false, required: false
  public get hybridDeploymentAgentId() {
    return this.getStringAttribute('hybrid_deployment_agent_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // networking_method - computed: true, optional: false, required: false
  public get networkingMethod() {
    return this.getStringAttribute('networking_method');
  }

  // private_link_id - computed: true, optional: false, required: false
  public get privateLinkId() {
    return this.getStringAttribute('private_link_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // setup_status - computed: true, optional: false, required: false
  public get setupStatus() {
    return this.getStringAttribute('setup_status');
  }

  // time_zone_offset - computed: true, optional: false, required: false
  public get timeZoneOffset() {
    return this.getStringAttribute('time_zone_offset');
  }

  // config - computed: false, optional: false, required: false
  private _config = new DataFivetranDestinationConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
