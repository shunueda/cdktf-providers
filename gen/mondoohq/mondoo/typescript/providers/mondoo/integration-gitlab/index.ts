// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGitlabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base URL of the GitLab instance (only set this if your instance is self-hosted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#base_url IntegrationGitlab#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#credentials IntegrationGitlab#credentials}
  */
  readonly credentials: IntegrationGitlabCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#discovery IntegrationGitlab#discovery}
  */
  readonly discovery?: IntegrationGitlabDiscovery;
  /**
  * Group to assign the integration to (by default all groups are discovered).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#group IntegrationGitlab#group}
  */
  readonly group?: string;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#name IntegrationGitlab#name}
  */
  readonly name: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#space_id IntegrationGitlab#space_id}
  */
  readonly spaceId?: string;
}
export interface IntegrationGitlabCredentials {
  /**
  * Token for GitLab integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#token IntegrationGitlab#token}
  */
  readonly token: string;
}

export function integrationGitlabCredentialsToTerraform(struct?: IntegrationGitlabCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function integrationGitlabCredentialsToHclTerraform(struct?: IntegrationGitlabCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGitlabCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationGitlabCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGitlabCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface IntegrationGitlabDiscovery {
  /**
  * Enable discovery of GitLab groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#groups IntegrationGitlab#groups}
  */
  readonly groups?: boolean | cdktf.IResolvable;
  /**
  * Enable discovery of Kubernetes manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#k8s_manifests IntegrationGitlab#k8s_manifests}
  */
  readonly k8SManifests?: boolean | cdktf.IResolvable;
  /**
  * Enable discovery of GitLab projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#projects IntegrationGitlab#projects}
  */
  readonly projects?: boolean | cdktf.IResolvable;
  /**
  * Enable discovery of Terraform configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#terraform IntegrationGitlab#terraform}
  */
  readonly terraform?: boolean | cdktf.IResolvable;
}

export function integrationGitlabDiscoveryToTerraform(struct?: IntegrationGitlabDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.booleanToTerraform(struct!.groups),
    k8s_manifests: cdktf.booleanToTerraform(struct!.k8SManifests),
    projects: cdktf.booleanToTerraform(struct!.projects),
    terraform: cdktf.booleanToTerraform(struct!.terraform),
  }
}


export function integrationGitlabDiscoveryToHclTerraform(struct?: IntegrationGitlabDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.booleanToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    k8s_manifests: {
      value: cdktf.booleanToHclTerraform(struct!.k8SManifests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    projects: {
      value: cdktf.booleanToHclTerraform(struct!.projects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terraform: {
      value: cdktf.booleanToHclTerraform(struct!.terraform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGitlabDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationGitlabDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._k8SManifests !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SManifests = this._k8SManifests;
    }
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    if (this._terraform !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraform = this._terraform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGitlabDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._k8SManifests = undefined;
      this._projects = undefined;
      this._terraform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._k8SManifests = value.k8SManifests;
      this._projects = value.projects;
      this._terraform = value.terraform;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: boolean | cdktf.IResolvable; 
  public get groups() {
    return this.getBooleanAttribute('groups');
  }
  public set groups(value: boolean | cdktf.IResolvable) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // k8s_manifests - computed: false, optional: true, required: false
  private _k8SManifests?: boolean | cdktf.IResolvable; 
  public get k8SManifests() {
    return this.getBooleanAttribute('k8s_manifests');
  }
  public set k8SManifests(value: boolean | cdktf.IResolvable) {
    this._k8SManifests = value;
  }
  public resetK8SManifests() {
    this._k8SManifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SManifestsInput() {
    return this._k8SManifests;
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: boolean | cdktf.IResolvable; 
  public get projects() {
    return this.getBooleanAttribute('projects');
  }
  public set projects(value: boolean | cdktf.IResolvable) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // terraform - computed: false, optional: true, required: false
  private _terraform?: boolean | cdktf.IResolvable; 
  public get terraform() {
    return this.getBooleanAttribute('terraform');
  }
  public set terraform(value: boolean | cdktf.IResolvable) {
    this._terraform = value;
  }
  public resetTerraform() {
    this._terraform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformInput() {
    return this._terraform;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab mondoo_integration_gitlab}
*/
export class IntegrationGitlab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_gitlab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGitlab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGitlab to import
  * @param importFromId The id of the existing IntegrationGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGitlab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_gitlab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_gitlab mondoo_integration_gitlab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGitlabConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGitlabConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_gitlab',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.0',
        providerVersionConstraint: '0.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseUrl = config.baseUrl;
    this._credentials.internalValue = config.credentials;
    this._discovery.internalValue = config.discovery;
    this._group = config.group;
    this._name = config.name;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationGitlabCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationGitlabCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new IntegrationGitlabDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: IntegrationGitlabDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktf.stringToTerraform(this._baseUrl),
      credentials: integrationGitlabCredentialsToTerraform(this._credentials.internalValue),
      discovery: integrationGitlabDiscoveryToTerraform(this._discovery.internalValue),
      group: cdktf.stringToTerraform(this._group),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: integrationGitlabCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationGitlabCredentials",
      },
      discovery: {
        value: integrationGitlabDiscoveryToHclTerraform(this._discovery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationGitlabDiscovery",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
