// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorBindingReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy group ID for binding receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#group_id MonitorBindingReceiver#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#id MonitorBindingReceiver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * receivers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#receivers MonitorBindingReceiver#receivers}
  */
  readonly receivers?: MonitorBindingReceiverReceivers;
}
export interface MonitorBindingReceiverReceivers {
  /**
  * End of alarm period. Meaning with `start_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#end_time MonitorBindingReceiver#end_time}
  */
  readonly endTime?: number;
  /**
  * Method of warning notification.Optional `CALL`,`EMAIL`,`SITE`,`SMS`,`WECHAT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#notify_way MonitorBindingReceiver#notify_way}
  */
  readonly notifyWay: string[];
  /**
  * Alert sending language. Optional `en-US`,`zh-CN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#receive_language MonitorBindingReceiver#receive_language}
  */
  readonly receiveLanguage?: string;
  /**
  * Alarm receive group ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#receiver_group_list MonitorBindingReceiver#receiver_group_list}
  */
  readonly receiverGroupList?: number[];
  /**
  * Receive type. Optional `group`,`user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#receiver_type MonitorBindingReceiver#receiver_type}
  */
  readonly receiverType: string;
  /**
  * Alarm receiver ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#receiver_user_list MonitorBindingReceiver#receiver_user_list}
  */
  readonly receiverUserList?: number[];
  /**
  * Alarm period start time. Valid value ranges: (0~86399). which removes the date after it is converted to Beijing time as a Unix timestamp, for example 7200 means '10:0:0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#start_time MonitorBindingReceiver#start_time}
  */
  readonly startTime?: number;
}

export function monitorBindingReceiverReceiversToTerraform(struct?: MonitorBindingReceiverReceiversOutputReference | MonitorBindingReceiverReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    notify_way: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyWay),
    receive_language: cdktf.stringToTerraform(struct!.receiveLanguage),
    receiver_group_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.receiverGroupList),
    receiver_type: cdktf.stringToTerraform(struct!.receiverType),
    receiver_user_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.receiverUserList),
    start_time: cdktf.numberToTerraform(struct!.startTime),
  }
}


export function monitorBindingReceiverReceiversToHclTerraform(struct?: MonitorBindingReceiverReceiversOutputReference | MonitorBindingReceiverReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_way: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyWay),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    receive_language: {
      value: cdktf.stringToHclTerraform(struct!.receiveLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver_group_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.receiverGroupList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    receiver_type: {
      value: cdktf.stringToHclTerraform(struct!.receiverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver_user_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.receiverUserList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorBindingReceiverReceiversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorBindingReceiverReceivers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._notifyWay !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyWay = this._notifyWay;
    }
    if (this._receiveLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveLanguage = this._receiveLanguage;
    }
    if (this._receiverGroupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverGroupList = this._receiverGroupList;
    }
    if (this._receiverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverType = this._receiverType;
    }
    if (this._receiverUserList !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverUserList = this._receiverUserList;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorBindingReceiverReceivers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._notifyWay = undefined;
      this._receiveLanguage = undefined;
      this._receiverGroupList = undefined;
      this._receiverType = undefined;
      this._receiverUserList = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._notifyWay = value.notifyWay;
      this._receiveLanguage = value.receiveLanguage;
      this._receiverGroupList = value.receiverGroupList;
      this._receiverType = value.receiverType;
      this._receiverUserList = value.receiverUserList;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // notify_way - computed: false, optional: false, required: true
  private _notifyWay?: string[]; 
  public get notifyWay() {
    return this.getListAttribute('notify_way');
  }
  public set notifyWay(value: string[]) {
    this._notifyWay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyWayInput() {
    return this._notifyWay;
  }

  // receive_language - computed: false, optional: true, required: false
  private _receiveLanguage?: string; 
  public get receiveLanguage() {
    return this.getStringAttribute('receive_language');
  }
  public set receiveLanguage(value: string) {
    this._receiveLanguage = value;
  }
  public resetReceiveLanguage() {
    this._receiveLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveLanguageInput() {
    return this._receiveLanguage;
  }

  // receiver_group_list - computed: false, optional: true, required: false
  private _receiverGroupList?: number[]; 
  public get receiverGroupList() {
    return this.getNumberListAttribute('receiver_group_list');
  }
  public set receiverGroupList(value: number[]) {
    this._receiverGroupList = value;
  }
  public resetReceiverGroupList() {
    this._receiverGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverGroupListInput() {
    return this._receiverGroupList;
  }

  // receiver_type - computed: false, optional: false, required: true
  private _receiverType?: string; 
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }
  public set receiverType(value: string) {
    this._receiverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTypeInput() {
    return this._receiverType;
  }

  // receiver_user_list - computed: false, optional: true, required: false
  private _receiverUserList?: number[]; 
  public get receiverUserList() {
    return this.getNumberListAttribute('receiver_user_list');
  }
  public set receiverUserList(value: number[]) {
    this._receiverUserList = value;
  }
  public resetReceiverUserList() {
    this._receiverUserList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverUserListInput() {
    return this._receiverUserList;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver tencentcloud_monitor_binding_receiver}
*/
export class MonitorBindingReceiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_binding_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorBindingReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorBindingReceiver to import
  * @param importFromId The id of the existing MonitorBindingReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorBindingReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_binding_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/monitor_binding_receiver tencentcloud_monitor_binding_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorBindingReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorBindingReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_binding_receiver',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._receivers.internalValue = config.receivers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // receivers - computed: false, optional: true, required: false
  private _receivers = new MonitorBindingReceiverReceiversOutputReference(this, "receivers");
  public get receivers() {
    return this._receivers;
  }
  public putReceivers(value: MonitorBindingReceiverReceivers) {
    this._receivers.internalValue = value;
  }
  public resetReceivers() {
    this._receivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      receivers: monitorBindingReceiverReceiversToTerraform(this._receivers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receivers: {
        value: monitorBindingReceiverReceiversToHclTerraform(this._receivers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorBindingReceiverReceiversList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
