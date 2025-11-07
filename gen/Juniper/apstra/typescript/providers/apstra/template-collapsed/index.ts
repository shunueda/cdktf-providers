// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateCollapsedConfig extends cdktf.TerraformMetaArguments {
  /**
  * mesh_link_count integer 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#mesh_link_count TemplateCollapsed#mesh_link_count}
  */
  readonly meshLinkCount: number;
  /**
  * mesh_link_speed details 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#mesh_link_speed TemplateCollapsed#mesh_link_speed}
  */
  readonly meshLinkSpeed: string;
  /**
  * Apstra name of the Collapsed Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#name TemplateCollapsed#name}
  */
  readonly name: string;
  /**
  * rack type id 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#rack_type_id TemplateCollapsed#rack_type_id}
  */
  readonly rackTypeId: string;
}
export interface TemplateCollapsedRackTypeAccessSwitchesEsiLagInfo {
  /**
  * Count of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#l3_peer_link_count TemplateCollapsed#l3_peer_link_count}
  */
  readonly l3PeerLinkCount: number;
  /**
  * Speed of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#l3_peer_link_speed TemplateCollapsed#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed: string;
}

export function templateCollapsedRackTypeAccessSwitchesEsiLagInfoToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l3_peer_link_count: cdktf.numberToTerraform(struct!.l3PeerLinkCount),
    l3_peer_link_speed: cdktf.stringToTerraform(struct!.l3PeerLinkSpeed),
  }
}


export function templateCollapsedRackTypeAccessSwitchesEsiLagInfoToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l3_peer_link_count: {
      value: cdktf.numberToHclTerraform(struct!.l3PeerLinkCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_peer_link_speed: {
      value: cdktf.stringToHclTerraform(struct!.l3PeerLinkSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateCollapsedRackTypeAccessSwitchesEsiLagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitchesEsiLagInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l3PeerLinkCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3PeerLinkCount = this._l3PeerLinkCount;
    }
    if (this._l3PeerLinkSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3PeerLinkSpeed = this._l3PeerLinkSpeed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitchesEsiLagInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l3PeerLinkCount = undefined;
      this._l3PeerLinkSpeed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l3PeerLinkCount = value.l3PeerLinkCount;
      this._l3PeerLinkSpeed = value.l3PeerLinkSpeed;
    }
  }

  // l3_peer_link_count - computed: true, optional: false, required: true
  private _l3PeerLinkCount?: number; 
  public get l3PeerLinkCount() {
    return this.getNumberAttribute('l3_peer_link_count');
  }
  public set l3PeerLinkCount(value: number) {
    this._l3PeerLinkCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerLinkCountInput() {
    return this._l3PeerLinkCount;
  }

  // l3_peer_link_speed - computed: true, optional: false, required: true
  private _l3PeerLinkSpeed?: string; 
  public get l3PeerLinkSpeed() {
    return this.getStringAttribute('l3_peer_link_speed');
  }
  public set l3PeerLinkSpeed(value: string) {
    this._l3PeerLinkSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerLinkSpeedInput() {
    return this._l3PeerLinkSpeed;
  }
}
export interface TemplateCollapsedRackTypeAccessSwitchesLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#description TemplateCollapsed#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#name TemplateCollapsed#name}
  */
  readonly name: string;
}

export function templateCollapsedRackTypeAccessSwitchesLinksTagsToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templateCollapsedRackTypeAccessSwitchesLinksTagsToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateCollapsedRackTypeAccessSwitchesLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitchesLinksTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitchesLinksTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
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
}

export class TemplateCollapsedRackTypeAccessSwitchesLinksTagsList extends cdktf.ComplexList {
  public internalValue? : TemplateCollapsedRackTypeAccessSwitchesLinksTags[] | cdktf.IResolvable

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
  public get(index: number): TemplateCollapsedRackTypeAccessSwitchesLinksTagsOutputReference {
    return new TemplateCollapsedRackTypeAccessSwitchesLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeAccessSwitchesLinks {
}

export function templateCollapsedRackTypeAccessSwitchesLinksToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeAccessSwitchesLinksToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeAccessSwitchesLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitchesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitchesLinks | undefined) {
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
  private _tags = new TemplateCollapsedRackTypeAccessSwitchesLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class TemplateCollapsedRackTypeAccessSwitchesLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateCollapsedRackTypeAccessSwitchesLinksOutputReference {
    return new TemplateCollapsedRackTypeAccessSwitchesLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups {
}

export function templateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels {
}

export function templateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsOutputReference {
    return new TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeAccessSwitchesLogicalDevice {
}

export function templateCollapsedRackTypeAccessSwitchesLogicalDeviceToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeAccessSwitchesLogicalDeviceToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeAccessSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitchesLogicalDevice | undefined) {
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
  private _panels = new TemplateCollapsedRackTypeAccessSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplateCollapsedRackTypeAccessSwitchesTags {
}

export function templateCollapsedRackTypeAccessSwitchesTagsToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeAccessSwitchesTagsToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeAccessSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitchesTags | undefined) {
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

export class TemplateCollapsedRackTypeAccessSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeAccessSwitchesTagsOutputReference {
    return new TemplateCollapsedRackTypeAccessSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeAccessSwitches {
}

export function templateCollapsedRackTypeAccessSwitchesToTerraform(struct?: TemplateCollapsedRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeAccessSwitchesToHclTerraform(struct?: TemplateCollapsedRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeAccessSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateCollapsedRackTypeAccessSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeAccessSwitches | undefined) {
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
  private _esiLagInfo = new TemplateCollapsedRackTypeAccessSwitchesEsiLagInfoOutputReference(this, "esi_lag_info");
  public get esiLagInfo() {
    return this._esiLagInfo;
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateCollapsedRackTypeAccessSwitchesLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplateCollapsedRackTypeAccessSwitchesLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new TemplateCollapsedRackTypeAccessSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplateCollapsedRackTypeAccessSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateCollapsedRackTypeAccessSwitchesOutputReference {
    return new TemplateCollapsedRackTypeAccessSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateCollapsedRackTypeGenericSystemsLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#description TemplateCollapsed#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#name TemplateCollapsed#name}
  */
  readonly name: string;
}

export function templateCollapsedRackTypeGenericSystemsLinksTagsToTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templateCollapsedRackTypeGenericSystemsLinksTagsToHclTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateCollapsedRackTypeGenericSystemsLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeGenericSystemsLinksTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeGenericSystemsLinksTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
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
}

export class TemplateCollapsedRackTypeGenericSystemsLinksTagsList extends cdktf.ComplexList {
  public internalValue? : TemplateCollapsedRackTypeGenericSystemsLinksTags[] | cdktf.IResolvable

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
  public get(index: number): TemplateCollapsedRackTypeGenericSystemsLinksTagsOutputReference {
    return new TemplateCollapsedRackTypeGenericSystemsLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeGenericSystemsLinks {
}

export function templateCollapsedRackTypeGenericSystemsLinksToTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeGenericSystemsLinksToHclTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeGenericSystemsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateCollapsedRackTypeGenericSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeGenericSystemsLinks | undefined) {
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
  private _tags = new TemplateCollapsedRackTypeGenericSystemsLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class TemplateCollapsedRackTypeGenericSystemsLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateCollapsedRackTypeGenericSystemsLinksOutputReference {
    return new TemplateCollapsedRackTypeGenericSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups {
}

export function templateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels {
}

export function templateCollapsedRackTypeGenericSystemsLogicalDevicePanelsToTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeGenericSystemsLogicalDevicePanelsToHclTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsOutputReference {
    return new TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeGenericSystemsLogicalDevice {
}

export function templateCollapsedRackTypeGenericSystemsLogicalDeviceToTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeGenericSystemsLogicalDeviceToHclTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeGenericSystemsLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateCollapsedRackTypeGenericSystemsLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeGenericSystemsLogicalDevice | undefined) {
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
  private _panels = new TemplateCollapsedRackTypeGenericSystemsLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplateCollapsedRackTypeGenericSystemsTags {
}

export function templateCollapsedRackTypeGenericSystemsTagsToTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeGenericSystemsTagsToHclTerraform(struct?: TemplateCollapsedRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeGenericSystemsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeGenericSystemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeGenericSystemsTags | undefined) {
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

export class TemplateCollapsedRackTypeGenericSystemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeGenericSystemsTagsOutputReference {
    return new TemplateCollapsedRackTypeGenericSystemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeGenericSystems {
}

export function templateCollapsedRackTypeGenericSystemsToTerraform(struct?: TemplateCollapsedRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeGenericSystemsToHclTerraform(struct?: TemplateCollapsedRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeGenericSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateCollapsedRackTypeGenericSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeGenericSystems | undefined) {
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
  private _links = new TemplateCollapsedRackTypeGenericSystemsLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplateCollapsedRackTypeGenericSystemsLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new TemplateCollapsedRackTypeGenericSystemsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplateCollapsedRackTypeGenericSystemsMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateCollapsedRackTypeGenericSystemsOutputReference {
    return new TemplateCollapsedRackTypeGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups {
}

export function templateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels {
}

export function templateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsToTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsToHclTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsOutputReference {
    return new TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeLeafSwitchesLogicalDevice {
}

export function templateCollapsedRackTypeLeafSwitchesLogicalDeviceToTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeLeafSwitchesLogicalDeviceToHclTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeLeafSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateCollapsedRackTypeLeafSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeLeafSwitchesLogicalDevice | undefined) {
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
  private _panels = new TemplateCollapsedRackTypeLeafSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplateCollapsedRackTypeLeafSwitchesMlagInfo {
  /**
  * Number of L3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#l3_peer_link_count TemplateCollapsed#l3_peer_link_count}
  */
  readonly l3PeerLinkCount?: number;
  /**
  * Port channel number used for L3 Peer Link. Omit to allow Apstra to choose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#l3_peer_link_port_channel_id TemplateCollapsed#l3_peer_link_port_channel_id}
  */
  readonly l3PeerLinkPortChannelId?: number;
  /**
  * Speed of l3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#l3_peer_link_speed TemplateCollapsed#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed?: string;
  /**
  * MLAG keepalive VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#mlag_keepalive_vlan TemplateCollapsed#mlag_keepalive_vlan}
  */
  readonly mlagKeepaliveVlan: number;
  /**
  * Number of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#peer_link_count TemplateCollapsed#peer_link_count}
  */
  readonly peerLinkCount: number;
  /**
  * Port channel number used for L2 Peer Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#peer_link_port_channel_id TemplateCollapsed#peer_link_port_channel_id}
  */
  readonly peerLinkPortChannelId: number;
  /**
  * Speed of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#peer_link_speed TemplateCollapsed#peer_link_speed}
  */
  readonly peerLinkSpeed: string;
}

export function templateCollapsedRackTypeLeafSwitchesMlagInfoToTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesMlagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l3_peer_link_count: cdktf.numberToTerraform(struct!.l3PeerLinkCount),
    l3_peer_link_port_channel_id: cdktf.numberToTerraform(struct!.l3PeerLinkPortChannelId),
    l3_peer_link_speed: cdktf.stringToTerraform(struct!.l3PeerLinkSpeed),
    mlag_keepalive_vlan: cdktf.numberToTerraform(struct!.mlagKeepaliveVlan),
    peer_link_count: cdktf.numberToTerraform(struct!.peerLinkCount),
    peer_link_port_channel_id: cdktf.numberToTerraform(struct!.peerLinkPortChannelId),
    peer_link_speed: cdktf.stringToTerraform(struct!.peerLinkSpeed),
  }
}


export function templateCollapsedRackTypeLeafSwitchesMlagInfoToHclTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesMlagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l3_peer_link_count: {
      value: cdktf.numberToHclTerraform(struct!.l3PeerLinkCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_peer_link_port_channel_id: {
      value: cdktf.numberToHclTerraform(struct!.l3PeerLinkPortChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_peer_link_speed: {
      value: cdktf.stringToHclTerraform(struct!.l3PeerLinkSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlag_keepalive_vlan: {
      value: cdktf.numberToHclTerraform(struct!.mlagKeepaliveVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_link_count: {
      value: cdktf.numberToHclTerraform(struct!.peerLinkCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_link_port_channel_id: {
      value: cdktf.numberToHclTerraform(struct!.peerLinkPortChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_link_speed: {
      value: cdktf.stringToHclTerraform(struct!.peerLinkSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateCollapsedRackTypeLeafSwitchesMlagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateCollapsedRackTypeLeafSwitchesMlagInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l3PeerLinkCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3PeerLinkCount = this._l3PeerLinkCount;
    }
    if (this._l3PeerLinkPortChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3PeerLinkPortChannelId = this._l3PeerLinkPortChannelId;
    }
    if (this._l3PeerLinkSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3PeerLinkSpeed = this._l3PeerLinkSpeed;
    }
    if (this._mlagKeepaliveVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlagKeepaliveVlan = this._mlagKeepaliveVlan;
    }
    if (this._peerLinkCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerLinkCount = this._peerLinkCount;
    }
    if (this._peerLinkPortChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerLinkPortChannelId = this._peerLinkPortChannelId;
    }
    if (this._peerLinkSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerLinkSpeed = this._peerLinkSpeed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeLeafSwitchesMlagInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l3PeerLinkCount = undefined;
      this._l3PeerLinkPortChannelId = undefined;
      this._l3PeerLinkSpeed = undefined;
      this._mlagKeepaliveVlan = undefined;
      this._peerLinkCount = undefined;
      this._peerLinkPortChannelId = undefined;
      this._peerLinkSpeed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l3PeerLinkCount = value.l3PeerLinkCount;
      this._l3PeerLinkPortChannelId = value.l3PeerLinkPortChannelId;
      this._l3PeerLinkSpeed = value.l3PeerLinkSpeed;
      this._mlagKeepaliveVlan = value.mlagKeepaliveVlan;
      this._peerLinkCount = value.peerLinkCount;
      this._peerLinkPortChannelId = value.peerLinkPortChannelId;
      this._peerLinkSpeed = value.peerLinkSpeed;
    }
  }

  // l3_peer_link_count - computed: true, optional: true, required: false
  private _l3PeerLinkCount?: number; 
  public get l3PeerLinkCount() {
    return this.getNumberAttribute('l3_peer_link_count');
  }
  public set l3PeerLinkCount(value: number) {
    this._l3PeerLinkCount = value;
  }
  public resetL3PeerLinkCount() {
    this._l3PeerLinkCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerLinkCountInput() {
    return this._l3PeerLinkCount;
  }

  // l3_peer_link_port_channel_id - computed: true, optional: true, required: false
  private _l3PeerLinkPortChannelId?: number; 
  public get l3PeerLinkPortChannelId() {
    return this.getNumberAttribute('l3_peer_link_port_channel_id');
  }
  public set l3PeerLinkPortChannelId(value: number) {
    this._l3PeerLinkPortChannelId = value;
  }
  public resetL3PeerLinkPortChannelId() {
    this._l3PeerLinkPortChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerLinkPortChannelIdInput() {
    return this._l3PeerLinkPortChannelId;
  }

  // l3_peer_link_speed - computed: true, optional: true, required: false
  private _l3PeerLinkSpeed?: string; 
  public get l3PeerLinkSpeed() {
    return this.getStringAttribute('l3_peer_link_speed');
  }
  public set l3PeerLinkSpeed(value: string) {
    this._l3PeerLinkSpeed = value;
  }
  public resetL3PeerLinkSpeed() {
    this._l3PeerLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PeerLinkSpeedInput() {
    return this._l3PeerLinkSpeed;
  }

  // mlag_keepalive_vlan - computed: true, optional: false, required: true
  private _mlagKeepaliveVlan?: number; 
  public get mlagKeepaliveVlan() {
    return this.getNumberAttribute('mlag_keepalive_vlan');
  }
  public set mlagKeepaliveVlan(value: number) {
    this._mlagKeepaliveVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mlagKeepaliveVlanInput() {
    return this._mlagKeepaliveVlan;
  }

  // peer_link_count - computed: true, optional: false, required: true
  private _peerLinkCount?: number; 
  public get peerLinkCount() {
    return this.getNumberAttribute('peer_link_count');
  }
  public set peerLinkCount(value: number) {
    this._peerLinkCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerLinkCountInput() {
    return this._peerLinkCount;
  }

  // peer_link_port_channel_id - computed: true, optional: false, required: true
  private _peerLinkPortChannelId?: number; 
  public get peerLinkPortChannelId() {
    return this.getNumberAttribute('peer_link_port_channel_id');
  }
  public set peerLinkPortChannelId(value: number) {
    this._peerLinkPortChannelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerLinkPortChannelIdInput() {
    return this._peerLinkPortChannelId;
  }

  // peer_link_speed - computed: true, optional: false, required: true
  private _peerLinkSpeed?: string; 
  public get peerLinkSpeed() {
    return this.getStringAttribute('peer_link_speed');
  }
  public set peerLinkSpeed(value: string) {
    this._peerLinkSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerLinkSpeedInput() {
    return this._peerLinkSpeed;
  }
}
export interface TemplateCollapsedRackTypeLeafSwitchesTags {
}

export function templateCollapsedRackTypeLeafSwitchesTagsToTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeLeafSwitchesTagsToHclTerraform(struct?: TemplateCollapsedRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeLeafSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateCollapsedRackTypeLeafSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeLeafSwitchesTags | undefined) {
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

export class TemplateCollapsedRackTypeLeafSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateCollapsedRackTypeLeafSwitchesTagsOutputReference {
    return new TemplateCollapsedRackTypeLeafSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateCollapsedRackTypeLeafSwitches {
}

export function templateCollapsedRackTypeLeafSwitchesToTerraform(struct?: TemplateCollapsedRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeLeafSwitchesToHclTerraform(struct?: TemplateCollapsedRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeLeafSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateCollapsedRackTypeLeafSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackTypeLeafSwitches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplateCollapsedRackTypeLeafSwitchesLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // mlag_info - computed: true, optional: false, required: false
  private _mlagInfo = new TemplateCollapsedRackTypeLeafSwitchesMlagInfoOutputReference(this, "mlag_info");
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
  private _tags = new TemplateCollapsedRackTypeLeafSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplateCollapsedRackTypeLeafSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateCollapsedRackTypeLeafSwitchesOutputReference {
    return new TemplateCollapsedRackTypeLeafSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateCollapsedRackType {
}

export function templateCollapsedRackTypeToTerraform(struct?: TemplateCollapsedRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateCollapsedRackTypeToHclTerraform(struct?: TemplateCollapsedRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateCollapsedRackTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateCollapsedRackType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateCollapsedRackType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_switches - computed: true, optional: false, required: false
  private _accessSwitches = new TemplateCollapsedRackTypeAccessSwitchesMap(this, "access_switches");
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
  private _genericSystems = new TemplateCollapsedRackTypeGenericSystemsMap(this, "generic_systems");
  public get genericSystems() {
    return this._genericSystems;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leaf_switches - computed: true, optional: false, required: false
  private _leafSwitches = new TemplateCollapsedRackTypeLeafSwitchesMap(this, "leaf_switches");
  public get leafSwitches() {
    return this._leafSwitches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed apstra_template_collapsed}
*/
export class TemplateCollapsed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_template_collapsed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateCollapsed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateCollapsed to import
  * @param importFromId The id of the existing TemplateCollapsed that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateCollapsed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_template_collapsed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/template_collapsed apstra_template_collapsed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateCollapsedConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateCollapsedConfig) {
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
    this._meshLinkCount = config.meshLinkCount;
    this._meshLinkSpeed = config.meshLinkSpeed;
    this._name = config.name;
    this._rackTypeId = config.rackTypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mesh_link_count - computed: false, optional: false, required: true
  private _meshLinkCount?: number; 
  public get meshLinkCount() {
    return this.getNumberAttribute('mesh_link_count');
  }
  public set meshLinkCount(value: number) {
    this._meshLinkCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshLinkCountInput() {
    return this._meshLinkCount;
  }

  // mesh_link_speed - computed: false, optional: false, required: true
  private _meshLinkSpeed?: string; 
  public get meshLinkSpeed() {
    return this.getStringAttribute('mesh_link_speed');
  }
  public set meshLinkSpeed(value: string) {
    this._meshLinkSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshLinkSpeedInput() {
    return this._meshLinkSpeed;
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

  // rack_type - computed: true, optional: false, required: false
  private _rackType = new TemplateCollapsedRackTypeOutputReference(this, "rack_type");
  public get rackType() {
    return this._rackType;
  }

  // rack_type_id - computed: false, optional: false, required: true
  private _rackTypeId?: string; 
  public get rackTypeId() {
    return this.getStringAttribute('rack_type_id');
  }
  public set rackTypeId(value: string) {
    this._rackTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rackTypeIdInput() {
    return this._rackTypeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_link_count: cdktf.numberToTerraform(this._meshLinkCount),
      mesh_link_speed: cdktf.stringToTerraform(this._meshLinkSpeed),
      name: cdktf.stringToTerraform(this._name),
      rack_type_id: cdktf.stringToTerraform(this._rackTypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mesh_link_count: {
        value: cdktf.numberToHclTerraform(this._meshLinkCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mesh_link_speed: {
        value: cdktf.stringToHclTerraform(this._meshLinkSpeed),
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
      rack_type_id: {
        value: cdktf.stringToHclTerraform(this._rackTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
