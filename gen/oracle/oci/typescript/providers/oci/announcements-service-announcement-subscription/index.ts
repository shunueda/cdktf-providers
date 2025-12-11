// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnnouncementsServiceAnnouncementSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}
  */
  readonly onsTopicId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}
  */
  readonly preferredTimeZone?: string;
  /**
  * filter_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#filter_groups AnnouncementsServiceAnnouncementSubscription#filter_groups}
  */
  readonly filterGroups?: AnnouncementsServiceAnnouncementSubscriptionFilterGroups;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#timeouts AnnouncementsServiceAnnouncementSubscription#timeouts}
  */
  readonly timeouts?: AnnouncementsServiceAnnouncementSubscriptionTimeouts;
}
export interface AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#type AnnouncementsServiceAnnouncementSubscription#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#value AnnouncementsServiceAnnouncementSubscription#value}
  */
  readonly value: string;
}

export function announcementsServiceAnnouncementSubscriptionFilterGroupsFiltersToTerraform(struct?: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function announcementsServiceAnnouncementSubscriptionFilterGroupsFiltersToHclTerraform(struct?: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList extends cdktf.ComplexList {
  public internalValue? : AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters[] | cdktf.IResolvable

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
  public get(index: number): AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference {
    return new AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnnouncementsServiceAnnouncementSubscriptionFilterGroups {
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#filters AnnouncementsServiceAnnouncementSubscription#filters}
  */
  readonly filters: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters[] | cdktf.IResolvable;
}

export function announcementsServiceAnnouncementSubscriptionFilterGroupsToTerraform(struct?: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference | AnnouncementsServiceAnnouncementSubscriptionFilterGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(announcementsServiceAnnouncementSubscriptionFilterGroupsFiltersToTerraform, true)(struct!.filters),
  }
}


export function announcementsServiceAnnouncementSubscriptionFilterGroupsToHclTerraform(struct?: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference | AnnouncementsServiceAnnouncementSubscriptionFilterGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(announcementsServiceAnnouncementSubscriptionFilterGroupsFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AnnouncementsServiceAnnouncementSubscriptionFilterGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnnouncementsServiceAnnouncementSubscriptionFilterGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filters.internalValue = value.filters;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface AnnouncementsServiceAnnouncementSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}
  */
  readonly update?: string;
}

export function announcementsServiceAnnouncementSubscriptionTimeoutsToTerraform(struct?: AnnouncementsServiceAnnouncementSubscriptionTimeouts | cdktf.IResolvable): any {
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


export function announcementsServiceAnnouncementSubscriptionTimeoutsToHclTerraform(struct?: AnnouncementsServiceAnnouncementSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnnouncementsServiceAnnouncementSubscriptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AnnouncementsServiceAnnouncementSubscriptionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription}
*/
export class AnnouncementsServiceAnnouncementSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_announcements_service_announcement_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnnouncementsServiceAnnouncementSubscription to import
  * @param importFromId The id of the existing AnnouncementsServiceAnnouncementSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnnouncementsServiceAnnouncementSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_announcements_service_announcement_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnnouncementsServiceAnnouncementSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: AnnouncementsServiceAnnouncementSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_announcements_service_announcement_subscription',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._onsTopicId = config.onsTopicId;
    this._preferredLanguage = config.preferredLanguage;
    this._preferredTimeZone = config.preferredTimeZone;
    this._filterGroups.internalValue = config.filterGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ons_topic_id - computed: false, optional: false, required: true
  private _onsTopicId?: string; 
  public get onsTopicId() {
    return this.getStringAttribute('ons_topic_id');
  }
  public set onsTopicId(value: string) {
    this._onsTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onsTopicIdInput() {
    return this._onsTopicId;
  }

  // preferred_language - computed: true, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // preferred_time_zone - computed: true, optional: true, required: false
  private _preferredTimeZone?: string; 
  public get preferredTimeZone() {
    return this.getStringAttribute('preferred_time_zone');
  }
  public set preferredTimeZone(value: string) {
    this._preferredTimeZone = value;
  }
  public resetPreferredTimeZone() {
    this._preferredTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTimeZoneInput() {
    return this._preferredTimeZone;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // filter_groups - computed: false, optional: true, required: false
  private _filterGroups = new AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference(this, "filter_groups");
  public get filterGroups() {
    return this._filterGroups;
  }
  public putFilterGroups(value: AnnouncementsServiceAnnouncementSubscriptionFilterGroups) {
    this._filterGroups.internalValue = value;
  }
  public resetFilterGroups() {
    this._filterGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupsInput() {
    return this._filterGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AnnouncementsServiceAnnouncementSubscriptionTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ons_topic_id: cdktf.stringToTerraform(this._onsTopicId),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      preferred_time_zone: cdktf.stringToTerraform(this._preferredTimeZone),
      filter_groups: announcementsServiceAnnouncementSubscriptionFilterGroupsToTerraform(this._filterGroups.internalValue),
      timeouts: announcementsServiceAnnouncementSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ons_topic_id: {
        value: cdktf.stringToHclTerraform(this._onsTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_language: {
        value: cdktf.stringToHclTerraform(this._preferredLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_time_zone: {
        value: cdktf.stringToHclTerraform(this._preferredTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_groups: {
        value: announcementsServiceAnnouncementSubscriptionFilterGroupsToHclTerraform(this._filterGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnnouncementsServiceAnnouncementSubscriptionFilterGroupsList",
      },
      timeouts: {
        value: announcementsServiceAnnouncementSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AnnouncementsServiceAnnouncementSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
