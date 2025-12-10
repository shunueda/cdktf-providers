// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorGrokConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#description DataElasticstackElasticsearchIngestProcessorGrok#description}
  */
  readonly description?: string;
  /**
  * Must be disabled or v1. If v1, the processor uses patterns with Elastic Common Schema (ECS) field names. **NOTE:** Supported only starting from version of Elasticsearch **7.16.x**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#ecs_compatibility DataElasticstackElasticsearchIngestProcessorGrok#ecs_compatibility}
  */
  readonly ecsCompatibility?: string;
  /**
  * The field to use for grok expression parsing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#field DataElasticstackElasticsearchIngestProcessorGrok#field}
  */
  readonly field: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#if DataElasticstackElasticsearchIngestProcessorGrok#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#ignore_failure DataElasticstackElasticsearchIngestProcessorGrok#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#ignore_missing DataElasticstackElasticsearchIngestProcessorGrok#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#on_failure DataElasticstackElasticsearchIngestProcessorGrok#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * A map of pattern-name and pattern tuples defining custom patterns to be used by the current processor. Patterns matching existing names will override the pre-existing definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#pattern_definitions DataElasticstackElasticsearchIngestProcessorGrok#pattern_definitions}
  */
  readonly patternDefinitions?: { [key: string]: string };
  /**
  * An ordered list of grok expression to match and extract named captures with. Returns on the first expression in the list that matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#patterns DataElasticstackElasticsearchIngestProcessorGrok#patterns}
  */
  readonly patterns: string[];
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#tag DataElasticstackElasticsearchIngestProcessorGrok#tag}
  */
  readonly tag?: string;
  /**
  * when true, `_ingest._grok_match_index` will be inserted into your matched document’s metadata with the index into the pattern found in `patterns` that matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#trace_match DataElasticstackElasticsearchIngestProcessorGrok#trace_match}
  */
  readonly traceMatch?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok elasticstack_elasticsearch_ingest_processor_grok}
*/
export class DataElasticstackElasticsearchIngestProcessorGrok extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_grok";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorGrok resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorGrok to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorGrok that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorGrok to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_grok", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_grok elasticstack_elasticsearch_ingest_processor_grok} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorGrokConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorGrokConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_grok',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._ecsCompatibility = config.ecsCompatibility;
    this._field = config.field;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._ignoreMissing = config.ignoreMissing;
    this._onFailure = config.onFailure;
    this._patternDefinitions = config.patternDefinitions;
    this._patterns = config.patterns;
    this._tag = config.tag;
    this._traceMatch = config.traceMatch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ecs_compatibility - computed: false, optional: true, required: false
  private _ecsCompatibility?: string; 
  public get ecsCompatibility() {
    return this.getStringAttribute('ecs_compatibility');
  }
  public set ecsCompatibility(value: string) {
    this._ecsCompatibility = value;
  }
  public resetEcsCompatibility() {
    this._ecsCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsCompatibilityInput() {
    return this._ecsCompatibility;
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

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing');
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing;
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

  // pattern_definitions - computed: false, optional: true, required: false
  private _patternDefinitions?: { [key: string]: string }; 
  public get patternDefinitions() {
    return this.getStringMapAttribute('pattern_definitions');
  }
  public set patternDefinitions(value: { [key: string]: string }) {
    this._patternDefinitions = value;
  }
  public resetPatternDefinitions() {
    this._patternDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternDefinitionsInput() {
    return this._patternDefinitions;
  }

  // patterns - computed: false, optional: false, required: true
  private _patterns?: string[]; 
  public get patterns() {
    return this.getListAttribute('patterns');
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
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

  // trace_match - computed: false, optional: true, required: false
  private _traceMatch?: boolean | cdktf.IResolvable; 
  public get traceMatch() {
    return this.getBooleanAttribute('trace_match');
  }
  public set traceMatch(value: boolean | cdktf.IResolvable) {
    this._traceMatch = value;
  }
  public resetTraceMatch() {
    this._traceMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceMatchInput() {
    return this._traceMatch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ecs_compatibility: cdktf.stringToTerraform(this._ecsCompatibility),
      field: cdktf.stringToTerraform(this._field),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      pattern_definitions: cdktf.hashMapper(cdktf.stringToTerraform)(this._patternDefinitions),
      patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._patterns),
      tag: cdktf.stringToTerraform(this._tag),
      trace_match: cdktf.booleanToTerraform(this._traceMatch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecs_compatibility: {
        value: cdktf.stringToHclTerraform(this._ecsCompatibility),
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
      ignore_missing: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissing),
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
      pattern_definitions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._patternDefinitions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._patterns),
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
      trace_match: {
        value: cdktf.booleanToHclTerraform(this._traceMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
