// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/notification#id DataDome9Notification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags {
}

export function dataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsToTerraform(struct?: DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsOutputReference {
    return new DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilter {
}

export function dataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterToTerraform(struct?: DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_categories - computed: true, optional: false, required: false
  public get entityCategories() {
    return this.getListAttribute('entity_categories');
  }

  // entity_ids - computed: true, optional: false, required: false
  public get entityIds() {
    return this.getListAttribute('entity_ids');
  }

  // entity_names - computed: true, optional: false, required: false
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }

  // entity_tags - computed: true, optional: false, required: false
  private _entityTags = new DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterEntityTagsList(this, "entity_tags", false);
  public get entityTags() {
    return this._entityTags;
  }

  // rule_entity_types - computed: true, optional: false, required: false
  public get ruleEntityTypes() {
    return this.getListAttribute('rule_entity_types');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return this.getListAttribute('severities');
  }
}

export class DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterOutputReference {
    return new DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsReportsIntegrationSettings {
}

export function dataDome9NotificationIntegrationSettingsReportsIntegrationSettingsToTerraform(struct?: DataDome9NotificationIntegrationSettingsReportsIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsReportsIntegrationSettingsToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsReportsIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsReportsIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsReportsIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
}

export class DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsOutputReference {
    return new DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags {
}

export function dataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsToTerraform(struct?: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsOutputReference {
    return new DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilter {
}

export function dataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterToTerraform(struct?: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_categories - computed: true, optional: false, required: false
  public get entityCategories() {
    return this.getListAttribute('entity_categories');
  }

  // entity_ids - computed: true, optional: false, required: false
  public get entityIds() {
    return this.getListAttribute('entity_ids');
  }

  // entity_names - computed: true, optional: false, required: false
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }

  // entity_tags - computed: true, optional: false, required: false
  private _entityTags = new DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterEntityTagsList(this, "entity_tags", false);
  public get entityTags() {
    return this._entityTags;
  }

  // rule_entity_types - computed: true, optional: false, required: false
  public get ruleEntityTypes() {
    return this.getListAttribute('rule_entity_types');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return this.getListAttribute('severities');
  }
}

export class DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterOutputReference {
    return new DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsScheduledIntegrationSettings {
}

export function dataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsToTerraform(struct?: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsScheduledIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsScheduledIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
}

export class DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsOutputReference {
    return new DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags {
}

export function dataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsToTerraform(struct?: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsOutputReference {
    return new DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter {
}

export function dataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterToTerraform(struct?: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_categories - computed: true, optional: false, required: false
  public get entityCategories() {
    return this.getListAttribute('entity_categories');
  }

  // entity_ids - computed: true, optional: false, required: false
  public get entityIds() {
    return this.getListAttribute('entity_ids');
  }

  // entity_names - computed: true, optional: false, required: false
  public get entityNames() {
    return this.getListAttribute('entity_names');
  }

  // entity_tags - computed: true, optional: false, required: false
  private _entityTags = new DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterEntityTagsList(this, "entity_tags", false);
  public get entityTags() {
    return this._entityTags;
  }

  // rule_entity_types - computed: true, optional: false, required: false
  public get ruleEntityTypes() {
    return this.getListAttribute('rule_entity_types');
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return this.getListAttribute('severities');
  }
}

export class DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterOutputReference {
    return new DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettings {
}

export function dataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsToTerraform(struct?: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsToHclTerraform(struct?: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }
}

export class DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsOutputReference {
    return new DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9NotificationIntegrationSettings {
}

export function dataDome9NotificationIntegrationSettingsToTerraform(struct?: DataDome9NotificationIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9NotificationIntegrationSettingsToHclTerraform(struct?: DataDome9NotificationIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9NotificationIntegrationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9NotificationIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9NotificationIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reports_integration_settings - computed: true, optional: false, required: false
  private _reportsIntegrationSettings = new DataDome9NotificationIntegrationSettingsReportsIntegrationSettingsList(this, "reports_integration_settings", false);
  public get reportsIntegrationSettings() {
    return this._reportsIntegrationSettings;
  }

  // scheduled_integration_settings - computed: true, optional: false, required: false
  private _scheduledIntegrationSettings = new DataDome9NotificationIntegrationSettingsScheduledIntegrationSettingsList(this, "scheduled_integration_settings", false);
  public get scheduledIntegrationSettings() {
    return this._scheduledIntegrationSettings;
  }

  // single_notification_integration_settings - computed: true, optional: false, required: false
  private _singleNotificationIntegrationSettings = new DataDome9NotificationIntegrationSettingsSingleNotificationIntegrationSettingsList(this, "single_notification_integration_settings", false);
  public get singleNotificationIntegrationSettings() {
    return this._singleNotificationIntegrationSettings;
  }
}

export class DataDome9NotificationIntegrationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9NotificationIntegrationSettingsOutputReference {
    return new DataDome9NotificationIntegrationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/notification dome9_notification}
*/
export class DataDome9Notification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9Notification to import
  * @param importFromId The id of the existing DataDome9Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/notification dome9_notification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9NotificationConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9NotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_notification',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4',
        providerVersionConstraint: '1.40.4'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_console - computed: true, optional: false, required: false
  public get alertsConsole() {
    return this.getBooleanAttribute('alerts_console');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // integration_settings - computed: true, optional: false, required: false
  private _integrationSettings = new DataDome9NotificationIntegrationSettingsList(this, "integration_settings", false);
  public get integrationSettings() {
    return this._integrationSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // send_on_each_occurrence - computed: true, optional: false, required: false
  public get sendOnEachOccurrence() {
    return this.getBooleanAttribute('send_on_each_occurrence');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
