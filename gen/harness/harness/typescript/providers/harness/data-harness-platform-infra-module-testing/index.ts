// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformInfraModuleTestingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#id DataHarnessPlatformInfraModuleTesting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the module to enable testing for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#module_id DataHarnessPlatformInfraModuleTesting#module_id}
  */
  readonly moduleId: string;
  /**
  * Organization identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#org DataHarnessPlatformInfraModuleTesting#org}
  */
  readonly org: string;
  /**
  * List of pipeline IDs to create webhooks for triggering test executions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#pipelines DataHarnessPlatformInfraModuleTesting#pipelines}
  */
  readonly pipelines: string[];
  /**
  * Project identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#project DataHarnessPlatformInfraModuleTesting#project}
  */
  readonly project: string;
  /**
  * Provider connector for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#provider_connector DataHarnessPlatformInfraModuleTesting#provider_connector}
  */
  readonly providerConnector: string;
  /**
  * Provisioner type for testing purposes (e.g., terraform, tofu)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#provisioner_type DataHarnessPlatformInfraModuleTesting#provisioner_type}
  */
  readonly provisionerType: string;
  /**
  * Provisioner version for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#provisioner_version DataHarnessPlatformInfraModuleTesting#provisioner_version}
  */
  readonly provisionerVersion: string;
  /**
  * Pipeline ID to create webhooks for releases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#release_pipeline DataHarnessPlatformInfraModuleTesting#release_pipeline}
  */
  readonly releasePipeline?: string;
  /**
  * Whether testing is enabled for the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#testing_enabled DataHarnessPlatformInfraModuleTesting#testing_enabled}
  */
  readonly testingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Timestamp when the module was last modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#updated DataHarnessPlatformInfraModuleTesting#updated}
  */
  readonly updated?: number;
  /**
  * Versions of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#versions DataHarnessPlatformInfraModuleTesting#versions}
  */
  readonly versions?: string[];
  /**
  * testing_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#testing_metadata DataHarnessPlatformInfraModuleTesting#testing_metadata}
  */
  readonly testingMetadata?: DataHarnessPlatformInfraModuleTestingTestingMetadata;
}
export interface DataHarnessPlatformInfraModuleTestingTestingMetadata {
  /**
  * Account is the internal customer account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#account DataHarnessPlatformInfraModuleTesting#account}
  */
  readonly account?: string;
  /**
  * Organization identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#org DataHarnessPlatformInfraModuleTesting#org}
  */
  readonly org?: string;
  /**
  * Pipelines where the testing is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#pipelines DataHarnessPlatformInfraModuleTesting#pipelines}
  */
  readonly pipelines?: string[];
  /**
  * Project identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#project DataHarnessPlatformInfraModuleTesting#project}
  */
  readonly project?: string;
  /**
  * Provider connector for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#provider_connector DataHarnessPlatformInfraModuleTesting#provider_connector}
  */
  readonly providerConnector?: string;
  /**
  * Provisioner type for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#provisioner_type DataHarnessPlatformInfraModuleTesting#provisioner_type}
  */
  readonly provisionerType?: string;
  /**
  * Provisioner version for testing purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#provisioner_version DataHarnessPlatformInfraModuleTesting#provisioner_version}
  */
  readonly provisionerVersion?: string;
  /**
  * Release pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#release_pipeline DataHarnessPlatformInfraModuleTesting#release_pipeline}
  */
  readonly releasePipeline?: string;
}

export function dataHarnessPlatformInfraModuleTestingTestingMetadataToTerraform(struct?: DataHarnessPlatformInfraModuleTestingTestingMetadataOutputReference | DataHarnessPlatformInfraModuleTestingTestingMetadata): any {
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


export function dataHarnessPlatformInfraModuleTestingTestingMetadataToHclTerraform(struct?: DataHarnessPlatformInfraModuleTestingTestingMetadataOutputReference | DataHarnessPlatformInfraModuleTestingTestingMetadata): any {
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

export class DataHarnessPlatformInfraModuleTestingTestingMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformInfraModuleTestingTestingMetadata | undefined {
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

  public set internalValue(value: DataHarnessPlatformInfraModuleTestingTestingMetadata | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing harness_platform_infra_module_testing}
*/
export class DataHarnessPlatformInfraModuleTesting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_infra_module_testing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformInfraModuleTesting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformInfraModuleTesting to import
  * @param importFromId The id of the existing DataHarnessPlatformInfraModuleTesting that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformInfraModuleTesting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_infra_module_testing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_infra_module_testing harness_platform_infra_module_testing} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformInfraModuleTestingConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformInfraModuleTestingConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_infra_module_testing',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
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
    this._moduleId = config.moduleId;
    this._org = config.org;
    this._pipelines = config.pipelines;
    this._project = config.project;
    this._providerConnector = config.providerConnector;
    this._provisionerType = config.provisionerType;
    this._provisionerVersion = config.provisionerVersion;
    this._releasePipeline = config.releasePipeline;
    this._testingEnabled = config.testingEnabled;
    this._updated = config.updated;
    this._versions = config.versions;
    this._testingMetadata.internalValue = config.testingMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // git_tag_style - computed: true, optional: false, required: false
  public get gitTagStyle() {
    return this.getStringAttribute('git_tag_style');
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

  // module_error - computed: true, optional: false, required: false
  public get moduleError() {
    return this.getStringAttribute('module_error');
  }

  // module_id - computed: false, optional: false, required: true
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // pipelines - computed: false, optional: false, required: true
  private _pipelines?: string[]; 
  public get pipelines() {
    return this.getListAttribute('pipelines');
  }
  public set pipelines(value: string[]) {
    this._pipelines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesInput() {
    return this._pipelines;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // provider_connector - computed: false, optional: false, required: true
  private _providerConnector?: string; 
  public get providerConnector() {
    return this.getStringAttribute('provider_connector');
  }
  public set providerConnector(value: string) {
    this._providerConnector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorInput() {
    return this._providerConnector;
  }

  // provisioner_type - computed: false, optional: false, required: true
  private _provisionerType?: string; 
  public get provisionerType() {
    return this.getStringAttribute('provisioner_type');
  }
  public set provisionerType(value: string) {
    this._provisionerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerTypeInput() {
    return this._provisionerType;
  }

  // provisioner_version - computed: false, optional: false, required: true
  private _provisionerVersion?: string; 
  public get provisionerVersion() {
    return this.getStringAttribute('provisioner_version');
  }
  public set provisionerVersion(value: string) {
    this._provisionerVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerVersionInput() {
    return this._provisionerVersion;
  }

  // release_pipeline - computed: false, optional: true, required: false
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

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // repository_branch - computed: true, optional: false, required: false
  public get repositoryBranch() {
    return this.getStringAttribute('repository_branch');
  }

  // repository_commit - computed: true, optional: false, required: false
  public get repositoryCommit() {
    return this.getStringAttribute('repository_commit');
  }

  // repository_connector - computed: true, optional: false, required: false
  public get repositoryConnector() {
    return this.getStringAttribute('repository_connector');
  }

  // repository_path - computed: true, optional: false, required: false
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // synced - computed: true, optional: false, required: false
  public get synced() {
    return this.getNumberAttribute('synced');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
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
  private _testingMetadata = new DataHarnessPlatformInfraModuleTestingTestingMetadataOutputReference(this, "testing_metadata");
  public get testingMetadata() {
    return this._testingMetadata;
  }
  public putTestingMetadata(value: DataHarnessPlatformInfraModuleTestingTestingMetadata) {
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
      id: cdktf.stringToTerraform(this._id),
      module_id: cdktf.stringToTerraform(this._moduleId),
      org: cdktf.stringToTerraform(this._org),
      pipelines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pipelines),
      project: cdktf.stringToTerraform(this._project),
      provider_connector: cdktf.stringToTerraform(this._providerConnector),
      provisioner_type: cdktf.stringToTerraform(this._provisionerType),
      provisioner_version: cdktf.stringToTerraform(this._provisionerVersion),
      release_pipeline: cdktf.stringToTerraform(this._releasePipeline),
      testing_enabled: cdktf.booleanToTerraform(this._testingEnabled),
      updated: cdktf.numberToTerraform(this._updated),
      versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versions),
      testing_metadata: dataHarnessPlatformInfraModuleTestingTestingMetadataToTerraform(this._testingMetadata.internalValue),
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
      module_id: {
        value: cdktf.stringToHclTerraform(this._moduleId),
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
      pipelines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pipelines),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_connector: {
        value: cdktf.stringToHclTerraform(this._providerConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioner_type: {
        value: cdktf.stringToHclTerraform(this._provisionerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioner_version: {
        value: cdktf.stringToHclTerraform(this._provisionerVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_pipeline: {
        value: cdktf.stringToHclTerraform(this._releasePipeline),
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
        value: dataHarnessPlatformInfraModuleTestingTestingMetadataToHclTerraform(this._testingMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformInfraModuleTestingTestingMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
