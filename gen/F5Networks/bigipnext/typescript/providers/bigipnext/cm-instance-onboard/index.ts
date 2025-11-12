// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmInstanceOnboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * DNS servers to be Added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#dns_servers CmInstanceOnboard#dns_servers}
  */
  readonly dnsServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#l1_networks CmInstanceOnboard#l1_networks}
  */
  readonly l1Networks?: CmInstanceOnboardL1Networks[] | cdktf.IResolvable;
  /**
  * The desired management Address of the Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#management_address CmInstanceOnboard#management_address}
  */
  readonly managementAddress: string;
  /**
  * NTP servers to be Added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#ntp_servers CmInstanceOnboard#ntp_servers}
  */
  readonly ntpServers: string[];
  /**
  * The number of seconds to wait for instance onboard to finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#timeout CmInstanceOnboard#timeout}
  */
  readonly timeout?: number;
}
export interface CmInstanceOnboardL1NetworksL1Link {
  /**
  * L1 Link type..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#link_type CmInstanceOnboard#link_type}
  */
  readonly linkType: string;
  /**
  * A soft reference, by name, to an L1 link layer interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#name CmInstanceOnboard#name}
  */
  readonly name: string;
}

export function cmInstanceOnboardL1NetworksL1LinkToTerraform(struct?: CmInstanceOnboardL1NetworksL1Link | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_type: cdktf.stringToTerraform(struct!.linkType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cmInstanceOnboardL1NetworksL1LinkToHclTerraform(struct?: CmInstanceOnboardL1NetworksL1Link | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
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

export class CmInstanceOnboardL1NetworksL1LinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmInstanceOnboardL1NetworksL1Link | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmInstanceOnboardL1NetworksL1Link | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkType = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkType = value.linkType;
      this._name = value.name;
    }
  }

  // link_type - computed: false, optional: false, required: true
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
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
export interface CmInstanceOnboardL1NetworksVlansSelfIps {
  /**
  * An IPv4 or IPv6 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#address CmInstanceOnboard#address}
  */
  readonly address: string;
  /**
  * Specifies the node that this non-floating self-IP address belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#device_name CmInstanceOnboard#device_name}
  */
  readonly deviceName: string;
}

export function cmInstanceOnboardL1NetworksVlansSelfIpsToTerraform(struct?: CmInstanceOnboardL1NetworksVlansSelfIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
  }
}


export function cmInstanceOnboardL1NetworksVlansSelfIpsToHclTerraform(struct?: CmInstanceOnboardL1NetworksVlansSelfIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmInstanceOnboardL1NetworksVlansSelfIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmInstanceOnboardL1NetworksVlansSelfIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmInstanceOnboardL1NetworksVlansSelfIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._deviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._deviceName = value.deviceName;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }
}

export class CmInstanceOnboardL1NetworksVlansSelfIpsList extends cdktf.ComplexList {
  public internalValue? : CmInstanceOnboardL1NetworksVlansSelfIps[] | cdktf.IResolvable

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
  public get(index: number): CmInstanceOnboardL1NetworksVlansSelfIpsOutputReference {
    return new CmInstanceOnboardL1NetworksVlansSelfIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmInstanceOnboardL1NetworksVlans {
  /**
  * L1 network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#name CmInstanceOnboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#self_ips CmInstanceOnboard#self_ips}
  */
  readonly selfIps?: CmInstanceOnboardL1NetworksVlansSelfIps[] | cdktf.IResolvable;
  /**
  * An unsigned 32-bit integer..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#tag CmInstanceOnboard#tag}
  */
  readonly tag: number;
}

export function cmInstanceOnboardL1NetworksVlansToTerraform(struct?: CmInstanceOnboardL1NetworksVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    self_ips: cdktf.listMapper(cmInstanceOnboardL1NetworksVlansSelfIpsToTerraform, false)(struct!.selfIps),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function cmInstanceOnboardL1NetworksVlansToHclTerraform(struct?: CmInstanceOnboardL1NetworksVlans | cdktf.IResolvable): any {
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
    self_ips: {
      value: cdktf.listMapperHcl(cmInstanceOnboardL1NetworksVlansSelfIpsToHclTerraform, false)(struct!.selfIps),
      isBlock: true,
      type: "list",
      storageClassType: "CmInstanceOnboardL1NetworksVlansSelfIpsList",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmInstanceOnboardL1NetworksVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmInstanceOnboardL1NetworksVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selfIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfIps = this._selfIps?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmInstanceOnboardL1NetworksVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selfIps.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selfIps.internalValue = value.selfIps;
      this._tag = value.tag;
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

  // self_ips - computed: false, optional: true, required: false
  private _selfIps = new CmInstanceOnboardL1NetworksVlansSelfIpsList(this, "self_ips", false);
  public get selfIps() {
    return this._selfIps;
  }
  public putSelfIps(value: CmInstanceOnboardL1NetworksVlansSelfIps[] | cdktf.IResolvable) {
    this._selfIps.internalValue = value;
  }
  public resetSelfIps() {
    this._selfIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfIpsInput() {
    return this._selfIps.internalValue;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class CmInstanceOnboardL1NetworksVlansList extends cdktf.ComplexList {
  public internalValue? : CmInstanceOnboardL1NetworksVlans[] | cdktf.IResolvable

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
  public get(index: number): CmInstanceOnboardL1NetworksVlansOutputReference {
    return new CmInstanceOnboardL1NetworksVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmInstanceOnboardL1Networks {
  /**
  * L1 link layer interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#l1_link CmInstanceOnboard#l1_link}
  */
  readonly l1Link: CmInstanceOnboardL1NetworksL1Link;
  /**
  * L1 network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#name CmInstanceOnboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#vlans CmInstanceOnboard#vlans}
  */
  readonly vlans?: CmInstanceOnboardL1NetworksVlans[] | cdktf.IResolvable;
}

export function cmInstanceOnboardL1NetworksToTerraform(struct?: CmInstanceOnboardL1Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l1_link: cmInstanceOnboardL1NetworksL1LinkToTerraform(struct!.l1Link),
    name: cdktf.stringToTerraform(struct!.name),
    vlans: cdktf.listMapper(cmInstanceOnboardL1NetworksVlansToTerraform, false)(struct!.vlans),
  }
}


export function cmInstanceOnboardL1NetworksToHclTerraform(struct?: CmInstanceOnboardL1Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l1_link: {
      value: cmInstanceOnboardL1NetworksL1LinkToHclTerraform(struct!.l1Link),
      isBlock: true,
      type: "struct",
      storageClassType: "CmInstanceOnboardL1NetworksL1Link",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlans: {
      value: cdktf.listMapperHcl(cmInstanceOnboardL1NetworksVlansToHclTerraform, false)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "CmInstanceOnboardL1NetworksVlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmInstanceOnboardL1NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmInstanceOnboardL1Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l1Link?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l1Link = this._l1Link?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmInstanceOnboardL1Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._l1Link.internalValue = undefined;
      this._name = undefined;
      this._vlans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._l1Link.internalValue = value.l1Link;
      this._name = value.name;
      this._vlans.internalValue = value.vlans;
    }
  }

  // l1_link - computed: false, optional: false, required: true
  private _l1Link = new CmInstanceOnboardL1NetworksL1LinkOutputReference(this, "l1_link");
  public get l1Link() {
    return this._l1Link;
  }
  public putL1Link(value: CmInstanceOnboardL1NetworksL1Link) {
    this._l1Link.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l1LinkInput() {
    return this._l1Link.internalValue;
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

  // vlans - computed: false, optional: true, required: false
  private _vlans = new CmInstanceOnboardL1NetworksVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: CmInstanceOnboardL1NetworksVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }
}

export class CmInstanceOnboardL1NetworksList extends cdktf.ComplexList {
  public internalValue? : CmInstanceOnboardL1Networks[] | cdktf.IResolvable

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
  public get(index: number): CmInstanceOnboardL1NetworksOutputReference {
    return new CmInstanceOnboardL1NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard bigipnext_cm_instance_onboard}
*/
export class CmInstanceOnboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_instance_onboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmInstanceOnboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmInstanceOnboard to import
  * @param importFromId The id of the existing CmInstanceOnboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmInstanceOnboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_instance_onboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_instance_onboard bigipnext_cm_instance_onboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmInstanceOnboardConfig
  */
  public constructor(scope: Construct, id: string, config: CmInstanceOnboardConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_instance_onboard',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsServers = config.dnsServers;
    this._l1Networks.internalValue = config.l1Networks;
    this._managementAddress = config.managementAddress;
    this._ntpServers = config.ntpServers;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_servers - computed: false, optional: false, required: true
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // l1_networks - computed: false, optional: true, required: false
  private _l1Networks = new CmInstanceOnboardL1NetworksList(this, "l1_networks", false);
  public get l1Networks() {
    return this._l1Networks;
  }
  public putL1Networks(value: CmInstanceOnboardL1Networks[] | cdktf.IResolvable) {
    this._l1Networks.internalValue = value;
  }
  public resetL1Networks() {
    this._l1Networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l1NetworksInput() {
    return this._l1Networks.internalValue;
  }

  // management_address - computed: false, optional: false, required: true
  private _managementAddress?: string; 
  public get managementAddress() {
    return this.getStringAttribute('management_address');
  }
  public set managementAddress(value: string) {
    this._managementAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress;
  }

  // ntp_servers - computed: false, optional: false, required: true
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      l1_networks: cdktf.listMapper(cmInstanceOnboardL1NetworksToTerraform, false)(this._l1Networks.internalValue),
      management_address: cdktf.stringToTerraform(this._managementAddress),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      l1_networks: {
        value: cdktf.listMapperHcl(cmInstanceOnboardL1NetworksToHclTerraform, false)(this._l1Networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmInstanceOnboardL1NetworksList",
      },
      management_address: {
        value: cdktf.stringToHclTerraform(this._managementAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
