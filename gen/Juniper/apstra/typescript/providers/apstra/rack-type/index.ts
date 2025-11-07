// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RackTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Switches are optional, link to Leaf Switches in the same rack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#access_switches RackType#access_switches}
  */
  readonly accessSwitches?: { [key: string]: RackTypeAccessSwitches } | cdktf.IResolvable;
  /**
  * Rack Type description, displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#description RackType#description}
  */
  readonly description?: string;
  /**
  * Must be one of 'l3clos', 'l3collapsed', 'rail_collapsed'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#fabric_connectivity_design RackType#fabric_connectivity_design}
  */
  readonly fabricConnectivityDesign: string;
  /**
  * Generic Systems are optional rack elements notmanaged by Apstra: Servers, routers, firewalls, etc...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#generic_systems RackType#generic_systems}
  */
  readonly genericSystems?: { [key: string]: RackTypeGenericSystems } | cdktf.IResolvable;
  /**
  * Each Rack Type is required to have at least one Leaf Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#leaf_switches RackType#leaf_switches}
  */
  readonly leafSwitches: { [key: string]: RackTypeLeafSwitches } | cdktf.IResolvable;
  /**
  * Rack Type name, displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#name RackType#name}
  */
  readonly name: string;
}
export interface RackTypeAccessSwitchesEsiLagInfo {
  /**
  * Count of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#l3_peer_link_count RackType#l3_peer_link_count}
  */
  readonly l3PeerLinkCount: number;
  /**
  * Speed of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#l3_peer_link_speed RackType#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed: string;
}

export function rackTypeAccessSwitchesEsiLagInfoToTerraform(struct?: RackTypeAccessSwitchesEsiLagInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l3_peer_link_count: cdktf.numberToTerraform(struct!.l3PeerLinkCount),
    l3_peer_link_speed: cdktf.stringToTerraform(struct!.l3PeerLinkSpeed),
  }
}


export function rackTypeAccessSwitchesEsiLagInfoToHclTerraform(struct?: RackTypeAccessSwitchesEsiLagInfo | cdktf.IResolvable): any {
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

export class RackTypeAccessSwitchesEsiLagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RackTypeAccessSwitchesEsiLagInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RackTypeAccessSwitchesEsiLagInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._l3PeerLinkCount = undefined;
      this._l3PeerLinkSpeed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._l3PeerLinkCount = value.l3PeerLinkCount;
      this._l3PeerLinkSpeed = value.l3PeerLinkSpeed;
    }
  }

  // l3_peer_link_count - computed: false, optional: false, required: true
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

  // l3_peer_link_speed - computed: false, optional: false, required: true
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
export interface RackTypeAccessSwitchesLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#description RackType#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#name RackType#name}
  */
  readonly name: string;
}

export function rackTypeAccessSwitchesLinksTagsToTerraform(struct?: RackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function rackTypeAccessSwitchesLinksTagsToHclTerraform(struct?: RackTypeAccessSwitchesLinksTags): any {
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

export class RackTypeAccessSwitchesLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeAccessSwitchesLinksTags | undefined {
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

  public set internalValue(value: RackTypeAccessSwitchesLinksTags | undefined) {
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

export class RackTypeAccessSwitchesLinksTagsList extends cdktf.ComplexList {
  public internalValue? : RackTypeAccessSwitchesLinksTags[] | cdktf.IResolvable

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
  public get(index: number): RackTypeAccessSwitchesLinksTagsOutputReference {
    return new RackTypeAccessSwitchesLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeAccessSwitchesLinks {
  /**
  * LAG negotiation mode of the Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#lag_mode RackType#lag_mode}
  */
  readonly lagMode?: string;
  /**
  * Number of Links to each switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#links_per_switch RackType#links_per_switch}
  */
  readonly linksPerSwitch?: number;
  /**
  * Speed of this Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#speed RackType#speed}
  */
  readonly speed: string;
  /**
  * For non-lAG connections to redundant switch pairs, this field selects the target switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#switch_peer RackType#switch_peer}
  */
  readonly switchPeer?: string;
  /**
  * Set of Tag IDs to be applied to this Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#tag_ids RackType#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * The `name` of the switch in this Rack Type to which this Link connects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#target_switch_name RackType#target_switch_name}
  */
  readonly targetSwitchName: string;
}

export function rackTypeAccessSwitchesLinksToTerraform(struct?: RackTypeAccessSwitchesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lag_mode: cdktf.stringToTerraform(struct!.lagMode),
    links_per_switch: cdktf.numberToTerraform(struct!.linksPerSwitch),
    speed: cdktf.stringToTerraform(struct!.speed),
    switch_peer: cdktf.stringToTerraform(struct!.switchPeer),
    tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIds),
    target_switch_name: cdktf.stringToTerraform(struct!.targetSwitchName),
  }
}


export function rackTypeAccessSwitchesLinksToHclTerraform(struct?: RackTypeAccessSwitchesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lag_mode: {
      value: cdktf.stringToHclTerraform(struct!.lagMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links_per_switch: {
      value: cdktf.numberToHclTerraform(struct!.linksPerSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_peer: {
      value: cdktf.stringToHclTerraform(struct!.switchPeer),
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
    target_switch_name: {
      value: cdktf.stringToHclTerraform(struct!.targetSwitchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RackTypeAccessSwitchesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeAccessSwitchesLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lagMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lagMode = this._lagMode;
    }
    if (this._linksPerSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.linksPerSwitch = this._linksPerSwitch;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._switchPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPeer = this._switchPeer;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    if (this._targetSwitchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSwitchName = this._targetSwitchName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeAccessSwitchesLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lagMode = undefined;
      this._linksPerSwitch = undefined;
      this._speed = undefined;
      this._switchPeer = undefined;
      this._tagIds = undefined;
      this._targetSwitchName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lagMode = value.lagMode;
      this._linksPerSwitch = value.linksPerSwitch;
      this._speed = value.speed;
      this._switchPeer = value.switchPeer;
      this._tagIds = value.tagIds;
      this._targetSwitchName = value.targetSwitchName;
    }
  }

  // lag_mode - computed: true, optional: true, required: false
  private _lagMode?: string; 
  public get lagMode() {
    return this.getStringAttribute('lag_mode');
  }
  public set lagMode(value: string) {
    this._lagMode = value;
  }
  public resetLagMode() {
    this._lagMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagModeInput() {
    return this._lagMode;
  }

  // links_per_switch - computed: true, optional: true, required: false
  private _linksPerSwitch?: number; 
  public get linksPerSwitch() {
    return this.getNumberAttribute('links_per_switch');
  }
  public set linksPerSwitch(value: number) {
    this._linksPerSwitch = value;
  }
  public resetLinksPerSwitch() {
    this._linksPerSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksPerSwitchInput() {
    return this._linksPerSwitch;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // switch_peer - computed: true, optional: true, required: false
  private _switchPeer?: string; 
  public get switchPeer() {
    return this.getStringAttribute('switch_peer');
  }
  public set switchPeer(value: string) {
    this._switchPeer = value;
  }
  public resetSwitchPeer() {
    this._switchPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPeerInput() {
    return this._switchPeer;
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
  private _tags = new RackTypeAccessSwitchesLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: false, optional: false, required: true
  private _targetSwitchName?: string; 
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
  public set targetSwitchName(value: string) {
    this._targetSwitchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSwitchNameInput() {
    return this._targetSwitchName;
  }
}

export class RackTypeAccessSwitchesLinksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: RackTypeAccessSwitchesLinks } | cdktf.IResolvable

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
  public get(key: string): RackTypeAccessSwitchesLinksOutputReference {
    return new RackTypeAccessSwitchesLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface RackTypeAccessSwitchesLogicalDevicePanelsPortGroups {
}

export function rackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: RackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: RackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class RackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new RackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeAccessSwitchesLogicalDevicePanels {
}

export function rackTypeAccessSwitchesLogicalDevicePanelsToTerraform(struct?: RackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeAccessSwitchesLogicalDevicePanelsToHclTerraform(struct?: RackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeAccessSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeAccessSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeAccessSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new RackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class RackTypeAccessSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeAccessSwitchesLogicalDevicePanelsOutputReference {
    return new RackTypeAccessSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeAccessSwitchesLogicalDevice {
}

export function rackTypeAccessSwitchesLogicalDeviceToTerraform(struct?: RackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeAccessSwitchesLogicalDeviceToHclTerraform(struct?: RackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeAccessSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RackTypeAccessSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeAccessSwitchesLogicalDevice | undefined) {
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
  private _panels = new RackTypeAccessSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface RackTypeAccessSwitchesTags {
}

export function rackTypeAccessSwitchesTagsToTerraform(struct?: RackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeAccessSwitchesTagsToHclTerraform(struct?: RackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeAccessSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeAccessSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeAccessSwitchesTags | undefined) {
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

export class RackTypeAccessSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeAccessSwitchesTagsOutputReference {
    return new RackTypeAccessSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeAccessSwitches {
  /**
  * Number of Access Switches of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#count RackType#count}
  */
  readonly count: number;
  /**
  * Including this stanza converts the Access Switch into a redundant pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#esi_lag_info RackType#esi_lag_info}
  */
  readonly esiLagInfo?: RackTypeAccessSwitchesEsiLagInfo;
  /**
  * Each Access Switch is required to have at least one Link to a Leaf Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#links RackType#links}
  */
  readonly links: { [key: string]: RackTypeAccessSwitchesLinks } | cdktf.IResolvable;
  /**
  * Apstra Object ID of the Logical Device used to model this Access Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#logical_device_id RackType#logical_device_id}
  */
  readonly logicalDeviceId: string;
  /**
  * Set of Tag IDs to be applied to this Access Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#tag_ids RackType#tag_ids}
  */
  readonly tagIds?: string[];
}

export function rackTypeAccessSwitchesToTerraform(struct?: RackTypeAccessSwitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    esi_lag_info: rackTypeAccessSwitchesEsiLagInfoToTerraform(struct!.esiLagInfo),
    links: cdktf.hashMapper(rackTypeAccessSwitchesLinksToTerraform)(struct!.links),
    logical_device_id: cdktf.stringToTerraform(struct!.logicalDeviceId),
    tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIds),
  }
}


export function rackTypeAccessSwitchesToHclTerraform(struct?: RackTypeAccessSwitches | cdktf.IResolvable): any {
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
    esi_lag_info: {
      value: rackTypeAccessSwitchesEsiLagInfoToHclTerraform(struct!.esiLagInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "RackTypeAccessSwitchesEsiLagInfo",
    },
    links: {
      value: cdktf.hashMapperHcl(rackTypeAccessSwitchesLinksToHclTerraform)(struct!.links),
      isBlock: true,
      type: "map",
      storageClassType: "RackTypeAccessSwitchesLinksMap",
    },
    logical_device_id: {
      value: cdktf.stringToHclTerraform(struct!.logicalDeviceId),
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

export class RackTypeAccessSwitchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeAccessSwitches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._esiLagInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esiLagInfo = this._esiLagInfo?.internalValue;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._logicalDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalDeviceId = this._logicalDeviceId;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeAccessSwitches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._esiLagInfo.internalValue = undefined;
      this._links.internalValue = undefined;
      this._logicalDeviceId = undefined;
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
      this._esiLagInfo.internalValue = value.esiLagInfo;
      this._links.internalValue = value.links;
      this._logicalDeviceId = value.logicalDeviceId;
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

  // esi_lag_info - computed: false, optional: true, required: false
  private _esiLagInfo = new RackTypeAccessSwitchesEsiLagInfoOutputReference(this, "esi_lag_info");
  public get esiLagInfo() {
    return this._esiLagInfo;
  }
  public putEsiLagInfo(value: RackTypeAccessSwitchesEsiLagInfo) {
    this._esiLagInfo.internalValue = value;
  }
  public resetEsiLagInfo() {
    this._esiLagInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esiLagInfoInput() {
    return this._esiLagInfo.internalValue;
  }

  // links - computed: false, optional: false, required: true
  private _links = new RackTypeAccessSwitchesLinksMap(this, "links");
  public get links() {
    return this._links;
  }
  public putLinks(value: { [key: string]: RackTypeAccessSwitchesLinks } | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new RackTypeAccessSwitchesLogicalDeviceOutputReference(this, "logical_device");
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

  // redundancy_protocol - computed: true, optional: false, required: false
  public get redundancyProtocol() {
    return this.getStringAttribute('redundancy_protocol');
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
  private _tags = new RackTypeAccessSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class RackTypeAccessSwitchesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: RackTypeAccessSwitches } | cdktf.IResolvable

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
  public get(key: string): RackTypeAccessSwitchesOutputReference {
    return new RackTypeAccessSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface RackTypeGenericSystemsLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#description RackType#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#name RackType#name}
  */
  readonly name: string;
}

export function rackTypeGenericSystemsLinksTagsToTerraform(struct?: RackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function rackTypeGenericSystemsLinksTagsToHclTerraform(struct?: RackTypeGenericSystemsLinksTags): any {
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

export class RackTypeGenericSystemsLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeGenericSystemsLinksTags | undefined {
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

  public set internalValue(value: RackTypeGenericSystemsLinksTags | undefined) {
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

export class RackTypeGenericSystemsLinksTagsList extends cdktf.ComplexList {
  public internalValue? : RackTypeGenericSystemsLinksTags[] | cdktf.IResolvable

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
  public get(index: number): RackTypeGenericSystemsLinksTagsOutputReference {
    return new RackTypeGenericSystemsLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeGenericSystemsLinks {
  /**
  * LAG negotiation mode of the Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#lag_mode RackType#lag_mode}
  */
  readonly lagMode?: string;
  /**
  * Number of Links to each switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#links_per_switch RackType#links_per_switch}
  */
  readonly linksPerSwitch?: number;
  /**
  * Speed of this Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#speed RackType#speed}
  */
  readonly speed: string;
  /**
  * For non-lAG connections to redundant switch pairs, this field selects the target switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#switch_peer RackType#switch_peer}
  */
  readonly switchPeer?: string;
  /**
  * Set of Tag IDs to be applied to this Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#tag_ids RackType#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * The `name` of the switch in this Rack Type to which this Link connects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#target_switch_name RackType#target_switch_name}
  */
  readonly targetSwitchName: string;
}

export function rackTypeGenericSystemsLinksToTerraform(struct?: RackTypeGenericSystemsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lag_mode: cdktf.stringToTerraform(struct!.lagMode),
    links_per_switch: cdktf.numberToTerraform(struct!.linksPerSwitch),
    speed: cdktf.stringToTerraform(struct!.speed),
    switch_peer: cdktf.stringToTerraform(struct!.switchPeer),
    tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIds),
    target_switch_name: cdktf.stringToTerraform(struct!.targetSwitchName),
  }
}


export function rackTypeGenericSystemsLinksToHclTerraform(struct?: RackTypeGenericSystemsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lag_mode: {
      value: cdktf.stringToHclTerraform(struct!.lagMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links_per_switch: {
      value: cdktf.numberToHclTerraform(struct!.linksPerSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_peer: {
      value: cdktf.stringToHclTerraform(struct!.switchPeer),
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
    target_switch_name: {
      value: cdktf.stringToHclTerraform(struct!.targetSwitchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RackTypeGenericSystemsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeGenericSystemsLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lagMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lagMode = this._lagMode;
    }
    if (this._linksPerSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.linksPerSwitch = this._linksPerSwitch;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._switchPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPeer = this._switchPeer;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    if (this._targetSwitchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSwitchName = this._targetSwitchName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeGenericSystemsLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lagMode = undefined;
      this._linksPerSwitch = undefined;
      this._speed = undefined;
      this._switchPeer = undefined;
      this._tagIds = undefined;
      this._targetSwitchName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lagMode = value.lagMode;
      this._linksPerSwitch = value.linksPerSwitch;
      this._speed = value.speed;
      this._switchPeer = value.switchPeer;
      this._tagIds = value.tagIds;
      this._targetSwitchName = value.targetSwitchName;
    }
  }

  // lag_mode - computed: true, optional: true, required: false
  private _lagMode?: string; 
  public get lagMode() {
    return this.getStringAttribute('lag_mode');
  }
  public set lagMode(value: string) {
    this._lagMode = value;
  }
  public resetLagMode() {
    this._lagMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagModeInput() {
    return this._lagMode;
  }

  // links_per_switch - computed: true, optional: true, required: false
  private _linksPerSwitch?: number; 
  public get linksPerSwitch() {
    return this.getNumberAttribute('links_per_switch');
  }
  public set linksPerSwitch(value: number) {
    this._linksPerSwitch = value;
  }
  public resetLinksPerSwitch() {
    this._linksPerSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksPerSwitchInput() {
    return this._linksPerSwitch;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // switch_peer - computed: true, optional: true, required: false
  private _switchPeer?: string; 
  public get switchPeer() {
    return this.getStringAttribute('switch_peer');
  }
  public set switchPeer(value: string) {
    this._switchPeer = value;
  }
  public resetSwitchPeer() {
    this._switchPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPeerInput() {
    return this._switchPeer;
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
  private _tags = new RackTypeGenericSystemsLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: false, optional: false, required: true
  private _targetSwitchName?: string; 
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
  public set targetSwitchName(value: string) {
    this._targetSwitchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSwitchNameInput() {
    return this._targetSwitchName;
  }
}

export class RackTypeGenericSystemsLinksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: RackTypeGenericSystemsLinks } | cdktf.IResolvable

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
  public get(key: string): RackTypeGenericSystemsLinksOutputReference {
    return new RackTypeGenericSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface RackTypeGenericSystemsLogicalDevicePanelsPortGroups {
}

export function rackTypeGenericSystemsLogicalDevicePanelsPortGroupsToTerraform(struct?: RackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeGenericSystemsLogicalDevicePanelsPortGroupsToHclTerraform(struct?: RackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined) {
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

export class RackTypeGenericSystemsLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference {
    return new RackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeGenericSystemsLogicalDevicePanels {
}

export function rackTypeGenericSystemsLogicalDevicePanelsToTerraform(struct?: RackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeGenericSystemsLogicalDevicePanelsToHclTerraform(struct?: RackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeGenericSystemsLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeGenericSystemsLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeGenericSystemsLogicalDevicePanels | undefined) {
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
  private _portGroups = new RackTypeGenericSystemsLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class RackTypeGenericSystemsLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeGenericSystemsLogicalDevicePanelsOutputReference {
    return new RackTypeGenericSystemsLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeGenericSystemsLogicalDevice {
}

export function rackTypeGenericSystemsLogicalDeviceToTerraform(struct?: RackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeGenericSystemsLogicalDeviceToHclTerraform(struct?: RackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeGenericSystemsLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RackTypeGenericSystemsLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeGenericSystemsLogicalDevice | undefined) {
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
  private _panels = new RackTypeGenericSystemsLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface RackTypeGenericSystemsTags {
}

export function rackTypeGenericSystemsTagsToTerraform(struct?: RackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeGenericSystemsTagsToHclTerraform(struct?: RackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeGenericSystemsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeGenericSystemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeGenericSystemsTags | undefined) {
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

export class RackTypeGenericSystemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeGenericSystemsTagsOutputReference {
    return new RackTypeGenericSystemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeGenericSystems {
  /**
  * Number of Generic Systems of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#count RackType#count}
  */
  readonly count: number;
  /**
  * Each Generic System is required to have at least one Link to a Leaf Switch or Access Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#links RackType#links}
  */
  readonly links: { [key: string]: RackTypeGenericSystemsLinks } | cdktf.IResolvable;
  /**
  * Apstra Object ID of the Logical Device used to model this Generic System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#logical_device_id RackType#logical_device_id}
  */
  readonly logicalDeviceId: string;
  /**
  * Port channel IDs are used when rendering leaf device port-channel configuration towards generic systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#port_channel_id_max RackType#port_channel_id_max}
  */
  readonly portChannelIdMax?: number;
  /**
  * Port channel IDs are used when rendering leaf device port-channel configuration towards generic systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#port_channel_id_min RackType#port_channel_id_min}
  */
  readonly portChannelIdMin?: number;
  /**
  * Set of Tag IDs to be applied to this Generic System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#tag_ids RackType#tag_ids}
  */
  readonly tagIds?: string[];
}

export function rackTypeGenericSystemsToTerraform(struct?: RackTypeGenericSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    links: cdktf.hashMapper(rackTypeGenericSystemsLinksToTerraform)(struct!.links),
    logical_device_id: cdktf.stringToTerraform(struct!.logicalDeviceId),
    port_channel_id_max: cdktf.numberToTerraform(struct!.portChannelIdMax),
    port_channel_id_min: cdktf.numberToTerraform(struct!.portChannelIdMin),
    tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIds),
  }
}


export function rackTypeGenericSystemsToHclTerraform(struct?: RackTypeGenericSystems | cdktf.IResolvable): any {
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
    links: {
      value: cdktf.hashMapperHcl(rackTypeGenericSystemsLinksToHclTerraform)(struct!.links),
      isBlock: true,
      type: "map",
      storageClassType: "RackTypeGenericSystemsLinksMap",
    },
    logical_device_id: {
      value: cdktf.stringToHclTerraform(struct!.logicalDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_channel_id_max: {
      value: cdktf.numberToHclTerraform(struct!.portChannelIdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_channel_id_min: {
      value: cdktf.numberToHclTerraform(struct!.portChannelIdMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RackTypeGenericSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeGenericSystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._logicalDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalDeviceId = this._logicalDeviceId;
    }
    if (this._portChannelIdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.portChannelIdMax = this._portChannelIdMax;
    }
    if (this._portChannelIdMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.portChannelIdMin = this._portChannelIdMin;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeGenericSystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._links.internalValue = undefined;
      this._logicalDeviceId = undefined;
      this._portChannelIdMax = undefined;
      this._portChannelIdMin = undefined;
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
      this._links.internalValue = value.links;
      this._logicalDeviceId = value.logicalDeviceId;
      this._portChannelIdMax = value.portChannelIdMax;
      this._portChannelIdMin = value.portChannelIdMin;
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

  // links - computed: false, optional: false, required: true
  private _links = new RackTypeGenericSystemsLinksMap(this, "links");
  public get links() {
    return this._links;
  }
  public putLinks(value: { [key: string]: RackTypeGenericSystemsLinks } | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new RackTypeGenericSystemsLogicalDeviceOutputReference(this, "logical_device");
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

  // port_channel_id_max - computed: true, optional: true, required: false
  private _portChannelIdMax?: number; 
  public get portChannelIdMax() {
    return this.getNumberAttribute('port_channel_id_max');
  }
  public set portChannelIdMax(value: number) {
    this._portChannelIdMax = value;
  }
  public resetPortChannelIdMax() {
    this._portChannelIdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelIdMaxInput() {
    return this._portChannelIdMax;
  }

  // port_channel_id_min - computed: true, optional: true, required: false
  private _portChannelIdMin?: number; 
  public get portChannelIdMin() {
    return this.getNumberAttribute('port_channel_id_min');
  }
  public set portChannelIdMin(value: number) {
    this._portChannelIdMin = value;
  }
  public resetPortChannelIdMin() {
    this._portChannelIdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelIdMinInput() {
    return this._portChannelIdMin;
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
  private _tags = new RackTypeGenericSystemsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class RackTypeGenericSystemsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: RackTypeGenericSystems } | cdktf.IResolvable

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
  public get(key: string): RackTypeGenericSystemsOutputReference {
    return new RackTypeGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface RackTypeLeafSwitchesLogicalDevicePanelsPortGroups {
}

export function rackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: RackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: RackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class RackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new RackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeLeafSwitchesLogicalDevicePanels {
}

export function rackTypeLeafSwitchesLogicalDevicePanelsToTerraform(struct?: RackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeLeafSwitchesLogicalDevicePanelsToHclTerraform(struct?: RackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeLeafSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeLeafSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeLeafSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new RackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class RackTypeLeafSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeLeafSwitchesLogicalDevicePanelsOutputReference {
    return new RackTypeLeafSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeLeafSwitchesLogicalDevice {
}

export function rackTypeLeafSwitchesLogicalDeviceToTerraform(struct?: RackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeLeafSwitchesLogicalDeviceToHclTerraform(struct?: RackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeLeafSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RackTypeLeafSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeLeafSwitchesLogicalDevice | undefined) {
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
  private _panels = new RackTypeLeafSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface RackTypeLeafSwitchesMlagInfo {
  /**
  * Number of L3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#l3_peer_link_count RackType#l3_peer_link_count}
  */
  readonly l3PeerLinkCount?: number;
  /**
  * Port channel number used for L3 Peer Link. Omit to allow Apstra to choose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#l3_peer_link_port_channel_id RackType#l3_peer_link_port_channel_id}
  */
  readonly l3PeerLinkPortChannelId?: number;
  /**
  * Speed of l3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#l3_peer_link_speed RackType#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed?: string;
  /**
  * MLAG keepalive VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#mlag_keepalive_vlan RackType#mlag_keepalive_vlan}
  */
  readonly mlagKeepaliveVlan: number;
  /**
  * Number of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#peer_link_count RackType#peer_link_count}
  */
  readonly peerLinkCount: number;
  /**
  * Port channel number used for L2 Peer Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#peer_link_port_channel_id RackType#peer_link_port_channel_id}
  */
  readonly peerLinkPortChannelId: number;
  /**
  * Speed of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#peer_link_speed RackType#peer_link_speed}
  */
  readonly peerLinkSpeed: string;
}

export function rackTypeLeafSwitchesMlagInfoToTerraform(struct?: RackTypeLeafSwitchesMlagInfo | cdktf.IResolvable): any {
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


export function rackTypeLeafSwitchesMlagInfoToHclTerraform(struct?: RackTypeLeafSwitchesMlagInfo | cdktf.IResolvable): any {
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

export class RackTypeLeafSwitchesMlagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RackTypeLeafSwitchesMlagInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: RackTypeLeafSwitchesMlagInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._l3PeerLinkCount = undefined;
      this._l3PeerLinkPortChannelId = undefined;
      this._l3PeerLinkSpeed = undefined;
      this._mlagKeepaliveVlan = undefined;
      this._peerLinkCount = undefined;
      this._peerLinkPortChannelId = undefined;
      this._peerLinkSpeed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._l3PeerLinkCount = value.l3PeerLinkCount;
      this._l3PeerLinkPortChannelId = value.l3PeerLinkPortChannelId;
      this._l3PeerLinkSpeed = value.l3PeerLinkSpeed;
      this._mlagKeepaliveVlan = value.mlagKeepaliveVlan;
      this._peerLinkCount = value.peerLinkCount;
      this._peerLinkPortChannelId = value.peerLinkPortChannelId;
      this._peerLinkSpeed = value.peerLinkSpeed;
    }
  }

  // l3_peer_link_count - computed: false, optional: true, required: false
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

  // l3_peer_link_port_channel_id - computed: false, optional: true, required: false
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

  // l3_peer_link_speed - computed: false, optional: true, required: false
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

  // mlag_keepalive_vlan - computed: false, optional: false, required: true
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

  // peer_link_count - computed: false, optional: false, required: true
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

  // peer_link_port_channel_id - computed: false, optional: false, required: true
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

  // peer_link_speed - computed: false, optional: false, required: true
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
export interface RackTypeLeafSwitchesTags {
}

export function rackTypeLeafSwitchesTagsToTerraform(struct?: RackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function rackTypeLeafSwitchesTagsToHclTerraform(struct?: RackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RackTypeLeafSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeLeafSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeLeafSwitchesTags | undefined) {
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

export class RackTypeLeafSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): RackTypeLeafSwitchesTagsOutputReference {
    return new RackTypeLeafSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RackTypeLeafSwitches {
  /**
  * Apstra Object ID of the Logical Device used to model this Leaf Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#logical_device_id RackType#logical_device_id}
  */
  readonly logicalDeviceId: string;
  /**
  * Required when `redundancy_protocol` set to `mlag`, defines the connectivity between MLAG peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#mlag_info RackType#mlag_info}
  */
  readonly mlagInfo?: RackTypeLeafSwitchesMlagInfo;
  /**
  * Enabling a redundancy protocol converts a single Leaf Switch into a LAG-capable switch pair. Must be one of 'esi', 'mlag'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#redundancy_protocol RackType#redundancy_protocol}
  */
  readonly redundancyProtocol?: string;
  /**
  * Links per Spine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#spine_link_count RackType#spine_link_count}
  */
  readonly spineLinkCount?: number;
  /**
  * Speed of Spine-facing links, something like '10G'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#spine_link_speed RackType#spine_link_speed}
  */
  readonly spineLinkSpeed?: string;
  /**
  * Set of Tag IDs to be applied to this Leaf Switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#tag_ids RackType#tag_ids}
  */
  readonly tagIds?: string[];
}

export function rackTypeLeafSwitchesToTerraform(struct?: RackTypeLeafSwitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_device_id: cdktf.stringToTerraform(struct!.logicalDeviceId),
    mlag_info: rackTypeLeafSwitchesMlagInfoToTerraform(struct!.mlagInfo),
    redundancy_protocol: cdktf.stringToTerraform(struct!.redundancyProtocol),
    spine_link_count: cdktf.numberToTerraform(struct!.spineLinkCount),
    spine_link_speed: cdktf.stringToTerraform(struct!.spineLinkSpeed),
    tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIds),
  }
}


export function rackTypeLeafSwitchesToHclTerraform(struct?: RackTypeLeafSwitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_device_id: {
      value: cdktf.stringToHclTerraform(struct!.logicalDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlag_info: {
      value: rackTypeLeafSwitchesMlagInfoToHclTerraform(struct!.mlagInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "RackTypeLeafSwitchesMlagInfo",
    },
    redundancy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.redundancyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spine_link_count: {
      value: cdktf.numberToHclTerraform(struct!.spineLinkCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spine_link_speed: {
      value: cdktf.stringToHclTerraform(struct!.spineLinkSpeed),
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

export class RackTypeLeafSwitchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RackTypeLeafSwitches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalDeviceId = this._logicalDeviceId;
    }
    if (this._mlagInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlagInfo = this._mlagInfo?.internalValue;
    }
    if (this._redundancyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancyProtocol = this._redundancyProtocol;
    }
    if (this._spineLinkCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.spineLinkCount = this._spineLinkCount;
    }
    if (this._spineLinkSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.spineLinkSpeed = this._spineLinkSpeed;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RackTypeLeafSwitches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicalDeviceId = undefined;
      this._mlagInfo.internalValue = undefined;
      this._redundancyProtocol = undefined;
      this._spineLinkCount = undefined;
      this._spineLinkSpeed = undefined;
      this._tagIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logicalDeviceId = value.logicalDeviceId;
      this._mlagInfo.internalValue = value.mlagInfo;
      this._redundancyProtocol = value.redundancyProtocol;
      this._spineLinkCount = value.spineLinkCount;
      this._spineLinkSpeed = value.spineLinkSpeed;
      this._tagIds = value.tagIds;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new RackTypeLeafSwitchesLogicalDeviceOutputReference(this, "logical_device");
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

  // mlag_info - computed: false, optional: true, required: false
  private _mlagInfo = new RackTypeLeafSwitchesMlagInfoOutputReference(this, "mlag_info");
  public get mlagInfo() {
    return this._mlagInfo;
  }
  public putMlagInfo(value: RackTypeLeafSwitchesMlagInfo) {
    this._mlagInfo.internalValue = value;
  }
  public resetMlagInfo() {
    this._mlagInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlagInfoInput() {
    return this._mlagInfo.internalValue;
  }

  // redundancy_protocol - computed: false, optional: true, required: false
  private _redundancyProtocol?: string; 
  public get redundancyProtocol() {
    return this.getStringAttribute('redundancy_protocol');
  }
  public set redundancyProtocol(value: string) {
    this._redundancyProtocol = value;
  }
  public resetRedundancyProtocol() {
    this._redundancyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyProtocolInput() {
    return this._redundancyProtocol;
  }

  // spine_link_count - computed: true, optional: true, required: false
  private _spineLinkCount?: number; 
  public get spineLinkCount() {
    return this.getNumberAttribute('spine_link_count');
  }
  public set spineLinkCount(value: number) {
    this._spineLinkCount = value;
  }
  public resetSpineLinkCount() {
    this._spineLinkCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spineLinkCountInput() {
    return this._spineLinkCount;
  }

  // spine_link_speed - computed: false, optional: true, required: false
  private _spineLinkSpeed?: string; 
  public get spineLinkSpeed() {
    return this.getStringAttribute('spine_link_speed');
  }
  public set spineLinkSpeed(value: string) {
    this._spineLinkSpeed = value;
  }
  public resetSpineLinkSpeed() {
    this._spineLinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spineLinkSpeedInput() {
    return this._spineLinkSpeed;
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
  private _tags = new RackTypeLeafSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class RackTypeLeafSwitchesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: RackTypeLeafSwitches } | cdktf.IResolvable

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
  public get(key: string): RackTypeLeafSwitchesOutputReference {
    return new RackTypeLeafSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type apstra_rack_type}
*/
export class RackType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_rack_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RackType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RackType to import
  * @param importFromId The id of the existing RackType that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RackType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_rack_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/rack_type apstra_rack_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RackTypeConfig
  */
  public constructor(scope: Construct, id: string, config: RackTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_rack_type',
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
    this._accessSwitches.internalValue = config.accessSwitches;
    this._description = config.description;
    this._fabricConnectivityDesign = config.fabricConnectivityDesign;
    this._genericSystems.internalValue = config.genericSystems;
    this._leafSwitches.internalValue = config.leafSwitches;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_switches - computed: false, optional: true, required: false
  private _accessSwitches = new RackTypeAccessSwitchesMap(this, "access_switches");
  public get accessSwitches() {
    return this._accessSwitches;
  }
  public putAccessSwitches(value: { [key: string]: RackTypeAccessSwitches } | cdktf.IResolvable) {
    this._accessSwitches.internalValue = value;
  }
  public resetAccessSwitches() {
    this._accessSwitches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSwitchesInput() {
    return this._accessSwitches.internalValue;
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

  // fabric_connectivity_design - computed: false, optional: false, required: true
  private _fabricConnectivityDesign?: string; 
  public get fabricConnectivityDesign() {
    return this.getStringAttribute('fabric_connectivity_design');
  }
  public set fabricConnectivityDesign(value: string) {
    this._fabricConnectivityDesign = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricConnectivityDesignInput() {
    return this._fabricConnectivityDesign;
  }

  // generic_systems - computed: false, optional: true, required: false
  private _genericSystems = new RackTypeGenericSystemsMap(this, "generic_systems");
  public get genericSystems() {
    return this._genericSystems;
  }
  public putGenericSystems(value: { [key: string]: RackTypeGenericSystems } | cdktf.IResolvable) {
    this._genericSystems.internalValue = value;
  }
  public resetGenericSystems() {
    this._genericSystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericSystemsInput() {
    return this._genericSystems.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leaf_switches - computed: false, optional: false, required: true
  private _leafSwitches = new RackTypeLeafSwitchesMap(this, "leaf_switches");
  public get leafSwitches() {
    return this._leafSwitches;
  }
  public putLeafSwitches(value: { [key: string]: RackTypeLeafSwitches } | cdktf.IResolvable) {
    this._leafSwitches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leafSwitchesInput() {
    return this._leafSwitches.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_switches: cdktf.hashMapper(rackTypeAccessSwitchesToTerraform)(this._accessSwitches.internalValue),
      description: cdktf.stringToTerraform(this._description),
      fabric_connectivity_design: cdktf.stringToTerraform(this._fabricConnectivityDesign),
      generic_systems: cdktf.hashMapper(rackTypeGenericSystemsToTerraform)(this._genericSystems.internalValue),
      leaf_switches: cdktf.hashMapper(rackTypeLeafSwitchesToTerraform)(this._leafSwitches.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_switches: {
        value: cdktf.hashMapperHcl(rackTypeAccessSwitchesToHclTerraform)(this._accessSwitches.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "RackTypeAccessSwitchesMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_connectivity_design: {
        value: cdktf.stringToHclTerraform(this._fabricConnectivityDesign),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_systems: {
        value: cdktf.hashMapperHcl(rackTypeGenericSystemsToHclTerraform)(this._genericSystems.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "RackTypeGenericSystemsMap",
      },
      leaf_switches: {
        value: cdktf.hashMapperHcl(rackTypeLeafSwitchesToHclTerraform)(this._leafSwitches.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "RackTypeLeafSwitchesMap",
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
