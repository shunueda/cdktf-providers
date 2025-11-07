// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicy46Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#action FirewallPolicy46#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#comments FirewallPolicy46#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#dstintf FirewallPolicy46#dstintf}
  */
  readonly dstintf: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#dynamic_sort_subtable FirewallPolicy46#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#fixedport FirewallPolicy46#fixedport}
  */
  readonly fixedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#get_all_tables FirewallPolicy46#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#id FirewallPolicy46#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#ippool FirewallPolicy46#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#logtraffic FirewallPolicy46#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#logtraffic_start FirewallPolicy46#logtraffic_start}
  */
  readonly logtrafficStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#name FirewallPolicy46#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#per_ip_shaper FirewallPolicy46#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#permit_any_host FirewallPolicy46#permit_any_host}
  */
  readonly permitAnyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#policyid FirewallPolicy46#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#schedule FirewallPolicy46#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#srcintf FirewallPolicy46#srcintf}
  */
  readonly srcintf: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#status FirewallPolicy46#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#tcp_mss_receiver FirewallPolicy46#tcp_mss_receiver}
  */
  readonly tcpMssReceiver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#tcp_mss_sender FirewallPolicy46#tcp_mss_sender}
  */
  readonly tcpMssSender?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#traffic_shaper FirewallPolicy46#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#traffic_shaper_reverse FirewallPolicy46#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#uuid FirewallPolicy46#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#vdomparam FirewallPolicy46#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * dstaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#dstaddr FirewallPolicy46#dstaddr}
  */
  readonly dstaddr: FirewallPolicy46Dstaddr[] | cdktf.IResolvable;
  /**
  * poolname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#poolname FirewallPolicy46#poolname}
  */
  readonly poolname?: FirewallPolicy46Poolname[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#service FirewallPolicy46#service}
  */
  readonly service?: FirewallPolicy46Service[] | cdktf.IResolvable;
  /**
  * srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#srcaddr FirewallPolicy46#srcaddr}
  */
  readonly srcaddr: FirewallPolicy46Srcaddr[] | cdktf.IResolvable;
}
export interface FirewallPolicy46Dstaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#name FirewallPolicy46#name}
  */
  readonly name?: string;
}

export function firewallPolicy46DstaddrToTerraform(struct?: FirewallPolicy46Dstaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy46DstaddrToHclTerraform(struct?: FirewallPolicy46Dstaddr | cdktf.IResolvable): any {
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

export class FirewallPolicy46DstaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy46Dstaddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy46Dstaddr | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy46DstaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy46Dstaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy46DstaddrOutputReference {
    return new FirewallPolicy46DstaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy46Poolname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#name FirewallPolicy46#name}
  */
  readonly name?: string;
}

export function firewallPolicy46PoolnameToTerraform(struct?: FirewallPolicy46Poolname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy46PoolnameToHclTerraform(struct?: FirewallPolicy46Poolname | cdktf.IResolvable): any {
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

export class FirewallPolicy46PoolnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy46Poolname | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy46Poolname | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy46PoolnameList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy46Poolname[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy46PoolnameOutputReference {
    return new FirewallPolicy46PoolnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy46Service {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#name FirewallPolicy46#name}
  */
  readonly name?: string;
}

export function firewallPolicy46ServiceToTerraform(struct?: FirewallPolicy46Service | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy46ServiceToHclTerraform(struct?: FirewallPolicy46Service | cdktf.IResolvable): any {
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

export class FirewallPolicy46ServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy46Service | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy46Service | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy46ServiceList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy46Service[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy46ServiceOutputReference {
    return new FirewallPolicy46ServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicy46Srcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#name FirewallPolicy46#name}
  */
  readonly name?: string;
}

export function firewallPolicy46SrcaddrToTerraform(struct?: FirewallPolicy46Srcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallPolicy46SrcaddrToHclTerraform(struct?: FirewallPolicy46Srcaddr | cdktf.IResolvable): any {
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

export class FirewallPolicy46SrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallPolicy46Srcaddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicy46Srcaddr | cdktf.IResolvable | undefined) {
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

export class FirewallPolicy46SrcaddrList extends cdktf.ComplexList {
  public internalValue? : FirewallPolicy46Srcaddr[] | cdktf.IResolvable

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
  public get(index: number): FirewallPolicy46SrcaddrOutputReference {
    return new FirewallPolicy46SrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46 fortios_firewall_policy46}
*/
export class FirewallPolicy46 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_policy46";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallPolicy46 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallPolicy46 to import
  * @param importFromId The id of the existing FirewallPolicy46 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallPolicy46 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_policy46", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_policy46 fortios_firewall_policy46} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicy46Config
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicy46Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_policy46',
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
    this._dstintf = config.dstintf;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fixedport = config.fixedport;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ippool = config.ippool;
    this._logtraffic = config.logtraffic;
    this._logtrafficStart = config.logtrafficStart;
    this._name = config.name;
    this._perIpShaper = config.perIpShaper;
    this._permitAnyHost = config.permitAnyHost;
    this._policyid = config.policyid;
    this._schedule = config.schedule;
    this._srcintf = config.srcintf;
    this._status = config.status;
    this._tcpMssReceiver = config.tcpMssReceiver;
    this._tcpMssSender = config.tcpMssSender;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._dstaddr.internalValue = config.dstaddr;
    this._poolname.internalValue = config.poolname;
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

  // dstintf - computed: false, optional: false, required: true
  private _dstintf?: string; 
  public get dstintf() {
    return this.getStringAttribute('dstintf');
  }
  public set dstintf(value: string) {
    this._dstintf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
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

  // fixedport - computed: true, optional: true, required: false
  private _fixedport?: string; 
  public get fixedport() {
    return this.getStringAttribute('fixedport');
  }
  public set fixedport(value: string) {
    this._fixedport = value;
  }
  public resetFixedport() {
    this._fixedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedportInput() {
    return this._fixedport;
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

  // ippool - computed: true, optional: true, required: false
  private _ippool?: string; 
  public get ippool() {
    return this.getStringAttribute('ippool');
  }
  public set ippool(value: string) {
    this._ippool = value;
  }
  public resetIppool() {
    this._ippool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolInput() {
    return this._ippool;
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

  // logtraffic_start - computed: true, optional: true, required: false
  private _logtrafficStart?: string; 
  public get logtrafficStart() {
    return this.getStringAttribute('logtraffic_start');
  }
  public set logtrafficStart(value: string) {
    this._logtrafficStart = value;
  }
  public resetLogtrafficStart() {
    this._logtrafficStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficStartInput() {
    return this._logtrafficStart;
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

  // per_ip_shaper - computed: false, optional: true, required: false
  private _perIpShaper?: string; 
  public get perIpShaper() {
    return this.getStringAttribute('per_ip_shaper');
  }
  public set perIpShaper(value: string) {
    this._perIpShaper = value;
  }
  public resetPerIpShaper() {
    this._perIpShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpShaperInput() {
    return this._perIpShaper;
  }

  // permit_any_host - computed: true, optional: true, required: false
  private _permitAnyHost?: string; 
  public get permitAnyHost() {
    return this.getStringAttribute('permit_any_host');
  }
  public set permitAnyHost(value: string) {
    this._permitAnyHost = value;
  }
  public resetPermitAnyHost() {
    this._permitAnyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAnyHostInput() {
    return this._permitAnyHost;
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

  // srcintf - computed: false, optional: false, required: true
  private _srcintf?: string; 
  public get srcintf() {
    return this.getStringAttribute('srcintf');
  }
  public set srcintf(value: string) {
    this._srcintf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
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

  // tcp_mss_receiver - computed: false, optional: true, required: false
  private _tcpMssReceiver?: number; 
  public get tcpMssReceiver() {
    return this.getNumberAttribute('tcp_mss_receiver');
  }
  public set tcpMssReceiver(value: number) {
    this._tcpMssReceiver = value;
  }
  public resetTcpMssReceiver() {
    this._tcpMssReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssReceiverInput() {
    return this._tcpMssReceiver;
  }

  // tcp_mss_sender - computed: false, optional: true, required: false
  private _tcpMssSender?: number; 
  public get tcpMssSender() {
    return this.getNumberAttribute('tcp_mss_sender');
  }
  public set tcpMssSender(value: number) {
    this._tcpMssSender = value;
  }
  public resetTcpMssSender() {
    this._tcpMssSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssSenderInput() {
    return this._tcpMssSender;
  }

  // traffic_shaper - computed: false, optional: true, required: false
  private _trafficShaper?: string; 
  public get trafficShaper() {
    return this.getStringAttribute('traffic_shaper');
  }
  public set trafficShaper(value: string) {
    this._trafficShaper = value;
  }
  public resetTrafficShaper() {
    this._trafficShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperInput() {
    return this._trafficShaper;
  }

  // traffic_shaper_reverse - computed: false, optional: true, required: false
  private _trafficShaperReverse?: string; 
  public get trafficShaperReverse() {
    return this.getStringAttribute('traffic_shaper_reverse');
  }
  public set trafficShaperReverse(value: string) {
    this._trafficShaperReverse = value;
  }
  public resetTrafficShaperReverse() {
    this._trafficShaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperReverseInput() {
    return this._trafficShaperReverse;
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

  // dstaddr - computed: false, optional: false, required: true
  private _dstaddr = new FirewallPolicy46DstaddrList(this, "dstaddr", true);
  public get dstaddr() {
    return this._dstaddr;
  }
  public putDstaddr(value: FirewallPolicy46Dstaddr[] | cdktf.IResolvable) {
    this._dstaddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr.internalValue;
  }

  // poolname - computed: false, optional: true, required: false
  private _poolname = new FirewallPolicy46PoolnameList(this, "poolname", true);
  public get poolname() {
    return this._poolname;
  }
  public putPoolname(value: FirewallPolicy46Poolname[] | cdktf.IResolvable) {
    this._poolname.internalValue = value;
  }
  public resetPoolname() {
    this._poolname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolnameInput() {
    return this._poolname.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new FirewallPolicy46ServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: FirewallPolicy46Service[] | cdktf.IResolvable) {
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
  private _srcaddr = new FirewallPolicy46SrcaddrList(this, "srcaddr", true);
  public get srcaddr() {
    return this._srcaddr;
  }
  public putSrcaddr(value: FirewallPolicy46Srcaddr[] | cdktf.IResolvable) {
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
      dstintf: cdktf.stringToTerraform(this._dstintf),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fixedport: cdktf.stringToTerraform(this._fixedport),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ippool: cdktf.stringToTerraform(this._ippool),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      logtraffic_start: cdktf.stringToTerraform(this._logtrafficStart),
      name: cdktf.stringToTerraform(this._name),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      permit_any_host: cdktf.stringToTerraform(this._permitAnyHost),
      policyid: cdktf.numberToTerraform(this._policyid),
      schedule: cdktf.stringToTerraform(this._schedule),
      srcintf: cdktf.stringToTerraform(this._srcintf),
      status: cdktf.stringToTerraform(this._status),
      tcp_mss_receiver: cdktf.numberToTerraform(this._tcpMssReceiver),
      tcp_mss_sender: cdktf.numberToTerraform(this._tcpMssSender),
      traffic_shaper: cdktf.stringToTerraform(this._trafficShaper),
      traffic_shaper_reverse: cdktf.stringToTerraform(this._trafficShaperReverse),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      dstaddr: cdktf.listMapper(firewallPolicy46DstaddrToTerraform, true)(this._dstaddr.internalValue),
      poolname: cdktf.listMapper(firewallPolicy46PoolnameToTerraform, true)(this._poolname.internalValue),
      service: cdktf.listMapper(firewallPolicy46ServiceToTerraform, true)(this._service.internalValue),
      srcaddr: cdktf.listMapper(firewallPolicy46SrcaddrToTerraform, true)(this._srcaddr.internalValue),
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
      dstintf: {
        value: cdktf.stringToHclTerraform(this._dstintf),
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
      fixedport: {
        value: cdktf.stringToHclTerraform(this._fixedport),
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
      ippool: {
        value: cdktf.stringToHclTerraform(this._ippool),
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
      logtraffic_start: {
        value: cdktf.stringToHclTerraform(this._logtrafficStart),
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
      per_ip_shaper: {
        value: cdktf.stringToHclTerraform(this._perIpShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_any_host: {
        value: cdktf.stringToHclTerraform(this._permitAnyHost),
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
      srcintf: {
        value: cdktf.stringToHclTerraform(this._srcintf),
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
      tcp_mss_receiver: {
        value: cdktf.numberToHclTerraform(this._tcpMssReceiver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_sender: {
        value: cdktf.numberToHclTerraform(this._tcpMssSender),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_shaper: {
        value: cdktf.stringToHclTerraform(this._trafficShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaper_reverse: {
        value: cdktf.stringToHclTerraform(this._trafficShaperReverse),
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
      dstaddr: {
        value: cdktf.listMapperHcl(firewallPolicy46DstaddrToHclTerraform, true)(this._dstaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy46DstaddrList",
      },
      poolname: {
        value: cdktf.listMapperHcl(firewallPolicy46PoolnameToHclTerraform, true)(this._poolname.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy46PoolnameList",
      },
      service: {
        value: cdktf.listMapperHcl(firewallPolicy46ServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy46ServiceList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(firewallPolicy46SrcaddrToHclTerraform, true)(this._srcaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallPolicy46SrcaddrList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
