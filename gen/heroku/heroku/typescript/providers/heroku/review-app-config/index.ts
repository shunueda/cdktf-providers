// https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReviewAppConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#automatic_review_apps ReviewAppConfig#automatic_review_apps}
  */
  readonly automaticReviewApps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#base_name ReviewAppConfig#base_name}
  */
  readonly baseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#destroy_stale_apps ReviewAppConfig#destroy_stale_apps}
  */
  readonly destroyStaleApps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#id ReviewAppConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#org_repo ReviewAppConfig#org_repo}
  */
  readonly orgRepo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#pipeline_id ReviewAppConfig#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#stale_days ReviewAppConfig#stale_days}
  */
  readonly staleDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#wait_for_ci ReviewAppConfig#wait_for_ci}
  */
  readonly waitForCi?: boolean | cdktf.IResolvable;
  /**
  * deploy_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#deploy_target ReviewAppConfig#deploy_target}
  */
  readonly deployTarget: ReviewAppConfigDeployTarget;
}
export interface ReviewAppConfigDeployTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#id ReviewAppConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#type ReviewAppConfig#type}
  */
  readonly type: string;
}

export function reviewAppConfigDeployTargetToTerraform(struct?: ReviewAppConfigDeployTargetOutputReference | ReviewAppConfigDeployTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reviewAppConfigDeployTargetToHclTerraform(struct?: ReviewAppConfigDeployTargetOutputReference | ReviewAppConfigDeployTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReviewAppConfigDeployTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReviewAppConfigDeployTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReviewAppConfigDeployTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config heroku_review_app_config}
*/
export class ReviewAppConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "heroku_review_app_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReviewAppConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReviewAppConfig to import
  * @param importFromId The id of the existing ReviewAppConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReviewAppConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "heroku_review_app_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/review_app_config heroku_review_app_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReviewAppConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ReviewAppConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'heroku_review_app_config',
      terraformGeneratorMetadata: {
        providerName: 'heroku',
        providerVersion: '5.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticReviewApps = config.automaticReviewApps;
    this._baseName = config.baseName;
    this._destroyStaleApps = config.destroyStaleApps;
    this._id = config.id;
    this._orgRepo = config.orgRepo;
    this._pipelineId = config.pipelineId;
    this._staleDays = config.staleDays;
    this._waitForCi = config.waitForCi;
    this._deployTarget.internalValue = config.deployTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_review_apps - computed: false, optional: true, required: false
  private _automaticReviewApps?: boolean | cdktf.IResolvable; 
  public get automaticReviewApps() {
    return this.getBooleanAttribute('automatic_review_apps');
  }
  public set automaticReviewApps(value: boolean | cdktf.IResolvable) {
    this._automaticReviewApps = value;
  }
  public resetAutomaticReviewApps() {
    this._automaticReviewApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticReviewAppsInput() {
    return this._automaticReviewApps;
  }

  // base_name - computed: true, optional: true, required: false
  private _baseName?: string; 
  public get baseName() {
    return this.getStringAttribute('base_name');
  }
  public set baseName(value: string) {
    this._baseName = value;
  }
  public resetBaseName() {
    this._baseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseNameInput() {
    return this._baseName;
  }

  // destroy_stale_apps - computed: false, optional: true, required: false
  private _destroyStaleApps?: boolean | cdktf.IResolvable; 
  public get destroyStaleApps() {
    return this.getBooleanAttribute('destroy_stale_apps');
  }
  public set destroyStaleApps(value: boolean | cdktf.IResolvable) {
    this._destroyStaleApps = value;
  }
  public resetDestroyStaleApps() {
    this._destroyStaleApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyStaleAppsInput() {
    return this._destroyStaleApps;
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

  // org_repo - computed: false, optional: false, required: true
  private _orgRepo?: string; 
  public get orgRepo() {
    return this.getStringAttribute('org_repo');
  }
  public set orgRepo(value: string) {
    this._orgRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgRepoInput() {
    return this._orgRepo;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getNumberAttribute('repo_id');
  }

  // stale_days - computed: true, optional: true, required: false
  private _staleDays?: number; 
  public get staleDays() {
    return this.getNumberAttribute('stale_days');
  }
  public set staleDays(value: number) {
    this._staleDays = value;
  }
  public resetStaleDays() {
    this._staleDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleDaysInput() {
    return this._staleDays;
  }

  // wait_for_ci - computed: false, optional: true, required: false
  private _waitForCi?: boolean | cdktf.IResolvable; 
  public get waitForCi() {
    return this.getBooleanAttribute('wait_for_ci');
  }
  public set waitForCi(value: boolean | cdktf.IResolvable) {
    this._waitForCi = value;
  }
  public resetWaitForCi() {
    this._waitForCi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCiInput() {
    return this._waitForCi;
  }

  // deploy_target - computed: false, optional: false, required: true
  private _deployTarget = new ReviewAppConfigDeployTargetOutputReference(this, "deploy_target");
  public get deployTarget() {
    return this._deployTarget;
  }
  public putDeployTarget(value: ReviewAppConfigDeployTarget) {
    this._deployTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTargetInput() {
    return this._deployTarget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_review_apps: cdktf.booleanToTerraform(this._automaticReviewApps),
      base_name: cdktf.stringToTerraform(this._baseName),
      destroy_stale_apps: cdktf.booleanToTerraform(this._destroyStaleApps),
      id: cdktf.stringToTerraform(this._id),
      org_repo: cdktf.stringToTerraform(this._orgRepo),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      stale_days: cdktf.numberToTerraform(this._staleDays),
      wait_for_ci: cdktf.booleanToTerraform(this._waitForCi),
      deploy_target: reviewAppConfigDeployTargetToTerraform(this._deployTarget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_review_apps: {
        value: cdktf.booleanToHclTerraform(this._automaticReviewApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_name: {
        value: cdktf.stringToHclTerraform(this._baseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_stale_apps: {
        value: cdktf.booleanToHclTerraform(this._destroyStaleApps),
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
      org_repo: {
        value: cdktf.stringToHclTerraform(this._orgRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stale_days: {
        value: cdktf.numberToHclTerraform(this._staleDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_ci: {
        value: cdktf.booleanToHclTerraform(this._waitForCi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_target: {
        value: reviewAppConfigDeployTargetToHclTerraform(this._deployTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReviewAppConfigDeployTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
