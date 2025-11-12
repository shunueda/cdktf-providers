// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsOrganizationOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#api_key AwsOrganizationOnboarding#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#aws_organization_name AwsOrganizationOnboarding#aws_organization_name}
  */
  readonly awsOrganizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#enable_stack_modify AwsOrganizationOnboarding#enable_stack_modify}
  */
  readonly enableStackModify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#id AwsOrganizationOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#role_arn AwsOrganizationOnboarding#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#secret AwsOrganizationOnboarding#secret}
  */
  readonly secret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#stack_set_arn AwsOrganizationOnboarding#stack_set_arn}
  */
  readonly stackSetArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#type AwsOrganizationOnboarding#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding dome9_aws_organization_onboarding}
*/
export class AwsOrganizationOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_aws_organization_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsOrganizationOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsOrganizationOnboarding to import
  * @param importFromId The id of the existing AwsOrganizationOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsOrganizationOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_aws_organization_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/aws_organization_onboarding dome9_aws_organization_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsOrganizationOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: AwsOrganizationOnboardingConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_aws_organization_onboarding',
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
    this._apiKey = config.apiKey;
    this._awsOrganizationName = config.awsOrganizationName;
    this._enableStackModify = config.enableStackModify;
    this._id = config.id;
    this._roleArn = config.roleArn;
    this._secret = config.secret;
    this._stackSetArn = config.stackSetArn;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
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

  // aws_organization_name - computed: false, optional: true, required: false
  private _awsOrganizationName?: string; 
  public get awsOrganizationName() {
    return this.getStringAttribute('aws_organization_name');
  }
  public set awsOrganizationName(value: string) {
    this._awsOrganizationName = value;
  }
  public resetAwsOrganizationName() {
    this._awsOrganizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOrganizationNameInput() {
    return this._awsOrganizationName;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // external_management_account_id - computed: true, optional: false, required: false
  public get externalManagementAccountId() {
    return this.getStringAttribute('external_management_account_id');
  }

  // external_organization_id - computed: true, optional: false, required: false
  public get externalOrganizationId() {
    return this.getStringAttribute('external_organization_id');
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

  // management_account_stack_id - computed: true, optional: false, required: false
  public get managementAccountStackId() {
    return this.getStringAttribute('management_account_stack_id');
  }

  // management_account_stack_region - computed: true, optional: false, required: false
  public get managementAccountStackRegion() {
    return this.getStringAttribute('management_account_stack_region');
  }

  // onboarding_configuration - computed: true, optional: false, required: false
  private _onboardingConfiguration = new cdktf.StringMap(this, "onboarding_configuration");
  public get onboardingConfiguration() {
    return this._onboardingConfiguration;
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // stack_set_arn - computed: false, optional: false, required: true
  private _stackSetArn?: string; 
  public get stackSetArn() {
    return this.getStringAttribute('stack_set_arn');
  }
  public set stackSetArn(value: string) {
    this._stackSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetArnInput() {
    return this._stackSetArn;
  }

  // stack_set_organizational_unit_ids - computed: true, optional: false, required: false
  public get stackSetOrganizationalUnitIds() {
    return this.getListAttribute('stack_set_organizational_unit_ids');
  }

  // stack_set_regions - computed: true, optional: false, required: false
  public get stackSetRegions() {
    return this.getListAttribute('stack_set_regions');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      aws_organization_name: cdktf.stringToTerraform(this._awsOrganizationName),
      enable_stack_modify: cdktf.booleanToTerraform(this._enableStackModify),
      id: cdktf.stringToTerraform(this._id),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      secret: cdktf.stringToTerraform(this._secret),
      stack_set_arn: cdktf.stringToTerraform(this._stackSetArn),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_organization_name: {
        value: cdktf.stringToHclTerraform(this._awsOrganizationName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_set_arn: {
        value: cdktf.stringToHclTerraform(this._stackSetArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
