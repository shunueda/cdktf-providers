// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_organization_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9AwsOrganizationOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_organization_onboarding#id DataDome9AwsOrganizationOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_organization_onboarding dome9_aws_organization_onboarding}
*/
export class DataDome9AwsOrganizationOnboarding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_aws_organization_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9AwsOrganizationOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9AwsOrganizationOnboarding to import
  * @param importFromId The id of the existing DataDome9AwsOrganizationOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_organization_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9AwsOrganizationOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_aws_organization_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_organization_onboarding dome9_aws_organization_onboarding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9AwsOrganizationOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9AwsOrganizationOnboardingConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // external_management_account_id - computed: true, optional: false, required: false
  public get externalManagementAccountId() {
    return this.getStringAttribute('external_management_account_id');
  }

  // external_organization_id - computed: true, optional: false, required: false
  public get externalOrganizationId() {
    return this.getStringAttribute('external_organization_id');
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

  // stack_set_organizational_unit_ids - computed: true, optional: false, required: false
  public get stackSetOrganizationalUnitIds() {
    return cdktf.Fn.tolist(this.getListAttribute('stack_set_organizational_unit_ids'));
  }

  // stack_set_regions - computed: true, optional: false, required: false
  public get stackSetRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('stack_set_regions'));
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
