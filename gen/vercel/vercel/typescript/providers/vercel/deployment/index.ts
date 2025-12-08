// https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Custom Environment to deploy to. If not specified, the deployment will use the standard environments (production/preview).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#custom_environment_id Deployment#custom_environment_id}
  */
  readonly customEnvironmentId?: string;
  /**
  * Set to true to hard delete the Vercel deployment when destroying the Terraform resource. If unspecified, deployments are retained indefinitely. Note that deleted deployments are not recoverable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#delete_on_destroy Deployment#delete_on_destroy}
  */
  readonly deleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * A map of environment variable names to values. These are specific to a Deployment, and can also be configured on the `vercel_project` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#environment Deployment#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * A map of files to be uploaded for the deployment. This should be provided by a `vercel_project_directory` or `vercel_file` data source. Required if `git_source` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#files Deployment#files}
  */
  readonly files?: { [key: string]: string };
  /**
  * Arbitrary key/value metadata to attach to the deployment (equivalent to the Vercel CLI --meta flags).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#meta Deployment#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * If specified then the `path_prefix` will be stripped from the start of file paths as they are uploaded to Vercel. If this is omitted, then any leading `../`s will be stripped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#path_prefix Deployment#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * true if the deployment is a production deployment, meaning production aliases will be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#production Deployment#production}
  */
  readonly production?: boolean | cdktf.IResolvable;
  /**
  * The project ID to add the deployment to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#project_id Deployment#project_id}
  */
  readonly projectId: string;
  /**
  * Project settings that will be applied to the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#project_settings Deployment#project_settings}
  */
  readonly projectSettings?: DeploymentProjectSettings;
  /**
  * The branch or commit hash that should be deployed. Note this will only work if the project is configured to use a Git repository. Required if `files` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#ref Deployment#ref}
  */
  readonly ref?: string;
  /**
  * The team ID to add the deployment to. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#team_id Deployment#team_id}
  */
  readonly teamId?: string;
}
export interface DeploymentProjectSettings {
  /**
  * The build command for this deployment. If omitted, this value will be taken from the project or automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#build_command Deployment#build_command}
  */
  readonly buildCommand?: string;
  /**
  * The framework that is being used for this deployment. If omitted, no framework is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#framework Deployment#framework}
  */
  readonly framework?: string;
  /**
  * The install command for this deployment. If omitted, this value will be taken from the project or automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#install_command Deployment#install_command}
  */
  readonly installCommand?: string;
  /**
  * The output directory of the deployment. If omitted, this value will be taken from the project or automatically detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#output_directory Deployment#output_directory}
  */
  readonly outputDirectory?: string;
  /**
  * The name of a directory or relative path to the source code of your project. When null is used it will default to the project root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#root_directory Deployment#root_directory}
  */
  readonly rootDirectory?: string;
}

export function deploymentProjectSettingsToTerraform(struct?: DeploymentProjectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    framework: cdktf.stringToTerraform(struct!.framework),
    install_command: cdktf.stringToTerraform(struct!.installCommand),
    output_directory: cdktf.stringToTerraform(struct!.outputDirectory),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
  }
}


export function deploymentProjectSettingsToHclTerraform(struct?: DeploymentProjectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_command: {
      value: cdktf.stringToHclTerraform(struct!.buildCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framework: {
      value: cdktf.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_command: {
      value: cdktf.stringToHclTerraform(struct!.installCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_directory: {
      value: cdktf.stringToHclTerraform(struct!.outputDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_directory: {
      value: cdktf.stringToHclTerraform(struct!.rootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentProjectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentProjectSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._installCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.installCommand = this._installCommand;
    }
    if (this._outputDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDirectory = this._outputDirectory;
    }
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProjectSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildCommand = undefined;
      this._framework = undefined;
      this._installCommand = undefined;
      this._outputDirectory = undefined;
      this._rootDirectory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildCommand = value.buildCommand;
      this._framework = value.framework;
      this._installCommand = value.installCommand;
      this._outputDirectory = value.outputDirectory;
      this._rootDirectory = value.rootDirectory;
    }
  }

  // build_command - computed: false, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // install_command - computed: false, optional: true, required: false
  private _installCommand?: string; 
  public get installCommand() {
    return this.getStringAttribute('install_command');
  }
  public set installCommand(value: string) {
    this._installCommand = value;
  }
  public resetInstallCommand() {
    this._installCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCommandInput() {
    return this._installCommand;
  }

  // output_directory - computed: false, optional: true, required: false
  private _outputDirectory?: string; 
  public get outputDirectory() {
    return this.getStringAttribute('output_directory');
  }
  public set outputDirectory(value: string) {
    this._outputDirectory = value;
  }
  public resetOutputDirectory() {
    this._outputDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDirectoryInput() {
    return this._outputDirectory;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment vercel_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/deployment vercel_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_deployment',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.2',
        providerVersionConstraint: '4.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customEnvironmentId = config.customEnvironmentId;
    this._deleteOnDestroy = config.deleteOnDestroy;
    this._environment = config.environment;
    this._files = config.files;
    this._meta = config.meta;
    this._pathPrefix = config.pathPrefix;
    this._production = config.production;
    this._projectId = config.projectId;
    this._projectSettings.internalValue = config.projectSettings;
    this._ref = config.ref;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_environment_id - computed: false, optional: true, required: false
  private _customEnvironmentId?: string; 
  public get customEnvironmentId() {
    return this.getStringAttribute('custom_environment_id');
  }
  public set customEnvironmentId(value: string) {
    this._customEnvironmentId = value;
  }
  public resetCustomEnvironmentId() {
    this._customEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentIdInput() {
    return this._customEnvironmentId;
  }

  // delete_on_destroy - computed: false, optional: true, required: false
  private _deleteOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteOnDestroy() {
    return this.getBooleanAttribute('delete_on_destroy');
  }
  public set deleteOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteOnDestroy = value;
  }
  public resetDeleteOnDestroy() {
    this._deleteOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnDestroyInput() {
    return this._deleteOnDestroy;
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
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

  // files - computed: false, optional: true, required: false
  private _files?: { [key: string]: string }; 
  public get files() {
    return this.getStringMapAttribute('files');
  }
  public set files(value: { [key: string]: string }) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: true, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // production - computed: true, optional: true, required: false
  private _production?: boolean | cdktf.IResolvable; 
  public get production() {
    return this.getBooleanAttribute('production');
  }
  public set production(value: boolean | cdktf.IResolvable) {
    this._production = value;
  }
  public resetProduction() {
    this._production = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_settings - computed: false, optional: true, required: false
  private _projectSettings = new DeploymentProjectSettingsOutputReference(this, "project_settings");
  public get projectSettings() {
    return this._projectSettings;
  }
  public putProjectSettings(value: DeploymentProjectSettings) {
    this._projectSettings.internalValue = value;
  }
  public resetProjectSettings() {
    this._projectSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSettingsInput() {
    return this._projectSettings.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_environment_id: cdktf.stringToTerraform(this._customEnvironmentId),
      delete_on_destroy: cdktf.booleanToTerraform(this._deleteOnDestroy),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      files: cdktf.hashMapper(cdktf.stringToTerraform)(this._files),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      production: cdktf.booleanToTerraform(this._production),
      project_id: cdktf.stringToTerraform(this._projectId),
      project_settings: deploymentProjectSettingsToTerraform(this._projectSettings.internalValue),
      ref: cdktf.stringToTerraform(this._ref),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_environment_id: {
        value: cdktf.stringToHclTerraform(this._customEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      files: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._files),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      path_prefix: {
        value: cdktf.stringToHclTerraform(this._pathPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      production: {
        value: cdktf.booleanToHclTerraform(this._production),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_settings: {
        value: deploymentProjectSettingsToHclTerraform(this._projectSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentProjectSettings",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
