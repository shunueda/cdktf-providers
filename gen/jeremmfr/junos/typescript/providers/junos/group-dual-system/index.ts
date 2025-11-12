// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupDualSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#apply_groups GroupDualSystem#apply_groups}
  */
  readonly applyGroups?: boolean | cdktf.IResolvable;
  /**
  * Name of group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#name GroupDualSystem#name}
  */
  readonly name: string;
  /**
  * interface_fxp0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#interface_fxp0 GroupDualSystem#interface_fxp0}
  */
  readonly interfaceFxp0?: GroupDualSystemInterfaceFxp0;
  /**
  * routing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#routing_options GroupDualSystem#routing_options}
  */
  readonly routingOptions?: GroupDualSystemRoutingOptions;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#security GroupDualSystem#security}
  */
  readonly security?: GroupDualSystemSecurity;
  /**
  * system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#system GroupDualSystem#system}
  */
  readonly systemAttribute?: GroupDualSystemSystem;
}
export interface GroupDualSystemInterfaceFxp0FamilyInet6Address {
  /**
  * IPv6 address in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#cidr_ip GroupDualSystem#cidr_ip}
  */
  readonly cidrIp: string;
  /**
  * Master management IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#master_only GroupDualSystem#master_only}
  */
  readonly masterOnly?: boolean | cdktf.IResolvable;
  /**
  * Preferred address on interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#preferred GroupDualSystem#preferred}
  */
  readonly preferred?: boolean | cdktf.IResolvable;
  /**
  * Candidate for primary address in system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#primary GroupDualSystem#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
}

export function groupDualSystemInterfaceFxp0FamilyInet6AddressToTerraform(struct?: GroupDualSystemInterfaceFxp0FamilyInet6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    master_only: cdktf.booleanToTerraform(struct!.masterOnly),
    preferred: cdktf.booleanToTerraform(struct!.preferred),
    primary: cdktf.booleanToTerraform(struct!.primary),
  }
}


export function groupDualSystemInterfaceFxp0FamilyInet6AddressToHclTerraform(struct?: GroupDualSystemInterfaceFxp0FamilyInet6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_only: {
      value: cdktf.booleanToHclTerraform(struct!.masterOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred: {
      value: cdktf.booleanToHclTerraform(struct!.preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDualSystemInterfaceFxp0FamilyInet6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupDualSystemInterfaceFxp0FamilyInet6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._masterOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterOnly = this._masterOnly;
    }
    if (this._preferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDualSystemInterfaceFxp0FamilyInet6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._masterOnly = undefined;
      this._preferred = undefined;
      this._primary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._masterOnly = value.masterOnly;
      this._preferred = value.preferred;
      this._primary = value.primary;
    }
  }

  // cidr_ip - computed: false, optional: false, required: true
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // master_only - computed: false, optional: true, required: false
  private _masterOnly?: boolean | cdktf.IResolvable; 
  public get masterOnly() {
    return this.getBooleanAttribute('master_only');
  }
  public set masterOnly(value: boolean | cdktf.IResolvable) {
    this._masterOnly = value;
  }
  public resetMasterOnly() {
    this._masterOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterOnlyInput() {
    return this._masterOnly;
  }

  // preferred - computed: false, optional: true, required: false
  private _preferred?: boolean | cdktf.IResolvable; 
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }
  public set preferred(value: boolean | cdktf.IResolvable) {
    this._preferred = value;
  }
  public resetPreferred() {
    this._preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}

export class GroupDualSystemInterfaceFxp0FamilyInet6AddressList extends cdktf.ComplexList {
  public internalValue? : GroupDualSystemInterfaceFxp0FamilyInet6Address[] | cdktf.IResolvable

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
  public get(index: number): GroupDualSystemInterfaceFxp0FamilyInet6AddressOutputReference {
    return new GroupDualSystemInterfaceFxp0FamilyInet6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupDualSystemInterfaceFxp0FamilyInetAddress {
  /**
  * IPv4 address in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#cidr_ip GroupDualSystem#cidr_ip}
  */
  readonly cidrIp: string;
  /**
  * Master management IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#master_only GroupDualSystem#master_only}
  */
  readonly masterOnly?: boolean | cdktf.IResolvable;
  /**
  * Preferred address on interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#preferred GroupDualSystem#preferred}
  */
  readonly preferred?: boolean | cdktf.IResolvable;
  /**
  * Candidate for primary address in system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#primary GroupDualSystem#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
}

export function groupDualSystemInterfaceFxp0FamilyInetAddressToTerraform(struct?: GroupDualSystemInterfaceFxp0FamilyInetAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    master_only: cdktf.booleanToTerraform(struct!.masterOnly),
    preferred: cdktf.booleanToTerraform(struct!.preferred),
    primary: cdktf.booleanToTerraform(struct!.primary),
  }
}


export function groupDualSystemInterfaceFxp0FamilyInetAddressToHclTerraform(struct?: GroupDualSystemInterfaceFxp0FamilyInetAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_only: {
      value: cdktf.booleanToHclTerraform(struct!.masterOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred: {
      value: cdktf.booleanToHclTerraform(struct!.preferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDualSystemInterfaceFxp0FamilyInetAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupDualSystemInterfaceFxp0FamilyInetAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._masterOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterOnly = this._masterOnly;
    }
    if (this._preferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDualSystemInterfaceFxp0FamilyInetAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._masterOnly = undefined;
      this._preferred = undefined;
      this._primary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._masterOnly = value.masterOnly;
      this._preferred = value.preferred;
      this._primary = value.primary;
    }
  }

  // cidr_ip - computed: false, optional: false, required: true
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // master_only - computed: false, optional: true, required: false
  private _masterOnly?: boolean | cdktf.IResolvable; 
  public get masterOnly() {
    return this.getBooleanAttribute('master_only');
  }
  public set masterOnly(value: boolean | cdktf.IResolvable) {
    this._masterOnly = value;
  }
  public resetMasterOnly() {
    this._masterOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterOnlyInput() {
    return this._masterOnly;
  }

  // preferred - computed: false, optional: true, required: false
  private _preferred?: boolean | cdktf.IResolvable; 
  public get preferred() {
    return this.getBooleanAttribute('preferred');
  }
  public set preferred(value: boolean | cdktf.IResolvable) {
    this._preferred = value;
  }
  public resetPreferred() {
    this._preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}

export class GroupDualSystemInterfaceFxp0FamilyInetAddressList extends cdktf.ComplexList {
  public internalValue? : GroupDualSystemInterfaceFxp0FamilyInetAddress[] | cdktf.IResolvable

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
  public get(index: number): GroupDualSystemInterfaceFxp0FamilyInetAddressOutputReference {
    return new GroupDualSystemInterfaceFxp0FamilyInetAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupDualSystemInterfaceFxp0 {
  /**
  * Description for interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#description GroupDualSystem#description}
  */
  readonly description?: string;
  /**
  * family_inet6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#family_inet6_address GroupDualSystem#family_inet6_address}
  */
  readonly familyInet6Address?: GroupDualSystemInterfaceFxp0FamilyInet6Address[] | cdktf.IResolvable;
  /**
  * family_inet_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#family_inet_address GroupDualSystem#family_inet_address}
  */
  readonly familyInetAddress?: GroupDualSystemInterfaceFxp0FamilyInetAddress[] | cdktf.IResolvable;
}

export function groupDualSystemInterfaceFxp0ToTerraform(struct?: GroupDualSystemInterfaceFxp0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    family_inet6_address: cdktf.listMapper(groupDualSystemInterfaceFxp0FamilyInet6AddressToTerraform, true)(struct!.familyInet6Address),
    family_inet_address: cdktf.listMapper(groupDualSystemInterfaceFxp0FamilyInetAddressToTerraform, true)(struct!.familyInetAddress),
  }
}


export function groupDualSystemInterfaceFxp0ToHclTerraform(struct?: GroupDualSystemInterfaceFxp0 | cdktf.IResolvable): any {
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
    family_inet6_address: {
      value: cdktf.listMapperHcl(groupDualSystemInterfaceFxp0FamilyInet6AddressToHclTerraform, true)(struct!.familyInet6Address),
      isBlock: true,
      type: "list",
      storageClassType: "GroupDualSystemInterfaceFxp0FamilyInet6AddressList",
    },
    family_inet_address: {
      value: cdktf.listMapperHcl(groupDualSystemInterfaceFxp0FamilyInetAddressToHclTerraform, true)(struct!.familyInetAddress),
      isBlock: true,
      type: "list",
      storageClassType: "GroupDualSystemInterfaceFxp0FamilyInetAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDualSystemInterfaceFxp0OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupDualSystemInterfaceFxp0 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._familyInet6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyInet6Address = this._familyInet6Address?.internalValue;
    }
    if (this._familyInetAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyInetAddress = this._familyInetAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDualSystemInterfaceFxp0 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._familyInet6Address.internalValue = undefined;
      this._familyInetAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._familyInet6Address.internalValue = value.familyInet6Address;
      this._familyInetAddress.internalValue = value.familyInetAddress;
    }
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

  // family_inet6_address - computed: false, optional: true, required: false
  private _familyInet6Address = new GroupDualSystemInterfaceFxp0FamilyInet6AddressList(this, "family_inet6_address", false);
  public get familyInet6Address() {
    return this._familyInet6Address;
  }
  public putFamilyInet6Address(value: GroupDualSystemInterfaceFxp0FamilyInet6Address[] | cdktf.IResolvable) {
    this._familyInet6Address.internalValue = value;
  }
  public resetFamilyInet6Address() {
    this._familyInet6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInet6AddressInput() {
    return this._familyInet6Address.internalValue;
  }

  // family_inet_address - computed: false, optional: true, required: false
  private _familyInetAddress = new GroupDualSystemInterfaceFxp0FamilyInetAddressList(this, "family_inet_address", false);
  public get familyInetAddress() {
    return this._familyInetAddress;
  }
  public putFamilyInetAddress(value: GroupDualSystemInterfaceFxp0FamilyInetAddress[] | cdktf.IResolvable) {
    this._familyInetAddress.internalValue = value;
  }
  public resetFamilyInetAddress() {
    this._familyInetAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetAddressInput() {
    return this._familyInetAddress.internalValue;
  }
}
export interface GroupDualSystemRoutingOptionsStaticRoute {
  /**
  * The destination for static route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#destination GroupDualSystem#destination}
  */
  readonly destination: string;
  /**
  * List of next-hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#next_hop GroupDualSystem#next_hop}
  */
  readonly nextHop: string[];
}

export function groupDualSystemRoutingOptionsStaticRouteToTerraform(struct?: GroupDualSystemRoutingOptionsStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nextHop),
  }
}


export function groupDualSystemRoutingOptionsStaticRouteToHclTerraform(struct?: GroupDualSystemRoutingOptionsStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nextHop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDualSystemRoutingOptionsStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupDualSystemRoutingOptionsStaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDualSystemRoutingOptionsStaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._nextHop = value.nextHop;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string[]; 
  public get nextHop() {
    return this.getListAttribute('next_hop');
  }
  public set nextHop(value: string[]) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class GroupDualSystemRoutingOptionsStaticRouteList extends cdktf.ComplexList {
  public internalValue? : GroupDualSystemRoutingOptionsStaticRoute[] | cdktf.IResolvable

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
  public get(index: number): GroupDualSystemRoutingOptionsStaticRouteOutputReference {
    return new GroupDualSystemRoutingOptionsStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupDualSystemRoutingOptions {
  /**
  * static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#static_route GroupDualSystem#static_route}
  */
  readonly staticRoute?: GroupDualSystemRoutingOptionsStaticRoute[] | cdktf.IResolvable;
}

export function groupDualSystemRoutingOptionsToTerraform(struct?: GroupDualSystemRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(groupDualSystemRoutingOptionsStaticRouteToTerraform, true)(struct!.staticRoute),
  }
}


export function groupDualSystemRoutingOptionsToHclTerraform(struct?: GroupDualSystemRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(groupDualSystemRoutingOptionsStaticRouteToHclTerraform, true)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "GroupDualSystemRoutingOptionsStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDualSystemRoutingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupDualSystemRoutingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDualSystemRoutingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new GroupDualSystemRoutingOptionsStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: GroupDualSystemRoutingOptionsStaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }
}
export interface GroupDualSystemSecurity {
  /**
  * Source IP address used when exporting security logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#log_source_address GroupDualSystem#log_source_address}
  */
  readonly logSourceAddress?: string;
}

export function groupDualSystemSecurityToTerraform(struct?: GroupDualSystemSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_source_address: cdktf.stringToTerraform(struct!.logSourceAddress),
  }
}


export function groupDualSystemSecurityToHclTerraform(struct?: GroupDualSystemSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_source_address: {
      value: cdktf.stringToHclTerraform(struct!.logSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDualSystemSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupDualSystemSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSourceAddress = this._logSourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDualSystemSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logSourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logSourceAddress = value.logSourceAddress;
    }
  }

  // log_source_address - computed: false, optional: true, required: false
  private _logSourceAddress?: string; 
  public get logSourceAddress() {
    return this.getStringAttribute('log_source_address');
  }
  public set logSourceAddress(value: string) {
    this._logSourceAddress = value;
  }
  public resetLogSourceAddress() {
    this._logSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSourceAddressInput() {
    return this._logSourceAddress;
  }
}
export interface GroupDualSystemSystem {
  /**
  * IPv4 address backup router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#backup_router_address GroupDualSystem#backup_router_address}
  */
  readonly backupRouterAddress?: string;
  /**
  * Destinations network reachable through the IPv4 router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#backup_router_destination GroupDualSystem#backup_router_destination}
  */
  readonly backupRouterDestination?: string[];
  /**
  * Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#host_name GroupDualSystem#host_name}
  */
  readonly hostName?: string;
  /**
  * IPv6 address backup router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#inet6_backup_router_address GroupDualSystem#inet6_backup_router_address}
  */
  readonly inet6BackupRouterAddress?: string;
  /**
  * Destinations network reachable through the IPv6 router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#inet6_backup_router_destination GroupDualSystem#inet6_backup_router_destination}
  */
  readonly inet6BackupRouterDestination?: string[];
}

export function groupDualSystemSystemToTerraform(struct?: GroupDualSystemSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_router_address: cdktf.stringToTerraform(struct!.backupRouterAddress),
    backup_router_destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupRouterDestination),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    inet6_backup_router_address: cdktf.stringToTerraform(struct!.inet6BackupRouterAddress),
    inet6_backup_router_destination: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inet6BackupRouterDestination),
  }
}


export function groupDualSystemSystemToHclTerraform(struct?: GroupDualSystemSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_router_address: {
      value: cdktf.stringToHclTerraform(struct!.backupRouterAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_router_destination: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupRouterDestination),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inet6_backup_router_address: {
      value: cdktf.stringToHclTerraform(struct!.inet6BackupRouterAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inet6_backup_router_destination: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inet6BackupRouterDestination),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDualSystemSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupDualSystemSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRouterAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRouterAddress = this._backupRouterAddress;
    }
    if (this._backupRouterDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRouterDestination = this._backupRouterDestination;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._inet6BackupRouterAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inet6BackupRouterAddress = this._inet6BackupRouterAddress;
    }
    if (this._inet6BackupRouterDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.inet6BackupRouterDestination = this._inet6BackupRouterDestination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDualSystemSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRouterAddress = undefined;
      this._backupRouterDestination = undefined;
      this._hostName = undefined;
      this._inet6BackupRouterAddress = undefined;
      this._inet6BackupRouterDestination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupRouterAddress = value.backupRouterAddress;
      this._backupRouterDestination = value.backupRouterDestination;
      this._hostName = value.hostName;
      this._inet6BackupRouterAddress = value.inet6BackupRouterAddress;
      this._inet6BackupRouterDestination = value.inet6BackupRouterDestination;
    }
  }

  // backup_router_address - computed: false, optional: true, required: false
  private _backupRouterAddress?: string; 
  public get backupRouterAddress() {
    return this.getStringAttribute('backup_router_address');
  }
  public set backupRouterAddress(value: string) {
    this._backupRouterAddress = value;
  }
  public resetBackupRouterAddress() {
    this._backupRouterAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRouterAddressInput() {
    return this._backupRouterAddress;
  }

  // backup_router_destination - computed: false, optional: true, required: false
  private _backupRouterDestination?: string[]; 
  public get backupRouterDestination() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_router_destination'));
  }
  public set backupRouterDestination(value: string[]) {
    this._backupRouterDestination = value;
  }
  public resetBackupRouterDestination() {
    this._backupRouterDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRouterDestinationInput() {
    return this._backupRouterDestination;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // inet6_backup_router_address - computed: false, optional: true, required: false
  private _inet6BackupRouterAddress?: string; 
  public get inet6BackupRouterAddress() {
    return this.getStringAttribute('inet6_backup_router_address');
  }
  public set inet6BackupRouterAddress(value: string) {
    this._inet6BackupRouterAddress = value;
  }
  public resetInet6BackupRouterAddress() {
    this._inet6BackupRouterAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inet6BackupRouterAddressInput() {
    return this._inet6BackupRouterAddress;
  }

  // inet6_backup_router_destination - computed: false, optional: true, required: false
  private _inet6BackupRouterDestination?: string[]; 
  public get inet6BackupRouterDestination() {
    return cdktf.Fn.tolist(this.getListAttribute('inet6_backup_router_destination'));
  }
  public set inet6BackupRouterDestination(value: string[]) {
    this._inet6BackupRouterDestination = value;
  }
  public resetInet6BackupRouterDestination() {
    this._inet6BackupRouterDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inet6BackupRouterDestinationInput() {
    return this._inet6BackupRouterDestination;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system junos_group_dual_system}
*/
export class GroupDualSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_group_dual_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupDualSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupDualSystem to import
  * @param importFromId The id of the existing GroupDualSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupDualSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_group_dual_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/group_dual_system junos_group_dual_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupDualSystemConfig
  */
  public constructor(scope: Construct, id: string, config: GroupDualSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_group_dual_system',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyGroups = config.applyGroups;
    this._name = config.name;
    this._interfaceFxp0.internalValue = config.interfaceFxp0;
    this._routingOptions.internalValue = config.routingOptions;
    this._security.internalValue = config.security;
    this._system.internalValue = config.systemAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_groups - computed: true, optional: true, required: false
  private _applyGroups?: boolean | cdktf.IResolvable; 
  public get applyGroups() {
    return this.getBooleanAttribute('apply_groups');
  }
  public set applyGroups(value: boolean | cdktf.IResolvable) {
    this._applyGroups = value;
  }
  public resetApplyGroups() {
    this._applyGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyGroupsInput() {
    return this._applyGroups;
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

  // interface_fxp0 - computed: false, optional: true, required: false
  private _interfaceFxp0 = new GroupDualSystemInterfaceFxp0OutputReference(this, "interface_fxp0");
  public get interfaceFxp0() {
    return this._interfaceFxp0;
  }
  public putInterfaceFxp0(value: GroupDualSystemInterfaceFxp0) {
    this._interfaceFxp0.internalValue = value;
  }
  public resetInterfaceFxp0() {
    this._interfaceFxp0.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceFxp0Input() {
    return this._interfaceFxp0.internalValue;
  }

  // routing_options - computed: false, optional: true, required: false
  private _routingOptions = new GroupDualSystemRoutingOptionsOutputReference(this, "routing_options");
  public get routingOptions() {
    return this._routingOptions;
  }
  public putRoutingOptions(value: GroupDualSystemRoutingOptions) {
    this._routingOptions.internalValue = value;
  }
  public resetRoutingOptions() {
    this._routingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionsInput() {
    return this._routingOptions.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new GroupDualSystemSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: GroupDualSystemSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // system - computed: false, optional: true, required: false
  private _system = new GroupDualSystemSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: GroupDualSystemSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_groups: cdktf.booleanToTerraform(this._applyGroups),
      name: cdktf.stringToTerraform(this._name),
      interface_fxp0: groupDualSystemInterfaceFxp0ToTerraform(this._interfaceFxp0.internalValue),
      routing_options: groupDualSystemRoutingOptionsToTerraform(this._routingOptions.internalValue),
      security: groupDualSystemSecurityToTerraform(this._security.internalValue),
      system: groupDualSystemSystemToTerraform(this._system.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_groups: {
        value: cdktf.booleanToHclTerraform(this._applyGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_fxp0: {
        value: groupDualSystemInterfaceFxp0ToHclTerraform(this._interfaceFxp0.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupDualSystemInterfaceFxp0",
      },
      routing_options: {
        value: groupDualSystemRoutingOptionsToHclTerraform(this._routingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupDualSystemRoutingOptions",
      },
      security: {
        value: groupDualSystemSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupDualSystemSecurity",
      },
      system: {
        value: groupDualSystemSystemToHclTerraform(this._system.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupDualSystemSystem",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
