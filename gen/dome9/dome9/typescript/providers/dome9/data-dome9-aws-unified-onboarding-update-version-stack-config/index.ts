// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding_update_version_stack_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9AwsUnifiedOnboardingUpdateVersionStackConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding_update_version_stack_config#id DataDome9AwsUnifiedOnboardingUpdateVersionStackConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding_update_version_stack_config#onboarding_id DataDome9AwsUnifiedOnboardingUpdateVersionStackConfig#onboarding_id}
  */
  readonly onboardingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding_update_version_stack_config dome9_aws_unified_onboarding_update_version_stack_config}
*/
export class DataDome9AwsUnifiedOnboardingUpdateVersionStackConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_aws_unified_onboarding_update_version_stack_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9AwsUnifiedOnboardingUpdateVersionStackConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9AwsUnifiedOnboardingUpdateVersionStackConfig to import
  * @param importFromId The id of the existing DataDome9AwsUnifiedOnboardingUpdateVersionStackConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding_update_version_stack_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9AwsUnifiedOnboardingUpdateVersionStackConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_aws_unified_onboarding_update_version_stack_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding_update_version_stack_config dome9_aws_unified_onboarding_update_version_stack_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9AwsUnifiedOnboardingUpdateVersionStackConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9AwsUnifiedOnboardingUpdateVersionStackConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_aws_unified_onboarding_update_version_stack_config',
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
    this._id = config.id;
    this._onboardingId = config.onboardingId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_capabilities - computed: true, optional: false, required: false
  public get iamCapabilities() {
    return this.getListAttribute('iam_capabilities');
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

  // onboarding_id - computed: false, optional: false, required: true
  private _onboardingId?: string; 
  public get onboardingId() {
    return this.getStringAttribute('onboarding_id');
  }
  public set onboardingId(value: string) {
    this._onboardingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingIdInput() {
    return this._onboardingId;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // stack_name - computed: true, optional: false, required: false
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      onboarding_id: cdktf.stringToTerraform(this._onboardingId),
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
      onboarding_id: {
        value: cdktf.stringToHclTerraform(this._onboardingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
