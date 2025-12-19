// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostProcessAwsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the AWS account to be linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#account_id PostProcessAwsConnection#account_id}
  */
  readonly accountId: string;
  /**
  * Clumio Event Pub SNS topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#clumio_event_pub_id PostProcessAwsConnection#clumio_event_pub_id}
  */
  readonly clumioEventPubId: string;
  /**
  * Clumio Config version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#config_version PostProcessAwsConnection#config_version}
  */
  readonly configVersion: string;
  /**
  * Clumio Discover version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#discover_version PostProcessAwsConnection#discover_version}
  */
  readonly discoverVersion?: string;
  /**
  * Intermediate Role arn to be assumed before accessing ClumioRole in customer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#intermediate_role_arn PostProcessAwsConnection#intermediate_role_arn}
  */
  readonly intermediateRoleArn?: string;
  /**
  * A map to pass in additional information to be consumed by Clumio Post Processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#properties PostProcessAwsConnection#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Clumio Protect Config version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_config_version PostProcessAwsConnection#protect_config_version}
  */
  readonly protectConfigVersion?: string;
  /**
  * Clumio DynamoDB Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_dynamodb_version PostProcessAwsConnection#protect_dynamodb_version}
  */
  readonly protectDynamodbVersion?: string;
  /**
  * Clumio EBS Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_ebs_version PostProcessAwsConnection#protect_ebs_version}
  */
  readonly protectEbsVersion?: string;
  /**
  * Clumio EC2 MSSQL Protect version. This feature is only available for legacy connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_ec2_mssql_version PostProcessAwsConnection#protect_ec2_mssql_version}
  */
  readonly protectEc2MssqlVersion?: string;
  /**
  * Clumio Iceberg on Glue Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_iceberg_on_glue_version PostProcessAwsConnection#protect_iceberg_on_glue_version}
  */
  readonly protectIcebergOnGlueVersion?: string;
  /**
  * Clumio Iceberg on S3 Table Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_iceberg_on_s3_tables_version PostProcessAwsConnection#protect_iceberg_on_s3_tables_version}
  */
  readonly protectIcebergOnS3TablesVersion?: string;
  /**
  * Clumio RDS Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_rds_version PostProcessAwsConnection#protect_rds_version}
  */
  readonly protectRdsVersion?: string;
  /**
  * Clumio S3 Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_s3_version PostProcessAwsConnection#protect_s3_version}
  */
  readonly protectS3Version?: string;
  /**
  * Clumio DynamoDB Warm Tier Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_warm_tier_dynamodb_version PostProcessAwsConnection#protect_warm_tier_dynamodb_version}
  */
  readonly protectWarmTierDynamodbVersion?: string;
  /**
  * Clumio Warm Tier Protect version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#protect_warm_tier_version PostProcessAwsConnection#protect_warm_tier_version}
  */
  readonly protectWarmTierVersion?: string;
  /**
  * Region of the AWS account to be linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#region PostProcessAwsConnection#region}
  */
  readonly region: string;
  /**
  * ARN of the role which allows Clumio to access the linked account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#role_arn PostProcessAwsConnection#role_arn}
  */
  readonly roleArn: string;
  /**
  * Unique identifier Clumio uses to access the service role within your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#role_external_id PostProcessAwsConnection#role_external_id}
  */
  readonly roleExternalId: string;
  /**
  * Distinct 36-character token used to identify resources set up by the Clumio AWS template installation on the account being connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#token PostProcessAwsConnection#token}
  */
  readonly token: string;
  /**
  * Wait for the data plane resources to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#wait_for_data_plane_resources PostProcessAwsConnection#wait_for_data_plane_resources}
  */
  readonly waitForDataPlaneResources?: boolean | cdktf.IResolvable;
  /**
  * Wait for the AWS connection ingestion task to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#wait_for_ingestion PostProcessAwsConnection#wait_for_ingestion}
  */
  readonly waitForIngestion?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection clumio_post_process_aws_connection}
*/
export class PostProcessAwsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_post_process_aws_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostProcessAwsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostProcessAwsConnection to import
  * @param importFromId The id of the existing PostProcessAwsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostProcessAwsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_post_process_aws_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/post_process_aws_connection clumio_post_process_aws_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostProcessAwsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: PostProcessAwsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_post_process_aws_connection',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._clumioEventPubId = config.clumioEventPubId;
    this._configVersion = config.configVersion;
    this._discoverVersion = config.discoverVersion;
    this._intermediateRoleArn = config.intermediateRoleArn;
    this._properties = config.properties;
    this._protectConfigVersion = config.protectConfigVersion;
    this._protectDynamodbVersion = config.protectDynamodbVersion;
    this._protectEbsVersion = config.protectEbsVersion;
    this._protectEc2MssqlVersion = config.protectEc2MssqlVersion;
    this._protectIcebergOnGlueVersion = config.protectIcebergOnGlueVersion;
    this._protectIcebergOnS3TablesVersion = config.protectIcebergOnS3TablesVersion;
    this._protectRdsVersion = config.protectRdsVersion;
    this._protectS3Version = config.protectS3Version;
    this._protectWarmTierDynamodbVersion = config.protectWarmTierDynamodbVersion;
    this._protectWarmTierVersion = config.protectWarmTierVersion;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._roleExternalId = config.roleExternalId;
    this._token = config.token;
    this._waitForDataPlaneResources = config.waitForDataPlaneResources;
    this._waitForIngestion = config.waitForIngestion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // clumio_event_pub_id - computed: false, optional: false, required: true
  private _clumioEventPubId?: string; 
  public get clumioEventPubId() {
    return this.getStringAttribute('clumio_event_pub_id');
  }
  public set clumioEventPubId(value: string) {
    this._clumioEventPubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioEventPubIdInput() {
    return this._clumioEventPubId;
  }

  // config_version - computed: false, optional: false, required: true
  private _configVersion?: string; 
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }
  public set configVersion(value: string) {
    this._configVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionInput() {
    return this._configVersion;
  }

  // discover_version - computed: false, optional: true, required: false
  private _discoverVersion?: string; 
  public get discoverVersion() {
    return this.getStringAttribute('discover_version');
  }
  public set discoverVersion(value: string) {
    this._discoverVersion = value;
  }
  public resetDiscoverVersion() {
    this._discoverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverVersionInput() {
    return this._discoverVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intermediate_role_arn - computed: false, optional: true, required: false
  private _intermediateRoleArn?: string; 
  public get intermediateRoleArn() {
    return this.getStringAttribute('intermediate_role_arn');
  }
  public set intermediateRoleArn(value: string) {
    this._intermediateRoleArn = value;
  }
  public resetIntermediateRoleArn() {
    this._intermediateRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateRoleArnInput() {
    return this._intermediateRoleArn;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // protect_config_version - computed: false, optional: true, required: false
  private _protectConfigVersion?: string; 
  public get protectConfigVersion() {
    return this.getStringAttribute('protect_config_version');
  }
  public set protectConfigVersion(value: string) {
    this._protectConfigVersion = value;
  }
  public resetProtectConfigVersion() {
    this._protectConfigVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectConfigVersionInput() {
    return this._protectConfigVersion;
  }

  // protect_dynamodb_version - computed: false, optional: true, required: false
  private _protectDynamodbVersion?: string; 
  public get protectDynamodbVersion() {
    return this.getStringAttribute('protect_dynamodb_version');
  }
  public set protectDynamodbVersion(value: string) {
    this._protectDynamodbVersion = value;
  }
  public resetProtectDynamodbVersion() {
    this._protectDynamodbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectDynamodbVersionInput() {
    return this._protectDynamodbVersion;
  }

  // protect_ebs_version - computed: false, optional: true, required: false
  private _protectEbsVersion?: string; 
  public get protectEbsVersion() {
    return this.getStringAttribute('protect_ebs_version');
  }
  public set protectEbsVersion(value: string) {
    this._protectEbsVersion = value;
  }
  public resetProtectEbsVersion() {
    this._protectEbsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectEbsVersionInput() {
    return this._protectEbsVersion;
  }

  // protect_ec2_mssql_version - computed: false, optional: true, required: false
  private _protectEc2MssqlVersion?: string; 
  public get protectEc2MssqlVersion() {
    return this.getStringAttribute('protect_ec2_mssql_version');
  }
  public set protectEc2MssqlVersion(value: string) {
    this._protectEc2MssqlVersion = value;
  }
  public resetProtectEc2MssqlVersion() {
    this._protectEc2MssqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectEc2MssqlVersionInput() {
    return this._protectEc2MssqlVersion;
  }

  // protect_iceberg_on_glue_version - computed: false, optional: true, required: false
  private _protectIcebergOnGlueVersion?: string; 
  public get protectIcebergOnGlueVersion() {
    return this.getStringAttribute('protect_iceberg_on_glue_version');
  }
  public set protectIcebergOnGlueVersion(value: string) {
    this._protectIcebergOnGlueVersion = value;
  }
  public resetProtectIcebergOnGlueVersion() {
    this._protectIcebergOnGlueVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectIcebergOnGlueVersionInput() {
    return this._protectIcebergOnGlueVersion;
  }

  // protect_iceberg_on_s3_tables_version - computed: false, optional: true, required: false
  private _protectIcebergOnS3TablesVersion?: string; 
  public get protectIcebergOnS3TablesVersion() {
    return this.getStringAttribute('protect_iceberg_on_s3_tables_version');
  }
  public set protectIcebergOnS3TablesVersion(value: string) {
    this._protectIcebergOnS3TablesVersion = value;
  }
  public resetProtectIcebergOnS3TablesVersion() {
    this._protectIcebergOnS3TablesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectIcebergOnS3TablesVersionInput() {
    return this._protectIcebergOnS3TablesVersion;
  }

  // protect_rds_version - computed: false, optional: true, required: false
  private _protectRdsVersion?: string; 
  public get protectRdsVersion() {
    return this.getStringAttribute('protect_rds_version');
  }
  public set protectRdsVersion(value: string) {
    this._protectRdsVersion = value;
  }
  public resetProtectRdsVersion() {
    this._protectRdsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectRdsVersionInput() {
    return this._protectRdsVersion;
  }

  // protect_s3_version - computed: false, optional: true, required: false
  private _protectS3Version?: string; 
  public get protectS3Version() {
    return this.getStringAttribute('protect_s3_version');
  }
  public set protectS3Version(value: string) {
    this._protectS3Version = value;
  }
  public resetProtectS3Version() {
    this._protectS3Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectS3VersionInput() {
    return this._protectS3Version;
  }

  // protect_warm_tier_dynamodb_version - computed: false, optional: true, required: false
  private _protectWarmTierDynamodbVersion?: string; 
  public get protectWarmTierDynamodbVersion() {
    return this.getStringAttribute('protect_warm_tier_dynamodb_version');
  }
  public set protectWarmTierDynamodbVersion(value: string) {
    this._protectWarmTierDynamodbVersion = value;
  }
  public resetProtectWarmTierDynamodbVersion() {
    this._protectWarmTierDynamodbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectWarmTierDynamodbVersionInput() {
    return this._protectWarmTierDynamodbVersion;
  }

  // protect_warm_tier_version - computed: false, optional: true, required: false
  private _protectWarmTierVersion?: string; 
  public get protectWarmTierVersion() {
    return this.getStringAttribute('protect_warm_tier_version');
  }
  public set protectWarmTierVersion(value: string) {
    this._protectWarmTierVersion = value;
  }
  public resetProtectWarmTierVersion() {
    this._protectWarmTierVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectWarmTierVersionInput() {
    return this._protectWarmTierVersion;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_external_id - computed: false, optional: false, required: true
  private _roleExternalId?: string; 
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }
  public set roleExternalId(value: string) {
    this._roleExternalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleExternalIdInput() {
    return this._roleExternalId;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // wait_for_data_plane_resources - computed: false, optional: true, required: false
  private _waitForDataPlaneResources?: boolean | cdktf.IResolvable; 
  public get waitForDataPlaneResources() {
    return this.getBooleanAttribute('wait_for_data_plane_resources');
  }
  public set waitForDataPlaneResources(value: boolean | cdktf.IResolvable) {
    this._waitForDataPlaneResources = value;
  }
  public resetWaitForDataPlaneResources() {
    this._waitForDataPlaneResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDataPlaneResourcesInput() {
    return this._waitForDataPlaneResources;
  }

  // wait_for_ingestion - computed: false, optional: true, required: false
  private _waitForIngestion?: boolean | cdktf.IResolvable; 
  public get waitForIngestion() {
    return this.getBooleanAttribute('wait_for_ingestion');
  }
  public set waitForIngestion(value: boolean | cdktf.IResolvable) {
    this._waitForIngestion = value;
  }
  public resetWaitForIngestion() {
    this._waitForIngestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForIngestionInput() {
    return this._waitForIngestion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      clumio_event_pub_id: cdktf.stringToTerraform(this._clumioEventPubId),
      config_version: cdktf.stringToTerraform(this._configVersion),
      discover_version: cdktf.stringToTerraform(this._discoverVersion),
      intermediate_role_arn: cdktf.stringToTerraform(this._intermediateRoleArn),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      protect_config_version: cdktf.stringToTerraform(this._protectConfigVersion),
      protect_dynamodb_version: cdktf.stringToTerraform(this._protectDynamodbVersion),
      protect_ebs_version: cdktf.stringToTerraform(this._protectEbsVersion),
      protect_ec2_mssql_version: cdktf.stringToTerraform(this._protectEc2MssqlVersion),
      protect_iceberg_on_glue_version: cdktf.stringToTerraform(this._protectIcebergOnGlueVersion),
      protect_iceberg_on_s3_tables_version: cdktf.stringToTerraform(this._protectIcebergOnS3TablesVersion),
      protect_rds_version: cdktf.stringToTerraform(this._protectRdsVersion),
      protect_s3_version: cdktf.stringToTerraform(this._protectS3Version),
      protect_warm_tier_dynamodb_version: cdktf.stringToTerraform(this._protectWarmTierDynamodbVersion),
      protect_warm_tier_version: cdktf.stringToTerraform(this._protectWarmTierVersion),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      role_external_id: cdktf.stringToTerraform(this._roleExternalId),
      token: cdktf.stringToTerraform(this._token),
      wait_for_data_plane_resources: cdktf.booleanToTerraform(this._waitForDataPlaneResources),
      wait_for_ingestion: cdktf.booleanToTerraform(this._waitForIngestion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clumio_event_pub_id: {
        value: cdktf.stringToHclTerraform(this._clumioEventPubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_version: {
        value: cdktf.stringToHclTerraform(this._configVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discover_version: {
        value: cdktf.stringToHclTerraform(this._discoverVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intermediate_role_arn: {
        value: cdktf.stringToHclTerraform(this._intermediateRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      protect_config_version: {
        value: cdktf.stringToHclTerraform(this._protectConfigVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_dynamodb_version: {
        value: cdktf.stringToHclTerraform(this._protectDynamodbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_ebs_version: {
        value: cdktf.stringToHclTerraform(this._protectEbsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_ec2_mssql_version: {
        value: cdktf.stringToHclTerraform(this._protectEc2MssqlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_iceberg_on_glue_version: {
        value: cdktf.stringToHclTerraform(this._protectIcebergOnGlueVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_iceberg_on_s3_tables_version: {
        value: cdktf.stringToHclTerraform(this._protectIcebergOnS3TablesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_rds_version: {
        value: cdktf.stringToHclTerraform(this._protectRdsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_s3_version: {
        value: cdktf.stringToHclTerraform(this._protectS3Version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_warm_tier_dynamodb_version: {
        value: cdktf.stringToHclTerraform(this._protectWarmTierDynamodbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_warm_tier_version: {
        value: cdktf.stringToHclTerraform(this._protectWarmTierVersion),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_external_id: {
        value: cdktf.stringToHclTerraform(this._roleExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_data_plane_resources: {
        value: cdktf.booleanToHclTerraform(this._waitForDataPlaneResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_ingestion: {
        value: cdktf.booleanToHclTerraform(this._waitForIngestion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
