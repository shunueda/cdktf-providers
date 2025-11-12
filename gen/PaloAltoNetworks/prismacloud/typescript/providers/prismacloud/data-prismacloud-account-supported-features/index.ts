// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudAccountSupportedFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Cloud Account Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features#account_type DataPrismacloudAccountSupportedFeatures#account_type}
  */
  readonly accountType: string;
  /**
  * *Applicable only for cloud_type: **aws** on Prisma Government Stack(**app.gov.prismacloud.io**) given if the Cloud account Global Deployment option is enabled*
  * 
  *  * **us-east-1** -  AWS Commercial/Global account
  * 
  *  * **us-gov-west-1** - AWS GovCloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features#aws_partition DataPrismacloudAccountSupportedFeatures#aws_partition}
  */
  readonly awsPartition?: string;
  /**
  * Cloud Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features#cloud_type DataPrismacloudAccountSupportedFeatures#cloud_type}
  */
  readonly cloudType: string;
  /**
  * *Applicable only for cloud_type: **azure**.*
  * 
  *  * **azure** -  Account type is commercial
  * 
  *  * **azure_gov** - Account type is Government on Prisma Commercial and Government stacks.
  * 
  *  * **azure_china** - Prisma China Stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features#deployment_type DataPrismacloudAccountSupportedFeatures#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features#id DataPrismacloudAccountSupportedFeatures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features#root_sync_enabled DataPrismacloudAccountSupportedFeatures#root_sync_enabled}
  */
  readonly rootSyncEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features prismacloud_account_supported_features}
*/
export class DataPrismacloudAccountSupportedFeatures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_account_supported_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudAccountSupportedFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudAccountSupportedFeatures to import
  * @param importFromId The id of the existing DataPrismacloudAccountSupportedFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudAccountSupportedFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_account_supported_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/account_supported_features prismacloud_account_supported_features} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudAccountSupportedFeaturesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudAccountSupportedFeaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_account_supported_features',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountType = config.accountType;
    this._awsPartition = config.awsPartition;
    this._cloudType = config.cloudType;
    this._deploymentType = config.deploymentType;
    this._id = config.id;
    this._rootSyncEnabled = config.rootSyncEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_type - computed: false, optional: false, required: true
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // aws_partition - computed: false, optional: true, required: false
  private _awsPartition?: string; 
  public get awsPartition() {
    return this.getStringAttribute('aws_partition');
  }
  public set awsPartition(value: string) {
    this._awsPartition = value;
  }
  public resetAwsPartition() {
    this._awsPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPartitionInput() {
    return this._awsPartition;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // root_sync_enabled - computed: false, optional: true, required: false
  private _rootSyncEnabled?: boolean | cdktf.IResolvable; 
  public get rootSyncEnabled() {
    return this.getBooleanAttribute('root_sync_enabled');
  }
  public set rootSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._rootSyncEnabled = value;
  }
  public resetRootSyncEnabled() {
    this._rootSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSyncEnabledInput() {
    return this._rootSyncEnabled;
  }

  // supported_features - computed: true, optional: false, required: false
  public get supportedFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_features'));
  }

  // supported_features_all - computed: true, optional: false, required: false
  public get supportedFeaturesAll() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_features_all'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_type: cdktf.stringToTerraform(this._accountType),
      aws_partition: cdktf.stringToTerraform(this._awsPartition),
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      id: cdktf.stringToTerraform(this._id),
      root_sync_enabled: cdktf.booleanToTerraform(this._rootSyncEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_partition: {
        value: cdktf.stringToHclTerraform(this._awsPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
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
      root_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._rootSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
