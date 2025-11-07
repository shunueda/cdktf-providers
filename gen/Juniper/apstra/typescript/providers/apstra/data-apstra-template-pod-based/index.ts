// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_pod_based
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraTemplatePodBasedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Template ID. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_pod_based#id DataApstraTemplatePodBased#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Web UI name of the Template. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_pod_based#name DataApstraTemplatePodBased#name}
  */
  readonly name?: string;
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // l3_peer_link_count - computed: true, optional: false, required: false
  public get l3PeerLinkCount() {
    return this.getNumberAttribute('l3_peer_link_count');
  }

  // l3_peer_link_speed - computed: true, optional: false, required: false
  public get l3PeerLinkSpeed() {
    return this.getStringAttribute('l3_peer_link_speed');
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lag_mode - computed: true, optional: false, required: false
  public get lagMode() {
    return this.getStringAttribute('lag_mode');
  }

  // links_per_switch - computed: true, optional: false, required: false
  public get linksPerSwitch() {
    return this.getNumberAttribute('links_per_switch');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // switch_peer - computed: true, optional: false, required: false
  public get switchPeer() {
    return this.getStringAttribute('switch_peer');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_count - computed: true, optional: false, required: false
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }

  // port_roles - computed: true, optional: false, required: false
  public get portRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('port_roles'));
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getNumberAttribute('columns');
  }

  // port_groups - computed: true, optional: false, required: false
  private _portGroups = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // panels - computed: true, optional: false, required: false
  private _panels = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // esi_lag_info - computed: true, optional: false, required: false
  private _esiLagInfo = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoOutputReference(this, "esi_lag_info");
  public get esiLagInfo() {
    return this._esiLagInfo;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // redundancy_protocol - computed: true, optional: false, required: false
  public get redundancyProtocol() {
    return this.getStringAttribute('redundancy_protocol');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lag_mode - computed: true, optional: false, required: false
  public get lagMode() {
    return this.getStringAttribute('lag_mode');
  }

  // links_per_switch - computed: true, optional: false, required: false
  public get linksPerSwitch() {
    return this.getNumberAttribute('links_per_switch');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // switch_peer - computed: true, optional: false, required: false
  public get switchPeer() {
    return this.getStringAttribute('switch_peer');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_count - computed: true, optional: false, required: false
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }

  // port_roles - computed: true, optional: false, required: false
  public get portRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('port_roles'));
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getNumberAttribute('columns');
  }

  // port_groups - computed: true, optional: false, required: false
  private _portGroups = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // panels - computed: true, optional: false, required: false
  private _panels = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // port_channel_id_max - computed: true, optional: false, required: false
  public get portChannelIdMax() {
    return this.getNumberAttribute('port_channel_id_max');
  }

  // port_channel_id_min - computed: true, optional: false, required: false
  public get portChannelIdMin() {
    return this.getNumberAttribute('port_channel_id_min');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_count - computed: true, optional: false, required: false
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }

  // port_roles - computed: true, optional: false, required: false
  public get portRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('port_roles'));
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getNumberAttribute('columns');
  }

  // port_groups - computed: true, optional: false, required: false
  private _portGroups = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // panels - computed: true, optional: false, required: false
  private _panels = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // l3_peer_link_count - computed: true, optional: false, required: false
  public get l3PeerLinkCount() {
    return this.getNumberAttribute('l3_peer_link_count');
  }

  // l3_peer_link_port_channel_id - computed: true, optional: false, required: false
  public get l3PeerLinkPortChannelId() {
    return this.getNumberAttribute('l3_peer_link_port_channel_id');
  }

  // l3_peer_link_speed - computed: true, optional: false, required: false
  public get l3PeerLinkSpeed() {
    return this.getStringAttribute('l3_peer_link_speed');
  }

  // mlag_keepalive_vlan - computed: true, optional: false, required: false
  public get mlagKeepaliveVlan() {
    return this.getNumberAttribute('mlag_keepalive_vlan');
  }

  // peer_link_count - computed: true, optional: false, required: false
  public get peerLinkCount() {
    return this.getNumberAttribute('peer_link_count');
  }

  // peer_link_port_channel_id - computed: true, optional: false, required: false
  public get peerLinkPortChannelId() {
    return this.getNumberAttribute('peer_link_port_channel_id');
  }

  // peer_link_speed - computed: true, optional: false, required: false
  public get peerLinkSpeed() {
    return this.getStringAttribute('peer_link_speed');
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // mlag_info - computed: true, optional: false, required: false
  private _mlagInfo = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoOutputReference(this, "mlag_info");
  public get mlagInfo() {
    return this._mlagInfo;
  }

  // redundancy_protocol - computed: true, optional: false, required: false
  public get redundancyProtocol() {
    return this.getStringAttribute('redundancy_protocol');
  }

  // spine_link_count - computed: true, optional: false, required: false
  public get spineLinkCount() {
    return this.getNumberAttribute('spine_link_count');
  }

  // spine_link_speed - computed: true, optional: false, required: false
  public get spineLinkSpeed() {
    return this.getStringAttribute('spine_link_speed');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackType {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_switches - computed: true, optional: false, required: false
  private _accessSwitches = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesMap(this, "access_switches");
  public get accessSwitches() {
    return this._accessSwitches;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fabric_connectivity_design - computed: true, optional: false, required: false
  public get fabricConnectivityDesign() {
    return this.getStringAttribute('fabric_connectivity_design');
  }

  // generic_systems - computed: true, optional: false, required: false
  private _genericSystems = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsMap(this, "generic_systems");
  public get genericSystems() {
    return this._genericSystems;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leaf_switches - computed: true, optional: false, required: false
  private _leafSwitches = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMap(this, "leaf_switches");
  public get leafSwitches() {
    return this._leafSwitches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeRackInfos {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeRackInfosToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeRackInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeRackInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeRackInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // rack_type - computed: true, optional: false, required: false
  private _rackType = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosRackTypeOutputReference(this, "rack_type");
  public get rackType() {
    return this._rackType;
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeRackInfosMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraTemplatePodBasedPodInfosPodTypeRackInfosOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_count - computed: true, optional: false, required: false
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }

  // port_roles - computed: true, optional: false, required: false
  public get portRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('port_roles'));
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getNumberAttribute('columns');
  }

  // port_groups - computed: true, optional: false, required: false
  private _portGroups = new DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevice {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDeviceToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDeviceToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // panels - computed: true, optional: false, required: false
  private _panels = new DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeSpineTags {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeSpineTagsToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeSpineTagsToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeSpineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeSpineTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedPodInfosPodTypeSpineTagsOutputReference {
    return new DataApstraTemplatePodBasedPodInfosPodTypeSpineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodTypeSpine {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeSpineToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeSpineToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodTypeSpine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeSpineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodTypeSpine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodTypeSpine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplatePodBasedPodInfosPodTypeSpineLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // super_spine_link_count - computed: true, optional: false, required: false
  public get superSpineLinkCount() {
    return this.getNumberAttribute('super_spine_link_count');
  }

  // super_spine_link_speed - computed: true, optional: false, required: false
  public get superSpineLinkSpeed() {
    return this.getStringAttribute('super_spine_link_speed');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApstraTemplatePodBasedPodInfosPodTypeSpineTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataApstraTemplatePodBasedPodInfosPodType {
}

export function dataApstraTemplatePodBasedPodInfosPodTypeToTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosPodTypeToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfosPodType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosPodTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfosPodType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfosPodType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn_allocation_scheme - computed: true, optional: false, required: false
  public get asnAllocationScheme() {
    return this.getStringAttribute('asn_allocation_scheme');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overlay_control_protocol - computed: true, optional: false, required: false
  public get overlayControlProtocol() {
    return this.getStringAttribute('overlay_control_protocol');
  }

  // rack_infos - computed: true, optional: false, required: false
  private _rackInfos = new DataApstraTemplatePodBasedPodInfosPodTypeRackInfosMap(this, "rack_infos");
  public get rackInfos() {
    return this._rackInfos;
  }

  // spine - computed: true, optional: false, required: false
  private _spine = new DataApstraTemplatePodBasedPodInfosPodTypeSpineOutputReference(this, "spine");
  public get spine() {
    return this._spine;
  }
}
export interface DataApstraTemplatePodBasedPodInfos {
}

export function dataApstraTemplatePodBasedPodInfosToTerraform(struct?: DataApstraTemplatePodBasedPodInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedPodInfosToHclTerraform(struct?: DataApstraTemplatePodBasedPodInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedPodInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplatePodBasedPodInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedPodInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // pod_type - computed: true, optional: false, required: false
  private _podType = new DataApstraTemplatePodBasedPodInfosPodTypeOutputReference(this, "pod_type");
  public get podType() {
    return this._podType;
  }
}

export class DataApstraTemplatePodBasedPodInfosMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraTemplatePodBasedPodInfosOutputReference {
    return new DataApstraTemplatePodBasedPodInfosOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_count - computed: true, optional: false, required: false
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }

  // port_roles - computed: true, optional: false, required: false
  public get portRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('port_roles'));
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getStringAttribute('port_speed');
  }
}

export class DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedSuperSpineLogicalDevicePanels {
}

export function dataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsToTerraform(struct?: DataApstraTemplatePodBasedSuperSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplatePodBasedSuperSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedSuperSpineLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedSuperSpineLogicalDevicePanels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return this.getNumberAttribute('columns');
  }

  // port_groups - computed: true, optional: false, required: false
  private _portGroups = new DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsOutputReference {
    return new DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedSuperSpineLogicalDevice {
}

export function dataApstraTemplatePodBasedSuperSpineLogicalDeviceToTerraform(struct?: DataApstraTemplatePodBasedSuperSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedSuperSpineLogicalDeviceToHclTerraform(struct?: DataApstraTemplatePodBasedSuperSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedSuperSpineLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedSuperSpineLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedSuperSpineLogicalDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // panels - computed: true, optional: false, required: false
  private _panels = new DataApstraTemplatePodBasedSuperSpineLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplatePodBasedSuperSpineTags {
}

export function dataApstraTemplatePodBasedSuperSpineTagsToTerraform(struct?: DataApstraTemplatePodBasedSuperSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedSuperSpineTagsToHclTerraform(struct?: DataApstraTemplatePodBasedSuperSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedSuperSpineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplatePodBasedSuperSpineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedSuperSpineTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataApstraTemplatePodBasedSuperSpineTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplatePodBasedSuperSpineTagsOutputReference {
    return new DataApstraTemplatePodBasedSuperSpineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplatePodBasedSuperSpine {
}

export function dataApstraTemplatePodBasedSuperSpineToTerraform(struct?: DataApstraTemplatePodBasedSuperSpine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplatePodBasedSuperSpineToHclTerraform(struct?: DataApstraTemplatePodBasedSuperSpine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplatePodBasedSuperSpineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplatePodBasedSuperSpine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplatePodBasedSuperSpine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplatePodBasedSuperSpineLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // per_plane_count - computed: true, optional: false, required: false
  public get perPlaneCount() {
    return this.getNumberAttribute('per_plane_count');
  }

  // plane_count - computed: true, optional: false, required: false
  public get planeCount() {
    return this.getNumberAttribute('plane_count');
  }

  // tag_ids - computed: true, optional: false, required: false
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApstraTemplatePodBasedSuperSpineTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_pod_based apstra_template_pod_based}
*/
export class DataApstraTemplatePodBased extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_template_pod_based";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraTemplatePodBased resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraTemplatePodBased to import
  * @param importFromId The id of the existing DataApstraTemplatePodBased that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_pod_based#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraTemplatePodBased to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_template_pod_based", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_pod_based apstra_template_pod_based} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraTemplatePodBasedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraTemplatePodBasedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_template_pod_based',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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

  // name - computed: true, optional: true, required: false
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

  // pod_infos - computed: true, optional: false, required: false
  private _podInfos = new DataApstraTemplatePodBasedPodInfosMap(this, "pod_infos");
  public get podInfos() {
    return this._podInfos;
  }

  // super_spine - computed: true, optional: false, required: false
  private _superSpine = new DataApstraTemplatePodBasedSuperSpineOutputReference(this, "super_spine");
  public get superSpine() {
    return this._superSpine;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
