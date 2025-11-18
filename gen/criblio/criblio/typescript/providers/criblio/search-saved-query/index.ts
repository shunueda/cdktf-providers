// https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchSavedQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the saved query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#description SearchSavedQuery#description}
  */
  readonly description?: string;
  /**
  * Earliest time for the search range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#earliest SearchSavedQuery#earliest}
  */
  readonly earliest?: string;
  /**
  * Unique identifier for the saved query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#id SearchSavedQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Whether the saved query is private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#is_private SearchSavedQuery#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * Latest time for the search range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#latest SearchSavedQuery#latest}
  */
  readonly latest?: string;
  /**
  * Name of the saved query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#name SearchSavedQuery#name}
  */
  readonly name: string;
  /**
  * The search query string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#query SearchSavedQuery#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#schedule SearchSavedQuery#schedule}
  */
  readonly schedule?: SearchSavedQuerySchedule;
}
export interface SearchSavedQueryScheduleNotifications {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#disabled SearchSavedQuery#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function searchSavedQueryScheduleNotificationsToTerraform(struct?: SearchSavedQueryScheduleNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function searchSavedQueryScheduleNotificationsToHclTerraform(struct?: SearchSavedQueryScheduleNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchSavedQueryScheduleNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchSavedQueryScheduleNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchSavedQueryScheduleNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface SearchSavedQuerySchedule {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#cron_schedule SearchSavedQuery#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#enabled SearchSavedQuery#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#keep_last_n SearchSavedQuery#keep_last_n}
  */
  readonly keepLastN?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#notifications SearchSavedQuery#notifications}
  */
  readonly notifications?: SearchSavedQueryScheduleNotifications;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#tz SearchSavedQuery#tz}
  */
  readonly tz?: string;
}

export function searchSavedQueryScheduleToTerraform(struct?: SearchSavedQuerySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    keep_last_n: cdktf.numberToTerraform(struct!.keepLastN),
    notifications: searchSavedQueryScheduleNotificationsToTerraform(struct!.notifications),
    tz: cdktf.stringToTerraform(struct!.tz),
  }
}


export function searchSavedQueryScheduleToHclTerraform(struct?: SearchSavedQuerySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_last_n: {
      value: cdktf.numberToHclTerraform(struct!.keepLastN),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notifications: {
      value: searchSavedQueryScheduleNotificationsToHclTerraform(struct!.notifications),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchSavedQueryScheduleNotifications",
    },
    tz: {
      value: cdktf.stringToHclTerraform(struct!.tz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchSavedQueryScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchSavedQuerySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keepLastN !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepLastN = this._keepLastN;
    }
    if (this._notifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications?.internalValue;
    }
    if (this._tz !== undefined) {
      hasAnyValues = true;
      internalValueResult.tz = this._tz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchSavedQuerySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._keepLastN = undefined;
      this._notifications.internalValue = undefined;
      this._tz = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._keepLastN = value.keepLastN;
      this._notifications.internalValue = value.notifications;
      this._tz = value.tz;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // keep_last_n - computed: true, optional: true, required: false
  private _keepLastN?: number; 
  public get keepLastN() {
    return this.getNumberAttribute('keep_last_n');
  }
  public set keepLastN(value: number) {
    this._keepLastN = value;
  }
  public resetKeepLastN() {
    this._keepLastN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLastNInput() {
    return this._keepLastN;
  }

  // notifications - computed: true, optional: true, required: false
  private _notifications = new SearchSavedQueryScheduleNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: SearchSavedQueryScheduleNotifications) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // tz - computed: true, optional: true, required: false
  private _tz?: string; 
  public get tz() {
    return this.getStringAttribute('tz');
  }
  public set tz(value: string) {
    this._tz = value;
  }
  public resetTz() {
    this._tz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query criblio_search_saved_query}
*/
export class SearchSavedQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_search_saved_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchSavedQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchSavedQuery to import
  * @param importFromId The id of the existing SearchSavedQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchSavedQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_saved_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_saved_query criblio_search_saved_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchSavedQueryConfig
  */
  public constructor(scope: Construct, id: string, config: SearchSavedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_search_saved_query',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.23',
        providerVersionConstraint: '1.20.23'
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
    this._earliest = config.earliest;
    this._id = config.id;
    this._isPrivate = config.isPrivate;
    this._latest = config.latest;
    this._name = config.name;
    this._query = config.query;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // earliest - computed: true, optional: true, required: false
  private _earliest?: string; 
  public get earliest() {
    return this.getStringAttribute('earliest');
  }
  public set earliest(value: string) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_private - computed: true, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: string; 
  public get latest() {
    return this.getStringAttribute('latest');
  }
  public set latest(value: string) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new SearchSavedQueryScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SearchSavedQuerySchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      earliest: cdktf.stringToTerraform(this._earliest),
      id: cdktf.stringToTerraform(this._id),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      latest: cdktf.stringToTerraform(this._latest),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      schedule: searchSavedQueryScheduleToTerraform(this._schedule.internalValue),
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
      earliest: {
        value: cdktf.stringToHclTerraform(this._earliest),
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
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      latest: {
        value: cdktf.stringToHclTerraform(this._latest),
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: searchSavedQueryScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchSavedQuerySchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
