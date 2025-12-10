// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGoogleRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deployment method for the registration. Can be either terraform-native or infrastructure-manager. Defaults to terraform-native
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#deployment_method CloudGoogleRegistration#deployment_method}
  */
  readonly deploymentMethod?: string;
  /**
  * Regex patterns to exclude specific projects from registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#excluded_project_patterns CloudGoogleRegistration#excluded_project_patterns}
  */
  readonly excludedProjectPatterns?: string[];
  /**
  * Google Cloud folder IDs to register. Each must be numeric. Mutually exclusive with `organization` and `projects`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#folders CloudGoogleRegistration#folders}
  */
  readonly folders?: string[];
  /**
  * The Google Cloud project ID where CrowdStrike infrastructure resources will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#infra_project CloudGoogleRegistration#infra_project}
  */
  readonly infraProject: string;
  /**
  * Google Cloud labels to apply to created resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#labels CloudGoogleRegistration#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#name CloudGoogleRegistration#name}
  */
  readonly name: string;
  /**
  * Google Cloud organization ID to register. Must be numeric. Mutually exclusive with `folders` and `projects`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#organization CloudGoogleRegistration#organization}
  */
  readonly organization?: string;
  /**
  * Google Cloud project IDs to register. Each must be 6-30 characters, start with a lowercase letter, and contain only lowercase letters, numbers, and hyphens. Mutually exclusive with `organization` and `folders`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#projects CloudGoogleRegistration#projects}
  */
  readonly projects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#realtime_visibility CloudGoogleRegistration#realtime_visibility}
  */
  readonly realtimeVisibility?: CloudGoogleRegistrationRealtimeVisibility;
  /**
  * Prefix to add to created Google Cloud resource names. The combined length of prefix and suffix must not exceed 13 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#resource_name_prefix CloudGoogleRegistration#resource_name_prefix}
  */
  readonly resourceNamePrefix?: string;
  /**
  * Suffix to add to created Google Cloud resource names. The combined length of prefix and suffix must not exceed 13 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#resource_name_suffix CloudGoogleRegistration#resource_name_suffix}
  */
  readonly resourceNameSuffix?: string;
  /**
  * Google Cloud tags to apply to created resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#tags CloudGoogleRegistration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Google Cloud project ID for Workload Identity Federation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#wif_project CloudGoogleRegistration#wif_project}
  */
  readonly wifProject: string;
}
export interface CloudGoogleRegistrationRealtimeVisibility {
  /**
  * Enable real-time visibility and detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#enabled CloudGoogleRegistration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudGoogleRegistrationRealtimeVisibilityToTerraform(struct?: CloudGoogleRegistrationRealtimeVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudGoogleRegistrationRealtimeVisibilityToHclTerraform(struct?: CloudGoogleRegistrationRealtimeVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGoogleRegistrationRealtimeVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGoogleRegistrationRealtimeVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGoogleRegistrationRealtimeVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration crowdstrike_cloud_google_registration}
*/
export class CloudGoogleRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_google_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGoogleRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGoogleRegistration to import
  * @param importFromId The id of the existing CloudGoogleRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGoogleRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_google_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.52/docs/resources/cloud_google_registration crowdstrike_cloud_google_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGoogleRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGoogleRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_google_registration',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.52',
        providerVersionConstraint: '0.0.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentMethod = config.deploymentMethod;
    this._excludedProjectPatterns = config.excludedProjectPatterns;
    this._folders = config.folders;
    this._infraProject = config.infraProject;
    this._labels = config.labels;
    this._name = config.name;
    this._organization = config.organization;
    this._projects = config.projects;
    this._realtimeVisibility.internalValue = config.realtimeVisibility;
    this._resourceNamePrefix = config.resourceNamePrefix;
    this._resourceNameSuffix = config.resourceNameSuffix;
    this._tags = config.tags;
    this._wifProject = config.wifProject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_method - computed: true, optional: true, required: false
  private _deploymentMethod?: string; 
  public get deploymentMethod() {
    return this.getStringAttribute('deployment_method');
  }
  public set deploymentMethod(value: string) {
    this._deploymentMethod = value;
  }
  public resetDeploymentMethod() {
    this._deploymentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMethodInput() {
    return this._deploymentMethod;
  }

  // excluded_project_patterns - computed: false, optional: true, required: false
  private _excludedProjectPatterns?: string[]; 
  public get excludedProjectPatterns() {
    return this.getListAttribute('excluded_project_patterns');
  }
  public set excludedProjectPatterns(value: string[]) {
    this._excludedProjectPatterns = value;
  }
  public resetExcludedProjectPatterns() {
    this._excludedProjectPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedProjectPatternsInput() {
    return this._excludedProjectPatterns;
  }

  // folders - computed: false, optional: true, required: false
  private _folders?: string[]; 
  public get folders() {
    return cdktf.Fn.tolist(this.getListAttribute('folders'));
  }
  public set folders(value: string[]) {
    this._folders = value;
  }
  public resetFolders() {
    this._folders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foldersInput() {
    return this._folders;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infra_project - computed: false, optional: false, required: true
  private _infraProject?: string; 
  public get infraProject() {
    return this.getStringAttribute('infra_project');
  }
  public set infraProject(value: string) {
    this._infraProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraProjectInput() {
    return this._infraProject;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return cdktf.Fn.tolist(this.getListAttribute('projects'));
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // realtime_visibility - computed: false, optional: true, required: false
  private _realtimeVisibility = new CloudGoogleRegistrationRealtimeVisibilityOutputReference(this, "realtime_visibility");
  public get realtimeVisibility() {
    return this._realtimeVisibility;
  }
  public putRealtimeVisibility(value: CloudGoogleRegistrationRealtimeVisibility) {
    this._realtimeVisibility.internalValue = value;
  }
  public resetRealtimeVisibility() {
    this._realtimeVisibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeVisibilityInput() {
    return this._realtimeVisibility.internalValue;
  }

  // registration_scope - computed: true, optional: false, required: false
  public get registrationScope() {
    return this.getStringAttribute('registration_scope');
  }

  // resource_name_prefix - computed: false, optional: true, required: false
  private _resourceNamePrefix?: string; 
  public get resourceNamePrefix() {
    return this.getStringAttribute('resource_name_prefix');
  }
  public set resourceNamePrefix(value: string) {
    this._resourceNamePrefix = value;
  }
  public resetResourceNamePrefix() {
    this._resourceNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamePrefixInput() {
    return this._resourceNamePrefix;
  }

  // resource_name_suffix - computed: false, optional: true, required: false
  private _resourceNameSuffix?: string; 
  public get resourceNameSuffix() {
    return this.getStringAttribute('resource_name_suffix');
  }
  public set resourceNameSuffix(value: string) {
    this._resourceNameSuffix = value;
  }
  public resetResourceNameSuffix() {
    this._resourceNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameSuffixInput() {
    return this._resourceNameSuffix;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // wif_pool_id - computed: true, optional: false, required: false
  public get wifPoolId() {
    return this.getStringAttribute('wif_pool_id');
  }

  // wif_pool_name - computed: true, optional: false, required: false
  public get wifPoolName() {
    return this.getStringAttribute('wif_pool_name');
  }

  // wif_project - computed: false, optional: false, required: true
  private _wifProject?: string; 
  public get wifProject() {
    return this.getStringAttribute('wif_project');
  }
  public set wifProject(value: string) {
    this._wifProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wifProjectInput() {
    return this._wifProject;
  }

  // wif_project_number - computed: true, optional: false, required: false
  public get wifProjectNumber() {
    return this.getStringAttribute('wif_project_number');
  }

  // wif_provider_id - computed: true, optional: false, required: false
  public get wifProviderId() {
    return this.getStringAttribute('wif_provider_id');
  }

  // wif_provider_name - computed: true, optional: false, required: false
  public get wifProviderName() {
    return this.getStringAttribute('wif_provider_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_method: cdktf.stringToTerraform(this._deploymentMethod),
      excluded_project_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedProjectPatterns),
      folders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._folders),
      infra_project: cdktf.stringToTerraform(this._infraProject),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projects),
      realtime_visibility: cloudGoogleRegistrationRealtimeVisibilityToTerraform(this._realtimeVisibility.internalValue),
      resource_name_prefix: cdktf.stringToTerraform(this._resourceNamePrefix),
      resource_name_suffix: cdktf.stringToTerraform(this._resourceNameSuffix),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      wif_project: cdktf.stringToTerraform(this._wifProject),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_method: {
        value: cdktf.stringToHclTerraform(this._deploymentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_project_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedProjectPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._folders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      infra_project: {
        value: cdktf.stringToHclTerraform(this._infraProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      realtime_visibility: {
        value: cloudGoogleRegistrationRealtimeVisibilityToHclTerraform(this._realtimeVisibility.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGoogleRegistrationRealtimeVisibility",
      },
      resource_name_prefix: {
        value: cdktf.stringToHclTerraform(this._resourceNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name_suffix: {
        value: cdktf.stringToHclTerraform(this._resourceNameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      wif_project: {
        value: cdktf.stringToHclTerraform(this._wifProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
