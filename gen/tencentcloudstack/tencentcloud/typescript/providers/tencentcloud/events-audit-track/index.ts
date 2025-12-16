// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventsAuditTrackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#id EventsAuditTrack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tracking set name, which can only contain 3-48 letters, digits, hyphens, and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#name EventsAuditTrack#name}
  */
  readonly name: string;
  /**
  * Tracking set status (0: Not enabled; 1: Enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#status EventsAuditTrack#status}
  */
  readonly status: number;
  /**
  * Whether to enable the feature of shipping organization members operation logs to the organization admin account or the trusted service admin account (0: Not enabled; 1: Enabled. This feature can only be enabled by the organization admin account or the trusted service admin account).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#track_for_all_members EventsAuditTrack#track_for_all_members}
  */
  readonly trackForAllMembers?: number;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#filters EventsAuditTrack#filters}
  */
  readonly filters: EventsAuditTrackFilters;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#storage EventsAuditTrack#storage}
  */
  readonly storage: EventsAuditTrackStorage;
}
export interface EventsAuditTrackFiltersResourceFields {
  /**
  * Tracking set event type (`Read`: Read; `Write`: Write; `*`: All).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#action_type EventsAuditTrack#action_type}
  */
  readonly actionType: string;
  /**
  * The list of API names of tracking set events. When `ResourceType` is `*`, the value of `EventNames` must be `*`. When `ResourceType` is a specified product, the value of `EventNames` can be `*`. When `ResourceType` is `cos` or `cls`, up to 10 APIs are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#event_names EventsAuditTrack#event_names}
  */
  readonly eventNames: string[];
  /**
  * The product to which the tracking set event belongs. The value can be a single product such as `cos`, or `*` that indicates all products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#resource_type EventsAuditTrack#resource_type}
  */
  readonly resourceType: string;
}

export function eventsAuditTrackFiltersResourceFieldsToTerraform(struct?: EventsAuditTrackFiltersResourceFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    event_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventNames),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function eventsAuditTrackFiltersResourceFieldsToHclTerraform(struct?: EventsAuditTrackFiltersResourceFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsAuditTrackFiltersResourceFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventsAuditTrackFiltersResourceFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._eventNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventNames = this._eventNames;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsAuditTrackFiltersResourceFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._eventNames = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._eventNames = value.eventNames;
      this._resourceType = value.resourceType;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // event_names - computed: false, optional: false, required: true
  private _eventNames?: string[]; 
  public get eventNames() {
    return cdktf.Fn.tolist(this.getListAttribute('event_names'));
  }
  public set eventNames(value: string[]) {
    this._eventNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNamesInput() {
    return this._eventNames;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class EventsAuditTrackFiltersResourceFieldsList extends cdktf.ComplexList {
  public internalValue? : EventsAuditTrackFiltersResourceFields[] | cdktf.IResolvable

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
  public get(index: number): EventsAuditTrackFiltersResourceFieldsOutputReference {
    return new EventsAuditTrackFiltersResourceFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventsAuditTrackFilters {
  /**
  * resource_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#resource_fields EventsAuditTrack#resource_fields}
  */
  readonly resourceFields?: EventsAuditTrackFiltersResourceFields[] | cdktf.IResolvable;
}

export function eventsAuditTrackFiltersToTerraform(struct?: EventsAuditTrackFiltersOutputReference | EventsAuditTrackFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_fields: cdktf.listMapper(eventsAuditTrackFiltersResourceFieldsToTerraform, true)(struct!.resourceFields),
  }
}


export function eventsAuditTrackFiltersToHclTerraform(struct?: EventsAuditTrackFiltersOutputReference | EventsAuditTrackFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_fields: {
      value: cdktf.listMapperHcl(eventsAuditTrackFiltersResourceFieldsToHclTerraform, true)(struct!.resourceFields),
      isBlock: true,
      type: "list",
      storageClassType: "EventsAuditTrackFiltersResourceFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsAuditTrackFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventsAuditTrackFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFields = this._resourceFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsAuditTrackFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceFields.internalValue = value.resourceFields;
    }
  }

  // resource_fields - computed: false, optional: true, required: false
  private _resourceFields = new EventsAuditTrackFiltersResourceFieldsList(this, "resource_fields", false);
  public get resourceFields() {
    return this._resourceFields;
  }
  public putResourceFields(value: EventsAuditTrackFiltersResourceFields[] | cdktf.IResolvable) {
    this._resourceFields.internalValue = value;
  }
  public resetResourceFields() {
    this._resourceFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldsInput() {
    return this._resourceFields.internalValue;
  }
}
export interface EventsAuditTrackStorage {
  /**
  * Designated to store user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#storage_account_id EventsAuditTrack#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Designated to store user app ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#storage_app_id EventsAuditTrack#storage_app_id}
  */
  readonly storageAppId?: string;
  /**
  * Storage name. For COS, the storage name is the custom bucket name, which can contain up to 50 lowercase letters, digits, and hyphens. It cannot contain "-APPID" and cannot start or end with a hyphen. For CLS, the storage name is the log topic ID, which can contain 1-50 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#storage_name EventsAuditTrack#storage_name}
  */
  readonly storageName: string;
  /**
  * Storage directory prefix. The COS log file prefix can only contain 3-40 letters and digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#storage_prefix EventsAuditTrack#storage_prefix}
  */
  readonly storagePrefix: string;
  /**
  * StorageRegion *string `json:'StorageRegion,omitnil,omitempty' name: 'StorageRegion'`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#storage_region EventsAuditTrack#storage_region}
  */
  readonly storageRegion: string;
  /**
  * Storage type (Valid values: cos, cls).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#storage_type EventsAuditTrack#storage_type}
  */
  readonly storageType: string;
}

export function eventsAuditTrackStorageToTerraform(struct?: EventsAuditTrackStorageOutputReference | EventsAuditTrackStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_app_id: cdktf.stringToTerraform(struct!.storageAppId),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    storage_prefix: cdktf.stringToTerraform(struct!.storagePrefix),
    storage_region: cdktf.stringToTerraform(struct!.storageRegion),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function eventsAuditTrackStorageToHclTerraform(struct?: EventsAuditTrackStorageOutputReference | EventsAuditTrackStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_app_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_prefix: {
      value: cdktf.stringToHclTerraform(struct!.storagePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_region: {
      value: cdktf.stringToHclTerraform(struct!.storageRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsAuditTrackStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventsAuditTrackStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    if (this._storageAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAppId = this._storageAppId;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._storagePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePrefix = this._storagePrefix;
    }
    if (this._storageRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRegion = this._storageRegion;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsAuditTrackStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageAccountId = undefined;
      this._storageAppId = undefined;
      this._storageName = undefined;
      this._storagePrefix = undefined;
      this._storageRegion = undefined;
      this._storageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageAccountId = value.storageAccountId;
      this._storageAppId = value.storageAppId;
      this._storageName = value.storageName;
      this._storagePrefix = value.storagePrefix;
      this._storageRegion = value.storageRegion;
      this._storageType = value.storageType;
    }
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // storage_app_id - computed: false, optional: true, required: false
  private _storageAppId?: string; 
  public get storageAppId() {
    return this.getStringAttribute('storage_app_id');
  }
  public set storageAppId(value: string) {
    this._storageAppId = value;
  }
  public resetStorageAppId() {
    this._storageAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAppIdInput() {
    return this._storageAppId;
  }

  // storage_name - computed: false, optional: false, required: true
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // storage_prefix - computed: false, optional: false, required: true
  private _storagePrefix?: string; 
  public get storagePrefix() {
    return this.getStringAttribute('storage_prefix');
  }
  public set storagePrefix(value: string) {
    this._storagePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePrefixInput() {
    return this._storagePrefix;
  }

  // storage_region - computed: false, optional: false, required: true
  private _storageRegion?: string; 
  public get storageRegion() {
    return this.getStringAttribute('storage_region');
  }
  public set storageRegion(value: string) {
    this._storageRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRegionInput() {
    return this._storageRegion;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track tencentcloud_events_audit_track}
*/
export class EventsAuditTrack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_events_audit_track";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventsAuditTrack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventsAuditTrack to import
  * @param importFromId The id of the existing EventsAuditTrack that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventsAuditTrack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_events_audit_track", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/events_audit_track tencentcloud_events_audit_track} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventsAuditTrackConfig
  */
  public constructor(scope: Construct, id: string, config: EventsAuditTrackConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_events_audit_track',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._trackForAllMembers = config.trackForAllMembers;
    this._filters.internalValue = config.filters;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // track_for_all_members - computed: false, optional: true, required: false
  private _trackForAllMembers?: number; 
  public get trackForAllMembers() {
    return this.getNumberAttribute('track_for_all_members');
  }
  public set trackForAllMembers(value: number) {
    this._trackForAllMembers = value;
  }
  public resetTrackForAllMembers() {
    this._trackForAllMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackForAllMembersInput() {
    return this._trackForAllMembers;
  }

  // track_id - computed: true, optional: false, required: false
  public get trackId() {
    return this.getNumberAttribute('track_id');
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new EventsAuditTrackFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: EventsAuditTrackFilters) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new EventsAuditTrackStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: EventsAuditTrackStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.numberToTerraform(this._status),
      track_for_all_members: cdktf.numberToTerraform(this._trackForAllMembers),
      filters: eventsAuditTrackFiltersToTerraform(this._filters.internalValue),
      storage: eventsAuditTrackStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_for_all_members: {
        value: cdktf.numberToHclTerraform(this._trackForAllMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filters: {
        value: eventsAuditTrackFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventsAuditTrackFiltersList",
      },
      storage: {
        value: eventsAuditTrackStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventsAuditTrackStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
