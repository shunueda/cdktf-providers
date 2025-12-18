// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/announcements_service_announcement_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAnnouncementsServiceAnnouncementSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/announcements_service_announcement_subscription#announcement_subscription_id DataOciAnnouncementsServiceAnnouncementSubscription#announcement_subscription_id}
  */
  readonly announcementSubscriptionId: string;
}
export interface DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters {
}

export function dataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersToTerraform(struct?: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersToHclTerraform(struct?: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference {
    return new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups {
}

export function dataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsToTerraform(struct?: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsToHclTerraform(struct?: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference {
    return new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription}
*/
export class DataOciAnnouncementsServiceAnnouncementSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_announcements_service_announcement_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAnnouncementsServiceAnnouncementSubscription to import
  * @param importFromId The id of the existing DataOciAnnouncementsServiceAnnouncementSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/announcements_service_announcement_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAnnouncementsServiceAnnouncementSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_announcements_service_announcement_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAnnouncementsServiceAnnouncementSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAnnouncementsServiceAnnouncementSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_announcements_service_announcement_subscription',
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
    this._announcementSubscriptionId = config.announcementSubscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // announcement_subscription_id - computed: false, optional: false, required: true
  private _announcementSubscriptionId?: string; 
  public get announcementSubscriptionId() {
    return this.getStringAttribute('announcement_subscription_id');
  }
  public set announcementSubscriptionId(value: string) {
    this._announcementSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementSubscriptionIdInput() {
    return this._announcementSubscriptionId;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // filter_groups - computed: true, optional: false, required: false
  private _filterGroups = new DataOciAnnouncementsServiceAnnouncementSubscriptionFilterGroupsList(this, "filter_groups", false);
  public get filterGroups() {
    return this._filterGroups;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ons_topic_id - computed: true, optional: false, required: false
  public get onsTopicId() {
    return this.getStringAttribute('ons_topic_id');
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // preferred_time_zone - computed: true, optional: false, required: false
  public get preferredTimeZone() {
    return this.getStringAttribute('preferred_time_zone');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      announcement_subscription_id: cdktf.stringToTerraform(this._announcementSubscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      announcement_subscription_id: {
        value: cdktf.stringToHclTerraform(this._announcementSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
