// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorDateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#description DataElasticstackElasticsearchIngestProcessorDate#description}
  */
  readonly description?: string;
  /**
  * The field to get the date from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#field DataElasticstackElasticsearchIngestProcessorDate#field}
  */
  readonly field: string;
  /**
  * An array of the expected date formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#formats DataElasticstackElasticsearchIngestProcessorDate#formats}
  */
  readonly formats: string[];
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#if DataElasticstackElasticsearchIngestProcessorDate#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#ignore_failure DataElasticstackElasticsearchIngestProcessorDate#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * The locale to use when parsing the date, relevant when parsing month names or week days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#locale DataElasticstackElasticsearchIngestProcessorDate#locale}
  */
  readonly locale?: string;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#on_failure DataElasticstackElasticsearchIngestProcessorDate#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * The format to use when writing the date to `target_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#output_format DataElasticstackElasticsearchIngestProcessorDate#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#tag DataElasticstackElasticsearchIngestProcessorDate#tag}
  */
  readonly tag?: string;
  /**
  * The field that will hold the parsed date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#target_field DataElasticstackElasticsearchIngestProcessorDate#target_field}
  */
  readonly targetField?: string;
  /**
  * The timezone to use when parsing the date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#timezone DataElasticstackElasticsearchIngestProcessorDate#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date elasticstack_elasticsearch_ingest_processor_date}
*/
export class DataElasticstackElasticsearchIngestProcessorDate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_date";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorDate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorDate to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorDate that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorDate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_date", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_date elasticstack_elasticsearch_ingest_processor_date} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorDateConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorDateConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_date',
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
    this._description = config.description;
    this._field = config.field;
    this._formats = config.formats;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._locale = config.locale;
    this._onFailure = config.onFailure;
    this._outputFormat = config.outputFormat;
    this._tag = config.tag;
    this._targetField = config.targetField;
    this._timezone = config.timezone;
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

  // formats - computed: false, optional: false, required: true
  private _formats?: string[]; 
  public get formats() {
    return this.getListAttribute('formats');
  }
  public set formats(value: string[]) {
    this._formats = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatsInput() {
    return this._formats;
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

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
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
      description: cdktf.stringToTerraform(this._description),
      field: cdktf.stringToTerraform(this._field),
      formats: cdktf.listMapper(cdktf.stringToTerraform, false)(this._formats),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      locale: cdktf.stringToTerraform(this._locale),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      tag: cdktf.stringToTerraform(this._tag),
      target_field: cdktf.stringToTerraform(this._targetField),
      timezone: cdktf.stringToTerraform(this._timezone),
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
      field: {
        value: cdktf.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      formats: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._formats),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
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
      target_field: {
        value: cdktf.stringToHclTerraform(this._targetField),
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
