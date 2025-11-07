// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorDissectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The character(s) that separate the appended fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#append_separator DataElasticstackElasticsearchIngestProcessorDissect#append_separator}
  */
  readonly appendSeparator?: string;
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#description DataElasticstackElasticsearchIngestProcessorDissect#description}
  */
  readonly description?: string;
  /**
  * The field to dissect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#field DataElasticstackElasticsearchIngestProcessorDissect#field}
  */
  readonly field: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#if DataElasticstackElasticsearchIngestProcessorDissect#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#ignore_failure DataElasticstackElasticsearchIngestProcessorDissect#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#ignore_missing DataElasticstackElasticsearchIngestProcessorDissect#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#on_failure DataElasticstackElasticsearchIngestProcessorDissect#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * The pattern to apply to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#pattern DataElasticstackElasticsearchIngestProcessorDissect#pattern}
  */
  readonly pattern: string;
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#tag DataElasticstackElasticsearchIngestProcessorDissect#tag}
  */
  readonly tag?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect elasticstack_elasticsearch_ingest_processor_dissect}
*/
export class DataElasticstackElasticsearchIngestProcessorDissect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_dissect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorDissect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorDissect to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorDissect that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorDissect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_dissect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_dissect elasticstack_elasticsearch_ingest_processor_dissect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorDissectConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorDissectConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_dissect',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appendSeparator = config.appendSeparator;
    this._description = config.description;
    this._field = config.field;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._ignoreMissing = config.ignoreMissing;
    this._onFailure = config.onFailure;
    this._pattern = config.pattern;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_separator - computed: false, optional: true, required: false
  private _appendSeparator?: string; 
  public get appendSeparator() {
    return this.getStringAttribute('append_separator');
  }
  public set appendSeparator(value: string) {
    this._appendSeparator = value;
  }
  public resetAppendSeparator() {
    this._appendSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendSeparatorInput() {
    return this._appendSeparator;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_separator: cdktf.stringToTerraform(this._appendSeparator),
      description: cdktf.stringToTerraform(this._description),
      field: cdktf.stringToTerraform(this._field),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      pattern: cdktf.stringToTerraform(this._pattern),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_separator: {
        value: cdktf.stringToHclTerraform(this._appendSeparator),
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
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
