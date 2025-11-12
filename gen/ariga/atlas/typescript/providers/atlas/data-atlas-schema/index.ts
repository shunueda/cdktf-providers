// https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAtlasSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Atlas HCL configuration content. Use abspath(path.module) when referencing local files or directories, for example: `file://${abspath(path.module)}/migrations`. See https://atlasgo.io/hcl/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#config DataAtlasSchema#config}
  */
  readonly config?: string;
  /**
  * The url of the dev-db see https://atlasgo.io/cli/url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#dev_url DataAtlasSchema#dev_url}
  */
  readonly devUrl?: string;
  /**
  * The name of the environment to be picked from the Atlas configuration. Default: tf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#env_name DataAtlasSchema#env_name}
  */
  readonly envName?: string;
  /**
  * The schema definition of the database. This attribute can be HCL schema or an URL to HCL/SQL file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#src DataAtlasSchema#src}
  */
  readonly src: string;
  /**
  * The map of variables used in the Atlas configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#variables DataAtlasSchema#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#cloud DataAtlasSchema#cloud}
  */
  readonly cloud?: DataAtlasSchemaCloud;
}
export interface DataAtlasSchemaCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#project DataAtlasSchema#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#repo DataAtlasSchema#repo}
  */
  readonly repo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#token DataAtlasSchema#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#url DataAtlasSchema#url}
  */
  readonly url?: string;
}

export function dataAtlasSchemaCloudToTerraform(struct?: DataAtlasSchemaCloud | cdktf.IResolvable): any {
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


export function dataAtlasSchemaCloudToHclTerraform(struct?: DataAtlasSchemaCloud | cdktf.IResolvable): any {
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

export class DataAtlasSchemaCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAtlasSchemaCloud | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAtlasSchemaCloud | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema atlas_schema}
*/
export class DataAtlasSchema extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "atlas_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAtlasSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAtlasSchema to import
  * @param importFromId The id of the existing DataAtlasSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAtlasSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "atlas_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/data-sources/schema atlas_schema} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAtlasSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DataAtlasSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'atlas_schema',
      terraformGeneratorMetadata: {
        providerName: 'atlas',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
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
    this._envName = config.envName;
    this._src = config.src;
    this._variables = config.variables;
    this._cloud.internalValue = config.cloud;
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

  // hcl - computed: true, optional: false, required: false
  public get hcl() {
    return this.getStringAttribute('hcl');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // src - computed: false, optional: false, required: true
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
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
  private _cloud = new DataAtlasSchemaCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: DataAtlasSchemaCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      dev_url: cdktf.stringToTerraform(this._devUrl),
      env_name: cdktf.stringToTerraform(this._envName),
      src: cdktf.stringToTerraform(this._src),
      variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._variables),
      cloud: dataAtlasSchemaCloudToTerraform(this._cloud.internalValue),
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
      env_name: {
        value: cdktf.stringToHclTerraform(this._envName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._variables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cloud: {
        value: dataAtlasSchemaCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAtlasSchemaCloud",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
