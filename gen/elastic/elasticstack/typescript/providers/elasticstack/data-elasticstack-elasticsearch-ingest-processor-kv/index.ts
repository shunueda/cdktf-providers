// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorKvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#description DataElasticstackElasticsearchIngestProcessorKv#description}
  */
  readonly description?: string;
  /**
  * List of keys to exclude from document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#exclude_keys DataElasticstackElasticsearchIngestProcessorKv#exclude_keys}
  */
  readonly excludeKeys?: string[];
  /**
  * The field to be parsed. Supports template snippets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#field DataElasticstackElasticsearchIngestProcessorKv#field}
  */
  readonly field: string;
  /**
  * Regex pattern to use for splitting key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#field_split DataElasticstackElasticsearchIngestProcessorKv#field_split}
  */
  readonly fieldSplit: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#if DataElasticstackElasticsearchIngestProcessorKv#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#ignore_failure DataElasticstackElasticsearchIngestProcessorKv#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#ignore_missing DataElasticstackElasticsearchIngestProcessorKv#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * List of keys to filter and insert into document. Defaults to including all keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#include_keys DataElasticstackElasticsearchIngestProcessorKv#include_keys}
  */
  readonly includeKeys?: string[];
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#on_failure DataElasticstackElasticsearchIngestProcessorKv#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Prefix to be added to extracted keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#prefix DataElasticstackElasticsearchIngestProcessorKv#prefix}
  */
  readonly prefix?: string;
  /**
  * If `true` strip brackets `()`, `<>`, `[]` as well as quotes `'` and `"` from extracted values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#strip_brackets DataElasticstackElasticsearchIngestProcessorKv#strip_brackets}
  */
  readonly stripBrackets?: boolean | cdktf.IResolvable;
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#tag DataElasticstackElasticsearchIngestProcessorKv#tag}
  */
  readonly tag?: string;
  /**
  * The field to insert the extracted keys into. Defaults to the root of the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#target_field DataElasticstackElasticsearchIngestProcessorKv#target_field}
  */
  readonly targetField?: string;
  /**
  * String of characters to trim from extracted keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#trim_key DataElasticstackElasticsearchIngestProcessorKv#trim_key}
  */
  readonly trimKey?: string;
  /**
  * String of characters to trim from extracted values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#trim_value DataElasticstackElasticsearchIngestProcessorKv#trim_value}
  */
  readonly trimValue?: string;
  /**
  * Regex pattern to use for splitting the key from the value within a key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#value_split DataElasticstackElasticsearchIngestProcessorKv#value_split}
  */
  readonly valueSplit: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv elasticstack_elasticsearch_ingest_processor_kv}
*/
export class DataElasticstackElasticsearchIngestProcessorKv extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_kv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorKv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorKv to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorKv that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorKv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_kv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/elasticsearch_ingest_processor_kv elasticstack_elasticsearch_ingest_processor_kv} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorKvConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorKvConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_kv',
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
    this._excludeKeys = config.excludeKeys;
    this._field = config.field;
    this._fieldSplit = config.fieldSplit;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._ignoreMissing = config.ignoreMissing;
    this._includeKeys = config.includeKeys;
    this._onFailure = config.onFailure;
    this._prefix = config.prefix;
    this._stripBrackets = config.stripBrackets;
    this._tag = config.tag;
    this._targetField = config.targetField;
    this._trimKey = config.trimKey;
    this._trimValue = config.trimValue;
    this._valueSplit = config.valueSplit;
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

  // exclude_keys - computed: false, optional: true, required: false
  private _excludeKeys?: string[]; 
  public get excludeKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_keys'));
  }
  public set excludeKeys(value: string[]) {
    this._excludeKeys = value;
  }
  public resetExcludeKeys() {
    this._excludeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeKeysInput() {
    return this._excludeKeys;
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

  // field_split - computed: false, optional: false, required: true
  private _fieldSplit?: string; 
  public get fieldSplit() {
    return this.getStringAttribute('field_split');
  }
  public set fieldSplit(value: string) {
    this._fieldSplit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSplitInput() {
    return this._fieldSplit;
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

  // include_keys - computed: false, optional: true, required: false
  private _includeKeys?: string[]; 
  public get includeKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('include_keys'));
  }
  public set includeKeys(value: string[]) {
    this._includeKeys = value;
  }
  public resetIncludeKeys() {
    this._includeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeKeysInput() {
    return this._includeKeys;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // strip_brackets - computed: false, optional: true, required: false
  private _stripBrackets?: boolean | cdktf.IResolvable; 
  public get stripBrackets() {
    return this.getBooleanAttribute('strip_brackets');
  }
  public set stripBrackets(value: boolean | cdktf.IResolvable) {
    this._stripBrackets = value;
  }
  public resetStripBrackets() {
    this._stripBrackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripBracketsInput() {
    return this._stripBrackets;
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

  // trim_key - computed: false, optional: true, required: false
  private _trimKey?: string; 
  public get trimKey() {
    return this.getStringAttribute('trim_key');
  }
  public set trimKey(value: string) {
    this._trimKey = value;
  }
  public resetTrimKey() {
    this._trimKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimKeyInput() {
    return this._trimKey;
  }

  // trim_value - computed: false, optional: true, required: false
  private _trimValue?: string; 
  public get trimValue() {
    return this.getStringAttribute('trim_value');
  }
  public set trimValue(value: string) {
    this._trimValue = value;
  }
  public resetTrimValue() {
    this._trimValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimValueInput() {
    return this._trimValue;
  }

  // value_split - computed: false, optional: false, required: true
  private _valueSplit?: string; 
  public get valueSplit() {
    return this.getStringAttribute('value_split');
  }
  public set valueSplit(value: string) {
    this._valueSplit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSplitInput() {
    return this._valueSplit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      exclude_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeKeys),
      field: cdktf.stringToTerraform(this._field),
      field_split: cdktf.stringToTerraform(this._fieldSplit),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      include_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeKeys),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      prefix: cdktf.stringToTerraform(this._prefix),
      strip_brackets: cdktf.booleanToTerraform(this._stripBrackets),
      tag: cdktf.stringToTerraform(this._tag),
      target_field: cdktf.stringToTerraform(this._targetField),
      trim_key: cdktf.stringToTerraform(this._trimKey),
      trim_value: cdktf.stringToTerraform(this._trimValue),
      value_split: cdktf.stringToTerraform(this._valueSplit),
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
      exclude_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_split: {
        value: cdktf.stringToHclTerraform(this._fieldSplit),
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
      include_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      on_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onFailure),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_brackets: {
        value: cdktf.booleanToHclTerraform(this._stripBrackets),
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
      target_field: {
        value: cdktf.stringToHclTerraform(this._targetField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trim_key: {
        value: cdktf.stringToHclTerraform(this._trimKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trim_value: {
        value: cdktf.stringToHclTerraform(this._trimValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_split: {
        value: cdktf.stringToHclTerraform(this._valueSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
