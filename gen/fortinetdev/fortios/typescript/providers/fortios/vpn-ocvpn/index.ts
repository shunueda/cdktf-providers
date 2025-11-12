// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnOcvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#auto_discovery VpnOcvpn#auto_discovery}
  */
  readonly autoDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#auto_discovery_shortcut_mode VpnOcvpn#auto_discovery_shortcut_mode}
  */
  readonly autoDiscoveryShortcutMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#dynamic_sort_subtable VpnOcvpn#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#eap VpnOcvpn#eap}
  */
  readonly eap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#eap_users VpnOcvpn#eap_users}
  */
  readonly eapUsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#get_all_tables VpnOcvpn#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#id VpnOcvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#ip_allocation_block VpnOcvpn#ip_allocation_block}
  */
  readonly ipAllocationBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#multipath VpnOcvpn#multipath}
  */
  readonly multipath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#nat VpnOcvpn#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#poll_interval VpnOcvpn#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#role VpnOcvpn#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#sdwan VpnOcvpn#sdwan}
  */
  readonly sdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#sdwan_zone VpnOcvpn#sdwan_zone}
  */
  readonly sdwanZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#status VpnOcvpn#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#vdomparam VpnOcvpn#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * forticlient_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#forticlient_access VpnOcvpn#forticlient_access}
  */
  readonly forticlientAccess?: VpnOcvpnForticlientAccess;
  /**
  * overlays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#overlays VpnOcvpn#overlays}
  */
  readonly overlays?: VpnOcvpnOverlays[] | cdktf.IResolvable;
  /**
  * wan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#wan_interface VpnOcvpn#wan_interface}
  */
  readonly wanInterface?: VpnOcvpnWanInterface[] | cdktf.IResolvable;
}
export interface VpnOcvpnForticlientAccessAuthGroupsOverlays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#overlay_name VpnOcvpn#overlay_name}
  */
  readonly overlayName?: string;
}

export function vpnOcvpnForticlientAccessAuthGroupsOverlaysToTerraform(struct?: VpnOcvpnForticlientAccessAuthGroupsOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overlay_name: cdktf.stringToTerraform(struct!.overlayName),
  }
}


export function vpnOcvpnForticlientAccessAuthGroupsOverlaysToHclTerraform(struct?: VpnOcvpnForticlientAccessAuthGroupsOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overlay_name: {
      value: cdktf.stringToHclTerraform(struct!.overlayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnOcvpnForticlientAccessAuthGroupsOverlaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnOcvpnForticlientAccessAuthGroupsOverlays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overlayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayName = this._overlayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcvpnForticlientAccessAuthGroupsOverlays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overlayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overlayName = value.overlayName;
    }
  }

  // overlay_name - computed: false, optional: true, required: false
  private _overlayName?: string; 
  public get overlayName() {
    return this.getStringAttribute('overlay_name');
  }
  public set overlayName(value: string) {
    this._overlayName = value;
  }
  public resetOverlayName() {
    this._overlayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNameInput() {
    return this._overlayName;
  }
}

export class VpnOcvpnForticlientAccessAuthGroupsOverlaysList extends cdktf.ComplexList {
  public internalValue? : VpnOcvpnForticlientAccessAuthGroupsOverlays[] | cdktf.IResolvable

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
  public get(index: number): VpnOcvpnForticlientAccessAuthGroupsOverlaysOutputReference {
    return new VpnOcvpnForticlientAccessAuthGroupsOverlaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnOcvpnForticlientAccessAuthGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#auth_group VpnOcvpn#auth_group}
  */
  readonly authGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#name VpnOcvpn#name}
  */
  readonly name?: string;
  /**
  * overlays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#overlays VpnOcvpn#overlays}
  */
  readonly overlays?: VpnOcvpnForticlientAccessAuthGroupsOverlays[] | cdktf.IResolvable;
}

export function vpnOcvpnForticlientAccessAuthGroupsToTerraform(struct?: VpnOcvpnForticlientAccessAuthGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_group: cdktf.stringToTerraform(struct!.authGroup),
    name: cdktf.stringToTerraform(struct!.name),
    overlays: cdktf.listMapper(vpnOcvpnForticlientAccessAuthGroupsOverlaysToTerraform, true)(struct!.overlays),
  }
}


export function vpnOcvpnForticlientAccessAuthGroupsToHclTerraform(struct?: VpnOcvpnForticlientAccessAuthGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_group: {
      value: cdktf.stringToHclTerraform(struct!.authGroup),
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
    overlays: {
      value: cdktf.listMapperHcl(vpnOcvpnForticlientAccessAuthGroupsOverlaysToHclTerraform, true)(struct!.overlays),
      isBlock: true,
      type: "set",
      storageClassType: "VpnOcvpnForticlientAccessAuthGroupsOverlaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnOcvpnForticlientAccessAuthGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnOcvpnForticlientAccessAuthGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.authGroup = this._authGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overlays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlays = this._overlays?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcvpnForticlientAccessAuthGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authGroup = undefined;
      this._name = undefined;
      this._overlays.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authGroup = value.authGroup;
      this._name = value.name;
      this._overlays.internalValue = value.overlays;
    }
  }

  // auth_group - computed: false, optional: true, required: false
  private _authGroup?: string; 
  public get authGroup() {
    return this.getStringAttribute('auth_group');
  }
  public set authGroup(value: string) {
    this._authGroup = value;
  }
  public resetAuthGroup() {
    this._authGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGroupInput() {
    return this._authGroup;
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

  // overlays - computed: false, optional: true, required: false
  private _overlays = new VpnOcvpnForticlientAccessAuthGroupsOverlaysList(this, "overlays", true);
  public get overlays() {
    return this._overlays;
  }
  public putOverlays(value: VpnOcvpnForticlientAccessAuthGroupsOverlays[] | cdktf.IResolvable) {
    this._overlays.internalValue = value;
  }
  public resetOverlays() {
    this._overlays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaysInput() {
    return this._overlays.internalValue;
  }
}

export class VpnOcvpnForticlientAccessAuthGroupsList extends cdktf.ComplexList {
  public internalValue? : VpnOcvpnForticlientAccessAuthGroups[] | cdktf.IResolvable

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
  public get(index: number): VpnOcvpnForticlientAccessAuthGroupsOutputReference {
    return new VpnOcvpnForticlientAccessAuthGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnOcvpnForticlientAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#psksecret VpnOcvpn#psksecret}
  */
  readonly psksecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#status VpnOcvpn#status}
  */
  readonly status?: string;
  /**
  * auth_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#auth_groups VpnOcvpn#auth_groups}
  */
  readonly authGroups?: VpnOcvpnForticlientAccessAuthGroups[] | cdktf.IResolvable;
}

export function vpnOcvpnForticlientAccessToTerraform(struct?: VpnOcvpnForticlientAccessOutputReference | VpnOcvpnForticlientAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    psksecret: cdktf.stringToTerraform(struct!.psksecret),
    status: cdktf.stringToTerraform(struct!.status),
    auth_groups: cdktf.listMapper(vpnOcvpnForticlientAccessAuthGroupsToTerraform, true)(struct!.authGroups),
  }
}


export function vpnOcvpnForticlientAccessToHclTerraform(struct?: VpnOcvpnForticlientAccessOutputReference | VpnOcvpnForticlientAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    psksecret: {
      value: cdktf.stringToHclTerraform(struct!.psksecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_groups: {
      value: cdktf.listMapperHcl(vpnOcvpnForticlientAccessAuthGroupsToHclTerraform, true)(struct!.authGroups),
      isBlock: true,
      type: "list",
      storageClassType: "VpnOcvpnForticlientAccessAuthGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnOcvpnForticlientAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnOcvpnForticlientAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._psksecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.psksecret = this._psksecret;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._authGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authGroups = this._authGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcvpnForticlientAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._psksecret = undefined;
      this._status = undefined;
      this._authGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._psksecret = value.psksecret;
      this._status = value.status;
      this._authGroups.internalValue = value.authGroups;
    }
  }

  // psksecret - computed: false, optional: true, required: false
  private _psksecret?: string; 
  public get psksecret() {
    return this.getStringAttribute('psksecret');
  }
  public set psksecret(value: string) {
    this._psksecret = value;
  }
  public resetPsksecret() {
    this._psksecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // auth_groups - computed: false, optional: true, required: false
  private _authGroups = new VpnOcvpnForticlientAccessAuthGroupsList(this, "auth_groups", false);
  public get authGroups() {
    return this._authGroups;
  }
  public putAuthGroups(value: VpnOcvpnForticlientAccessAuthGroups[] | cdktf.IResolvable) {
    this._authGroups.internalValue = value;
  }
  public resetAuthGroups() {
    this._authGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGroupsInput() {
    return this._authGroups.internalValue;
  }
}
export interface VpnOcvpnOverlaysSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#id VpnOcvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#interface VpnOcvpn#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#subnet VpnOcvpn#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#type VpnOcvpn#type}
  */
  readonly type?: string;
}

export function vpnOcvpnOverlaysSubnetsToTerraform(struct?: VpnOcvpnOverlaysSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vpnOcvpnOverlaysSubnetsToHclTerraform(struct?: VpnOcvpnOverlaysSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnOcvpnOverlaysSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnOcvpnOverlaysSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcvpnOverlaysSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._subnet = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interface = value.interface;
      this._subnet = value.subnet;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // type - computed: true, optional: true, required: false
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
}

export class VpnOcvpnOverlaysSubnetsList extends cdktf.ComplexList {
  public internalValue? : VpnOcvpnOverlaysSubnets[] | cdktf.IResolvable

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
  public get(index: number): VpnOcvpnOverlaysSubnetsOutputReference {
    return new VpnOcvpnOverlaysSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnOcvpnOverlays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#assign_ip VpnOcvpn#assign_ip}
  */
  readonly assignIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#id VpnOcvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#inter_overlay VpnOcvpn#inter_overlay}
  */
  readonly interOverlay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#ipv4_end_ip VpnOcvpn#ipv4_end_ip}
  */
  readonly ipv4EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#ipv4_start_ip VpnOcvpn#ipv4_start_ip}
  */
  readonly ipv4StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#name VpnOcvpn#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#overlay_name VpnOcvpn#overlay_name}
  */
  readonly overlayName?: string;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#subnets VpnOcvpn#subnets}
  */
  readonly subnets?: VpnOcvpnOverlaysSubnets[] | cdktf.IResolvable;
}

export function vpnOcvpnOverlaysToTerraform(struct?: VpnOcvpnOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ip: cdktf.stringToTerraform(struct!.assignIp),
    id: cdktf.numberToTerraform(struct!.id),
    inter_overlay: cdktf.stringToTerraform(struct!.interOverlay),
    ipv4_end_ip: cdktf.stringToTerraform(struct!.ipv4EndIp),
    ipv4_start_ip: cdktf.stringToTerraform(struct!.ipv4StartIp),
    name: cdktf.stringToTerraform(struct!.name),
    overlay_name: cdktf.stringToTerraform(struct!.overlayName),
    subnets: cdktf.listMapper(vpnOcvpnOverlaysSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function vpnOcvpnOverlaysToHclTerraform(struct?: VpnOcvpnOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ip: {
      value: cdktf.stringToHclTerraform(struct!.assignIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inter_overlay: {
      value: cdktf.stringToHclTerraform(struct!.interOverlay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_end_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipv4EndIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_start_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipv4StartIp),
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
    overlay_name: {
      value: cdktf.stringToHclTerraform(struct!.overlayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(vpnOcvpnOverlaysSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "VpnOcvpnOverlaysSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnOcvpnOverlaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnOcvpnOverlays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIp = this._assignIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interOverlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.interOverlay = this._interOverlay;
    }
    if (this._ipv4EndIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4EndIp = this._ipv4EndIp;
    }
    if (this._ipv4StartIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4StartIp = this._ipv4StartIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overlayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayName = this._overlayName;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcvpnOverlays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignIp = undefined;
      this._id = undefined;
      this._interOverlay = undefined;
      this._ipv4EndIp = undefined;
      this._ipv4StartIp = undefined;
      this._name = undefined;
      this._overlayName = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignIp = value.assignIp;
      this._id = value.id;
      this._interOverlay = value.interOverlay;
      this._ipv4EndIp = value.ipv4EndIp;
      this._ipv4StartIp = value.ipv4StartIp;
      this._name = value.name;
      this._overlayName = value.overlayName;
      this._subnets.internalValue = value.subnets;
    }
  }

  // assign_ip - computed: true, optional: true, required: false
  private _assignIp?: string; 
  public get assignIp() {
    return this.getStringAttribute('assign_ip');
  }
  public set assignIp(value: string) {
    this._assignIp = value;
  }
  public resetAssignIp() {
    this._assignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpInput() {
    return this._assignIp;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inter_overlay - computed: true, optional: true, required: false
  private _interOverlay?: string; 
  public get interOverlay() {
    return this.getStringAttribute('inter_overlay');
  }
  public set interOverlay(value: string) {
    this._interOverlay = value;
  }
  public resetInterOverlay() {
    this._interOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interOverlayInput() {
    return this._interOverlay;
  }

  // ipv4_end_ip - computed: true, optional: true, required: false
  private _ipv4EndIp?: string; 
  public get ipv4EndIp() {
    return this.getStringAttribute('ipv4_end_ip');
  }
  public set ipv4EndIp(value: string) {
    this._ipv4EndIp = value;
  }
  public resetIpv4EndIp() {
    this._ipv4EndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EndIpInput() {
    return this._ipv4EndIp;
  }

  // ipv4_start_ip - computed: true, optional: true, required: false
  private _ipv4StartIp?: string; 
  public get ipv4StartIp() {
    return this.getStringAttribute('ipv4_start_ip');
  }
  public set ipv4StartIp(value: string) {
    this._ipv4StartIp = value;
  }
  public resetIpv4StartIp() {
    this._ipv4StartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StartIpInput() {
    return this._ipv4StartIp;
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

  // overlay_name - computed: false, optional: true, required: false
  private _overlayName?: string; 
  public get overlayName() {
    return this.getStringAttribute('overlay_name');
  }
  public set overlayName(value: string) {
    this._overlayName = value;
  }
  public resetOverlayName() {
    this._overlayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNameInput() {
    return this._overlayName;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new VpnOcvpnOverlaysSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: VpnOcvpnOverlaysSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class VpnOcvpnOverlaysList extends cdktf.ComplexList {
  public internalValue? : VpnOcvpnOverlays[] | cdktf.IResolvable

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
  public get(index: number): VpnOcvpnOverlaysOutputReference {
    return new VpnOcvpnOverlaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnOcvpnWanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#name VpnOcvpn#name}
  */
  readonly name?: string;
}

export function vpnOcvpnWanInterfaceToTerraform(struct?: VpnOcvpnWanInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnOcvpnWanInterfaceToHclTerraform(struct?: VpnOcvpnWanInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VpnOcvpnWanInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnOcvpnWanInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcvpnWanInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class VpnOcvpnWanInterfaceList extends cdktf.ComplexList {
  public internalValue? : VpnOcvpnWanInterface[] | cdktf.IResolvable

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
  public get(index: number): VpnOcvpnWanInterfaceOutputReference {
    return new VpnOcvpnWanInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn fortios_vpn_ocvpn}
*/
export class VpnOcvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpn_ocvpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnOcvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnOcvpn to import
  * @param importFromId The id of the existing VpnOcvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnOcvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpn_ocvpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ocvpn fortios_vpn_ocvpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnOcvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnOcvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpn_ocvpn',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDiscovery = config.autoDiscovery;
    this._autoDiscoveryShortcutMode = config.autoDiscoveryShortcutMode;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eap = config.eap;
    this._eapUsers = config.eapUsers;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ipAllocationBlock = config.ipAllocationBlock;
    this._multipath = config.multipath;
    this._nat = config.nat;
    this._pollInterval = config.pollInterval;
    this._role = config.role;
    this._sdwan = config.sdwan;
    this._sdwanZone = config.sdwanZone;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
    this._forticlientAccess.internalValue = config.forticlientAccess;
    this._overlays.internalValue = config.overlays;
    this._wanInterface.internalValue = config.wanInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_discovery - computed: true, optional: true, required: false
  private _autoDiscovery?: string; 
  public get autoDiscovery() {
    return this.getStringAttribute('auto_discovery');
  }
  public set autoDiscovery(value: string) {
    this._autoDiscovery = value;
  }
  public resetAutoDiscovery() {
    this._autoDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryInput() {
    return this._autoDiscovery;
  }

  // auto_discovery_shortcut_mode - computed: true, optional: true, required: false
  private _autoDiscoveryShortcutMode?: string; 
  public get autoDiscoveryShortcutMode() {
    return this.getStringAttribute('auto_discovery_shortcut_mode');
  }
  public set autoDiscoveryShortcutMode(value: string) {
    this._autoDiscoveryShortcutMode = value;
  }
  public resetAutoDiscoveryShortcutMode() {
    this._autoDiscoveryShortcutMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryShortcutModeInput() {
    return this._autoDiscoveryShortcutMode;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // eap - computed: true, optional: true, required: false
  private _eap?: string; 
  public get eap() {
    return this.getStringAttribute('eap');
  }
  public set eap(value: string) {
    this._eap = value;
  }
  public resetEap() {
    this._eap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapInput() {
    return this._eap;
  }

  // eap_users - computed: false, optional: true, required: false
  private _eapUsers?: string; 
  public get eapUsers() {
    return this.getStringAttribute('eap_users');
  }
  public set eapUsers(value: string) {
    this._eapUsers = value;
  }
  public resetEapUsers() {
    this._eapUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapUsersInput() {
    return this._eapUsers;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // ip_allocation_block - computed: true, optional: true, required: false
  private _ipAllocationBlock?: string; 
  public get ipAllocationBlock() {
    return this.getStringAttribute('ip_allocation_block');
  }
  public set ipAllocationBlock(value: string) {
    this._ipAllocationBlock = value;
  }
  public resetIpAllocationBlock() {
    this._ipAllocationBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationBlockInput() {
    return this._ipAllocationBlock;
  }

  // multipath - computed: true, optional: true, required: false
  private _multipath?: string; 
  public get multipath() {
    return this.getStringAttribute('multipath');
  }
  public set multipath(value: string) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // nat - computed: true, optional: true, required: false
  private _nat?: string; 
  public get nat() {
    return this.getStringAttribute('nat');
  }
  public set nat(value: string) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // poll_interval - computed: true, optional: true, required: false
  private _pollInterval?: number; 
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }
  public set pollInterval(value: number) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sdwan - computed: true, optional: true, required: false
  private _sdwan?: string; 
  public get sdwan() {
    return this.getStringAttribute('sdwan');
  }
  public set sdwan(value: string) {
    this._sdwan = value;
  }
  public resetSdwan() {
    this._sdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInput() {
    return this._sdwan;
  }

  // sdwan_zone - computed: true, optional: true, required: false
  private _sdwanZone?: string; 
  public get sdwanZone() {
    return this.getStringAttribute('sdwan_zone');
  }
  public set sdwanZone(value: string) {
    this._sdwanZone = value;
  }
  public resetSdwanZone() {
    this._sdwanZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanZoneInput() {
    return this._sdwanZone;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // forticlient_access - computed: false, optional: true, required: false
  private _forticlientAccess = new VpnOcvpnForticlientAccessOutputReference(this, "forticlient_access");
  public get forticlientAccess() {
    return this._forticlientAccess;
  }
  public putForticlientAccess(value: VpnOcvpnForticlientAccess) {
    this._forticlientAccess.internalValue = value;
  }
  public resetForticlientAccess() {
    this._forticlientAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientAccessInput() {
    return this._forticlientAccess.internalValue;
  }

  // overlays - computed: false, optional: true, required: false
  private _overlays = new VpnOcvpnOverlaysList(this, "overlays", false);
  public get overlays() {
    return this._overlays;
  }
  public putOverlays(value: VpnOcvpnOverlays[] | cdktf.IResolvable) {
    this._overlays.internalValue = value;
  }
  public resetOverlays() {
    this._overlays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaysInput() {
    return this._overlays.internalValue;
  }

  // wan_interface - computed: false, optional: true, required: false
  private _wanInterface = new VpnOcvpnWanInterfaceList(this, "wan_interface", true);
  public get wanInterface() {
    return this._wanInterface;
  }
  public putWanInterface(value: VpnOcvpnWanInterface[] | cdktf.IResolvable) {
    this._wanInterface.internalValue = value;
  }
  public resetWanInterface() {
    this._wanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInterfaceInput() {
    return this._wanInterface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_discovery: cdktf.stringToTerraform(this._autoDiscovery),
      auto_discovery_shortcut_mode: cdktf.stringToTerraform(this._autoDiscoveryShortcutMode),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eap: cdktf.stringToTerraform(this._eap),
      eap_users: cdktf.stringToTerraform(this._eapUsers),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ip_allocation_block: cdktf.stringToTerraform(this._ipAllocationBlock),
      multipath: cdktf.stringToTerraform(this._multipath),
      nat: cdktf.stringToTerraform(this._nat),
      poll_interval: cdktf.numberToTerraform(this._pollInterval),
      role: cdktf.stringToTerraform(this._role),
      sdwan: cdktf.stringToTerraform(this._sdwan),
      sdwan_zone: cdktf.stringToTerraform(this._sdwanZone),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      forticlient_access: vpnOcvpnForticlientAccessToTerraform(this._forticlientAccess.internalValue),
      overlays: cdktf.listMapper(vpnOcvpnOverlaysToTerraform, true)(this._overlays.internalValue),
      wan_interface: cdktf.listMapper(vpnOcvpnWanInterfaceToTerraform, true)(this._wanInterface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_discovery: {
        value: cdktf.stringToHclTerraform(this._autoDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_shortcut_mode: {
        value: cdktf.stringToHclTerraform(this._autoDiscoveryShortcutMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap: {
        value: cdktf.stringToHclTerraform(this._eap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_users: {
        value: cdktf.stringToHclTerraform(this._eapUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_allocation_block: {
        value: cdktf.stringToHclTerraform(this._ipAllocationBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multipath: {
        value: cdktf.stringToHclTerraform(this._multipath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat: {
        value: cdktf.stringToHclTerraform(this._nat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_interval: {
        value: cdktf.numberToHclTerraform(this._pollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan: {
        value: cdktf.stringToHclTerraform(this._sdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan_zone: {
        value: cdktf.stringToHclTerraform(this._sdwanZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_access: {
        value: vpnOcvpnForticlientAccessToHclTerraform(this._forticlientAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnOcvpnForticlientAccessList",
      },
      overlays: {
        value: cdktf.listMapperHcl(vpnOcvpnOverlaysToHclTerraform, true)(this._overlays.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnOcvpnOverlaysList",
      },
      wan_interface: {
        value: cdktf.listMapperHcl(vpnOcvpnWanInterfaceToHclTerraform, true)(this._wanInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnOcvpnWanInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
