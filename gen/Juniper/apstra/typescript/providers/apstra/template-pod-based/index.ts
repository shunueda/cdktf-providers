// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplatePodBasedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra name of the Pod Based Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#name TemplatePodBased#name}
  */
  readonly name: string;
  /**
  * Map of Pod Type info (count + details) keyed by Pod Based Template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#pod_infos TemplatePodBased#pod_infos}
  */
  readonly podInfos: { [key: string]: TemplatePodBasedPodInfos } | cdktf.IResolvable;
  /**
  * SuperSpine layer details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#super_spine TemplatePodBased#super_spine}
  */
  readonly superSpine: TemplatePodBasedSuperSpine;
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo {
  /**
  * Count of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#l3_peer_link_count TemplatePodBased#l3_peer_link_count}
  */
  readonly l3PeerLinkCount: number;
  /**
  * Speed of L3 links between ESI peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#l3_peer_link_speed TemplatePodBased#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed: string;
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l3_peer_link_count: cdktf.numberToTerraform(struct!.l3PeerLinkCount),
    l3_peer_link_speed: cdktf.stringToTerraform(struct!.l3PeerLinkSpeed),
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo): any {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo | undefined {
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

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfo | undefined) {
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
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#description TemplatePodBased#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#name TemplatePodBased#name}
  */
  readonly name: string;
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags): any {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags | undefined {
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

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsList extends cdktf.ComplexList {
  public internalValue? : TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTags[] | cdktf.IResolvable

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinks | undefined) {
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
  private _tags = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevice | undefined) {
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
  private _panels = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTags | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitches | undefined) {
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
  private _esiLagInfo = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesEsiLagInfoOutputReference(this, "esi_lag_info");
  public get esiLagInfo() {
    return this._esiLagInfo;
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags {
  /**
  * Tag description field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#description TemplatePodBased#description}
  */
  readonly description?: string;
  /**
  * Tag name field as seen in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#name TemplatePodBased#name}
  */
  readonly name: string;
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags): any {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags | undefined {
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

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsList extends cdktf.ComplexList {
  public internalValue? : TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTags[] | cdktf.IResolvable

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinks | undefined) {
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
  private _tags = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_switch_name - computed: true, optional: false, required: false
  public get targetSwitchName() {
    return this.getStringAttribute('target_switch_name');
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevice | undefined) {
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
  private _panels = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTags | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystems | undefined) {
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
  private _links = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLinksMap(this, "links");
  public get links() {
    return this._links;
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsLogicalDeviceOutputReference(this, "logical_device");
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
  private _tags = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevice | undefined) {
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
  private _panels = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo {
  /**
  * Number of L3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#l3_peer_link_count TemplatePodBased#l3_peer_link_count}
  */
  readonly l3PeerLinkCount?: number;
  /**
  * Port channel number used for L3 Peer Link. Omit to allow Apstra to choose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#l3_peer_link_port_channel_id TemplatePodBased#l3_peer_link_port_channel_id}
  */
  readonly l3PeerLinkPortChannelId?: number;
  /**
  * Speed of l3 links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#l3_peer_link_speed TemplatePodBased#l3_peer_link_speed}
  */
  readonly l3PeerLinkSpeed?: string;
  /**
  * MLAG keepalive VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#mlag_keepalive_vlan TemplatePodBased#mlag_keepalive_vlan}
  */
  readonly mlagKeepaliveVlan: number;
  /**
  * Number of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#peer_link_count TemplatePodBased#peer_link_count}
  */
  readonly peerLinkCount: number;
  /**
  * Port channel number used for L2 Peer Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#peer_link_port_channel_id TemplatePodBased#peer_link_port_channel_id}
  */
  readonly peerLinkPortChannelId: number;
  /**
  * Speed of links between MLAG devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#peer_link_speed TemplatePodBased#peer_link_speed}
  */
  readonly peerLinkSpeed: string;
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo): any {
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


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo): any {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo | undefined {
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

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfo | undefined) {
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
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTags | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: false
  public get logicalDeviceId() {
    return this.getStringAttribute('logical_device_id');
  }

  // mlag_info - computed: true, optional: false, required: false
  private _mlagInfo = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMlagInfoOutputReference(this, "mlag_info");
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
  private _tags = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMap extends cdktf.ComplexMap {

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
  public get(key: string): TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfosRackType {
}

export function templatePodBasedPodInfosPodTypeRackInfosRackTypeToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosRackTypeToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfosRackType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeRackInfosRackTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfosRackType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfosRackType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_switches - computed: true, optional: false, required: false
  private _accessSwitches = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeAccessSwitchesMap(this, "access_switches");
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
  private _genericSystems = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeGenericSystemsMap(this, "generic_systems");
  public get genericSystems() {
    return this._genericSystems;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // leaf_switches - computed: true, optional: false, required: false
  private _leafSwitches = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeLeafSwitchesMap(this, "leaf_switches");
  public get leafSwitches() {
    return this._leafSwitches;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface TemplatePodBasedPodInfosPodTypeRackInfos {
  /**
  * Number of instances of this Rack Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#count TemplatePodBased#count}
  */
  readonly count: number;
}

export function templatePodBasedPodInfosPodTypeRackInfosToTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function templatePodBasedPodInfosPodTypeRackInfosToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeRackInfos): any {
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

export class TemplatePodBasedPodInfosPodTypeRackInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeRackInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeRackInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: true, optional: false, required: true
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
  private _rackType = new TemplatePodBasedPodInfosPodTypeRackInfosRackTypeOutputReference(this, "rack_type");
  public get rackType() {
    return this._rackType;
  }
}

export class TemplatePodBasedPodInfosPodTypeRackInfosMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TemplatePodBasedPodInfosPodTypeRackInfos } | cdktf.IResolvable

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
  public get(key: string): TemplatePodBasedPodInfosPodTypeRackInfosOutputReference {
    return new TemplatePodBasedPodInfosPodTypeRackInfosOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups {
}

export function templatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels {
}

export function templatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeSpineLogicalDevice {
}

export function templatePodBasedPodInfosPodTypeSpineLogicalDeviceToTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeSpineLogicalDeviceToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeSpineLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeSpineLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeSpineLogicalDevice | undefined) {
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
  private _panels = new TemplatePodBasedPodInfosPodTypeSpineLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplatePodBasedPodInfosPodTypeSpineTags {
}

export function templatePodBasedPodInfosPodTypeSpineTagsToTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeSpineTagsToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeSpineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfosPodTypeSpineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeSpineTags | undefined) {
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

export class TemplatePodBasedPodInfosPodTypeSpineTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedPodInfosPodTypeSpineTagsOutputReference {
    return new TemplatePodBasedPodInfosPodTypeSpineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedPodInfosPodTypeSpine {
  /**
  * Number of Spine Switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#count TemplatePodBased#count}
  */
  readonly count: number;
  /**
  * Apstra Object ID of the Logical Device used to model this Spine Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#logical_device_id TemplatePodBased#logical_device_id}
  */
  readonly logicalDeviceId: string;
  /**
  * Count of links to each super Spine switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#super_spine_link_count TemplatePodBased#super_spine_link_count}
  */
  readonly superSpineLinkCount?: number;
  /**
  * Speed of links to super Spine switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#super_spine_link_speed TemplatePodBased#super_spine_link_speed}
  */
  readonly superSpineLinkSpeed?: string;
  /**
  * Set of Tag IDs to be applied to Spine Switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#tag_ids TemplatePodBased#tag_ids}
  */
  readonly tagIds?: string[];
}

export function templatePodBasedPodInfosPodTypeSpineToTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpine): any {
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


export function templatePodBasedPodInfosPodTypeSpineToHclTerraform(struct?: TemplatePodBasedPodInfosPodTypeSpine): any {
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

export class TemplatePodBasedPodInfosPodTypeSpineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodTypeSpine | undefined {
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

  public set internalValue(value: TemplatePodBasedPodInfosPodTypeSpine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._logicalDeviceId = undefined;
      this._superSpineLinkCount = undefined;
      this._superSpineLinkSpeed = undefined;
      this._tagIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._logicalDeviceId = value.logicalDeviceId;
      this._superSpineLinkCount = value.superSpineLinkCount;
      this._superSpineLinkSpeed = value.superSpineLinkSpeed;
      this._tagIds = value.tagIds;
    }
  }

  // count - computed: true, optional: false, required: true
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
  private _logicalDevice = new TemplatePodBasedPodInfosPodTypeSpineLogicalDeviceOutputReference(this, "logical_device");
  public get logicalDevice() {
    return this._logicalDevice;
  }

  // logical_device_id - computed: true, optional: false, required: true
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

  // super_spine_link_count - computed: true, optional: true, required: false
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

  // super_spine_link_speed - computed: true, optional: true, required: false
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

  // tag_ids - computed: true, optional: true, required: false
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
  private _tags = new TemplatePodBasedPodInfosPodTypeSpineTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface TemplatePodBasedPodInfosPodType {
}

export function templatePodBasedPodInfosPodTypeToTerraform(struct?: TemplatePodBasedPodInfosPodType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedPodInfosPodTypeToHclTerraform(struct?: TemplatePodBasedPodInfosPodType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedPodInfosPodTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedPodInfosPodType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedPodInfosPodType | undefined) {
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
  private _rackInfos = new TemplatePodBasedPodInfosPodTypeRackInfosMap(this, "rack_infos");
  public get rackInfos() {
    return this._rackInfos;
  }

  // spine - computed: true, optional: false, required: false
  private _spine = new TemplatePodBasedPodInfosPodTypeSpineOutputReference(this, "spine");
  public get spine() {
    return this._spine;
  }
}
export interface TemplatePodBasedPodInfos {
  /**
  * Number of instances of this Pod Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#count TemplatePodBased#count}
  */
  readonly count: number;
}

export function templatePodBasedPodInfosToTerraform(struct?: TemplatePodBasedPodInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function templatePodBasedPodInfosToHclTerraform(struct?: TemplatePodBasedPodInfos | cdktf.IResolvable): any {
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

export class TemplatePodBasedPodInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedPodInfos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplatePodBasedPodInfos | cdktf.IResolvable | undefined) {
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

  // pod_type - computed: true, optional: false, required: false
  private _podType = new TemplatePodBasedPodInfosPodTypeOutputReference(this, "pod_type");
  public get podType() {
    return this._podType;
  }
}

export class TemplatePodBasedPodInfosMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TemplatePodBasedPodInfos } | cdktf.IResolvable

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
  public get(key: string): TemplatePodBasedPodInfosOutputReference {
    return new TemplatePodBasedPodInfosOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups {
}

export function templatePodBasedSuperSpineLogicalDevicePanelsPortGroupsToTerraform(struct?: TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedSuperSpineLogicalDevicePanelsPortGroupsToHclTerraform(struct?: TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroups | undefined) {
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

export class TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsOutputReference {
    return new TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedSuperSpineLogicalDevicePanels {
}

export function templatePodBasedSuperSpineLogicalDevicePanelsToTerraform(struct?: TemplatePodBasedSuperSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedSuperSpineLogicalDevicePanelsToHclTerraform(struct?: TemplatePodBasedSuperSpineLogicalDevicePanels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedSuperSpineLogicalDevicePanelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedSuperSpineLogicalDevicePanels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedSuperSpineLogicalDevicePanels | undefined) {
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
  private _portGroups = new TemplatePodBasedSuperSpineLogicalDevicePanelsPortGroupsList(this, "port_groups", false);
  public get portGroups() {
    return this._portGroups;
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }
}

export class TemplatePodBasedSuperSpineLogicalDevicePanelsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedSuperSpineLogicalDevicePanelsOutputReference {
    return new TemplatePodBasedSuperSpineLogicalDevicePanelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedSuperSpineLogicalDevice {
}

export function templatePodBasedSuperSpineLogicalDeviceToTerraform(struct?: TemplatePodBasedSuperSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedSuperSpineLogicalDeviceToHclTerraform(struct?: TemplatePodBasedSuperSpineLogicalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedSuperSpineLogicalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedSuperSpineLogicalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedSuperSpineLogicalDevice | undefined) {
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
  private _panels = new TemplatePodBasedSuperSpineLogicalDevicePanelsList(this, "panels", false);
  public get panels() {
    return this._panels;
  }
}
export interface TemplatePodBasedSuperSpineTags {
}

export function templatePodBasedSuperSpineTagsToTerraform(struct?: TemplatePodBasedSuperSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templatePodBasedSuperSpineTagsToHclTerraform(struct?: TemplatePodBasedSuperSpineTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplatePodBasedSuperSpineTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplatePodBasedSuperSpineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedSuperSpineTags | undefined) {
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

export class TemplatePodBasedSuperSpineTagsList extends cdktf.ComplexList {

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
  public get(index: number): TemplatePodBasedSuperSpineTagsOutputReference {
    return new TemplatePodBasedSuperSpineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplatePodBasedSuperSpine {
  /**
  * Apstra Object ID of the Logical Device used to model this Spine Switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#logical_device_id TemplatePodBased#logical_device_id}
  */
  readonly logicalDeviceId: string;
  /**
  * Number of Super Spine switches per plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#per_plane_count TemplatePodBased#per_plane_count}
  */
  readonly perPlaneCount: number;
  /**
  * Permits creation of multi-planar 5-stage topologies. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#plane_count TemplatePodBased#plane_count}
  */
  readonly planeCount?: number;
  /**
  * Set of Tag IDs to be applied to SuperSpine Switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#tag_ids TemplatePodBased#tag_ids}
  */
  readonly tagIds?: string[];
}

export function templatePodBasedSuperSpineToTerraform(struct?: TemplatePodBasedSuperSpine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_device_id: cdktf.stringToTerraform(struct!.logicalDeviceId),
    per_plane_count: cdktf.numberToTerraform(struct!.perPlaneCount),
    plane_count: cdktf.numberToTerraform(struct!.planeCount),
    tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagIds),
  }
}


export function templatePodBasedSuperSpineToHclTerraform(struct?: TemplatePodBasedSuperSpine | cdktf.IResolvable): any {
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
    per_plane_count: {
      value: cdktf.numberToHclTerraform(struct!.perPlaneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plane_count: {
      value: cdktf.numberToHclTerraform(struct!.planeCount),
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

export class TemplatePodBasedSuperSpineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TemplatePodBasedSuperSpine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalDeviceId = this._logicalDeviceId;
    }
    if (this._perPlaneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPlaneCount = this._perPlaneCount;
    }
    if (this._planeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.planeCount = this._planeCount;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplatePodBasedSuperSpine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicalDeviceId = undefined;
      this._perPlaneCount = undefined;
      this._planeCount = undefined;
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
      this._perPlaneCount = value.perPlaneCount;
      this._planeCount = value.planeCount;
      this._tagIds = value.tagIds;
    }
  }

  // logical_device - computed: true, optional: false, required: false
  private _logicalDevice = new TemplatePodBasedSuperSpineLogicalDeviceOutputReference(this, "logical_device");
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

  // per_plane_count - computed: false, optional: false, required: true
  private _perPlaneCount?: number; 
  public get perPlaneCount() {
    return this.getNumberAttribute('per_plane_count');
  }
  public set perPlaneCount(value: number) {
    this._perPlaneCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perPlaneCountInput() {
    return this._perPlaneCount;
  }

  // plane_count - computed: true, optional: true, required: false
  private _planeCount?: number; 
  public get planeCount() {
    return this.getNumberAttribute('plane_count');
  }
  public set planeCount(value: number) {
    this._planeCount = value;
  }
  public resetPlaneCount() {
    this._planeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planeCountInput() {
    return this._planeCount;
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
  private _tags = new TemplatePodBasedSuperSpineTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based apstra_template_pod_based}
*/
export class TemplatePodBased extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_template_pod_based";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplatePodBased resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplatePodBased to import
  * @param importFromId The id of the existing TemplatePodBased that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplatePodBased to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_template_pod_based", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/template_pod_based apstra_template_pod_based} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplatePodBasedConfig
  */
  public constructor(scope: Construct, id: string, config: TemplatePodBasedConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_template_pod_based',
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
    this._name = config.name;
    this._podInfos.internalValue = config.podInfos;
    this._superSpine.internalValue = config.superSpine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // pod_infos - computed: false, optional: false, required: true
  private _podInfos = new TemplatePodBasedPodInfosMap(this, "pod_infos");
  public get podInfos() {
    return this._podInfos;
  }
  public putPodInfos(value: { [key: string]: TemplatePodBasedPodInfos } | cdktf.IResolvable) {
    this._podInfos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podInfosInput() {
    return this._podInfos.internalValue;
  }

  // super_spine - computed: false, optional: false, required: true
  private _superSpine = new TemplatePodBasedSuperSpineOutputReference(this, "super_spine");
  public get superSpine() {
    return this._superSpine;
  }
  public putSuperSpine(value: TemplatePodBasedSuperSpine) {
    this._superSpine.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get superSpineInput() {
    return this._superSpine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      pod_infos: cdktf.hashMapper(templatePodBasedPodInfosToTerraform)(this._podInfos.internalValue),
      super_spine: templatePodBasedSuperSpineToTerraform(this._superSpine.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_infos: {
        value: cdktf.hashMapperHcl(templatePodBasedPodInfosToHclTerraform)(this._podInfos.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "TemplatePodBasedPodInfosMap",
      },
      super_spine: {
        value: templatePodBasedSuperSpineToHclTerraform(this._superSpine.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TemplatePodBasedSuperSpine",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
