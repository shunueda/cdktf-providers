// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#device Aaa#device}
  */
  readonly device?: string;
  /**
  * Radius server-group definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#group_server_radius Aaa#group_server_radius}
  */
  readonly groupServerRadius?: AaaGroupServerRadius[] | cdktf.IResolvable;
  /**
  * Tacacs+ server-group definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#group_server_tacacsplus Aaa#group_server_tacacsplus}
  */
  readonly groupServerTacacsplus?: AaaGroupServerTacacsplus[] | cdktf.IResolvable;
  /**
  * Max failed attempts to lock the user
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#local_authentication_max_fail_attempts Aaa#local_authentication_max_fail_attempts}
  */
  readonly localAuthenticationMaxFailAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#local_authentication_type Aaa#local_authentication_type}
  */
  readonly localAuthenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#local_authorization Aaa#local_authorization}
  */
  readonly localAuthorization?: string;
  /**
  * Enable NEW access control commands and functions.(Disables OLD commands.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#new_model Aaa#new_model}
  */
  readonly newModel?: boolean | cdktf.IResolvable;
  /**
  * Local server profile for RFC 3576 support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#server_radius_dynamic_author Aaa#server_radius_dynamic_author}
  */
  readonly serverRadiusDynamicAuthor?: boolean | cdktf.IResolvable;
  /**
  * Specify a RADIUS client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#server_radius_dynamic_author_clients Aaa#server_radius_dynamic_author_clients}
  */
  readonly serverRadiusDynamicAuthorClients?: AaaServerRadiusDynamicAuthorClients[] | cdktf.IResolvable;
  /**
  * AAA Session ID
  *   - Choices: `common`, `unique`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#session_id Aaa#session_id}
  */
  readonly sessionId?: string;
}
export interface AaaGroupServerRadiusServerNames {
  /**
  * Radius server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#name Aaa#name}
  */
  readonly name: string;
}

export function aaaGroupServerRadiusServerNamesToTerraform(struct?: AaaGroupServerRadiusServerNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aaaGroupServerRadiusServerNamesToHclTerraform(struct?: AaaGroupServerRadiusServerNames | cdktf.IResolvable): any {
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

export class AaaGroupServerRadiusServerNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaGroupServerRadiusServerNames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AaaGroupServerRadiusServerNames | cdktf.IResolvable | undefined) {
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
}

export class AaaGroupServerRadiusServerNamesList extends cdktf.ComplexList {
  public internalValue? : AaaGroupServerRadiusServerNames[] | cdktf.IResolvable

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
  public get(index: number): AaaGroupServerRadiusServerNamesOutputReference {
    return new AaaGroupServerRadiusServerNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaGroupServerRadius {
  /**
  * Specify time in minutes to ignore an unresponsive server
  *   - Range: `0`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#deadtime Aaa#deadtime}
  */
  readonly deadtime?: number;
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_five_gigabit_ethernet Aaa#ip_radius_source_interface_five_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_forty_gigabit_ethernet Aaa#ip_radius_source_interface_forty_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_gigabit_ethernet Aaa#ip_radius_source_interface_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_hundred_gigabit_ethernet Aaa#ip_radius_source_interface_hundred_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_loopback Aaa#ip_radius_source_interface_loopback}
  */
  readonly ipRadiusSourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_ten_gigabit_ethernet Aaa#ip_radius_source_interface_ten_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_twenty_five_gigabit_ethernet Aaa#ip_radius_source_interface_twenty_five_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_two_gigabit_ethernet Aaa#ip_radius_source_interface_two_gigabit_ethernet}
  */
  readonly ipRadiusSourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_radius_source_interface_vlan Aaa#ip_radius_source_interface_vlan}
  */
  readonly ipRadiusSourceInterfaceVlan?: number;
  /**
  * Radius Server-group name with max string length 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#name Aaa#name}
  */
  readonly name: string;
  /**
  * Name of radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#server_names Aaa#server_names}
  */
  readonly serverNames?: AaaGroupServerRadiusServerNames[] | cdktf.IResolvable;
}

export function aaaGroupServerRadiusToTerraform(struct?: AaaGroupServerRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deadtime: cdktf.numberToTerraform(struct!.deadtime),
    ip_radius_source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipRadiusSourceInterfaceFiveGigabitEthernet),
    ip_radius_source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipRadiusSourceInterfaceFortyGigabitEthernet),
    ip_radius_source_interface_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipRadiusSourceInterfaceGigabitEthernet),
    ip_radius_source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipRadiusSourceInterfaceHundredGigabitEthernet),
    ip_radius_source_interface_loopback: cdktf.numberToTerraform(struct!.ipRadiusSourceInterfaceLoopback),
    ip_radius_source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipRadiusSourceInterfaceTenGigabitEthernet),
    ip_radius_source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipRadiusSourceInterfaceTwentyFiveGigabitEthernet),
    ip_radius_source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipRadiusSourceInterfaceTwoGigabitEthernet),
    ip_radius_source_interface_vlan: cdktf.numberToTerraform(struct!.ipRadiusSourceInterfaceVlan),
    name: cdktf.stringToTerraform(struct!.name),
    server_names: cdktf.listMapper(aaaGroupServerRadiusServerNamesToTerraform, false)(struct!.serverNames),
  }
}


export function aaaGroupServerRadiusToHclTerraform(struct?: AaaGroupServerRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deadtime: {
      value: cdktf.numberToHclTerraform(struct!.deadtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_radius_source_interface_five_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipRadiusSourceInterfaceFiveGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_radius_source_interface_forty_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipRadiusSourceInterfaceFortyGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_radius_source_interface_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipRadiusSourceInterfaceGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_radius_source_interface_hundred_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipRadiusSourceInterfaceHundredGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_radius_source_interface_loopback: {
      value: cdktf.numberToHclTerraform(struct!.ipRadiusSourceInterfaceLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_radius_source_interface_ten_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipRadiusSourceInterfaceTenGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_radius_source_interface_twenty_five_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipRadiusSourceInterfaceTwentyFiveGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_radius_source_interface_two_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipRadiusSourceInterfaceTwoGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_radius_source_interface_vlan: {
      value: cdktf.numberToHclTerraform(struct!.ipRadiusSourceInterfaceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_names: {
      value: cdktf.listMapperHcl(aaaGroupServerRadiusServerNamesToHclTerraform, false)(struct!.serverNames),
      isBlock: true,
      type: "list",
      storageClassType: "AaaGroupServerRadiusServerNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaGroupServerRadiusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaGroupServerRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadtime = this._deadtime;
    }
    if (this._ipRadiusSourceInterfaceFiveGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceFiveGigabitEthernet = this._ipRadiusSourceInterfaceFiveGigabitEthernet;
    }
    if (this._ipRadiusSourceInterfaceFortyGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceFortyGigabitEthernet = this._ipRadiusSourceInterfaceFortyGigabitEthernet;
    }
    if (this._ipRadiusSourceInterfaceGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceGigabitEthernet = this._ipRadiusSourceInterfaceGigabitEthernet;
    }
    if (this._ipRadiusSourceInterfaceHundredGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceHundredGigabitEthernet = this._ipRadiusSourceInterfaceHundredGigabitEthernet;
    }
    if (this._ipRadiusSourceInterfaceLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceLoopback = this._ipRadiusSourceInterfaceLoopback;
    }
    if (this._ipRadiusSourceInterfaceTenGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceTenGigabitEthernet = this._ipRadiusSourceInterfaceTenGigabitEthernet;
    }
    if (this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet;
    }
    if (this._ipRadiusSourceInterfaceTwoGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceTwoGigabitEthernet = this._ipRadiusSourceInterfaceTwoGigabitEthernet;
    }
    if (this._ipRadiusSourceInterfaceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRadiusSourceInterfaceVlan = this._ipRadiusSourceInterfaceVlan;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaGroupServerRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadtime = undefined;
      this._ipRadiusSourceInterfaceFiveGigabitEthernet = undefined;
      this._ipRadiusSourceInterfaceFortyGigabitEthernet = undefined;
      this._ipRadiusSourceInterfaceGigabitEthernet = undefined;
      this._ipRadiusSourceInterfaceHundredGigabitEthernet = undefined;
      this._ipRadiusSourceInterfaceLoopback = undefined;
      this._ipRadiusSourceInterfaceTenGigabitEthernet = undefined;
      this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = undefined;
      this._ipRadiusSourceInterfaceTwoGigabitEthernet = undefined;
      this._ipRadiusSourceInterfaceVlan = undefined;
      this._name = undefined;
      this._serverNames.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadtime = value.deadtime;
      this._ipRadiusSourceInterfaceFiveGigabitEthernet = value.ipRadiusSourceInterfaceFiveGigabitEthernet;
      this._ipRadiusSourceInterfaceFortyGigabitEthernet = value.ipRadiusSourceInterfaceFortyGigabitEthernet;
      this._ipRadiusSourceInterfaceGigabitEthernet = value.ipRadiusSourceInterfaceGigabitEthernet;
      this._ipRadiusSourceInterfaceHundredGigabitEthernet = value.ipRadiusSourceInterfaceHundredGigabitEthernet;
      this._ipRadiusSourceInterfaceLoopback = value.ipRadiusSourceInterfaceLoopback;
      this._ipRadiusSourceInterfaceTenGigabitEthernet = value.ipRadiusSourceInterfaceTenGigabitEthernet;
      this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = value.ipRadiusSourceInterfaceTwentyFiveGigabitEthernet;
      this._ipRadiusSourceInterfaceTwoGigabitEthernet = value.ipRadiusSourceInterfaceTwoGigabitEthernet;
      this._ipRadiusSourceInterfaceVlan = value.ipRadiusSourceInterfaceVlan;
      this._name = value.name;
      this._serverNames.internalValue = value.serverNames;
    }
  }

  // deadtime - computed: false, optional: true, required: false
  private _deadtime?: number; 
  public get deadtime() {
    return this.getNumberAttribute('deadtime');
  }
  public set deadtime(value: number) {
    this._deadtime = value;
  }
  public resetDeadtime() {
    this._deadtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadtimeInput() {
    return this._deadtime;
  }

  // ip_radius_source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceFiveGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_five_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceFiveGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceFiveGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceFiveGigabitEthernet() {
    this._ipRadiusSourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceFiveGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceFiveGigabitEthernet;
  }

  // ip_radius_source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceFortyGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_forty_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceFortyGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceFortyGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceFortyGigabitEthernet() {
    this._ipRadiusSourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceFortyGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceFortyGigabitEthernet;
  }

  // ip_radius_source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceGigabitEthernet() {
    this._ipRadiusSourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceGigabitEthernet;
  }

  // ip_radius_source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceHundredGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_hundred_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceHundredGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceHundredGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceHundredGigabitEthernet() {
    this._ipRadiusSourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceHundredGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceHundredGigabitEthernet;
  }

  // ip_radius_source_interface_loopback - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceLoopback?: number; 
  public get ipRadiusSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_radius_source_interface_loopback');
  }
  public set ipRadiusSourceInterfaceLoopback(value: number) {
    this._ipRadiusSourceInterfaceLoopback = value;
  }
  public resetIpRadiusSourceInterfaceLoopback() {
    this._ipRadiusSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceLoopbackInput() {
    return this._ipRadiusSourceInterfaceLoopback;
  }

  // ip_radius_source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceTenGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_ten_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceTenGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceTenGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceTenGigabitEthernet() {
    this._ipRadiusSourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceTenGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceTenGigabitEthernet;
  }

  // ip_radius_source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_twenty_five_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceTwentyFiveGigabitEthernet() {
    this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceTwentyFiveGigabitEthernet;
  }

  // ip_radius_source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceTwoGigabitEthernet?: string; 
  public get ipRadiusSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_two_gigabit_ethernet');
  }
  public set ipRadiusSourceInterfaceTwoGigabitEthernet(value: string) {
    this._ipRadiusSourceInterfaceTwoGigabitEthernet = value;
  }
  public resetIpRadiusSourceInterfaceTwoGigabitEthernet() {
    this._ipRadiusSourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceTwoGigabitEthernetInput() {
    return this._ipRadiusSourceInterfaceTwoGigabitEthernet;
  }

  // ip_radius_source_interface_vlan - computed: false, optional: true, required: false
  private _ipRadiusSourceInterfaceVlan?: number; 
  public get ipRadiusSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_radius_source_interface_vlan');
  }
  public set ipRadiusSourceInterfaceVlan(value: number) {
    this._ipRadiusSourceInterfaceVlan = value;
  }
  public resetIpRadiusSourceInterfaceVlan() {
    this._ipRadiusSourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRadiusSourceInterfaceVlanInput() {
    return this._ipRadiusSourceInterfaceVlan;
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

  // server_names - computed: false, optional: true, required: false
  private _serverNames = new AaaGroupServerRadiusServerNamesList(this, "server_names", false);
  public get serverNames() {
    return this._serverNames;
  }
  public putServerNames(value: AaaGroupServerRadiusServerNames[] | cdktf.IResolvable) {
    this._serverNames.internalValue = value;
  }
  public resetServerNames() {
    this._serverNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames.internalValue;
  }
}

export class AaaGroupServerRadiusList extends cdktf.ComplexList {
  public internalValue? : AaaGroupServerRadius[] | cdktf.IResolvable

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
  public get(index: number): AaaGroupServerRadiusOutputReference {
    return new AaaGroupServerRadiusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaGroupServerTacacsplusServerNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#name Aaa#name}
  */
  readonly name: string;
}

export function aaaGroupServerTacacsplusServerNamesToTerraform(struct?: AaaGroupServerTacacsplusServerNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aaaGroupServerTacacsplusServerNamesToHclTerraform(struct?: AaaGroupServerTacacsplusServerNames | cdktf.IResolvable): any {
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

export class AaaGroupServerTacacsplusServerNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaGroupServerTacacsplusServerNames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AaaGroupServerTacacsplusServerNames | cdktf.IResolvable | undefined) {
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
}

export class AaaGroupServerTacacsplusServerNamesList extends cdktf.ComplexList {
  public internalValue? : AaaGroupServerTacacsplusServerNames[] | cdktf.IResolvable

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
  public get(index: number): AaaGroupServerTacacsplusServerNamesOutputReference {
    return new AaaGroupServerTacacsplusServerNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaGroupServerTacacsplus {
  /**
  * Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_five_gigabit_ethernet Aaa#ip_tacacs_source_interface_five_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceFiveGigabitEthernet?: string;
  /**
  * Forty GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_forty_gigabit_ethernet Aaa#ip_tacacs_source_interface_forty_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceFortyGigabitEthernet?: string;
  /**
  * GigabitEthernet IEEE 802.3z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_gigabit_ethernet Aaa#ip_tacacs_source_interface_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceGigabitEthernet?: string;
  /**
  * Hundred GigabitEthernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_hundred_gigabit_ethernet Aaa#ip_tacacs_source_interface_hundred_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceHundredGigabitEthernet?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_loopback Aaa#ip_tacacs_source_interface_loopback}
  */
  readonly ipTacacsSourceInterfaceLoopback?: number;
  /**
  * Ten Gigabit Ethernet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_ten_gigabit_ethernet Aaa#ip_tacacs_source_interface_ten_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceTenGigabitEthernet?: string;
  /**
  * Twenty Five GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_twenty_five_gigabit_ethernet Aaa#ip_tacacs_source_interface_twenty_five_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceTwentyFiveGigabitEthernet?: string;
  /**
  * Two GigabitEthernet 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_two_gigabit_ethernet Aaa#ip_tacacs_source_interface_two_gigabit_ethernet}
  */
  readonly ipTacacsSourceInterfaceTwoGigabitEthernet?: string;
  /**
  * Iosxr Vlans
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip_tacacs_source_interface_vlan Aaa#ip_tacacs_source_interface_vlan}
  */
  readonly ipTacacsSourceInterfaceVlan?: number;
  /**
  * Server-group name with max string length 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#name Aaa#name}
  */
  readonly name: string;
  /**
  * Name of tacacs server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#server_names Aaa#server_names}
  */
  readonly serverNames?: AaaGroupServerTacacsplusServerNames[] | cdktf.IResolvable;
  /**
  * Configure forwarding table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#vrf Aaa#vrf}
  */
  readonly vrf?: string;
}

export function aaaGroupServerTacacsplusToTerraform(struct?: AaaGroupServerTacacsplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_tacacs_source_interface_five_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipTacacsSourceInterfaceFiveGigabitEthernet),
    ip_tacacs_source_interface_forty_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipTacacsSourceInterfaceFortyGigabitEthernet),
    ip_tacacs_source_interface_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipTacacsSourceInterfaceGigabitEthernet),
    ip_tacacs_source_interface_hundred_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipTacacsSourceInterfaceHundredGigabitEthernet),
    ip_tacacs_source_interface_loopback: cdktf.numberToTerraform(struct!.ipTacacsSourceInterfaceLoopback),
    ip_tacacs_source_interface_ten_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipTacacsSourceInterfaceTenGigabitEthernet),
    ip_tacacs_source_interface_twenty_five_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipTacacsSourceInterfaceTwentyFiveGigabitEthernet),
    ip_tacacs_source_interface_two_gigabit_ethernet: cdktf.stringToTerraform(struct!.ipTacacsSourceInterfaceTwoGigabitEthernet),
    ip_tacacs_source_interface_vlan: cdktf.numberToTerraform(struct!.ipTacacsSourceInterfaceVlan),
    name: cdktf.stringToTerraform(struct!.name),
    server_names: cdktf.listMapper(aaaGroupServerTacacsplusServerNamesToTerraform, false)(struct!.serverNames),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function aaaGroupServerTacacsplusToHclTerraform(struct?: AaaGroupServerTacacsplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_tacacs_source_interface_five_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipTacacsSourceInterfaceFiveGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tacacs_source_interface_forty_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipTacacsSourceInterfaceFortyGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tacacs_source_interface_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipTacacsSourceInterfaceGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tacacs_source_interface_hundred_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipTacacsSourceInterfaceHundredGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tacacs_source_interface_loopback: {
      value: cdktf.numberToHclTerraform(struct!.ipTacacsSourceInterfaceLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tacacs_source_interface_ten_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipTacacsSourceInterfaceTenGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tacacs_source_interface_twenty_five_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipTacacsSourceInterfaceTwentyFiveGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tacacs_source_interface_two_gigabit_ethernet: {
      value: cdktf.stringToHclTerraform(struct!.ipTacacsSourceInterfaceTwoGigabitEthernet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tacacs_source_interface_vlan: {
      value: cdktf.numberToHclTerraform(struct!.ipTacacsSourceInterfaceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_names: {
      value: cdktf.listMapperHcl(aaaGroupServerTacacsplusServerNamesToHclTerraform, false)(struct!.serverNames),
      isBlock: true,
      type: "list",
      storageClassType: "AaaGroupServerTacacsplusServerNamesList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaGroupServerTacacsplusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaGroupServerTacacsplus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipTacacsSourceInterfaceFiveGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceFiveGigabitEthernet = this._ipTacacsSourceInterfaceFiveGigabitEthernet;
    }
    if (this._ipTacacsSourceInterfaceFortyGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceFortyGigabitEthernet = this._ipTacacsSourceInterfaceFortyGigabitEthernet;
    }
    if (this._ipTacacsSourceInterfaceGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceGigabitEthernet = this._ipTacacsSourceInterfaceGigabitEthernet;
    }
    if (this._ipTacacsSourceInterfaceHundredGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceHundredGigabitEthernet = this._ipTacacsSourceInterfaceHundredGigabitEthernet;
    }
    if (this._ipTacacsSourceInterfaceLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceLoopback = this._ipTacacsSourceInterfaceLoopback;
    }
    if (this._ipTacacsSourceInterfaceTenGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceTenGigabitEthernet = this._ipTacacsSourceInterfaceTenGigabitEthernet;
    }
    if (this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet;
    }
    if (this._ipTacacsSourceInterfaceTwoGigabitEthernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceTwoGigabitEthernet = this._ipTacacsSourceInterfaceTwoGigabitEthernet;
    }
    if (this._ipTacacsSourceInterfaceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTacacsSourceInterfaceVlan = this._ipTacacsSourceInterfaceVlan;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames?.internalValue;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaGroupServerTacacsplus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipTacacsSourceInterfaceFiveGigabitEthernet = undefined;
      this._ipTacacsSourceInterfaceFortyGigabitEthernet = undefined;
      this._ipTacacsSourceInterfaceGigabitEthernet = undefined;
      this._ipTacacsSourceInterfaceHundredGigabitEthernet = undefined;
      this._ipTacacsSourceInterfaceLoopback = undefined;
      this._ipTacacsSourceInterfaceTenGigabitEthernet = undefined;
      this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = undefined;
      this._ipTacacsSourceInterfaceTwoGigabitEthernet = undefined;
      this._ipTacacsSourceInterfaceVlan = undefined;
      this._name = undefined;
      this._serverNames.internalValue = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipTacacsSourceInterfaceFiveGigabitEthernet = value.ipTacacsSourceInterfaceFiveGigabitEthernet;
      this._ipTacacsSourceInterfaceFortyGigabitEthernet = value.ipTacacsSourceInterfaceFortyGigabitEthernet;
      this._ipTacacsSourceInterfaceGigabitEthernet = value.ipTacacsSourceInterfaceGigabitEthernet;
      this._ipTacacsSourceInterfaceHundredGigabitEthernet = value.ipTacacsSourceInterfaceHundredGigabitEthernet;
      this._ipTacacsSourceInterfaceLoopback = value.ipTacacsSourceInterfaceLoopback;
      this._ipTacacsSourceInterfaceTenGigabitEthernet = value.ipTacacsSourceInterfaceTenGigabitEthernet;
      this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = value.ipTacacsSourceInterfaceTwentyFiveGigabitEthernet;
      this._ipTacacsSourceInterfaceTwoGigabitEthernet = value.ipTacacsSourceInterfaceTwoGigabitEthernet;
      this._ipTacacsSourceInterfaceVlan = value.ipTacacsSourceInterfaceVlan;
      this._name = value.name;
      this._serverNames.internalValue = value.serverNames;
      this._vrf = value.vrf;
    }
  }

  // ip_tacacs_source_interface_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceFiveGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_five_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceFiveGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceFiveGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceFiveGigabitEthernet() {
    this._ipTacacsSourceInterfaceFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceFiveGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceFiveGigabitEthernet;
  }

  // ip_tacacs_source_interface_forty_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceFortyGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_forty_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceFortyGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceFortyGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceFortyGigabitEthernet() {
    this._ipTacacsSourceInterfaceFortyGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceFortyGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceFortyGigabitEthernet;
  }

  // ip_tacacs_source_interface_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceGigabitEthernet() {
    this._ipTacacsSourceInterfaceGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceGigabitEthernet;
  }

  // ip_tacacs_source_interface_hundred_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceHundredGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_hundred_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceHundredGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceHundredGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceHundredGigabitEthernet() {
    this._ipTacacsSourceInterfaceHundredGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceHundredGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceHundredGigabitEthernet;
  }

  // ip_tacacs_source_interface_loopback - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceLoopback?: number; 
  public get ipTacacsSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_tacacs_source_interface_loopback');
  }
  public set ipTacacsSourceInterfaceLoopback(value: number) {
    this._ipTacacsSourceInterfaceLoopback = value;
  }
  public resetIpTacacsSourceInterfaceLoopback() {
    this._ipTacacsSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceLoopbackInput() {
    return this._ipTacacsSourceInterfaceLoopback;
  }

  // ip_tacacs_source_interface_ten_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceTenGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_ten_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceTenGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceTenGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceTenGigabitEthernet() {
    this._ipTacacsSourceInterfaceTenGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceTenGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceTenGigabitEthernet;
  }

  // ip_tacacs_source_interface_twenty_five_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceTwentyFiveGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_twenty_five_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceTwentyFiveGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceTwentyFiveGigabitEthernet() {
    this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceTwentyFiveGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceTwentyFiveGigabitEthernet;
  }

  // ip_tacacs_source_interface_two_gigabit_ethernet - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceTwoGigabitEthernet?: string; 
  public get ipTacacsSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_two_gigabit_ethernet');
  }
  public set ipTacacsSourceInterfaceTwoGigabitEthernet(value: string) {
    this._ipTacacsSourceInterfaceTwoGigabitEthernet = value;
  }
  public resetIpTacacsSourceInterfaceTwoGigabitEthernet() {
    this._ipTacacsSourceInterfaceTwoGigabitEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceTwoGigabitEthernetInput() {
    return this._ipTacacsSourceInterfaceTwoGigabitEthernet;
  }

  // ip_tacacs_source_interface_vlan - computed: false, optional: true, required: false
  private _ipTacacsSourceInterfaceVlan?: number; 
  public get ipTacacsSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_tacacs_source_interface_vlan');
  }
  public set ipTacacsSourceInterfaceVlan(value: number) {
    this._ipTacacsSourceInterfaceVlan = value;
  }
  public resetIpTacacsSourceInterfaceVlan() {
    this._ipTacacsSourceInterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTacacsSourceInterfaceVlanInput() {
    return this._ipTacacsSourceInterfaceVlan;
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

  // server_names - computed: false, optional: true, required: false
  private _serverNames = new AaaGroupServerTacacsplusServerNamesList(this, "server_names", false);
  public get serverNames() {
    return this._serverNames;
  }
  public putServerNames(value: AaaGroupServerTacacsplusServerNames[] | cdktf.IResolvable) {
    this._serverNames.internalValue = value;
  }
  public resetServerNames() {
    this._serverNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames.internalValue;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class AaaGroupServerTacacsplusList extends cdktf.ComplexList {
  public internalValue? : AaaGroupServerTacacsplus[] | cdktf.IResolvable

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
  public get(index: number): AaaGroupServerTacacsplusOutputReference {
    return new AaaGroupServerTacacsplusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaServerRadiusDynamicAuthorClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#ip Aaa#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#server_key Aaa#server_key}
  */
  readonly serverKey?: string;
  /**
  * 
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#server_key_type Aaa#server_key_type}
  */
  readonly serverKeyType?: string;
}

export function aaaServerRadiusDynamicAuthorClientsToTerraform(struct?: AaaServerRadiusDynamicAuthorClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    server_key: cdktf.stringToTerraform(struct!.serverKey),
    server_key_type: cdktf.stringToTerraform(struct!.serverKeyType),
  }
}


export function aaaServerRadiusDynamicAuthorClientsToHclTerraform(struct?: AaaServerRadiusDynamicAuthorClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_key: {
      value: cdktf.stringToHclTerraform(struct!.serverKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_key_type: {
      value: cdktf.stringToHclTerraform(struct!.serverKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaServerRadiusDynamicAuthorClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaServerRadiusDynamicAuthorClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._serverKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKey = this._serverKey;
    }
    if (this._serverKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeyType = this._serverKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaServerRadiusDynamicAuthorClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._serverKey = undefined;
      this._serverKeyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._serverKey = value.serverKey;
      this._serverKeyType = value.serverKeyType;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // server_key - computed: false, optional: true, required: false
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  public resetServerKey() {
    this._serverKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
  }

  // server_key_type - computed: false, optional: true, required: false
  private _serverKeyType?: string; 
  public get serverKeyType() {
    return this.getStringAttribute('server_key_type');
  }
  public set serverKeyType(value: string) {
    this._serverKeyType = value;
  }
  public resetServerKeyType() {
    this._serverKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyTypeInput() {
    return this._serverKeyType;
  }
}

export class AaaServerRadiusDynamicAuthorClientsList extends cdktf.ComplexList {
  public internalValue? : AaaServerRadiusDynamicAuthorClients[] | cdktf.IResolvable

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
  public get(index: number): AaaServerRadiusDynamicAuthorClientsOutputReference {
    return new AaaServerRadiusDynamicAuthorClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa iosxe_aaa}
*/
export class Aaa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaa to import
  * @param importFromId The id of the existing Aaa that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/aaa iosxe_aaa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._groupServerRadius.internalValue = config.groupServerRadius;
    this._groupServerTacacsplus.internalValue = config.groupServerTacacsplus;
    this._localAuthenticationMaxFailAttempts = config.localAuthenticationMaxFailAttempts;
    this._localAuthenticationType = config.localAuthenticationType;
    this._localAuthorization = config.localAuthorization;
    this._newModel = config.newModel;
    this._serverRadiusDynamicAuthor = config.serverRadiusDynamicAuthor;
    this._serverRadiusDynamicAuthorClients.internalValue = config.serverRadiusDynamicAuthorClients;
    this._sessionId = config.sessionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // group_server_radius - computed: false, optional: true, required: false
  private _groupServerRadius = new AaaGroupServerRadiusList(this, "group_server_radius", false);
  public get groupServerRadius() {
    return this._groupServerRadius;
  }
  public putGroupServerRadius(value: AaaGroupServerRadius[] | cdktf.IResolvable) {
    this._groupServerRadius.internalValue = value;
  }
  public resetGroupServerRadius() {
    this._groupServerRadius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupServerRadiusInput() {
    return this._groupServerRadius.internalValue;
  }

  // group_server_tacacsplus - computed: false, optional: true, required: false
  private _groupServerTacacsplus = new AaaGroupServerTacacsplusList(this, "group_server_tacacsplus", false);
  public get groupServerTacacsplus() {
    return this._groupServerTacacsplus;
  }
  public putGroupServerTacacsplus(value: AaaGroupServerTacacsplus[] | cdktf.IResolvable) {
    this._groupServerTacacsplus.internalValue = value;
  }
  public resetGroupServerTacacsplus() {
    this._groupServerTacacsplus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupServerTacacsplusInput() {
    return this._groupServerTacacsplus.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_authentication_max_fail_attempts - computed: false, optional: true, required: false
  private _localAuthenticationMaxFailAttempts?: number; 
  public get localAuthenticationMaxFailAttempts() {
    return this.getNumberAttribute('local_authentication_max_fail_attempts');
  }
  public set localAuthenticationMaxFailAttempts(value: number) {
    this._localAuthenticationMaxFailAttempts = value;
  }
  public resetLocalAuthenticationMaxFailAttempts() {
    this._localAuthenticationMaxFailAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthenticationMaxFailAttemptsInput() {
    return this._localAuthenticationMaxFailAttempts;
  }

  // local_authentication_type - computed: false, optional: true, required: false
  private _localAuthenticationType?: string; 
  public get localAuthenticationType() {
    return this.getStringAttribute('local_authentication_type');
  }
  public set localAuthenticationType(value: string) {
    this._localAuthenticationType = value;
  }
  public resetLocalAuthenticationType() {
    this._localAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthenticationTypeInput() {
    return this._localAuthenticationType;
  }

  // local_authorization - computed: false, optional: true, required: false
  private _localAuthorization?: string; 
  public get localAuthorization() {
    return this.getStringAttribute('local_authorization');
  }
  public set localAuthorization(value: string) {
    this._localAuthorization = value;
  }
  public resetLocalAuthorization() {
    this._localAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthorizationInput() {
    return this._localAuthorization;
  }

  // new_model - computed: false, optional: true, required: false
  private _newModel?: boolean | cdktf.IResolvable; 
  public get newModel() {
    return this.getBooleanAttribute('new_model');
  }
  public set newModel(value: boolean | cdktf.IResolvable) {
    this._newModel = value;
  }
  public resetNewModel() {
    this._newModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newModelInput() {
    return this._newModel;
  }

  // server_radius_dynamic_author - computed: false, optional: true, required: false
  private _serverRadiusDynamicAuthor?: boolean | cdktf.IResolvable; 
  public get serverRadiusDynamicAuthor() {
    return this.getBooleanAttribute('server_radius_dynamic_author');
  }
  public set serverRadiusDynamicAuthor(value: boolean | cdktf.IResolvable) {
    this._serverRadiusDynamicAuthor = value;
  }
  public resetServerRadiusDynamicAuthor() {
    this._serverRadiusDynamicAuthor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRadiusDynamicAuthorInput() {
    return this._serverRadiusDynamicAuthor;
  }

  // server_radius_dynamic_author_clients - computed: false, optional: true, required: false
  private _serverRadiusDynamicAuthorClients = new AaaServerRadiusDynamicAuthorClientsList(this, "server_radius_dynamic_author_clients", false);
  public get serverRadiusDynamicAuthorClients() {
    return this._serverRadiusDynamicAuthorClients;
  }
  public putServerRadiusDynamicAuthorClients(value: AaaServerRadiusDynamicAuthorClients[] | cdktf.IResolvable) {
    this._serverRadiusDynamicAuthorClients.internalValue = value;
  }
  public resetServerRadiusDynamicAuthorClients() {
    this._serverRadiusDynamicAuthorClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRadiusDynamicAuthorClientsInput() {
    return this._serverRadiusDynamicAuthorClients.internalValue;
  }

  // session_id - computed: false, optional: true, required: false
  private _sessionId?: string; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string) {
    this._sessionId = value;
  }
  public resetSessionId() {
    this._sessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      group_server_radius: cdktf.listMapper(aaaGroupServerRadiusToTerraform, false)(this._groupServerRadius.internalValue),
      group_server_tacacsplus: cdktf.listMapper(aaaGroupServerTacacsplusToTerraform, false)(this._groupServerTacacsplus.internalValue),
      local_authentication_max_fail_attempts: cdktf.numberToTerraform(this._localAuthenticationMaxFailAttempts),
      local_authentication_type: cdktf.stringToTerraform(this._localAuthenticationType),
      local_authorization: cdktf.stringToTerraform(this._localAuthorization),
      new_model: cdktf.booleanToTerraform(this._newModel),
      server_radius_dynamic_author: cdktf.booleanToTerraform(this._serverRadiusDynamicAuthor),
      server_radius_dynamic_author_clients: cdktf.listMapper(aaaServerRadiusDynamicAuthorClientsToTerraform, false)(this._serverRadiusDynamicAuthorClients.internalValue),
      session_id: cdktf.stringToTerraform(this._sessionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_server_radius: {
        value: cdktf.listMapperHcl(aaaGroupServerRadiusToHclTerraform, false)(this._groupServerRadius.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaGroupServerRadiusList",
      },
      group_server_tacacsplus: {
        value: cdktf.listMapperHcl(aaaGroupServerTacacsplusToHclTerraform, false)(this._groupServerTacacsplus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaGroupServerTacacsplusList",
      },
      local_authentication_max_fail_attempts: {
        value: cdktf.numberToHclTerraform(this._localAuthenticationMaxFailAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_authentication_type: {
        value: cdktf.stringToHclTerraform(this._localAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_authorization: {
        value: cdktf.stringToHclTerraform(this._localAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_model: {
        value: cdktf.booleanToHclTerraform(this._newModel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_radius_dynamic_author: {
        value: cdktf.booleanToHclTerraform(this._serverRadiusDynamicAuthor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_radius_dynamic_author_clients: {
        value: cdktf.listMapperHcl(aaaServerRadiusDynamicAuthorClientsToHclTerraform, false)(this._serverRadiusDynamicAuthorClients.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaServerRadiusDynamicAuthorClientsList",
      },
      session_id: {
        value: cdktf.stringToHclTerraform(this._sessionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
