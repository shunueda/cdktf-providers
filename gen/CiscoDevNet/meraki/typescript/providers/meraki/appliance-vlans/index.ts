// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceVlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#items ApplianceVlans#items}
  */
  readonly items: ApplianceVlansItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#network_id ApplianceVlans#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#organization_id ApplianceVlans#organization_id}
  */
  readonly organizationId: string;
}
export interface ApplianceVlansItemsDhcpOptions {
  /**
  * The code for the DHCP option. This should be an integer between 2 and 254.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#code ApplianceVlans#code}
  */
  readonly code: string;
  /**
  * The type for the DHCP option. One of: `text`, `ip`, `hex` or `integer`
  *   - Choices: `hex`, `integer`, `ip`, `text`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#type ApplianceVlans#type}
  */
  readonly type: string;
  /**
  * The value for the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#value ApplianceVlans#value}
  */
  readonly value: string;
}

export function applianceVlansItemsDhcpOptionsToTerraform(struct?: ApplianceVlansItemsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applianceVlansItemsDhcpOptionsToHclTerraform(struct?: ApplianceVlansItemsDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceVlansItemsDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVlansItemsDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVlansItemsDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplianceVlansItemsDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : ApplianceVlansItemsDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVlansItemsDhcpOptionsOutputReference {
    return new ApplianceVlansItemsDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceVlansItemsFixedIpAssignments {
  /**
  * The IP address to assign to the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#ip ApplianceVlans#ip}
  */
  readonly ip: string;
  /**
  * The name of the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#name ApplianceVlans#name}
  */
  readonly name: string;
}

export function applianceVlansItemsFixedIpAssignmentsToTerraform(struct?: ApplianceVlansItemsFixedIpAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applianceVlansItemsFixedIpAssignmentsToHclTerraform(struct?: ApplianceVlansItemsFixedIpAssignments | cdktf.IResolvable): any {
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

export class ApplianceVlansItemsFixedIpAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVlansItemsFixedIpAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVlansItemsFixedIpAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._name = value.name;
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

export class ApplianceVlansItemsFixedIpAssignmentsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ApplianceVlansItemsFixedIpAssignments } | cdktf.IResolvable

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
  public get(key: string): ApplianceVlansItemsFixedIpAssignmentsOutputReference {
    return new ApplianceVlansItemsFixedIpAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ApplianceVlansItemsIpv6PrefixAssignments {
  /**
  * Auto assign a /64 prefix from the origin to the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#autonomous ApplianceVlans#autonomous}
  */
  readonly autonomous?: boolean | cdktf.IResolvable;
  /**
  * Interfaces associated with the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#origin_interfaces ApplianceVlans#origin_interfaces}
  */
  readonly originInterfaces?: string[];
  /**
  * Type of the origin
  *   - Choices: `independent`, `internet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#origin_type ApplianceVlans#origin_type}
  */
  readonly originType?: string;
  /**
  * Manual configuration of the IPv6 Appliance IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#static_appliance_ip6 ApplianceVlans#static_appliance_ip6}
  */
  readonly staticApplianceIp6?: string;
  /**
  * Manual configuration of a /64 prefix on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#static_prefix ApplianceVlans#static_prefix}
  */
  readonly staticPrefix?: string;
}

export function applianceVlansItemsIpv6PrefixAssignmentsToTerraform(struct?: ApplianceVlansItemsIpv6PrefixAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous: cdktf.booleanToTerraform(struct!.autonomous),
    origin_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originInterfaces),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    static_appliance_ip6: cdktf.stringToTerraform(struct!.staticApplianceIp6),
    static_prefix: cdktf.stringToTerraform(struct!.staticPrefix),
  }
}


export function applianceVlansItemsIpv6PrefixAssignmentsToHclTerraform(struct?: ApplianceVlansItemsIpv6PrefixAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous: {
      value: cdktf.booleanToHclTerraform(struct!.autonomous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_appliance_ip6: {
      value: cdktf.stringToHclTerraform(struct!.staticApplianceIp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_prefix: {
      value: cdktf.stringToHclTerraform(struct!.staticPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceVlansItemsIpv6PrefixAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVlansItemsIpv6PrefixAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomous !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomous = this._autonomous;
    }
    if (this._originInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.originInterfaces = this._originInterfaces;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._staticApplianceIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticApplianceIp6 = this._staticApplianceIp6;
    }
    if (this._staticPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPrefix = this._staticPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVlansItemsIpv6PrefixAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomous = undefined;
      this._originInterfaces = undefined;
      this._originType = undefined;
      this._staticApplianceIp6 = undefined;
      this._staticPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomous = value.autonomous;
      this._originInterfaces = value.originInterfaces;
      this._originType = value.originType;
      this._staticApplianceIp6 = value.staticApplianceIp6;
      this._staticPrefix = value.staticPrefix;
    }
  }

  // autonomous - computed: false, optional: true, required: false
  private _autonomous?: boolean | cdktf.IResolvable; 
  public get autonomous() {
    return this.getBooleanAttribute('autonomous');
  }
  public set autonomous(value: boolean | cdktf.IResolvable) {
    this._autonomous = value;
  }
  public resetAutonomous() {
    this._autonomous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousInput() {
    return this._autonomous;
  }

  // origin_interfaces - computed: false, optional: true, required: false
  private _originInterfaces?: string[]; 
  public get originInterfaces() {
    return this.getListAttribute('origin_interfaces');
  }
  public set originInterfaces(value: string[]) {
    this._originInterfaces = value;
  }
  public resetOriginInterfaces() {
    this._originInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInterfacesInput() {
    return this._originInterfaces;
  }

  // origin_type - computed: false, optional: true, required: false
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  public resetOriginType() {
    this._originType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // static_appliance_ip6 - computed: false, optional: true, required: false
  private _staticApplianceIp6?: string; 
  public get staticApplianceIp6() {
    return this.getStringAttribute('static_appliance_ip6');
  }
  public set staticApplianceIp6(value: string) {
    this._staticApplianceIp6 = value;
  }
  public resetStaticApplianceIp6() {
    this._staticApplianceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticApplianceIp6Input() {
    return this._staticApplianceIp6;
  }

  // static_prefix - computed: false, optional: true, required: false
  private _staticPrefix?: string; 
  public get staticPrefix() {
    return this.getStringAttribute('static_prefix');
  }
  public set staticPrefix(value: string) {
    this._staticPrefix = value;
  }
  public resetStaticPrefix() {
    this._staticPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPrefixInput() {
    return this._staticPrefix;
  }
}

export class ApplianceVlansItemsIpv6PrefixAssignmentsList extends cdktf.ComplexList {
  public internalValue? : ApplianceVlansItemsIpv6PrefixAssignments[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVlansItemsIpv6PrefixAssignmentsOutputReference {
    return new ApplianceVlansItemsIpv6PrefixAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceVlansItemsReservedIpRanges {
  /**
  * A text comment for the reserved range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#comment ApplianceVlans#comment}
  */
  readonly comment: string;
  /**
  * The last IP in the reserved range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#end ApplianceVlans#end}
  */
  readonly end: string;
  /**
  * The first IP in the reserved range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#start ApplianceVlans#start}
  */
  readonly start: string;
}

export function applianceVlansItemsReservedIpRangesToTerraform(struct?: ApplianceVlansItemsReservedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function applianceVlansItemsReservedIpRangesToHclTerraform(struct?: ApplianceVlansItemsReservedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceVlansItemsReservedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVlansItemsReservedIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVlansItemsReservedIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ApplianceVlansItemsReservedIpRangesList extends cdktf.ComplexList {
  public internalValue? : ApplianceVlansItemsReservedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVlansItemsReservedIpRangesOutputReference {
    return new ApplianceVlansItemsReservedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceVlansItems {
  /**
  * The local IP of the appliance on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#appliance_ip ApplianceVlans#appliance_ip}
  */
  readonly applianceIp?: string;
  /**
  * CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#cidr ApplianceVlans#cidr}
  */
  readonly cidr?: string;
  /**
  * DHCP boot option for boot filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dhcp_boot_filename ApplianceVlans#dhcp_boot_filename}
  */
  readonly dhcpBootFilename?: string;
  /**
  * DHCP boot option to direct boot clients to the server to load the boot file from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dhcp_boot_next_server ApplianceVlans#dhcp_boot_next_server}
  */
  readonly dhcpBootNextServer?: string;
  /**
  * Use DHCP boot options specified in other properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dhcp_boot_options_enabled ApplianceVlans#dhcp_boot_options_enabled}
  */
  readonly dhcpBootOptionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The appliance`s handling of DHCP requests on this VLAN. One of: `Run a DHCP server`, `Relay DHCP to another server` or `Do not respond to DHCP requests`
  *   - Choices: `Do not respond to DHCP requests`, `Relay DHCP to another server`, `Run a DHCP server`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dhcp_handling ApplianceVlans#dhcp_handling}
  */
  readonly dhcpHandling?: string;
  /**
  * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: `30 minutes`, `1 hour`, `4 hours`, `12 hours`, `1 day` or `1 week`
  *   - Choices: `1 day`, `1 hour`, `1 week`, `12 hours`, `30 minutes`, `4 hours`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dhcp_lease_time ApplianceVlans#dhcp_lease_time}
  */
  readonly dhcpLeaseTime?: string;
  /**
  * The list of DHCP options that will be included in DHCP responses. Each object in the list should have 'code', 'type', and 'value' properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dhcp_options ApplianceVlans#dhcp_options}
  */
  readonly dhcpOptions?: ApplianceVlansItemsDhcpOptions[] | cdktf.IResolvable;
  /**
  * The IPs of the DHCP servers that DHCP requests should be relayed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dhcp_relay_server_ips ApplianceVlans#dhcp_relay_server_ips}
  */
  readonly dhcpRelayServerIps?: string[];
  /**
  * The DNS nameservers used for DHCP responses, either 'upstream_dns', 'google_dns', 'opendns', or a newline seperated string of IP addresses or domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#dns_nameservers ApplianceVlans#dns_nameservers}
  */
  readonly dnsNameservers?: string;
  /**
  * The DHCP fixed IP assignments on the VLAN. Thekey of this map is a MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#fixed_ip_assignments ApplianceVlans#fixed_ip_assignments}
  */
  readonly fixedIpAssignments?: { [key: string]: ApplianceVlansItemsFixedIpAssignments } | cdktf.IResolvable;
  /**
  * The id of the desired group policy to apply to the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#group_policy_id ApplianceVlans#group_policy_id}
  */
  readonly groupPolicyId?: string;
  /**
  * Enable IPv6 on VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#ipv6_enabled ApplianceVlans#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Prefix assignments on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#ipv6_prefix_assignments ApplianceVlans#ipv6_prefix_assignments}
  */
  readonly ipv6PrefixAssignments?: ApplianceVlansItemsIpv6PrefixAssignments[] | cdktf.IResolvable;
  /**
  * Enable Mandatory DHCP on VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#mandatory_dhcp_enabled ApplianceVlans#mandatory_dhcp_enabled}
  */
  readonly mandatoryDhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Mask used for the subnet of all bound to the template networks. Applicable only for template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#mask ApplianceVlans#mask}
  */
  readonly mask?: number;
  /**
  * The name of the new VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#name ApplianceVlans#name}
  */
  readonly name: string;
  /**
  * The DHCP reserved IP ranges on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#reserved_ip_ranges ApplianceVlans#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: ApplianceVlansItemsReservedIpRanges[] | cdktf.IResolvable;
  /**
  * The subnet of the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#subnet ApplianceVlans#subnet}
  */
  readonly subnet?: string;
  /**
  * Type of subnetting of the VLAN. Applicable only for template network.
  *   - Choices: `same`, `unique`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#template_vlan_type ApplianceVlans#template_vlan_type}
  */
  readonly templateVlanType?: string;
  /**
  * The VLAN ID of the new VLAN (must be between 1 and 4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#vlan_id ApplianceVlans#vlan_id}
  */
  readonly vlanId: string;
  /**
  * The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#vpn_nat_subnet ApplianceVlans#vpn_nat_subnet}
  */
  readonly vpnNatSubnet?: string;
}

export function applianceVlansItemsToTerraform(struct?: ApplianceVlansItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    appliance_ip: cdktf.stringToTerraform(struct!.applianceIp),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    dhcp_boot_filename: cdktf.stringToTerraform(struct!.dhcpBootFilename),
    dhcp_boot_next_server: cdktf.stringToTerraform(struct!.dhcpBootNextServer),
    dhcp_boot_options_enabled: cdktf.booleanToTerraform(struct!.dhcpBootOptionsEnabled),
    dhcp_handling: cdktf.stringToTerraform(struct!.dhcpHandling),
    dhcp_lease_time: cdktf.stringToTerraform(struct!.dhcpLeaseTime),
    dhcp_options: cdktf.listMapper(applianceVlansItemsDhcpOptionsToTerraform, false)(struct!.dhcpOptions),
    dhcp_relay_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpRelayServerIps),
    dns_nameservers: cdktf.stringToTerraform(struct!.dnsNameservers),
    fixed_ip_assignments: cdktf.hashMapper(applianceVlansItemsFixedIpAssignmentsToTerraform)(struct!.fixedIpAssignments),
    group_policy_id: cdktf.stringToTerraform(struct!.groupPolicyId),
    ipv6_enabled: cdktf.booleanToTerraform(struct!.ipv6Enabled),
    ipv6_prefix_assignments: cdktf.listMapper(applianceVlansItemsIpv6PrefixAssignmentsToTerraform, false)(struct!.ipv6PrefixAssignments),
    mandatory_dhcp_enabled: cdktf.booleanToTerraform(struct!.mandatoryDhcpEnabled),
    mask: cdktf.numberToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
    reserved_ip_ranges: cdktf.listMapper(applianceVlansItemsReservedIpRangesToTerraform, false)(struct!.reservedIpRanges),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    template_vlan_type: cdktf.stringToTerraform(struct!.templateVlanType),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vpn_nat_subnet: cdktf.stringToTerraform(struct!.vpnNatSubnet),
  }
}


export function applianceVlansItemsToHclTerraform(struct?: ApplianceVlansItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    appliance_ip: {
      value: cdktf.stringToHclTerraform(struct!.applianceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_boot_filename: {
      value: cdktf.stringToHclTerraform(struct!.dhcpBootFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_boot_next_server: {
      value: cdktf.stringToHclTerraform(struct!.dhcpBootNextServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_boot_options_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpBootOptionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_handling: {
      value: cdktf.stringToHclTerraform(struct!.dhcpHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_lease_time: {
      value: cdktf.stringToHclTerraform(struct!.dhcpLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_options: {
      value: cdktf.listMapperHcl(applianceVlansItemsDhcpOptionsToHclTerraform, false)(struct!.dhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceVlansItemsDhcpOptionsList",
    },
    dhcp_relay_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpRelayServerIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_nameservers: {
      value: cdktf.stringToHclTerraform(struct!.dnsNameservers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_ip_assignments: {
      value: cdktf.hashMapperHcl(applianceVlansItemsFixedIpAssignmentsToHclTerraform)(struct!.fixedIpAssignments),
      isBlock: true,
      type: "map",
      storageClassType: "ApplianceVlansItemsFixedIpAssignmentsMap",
    },
    group_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.groupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_prefix_assignments: {
      value: cdktf.listMapperHcl(applianceVlansItemsIpv6PrefixAssignmentsToHclTerraform, false)(struct!.ipv6PrefixAssignments),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceVlansItemsIpv6PrefixAssignmentsList",
    },
    mandatory_dhcp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mandatoryDhcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mask: {
      value: cdktf.numberToHclTerraform(struct!.mask),
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
    reserved_ip_ranges: {
      value: cdktf.listMapperHcl(applianceVlansItemsReservedIpRangesToHclTerraform, false)(struct!.reservedIpRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceVlansItemsReservedIpRangesList",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_vlan_type: {
      value: cdktf.stringToHclTerraform(struct!.templateVlanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_nat_subnet: {
      value: cdktf.stringToHclTerraform(struct!.vpnNatSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceVlansItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVlansItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applianceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.applianceIp = this._applianceIp;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._dhcpBootFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpBootFilename = this._dhcpBootFilename;
    }
    if (this._dhcpBootNextServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpBootNextServer = this._dhcpBootNextServer;
    }
    if (this._dhcpBootOptionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpBootOptionsEnabled = this._dhcpBootOptionsEnabled;
    }
    if (this._dhcpHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpHandling = this._dhcpHandling;
    }
    if (this._dhcpLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpLeaseTime = this._dhcpLeaseTime;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._dhcpRelayServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayServerIps = this._dhcpRelayServerIps;
    }
    if (this._dnsNameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNameservers = this._dnsNameservers;
    }
    if (this._fixedIpAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpAssignments = this._fixedIpAssignments?.internalValue;
    }
    if (this._groupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPolicyId = this._groupPolicyId;
    }
    if (this._ipv6Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enabled = this._ipv6Enabled;
    }
    if (this._ipv6PrefixAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixAssignments = this._ipv6PrefixAssignments?.internalValue;
    }
    if (this._mandatoryDhcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryDhcpEnabled = this._mandatoryDhcpEnabled;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reservedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIpRanges = this._reservedIpRanges?.internalValue;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._templateVlanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVlanType = this._templateVlanType;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vpnNatSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnNatSubnet = this._vpnNatSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVlansItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applianceIp = undefined;
      this._cidr = undefined;
      this._dhcpBootFilename = undefined;
      this._dhcpBootNextServer = undefined;
      this._dhcpBootOptionsEnabled = undefined;
      this._dhcpHandling = undefined;
      this._dhcpLeaseTime = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._dhcpRelayServerIps = undefined;
      this._dnsNameservers = undefined;
      this._fixedIpAssignments.internalValue = undefined;
      this._groupPolicyId = undefined;
      this._ipv6Enabled = undefined;
      this._ipv6PrefixAssignments.internalValue = undefined;
      this._mandatoryDhcpEnabled = undefined;
      this._mask = undefined;
      this._name = undefined;
      this._reservedIpRanges.internalValue = undefined;
      this._subnet = undefined;
      this._templateVlanType = undefined;
      this._vlanId = undefined;
      this._vpnNatSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applianceIp = value.applianceIp;
      this._cidr = value.cidr;
      this._dhcpBootFilename = value.dhcpBootFilename;
      this._dhcpBootNextServer = value.dhcpBootNextServer;
      this._dhcpBootOptionsEnabled = value.dhcpBootOptionsEnabled;
      this._dhcpHandling = value.dhcpHandling;
      this._dhcpLeaseTime = value.dhcpLeaseTime;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._dhcpRelayServerIps = value.dhcpRelayServerIps;
      this._dnsNameservers = value.dnsNameservers;
      this._fixedIpAssignments.internalValue = value.fixedIpAssignments;
      this._groupPolicyId = value.groupPolicyId;
      this._ipv6Enabled = value.ipv6Enabled;
      this._ipv6PrefixAssignments.internalValue = value.ipv6PrefixAssignments;
      this._mandatoryDhcpEnabled = value.mandatoryDhcpEnabled;
      this._mask = value.mask;
      this._name = value.name;
      this._reservedIpRanges.internalValue = value.reservedIpRanges;
      this._subnet = value.subnet;
      this._templateVlanType = value.templateVlanType;
      this._vlanId = value.vlanId;
      this._vpnNatSubnet = value.vpnNatSubnet;
    }
  }

  // appliance_ip - computed: false, optional: true, required: false
  private _applianceIp?: string; 
  public get applianceIp() {
    return this.getStringAttribute('appliance_ip');
  }
  public set applianceIp(value: string) {
    this._applianceIp = value;
  }
  public resetApplianceIp() {
    this._applianceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceIpInput() {
    return this._applianceIp;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dhcp_boot_filename - computed: false, optional: true, required: false
  private _dhcpBootFilename?: string; 
  public get dhcpBootFilename() {
    return this.getStringAttribute('dhcp_boot_filename');
  }
  public set dhcpBootFilename(value: string) {
    this._dhcpBootFilename = value;
  }
  public resetDhcpBootFilename() {
    this._dhcpBootFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBootFilenameInput() {
    return this._dhcpBootFilename;
  }

  // dhcp_boot_next_server - computed: false, optional: true, required: false
  private _dhcpBootNextServer?: string; 
  public get dhcpBootNextServer() {
    return this.getStringAttribute('dhcp_boot_next_server');
  }
  public set dhcpBootNextServer(value: string) {
    this._dhcpBootNextServer = value;
  }
  public resetDhcpBootNextServer() {
    this._dhcpBootNextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBootNextServerInput() {
    return this._dhcpBootNextServer;
  }

  // dhcp_boot_options_enabled - computed: false, optional: true, required: false
  private _dhcpBootOptionsEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpBootOptionsEnabled() {
    return this.getBooleanAttribute('dhcp_boot_options_enabled');
  }
  public set dhcpBootOptionsEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpBootOptionsEnabled = value;
  }
  public resetDhcpBootOptionsEnabled() {
    this._dhcpBootOptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBootOptionsEnabledInput() {
    return this._dhcpBootOptionsEnabled;
  }

  // dhcp_handling - computed: false, optional: true, required: false
  private _dhcpHandling?: string; 
  public get dhcpHandling() {
    return this.getStringAttribute('dhcp_handling');
  }
  public set dhcpHandling(value: string) {
    this._dhcpHandling = value;
  }
  public resetDhcpHandling() {
    this._dhcpHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpHandlingInput() {
    return this._dhcpHandling;
  }

  // dhcp_lease_time - computed: false, optional: true, required: false
  private _dhcpLeaseTime?: string; 
  public get dhcpLeaseTime() {
    return this.getStringAttribute('dhcp_lease_time');
  }
  public set dhcpLeaseTime(value: string) {
    this._dhcpLeaseTime = value;
  }
  public resetDhcpLeaseTime() {
    this._dhcpLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpLeaseTimeInput() {
    return this._dhcpLeaseTime;
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new ApplianceVlansItemsDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: ApplianceVlansItemsDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_relay_server_ips - computed: false, optional: true, required: false
  private _dhcpRelayServerIps?: string[]; 
  public get dhcpRelayServerIps() {
    return this.getListAttribute('dhcp_relay_server_ips');
  }
  public set dhcpRelayServerIps(value: string[]) {
    this._dhcpRelayServerIps = value;
  }
  public resetDhcpRelayServerIps() {
    this._dhcpRelayServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServerIpsInput() {
    return this._dhcpRelayServerIps;
  }

  // dns_nameservers - computed: false, optional: true, required: false
  private _dnsNameservers?: string; 
  public get dnsNameservers() {
    return this.getStringAttribute('dns_nameservers');
  }
  public set dnsNameservers(value: string) {
    this._dnsNameservers = value;
  }
  public resetDnsNameservers() {
    this._dnsNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversInput() {
    return this._dnsNameservers;
  }

  // fixed_ip_assignments - computed: false, optional: true, required: false
  private _fixedIpAssignments = new ApplianceVlansItemsFixedIpAssignmentsMap(this, "fixed_ip_assignments");
  public get fixedIpAssignments() {
    return this._fixedIpAssignments;
  }
  public putFixedIpAssignments(value: { [key: string]: ApplianceVlansItemsFixedIpAssignments } | cdktf.IResolvable) {
    this._fixedIpAssignments.internalValue = value;
  }
  public resetFixedIpAssignments() {
    this._fixedIpAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpAssignmentsInput() {
    return this._fixedIpAssignments.internalValue;
  }

  // group_policy_id - computed: false, optional: true, required: false
  private _groupPolicyId?: string; 
  public get groupPolicyId() {
    return this.getStringAttribute('group_policy_id');
  }
  public set groupPolicyId(value: string) {
    this._groupPolicyId = value;
  }
  public resetGroupPolicyId() {
    this._groupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPolicyIdInput() {
    return this._groupPolicyId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_enabled - computed: false, optional: true, required: false
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  public resetIpv6Enabled() {
    this._ipv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
  }

  // ipv6_prefix_assignments - computed: false, optional: true, required: false
  private _ipv6PrefixAssignments = new ApplianceVlansItemsIpv6PrefixAssignmentsList(this, "ipv6_prefix_assignments", false);
  public get ipv6PrefixAssignments() {
    return this._ipv6PrefixAssignments;
  }
  public putIpv6PrefixAssignments(value: ApplianceVlansItemsIpv6PrefixAssignments[] | cdktf.IResolvable) {
    this._ipv6PrefixAssignments.internalValue = value;
  }
  public resetIpv6PrefixAssignments() {
    this._ipv6PrefixAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixAssignmentsInput() {
    return this._ipv6PrefixAssignments.internalValue;
  }

  // mandatory_dhcp_enabled - computed: false, optional: true, required: false
  private _mandatoryDhcpEnabled?: boolean | cdktf.IResolvable; 
  public get mandatoryDhcpEnabled() {
    return this.getBooleanAttribute('mandatory_dhcp_enabled');
  }
  public set mandatoryDhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._mandatoryDhcpEnabled = value;
  }
  public resetMandatoryDhcpEnabled() {
    this._mandatoryDhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryDhcpEnabledInput() {
    return this._mandatoryDhcpEnabled;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: number; 
  public get mask() {
    return this.getNumberAttribute('mask');
  }
  public set mask(value: number) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
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

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges = new ApplianceVlansItemsReservedIpRangesList(this, "reserved_ip_ranges", false);
  public get reservedIpRanges() {
    return this._reservedIpRanges;
  }
  public putReservedIpRanges(value: ApplianceVlansItemsReservedIpRanges[] | cdktf.IResolvable) {
    this._reservedIpRanges.internalValue = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
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

  // template_vlan_type - computed: false, optional: true, required: false
  private _templateVlanType?: string; 
  public get templateVlanType() {
    return this.getStringAttribute('template_vlan_type');
  }
  public set templateVlanType(value: string) {
    this._templateVlanType = value;
  }
  public resetTemplateVlanType() {
    this._templateVlanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVlanTypeInput() {
    return this._templateVlanType;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vpn_nat_subnet - computed: false, optional: true, required: false
  private _vpnNatSubnet?: string; 
  public get vpnNatSubnet() {
    return this.getStringAttribute('vpn_nat_subnet');
  }
  public set vpnNatSubnet(value: string) {
    this._vpnNatSubnet = value;
  }
  public resetVpnNatSubnet() {
    this._vpnNatSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnNatSubnetInput() {
    return this._vpnNatSubnet;
  }
}

export class ApplianceVlansItemsList extends cdktf.ComplexList {
  public internalValue? : ApplianceVlansItems[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVlansItemsOutputReference {
    return new ApplianceVlansItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans meraki_appliance_vlans}
*/
export class ApplianceVlans extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_vlans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceVlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceVlans to import
  * @param importFromId The id of the existing ApplianceVlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceVlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_vlans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_vlans meraki_appliance_vlans} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceVlansConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceVlansConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_vlans',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApplianceVlansItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: ApplianceVlansItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(applianceVlansItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(applianceVlansItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplianceVlansItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
