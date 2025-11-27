// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasLogsOutputOpensearchAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#description DbaasLogsOutputOpensearchAlias#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#id DbaasLogsOutputOpensearchAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indexes attached to alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#indexes DbaasLogsOutputOpensearchAlias#indexes}
  */
  readonly indexes?: string[];
  /**
  * Number of index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#nb_index DbaasLogsOutputOpensearchAlias#nb_index}
  */
  readonly nbIndex?: number;
  /**
  * Number of shard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#nb_stream DbaasLogsOutputOpensearchAlias#nb_stream}
  */
  readonly nbStream?: number;
  /**
  * The service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#service_name DbaasLogsOutputOpensearchAlias#service_name}
  */
  readonly serviceName: string;
  /**
  * Streams attached to alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#streams DbaasLogsOutputOpensearchAlias#streams}
  */
  readonly streams?: string[];
  /**
  * Alias suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#suffix DbaasLogsOutputOpensearchAlias#suffix}
  */
  readonly suffix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias ovh_dbaas_logs_output_opensearch_alias}
*/
export class DbaasLogsOutputOpensearchAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dbaas_logs_output_opensearch_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasLogsOutputOpensearchAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasLogsOutputOpensearchAlias to import
  * @param importFromId The id of the existing DbaasLogsOutputOpensearchAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasLogsOutputOpensearchAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dbaas_logs_output_opensearch_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dbaas_logs_output_opensearch_alias ovh_dbaas_logs_output_opensearch_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasLogsOutputOpensearchAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasLogsOutputOpensearchAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dbaas_logs_output_opensearch_alias',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._id = config.id;
    this._indexes = config.indexes;
    this._nbIndex = config.nbIndex;
    this._nbStream = config.nbStream;
    this._serviceName = config.serviceName;
    this._streams = config.streams;
    this._suffix = config.suffix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_id - computed: true, optional: false, required: false
  public get aliasId() {
    return this.getStringAttribute('alias_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_size - computed: true, optional: false, required: false
  public get currentSize() {
    return this.getNumberAttribute('current_size');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // indexes - computed: true, optional: true, required: false
  private _indexes?: string[]; 
  public get indexes() {
    return cdktf.Fn.tolist(this.getListAttribute('indexes'));
  }
  public set indexes(value: string[]) {
    this._indexes = value;
  }
  public resetIndexes() {
    this._indexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes;
  }

  // is_editable - computed: true, optional: false, required: false
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nb_index - computed: true, optional: true, required: false
  private _nbIndex?: number; 
  public get nbIndex() {
    return this.getNumberAttribute('nb_index');
  }
  public set nbIndex(value: number) {
    this._nbIndex = value;
  }
  public resetNbIndex() {
    this._nbIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbIndexInput() {
    return this._nbIndex;
  }

  // nb_stream - computed: true, optional: true, required: false
  private _nbStream?: number; 
  public get nbStream() {
    return this.getNumberAttribute('nb_stream');
  }
  public set nbStream(value: number) {
    this._nbStream = value;
  }
  public resetNbStream() {
    this._nbStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbStreamInput() {
    return this._nbStream;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // streams - computed: true, optional: true, required: false
  private _streams?: string[]; 
  public get streams() {
    return cdktf.Fn.tolist(this.getListAttribute('streams'));
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  public resetStreams() {
    this._streams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }

  // suffix - computed: false, optional: false, required: true
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexes),
      nb_index: cdktf.numberToTerraform(this._nbIndex),
      nb_stream: cdktf.numberToTerraform(this._nbStream),
      service_name: cdktf.stringToTerraform(this._serviceName),
      streams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streams),
      suffix: cdktf.stringToTerraform(this._suffix),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nb_index: {
        value: cdktf.numberToHclTerraform(this._nbIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nb_stream: {
        value: cdktf.numberToHclTerraform(this._nbStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._streams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      suffix: {
        value: cdktf.stringToHclTerraform(this._suffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
