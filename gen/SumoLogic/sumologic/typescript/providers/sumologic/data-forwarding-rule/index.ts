// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#destination_id DataForwardingRule#destination_id}
  */
  readonly destinationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#enabled DataForwardingRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#file_format DataForwardingRule#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#format DataForwardingRule#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#id DataForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#index_id DataForwardingRule#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#payload_schema DataForwardingRule#payload_schema}
  */
  readonly payloadSchema?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule sumologic_data_forwarding_rule}
*/
export class DataForwardingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_data_forwarding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataForwardingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataForwardingRule to import
  * @param importFromId The id of the existing DataForwardingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataForwardingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_data_forwarding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/data_forwarding_rule sumologic_data_forwarding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataForwardingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_data_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationId = config.destinationId;
    this._enabled = config.enabled;
    this._fileFormat = config.fileFormat;
    this._format = config.format;
    this._id = config.id;
    this._indexId = config.indexId;
    this._payloadSchema = config.payloadSchema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_id - computed: false, optional: false, required: true
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // file_format - computed: false, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // payload_schema - computed: false, optional: true, required: false
  private _payloadSchema?: string; 
  public get payloadSchema() {
    return this.getStringAttribute('payload_schema');
  }
  public set payloadSchema(value: string) {
    this._payloadSchema = value;
  }
  public resetPayloadSchema() {
    this._payloadSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadSchemaInput() {
    return this._payloadSchema;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_id: cdktf.stringToTerraform(this._destinationId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      file_format: cdktf.stringToTerraform(this._fileFormat),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      index_id: cdktf.stringToTerraform(this._indexId),
      payload_schema: cdktf.stringToTerraform(this._payloadSchema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_id: {
        value: cdktf.stringToHclTerraform(this._destinationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_format: {
        value: cdktf.stringToHclTerraform(this._fileFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_id: {
        value: cdktf.stringToHclTerraform(this._indexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_schema: {
        value: cdktf.stringToHclTerraform(this._payloadSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
