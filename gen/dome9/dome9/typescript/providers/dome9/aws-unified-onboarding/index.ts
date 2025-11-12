// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsUnifiedOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#cloud_vendor AwsUnifiedOnboarding#cloud_vendor}
  */
  readonly cloudVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#enable_stack_modify AwsUnifiedOnboarding#enable_stack_modify}
  */
  readonly enableStackModify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#full_protection AwsUnifiedOnboarding#full_protection}
  */
  readonly fullProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#id AwsUnifiedOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#intelligence_configurations AwsUnifiedOnboarding#intelligence_configurations}
  */
  readonly intelligenceConfigurations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#onboard_type AwsUnifiedOnboarding#onboard_type}
  */
  readonly onboardType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#posture_management_configuration AwsUnifiedOnboarding#posture_management_configuration}
  */
  readonly postureManagementConfiguration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#serverless_configuration AwsUnifiedOnboarding#serverless_configuration}
  */
  readonly serverlessConfiguration?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding dome9_aws_unified_onboarding}
*/
export class AwsUnifiedOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_aws_unified_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsUnifiedOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsUnifiedOnboarding to import
  * @param importFromId The id of the existing AwsUnifiedOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsUnifiedOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_aws_unified_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_unified_onboarding dome9_aws_unified_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsUnifiedOnboardingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsUnifiedOnboardingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dome9_aws_unified_onboarding',
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
    this._cloudVendor = config.cloudVendor;
    this._enableStackModify = config.enableStackModify;
    this._fullProtection = config.fullProtection;
    this._id = config.id;
    this._intelligenceConfigurations = config.intelligenceConfigurations;
    this._onboardType = config.onboardType;
    this._postureManagementConfiguration = config.postureManagementConfiguration;
    this._serverlessConfiguration = config.serverlessConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_vendor - computed: false, optional: true, required: false
  private _cloudVendor?: string; 
  public get cloudVendor() {
    return this.getStringAttribute('cloud_vendor');
  }
  public set cloudVendor(value: string) {
    this._cloudVendor = value;
  }
  public resetCloudVendor() {
    this._cloudVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVendorInput() {
    return this._cloudVendor;
  }

  // enable_stack_modify - computed: false, optional: true, required: false
  private _enableStackModify?: boolean | cdktf.IResolvable; 
  public get enableStackModify() {
    return this.getBooleanAttribute('enable_stack_modify');
  }
  public set enableStackModify(value: boolean | cdktf.IResolvable) {
    this._enableStackModify = value;
  }
  public resetEnableStackModify() {
    this._enableStackModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackModifyInput() {
    return this._enableStackModify;
  }

  // full_protection - computed: false, optional: true, required: false
  private _fullProtection?: boolean | cdktf.IResolvable; 
  public get fullProtection() {
    return this.getBooleanAttribute('full_protection');
  }
  public set fullProtection(value: boolean | cdktf.IResolvable) {
    this._fullProtection = value;
  }
  public resetFullProtection() {
    this._fullProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProtectionInput() {
    return this._fullProtection;
  }

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

  // intelligence_configurations - computed: false, optional: true, required: false
  private _intelligenceConfigurations?: { [key: string]: string }; 
  public get intelligenceConfigurations() {
    return this.getStringMapAttribute('intelligence_configurations');
  }
  public set intelligenceConfigurations(value: { [key: string]: string }) {
    this._intelligenceConfigurations = value;
  }
  public resetIntelligenceConfigurations() {
    this._intelligenceConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceConfigurationsInput() {
    return this._intelligenceConfigurations;
  }

  // onboard_type - computed: false, optional: true, required: false
  private _onboardType?: string; 
  public get onboardType() {
    return this.getStringAttribute('onboard_type');
  }
  public set onboardType(value: string) {
    this._onboardType = value;
  }
  public resetOnboardType() {
    this._onboardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardTypeInput() {
    return this._onboardType;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // posture_management_configuration - computed: false, optional: true, required: false
  private _postureManagementConfiguration?: { [key: string]: string }; 
  public get postureManagementConfiguration() {
    return this.getStringMapAttribute('posture_management_configuration');
  }
  public set postureManagementConfiguration(value: { [key: string]: string }) {
    this._postureManagementConfiguration = value;
  }
  public resetPostureManagementConfiguration() {
    this._postureManagementConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postureManagementConfigurationInput() {
    return this._postureManagementConfiguration;
  }

  // serverless_configuration - computed: false, optional: true, required: false
  private _serverlessConfiguration?: { [key: string]: string }; 
  public get serverlessConfiguration() {
    return this.getStringMapAttribute('serverless_configuration');
  }
  public set serverlessConfiguration(value: { [key: string]: string }) {
    this._serverlessConfiguration = value;
  }
  public resetServerlessConfiguration() {
    this._serverlessConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigurationInput() {
    return this._serverlessConfiguration;
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
      cloud_vendor: cdktf.stringToTerraform(this._cloudVendor),
      enable_stack_modify: cdktf.booleanToTerraform(this._enableStackModify),
      full_protection: cdktf.booleanToTerraform(this._fullProtection),
      id: cdktf.stringToTerraform(this._id),
      intelligence_configurations: cdktf.hashMapper(cdktf.stringToTerraform)(this._intelligenceConfigurations),
      onboard_type: cdktf.stringToTerraform(this._onboardType),
      posture_management_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._postureManagementConfiguration),
      serverless_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._serverlessConfiguration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_vendor: {
        value: cdktf.stringToHclTerraform(this._cloudVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_stack_modify: {
        value: cdktf.booleanToHclTerraform(this._enableStackModify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_protection: {
        value: cdktf.booleanToHclTerraform(this._fullProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intelligence_configurations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._intelligenceConfigurations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      onboard_type: {
        value: cdktf.stringToHclTerraform(this._onboardType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posture_management_configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._postureManagementConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      serverless_configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._serverlessConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
