// https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FaasFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#code_text FaasFunction#code_text}
  */
  readonly codeText: string;
  /**
  * Function dependencies to install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#dependencies FaasFunction#dependencies}
  */
  readonly dependencies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#description FaasFunction#description}
  */
  readonly description?: string;
  /**
  * Set to true if function is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#disabled FaasFunction#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable api key authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#enable_api_key FaasFunction#enable_api_key}
  */
  readonly enableApiKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#envs FaasFunction#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#flavor FaasFunction#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#id FaasFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of used api keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#keys FaasFunction#keys}
  */
  readonly keys?: string[];
  /**
  * Main startup method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#main_method FaasFunction#main_method}
  */
  readonly mainMethod: string;
  /**
  * Autoscaling max number of instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#max_instances FaasFunction#max_instances}
  */
  readonly maxInstances: number;
  /**
  * Autoscaling min number of instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#min_instances FaasFunction#min_instances}
  */
  readonly minInstances: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#name FaasFunction#name}
  */
  readonly name: string;
  /**
  * Namespace of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#namespace FaasFunction#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#project_id FaasFunction#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#project_name FaasFunction#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#region_id FaasFunction#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#region_name FaasFunction#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#runtime FaasFunction#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#timeout FaasFunction#timeout}
  */
  readonly timeout: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function gcore_faas_function}
*/
export class FaasFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_faas_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FaasFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FaasFunction to import
  * @param importFromId The id of the existing FaasFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FaasFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_faas_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/faas_function gcore_faas_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FaasFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: FaasFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_faas_function',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.2',
        providerVersionConstraint: '0.32.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._codeText = config.codeText;
    this._dependencies = config.dependencies;
    this._description = config.description;
    this._disabled = config.disabled;
    this._enableApiKey = config.enableApiKey;
    this._envs = config.envs;
    this._flavor = config.flavor;
    this._id = config.id;
    this._keys = config.keys;
    this._mainMethod = config.mainMethod;
    this._maxInstances = config.maxInstances;
    this._minInstances = config.minInstances;
    this._name = config.name;
    this._namespace = config.namespace;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._runtime = config.runtime;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_message - computed: true, optional: false, required: false
  public get buildMessage() {
    return this.getStringAttribute('build_message');
  }

  // build_status - computed: true, optional: false, required: false
  public get buildStatus() {
    return this.getStringAttribute('build_status');
  }

  // code_text - computed: false, optional: false, required: true
  private _codeText?: string; 
  public get codeText() {
    return this.getStringAttribute('code_text');
  }
  public set codeText(value: string) {
    this._codeText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeTextInput() {
    return this._codeText;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: string; 
  public get dependencies() {
    return this.getStringAttribute('dependencies');
  }
  public set dependencies(value: string) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // deploy_status - computed: true, optional: false, required: false
  private _deployStatus = new cdktf.NumberMap(this, "deploy_status");
  public get deployStatus() {
    return this._deployStatus;
  }

  // description - computed: false, optional: true, required: false
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enable_api_key - computed: false, optional: true, required: false
  private _enableApiKey?: boolean | cdktf.IResolvable; 
  public get enableApiKey() {
    return this.getBooleanAttribute('enable_api_key');
  }
  public set enableApiKey(value: boolean | cdktf.IResolvable) {
    this._enableApiKey = value;
  }
  public resetEnableApiKey() {
    this._enableApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApiKeyInput() {
    return this._enableApiKey;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: { [key: string]: string }; 
  public get envs() {
    return this.getStringMapAttribute('envs');
  }
  public set envs(value: { [key: string]: string }) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // main_method - computed: false, optional: false, required: true
  private _mainMethod?: string; 
  public get mainMethod() {
    return this.getStringAttribute('main_method');
  }
  public set mainMethod(value: string) {
    this._mainMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainMethodInput() {
    return this._mainMethod;
  }

  // max_instances - computed: false, optional: false, required: true
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: false, required: true
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_text: cdktf.stringToTerraform(this._codeText),
      dependencies: cdktf.stringToTerraform(this._dependencies),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_api_key: cdktf.booleanToTerraform(this._enableApiKey),
      envs: cdktf.hashMapper(cdktf.stringToTerraform)(this._envs),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keys),
      main_method: cdktf.stringToTerraform(this._mainMethod),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      min_instances: cdktf.numberToTerraform(this._minInstances),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      runtime: cdktf.stringToTerraform(this._runtime),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code_text: {
        value: cdktf.stringToHclTerraform(this._codeText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependencies: {
        value: cdktf.stringToHclTerraform(this._dependencies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_api_key: {
        value: cdktf.booleanToHclTerraform(this._enableApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      envs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._envs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      main_method: {
        value: cdktf.stringToHclTerraform(this._mainMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instances: {
        value: cdktf.numberToHclTerraform(this._maxInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instances: {
        value: cdktf.numberToHclTerraform(this._minInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
