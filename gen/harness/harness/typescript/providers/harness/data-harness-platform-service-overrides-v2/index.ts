// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformServiceOverridesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#id DataHarnessPlatformServiceOverridesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier of the override entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#identifier DataHarnessPlatformServiceOverridesV2#identifier}
  */
  readonly identifier: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#org_id DataHarnessPlatformServiceOverridesV2#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#project_id DataHarnessPlatformServiceOverridesV2#project_id}
  */
  readonly projectId?: string;
  /**
  * git_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#git_details DataHarnessPlatformServiceOverridesV2#git_details}
  */
  readonly gitDetails?: DataHarnessPlatformServiceOverridesV2GitDetails;
}
export interface DataHarnessPlatformServiceOverridesV2GitDetails {
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#branch DataHarnessPlatformServiceOverridesV2#branch}
  */
  readonly branch?: string;
  /**
  * Load service yaml from fallback branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#load_from_cache DataHarnessPlatformServiceOverridesV2#load_from_cache}
  */
  readonly loadFromCache?: boolean | cdktf.IResolvable;
  /**
  * Load service yaml from fallback branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#load_from_fallback_branch DataHarnessPlatformServiceOverridesV2#load_from_fallback_branch}
  */
  readonly loadFromFallbackBranch?: boolean | cdktf.IResolvable;
  /**
  * Repo name of remote service override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#repo_name DataHarnessPlatformServiceOverridesV2#repo_name}
  */
  readonly repoName?: string;
}

export function dataHarnessPlatformServiceOverridesV2GitDetailsToTerraform(struct?: DataHarnessPlatformServiceOverridesV2GitDetailsOutputReference | DataHarnessPlatformServiceOverridesV2GitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    load_from_cache: cdktf.booleanToTerraform(struct!.loadFromCache),
    load_from_fallback_branch: cdktf.booleanToTerraform(struct!.loadFromFallbackBranch),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
  }
}


export function dataHarnessPlatformServiceOverridesV2GitDetailsToHclTerraform(struct?: DataHarnessPlatformServiceOverridesV2GitDetailsOutputReference | DataHarnessPlatformServiceOverridesV2GitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_from_cache: {
      value: cdktf.booleanToHclTerraform(struct!.loadFromCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_from_fallback_branch: {
      value: cdktf.booleanToHclTerraform(struct!.loadFromFallbackBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformServiceOverridesV2GitDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformServiceOverridesV2GitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._loadFromCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadFromCache = this._loadFromCache;
    }
    if (this._loadFromFallbackBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadFromFallbackBranch = this._loadFromFallbackBranch;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformServiceOverridesV2GitDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._loadFromCache = undefined;
      this._loadFromFallbackBranch = undefined;
      this._repoName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._loadFromCache = value.loadFromCache;
      this._loadFromFallbackBranch = value.loadFromFallbackBranch;
      this._repoName = value.repoName;
    }
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // load_from_cache - computed: true, optional: true, required: false
  private _loadFromCache?: boolean | cdktf.IResolvable; 
  public get loadFromCache() {
    return this.getBooleanAttribute('load_from_cache');
  }
  public set loadFromCache(value: boolean | cdktf.IResolvable) {
    this._loadFromCache = value;
  }
  public resetLoadFromCache() {
    this._loadFromCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadFromCacheInput() {
    return this._loadFromCache;
  }

  // load_from_fallback_branch - computed: true, optional: true, required: false
  private _loadFromFallbackBranch?: boolean | cdktf.IResolvable; 
  public get loadFromFallbackBranch() {
    return this.getBooleanAttribute('load_from_fallback_branch');
  }
  public set loadFromFallbackBranch(value: boolean | cdktf.IResolvable) {
    this._loadFromFallbackBranch = value;
  }
  public resetLoadFromFallbackBranch() {
    this._loadFromFallbackBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadFromFallbackBranchInput() {
    return this._loadFromFallbackBranch;
  }

  // repo_name - computed: true, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2 harness_platform_service_overrides_v2}
*/
export class DataHarnessPlatformServiceOverridesV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_service_overrides_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformServiceOverridesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformServiceOverridesV2 to import
  * @param importFromId The id of the existing DataHarnessPlatformServiceOverridesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformServiceOverridesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_service_overrides_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_service_overrides_v2 harness_platform_service_overrides_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformServiceOverridesV2Config
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformServiceOverridesV2Config) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_service_overrides_v2',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
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
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._gitDetails.internalValue = config.gitDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // env_id - computed: true, optional: false, required: false
  public get envId() {
    return this.getStringAttribute('env_id');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // infra_id - computed: true, optional: false, required: false
  public get infraId() {
    return this.getStringAttribute('infra_id');
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // git_details - computed: false, optional: true, required: false
  private _gitDetails = new DataHarnessPlatformServiceOverridesV2GitDetailsOutputReference(this, "git_details");
  public get gitDetails() {
    return this._gitDetails;
  }
  public putGitDetails(value: DataHarnessPlatformServiceOverridesV2GitDetails) {
    this._gitDetails.internalValue = value;
  }
  public resetGitDetails() {
    this._gitDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDetailsInput() {
    return this._gitDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      git_details: dataHarnessPlatformServiceOverridesV2GitDetailsToTerraform(this._gitDetails.internalValue),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_details: {
        value: dataHarnessPlatformServiceOverridesV2GitDetailsToHclTerraform(this._gitDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformServiceOverridesV2GitDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
