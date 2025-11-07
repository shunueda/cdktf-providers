// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDhcp6ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#delegated_prefix_iaid SystemDhcp6Server#delegated_prefix_iaid}
  */
  readonly delegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#device_name SystemDhcp6Server#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#device_vdom SystemDhcp6Server#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#dns_search_list SystemDhcp6Server#dns_search_list}
  */
  readonly dnsSearchList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#dns_server1 SystemDhcp6Server#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#dns_server2 SystemDhcp6Server#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#dns_server3 SystemDhcp6Server#dns_server3}
  */
  readonly dnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#dns_server4 SystemDhcp6Server#dns_server4}
  */
  readonly dnsServer4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#dns_service SystemDhcp6Server#dns_service}
  */
  readonly dnsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#domain SystemDhcp6Server#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#dynamic_sort_subtable SystemDhcp6Server#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#fosid SystemDhcp6Server#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#id SystemDhcp6Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#interface SystemDhcp6Server#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#ip_mode SystemDhcp6Server#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#lease_time SystemDhcp6Server#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#option1 SystemDhcp6Server#option1}
  */
  readonly option1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#option2 SystemDhcp6Server#option2}
  */
  readonly option2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#option3 SystemDhcp6Server#option3}
  */
  readonly option3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#prefix_mode SystemDhcp6Server#prefix_mode}
  */
  readonly prefixMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#rapid_commit SystemDhcp6Server#rapid_commit}
  */
  readonly rapidCommit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#status SystemDhcp6Server#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#subnet SystemDhcp6Server#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#upstream_interface SystemDhcp6Server#upstream_interface}
  */
  readonly upstreamInterface?: string[];
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#ip_range SystemDhcp6Server#ip_range}
  */
  readonly ipRange?: SystemDhcp6ServerIpRange[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#options SystemDhcp6Server#options}
  */
  readonly options?: SystemDhcp6ServerOptions[] | cdktf.IResolvable;
  /**
  * prefix_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#prefix_range SystemDhcp6Server#prefix_range}
  */
  readonly prefixRange?: SystemDhcp6ServerPrefixRange[] | cdktf.IResolvable;
}
export interface SystemDhcp6ServerIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#end_ip SystemDhcp6Server#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#id SystemDhcp6Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#start_ip SystemDhcp6Server#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#vci_match SystemDhcp6Server#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#vci_string SystemDhcp6Server#vci_string}
  */
  readonly vciString?: string[];
}

export function systemDhcp6ServerIpRangeToTerraform(struct?: SystemDhcp6ServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function systemDhcp6ServerIpRangeToHclTerraform(struct?: SystemDhcp6ServerIpRange | cdktf.IResolvable): any {
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
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDhcp6ServerIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDhcp6ServerIpRange | cdktf.IResolvable | undefined {
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
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDhcp6ServerIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._startIp = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
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
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
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

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class SystemDhcp6ServerIpRangeList extends cdktf.ComplexList {
  public internalValue? : SystemDhcp6ServerIpRange[] | cdktf.IResolvable

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
  public get(index: number): SystemDhcp6ServerIpRangeOutputReference {
    return new SystemDhcp6ServerIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDhcp6ServerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#code SystemDhcp6Server#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#id SystemDhcp6Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#ip6 SystemDhcp6Server#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#type SystemDhcp6Server#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#value SystemDhcp6Server#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#vci_match SystemDhcp6Server#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#vci_string SystemDhcp6Server#vci_string}
  */
  readonly vciString?: string[];
}

export function systemDhcp6ServerOptionsToTerraform(struct?: SystemDhcp6ServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    id: cdktf.numberToTerraform(struct!.id),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function systemDhcp6ServerOptionsToHclTerraform(struct?: SystemDhcp6ServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
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
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
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
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDhcp6ServerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDhcp6ServerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDhcp6ServerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._id = undefined;
      this._ip6 = undefined;
      this._type = undefined;
      this._value = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._id = value.id;
      this._ip6 = value.ip6;
      this._type = value.type;
      this._value = value.value;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class SystemDhcp6ServerOptionsList extends cdktf.ComplexList {
  public internalValue? : SystemDhcp6ServerOptions[] | cdktf.IResolvable

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
  public get(index: number): SystemDhcp6ServerOptionsOutputReference {
    return new SystemDhcp6ServerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDhcp6ServerPrefixRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#end_prefix SystemDhcp6Server#end_prefix}
  */
  readonly endPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#id SystemDhcp6Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#prefix_length SystemDhcp6Server#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#start_prefix SystemDhcp6Server#start_prefix}
  */
  readonly startPrefix?: string;
}

export function systemDhcp6ServerPrefixRangeToTerraform(struct?: SystemDhcp6ServerPrefixRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_prefix: cdktf.stringToTerraform(struct!.endPrefix),
    id: cdktf.numberToTerraform(struct!.id),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    start_prefix: cdktf.stringToTerraform(struct!.startPrefix),
  }
}


export function systemDhcp6ServerPrefixRangeToHclTerraform(struct?: SystemDhcp6ServerPrefixRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_prefix: {
      value: cdktf.stringToHclTerraform(struct!.endPrefix),
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
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_prefix: {
      value: cdktf.stringToHclTerraform(struct!.startPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDhcp6ServerPrefixRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDhcp6ServerPrefixRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPrefix = this._endPrefix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._startPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPrefix = this._startPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDhcp6ServerPrefixRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPrefix = undefined;
      this._id = undefined;
      this._prefixLength = undefined;
      this._startPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPrefix = value.endPrefix;
      this._id = value.id;
      this._prefixLength = value.prefixLength;
      this._startPrefix = value.startPrefix;
    }
  }

  // end_prefix - computed: true, optional: true, required: false
  private _endPrefix?: string; 
  public get endPrefix() {
    return this.getStringAttribute('end_prefix');
  }
  public set endPrefix(value: string) {
    this._endPrefix = value;
  }
  public resetEndPrefix() {
    this._endPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPrefixInput() {
    return this._endPrefix;
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

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // start_prefix - computed: true, optional: true, required: false
  private _startPrefix?: string; 
  public get startPrefix() {
    return this.getStringAttribute('start_prefix');
  }
  public set startPrefix(value: string) {
    this._startPrefix = value;
  }
  public resetStartPrefix() {
    this._startPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPrefixInput() {
    return this._startPrefix;
  }
}

export class SystemDhcp6ServerPrefixRangeList extends cdktf.ComplexList {
  public internalValue? : SystemDhcp6ServerPrefixRange[] | cdktf.IResolvable

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
  public get(index: number): SystemDhcp6ServerPrefixRangeOutputReference {
    return new SystemDhcp6ServerPrefixRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server fmgdevice_system_dhcp6_server}
*/
export class SystemDhcp6Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_dhcp6_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDhcp6Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDhcp6Server to import
  * @param importFromId The id of the existing SystemDhcp6Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDhcp6Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_dhcp6_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dhcp6_server fmgdevice_system_dhcp6_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDhcp6ServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDhcp6ServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_dhcp6_server',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegatedPrefixIaid = config.delegatedPrefixIaid;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dnsSearchList = config.dnsSearchList;
    this._dnsServer1 = config.dnsServer1;
    this._dnsServer2 = config.dnsServer2;
    this._dnsServer3 = config.dnsServer3;
    this._dnsServer4 = config.dnsServer4;
    this._dnsService = config.dnsService;
    this._domain = config.domain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._id = config.id;
    this._interface = config.interface;
    this._ipMode = config.ipMode;
    this._leaseTime = config.leaseTime;
    this._option1 = config.option1;
    this._option2 = config.option2;
    this._option3 = config.option3;
    this._prefixMode = config.prefixMode;
    this._rapidCommit = config.rapidCommit;
    this._status = config.status;
    this._subnet = config.subnet;
    this._upstreamInterface = config.upstreamInterface;
    this._ipRange.internalValue = config.ipRange;
    this._options.internalValue = config.options;
    this._prefixRange.internalValue = config.prefixRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegated_prefix_iaid - computed: false, optional: true, required: false
  private _delegatedPrefixIaid?: number; 
  public get delegatedPrefixIaid() {
    return this.getNumberAttribute('delegated_prefix_iaid');
  }
  public set delegatedPrefixIaid(value: number) {
    this._delegatedPrefixIaid = value;
  }
  public resetDelegatedPrefixIaid() {
    this._delegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPrefixIaidInput() {
    return this._delegatedPrefixIaid;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dns_search_list - computed: true, optional: true, required: false
  private _dnsSearchList?: string; 
  public get dnsSearchList() {
    return this.getStringAttribute('dns_search_list');
  }
  public set dnsSearchList(value: string) {
    this._dnsSearchList = value;
  }
  public resetDnsSearchList() {
    this._dnsSearchList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchListInput() {
    return this._dnsSearchList;
  }

  // dns_server1 - computed: true, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: true, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // dns_server3 - computed: true, optional: true, required: false
  private _dnsServer3?: string; 
  public get dnsServer3() {
    return this.getStringAttribute('dns_server3');
  }
  public set dnsServer3(value: string) {
    this._dnsServer3 = value;
  }
  public resetDnsServer3() {
    this._dnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer3Input() {
    return this._dnsServer3;
  }

  // dns_server4 - computed: true, optional: true, required: false
  private _dnsServer4?: string; 
  public get dnsServer4() {
    return this.getStringAttribute('dns_server4');
  }
  public set dnsServer4(value: string) {
    this._dnsServer4 = value;
  }
  public resetDnsServer4() {
    this._dnsServer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer4Input() {
    return this._dnsServer4;
  }

  // dns_service - computed: true, optional: true, required: false
  private _dnsService?: string; 
  public get dnsService() {
    return this.getStringAttribute('dns_service');
  }
  public set dnsService(value: string) {
    this._dnsService = value;
  }
  public resetDnsService() {
    this._dnsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceInput() {
    return this._dnsService;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // fosid - computed: false, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_mode - computed: true, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // option1 - computed: true, optional: true, required: false
  private _option1?: string; 
  public get option1() {
    return this.getStringAttribute('option1');
  }
  public set option1(value: string) {
    this._option1 = value;
  }
  public resetOption1() {
    this._option1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option1Input() {
    return this._option1;
  }

  // option2 - computed: true, optional: true, required: false
  private _option2?: string; 
  public get option2() {
    return this.getStringAttribute('option2');
  }
  public set option2(value: string) {
    this._option2 = value;
  }
  public resetOption2() {
    this._option2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option2Input() {
    return this._option2;
  }

  // option3 - computed: true, optional: true, required: false
  private _option3?: string; 
  public get option3() {
    return this.getStringAttribute('option3');
  }
  public set option3(value: string) {
    this._option3 = value;
  }
  public resetOption3() {
    this._option3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option3Input() {
    return this._option3;
  }

  // prefix_mode - computed: true, optional: true, required: false
  private _prefixMode?: string; 
  public get prefixMode() {
    return this.getStringAttribute('prefix_mode');
  }
  public set prefixMode(value: string) {
    this._prefixMode = value;
  }
  public resetPrefixMode() {
    this._prefixMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixModeInput() {
    return this._prefixMode;
  }

  // rapid_commit - computed: true, optional: true, required: false
  private _rapidCommit?: string; 
  public get rapidCommit() {
    return this.getStringAttribute('rapid_commit');
  }
  public set rapidCommit(value: string) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
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

  // upstream_interface - computed: true, optional: true, required: false
  private _upstreamInterface?: string[]; 
  public get upstreamInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('upstream_interface'));
  }
  public set upstreamInterface(value: string[]) {
    this._upstreamInterface = value;
  }
  public resetUpstreamInterface() {
    this._upstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInterfaceInput() {
    return this._upstreamInterface;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new SystemDhcp6ServerIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: SystemDhcp6ServerIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SystemDhcp6ServerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: SystemDhcp6ServerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // prefix_range - computed: false, optional: true, required: false
  private _prefixRange = new SystemDhcp6ServerPrefixRangeList(this, "prefix_range", false);
  public get prefixRange() {
    return this._prefixRange;
  }
  public putPrefixRange(value: SystemDhcp6ServerPrefixRange[] | cdktf.IResolvable) {
    this._prefixRange.internalValue = value;
  }
  public resetPrefixRange() {
    this._prefixRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRangeInput() {
    return this._prefixRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegated_prefix_iaid: cdktf.numberToTerraform(this._delegatedPrefixIaid),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dns_search_list: cdktf.stringToTerraform(this._dnsSearchList),
      dns_server1: cdktf.stringToTerraform(this._dnsServer1),
      dns_server2: cdktf.stringToTerraform(this._dnsServer2),
      dns_server3: cdktf.stringToTerraform(this._dnsServer3),
      dns_server4: cdktf.stringToTerraform(this._dnsServer4),
      dns_service: cdktf.stringToTerraform(this._dnsService),
      domain: cdktf.stringToTerraform(this._domain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ip_mode: cdktf.stringToTerraform(this._ipMode),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      option1: cdktf.stringToTerraform(this._option1),
      option2: cdktf.stringToTerraform(this._option2),
      option3: cdktf.stringToTerraform(this._option3),
      prefix_mode: cdktf.stringToTerraform(this._prefixMode),
      rapid_commit: cdktf.stringToTerraform(this._rapidCommit),
      status: cdktf.stringToTerraform(this._status),
      subnet: cdktf.stringToTerraform(this._subnet),
      upstream_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._upstreamInterface),
      ip_range: cdktf.listMapper(systemDhcp6ServerIpRangeToTerraform, true)(this._ipRange.internalValue),
      options: cdktf.listMapper(systemDhcp6ServerOptionsToTerraform, true)(this._options.internalValue),
      prefix_range: cdktf.listMapper(systemDhcp6ServerPrefixRangeToTerraform, true)(this._prefixRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegated_prefix_iaid: {
        value: cdktf.numberToHclTerraform(this._delegatedPrefixIaid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_search_list: {
        value: cdktf.stringToHclTerraform(this._dnsSearchList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server1: {
        value: cdktf.stringToHclTerraform(this._dnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server2: {
        value: cdktf.stringToHclTerraform(this._dnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server3: {
        value: cdktf.stringToHclTerraform(this._dnsServer3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server4: {
        value: cdktf.stringToHclTerraform(this._dnsServer4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_service: {
        value: cdktf.stringToHclTerraform(this._dnsService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_mode: {
        value: cdktf.stringToHclTerraform(this._ipMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.numberToHclTerraform(this._leaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      option1: {
        value: cdktf.stringToHclTerraform(this._option1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option2: {
        value: cdktf.stringToHclTerraform(this._option2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option3: {
        value: cdktf.stringToHclTerraform(this._option3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_mode: {
        value: cdktf.stringToHclTerraform(this._prefixMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rapid_commit: {
        value: cdktf.stringToHclTerraform(this._rapidCommit),
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
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._upstreamInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_range: {
        value: cdktf.listMapperHcl(systemDhcp6ServerIpRangeToHclTerraform, true)(this._ipRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemDhcp6ServerIpRangeList",
      },
      options: {
        value: cdktf.listMapperHcl(systemDhcp6ServerOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemDhcp6ServerOptionsList",
      },
      prefix_range: {
        value: cdktf.listMapperHcl(systemDhcp6ServerPrefixRangeToHclTerraform, true)(this._prefixRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemDhcp6ServerPrefixRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
