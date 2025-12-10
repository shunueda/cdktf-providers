// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorCsvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#description DataElasticstackElasticsearchIngestProcessorCsv#description}
  */
  readonly description?: string;
  /**
  * Value used to fill empty fields, empty fields will be skipped if this is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#empty_value DataElasticstackElasticsearchIngestProcessorCsv#empty_value}
  */
  readonly emptyValue?: string;
  /**
  * The field to extract data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#field DataElasticstackElasticsearchIngestProcessorCsv#field}
  */
  readonly field: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#if DataElasticstackElasticsearchIngestProcessorCsv#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#ignore_failure DataElasticstackElasticsearchIngestProcessorCsv#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#ignore_missing DataElasticstackElasticsearchIngestProcessorCsv#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#on_failure DataElasticstackElasticsearchIngestProcessorCsv#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Quote used in CSV, has to be single character string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#quote DataElasticstackElasticsearchIngestProcessorCsv#quote}
  */
  readonly quote?: string;
  /**
  * Separator used in CSV, has to be single character string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#separator DataElasticstackElasticsearchIngestProcessorCsv#separator}
  */
  readonly separator?: string;
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#tag DataElasticstackElasticsearchIngestProcessorCsv#tag}
  */
  readonly tag?: string;
  /**
  * The array of fields to assign extracted values to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#target_fields DataElasticstackElasticsearchIngestProcessorCsv#target_fields}
  */
  readonly targetFields: string[];
  /**
  * Trim whitespaces in unquoted fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#trim DataElasticstackElasticsearchIngestProcessorCsv#trim}
  */
  readonly trim?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv elasticstack_elasticsearch_ingest_processor_csv}
*/
export class DataElasticstackElasticsearchIngestProcessorCsv extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_csv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorCsv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorCsv to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorCsv that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorCsv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_csv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_csv elasticstack_elasticsearch_ingest_processor_csv} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorCsvConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorCsvConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_csv',
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
    this._emptyValue = config.emptyValue;
    this._field = config.field;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._ignoreMissing = config.ignoreMissing;
    this._onFailure = config.onFailure;
    this._quote = config.quote;
    this._separator = config.separator;
    this._tag = config.tag;
    this._targetFields = config.targetFields;
    this._trim = config.trim;
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

  // empty_value - computed: false, optional: true, required: false
  private _emptyValue?: string; 
  public get emptyValue() {
    return this.getStringAttribute('empty_value');
  }
  public set emptyValue(value: string) {
    this._emptyValue = value;
  }
  public resetEmptyValue() {
    this._emptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyValueInput() {
    return this._emptyValue;
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

  // quote - computed: false, optional: true, required: false
  private _quote?: string; 
  public get quote() {
    return this.getStringAttribute('quote');
  }
  public set quote(value: string) {
    this._quote = value;
  }
  public resetQuote() {
    this._quote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteInput() {
    return this._quote;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
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

  // target_fields - computed: false, optional: false, required: true
  private _targetFields?: string[]; 
  public get targetFields() {
    return this.getListAttribute('target_fields');
  }
  public set targetFields(value: string[]) {
    this._targetFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldsInput() {
    return this._targetFields;
  }

  // trim - computed: false, optional: true, required: false
  private _trim?: boolean | cdktf.IResolvable; 
  public get trim() {
    return this.getBooleanAttribute('trim');
  }
  public set trim(value: boolean | cdktf.IResolvable) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      empty_value: cdktf.stringToTerraform(this._emptyValue),
      field: cdktf.stringToTerraform(this._field),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      quote: cdktf.stringToTerraform(this._quote),
      separator: cdktf.stringToTerraform(this._separator),
      tag: cdktf.stringToTerraform(this._tag),
      target_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetFields),
      trim: cdktf.booleanToTerraform(this._trim),
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
      empty_value: {
        value: cdktf.stringToHclTerraform(this._emptyValue),
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
      quote: {
        value: cdktf.stringToHclTerraform(this._quote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      separator: {
        value: cdktf.stringToHclTerraform(this._separator),
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
      target_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trim: {
        value: cdktf.booleanToHclTerraform(this._trim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
