// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaWaitingRoomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#cookie_name EsaWaitingRoom#cookie_name}
  */
  readonly cookieName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#custom_page_html EsaWaitingRoom#custom_page_html}
  */
  readonly customPageHtml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#description EsaWaitingRoom#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#disable_session_renewal_enable EsaWaitingRoom#disable_session_renewal_enable}
  */
  readonly disableSessionRenewalEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#id EsaWaitingRoom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#json_response_enable EsaWaitingRoom#json_response_enable}
  */
  readonly jsonResponseEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#language EsaWaitingRoom#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#new_users_per_minute EsaWaitingRoom#new_users_per_minute}
  */
  readonly newUsersPerMinute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#queue_all_enable EsaWaitingRoom#queue_all_enable}
  */
  readonly queueAllEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#queuing_method EsaWaitingRoom#queuing_method}
  */
  readonly queuingMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#queuing_status_code EsaWaitingRoom#queuing_status_code}
  */
  readonly queuingStatusCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#session_duration EsaWaitingRoom#session_duration}
  */
  readonly sessionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#site_id EsaWaitingRoom#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#status EsaWaitingRoom#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#total_active_users EsaWaitingRoom#total_active_users}
  */
  readonly totalActiveUsers: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#waiting_room_name EsaWaitingRoom#waiting_room_name}
  */
  readonly waitingRoomName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#waiting_room_type EsaWaitingRoom#waiting_room_type}
  */
  readonly waitingRoomType: string;
  /**
  * host_name_and_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#host_name_and_path EsaWaitingRoom#host_name_and_path}
  */
  readonly hostNameAndPath: EsaWaitingRoomHostNameAndPath[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#timeouts EsaWaitingRoom#timeouts}
  */
  readonly timeouts?: EsaWaitingRoomTimeouts;
}
export interface EsaWaitingRoomHostNameAndPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#domain EsaWaitingRoom#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#path EsaWaitingRoom#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#subdomain EsaWaitingRoom#subdomain}
  */
  readonly subdomain: string;
}

export function esaWaitingRoomHostNameAndPathToTerraform(struct?: EsaWaitingRoomHostNameAndPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    path: cdktf.stringToTerraform(struct!.path),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
  }
}


export function esaWaitingRoomHostNameAndPathToHclTerraform(struct?: EsaWaitingRoomHostNameAndPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdomain: {
      value: cdktf.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWaitingRoomHostNameAndPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWaitingRoomHostNameAndPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWaitingRoomHostNameAndPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._path = undefined;
      this._subdomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._path = value.path;
      this._subdomain = value.subdomain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }
}

export class EsaWaitingRoomHostNameAndPathList extends cdktf.ComplexList {
  public internalValue? : EsaWaitingRoomHostNameAndPath[] | cdktf.IResolvable

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
  public get(index: number): EsaWaitingRoomHostNameAndPathOutputReference {
    return new EsaWaitingRoomHostNameAndPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWaitingRoomTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#create EsaWaitingRoom#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#delete EsaWaitingRoom#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#update EsaWaitingRoom#update}
  */
  readonly update?: string;
}

export function esaWaitingRoomTimeoutsToTerraform(struct?: EsaWaitingRoomTimeouts | cdktf.IResolvable): any {
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


export function esaWaitingRoomTimeoutsToHclTerraform(struct?: EsaWaitingRoomTimeouts | cdktf.IResolvable): any {
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

export class EsaWaitingRoomTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaWaitingRoomTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaWaitingRoomTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room alicloud_esa_waiting_room}
*/
export class EsaWaitingRoom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_waiting_room";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaWaitingRoom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaWaitingRoom to import
  * @param importFromId The id of the existing EsaWaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaWaitingRoom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_waiting_room", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/esa_waiting_room alicloud_esa_waiting_room} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaWaitingRoomConfig
  */
  public constructor(scope: Construct, id: string, config: EsaWaitingRoomConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_waiting_room',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookieName = config.cookieName;
    this._customPageHtml = config.customPageHtml;
    this._description = config.description;
    this._disableSessionRenewalEnable = config.disableSessionRenewalEnable;
    this._id = config.id;
    this._jsonResponseEnable = config.jsonResponseEnable;
    this._language = config.language;
    this._newUsersPerMinute = config.newUsersPerMinute;
    this._queueAllEnable = config.queueAllEnable;
    this._queuingMethod = config.queuingMethod;
    this._queuingStatusCode = config.queuingStatusCode;
    this._sessionDuration = config.sessionDuration;
    this._siteId = config.siteId;
    this._status = config.status;
    this._totalActiveUsers = config.totalActiveUsers;
    this._waitingRoomName = config.waitingRoomName;
    this._waitingRoomType = config.waitingRoomType;
    this._hostNameAndPath.internalValue = config.hostNameAndPath;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

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

  // queue_all_enable - computed: false, optional: true, required: false
  private _queueAllEnable?: string; 
  public get queueAllEnable() {
    return this.getStringAttribute('queue_all_enable');
  }
  public set queueAllEnable(value: string) {
    this._queueAllEnable = value;
  }
  public resetQueueAllEnable() {
    this._queueAllEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueAllEnableInput() {
    return this._queueAllEnable;
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

  // waiting_room_id - computed: true, optional: false, required: false
  public get waitingRoomId() {
    return this.getStringAttribute('waiting_room_id');
  }

  // waiting_room_name - computed: false, optional: false, required: true
  private _waitingRoomName?: string; 
  public get waitingRoomName() {
    return this.getStringAttribute('waiting_room_name');
  }
  public set waitingRoomName(value: string) {
    this._waitingRoomName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingRoomNameInput() {
    return this._waitingRoomName;
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

  // host_name_and_path - computed: false, optional: false, required: true
  private _hostNameAndPath = new EsaWaitingRoomHostNameAndPathList(this, "host_name_and_path", false);
  public get hostNameAndPath() {
    return this._hostNameAndPath;
  }
  public putHostNameAndPath(value: EsaWaitingRoomHostNameAndPath[] | cdktf.IResolvable) {
    this._hostNameAndPath.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameAndPathInput() {
    return this._hostNameAndPath.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaWaitingRoomTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaWaitingRoomTimeouts) {
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
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
      description: cdktf.stringToTerraform(this._description),
      disable_session_renewal_enable: cdktf.stringToTerraform(this._disableSessionRenewalEnable),
      id: cdktf.stringToTerraform(this._id),
      json_response_enable: cdktf.stringToTerraform(this._jsonResponseEnable),
      language: cdktf.stringToTerraform(this._language),
      new_users_per_minute: cdktf.stringToTerraform(this._newUsersPerMinute),
      queue_all_enable: cdktf.stringToTerraform(this._queueAllEnable),
      queuing_method: cdktf.stringToTerraform(this._queuingMethod),
      queuing_status_code: cdktf.stringToTerraform(this._queuingStatusCode),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      site_id: cdktf.stringToTerraform(this._siteId),
      status: cdktf.stringToTerraform(this._status),
      total_active_users: cdktf.stringToTerraform(this._totalActiveUsers),
      waiting_room_name: cdktf.stringToTerraform(this._waitingRoomName),
      waiting_room_type: cdktf.stringToTerraform(this._waitingRoomType),
      host_name_and_path: cdktf.listMapper(esaWaitingRoomHostNameAndPathToTerraform, true)(this._hostNameAndPath.internalValue),
      timeouts: esaWaitingRoomTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_name: {
        value: cdktf.stringToHclTerraform(this._cookieName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      queue_all_enable: {
        value: cdktf.stringToHclTerraform(this._queueAllEnable),
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
      waiting_room_name: {
        value: cdktf.stringToHclTerraform(this._waitingRoomName),
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
      host_name_and_path: {
        value: cdktf.listMapperHcl(esaWaitingRoomHostNameAndPathToHclTerraform, true)(this._hostNameAndPath.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaWaitingRoomHostNameAndPathList",
      },
      timeouts: {
        value: esaWaitingRoomTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaWaitingRoomTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
