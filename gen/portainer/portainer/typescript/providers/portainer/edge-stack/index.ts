// https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * 0 = Docker Compose, 1 = Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#deployment_type EdgeStack#deployment_type}
  */
  readonly deploymentType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#dryrun EdgeStack#dryrun}
  */
  readonly dryrun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#edge_groups EdgeStack#edge_groups}
  */
  readonly edgeGroups: number[];
  /**
  * Environment variables for the Edge Stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#environment EdgeStack#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#file_path_in_repository EdgeStack#file_path_in_repository}
  */
  readonly filePathInRepository?: string;
  /**
  * Whether to prune unused services/networks during stack update (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#force_update EdgeStack#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#git_repository_authentication EdgeStack#git_repository_authentication}
  */
  readonly gitRepositoryAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#id EdgeStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#name EdgeStack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#pre_pull_image EdgeStack#pre_pull_image}
  */
  readonly prePullImage?: boolean | cdktf.IResolvable;
  /**
  * Whether to force pull latest images during stack update (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#pull_image EdgeStack#pull_image}
  */
  readonly pullImage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#registries EdgeStack#registries}
  */
  readonly registries?: number[];
  /**
  * Enable relative path volumes – also used as value for 'filesystemPath'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#relative_path EdgeStack#relative_path}
  */
  readonly relativePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#repository_password EdgeStack#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#repository_reference_name EdgeStack#repository_reference_name}
  */
  readonly repositoryReferenceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#repository_url EdgeStack#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#repository_username EdgeStack#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#retry_deploy EdgeStack#retry_deploy}
  */
  readonly retryDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#stack_file_content EdgeStack#stack_file_content}
  */
  readonly stackFileContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#stack_file_path EdgeStack#stack_file_path}
  */
  readonly stackFilePath?: string;
  /**
  * Enable autoUpdate webhook (GitOps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#stack_webhook EdgeStack#stack_webhook}
  */
  readonly stackWebhook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#update_interval EdgeStack#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#use_manifest_namespaces EdgeStack#use_manifest_namespaces}
  */
  readonly useManifestNamespaces?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack portainer_edge_stack}
*/
export class EdgeStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_edge_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeStack to import
  * @param importFromId The id of the existing EdgeStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_edge_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/edge_stack portainer_edge_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeStackConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeStackConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_edge_stack',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.0',
        providerVersionConstraint: '1.20.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentType = config.deploymentType;
    this._dryrun = config.dryrun;
    this._edgeGroups = config.edgeGroups;
    this._environment = config.environment;
    this._filePathInRepository = config.filePathInRepository;
    this._forceUpdate = config.forceUpdate;
    this._gitRepositoryAuthentication = config.gitRepositoryAuthentication;
    this._id = config.id;
    this._name = config.name;
    this._prePullImage = config.prePullImage;
    this._pullImage = config.pullImage;
    this._registries = config.registries;
    this._relativePath = config.relativePath;
    this._repositoryPassword = config.repositoryPassword;
    this._repositoryReferenceName = config.repositoryReferenceName;
    this._repositoryUrl = config.repositoryUrl;
    this._repositoryUsername = config.repositoryUsername;
    this._retryDeploy = config.retryDeploy;
    this._stackFileContent = config.stackFileContent;
    this._stackFilePath = config.stackFilePath;
    this._stackWebhook = config.stackWebhook;
    this._updateInterval = config.updateInterval;
    this._useManifestNamespaces = config.useManifestNamespaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: number; 
  public get deploymentType() {
    return this.getNumberAttribute('deployment_type');
  }
  public set deploymentType(value: number) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // dryrun - computed: false, optional: true, required: false
  private _dryrun?: boolean | cdktf.IResolvable; 
  public get dryrun() {
    return this.getBooleanAttribute('dryrun');
  }
  public set dryrun(value: boolean | cdktf.IResolvable) {
    this._dryrun = value;
  }
  public resetDryrun() {
    this._dryrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryrunInput() {
    return this._dryrun;
  }

  // edge_groups - computed: false, optional: false, required: true
  private _edgeGroups?: number[]; 
  public get edgeGroups() {
    return this.getNumberListAttribute('edge_groups');
  }
  public set edgeGroups(value: number[]) {
    this._edgeGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGroupsInput() {
    return this._edgeGroups;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // file_path_in_repository - computed: false, optional: true, required: false
  private _filePathInRepository?: string; 
  public get filePathInRepository() {
    return this.getStringAttribute('file_path_in_repository');
  }
  public set filePathInRepository(value: string) {
    this._filePathInRepository = value;
  }
  public resetFilePathInRepository() {
    this._filePathInRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInRepositoryInput() {
    return this._filePathInRepository;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
  }

  // git_repository_authentication - computed: false, optional: true, required: false
  private _gitRepositoryAuthentication?: boolean | cdktf.IResolvable; 
  public get gitRepositoryAuthentication() {
    return this.getBooleanAttribute('git_repository_authentication');
  }
  public set gitRepositoryAuthentication(value: boolean | cdktf.IResolvable) {
    this._gitRepositoryAuthentication = value;
  }
  public resetGitRepositoryAuthentication() {
    this._gitRepositoryAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryAuthenticationInput() {
    return this._gitRepositoryAuthentication;
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

  // pre_pull_image - computed: false, optional: true, required: false
  private _prePullImage?: boolean | cdktf.IResolvable; 
  public get prePullImage() {
    return this.getBooleanAttribute('pre_pull_image');
  }
  public set prePullImage(value: boolean | cdktf.IResolvable) {
    this._prePullImage = value;
  }
  public resetPrePullImage() {
    this._prePullImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prePullImageInput() {
    return this._prePullImage;
  }

  // pull_image - computed: false, optional: true, required: false
  private _pullImage?: boolean | cdktf.IResolvable; 
  public get pullImage() {
    return this.getBooleanAttribute('pull_image');
  }
  public set pullImage(value: boolean | cdktf.IResolvable) {
    this._pullImage = value;
  }
  public resetPullImage() {
    this._pullImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullImageInput() {
    return this._pullImage;
  }

  // registries - computed: false, optional: true, required: false
  private _registries?: number[]; 
  public get registries() {
    return this.getNumberListAttribute('registries');
  }
  public set registries(value: number[]) {
    this._registries = value;
  }
  public resetRegistries() {
    this._registries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries;
  }

  // relative_path - computed: false, optional: true, required: false
  private _relativePath?: string; 
  public get relativePath() {
    return this.getStringAttribute('relative_path');
  }
  public set relativePath(value: string) {
    this._relativePath = value;
  }
  public resetRelativePath() {
    this._relativePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePathInput() {
    return this._relativePath;
  }

  // repository_password - computed: false, optional: true, required: false
  private _repositoryPassword?: string; 
  public get repositoryPassword() {
    return this.getStringAttribute('repository_password');
  }
  public set repositoryPassword(value: string) {
    this._repositoryPassword = value;
  }
  public resetRepositoryPassword() {
    this._repositoryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPasswordInput() {
    return this._repositoryPassword;
  }

  // repository_reference_name - computed: false, optional: true, required: false
  private _repositoryReferenceName?: string; 
  public get repositoryReferenceName() {
    return this.getStringAttribute('repository_reference_name');
  }
  public set repositoryReferenceName(value: string) {
    this._repositoryReferenceName = value;
  }
  public resetRepositoryReferenceName() {
    this._repositoryReferenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryReferenceNameInput() {
    return this._repositoryReferenceName;
  }

  // repository_url - computed: false, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // repository_username - computed: false, optional: true, required: false
  private _repositoryUsername?: string; 
  public get repositoryUsername() {
    return this.getStringAttribute('repository_username');
  }
  public set repositoryUsername(value: string) {
    this._repositoryUsername = value;
  }
  public resetRepositoryUsername() {
    this._repositoryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUsernameInput() {
    return this._repositoryUsername;
  }

  // retry_deploy - computed: false, optional: true, required: false
  private _retryDeploy?: boolean | cdktf.IResolvable; 
  public get retryDeploy() {
    return this.getBooleanAttribute('retry_deploy');
  }
  public set retryDeploy(value: boolean | cdktf.IResolvable) {
    this._retryDeploy = value;
  }
  public resetRetryDeploy() {
    this._retryDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDeployInput() {
    return this._retryDeploy;
  }

  // stack_file_content - computed: false, optional: true, required: false
  private _stackFileContent?: string; 
  public get stackFileContent() {
    return this.getStringAttribute('stack_file_content');
  }
  public set stackFileContent(value: string) {
    this._stackFileContent = value;
  }
  public resetStackFileContent() {
    this._stackFileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackFileContentInput() {
    return this._stackFileContent;
  }

  // stack_file_path - computed: false, optional: true, required: false
  private _stackFilePath?: string; 
  public get stackFilePath() {
    return this.getStringAttribute('stack_file_path');
  }
  public set stackFilePath(value: string) {
    this._stackFilePath = value;
  }
  public resetStackFilePath() {
    this._stackFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackFilePathInput() {
    return this._stackFilePath;
  }

  // stack_webhook - computed: false, optional: true, required: false
  private _stackWebhook?: boolean | cdktf.IResolvable; 
  public get stackWebhook() {
    return this.getBooleanAttribute('stack_webhook');
  }
  public set stackWebhook(value: boolean | cdktf.IResolvable) {
    this._stackWebhook = value;
  }
  public resetStackWebhook() {
    this._stackWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackWebhookInput() {
    return this._stackWebhook;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // use_manifest_namespaces - computed: false, optional: true, required: false
  private _useManifestNamespaces?: boolean | cdktf.IResolvable; 
  public get useManifestNamespaces() {
    return this.getBooleanAttribute('use_manifest_namespaces');
  }
  public set useManifestNamespaces(value: boolean | cdktf.IResolvable) {
    this._useManifestNamespaces = value;
  }
  public resetUseManifestNamespaces() {
    this._useManifestNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManifestNamespacesInput() {
    return this._useManifestNamespaces;
  }

  // webhook_id - computed: true, optional: false, required: false
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_type: cdktf.numberToTerraform(this._deploymentType),
      dryrun: cdktf.booleanToTerraform(this._dryrun),
      edge_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._edgeGroups),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      file_path_in_repository: cdktf.stringToTerraform(this._filePathInRepository),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      git_repository_authentication: cdktf.booleanToTerraform(this._gitRepositoryAuthentication),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pre_pull_image: cdktf.booleanToTerraform(this._prePullImage),
      pull_image: cdktf.booleanToTerraform(this._pullImage),
      registries: cdktf.listMapper(cdktf.numberToTerraform, false)(this._registries),
      relative_path: cdktf.stringToTerraform(this._relativePath),
      repository_password: cdktf.stringToTerraform(this._repositoryPassword),
      repository_reference_name: cdktf.stringToTerraform(this._repositoryReferenceName),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      repository_username: cdktf.stringToTerraform(this._repositoryUsername),
      retry_deploy: cdktf.booleanToTerraform(this._retryDeploy),
      stack_file_content: cdktf.stringToTerraform(this._stackFileContent),
      stack_file_path: cdktf.stringToTerraform(this._stackFilePath),
      stack_webhook: cdktf.booleanToTerraform(this._stackWebhook),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
      use_manifest_namespaces: cdktf.booleanToTerraform(this._useManifestNamespaces),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_type: {
        value: cdktf.numberToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dryrun: {
        value: cdktf.booleanToHclTerraform(this._dryrun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._edgeGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      file_path_in_repository: {
        value: cdktf.stringToHclTerraform(this._filePathInRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_repository_authentication: {
        value: cdktf.booleanToHclTerraform(this._gitRepositoryAuthentication),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_pull_image: {
        value: cdktf.booleanToHclTerraform(this._prePullImage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pull_image: {
        value: cdktf.booleanToHclTerraform(this._pullImage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registries: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._registries),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      relative_path: {
        value: cdktf.stringToHclTerraform(this._relativePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_password: {
        value: cdktf.stringToHclTerraform(this._repositoryPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_reference_name: {
        value: cdktf.stringToHclTerraform(this._repositoryReferenceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_url: {
        value: cdktf.stringToHclTerraform(this._repositoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_username: {
        value: cdktf.stringToHclTerraform(this._repositoryUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_deploy: {
        value: cdktf.booleanToHclTerraform(this._retryDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stack_file_content: {
        value: cdktf.stringToHclTerraform(this._stackFileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_file_path: {
        value: cdktf.stringToHclTerraform(this._stackFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_webhook: {
        value: cdktf.booleanToHclTerraform(this._stackWebhook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_manifest_namespaces: {
        value: cdktf.booleanToHclTerraform(this._useManifestNamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
