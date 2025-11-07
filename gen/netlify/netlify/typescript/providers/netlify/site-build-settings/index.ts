// https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteBuildSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#base_directory SiteBuildSettings#base_directory}
  */
  readonly baseDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#branch_deploy_all_branches SiteBuildSettings#branch_deploy_all_branches}
  */
  readonly branchDeployAllBranches?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#branch_deploy_branches SiteBuildSettings#branch_deploy_branches}
  */
  readonly branchDeployBranches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#build_command SiteBuildSettings#build_command}
  */
  readonly buildCommand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#build_image SiteBuildSettings#build_image}
  */
  readonly buildImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#deploy_previews SiteBuildSettings#deploy_previews}
  */
  readonly deployPreviews?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#functions_directory SiteBuildSettings#functions_directory}
  */
  readonly functionsDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#functions_region SiteBuildSettings#functions_region}
  */
  readonly functionsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#package_directory SiteBuildSettings#package_directory}
  */
  readonly packageDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#pretty_urls SiteBuildSettings#pretty_urls}
  */
  readonly prettyUrls?: boolean | cdktf.IResolvable;
  /**
  * When enabled, prevents production deploys from sources other than the linked git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#prevent_non_git_prod_deploys SiteBuildSettings#prevent_non_git_prod_deploys}
  */
  readonly preventNonGitProdDeploys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#production_branch SiteBuildSettings#production_branch}
  */
  readonly productionBranch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#publish_directory SiteBuildSettings#publish_directory}
  */
  readonly publishDirectory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#site_id SiteBuildSettings#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#stop_builds SiteBuildSettings#stop_builds}
  */
  readonly stopBuilds?: boolean | cdktf.IResolvable;
  /**
  * See more details in the netlify_waf_policy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#waf_policy_id SiteBuildSettings#waf_policy_id}
  */
  readonly wafPolicyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings netlify_site_build_settings}
*/
export class SiteBuildSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_site_build_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteBuildSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteBuildSettings to import
  * @param importFromId The id of the existing SiteBuildSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteBuildSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_site_build_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/site_build_settings netlify_site_build_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteBuildSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SiteBuildSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_site_build_settings',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDirectory = config.baseDirectory;
    this._branchDeployAllBranches = config.branchDeployAllBranches;
    this._branchDeployBranches = config.branchDeployBranches;
    this._buildCommand = config.buildCommand;
    this._buildImage = config.buildImage;
    this._deployPreviews = config.deployPreviews;
    this._functionsDirectory = config.functionsDirectory;
    this._functionsRegion = config.functionsRegion;
    this._packageDirectory = config.packageDirectory;
    this._prettyUrls = config.prettyUrls;
    this._preventNonGitProdDeploys = config.preventNonGitProdDeploys;
    this._productionBranch = config.productionBranch;
    this._publishDirectory = config.publishDirectory;
    this._siteId = config.siteId;
    this._stopBuilds = config.stopBuilds;
    this._wafPolicyId = config.wafPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_directory - computed: true, optional: true, required: false
  private _baseDirectory?: string; 
  public get baseDirectory() {
    return this.getStringAttribute('base_directory');
  }
  public set baseDirectory(value: string) {
    this._baseDirectory = value;
  }
  public resetBaseDirectory() {
    this._baseDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDirectoryInput() {
    return this._baseDirectory;
  }

  // branch_deploy_all_branches - computed: true, optional: true, required: false
  private _branchDeployAllBranches?: boolean | cdktf.IResolvable; 
  public get branchDeployAllBranches() {
    return this.getBooleanAttribute('branch_deploy_all_branches');
  }
  public set branchDeployAllBranches(value: boolean | cdktf.IResolvable) {
    this._branchDeployAllBranches = value;
  }
  public resetBranchDeployAllBranches() {
    this._branchDeployAllBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchDeployAllBranchesInput() {
    return this._branchDeployAllBranches;
  }

  // branch_deploy_branches - computed: true, optional: true, required: false
  private _branchDeployBranches?: string[]; 
  public get branchDeployBranches() {
    return this.getListAttribute('branch_deploy_branches');
  }
  public set branchDeployBranches(value: string[]) {
    this._branchDeployBranches = value;
  }
  public resetBranchDeployBranches() {
    this._branchDeployBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchDeployBranchesInput() {
    return this._branchDeployBranches;
  }

  // build_command - computed: false, optional: false, required: true
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // build_image - computed: true, optional: true, required: false
  private _buildImage?: string; 
  public get buildImage() {
    return this.getStringAttribute('build_image');
  }
  public set buildImage(value: string) {
    this._buildImage = value;
  }
  public resetBuildImage() {
    this._buildImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildImageInput() {
    return this._buildImage;
  }

  // deploy_previews - computed: true, optional: true, required: false
  private _deployPreviews?: boolean | cdktf.IResolvable; 
  public get deployPreviews() {
    return this.getBooleanAttribute('deploy_previews');
  }
  public set deployPreviews(value: boolean | cdktf.IResolvable) {
    this._deployPreviews = value;
  }
  public resetDeployPreviews() {
    this._deployPreviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPreviewsInput() {
    return this._deployPreviews;
  }

  // functions_directory - computed: true, optional: true, required: false
  private _functionsDirectory?: string; 
  public get functionsDirectory() {
    return this.getStringAttribute('functions_directory');
  }
  public set functionsDirectory(value: string) {
    this._functionsDirectory = value;
  }
  public resetFunctionsDirectory() {
    this._functionsDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsDirectoryInput() {
    return this._functionsDirectory;
  }

  // functions_region - computed: true, optional: true, required: false
  private _functionsRegion?: string; 
  public get functionsRegion() {
    return this.getStringAttribute('functions_region');
  }
  public set functionsRegion(value: string) {
    this._functionsRegion = value;
  }
  public resetFunctionsRegion() {
    this._functionsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsRegionInput() {
    return this._functionsRegion;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // package_directory - computed: true, optional: true, required: false
  private _packageDirectory?: string; 
  public get packageDirectory() {
    return this.getStringAttribute('package_directory');
  }
  public set packageDirectory(value: string) {
    this._packageDirectory = value;
  }
  public resetPackageDirectory() {
    this._packageDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageDirectoryInput() {
    return this._packageDirectory;
  }

  // pretty_urls - computed: true, optional: true, required: false
  private _prettyUrls?: boolean | cdktf.IResolvable; 
  public get prettyUrls() {
    return this.getBooleanAttribute('pretty_urls');
  }
  public set prettyUrls(value: boolean | cdktf.IResolvable) {
    this._prettyUrls = value;
  }
  public resetPrettyUrls() {
    this._prettyUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prettyUrlsInput() {
    return this._prettyUrls;
  }

  // prevent_non_git_prod_deploys - computed: true, optional: true, required: false
  private _preventNonGitProdDeploys?: boolean | cdktf.IResolvable; 
  public get preventNonGitProdDeploys() {
    return this.getBooleanAttribute('prevent_non_git_prod_deploys');
  }
  public set preventNonGitProdDeploys(value: boolean | cdktf.IResolvable) {
    this._preventNonGitProdDeploys = value;
  }
  public resetPreventNonGitProdDeploys() {
    this._preventNonGitProdDeploys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventNonGitProdDeploysInput() {
    return this._preventNonGitProdDeploys;
  }

  // production_branch - computed: false, optional: false, required: true
  private _productionBranch?: string; 
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }
  public set productionBranch(value: string) {
    this._productionBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionBranchInput() {
    return this._productionBranch;
  }

  // publish_directory - computed: false, optional: false, required: true
  private _publishDirectory?: string; 
  public get publishDirectory() {
    return this.getStringAttribute('publish_directory');
  }
  public set publishDirectory(value: string) {
    this._publishDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishDirectoryInput() {
    return this._publishDirectory;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // stop_builds - computed: true, optional: true, required: false
  private _stopBuilds?: boolean | cdktf.IResolvable; 
  public get stopBuilds() {
    return this.getBooleanAttribute('stop_builds');
  }
  public set stopBuilds(value: boolean | cdktf.IResolvable) {
    this._stopBuilds = value;
  }
  public resetStopBuilds() {
    this._stopBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopBuildsInput() {
    return this._stopBuilds;
  }

  // waf_policy_id - computed: false, optional: true, required: false
  private _wafPolicyId?: string; 
  public get wafPolicyId() {
    return this.getStringAttribute('waf_policy_id');
  }
  public set wafPolicyId(value: string) {
    this._wafPolicyId = value;
  }
  public resetWafPolicyId() {
    this._wafPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafPolicyIdInput() {
    return this._wafPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_directory: cdktf.stringToTerraform(this._baseDirectory),
      branch_deploy_all_branches: cdktf.booleanToTerraform(this._branchDeployAllBranches),
      branch_deploy_branches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._branchDeployBranches),
      build_command: cdktf.stringToTerraform(this._buildCommand),
      build_image: cdktf.stringToTerraform(this._buildImage),
      deploy_previews: cdktf.booleanToTerraform(this._deployPreviews),
      functions_directory: cdktf.stringToTerraform(this._functionsDirectory),
      functions_region: cdktf.stringToTerraform(this._functionsRegion),
      package_directory: cdktf.stringToTerraform(this._packageDirectory),
      pretty_urls: cdktf.booleanToTerraform(this._prettyUrls),
      prevent_non_git_prod_deploys: cdktf.booleanToTerraform(this._preventNonGitProdDeploys),
      production_branch: cdktf.stringToTerraform(this._productionBranch),
      publish_directory: cdktf.stringToTerraform(this._publishDirectory),
      site_id: cdktf.stringToTerraform(this._siteId),
      stop_builds: cdktf.booleanToTerraform(this._stopBuilds),
      waf_policy_id: cdktf.stringToTerraform(this._wafPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_directory: {
        value: cdktf.stringToHclTerraform(this._baseDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch_deploy_all_branches: {
        value: cdktf.booleanToHclTerraform(this._branchDeployAllBranches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      branch_deploy_branches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._branchDeployBranches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      build_command: {
        value: cdktf.stringToHclTerraform(this._buildCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_image: {
        value: cdktf.stringToHclTerraform(this._buildImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_previews: {
        value: cdktf.booleanToHclTerraform(this._deployPreviews),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      functions_directory: {
        value: cdktf.stringToHclTerraform(this._functionsDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functions_region: {
        value: cdktf.stringToHclTerraform(this._functionsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_directory: {
        value: cdktf.stringToHclTerraform(this._packageDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pretty_urls: {
        value: cdktf.booleanToHclTerraform(this._prettyUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_non_git_prod_deploys: {
        value: cdktf.booleanToHclTerraform(this._preventNonGitProdDeploys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      production_branch: {
        value: cdktf.stringToHclTerraform(this._productionBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_directory: {
        value: cdktf.stringToHclTerraform(this._publishDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_builds: {
        value: cdktf.booleanToHclTerraform(this._stopBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      waf_policy_id: {
        value: cdktf.stringToHclTerraform(this._wafPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
