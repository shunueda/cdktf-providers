// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightVnicEthAdapterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#account_moid DataIntersightVnicEthAdapterPolicy#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Enables advanced filtering on the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#advanced_filter DataIntersightVnicEthAdapterPolicy#advanced_filter}
  */
  readonly advancedFilter?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#create_time DataIntersightVnicEthAdapterPolicy#create_time}
  */
  readonly createTime?: string;
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#description DataIntersightVnicEthAdapterPolicy#description}
  */
  readonly description?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#domain_group_moid DataIntersightVnicEthAdapterPolicy#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Enables EtherChannel Pinning to combine multiple physical links between two network switches into a single logical link. Transmit Queue Count should be at least 2 to enable ether channel pinning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ether_channel_pinning_enabled DataIntersightVnicEthAdapterPolicy#ether_channel_pinning_enabled}
  */
  readonly etherChannelPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * GENEVE offload protocol allows you to create logical networks that span physical network boundaries by allowing any information to be encoded in a packet and passed between tunnel endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#geneve_enabled DataIntersightVnicEthAdapterPolicy#geneve_enabled}
  */
  readonly geneveEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#id DataIntersightVnicEthAdapterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables Interrupt Scaling on the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#interrupt_scaling DataIntersightVnicEthAdapterPolicy#interrupt_scaling}
  */
  readonly interruptScaling?: boolean | cdktf.IResolvable;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#mod_time DataIntersightVnicEthAdapterPolicy#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Name of the concrete policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#name DataIntersightVnicEthAdapterPolicy#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#owners DataIntersightVnicEthAdapterPolicy#owners}
  */
  readonly owners?: string[];
  /**
  * Receive Side Scaling allows the incoming traffic to be spread across multiple CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#rss_settings DataIntersightVnicEthAdapterPolicy#rss_settings}
  */
  readonly rssSettings?: boolean | cdktf.IResolvable;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#shared_scope DataIntersightVnicEthAdapterPolicy#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Uplink Failback Timeout in seconds when uplink failover is enabled for a vNIC. After a vNIC has started using its secondary interface, this setting controls how long the primary interface must be available before the system resumes using the primary interface for the vNIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#uplink_failback_timeout DataIntersightVnicEthAdapterPolicy#uplink_failback_timeout}
  */
  readonly uplinkFailbackTimeout?: number;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ancestors DataIntersightVnicEthAdapterPolicy#ancestors}
  */
  readonly ancestors?: DataIntersightVnicEthAdapterPolicyAncestors[] | cdktf.IResolvable;
  /**
  * arfs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#arfs_settings DataIntersightVnicEthAdapterPolicy#arfs_settings}
  */
  readonly arfsSettings?: DataIntersightVnicEthAdapterPolicyArfsSettings;
  /**
  * completion_queue_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#completion_queue_settings DataIntersightVnicEthAdapterPolicy#completion_queue_settings}
  */
  readonly completionQueueSettings?: DataIntersightVnicEthAdapterPolicyCompletionQueueSettings;
  /**
  * interrupt_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#interrupt_settings DataIntersightVnicEthAdapterPolicy#interrupt_settings}
  */
  readonly interruptSettings?: DataIntersightVnicEthAdapterPolicyInterruptSettings;
  /**
  * nvgre_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#nvgre_settings DataIntersightVnicEthAdapterPolicy#nvgre_settings}
  */
  readonly nvgreSettings?: DataIntersightVnicEthAdapterPolicyNvgreSettings;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#organization DataIntersightVnicEthAdapterPolicy#organization}
  */
  readonly organization?: DataIntersightVnicEthAdapterPolicyOrganization;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#parent DataIntersightVnicEthAdapterPolicy#parent}
  */
  readonly parent?: DataIntersightVnicEthAdapterPolicyParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#permission_resources DataIntersightVnicEthAdapterPolicy#permission_resources}
  */
  readonly permissionResources?: DataIntersightVnicEthAdapterPolicyPermissionResources[] | cdktf.IResolvable;
  /**
  * ptp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ptp_settings DataIntersightVnicEthAdapterPolicy#ptp_settings}
  */
  readonly ptpSettings?: DataIntersightVnicEthAdapterPolicyPtpSettings;
  /**
  * roce_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#roce_settings DataIntersightVnicEthAdapterPolicy#roce_settings}
  */
  readonly roceSettings?: DataIntersightVnicEthAdapterPolicyRoceSettings;
  /**
  * rss_hash_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#rss_hash_settings DataIntersightVnicEthAdapterPolicy#rss_hash_settings}
  */
  readonly rssHashSettings?: DataIntersightVnicEthAdapterPolicyRssHashSettings;
  /**
  * rx_queue_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#rx_queue_settings DataIntersightVnicEthAdapterPolicy#rx_queue_settings}
  */
  readonly rxQueueSettings?: DataIntersightVnicEthAdapterPolicyRxQueueSettings;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#tags DataIntersightVnicEthAdapterPolicy#tags}
  */
  readonly tags?: DataIntersightVnicEthAdapterPolicyTags[] | cdktf.IResolvable;
  /**
  * tcp_offload_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#tcp_offload_settings DataIntersightVnicEthAdapterPolicy#tcp_offload_settings}
  */
  readonly tcpOffloadSettings?: DataIntersightVnicEthAdapterPolicyTcpOffloadSettings;
  /**
  * tx_queue_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#tx_queue_settings DataIntersightVnicEthAdapterPolicy#tx_queue_settings}
  */
  readonly txQueueSettings?: DataIntersightVnicEthAdapterPolicyTxQueueSettings;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#version_context DataIntersightVnicEthAdapterPolicy#version_context}
  */
  readonly versionContext?: DataIntersightVnicEthAdapterPolicyVersionContext;
  /**
  * vxlan_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#vxlan_settings DataIntersightVnicEthAdapterPolicy#vxlan_settings}
  */
  readonly vxlanSettings?: DataIntersightVnicEthAdapterPolicyVxlanSettings;
}
export interface DataIntersightVnicEthAdapterPolicyResultsAncestors {
}

export function dataIntersightVnicEthAdapterPolicyResultsAncestorsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsAncestorsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsAncestorsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsArfsSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsArfsSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsArfsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsArfsSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsArfsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsArfsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsArfsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsArfsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsArfsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsArfsSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsArfsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // nr_count - computed: true, optional: false, required: false
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ring_size - computed: true, optional: false, required: false
  public get ringSize() {
    return this.getNumberAttribute('ring_size');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsInterruptSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsInterruptSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsInterruptSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsInterruptSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsInterruptSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsInterruptSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsInterruptSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsInterruptSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // coalescing_time - computed: true, optional: false, required: false
  public get coalescingTime() {
    return this.getNumberAttribute('coalescing_time');
  }

  // coalescing_type - computed: true, optional: false, required: false
  public get coalescingType() {
    return this.getStringAttribute('coalescing_type');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // nr_count - computed: true, optional: false, required: false
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsInterruptSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsInterruptSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsInterruptSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsNvgreSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsNvgreSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsNvgreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsNvgreSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsNvgreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsNvgreSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsNvgreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsNvgreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsNvgreSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsNvgreSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsNvgreSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsOrganization {
}

export function dataIntersightVnicEthAdapterPolicyResultsOrganizationToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsOrganizationToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsOrganizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsOrganizationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsOrganizationOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsParent {
}

export function dataIntersightVnicEthAdapterPolicyResultsParentToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsParentToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsParentOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsPermissionResources {
}

export function dataIntersightVnicEthAdapterPolicyResultsPermissionResourcesToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsPermissionResourcesToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsPermissionResourcesOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsPtpSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsPtpSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsPtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsPtpSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsPtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsPtpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsPtpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsPtpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsPtpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsPtpSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsPtpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsRoceSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsRoceSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsRoceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsRoceSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsRoceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsRoceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsRoceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsRoceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // class_of_service - computed: true, optional: false, required: false
  public get classOfService() {
    return this.getNumberAttribute('class_of_service');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // memory_regions - computed: true, optional: false, required: false
  public get memoryRegions() {
    return this.getNumberAttribute('memory_regions');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getNumberAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // queue_pairs - computed: true, optional: false, required: false
  public get queuePairs() {
    return this.getNumberAttribute('queue_pairs');
  }

  // resource_groups - computed: true, optional: false, required: false
  public get resourceGroups() {
    return this.getNumberAttribute('resource_groups');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsRoceSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsRoceSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsRoceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsRssHashSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsRssHashSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsRssHashSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsRssHashSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsRssHashSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsRssHashSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsRssHashSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsRssHashSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // ipv4_hash - computed: true, optional: false, required: false
  public get ipv4Hash() {
    return this.getBooleanAttribute('ipv4_hash');
  }

  // ipv6_ext_hash - computed: true, optional: false, required: false
  public get ipv6ExtHash() {
    return this.getBooleanAttribute('ipv6_ext_hash');
  }

  // ipv6_hash - computed: true, optional: false, required: false
  public get ipv6Hash() {
    return this.getBooleanAttribute('ipv6_hash');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // tcp_ipv4_hash - computed: true, optional: false, required: false
  public get tcpIpv4Hash() {
    return this.getBooleanAttribute('tcp_ipv4_hash');
  }

  // tcp_ipv6_ext_hash - computed: true, optional: false, required: false
  public get tcpIpv6ExtHash() {
    return this.getBooleanAttribute('tcp_ipv6_ext_hash');
  }

  // tcp_ipv6_hash - computed: true, optional: false, required: false
  public get tcpIpv6Hash() {
    return this.getBooleanAttribute('tcp_ipv6_hash');
  }

  // udp_ipv4_hash - computed: true, optional: false, required: false
  public get udpIpv4Hash() {
    return this.getBooleanAttribute('udp_ipv4_hash');
  }

  // udp_ipv6_hash - computed: true, optional: false, required: false
  public get udpIpv6Hash() {
    return this.getBooleanAttribute('udp_ipv6_hash');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsRssHashSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsRssHashSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsRssHashSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsRxQueueSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsRxQueueSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsRxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsRxQueueSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsRxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsRxQueueSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsRxQueueSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsRxQueueSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // nr_count - computed: true, optional: false, required: false
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ring_size - computed: true, optional: false, required: false
  public get ringSize() {
    return this.getNumberAttribute('ring_size');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsRxQueueSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsRxQueueSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsRxQueueSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitions {
}

export function dataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsTagsDefinition {
}

export function dataIntersightVnicEthAdapterPolicyResultsTagsDefinitionToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsTagsDefinitionToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsTagsDefinitionOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsTags {
}

export function dataIntersightVnicEthAdapterPolicyResultsTagsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsTagsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightVnicEthAdapterPolicyResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightVnicEthAdapterPolicyResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // sys_tag - computed: true, optional: false, required: false
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
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

export class DataIntersightVnicEthAdapterPolicyResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsTagsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // large_receive - computed: true, optional: false, required: false
  public get largeReceive() {
    return this.getBooleanAttribute('large_receive');
  }

  // large_send - computed: true, optional: false, required: false
  public get largeSend() {
    return this.getBooleanAttribute('large_send');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // rx_checksum - computed: true, optional: false, required: false
  public get rxChecksum() {
    return this.getBooleanAttribute('rx_checksum');
  }

  // tx_checksum - computed: true, optional: false, required: false
  public get txChecksum() {
    return this.getBooleanAttribute('tx_checksum');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsTxQueueSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsTxQueueSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsTxQueueSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsTxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsTxQueueSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsTxQueueSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsTxQueueSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // nr_count - computed: true, optional: false, required: false
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ring_size - computed: true, optional: false, required: false
  public get ringSize() {
    return this.getNumberAttribute('ring_size');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsTxQueueSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsTxQueueSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsTxQueueSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMos {
}

export function dataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMo {
}

export function dataIntersightVnicEthAdapterPolicyResultsVersionContextRefMoToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMoOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsVersionContext {
}

export function dataIntersightVnicEthAdapterPolicyResultsVersionContextToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsVersionContextToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightVnicEthAdapterPolicyResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightVnicEthAdapterPolicyResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsVersionContextOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResultsVxlanSettings {
}

export function dataIntersightVnicEthAdapterPolicyResultsVxlanSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVxlanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsVxlanSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResultsVxlanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsVxlanSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResultsVxlanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResultsVxlanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsVxlanSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsVxlanSettingsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsVxlanSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyResults {
}

export function dataIntersightVnicEthAdapterPolicyResultsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightVnicEthAdapterPolicyResultsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightVnicEthAdapterPolicyResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // advanced_filter - computed: true, optional: false, required: false
  public get advancedFilter() {
    return this.getBooleanAttribute('advanced_filter');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightVnicEthAdapterPolicyResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // arfs_settings - computed: true, optional: false, required: false
  private _arfsSettings = new DataIntersightVnicEthAdapterPolicyResultsArfsSettingsList(this, "arfs_settings", false);
  public get arfsSettings() {
    return this._arfsSettings;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // completion_queue_settings - computed: true, optional: false, required: false
  private _completionQueueSettings = new DataIntersightVnicEthAdapterPolicyResultsCompletionQueueSettingsList(this, "completion_queue_settings", false);
  public get completionQueueSettings() {
    return this._completionQueueSettings;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // ether_channel_pinning_enabled - computed: true, optional: false, required: false
  public get etherChannelPinningEnabled() {
    return this.getBooleanAttribute('ether_channel_pinning_enabled');
  }

  // geneve_enabled - computed: true, optional: false, required: false
  public get geneveEnabled() {
    return this.getBooleanAttribute('geneve_enabled');
  }

  // interrupt_scaling - computed: true, optional: false, required: false
  public get interruptScaling() {
    return this.getBooleanAttribute('interrupt_scaling');
  }

  // interrupt_settings - computed: true, optional: false, required: false
  private _interruptSettings = new DataIntersightVnicEthAdapterPolicyResultsInterruptSettingsList(this, "interrupt_settings", false);
  public get interruptSettings() {
    return this._interruptSettings;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nvgre_settings - computed: true, optional: false, required: false
  private _nvgreSettings = new DataIntersightVnicEthAdapterPolicyResultsNvgreSettingsList(this, "nvgre_settings", false);
  public get nvgreSettings() {
    return this._nvgreSettings;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // organization - computed: true, optional: false, required: false
  private _organization = new DataIntersightVnicEthAdapterPolicyResultsOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightVnicEthAdapterPolicyResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightVnicEthAdapterPolicyResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // ptp_settings - computed: true, optional: false, required: false
  private _ptpSettings = new DataIntersightVnicEthAdapterPolicyResultsPtpSettingsList(this, "ptp_settings", false);
  public get ptpSettings() {
    return this._ptpSettings;
  }

  // roce_settings - computed: true, optional: false, required: false
  private _roceSettings = new DataIntersightVnicEthAdapterPolicyResultsRoceSettingsList(this, "roce_settings", false);
  public get roceSettings() {
    return this._roceSettings;
  }

  // rss_hash_settings - computed: true, optional: false, required: false
  private _rssHashSettings = new DataIntersightVnicEthAdapterPolicyResultsRssHashSettingsList(this, "rss_hash_settings", false);
  public get rssHashSettings() {
    return this._rssHashSettings;
  }

  // rss_settings - computed: true, optional: false, required: false
  public get rssSettings() {
    return this.getBooleanAttribute('rss_settings');
  }

  // rx_queue_settings - computed: true, optional: false, required: false
  private _rxQueueSettings = new DataIntersightVnicEthAdapterPolicyResultsRxQueueSettingsList(this, "rx_queue_settings", false);
  public get rxQueueSettings() {
    return this._rxQueueSettings;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightVnicEthAdapterPolicyResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tcp_offload_settings - computed: true, optional: false, required: false
  private _tcpOffloadSettings = new DataIntersightVnicEthAdapterPolicyResultsTcpOffloadSettingsList(this, "tcp_offload_settings", false);
  public get tcpOffloadSettings() {
    return this._tcpOffloadSettings;
  }

  // tx_queue_settings - computed: true, optional: false, required: false
  private _txQueueSettings = new DataIntersightVnicEthAdapterPolicyResultsTxQueueSettingsList(this, "tx_queue_settings", false);
  public get txQueueSettings() {
    return this._txQueueSettings;
  }

  // uplink_failback_timeout - computed: true, optional: false, required: false
  public get uplinkFailbackTimeout() {
    return this.getNumberAttribute('uplink_failback_timeout');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightVnicEthAdapterPolicyResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vxlan_settings - computed: true, optional: false, required: false
  private _vxlanSettings = new DataIntersightVnicEthAdapterPolicyResultsVxlanSettingsList(this, "vxlan_settings", false);
  public get vxlanSettings() {
    return this._vxlanSettings;
  }
}

export class DataIntersightVnicEthAdapterPolicyResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyResultsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyAncestorsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyAncestorsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightVnicEthAdapterPolicyAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightVnicEthAdapterPolicyAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyAncestorsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyArfsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Status of Accelerated Receive Flow Steering on the virtual ethernet interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#enabled DataIntersightVnicEthAdapterPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightVnicEthAdapterPolicyArfsSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyArfsSettingsOutputReference | DataIntersightVnicEthAdapterPolicyArfsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightVnicEthAdapterPolicyArfsSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyArfsSettingsOutputReference | DataIntersightVnicEthAdapterPolicyArfsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
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
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyArfsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyArfsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyArfsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._enabled = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._enabled = value.enabled;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enabled - computed: false, optional: true, required: false
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightVnicEthAdapterPolicyCompletionQueueSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The number of completion queue resources to allocate. In general, the number of completion queue resources to allocate is equal to the number of transmit queue resources plus the number of receive queue resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#nr_count DataIntersightVnicEthAdapterPolicy#nr_count}
  */
  readonly nrCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The number of descriptors in each completion queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ring_size DataIntersightVnicEthAdapterPolicy#ring_size}
  */
  readonly ringSize?: number;
}

export function dataIntersightVnicEthAdapterPolicyCompletionQueueSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyCompletionQueueSettingsOutputReference | DataIntersightVnicEthAdapterPolicyCompletionQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    nr_count: cdktf.numberToTerraform(struct!.nrCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ring_size: cdktf.numberToTerraform(struct!.ringSize),
  }
}


export function dataIntersightVnicEthAdapterPolicyCompletionQueueSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyCompletionQueueSettingsOutputReference | DataIntersightVnicEthAdapterPolicyCompletionQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nr_count: {
      value: cdktf.numberToHclTerraform(struct!.nrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_size: {
      value: cdktf.numberToHclTerraform(struct!.ringSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyCompletionQueueSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyCompletionQueueSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._nrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrCount = this._nrCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._ringSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringSize = this._ringSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyCompletionQueueSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._nrCount = undefined;
      this._objectType = undefined;
      this._ringSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._nrCount = value.nrCount;
      this._objectType = value.objectType;
      this._ringSize = value.ringSize;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // nr_count - computed: false, optional: true, required: false
  private _nrCount?: number; 
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }
  public set nrCount(value: number) {
    this._nrCount = value;
  }
  public resetNrCount() {
    this._nrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrCountInput() {
    return this._nrCount;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // ring_size - computed: false, optional: true, required: false
  private _ringSize?: number; 
  public get ringSize() {
    return this.getNumberAttribute('ring_size');
  }
  public set ringSize(value: number) {
    this._ringSize = value;
  }
  public resetRingSize() {
    this._ringSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringSizeInput() {
    return this._ringSize;
  }
}
export interface DataIntersightVnicEthAdapterPolicyInterruptSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The time to wait between interrupts or the idle period that must be encountered before an interrupt is sent. To turn off interrupt coalescing, enter 0 (zero) in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#coalescing_time DataIntersightVnicEthAdapterPolicy#coalescing_time}
  */
  readonly coalescingTime?: number;
  /**
  * Interrupt Coalescing Type. This can be one of the following:- MIN  - The system waits for the time specified in the Coalescing Time field before sending another interrupt event IDLE - The system does not send an interrupt until there is a period of no activity lasting as least as long as the time specified in the Coalescing Time field.
  * * `MIN` - The system waits for the time specified in the Coalescing Time field before sending another interrupt event.
  * * `IDLE` - The system does not send an interrupt until there is a period of no activity lasting as least as long as the time specified in the Coalescing Time field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#coalescing_type DataIntersightVnicEthAdapterPolicy#coalescing_type}
  */
  readonly coalescingType?: string;
  /**
  * Preferred driver interrupt mode. This can be one of the following:- MSIx - Message Signaled Interrupts (MSI) with the optional extension. MSI  - MSI only. INTx - PCI INTx interrupts. MSIx is the recommended option.
  * * `MSIx` - Message Signaled Interrupt (MSI) mechanism with the optional extension (MSIx). MSIx is the recommended and default option.
  * * `MSI` - Message Signaled Interrupt (MSI) mechanism that treats messages as interrupts.
  * * `INTx` - Line-based interrupt (INTx) mechanism similar to the one used in Legacy systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#mode DataIntersightVnicEthAdapterPolicy#mode}
  */
  readonly mode?: string;
  /**
  * The number of interrupt resources to allocate. Typical value is be equal to the number of completion queue resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#nr_count DataIntersightVnicEthAdapterPolicy#nr_count}
  */
  readonly nrCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightVnicEthAdapterPolicyInterruptSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyInterruptSettingsOutputReference | DataIntersightVnicEthAdapterPolicyInterruptSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    coalescing_time: cdktf.numberToTerraform(struct!.coalescingTime),
    coalescing_type: cdktf.stringToTerraform(struct!.coalescingType),
    mode: cdktf.stringToTerraform(struct!.mode),
    nr_count: cdktf.numberToTerraform(struct!.nrCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightVnicEthAdapterPolicyInterruptSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyInterruptSettingsOutputReference | DataIntersightVnicEthAdapterPolicyInterruptSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coalescing_time: {
      value: cdktf.numberToHclTerraform(struct!.coalescingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    coalescing_type: {
      value: cdktf.stringToHclTerraform(struct!.coalescingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nr_count: {
      value: cdktf.numberToHclTerraform(struct!.nrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyInterruptSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyInterruptSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._coalescingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.coalescingTime = this._coalescingTime;
    }
    if (this._coalescingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.coalescingType = this._coalescingType;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrCount = this._nrCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyInterruptSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._coalescingTime = undefined;
      this._coalescingType = undefined;
      this._mode = undefined;
      this._nrCount = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._coalescingTime = value.coalescingTime;
      this._coalescingType = value.coalescingType;
      this._mode = value.mode;
      this._nrCount = value.nrCount;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // coalescing_time - computed: false, optional: true, required: false
  private _coalescingTime?: number; 
  public get coalescingTime() {
    return this.getNumberAttribute('coalescing_time');
  }
  public set coalescingTime(value: number) {
    this._coalescingTime = value;
  }
  public resetCoalescingTime() {
    this._coalescingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coalescingTimeInput() {
    return this._coalescingTime;
  }

  // coalescing_type - computed: false, optional: true, required: false
  private _coalescingType?: string; 
  public get coalescingType() {
    return this.getStringAttribute('coalescing_type');
  }
  public set coalescingType(value: string) {
    this._coalescingType = value;
  }
  public resetCoalescingType() {
    this._coalescingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coalescingTypeInput() {
    return this._coalescingType;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // nr_count - computed: false, optional: true, required: false
  private _nrCount?: number; 
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }
  public set nrCount(value: number) {
    this._nrCount = value;
  }
  public resetNrCount() {
    this._nrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrCountInput() {
    return this._nrCount;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightVnicEthAdapterPolicyNvgreSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Status of the Network Virtualization using Generic Routing Encapsulation on the virtual ethernet interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#enabled DataIntersightVnicEthAdapterPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightVnicEthAdapterPolicyNvgreSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyNvgreSettingsOutputReference | DataIntersightVnicEthAdapterPolicyNvgreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightVnicEthAdapterPolicyNvgreSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyNvgreSettingsOutputReference | DataIntersightVnicEthAdapterPolicyNvgreSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
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
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyNvgreSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyNvgreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyNvgreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._enabled = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._enabled = value.enabled;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enabled - computed: false, optional: true, required: false
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightVnicEthAdapterPolicyOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyOrganizationToTerraform(struct?: DataIntersightVnicEthAdapterPolicyOrganizationOutputReference | DataIntersightVnicEthAdapterPolicyOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyOrganizationToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyOrganizationOutputReference | DataIntersightVnicEthAdapterPolicyOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightVnicEthAdapterPolicyParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyParentToTerraform(struct?: DataIntersightVnicEthAdapterPolicyParentOutputReference | DataIntersightVnicEthAdapterPolicyParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyParentToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyParentOutputReference | DataIntersightVnicEthAdapterPolicyParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightVnicEthAdapterPolicyPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyPermissionResourcesToTerraform(struct?: DataIntersightVnicEthAdapterPolicyPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyPermissionResourcesToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightVnicEthAdapterPolicyPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightVnicEthAdapterPolicyPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyPermissionResourcesOutputReference {
    return new DataIntersightVnicEthAdapterPolicyPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyPtpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Status of Precision Time Protocol (PTP) on the virtual ethernet interface. PTP can be enabled only on one vNIC on an adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#enabled DataIntersightVnicEthAdapterPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightVnicEthAdapterPolicyPtpSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyPtpSettingsOutputReference | DataIntersightVnicEthAdapterPolicyPtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightVnicEthAdapterPolicyPtpSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyPtpSettingsOutputReference | DataIntersightVnicEthAdapterPolicyPtpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
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
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyPtpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyPtpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyPtpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._enabled = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._enabled = value.enabled;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enabled - computed: false, optional: true, required: false
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightVnicEthAdapterPolicyRoceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Class of Service for RoCE on this virtual interface.
  * * `5` - RDMA CoS Service Level 5.
  * * `1` - RDMA CoS Service Level 1.
  * * `2` - RDMA CoS Service Level 2.
  * * `4` - RDMA CoS Service Level 4.
  * * `6` - RDMA CoS Service Level 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_of_service DataIntersightVnicEthAdapterPolicy#class_of_service}
  */
  readonly classOfService?: number;
  /**
  * If enabled sets RDMA over Converged Ethernet (RoCE) on this virtual interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#enabled DataIntersightVnicEthAdapterPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of memory regions per adapter. Recommended value = integer power of 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#memory_regions DataIntersightVnicEthAdapterPolicy#memory_regions}
  */
  readonly memoryRegions?: number;
  /**
  * Configure RDMA over Converged Ethernet (RoCE) version on the virtual interface. Only RoCEv1 is supported on Cisco VIC 13xx series adapters and only RoCEv2 is supported on Cisco VIC 14xx series adapters.
  * * `1` - RDMA over Converged Ethernet Protocol Version 1.
  * * `2` - RDMA over Converged Ethernet Protocol Version 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#nr_version DataIntersightVnicEthAdapterPolicy#nr_version}
  */
  readonly nrVersion?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The number of queue pairs per adapter. Recommended value = integer power of 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#queue_pairs DataIntersightVnicEthAdapterPolicy#queue_pairs}
  */
  readonly queuePairs?: number;
  /**
  * The number of resource groups per adapter. Recommended value = be an integer power of 2 greater than or equal to the number of CPU cores on the system for optimum performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#resource_groups DataIntersightVnicEthAdapterPolicy#resource_groups}
  */
  readonly resourceGroups?: number;
}

export function dataIntersightVnicEthAdapterPolicyRoceSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyRoceSettingsOutputReference | DataIntersightVnicEthAdapterPolicyRoceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    class_of_service: cdktf.numberToTerraform(struct!.classOfService),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    memory_regions: cdktf.numberToTerraform(struct!.memoryRegions),
    nr_version: cdktf.numberToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    queue_pairs: cdktf.numberToTerraform(struct!.queuePairs),
    resource_groups: cdktf.numberToTerraform(struct!.resourceGroups),
  }
}


export function dataIntersightVnicEthAdapterPolicyRoceSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyRoceSettingsOutputReference | DataIntersightVnicEthAdapterPolicyRoceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_of_service: {
      value: cdktf.numberToHclTerraform(struct!.classOfService),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_regions: {
      value: cdktf.numberToHclTerraform(struct!.memoryRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nr_version: {
      value: cdktf.numberToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_pairs: {
      value: cdktf.numberToHclTerraform(struct!.queuePairs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_groups: {
      value: cdktf.numberToHclTerraform(struct!.resourceGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyRoceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyRoceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._classOfService !== undefined) {
      hasAnyValues = true;
      internalValueResult.classOfService = this._classOfService;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._memoryRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRegions = this._memoryRegions;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._queuePairs !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuePairs = this._queuePairs;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyRoceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._classOfService = undefined;
      this._enabled = undefined;
      this._memoryRegions = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._queuePairs = undefined;
      this._resourceGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._classOfService = value.classOfService;
      this._enabled = value.enabled;
      this._memoryRegions = value.memoryRegions;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._queuePairs = value.queuePairs;
      this._resourceGroups = value.resourceGroups;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // class_of_service - computed: false, optional: true, required: false
  private _classOfService?: number; 
  public get classOfService() {
    return this.getNumberAttribute('class_of_service');
  }
  public set classOfService(value: number) {
    this._classOfService = value;
  }
  public resetClassOfService() {
    this._classOfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classOfServiceInput() {
    return this._classOfService;
  }

  // enabled - computed: false, optional: true, required: false
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

  // memory_regions - computed: false, optional: true, required: false
  private _memoryRegions?: number; 
  public get memoryRegions() {
    return this.getNumberAttribute('memory_regions');
  }
  public set memoryRegions(value: number) {
    this._memoryRegions = value;
  }
  public resetMemoryRegions() {
    this._memoryRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRegionsInput() {
    return this._memoryRegions;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: number; 
  public get nrVersion() {
    return this.getNumberAttribute('nr_version');
  }
  public set nrVersion(value: number) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // queue_pairs - computed: false, optional: true, required: false
  private _queuePairs?: number; 
  public get queuePairs() {
    return this.getNumberAttribute('queue_pairs');
  }
  public set queuePairs(value: number) {
    this._queuePairs = value;
  }
  public resetQueuePairs() {
    this._queuePairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePairsInput() {
    return this._queuePairs;
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: number; 
  public get resourceGroups() {
    return this.getNumberAttribute('resource_groups');
  }
  public set resourceGroups(value: number) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }
}
export interface DataIntersightVnicEthAdapterPolicyRssHashSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * When enabled, the IPv4 address is used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ipv4_hash DataIntersightVnicEthAdapterPolicy#ipv4_hash}
  */
  readonly ipv4Hash?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the IPv6 extensions are used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ipv6_ext_hash DataIntersightVnicEthAdapterPolicy#ipv6_ext_hash}
  */
  readonly ipv6ExtHash?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the IPv6 address is used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ipv6_hash DataIntersightVnicEthAdapterPolicy#ipv6_hash}
  */
  readonly ipv6Hash?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * When enabled, both the IPv4 address and TCP port number are used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#tcp_ipv4_hash DataIntersightVnicEthAdapterPolicy#tcp_ipv4_hash}
  */
  readonly tcpIpv4Hash?: boolean | cdktf.IResolvable;
  /**
  * When enabled, both the IPv6 extensions and TCP port number are used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#tcp_ipv6_ext_hash DataIntersightVnicEthAdapterPolicy#tcp_ipv6_ext_hash}
  */
  readonly tcpIpv6ExtHash?: boolean | cdktf.IResolvable;
  /**
  * When enabled, both the IPv6 address and TCP port number are used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#tcp_ipv6_hash DataIntersightVnicEthAdapterPolicy#tcp_ipv6_hash}
  */
  readonly tcpIpv6Hash?: boolean | cdktf.IResolvable;
  /**
  * When enabled, both the IPv4 address and UDP port number are used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#udp_ipv4_hash DataIntersightVnicEthAdapterPolicy#udp_ipv4_hash}
  */
  readonly udpIpv4Hash?: boolean | cdktf.IResolvable;
  /**
  * When enabled, both the IPv6 address and UDP port number are used for traffic distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#udp_ipv6_hash DataIntersightVnicEthAdapterPolicy#udp_ipv6_hash}
  */
  readonly udpIpv6Hash?: boolean | cdktf.IResolvable;
}

export function dataIntersightVnicEthAdapterPolicyRssHashSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyRssHashSettingsOutputReference | DataIntersightVnicEthAdapterPolicyRssHashSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ipv4_hash: cdktf.booleanToTerraform(struct!.ipv4Hash),
    ipv6_ext_hash: cdktf.booleanToTerraform(struct!.ipv6ExtHash),
    ipv6_hash: cdktf.booleanToTerraform(struct!.ipv6Hash),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    tcp_ipv4_hash: cdktf.booleanToTerraform(struct!.tcpIpv4Hash),
    tcp_ipv6_ext_hash: cdktf.booleanToTerraform(struct!.tcpIpv6ExtHash),
    tcp_ipv6_hash: cdktf.booleanToTerraform(struct!.tcpIpv6Hash),
    udp_ipv4_hash: cdktf.booleanToTerraform(struct!.udpIpv4Hash),
    udp_ipv6_hash: cdktf.booleanToTerraform(struct!.udpIpv6Hash),
  }
}


export function dataIntersightVnicEthAdapterPolicyRssHashSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyRssHashSettingsOutputReference | DataIntersightVnicEthAdapterPolicyRssHashSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_hash: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4Hash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_ext_hash: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6ExtHash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_hash: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Hash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_ipv4_hash: {
      value: cdktf.booleanToHclTerraform(struct!.tcpIpv4Hash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_ipv6_ext_hash: {
      value: cdktf.booleanToHclTerraform(struct!.tcpIpv6ExtHash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_ipv6_hash: {
      value: cdktf.booleanToHclTerraform(struct!.tcpIpv6Hash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    udp_ipv4_hash: {
      value: cdktf.booleanToHclTerraform(struct!.udpIpv4Hash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    udp_ipv6_hash: {
      value: cdktf.booleanToHclTerraform(struct!.udpIpv6Hash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyRssHashSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyRssHashSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._ipv4Hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Hash = this._ipv4Hash;
    }
    if (this._ipv6ExtHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ExtHash = this._ipv6ExtHash;
    }
    if (this._ipv6Hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Hash = this._ipv6Hash;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._tcpIpv4Hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpIpv4Hash = this._tcpIpv4Hash;
    }
    if (this._tcpIpv6ExtHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpIpv6ExtHash = this._tcpIpv6ExtHash;
    }
    if (this._tcpIpv6Hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpIpv6Hash = this._tcpIpv6Hash;
    }
    if (this._udpIpv4Hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpIpv4Hash = this._udpIpv4Hash;
    }
    if (this._udpIpv6Hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpIpv6Hash = this._udpIpv6Hash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyRssHashSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._ipv4Hash = undefined;
      this._ipv6ExtHash = undefined;
      this._ipv6Hash = undefined;
      this._objectType = undefined;
      this._tcpIpv4Hash = undefined;
      this._tcpIpv6ExtHash = undefined;
      this._tcpIpv6Hash = undefined;
      this._udpIpv4Hash = undefined;
      this._udpIpv6Hash = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._ipv4Hash = value.ipv4Hash;
      this._ipv6ExtHash = value.ipv6ExtHash;
      this._ipv6Hash = value.ipv6Hash;
      this._objectType = value.objectType;
      this._tcpIpv4Hash = value.tcpIpv4Hash;
      this._tcpIpv6ExtHash = value.tcpIpv6ExtHash;
      this._tcpIpv6Hash = value.tcpIpv6Hash;
      this._udpIpv4Hash = value.udpIpv4Hash;
      this._udpIpv6Hash = value.udpIpv6Hash;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // ipv4_hash - computed: false, optional: true, required: false
  private _ipv4Hash?: boolean | cdktf.IResolvable; 
  public get ipv4Hash() {
    return this.getBooleanAttribute('ipv4_hash');
  }
  public set ipv4Hash(value: boolean | cdktf.IResolvable) {
    this._ipv4Hash = value;
  }
  public resetIpv4Hash() {
    this._ipv4Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HashInput() {
    return this._ipv4Hash;
  }

  // ipv6_ext_hash - computed: false, optional: true, required: false
  private _ipv6ExtHash?: boolean | cdktf.IResolvable; 
  public get ipv6ExtHash() {
    return this.getBooleanAttribute('ipv6_ext_hash');
  }
  public set ipv6ExtHash(value: boolean | cdktf.IResolvable) {
    this._ipv6ExtHash = value;
  }
  public resetIpv6ExtHash() {
    this._ipv6ExtHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExtHashInput() {
    return this._ipv6ExtHash;
  }

  // ipv6_hash - computed: false, optional: true, required: false
  private _ipv6Hash?: boolean | cdktf.IResolvable; 
  public get ipv6Hash() {
    return this.getBooleanAttribute('ipv6_hash');
  }
  public set ipv6Hash(value: boolean | cdktf.IResolvable) {
    this._ipv6Hash = value;
  }
  public resetIpv6Hash() {
    this._ipv6Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HashInput() {
    return this._ipv6Hash;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // tcp_ipv4_hash - computed: false, optional: true, required: false
  private _tcpIpv4Hash?: boolean | cdktf.IResolvable; 
  public get tcpIpv4Hash() {
    return this.getBooleanAttribute('tcp_ipv4_hash');
  }
  public set tcpIpv4Hash(value: boolean | cdktf.IResolvable) {
    this._tcpIpv4Hash = value;
  }
  public resetTcpIpv4Hash() {
    this._tcpIpv4Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIpv4HashInput() {
    return this._tcpIpv4Hash;
  }

  // tcp_ipv6_ext_hash - computed: false, optional: true, required: false
  private _tcpIpv6ExtHash?: boolean | cdktf.IResolvable; 
  public get tcpIpv6ExtHash() {
    return this.getBooleanAttribute('tcp_ipv6_ext_hash');
  }
  public set tcpIpv6ExtHash(value: boolean | cdktf.IResolvable) {
    this._tcpIpv6ExtHash = value;
  }
  public resetTcpIpv6ExtHash() {
    this._tcpIpv6ExtHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIpv6ExtHashInput() {
    return this._tcpIpv6ExtHash;
  }

  // tcp_ipv6_hash - computed: false, optional: true, required: false
  private _tcpIpv6Hash?: boolean | cdktf.IResolvable; 
  public get tcpIpv6Hash() {
    return this.getBooleanAttribute('tcp_ipv6_hash');
  }
  public set tcpIpv6Hash(value: boolean | cdktf.IResolvable) {
    this._tcpIpv6Hash = value;
  }
  public resetTcpIpv6Hash() {
    this._tcpIpv6Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIpv6HashInput() {
    return this._tcpIpv6Hash;
  }

  // udp_ipv4_hash - computed: false, optional: true, required: false
  private _udpIpv4Hash?: boolean | cdktf.IResolvable; 
  public get udpIpv4Hash() {
    return this.getBooleanAttribute('udp_ipv4_hash');
  }
  public set udpIpv4Hash(value: boolean | cdktf.IResolvable) {
    this._udpIpv4Hash = value;
  }
  public resetUdpIpv4Hash() {
    this._udpIpv4Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIpv4HashInput() {
    return this._udpIpv4Hash;
  }

  // udp_ipv6_hash - computed: false, optional: true, required: false
  private _udpIpv6Hash?: boolean | cdktf.IResolvable; 
  public get udpIpv6Hash() {
    return this.getBooleanAttribute('udp_ipv6_hash');
  }
  public set udpIpv6Hash(value: boolean | cdktf.IResolvable) {
    this._udpIpv6Hash = value;
  }
  public resetUdpIpv6Hash() {
    this._udpIpv6Hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIpv6HashInput() {
    return this._udpIpv6Hash;
  }
}
export interface DataIntersightVnicEthAdapterPolicyRxQueueSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The number of queue resources to allocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#nr_count DataIntersightVnicEthAdapterPolicy#nr_count}
  */
  readonly nrCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The number of descriptors in each queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ring_size DataIntersightVnicEthAdapterPolicy#ring_size}
  */
  readonly ringSize?: number;
}

export function dataIntersightVnicEthAdapterPolicyRxQueueSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyRxQueueSettingsOutputReference | DataIntersightVnicEthAdapterPolicyRxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    nr_count: cdktf.numberToTerraform(struct!.nrCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ring_size: cdktf.numberToTerraform(struct!.ringSize),
  }
}


export function dataIntersightVnicEthAdapterPolicyRxQueueSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyRxQueueSettingsOutputReference | DataIntersightVnicEthAdapterPolicyRxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nr_count: {
      value: cdktf.numberToHclTerraform(struct!.nrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_size: {
      value: cdktf.numberToHclTerraform(struct!.ringSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyRxQueueSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyRxQueueSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._nrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrCount = this._nrCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._ringSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringSize = this._ringSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyRxQueueSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._nrCount = undefined;
      this._objectType = undefined;
      this._ringSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._nrCount = value.nrCount;
      this._objectType = value.objectType;
      this._ringSize = value.ringSize;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // nr_count - computed: false, optional: true, required: false
  private _nrCount?: number; 
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }
  public set nrCount(value: number) {
    this._nrCount = value;
  }
  public resetNrCount() {
    this._nrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrCountInput() {
    return this._nrCount;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // ring_size - computed: false, optional: true, required: false
  private _ringSize?: number; 
  public get ringSize() {
    return this.getNumberAttribute('ring_size');
  }
  public set ringSize(value: number) {
    this._ringSize = value;
  }
  public resetRingSize() {
    this._ringSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringSizeInput() {
    return this._ringSize;
  }
}
export interface DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyTagsDefinitionToTerraform(struct?: DataIntersightVnicEthAdapterPolicyTagsDefinitionOutputReference | DataIntersightVnicEthAdapterPolicyTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyTagsDefinitionToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyTagsDefinitionOutputReference | DataIntersightVnicEthAdapterPolicyTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightVnicEthAdapterPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#key DataIntersightVnicEthAdapterPolicy#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#propagated DataIntersightVnicEthAdapterPolicy#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the tag is user-defined or owned by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#sys_tag DataIntersightVnicEthAdapterPolicy#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#type DataIntersightVnicEthAdapterPolicy#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#value DataIntersightVnicEthAdapterPolicy#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ancestor_definitions DataIntersightVnicEthAdapterPolicy#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#definition DataIntersightVnicEthAdapterPolicy#definition}
  */
  readonly definition?: DataIntersightVnicEthAdapterPolicyTagsDefinition;
}

export function dataIntersightVnicEthAdapterPolicyTagsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightVnicEthAdapterPolicyTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightVnicEthAdapterPolicyTagsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightVnicEthAdapterPolicyTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightVnicEthAdapterPolicyTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._sysTag = value.sysTag;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // sys_tag - computed: false, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightVnicEthAdapterPolicyTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightVnicEthAdapterPolicyTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightVnicEthAdapterPolicyTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightVnicEthAdapterPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightVnicEthAdapterPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyTagsOutputReference {
    return new DataIntersightVnicEthAdapterPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyTcpOffloadSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Enables the reassembly of segmented packets in hardware before sending them to the CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#large_receive DataIntersightVnicEthAdapterPolicy#large_receive}
  */
  readonly largeReceive?: boolean | cdktf.IResolvable;
  /**
  * Enables the CPU to send large packets to the hardware for segmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#large_send DataIntersightVnicEthAdapterPolicy#large_send}
  */
  readonly largeSend?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * When enabled, the CPU sends all packet checksums to the hardware for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#rx_checksum DataIntersightVnicEthAdapterPolicy#rx_checksum}
  */
  readonly rxChecksum?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the CPU sends all packets to the hardware so that the checksum can be calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#tx_checksum DataIntersightVnicEthAdapterPolicy#tx_checksum}
  */
  readonly txChecksum?: boolean | cdktf.IResolvable;
}

export function dataIntersightVnicEthAdapterPolicyTcpOffloadSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyTcpOffloadSettingsOutputReference | DataIntersightVnicEthAdapterPolicyTcpOffloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    large_receive: cdktf.booleanToTerraform(struct!.largeReceive),
    large_send: cdktf.booleanToTerraform(struct!.largeSend),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    rx_checksum: cdktf.booleanToTerraform(struct!.rxChecksum),
    tx_checksum: cdktf.booleanToTerraform(struct!.txChecksum),
  }
}


export function dataIntersightVnicEthAdapterPolicyTcpOffloadSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyTcpOffloadSettingsOutputReference | DataIntersightVnicEthAdapterPolicyTcpOffloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_receive: {
      value: cdktf.booleanToHclTerraform(struct!.largeReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    large_send: {
      value: cdktf.booleanToHclTerraform(struct!.largeSend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rx_checksum: {
      value: cdktf.booleanToHclTerraform(struct!.rxChecksum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tx_checksum: {
      value: cdktf.booleanToHclTerraform(struct!.txChecksum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyTcpOffloadSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyTcpOffloadSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._largeReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeReceive = this._largeReceive;
    }
    if (this._largeSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeSend = this._largeSend;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._rxChecksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxChecksum = this._rxChecksum;
    }
    if (this._txChecksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.txChecksum = this._txChecksum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyTcpOffloadSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._largeReceive = undefined;
      this._largeSend = undefined;
      this._objectType = undefined;
      this._rxChecksum = undefined;
      this._txChecksum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._largeReceive = value.largeReceive;
      this._largeSend = value.largeSend;
      this._objectType = value.objectType;
      this._rxChecksum = value.rxChecksum;
      this._txChecksum = value.txChecksum;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // large_receive - computed: false, optional: true, required: false
  private _largeReceive?: boolean | cdktf.IResolvable; 
  public get largeReceive() {
    return this.getBooleanAttribute('large_receive');
  }
  public set largeReceive(value: boolean | cdktf.IResolvable) {
    this._largeReceive = value;
  }
  public resetLargeReceive() {
    this._largeReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeReceiveInput() {
    return this._largeReceive;
  }

  // large_send - computed: false, optional: true, required: false
  private _largeSend?: boolean | cdktf.IResolvable; 
  public get largeSend() {
    return this.getBooleanAttribute('large_send');
  }
  public set largeSend(value: boolean | cdktf.IResolvable) {
    this._largeSend = value;
  }
  public resetLargeSend() {
    this._largeSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeSendInput() {
    return this._largeSend;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // rx_checksum - computed: false, optional: true, required: false
  private _rxChecksum?: boolean | cdktf.IResolvable; 
  public get rxChecksum() {
    return this.getBooleanAttribute('rx_checksum');
  }
  public set rxChecksum(value: boolean | cdktf.IResolvable) {
    this._rxChecksum = value;
  }
  public resetRxChecksum() {
    this._rxChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxChecksumInput() {
    return this._rxChecksum;
  }

  // tx_checksum - computed: false, optional: true, required: false
  private _txChecksum?: boolean | cdktf.IResolvable; 
  public get txChecksum() {
    return this.getBooleanAttribute('tx_checksum');
  }
  public set txChecksum(value: boolean | cdktf.IResolvable) {
    this._txChecksum = value;
  }
  public resetTxChecksum() {
    this._txChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txChecksumInput() {
    return this._txChecksum;
  }
}
export interface DataIntersightVnicEthAdapterPolicyTxQueueSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The number of queue resources to allocate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#nr_count DataIntersightVnicEthAdapterPolicy#nr_count}
  */
  readonly nrCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The number of descriptors in each queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ring_size DataIntersightVnicEthAdapterPolicy#ring_size}
  */
  readonly ringSize?: number;
}

export function dataIntersightVnicEthAdapterPolicyTxQueueSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyTxQueueSettingsOutputReference | DataIntersightVnicEthAdapterPolicyTxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    nr_count: cdktf.numberToTerraform(struct!.nrCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ring_size: cdktf.numberToTerraform(struct!.ringSize),
  }
}


export function dataIntersightVnicEthAdapterPolicyTxQueueSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyTxQueueSettingsOutputReference | DataIntersightVnicEthAdapterPolicyTxQueueSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nr_count: {
      value: cdktf.numberToHclTerraform(struct!.nrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_size: {
      value: cdktf.numberToHclTerraform(struct!.ringSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyTxQueueSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyTxQueueSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._nrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrCount = this._nrCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._ringSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringSize = this._ringSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyTxQueueSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._nrCount = undefined;
      this._objectType = undefined;
      this._ringSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._nrCount = value.nrCount;
      this._objectType = value.objectType;
      this._ringSize = value.ringSize;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // nr_count - computed: false, optional: true, required: false
  private _nrCount?: number; 
  public get nrCount() {
    return this.getNumberAttribute('nr_count');
  }
  public set nrCount(value: number) {
    this._nrCount = value;
  }
  public resetNrCount() {
    this._nrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrCountInput() {
    return this._nrCount;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // ring_size - computed: false, optional: true, required: false
  private _ringSize?: number; 
  public get ringSize() {
    return this.getNumberAttribute('ring_size');
  }
  public set ringSize(value: number) {
    this._ringSize = value;
  }
  public resetRingSize() {
    this._ringSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringSizeInput() {
    return this._ringSize;
  }
}
export interface DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyVersionContextInterestedMosToTerraform(struct?: DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyVersionContextInterestedMosToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightVnicEthAdapterPolicyVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightVnicEthAdapterPolicyVersionContextInterestedMosOutputReference {
    return new DataIntersightVnicEthAdapterPolicyVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightVnicEthAdapterPolicyVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#moid DataIntersightVnicEthAdapterPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#selector DataIntersightVnicEthAdapterPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightVnicEthAdapterPolicyVersionContextRefMoToTerraform(struct?: DataIntersightVnicEthAdapterPolicyVersionContextRefMoOutputReference | DataIntersightVnicEthAdapterPolicyVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightVnicEthAdapterPolicyVersionContextRefMoToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyVersionContextRefMoOutputReference | DataIntersightVnicEthAdapterPolicyVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightVnicEthAdapterPolicyVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#marked_for_deletion DataIntersightVnicEthAdapterPolicy#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#nr_version DataIntersightVnicEthAdapterPolicy#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#timestamp DataIntersightVnicEthAdapterPolicy#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#version_type DataIntersightVnicEthAdapterPolicy#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#interested_mos DataIntersightVnicEthAdapterPolicy#interested_mos}
  */
  readonly interestedMos?: DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#ref_mo DataIntersightVnicEthAdapterPolicy#ref_mo}
  */
  readonly refMo?: DataIntersightVnicEthAdapterPolicyVersionContextRefMo;
}

export function dataIntersightVnicEthAdapterPolicyVersionContextToTerraform(struct?: DataIntersightVnicEthAdapterPolicyVersionContextOutputReference | DataIntersightVnicEthAdapterPolicyVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightVnicEthAdapterPolicyVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightVnicEthAdapterPolicyVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightVnicEthAdapterPolicyVersionContextToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyVersionContextOutputReference | DataIntersightVnicEthAdapterPolicyVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightVnicEthAdapterPolicyVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightVnicEthAdapterPolicyVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightVnicEthAdapterPolicyVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightVnicEthAdapterPolicyVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightVnicEthAdapterPolicyVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightVnicEthAdapterPolicyVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightVnicEthAdapterPolicyVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightVnicEthAdapterPolicyVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}
export interface DataIntersightVnicEthAdapterPolicyVxlanSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#additional_properties DataIntersightVnicEthAdapterPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#class_id DataIntersightVnicEthAdapterPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Status of the Virtual Extensible LAN Protocol on the virtual ethernet interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#enabled DataIntersightVnicEthAdapterPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#object_type DataIntersightVnicEthAdapterPolicy#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightVnicEthAdapterPolicyVxlanSettingsToTerraform(struct?: DataIntersightVnicEthAdapterPolicyVxlanSettingsOutputReference | DataIntersightVnicEthAdapterPolicyVxlanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightVnicEthAdapterPolicyVxlanSettingsToHclTerraform(struct?: DataIntersightVnicEthAdapterPolicyVxlanSettingsOutputReference | DataIntersightVnicEthAdapterPolicyVxlanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
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
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightVnicEthAdapterPolicyVxlanSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightVnicEthAdapterPolicyVxlanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightVnicEthAdapterPolicyVxlanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._enabled = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._enabled = value.enabled;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enabled - computed: false, optional: true, required: false
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy intersight_vnic_eth_adapter_policy}
*/
export class DataIntersightVnicEthAdapterPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_vnic_eth_adapter_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightVnicEthAdapterPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightVnicEthAdapterPolicy to import
  * @param importFromId The id of the existing DataIntersightVnicEthAdapterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightVnicEthAdapterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_vnic_eth_adapter_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.74/docs/data-sources/vnic_eth_adapter_policy intersight_vnic_eth_adapter_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightVnicEthAdapterPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightVnicEthAdapterPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_vnic_eth_adapter_policy',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.74',
        providerVersionConstraint: '1.0.74'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._advancedFilter = config.advancedFilter;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._description = config.description;
    this._domainGroupMoid = config.domainGroupMoid;
    this._etherChannelPinningEnabled = config.etherChannelPinningEnabled;
    this._geneveEnabled = config.geneveEnabled;
    this._id = config.id;
    this._interruptScaling = config.interruptScaling;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._rssSettings = config.rssSettings;
    this._sharedScope = config.sharedScope;
    this._uplinkFailbackTimeout = config.uplinkFailbackTimeout;
    this._ancestors.internalValue = config.ancestors;
    this._arfsSettings.internalValue = config.arfsSettings;
    this._completionQueueSettings.internalValue = config.completionQueueSettings;
    this._interruptSettings.internalValue = config.interruptSettings;
    this._nvgreSettings.internalValue = config.nvgreSettings;
    this._organization.internalValue = config.organization;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._ptpSettings.internalValue = config.ptpSettings;
    this._roceSettings.internalValue = config.roceSettings;
    this._rssHashSettings.internalValue = config.rssHashSettings;
    this._rxQueueSettings.internalValue = config.rxQueueSettings;
    this._tags.internalValue = config.tags;
    this._tcpOffloadSettings.internalValue = config.tcpOffloadSettings;
    this._txQueueSettings.internalValue = config.txQueueSettings;
    this._versionContext.internalValue = config.versionContext;
    this._vxlanSettings.internalValue = config.vxlanSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter?: boolean | cdktf.IResolvable; 
  public get advancedFilter() {
    return this.getBooleanAttribute('advanced_filter');
  }
  public set advancedFilter(value: boolean | cdktf.IResolvable) {
    this._advancedFilter = value;
  }
  public resetAdvancedFilter() {
    this._advancedFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilterInput() {
    return this._advancedFilter;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // ether_channel_pinning_enabled - computed: false, optional: true, required: false
  private _etherChannelPinningEnabled?: boolean | cdktf.IResolvable; 
  public get etherChannelPinningEnabled() {
    return this.getBooleanAttribute('ether_channel_pinning_enabled');
  }
  public set etherChannelPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._etherChannelPinningEnabled = value;
  }
  public resetEtherChannelPinningEnabled() {
    this._etherChannelPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherChannelPinningEnabledInput() {
    return this._etherChannelPinningEnabled;
  }

  // geneve_enabled - computed: false, optional: true, required: false
  private _geneveEnabled?: boolean | cdktf.IResolvable; 
  public get geneveEnabled() {
    return this.getBooleanAttribute('geneve_enabled');
  }
  public set geneveEnabled(value: boolean | cdktf.IResolvable) {
    this._geneveEnabled = value;
  }
  public resetGeneveEnabled() {
    this._geneveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geneveEnabledInput() {
    return this._geneveEnabled;
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

  // interrupt_scaling - computed: false, optional: true, required: false
  private _interruptScaling?: boolean | cdktf.IResolvable; 
  public get interruptScaling() {
    return this.getBooleanAttribute('interrupt_scaling');
  }
  public set interruptScaling(value: boolean | cdktf.IResolvable) {
    this._interruptScaling = value;
  }
  public resetInterruptScaling() {
    this._interruptScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptScalingInput() {
    return this._interruptScaling;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightVnicEthAdapterPolicyResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // rss_settings - computed: false, optional: true, required: false
  private _rssSettings?: boolean | cdktf.IResolvable; 
  public get rssSettings() {
    return this.getBooleanAttribute('rss_settings');
  }
  public set rssSettings(value: boolean | cdktf.IResolvable) {
    this._rssSettings = value;
  }
  public resetRssSettings() {
    this._rssSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssSettingsInput() {
    return this._rssSettings;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // uplink_failback_timeout - computed: false, optional: true, required: false
  private _uplinkFailbackTimeout?: number; 
  public get uplinkFailbackTimeout() {
    return this.getNumberAttribute('uplink_failback_timeout');
  }
  public set uplinkFailbackTimeout(value: number) {
    this._uplinkFailbackTimeout = value;
  }
  public resetUplinkFailbackTimeout() {
    this._uplinkFailbackTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkFailbackTimeoutInput() {
    return this._uplinkFailbackTimeout;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightVnicEthAdapterPolicyAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightVnicEthAdapterPolicyAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // arfs_settings - computed: false, optional: true, required: false
  private _arfsSettings = new DataIntersightVnicEthAdapterPolicyArfsSettingsOutputReference(this, "arfs_settings");
  public get arfsSettings() {
    return this._arfsSettings;
  }
  public putArfsSettings(value: DataIntersightVnicEthAdapterPolicyArfsSettings) {
    this._arfsSettings.internalValue = value;
  }
  public resetArfsSettings() {
    this._arfsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arfsSettingsInput() {
    return this._arfsSettings.internalValue;
  }

  // completion_queue_settings - computed: false, optional: true, required: false
  private _completionQueueSettings = new DataIntersightVnicEthAdapterPolicyCompletionQueueSettingsOutputReference(this, "completion_queue_settings");
  public get completionQueueSettings() {
    return this._completionQueueSettings;
  }
  public putCompletionQueueSettings(value: DataIntersightVnicEthAdapterPolicyCompletionQueueSettings) {
    this._completionQueueSettings.internalValue = value;
  }
  public resetCompletionQueueSettings() {
    this._completionQueueSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionQueueSettingsInput() {
    return this._completionQueueSettings.internalValue;
  }

  // interrupt_settings - computed: false, optional: true, required: false
  private _interruptSettings = new DataIntersightVnicEthAdapterPolicyInterruptSettingsOutputReference(this, "interrupt_settings");
  public get interruptSettings() {
    return this._interruptSettings;
  }
  public putInterruptSettings(value: DataIntersightVnicEthAdapterPolicyInterruptSettings) {
    this._interruptSettings.internalValue = value;
  }
  public resetInterruptSettings() {
    this._interruptSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptSettingsInput() {
    return this._interruptSettings.internalValue;
  }

  // nvgre_settings - computed: false, optional: true, required: false
  private _nvgreSettings = new DataIntersightVnicEthAdapterPolicyNvgreSettingsOutputReference(this, "nvgre_settings");
  public get nvgreSettings() {
    return this._nvgreSettings;
  }
  public putNvgreSettings(value: DataIntersightVnicEthAdapterPolicyNvgreSettings) {
    this._nvgreSettings.internalValue = value;
  }
  public resetNvgreSettings() {
    this._nvgreSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvgreSettingsInput() {
    return this._nvgreSettings.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new DataIntersightVnicEthAdapterPolicyOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: DataIntersightVnicEthAdapterPolicyOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightVnicEthAdapterPolicyParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightVnicEthAdapterPolicyParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightVnicEthAdapterPolicyPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightVnicEthAdapterPolicyPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // ptp_settings - computed: false, optional: true, required: false
  private _ptpSettings = new DataIntersightVnicEthAdapterPolicyPtpSettingsOutputReference(this, "ptp_settings");
  public get ptpSettings() {
    return this._ptpSettings;
  }
  public putPtpSettings(value: DataIntersightVnicEthAdapterPolicyPtpSettings) {
    this._ptpSettings.internalValue = value;
  }
  public resetPtpSettings() {
    this._ptpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpSettingsInput() {
    return this._ptpSettings.internalValue;
  }

  // roce_settings - computed: false, optional: true, required: false
  private _roceSettings = new DataIntersightVnicEthAdapterPolicyRoceSettingsOutputReference(this, "roce_settings");
  public get roceSettings() {
    return this._roceSettings;
  }
  public putRoceSettings(value: DataIntersightVnicEthAdapterPolicyRoceSettings) {
    this._roceSettings.internalValue = value;
  }
  public resetRoceSettings() {
    this._roceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roceSettingsInput() {
    return this._roceSettings.internalValue;
  }

  // rss_hash_settings - computed: false, optional: true, required: false
  private _rssHashSettings = new DataIntersightVnicEthAdapterPolicyRssHashSettingsOutputReference(this, "rss_hash_settings");
  public get rssHashSettings() {
    return this._rssHashSettings;
  }
  public putRssHashSettings(value: DataIntersightVnicEthAdapterPolicyRssHashSettings) {
    this._rssHashSettings.internalValue = value;
  }
  public resetRssHashSettings() {
    this._rssHashSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rssHashSettingsInput() {
    return this._rssHashSettings.internalValue;
  }

  // rx_queue_settings - computed: false, optional: true, required: false
  private _rxQueueSettings = new DataIntersightVnicEthAdapterPolicyRxQueueSettingsOutputReference(this, "rx_queue_settings");
  public get rxQueueSettings() {
    return this._rxQueueSettings;
  }
  public putRxQueueSettings(value: DataIntersightVnicEthAdapterPolicyRxQueueSettings) {
    this._rxQueueSettings.internalValue = value;
  }
  public resetRxQueueSettings() {
    this._rxQueueSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxQueueSettingsInput() {
    return this._rxQueueSettings.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightVnicEthAdapterPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightVnicEthAdapterPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tcp_offload_settings - computed: false, optional: true, required: false
  private _tcpOffloadSettings = new DataIntersightVnicEthAdapterPolicyTcpOffloadSettingsOutputReference(this, "tcp_offload_settings");
  public get tcpOffloadSettings() {
    return this._tcpOffloadSettings;
  }
  public putTcpOffloadSettings(value: DataIntersightVnicEthAdapterPolicyTcpOffloadSettings) {
    this._tcpOffloadSettings.internalValue = value;
  }
  public resetTcpOffloadSettings() {
    this._tcpOffloadSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOffloadSettingsInput() {
    return this._tcpOffloadSettings.internalValue;
  }

  // tx_queue_settings - computed: false, optional: true, required: false
  private _txQueueSettings = new DataIntersightVnicEthAdapterPolicyTxQueueSettingsOutputReference(this, "tx_queue_settings");
  public get txQueueSettings() {
    return this._txQueueSettings;
  }
  public putTxQueueSettings(value: DataIntersightVnicEthAdapterPolicyTxQueueSettings) {
    this._txQueueSettings.internalValue = value;
  }
  public resetTxQueueSettings() {
    this._txQueueSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txQueueSettingsInput() {
    return this._txQueueSettings.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightVnicEthAdapterPolicyVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightVnicEthAdapterPolicyVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // vxlan_settings - computed: false, optional: true, required: false
  private _vxlanSettings = new DataIntersightVnicEthAdapterPolicyVxlanSettingsOutputReference(this, "vxlan_settings");
  public get vxlanSettings() {
    return this._vxlanSettings;
  }
  public putVxlanSettings(value: DataIntersightVnicEthAdapterPolicyVxlanSettings) {
    this._vxlanSettings.internalValue = value;
  }
  public resetVxlanSettings() {
    this._vxlanSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanSettingsInput() {
    return this._vxlanSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      advanced_filter: cdktf.booleanToTerraform(this._advancedFilter),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      ether_channel_pinning_enabled: cdktf.booleanToTerraform(this._etherChannelPinningEnabled),
      geneve_enabled: cdktf.booleanToTerraform(this._geneveEnabled),
      id: cdktf.stringToTerraform(this._id),
      interrupt_scaling: cdktf.booleanToTerraform(this._interruptScaling),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      rss_settings: cdktf.booleanToTerraform(this._rssSettings),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      uplink_failback_timeout: cdktf.numberToTerraform(this._uplinkFailbackTimeout),
      ancestors: cdktf.listMapper(dataIntersightVnicEthAdapterPolicyAncestorsToTerraform, true)(this._ancestors.internalValue),
      arfs_settings: dataIntersightVnicEthAdapterPolicyArfsSettingsToTerraform(this._arfsSettings.internalValue),
      completion_queue_settings: dataIntersightVnicEthAdapterPolicyCompletionQueueSettingsToTerraform(this._completionQueueSettings.internalValue),
      interrupt_settings: dataIntersightVnicEthAdapterPolicyInterruptSettingsToTerraform(this._interruptSettings.internalValue),
      nvgre_settings: dataIntersightVnicEthAdapterPolicyNvgreSettingsToTerraform(this._nvgreSettings.internalValue),
      organization: dataIntersightVnicEthAdapterPolicyOrganizationToTerraform(this._organization.internalValue),
      parent: dataIntersightVnicEthAdapterPolicyParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightVnicEthAdapterPolicyPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      ptp_settings: dataIntersightVnicEthAdapterPolicyPtpSettingsToTerraform(this._ptpSettings.internalValue),
      roce_settings: dataIntersightVnicEthAdapterPolicyRoceSettingsToTerraform(this._roceSettings.internalValue),
      rss_hash_settings: dataIntersightVnicEthAdapterPolicyRssHashSettingsToTerraform(this._rssHashSettings.internalValue),
      rx_queue_settings: dataIntersightVnicEthAdapterPolicyRxQueueSettingsToTerraform(this._rxQueueSettings.internalValue),
      tags: cdktf.listMapper(dataIntersightVnicEthAdapterPolicyTagsToTerraform, true)(this._tags.internalValue),
      tcp_offload_settings: dataIntersightVnicEthAdapterPolicyTcpOffloadSettingsToTerraform(this._tcpOffloadSettings.internalValue),
      tx_queue_settings: dataIntersightVnicEthAdapterPolicyTxQueueSettingsToTerraform(this._txQueueSettings.internalValue),
      version_context: dataIntersightVnicEthAdapterPolicyVersionContextToTerraform(this._versionContext.internalValue),
      vxlan_settings: dataIntersightVnicEthAdapterPolicyVxlanSettingsToTerraform(this._vxlanSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_filter: {
        value: cdktf.booleanToHclTerraform(this._advancedFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
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
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ether_channel_pinning_enabled: {
        value: cdktf.booleanToHclTerraform(this._etherChannelPinningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      geneve_enabled: {
        value: cdktf.booleanToHclTerraform(this._geneveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interrupt_scaling: {
        value: cdktf.booleanToHclTerraform(this._interruptScaling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
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
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rss_settings: {
        value: cdktf.booleanToHclTerraform(this._rssSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_failback_timeout: {
        value: cdktf.numberToHclTerraform(this._uplinkFailbackTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightVnicEthAdapterPolicyAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyAncestorsList",
      },
      arfs_settings: {
        value: dataIntersightVnicEthAdapterPolicyArfsSettingsToHclTerraform(this._arfsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyArfsSettingsList",
      },
      completion_queue_settings: {
        value: dataIntersightVnicEthAdapterPolicyCompletionQueueSettingsToHclTerraform(this._completionQueueSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyCompletionQueueSettingsList",
      },
      interrupt_settings: {
        value: dataIntersightVnicEthAdapterPolicyInterruptSettingsToHclTerraform(this._interruptSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyInterruptSettingsList",
      },
      nvgre_settings: {
        value: dataIntersightVnicEthAdapterPolicyNvgreSettingsToHclTerraform(this._nvgreSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyNvgreSettingsList",
      },
      organization: {
        value: dataIntersightVnicEthAdapterPolicyOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyOrganizationList",
      },
      parent: {
        value: dataIntersightVnicEthAdapterPolicyParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightVnicEthAdapterPolicyPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyPermissionResourcesList",
      },
      ptp_settings: {
        value: dataIntersightVnicEthAdapterPolicyPtpSettingsToHclTerraform(this._ptpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyPtpSettingsList",
      },
      roce_settings: {
        value: dataIntersightVnicEthAdapterPolicyRoceSettingsToHclTerraform(this._roceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyRoceSettingsList",
      },
      rss_hash_settings: {
        value: dataIntersightVnicEthAdapterPolicyRssHashSettingsToHclTerraform(this._rssHashSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyRssHashSettingsList",
      },
      rx_queue_settings: {
        value: dataIntersightVnicEthAdapterPolicyRxQueueSettingsToHclTerraform(this._rxQueueSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyRxQueueSettingsList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightVnicEthAdapterPolicyTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyTagsList",
      },
      tcp_offload_settings: {
        value: dataIntersightVnicEthAdapterPolicyTcpOffloadSettingsToHclTerraform(this._tcpOffloadSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyTcpOffloadSettingsList",
      },
      tx_queue_settings: {
        value: dataIntersightVnicEthAdapterPolicyTxQueueSettingsToHclTerraform(this._txQueueSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyTxQueueSettingsList",
      },
      version_context: {
        value: dataIntersightVnicEthAdapterPolicyVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyVersionContextList",
      },
      vxlan_settings: {
        value: dataIntersightVnicEthAdapterPolicyVxlanSettingsToHclTerraform(this._vxlanSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightVnicEthAdapterPolicyVxlanSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
