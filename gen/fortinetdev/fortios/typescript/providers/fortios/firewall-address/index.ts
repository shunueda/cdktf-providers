// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#allow_routing FirewallAddress#allow_routing}
  */
  readonly allowRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#associated_interface FirewallAddress#associated_interface}
  */
  readonly associatedInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#cache_ttl FirewallAddress#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#clearpass_spt FirewallAddress#clearpass_spt}
  */
  readonly clearpassSpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#color FirewallAddress#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#comment FirewallAddress#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#country FirewallAddress#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#dynamic_sort_subtable FirewallAddress#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#end_ip FirewallAddress#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#end_mac FirewallAddress#end_mac}
  */
  readonly endMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#epg_name FirewallAddress#epg_name}
  */
  readonly epgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#fabric_object FirewallAddress#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#filter FirewallAddress#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#fqdn FirewallAddress#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#get_all_tables FirewallAddress#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#hw_model FirewallAddress#hw_model}
  */
  readonly hwModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#hw_vendor FirewallAddress#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#id FirewallAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#interface FirewallAddress#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#name FirewallAddress#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#node_ip_only FirewallAddress#node_ip_only}
  */
  readonly nodeIpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#obj_id FirewallAddress#obj_id}
  */
  readonly objId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#obj_tag FirewallAddress#obj_tag}
  */
  readonly objTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#obj_type FirewallAddress#obj_type}
  */
  readonly objType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#organization FirewallAddress#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#os FirewallAddress#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#policy_group FirewallAddress#policy_group}
  */
  readonly policyGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#route_tag FirewallAddress#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#sdn FirewallAddress#sdn}
  */
  readonly sdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#sdn_addr_type FirewallAddress#sdn_addr_type}
  */
  readonly sdnAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#sdn_tag FirewallAddress#sdn_tag}
  */
  readonly sdnTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#start_ip FirewallAddress#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#start_mac FirewallAddress#start_mac}
  */
  readonly startMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#sub_type FirewallAddress#sub_type}
  */
  readonly subType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#subnet FirewallAddress#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#subnet_name FirewallAddress#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#sw_version FirewallAddress#sw_version}
  */
  readonly swVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#tag_detection_level FirewallAddress#tag_detection_level}
  */
  readonly tagDetectionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#tag_type FirewallAddress#tag_type}
  */
  readonly tagType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#tenant FirewallAddress#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#type FirewallAddress#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#uuid FirewallAddress#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#vdomparam FirewallAddress#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#visibility FirewallAddress#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#wildcard FirewallAddress#wildcard}
  */
  readonly wildcard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#wildcard_fqdn FirewallAddress#wildcard_fqdn}
  */
  readonly wildcardFqdn?: string;
  /**
  * fsso_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#fsso_group FirewallAddress#fsso_group}
  */
  readonly fssoGroup?: FirewallAddressFssoGroup[] | cdktf.IResolvable;
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#list FirewallAddress#list}
  */
  readonly list?: FirewallAddressListStruct[] | cdktf.IResolvable;
  /**
  * macaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#macaddr FirewallAddress#macaddr}
  */
  readonly macaddr?: FirewallAddressMacaddr[] | cdktf.IResolvable;
  /**
  * sso_attribute_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#sso_attribute_value FirewallAddress#sso_attribute_value}
  */
  readonly ssoAttributeValue?: FirewallAddressSsoAttributeValue[] | cdktf.IResolvable;
  /**
  * tagging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#tagging FirewallAddress#tagging}
  */
  readonly tagging?: FirewallAddressTagging[] | cdktf.IResolvable;
}
export interface FirewallAddressFssoGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#name FirewallAddress#name}
  */
  readonly name?: string;
}

export function firewallAddressFssoGroupToTerraform(struct?: FirewallAddressFssoGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallAddressFssoGroupToHclTerraform(struct?: FirewallAddressFssoGroup | cdktf.IResolvable): any {
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

export class FirewallAddressFssoGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallAddressFssoGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallAddressFssoGroup | cdktf.IResolvable | undefined) {
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

export class FirewallAddressFssoGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallAddressFssoGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallAddressFssoGroupOutputReference {
    return new FirewallAddressFssoGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#ip FirewallAddress#ip}
  */
  readonly ip?: string;
}

export function firewallAddressListStructToTerraform(struct?: FirewallAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function firewallAddressListStructToHclTerraform(struct?: FirewallAddressListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class FirewallAddressListStructList extends cdktf.ComplexList {
  public internalValue? : FirewallAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): FirewallAddressListStructOutputReference {
    return new FirewallAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallAddressMacaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#macaddr FirewallAddress#macaddr}
  */
  readonly macaddr?: string;
}

export function firewallAddressMacaddrToTerraform(struct?: FirewallAddressMacaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
  }
}


export function firewallAddressMacaddrToHclTerraform(struct?: FirewallAddressMacaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallAddressMacaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallAddressMacaddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallAddressMacaddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macaddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macaddr = value.macaddr;
    }
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }
}

export class FirewallAddressMacaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallAddressMacaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallAddressMacaddrOutputReference {
    return new FirewallAddressMacaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallAddressSsoAttributeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#name FirewallAddress#name}
  */
  readonly name?: string;
}

export function firewallAddressSsoAttributeValueToTerraform(struct?: FirewallAddressSsoAttributeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallAddressSsoAttributeValueToHclTerraform(struct?: FirewallAddressSsoAttributeValue | cdktf.IResolvable): any {
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

export class FirewallAddressSsoAttributeValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallAddressSsoAttributeValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallAddressSsoAttributeValue | cdktf.IResolvable | undefined) {
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

export class FirewallAddressSsoAttributeValueList extends cdktf.ComplexList {
  public internalValue? : FirewallAddressSsoAttributeValue[] | cdktf.IResolvable

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
  public get(index: number): FirewallAddressSsoAttributeValueOutputReference {
    return new FirewallAddressSsoAttributeValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallAddressTaggingTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#name FirewallAddress#name}
  */
  readonly name?: string;
}

export function firewallAddressTaggingTagsToTerraform(struct?: FirewallAddressTaggingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallAddressTaggingTagsToHclTerraform(struct?: FirewallAddressTaggingTags | cdktf.IResolvable): any {
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

export class FirewallAddressTaggingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallAddressTaggingTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallAddressTaggingTags | cdktf.IResolvable | undefined) {
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

export class FirewallAddressTaggingTagsList extends cdktf.ComplexList {
  public internalValue? : FirewallAddressTaggingTags[] | cdktf.IResolvable

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
  public get(index: number): FirewallAddressTaggingTagsOutputReference {
    return new FirewallAddressTaggingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallAddressTagging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#category FirewallAddress#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#name FirewallAddress#name}
  */
  readonly name?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#tags FirewallAddress#tags}
  */
  readonly tags?: FirewallAddressTaggingTags[] | cdktf.IResolvable;
}

export function firewallAddressTaggingToTerraform(struct?: FirewallAddressTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(firewallAddressTaggingTagsToTerraform, true)(struct!.tags),
  }
}


export function firewallAddressTaggingToHclTerraform(struct?: FirewallAddressTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    tags: {
      value: cdktf.listMapperHcl(firewallAddressTaggingTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallAddressTaggingTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallAddressTaggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallAddressTagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallAddressTagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._name = value.name;
      this._tags.internalValue = value.tags;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // tags - computed: false, optional: true, required: false
  private _tags = new FirewallAddressTaggingTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FirewallAddressTaggingTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FirewallAddressTaggingList extends cdktf.ComplexList {
  public internalValue? : FirewallAddressTagging[] | cdktf.IResolvable

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
  public get(index: number): FirewallAddressTaggingOutputReference {
    return new FirewallAddressTaggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address fortios_firewall_address}
*/
export class FirewallAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallAddress to import
  * @param importFromId The id of the existing FirewallAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_address fortios_firewall_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallAddressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallAddressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_address',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowRouting = config.allowRouting;
    this._associatedInterface = config.associatedInterface;
    this._cacheTtl = config.cacheTtl;
    this._clearpassSpt = config.clearpassSpt;
    this._color = config.color;
    this._comment = config.comment;
    this._country = config.country;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endIp = config.endIp;
    this._endMac = config.endMac;
    this._epgName = config.epgName;
    this._fabricObject = config.fabricObject;
    this._filter = config.filter;
    this._fqdn = config.fqdn;
    this._getAllTables = config.fetchAllTables;
    this._hwModel = config.hwModel;
    this._hwVendor = config.hwVendor;
    this._id = config.id;
    this._interface = config.interface;
    this._name = config.name;
    this._nodeIpOnly = config.nodeIpOnly;
    this._objId = config.objId;
    this._objTag = config.objTag;
    this._objType = config.objType;
    this._organization = config.organization;
    this._os = config.os;
    this._policyGroup = config.policyGroup;
    this._routeTag = config.routeTag;
    this._sdn = config.sdn;
    this._sdnAddrType = config.sdnAddrType;
    this._sdnTag = config.sdnTag;
    this._startIp = config.startIp;
    this._startMac = config.startMac;
    this._subType = config.subType;
    this._subnet = config.subnet;
    this._subnetName = config.subnetName;
    this._swVersion = config.swVersion;
    this._tagDetectionLevel = config.tagDetectionLevel;
    this._tagType = config.tagType;
    this._tenant = config.tenant;
    this._type = config.type;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._visibility = config.visibility;
    this._wildcard = config.wildcard;
    this._wildcardFqdn = config.wildcardFqdn;
    this._fssoGroup.internalValue = config.fssoGroup;
    this._list.internalValue = config.list;
    this._macaddr.internalValue = config.macaddr;
    this._ssoAttributeValue.internalValue = config.ssoAttributeValue;
    this._tagging.internalValue = config.tagging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_routing - computed: true, optional: true, required: false
  private _allowRouting?: string; 
  public get allowRouting() {
    return this.getStringAttribute('allow_routing');
  }
  public set allowRouting(value: string) {
    this._allowRouting = value;
  }
  public resetAllowRouting() {
    this._allowRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRoutingInput() {
    return this._allowRouting;
  }

  // associated_interface - computed: false, optional: true, required: false
  private _associatedInterface?: string; 
  public get associatedInterface() {
    return this.getStringAttribute('associated_interface');
  }
  public set associatedInterface(value: string) {
    this._associatedInterface = value;
  }
  public resetAssociatedInterface() {
    this._associatedInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInterfaceInput() {
    return this._associatedInterface;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // clearpass_spt - computed: true, optional: true, required: false
  private _clearpassSpt?: string; 
  public get clearpassSpt() {
    return this.getStringAttribute('clearpass_spt');
  }
  public set clearpassSpt(value: string) {
    this._clearpassSpt = value;
  }
  public resetClearpassSpt() {
    this._clearpassSpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearpassSptInput() {
    return this._clearpassSpt;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // end_mac - computed: true, optional: true, required: false
  private _endMac?: string; 
  public get endMac() {
    return this.getStringAttribute('end_mac');
  }
  public set endMac(value: string) {
    this._endMac = value;
  }
  public resetEndMac() {
    this._endMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endMacInput() {
    return this._endMac;
  }

  // epg_name - computed: false, optional: true, required: false
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  public resetEpgName() {
    this._epgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
  }

  // fabric_object - computed: true, optional: true, required: false
  private _fabricObject?: string; 
  public get fabricObject() {
    return this.getStringAttribute('fabric_object');
  }
  public set fabricObject(value: string) {
    this._fabricObject = value;
  }
  public resetFabricObject() {
    this._fabricObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricObjectInput() {
    return this._fabricObject;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // hw_model - computed: false, optional: true, required: false
  private _hwModel?: string; 
  public get hwModel() {
    return this.getStringAttribute('hw_model');
  }
  public set hwModel(value: string) {
    this._hwModel = value;
  }
  public resetHwModel() {
    this._hwModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwModelInput() {
    return this._hwModel;
  }

  // hw_vendor - computed: false, optional: true, required: false
  private _hwVendor?: string; 
  public get hwVendor() {
    return this.getStringAttribute('hw_vendor');
  }
  public set hwVendor(value: string) {
    this._hwVendor = value;
  }
  public resetHwVendor() {
    this._hwVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVendorInput() {
    return this._hwVendor;
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

  // node_ip_only - computed: true, optional: true, required: false
  private _nodeIpOnly?: string; 
  public get nodeIpOnly() {
    return this.getStringAttribute('node_ip_only');
  }
  public set nodeIpOnly(value: string) {
    this._nodeIpOnly = value;
  }
  public resetNodeIpOnly() {
    this._nodeIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpOnlyInput() {
    return this._nodeIpOnly;
  }

  // obj_id - computed: false, optional: true, required: false
  private _objId?: string; 
  public get objId() {
    return this.getStringAttribute('obj_id');
  }
  public set objId(value: string) {
    this._objId = value;
  }
  public resetObjId() {
    this._objId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objIdInput() {
    return this._objId;
  }

  // obj_tag - computed: false, optional: true, required: false
  private _objTag?: string; 
  public get objTag() {
    return this.getStringAttribute('obj_tag');
  }
  public set objTag(value: string) {
    this._objTag = value;
  }
  public resetObjTag() {
    this._objTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objTagInput() {
    return this._objTag;
  }

  // obj_type - computed: true, optional: true, required: false
  private _objType?: string; 
  public get objType() {
    return this.getStringAttribute('obj_type');
  }
  public set objType(value: string) {
    this._objType = value;
  }
  public resetObjType() {
    this._objType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objTypeInput() {
    return this._objType;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // policy_group - computed: false, optional: true, required: false
  private _policyGroup?: string; 
  public get policyGroup() {
    return this.getStringAttribute('policy_group');
  }
  public set policyGroup(value: string) {
    this._policyGroup = value;
  }
  public resetPolicyGroup() {
    this._policyGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupInput() {
    return this._policyGroup;
  }

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }

  // sdn - computed: false, optional: true, required: false
  private _sdn?: string; 
  public get sdn() {
    return this.getStringAttribute('sdn');
  }
  public set sdn(value: string) {
    this._sdn = value;
  }
  public resetSdn() {
    this._sdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnInput() {
    return this._sdn;
  }

  // sdn_addr_type - computed: true, optional: true, required: false
  private _sdnAddrType?: string; 
  public get sdnAddrType() {
    return this.getStringAttribute('sdn_addr_type');
  }
  public set sdnAddrType(value: string) {
    this._sdnAddrType = value;
  }
  public resetSdnAddrType() {
    this._sdnAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnAddrTypeInput() {
    return this._sdnAddrType;
  }

  // sdn_tag - computed: false, optional: true, required: false
  private _sdnTag?: string; 
  public get sdnTag() {
    return this.getStringAttribute('sdn_tag');
  }
  public set sdnTag(value: string) {
    this._sdnTag = value;
  }
  public resetSdnTag() {
    this._sdnTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnTagInput() {
    return this._sdnTag;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // start_mac - computed: true, optional: true, required: false
  private _startMac?: string; 
  public get startMac() {
    return this.getStringAttribute('start_mac');
  }
  public set startMac(value: string) {
    this._startMac = value;
  }
  public resetStartMac() {
    this._startMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMacInput() {
    return this._startMac;
  }

  // sub_type - computed: true, optional: true, required: false
  private _subType?: string; 
  public get subType() {
    return this.getStringAttribute('sub_type');
  }
  public set subType(value: string) {
    this._subType = value;
  }
  public resetSubType() {
    this._subType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeInput() {
    return this._subType;
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

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // sw_version - computed: false, optional: true, required: false
  private _swVersion?: string; 
  public get swVersion() {
    return this.getStringAttribute('sw_version');
  }
  public set swVersion(value: string) {
    this._swVersion = value;
  }
  public resetSwVersion() {
    this._swVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swVersionInput() {
    return this._swVersion;
  }

  // tag_detection_level - computed: false, optional: true, required: false
  private _tagDetectionLevel?: string; 
  public get tagDetectionLevel() {
    return this.getStringAttribute('tag_detection_level');
  }
  public set tagDetectionLevel(value: string) {
    this._tagDetectionLevel = value;
  }
  public resetTagDetectionLevel() {
    this._tagDetectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagDetectionLevelInput() {
    return this._tagDetectionLevel;
  }

  // tag_type - computed: false, optional: true, required: false
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
    this._tagType = value;
  }
  public resetTagType() {
    this._tagType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // wildcard - computed: true, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // wildcard_fqdn - computed: false, optional: true, required: false
  private _wildcardFqdn?: string; 
  public get wildcardFqdn() {
    return this.getStringAttribute('wildcard_fqdn');
  }
  public set wildcardFqdn(value: string) {
    this._wildcardFqdn = value;
  }
  public resetWildcardFqdn() {
    this._wildcardFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardFqdnInput() {
    return this._wildcardFqdn;
  }

  // fsso_group - computed: false, optional: true, required: false
  private _fssoGroup = new FirewallAddressFssoGroupList(this, "fsso_group", true);
  public get fssoGroup() {
    return this._fssoGroup;
  }
  public putFssoGroup(value: FirewallAddressFssoGroup[] | cdktf.IResolvable) {
    this._fssoGroup.internalValue = value;
  }
  public resetFssoGroup() {
    this._fssoGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoGroupInput() {
    return this._fssoGroup.internalValue;
  }

  // list - computed: false, optional: true, required: false
  private _list = new FirewallAddressListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: FirewallAddressListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr = new FirewallAddressMacaddrList(this, "macaddr", true);
  public get macaddr() {
    return this._macaddr;
  }
  public putMacaddr(value: FirewallAddressMacaddr[] | cdktf.IResolvable) {
    this._macaddr.internalValue = value;
  }
  public resetMacaddr() {
    this._macaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr.internalValue;
  }

  // sso_attribute_value - computed: false, optional: true, required: false
  private _ssoAttributeValue = new FirewallAddressSsoAttributeValueList(this, "sso_attribute_value", true);
  public get ssoAttributeValue() {
    return this._ssoAttributeValue;
  }
  public putSsoAttributeValue(value: FirewallAddressSsoAttributeValue[] | cdktf.IResolvable) {
    this._ssoAttributeValue.internalValue = value;
  }
  public resetSsoAttributeValue() {
    this._ssoAttributeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAttributeValueInput() {
    return this._ssoAttributeValue.internalValue;
  }

  // tagging - computed: false, optional: true, required: false
  private _tagging = new FirewallAddressTaggingList(this, "tagging", false);
  public get tagging() {
    return this._tagging;
  }
  public putTagging(value: FirewallAddressTagging[] | cdktf.IResolvable) {
    this._tagging.internalValue = value;
  }
  public resetTagging() {
    this._tagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingInput() {
    return this._tagging.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_routing: cdktf.stringToTerraform(this._allowRouting),
      associated_interface: cdktf.stringToTerraform(this._associatedInterface),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      clearpass_spt: cdktf.stringToTerraform(this._clearpassSpt),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      country: cdktf.stringToTerraform(this._country),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_ip: cdktf.stringToTerraform(this._endIp),
      end_mac: cdktf.stringToTerraform(this._endMac),
      epg_name: cdktf.stringToTerraform(this._epgName),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      filter: cdktf.stringToTerraform(this._filter),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      hw_model: cdktf.stringToTerraform(this._hwModel),
      hw_vendor: cdktf.stringToTerraform(this._hwVendor),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      name: cdktf.stringToTerraform(this._name),
      node_ip_only: cdktf.stringToTerraform(this._nodeIpOnly),
      obj_id: cdktf.stringToTerraform(this._objId),
      obj_tag: cdktf.stringToTerraform(this._objTag),
      obj_type: cdktf.stringToTerraform(this._objType),
      organization: cdktf.stringToTerraform(this._organization),
      os: cdktf.stringToTerraform(this._os),
      policy_group: cdktf.stringToTerraform(this._policyGroup),
      route_tag: cdktf.numberToTerraform(this._routeTag),
      sdn: cdktf.stringToTerraform(this._sdn),
      sdn_addr_type: cdktf.stringToTerraform(this._sdnAddrType),
      sdn_tag: cdktf.stringToTerraform(this._sdnTag),
      start_ip: cdktf.stringToTerraform(this._startIp),
      start_mac: cdktf.stringToTerraform(this._startMac),
      sub_type: cdktf.stringToTerraform(this._subType),
      subnet: cdktf.stringToTerraform(this._subnet),
      subnet_name: cdktf.stringToTerraform(this._subnetName),
      sw_version: cdktf.stringToTerraform(this._swVersion),
      tag_detection_level: cdktf.stringToTerraform(this._tagDetectionLevel),
      tag_type: cdktf.stringToTerraform(this._tagType),
      tenant: cdktf.stringToTerraform(this._tenant),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      visibility: cdktf.stringToTerraform(this._visibility),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      wildcard_fqdn: cdktf.stringToTerraform(this._wildcardFqdn),
      fsso_group: cdktf.listMapper(firewallAddressFssoGroupToTerraform, true)(this._fssoGroup.internalValue),
      list: cdktf.listMapper(firewallAddressListStructToTerraform, true)(this._list.internalValue),
      macaddr: cdktf.listMapper(firewallAddressMacaddrToTerraform, true)(this._macaddr.internalValue),
      sso_attribute_value: cdktf.listMapper(firewallAddressSsoAttributeValueToTerraform, true)(this._ssoAttributeValue.internalValue),
      tagging: cdktf.listMapper(firewallAddressTaggingToTerraform, true)(this._tagging.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_routing: {
        value: cdktf.stringToHclTerraform(this._allowRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_interface: {
        value: cdktf.stringToHclTerraform(this._associatedInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_ttl: {
        value: cdktf.numberToHclTerraform(this._cacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clearpass_spt: {
        value: cdktf.stringToHclTerraform(this._clearpassSpt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
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
      end_ip: {
        value: cdktf.stringToHclTerraform(this._endIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_mac: {
        value: cdktf.stringToHclTerraform(this._endMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_name: {
        value: cdktf.stringToHclTerraform(this._epgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_object: {
        value: cdktf.stringToHclTerraform(this._fabricObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      hw_model: {
        value: cdktf.stringToHclTerraform(this._hwModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_vendor: {
        value: cdktf.stringToHclTerraform(this._hwVendor),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
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
      node_ip_only: {
        value: cdktf.stringToHclTerraform(this._nodeIpOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_id: {
        value: cdktf.stringToHclTerraform(this._objId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_tag: {
        value: cdktf.stringToHclTerraform(this._objTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_type: {
        value: cdktf.stringToHclTerraform(this._objType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_group: {
        value: cdktf.stringToHclTerraform(this._policyGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_tag: {
        value: cdktf.numberToHclTerraform(this._routeTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdn: {
        value: cdktf.stringToHclTerraform(this._sdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_addr_type: {
        value: cdktf.stringToHclTerraform(this._sdnAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_tag: {
        value: cdktf.stringToHclTerraform(this._sdnTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_ip: {
        value: cdktf.stringToHclTerraform(this._startIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_mac: {
        value: cdktf.stringToHclTerraform(this._startMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_type: {
        value: cdktf.stringToHclTerraform(this._subType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_name: {
        value: cdktf.stringToHclTerraform(this._subnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_version: {
        value: cdktf.stringToHclTerraform(this._swVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_detection_level: {
        value: cdktf.stringToHclTerraform(this._tagDetectionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_type: {
        value: cdktf.stringToHclTerraform(this._tagType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard: {
        value: cdktf.stringToHclTerraform(this._wildcard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_fqdn: {
        value: cdktf.stringToHclTerraform(this._wildcardFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso_group: {
        value: cdktf.listMapperHcl(firewallAddressFssoGroupToHclTerraform, true)(this._fssoGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallAddressFssoGroupList",
      },
      list: {
        value: cdktf.listMapperHcl(firewallAddressListStructToHclTerraform, true)(this._list.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallAddressListStructList",
      },
      macaddr: {
        value: cdktf.listMapperHcl(firewallAddressMacaddrToHclTerraform, true)(this._macaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallAddressMacaddrList",
      },
      sso_attribute_value: {
        value: cdktf.listMapperHcl(firewallAddressSsoAttributeValueToHclTerraform, true)(this._ssoAttributeValue.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallAddressSsoAttributeValueList",
      },
      tagging: {
        value: cdktf.listMapperHcl(firewallAddressTaggingToHclTerraform, true)(this._tagging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallAddressTaggingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
