// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateRackBasedConfig extends cdktf.TerraformMetaArguments {
  /**
  * "unique" is for 3-stage designs; "single" is for 5-stage designs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#asn_allocation_scheme TemplateRackBased#asn_allocation_scheme}
  */
  readonly asnAllocationScheme: string;
  /**
  * Apstra name of the Rack Based Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#name TemplateRackBased#name}
  */
  readonly name: string;
  /**
  * Defines the inter-rack virtual network overlay protocol in the fabric. ["evpn","static"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#overlay_control_protocol TemplateRackBased#overlay_control_protocol}
  */
  readonly overlayControlProtocol: string;
  /**
  * Map of Rack Type info (count + details) keyed by Rack Type ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#rack_infos TemplateRackBased#rack_infos}
  */
  readonly rackInfos: { [key: string]: TemplateRackBasedRackInfos } | cdktf.IResolvable;
  /**
  * Spine layer details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#spine TemplateRackBased#spine}
  */
  readonly spine: TemplateRackBasedSpine;
}
export interface TemplateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfo {
  /**
  * Count of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#l3_peer_link_count TemplateRackBased#l3_peer_link_count}
  */
  readonly l3PeerLinkCount: number;
  /**
  * Speed of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#l3_peer_link_speed TemplateRackBased#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed: string;
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfoToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l3_peer_link_count: cdktf.numberToTerraform(struct!.l3PeerLinkCount),
    l3_peer_link_speed: cdktf.stringToTerraform(struct!.l3PeerLinkSpeed),
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfoToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfo): any {
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

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfo | undefined {
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

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfo | undefined) {
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
export interface TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#description TemplateRackBased#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#name TemplateRackBased#name}
  */
  readonly name: string;
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesLinksTagsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesLinksTagsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTags): any {
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

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTags | undefined {
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

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTags | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTagsList extends cdktf.ComplexList {
  public internalValue? : TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTags[] | cdktf.IResolvable

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTagsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeAccessSwitchesLinks {
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesLinksToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesLinksToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitchesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitchesLinks | undefined) {
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
  private _tags = new TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksOutputReference {
    return new TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups {
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanels {
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevice {
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesLogicalDeviceToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesLogicalDeviceToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevice | undefined) {
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
  private _panels = new TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplateRackBasedRackInfosRackTypeAccessSwitchesTags {
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesTagsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesTagsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitchesTags | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeAccessSwitchesTagsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeAccessSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeAccessSwitches {
}

export function templateRackBasedRackInfosRackTypeAccessSwitchesToTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeAccessSwitchesToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeAccessSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeAccessSwitches | undefined) {
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
  private _esiLagInfo = new TemplateRackBasedRackInfosRackTypeAccessSwitchesEsiLagInfoOutputReference(this, "esi_lag_info");
  public get esiLagInfo() {
    return this._esiLagInfo;
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateRackBasedRackInfosRackTypeAccessSwitchesLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplateRackBasedRackInfosRackTypeAccessSwitchesLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new TemplateRackBasedRackInfosRackTypeAccessSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplateRackBasedRackInfosRackTypeAccessSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateRackBasedRackInfosRackTypeAccessSwitchesOutputReference {
    return new TemplateRackBasedRackInfosRackTypeAccessSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#description TemplateRackBased#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#name TemplateRackBased#name}
  */
  readonly name: string;
}

export function templateRackBasedRackInfosRackTypeGenericSystemsLinksTagsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templateRackBasedRackInfosRackTypeGenericSystemsLinksTagsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTags): any {
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

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTags | undefined {
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

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTags | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTagsList extends cdktf.ComplexList {
  public internalValue? : TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTags[] | cdktf.IResolvable

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTagsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeGenericSystemsLinks {
}

export function templateRackBasedRackInfosRackTypeGenericSystemsLinksToTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeGenericSystemsLinksToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeGenericSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeGenericSystemsLinks | undefined) {
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
  private _tags = new TemplateRackBasedRackInfosRackTypeGenericSystemsLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateRackBasedRackInfosRackTypeGenericSystemsLinksOutputReference {
    return new TemplateRackBasedRackInfosRackTypeGenericSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups {
}

export function templateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanels {
}

export function templateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevice {
}

export function templateRackBasedRackInfosRackTypeGenericSystemsLogicalDeviceToTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeGenericSystemsLogicalDeviceToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevice | undefined) {
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
  private _panels = new TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplateRackBasedRackInfosRackTypeGenericSystemsTags {
}

export function templateRackBasedRackInfosRackTypeGenericSystemsTagsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeGenericSystemsTagsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeGenericSystemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeGenericSystemsTags | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeGenericSystemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeGenericSystemsTagsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeGenericSystemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeGenericSystems {
}

export function templateRackBasedRackInfosRackTypeGenericSystemsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeGenericSystemsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeGenericSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeGenericSystems | undefined) {
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
  private _links = new TemplateRackBasedRackInfosRackTypeGenericSystemsLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplateRackBasedRackInfosRackTypeGenericSystemsLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new TemplateRackBasedRackInfosRackTypeGenericSystemsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplateRackBasedRackInfosRackTypeGenericSystemsMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateRackBasedRackInfosRackTypeGenericSystemsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups {
}

export function templateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanels {
}

export function templateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevice {
}

export function templateRackBasedRackInfosRackTypeLeafSwitchesLogicalDeviceToTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeLeafSwitchesLogicalDeviceToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevice | undefined) {
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
  private _panels = new TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplateRackBasedRackInfosRackTypeLeafSwitchesMlagInfo {
  /**
  * Number of L3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#l3_peer_link_count TemplateRackBased#l3_peer_link_count}
  */
  readonly l3PeerLinkCount?: number;
  /**
  * Port channel number used for L3 Peer Link. Omit to allow Apstra to choose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#l3_peer_link_port_channel_id TemplateRackBased#l3_peer_link_port_channel_id}
  */
  readonly l3PeerLinkPortChannelId?: number;
  /**
  * Speed of l3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#l3_peer_link_speed TemplateRackBased#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed?: string;
  /**
  * MLAG keepalive VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#mlag_keepalive_vlan TemplateRackBased#mlag_keepalive_vlan}
  */
  readonly mlagKeepaliveVlan: number;
  /**
  * Number of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#peer_link_count TemplateRackBased#peer_link_count}
  */
  readonly peerLinkCount: number;
  /**
  * Port channel number used for L2 Peer Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#peer_link_port_channel_id TemplateRackBased#peer_link_port_channel_id}
  */
  readonly peerLinkPortChannelId: number;
  /**
  * Speed of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#peer_link_speed TemplateRackBased#peer_link_speed}
  */
  readonly peerLinkSpeed: string;
}

export function templateRackBasedRackInfosRackTypeLeafSwitchesMlagInfoToTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesMlagInfo): any {
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


export function templateRackBasedRackInfosRackTypeLeafSwitchesMlagInfoToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesMlagInfo): any {
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

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesMlagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeLeafSwitchesMlagInfo | undefined {
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

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeLeafSwitchesMlagInfo | undefined) {
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
export interface TemplateRackBasedRackInfosRackTypeLeafSwitchesTags {
}

export function templateRackBasedRackInfosRackTypeLeafSwitchesTagsToTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeLeafSwitchesTagsToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedRackInfosRackTypeLeafSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeLeafSwitchesTags | undefined) {
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

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedRackInfosRackTypeLeafSwitchesTagsOutputReference {
    return new TemplateRackBasedRackInfosRackTypeLeafSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedRackInfosRackTypeLeafSwitches {
}

export function templateRackBasedRackInfosRackTypeLeafSwitchesToTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeLeafSwitchesToHclTerraform(struct?: TemplateRackBasedRackInfosRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackTypeLeafSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackTypeLeafSwitches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplateRackBasedRackInfosRackTypeLeafSwitchesLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // mlag_info - computed: true, optional: false, required: false
  private _mlagInfo = new TemplateRackBasedRackInfosRackTypeLeafSwitchesMlagInfoOutputReference(this, "mlag_info");
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
  private _tags = new TemplateRackBasedRackInfosRackTypeLeafSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplateRackBasedRackInfosRackTypeLeafSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplateRackBasedRackInfosRackTypeLeafSwitchesOutputReference {
    return new TemplateRackBasedRackInfosRackTypeLeafSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateRackBasedRackInfosRackType {
}

export function templateRackBasedRackInfosRackTypeToTerraform(struct?: TemplateRackBasedRackInfosRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedRackInfosRackTypeToHclTerraform(struct?: TemplateRackBasedRackInfosRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedRackInfosRackTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedRackInfosRackType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfosRackType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_switches - computed: true, optional: false, required: false
  private _accessSwitches = new TemplateRackBasedRackInfosRackTypeAccessSwitchesMap(this, "access_switches");
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
  private _genericSystems = new TemplateRackBasedRackInfosRackTypeGenericSystemsMap(this, "generic_systems");
  public get genericSystems() {
    return this._genericSystems;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leaf_switches - computed: true, optional: false, required: false
  private _leafSwitches = new TemplateRackBasedRackInfosRackTypeLeafSwitchesMap(this, "leaf_switches");
  public get leafSwitches() {
    return this._leafSwitches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface TemplateRackBasedRackInfos {
  /**
  * Number of instances of this Rack Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#count TemplateRackBased#count}
  */
  readonly count: number;
}

export function templateRackBasedRackInfosToTerraform(struct?: TemplateRackBasedRackInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function templateRackBasedRackInfosToHclTerraform(struct?: TemplateRackBasedRackInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateRackBasedRackInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplateRackBasedRackInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedRackInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // rack_type - computed: true, optional: false, required: false
  private _rackType = new TemplateRackBasedRackInfosRackTypeOutputReference(this, "rack_type");
  public get rackType() {
    return this._rackType;
  }
}

export class TemplateRackBasedRackInfosMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TemplateRackBasedRackInfos } | cdktf.IResolvable

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
  public get(key: string): TemplateRackBasedRackInfosOutputReference {
    return new TemplateRackBasedRackInfosOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplateRackBasedSpineLogicalDevicePanelsPortGroups {
}

export function templateRackBasedSpineLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplateRackBasedSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedSpineLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplateRackBasedSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedSpineLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedSpineLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedSpineLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplateRackBasedSpineLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedSpineLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplateRackBasedSpineLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedSpineLogicalDevicePanels {
}

export function templateRackBasedSpineLogicalDevicePanelsToTerraform(struct?: TemplateRackBasedSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedSpineLogicalDevicePanelsToHclTerraform(struct?: TemplateRackBasedSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedSpineLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedSpineLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedSpineLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplateRackBasedSpineLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplateRackBasedSpineLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedSpineLogicalDevicePanelsOutputReference {
    return new TemplateRackBasedSpineLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedSpineLogicalDevice {
}

export function templateRackBasedSpineLogicalDeviceToTerraform(struct?: TemplateRackBasedSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedSpineLogicalDeviceToHclTerraform(struct?: TemplateRackBasedSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedSpineLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedSpineLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedSpineLogicalDevice | undefined) {
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
  private _panels = new TemplateRackBasedSpineLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplateRackBasedSpineTags {
}

export function templateRackBasedSpineTagsToTerraform(struct?: TemplateRackBasedSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateRackBasedSpineTagsToHclTerraform(struct?: TemplateRackBasedSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateRackBasedSpineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateRackBasedSpineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedSpineTags | undefined) {
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

export class TemplateRackBasedSpineTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplateRackBasedSpineTagsOutputReference {
    return new TemplateRackBasedSpineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateRackBasedSpine {
  /**
  * Number of Spine Switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#count TemplateRackBased#count}
  */
  readonly count: number;
  /**
  * Apstra Object ID of the Logical Device used to model this Spine Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#logical_device_id TemplateRackBased#logical_device_id}
  */
  readonly logicalDeviceId: string;
  /**
  * Count of links to each super Spine switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#super_spine_link_count TemplateRackBased#super_spine_link_count}
  */
  readonly superSpineLinkCount?: number;
  /**
  * Speed of links to super Spine switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#super_spine_link_speed TemplateRackBased#super_spine_link_speed}
  */
  readonly superSpineLinkSpeed?: string;
  /**
  * Set of Tag IDs to be applied to Spine Switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#tag_ids TemplateRackBased#tag_ids}
  */
  readonly tagIds?: string[];
}

export function templateRackBasedSpineToTerraform(struct?: TemplateRackBasedSpine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    logical_device_id: cdktf.stringToTerraform(struct!.logicalDeviceId),
    super_spine_link_count: cdktf.numberToTerraform(struct!.superSpineLinkCount),
    super_spine_link_speed: cdktf.stringToTerraform(struct!.superSpineLinkSpeed),
    tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIds),
  }
}


export function templateRackBasedSpineToHclTerraform(struct?: TemplateRackBasedSpine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logical_device_id: {
      value: cdktf.stringToHclTerraform(struct!.logicalDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    super_spine_link_count: {
      value: cdktf.numberToHclTerraform(struct!.superSpineLinkCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    super_spine_link_speed: {
      value: cdktf.stringToHclTerraform(struct!.superSpineLinkSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateRackBasedSpineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplateRackBasedSpine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._logicalDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalDeviceId = this._logicalDeviceId;
    }
    if (this._superSpineLinkCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.superSpineLinkCount = this._superSpineLinkCount;
    }
    if (this._superSpineLinkSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.superSpineLinkSpeed = this._superSpineLinkSpeed;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateRackBasedSpine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._logicalDeviceId = undefined;
      this._superSpineLinkCount = undefined;
      this._superSpineLinkSpeed = undefined;
      this._tagIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._logicalDeviceId = value.logicalDeviceId;
      this._superSpineLinkCount = value.superSpineLinkCount;
      this._superSpineLinkSpeed = value.superSpineLinkSpeed;
      this._tagIds = value.tagIds;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplateRackBasedSpineLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: false, optional: false, required: true
  private _logicalDeviceId?: string; 
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }
  public set logicalDeviceId(value: string) {
    this._logicalDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDeviceIdInput() {
    return this._logicalDeviceId;
  }

  // super_spine_link_count - computed: false, optional: true, required: false
  private _superSpineLinkCount?: number; 
  public get superSpineLinkCount() {
    return this.getNumberAttribute('super_spine_link_count');
  }
  public set superSpineLinkCount(value: number) {
    this._superSpineLinkCount = value;
  }
  public resetSuperSpineLinkCount() {
    this._superSpineLinkCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superSpineLinkCountInput() {
    return this._superSpineLinkCount;
  }

  // super_spine_link_speed - computed: false, optional: true, required: false
  private _superSpineLinkSpeed?: string; 
  public get superSpineLinkSpeed() {
    return this.getStringAttribute('super_spine_link_speed');
  }
  public set superSpineLinkSpeed(value: string) {
    this._superSpineLinkSpeed = value;
  }
  public resetSuperSpineLinkSpeed() {
    this._superSpineLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superSpineLinkSpeedInput() {
    return this._superSpineLinkSpeed;
  }

  // tag_ids - computed: false, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new TemplateRackBasedSpineTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based apstra_template_rack_based}
*/
export class TemplateRackBased extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_template_rack_based";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateRackBased resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateRackBased to import
  * @param importFromId The id of the existing TemplateRackBased that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateRackBased to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_template_rack_based", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_rack_based apstra_template_rack_based} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateRackBasedConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateRackBasedConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_template_rack_based',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asnAllocationScheme = config.asnAllocationScheme;
    this._name = config.name;
    this._overlayControlProtocol = config.overlayControlProtocol;
    this._rackInfos.internalValue = config.rackInfos;
    this._spine.internalValue = config.spine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn_allocation_scheme - computed: false, optional: false, required: true
  private _asnAllocationScheme?: string; 
  public get asnAllocationScheme() {
    return this.getStringAttribute('asn_allocation_scheme');
  }
  public set asnAllocationScheme(value: string) {
    this._asnAllocationScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnAllocationSchemeInput() {
    return this._asnAllocationScheme;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // overlay_control_protocol - computed: false, optional: false, required: true
  private _overlayControlProtocol?: string; 
  public get overlayControlProtocol() {
    return this.getStringAttribute('overlay_control_protocol');
  }
  public set overlayControlProtocol(value: string) {
    this._overlayControlProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayControlProtocolInput() {
    return this._overlayControlProtocol;
  }

  // rack_infos - computed: false, optional: false, required: true
  private _rackInfos = new TemplateRackBasedRackInfosMap(this, "rack_infos");
  public get rackInfos() {
    return this._rackInfos;
  }
  public putRackInfos(value: { [key: string]: TemplateRackBasedRackInfos } | cdktf.IResolvable) {
    this._rackInfos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInfosInput() {
    return this._rackInfos.internalValue;
  }

  // spine - computed: false, optional: false, required: true
  private _spine = new TemplateRackBasedSpineOutputReference(this, "spine");
  public get spine() {
    return this._spine;
  }
  public putSpine(value: TemplateRackBasedSpine) {
    this._spine.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spineInput() {
    return this._spine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn_allocation_scheme: cdktf.stringToTerraform(this._asnAllocationScheme),
      name: cdktf.stringToTerraform(this._name),
      overlay_control_protocol: cdktf.stringToTerraform(this._overlayControlProtocol),
      rack_infos: cdktf.hashMapper(templateRackBasedRackInfosToTerraform)(this._rackInfos.internalValue),
      spine: templateRackBasedSpineToTerraform(this._spine.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn_allocation_scheme: {
        value: cdktf.stringToHclTerraform(this._asnAllocationScheme),
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
      overlay_control_protocol: {
        value: cdktf.stringToHclTerraform(this._overlayControlProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rack_infos: {
        value: cdktf.hashMapperHcl(templateRackBasedRackInfosToHclTerraform)(this._rackInfos.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "TemplateRackBasedRackInfosMap",
      },
      spine: {
        value: templateRackBasedSpineToHclTerraform(this._spine.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TemplateRackBasedSpine",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
