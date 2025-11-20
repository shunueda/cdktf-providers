// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorUserAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Extracts device type from the user agent string on a best-effort basis. Supported only starting from Elasticsearch version **8.0**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent#extract_device_type DataElasticstackElasticsearchIngestProcessorUserAgent#extract_device_type}
  */
  readonly extractDeviceType?: boolean | cdktf.IResolvable;
  /**
  * The field containing the user agent string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent#field DataElasticstackElasticsearchIngestProcessorUserAgent#field}
  */
  readonly field: string;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent#ignore_missing DataElasticstackElasticsearchIngestProcessorUserAgent#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Controls what properties are added to `target_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent#properties DataElasticstackElasticsearchIngestProcessorUserAgent#properties}
  */
  readonly properties?: string[];
  /**
  * The name of the file in the `config/ingest-user-agent` directory containing the regular expressions for parsing the user agent string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent#regex_file DataElasticstackElasticsearchIngestProcessorUserAgent#regex_file}
  */
  readonly regexFile?: string;
  /**
  * The field that will be filled with the user agent details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent#target_field DataElasticstackElasticsearchIngestProcessorUserAgent#target_field}
  */
  readonly targetField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent elasticstack_elasticsearch_ingest_processor_user_agent}
*/
export class DataElasticstackElasticsearchIngestProcessorUserAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_user_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorUserAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorUserAgent to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorUserAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorUserAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_user_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/data-sources/elasticsearch_ingest_processor_user_agent elasticstack_elasticsearch_ingest_processor_user_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorUserAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorUserAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_user_agent',
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
    this._extractDeviceType = config.extractDeviceType;
    this._field = config.field;
    this._ignoreMissing = config.ignoreMissing;
    this._properties = config.properties;
    this._regexFile = config.regexFile;
    this._targetField = config.targetField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extract_device_type - computed: false, optional: true, required: false
  private _extractDeviceType?: boolean | cdktf.IResolvable; 
  public get extractDeviceType() {
    return this.getBooleanAttribute('extract_device_type');
  }
  public set extractDeviceType(value: boolean | cdktf.IResolvable) {
    this._extractDeviceType = value;
  }
  public resetExtractDeviceType() {
    this._extractDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractDeviceTypeInput() {
    return this._extractDeviceType;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return cdktf.Fn.tolist(this.getListAttribute('properties'));
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // regex_file - computed: false, optional: true, required: false
  private _regexFile?: string; 
  public get regexFile() {
    return this.getStringAttribute('regex_file');
  }
  public set regexFile(value: string) {
    this._regexFile = value;
  }
  public resetRegexFile() {
    this._regexFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexFileInput() {
    return this._regexFile;
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
      extract_device_type: cdktf.booleanToTerraform(this._extractDeviceType),
      field: cdktf.stringToTerraform(this._field),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._properties),
      regex_file: cdktf.stringToTerraform(this._regexFile),
      target_field: cdktf.stringToTerraform(this._targetField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extract_device_type: {
        value: cdktf.booleanToHclTerraform(this._extractDeviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_missing: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._properties),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      regex_file: {
        value: cdktf.stringToHclTerraform(this._regexFile),
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
