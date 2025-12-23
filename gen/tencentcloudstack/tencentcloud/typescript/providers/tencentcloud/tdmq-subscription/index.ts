// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically create a dead letter topic and a retry letter topic. true: yes; false: no(default value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#auto_create_policy_topic TdmqSubscription#auto_create_policy_topic}
  */
  readonly autoCreatePolicyTopic?: boolean | cdktf.IResolvable;
  /**
  * Whether to automatically delete a dead letter topic and a retry letter topic. Setting is only allowed when `auto_create_policy_topic` is true. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#auto_delete_policy_topic TdmqSubscription#auto_delete_policy_topic}
  */
  readonly autoDeletePolicyTopic?: boolean | cdktf.IResolvable;
  /**
  * Pulsar cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#cluster_id TdmqSubscription#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Environment (namespace) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#environment_id TdmqSubscription#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#id TdmqSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Remarks (up to 128 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#remark TdmqSubscription#remark}
  */
  readonly remark?: string;
  /**
  * Subscriber name, which can contain up to 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#subscription_name TdmqSubscription#subscription_name}
  */
  readonly subscriptionName: string;
  /**
  * Topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#topic_name TdmqSubscription#topic_name}
  */
  readonly topicName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription tencentcloud_tdmq_subscription}
*/
export class TdmqSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqSubscription to import
  * @param importFromId The id of the existing TdmqSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tdmq_subscription tencentcloud_tdmq_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_subscription',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreatePolicyTopic = config.autoCreatePolicyTopic;
    this._autoDeletePolicyTopic = config.autoDeletePolicyTopic;
    this._clusterId = config.clusterId;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._remark = config.remark;
    this._subscriptionName = config.subscriptionName;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_policy_topic - computed: false, optional: true, required: false
  private _autoCreatePolicyTopic?: boolean | cdktf.IResolvable; 
  public get autoCreatePolicyTopic() {
    return this.getBooleanAttribute('auto_create_policy_topic');
  }
  public set autoCreatePolicyTopic(value: boolean | cdktf.IResolvable) {
    this._autoCreatePolicyTopic = value;
  }
  public resetAutoCreatePolicyTopic() {
    this._autoCreatePolicyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreatePolicyTopicInput() {
    return this._autoCreatePolicyTopic;
  }

  // auto_delete_policy_topic - computed: false, optional: true, required: false
  private _autoDeletePolicyTopic?: boolean | cdktf.IResolvable; 
  public get autoDeletePolicyTopic() {
    return this.getBooleanAttribute('auto_delete_policy_topic');
  }
  public set autoDeletePolicyTopic(value: boolean | cdktf.IResolvable) {
    this._autoDeletePolicyTopic = value;
  }
  public resetAutoDeletePolicyTopic() {
    this._autoDeletePolicyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeletePolicyTopicInput() {
    return this._autoDeletePolicyTopic;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
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
      auto_create_policy_topic: cdktf.booleanToTerraform(this._autoCreatePolicyTopic),
      auto_delete_policy_topic: cdktf.booleanToTerraform(this._autoDeletePolicyTopic),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      remark: cdktf.stringToTerraform(this._remark),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_policy_topic: {
        value: cdktf.booleanToHclTerraform(this._autoCreatePolicyTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_delete_policy_topic: {
        value: cdktf.booleanToHclTerraform(this._autoDeletePolicyTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionName),
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
