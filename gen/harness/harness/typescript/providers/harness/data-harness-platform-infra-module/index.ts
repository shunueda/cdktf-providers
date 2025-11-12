// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformInfraModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account that owns the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#account DataHarnessPlatformInfraModule#account}
  */
  readonly account: string;
  /**
  * Timestamp when the module was created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#created DataHarnessPlatformInfraModule#created}
  */
  readonly created?: number;
  /**
  * Description of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#description DataHarnessPlatformInfraModule#description}
  */
  readonly description?: string;
  /**
  * Git Tag Style
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#git_tag_style DataHarnessPlatformInfraModule#git_tag_style}
  */
  readonly gitTagStyle?: string;
  /**
  * Identifier of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#id DataHarnessPlatformInfraModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Error while retrieving the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#module_error DataHarnessPlatformInfraModule#module_error}
  */
  readonly moduleError?: string;
  /**
  * Name of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#name DataHarnessPlatformInfraModule#name}
  */
  readonly name: string;
  /**
  * Organization that owns the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#org DataHarnessPlatformInfraModule#org}
  */
  readonly org?: string;
  /**
  * Project that owns the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#project DataHarnessPlatformInfraModule#project}
  */
  readonly project?: string;
  /**
  * For account connectors, the repository where the module is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#repository DataHarnessPlatformInfraModule#repository}
  */
  readonly repository?: string;
  /**
  * Repository Branch in which the module should be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#repository_branch DataHarnessPlatformInfraModule#repository_branch}
  */
  readonly repositoryBranch?: string;
  /**
  * Repository Commit in which the module should be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#repository_commit DataHarnessPlatformInfraModule#repository_commit}
  */
  readonly repositoryCommit?: string;
  /**
  * Repository Connector is the reference to the connector for the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#repository_connector DataHarnessPlatformInfraModule#repository_connector}
  */
  readonly repositoryConnector?: string;
  /**
  * Repository Path is the path in which the module resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#repository_path DataHarnessPlatformInfraModule#repository_path}
  */
  readonly repositoryPath?: string;
  /**
  * URL where the module is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#repository_url DataHarnessPlatformInfraModule#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Timestamp when the module was last synced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#synced DataHarnessPlatformInfraModule#synced}
  */
  readonly synced?: number;
  /**
  * Provider of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#system DataHarnessPlatformInfraModule#system}
  */
  readonly systemAttribute: string;
  /**
  * Tags associated with the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#tags DataHarnessPlatformInfraModule#tags}
  */
  readonly tags?: string;
  /**
  * Whether testing is enabled for the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#testing_enabled DataHarnessPlatformInfraModule#testing_enabled}
  */
  readonly testingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Timestamp when the module was last modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#updated DataHarnessPlatformInfraModule#updated}
  */
  readonly updated?: number;
  /**
  * Versions of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#versions DataHarnessPlatformInfraModule#versions}
  */
  readonly versions?: string[];
  /**
  * testing_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#testing_metadata DataHarnessPlatformInfraModule#testing_metadata}
  */
  readonly testingMetadata?: DataHarnessPlatformInfraModuleTestingMetadata;
}
export interface DataHarnessPlatformInfraModuleTestingMetadata {
  /**
  * Account is the internal customer account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#account DataHarnessPlatformInfraModule#account}
  */
  readonly account?: string;
  /**
  * Organization identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#org DataHarnessPlatformInfraModule#org}
  */
  readonly org?: string;
  /**
  * Pipelines where the testing is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#pipelines DataHarnessPlatformInfraModule#pipelines}
  */
  readonly pipelines?: string[];
  /**
  * Project identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#project DataHarnessPlatformInfraModule#project}
  */
  readonly project?: string;
  /**
  * Provider connector for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#provider_connector DataHarnessPlatformInfraModule#provider_connector}
  */
  readonly providerConnector?: string;
  /**
  * Provisioner type for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#provisioner_type DataHarnessPlatformInfraModule#provisioner_type}
  */
  readonly provisionerType?: string;
  /**
  * Provisioner version for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#provisioner_version DataHarnessPlatformInfraModule#provisioner_version}
  */
  readonly provisionerVersion?: string;
  /**
  * Release pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#release_pipeline DataHarnessPlatformInfraModule#release_pipeline}
  */
  readonly releasePipeline?: string;
}

export function dataHarnessPlatformInfraModuleTestingMetadataToTerraform(struct?: DataHarnessPlatformInfraModuleTestingMetadataOutputReference | DataHarnessPlatformInfraModuleTestingMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    org: cdktf.stringToTerraform(struct!.org),
    pipelines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pipelines),
    project: cdktf.stringToTerraform(struct!.project),
    provider_connector: cdktf.stringToTerraform(struct!.providerConnector),
    provisioner_type: cdktf.stringToTerraform(struct!.provisionerType),
    provisioner_version: cdktf.stringToTerraform(struct!.provisionerVersion),
    release_pipeline: cdktf.stringToTerraform(struct!.releasePipeline),
  }
}


export function dataHarnessPlatformInfraModuleTestingMetadataToHclTerraform(struct?: DataHarnessPlatformInfraModuleTestingMetadataOutputReference | DataHarnessPlatformInfraModuleTestingMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org: {
      value: cdktf.stringToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipelines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pipelines),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_connector: {
      value: cdktf.stringToHclTerraform(struct!.providerConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_type: {
      value: cdktf.stringToHclTerraform(struct!.provisionerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_version: {
      value: cdktf.stringToHclTerraform(struct!.provisionerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_pipeline: {
      value: cdktf.stringToHclTerraform(struct!.releasePipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformInfraModuleTestingMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformInfraModuleTestingMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._pipelines !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelines = this._pipelines;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._providerConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnector = this._providerConnector;
    }
    if (this._provisionerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerType = this._provisionerType;
    }
    if (this._provisionerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerVersion = this._provisionerVersion;
    }
    if (this._releasePipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.releasePipeline = this._releasePipeline;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformInfraModuleTestingMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._org = undefined;
      this._pipelines = undefined;
      this._project = undefined;
      this._providerConnector = undefined;
      this._provisionerType = undefined;
      this._provisionerVersion = undefined;
      this._releasePipeline = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._org = value.org;
      this._pipelines = value.pipelines;
      this._project = value.project;
      this._providerConnector = value.providerConnector;
      this._provisionerType = value.provisionerType;
      this._provisionerVersion = value.provisionerVersion;
      this._releasePipeline = value.releasePipeline;
    }
  }

  // account - computed: true, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // org - computed: true, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // pipelines - computed: true, optional: true, required: false
  private _pipelines?: string[]; 
  public get pipelines() {
    return this.getListAttribute('pipelines');
  }
  public set pipelines(value: string[]) {
    this._pipelines = value;
  }
  public resetPipelines() {
    this._pipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesInput() {
    return this._pipelines;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // provider_connector - computed: true, optional: true, required: false
  private _providerConnector?: string; 
  public get providerConnector() {
    return this.getStringAttribute('provider_connector');
  }
  public set providerConnector(value: string) {
    this._providerConnector = value;
  }
  public resetProviderConnector() {
    this._providerConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorInput() {
    return this._providerConnector;
  }

  // provisioner_type - computed: true, optional: true, required: false
  private _provisionerType?: string; 
  public get provisionerType() {
    return this.getStringAttribute('provisioner_type');
  }
  public set provisionerType(value: string) {
    this._provisionerType = value;
  }
  public resetProvisionerType() {
    this._provisionerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerTypeInput() {
    return this._provisionerType;
  }

  // provisioner_version - computed: true, optional: true, required: false
  private _provisionerVersion?: string; 
  public get provisionerVersion() {
    return this.getStringAttribute('provisioner_version');
  }
  public set provisionerVersion(value: string) {
    this._provisionerVersion = value;
  }
  public resetProvisionerVersion() {
    this._provisionerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerVersionInput() {
    return this._provisionerVersion;
  }

  // release_pipeline - computed: true, optional: true, required: false
  private _releasePipeline?: string; 
  public get releasePipeline() {
    return this.getStringAttribute('release_pipeline');
  }
  public set releasePipeline(value: string) {
    this._releasePipeline = value;
  }
  public resetReleasePipeline() {
    this._releasePipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasePipelineInput() {
    return this._releasePipeline;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module harness_platform_infra_module}
*/
export class DataHarnessPlatformInfraModule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_infra_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformInfraModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformInfraModule to import
  * @param importFromId The id of the existing DataHarnessPlatformInfraModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformInfraModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_infra_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_module harness_platform_infra_module} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformInfraModuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformInfraModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_infra_module',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._created = config.created;
    this._description = config.description;
    this._gitTagStyle = config.gitTagStyle;
    this._id = config.id;
    this._moduleError = config.moduleError;
    this._name = config.name;
    this._org = config.org;
    this._project = config.project;
    this._repository = config.repository;
    this._repositoryBranch = config.repositoryBranch;
    this._repositoryCommit = config.repositoryCommit;
    this._repositoryConnector = config.repositoryConnector;
    this._repositoryPath = config.repositoryPath;
    this._repositoryUrl = config.repositoryUrl;
    this._synced = config.synced;
    this._system = config.systemAttribute;
    this._tags = config.tags;
    this._testingEnabled = config.testingEnabled;
    this._updated = config.updated;
    this._versions = config.versions;
    this._testingMetadata.internalValue = config.testingMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // created - computed: true, optional: true, required: false
  private _created?: number; 
  public get created() {
    return this.getNumberAttribute('created');
  }
  public set created(value: number) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // git_tag_style - computed: true, optional: true, required: false
  private _gitTagStyle?: string; 
  public get gitTagStyle() {
    return this.getStringAttribute('git_tag_style');
  }
  public set gitTagStyle(value: string) {
    this._gitTagStyle = value;
  }
  public resetGitTagStyle() {
    this._gitTagStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitTagStyleInput() {
    return this._gitTagStyle;
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

  // module_error - computed: true, optional: true, required: false
  private _moduleError?: string; 
  public get moduleError() {
    return this.getStringAttribute('module_error');
  }
  public set moduleError(value: string) {
    this._moduleError = value;
  }
  public resetModuleError() {
    this._moduleError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleErrorInput() {
    return this._moduleError;
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

  // org - computed: true, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // repository - computed: true, optional: true, required: false
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

  // repository_branch - computed: true, optional: true, required: false
  private _repositoryBranch?: string; 
  public get repositoryBranch() {
    return this.getStringAttribute('repository_branch');
  }
  public set repositoryBranch(value: string) {
    this._repositoryBranch = value;
  }
  public resetRepositoryBranch() {
    this._repositoryBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryBranchInput() {
    return this._repositoryBranch;
  }

  // repository_commit - computed: true, optional: true, required: false
  private _repositoryCommit?: string; 
  public get repositoryCommit() {
    return this.getStringAttribute('repository_commit');
  }
  public set repositoryCommit(value: string) {
    this._repositoryCommit = value;
  }
  public resetRepositoryCommit() {
    this._repositoryCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCommitInput() {
    return this._repositoryCommit;
  }

  // repository_connector - computed: true, optional: true, required: false
  private _repositoryConnector?: string; 
  public get repositoryConnector() {
    return this.getStringAttribute('repository_connector');
  }
  public set repositoryConnector(value: string) {
    this._repositoryConnector = value;
  }
  public resetRepositoryConnector() {
    this._repositoryConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryConnectorInput() {
    return this._repositoryConnector;
  }

  // repository_path - computed: true, optional: true, required: false
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  public resetRepositoryPath() {
    this._repositoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }

  // repository_url - computed: true, optional: true, required: false
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

  // synced - computed: true, optional: true, required: false
  private _synced?: number; 
  public get synced() {
    return this.getNumberAttribute('synced');
  }
  public set synced(value: number) {
    this._synced = value;
  }
  public resetSynced() {
    this._synced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncedInput() {
    return this._synced;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // testing_enabled - computed: true, optional: true, required: false
  private _testingEnabled?: boolean | cdktf.IResolvable; 
  public get testingEnabled() {
    return this.getBooleanAttribute('testing_enabled');
  }
  public set testingEnabled(value: boolean | cdktf.IResolvable) {
    this._testingEnabled = value;
  }
  public resetTestingEnabled() {
    this._testingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingEnabledInput() {
    return this._testingEnabled;
  }

  // updated - computed: true, optional: true, required: false
  private _updated?: number; 
  public get updated() {
    return this.getNumberAttribute('updated');
  }
  public set updated(value: number) {
    this._updated = value;
  }
  public resetUpdated() {
    this._updated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }

  // testing_metadata - computed: false, optional: true, required: false
  private _testingMetadata = new DataHarnessPlatformInfraModuleTestingMetadataOutputReference(this, "testing_metadata");
  public get testingMetadata() {
    return this._testingMetadata;
  }
  public putTestingMetadata(value: DataHarnessPlatformInfraModuleTestingMetadata) {
    this._testingMetadata.internalValue = value;
  }
  public resetTestingMetadata() {
    this._testingMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingMetadataInput() {
    return this._testingMetadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      created: cdktf.numberToTerraform(this._created),
      description: cdktf.stringToTerraform(this._description),
      git_tag_style: cdktf.stringToTerraform(this._gitTagStyle),
      id: cdktf.stringToTerraform(this._id),
      module_error: cdktf.stringToTerraform(this._moduleError),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      project: cdktf.stringToTerraform(this._project),
      repository: cdktf.stringToTerraform(this._repository),
      repository_branch: cdktf.stringToTerraform(this._repositoryBranch),
      repository_commit: cdktf.stringToTerraform(this._repositoryCommit),
      repository_connector: cdktf.stringToTerraform(this._repositoryConnector),
      repository_path: cdktf.stringToTerraform(this._repositoryPath),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      synced: cdktf.numberToTerraform(this._synced),
      system: cdktf.stringToTerraform(this._system),
      tags: cdktf.stringToTerraform(this._tags),
      testing_enabled: cdktf.booleanToTerraform(this._testingEnabled),
      updated: cdktf.numberToTerraform(this._updated),
      versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versions),
      testing_metadata: dataHarnessPlatformInfraModuleTestingMetadataToTerraform(this._testingMetadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created: {
        value: cdktf.numberToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_tag_style: {
        value: cdktf.stringToHclTerraform(this._gitTagStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_error: {
        value: cdktf.stringToHclTerraform(this._moduleError),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
      repository_branch: {
        value: cdktf.stringToHclTerraform(this._repositoryBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_commit: {
        value: cdktf.stringToHclTerraform(this._repositoryCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_connector: {
        value: cdktf.stringToHclTerraform(this._repositoryConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_path: {
        value: cdktf.stringToHclTerraform(this._repositoryPath),
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
      synced: {
        value: cdktf.numberToHclTerraform(this._synced),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system: {
        value: cdktf.stringToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      testing_enabled: {
        value: cdktf.booleanToHclTerraform(this._testingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      updated: {
        value: cdktf.numberToHclTerraform(this._updated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._versions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      testing_metadata: {
        value: dataHarnessPlatformInfraModuleTestingMetadataToHclTerraform(this._testingMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformInfraModuleTestingMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
