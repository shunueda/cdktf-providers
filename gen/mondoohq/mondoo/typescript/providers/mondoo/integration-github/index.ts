// https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#credentials IntegrationGithub#credentials}
  */
  readonly credentials: IntegrationGithubCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#discovery IntegrationGithub#discovery}
  */
  readonly discovery?: IntegrationGithubDiscovery;
  /**
  * Set to true to force replacement on next apply, useful to refresh credentials when the current value cannot be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#force_replace IntegrationGithub#force_replace}
  */
  readonly forceReplace?: boolean | cdktf.IResolvable;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#name IntegrationGithub#name}
  */
  readonly name: string;
  /**
  * GitHub owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#owner IntegrationGithub#owner}
  */
  readonly owner: string;
  /**
  * GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#repository IntegrationGithub#repository}
  */
  readonly repository?: string;
  /**
  * List of GitHub repositories to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#repository_allow_list IntegrationGithub#repository_allow_list}
  */
  readonly repositoryAllowList?: string[];
  /**
  * List of GitHub repositories to exclude from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#repository_deny_list IntegrationGithub#repository_deny_list}
  */
  readonly repositoryDenyList?: string[];
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#space_id IntegrationGithub#space_id}
  */
  readonly spaceId?: string;
}
export interface IntegrationGithubCredentials {
  /**
  * Token for GitHub integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#token IntegrationGithub#token}
  */
  readonly token: string;
}

export function integrationGithubCredentialsToTerraform(struct?: IntegrationGithubCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function integrationGithubCredentialsToHclTerraform(struct?: IntegrationGithubCredentials | cdktf.IResolvable): any {
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

export class IntegrationGithubCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationGithubCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationGithubCredentials | cdktf.IResolvable | undefined) {
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
export interface IntegrationGithubDiscovery {
  /**
  * Enable discovery of Kubernetes manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#k8s_manifests IntegrationGithub#k8s_manifests}
  */
  readonly k8SManifests?: boolean | cdktf.IResolvable;
  /**
  * Enable discovery of Terraform configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#terraform IntegrationGithub#terraform}
  */
  readonly terraform?: boolean | cdktf.IResolvable;
}

export function integrationGithubDiscoveryToTerraform(struct?: IntegrationGithubDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_manifests: cdktf.booleanToTerraform(struct!.k8SManifests),
    terraform: cdktf.booleanToTerraform(struct!.terraform),
  }
}


export function integrationGithubDiscoveryToHclTerraform(struct?: IntegrationGithubDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_manifests: {
      value: cdktf.booleanToHclTerraform(struct!.k8SManifests),
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

export class IntegrationGithubDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationGithubDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SManifests !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SManifests = this._k8SManifests;
    }
    if (this._terraform !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraform = this._terraform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGithubDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SManifests = undefined;
      this._terraform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SManifests = value.k8SManifests;
      this._terraform = value.terraform;
    }
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
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github mondoo_integration_github}
*/
export class IntegrationGithub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGithub to import
  * @param importFromId The id of the existing IntegrationGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/integration_github mondoo_integration_github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGithubConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_github',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.34.0',
        providerVersionConstraint: '0.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentials.internalValue = config.credentials;
    this._discovery.internalValue = config.discovery;
    this._forceReplace = config.forceReplace;
    this._name = config.name;
    this._owner = config.owner;
    this._repository = config.repository;
    this._repositoryAllowList = config.repositoryAllowList;
    this._repositoryDenyList = config.repositoryDenyList;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationGithubCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationGithubCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new IntegrationGithubDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: IntegrationGithubDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // force_replace - computed: true, optional: true, required: false
  private _forceReplace?: boolean | cdktf.IResolvable; 
  public get forceReplace() {
    return this.getBooleanAttribute('force_replace');
  }
  public set forceReplace(value: boolean | cdktf.IResolvable) {
    this._forceReplace = value;
  }
  public resetForceReplace() {
    this._forceReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceReplaceInput() {
    return this._forceReplace;
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_allow_list - computed: false, optional: true, required: false
  private _repositoryAllowList?: string[]; 
  public get repositoryAllowList() {
    return this.getListAttribute('repository_allow_list');
  }
  public set repositoryAllowList(value: string[]) {
    this._repositoryAllowList = value;
  }
  public resetRepositoryAllowList() {
    this._repositoryAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAllowListInput() {
    return this._repositoryAllowList;
  }

  // repository_deny_list - computed: false, optional: true, required: false
  private _repositoryDenyList?: string[]; 
  public get repositoryDenyList() {
    return this.getListAttribute('repository_deny_list');
  }
  public set repositoryDenyList(value: string[]) {
    this._repositoryDenyList = value;
  }
  public resetRepositoryDenyList() {
    this._repositoryDenyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryDenyListInput() {
    return this._repositoryDenyList;
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
      credentials: integrationGithubCredentialsToTerraform(this._credentials.internalValue),
      discovery: integrationGithubDiscoveryToTerraform(this._discovery.internalValue),
      force_replace: cdktf.booleanToTerraform(this._forceReplace),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
      repository_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repositoryAllowList),
      repository_deny_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repositoryDenyList),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: integrationGithubCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationGithubCredentials",
      },
      discovery: {
        value: integrationGithubDiscoveryToHclTerraform(this._discovery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationGithubDiscovery",
      },
      force_replace: {
        value: cdktf.booleanToHclTerraform(this._forceReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repositoryAllowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      repository_deny_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repositoryDenyList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
