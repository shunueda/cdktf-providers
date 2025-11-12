// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9AwsUnifiedOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding#id DataDome9AwsUnifiedOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataDome9AwsUnifiedOnboardingStatuses {
}

export function dataDome9AwsUnifiedOnboardingStatusesToTerraform(struct?: DataDome9AwsUnifiedOnboardingStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9AwsUnifiedOnboardingStatusesToHclTerraform(struct?: DataDome9AwsUnifiedOnboardingStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9AwsUnifiedOnboardingStatusesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDome9AwsUnifiedOnboardingStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9AwsUnifiedOnboardingStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature - computed: true, optional: false, required: false
  public get feature() {
    return this.getStringAttribute('feature');
  }

  // module - computed: true, optional: false, required: false
  public get module() {
    return this.getStringAttribute('module');
  }

  // remediation_recommendation - computed: true, optional: false, required: false
  public get remediationRecommendation() {
    return this.getStringAttribute('remediation_recommendation');
  }

  // stack_message - computed: true, optional: false, required: false
  public get stackMessage() {
    return this.getStringAttribute('stack_message');
  }

  // stack_status - computed: true, optional: false, required: false
  public get stackStatus() {
    return this.getStringAttribute('stack_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class DataDome9AwsUnifiedOnboardingStatusesList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9AwsUnifiedOnboardingStatusesOutputReference {
    return new DataDome9AwsUnifiedOnboardingStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding dome9_aws_unified_onboarding}
*/
export class DataDome9AwsUnifiedOnboarding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_aws_unified_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9AwsUnifiedOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9AwsUnifiedOnboarding to import
  * @param importFromId The id of the existing DataDome9AwsUnifiedOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9AwsUnifiedOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_aws_unified_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/aws_unified_onboarding dome9_aws_unified_onboarding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9AwsUnifiedOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9AwsUnifiedOnboardingConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cft_version - computed: true, optional: false, required: false
  public get cftVersion() {
    return this.getStringAttribute('cft_version');
  }

  // environment_external_id - computed: true, optional: false, required: false
  public get environmentExternalId() {
    return this.getStringAttribute('environment_external_id');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // environment_name - computed: true, optional: false, required: false
  public get environmentName() {
    return this.getStringAttribute('environment_name');
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

  // initiated_user_id - computed: true, optional: false, required: false
  public get initiatedUserId() {
    return this.getNumberAttribute('initiated_user_id');
  }

  // initiated_user_name - computed: true, optional: false, required: false
  public get initiatedUserName() {
    return this.getStringAttribute('initiated_user_name');
  }

  // onboarding_id - computed: true, optional: false, required: false
  public get onboardingId() {
    return this.getStringAttribute('onboarding_id');
  }

  // onboarding_request - computed: true, optional: false, required: false
  private _onboardingRequest = new cdktf.StringMap(this, "onboarding_request");
  public get onboardingRequest() {
    return this._onboardingRequest;
  }

  // root_stack_id - computed: true, optional: false, required: false
  public get rootStackId() {
    return this.getStringAttribute('root_stack_id');
  }

  // statuses - computed: true, optional: false, required: false
  private _statuses = new DataDome9AwsUnifiedOnboardingStatusesList(this, "statuses", false);
  public get statuses() {
    return this._statuses;
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
