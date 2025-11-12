// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#creation_date IndexSet#creation_date}
  */
  readonly creationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#default IndexSet#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#description IndexSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#field_type_refresh_interval IndexSet#field_type_refresh_interval}
  */
  readonly fieldTypeRefreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#id IndexSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#index_analyzer IndexSet#index_analyzer}
  */
  readonly indexAnalyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#index_optimization_disabled IndexSet#index_optimization_disabled}
  */
  readonly indexOptimizationDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#index_optimization_max_num_segments IndexSet#index_optimization_max_num_segments}
  */
  readonly indexOptimizationMaxNumSegments: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#index_prefix IndexSet#index_prefix}
  */
  readonly indexPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#replicas IndexSet#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#retention_strategy IndexSet#retention_strategy}
  */
  readonly retentionStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#retention_strategy_class IndexSet#retention_strategy_class}
  */
  readonly retentionStrategyClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#rotation_strategy IndexSet#rotation_strategy}
  */
  readonly rotationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#rotation_strategy_class IndexSet#rotation_strategy_class}
  */
  readonly rotationStrategyClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#shards IndexSet#shards}
  */
  readonly shards: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#title IndexSet#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#writable IndexSet#writable}
  */
  readonly writable?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set graylog_index_set}
*/
export class IndexSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog_index_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexSet to import
  * @param importFromId The id of the existing IndexSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog_index_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/index_set graylog_index_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexSetConfig
  */
  public constructor(scope: Construct, id: string, config: IndexSetConfig) {
    super(scope, id, {
      terraformResourceType: 'graylog_index_set',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._creationDate = config.creationDate;
    this._default = config.default;
    this._description = config.description;
    this._fieldTypeRefreshInterval = config.fieldTypeRefreshInterval;
    this._id = config.id;
    this._indexAnalyzer = config.indexAnalyzer;
    this._indexOptimizationDisabled = config.indexOptimizationDisabled;
    this._indexOptimizationMaxNumSegments = config.indexOptimizationMaxNumSegments;
    this._indexPrefix = config.indexPrefix;
    this._replicas = config.replicas;
    this._retentionStrategy = config.retentionStrategy;
    this._retentionStrategyClass = config.retentionStrategyClass;
    this._rotationStrategy = config.rotationStrategy;
    this._rotationStrategyClass = config.rotationStrategyClass;
    this._shards = config.shards;
    this._title = config.title;
    this._writable = config.writable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: true, required: false
  private _creationDate?: string; 
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }
  public set creationDate(value: string) {
    this._creationDate = value;
  }
  public resetCreationDate() {
    this._creationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationDateInput() {
    return this._creationDate;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // field_type_refresh_interval - computed: false, optional: true, required: false
  private _fieldTypeRefreshInterval?: number; 
  public get fieldTypeRefreshInterval() {
    return this.getNumberAttribute('field_type_refresh_interval');
  }
  public set fieldTypeRefreshInterval(value: number) {
    this._fieldTypeRefreshInterval = value;
  }
  public resetFieldTypeRefreshInterval() {
    this._fieldTypeRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeRefreshIntervalInput() {
    return this._fieldTypeRefreshInterval;
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

  // index_analyzer - computed: false, optional: false, required: true
  private _indexAnalyzer?: string; 
  public get indexAnalyzer() {
    return this.getStringAttribute('index_analyzer');
  }
  public set indexAnalyzer(value: string) {
    this._indexAnalyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexAnalyzerInput() {
    return this._indexAnalyzer;
  }

  // index_optimization_disabled - computed: false, optional: true, required: false
  private _indexOptimizationDisabled?: boolean | cdktf.IResolvable; 
  public get indexOptimizationDisabled() {
    return this.getBooleanAttribute('index_optimization_disabled');
  }
  public set indexOptimizationDisabled(value: boolean | cdktf.IResolvable) {
    this._indexOptimizationDisabled = value;
  }
  public resetIndexOptimizationDisabled() {
    this._indexOptimizationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexOptimizationDisabledInput() {
    return this._indexOptimizationDisabled;
  }

  // index_optimization_max_num_segments - computed: false, optional: false, required: true
  private _indexOptimizationMaxNumSegments?: number; 
  public get indexOptimizationMaxNumSegments() {
    return this.getNumberAttribute('index_optimization_max_num_segments');
  }
  public set indexOptimizationMaxNumSegments(value: number) {
    this._indexOptimizationMaxNumSegments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexOptimizationMaxNumSegmentsInput() {
    return this._indexOptimizationMaxNumSegments;
  }

  // index_prefix - computed: false, optional: false, required: true
  private _indexPrefix?: string; 
  public get indexPrefix() {
    return this.getStringAttribute('index_prefix');
  }
  public set indexPrefix(value: string) {
    this._indexPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPrefixInput() {
    return this._indexPrefix;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // retention_strategy - computed: false, optional: false, required: true
  private _retentionStrategy?: string; 
  public get retentionStrategy() {
    return this.getStringAttribute('retention_strategy');
  }
  public set retentionStrategy(value: string) {
    this._retentionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionStrategyInput() {
    return this._retentionStrategy;
  }

  // retention_strategy_class - computed: false, optional: false, required: true
  private _retentionStrategyClass?: string; 
  public get retentionStrategyClass() {
    return this.getStringAttribute('retention_strategy_class');
  }
  public set retentionStrategyClass(value: string) {
    this._retentionStrategyClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionStrategyClassInput() {
    return this._retentionStrategyClass;
  }

  // rotation_strategy - computed: false, optional: false, required: true
  private _rotationStrategy?: string; 
  public get rotationStrategy() {
    return this.getStringAttribute('rotation_strategy');
  }
  public set rotationStrategy(value: string) {
    this._rotationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationStrategyInput() {
    return this._rotationStrategy;
  }

  // rotation_strategy_class - computed: false, optional: false, required: true
  private _rotationStrategyClass?: string; 
  public get rotationStrategyClass() {
    return this.getStringAttribute('rotation_strategy_class');
  }
  public set rotationStrategyClass(value: string) {
    this._rotationStrategyClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationStrategyClassInput() {
    return this._rotationStrategyClass;
  }

  // shards - computed: false, optional: false, required: true
  private _shards?: number; 
  public get shards() {
    return this.getNumberAttribute('shards');
  }
  public set shards(value: number) {
    this._shards = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // writable - computed: false, optional: true, required: false
  private _writable?: boolean | cdktf.IResolvable; 
  public get writable() {
    return this.getBooleanAttribute('writable');
  }
  public set writable(value: boolean | cdktf.IResolvable) {
    this._writable = value;
  }
  public resetWritable() {
    this._writable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableInput() {
    return this._writable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_date: cdktf.stringToTerraform(this._creationDate),
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      field_type_refresh_interval: cdktf.numberToTerraform(this._fieldTypeRefreshInterval),
      id: cdktf.stringToTerraform(this._id),
      index_analyzer: cdktf.stringToTerraform(this._indexAnalyzer),
      index_optimization_disabled: cdktf.booleanToTerraform(this._indexOptimizationDisabled),
      index_optimization_max_num_segments: cdktf.numberToTerraform(this._indexOptimizationMaxNumSegments),
      index_prefix: cdktf.stringToTerraform(this._indexPrefix),
      replicas: cdktf.numberToTerraform(this._replicas),
      retention_strategy: cdktf.stringToTerraform(this._retentionStrategy),
      retention_strategy_class: cdktf.stringToTerraform(this._retentionStrategyClass),
      rotation_strategy: cdktf.stringToTerraform(this._rotationStrategy),
      rotation_strategy_class: cdktf.stringToTerraform(this._rotationStrategyClass),
      shards: cdktf.numberToTerraform(this._shards),
      title: cdktf.stringToTerraform(this._title),
      writable: cdktf.booleanToTerraform(this._writable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      creation_date: {
        value: cdktf.stringToHclTerraform(this._creationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_type_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._fieldTypeRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_analyzer: {
        value: cdktf.stringToHclTerraform(this._indexAnalyzer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_optimization_disabled: {
        value: cdktf.booleanToHclTerraform(this._indexOptimizationDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      index_optimization_max_num_segments: {
        value: cdktf.numberToHclTerraform(this._indexOptimizationMaxNumSegments),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_prefix: {
        value: cdktf.stringToHclTerraform(this._indexPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_strategy: {
        value: cdktf.stringToHclTerraform(this._retentionStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_strategy_class: {
        value: cdktf.stringToHclTerraform(this._retentionStrategyClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_strategy: {
        value: cdktf.stringToHclTerraform(this._rotationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_strategy_class: {
        value: cdktf.stringToHclTerraform(this._rotationStrategyClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shards: {
        value: cdktf.numberToHclTerraform(this._shards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      writable: {
        value: cdktf.booleanToHclTerraform(this._writable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
