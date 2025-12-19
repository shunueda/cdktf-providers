// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchedulerxJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#attempt_interval SchedulerxJob#attempt_interval}
  */
  readonly attemptInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#class_name SchedulerxJob#class_name}
  */
  readonly className?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#content SchedulerxJob#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#description SchedulerxJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#execute_mode SchedulerxJob#execute_mode}
  */
  readonly executeMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#fail_times SchedulerxJob#fail_times}
  */
  readonly failTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#group_id SchedulerxJob#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#id SchedulerxJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#job_name SchedulerxJob#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#job_type SchedulerxJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#max_attempt SchedulerxJob#max_attempt}
  */
  readonly maxAttempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#max_concurrency SchedulerxJob#max_concurrency}
  */
  readonly maxConcurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#namespace SchedulerxJob#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#namespace_source SchedulerxJob#namespace_source}
  */
  readonly namespaceSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#parameters SchedulerxJob#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#status SchedulerxJob#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#success_notice_enable SchedulerxJob#success_notice_enable}
  */
  readonly successNoticeEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#task_dispatch_mode SchedulerxJob#task_dispatch_mode}
  */
  readonly taskDispatchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#template SchedulerxJob#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#timezone SchedulerxJob#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#x_attrs SchedulerxJob#x_attrs}
  */
  readonly xAttrs?: string;
  /**
  * job_monitor_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#job_monitor_info SchedulerxJob#job_monitor_info}
  */
  readonly jobMonitorInfo?: SchedulerxJobJobMonitorInfo;
  /**
  * map_task_xattrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#map_task_xattrs SchedulerxJob#map_task_xattrs}
  */
  readonly mapTaskXattrs?: SchedulerxJobMapTaskXattrs;
  /**
  * time_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#time_config SchedulerxJob#time_config}
  */
  readonly timeConfig: SchedulerxJobTimeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#timeouts SchedulerxJob#timeouts}
  */
  readonly timeouts?: SchedulerxJobTimeouts;
}
export interface SchedulerxJobJobMonitorInfoContactInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#ding SchedulerxJob#ding}
  */
  readonly ding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#user_mail SchedulerxJob#user_mail}
  */
  readonly userMail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#user_name SchedulerxJob#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#user_phone SchedulerxJob#user_phone}
  */
  readonly userPhone?: string;
}

export function schedulerxJobJobMonitorInfoContactInfoToTerraform(struct?: SchedulerxJobJobMonitorInfoContactInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ding: cdktf.stringToTerraform(struct!.ding),
    user_mail: cdktf.stringToTerraform(struct!.userMail),
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_phone: cdktf.stringToTerraform(struct!.userPhone),
  }
}


export function schedulerxJobJobMonitorInfoContactInfoToHclTerraform(struct?: SchedulerxJobJobMonitorInfoContactInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ding: {
      value: cdktf.stringToHclTerraform(struct!.ding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_mail: {
      value: cdktf.stringToHclTerraform(struct!.userMail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_phone: {
      value: cdktf.stringToHclTerraform(struct!.userPhone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerxJobJobMonitorInfoContactInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SchedulerxJobJobMonitorInfoContactInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ding !== undefined) {
      hasAnyValues = true;
      internalValueResult.ding = this._ding;
    }
    if (this._userMail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMail = this._userMail;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userPhone !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPhone = this._userPhone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerxJobJobMonitorInfoContactInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ding = undefined;
      this._userMail = undefined;
      this._userName = undefined;
      this._userPhone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ding = value.ding;
      this._userMail = value.userMail;
      this._userName = value.userName;
      this._userPhone = value.userPhone;
    }
  }

  // ding - computed: false, optional: true, required: false
  private _ding?: string; 
  public get ding() {
    return this.getStringAttribute('ding');
  }
  public set ding(value: string) {
    this._ding = value;
  }
  public resetDing() {
    this._ding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dingInput() {
    return this._ding;
  }

  // user_mail - computed: false, optional: true, required: false
  private _userMail?: string; 
  public get userMail() {
    return this.getStringAttribute('user_mail');
  }
  public set userMail(value: string) {
    this._userMail = value;
  }
  public resetUserMail() {
    this._userMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMailInput() {
    return this._userMail;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_phone - computed: false, optional: true, required: false
  private _userPhone?: string; 
  public get userPhone() {
    return this.getStringAttribute('user_phone');
  }
  public set userPhone(value: string) {
    this._userPhone = value;
  }
  public resetUserPhone() {
    this._userPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPhoneInput() {
    return this._userPhone;
  }
}

export class SchedulerxJobJobMonitorInfoContactInfoList extends cdktf.ComplexList {
  public internalValue? : SchedulerxJobJobMonitorInfoContactInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchedulerxJobJobMonitorInfoContactInfoOutputReference {
    return new SchedulerxJobJobMonitorInfoContactInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulerxJobJobMonitorInfoMonitorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#fail_enable SchedulerxJob#fail_enable}
  */
  readonly failEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#miss_worker_enable SchedulerxJob#miss_worker_enable}
  */
  readonly missWorkerEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#send_channel SchedulerxJob#send_channel}
  */
  readonly sendChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#timeout SchedulerxJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#timeout_enable SchedulerxJob#timeout_enable}
  */
  readonly timeoutEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#timeout_kill_enable SchedulerxJob#timeout_kill_enable}
  */
  readonly timeoutKillEnable?: boolean | cdktf.IResolvable;
}

export function schedulerxJobJobMonitorInfoMonitorConfigToTerraform(struct?: SchedulerxJobJobMonitorInfoMonitorConfigOutputReference | SchedulerxJobJobMonitorInfoMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_enable: cdktf.booleanToTerraform(struct!.failEnable),
    miss_worker_enable: cdktf.booleanToTerraform(struct!.missWorkerEnable),
    send_channel: cdktf.stringToTerraform(struct!.sendChannel),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_enable: cdktf.booleanToTerraform(struct!.timeoutEnable),
    timeout_kill_enable: cdktf.booleanToTerraform(struct!.timeoutKillEnable),
  }
}


export function schedulerxJobJobMonitorInfoMonitorConfigToHclTerraform(struct?: SchedulerxJobJobMonitorInfoMonitorConfigOutputReference | SchedulerxJobJobMonitorInfoMonitorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_enable: {
      value: cdktf.booleanToHclTerraform(struct!.failEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    miss_worker_enable: {
      value: cdktf.booleanToHclTerraform(struct!.missWorkerEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_channel: {
      value: cdktf.stringToHclTerraform(struct!.sendChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_enable: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_kill_enable: {
      value: cdktf.booleanToHclTerraform(struct!.timeoutKillEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerxJobJobMonitorInfoMonitorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerxJobJobMonitorInfoMonitorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.failEnable = this._failEnable;
    }
    if (this._missWorkerEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.missWorkerEnable = this._missWorkerEnable;
    }
    if (this._sendChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendChannel = this._sendChannel;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timeoutEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutEnable = this._timeoutEnable;
    }
    if (this._timeoutKillEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutKillEnable = this._timeoutKillEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerxJobJobMonitorInfoMonitorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failEnable = undefined;
      this._missWorkerEnable = undefined;
      this._sendChannel = undefined;
      this._timeout = undefined;
      this._timeoutEnable = undefined;
      this._timeoutKillEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failEnable = value.failEnable;
      this._missWorkerEnable = value.missWorkerEnable;
      this._sendChannel = value.sendChannel;
      this._timeout = value.timeout;
      this._timeoutEnable = value.timeoutEnable;
      this._timeoutKillEnable = value.timeoutKillEnable;
    }
  }

  // fail_enable - computed: true, optional: true, required: false
  private _failEnable?: boolean | cdktf.IResolvable; 
  public get failEnable() {
    return this.getBooleanAttribute('fail_enable');
  }
  public set failEnable(value: boolean | cdktf.IResolvable) {
    this._failEnable = value;
  }
  public resetFailEnable() {
    this._failEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failEnableInput() {
    return this._failEnable;
  }

  // miss_worker_enable - computed: true, optional: true, required: false
  private _missWorkerEnable?: boolean | cdktf.IResolvable; 
  public get missWorkerEnable() {
    return this.getBooleanAttribute('miss_worker_enable');
  }
  public set missWorkerEnable(value: boolean | cdktf.IResolvable) {
    this._missWorkerEnable = value;
  }
  public resetMissWorkerEnable() {
    this._missWorkerEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missWorkerEnableInput() {
    return this._missWorkerEnable;
  }

  // send_channel - computed: true, optional: true, required: false
  private _sendChannel?: string; 
  public get sendChannel() {
    return this.getStringAttribute('send_channel');
  }
  public set sendChannel(value: string) {
    this._sendChannel = value;
  }
  public resetSendChannel() {
    this._sendChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendChannelInput() {
    return this._sendChannel;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeout_enable - computed: true, optional: true, required: false
  private _timeoutEnable?: boolean | cdktf.IResolvable; 
  public get timeoutEnable() {
    return this.getBooleanAttribute('timeout_enable');
  }
  public set timeoutEnable(value: boolean | cdktf.IResolvable) {
    this._timeoutEnable = value;
  }
  public resetTimeoutEnable() {
    this._timeoutEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutEnableInput() {
    return this._timeoutEnable;
  }

  // timeout_kill_enable - computed: true, optional: true, required: false
  private _timeoutKillEnable?: boolean | cdktf.IResolvable; 
  public get timeoutKillEnable() {
    return this.getBooleanAttribute('timeout_kill_enable');
  }
  public set timeoutKillEnable(value: boolean | cdktf.IResolvable) {
    this._timeoutKillEnable = value;
  }
  public resetTimeoutKillEnable() {
    this._timeoutKillEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutKillEnableInput() {
    return this._timeoutKillEnable;
  }
}
export interface SchedulerxJobJobMonitorInfo {
  /**
  * contact_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#contact_info SchedulerxJob#contact_info}
  */
  readonly contactInfo?: SchedulerxJobJobMonitorInfoContactInfo[] | cdktf.IResolvable;
  /**
  * monitor_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#monitor_config SchedulerxJob#monitor_config}
  */
  readonly monitorConfig?: SchedulerxJobJobMonitorInfoMonitorConfig;
}

export function schedulerxJobJobMonitorInfoToTerraform(struct?: SchedulerxJobJobMonitorInfoOutputReference | SchedulerxJobJobMonitorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_info: cdktf.listMapper(schedulerxJobJobMonitorInfoContactInfoToTerraform, true)(struct!.contactInfo),
    monitor_config: schedulerxJobJobMonitorInfoMonitorConfigToTerraform(struct!.monitorConfig),
  }
}


export function schedulerxJobJobMonitorInfoToHclTerraform(struct?: SchedulerxJobJobMonitorInfoOutputReference | SchedulerxJobJobMonitorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_info: {
      value: cdktf.listMapperHcl(schedulerxJobJobMonitorInfoContactInfoToHclTerraform, true)(struct!.contactInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SchedulerxJobJobMonitorInfoContactInfoList",
    },
    monitor_config: {
      value: schedulerxJobJobMonitorInfoMonitorConfigToHclTerraform(struct!.monitorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SchedulerxJobJobMonitorInfoMonitorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerxJobJobMonitorInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerxJobJobMonitorInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactInfo = this._contactInfo?.internalValue;
    }
    if (this._monitorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorConfig = this._monitorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerxJobJobMonitorInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactInfo.internalValue = undefined;
      this._monitorConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactInfo.internalValue = value.contactInfo;
      this._monitorConfig.internalValue = value.monitorConfig;
    }
  }

  // contact_info - computed: false, optional: true, required: false
  private _contactInfo = new SchedulerxJobJobMonitorInfoContactInfoList(this, "contact_info", false);
  public get contactInfo() {
    return this._contactInfo;
  }
  public putContactInfo(value: SchedulerxJobJobMonitorInfoContactInfo[] | cdktf.IResolvable) {
    this._contactInfo.internalValue = value;
  }
  public resetContactInfo() {
    this._contactInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInfoInput() {
    return this._contactInfo.internalValue;
  }

  // monitor_config - computed: false, optional: true, required: false
  private _monitorConfig = new SchedulerxJobJobMonitorInfoMonitorConfigOutputReference(this, "monitor_config");
  public get monitorConfig() {
    return this._monitorConfig;
  }
  public putMonitorConfig(value: SchedulerxJobJobMonitorInfoMonitorConfig) {
    this._monitorConfig.internalValue = value;
  }
  public resetMonitorConfig() {
    this._monitorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorConfigInput() {
    return this._monitorConfig.internalValue;
  }
}
export interface SchedulerxJobMapTaskXattrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#consumer_size SchedulerxJob#consumer_size}
  */
  readonly consumerSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#dispatcher_size SchedulerxJob#dispatcher_size}
  */
  readonly dispatcherSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#page_size SchedulerxJob#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#queue_size SchedulerxJob#queue_size}
  */
  readonly queueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#task_attempt_interval SchedulerxJob#task_attempt_interval}
  */
  readonly taskAttemptInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#task_max_attempt SchedulerxJob#task_max_attempt}
  */
  readonly taskMaxAttempt?: number;
}

export function schedulerxJobMapTaskXattrsToTerraform(struct?: SchedulerxJobMapTaskXattrsOutputReference | SchedulerxJobMapTaskXattrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_size: cdktf.numberToTerraform(struct!.consumerSize),
    dispatcher_size: cdktf.numberToTerraform(struct!.dispatcherSize),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
    queue_size: cdktf.numberToTerraform(struct!.queueSize),
    task_attempt_interval: cdktf.numberToTerraform(struct!.taskAttemptInterval),
    task_max_attempt: cdktf.numberToTerraform(struct!.taskMaxAttempt),
  }
}


export function schedulerxJobMapTaskXattrsToHclTerraform(struct?: SchedulerxJobMapTaskXattrsOutputReference | SchedulerxJobMapTaskXattrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_size: {
      value: cdktf.numberToHclTerraform(struct!.consumerSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dispatcher_size: {
      value: cdktf.numberToHclTerraform(struct!.dispatcherSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size: {
      value: cdktf.numberToHclTerraform(struct!.pageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_size: {
      value: cdktf.numberToHclTerraform(struct!.queueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_attempt_interval: {
      value: cdktf.numberToHclTerraform(struct!.taskAttemptInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_max_attempt: {
      value: cdktf.numberToHclTerraform(struct!.taskMaxAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerxJobMapTaskXattrsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerxJobMapTaskXattrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerSize = this._consumerSize;
    }
    if (this._dispatcherSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispatcherSize = this._dispatcherSize;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    if (this._queueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueSize = this._queueSize;
    }
    if (this._taskAttemptInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskAttemptInterval = this._taskAttemptInterval;
    }
    if (this._taskMaxAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskMaxAttempt = this._taskMaxAttempt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerxJobMapTaskXattrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerSize = undefined;
      this._dispatcherSize = undefined;
      this._pageSize = undefined;
      this._queueSize = undefined;
      this._taskAttemptInterval = undefined;
      this._taskMaxAttempt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerSize = value.consumerSize;
      this._dispatcherSize = value.dispatcherSize;
      this._pageSize = value.pageSize;
      this._queueSize = value.queueSize;
      this._taskAttemptInterval = value.taskAttemptInterval;
      this._taskMaxAttempt = value.taskMaxAttempt;
    }
  }

  // consumer_size - computed: false, optional: true, required: false
  private _consumerSize?: number; 
  public get consumerSize() {
    return this.getNumberAttribute('consumer_size');
  }
  public set consumerSize(value: number) {
    this._consumerSize = value;
  }
  public resetConsumerSize() {
    this._consumerSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSizeInput() {
    return this._consumerSize;
  }

  // dispatcher_size - computed: false, optional: true, required: false
  private _dispatcherSize?: number; 
  public get dispatcherSize() {
    return this.getNumberAttribute('dispatcher_size');
  }
  public set dispatcherSize(value: number) {
    this._dispatcherSize = value;
  }
  public resetDispatcherSize() {
    this._dispatcherSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatcherSizeInput() {
    return this._dispatcherSize;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // queue_size - computed: false, optional: true, required: false
  private _queueSize?: number; 
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }
  public set queueSize(value: number) {
    this._queueSize = value;
  }
  public resetQueueSize() {
    this._queueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSizeInput() {
    return this._queueSize;
  }

  // task_attempt_interval - computed: false, optional: true, required: false
  private _taskAttemptInterval?: number; 
  public get taskAttemptInterval() {
    return this.getNumberAttribute('task_attempt_interval');
  }
  public set taskAttemptInterval(value: number) {
    this._taskAttemptInterval = value;
  }
  public resetTaskAttemptInterval() {
    this._taskAttemptInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAttemptIntervalInput() {
    return this._taskAttemptInterval;
  }

  // task_max_attempt - computed: false, optional: true, required: false
  private _taskMaxAttempt?: number; 
  public get taskMaxAttempt() {
    return this.getNumberAttribute('task_max_attempt');
  }
  public set taskMaxAttempt(value: number) {
    this._taskMaxAttempt = value;
  }
  public resetTaskMaxAttempt() {
    this._taskMaxAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskMaxAttemptInput() {
    return this._taskMaxAttempt;
  }
}
export interface SchedulerxJobTimeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#calendar SchedulerxJob#calendar}
  */
  readonly calendar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#data_offset SchedulerxJob#data_offset}
  */
  readonly dataOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#time_expression SchedulerxJob#time_expression}
  */
  readonly timeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#time_type SchedulerxJob#time_type}
  */
  readonly timeType: number;
}

export function schedulerxJobTimeConfigToTerraform(struct?: SchedulerxJobTimeConfigOutputReference | SchedulerxJobTimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calendar: cdktf.stringToTerraform(struct!.calendar),
    data_offset: cdktf.numberToTerraform(struct!.dataOffset),
    time_expression: cdktf.stringToTerraform(struct!.timeExpression),
    time_type: cdktf.numberToTerraform(struct!.timeType),
  }
}


export function schedulerxJobTimeConfigToHclTerraform(struct?: SchedulerxJobTimeConfigOutputReference | SchedulerxJobTimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calendar: {
      value: cdktf.stringToHclTerraform(struct!.calendar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_offset: {
      value: cdktf.numberToHclTerraform(struct!.dataOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_expression: {
      value: cdktf.stringToHclTerraform(struct!.timeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.numberToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerxJobTimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerxJobTimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calendar !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendar = this._calendar;
    }
    if (this._dataOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataOffset = this._dataOffset;
    }
    if (this._timeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeExpression = this._timeExpression;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerxJobTimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calendar = undefined;
      this._dataOffset = undefined;
      this._timeExpression = undefined;
      this._timeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calendar = value.calendar;
      this._dataOffset = value.dataOffset;
      this._timeExpression = value.timeExpression;
      this._timeType = value.timeType;
    }
  }

  // calendar - computed: false, optional: true, required: false
  private _calendar?: string; 
  public get calendar() {
    return this.getStringAttribute('calendar');
  }
  public set calendar(value: string) {
    this._calendar = value;
  }
  public resetCalendar() {
    this._calendar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarInput() {
    return this._calendar;
  }

  // data_offset - computed: false, optional: true, required: false
  private _dataOffset?: number; 
  public get dataOffset() {
    return this.getNumberAttribute('data_offset');
  }
  public set dataOffset(value: number) {
    this._dataOffset = value;
  }
  public resetDataOffset() {
    this._dataOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOffsetInput() {
    return this._dataOffset;
  }

  // time_expression - computed: true, optional: true, required: false
  private _timeExpression?: string; 
  public get timeExpression() {
    return this.getStringAttribute('time_expression');
  }
  public set timeExpression(value: string) {
    this._timeExpression = value;
  }
  public resetTimeExpression() {
    this._timeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpressionInput() {
    return this._timeExpression;
  }

  // time_type - computed: false, optional: false, required: true
  private _timeType?: number; 
  public get timeType() {
    return this.getNumberAttribute('time_type');
  }
  public set timeType(value: number) {
    this._timeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }
}
export interface SchedulerxJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#create SchedulerxJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#delete SchedulerxJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#update SchedulerxJob#update}
  */
  readonly update?: string;
}

export function schedulerxJobTimeoutsToTerraform(struct?: SchedulerxJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function schedulerxJobTimeoutsToHclTerraform(struct?: SchedulerxJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulerxJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchedulerxJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerxJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job alicloud_schedulerx_job}
*/
export class SchedulerxJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_schedulerx_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchedulerxJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchedulerxJob to import
  * @param importFromId The id of the existing SchedulerxJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchedulerxJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_schedulerx_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/schedulerx_job alicloud_schedulerx_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchedulerxJobConfig
  */
  public constructor(scope: Construct, id: string, config: SchedulerxJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_schedulerx_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attemptInterval = config.attemptInterval;
    this._className = config.className;
    this._content = config.content;
    this._description = config.description;
    this._executeMode = config.executeMode;
    this._failTimes = config.failTimes;
    this._groupId = config.groupId;
    this._id = config.id;
    this._jobName = config.jobName;
    this._jobType = config.jobType;
    this._maxAttempt = config.maxAttempt;
    this._maxConcurrency = config.maxConcurrency;
    this._namespace = config.namespace;
    this._namespaceSource = config.namespaceSource;
    this._parameters = config.parameters;
    this._status = config.status;
    this._successNoticeEnable = config.successNoticeEnable;
    this._taskDispatchMode = config.taskDispatchMode;
    this._template = config.template;
    this._timezone = config.timezone;
    this._xAttrs = config.xAttrs;
    this._jobMonitorInfo.internalValue = config.jobMonitorInfo;
    this._mapTaskXattrs.internalValue = config.mapTaskXattrs;
    this._timeConfig.internalValue = config.timeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attempt_interval - computed: false, optional: true, required: false
  private _attemptInterval?: number; 
  public get attemptInterval() {
    return this.getNumberAttribute('attempt_interval');
  }
  public set attemptInterval(value: number) {
    this._attemptInterval = value;
  }
  public resetAttemptInterval() {
    this._attemptInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptIntervalInput() {
    return this._attemptInterval;
  }

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // execute_mode - computed: false, optional: false, required: true
  private _executeMode?: string; 
  public get executeMode() {
    return this.getStringAttribute('execute_mode');
  }
  public set executeMode(value: string) {
    this._executeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeModeInput() {
    return this._executeMode;
  }

  // fail_times - computed: false, optional: true, required: false
  private _failTimes?: number; 
  public get failTimes() {
    return this.getNumberAttribute('fail_times');
  }
  public set failTimes(value: number) {
    this._failTimes = value;
  }
  public resetFailTimes() {
    this._failTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTimesInput() {
    return this._failTimes;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
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

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // max_attempt - computed: false, optional: true, required: false
  private _maxAttempt?: number; 
  public get maxAttempt() {
    return this.getNumberAttribute('max_attempt');
  }
  public set maxAttempt(value: number) {
    this._maxAttempt = value;
  }
  public resetMaxAttempt() {
    this._maxAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptInput() {
    return this._maxAttempt;
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: string; 
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespace_source - computed: false, optional: true, required: false
  private _namespaceSource?: string; 
  public get namespaceSource() {
    return this.getStringAttribute('namespace_source');
  }
  public set namespaceSource(value: string) {
    this._namespaceSource = value;
  }
  public resetNamespaceSource() {
    this._namespaceSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSourceInput() {
    return this._namespaceSource;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // success_notice_enable - computed: false, optional: true, required: false
  private _successNoticeEnable?: boolean | cdktf.IResolvable; 
  public get successNoticeEnable() {
    return this.getBooleanAttribute('success_notice_enable');
  }
  public set successNoticeEnable(value: boolean | cdktf.IResolvable) {
    this._successNoticeEnable = value;
  }
  public resetSuccessNoticeEnable() {
    this._successNoticeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successNoticeEnableInput() {
    return this._successNoticeEnable;
  }

  // task_dispatch_mode - computed: false, optional: true, required: false
  private _taskDispatchMode?: string; 
  public get taskDispatchMode() {
    return this.getStringAttribute('task_dispatch_mode');
  }
  public set taskDispatchMode(value: string) {
    this._taskDispatchMode = value;
  }
  public resetTaskDispatchMode() {
    this._taskDispatchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDispatchModeInput() {
    return this._taskDispatchMode;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // x_attrs - computed: true, optional: true, required: false
  private _xAttrs?: string; 
  public get xAttrs() {
    return this.getStringAttribute('x_attrs');
  }
  public set xAttrs(value: string) {
    this._xAttrs = value;
  }
  public resetXAttrs() {
    this._xAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAttrsInput() {
    return this._xAttrs;
  }

  // job_monitor_info - computed: false, optional: true, required: false
  private _jobMonitorInfo = new SchedulerxJobJobMonitorInfoOutputReference(this, "job_monitor_info");
  public get jobMonitorInfo() {
    return this._jobMonitorInfo;
  }
  public putJobMonitorInfo(value: SchedulerxJobJobMonitorInfo) {
    this._jobMonitorInfo.internalValue = value;
  }
  public resetJobMonitorInfo() {
    this._jobMonitorInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobMonitorInfoInput() {
    return this._jobMonitorInfo.internalValue;
  }

  // map_task_xattrs - computed: false, optional: true, required: false
  private _mapTaskXattrs = new SchedulerxJobMapTaskXattrsOutputReference(this, "map_task_xattrs");
  public get mapTaskXattrs() {
    return this._mapTaskXattrs;
  }
  public putMapTaskXattrs(value: SchedulerxJobMapTaskXattrs) {
    this._mapTaskXattrs.internalValue = value;
  }
  public resetMapTaskXattrs() {
    this._mapTaskXattrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTaskXattrsInput() {
    return this._mapTaskXattrs.internalValue;
  }

  // time_config - computed: false, optional: false, required: true
  private _timeConfig = new SchedulerxJobTimeConfigOutputReference(this, "time_config");
  public get timeConfig() {
    return this._timeConfig;
  }
  public putTimeConfig(value: SchedulerxJobTimeConfig) {
    this._timeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeConfigInput() {
    return this._timeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SchedulerxJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SchedulerxJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attempt_interval: cdktf.numberToTerraform(this._attemptInterval),
      class_name: cdktf.stringToTerraform(this._className),
      content: cdktf.stringToTerraform(this._content),
      description: cdktf.stringToTerraform(this._description),
      execute_mode: cdktf.stringToTerraform(this._executeMode),
      fail_times: cdktf.numberToTerraform(this._failTimes),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      job_name: cdktf.stringToTerraform(this._jobName),
      job_type: cdktf.stringToTerraform(this._jobType),
      max_attempt: cdktf.numberToTerraform(this._maxAttempt),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      namespace: cdktf.stringToTerraform(this._namespace),
      namespace_source: cdktf.stringToTerraform(this._namespaceSource),
      parameters: cdktf.stringToTerraform(this._parameters),
      status: cdktf.stringToTerraform(this._status),
      success_notice_enable: cdktf.booleanToTerraform(this._successNoticeEnable),
      task_dispatch_mode: cdktf.stringToTerraform(this._taskDispatchMode),
      template: cdktf.stringToTerraform(this._template),
      timezone: cdktf.stringToTerraform(this._timezone),
      x_attrs: cdktf.stringToTerraform(this._xAttrs),
      job_monitor_info: schedulerxJobJobMonitorInfoToTerraform(this._jobMonitorInfo.internalValue),
      map_task_xattrs: schedulerxJobMapTaskXattrsToTerraform(this._mapTaskXattrs.internalValue),
      time_config: schedulerxJobTimeConfigToTerraform(this._timeConfig.internalValue),
      timeouts: schedulerxJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attempt_interval: {
        value: cdktf.numberToHclTerraform(this._attemptInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_name: {
        value: cdktf.stringToHclTerraform(this._className),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      execute_mode: {
        value: cdktf.stringToHclTerraform(this._executeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_times: {
        value: cdktf.numberToHclTerraform(this._failTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_attempt: {
        value: cdktf.numberToHclTerraform(this._maxAttempt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_concurrency: {
        value: cdktf.stringToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_source: {
        value: cdktf.stringToHclTerraform(this._namespaceSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      success_notice_enable: {
        value: cdktf.booleanToHclTerraform(this._successNoticeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      task_dispatch_mode: {
        value: cdktf.stringToHclTerraform(this._taskDispatchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_attrs: {
        value: cdktf.stringToHclTerraform(this._xAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_monitor_info: {
        value: schedulerxJobJobMonitorInfoToHclTerraform(this._jobMonitorInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchedulerxJobJobMonitorInfoList",
      },
      map_task_xattrs: {
        value: schedulerxJobMapTaskXattrsToHclTerraform(this._mapTaskXattrs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchedulerxJobMapTaskXattrsList",
      },
      time_config: {
        value: schedulerxJobTimeConfigToHclTerraform(this._timeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchedulerxJobTimeConfigList",
      },
      timeouts: {
        value: schedulerxJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchedulerxJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
