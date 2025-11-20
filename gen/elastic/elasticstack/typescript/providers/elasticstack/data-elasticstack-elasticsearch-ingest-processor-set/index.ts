// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The origin field which will be copied to `field`, cannot set `value` simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#copy_from DataElasticstackElasticsearchIngestProcessorSet#copy_from}
  */
  readonly copyFrom?: string;
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#description DataElasticstackElasticsearchIngestProcessorSet#description}
  */
  readonly description?: string;
  /**
  * The field to insert, upsert, or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#field DataElasticstackElasticsearchIngestProcessorSet#field}
  */
  readonly field: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#if DataElasticstackElasticsearchIngestProcessorSet#if}
  */
  readonly if?: string;
  /**
  * If `true` and `value` is a template snippet that evaluates to `null` or the empty string, the processor quietly exits without modifying the document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#ignore_empty_value DataElasticstackElasticsearchIngestProcessorSet#ignore_empty_value}
  */
  readonly ignoreEmptyValue?: boolean | cdktf.IResolvable;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#ignore_failure DataElasticstackElasticsearchIngestProcessorSet#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * The media type for encoding value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#media_type DataElasticstackElasticsearchIngestProcessorSet#media_type}
  */
  readonly mediaType?: string;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#on_failure DataElasticstackElasticsearchIngestProcessorSet#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * If processor will update fields with pre-existing non-null-valued field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#override DataElasticstackElasticsearchIngestProcessorSet#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#tag DataElasticstackElasticsearchIngestProcessorSet#tag}
  */
  readonly tag?: string;
  /**
  * The value to be set for the field. Supports template snippets. May specify only one of `value` or `copy_from`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#value DataElasticstackElasticsearchIngestProcessorSet#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set elasticstack_elasticsearch_ingest_processor_set}
*/
export class DataElasticstackElasticsearchIngestProcessorSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorSet to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_set elasticstack_elasticsearch_ingest_processor_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorSetConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_set',
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
    this._copyFrom = config.copyFrom;
    this._description = config.description;
    this._field = config.field;
    this._if = config.if;
    this._ignoreEmptyValue = config.ignoreEmptyValue;
    this._ignoreFailure = config.ignoreFailure;
    this._mediaType = config.mediaType;
    this._onFailure = config.onFailure;
    this._override = config.override;
    this._tag = config.tag;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copy_from - computed: false, optional: true, required: false
  private _copyFrom?: string; 
  public get copyFrom() {
    return this.getStringAttribute('copy_from');
  }
  public set copyFrom(value: string) {
    this._copyFrom = value;
  }
  public resetCopyFrom() {
    this._copyFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromInput() {
    return this._copyFrom;
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

  // ignore_empty_value - computed: false, optional: true, required: false
  private _ignoreEmptyValue?: boolean | cdktf.IResolvable; 
  public get ignoreEmptyValue() {
    return this.getBooleanAttribute('ignore_empty_value');
  }
  public set ignoreEmptyValue(value: boolean | cdktf.IResolvable) {
    this._ignoreEmptyValue = value;
  }
  public resetIgnoreEmptyValue() {
    this._ignoreEmptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEmptyValueInput() {
    return this._ignoreEmptyValue;
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

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      copy_from: cdktf.stringToTerraform(this._copyFrom),
      description: cdktf.stringToTerraform(this._description),
      field: cdktf.stringToTerraform(this._field),
      if: cdktf.stringToTerraform(this._if),
      ignore_empty_value: cdktf.booleanToTerraform(this._ignoreEmptyValue),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      media_type: cdktf.stringToTerraform(this._mediaType),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      override: cdktf.booleanToTerraform(this._override),
      tag: cdktf.stringToTerraform(this._tag),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copy_from: {
        value: cdktf.stringToHclTerraform(this._copyFrom),
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
      ignore_empty_value: {
        value: cdktf.booleanToHclTerraform(this._ignoreEmptyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_failure: {
        value: cdktf.booleanToHclTerraform(this._ignoreFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      media_type: {
        value: cdktf.stringToHclTerraform(this._mediaType),
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
      override: {
        value: cdktf.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
