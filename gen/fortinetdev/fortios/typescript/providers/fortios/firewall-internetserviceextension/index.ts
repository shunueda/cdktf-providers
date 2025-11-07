// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInternetserviceextensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#comment FirewallInternetserviceextension#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#dynamic_sort_subtable FirewallInternetserviceextension#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#fosid FirewallInternetserviceextension#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#get_all_tables FirewallInternetserviceextension#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#id FirewallInternetserviceextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#vdomparam FirewallInternetserviceextension#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * disable_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#disable_entry FirewallInternetserviceextension#disable_entry}
  */
  readonly disableEntry?: FirewallInternetserviceextensionDisableEntry[] | cdktf.IResolvable;
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#entry FirewallInternetserviceextension#entry}
  */
  readonly entry?: FirewallInternetserviceextensionEntry[] | cdktf.IResolvable;
}
export interface FirewallInternetserviceextensionDisableEntryIp6Range {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#end_ip6 FirewallInternetserviceextension#end_ip6}
  */
  readonly endIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#id FirewallInternetserviceextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#start_ip6 FirewallInternetserviceextension#start_ip6}
  */
  readonly startIp6?: string;
}

export function firewallInternetserviceextensionDisableEntryIp6RangeToTerraform(struct?: FirewallInternetserviceextensionDisableEntryIp6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip6: cdktf.stringToTerraform(struct!.endIp6),
    id: cdktf.numberToTerraform(struct!.id),
    start_ip6: cdktf.stringToTerraform(struct!.startIp6),
  }
}


export function firewallInternetserviceextensionDisableEntryIp6RangeToHclTerraform(struct?: FirewallInternetserviceextensionDisableEntryIp6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip6: {
      value: cdktf.stringToHclTerraform(struct!.endIp6),
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
    start_ip6: {
      value: cdktf.stringToHclTerraform(struct!.startIp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetserviceextensionDisableEntryIp6RangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionDisableEntryIp6Range | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp6 = this._endIp6;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp6 = this._startIp6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetserviceextensionDisableEntryIp6Range | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp6 = undefined;
      this._id = undefined;
      this._startIp6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp6 = value.endIp6;
      this._id = value.id;
      this._startIp6 = value.startIp6;
    }
  }

  // end_ip6 - computed: true, optional: true, required: false
  private _endIp6?: string; 
  public get endIp6() {
    return this.getStringAttribute('end_ip6');
  }
  public set endIp6(value: string) {
    this._endIp6 = value;
  }
  public resetEndIp6() {
    this._endIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIp6Input() {
    return this._endIp6;
  }

  // id - computed: true, optional: true, required: false
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

  // start_ip6 - computed: true, optional: true, required: false
  private _startIp6?: string; 
  public get startIp6() {
    return this.getStringAttribute('start_ip6');
  }
  public set startIp6(value: string) {
    this._startIp6 = value;
  }
  public resetStartIp6() {
    this._startIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIp6Input() {
    return this._startIp6;
  }
}

export class FirewallInternetserviceextensionDisableEntryIp6RangeList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionDisableEntryIp6Range[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionDisableEntryIp6RangeOutputReference {
    return new FirewallInternetserviceextensionDisableEntryIp6RangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetserviceextensionDisableEntryIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#end_ip FirewallInternetserviceextension#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#id FirewallInternetserviceextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#start_ip FirewallInternetserviceextension#start_ip}
  */
  readonly startIp?: string;
}

export function firewallInternetserviceextensionDisableEntryIpRangeToTerraform(struct?: FirewallInternetserviceextensionDisableEntryIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function firewallInternetserviceextensionDisableEntryIpRangeToHclTerraform(struct?: FirewallInternetserviceextensionDisableEntryIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
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
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetserviceextensionDisableEntryIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionDisableEntryIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetserviceextensionDisableEntryIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._startIp = value.startIp;
    }
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

  // id - computed: true, optional: true, required: false
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
}

export class FirewallInternetserviceextensionDisableEntryIpRangeList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionDisableEntryIpRange[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionDisableEntryIpRangeOutputReference {
    return new FirewallInternetserviceextensionDisableEntryIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetserviceextensionDisableEntryPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#end_port FirewallInternetserviceextension#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#id FirewallInternetserviceextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#start_port FirewallInternetserviceextension#start_port}
  */
  readonly startPort?: number;
}

export function firewallInternetserviceextensionDisableEntryPortRangeToTerraform(struct?: FirewallInternetserviceextensionDisableEntryPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    id: cdktf.numberToTerraform(struct!.id),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function firewallInternetserviceextensionDisableEntryPortRangeToHclTerraform(struct?: FirewallInternetserviceextensionDisableEntryPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetserviceextensionDisableEntryPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionDisableEntryPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetserviceextensionDisableEntryPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._id = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._id = value.id;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // id - computed: true, optional: true, required: false
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

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class FirewallInternetserviceextensionDisableEntryPortRangeList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionDisableEntryPortRange[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionDisableEntryPortRangeOutputReference {
    return new FirewallInternetserviceextensionDisableEntryPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetserviceextensionDisableEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#addr_mode FirewallInternetserviceextension#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#id FirewallInternetserviceextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#port FirewallInternetserviceextension#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#protocol FirewallInternetserviceextension#protocol}
  */
  readonly protocol?: number;
  /**
  * ip6_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#ip6_range FirewallInternetserviceextension#ip6_range}
  */
  readonly ip6Range?: FirewallInternetserviceextensionDisableEntryIp6Range[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#ip_range FirewallInternetserviceextension#ip_range}
  */
  readonly ipRange?: FirewallInternetserviceextensionDisableEntryIpRange[] | cdktf.IResolvable;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#port_range FirewallInternetserviceextension#port_range}
  */
  readonly portRange?: FirewallInternetserviceextensionDisableEntryPortRange[] | cdktf.IResolvable;
}

export function firewallInternetserviceextensionDisableEntryToTerraform(struct?: FirewallInternetserviceextensionDisableEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    id: cdktf.numberToTerraform(struct!.id),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    ip6_range: cdktf.listMapper(firewallInternetserviceextensionDisableEntryIp6RangeToTerraform, true)(struct!.ip6Range),
    ip_range: cdktf.listMapper(firewallInternetserviceextensionDisableEntryIpRangeToTerraform, true)(struct!.ipRange),
    port_range: cdktf.listMapper(firewallInternetserviceextensionDisableEntryPortRangeToTerraform, true)(struct!.portRange),
  }
}


export function firewallInternetserviceextensionDisableEntryToHclTerraform(struct?: FirewallInternetserviceextensionDisableEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_range: {
      value: cdktf.listMapperHcl(firewallInternetserviceextensionDisableEntryIp6RangeToHclTerraform, true)(struct!.ip6Range),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallInternetserviceextensionDisableEntryIp6RangeList",
    },
    ip_range: {
      value: cdktf.listMapperHcl(firewallInternetserviceextensionDisableEntryIpRangeToHclTerraform, true)(struct!.ipRange),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallInternetserviceextensionDisableEntryIpRangeList",
    },
    port_range: {
      value: cdktf.listMapperHcl(firewallInternetserviceextensionDisableEntryPortRangeToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallInternetserviceextensionDisableEntryPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetserviceextensionDisableEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionDisableEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ip6Range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Range = this._ip6Range?.internalValue;
    }
    if (this._ipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetserviceextensionDisableEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrMode = undefined;
      this._id = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._ip6Range.internalValue = undefined;
      this._ipRange.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrMode = value.addrMode;
      this._id = value.id;
      this._port = value.port;
      this._protocol = value.protocol;
      this._ip6Range.internalValue = value.ip6Range;
      this._ipRange.internalValue = value.ipRange;
      this._portRange.internalValue = value.portRange;
    }
  }

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // id - computed: true, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // ip6_range - computed: false, optional: true, required: false
  private _ip6Range = new FirewallInternetserviceextensionDisableEntryIp6RangeList(this, "ip6_range", false);
  public get ip6Range() {
    return this._ip6Range;
  }
  public putIp6Range(value: FirewallInternetserviceextensionDisableEntryIp6Range[] | cdktf.IResolvable) {
    this._ip6Range.internalValue = value;
  }
  public resetIp6Range() {
    this._ip6Range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RangeInput() {
    return this._ip6Range.internalValue;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new FirewallInternetserviceextensionDisableEntryIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: FirewallInternetserviceextensionDisableEntryIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new FirewallInternetserviceextensionDisableEntryPortRangeList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: FirewallInternetserviceextensionDisableEntryPortRange[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class FirewallInternetserviceextensionDisableEntryList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionDisableEntry[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionDisableEntryOutputReference {
    return new FirewallInternetserviceextensionDisableEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetserviceextensionEntryDst {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#name FirewallInternetserviceextension#name}
  */
  readonly name?: string;
}

export function firewallInternetserviceextensionEntryDstToTerraform(struct?: FirewallInternetserviceextensionEntryDst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallInternetserviceextensionEntryDstToHclTerraform(struct?: FirewallInternetserviceextensionEntryDst | cdktf.IResolvable): any {
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

export class FirewallInternetserviceextensionEntryDstOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionEntryDst | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallInternetserviceextensionEntryDst | cdktf.IResolvable | undefined) {
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

export class FirewallInternetserviceextensionEntryDstList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionEntryDst[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionEntryDstOutputReference {
    return new FirewallInternetserviceextensionEntryDstOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetserviceextensionEntryDst6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#name FirewallInternetserviceextension#name}
  */
  readonly name?: string;
}

export function firewallInternetserviceextensionEntryDst6ToTerraform(struct?: FirewallInternetserviceextensionEntryDst6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallInternetserviceextensionEntryDst6ToHclTerraform(struct?: FirewallInternetserviceextensionEntryDst6 | cdktf.IResolvable): any {
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

export class FirewallInternetserviceextensionEntryDst6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionEntryDst6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallInternetserviceextensionEntryDst6 | cdktf.IResolvable | undefined) {
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

export class FirewallInternetserviceextensionEntryDst6List extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionEntryDst6[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionEntryDst6OutputReference {
    return new FirewallInternetserviceextensionEntryDst6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetserviceextensionEntryPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#end_port FirewallInternetserviceextension#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#id FirewallInternetserviceextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#start_port FirewallInternetserviceextension#start_port}
  */
  readonly startPort?: number;
}

export function firewallInternetserviceextensionEntryPortRangeToTerraform(struct?: FirewallInternetserviceextensionEntryPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    id: cdktf.numberToTerraform(struct!.id),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function firewallInternetserviceextensionEntryPortRangeToHclTerraform(struct?: FirewallInternetserviceextensionEntryPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetserviceextensionEntryPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionEntryPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetserviceextensionEntryPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._id = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._id = value.id;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // id - computed: true, optional: true, required: false
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

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class FirewallInternetserviceextensionEntryPortRangeList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionEntryPortRange[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionEntryPortRangeOutputReference {
    return new FirewallInternetserviceextensionEntryPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallInternetserviceextensionEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#addr_mode FirewallInternetserviceextension#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#id FirewallInternetserviceextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#protocol FirewallInternetserviceextension#protocol}
  */
  readonly protocol?: number;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#dst FirewallInternetserviceextension#dst}
  */
  readonly dst?: FirewallInternetserviceextensionEntryDst[] | cdktf.IResolvable;
  /**
  * dst6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#dst6 FirewallInternetserviceextension#dst6}
  */
  readonly dst6?: FirewallInternetserviceextensionEntryDst6[] | cdktf.IResolvable;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#port_range FirewallInternetserviceextension#port_range}
  */
  readonly portRange?: FirewallInternetserviceextensionEntryPortRange[] | cdktf.IResolvable;
}

export function firewallInternetserviceextensionEntryToTerraform(struct?: FirewallInternetserviceextensionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    id: cdktf.numberToTerraform(struct!.id),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    dst: cdktf.listMapper(firewallInternetserviceextensionEntryDstToTerraform, true)(struct!.dst),
    dst6: cdktf.listMapper(firewallInternetserviceextensionEntryDst6ToTerraform, true)(struct!.dst6),
    port_range: cdktf.listMapper(firewallInternetserviceextensionEntryPortRangeToTerraform, true)(struct!.portRange),
  }
}


export function firewallInternetserviceextensionEntryToHclTerraform(struct?: FirewallInternetserviceextensionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
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
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst: {
      value: cdktf.listMapperHcl(firewallInternetserviceextensionEntryDstToHclTerraform, true)(struct!.dst),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallInternetserviceextensionEntryDstList",
    },
    dst6: {
      value: cdktf.listMapperHcl(firewallInternetserviceextensionEntryDst6ToHclTerraform, true)(struct!.dst6),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallInternetserviceextensionEntryDst6List",
    },
    port_range: {
      value: cdktf.listMapperHcl(firewallInternetserviceextensionEntryPortRangeToHclTerraform, true)(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallInternetserviceextensionEntryPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetserviceextensionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetserviceextensionEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._dst?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst?.internalValue;
    }
    if (this._dst6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst6 = this._dst6?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetserviceextensionEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrMode = undefined;
      this._id = undefined;
      this._protocol = undefined;
      this._dst.internalValue = undefined;
      this._dst6.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrMode = value.addrMode;
      this._id = value.id;
      this._protocol = value.protocol;
      this._dst.internalValue = value.dst;
      this._dst6.internalValue = value.dst6;
      this._portRange.internalValue = value.portRange;
    }
  }

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // id - computed: true, optional: true, required: false
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new FirewallInternetserviceextensionEntryDstList(this, "dst", true);
  public get dst() {
    return this._dst;
  }
  public putDst(value: FirewallInternetserviceextensionEntryDst[] | cdktf.IResolvable) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // dst6 - computed: false, optional: true, required: false
  private _dst6 = new FirewallInternetserviceextensionEntryDst6List(this, "dst6", true);
  public get dst6() {
    return this._dst6;
  }
  public putDst6(value: FirewallInternetserviceextensionEntryDst6[] | cdktf.IResolvable) {
    this._dst6.internalValue = value;
  }
  public resetDst6() {
    this._dst6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new FirewallInternetserviceextensionEntryPortRangeList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: FirewallInternetserviceextensionEntryPortRange[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class FirewallInternetserviceextensionEntryList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetserviceextensionEntry[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetserviceextensionEntryOutputReference {
    return new FirewallInternetserviceextensionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension fortios_firewall_internetserviceextension}
*/
export class FirewallInternetserviceextension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_internetserviceextension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInternetserviceextension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInternetserviceextension to import
  * @param importFromId The id of the existing FirewallInternetserviceextension that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInternetserviceextension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_internetserviceextension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetserviceextension fortios_firewall_internetserviceextension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInternetserviceextensionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallInternetserviceextensionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_internetserviceextension',
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
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
    this._disableEntry.internalValue = config.disableEntry;
    this._entry.internalValue = config.entry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // disable_entry - computed: false, optional: true, required: false
  private _disableEntry = new FirewallInternetserviceextensionDisableEntryList(this, "disable_entry", false);
  public get disableEntry() {
    return this._disableEntry;
  }
  public putDisableEntry(value: FirewallInternetserviceextensionDisableEntry[] | cdktf.IResolvable) {
    this._disableEntry.internalValue = value;
  }
  public resetDisableEntry() {
    this._disableEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEntryInput() {
    return this._disableEntry.internalValue;
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new FirewallInternetserviceextensionEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: FirewallInternetserviceextensionEntry[] | cdktf.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      disable_entry: cdktf.listMapper(firewallInternetserviceextensionDisableEntryToTerraform, true)(this._disableEntry.internalValue),
      entry: cdktf.listMapper(firewallInternetserviceextensionEntryToTerraform, true)(this._entry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_entry: {
        value: cdktf.listMapperHcl(firewallInternetserviceextensionDisableEntryToHclTerraform, true)(this._disableEntry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallInternetserviceextensionDisableEntryList",
      },
      entry: {
        value: cdktf.listMapperHcl(firewallInternetserviceextensionEntryToHclTerraform, true)(this._entry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallInternetserviceextensionEntryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
