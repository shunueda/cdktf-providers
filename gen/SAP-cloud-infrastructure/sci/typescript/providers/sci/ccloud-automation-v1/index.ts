// https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcloudAutomationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#arguments CcloudAutomationV1#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#chef_attributes CcloudAutomationV1#chef_attributes}
  */
  readonly chefAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#chef_version CcloudAutomationV1#chef_version}
  */
  readonly chefVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#debug CcloudAutomationV1#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#environment CcloudAutomationV1#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#id CcloudAutomationV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#log_level CcloudAutomationV1#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#name CcloudAutomationV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#path CcloudAutomationV1#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#region CcloudAutomationV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#repository CcloudAutomationV1#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#repository_credentials CcloudAutomationV1#repository_credentials}
  */
  readonly repositoryCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#repository_revision CcloudAutomationV1#repository_revision}
  */
  readonly repositoryRevision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#run_list CcloudAutomationV1#run_list}
  */
  readonly runList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#tags CcloudAutomationV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#timeout CcloudAutomationV1#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#type CcloudAutomationV1#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1 ccloud_automation_v1}
*/
export class CcloudAutomationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ccloud_automation_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcloudAutomationV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcloudAutomationV1 to import
  * @param importFromId The id of the existing CcloudAutomationV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcloudAutomationV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ccloud_automation_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sap-cloud-infrastructure/sci/2.2.1/docs/resources/ccloud_automation_v1 ccloud_automation_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcloudAutomationV1Config
  */
  public constructor(scope: Construct, id: string, config: CcloudAutomationV1Config) {
    super(scope, id, {
      terraformResourceType: 'ccloud_automation_v1',
      terraformGeneratorMetadata: {
        providerName: 'sci',
        providerVersion: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arguments = config.arguments;
    this._chefAttributes = config.chefAttributes;
    this._chefVersion = config.chefVersion;
    this._debug = config.debug;
    this._environment = config.environment;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._name = config.name;
    this._path = config.path;
    this._region = config.region;
    this._repository = config.repository;
    this._repositoryCredentials = config.repositoryCredentials;
    this._repositoryRevision = config.repositoryRevision;
    this._runList = config.runList;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // chef_attributes - computed: false, optional: true, required: false
  private _chefAttributes?: string; 
  public get chefAttributes() {
    return this.getStringAttribute('chef_attributes');
  }
  public set chefAttributes(value: string) {
    this._chefAttributes = value;
  }
  public resetChefAttributes() {
    this._chefAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chefAttributesInput() {
    return this._chefAttributes;
  }

  // chef_version - computed: false, optional: true, required: false
  private _chefVersion?: string; 
  public get chefVersion() {
    return this.getStringAttribute('chef_version');
  }
  public set chefVersion(value: string) {
    this._chefVersion = value;
  }
  public resetChefVersion() {
    this._chefVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chefVersionInput() {
    return this._chefVersion;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_authentication_enabled - computed: true, optional: false, required: false
  public get repositoryAuthenticationEnabled() {
    return this.getBooleanAttribute('repository_authentication_enabled');
  }

  // repository_credentials - computed: false, optional: true, required: false
  private _repositoryCredentials?: string; 
  public get repositoryCredentials() {
    return this.getStringAttribute('repository_credentials');
  }
  public set repositoryCredentials(value: string) {
    this._repositoryCredentials = value;
  }
  public resetRepositoryCredentials() {
    this._repositoryCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsInput() {
    return this._repositoryCredentials;
  }

  // repository_revision - computed: false, optional: true, required: false
  private _repositoryRevision?: string; 
  public get repositoryRevision() {
    return this.getStringAttribute('repository_revision');
  }
  public set repositoryRevision(value: string) {
    this._repositoryRevision = value;
  }
  public resetRepositoryRevision() {
    this._repositoryRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryRevisionInput() {
    return this._repositoryRevision;
  }

  // run_list - computed: false, optional: true, required: false
  private _runList?: string[]; 
  public get runList() {
    return this.getListAttribute('run_list');
  }
  public set runList(value: string[]) {
    this._runList = value;
  }
  public resetRunList() {
    this._runList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runListInput() {
    return this._runList;
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

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arguments),
      chef_attributes: cdktf.stringToTerraform(this._chefAttributes),
      chef_version: cdktf.stringToTerraform(this._chefVersion),
      debug: cdktf.booleanToTerraform(this._debug),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      region: cdktf.stringToTerraform(this._region),
      repository: cdktf.stringToTerraform(this._repository),
      repository_credentials: cdktf.stringToTerraform(this._repositoryCredentials),
      repository_revision: cdktf.stringToTerraform(this._repositoryRevision),
      run_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runList),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arguments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arguments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      chef_attributes: {
        value: cdktf.stringToHclTerraform(this._chefAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chef_version: {
        value: cdktf.stringToHclTerraform(this._chefVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      repository_credentials: {
        value: cdktf.stringToHclTerraform(this._repositoryCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_revision: {
        value: cdktf.stringToHclTerraform(this._repositoryRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
