// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorDateIndexNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of the expected date formats for parsing dates / timestamps in the document being preprocessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#date_formats DataElasticstackElasticsearchIngestProcessorDateIndexName#date_formats}
  */
  readonly dateFormats?: string[];
  /**
  * How to round the date when formatting the date into the index name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#date_rounding DataElasticstackElasticsearchIngestProcessorDateIndexName#date_rounding}
  */
  readonly dateRounding: string;
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#description DataElasticstackElasticsearchIngestProcessorDateIndexName#description}
  */
  readonly description?: string;
  /**
  * The field to get the date or timestamp from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#field DataElasticstackElasticsearchIngestProcessorDateIndexName#field}
  */
  readonly field: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#if DataElasticstackElasticsearchIngestProcessorDateIndexName#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#ignore_failure DataElasticstackElasticsearchIngestProcessorDateIndexName#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * The format to be used when printing the parsed date into the index name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#index_name_format DataElasticstackElasticsearchIngestProcessorDateIndexName#index_name_format}
  */
  readonly indexNameFormat?: string;
  /**
  * A prefix of the index name to be prepended before the printed date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#index_name_prefix DataElasticstackElasticsearchIngestProcessorDateIndexName#index_name_prefix}
  */
  readonly indexNamePrefix?: string;
  /**
  * The locale to use when parsing the date from the document being preprocessed, relevant when parsing month names or week days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#locale DataElasticstackElasticsearchIngestProcessorDateIndexName#locale}
  */
  readonly locale?: string;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#on_failure DataElasticstackElasticsearchIngestProcessorDateIndexName#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#tag DataElasticstackElasticsearchIngestProcessorDateIndexName#tag}
  */
  readonly tag?: string;
  /**
  * The timezone to use when parsing the date and when date math index supports resolves expressions into concrete index names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#timezone DataElasticstackElasticsearchIngestProcessorDateIndexName#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name elasticstack_elasticsearch_ingest_processor_date_index_name}
*/
export class DataElasticstackElasticsearchIngestProcessorDateIndexName extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_date_index_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorDateIndexName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorDateIndexName to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorDateIndexName that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorDateIndexName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_date_index_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_date_index_name elasticstack_elasticsearch_ingest_processor_date_index_name} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorDateIndexNameConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorDateIndexNameConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_date_index_name',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dateFormats = config.dateFormats;
    this._dateRounding = config.dateRounding;
    this._description = config.description;
    this._field = config.field;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._indexNameFormat = config.indexNameFormat;
    this._indexNamePrefix = config.indexNamePrefix;
    this._locale = config.locale;
    this._onFailure = config.onFailure;
    this._tag = config.tag;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_formats - computed: false, optional: true, required: false
  private _dateFormats?: string[]; 
  public get dateFormats() {
    return this.getListAttribute('date_formats');
  }
  public set dateFormats(value: string[]) {
    this._dateFormats = value;
  }
  public resetDateFormats() {
    this._dateFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatsInput() {
    return this._dateFormats;
  }

  // date_rounding - computed: false, optional: false, required: true
  private _dateRounding?: string; 
  public get dateRounding() {
    return this.getStringAttribute('date_rounding');
  }
  public set dateRounding(value: string) {
    this._dateRounding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRoundingInput() {
    return this._dateRounding;
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

  // index_name_format - computed: false, optional: true, required: false
  private _indexNameFormat?: string; 
  public get indexNameFormat() {
    return this.getStringAttribute('index_name_format');
  }
  public set indexNameFormat(value: string) {
    this._indexNameFormat = value;
  }
  public resetIndexNameFormat() {
    this._indexNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameFormatInput() {
    return this._indexNameFormat;
  }

  // index_name_prefix - computed: false, optional: true, required: false
  private _indexNamePrefix?: string; 
  public get indexNamePrefix() {
    return this.getStringAttribute('index_name_prefix');
  }
  public set indexNamePrefix(value: string) {
    this._indexNamePrefix = value;
  }
  public resetIndexNamePrefix() {
    this._indexNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNamePrefixInput() {
    return this._indexNamePrefix;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dateFormats),
      date_rounding: cdktf.stringToTerraform(this._dateRounding),
      description: cdktf.stringToTerraform(this._description),
      field: cdktf.stringToTerraform(this._field),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      index_name_format: cdktf.stringToTerraform(this._indexNameFormat),
      index_name_prefix: cdktf.stringToTerraform(this._indexNamePrefix),
      locale: cdktf.stringToTerraform(this._locale),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      tag: cdktf.stringToTerraform(this._tag),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      date_formats: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dateFormats),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      date_rounding: {
        value: cdktf.stringToHclTerraform(this._dateRounding),
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
      index_name_format: {
        value: cdktf.stringToHclTerraform(this._indexNameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_name_prefix: {
        value: cdktf.stringToHclTerraform(this._indexNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
