// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceKafkadirectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The serialised format of the data written to the Kafka topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect#kafka_format SourceKafkadirect#kafka_format}
  */
  readonly kafkaFormat?: string;
  /**
  * Source name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect#name SourceKafkadirect#name}
  */
  readonly name: string;
  /**
  * If untoggled (default), Streamkap attempts to infer schema from your data - depending on the Destination. Otherwise, Streamkap assumes the Kafka message key and value contain `schema` and `payload` structures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect#schemas_enable SourceKafkadirect#schemas_enable}
  */
  readonly schemasEnable?: boolean | cdktf.IResolvable;
  /**
  * Topics to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect#topic_include_list SourceKafkadirect#topic_include_list}
  */
  readonly topicIncludeList: string;
  /**
  * Prefix for the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect#topic_prefix SourceKafkadirect#topic_prefix}
  */
  readonly topicPrefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect streamkap_source_kafkadirect}
*/
export class SourceKafkadirect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_source_kafkadirect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceKafkadirect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceKafkadirect to import
  * @param importFromId The id of the existing SourceKafkadirect that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceKafkadirect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_source_kafkadirect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_kafkadirect streamkap_source_kafkadirect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceKafkadirectConfig
  */
  public constructor(scope: Construct, id: string, config: SourceKafkadirectConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_source_kafkadirect',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.16',
        providerVersionConstraint: '2.1.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._kafkaFormat = config.kafkaFormat;
    this._name = config.name;
    this._schemasEnable = config.schemasEnable;
    this._topicIncludeList = config.topicIncludeList;
    this._topicPrefix = config.topicPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_format - computed: true, optional: true, required: false
  private _kafkaFormat?: string; 
  public get kafkaFormat() {
    return this.getStringAttribute('kafka_format');
  }
  public set kafkaFormat(value: string) {
    this._kafkaFormat = value;
  }
  public resetKafkaFormat() {
    this._kafkaFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaFormatInput() {
    return this._kafkaFormat;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schemas_enable - computed: true, optional: true, required: false
  private _schemasEnable?: boolean | cdktf.IResolvable; 
  public get schemasEnable() {
    return this.getBooleanAttribute('schemas_enable');
  }
  public set schemasEnable(value: boolean | cdktf.IResolvable) {
    this._schemasEnable = value;
  }
  public resetSchemasEnable() {
    this._schemasEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasEnableInput() {
    return this._schemasEnable;
  }

  // topic_include_list - computed: false, optional: false, required: true
  private _topicIncludeList?: string; 
  public get topicIncludeList() {
    return this.getStringAttribute('topic_include_list');
  }
  public set topicIncludeList(value: string) {
    this._topicIncludeList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIncludeListInput() {
    return this._topicIncludeList;
  }

  // topic_prefix - computed: false, optional: false, required: true
  private _topicPrefix?: string; 
  public get topicPrefix() {
    return this.getStringAttribute('topic_prefix');
  }
  public set topicPrefix(value: string) {
    this._topicPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPrefixInput() {
    return this._topicPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kafka_format: cdktf.stringToTerraform(this._kafkaFormat),
      name: cdktf.stringToTerraform(this._name),
      schemas_enable: cdktf.booleanToTerraform(this._schemasEnable),
      topic_include_list: cdktf.stringToTerraform(this._topicIncludeList),
      topic_prefix: cdktf.stringToTerraform(this._topicPrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kafka_format: {
        value: cdktf.stringToHclTerraform(this._kafkaFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas_enable: {
        value: cdktf.booleanToHclTerraform(this._schemasEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic_include_list: {
        value: cdktf.stringToHclTerraform(this._topicIncludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_prefix: {
        value: cdktf.stringToHclTerraform(this._topicPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
