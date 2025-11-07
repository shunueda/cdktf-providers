// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_collapsed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraTemplateCollapsedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Template ID. Required when `name` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_collapsed#id DataApstraTemplateCollapsed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Web UI name of the Template. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_collapsed#name DataApstraTemplateCollapsed#name}
  */
  readonly name?: string;
}
export interface DataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfo {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfoToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfoToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfo | undefined) {
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
export interface DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTags {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTagsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTagsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTags | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTagsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeAccessSwitchesLinks {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLinksToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLinksToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitchesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitchesLinks | undefined) {
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
  private _tags = new DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksOutputReference {
    return new DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevice {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDeviceToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDeviceToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevice | undefined) {
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
  private _panels = new DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplateCollapsedRackTypeAccessSwitchesTags {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesTagsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesTagsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitchesTags | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeAccessSwitchesTagsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeAccessSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeAccessSwitches {
}

export function dataApstraTemplateCollapsedRackTypeAccessSwitchesToTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeAccessSwitchesToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeAccessSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeAccessSwitches | undefined) {
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
  private _esiLagInfo = new DataApstraTemplateCollapsedRackTypeAccessSwitchesEsiLagInfoOutputReference(this, "esi_lag_info");
  public get esiLagInfo() {
    return this._esiLagInfo;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataApstraTemplateCollapsedRackTypeAccessSwitchesLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplateCollapsedRackTypeAccessSwitchesLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new DataApstraTemplateCollapsedRackTypeAccessSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataApstraTemplateCollapsedRackTypeAccessSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataApstraTemplateCollapsedRackTypeAccessSwitchesOutputReference {
    return new DataApstraTemplateCollapsedRackTypeAccessSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTags {
}

export function dataApstraTemplateCollapsedRackTypeGenericSystemsLinksTagsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeGenericSystemsLinksTagsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTags | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTagsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeGenericSystemsLinks {
}

export function dataApstraTemplateCollapsedRackTypeGenericSystemsLinksToTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeGenericSystemsLinksToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeGenericSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeGenericSystemsLinks | undefined) {
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
  private _tags = new DataApstraTemplateCollapsedRackTypeGenericSystemsLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): DataApstraTemplateCollapsedRackTypeGenericSystemsLinksOutputReference {
    return new DataApstraTemplateCollapsedRackTypeGenericSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels {
}

export function dataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels | undefined) {
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
  private _portGroups = new DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevice {
}

export function dataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDeviceToTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDeviceToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevice | undefined) {
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
  private _panels = new DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplateCollapsedRackTypeGenericSystemsTags {
}

export function dataApstraTemplateCollapsedRackTypeGenericSystemsTagsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeGenericSystemsTagsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeGenericSystemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeGenericSystemsTags | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeGenericSystemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeGenericSystemsTagsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeGenericSystemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeGenericSystems {
}

export function dataApstraTemplateCollapsedRackTypeGenericSystemsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeGenericSystemsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeGenericSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeGenericSystems | undefined) {
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
  private _links = new DataApstraTemplateCollapsedRackTypeGenericSystemsLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplateCollapsedRackTypeGenericSystemsLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new DataApstraTemplateCollapsedRackTypeGenericSystemsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataApstraTemplateCollapsedRackTypeGenericSystemsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataApstraTemplateCollapsedRackTypeGenericSystemsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups {
}

export function dataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels {
}

export function dataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevice {
}

export function dataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDeviceToTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDeviceToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevice | undefined) {
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
  private _panels = new DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface DataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfo {
}

export function dataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfoToTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfoToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfo | undefined) {
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
export interface DataApstraTemplateCollapsedRackTypeLeafSwitchesTags {
}

export function dataApstraTemplateCollapsedRackTypeLeafSwitchesTagsToTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeLeafSwitchesTagsToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraTemplateCollapsedRackTypeLeafSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeLeafSwitchesTags | undefined) {
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

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraTemplateCollapsedRackTypeLeafSwitchesTagsOutputReference {
    return new DataApstraTemplateCollapsedRackTypeLeafSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraTemplateCollapsedRackTypeLeafSwitches {
}

export function dataApstraTemplateCollapsedRackTypeLeafSwitchesToTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeLeafSwitchesToHclTerraform(struct?: DataApstraTemplateCollapsedRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackTypeLeafSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackTypeLeafSwitches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new DataApstraTemplateCollapsedRackTypeLeafSwitchesLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // mlag_info - computed: true, optional: false, required: false
  private _mlagInfo = new DataApstraTemplateCollapsedRackTypeLeafSwitchesMlagInfoOutputReference(this, "mlag_info");
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
  private _tags = new DataApstraTemplateCollapsedRackTypeLeafSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataApstraTemplateCollapsedRackTypeLeafSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataApstraTemplateCollapsedRackTypeLeafSwitchesOutputReference {
    return new DataApstraTemplateCollapsedRackTypeLeafSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataApstraTemplateCollapsedRackType {
}

export function dataApstraTemplateCollapsedRackTypeToTerraform(struct?: DataApstraTemplateCollapsedRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraTemplateCollapsedRackTypeToHclTerraform(struct?: DataApstraTemplateCollapsedRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraTemplateCollapsedRackTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraTemplateCollapsedRackType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraTemplateCollapsedRackType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_switches - computed: true, optional: false, required: false
  private _accessSwitches = new DataApstraTemplateCollapsedRackTypeAccessSwitchesMap(this, "access_switches");
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
  private _genericSystems = new DataApstraTemplateCollapsedRackTypeGenericSystemsMap(this, "generic_systems");
  public get genericSystems() {
    return this._genericSystems;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leaf_switches - computed: true, optional: false, required: false
  private _leafSwitches = new DataApstraTemplateCollapsedRackTypeLeafSwitchesMap(this, "leaf_switches");
  public get leafSwitches() {
    return this._leafSwitches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_collapsed apstra_template_collapsed}
*/
export class DataApstraTemplateCollapsed extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_template_collapsed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraTemplateCollapsed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraTemplateCollapsed to import
  * @param importFromId The id of the existing DataApstraTemplateCollapsed that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_collapsed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraTemplateCollapsed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_template_collapsed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/template_collapsed apstra_template_collapsed} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraTemplateCollapsedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraTemplateCollapsedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_template_collapsed',
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

  // mesh_link_count - computed: true, optional: false, required: false
  public get meshLinkCount() {
    return this.getNumberAttribute('mesh_link_count');
  }

  // mesh_link_speed - computed: true, optional: false, required: false
  public get meshLinkSpeed() {
    return this.getStringAttribute('mesh_link_speed');
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

  // rack_type - computed: true, optional: false, required: false
  private _rackType = new DataApstraTemplateCollapsedRackTypeOutputReference(this, "rack_type");
  public get rackType() {
    return this._rackType;
  }

  // rack_type_id - computed: true, optional: false, required: false
  public get rackTypeId() {
    return this.getStringAttribute('rack_type_id');
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
