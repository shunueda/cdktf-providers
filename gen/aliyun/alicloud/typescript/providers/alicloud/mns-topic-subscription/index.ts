// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MnsTopicSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#endpoint MnsTopicSubscription#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#filter_tag MnsTopicSubscription#filter_tag}
  */
  readonly filterTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#id MnsTopicSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#name MnsTopicSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#notify_content_format MnsTopicSubscription#notify_content_format}
  */
  readonly notifyContentFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#notify_strategy MnsTopicSubscription#notify_strategy}
  */
  readonly notifyStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#topic_name MnsTopicSubscription#topic_name}
  */
  readonly topicName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription alicloud_mns_topic_subscription}
*/
export class MnsTopicSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mns_topic_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MnsTopicSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MnsTopicSubscription to import
  * @param importFromId The id of the existing MnsTopicSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MnsTopicSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mns_topic_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mns_topic_subscription alicloud_mns_topic_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MnsTopicSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: MnsTopicSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mns_topic_subscription',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpoint = config.endpoint;
    this._filterTag = config.filterTag;
    this._id = config.id;
    this._name = config.name;
    this._notifyContentFormat = config.notifyContentFormat;
    this._notifyStrategy = config.notifyStrategy;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // filter_tag - computed: false, optional: true, required: false
  private _filterTag?: string; 
  public get filterTag() {
    return this.getStringAttribute('filter_tag');
  }
  public set filterTag(value: string) {
    this._filterTag = value;
  }
  public resetFilterTag() {
    this._filterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagInput() {
    return this._filterTag;
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

  // notify_content_format - computed: false, optional: true, required: false
  private _notifyContentFormat?: string; 
  public get notifyContentFormat() {
    return this.getStringAttribute('notify_content_format');
  }
  public set notifyContentFormat(value: string) {
    this._notifyContentFormat = value;
  }
  public resetNotifyContentFormat() {
    this._notifyContentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyContentFormatInput() {
    return this._notifyContentFormat;
  }

  // notify_strategy - computed: false, optional: true, required: false
  private _notifyStrategy?: string; 
  public get notifyStrategy() {
    return this.getStringAttribute('notify_strategy');
  }
  public set notifyStrategy(value: string) {
    this._notifyStrategy = value;
  }
  public resetNotifyStrategy() {
    this._notifyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyStrategyInput() {
    return this._notifyStrategy;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      filter_tag: cdktf.stringToTerraform(this._filterTag),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_content_format: cdktf.stringToTerraform(this._notifyContentFormat),
      notify_strategy: cdktf.stringToTerraform(this._notifyStrategy),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_tag: {
        value: cdktf.stringToHclTerraform(this._filterTag),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_content_format: {
        value: cdktf.stringToHclTerraform(this._notifyContentFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_strategy: {
        value: cdktf.stringToHclTerraform(this._notifyStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
