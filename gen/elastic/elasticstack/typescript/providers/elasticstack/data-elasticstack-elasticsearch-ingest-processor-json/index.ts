// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag that forces the parsed JSON to be added at the top level of the document. `target_field` must not be set when this option is chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#add_to_root DataElasticstackElasticsearchIngestProcessorJson#add_to_root}
  */
  readonly addToRoot?: boolean | cdktf.IResolvable;
  /**
  * When set to `replace`, root fields that conflict with fields from the parsed JSON will be overridden. When set to `merge`, conflicting fields will be merged. Only applicable if `add_to_root` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#add_to_root_conflict_strategy DataElasticstackElasticsearchIngestProcessorJson#add_to_root_conflict_strategy}
  */
  readonly addToRootConflictStrategy?: string;
  /**
  * When set to `true`, the JSON parser will not fail if the JSON contains duplicate keys. Instead, the last encountered value for any duplicate key wins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#allow_duplicate_keys DataElasticstackElasticsearchIngestProcessorJson#allow_duplicate_keys}
  */
  readonly allowDuplicateKeys?: boolean | cdktf.IResolvable;
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#description DataElasticstackElasticsearchIngestProcessorJson#description}
  */
  readonly description?: string;
  /**
  * The field to be parsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#field DataElasticstackElasticsearchIngestProcessorJson#field}
  */
  readonly field: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#if DataElasticstackElasticsearchIngestProcessorJson#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#ignore_failure DataElasticstackElasticsearchIngestProcessorJson#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#on_failure DataElasticstackElasticsearchIngestProcessorJson#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#tag DataElasticstackElasticsearchIngestProcessorJson#tag}
  */
  readonly tag?: string;
  /**
  * The field that the converted structured object will be written into. Any existing content in this field will be overwritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#target_field DataElasticstackElasticsearchIngestProcessorJson#target_field}
  */
  readonly targetField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json elasticstack_elasticsearch_ingest_processor_json}
*/
export class DataElasticstackElasticsearchIngestProcessorJson extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_json";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorJson resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorJson to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorJson that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorJson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_json", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_json elasticstack_elasticsearch_ingest_processor_json} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorJsonConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_json',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addToRoot = config.addToRoot;
    this._addToRootConflictStrategy = config.addToRootConflictStrategy;
    this._allowDuplicateKeys = config.allowDuplicateKeys;
    this._description = config.description;
    this._field = config.field;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._onFailure = config.onFailure;
    this._tag = config.tag;
    this._targetField = config.targetField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_to_root - computed: false, optional: true, required: false
  private _addToRoot?: boolean | cdktf.IResolvable; 
  public get addToRoot() {
    return this.getBooleanAttribute('add_to_root');
  }
  public set addToRoot(value: boolean | cdktf.IResolvable) {
    this._addToRoot = value;
  }
  public resetAddToRoot() {
    this._addToRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToRootInput() {
    return this._addToRoot;
  }

  // add_to_root_conflict_strategy - computed: false, optional: true, required: false
  private _addToRootConflictStrategy?: string; 
  public get addToRootConflictStrategy() {
    return this.getStringAttribute('add_to_root_conflict_strategy');
  }
  public set addToRootConflictStrategy(value: string) {
    this._addToRootConflictStrategy = value;
  }
  public resetAddToRootConflictStrategy() {
    this._addToRootConflictStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToRootConflictStrategyInput() {
    return this._addToRootConflictStrategy;
  }

  // allow_duplicate_keys - computed: false, optional: true, required: false
  private _allowDuplicateKeys?: boolean | cdktf.IResolvable; 
  public get allowDuplicateKeys() {
    return this.getBooleanAttribute('allow_duplicate_keys');
  }
  public set allowDuplicateKeys(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateKeys = value;
  }
  public resetAllowDuplicateKeys() {
    this._allowDuplicateKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateKeysInput() {
    return this._allowDuplicateKeys;
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

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if - computed: false, optional: true, required: false
  private _if?: string; 
  public get if() {
    return this.getStringAttribute('if');
  }
  public set if(value: string) {
    this._if = value;
  }
  public resetIf() {
    this._if = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
  }

  // ignore_failure - computed: false, optional: true, required: false
  private _ignoreFailure?: boolean | cdktf.IResolvable; 
  public get ignoreFailure() {
    return this.getBooleanAttribute('ignore_failure');
  }
  public set ignoreFailure(value: boolean | cdktf.IResolvable) {
    this._ignoreFailure = value;
  }
  public resetIgnoreFailure() {
    this._ignoreFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFailureInput() {
    return this._ignoreFailure;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string[]; 
  public get onFailure() {
    return this.getListAttribute('on_failure');
  }
  public set onFailure(value: string[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
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

  // target_field - computed: false, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_to_root: cdktf.booleanToTerraform(this._addToRoot),
      add_to_root_conflict_strategy: cdktf.stringToTerraform(this._addToRootConflictStrategy),
      allow_duplicate_keys: cdktf.booleanToTerraform(this._allowDuplicateKeys),
      description: cdktf.stringToTerraform(this._description),
      field: cdktf.stringToTerraform(this._field),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      tag: cdktf.stringToTerraform(this._tag),
      target_field: cdktf.stringToTerraform(this._targetField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_to_root: {
        value: cdktf.booleanToHclTerraform(this._addToRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_to_root_conflict_strategy: {
        value: cdktf.stringToHclTerraform(this._addToRootConflictStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_duplicate_keys: {
        value: cdktf.booleanToHclTerraform(this._allowDuplicateKeys),
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
      field: {
        value: cdktf.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if: {
        value: cdktf.stringToHclTerraform(this._if),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_failure: {
        value: cdktf.booleanToHclTerraform(this._ignoreFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onFailure),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_field: {
        value: cdktf.stringToHclTerraform(this._targetField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
