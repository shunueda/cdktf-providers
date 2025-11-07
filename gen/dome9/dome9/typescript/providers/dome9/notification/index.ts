// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#alerts_console Notification#alerts_console}
  */
  readonly alertsConsole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#description Notification#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#id Notification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#name Notification#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#origin Notification#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#send_on_each_occurrence Notification#send_on_each_occurrence}
  */
  readonly sendOnEachOccurrence?: boolean | cdktf.IResolvable;
  /**
  * integration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#integration_settings Notification#integration_settings}
  */
  readonly integrationSettings?: NotificationIntegrationSettings;
}
export interface NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#key Notification#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#value Notification#value}
  */
  readonly value: string;
}

export function notificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsToTerraform(struct?: NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsToHclTerraform(struct?: NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsOutputReference {
    return new NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsReportsIntegrationSettingsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_categories Notification#entity_categories}
  */
  readonly entityCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_ids Notification#entity_ids}
  */
  readonly entityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_names Notification#entity_names}
  */
  readonly entityNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#rule_entity_types Notification#rule_entity_types}
  */
  readonly ruleEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#severities Notification#severities}
  */
  readonly severities?: string[];
  /**
  * entity_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_tags Notification#entity_tags}
  */
  readonly entityTags?: NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable;
}

export function notificationIntegrationSettingsReportsIntegrationSettingsFilterToTerraform(struct?: NotificationIntegrationSettingsReportsIntegrationSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityCategories),
    entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityIds),
    entity_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityNames),
    rule_entity_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ruleEntityTypes),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    entity_tags: cdktf.listMapper(notificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsToTerraform, true)(struct!.entityTags),
  }
}


export function notificationIntegrationSettingsReportsIntegrationSettingsFilterToHclTerraform(struct?: NotificationIntegrationSettingsReportsIntegrationSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_entity_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ruleEntityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_tags: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsToHclTerraform, true)(struct!.entityTags),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationIntegrationSettingsReportsIntegrationSettingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsReportsIntegrationSettingsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityCategories = this._entityCategories;
    }
    if (this._entityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIds = this._entityIds;
    }
    if (this._entityNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityNames = this._entityNames;
    }
    if (this._ruleEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEntityTypes = this._ruleEntityTypes;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._entityTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTags = this._entityTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsReportsIntegrationSettingsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityCategories = undefined;
      this._entityIds = undefined;
      this._entityNames = undefined;
      this._ruleEntityTypes = undefined;
      this._severities = undefined;
      this._entityTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityCategories = value.entityCategories;
      this._entityIds = value.entityIds;
      this._entityNames = value.entityNames;
      this._ruleEntityTypes = value.ruleEntityTypes;
      this._severities = value.severities;
      this._entityTags.internalValue = value.entityTags;
    }
  }

  // entity_categories - computed: false, optional: true, required: false
  private _entityCategories?: string[]; 
  public get entityCategories() {
    return this.getListAttribute('entity_categories');
  }
  public set entityCategories(value: string[]) {
    this._entityCategories = value;
  }
  public resetEntityCategories() {
    this._entityCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityCategoriesInput() {
    return this._entityCategories;
  }

  // entity_ids - computed: false, optional: true, required: false
  private _entityIds?: string[]; 
  public get entityIds() {
    return this.getListAttribute('entity_ids');
  }
  public set entityIds(value: string[]) {
    this._entityIds = value;
  }
  public resetEntityIds() {
    this._entityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdsInput() {
    return this._entityIds;
  }

  // entity_names - computed: false, optional: true, required: false
  private _entityNames?: string[]; 
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }
  public set entityNames(value: string[]) {
    this._entityNames = value;
  }
  public resetEntityNames() {
    this._entityNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNamesInput() {
    return this._entityNames;
  }

  // rule_entity_types - computed: false, optional: true, required: false
  private _ruleEntityTypes?: string[]; 
  public get ruleEntityTypes() {
    return this.getListAttribute('rule_entity_types');
  }
  public set ruleEntityTypes(value: string[]) {
    this._ruleEntityTypes = value;
  }
  public resetRuleEntityTypes() {
    this._ruleEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEntityTypesInput() {
    return this._ruleEntityTypes;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // entity_tags - computed: false, optional: true, required: false
  private _entityTags = new NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsList(this, "entity_tags", false);
  public get entityTags() {
    return this._entityTags;
  }
  public putEntityTags(value: NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable) {
    this._entityTags.internalValue = value;
  }
  public resetEntityTags() {
    this._entityTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsInput() {
    return this._entityTags.internalValue;
  }
}

export class NotificationIntegrationSettingsReportsIntegrationSettingsFilterList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsReportsIntegrationSettingsFilter[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsReportsIntegrationSettingsFilterOutputReference {
    return new NotificationIntegrationSettingsReportsIntegrationSettingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsReportsIntegrationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#integration_id Notification#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#output_type Notification#output_type}
  */
  readonly outputType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#filter Notification#filter}
  */
  readonly filter?: NotificationIntegrationSettingsReportsIntegrationSettingsFilter[] | cdktf.IResolvable;
}

export function notificationIntegrationSettingsReportsIntegrationSettingsToTerraform(struct?: NotificationIntegrationSettingsReportsIntegrationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    output_type: cdktf.stringToTerraform(struct!.outputType),
    filter: cdktf.listMapper(notificationIntegrationSettingsReportsIntegrationSettingsFilterToTerraform, true)(struct!.filter),
  }
}


export function notificationIntegrationSettingsReportsIntegrationSettingsToHclTerraform(struct?: NotificationIntegrationSettingsReportsIntegrationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsReportsIntegrationSettingsFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsReportsIntegrationSettingsFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationIntegrationSettingsReportsIntegrationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsReportsIntegrationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsReportsIntegrationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationId = undefined;
      this._outputType = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationId = value.integrationId;
      this._outputType = value.outputType;
      this._filter.internalValue = value.filter;
    }
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new NotificationIntegrationSettingsReportsIntegrationSettingsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: NotificationIntegrationSettingsReportsIntegrationSettingsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class NotificationIntegrationSettingsReportsIntegrationSettingsList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsReportsIntegrationSettings[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsReportsIntegrationSettingsOutputReference {
    return new NotificationIntegrationSettingsReportsIntegrationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#key Notification#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#value Notification#value}
  */
  readonly value: string;
}

export function notificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsToTerraform(struct?: NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsToHclTerraform(struct?: NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsOutputReference {
    return new NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsScheduledIntegrationSettingsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_categories Notification#entity_categories}
  */
  readonly entityCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_ids Notification#entity_ids}
  */
  readonly entityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_names Notification#entity_names}
  */
  readonly entityNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#rule_entity_types Notification#rule_entity_types}
  */
  readonly ruleEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#severities Notification#severities}
  */
  readonly severities?: string[];
  /**
  * entity_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_tags Notification#entity_tags}
  */
  readonly entityTags?: NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable;
}

export function notificationIntegrationSettingsScheduledIntegrationSettingsFilterToTerraform(struct?: NotificationIntegrationSettingsScheduledIntegrationSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityCategories),
    entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityIds),
    entity_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityNames),
    rule_entity_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ruleEntityTypes),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    entity_tags: cdktf.listMapper(notificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsToTerraform, true)(struct!.entityTags),
  }
}


export function notificationIntegrationSettingsScheduledIntegrationSettingsFilterToHclTerraform(struct?: NotificationIntegrationSettingsScheduledIntegrationSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_entity_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ruleEntityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_tags: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsToHclTerraform, true)(struct!.entityTags),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationIntegrationSettingsScheduledIntegrationSettingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsScheduledIntegrationSettingsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityCategories = this._entityCategories;
    }
    if (this._entityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIds = this._entityIds;
    }
    if (this._entityNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityNames = this._entityNames;
    }
    if (this._ruleEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEntityTypes = this._ruleEntityTypes;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._entityTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTags = this._entityTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsScheduledIntegrationSettingsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityCategories = undefined;
      this._entityIds = undefined;
      this._entityNames = undefined;
      this._ruleEntityTypes = undefined;
      this._severities = undefined;
      this._entityTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityCategories = value.entityCategories;
      this._entityIds = value.entityIds;
      this._entityNames = value.entityNames;
      this._ruleEntityTypes = value.ruleEntityTypes;
      this._severities = value.severities;
      this._entityTags.internalValue = value.entityTags;
    }
  }

  // entity_categories - computed: false, optional: true, required: false
  private _entityCategories?: string[]; 
  public get entityCategories() {
    return this.getListAttribute('entity_categories');
  }
  public set entityCategories(value: string[]) {
    this._entityCategories = value;
  }
  public resetEntityCategories() {
    this._entityCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityCategoriesInput() {
    return this._entityCategories;
  }

  // entity_ids - computed: false, optional: true, required: false
  private _entityIds?: string[]; 
  public get entityIds() {
    return this.getListAttribute('entity_ids');
  }
  public set entityIds(value: string[]) {
    this._entityIds = value;
  }
  public resetEntityIds() {
    this._entityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdsInput() {
    return this._entityIds;
  }

  // entity_names - computed: false, optional: true, required: false
  private _entityNames?: string[]; 
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }
  public set entityNames(value: string[]) {
    this._entityNames = value;
  }
  public resetEntityNames() {
    this._entityNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNamesInput() {
    return this._entityNames;
  }

  // rule_entity_types - computed: false, optional: true, required: false
  private _ruleEntityTypes?: string[]; 
  public get ruleEntityTypes() {
    return this.getListAttribute('rule_entity_types');
  }
  public set ruleEntityTypes(value: string[]) {
    this._ruleEntityTypes = value;
  }
  public resetRuleEntityTypes() {
    this._ruleEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEntityTypesInput() {
    return this._ruleEntityTypes;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // entity_tags - computed: false, optional: true, required: false
  private _entityTags = new NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsList(this, "entity_tags", false);
  public get entityTags() {
    return this._entityTags;
  }
  public putEntityTags(value: NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable) {
    this._entityTags.internalValue = value;
  }
  public resetEntityTags() {
    this._entityTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsInput() {
    return this._entityTags.internalValue;
  }
}

export class NotificationIntegrationSettingsScheduledIntegrationSettingsFilterList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsScheduledIntegrationSettingsFilter[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsScheduledIntegrationSettingsFilterOutputReference {
    return new NotificationIntegrationSettingsScheduledIntegrationSettingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsScheduledIntegrationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#cron_expression Notification#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#integration_id Notification#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#output_type Notification#output_type}
  */
  readonly outputType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#filter Notification#filter}
  */
  readonly filter?: NotificationIntegrationSettingsScheduledIntegrationSettingsFilter[] | cdktf.IResolvable;
}

export function notificationIntegrationSettingsScheduledIntegrationSettingsToTerraform(struct?: NotificationIntegrationSettingsScheduledIntegrationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    output_type: cdktf.stringToTerraform(struct!.outputType),
    filter: cdktf.listMapper(notificationIntegrationSettingsScheduledIntegrationSettingsFilterToTerraform, true)(struct!.filter),
  }
}


export function notificationIntegrationSettingsScheduledIntegrationSettingsToHclTerraform(struct?: NotificationIntegrationSettingsScheduledIntegrationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsScheduledIntegrationSettingsFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsScheduledIntegrationSettingsFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationIntegrationSettingsScheduledIntegrationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsScheduledIntegrationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsScheduledIntegrationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._integrationId = undefined;
      this._outputType = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._integrationId = value.integrationId;
      this._outputType = value.outputType;
      this._filter.internalValue = value.filter;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new NotificationIntegrationSettingsScheduledIntegrationSettingsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: NotificationIntegrationSettingsScheduledIntegrationSettingsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class NotificationIntegrationSettingsScheduledIntegrationSettingsList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsScheduledIntegrationSettings[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsScheduledIntegrationSettingsOutputReference {
    return new NotificationIntegrationSettingsScheduledIntegrationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#key Notification#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#value Notification#value}
  */
  readonly value: string;
}

export function notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsToTerraform(struct?: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsToHclTerraform(struct?: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsOutputReference {
    return new NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_categories Notification#entity_categories}
  */
  readonly entityCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_ids Notification#entity_ids}
  */
  readonly entityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_names Notification#entity_names}
  */
  readonly entityNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#rule_entity_types Notification#rule_entity_types}
  */
  readonly ruleEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#severities Notification#severities}
  */
  readonly severities?: string[];
  /**
  * entity_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#entity_tags Notification#entity_tags}
  */
  readonly entityTags?: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable;
}

export function notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterToTerraform(struct?: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityCategories),
    entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityIds),
    entity_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityNames),
    rule_entity_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ruleEntityTypes),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    entity_tags: cdktf.listMapper(notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsToTerraform, true)(struct!.entityTags),
  }
}


export function notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterToHclTerraform(struct?: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_entity_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ruleEntityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_tags: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsToHclTerraform, true)(struct!.entityTags),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityCategories = this._entityCategories;
    }
    if (this._entityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIds = this._entityIds;
    }
    if (this._entityNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityNames = this._entityNames;
    }
    if (this._ruleEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEntityTypes = this._ruleEntityTypes;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._entityTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTags = this._entityTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityCategories = undefined;
      this._entityIds = undefined;
      this._entityNames = undefined;
      this._ruleEntityTypes = undefined;
      this._severities = undefined;
      this._entityTags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityCategories = value.entityCategories;
      this._entityIds = value.entityIds;
      this._entityNames = value.entityNames;
      this._ruleEntityTypes = value.ruleEntityTypes;
      this._severities = value.severities;
      this._entityTags.internalValue = value.entityTags;
    }
  }

  // entity_categories - computed: false, optional: true, required: false
  private _entityCategories?: string[]; 
  public get entityCategories() {
    return this.getListAttribute('entity_categories');
  }
  public set entityCategories(value: string[]) {
    this._entityCategories = value;
  }
  public resetEntityCategories() {
    this._entityCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityCategoriesInput() {
    return this._entityCategories;
  }

  // entity_ids - computed: false, optional: true, required: false
  private _entityIds?: string[]; 
  public get entityIds() {
    return this.getListAttribute('entity_ids');
  }
  public set entityIds(value: string[]) {
    this._entityIds = value;
  }
  public resetEntityIds() {
    this._entityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdsInput() {
    return this._entityIds;
  }

  // entity_names - computed: false, optional: true, required: false
  private _entityNames?: string[]; 
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }
  public set entityNames(value: string[]) {
    this._entityNames = value;
  }
  public resetEntityNames() {
    this._entityNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNamesInput() {
    return this._entityNames;
  }

  // rule_entity_types - computed: false, optional: true, required: false
  private _ruleEntityTypes?: string[]; 
  public get ruleEntityTypes() {
    return this.getListAttribute('rule_entity_types');
  }
  public set ruleEntityTypes(value: string[]) {
    this._ruleEntityTypes = value;
  }
  public resetRuleEntityTypes() {
    this._ruleEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEntityTypesInput() {
    return this._ruleEntityTypes;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // entity_tags - computed: false, optional: true, required: false
  private _entityTags = new NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsList(this, "entity_tags", false);
  public get entityTags() {
    return this._entityTags;
  }
  public putEntityTags(value: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags[] | cdktf.IResolvable) {
    this._entityTags.internalValue = value;
  }
  public resetEntityTags() {
    this._entityTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsInput() {
    return this._entityTags.internalValue;
  }
}

export class NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterOutputReference {
    return new NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettingsSingleNotificationIntegrationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#integration_id Notification#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#output_type Notification#output_type}
  */
  readonly outputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#payload Notification#payload}
  */
  readonly payload?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#filter Notification#filter}
  */
  readonly filter?: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter[] | cdktf.IResolvable;
}

export function notificationIntegrationSettingsSingleNotificationIntegrationSettingsToTerraform(struct?: NotificationIntegrationSettingsSingleNotificationIntegrationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_id: cdktf.stringToTerraform(struct!.integrationId),
    output_type: cdktf.stringToTerraform(struct!.outputType),
    payload: cdktf.stringToTerraform(struct!.payload),
    filter: cdktf.listMapper(notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterToTerraform, true)(struct!.filter),
  }
}


export function notificationIntegrationSettingsSingleNotificationIntegrationSettingsToHclTerraform(struct?: NotificationIntegrationSettingsSingleNotificationIntegrationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_id: {
      value: cdktf.stringToHclTerraform(struct!.integrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_type: {
      value: cdktf.stringToHclTerraform(struct!.outputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationIntegrationSettingsSingleNotificationIntegrationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationIntegrationSettingsSingleNotificationIntegrationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationId = this._integrationId;
    }
    if (this._outputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputType = this._outputType;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettingsSingleNotificationIntegrationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationId = undefined;
      this._outputType = undefined;
      this._payload = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationId = value.integrationId;
      this._outputType = value.outputType;
      this._payload = value.payload;
      this._filter.internalValue = value.filter;
    }
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class NotificationIntegrationSettingsSingleNotificationIntegrationSettingsList extends cdktf.ComplexList {
  public internalValue? : NotificationIntegrationSettingsSingleNotificationIntegrationSettings[] | cdktf.IResolvable

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
  public get(index: number): NotificationIntegrationSettingsSingleNotificationIntegrationSettingsOutputReference {
    return new NotificationIntegrationSettingsSingleNotificationIntegrationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationIntegrationSettings {
  /**
  * reports_integration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#reports_integration_settings Notification#reports_integration_settings}
  */
  readonly reportsIntegrationSettings?: NotificationIntegrationSettingsReportsIntegrationSettings[] | cdktf.IResolvable;
  /**
  * scheduled_integration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#scheduled_integration_settings Notification#scheduled_integration_settings}
  */
  readonly scheduledIntegrationSettings?: NotificationIntegrationSettingsScheduledIntegrationSettings[] | cdktf.IResolvable;
  /**
  * single_notification_integration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#single_notification_integration_settings Notification#single_notification_integration_settings}
  */
  readonly singleNotificationIntegrationSettings?: NotificationIntegrationSettingsSingleNotificationIntegrationSettings[] | cdktf.IResolvable;
}

export function notificationIntegrationSettingsToTerraform(struct?: NotificationIntegrationSettingsOutputReference | NotificationIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reports_integration_settings: cdktf.listMapper(notificationIntegrationSettingsReportsIntegrationSettingsToTerraform, true)(struct!.reportsIntegrationSettings),
    scheduled_integration_settings: cdktf.listMapper(notificationIntegrationSettingsScheduledIntegrationSettingsToTerraform, true)(struct!.scheduledIntegrationSettings),
    single_notification_integration_settings: cdktf.listMapper(notificationIntegrationSettingsSingleNotificationIntegrationSettingsToTerraform, true)(struct!.singleNotificationIntegrationSettings),
  }
}


export function notificationIntegrationSettingsToHclTerraform(struct?: NotificationIntegrationSettingsOutputReference | NotificationIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reports_integration_settings: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsReportsIntegrationSettingsToHclTerraform, true)(struct!.reportsIntegrationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsReportsIntegrationSettingsList",
    },
    scheduled_integration_settings: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsScheduledIntegrationSettingsToHclTerraform, true)(struct!.scheduledIntegrationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsScheduledIntegrationSettingsList",
    },
    single_notification_integration_settings: {
      value: cdktf.listMapperHcl(notificationIntegrationSettingsSingleNotificationIntegrationSettingsToHclTerraform, true)(struct!.singleNotificationIntegrationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationIntegrationSettingsSingleNotificationIntegrationSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationIntegrationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reportsIntegrationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportsIntegrationSettings = this._reportsIntegrationSettings?.internalValue;
    }
    if (this._scheduledIntegrationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledIntegrationSettings = this._scheduledIntegrationSettings?.internalValue;
    }
    if (this._singleNotificationIntegrationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleNotificationIntegrationSettings = this._singleNotificationIntegrationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reportsIntegrationSettings.internalValue = undefined;
      this._scheduledIntegrationSettings.internalValue = undefined;
      this._singleNotificationIntegrationSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reportsIntegrationSettings.internalValue = value.reportsIntegrationSettings;
      this._scheduledIntegrationSettings.internalValue = value.scheduledIntegrationSettings;
      this._singleNotificationIntegrationSettings.internalValue = value.singleNotificationIntegrationSettings;
    }
  }

  // reports_integration_settings - computed: false, optional: true, required: false
  private _reportsIntegrationSettings = new NotificationIntegrationSettingsReportsIntegrationSettingsList(this, "reports_integration_settings", false);
  public get reportsIntegrationSettings() {
    return this._reportsIntegrationSettings;
  }
  public putReportsIntegrationSettings(value: NotificationIntegrationSettingsReportsIntegrationSettings[] | cdktf.IResolvable) {
    this._reportsIntegrationSettings.internalValue = value;
  }
  public resetReportsIntegrationSettings() {
    this._reportsIntegrationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportsIntegrationSettingsInput() {
    return this._reportsIntegrationSettings.internalValue;
  }

  // scheduled_integration_settings - computed: false, optional: true, required: false
  private _scheduledIntegrationSettings = new NotificationIntegrationSettingsScheduledIntegrationSettingsList(this, "scheduled_integration_settings", false);
  public get scheduledIntegrationSettings() {
    return this._scheduledIntegrationSettings;
  }
  public putScheduledIntegrationSettings(value: NotificationIntegrationSettingsScheduledIntegrationSettings[] | cdktf.IResolvable) {
    this._scheduledIntegrationSettings.internalValue = value;
  }
  public resetScheduledIntegrationSettings() {
    this._scheduledIntegrationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledIntegrationSettingsInput() {
    return this._scheduledIntegrationSettings.internalValue;
  }

  // single_notification_integration_settings - computed: false, optional: true, required: false
  private _singleNotificationIntegrationSettings = new NotificationIntegrationSettingsSingleNotificationIntegrationSettingsList(this, "single_notification_integration_settings", false);
  public get singleNotificationIntegrationSettings() {
    return this._singleNotificationIntegrationSettings;
  }
  public putSingleNotificationIntegrationSettings(value: NotificationIntegrationSettingsSingleNotificationIntegrationSettings[] | cdktf.IResolvable) {
    this._singleNotificationIntegrationSettings.internalValue = value;
  }
  public resetSingleNotificationIntegrationSettings() {
    this._singleNotificationIntegrationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleNotificationIntegrationSettingsInput() {
    return this._singleNotificationIntegrationSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification dome9_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/notification dome9_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_notification',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsConsole = config.alertsConsole;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._origin = config.origin;
    this._sendOnEachOccurrence = config.sendOnEachOccurrence;
    this._integrationSettings.internalValue = config.integrationSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_console - computed: false, optional: true, required: false
  private _alertsConsole?: boolean | cdktf.IResolvable; 
  public get alertsConsole() {
    return this.getBooleanAttribute('alerts_console');
  }
  public set alertsConsole(value: boolean | cdktf.IResolvable) {
    this._alertsConsole = value;
  }
  public resetAlertsConsole() {
    this._alertsConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsConsoleInput() {
    return this._alertsConsole;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // send_on_each_occurrence - computed: false, optional: true, required: false
  private _sendOnEachOccurrence?: boolean | cdktf.IResolvable; 
  public get sendOnEachOccurrence() {
    return this.getBooleanAttribute('send_on_each_occurrence');
  }
  public set sendOnEachOccurrence(value: boolean | cdktf.IResolvable) {
    this._sendOnEachOccurrence = value;
  }
  public resetSendOnEachOccurrence() {
    this._sendOnEachOccurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnEachOccurrenceInput() {
    return this._sendOnEachOccurrence;
  }

  // integration_settings - computed: false, optional: true, required: false
  private _integrationSettings = new NotificationIntegrationSettingsOutputReference(this, "integration_settings");
  public get integrationSettings() {
    return this._integrationSettings;
  }
  public putIntegrationSettings(value: NotificationIntegrationSettings) {
    this._integrationSettings.internalValue = value;
  }
  public resetIntegrationSettings() {
    this._integrationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationSettingsInput() {
    return this._integrationSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_console: cdktf.booleanToTerraform(this._alertsConsole),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      origin: cdktf.stringToTerraform(this._origin),
      send_on_each_occurrence: cdktf.booleanToTerraform(this._sendOnEachOccurrence),
      integration_settings: notificationIntegrationSettingsToTerraform(this._integrationSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_console: {
        value: cdktf.booleanToHclTerraform(this._alertsConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_on_each_occurrence: {
        value: cdktf.booleanToHclTerraform(this._sendOnEachOccurrence),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integration_settings: {
        value: notificationIntegrationSettingsToHclTerraform(this._integrationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationIntegrationSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
