// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundMessagingcampaignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this messaging campaign is always running Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#always_running OutboundMessagingcampaign#always_running}
  */
  readonly alwaysRunning?: boolean | cdktf.IResolvable;
  /**
  * The callable time set for this messaging campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#callable_time_set_id OutboundMessagingcampaign#callable_time_set_id}
  */
  readonly callableTimeSetId?: string;
  /**
  * The current status of the messaging campaign. A messaging campaign may be turned 'on' or 'off'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#campaign_status OutboundMessagingcampaign#campaign_status}
  */
  readonly campaignStatus?: string;
  /**
  * The contact list filter to check before sending a message for this messaging campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#contact_list_filter_ids OutboundMessagingcampaign#contact_list_filter_ids}
  */
  readonly contactListFilterIds?: string[];
  /**
  * The contact list that this messaging campaign will send messages for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#contact_list_id OutboundMessagingcampaign#contact_list_id}
  */
  readonly contactListId: string;
  /**
  * The division this entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#division_id OutboundMessagingcampaign#division_id}
  */
  readonly divisionId?: string;
  /**
  * The dnc lists to check before sending a message for this messaging campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#dnc_list_ids OutboundMessagingcampaign#dnc_list_ids}
  */
  readonly dncListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#id OutboundMessagingcampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How many messages this messaging campaign will send per minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#messages_per_minute OutboundMessagingcampaign#messages_per_minute}
  */
  readonly messagesPerMinute: number;
  /**
  * The campaign name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#name OutboundMessagingcampaign#name}
  */
  readonly name: string;
  /**
  * Rule Sets to be applied while this campaign is sending messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#rule_set_ids OutboundMessagingcampaign#rule_set_ids}
  */
  readonly ruleSetIds?: string[];
  /**
  * contact_sorts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#contact_sorts OutboundMessagingcampaign#contact_sorts}
  */
  readonly contactSorts?: OutboundMessagingcampaignContactSorts[] | cdktf.IResolvable;
  /**
  * dynamic_contact_queueing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#dynamic_contact_queueing_settings OutboundMessagingcampaign#dynamic_contact_queueing_settings}
  */
  readonly dynamicContactQueueingSettings?: OutboundMessagingcampaignDynamicContactQueueingSettings;
  /**
  * email_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#email_config OutboundMessagingcampaign#email_config}
  */
  readonly emailConfig?: OutboundMessagingcampaignEmailConfig;
  /**
  * errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#errors OutboundMessagingcampaign#errors}
  */
  readonly errors?: OutboundMessagingcampaignErrors[] | cdktf.IResolvable;
  /**
  * sms_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#sms_config OutboundMessagingcampaign#sms_config}
  */
  readonly smsConfig?: OutboundMessagingcampaignSmsConfig;
}
export interface OutboundMessagingcampaignContactSorts {
  /**
  * The direction in which to sort contacts. Defaults to `ASC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#direction OutboundMessagingcampaign#direction}
  */
  readonly direction?: string;
  /**
  * The field name by which to sort contacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#field_name OutboundMessagingcampaign#field_name}
  */
  readonly fieldName: string;
  /**
  * Whether or not the column contains numeric data. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#numeric OutboundMessagingcampaign#numeric}
  */
  readonly numeric?: boolean | cdktf.IResolvable;
}

export function outboundMessagingcampaignContactSortsToTerraform(struct?: OutboundMessagingcampaignContactSorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    numeric: cdktf.booleanToTerraform(struct!.numeric),
  }
}


export function outboundMessagingcampaignContactSortsToHclTerraform(struct?: OutboundMessagingcampaignContactSorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numeric: {
      value: cdktf.booleanToHclTerraform(struct!.numeric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundMessagingcampaignContactSortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundMessagingcampaignContactSorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._numeric !== undefined) {
      hasAnyValues = true;
      internalValueResult.numeric = this._numeric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundMessagingcampaignContactSorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._fieldName = undefined;
      this._numeric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._fieldName = value.fieldName;
      this._numeric = value.numeric;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // numeric - computed: false, optional: true, required: false
  private _numeric?: boolean | cdktf.IResolvable; 
  public get numeric() {
    return this.getBooleanAttribute('numeric');
  }
  public set numeric(value: boolean | cdktf.IResolvable) {
    this._numeric = value;
  }
  public resetNumeric() {
    this._numeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericInput() {
    return this._numeric;
  }
}

export class OutboundMessagingcampaignContactSortsList extends cdktf.ComplexList {
  public internalValue? : OutboundMessagingcampaignContactSorts[] | cdktf.IResolvable

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
  public get(index: number): OutboundMessagingcampaignContactSortsOutputReference {
    return new OutboundMessagingcampaignContactSortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundMessagingcampaignDynamicContactQueueingSettings {
  /**
  * Whether to filter contacts dynamically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#filter OutboundMessagingcampaign#filter}
  */
  readonly filter?: boolean | cdktf.IResolvable;
  /**
  * Whether to sort contacts dynamically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#sort OutboundMessagingcampaign#sort}
  */
  readonly sort?: boolean | cdktf.IResolvable;
}

export function outboundMessagingcampaignDynamicContactQueueingSettingsToTerraform(struct?: OutboundMessagingcampaignDynamicContactQueueingSettingsOutputReference | OutboundMessagingcampaignDynamicContactQueueingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.booleanToTerraform(struct!.filter),
    sort: cdktf.booleanToTerraform(struct!.sort),
  }
}


export function outboundMessagingcampaignDynamicContactQueueingSettingsToHclTerraform(struct?: OutboundMessagingcampaignDynamicContactQueueingSettingsOutputReference | OutboundMessagingcampaignDynamicContactQueueingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.booleanToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: cdktf.booleanToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundMessagingcampaignDynamicContactQueueingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundMessagingcampaignDynamicContactQueueingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundMessagingcampaignDynamicContactQueueingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._sort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._sort = value.sort;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: boolean | cdktf.IResolvable; 
  public get filter() {
    return this.getBooleanAttribute('filter');
  }
  public set filter(value: boolean | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: boolean | cdktf.IResolvable; 
  public get sort() {
    return this.getBooleanAttribute('sort');
  }
  public set sort(value: boolean | cdktf.IResolvable) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }
}
export interface OutboundMessagingcampaignEmailConfigFromAddress {
  /**
  * The OutboundDomain used for the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#domain_id OutboundMessagingcampaign#domain_id}
  */
  readonly domainId: string;
  /**
  * The friendly name of the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#friendly_name OutboundMessagingcampaign#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * The local part of the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#local_part OutboundMessagingcampaign#local_part}
  */
  readonly localPart?: string;
}

export function outboundMessagingcampaignEmailConfigFromAddressToTerraform(struct?: OutboundMessagingcampaignEmailConfigFromAddressOutputReference | OutboundMessagingcampaignEmailConfigFromAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    local_part: cdktf.stringToTerraform(struct!.localPart),
  }
}


export function outboundMessagingcampaignEmailConfigFromAddressToHclTerraform(struct?: OutboundMessagingcampaignEmailConfigFromAddressOutputReference | OutboundMessagingcampaignEmailConfigFromAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_part: {
      value: cdktf.stringToHclTerraform(struct!.localPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundMessagingcampaignEmailConfigFromAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundMessagingcampaignEmailConfigFromAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    if (this._localPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPart = this._localPart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundMessagingcampaignEmailConfigFromAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainId = undefined;
      this._friendlyName = undefined;
      this._localPart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainId = value.domainId;
      this._friendlyName = value.friendlyName;
      this._localPart = value.localPart;
    }
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // local_part - computed: false, optional: true, required: false
  private _localPart?: string; 
  public get localPart() {
    return this.getStringAttribute('local_part');
  }
  public set localPart(value: string) {
    this._localPart = value;
  }
  public resetLocalPart() {
    this._localPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPartInput() {
    return this._localPart;
  }
}
export interface OutboundMessagingcampaignEmailConfigReplyToAddress {
  /**
  * The InboundDomain used for the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#domain_id OutboundMessagingcampaign#domain_id}
  */
  readonly domainId: string;
  /**
  * The InboundRoute used for the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#route_id OutboundMessagingcampaign#route_id}
  */
  readonly routeId: string;
}

export function outboundMessagingcampaignEmailConfigReplyToAddressToTerraform(struct?: OutboundMessagingcampaignEmailConfigReplyToAddressOutputReference | OutboundMessagingcampaignEmailConfigReplyToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    route_id: cdktf.stringToTerraform(struct!.routeId),
  }
}


export function outboundMessagingcampaignEmailConfigReplyToAddressToHclTerraform(struct?: OutboundMessagingcampaignEmailConfigReplyToAddressOutputReference | OutboundMessagingcampaignEmailConfigReplyToAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_id: {
      value: cdktf.stringToHclTerraform(struct!.routeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundMessagingcampaignEmailConfigReplyToAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundMessagingcampaignEmailConfigReplyToAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._routeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeId = this._routeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundMessagingcampaignEmailConfigReplyToAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainId = undefined;
      this._routeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainId = value.domainId;
      this._routeId = value.routeId;
    }
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }
}
export interface OutboundMessagingcampaignEmailConfig {
  /**
  * The content template used to formulate the email to send to the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#content_template_id OutboundMessagingcampaign#content_template_id}
  */
  readonly contentTemplateId?: string;
  /**
  * The contact list columns specifying the email address(es) of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#email_columns OutboundMessagingcampaign#email_columns}
  */
  readonly emailColumns: string[];
  /**
  * from_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#from_address OutboundMessagingcampaign#from_address}
  */
  readonly fromAddress: OutboundMessagingcampaignEmailConfigFromAddress;
  /**
  * reply_to_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#reply_to_address OutboundMessagingcampaign#reply_to_address}
  */
  readonly replyToAddress?: OutboundMessagingcampaignEmailConfigReplyToAddress;
}

export function outboundMessagingcampaignEmailConfigToTerraform(struct?: OutboundMessagingcampaignEmailConfigOutputReference | OutboundMessagingcampaignEmailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_template_id: cdktf.stringToTerraform(struct!.contentTemplateId),
    email_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailColumns),
    from_address: outboundMessagingcampaignEmailConfigFromAddressToTerraform(struct!.fromAddress),
    reply_to_address: outboundMessagingcampaignEmailConfigReplyToAddressToTerraform(struct!.replyToAddress),
  }
}


export function outboundMessagingcampaignEmailConfigToHclTerraform(struct?: OutboundMessagingcampaignEmailConfigOutputReference | OutboundMessagingcampaignEmailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_template_id: {
      value: cdktf.stringToHclTerraform(struct!.contentTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_address: {
      value: outboundMessagingcampaignEmailConfigFromAddressToHclTerraform(struct!.fromAddress),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundMessagingcampaignEmailConfigFromAddressList",
    },
    reply_to_address: {
      value: outboundMessagingcampaignEmailConfigReplyToAddressToHclTerraform(struct!.replyToAddress),
      isBlock: true,
      type: "list",
      storageClassType: "OutboundMessagingcampaignEmailConfigReplyToAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundMessagingcampaignEmailConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundMessagingcampaignEmailConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTemplateId = this._contentTemplateId;
    }
    if (this._emailColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailColumns = this._emailColumns;
    }
    if (this._fromAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromAddress = this._fromAddress?.internalValue;
    }
    if (this._replyToAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyToAddress = this._replyToAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundMessagingcampaignEmailConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentTemplateId = undefined;
      this._emailColumns = undefined;
      this._fromAddress.internalValue = undefined;
      this._replyToAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentTemplateId = value.contentTemplateId;
      this._emailColumns = value.emailColumns;
      this._fromAddress.internalValue = value.fromAddress;
      this._replyToAddress.internalValue = value.replyToAddress;
    }
  }

  // content_template_id - computed: false, optional: true, required: false
  private _contentTemplateId?: string; 
  public get contentTemplateId() {
    return this.getStringAttribute('content_template_id');
  }
  public set contentTemplateId(value: string) {
    this._contentTemplateId = value;
  }
  public resetContentTemplateId() {
    this._contentTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTemplateIdInput() {
    return this._contentTemplateId;
  }

  // email_columns - computed: false, optional: false, required: true
  private _emailColumns?: string[]; 
  public get emailColumns() {
    return this.getListAttribute('email_columns');
  }
  public set emailColumns(value: string[]) {
    this._emailColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailColumnsInput() {
    return this._emailColumns;
  }

  // from_address - computed: false, optional: false, required: true
  private _fromAddress = new OutboundMessagingcampaignEmailConfigFromAddressOutputReference(this, "from_address");
  public get fromAddress() {
    return this._fromAddress;
  }
  public putFromAddress(value: OutboundMessagingcampaignEmailConfigFromAddress) {
    this._fromAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAddressInput() {
    return this._fromAddress.internalValue;
  }

  // reply_to_address - computed: false, optional: true, required: false
  private _replyToAddress = new OutboundMessagingcampaignEmailConfigReplyToAddressOutputReference(this, "reply_to_address");
  public get replyToAddress() {
    return this._replyToAddress;
  }
  public putReplyToAddress(value: OutboundMessagingcampaignEmailConfigReplyToAddress) {
    this._replyToAddress.internalValue = value;
  }
  public resetReplyToAddress() {
    this._replyToAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToAddressInput() {
    return this._replyToAddress.internalValue;
  }
}
export interface OutboundMessagingcampaignErrors {
  /**
  * additional information regarding the error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#details OutboundMessagingcampaign#details}
  */
  readonly details?: string;
  /**
  * name of the error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#error OutboundMessagingcampaign#error}
  */
  readonly error: string;
}

export function outboundMessagingcampaignErrorsToTerraform(struct?: OutboundMessagingcampaignErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.stringToTerraform(struct!.details),
    error: cdktf.stringToTerraform(struct!.error),
  }
}


export function outboundMessagingcampaignErrorsToHclTerraform(struct?: OutboundMessagingcampaignErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.stringToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: cdktf.stringToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundMessagingcampaignErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundMessagingcampaignErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundMessagingcampaignErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._details = undefined;
      this._error = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._details = value.details;
      this._error = value.error;
    }
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // error - computed: false, optional: false, required: true
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }
}

export class OutboundMessagingcampaignErrorsList extends cdktf.ComplexList {
  public internalValue? : OutboundMessagingcampaignErrors[] | cdktf.IResolvable

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
  public get(index: number): OutboundMessagingcampaignErrorsOutputReference {
    return new OutboundMessagingcampaignErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OutboundMessagingcampaignSmsConfig {
  /**
  * The content template used to formulate the message to send to the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#content_template_id OutboundMessagingcampaign#content_template_id}
  */
  readonly contentTemplateId?: string;
  /**
  * The Contact List column specifying the message to send to the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#message_column OutboundMessagingcampaign#message_column}
  */
  readonly messageColumn?: string;
  /**
  * The Contact List column specifying the phone number to send a message to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#phone_column OutboundMessagingcampaign#phone_column}
  */
  readonly phoneColumn: string;
  /**
  * A phone number provisioned for SMS communications in E.164 format. E.g. +13175555555 or +34234234234
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#sender_sms_phone_number OutboundMessagingcampaign#sender_sms_phone_number}
  */
  readonly senderSmsPhoneNumber: string;
}

export function outboundMessagingcampaignSmsConfigToTerraform(struct?: OutboundMessagingcampaignSmsConfigOutputReference | OutboundMessagingcampaignSmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_template_id: cdktf.stringToTerraform(struct!.contentTemplateId),
    message_column: cdktf.stringToTerraform(struct!.messageColumn),
    phone_column: cdktf.stringToTerraform(struct!.phoneColumn),
    sender_sms_phone_number: cdktf.stringToTerraform(struct!.senderSmsPhoneNumber),
  }
}


export function outboundMessagingcampaignSmsConfigToHclTerraform(struct?: OutboundMessagingcampaignSmsConfigOutputReference | OutboundMessagingcampaignSmsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_template_id: {
      value: cdktf.stringToHclTerraform(struct!.contentTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_column: {
      value: cdktf.stringToHclTerraform(struct!.messageColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_column: {
      value: cdktf.stringToHclTerraform(struct!.phoneColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender_sms_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.senderSmsPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundMessagingcampaignSmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundMessagingcampaignSmsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTemplateId = this._contentTemplateId;
    }
    if (this._messageColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageColumn = this._messageColumn;
    }
    if (this._phoneColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneColumn = this._phoneColumn;
    }
    if (this._senderSmsPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderSmsPhoneNumber = this._senderSmsPhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundMessagingcampaignSmsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentTemplateId = undefined;
      this._messageColumn = undefined;
      this._phoneColumn = undefined;
      this._senderSmsPhoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentTemplateId = value.contentTemplateId;
      this._messageColumn = value.messageColumn;
      this._phoneColumn = value.phoneColumn;
      this._senderSmsPhoneNumber = value.senderSmsPhoneNumber;
    }
  }

  // content_template_id - computed: false, optional: true, required: false
  private _contentTemplateId?: string; 
  public get contentTemplateId() {
    return this.getStringAttribute('content_template_id');
  }
  public set contentTemplateId(value: string) {
    this._contentTemplateId = value;
  }
  public resetContentTemplateId() {
    this._contentTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTemplateIdInput() {
    return this._contentTemplateId;
  }

  // message_column - computed: false, optional: true, required: false
  private _messageColumn?: string; 
  public get messageColumn() {
    return this.getStringAttribute('message_column');
  }
  public set messageColumn(value: string) {
    this._messageColumn = value;
  }
  public resetMessageColumn() {
    this._messageColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageColumnInput() {
    return this._messageColumn;
  }

  // phone_column - computed: false, optional: false, required: true
  private _phoneColumn?: string; 
  public get phoneColumn() {
    return this.getStringAttribute('phone_column');
  }
  public set phoneColumn(value: string) {
    this._phoneColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneColumnInput() {
    return this._phoneColumn;
  }

  // sender_sms_phone_number - computed: false, optional: false, required: true
  private _senderSmsPhoneNumber?: string; 
  public get senderSmsPhoneNumber() {
    return this.getStringAttribute('sender_sms_phone_number');
  }
  public set senderSmsPhoneNumber(value: string) {
    this._senderSmsPhoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderSmsPhoneNumberInput() {
    return this._senderSmsPhoneNumber;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign genesyscloud_outbound_messagingcampaign}
*/
export class OutboundMessagingcampaign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_messagingcampaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundMessagingcampaign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundMessagingcampaign to import
  * @param importFromId The id of the existing OutboundMessagingcampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundMessagingcampaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_messagingcampaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/outbound_messagingcampaign genesyscloud_outbound_messagingcampaign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundMessagingcampaignConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundMessagingcampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_messagingcampaign',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysRunning = config.alwaysRunning;
    this._callableTimeSetId = config.callableTimeSetId;
    this._campaignStatus = config.campaignStatus;
    this._contactListFilterIds = config.contactListFilterIds;
    this._contactListId = config.contactListId;
    this._divisionId = config.divisionId;
    this._dncListIds = config.dncListIds;
    this._id = config.id;
    this._messagesPerMinute = config.messagesPerMinute;
    this._name = config.name;
    this._ruleSetIds = config.ruleSetIds;
    this._contactSorts.internalValue = config.contactSorts;
    this._dynamicContactQueueingSettings.internalValue = config.dynamicContactQueueingSettings;
    this._emailConfig.internalValue = config.emailConfig;
    this._errors.internalValue = config.errors;
    this._smsConfig.internalValue = config.smsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_running - computed: false, optional: true, required: false
  private _alwaysRunning?: boolean | cdktf.IResolvable; 
  public get alwaysRunning() {
    return this.getBooleanAttribute('always_running');
  }
  public set alwaysRunning(value: boolean | cdktf.IResolvable) {
    this._alwaysRunning = value;
  }
  public resetAlwaysRunning() {
    this._alwaysRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysRunningInput() {
    return this._alwaysRunning;
  }

  // callable_time_set_id - computed: false, optional: true, required: false
  private _callableTimeSetId?: string; 
  public get callableTimeSetId() {
    return this.getStringAttribute('callable_time_set_id');
  }
  public set callableTimeSetId(value: string) {
    this._callableTimeSetId = value;
  }
  public resetCallableTimeSetId() {
    this._callableTimeSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callableTimeSetIdInput() {
    return this._callableTimeSetId;
  }

  // campaign_status - computed: true, optional: true, required: false
  private _campaignStatus?: string; 
  public get campaignStatus() {
    return this.getStringAttribute('campaign_status');
  }
  public set campaignStatus(value: string) {
    this._campaignStatus = value;
  }
  public resetCampaignStatus() {
    this._campaignStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get campaignStatusInput() {
    return this._campaignStatus;
  }

  // contact_list_filter_ids - computed: false, optional: true, required: false
  private _contactListFilterIds?: string[]; 
  public get contactListFilterIds() {
    return this.getListAttribute('contact_list_filter_ids');
  }
  public set contactListFilterIds(value: string[]) {
    this._contactListFilterIds = value;
  }
  public resetContactListFilterIds() {
    this._contactListFilterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListFilterIdsInput() {
    return this._contactListFilterIds;
  }

  // contact_list_id - computed: false, optional: false, required: true
  private _contactListId?: string; 
  public get contactListId() {
    return this.getStringAttribute('contact_list_id');
  }
  public set contactListId(value: string) {
    this._contactListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListIdInput() {
    return this._contactListId;
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // dnc_list_ids - computed: false, optional: true, required: false
  private _dncListIds?: string[]; 
  public get dncListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dnc_list_ids'));
  }
  public set dncListIds(value: string[]) {
    this._dncListIds = value;
  }
  public resetDncListIds() {
    this._dncListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dncListIdsInput() {
    return this._dncListIds;
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

  // messages_per_minute - computed: false, optional: false, required: true
  private _messagesPerMinute?: number; 
  public get messagesPerMinute() {
    return this.getNumberAttribute('messages_per_minute');
  }
  public set messagesPerMinute(value: number) {
    this._messagesPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesPerMinuteInput() {
    return this._messagesPerMinute;
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

  // rule_set_ids - computed: false, optional: true, required: false
  private _ruleSetIds?: string[]; 
  public get ruleSetIds() {
    return this.getListAttribute('rule_set_ids');
  }
  public set ruleSetIds(value: string[]) {
    this._ruleSetIds = value;
  }
  public resetRuleSetIds() {
    this._ruleSetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetIdsInput() {
    return this._ruleSetIds;
  }

  // contact_sorts - computed: false, optional: true, required: false
  private _contactSorts = new OutboundMessagingcampaignContactSortsList(this, "contact_sorts", false);
  public get contactSorts() {
    return this._contactSorts;
  }
  public putContactSorts(value: OutboundMessagingcampaignContactSorts[] | cdktf.IResolvable) {
    this._contactSorts.internalValue = value;
  }
  public resetContactSorts() {
    this._contactSorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactSortsInput() {
    return this._contactSorts.internalValue;
  }

  // dynamic_contact_queueing_settings - computed: false, optional: true, required: false
  private _dynamicContactQueueingSettings = new OutboundMessagingcampaignDynamicContactQueueingSettingsOutputReference(this, "dynamic_contact_queueing_settings");
  public get dynamicContactQueueingSettings() {
    return this._dynamicContactQueueingSettings;
  }
  public putDynamicContactQueueingSettings(value: OutboundMessagingcampaignDynamicContactQueueingSettings) {
    this._dynamicContactQueueingSettings.internalValue = value;
  }
  public resetDynamicContactQueueingSettings() {
    this._dynamicContactQueueingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicContactQueueingSettingsInput() {
    return this._dynamicContactQueueingSettings.internalValue;
  }

  // email_config - computed: false, optional: true, required: false
  private _emailConfig = new OutboundMessagingcampaignEmailConfigOutputReference(this, "email_config");
  public get emailConfig() {
    return this._emailConfig;
  }
  public putEmailConfig(value: OutboundMessagingcampaignEmailConfig) {
    this._emailConfig.internalValue = value;
  }
  public resetEmailConfig() {
    this._emailConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigInput() {
    return this._emailConfig.internalValue;
  }

  // errors - computed: false, optional: true, required: false
  private _errors = new OutboundMessagingcampaignErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }
  public putErrors(value: OutboundMessagingcampaignErrors[] | cdktf.IResolvable) {
    this._errors.internalValue = value;
  }
  public resetErrors() {
    this._errors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors.internalValue;
  }

  // sms_config - computed: false, optional: true, required: false
  private _smsConfig = new OutboundMessagingcampaignSmsConfigOutputReference(this, "sms_config");
  public get smsConfig() {
    return this._smsConfig;
  }
  public putSmsConfig(value: OutboundMessagingcampaignSmsConfig) {
    this._smsConfig.internalValue = value;
  }
  public resetSmsConfig() {
    this._smsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsConfigInput() {
    return this._smsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_running: cdktf.booleanToTerraform(this._alwaysRunning),
      callable_time_set_id: cdktf.stringToTerraform(this._callableTimeSetId),
      campaign_status: cdktf.stringToTerraform(this._campaignStatus),
      contact_list_filter_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactListFilterIds),
      contact_list_id: cdktf.stringToTerraform(this._contactListId),
      division_id: cdktf.stringToTerraform(this._divisionId),
      dnc_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dncListIds),
      id: cdktf.stringToTerraform(this._id),
      messages_per_minute: cdktf.numberToTerraform(this._messagesPerMinute),
      name: cdktf.stringToTerraform(this._name),
      rule_set_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleSetIds),
      contact_sorts: cdktf.listMapper(outboundMessagingcampaignContactSortsToTerraform, true)(this._contactSorts.internalValue),
      dynamic_contact_queueing_settings: outboundMessagingcampaignDynamicContactQueueingSettingsToTerraform(this._dynamicContactQueueingSettings.internalValue),
      email_config: outboundMessagingcampaignEmailConfigToTerraform(this._emailConfig.internalValue),
      errors: cdktf.listMapper(outboundMessagingcampaignErrorsToTerraform, true)(this._errors.internalValue),
      sms_config: outboundMessagingcampaignSmsConfigToTerraform(this._smsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_running: {
        value: cdktf.booleanToHclTerraform(this._alwaysRunning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      callable_time_set_id: {
        value: cdktf.stringToHclTerraform(this._callableTimeSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      campaign_status: {
        value: cdktf.stringToHclTerraform(this._campaignStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_list_filter_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactListFilterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contact_list_id: {
        value: cdktf.stringToHclTerraform(this._contactListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnc_list_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dncListIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages_per_minute: {
        value: cdktf.numberToHclTerraform(this._messagesPerMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleSetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contact_sorts: {
        value: cdktf.listMapperHcl(outboundMessagingcampaignContactSortsToHclTerraform, true)(this._contactSorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundMessagingcampaignContactSortsList",
      },
      dynamic_contact_queueing_settings: {
        value: outboundMessagingcampaignDynamicContactQueueingSettingsToHclTerraform(this._dynamicContactQueueingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundMessagingcampaignDynamicContactQueueingSettingsList",
      },
      email_config: {
        value: outboundMessagingcampaignEmailConfigToHclTerraform(this._emailConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundMessagingcampaignEmailConfigList",
      },
      errors: {
        value: cdktf.listMapperHcl(outboundMessagingcampaignErrorsToHclTerraform, true)(this._errors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundMessagingcampaignErrorsList",
      },
      sms_config: {
        value: outboundMessagingcampaignSmsConfigToHclTerraform(this._smsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundMessagingcampaignSmsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
