// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_aws_onboarding_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9AwpAwsOnboardingDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_aws_onboarding_data#cloud_account_id DataDome9AwpAwsOnboardingData#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_aws_onboarding_data#id DataDome9AwpAwsOnboardingData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_aws_onboarding_data dome9_awp_aws_onboarding_data}
*/
export class DataDome9AwpAwsOnboardingData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_awp_aws_onboarding_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9AwpAwsOnboardingData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9AwpAwsOnboardingData to import
  * @param importFromId The id of the existing DataDome9AwpAwsOnboardingData that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_aws_onboarding_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9AwpAwsOnboardingData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_awp_aws_onboarding_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/awp_aws_onboarding_data dome9_awp_aws_onboarding_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9AwpAwsOnboardingDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9AwpAwsOnboardingDataConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_awp_aws_onboarding_data',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4',
        providerVersionConstraint: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudAccountId = config.cloudAccountId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agentless_bucket_name - computed: true, optional: false, required: false
  public get agentlessBucketName() {
    return this.getStringAttribute('agentless_bucket_name');
  }

  // awp_client_side_security_group_name - computed: true, optional: false, required: false
  public get awpClientSideSecurityGroupName() {
    return this.getStringAttribute('awp_client_side_security_group_name');
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // cloud_guard_backend_account_id - computed: true, optional: false, required: false
  public get cloudGuardBackendAccountId() {
    return this.getStringAttribute('cloud_guard_backend_account_id');
  }

  // cross_account_role_external_id - computed: true, optional: false, required: false
  public get crossAccountRoleExternalId() {
    return this.getStringAttribute('cross_account_role_external_id');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // remote_functions_prefix_key - computed: true, optional: false, required: false
  public get remoteFunctionsPrefixKey() {
    return this.getStringAttribute('remote_functions_prefix_key');
  }

  // remote_snapshots_utils_function_name - computed: true, optional: false, required: false
  public get remoteSnapshotsUtilsFunctionName() {
    return this.getStringAttribute('remote_snapshots_utils_function_name');
  }

  // remote_snapshots_utils_function_run_time - computed: true, optional: false, required: false
  public get remoteSnapshotsUtilsFunctionRunTime() {
    return this.getStringAttribute('remote_snapshots_utils_function_run_time');
  }

  // remote_snapshots_utils_function_s3_pre_signed_url - computed: true, optional: false, required: false
  public get remoteSnapshotsUtilsFunctionS3PreSignedUrl() {
    return this.getStringAttribute('remote_snapshots_utils_function_s3_pre_signed_url');
  }

  // remote_snapshots_utils_function_time_out - computed: true, optional: false, required: false
  public get remoteSnapshotsUtilsFunctionTimeOut() {
    return this.getNumberAttribute('remote_snapshots_utils_function_time_out');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
