// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InventorySourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credential to use for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#credential_id InventorySource#credential_id}
  */
  readonly credentialId?: number;
  /**
  * The description of the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#description InventorySource#description}
  */
  readonly description?: string;
  /**
  * The value of the variable that determines if the inventory source is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#enabled_value InventorySource#enabled_value}
  */
  readonly enabledValue?: string;
  /**
  * The variable that determines if the inventory source is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#enabled_var InventorySource#enabled_var}
  */
  readonly enabledVar?: string;
  /**
  * The selected execution environment that this inventory will be run in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#execution_environment InventorySource#execution_environment}
  */
  readonly executionEnvironment?: number;
  /**
  * [Obsolete] The group by for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#group_by InventorySource#group_by}
  */
  readonly groupBy?: string;
  /**
  * The host filter for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#host_filter InventorySource#host_filter}
  */
  readonly hostFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#id InventorySource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * [Obsolete] The instance filters for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#instance_filters InventorySource#instance_filters}
  */
  readonly instanceFilters?: string;
  /**
  * The inventory to use for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#inventory_id InventorySource#inventory_id}
  */
  readonly inventoryId: number;
  /**
  * The name of the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#name InventorySource#name}
  */
  readonly name: string;
  /**
  * Whether to overwrite the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#overwrite InventorySource#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Whether to overwrite the inventory source variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#overwrite_vars InventorySource#overwrite_vars}
  */
  readonly overwriteVars?: boolean | cdktf.IResolvable;
  /**
  * The source of the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#source InventorySource#source}
  */
  readonly source?: string;
  /**
  * [Obsolete] The source path for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#source_path InventorySource#source_path}
  */
  readonly sourcePath?: string;
  /**
  * [Obsolete] The source project for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#source_project_id InventorySource#source_project_id}
  */
  readonly sourceProjectId?: number;
  /**
  * [Obsolete] The source regions for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#source_regions InventorySource#source_regions}
  */
  readonly sourceRegions?: string;
  /**
  * The variables for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#source_vars InventorySource#source_vars}
  */
  readonly sourceVars?: string;
  /**
  * The update cache timeout for the inventory source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#update_cache_timeout InventorySource#update_cache_timeout}
  */
  readonly updateCacheTimeout?: number;
  /**
  * Whether to update the inventory source on launch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#update_on_launch InventorySource#update_on_launch}
  */
  readonly updateOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * The verbosity for the inventory source. [0,1,2,3]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#verbosity InventorySource#verbosity}
  */
  readonly verbosity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source awx_inventory_source}
*/
export class InventorySource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_inventory_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InventorySource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InventorySource to import
  * @param importFromId The id of the existing InventorySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InventorySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_inventory_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/inventory_source awx_inventory_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InventorySourceConfig
  */
  public constructor(scope: Construct, id: string, config: InventorySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_inventory_source',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialId = config.credentialId;
    this._description = config.description;
    this._enabledValue = config.enabledValue;
    this._enabledVar = config.enabledVar;
    this._executionEnvironment = config.executionEnvironment;
    this._groupBy = config.groupBy;
    this._hostFilter = config.hostFilter;
    this._id = config.id;
    this._instanceFilters = config.instanceFilters;
    this._inventoryId = config.inventoryId;
    this._name = config.name;
    this._overwrite = config.overwrite;
    this._overwriteVars = config.overwriteVars;
    this._source = config.source;
    this._sourcePath = config.sourcePath;
    this._sourceProjectId = config.sourceProjectId;
    this._sourceRegions = config.sourceRegions;
    this._sourceVars = config.sourceVars;
    this._updateCacheTimeout = config.updateCacheTimeout;
    this._updateOnLaunch = config.updateOnLaunch;
    this._verbosity = config.verbosity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_id - computed: false, optional: true, required: false
  private _credentialId?: number; 
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }
  public set credentialId(value: number) {
    this._credentialId = value;
  }
  public resetCredentialId() {
    this._credentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
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

  // enabled_value - computed: false, optional: true, required: false
  private _enabledValue?: string; 
  public get enabledValue() {
    return this.getStringAttribute('enabled_value');
  }
  public set enabledValue(value: string) {
    this._enabledValue = value;
  }
  public resetEnabledValue() {
    this._enabledValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledValueInput() {
    return this._enabledValue;
  }

  // enabled_var - computed: false, optional: true, required: false
  private _enabledVar?: string; 
  public get enabledVar() {
    return this.getStringAttribute('enabled_var');
  }
  public set enabledVar(value: string) {
    this._enabledVar = value;
  }
  public resetEnabledVar() {
    this._enabledVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledVarInput() {
    return this._enabledVar;
  }

  // execution_environment - computed: false, optional: true, required: false
  private _executionEnvironment?: number; 
  public get executionEnvironment() {
    return this.getNumberAttribute('execution_environment');
  }
  public set executionEnvironment(value: number) {
    this._executionEnvironment = value;
  }
  public resetExecutionEnvironment() {
    this._executionEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEnvironmentInput() {
    return this._executionEnvironment;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // host_filter - computed: false, optional: true, required: false
  private _hostFilter?: string; 
  public get hostFilter() {
    return this.getStringAttribute('host_filter');
  }
  public set hostFilter(value: string) {
    this._hostFilter = value;
  }
  public resetHostFilter() {
    this._hostFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFilterInput() {
    return this._hostFilter;
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

  // instance_filters - computed: false, optional: true, required: false
  private _instanceFilters?: string; 
  public get instanceFilters() {
    return this.getStringAttribute('instance_filters');
  }
  public set instanceFilters(value: string) {
    this._instanceFilters = value;
  }
  public resetInstanceFilters() {
    this._instanceFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFiltersInput() {
    return this._instanceFilters;
  }

  // inventory_id - computed: false, optional: false, required: true
  private _inventoryId?: number; 
  public get inventoryId() {
    return this.getNumberAttribute('inventory_id');
  }
  public set inventoryId(value: number) {
    this._inventoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // overwrite_vars - computed: false, optional: true, required: false
  private _overwriteVars?: boolean | cdktf.IResolvable; 
  public get overwriteVars() {
    return this.getBooleanAttribute('overwrite_vars');
  }
  public set overwriteVars(value: boolean | cdktf.IResolvable) {
    this._overwriteVars = value;
  }
  public resetOverwriteVars() {
    this._overwriteVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteVarsInput() {
    return this._overwriteVars;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_path - computed: false, optional: true, required: false
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  public resetSourcePath() {
    this._sourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // source_project_id - computed: false, optional: true, required: false
  private _sourceProjectId?: number; 
  public get sourceProjectId() {
    return this.getNumberAttribute('source_project_id');
  }
  public set sourceProjectId(value: number) {
    this._sourceProjectId = value;
  }
  public resetSourceProjectId() {
    this._sourceProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProjectIdInput() {
    return this._sourceProjectId;
  }

  // source_regions - computed: false, optional: true, required: false
  private _sourceRegions?: string; 
  public get sourceRegions() {
    return this.getStringAttribute('source_regions');
  }
  public set sourceRegions(value: string) {
    this._sourceRegions = value;
  }
  public resetSourceRegions() {
    this._sourceRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionsInput() {
    return this._sourceRegions;
  }

  // source_vars - computed: false, optional: true, required: false
  private _sourceVars?: string; 
  public get sourceVars() {
    return this.getStringAttribute('source_vars');
  }
  public set sourceVars(value: string) {
    this._sourceVars = value;
  }
  public resetSourceVars() {
    this._sourceVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVarsInput() {
    return this._sourceVars;
  }

  // update_cache_timeout - computed: false, optional: true, required: false
  private _updateCacheTimeout?: number; 
  public get updateCacheTimeout() {
    return this.getNumberAttribute('update_cache_timeout');
  }
  public set updateCacheTimeout(value: number) {
    this._updateCacheTimeout = value;
  }
  public resetUpdateCacheTimeout() {
    this._updateCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCacheTimeoutInput() {
    return this._updateCacheTimeout;
  }

  // update_on_launch - computed: false, optional: true, required: false
  private _updateOnLaunch?: boolean | cdktf.IResolvable; 
  public get updateOnLaunch() {
    return this.getBooleanAttribute('update_on_launch');
  }
  public set updateOnLaunch(value: boolean | cdktf.IResolvable) {
    this._updateOnLaunch = value;
  }
  public resetUpdateOnLaunch() {
    this._updateOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOnLaunchInput() {
    return this._updateOnLaunch;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_id: cdktf.numberToTerraform(this._credentialId),
      description: cdktf.stringToTerraform(this._description),
      enabled_value: cdktf.stringToTerraform(this._enabledValue),
      enabled_var: cdktf.stringToTerraform(this._enabledVar),
      execution_environment: cdktf.numberToTerraform(this._executionEnvironment),
      group_by: cdktf.stringToTerraform(this._groupBy),
      host_filter: cdktf.stringToTerraform(this._hostFilter),
      id: cdktf.stringToTerraform(this._id),
      instance_filters: cdktf.stringToTerraform(this._instanceFilters),
      inventory_id: cdktf.numberToTerraform(this._inventoryId),
      name: cdktf.stringToTerraform(this._name),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      overwrite_vars: cdktf.booleanToTerraform(this._overwriteVars),
      source: cdktf.stringToTerraform(this._source),
      source_path: cdktf.stringToTerraform(this._sourcePath),
      source_project_id: cdktf.numberToTerraform(this._sourceProjectId),
      source_regions: cdktf.stringToTerraform(this._sourceRegions),
      source_vars: cdktf.stringToTerraform(this._sourceVars),
      update_cache_timeout: cdktf.numberToTerraform(this._updateCacheTimeout),
      update_on_launch: cdktf.booleanToTerraform(this._updateOnLaunch),
      verbosity: cdktf.numberToTerraform(this._verbosity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_id: {
        value: cdktf.numberToHclTerraform(this._credentialId),
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
      enabled_value: {
        value: cdktf.stringToHclTerraform(this._enabledValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_var: {
        value: cdktf.stringToHclTerraform(this._enabledVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_environment: {
        value: cdktf.numberToHclTerraform(this._executionEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_by: {
        value: cdktf.stringToHclTerraform(this._groupBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_filter: {
        value: cdktf.stringToHclTerraform(this._hostFilter),
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
      instance_filters: {
        value: cdktf.stringToHclTerraform(this._instanceFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_id: {
        value: cdktf.numberToHclTerraform(this._inventoryId),
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
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      overwrite_vars: {
        value: cdktf.booleanToHclTerraform(this._overwriteVars),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_path: {
        value: cdktf.stringToHclTerraform(this._sourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_project_id: {
        value: cdktf.numberToHclTerraform(this._sourceProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_regions: {
        value: cdktf.stringToHclTerraform(this._sourceRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vars: {
        value: cdktf.stringToHclTerraform(this._sourceVars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._updateCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_on_launch: {
        value: cdktf.booleanToHclTerraform(this._updateOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verbosity: {
        value: cdktf.numberToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
