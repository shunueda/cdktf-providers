// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallLocalinpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#action FirewallLocalinpolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#comments FirewallLocalinpolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#dstaddr_negate FirewallLocalinpolicy#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#dynamic_sort_subtable FirewallLocalinpolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#get_all_tables FirewallLocalinpolicy#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#ha_mgmt_intf_only FirewallLocalinpolicy#ha_mgmt_intf_only}
  */
  readonly haMgmtIntfOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#id FirewallLocalinpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#internet_service_src FirewallLocalinpolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#internet_service_src_negate FirewallLocalinpolicy#internet_service_src_negate}
  */
  readonly internetServiceSrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#intf FirewallLocalinpolicy#intf}
  */
  readonly intf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#logtraffic FirewallLocalinpolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#policyid FirewallLocalinpolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#schedule FirewallLocalinpolicy#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#service_negate FirewallLocalinpolicy#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#srcaddr_negate FirewallLocalinpolicy#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#status FirewallLocalinpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#uuid FirewallLocalinpolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#vdomparam FirewallLocalinpolicy#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#virtual_patch FirewallLocalinpolicy#virtual_patch}
  */
  readonly virtualPatch?: string;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#dstaddr FirewallLocalinpolicy#dstaddr}
  */
  readonly dstaddr: FirewallLocalinpolicyDstaddr[] | cdktf.IResolvable;
  /**
  * internet_service_src_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#internet_service_src_custom FirewallLocalinpolicy#internet_service_src_custom}
  */
  readonly internetServiceSrcCustom?: FirewallLocalinpolicyInternetServiceSrcCustom[] | cdktf.IResolvable;
  /**
  * internet_service_src_custom_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#internet_service_src_custom_group FirewallLocalinpolicy#internet_service_src_custom_group}
  */
  readonly internetServiceSrcCustomGroup?: FirewallLocalinpolicyInternetServiceSrcCustomGroup[] | cdktf.IResolvable;
  /**
  * internet_service_src_fortiguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#internet_service_src_fortiguard FirewallLocalinpolicy#internet_service_src_fortiguard}
  */
  readonly internetServiceSrcFortiguard?: FirewallLocalinpolicyInternetServiceSrcFortiguard[] | cdktf.IResolvable;
  /**
  * internet_service_src_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#internet_service_src_group FirewallLocalinpolicy#internet_service_src_group}
  */
  readonly internetServiceSrcGroup?: FirewallLocalinpolicyInternetServiceSrcGroup[] | cdktf.IResolvable;
  /**
  * internet_service_src_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#internet_service_src_name FirewallLocalinpolicy#internet_service_src_name}
  */
  readonly internetServiceSrcName?: FirewallLocalinpolicyInternetServiceSrcName[] | cdktf.IResolvable;
  /**
  * intf_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#intf_block FirewallLocalinpolicy#intf_block}
  */
  readonly intfBlock?: FirewallLocalinpolicyIntfBlock[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#service FirewallLocalinpolicy#service}
  */
  readonly service?: FirewallLocalinpolicyService[] | cdktf.IResolvable;
  /**
  * srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#srcaddr FirewallLocalinpolicy#srcaddr}
  */
  readonly srcaddr: FirewallLocalinpolicySrcaddr[] | cdktf.IResolvable;
}
export interface FirewallLocalinpolicyDstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyDstaddrToTerraform(struct?: FirewallLocalinpolicyDstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyDstaddrToHclTerraform(struct?: FirewallLocalinpolicyDstaddr | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyDstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyDstaddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyDstaddr | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyDstaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyDstaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyDstaddrOutputReference {
    return new FirewallLocalinpolicyDstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicyInternetServiceSrcCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyInternetServiceSrcCustomToTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyInternetServiceSrcCustomToHclTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcCustom | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyInternetServiceSrcCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyInternetServiceSrcCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyInternetServiceSrcCustom | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyInternetServiceSrcCustomList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyInternetServiceSrcCustom[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyInternetServiceSrcCustomOutputReference {
    return new FirewallLocalinpolicyInternetServiceSrcCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicyInternetServiceSrcCustomGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyInternetServiceSrcCustomGroupToTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcCustomGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyInternetServiceSrcCustomGroupToHclTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcCustomGroup | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyInternetServiceSrcCustomGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyInternetServiceSrcCustomGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyInternetServiceSrcCustomGroup | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyInternetServiceSrcCustomGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyInternetServiceSrcCustomGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyInternetServiceSrcCustomGroupOutputReference {
    return new FirewallLocalinpolicyInternetServiceSrcCustomGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicyInternetServiceSrcFortiguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyInternetServiceSrcFortiguardToTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyInternetServiceSrcFortiguardToHclTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcFortiguard | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyInternetServiceSrcFortiguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyInternetServiceSrcFortiguard | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyInternetServiceSrcFortiguard | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyInternetServiceSrcFortiguardList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyInternetServiceSrcFortiguard[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyInternetServiceSrcFortiguardOutputReference {
    return new FirewallLocalinpolicyInternetServiceSrcFortiguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicyInternetServiceSrcGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyInternetServiceSrcGroupToTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyInternetServiceSrcGroupToHclTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcGroup | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyInternetServiceSrcGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyInternetServiceSrcGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyInternetServiceSrcGroup | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyInternetServiceSrcGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyInternetServiceSrcGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyInternetServiceSrcGroupOutputReference {
    return new FirewallLocalinpolicyInternetServiceSrcGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicyInternetServiceSrcName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyInternetServiceSrcNameToTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyInternetServiceSrcNameToHclTerraform(struct?: FirewallLocalinpolicyInternetServiceSrcName | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyInternetServiceSrcNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyInternetServiceSrcName | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyInternetServiceSrcName | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyInternetServiceSrcNameList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyInternetServiceSrcName[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyInternetServiceSrcNameOutputReference {
    return new FirewallLocalinpolicyInternetServiceSrcNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicyIntfBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyIntfBlockToTerraform(struct?: FirewallLocalinpolicyIntfBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyIntfBlockToHclTerraform(struct?: FirewallLocalinpolicyIntfBlock | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyIntfBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyIntfBlock | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyIntfBlock | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyIntfBlockList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyIntfBlock[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyIntfBlockOutputReference {
    return new FirewallLocalinpolicyIntfBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicyService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicyServiceToTerraform(struct?: FirewallLocalinpolicyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicyServiceToHclTerraform(struct?: FirewallLocalinpolicyService | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicyServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicyService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicyService | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicyServiceList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicyService[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicyServiceOutputReference {
    return new FirewallLocalinpolicyServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallLocalinpolicySrcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#name FirewallLocalinpolicy#name}
  */
  readonly name?: string;
}

export function firewallLocalinpolicySrcaddrToTerraform(struct?: FirewallLocalinpolicySrcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallLocalinpolicySrcaddrToHclTerraform(struct?: FirewallLocalinpolicySrcaddr | cdktf.IResolvable): any {
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

export class FirewallLocalinpolicySrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallLocalinpolicySrcaddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallLocalinpolicySrcaddr | cdktf.IResolvable | undefined) {
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

export class FirewallLocalinpolicySrcaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallLocalinpolicySrcaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallLocalinpolicySrcaddrOutputReference {
    return new FirewallLocalinpolicySrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy fortios_firewall_localinpolicy}
*/
export class FirewallLocalinpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_localinpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallLocalinpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallLocalinpolicy to import
  * @param importFromId The id of the existing FirewallLocalinpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallLocalinpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_localinpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_localinpolicy fortios_firewall_localinpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallLocalinpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallLocalinpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_localinpolicy',
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
    this._action = config.action;
    this._comments = config.comments;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._haMgmtIntfOnly = config.haMgmtIntfOnly;
    this._id = config.id;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcNegate = config.internetServiceSrcNegate;
    this._intf = config.intf;
    this._logtraffic = config.logtraffic;
    this._policyid = config.policyid;
    this._schedule = config.schedule;
    this._serviceNegate = config.serviceNegate;
    this._srcaddrNegate = config.srcaddrNegate;
    this._status = config.status;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._virtualPatch = config.virtualPatch;
    this._dstaddr.internalValue = config.dstaddr;
    this._internetServiceSrcCustom.internalValue = config.internetServiceSrcCustom;
    this._internetServiceSrcCustomGroup.internalValue = config.internetServiceSrcCustomGroup;
    this._internetServiceSrcFortiguard.internalValue = config.internetServiceSrcFortiguard;
    this._internetServiceSrcGroup.internalValue = config.internetServiceSrcGroup;
    this._internetServiceSrcName.internalValue = config.internetServiceSrcName;
    this._intfBlock.internalValue = config.intfBlock;
    this._service.internalValue = config.service;
    this._srcaddr.internalValue = config.srcaddr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // dstaddr_negate - computed: true, optional: true, required: false
  private _dstaddrNegate?: string; 
  public get dstaddrNegate() {
    return this.getStringAttribute('dstaddr_negate');
  }
  public set dstaddrNegate(value: string) {
    this._dstaddrNegate = value;
  }
  public resetDstaddrNegate() {
    this._dstaddrNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrNegateInput() {
    return this._dstaddrNegate;
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

  // ha_mgmt_intf_only - computed: true, optional: true, required: false
  private _haMgmtIntfOnly?: string; 
  public get haMgmtIntfOnly() {
    return this.getStringAttribute('ha_mgmt_intf_only');
  }
  public set haMgmtIntfOnly(value: string) {
    this._haMgmtIntfOnly = value;
  }
  public resetHaMgmtIntfOnly() {
    this._haMgmtIntfOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haMgmtIntfOnlyInput() {
    return this._haMgmtIntfOnly;
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

  // internet_service_src - computed: true, optional: true, required: false
  private _internetServiceSrc?: string; 
  public get internetServiceSrc() {
    return this.getStringAttribute('internet_service_src');
  }
  public set internetServiceSrc(value: string) {
    this._internetServiceSrc = value;
  }
  public resetInternetServiceSrc() {
    this._internetServiceSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcInput() {
    return this._internetServiceSrc;
  }

  // internet_service_src_negate - computed: true, optional: true, required: false
  private _internetServiceSrcNegate?: string; 
  public get internetServiceSrcNegate() {
    return this.getStringAttribute('internet_service_src_negate');
  }
  public set internetServiceSrcNegate(value: string) {
    this._internetServiceSrcNegate = value;
  }
  public resetInternetServiceSrcNegate() {
    this._internetServiceSrcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNegateInput() {
    return this._internetServiceSrcNegate;
  }

  // intf - computed: false, optional: true, required: false
  private _intf?: string; 
  public get intf() {
    return this.getStringAttribute('intf');
  }
  public set intf(value: string) {
    this._intf = value;
  }
  public resetIntf() {
    this._intf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfInput() {
    return this._intf;
  }

  // logtraffic - computed: true, optional: true, required: false
  private _logtraffic?: string; 
  public get logtraffic() {
    return this.getStringAttribute('logtraffic');
  }
  public set logtraffic(value: string) {
    this._logtraffic = value;
  }
  public resetLogtraffic() {
    this._logtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficInput() {
    return this._logtraffic;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service_negate - computed: true, optional: true, required: false
  private _serviceNegate?: string; 
  public get serviceNegate() {
    return this.getStringAttribute('service_negate');
  }
  public set serviceNegate(value: string) {
    this._serviceNegate = value;
  }
  public resetServiceNegate() {
    this._serviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNegateInput() {
    return this._serviceNegate;
  }

  // srcaddr_negate - computed: true, optional: true, required: false
  private _srcaddrNegate?: string; 
  public get srcaddrNegate() {
    return this.getStringAttribute('srcaddr_negate');
  }
  public set srcaddrNegate(value: string) {
    this._srcaddrNegate = value;
  }
  public resetSrcaddrNegate() {
    this._srcaddrNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrNegateInput() {
    return this._srcaddrNegate;
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

  // virtual_patch - computed: true, optional: true, required: false
  private _virtualPatch?: string; 
  public get virtualPatch() {
    return this.getStringAttribute('virtual_patch');
  }
  public set virtualPatch(value: string) {
    this._virtualPatch = value;
  }
  public resetVirtualPatch() {
    this._virtualPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPatchInput() {
    return this._virtualPatch;
  }

  // dstaddr - computed: false, optional: false, required: true
  private _dstaddr = new FirewallLocalinpolicyDstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: FirewallLocalinpolicyDstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // internet_service_src_custom - computed: false, optional: true, required: false
  private _internetServiceSrcCustom = new FirewallLocalinpolicyInternetServiceSrcCustomList(this, "internet_service_src_custom", true);
  public get internetServiceSrcCustom() {
    return this._internetServiceSrcCustom;
  }
  public putInternetServiceSrcCustom(value: FirewallLocalinpolicyInternetServiceSrcCustom[] | cdktf.IResolvable) {
    this._internetServiceSrcCustom.internalValue = value;
  }
  public resetInternetServiceSrcCustom() {
    this._internetServiceSrcCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomInput() {
    return this._internetServiceSrcCustom.internalValue;
  }

  // internet_service_src_custom_group - computed: false, optional: true, required: false
  private _internetServiceSrcCustomGroup = new FirewallLocalinpolicyInternetServiceSrcCustomGroupList(this, "internet_service_src_custom_group", true);
  public get internetServiceSrcCustomGroup() {
    return this._internetServiceSrcCustomGroup;
  }
  public putInternetServiceSrcCustomGroup(value: FirewallLocalinpolicyInternetServiceSrcCustomGroup[] | cdktf.IResolvable) {
    this._internetServiceSrcCustomGroup.internalValue = value;
  }
  public resetInternetServiceSrcCustomGroup() {
    this._internetServiceSrcCustomGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomGroupInput() {
    return this._internetServiceSrcCustomGroup.internalValue;
  }

  // internet_service_src_fortiguard - computed: false, optional: true, required: false
  private _internetServiceSrcFortiguard = new FirewallLocalinpolicyInternetServiceSrcFortiguardList(this, "internet_service_src_fortiguard", true);
  public get internetServiceSrcFortiguard() {
    return this._internetServiceSrcFortiguard;
  }
  public putInternetServiceSrcFortiguard(value: FirewallLocalinpolicyInternetServiceSrcFortiguard[] | cdktf.IResolvable) {
    this._internetServiceSrcFortiguard.internalValue = value;
  }
  public resetInternetServiceSrcFortiguard() {
    this._internetServiceSrcFortiguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcFortiguardInput() {
    return this._internetServiceSrcFortiguard.internalValue;
  }

  // internet_service_src_group - computed: false, optional: true, required: false
  private _internetServiceSrcGroup = new FirewallLocalinpolicyInternetServiceSrcGroupList(this, "internet_service_src_group", true);
  public get internetServiceSrcGroup() {
    return this._internetServiceSrcGroup;
  }
  public putInternetServiceSrcGroup(value: FirewallLocalinpolicyInternetServiceSrcGroup[] | cdktf.IResolvable) {
    this._internetServiceSrcGroup.internalValue = value;
  }
  public resetInternetServiceSrcGroup() {
    this._internetServiceSrcGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcGroupInput() {
    return this._internetServiceSrcGroup.internalValue;
  }

  // internet_service_src_name - computed: false, optional: true, required: false
  private _internetServiceSrcName = new FirewallLocalinpolicyInternetServiceSrcNameList(this, "internet_service_src_name", true);
  public get internetServiceSrcName() {
    return this._internetServiceSrcName;
  }
  public putInternetServiceSrcName(value: FirewallLocalinpolicyInternetServiceSrcName[] | cdktf.IResolvable) {
    this._internetServiceSrcName.internalValue = value;
  }
  public resetInternetServiceSrcName() {
    this._internetServiceSrcName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNameInput() {
    return this._internetServiceSrcName.internalValue;
  }

  // intf_block - computed: false, optional: true, required: false
  private _intfBlock = new FirewallLocalinpolicyIntfBlockList(this, "intf_block", true);
  public get intfBlock() {
    return this._intfBlock;
  }
  public putIntfBlock(value: FirewallLocalinpolicyIntfBlock[] | cdktf.IResolvable) {
    this._intfBlock.internalValue = value;
  }
  public resetIntfBlock() {
    this._intfBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfBlockInput() {
    return this._intfBlock.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new FirewallLocalinpolicyServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: FirewallLocalinpolicyService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // srcaddr - computed: false, optional: false, required: true
  private _srcaddr = new FirewallLocalinpolicySrcaddrList(this, "srcaddr", true);
  public get srcaddr() {
    return this._srcaddr;
  }
  public putSrcaddr(value: FirewallLocalinpolicySrcaddr[] | cdktf.IResolvable) {
    this._srcaddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      comments: cdktf.stringToTerraform(this._comments),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      ha_mgmt_intf_only: cdktf.stringToTerraform(this._haMgmtIntfOnly),
      id: cdktf.stringToTerraform(this._id),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_negate: cdktf.stringToTerraform(this._internetServiceSrcNegate),
      intf: cdktf.stringToTerraform(this._intf),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      policyid: cdktf.numberToTerraform(this._policyid),
      schedule: cdktf.stringToTerraform(this._schedule),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      virtual_patch: cdktf.stringToTerraform(this._virtualPatch),
      dstaddr: cdktf.listMapper(firewallLocalinpolicyDstaddrToTerraform, true)(this._dstaddr.internalValue),
      internet_service_src_custom: cdktf.listMapper(firewallLocalinpolicyInternetServiceSrcCustomToTerraform, true)(this._internetServiceSrcCustom.internalValue),
      internet_service_src_custom_group: cdktf.listMapper(firewallLocalinpolicyInternetServiceSrcCustomGroupToTerraform, true)(this._internetServiceSrcCustomGroup.internalValue),
      internet_service_src_fortiguard: cdktf.listMapper(firewallLocalinpolicyInternetServiceSrcFortiguardToTerraform, true)(this._internetServiceSrcFortiguard.internalValue),
      internet_service_src_group: cdktf.listMapper(firewallLocalinpolicyInternetServiceSrcGroupToTerraform, true)(this._internetServiceSrcGroup.internalValue),
      internet_service_src_name: cdktf.listMapper(firewallLocalinpolicyInternetServiceSrcNameToTerraform, true)(this._internetServiceSrcName.internalValue),
      intf_block: cdktf.listMapper(firewallLocalinpolicyIntfBlockToTerraform, true)(this._intfBlock.internalValue),
      service: cdktf.listMapper(firewallLocalinpolicyServiceToTerraform, true)(this._service.internalValue),
      srcaddr: cdktf.listMapper(firewallLocalinpolicySrcaddrToTerraform, true)(this._srcaddr.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr_negate: {
        value: cdktf.stringToHclTerraform(this._dstaddrNegate),
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
      ha_mgmt_intf_only: {
        value: cdktf.stringToHclTerraform(this._haMgmtIntfOnly),
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
      internet_service_src: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_negate: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intf: {
        value: cdktf.stringToHclTerraform(this._intf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtraffic: {
        value: cdktf.stringToHclTerraform(this._logtraffic),
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
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_negate: {
        value: cdktf.stringToHclTerraform(this._serviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr_negate: {
        value: cdktf.stringToHclTerraform(this._srcaddrNegate),
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
      virtual_patch: {
        value: cdktf.stringToHclTerraform(this._virtualPatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyDstaddrToHclTerraform, true)(this._dstaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyDstaddrList",
      },
      internet_service_src_custom: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyInternetServiceSrcCustomToHclTerraform, true)(this._internetServiceSrcCustom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyInternetServiceSrcCustomList",
      },
      internet_service_src_custom_group: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyInternetServiceSrcCustomGroupToHclTerraform, true)(this._internetServiceSrcCustomGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyInternetServiceSrcCustomGroupList",
      },
      internet_service_src_fortiguard: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyInternetServiceSrcFortiguardToHclTerraform, true)(this._internetServiceSrcFortiguard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyInternetServiceSrcFortiguardList",
      },
      internet_service_src_group: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyInternetServiceSrcGroupToHclTerraform, true)(this._internetServiceSrcGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyInternetServiceSrcGroupList",
      },
      internet_service_src_name: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyInternetServiceSrcNameToHclTerraform, true)(this._internetServiceSrcName.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyInternetServiceSrcNameList",
      },
      intf_block: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyIntfBlockToHclTerraform, true)(this._intfBlock.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyIntfBlockList",
      },
      service: {
        value: cdktf.listMapperHcl(firewallLocalinpolicyServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicyServiceList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(firewallLocalinpolicySrcaddrToHclTerraform, true)(this._srcaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallLocalinpolicySrcaddrList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
