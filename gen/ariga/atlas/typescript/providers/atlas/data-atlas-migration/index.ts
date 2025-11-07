// https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAtlasMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Atlas HCL configuration content. Use abspath(path.module) when referencing local files or directories, for example: `file://${abspath(path.module)}/migrations`. See https://atlasgo.io/hcl/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#config DataAtlasMigration#config}
  */
  readonly config?: string;
  /**
  * The URL of the dev-db. See https://atlasgo.io/cli/url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#dev_url DataAtlasMigration#dev_url}
  */
  readonly devUrl?: string;
  /**
  * Select migration directory using URL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#dir DataAtlasMigration#dir}
  */
  readonly dir?: string;
  /**
  * The name of the environment used for reporting runs to Atlas Cloud. Default: tf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#env_name DataAtlasMigration#env_name}
  */
  readonly envName?: string;
  /**
  * The name of the schema the revisions table resides in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#revisions_schema DataAtlasMigration#revisions_schema}
  */
  readonly revisionsSchema?: string;
  /**
  * [driver://username:password@address/dbname?param=value] select a resource using the URL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#url DataAtlasMigration#url}
  */
  readonly url?: string;
  /**
  * Stringify JSON object containing variables to be used inside the Atlas configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#variables DataAtlasMigration#variables}
  */
  readonly variables?: string;
  /**
  * cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#cloud DataAtlasMigration#cloud}
  */
  readonly cloud?: DataAtlasMigrationCloud;
  /**
  * remote_dir block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#remote_dir DataAtlasMigration#remote_dir}
  */
  readonly remoteDir?: DataAtlasMigrationRemoteDir;
}
export interface DataAtlasMigrationCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#project DataAtlasMigration#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#repo DataAtlasMigration#repo}
  */
  readonly repo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#token DataAtlasMigration#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#url DataAtlasMigration#url}
  */
  readonly url?: string;
}

export function dataAtlasMigrationCloudToTerraform(struct?: DataAtlasMigrationCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    repo: cdktf.stringToTerraform(struct!.repo),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataAtlasMigrationCloudToHclTerraform(struct?: DataAtlasMigrationCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAtlasMigrationCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAtlasMigrationCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAtlasMigrationCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._project = undefined;
      this._repo = undefined;
      this._token = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._project = value.project;
      this._repo = value.repo;
      this._token = value.token;
      this._url = value.url;
    }
  }

  // project - computed: false, optional: true, required: false
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

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataAtlasMigrationRemoteDir {
  /**
  * The name of the remote directory. This attribute is required when remote_dir is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#name DataAtlasMigration#name}
  */
  readonly name?: string;
  /**
  * The tag of the remote directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#tag DataAtlasMigration#tag}
  */
  readonly tag?: string;
}

export function dataAtlasMigrationRemoteDirToTerraform(struct?: DataAtlasMigrationRemoteDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataAtlasMigrationRemoteDirToHclTerraform(struct?: DataAtlasMigrationRemoteDir | cdktf.IResolvable): any {
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
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAtlasMigrationRemoteDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAtlasMigrationRemoteDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAtlasMigrationRemoteDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration atlas_migration}
*/
export class DataAtlasMigration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "atlas_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAtlasMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAtlasMigration to import
  * @param importFromId The id of the existing DataAtlasMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAtlasMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "atlas_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/migration atlas_migration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAtlasMigrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAtlasMigrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'atlas_migration',
      terraformGeneratorMetadata: {
        providerName: 'atlas',
        providerVersion: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._devUrl = config.devUrl;
    this._dir = config.dir;
    this._envName = config.envName;
    this._revisionsSchema = config.revisionsSchema;
    this._url = config.url;
    this._variables = config.variables;
    this._cloud.internalValue = config.cloud;
    this._remoteDir.internalValue = config.remoteDir;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // current - computed: true, optional: false, required: false
  public get current() {
    return this.getStringAttribute('current');
  }

  // dev_url - computed: false, optional: true, required: false
  private _devUrl?: string; 
  public get devUrl() {
    return this.getStringAttribute('dev_url');
  }
  public set devUrl(value: string) {
    this._devUrl = value;
  }
  public resetDevUrl() {
    this._devUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devUrlInput() {
    return this._devUrl;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // env_name - computed: false, optional: true, required: false
  private _envName?: string; 
  public get envName() {
    return this.getStringAttribute('env_name');
  }
  public set envName(value: string) {
    this._envName = value;
  }
  public resetEnvName() {
    this._envName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envNameInput() {
    return this._envName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getStringAttribute('latest');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // revisions_schema - computed: false, optional: true, required: false
  private _revisionsSchema?: string; 
  public get revisionsSchema() {
    return this.getStringAttribute('revisions_schema');
  }
  public set revisionsSchema(value: string) {
    this._revisionsSchema = value;
  }
  public resetRevisionsSchema() {
    this._revisionsSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionsSchemaInput() {
    return this._revisionsSchema;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud = new DataAtlasMigrationCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: DataAtlasMigrationCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // remote_dir - computed: false, optional: true, required: false
  private _remoteDir = new DataAtlasMigrationRemoteDirOutputReference(this, "remote_dir");
  public get remoteDir() {
    return this._remoteDir;
  }
  public putRemoteDir(value: DataAtlasMigrationRemoteDir) {
    this._remoteDir.internalValue = value;
  }
  public resetRemoteDir() {
    this._remoteDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDirInput() {
    return this._remoteDir.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      dev_url: cdktf.stringToTerraform(this._devUrl),
      dir: cdktf.stringToTerraform(this._dir),
      env_name: cdktf.stringToTerraform(this._envName),
      revisions_schema: cdktf.stringToTerraform(this._revisionsSchema),
      url: cdktf.stringToTerraform(this._url),
      variables: cdktf.stringToTerraform(this._variables),
      cloud: dataAtlasMigrationCloudToTerraform(this._cloud.internalValue),
      remote_dir: dataAtlasMigrationRemoteDirToTerraform(this._remoteDir.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_url: {
        value: cdktf.stringToHclTerraform(this._devUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dir: {
        value: cdktf.stringToHclTerraform(this._dir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_name: {
        value: cdktf.stringToHclTerraform(this._envName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revisions_schema: {
        value: cdktf.stringToHclTerraform(this._revisionsSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.stringToHclTerraform(this._variables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: dataAtlasMigrationCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAtlasMigrationCloud",
      },
      remote_dir: {
        value: dataAtlasMigrationRemoteDirToHclTerraform(this._remoteDir.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAtlasMigrationRemoteDir",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
