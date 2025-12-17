// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/cloudproperties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviCloudpropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/cloudproperties#id DataAviCloudproperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/cloudproperties#uuid DataAviCloudproperties#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviCloudpropertiesCcProps {
}

export function dataAviCloudpropertiesCcPropsToTerraform(struct?: DataAviCloudpropertiesCcProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesCcPropsToHclTerraform(struct?: DataAviCloudpropertiesCcProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesCcPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesCcProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesCcProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rpc_poll_interval - computed: true, optional: false, required: false
  public get rpcPollInterval() {
    return this.getStringAttribute('rpc_poll_interval');
  }

  // rpc_queue_size - computed: true, optional: false, required: false
  public get rpcQueueSize() {
    return this.getStringAttribute('rpc_queue_size');
  }
}

export class DataAviCloudpropertiesCcPropsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesCcPropsOutputReference {
    return new DataAviCloudpropertiesCcPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesConfigpbAttributes {
}

export function dataAviCloudpropertiesConfigpbAttributesToTerraform(struct?: DataAviCloudpropertiesConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesConfigpbAttributesToHclTerraform(struct?: DataAviCloudpropertiesConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviCloudpropertiesConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesConfigpbAttributesOutputReference {
    return new DataAviCloudpropertiesConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesHypProps {
}

export function dataAviCloudpropertiesHypPropsToTerraform(struct?: DataAviCloudpropertiesHypProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesHypPropsToHclTerraform(struct?: DataAviCloudpropertiesHypProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesHypPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesHypProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesHypProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // htype - computed: true, optional: false, required: false
  public get htype() {
    return this.getStringAttribute('htype');
  }

  // max_ips_per_nic - computed: true, optional: false, required: false
  public get maxIpsPerNic() {
    return this.getStringAttribute('max_ips_per_nic');
  }

  // max_nics - computed: true, optional: false, required: false
  public get maxNics() {
    return this.getStringAttribute('max_nics');
  }
}

export class DataAviCloudpropertiesHypPropsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesHypPropsOutputReference {
    return new DataAviCloudpropertiesHypPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfoCcaProps {
}

export function dataAviCloudpropertiesInfoCcaPropsToTerraform(struct?: DataAviCloudpropertiesInfoCcaProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoCcaPropsToHclTerraform(struct?: DataAviCloudpropertiesInfoCcaProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoCcaPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfoCcaProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfoCcaProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // async_retries - computed: true, optional: false, required: false
  public get asyncRetries() {
    return this.getStringAttribute('async_retries');
  }

  // async_retries_delay - computed: true, optional: false, required: false
  public get asyncRetriesDelay() {
    return this.getStringAttribute('async_retries_delay');
  }

  // poll_duration_target - computed: true, optional: false, required: false
  public get pollDurationTarget() {
    return this.getStringAttribute('poll_duration_target');
  }

  // poll_fast_target - computed: true, optional: false, required: false
  public get pollFastTarget() {
    return this.getStringAttribute('poll_fast_target');
  }

  // poll_slow_target - computed: true, optional: false, required: false
  public get pollSlowTarget() {
    return this.getStringAttribute('poll_slow_target');
  }

  // vcenter_host_ping_interval - computed: true, optional: false, required: false
  public get vcenterHostPingInterval() {
    return this.getStringAttribute('vcenter_host_ping_interval');
  }

  // vcenter_inventory_max_object_updates - computed: true, optional: false, required: false
  public get vcenterInventoryMaxObjectUpdates() {
    return this.getStringAttribute('vcenter_inventory_max_object_updates');
  }

  // vcenter_max_datastore_go_routines - computed: true, optional: false, required: false
  public get vcenterMaxDatastoreGoRoutines() {
    return this.getStringAttribute('vcenter_max_datastore_go_routines');
  }

  // vcenter_reconcile_interval - computed: true, optional: false, required: false
  public get vcenterReconcileInterval() {
    return this.getStringAttribute('vcenter_reconcile_interval');
  }

  // vnic_retries - computed: true, optional: false, required: false
  public get vnicRetries() {
    return this.getStringAttribute('vnic_retries');
  }

  // vnic_retries_delay - computed: true, optional: false, required: false
  public get vnicRetriesDelay() {
    return this.getStringAttribute('vnic_retries_delay');
  }
}

export class DataAviCloudpropertiesInfoCcaPropsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoCcaPropsOutputReference {
    return new DataAviCloudpropertiesInfoCcaPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfoControllerPropsConfigpbAttributes {
}

export function dataAviCloudpropertiesInfoControllerPropsConfigpbAttributesToTerraform(struct?: DataAviCloudpropertiesInfoControllerPropsConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoControllerPropsConfigpbAttributesToHclTerraform(struct?: DataAviCloudpropertiesInfoControllerPropsConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoControllerPropsConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfoControllerPropsConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfoControllerPropsConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviCloudpropertiesInfoControllerPropsConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoControllerPropsConfigpbAttributesOutputReference {
    return new DataAviCloudpropertiesInfoControllerPropsConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfig {
}

export function dataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfigToTerraform(struct?: DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfigToHclTerraform(struct?: DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_apps_supported - computed: true, optional: false, required: false
  public get maxAppsSupported() {
    return this.getStringAttribute('max_apps_supported');
  }

  // min_monitor_time - computed: true, optional: false, required: false
  public get minMonitorTime() {
    return this.getStringAttribute('min_monitor_time');
  }

  // min_trans_per_application - computed: true, optional: false, required: false
  public get minTransPerApplication() {
    return this.getStringAttribute('min_trans_per_application');
  }

  // min_trans_per_uri - computed: true, optional: false, required: false
  public get minTransPerUri() {
    return this.getStringAttribute('min_trans_per_uri');
  }
}

export class DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfigOutputReference {
    return new DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfig {
}

export function dataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfigToTerraform(struct?: DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfigToHclTerraform(struct?: DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }

  // controller_cache_size - computed: true, optional: false, required: false
  public get controllerCacheSize() {
    return this.getStringAttribute('controller_cache_size');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }

  // max_last_hit_time - computed: true, optional: false, required: false
  public get maxLastHitTime() {
    return this.getStringAttribute('max_last_hit_time');
  }

  // max_upstream_queries - computed: true, optional: false, required: false
  public get maxUpstreamQueries() {
    return this.getStringAttribute('max_upstream_queries');
  }

  // max_wait_time - computed: true, optional: false, required: false
  public get maxWaitTime() {
    return this.getStringAttribute('max_wait_time');
  }

  // num_entries_upstream_update - computed: true, optional: false, required: false
  public get numEntriesUpstreamUpdate() {
    return this.getStringAttribute('num_entries_upstream_update');
  }

  // percent_reserved_for_bad_bots - computed: true, optional: false, required: false
  public get percentReservedForBadBots() {
    return this.getStringAttribute('percent_reserved_for_bad_bots');
  }

  // percent_reserved_for_browsers - computed: true, optional: false, required: false
  public get percentReservedForBrowsers() {
    return this.getStringAttribute('percent_reserved_for_browsers');
  }

  // percent_reserved_for_good_bots - computed: true, optional: false, required: false
  public get percentReservedForGoodBots() {
    return this.getStringAttribute('percent_reserved_for_good_bots');
  }

  // percent_reserved_for_outstanding - computed: true, optional: false, required: false
  public get percentReservedForOutstanding() {
    return this.getStringAttribute('percent_reserved_for_outstanding');
  }

  // se_cache_size - computed: true, optional: false, required: false
  public get seCacheSize() {
    return this.getStringAttribute('se_cache_size');
  }

  // upstream_update_interval - computed: true, optional: false, required: false
  public get upstreamUpdateInterval() {
    return this.getStringAttribute('upstream_update_interval');
  }
}

export class DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfigOutputReference {
    return new DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfoControllerProps {
}

export function dataAviCloudpropertiesInfoControllerPropsToTerraform(struct?: DataAviCloudpropertiesInfoControllerProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoControllerPropsToHclTerraform(struct?: DataAviCloudpropertiesInfoControllerProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoControllerPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfoControllerProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfoControllerProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_manager_use_evms - computed: true, optional: false, required: false
  public get alertManagerUseEvms() {
    return this.getStringAttribute('alert_manager_use_evms');
  }

  // allow_admin_network_updates - computed: true, optional: false, required: false
  public get allowAdminNetworkUpdates() {
    return this.getStringAttribute('allow_admin_network_updates');
  }

  // allow_ip_forwarding - computed: true, optional: false, required: false
  public get allowIpForwarding() {
    return this.getStringAttribute('allow_ip_forwarding');
  }

  // allow_unauthenticated_apis - computed: true, optional: false, required: false
  public get allowUnauthenticatedApis() {
    return this.getStringAttribute('allow_unauthenticated_apis');
  }

  // allow_unauthenticated_nodes - computed: true, optional: false, required: false
  public get allowUnauthenticatedNodes() {
    return this.getStringAttribute('allow_unauthenticated_nodes');
  }

  // api_idle_timeout - computed: true, optional: false, required: false
  public get apiIdleTimeout() {
    return this.getStringAttribute('api_idle_timeout');
  }

  // api_perf_logging_threshold - computed: true, optional: false, required: false
  public get apiPerfLoggingThreshold() {
    return this.getStringAttribute('api_perf_logging_threshold');
  }

  // appviewx_compat_mode - computed: true, optional: false, required: false
  public get appviewxCompatMode() {
    return this.getStringAttribute('appviewx_compat_mode');
  }

  // async_patch_merge_period - computed: true, optional: false, required: false
  public get asyncPatchMergePeriod() {
    return this.getStringAttribute('async_patch_merge_period');
  }

  // async_patch_request_cleanup_duration - computed: true, optional: false, required: false
  public get asyncPatchRequestCleanupDuration() {
    return this.getStringAttribute('async_patch_request_cleanup_duration');
  }

  // attach_ip_retry_interval - computed: true, optional: false, required: false
  public get attachIpRetryInterval() {
    return this.getStringAttribute('attach_ip_retry_interval');
  }

  // attach_ip_retry_limit - computed: true, optional: false, required: false
  public get attachIpRetryLimit() {
    return this.getStringAttribute('attach_ip_retry_limit');
  }

  // bm_use_ansible - computed: true, optional: false, required: false
  public get bmUseAnsible() {
    return this.getStringAttribute('bm_use_ansible');
  }

  // check_vsvip_fqdn_syntax - computed: true, optional: false, required: false
  public get checkVsvipFqdnSyntax() {
    return this.getStringAttribute('check_vsvip_fqdn_syntax');
  }

  // cleanup_expired_authtoken_timeout_period - computed: true, optional: false, required: false
  public get cleanupExpiredAuthtokenTimeoutPeriod() {
    return this.getStringAttribute('cleanup_expired_authtoken_timeout_period');
  }

  // cleanup_sessions_timeout_period - computed: true, optional: false, required: false
  public get cleanupSessionsTimeoutPeriod() {
    return this.getStringAttribute('cleanup_sessions_timeout_period');
  }

  // cloud_discovery_interval - computed: true, optional: false, required: false
  public get cloudDiscoveryInterval() {
    return this.getStringAttribute('cloud_discovery_interval');
  }

  // cloud_reconcile - computed: true, optional: false, required: false
  public get cloudReconcile() {
    return this.getStringAttribute('cloud_reconcile');
  }

  // cloud_reconcile_interval - computed: true, optional: false, required: false
  public get cloudReconcileInterval() {
    return this.getStringAttribute('cloud_reconcile_interval');
  }

  // cluster_ip_gratuitous_arp_period - computed: true, optional: false, required: false
  public get clusterIpGratuitousArpPeriod() {
    return this.getStringAttribute('cluster_ip_gratuitous_arp_period');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviCloudpropertiesInfoControllerPropsConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // consistency_check_timeout_period - computed: true, optional: false, required: false
  public get consistencyCheckTimeoutPeriod() {
    return this.getStringAttribute('consistency_check_timeout_period');
  }

  // controller_resource_info_collection_period - computed: true, optional: false, required: false
  public get controllerResourceInfoCollectionPeriod() {
    return this.getStringAttribute('controller_resource_info_collection_period');
  }

  // crashed_se_reboot - computed: true, optional: false, required: false
  public get crashedSeReboot() {
    return this.getStringAttribute('crashed_se_reboot');
  }

  // dead_se_detection_timer - computed: true, optional: false, required: false
  public get deadSeDetectionTimer() {
    return this.getStringAttribute('dead_se_detection_timer');
  }

  // default_minimum_api_timeout - computed: true, optional: false, required: false
  public get defaultMinimumApiTimeout() {
    return this.getStringAttribute('default_minimum_api_timeout');
  }

  // del_offline_se_after_reboot_delay - computed: true, optional: false, required: false
  public get delOfflineSeAfterRebootDelay() {
    return this.getStringAttribute('del_offline_se_after_reboot_delay');
  }

  // detach_ip_retry_interval - computed: true, optional: false, required: false
  public get detachIpRetryInterval() {
    return this.getStringAttribute('detach_ip_retry_interval');
  }

  // detach_ip_retry_limit - computed: true, optional: false, required: false
  public get detachIpRetryLimit() {
    return this.getStringAttribute('detach_ip_retry_limit');
  }

  // detach_ip_timeout - computed: true, optional: false, required: false
  public get detachIpTimeout() {
    return this.getStringAttribute('detach_ip_timeout');
  }

  // dns_refresh_period - computed: true, optional: false, required: false
  public get dnsRefreshPeriod() {
    return this.getStringAttribute('dns_refresh_period');
  }

  // dummy - computed: true, optional: false, required: false
  public get dummy() {
    return this.getStringAttribute('dummy');
  }

  // edit_system_limits - computed: true, optional: false, required: false
  public get editSystemLimits() {
    return this.getStringAttribute('edit_system_limits');
  }

  // enable_api_sharding - computed: true, optional: false, required: false
  public get enableApiSharding() {
    return this.getStringAttribute('enable_api_sharding');
  }

  // enable_memory_balancer - computed: true, optional: false, required: false
  public get enableMemoryBalancer() {
    return this.getStringAttribute('enable_memory_balancer');
  }

  // enable_per_process_stop - computed: true, optional: false, required: false
  public get enablePerProcessStop() {
    return this.getStringAttribute('enable_per_process_stop');
  }

  // enable_resmgr_log_cache_print - computed: true, optional: false, required: false
  public get enableResmgrLogCachePrint() {
    return this.getStringAttribute('enable_resmgr_log_cache_print');
  }

  // event_manager_file_modified_ts_filter - computed: true, optional: false, required: false
  public get eventManagerFileModifiedTsFilter() {
    return this.getStringAttribute('event_manager_file_modified_ts_filter');
  }

  // event_manager_max_goroutines - computed: true, optional: false, required: false
  public get eventManagerMaxGoroutines() {
    return this.getStringAttribute('event_manager_max_goroutines');
  }

  // event_manager_max_subscribers - computed: true, optional: false, required: false
  public get eventManagerMaxSubscribers() {
    return this.getStringAttribute('event_manager_max_subscribers');
  }

  // event_manager_processing_time_threshold - computed: true, optional: false, required: false
  public get eventManagerProcessingTimeThreshold() {
    return this.getStringAttribute('event_manager_processing_time_threshold');
  }

  // false_positive_learning_config - computed: true, optional: false, required: false
  private _falsePositiveLearningConfig = new DataAviCloudpropertiesInfoControllerPropsFalsePositiveLearningConfigList(this, "false_positive_learning_config", true);
  public get falsePositiveLearningConfig() {
    return this._falsePositiveLearningConfig;
  }

  // fatal_error_lease_time - computed: true, optional: false, required: false
  public get fatalErrorLeaseTime() {
    return this.getStringAttribute('fatal_error_lease_time');
  }

  // federated_datastore_cleanup_duration - computed: true, optional: false, required: false
  public get federatedDatastoreCleanupDuration() {
    return this.getStringAttribute('federated_datastore_cleanup_duration');
  }

  // file_object_cleanup_period - computed: true, optional: false, required: false
  public get fileObjectCleanupPeriod() {
    return this.getStringAttribute('file_object_cleanup_period');
  }

  // fileobject_max_file_versions - computed: true, optional: false, required: false
  public get fileobjectMaxFileVersions() {
    return this.getStringAttribute('fileobject_max_file_versions');
  }

  // gslb_purge_batch_size - computed: true, optional: false, required: false
  public get gslbPurgeBatchSize() {
    return this.getStringAttribute('gslb_purge_batch_size');
  }

  // gslb_purge_sleep_time_ms - computed: true, optional: false, required: false
  public get gslbPurgeSleepTimeMs() {
    return this.getStringAttribute('gslb_purge_sleep_time_ms');
  }

  // ignore_vrf_in_networksubnetlist - computed: true, optional: false, required: false
  public get ignoreVrfInNetworksubnetlist() {
    return this.getStringAttribute('ignore_vrf_in_networksubnetlist');
  }

  // max_dead_se_in_grp - computed: true, optional: false, required: false
  public get maxDeadSeInGrp() {
    return this.getStringAttribute('max_dead_se_in_grp');
  }

  // max_pcap_per_tenant - computed: true, optional: false, required: false
  public get maxPcapPerTenant() {
    return this.getStringAttribute('max_pcap_per_tenant');
  }

  // max_se_spawn_interval_delay - computed: true, optional: false, required: false
  public get maxSeSpawnIntervalDelay() {
    return this.getStringAttribute('max_se_spawn_interval_delay');
  }

  // max_seq_attach_ip_failures - computed: true, optional: false, required: false
  public get maxSeqAttachIpFailures() {
    return this.getStringAttribute('max_seq_attach_ip_failures');
  }

  // max_seq_vnic_failures - computed: true, optional: false, required: false
  public get maxSeqVnicFailures() {
    return this.getStringAttribute('max_seq_vnic_failures');
  }

  // max_threads_cc_vip_bg_worker - computed: true, optional: false, required: false
  public get maxThreadsCcVipBgWorker() {
    return this.getStringAttribute('max_threads_cc_vip_bg_worker');
  }

  // permission_scoped_shared_admin_networks - computed: true, optional: false, required: false
  public get permissionScopedSharedAdminNetworks() {
    return this.getStringAttribute('permission_scoped_shared_admin_networks');
  }

  // persistence_key_rotate_period - computed: true, optional: false, required: false
  public get persistenceKeyRotatePeriod() {
    return this.getStringAttribute('persistence_key_rotate_period');
  }

  // portal_request_burst_limit - computed: true, optional: false, required: false
  public get portalRequestBurstLimit() {
    return this.getStringAttribute('portal_request_burst_limit');
  }

  // portal_request_rate_limit - computed: true, optional: false, required: false
  public get portalRequestRateLimit() {
    return this.getStringAttribute('portal_request_rate_limit');
  }

  // portal_token - computed: true, optional: false, required: false
  public get portalToken() {
    return this.getStringAttribute('portal_token');
  }

  // postgres_vacuum_period - computed: true, optional: false, required: false
  public get postgresVacuumPeriod() {
    return this.getStringAttribute('postgres_vacuum_period');
  }

  // process_locked_useraccounts_timeout_period - computed: true, optional: false, required: false
  public get processLockedUseraccountsTimeoutPeriod() {
    return this.getStringAttribute('process_locked_useraccounts_timeout_period');
  }

  // process_pki_profile_timeout_period - computed: true, optional: false, required: false
  public get processPkiProfileTimeoutPeriod() {
    return this.getStringAttribute('process_pki_profile_timeout_period');
  }

  // query_host_fail - computed: true, optional: false, required: false
  public get queryHostFail() {
    return this.getStringAttribute('query_host_fail');
  }

  // resmgr_log_caching_period - computed: true, optional: false, required: false
  public get resmgrLogCachingPeriod() {
    return this.getStringAttribute('resmgr_log_caching_period');
  }

  // restrict_cloud_read_access - computed: true, optional: false, required: false
  public get restrictCloudReadAccess() {
    return this.getStringAttribute('restrict_cloud_read_access');
  }

  // safenet_hsm_version - computed: true, optional: false, required: false
  public get safenetHsmVersion() {
    return this.getStringAttribute('safenet_hsm_version');
  }

  // se_create_timeout - computed: true, optional: false, required: false
  public get seCreateTimeout() {
    return this.getStringAttribute('se_create_timeout');
  }

  // se_failover_attempt_interval - computed: true, optional: false, required: false
  public get seFailoverAttemptInterval() {
    return this.getStringAttribute('se_failover_attempt_interval');
  }

  // se_from_marketplace - computed: true, optional: false, required: false
  public get seFromMarketplace() {
    return this.getStringAttribute('se_from_marketplace');
  }

  // se_offline_del - computed: true, optional: false, required: false
  public get seOfflineDel() {
    return this.getStringAttribute('se_offline_del');
  }

  // se_spawn_retry_interval - computed: true, optional: false, required: false
  public get seSpawnRetryInterval() {
    return this.getStringAttribute('se_spawn_retry_interval');
  }

  // se_upgrade_flow_cleanup_timeout - computed: true, optional: false, required: false
  public get seUpgradeFlowCleanupTimeout() {
    return this.getStringAttribute('se_upgrade_flow_cleanup_timeout');
  }

  // se_vnic_cooldown - computed: true, optional: false, required: false
  public get seVnicCooldown() {
    return this.getStringAttribute('se_vnic_cooldown');
  }

  // se_vnic_gc_wait_time - computed: true, optional: false, required: false
  public get seVnicGcWaitTime() {
    return this.getStringAttribute('se_vnic_gc_wait_time');
  }

  // secure_channel_cleanup_timeout - computed: true, optional: false, required: false
  public get secureChannelCleanupTimeout() {
    return this.getStringAttribute('secure_channel_cleanup_timeout');
  }

  // secure_channel_controller_token_timeout - computed: true, optional: false, required: false
  public get secureChannelControllerTokenTimeout() {
    return this.getStringAttribute('secure_channel_controller_token_timeout');
  }

  // secure_channel_se_token_timeout - computed: true, optional: false, required: false
  public get secureChannelSeTokenTimeout() {
    return this.getStringAttribute('secure_channel_se_token_timeout');
  }

  // seupgrade_copy_buffer_size - computed: true, optional: false, required: false
  public get seupgradeCopyBufferSize() {
    return this.getStringAttribute('seupgrade_copy_buffer_size');
  }

  // seupgrade_copy_pool_size - computed: true, optional: false, required: false
  public get seupgradeCopyPoolSize() {
    return this.getStringAttribute('seupgrade_copy_pool_size');
  }

  // seupgrade_fabric_pool_size - computed: true, optional: false, required: false
  public get seupgradeFabricPoolSize() {
    return this.getStringAttribute('seupgrade_fabric_pool_size');
  }

  // seupgrade_segroup_min_dead_timeout - computed: true, optional: false, required: false
  public get seupgradeSegroupMinDeadTimeout() {
    return this.getStringAttribute('seupgrade_segroup_min_dead_timeout');
  }

  // shared_ssl_certificates - computed: true, optional: false, required: false
  public get sharedSslCertificates() {
    return this.getStringAttribute('shared_ssl_certificates');
  }

  // skopeo_retry_interval - computed: true, optional: false, required: false
  public get skopeoRetryInterval() {
    return this.getStringAttribute('skopeo_retry_interval');
  }

  // skopeo_retry_limit - computed: true, optional: false, required: false
  public get skopeoRetryLimit() {
    return this.getStringAttribute('skopeo_retry_limit');
  }

  // soft_min_mem_per_se_limit - computed: true, optional: false, required: false
  public get softMinMemPerSeLimit() {
    return this.getStringAttribute('soft_min_mem_per_se_limit');
  }

  // ssl_certificate_expiry_warning_days - computed: true, optional: false, required: false
  public get sslCertificateExpiryWarningDays() {
    return this.getNumberListAttribute('ssl_certificate_expiry_warning_days');
  }

  // system_report_cleanup_interval - computed: true, optional: false, required: false
  public get systemReportCleanupInterval() {
    return this.getStringAttribute('system_report_cleanup_interval');
  }

  // system_report_limit - computed: true, optional: false, required: false
  public get systemReportLimit() {
    return this.getStringAttribute('system_report_limit');
  }

  // unresponsive_se_reboot - computed: true, optional: false, required: false
  public get unresponsiveSeReboot() {
    return this.getStringAttribute('unresponsive_se_reboot');
  }

  // update_dns_entry_retry_limit - computed: true, optional: false, required: false
  public get updateDnsEntryRetryLimit() {
    return this.getStringAttribute('update_dns_entry_retry_limit');
  }

  // update_dns_entry_timeout - computed: true, optional: false, required: false
  public get updateDnsEntryTimeout() {
    return this.getStringAttribute('update_dns_entry_timeout');
  }

  // upgrade_dns_ttl - computed: true, optional: false, required: false
  public get upgradeDnsTtl() {
    return this.getStringAttribute('upgrade_dns_ttl');
  }

  // upgrade_fat_se_lease_time - computed: true, optional: false, required: false
  public get upgradeFatSeLeaseTime() {
    return this.getStringAttribute('upgrade_fat_se_lease_time');
  }

  // upgrade_lease_time - computed: true, optional: false, required: false
  public get upgradeLeaseTime() {
    return this.getStringAttribute('upgrade_lease_time');
  }

  // upgrade_se_per_vs_scale_ops_txn_time - computed: true, optional: false, required: false
  public get upgradeSePerVsScaleOpsTxnTime() {
    return this.getStringAttribute('upgrade_se_per_vs_scale_ops_txn_time');
  }

  // user_agent_cache_config - computed: true, optional: false, required: false
  private _userAgentCacheConfig = new DataAviCloudpropertiesInfoControllerPropsUserAgentCacheConfigList(this, "user_agent_cache_config", true);
  public get userAgentCacheConfig() {
    return this._userAgentCacheConfig;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vnic_op_fail_time - computed: true, optional: false, required: false
  public get vnicOpFailTime() {
    return this.getStringAttribute('vnic_op_fail_time');
  }

  // vs_awaiting_se_timeout - computed: true, optional: false, required: false
  public get vsAwaitingSeTimeout() {
    return this.getStringAttribute('vs_awaiting_se_timeout');
  }

  // vs_key_rotate_period - computed: true, optional: false, required: false
  public get vsKeyRotatePeriod() {
    return this.getStringAttribute('vs_key_rotate_period');
  }

  // vs_scaleout_ready_check_interval - computed: true, optional: false, required: false
  public get vsScaleoutReadyCheckInterval() {
    return this.getStringAttribute('vs_scaleout_ready_check_interval');
  }

  // vs_se_attach_ip_fail - computed: true, optional: false, required: false
  public get vsSeAttachIpFail() {
    return this.getStringAttribute('vs_se_attach_ip_fail');
  }

  // vs_se_bootup_fail - computed: true, optional: false, required: false
  public get vsSeBootupFail() {
    return this.getStringAttribute('vs_se_bootup_fail');
  }

  // vs_se_bootup_fail_patch - computed: true, optional: false, required: false
  public get vsSeBootupFailPatch() {
    return this.getStringAttribute('vs_se_bootup_fail_patch');
  }

  // vs_se_create_fail - computed: true, optional: false, required: false
  public get vsSeCreateFail() {
    return this.getStringAttribute('vs_se_create_fail');
  }

  // vs_se_ping_fail - computed: true, optional: false, required: false
  public get vsSePingFail() {
    return this.getStringAttribute('vs_se_ping_fail');
  }

  // vs_se_vnic_fail - computed: true, optional: false, required: false
  public get vsSeVnicFail() {
    return this.getStringAttribute('vs_se_vnic_fail');
  }

  // vs_se_vnic_ip_fail - computed: true, optional: false, required: false
  public get vsSeVnicIpFail() {
    return this.getStringAttribute('vs_se_vnic_ip_fail');
  }

  // vsphere_ha_detection_timeout - computed: true, optional: false, required: false
  public get vsphereHaDetectionTimeout() {
    return this.getStringAttribute('vsphere_ha_detection_timeout');
  }

  // vsphere_ha_recovery_timeout - computed: true, optional: false, required: false
  public get vsphereHaRecoveryTimeout() {
    return this.getStringAttribute('vsphere_ha_recovery_timeout');
  }

  // vsphere_ha_timer_interval - computed: true, optional: false, required: false
  public get vsphereHaTimerInterval() {
    return this.getStringAttribute('vsphere_ha_timer_interval');
  }

  // warmstart_se_reconnect_wait_time - computed: true, optional: false, required: false
  public get warmstartSeReconnectWaitTime() {
    return this.getStringAttribute('warmstart_se_reconnect_wait_time');
  }

  // warmstart_vs_resync_wait_time - computed: true, optional: false, required: false
  public get warmstartVsResyncWaitTime() {
    return this.getStringAttribute('warmstart_vs_resync_wait_time');
  }
}

export class DataAviCloudpropertiesInfoControllerPropsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoControllerPropsOutputReference {
    return new DataAviCloudpropertiesInfoControllerPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfoFlavorPropsMeta {
}

export function dataAviCloudpropertiesInfoFlavorPropsMetaToTerraform(struct?: DataAviCloudpropertiesInfoFlavorPropsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoFlavorPropsMetaToHclTerraform(struct?: DataAviCloudpropertiesInfoFlavorPropsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoFlavorPropsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfoFlavorPropsMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfoFlavorPropsMeta | undefined) {
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

export class DataAviCloudpropertiesInfoFlavorPropsMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoFlavorPropsMetaOutputReference {
    return new DataAviCloudpropertiesInfoFlavorPropsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfoFlavorProps {
}

export function dataAviCloudpropertiesInfoFlavorPropsToTerraform(struct?: DataAviCloudpropertiesInfoFlavorProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoFlavorPropsToHclTerraform(struct?: DataAviCloudpropertiesInfoFlavorProps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoFlavorPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfoFlavorProps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfoFlavorProps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getStringAttribute('cost');
  }

  // disk_gb - computed: true, optional: false, required: false
  public get diskGb() {
    return this.getStringAttribute('disk_gb');
  }

  // enhanced_nw - computed: true, optional: false, required: false
  public get enhancedNw() {
    return this.getStringAttribute('enhanced_nw');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_recommended - computed: true, optional: false, required: false
  public get isRecommended() {
    return this.getStringAttribute('is_recommended');
  }

  // max_ip6s_per_nic - computed: true, optional: false, required: false
  public get maxIp6SPerNic() {
    return this.getStringAttribute('max_ip6s_per_nic');
  }

  // max_ips_per_nic - computed: true, optional: false, required: false
  public get maxIpsPerNic() {
    return this.getStringAttribute('max_ips_per_nic');
  }

  // max_nics - computed: true, optional: false, required: false
  public get maxNics() {
    return this.getStringAttribute('max_nics');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataAviCloudpropertiesInfoFlavorPropsMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getStringAttribute('public');
  }

  // ram_mb - computed: true, optional: false, required: false
  public get ramMb() {
    return this.getStringAttribute('ram_mb');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
}

export class DataAviCloudpropertiesInfoFlavorPropsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoFlavorPropsOutputReference {
    return new DataAviCloudpropertiesInfoFlavorPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudpropertiesInfo {
}

export function dataAviCloudpropertiesInfoToTerraform(struct?: DataAviCloudpropertiesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudpropertiesInfoToHclTerraform(struct?: DataAviCloudpropertiesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudpropertiesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudpropertiesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudpropertiesInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cca_props - computed: true, optional: false, required: false
  private _ccaProps = new DataAviCloudpropertiesInfoCcaPropsList(this, "cca_props", true);
  public get ccaProps() {
    return this._ccaProps;
  }

  // controller_props - computed: true, optional: false, required: false
  private _controllerProps = new DataAviCloudpropertiesInfoControllerPropsList(this, "controller_props", true);
  public get controllerProps() {
    return this._controllerProps;
  }

  // flavor_props - computed: true, optional: false, required: false
  private _flavorProps = new DataAviCloudpropertiesInfoFlavorPropsList(this, "flavor_props", false);
  public get flavorProps() {
    return this._flavorProps;
  }

  // flavor_regex_filter - computed: true, optional: false, required: false
  public get flavorRegexFilter() {
    return this.getStringAttribute('flavor_regex_filter');
  }

  // htypes - computed: true, optional: false, required: false
  public get htypes() {
    return this.getListAttribute('htypes');
  }

  // vtype - computed: true, optional: false, required: false
  public get vtype() {
    return this.getStringAttribute('vtype');
  }
}

export class DataAviCloudpropertiesInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudpropertiesInfoOutputReference {
    return new DataAviCloudpropertiesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/cloudproperties avi_cloudproperties}
*/
export class DataAviCloudproperties extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_cloudproperties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviCloudproperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviCloudproperties to import
  * @param importFromId The id of the existing DataAviCloudproperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/cloudproperties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviCloudproperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_cloudproperties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/cloudproperties avi_cloudproperties} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviCloudpropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviCloudpropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_cloudproperties',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
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
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cc_props - computed: true, optional: false, required: false
  private _ccProps = new DataAviCloudpropertiesCcPropsList(this, "cc_props", true);
  public get ccProps() {
    return this._ccProps;
  }

  // cc_vtypes - computed: true, optional: false, required: false
  public get ccVtypes() {
    return this.getListAttribute('cc_vtypes');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviCloudpropertiesConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // hyp_props - computed: true, optional: false, required: false
  private _hypProps = new DataAviCloudpropertiesHypPropsList(this, "hyp_props", false);
  public get hypProps() {
    return this._hypProps;
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

  // info - computed: true, optional: false, required: false
  private _info = new DataAviCloudpropertiesInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
