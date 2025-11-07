// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallCentralsnatmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#comments FirewallCentralsnatmap#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#dst_port FirewallCentralsnatmap#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#dynamic_sort_subtable FirewallCentralsnatmap#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#get_all_tables FirewallCentralsnatmap#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#id FirewallCentralsnatmap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#nat FirewallCentralsnatmap#nat}
  */
  readonly nat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#nat46 FirewallCentralsnatmap#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#nat64 FirewallCentralsnatmap#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#nat_port FirewallCentralsnatmap#nat_port}
  */
  readonly natPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#orig_port FirewallCentralsnatmap#orig_port}
  */
  readonly origPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#policyid FirewallCentralsnatmap#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#port_preserve FirewallCentralsnatmap#port_preserve}
  */
  readonly portPreserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#port_random FirewallCentralsnatmap#port_random}
  */
  readonly portRandom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#protocol FirewallCentralsnatmap#protocol}
  */
  readonly protocol: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#status FirewallCentralsnatmap#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#type FirewallCentralsnatmap#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#uuid FirewallCentralsnatmap#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#vdomparam FirewallCentralsnatmap#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * dst_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#dst_addr FirewallCentralsnatmap#dst_addr}
  */
  readonly dstAddr: FirewallCentralsnatmapDstAddr[] | cdktf.IResolvable;
  /**
  * dst_addr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#dst_addr6 FirewallCentralsnatmap#dst_addr6}
  */
  readonly dstAddr6?: FirewallCentralsnatmapDstAddr6[] | cdktf.IResolvable;
  /**
  * dstintf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#dstintf FirewallCentralsnatmap#dstintf}
  */
  readonly dstintf: FirewallCentralsnatmapDstintf[] | cdktf.IResolvable;
  /**
  * nat_ippool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#nat_ippool FirewallCentralsnatmap#nat_ippool}
  */
  readonly natIppool?: FirewallCentralsnatmapNatIppool[] | cdktf.IResolvable;
  /**
  * nat_ippool6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#nat_ippool6 FirewallCentralsnatmap#nat_ippool6}
  */
  readonly natIppool6?: FirewallCentralsnatmapNatIppool6[] | cdktf.IResolvable;
  /**
  * orig_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#orig_addr FirewallCentralsnatmap#orig_addr}
  */
  readonly origAddr: FirewallCentralsnatmapOrigAddr[] | cdktf.IResolvable;
  /**
  * orig_addr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#orig_addr6 FirewallCentralsnatmap#orig_addr6}
  */
  readonly origAddr6?: FirewallCentralsnatmapOrigAddr6[] | cdktf.IResolvable;
  /**
  * srcintf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#srcintf FirewallCentralsnatmap#srcintf}
  */
  readonly srcintf: FirewallCentralsnatmapSrcintf[] | cdktf.IResolvable;
}
export interface FirewallCentralsnatmapDstAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapDstAddrToTerraform(struct?: FirewallCentralsnatmapDstAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapDstAddrToHclTerraform(struct?: FirewallCentralsnatmapDstAddr | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapDstAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapDstAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapDstAddr | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapDstAddrList extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapDstAddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapDstAddrOutputReference {
    return new FirewallCentralsnatmapDstAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallCentralsnatmapDstAddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapDstAddr6ToTerraform(struct?: FirewallCentralsnatmapDstAddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapDstAddr6ToHclTerraform(struct?: FirewallCentralsnatmapDstAddr6 | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapDstAddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapDstAddr6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapDstAddr6 | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapDstAddr6List extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapDstAddr6[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapDstAddr6OutputReference {
    return new FirewallCentralsnatmapDstAddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallCentralsnatmapDstintf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapDstintfToTerraform(struct?: FirewallCentralsnatmapDstintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapDstintfToHclTerraform(struct?: FirewallCentralsnatmapDstintf | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapDstintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapDstintf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapDstintf | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapDstintfList extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapDstintf[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapDstintfOutputReference {
    return new FirewallCentralsnatmapDstintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallCentralsnatmapNatIppool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapNatIppoolToTerraform(struct?: FirewallCentralsnatmapNatIppool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapNatIppoolToHclTerraform(struct?: FirewallCentralsnatmapNatIppool | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapNatIppoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapNatIppool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapNatIppool | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapNatIppoolList extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapNatIppool[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapNatIppoolOutputReference {
    return new FirewallCentralsnatmapNatIppoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallCentralsnatmapNatIppool6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapNatIppool6ToTerraform(struct?: FirewallCentralsnatmapNatIppool6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapNatIppool6ToHclTerraform(struct?: FirewallCentralsnatmapNatIppool6 | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapNatIppool6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapNatIppool6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapNatIppool6 | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapNatIppool6List extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapNatIppool6[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapNatIppool6OutputReference {
    return new FirewallCentralsnatmapNatIppool6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallCentralsnatmapOrigAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapOrigAddrToTerraform(struct?: FirewallCentralsnatmapOrigAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapOrigAddrToHclTerraform(struct?: FirewallCentralsnatmapOrigAddr | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapOrigAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapOrigAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapOrigAddr | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapOrigAddrList extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapOrigAddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapOrigAddrOutputReference {
    return new FirewallCentralsnatmapOrigAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallCentralsnatmapOrigAddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapOrigAddr6ToTerraform(struct?: FirewallCentralsnatmapOrigAddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapOrigAddr6ToHclTerraform(struct?: FirewallCentralsnatmapOrigAddr6 | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapOrigAddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapOrigAddr6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapOrigAddr6 | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapOrigAddr6List extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapOrigAddr6[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapOrigAddr6OutputReference {
    return new FirewallCentralsnatmapOrigAddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallCentralsnatmapSrcintf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#name FirewallCentralsnatmap#name}
  */
  readonly name?: string;
}

export function firewallCentralsnatmapSrcintfToTerraform(struct?: FirewallCentralsnatmapSrcintf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallCentralsnatmapSrcintfToHclTerraform(struct?: FirewallCentralsnatmapSrcintf | cdktf.IResolvable): any {
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

export class FirewallCentralsnatmapSrcintfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallCentralsnatmapSrcintf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallCentralsnatmapSrcintf | cdktf.IResolvable | undefined) {
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

export class FirewallCentralsnatmapSrcintfList extends cdktf.ComplexList {
  public internalValue? : FirewallCentralsnatmapSrcintf[] | cdktf.IResolvable

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
  public get(index: number): FirewallCentralsnatmapSrcintfOutputReference {
    return new FirewallCentralsnatmapSrcintfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap fortios_firewall_centralsnatmap}
*/
export class FirewallCentralsnatmap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_centralsnatmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallCentralsnatmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallCentralsnatmap to import
  * @param importFromId The id of the existing FirewallCentralsnatmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallCentralsnatmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_centralsnatmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap fortios_firewall_centralsnatmap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallCentralsnatmapConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallCentralsnatmapConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_centralsnatmap',
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
    this._comments = config.comments;
    this._dstPort = config.dstPort;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._nat = config.nat;
    this._nat46 = config.nat46;
    this._nat64 = config.nat64;
    this._natPort = config.natPort;
    this._origPort = config.origPort;
    this._policyid = config.policyid;
    this._portPreserve = config.portPreserve;
    this._portRandom = config.portRandom;
    this._protocol = config.protocol;
    this._status = config.status;
    this._type = config.type;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._dstAddr.internalValue = config.dstAddr;
    this._dstAddr6.internalValue = config.dstAddr6;
    this._dstintf.internalValue = config.dstintf;
    this._natIppool.internalValue = config.natIppool;
    this._natIppool6.internalValue = config.natIppool6;
    this._origAddr.internalValue = config.origAddr;
    this._origAddr6.internalValue = config.origAddr6;
    this._srcintf.internalValue = config.srcintf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dst_port - computed: true, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
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

  // nat - computed: false, optional: false, required: true
  private _nat?: string; 
  public get nat() {
    return this.getStringAttribute('nat');
  }
  public set nat(value: string) {
    this._nat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat46 - computed: true, optional: true, required: false
  private _nat46?: string; 
  public get nat46() {
    return this.getStringAttribute('nat46');
  }
  public set nat46(value: string) {
    this._nat46 = value;
  }
  public resetNat46() {
    this._nat46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46Input() {
    return this._nat46;
  }

  // nat64 - computed: true, optional: true, required: false
  private _nat64?: string; 
  public get nat64() {
    return this.getStringAttribute('nat64');
  }
  public set nat64(value: string) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
  }

  // nat_port - computed: true, optional: true, required: false
  private _natPort?: string; 
  public get natPort() {
    return this.getStringAttribute('nat_port');
  }
  public set natPort(value: string) {
    this._natPort = value;
  }
  public resetNatPort() {
    this._natPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortInput() {
    return this._natPort;
  }

  // orig_port - computed: false, optional: false, required: true
  private _origPort?: string; 
  public get origPort() {
    return this.getStringAttribute('orig_port');
  }
  public set origPort(value: string) {
    this._origPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get origPortInput() {
    return this._origPort;
  }

  // policyid - computed: true, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // port_preserve - computed: true, optional: true, required: false
  private _portPreserve?: string; 
  public get portPreserve() {
    return this.getStringAttribute('port_preserve');
  }
  public set portPreserve(value: string) {
    this._portPreserve = value;
  }
  public resetPortPreserve() {
    this._portPreserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPreserveInput() {
    return this._portPreserve;
  }

  // port_random - computed: true, optional: true, required: false
  private _portRandom?: string; 
  public get portRandom() {
    return this.getStringAttribute('port_random');
  }
  public set portRandom(value: string) {
    this._portRandom = value;
  }
  public resetPortRandom() {
    this._portRandom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRandomInput() {
    return this._portRandom;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // dst_addr - computed: false, optional: false, required: true
  private _dstAddr = new FirewallCentralsnatmapDstAddrList(this, "dst_addr", true);
  public get dstAddr() {
    return this._dstAddr;
  }
  public putDstAddr(value: FirewallCentralsnatmapDstAddr[] | cdktf.IResolvable) {
    this._dstAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrInput() {
    return this._dstAddr.internalValue;
  }

  // dst_addr6 - computed: false, optional: true, required: false
  private _dstAddr6 = new FirewallCentralsnatmapDstAddr6List(this, "dst_addr6", true);
  public get dstAddr6() {
    return this._dstAddr6;
  }
  public putDstAddr6(value: FirewallCentralsnatmapDstAddr6[] | cdktf.IResolvable) {
    this._dstAddr6.internalValue = value;
  }
  public resetDstAddr6() {
    this._dstAddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddr6Input() {
    return this._dstAddr6.internalValue;
  }

  // dstintf - computed: false, optional: false, required: true
  private _dstintf = new FirewallCentralsnatmapDstintfList(this, "dstintf", true);
  public get dstintf() {
    return this._dstintf;
  }
  public putDstintf(value: FirewallCentralsnatmapDstintf[] | cdktf.IResolvable) {
    this._dstintf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf.internalValue;
  }

  // nat_ippool - computed: false, optional: true, required: false
  private _natIppool = new FirewallCentralsnatmapNatIppoolList(this, "nat_ippool", true);
  public get natIppool() {
    return this._natIppool;
  }
  public putNatIppool(value: FirewallCentralsnatmapNatIppool[] | cdktf.IResolvable) {
    this._natIppool.internalValue = value;
  }
  public resetNatIppool() {
    this._natIppool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIppoolInput() {
    return this._natIppool.internalValue;
  }

  // nat_ippool6 - computed: false, optional: true, required: false
  private _natIppool6 = new FirewallCentralsnatmapNatIppool6List(this, "nat_ippool6", true);
  public get natIppool6() {
    return this._natIppool6;
  }
  public putNatIppool6(value: FirewallCentralsnatmapNatIppool6[] | cdktf.IResolvable) {
    this._natIppool6.internalValue = value;
  }
  public resetNatIppool6() {
    this._natIppool6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIppool6Input() {
    return this._natIppool6.internalValue;
  }

  // orig_addr - computed: false, optional: false, required: true
  private _origAddr = new FirewallCentralsnatmapOrigAddrList(this, "orig_addr", true);
  public get origAddr() {
    return this._origAddr;
  }
  public putOrigAddr(value: FirewallCentralsnatmapOrigAddr[] | cdktf.IResolvable) {
    this._origAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get origAddrInput() {
    return this._origAddr.internalValue;
  }

  // orig_addr6 - computed: false, optional: true, required: false
  private _origAddr6 = new FirewallCentralsnatmapOrigAddr6List(this, "orig_addr6", true);
  public get origAddr6() {
    return this._origAddr6;
  }
  public putOrigAddr6(value: FirewallCentralsnatmapOrigAddr6[] | cdktf.IResolvable) {
    this._origAddr6.internalValue = value;
  }
  public resetOrigAddr6() {
    this._origAddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get origAddr6Input() {
    return this._origAddr6.internalValue;
  }

  // srcintf - computed: false, optional: false, required: true
  private _srcintf = new FirewallCentralsnatmapSrcintfList(this, "srcintf", true);
  public get srcintf() {
    return this._srcintf;
  }
  public putSrcintf(value: FirewallCentralsnatmapSrcintf[] | cdktf.IResolvable) {
    this._srcintf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      nat: cdktf.stringToTerraform(this._nat),
      nat46: cdktf.stringToTerraform(this._nat46),
      nat64: cdktf.stringToTerraform(this._nat64),
      nat_port: cdktf.stringToTerraform(this._natPort),
      orig_port: cdktf.stringToTerraform(this._origPort),
      policyid: cdktf.numberToTerraform(this._policyid),
      port_preserve: cdktf.stringToTerraform(this._portPreserve),
      port_random: cdktf.stringToTerraform(this._portRandom),
      protocol: cdktf.numberToTerraform(this._protocol),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      dst_addr: cdktf.listMapper(firewallCentralsnatmapDstAddrToTerraform, true)(this._dstAddr.internalValue),
      dst_addr6: cdktf.listMapper(firewallCentralsnatmapDstAddr6ToTerraform, true)(this._dstAddr6.internalValue),
      dstintf: cdktf.listMapper(firewallCentralsnatmapDstintfToTerraform, true)(this._dstintf.internalValue),
      nat_ippool: cdktf.listMapper(firewallCentralsnatmapNatIppoolToTerraform, true)(this._natIppool.internalValue),
      nat_ippool6: cdktf.listMapper(firewallCentralsnatmapNatIppool6ToTerraform, true)(this._natIppool6.internalValue),
      orig_addr: cdktf.listMapper(firewallCentralsnatmapOrigAddrToTerraform, true)(this._origAddr.internalValue),
      orig_addr6: cdktf.listMapper(firewallCentralsnatmapOrigAddr6ToTerraform, true)(this._origAddr6.internalValue),
      srcintf: cdktf.listMapper(firewallCentralsnatmapSrcintfToTerraform, true)(this._srcintf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
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
      nat: {
        value: cdktf.stringToHclTerraform(this._nat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46: {
        value: cdktf.stringToHclTerraform(this._nat46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64: {
        value: cdktf.stringToHclTerraform(this._nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_port: {
        value: cdktf.stringToHclTerraform(this._natPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orig_port: {
        value: cdktf.stringToHclTerraform(this._origPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_preserve: {
        value: cdktf.stringToHclTerraform(this._portPreserve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_random: {
        value: cdktf.stringToHclTerraform(this._portRandom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      dst_addr: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapDstAddrToHclTerraform, true)(this._dstAddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapDstAddrList",
      },
      dst_addr6: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapDstAddr6ToHclTerraform, true)(this._dstAddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapDstAddr6List",
      },
      dstintf: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapDstintfToHclTerraform, true)(this._dstintf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapDstintfList",
      },
      nat_ippool: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapNatIppoolToHclTerraform, true)(this._natIppool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapNatIppoolList",
      },
      nat_ippool6: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapNatIppool6ToHclTerraform, true)(this._natIppool6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapNatIppool6List",
      },
      orig_addr: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapOrigAddrToHclTerraform, true)(this._origAddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapOrigAddrList",
      },
      orig_addr6: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapOrigAddr6ToHclTerraform, true)(this._origAddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapOrigAddr6List",
      },
      srcintf: {
        value: cdktf.listMapperHcl(firewallCentralsnatmapSrcintfToHclTerraform, true)(this._srcintf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallCentralsnatmapSrcintfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
