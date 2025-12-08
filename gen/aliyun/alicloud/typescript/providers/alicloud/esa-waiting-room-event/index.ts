// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaWaitingRoomEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#custom_page_html EsaWaitingRoomEvent#custom_page_html}
  */
  readonly customPageHtml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#description EsaWaitingRoomEvent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#disable_session_renewal_enable EsaWaitingRoomEvent#disable_session_renewal_enable}
  */
  readonly disableSessionRenewalEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#end_time EsaWaitingRoomEvent#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#id EsaWaitingRoomEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#json_response_enable EsaWaitingRoomEvent#json_response_enable}
  */
  readonly jsonResponseEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#language EsaWaitingRoomEvent#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#new_users_per_minute EsaWaitingRoomEvent#new_users_per_minute}
  */
  readonly newUsersPerMinute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#pre_queue_enable EsaWaitingRoomEvent#pre_queue_enable}
  */
  readonly preQueueEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#pre_queue_start_time EsaWaitingRoomEvent#pre_queue_start_time}
  */
  readonly preQueueStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#queuing_method EsaWaitingRoomEvent#queuing_method}
  */
  readonly queuingMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#queuing_status_code EsaWaitingRoomEvent#queuing_status_code}
  */
  readonly queuingStatusCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#random_pre_queue_enable EsaWaitingRoomEvent#random_pre_queue_enable}
  */
  readonly randomPreQueueEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#session_duration EsaWaitingRoomEvent#session_duration}
  */
  readonly sessionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#site_id EsaWaitingRoomEvent#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#start_time EsaWaitingRoomEvent#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#status EsaWaitingRoomEvent#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#total_active_users EsaWaitingRoomEvent#total_active_users}
  */
  readonly totalActiveUsers: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#waiting_room_event_name EsaWaitingRoomEvent#waiting_room_event_name}
  */
  readonly waitingRoomEventName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#waiting_room_id EsaWaitingRoomEvent#waiting_room_id}
  */
  readonly waitingRoomId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#waiting_room_type EsaWaitingRoomEvent#waiting_room_type}
  */
  readonly waitingRoomType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#timeouts EsaWaitingRoomEvent#timeouts}
  */
  readonly timeouts?: EsaWaitingRoomEventTimeouts;
}
export interface EsaWaitingRoomEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#create EsaWaitingRoomEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#delete EsaWaitingRoomEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#update EsaWaitingRoomEvent#update}
  */
  readonly update?: string;
}

export function esaWaitingRoomEventTimeoutsToTerraform(struct?: EsaWaitingRoomEventTimeouts | cdktf.IResolvable): any {
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


export function esaWaitingRoomEventTimeoutsToHclTerraform(struct?: EsaWaitingRoomEventTimeouts | cdktf.IResolvable): any {
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

export class EsaWaitingRoomEventTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaWaitingRoomEventTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaWaitingRoomEventTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event alicloud_esa_waiting_room_event}
*/
export class EsaWaitingRoomEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_waiting_room_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaWaitingRoomEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaWaitingRoomEvent to import
  * @param importFromId The id of the existing EsaWaitingRoomEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaWaitingRoomEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_waiting_room_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_waiting_room_event alicloud_esa_waiting_room_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaWaitingRoomEventConfig
  */
  public constructor(scope: Construct, id: string, config: EsaWaitingRoomEventConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_waiting_room_event',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customPageHtml = config.customPageHtml;
    this._description = config.description;
    this._disableSessionRenewalEnable = config.disableSessionRenewalEnable;
    this._endTime = config.endTime;
    this._id = config.id;
    this._jsonResponseEnable = config.jsonResponseEnable;
    this._language = config.language;
    this._newUsersPerMinute = config.newUsersPerMinute;
    this._preQueueEnable = config.preQueueEnable;
    this._preQueueStartTime = config.preQueueStartTime;
    this._queuingMethod = config.queuingMethod;
    this._queuingStatusCode = config.queuingStatusCode;
    this._randomPreQueueEnable = config.randomPreQueueEnable;
    this._sessionDuration = config.sessionDuration;
    this._siteId = config.siteId;
    this._startTime = config.startTime;
    this._status = config.status;
    this._totalActiveUsers = config.totalActiveUsers;
    this._waitingRoomEventName = config.waitingRoomEventName;
    this._waitingRoomId = config.waitingRoomId;
    this._waitingRoomType = config.waitingRoomType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_page_html - computed: false, optional: true, required: false
  private _customPageHtml?: string; 
  public get customPageHtml() {
    return this.getStringAttribute('custom_page_html');
  }
  public set customPageHtml(value: string) {
    this._customPageHtml = value;
  }
  public resetCustomPageHtml() {
    this._customPageHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageHtmlInput() {
    return this._customPageHtml;
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

  // disable_session_renewal_enable - computed: false, optional: true, required: false
  private _disableSessionRenewalEnable?: string; 
  public get disableSessionRenewalEnable() {
    return this.getStringAttribute('disable_session_renewal_enable');
  }
  public set disableSessionRenewalEnable(value: string) {
    this._disableSessionRenewalEnable = value;
  }
  public resetDisableSessionRenewalEnable() {
    this._disableSessionRenewalEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionRenewalEnableInput() {
    return this._disableSessionRenewalEnable;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // json_response_enable - computed: false, optional: true, required: false
  private _jsonResponseEnable?: string; 
  public get jsonResponseEnable() {
    return this.getStringAttribute('json_response_enable');
  }
  public set jsonResponseEnable(value: string) {
    this._jsonResponseEnable = value;
  }
  public resetJsonResponseEnable() {
    this._jsonResponseEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonResponseEnableInput() {
    return this._jsonResponseEnable;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // new_users_per_minute - computed: false, optional: false, required: true
  private _newUsersPerMinute?: string; 
  public get newUsersPerMinute() {
    return this.getStringAttribute('new_users_per_minute');
  }
  public set newUsersPerMinute(value: string) {
    this._newUsersPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newUsersPerMinuteInput() {
    return this._newUsersPerMinute;
  }

  // pre_queue_enable - computed: false, optional: true, required: false
  private _preQueueEnable?: string; 
  public get preQueueEnable() {
    return this.getStringAttribute('pre_queue_enable');
  }
  public set preQueueEnable(value: string) {
    this._preQueueEnable = value;
  }
  public resetPreQueueEnable() {
    this._preQueueEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preQueueEnableInput() {
    return this._preQueueEnable;
  }

  // pre_queue_start_time - computed: false, optional: true, required: false
  private _preQueueStartTime?: string; 
  public get preQueueStartTime() {
    return this.getStringAttribute('pre_queue_start_time');
  }
  public set preQueueStartTime(value: string) {
    this._preQueueStartTime = value;
  }
  public resetPreQueueStartTime() {
    this._preQueueStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preQueueStartTimeInput() {
    return this._preQueueStartTime;
  }

  // queuing_method - computed: false, optional: false, required: true
  private _queuingMethod?: string; 
  public get queuingMethod() {
    return this.getStringAttribute('queuing_method');
  }
  public set queuingMethod(value: string) {
    this._queuingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queuingMethodInput() {
    return this._queuingMethod;
  }

  // queuing_status_code - computed: false, optional: false, required: true
  private _queuingStatusCode?: string; 
  public get queuingStatusCode() {
    return this.getStringAttribute('queuing_status_code');
  }
  public set queuingStatusCode(value: string) {
    this._queuingStatusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queuingStatusCodeInput() {
    return this._queuingStatusCode;
  }

  // random_pre_queue_enable - computed: false, optional: true, required: false
  private _randomPreQueueEnable?: string; 
  public get randomPreQueueEnable() {
    return this.getStringAttribute('random_pre_queue_enable');
  }
  public set randomPreQueueEnable(value: string) {
    this._randomPreQueueEnable = value;
  }
  public resetRandomPreQueueEnable() {
    this._randomPreQueueEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomPreQueueEnableInput() {
    return this._randomPreQueueEnable;
  }

  // session_duration - computed: false, optional: false, required: true
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // total_active_users - computed: false, optional: false, required: true
  private _totalActiveUsers?: string; 
  public get totalActiveUsers() {
    return this.getStringAttribute('total_active_users');
  }
  public set totalActiveUsers(value: string) {
    this._totalActiveUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveUsersInput() {
    return this._totalActiveUsers;
  }

  // waiting_room_event_id - computed: true, optional: false, required: false
  public get waitingRoomEventId() {
    return this.getNumberAttribute('waiting_room_event_id');
  }

  // waiting_room_event_name - computed: false, optional: false, required: true
  private _waitingRoomEventName?: string; 
  public get waitingRoomEventName() {
    return this.getStringAttribute('waiting_room_event_name');
  }
  public set waitingRoomEventName(value: string) {
    this._waitingRoomEventName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingRoomEventNameInput() {
    return this._waitingRoomEventName;
  }

  // waiting_room_id - computed: true, optional: true, required: false
  private _waitingRoomId?: string; 
  public get waitingRoomId() {
    return this.getStringAttribute('waiting_room_id');
  }
  public set waitingRoomId(value: string) {
    this._waitingRoomId = value;
  }
  public resetWaitingRoomId() {
    this._waitingRoomId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingRoomIdInput() {
    return this._waitingRoomId;
  }

  // waiting_room_type - computed: false, optional: false, required: true
  private _waitingRoomType?: string; 
  public get waitingRoomType() {
    return this.getStringAttribute('waiting_room_type');
  }
  public set waitingRoomType(value: string) {
    this._waitingRoomType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingRoomTypeInput() {
    return this._waitingRoomType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaWaitingRoomEventTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaWaitingRoomEventTimeouts) {
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
      custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
      description: cdktf.stringToTerraform(this._description),
      disable_session_renewal_enable: cdktf.stringToTerraform(this._disableSessionRenewalEnable),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      json_response_enable: cdktf.stringToTerraform(this._jsonResponseEnable),
      language: cdktf.stringToTerraform(this._language),
      new_users_per_minute: cdktf.stringToTerraform(this._newUsersPerMinute),
      pre_queue_enable: cdktf.stringToTerraform(this._preQueueEnable),
      pre_queue_start_time: cdktf.stringToTerraform(this._preQueueStartTime),
      queuing_method: cdktf.stringToTerraform(this._queuingMethod),
      queuing_status_code: cdktf.stringToTerraform(this._queuingStatusCode),
      random_pre_queue_enable: cdktf.stringToTerraform(this._randomPreQueueEnable),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      site_id: cdktf.stringToTerraform(this._siteId),
      start_time: cdktf.stringToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      total_active_users: cdktf.stringToTerraform(this._totalActiveUsers),
      waiting_room_event_name: cdktf.stringToTerraform(this._waitingRoomEventName),
      waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
      waiting_room_type: cdktf.stringToTerraform(this._waitingRoomType),
      timeouts: esaWaitingRoomEventTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_page_html: {
        value: cdktf.stringToHclTerraform(this._customPageHtml),
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
      disable_session_renewal_enable: {
        value: cdktf.stringToHclTerraform(this._disableSessionRenewalEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      json_response_enable: {
        value: cdktf.stringToHclTerraform(this._jsonResponseEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_users_per_minute: {
        value: cdktf.stringToHclTerraform(this._newUsersPerMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_queue_enable: {
        value: cdktf.stringToHclTerraform(this._preQueueEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_queue_start_time: {
        value: cdktf.stringToHclTerraform(this._preQueueStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queuing_method: {
        value: cdktf.stringToHclTerraform(this._queuingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queuing_status_code: {
        value: cdktf.stringToHclTerraform(this._queuingStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      random_pre_queue_enable: {
        value: cdktf.stringToHclTerraform(this._randomPreQueueEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
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
      total_active_users: {
        value: cdktf.stringToHclTerraform(this._totalActiveUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waiting_room_event_name: {
        value: cdktf.stringToHclTerraform(this._waitingRoomEventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waiting_room_id: {
        value: cdktf.stringToHclTerraform(this._waitingRoomId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waiting_room_type: {
        value: cdktf.stringToHclTerraform(this._waitingRoomType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaWaitingRoomEventTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaWaitingRoomEventTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
