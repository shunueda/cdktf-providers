// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/logging_unified_agent_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLoggingUnifiedAgentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/logging_unified_agent_configuration#unified_agent_configuration_id DataOciLoggingUnifiedAgentConfiguration#unified_agent_configuration_id}
  */
  readonly unifiedAgentConfigurationId: string;
}
export interface DataOciLoggingUnifiedAgentConfigurationGroupAssociation {
}

export function dataOciLoggingUnifiedAgentConfigurationGroupAssociationToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationGroupAssociationToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationGroupAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationGroupAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationGroupAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_list - computed: true, optional: false, required: false
  public get groupList() {
    return this.getListAttribute('group_list');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationGroupAssociationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationGroupAssociationOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationGroupAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // metrics_namespace - computed: true, optional: false, required: false
  public get metricsNamespace() {
    return this.getStringAttribute('metrics_namespace');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // k8s_namespace - computed: true, optional: false, required: false
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scrape_targets - computed: true, optional: false, required: false
  private _scrapeTargets = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsList(this, "scrape_targets", false);
  public get scrapeTargets() {
    return this._scrapeTargets;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_read_from_head - computed: true, optional: false, required: false
  public get isReadFromHead() {
    return this.getBooleanAttribute('is_read_from_head');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // is_keep_time_key - computed: true, optional: false, required: false
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }

  // parse_nested - computed: true, optional: false, required: false
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // time_type - computed: true, optional: false, required: false
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_time_format - computed: true, optional: false, required: false
  public get fieldTimeFormat() {
    return this.getStringAttribute('field_time_format');
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // field_time_zone - computed: true, optional: false, required: false
  public get fieldTimeZone() {
    return this.getStringAttribute('field_time_zone');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new cdktf.StringMap(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getListAttribute('format');
  }

  // format_firstline - computed: true, optional: false, required: false
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }

  // grok_failure_key - computed: true, optional: false, required: false
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }

  // grok_name_key - computed: true, optional: false, required: false
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }

  // is_estimate_current_event - computed: true, optional: false, required: false
  public get isEstimateCurrentEvent() {
    return this.getBooleanAttribute('is_estimate_current_event');
  }

  // is_keep_time_key - computed: true, optional: false, required: false
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }

  // is_merge_cri_fields - computed: true, optional: false, required: false
  public get isMergeCriFields() {
    return this.getBooleanAttribute('is_merge_cri_fields');
  }

  // is_null_empty_string - computed: true, optional: false, required: false
  public get isNullEmptyString() {
    return this.getBooleanAttribute('is_null_empty_string');
  }

  // is_support_colonless_ident - computed: true, optional: false, required: false
  public get isSupportColonlessIdent() {
    return this.getBooleanAttribute('is_support_colonless_ident');
  }

  // is_with_priority - computed: true, optional: false, required: false
  public get isWithPriority() {
    return this.getBooleanAttribute('is_with_priority');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // message_key - computed: true, optional: false, required: false
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }

  // multi_line_start_regexp - computed: true, optional: false, required: false
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }

  // nested_parser - computed: true, optional: false, required: false
  private _nestedParser = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserList(this, "nested_parser", false);
  public get nestedParser() {
    return this._nestedParser;
  }

  // null_value_pattern - computed: true, optional: false, required: false
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }

  // parse_nested - computed: true, optional: false, required: false
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }

  // parser_type - computed: true, optional: false, required: false
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }

  // patterns - computed: true, optional: false, required: false
  private _patterns = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }

  // record_input - computed: true, optional: false, required: false
  private _recordInput = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputList(this, "record_input", false);
  public get recordInput() {
    return this._recordInput;
  }

  // rfc5424time_format - computed: true, optional: false, required: false
  public get rfc5424TimeFormat() {
    return this.getStringAttribute('rfc5424time_format');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }

  // syslog_parser_type - computed: true, optional: false, required: false
  public get syslogParserType() {
    return this.getStringAttribute('syslog_parser_type');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // time_type - computed: true, optional: false, required: false
  public get timeType() {
    return this.getStringAttribute('time_type');
  }

  // timeout_in_milliseconds - computed: true, optional: false, required: false
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }

  // types - computed: true, optional: false, required: false
  private _types = new cdktf.StringMap(this, "types");
  public get types() {
    return this._types;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_options - computed: true, optional: false, required: false
  private _advancedOptions = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsList(this, "advanced_options", false);
  public get advancedOptions() {
    return this._advancedOptions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parser - computed: true, optional: false, required: false
  private _parser = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserList(this, "parser", false);
  public get parser() {
    return this._parser;
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_list - computed: true, optional: false, required: false
  public get allowList() {
    return this.getListAttribute('allow_list');
  }

  // deny_list - computed: true, optional: false, required: false
  public get denyList() {
    return this.getListAttribute('deny_list');
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // unified_agent_configuration_filter - computed: true, optional: false, required: false
  private _unifiedAgentConfigurationFilter = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterList(this, "unified_agent_configuration_filter", false);
  public get unifiedAgentConfigurationFilter() {
    return this._unifiedAgentConfigurationFilter;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }

  // record_input - computed: true, optional: false, required: false
  private _recordInput = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputList(this, "record_input", false);
  public get recordInput() {
    return this._recordInput;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestination {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_object_id - computed: true, optional: false, required: false
  public get logObjectId() {
    return this.getStringAttribute('log_object_id');
  }

  // operational_metrics_configuration - computed: true, optional: false, required: false
  private _operationalMetricsConfiguration = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationList(this, "operational_metrics_configuration", false);
  public get operationalMetricsConfiguration() {
    return this._operationalMetricsConfiguration;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_read_from_head - computed: true, optional: false, required: false
  public get isReadFromHead() {
    return this.getBooleanAttribute('is_read_from_head');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // is_keep_time_key - computed: true, optional: false, required: false
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }

  // parse_nested - computed: true, optional: false, required: false
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // time_type - computed: true, optional: false, required: false
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_time_format - computed: true, optional: false, required: false
  public get fieldTimeFormat() {
    return this.getStringAttribute('field_time_format');
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // field_time_zone - computed: true, optional: false, required: false
  public get fieldTimeZone() {
    return this.getStringAttribute('field_time_zone');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new cdktf.StringMap(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getListAttribute('format');
  }

  // format_firstline - computed: true, optional: false, required: false
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }

  // grok_failure_key - computed: true, optional: false, required: false
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }

  // grok_name_key - computed: true, optional: false, required: false
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }

  // is_estimate_current_event - computed: true, optional: false, required: false
  public get isEstimateCurrentEvent() {
    return this.getBooleanAttribute('is_estimate_current_event');
  }

  // is_keep_time_key - computed: true, optional: false, required: false
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }

  // is_merge_cri_fields - computed: true, optional: false, required: false
  public get isMergeCriFields() {
    return this.getBooleanAttribute('is_merge_cri_fields');
  }

  // is_null_empty_string - computed: true, optional: false, required: false
  public get isNullEmptyString() {
    return this.getBooleanAttribute('is_null_empty_string');
  }

  // is_support_colonless_ident - computed: true, optional: false, required: false
  public get isSupportColonlessIdent() {
    return this.getBooleanAttribute('is_support_colonless_ident');
  }

  // is_with_priority - computed: true, optional: false, required: false
  public get isWithPriority() {
    return this.getBooleanAttribute('is_with_priority');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // message_key - computed: true, optional: false, required: false
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }

  // multi_line_start_regexp - computed: true, optional: false, required: false
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }

  // nested_parser - computed: true, optional: false, required: false
  private _nestedParser = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserList(this, "nested_parser", false);
  public get nestedParser() {
    return this._nestedParser;
  }

  // null_value_pattern - computed: true, optional: false, required: false
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }

  // parse_nested - computed: true, optional: false, required: false
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }

  // parser_type - computed: true, optional: false, required: false
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }

  // patterns - computed: true, optional: false, required: false
  private _patterns = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }

  // record_input - computed: true, optional: false, required: false
  private _recordInput = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputList(this, "record_input", false);
  public get recordInput() {
    return this._recordInput;
  }

  // rfc5424time_format - computed: true, optional: false, required: false
  public get rfc5424TimeFormat() {
    return this.getStringAttribute('rfc5424time_format');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }

  // syslog_parser_type - computed: true, optional: false, required: false
  public get syslogParserType() {
    return this.getStringAttribute('syslog_parser_type');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // time_type - computed: true, optional: false, required: false
  public get timeType() {
    return this.getStringAttribute('time_type');
  }

  // timeout_in_milliseconds - computed: true, optional: false, required: false
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }

  // types - computed: true, optional: false, required: false
  private _types = new cdktf.StringMap(this, "types");
  public get types() {
    return this._types;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSources {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_options - computed: true, optional: false, required: false
  private _advancedOptions = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsList(this, "advanced_options", false);
  public get advancedOptions() {
    return this._advancedOptions;
  }

  // channels - computed: true, optional: false, required: false
  public get channels() {
    return this.getListAttribute('channels');
  }

  // custom_plugin - computed: true, optional: false, required: false
  public get customPlugin() {
    return this.getStringAttribute('custom_plugin');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parser - computed: true, optional: false, required: false
  private _parser = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserList(this, "parser", false);
  public get parser() {
    return this._parser;
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct | undefined) {
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

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // params - computed: true, optional: false, required: false
  private _params = new cdktf.StringMap(this, "params");
  public get params() {
    return this._params;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct | undefined) {
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

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // is_keep_time_key - computed: true, optional: false, required: false
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }

  // parse_nested - computed: true, optional: false, required: false
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // time_type - computed: true, optional: false, required: false
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_time_format - computed: true, optional: false, required: false
  public get fieldTimeFormat() {
    return this.getStringAttribute('field_time_format');
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // field_time_zone - computed: true, optional: false, required: false
  public get fieldTimeZone() {
    return this.getStringAttribute('field_time_zone');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new cdktf.StringMap(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // field_time_key - computed: true, optional: false, required: false
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getListAttribute('format');
  }

  // format_firstline - computed: true, optional: false, required: false
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }

  // grok_failure_key - computed: true, optional: false, required: false
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }

  // grok_name_key - computed: true, optional: false, required: false
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }

  // is_estimate_current_event - computed: true, optional: false, required: false
  public get isEstimateCurrentEvent() {
    return this.getBooleanAttribute('is_estimate_current_event');
  }

  // is_keep_time_key - computed: true, optional: false, required: false
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }

  // is_merge_cri_fields - computed: true, optional: false, required: false
  public get isMergeCriFields() {
    return this.getBooleanAttribute('is_merge_cri_fields');
  }

  // is_null_empty_string - computed: true, optional: false, required: false
  public get isNullEmptyString() {
    return this.getBooleanAttribute('is_null_empty_string');
  }

  // is_support_colonless_ident - computed: true, optional: false, required: false
  public get isSupportColonlessIdent() {
    return this.getBooleanAttribute('is_support_colonless_ident');
  }

  // is_with_priority - computed: true, optional: false, required: false
  public get isWithPriority() {
    return this.getBooleanAttribute('is_with_priority');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // message_key - computed: true, optional: false, required: false
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }

  // multi_line_start_regexp - computed: true, optional: false, required: false
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }

  // nested_parser - computed: true, optional: false, required: false
  private _nestedParser = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserList(this, "nested_parser", false);
  public get nestedParser() {
    return this._nestedParser;
  }

  // null_value_pattern - computed: true, optional: false, required: false
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }

  // parse_nested - computed: true, optional: false, required: false
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }

  // parser_type - computed: true, optional: false, required: false
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }

  // patterns - computed: true, optional: false, required: false
  private _patterns = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }

  // record_input - computed: true, optional: false, required: false
  private _recordInput = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputList(this, "record_input", false);
  public get recordInput() {
    return this._recordInput;
  }

  // rfc5424time_format - computed: true, optional: false, required: false
  public get rfc5424TimeFormat() {
    return this.getStringAttribute('rfc5424time_format');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }

  // syslog_parser_type - computed: true, optional: false, required: false
  public get syslogParserType() {
    return this.getStringAttribute('syslog_parser_type');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // time_type - computed: true, optional: false, required: false
  public get timeType() {
    return this.getStringAttribute('time_type');
  }

  // timeout_in_milliseconds - computed: true, optional: false, required: false
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }

  // types - computed: true, optional: false, required: false
  private _types = new cdktf.StringMap(this, "types");
  public get types() {
    return this._types;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct | undefined) {
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

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_list - computed: true, optional: false, required: false
  private _allowList = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructList(this, "allow_list", false);
  public get allowList() {
    return this._allowList;
  }

  // custom_filter_type - computed: true, optional: false, required: false
  public get customFilterType() {
    return this.getStringAttribute('custom_filter_type');
  }

  // custom_sections - computed: true, optional: false, required: false
  private _customSections = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsList(this, "custom_sections", false);
  public get customSections() {
    return this._customSections;
  }

  // deny_list - computed: true, optional: false, required: false
  private _denyList = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructList(this, "deny_list", false);
  public get denyList() {
    return this._denyList;
  }

  // emit_invalid_record_to_error - computed: true, optional: false, required: false
  public get emitInvalidRecordToError() {
    return this.getBooleanAttribute('emit_invalid_record_to_error');
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // hash_value_field - computed: true, optional: false, required: false
  public get hashValueField() {
    return this.getStringAttribute('hash_value_field');
  }

  // inject_key_prefix - computed: true, optional: false, required: false
  public get injectKeyPrefix() {
    return this.getStringAttribute('inject_key_prefix');
  }

  // is_auto_typecast_enabled - computed: true, optional: false, required: false
  public get isAutoTypecastEnabled() {
    return this.getBooleanAttribute('is_auto_typecast_enabled');
  }

  // is_renew_record_enabled - computed: true, optional: false, required: false
  public get isRenewRecordEnabled() {
    return this.getBooleanAttribute('is_renew_record_enabled');
  }

  // is_ruby_enabled - computed: true, optional: false, required: false
  public get isRubyEnabled() {
    return this.getBooleanAttribute('is_ruby_enabled');
  }

  // keep_keys - computed: true, optional: false, required: false
  public get keepKeys() {
    return this.getListAttribute('keep_keys');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // params - computed: true, optional: false, required: false
  private _params = new cdktf.StringMap(this, "params");
  public get params() {
    return this._params;
  }

  // parser - computed: true, optional: false, required: false
  private _parser = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserList(this, "parser", false);
  public get parser() {
    return this._parser;
  }

  // record_list - computed: true, optional: false, required: false
  private _recordList = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructList(this, "record_list", false);
  public get recordList() {
    return this._recordList;
  }

  // remove_key_name_field - computed: true, optional: false, required: false
  public get removeKeyNameField() {
    return this.getBooleanAttribute('remove_key_name_field');
  }

  // remove_keys - computed: true, optional: false, required: false
  public get removeKeys() {
    return this.getListAttribute('remove_keys');
  }

  // renew_time_key - computed: true, optional: false, required: false
  public get renewTimeKey() {
    return this.getStringAttribute('renew_time_key');
  }

  // replace_invalid_sequence - computed: true, optional: false, required: false
  public get replaceInvalidSequence() {
    return this.getBooleanAttribute('replace_invalid_sequence');
  }

  // reserve_data - computed: true, optional: false, required: false
  public get reserveData() {
    return this.getBooleanAttribute('reserve_data');
  }

  // reserve_time - computed: true, optional: false, required: false
  public get reserveTime() {
    return this.getBooleanAttribute('reserve_time');
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLoggingUnifiedAgentConfigurationServiceConfiguration {
}

export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationToTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLoggingUnifiedAgentConfigurationServiceConfigurationToHclTerraform(struct?: DataOciLoggingUnifiedAgentConfigurationServiceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLoggingUnifiedAgentConfigurationServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLoggingUnifiedAgentConfigurationServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_configurations - computed: true, optional: false, required: false
  private _applicationConfigurations = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsList(this, "application_configurations", false);
  public get applicationConfigurations() {
    return this._applicationConfigurations;
  }

  // configuration_type - computed: true, optional: false, required: false
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // unified_agent_configuration_filter - computed: true, optional: false, required: false
  private _unifiedAgentConfigurationFilter = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterList(this, "unified_agent_configuration_filter", false);
  public get unifiedAgentConfigurationFilter() {
    return this._unifiedAgentConfigurationFilter;
  }
}

export class DataOciLoggingUnifiedAgentConfigurationServiceConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLoggingUnifiedAgentConfigurationServiceConfigurationOutputReference {
    return new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/logging_unified_agent_configuration oci_logging_unified_agent_configuration}
*/
export class DataOciLoggingUnifiedAgentConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_logging_unified_agent_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLoggingUnifiedAgentConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLoggingUnifiedAgentConfiguration to import
  * @param importFromId The id of the existing DataOciLoggingUnifiedAgentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/logging_unified_agent_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLoggingUnifiedAgentConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_logging_unified_agent_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/logging_unified_agent_configuration oci_logging_unified_agent_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLoggingUnifiedAgentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLoggingUnifiedAgentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_logging_unified_agent_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._unifiedAgentConfigurationId = config.unifiedAgentConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_state - computed: true, optional: false, required: false
  public get configurationState() {
    return this.getStringAttribute('configuration_state');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // group_association - computed: true, optional: false, required: false
  private _groupAssociation = new DataOciLoggingUnifiedAgentConfigurationGroupAssociationList(this, "group_association", false);
  public get groupAssociation() {
    return this._groupAssociation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // service_configuration - computed: true, optional: false, required: false
  private _serviceConfiguration = new DataOciLoggingUnifiedAgentConfigurationServiceConfigurationList(this, "service_configuration", false);
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // unified_agent_configuration_id - computed: false, optional: false, required: true
  private _unifiedAgentConfigurationId?: string; 
  public get unifiedAgentConfigurationId() {
    return this.getStringAttribute('unified_agent_configuration_id');
  }
  public set unifiedAgentConfigurationId(value: string) {
    this._unifiedAgentConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAgentConfigurationIdInput() {
    return this._unifiedAgentConfigurationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      unified_agent_configuration_id: cdktf.stringToTerraform(this._unifiedAgentConfigurationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      unified_agent_configuration_id: {
        value: cdktf.stringToHclTerraform(this._unifiedAgentConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
