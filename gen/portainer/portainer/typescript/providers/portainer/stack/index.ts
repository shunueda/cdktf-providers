// https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of additional Compose file paths to use when deploying from Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#additional_files Stack#additional_files}
  */
  readonly additionalFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#compose_format Stack#compose_format}
  */
  readonly composeFormat?: boolean | cdktf.IResolvable;
  /**
  * Deployment mode: 'standalone', 'swarm', or 'kubernetes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#deployment_type Stack#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#endpoint_id Stack#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#file_path_in_repository Stack#file_path_in_repository}
  */
  readonly filePathInRepository?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#filesystem_path Stack#filesystem_path}
  */
  readonly filesystemPath?: string;
  /**
  * Whether to prune unused services/networks during stack update (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#force_update Stack#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#git_repository_authentication Stack#git_repository_authentication}
  */
  readonly gitRepositoryAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#id Stack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#manifest_url Stack#manifest_url}
  */
  readonly manifestUrl?: string;
  /**
  * Creation method: 'string', 'file', 'repository', or 'url'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#method Stack#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#name Stack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#namespace Stack#namespace}
  */
  readonly namespace?: string;
  /**
  * Whether to prune unused services/networks during stack update (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#prune Stack#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to force pull latest images during stack update (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#pull_image Stack#pull_image}
  */
  readonly pullImage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_password Stack#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Write-only repository password (supports ephemeral values; not stored in Terraform state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_password_wo Stack#repository_password_wo}
  */
  readonly repositoryPasswordWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_reference_name Stack#repository_reference_name}
  */
  readonly repositoryReferenceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_url Stack#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Write-only repository URL (supports ephemeral values; not stored in Terraform state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_url_wo Stack#repository_url_wo}
  */
  readonly repositoryUrlWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_username Stack#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * Write-only repository username (supports ephemeral values).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_username_wo Stack#repository_username_wo}
  */
  readonly repositoryUsernameWo?: string;
  /**
  * Version flag for write-only repository credentials; increment to trigger recreation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#repository_wo_version Stack#repository_wo_version}
  */
  readonly repositoryWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#stack_file_content Stack#stack_file_content}
  */
  readonly stackFileContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#stack_file_path Stack#stack_file_path}
  */
  readonly stackFilePath?: string;
  /**
  * Enable autoUpdate webhook (GitOps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#stack_webhook Stack#stack_webhook}
  */
  readonly stackWebhook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#support_relative_path Stack#support_relative_path}
  */
  readonly supportRelativePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#swarm_id Stack#swarm_id}
  */
  readonly swarmId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#tlsskip_verify Stack#tlsskip_verify}
  */
  readonly tlsskipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#update_interval Stack#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#env Stack#env}
  */
  readonly env?: StackEnv[] | cdktf.IResolvable;
}
export interface StackEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#name Stack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#value Stack#value}
  */
  readonly value: string;
}

export function stackEnvToTerraform(struct?: StackEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function stackEnvToHclTerraform(struct?: StackEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StackEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StackEnvList extends cdktf.ComplexList {
  public internalValue? : StackEnv[] | cdktf.IResolvable

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
  public get(index: number): StackEnvOutputReference {
    return new StackEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack portainer_stack}
*/
export class Stack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stack to import
  * @param importFromId The id of the existing Stack that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.2/docs/resources/stack portainer_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackConfig
  */
  public constructor(scope: Construct, id: string, config: StackConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_stack',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.2',
        providerVersionConstraint: '1.18.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalFiles = config.additionalFiles;
    this._composeFormat = config.composeFormat;
    this._deploymentType = config.deploymentType;
    this._endpointId = config.endpointId;
    this._filePathInRepository = config.filePathInRepository;
    this._filesystemPath = config.filesystemPath;
    this._forceUpdate = config.forceUpdate;
    this._gitRepositoryAuthentication = config.gitRepositoryAuthentication;
    this._id = config.id;
    this._manifestUrl = config.manifestUrl;
    this._method = config.method;
    this._name = config.name;
    this._namespace = config.namespace;
    this._prune = config.prune;
    this._pullImage = config.pullImage;
    this._repositoryPassword = config.repositoryPassword;
    this._repositoryPasswordWo = config.repositoryPasswordWo;
    this._repositoryReferenceName = config.repositoryReferenceName;
    this._repositoryUrl = config.repositoryUrl;
    this._repositoryUrlWo = config.repositoryUrlWo;
    this._repositoryUsername = config.repositoryUsername;
    this._repositoryUsernameWo = config.repositoryUsernameWo;
    this._repositoryWoVersion = config.repositoryWoVersion;
    this._stackFileContent = config.stackFileContent;
    this._stackFilePath = config.stackFilePath;
    this._stackWebhook = config.stackWebhook;
    this._supportRelativePath = config.supportRelativePath;
    this._swarmId = config.swarmId;
    this._tlsskipVerify = config.tlsskipVerify;
    this._updateInterval = config.updateInterval;
    this._env.internalValue = config.env;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_files - computed: false, optional: true, required: false
  private _additionalFiles?: string[]; 
  public get additionalFiles() {
    return this.getListAttribute('additional_files');
  }
  public set additionalFiles(value: string[]) {
    this._additionalFiles = value;
  }
  public resetAdditionalFiles() {
    this._additionalFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFilesInput() {
    return this._additionalFiles;
  }

  // compose_format - computed: false, optional: true, required: false
  private _composeFormat?: boolean | cdktf.IResolvable; 
  public get composeFormat() {
    return this.getBooleanAttribute('compose_format');
  }
  public set composeFormat(value: boolean | cdktf.IResolvable) {
    this._composeFormat = value;
  }
  public resetComposeFormat() {
    this._composeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composeFormatInput() {
    return this._composeFormat;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // filesystem_path - computed: false, optional: true, required: false
  private _filesystemPath?: string; 
  public get filesystemPath() {
    return this.getStringAttribute('filesystem_path');
  }
  public set filesystemPath(value: string) {
    this._filesystemPath = value;
  }
  public resetFilesystemPath() {
    this._filesystemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemPathInput() {
    return this._filesystemPath;
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

  // manifest_url - computed: false, optional: true, required: false
  private _manifestUrl?: string; 
  public get manifestUrl() {
    return this.getStringAttribute('manifest_url');
  }
  public set manifestUrl(value: string) {
    this._manifestUrl = value;
  }
  public resetManifestUrl() {
    this._manifestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestUrlInput() {
    return this._manifestUrl;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
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

  // repository_password_wo - computed: false, optional: true, required: false
  private _repositoryPasswordWo?: string; 
  public get repositoryPasswordWo() {
    return this.getStringAttribute('repository_password_wo');
  }
  public set repositoryPasswordWo(value: string) {
    this._repositoryPasswordWo = value;
  }
  public resetRepositoryPasswordWo() {
    this._repositoryPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPasswordWoInput() {
    return this._repositoryPasswordWo;
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

  // repository_url_wo - computed: false, optional: true, required: false
  private _repositoryUrlWo?: string; 
  public get repositoryUrlWo() {
    return this.getStringAttribute('repository_url_wo');
  }
  public set repositoryUrlWo(value: string) {
    this._repositoryUrlWo = value;
  }
  public resetRepositoryUrlWo() {
    this._repositoryUrlWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlWoInput() {
    return this._repositoryUrlWo;
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

  // repository_username_wo - computed: false, optional: true, required: false
  private _repositoryUsernameWo?: string; 
  public get repositoryUsernameWo() {
    return this.getStringAttribute('repository_username_wo');
  }
  public set repositoryUsernameWo(value: string) {
    this._repositoryUsernameWo = value;
  }
  public resetRepositoryUsernameWo() {
    this._repositoryUsernameWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUsernameWoInput() {
    return this._repositoryUsernameWo;
  }

  // repository_wo_version - computed: false, optional: true, required: false
  private _repositoryWoVersion?: number; 
  public get repositoryWoVersion() {
    return this.getNumberAttribute('repository_wo_version');
  }
  public set repositoryWoVersion(value: number) {
    this._repositoryWoVersion = value;
  }
  public resetRepositoryWoVersion() {
    this._repositoryWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryWoVersionInput() {
    return this._repositoryWoVersion;
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

  // support_relative_path - computed: false, optional: true, required: false
  private _supportRelativePath?: boolean | cdktf.IResolvable; 
  public get supportRelativePath() {
    return this.getBooleanAttribute('support_relative_path');
  }
  public set supportRelativePath(value: boolean | cdktf.IResolvable) {
    this._supportRelativePath = value;
  }
  public resetSupportRelativePath() {
    this._supportRelativePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportRelativePathInput() {
    return this._supportRelativePath;
  }

  // swarm_id - computed: true, optional: true, required: false
  private _swarmId?: string; 
  public get swarmId() {
    return this.getStringAttribute('swarm_id');
  }
  public set swarmId(value: string) {
    this._swarmId = value;
  }
  public resetSwarmId() {
    this._swarmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swarmIdInput() {
    return this._swarmId;
  }

  // tlsskip_verify - computed: true, optional: true, required: false
  private _tlsskipVerify?: boolean | cdktf.IResolvable; 
  public get tlsskipVerify() {
    return this.getBooleanAttribute('tlsskip_verify');
  }
  public set tlsskipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsskipVerify = value;
  }
  public resetTlsskipVerify() {
    this._tlsskipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsskipVerifyInput() {
    return this._tlsskipVerify;
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

  // webhook_id - computed: true, optional: false, required: false
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // env - computed: false, optional: true, required: false
  private _env = new StackEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: StackEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalFiles),
      compose_format: cdktf.booleanToTerraform(this._composeFormat),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      file_path_in_repository: cdktf.stringToTerraform(this._filePathInRepository),
      filesystem_path: cdktf.stringToTerraform(this._filesystemPath),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      git_repository_authentication: cdktf.booleanToTerraform(this._gitRepositoryAuthentication),
      id: cdktf.stringToTerraform(this._id),
      manifest_url: cdktf.stringToTerraform(this._manifestUrl),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      prune: cdktf.booleanToTerraform(this._prune),
      pull_image: cdktf.booleanToTerraform(this._pullImage),
      repository_password: cdktf.stringToTerraform(this._repositoryPassword),
      repository_password_wo: cdktf.stringToTerraform(this._repositoryPasswordWo),
      repository_reference_name: cdktf.stringToTerraform(this._repositoryReferenceName),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      repository_url_wo: cdktf.stringToTerraform(this._repositoryUrlWo),
      repository_username: cdktf.stringToTerraform(this._repositoryUsername),
      repository_username_wo: cdktf.stringToTerraform(this._repositoryUsernameWo),
      repository_wo_version: cdktf.numberToTerraform(this._repositoryWoVersion),
      stack_file_content: cdktf.stringToTerraform(this._stackFileContent),
      stack_file_path: cdktf.stringToTerraform(this._stackFilePath),
      stack_webhook: cdktf.booleanToTerraform(this._stackWebhook),
      support_relative_path: cdktf.booleanToTerraform(this._supportRelativePath),
      swarm_id: cdktf.stringToTerraform(this._swarmId),
      tlsskip_verify: cdktf.booleanToTerraform(this._tlsskipVerify),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
      env: cdktf.listMapper(stackEnvToTerraform, true)(this._env.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compose_format: {
        value: cdktf.booleanToHclTerraform(this._composeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_path_in_repository: {
        value: cdktf.stringToHclTerraform(this._filePathInRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filesystem_path: {
        value: cdktf.stringToHclTerraform(this._filesystemPath),
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
      manifest_url: {
        value: cdktf.stringToHclTerraform(this._manifestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prune: {
        value: cdktf.booleanToHclTerraform(this._prune),
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
      repository_password: {
        value: cdktf.stringToHclTerraform(this._repositoryPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_password_wo: {
        value: cdktf.stringToHclTerraform(this._repositoryPasswordWo),
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
      repository_url_wo: {
        value: cdktf.stringToHclTerraform(this._repositoryUrlWo),
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
      repository_username_wo: {
        value: cdktf.stringToHclTerraform(this._repositoryUsernameWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_wo_version: {
        value: cdktf.numberToHclTerraform(this._repositoryWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      support_relative_path: {
        value: cdktf.booleanToHclTerraform(this._supportRelativePath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      swarm_id: {
        value: cdktf.stringToHclTerraform(this._swarmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlsskip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsskipVerify),
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
      env: {
        value: cdktf.listMapperHcl(stackEnvToHclTerraform, true)(this._env.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackEnvList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
