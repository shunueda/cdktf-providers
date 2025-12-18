// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ons_notification_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOnsNotificationTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ons_notification_topic#topic_id DataOciOnsNotificationTopic#topic_id}
  */
  readonly topicId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ons_notification_topic oci_ons_notification_topic}
*/
export class DataOciOnsNotificationTopic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ons_notification_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOnsNotificationTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOnsNotificationTopic to import
  * @param importFromId The id of the existing DataOciOnsNotificationTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ons_notification_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOnsNotificationTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ons_notification_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ons_notification_topic oci_ons_notification_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOnsNotificationTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOnsNotificationTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ons_notification_topic',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._topicId = config.topicId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: true, optional: false, required: false
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // short_topic_id - computed: true, optional: false, required: false
  public get shortTopicId() {
    return this.getStringAttribute('short_topic_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      topic_id: cdktf.stringToTerraform(this._topicId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
