// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemsnmpCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#dynamic_sort_subtable SystemsnmpCommunity#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#events SystemsnmpCommunity#events}
  */
  readonly events?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#fosid SystemsnmpCommunity#fosid}
  */
  readonly fosid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#get_all_tables SystemsnmpCommunity#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#id SystemsnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#mib_view SystemsnmpCommunity#mib_view}
  */
  readonly mibView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#name SystemsnmpCommunity#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#query_v1_port SystemsnmpCommunity#query_v1_port}
  */
  readonly queryV1Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#query_v1_status SystemsnmpCommunity#query_v1_status}
  */
  readonly queryV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#query_v2c_port SystemsnmpCommunity#query_v2c_port}
  */
  readonly queryV2CPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#query_v2c_status SystemsnmpCommunity#query_v2c_status}
  */
  readonly queryV2CStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#status SystemsnmpCommunity#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#trap_v1_lport SystemsnmpCommunity#trap_v1_lport}
  */
  readonly trapV1Lport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#trap_v1_rport SystemsnmpCommunity#trap_v1_rport}
  */
  readonly trapV1Rport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#trap_v1_status SystemsnmpCommunity#trap_v1_status}
  */
  readonly trapV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#trap_v2c_lport SystemsnmpCommunity#trap_v2c_lport}
  */
  readonly trapV2CLport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#trap_v2c_rport SystemsnmpCommunity#trap_v2c_rport}
  */
  readonly trapV2CRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#trap_v2c_status SystemsnmpCommunity#trap_v2c_status}
  */
  readonly trapV2CStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#vdomparam SystemsnmpCommunity#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#hosts SystemsnmpCommunity#hosts}
  */
  readonly hosts?: SystemsnmpCommunityHosts[] | cdktf.IResolvable;
  /**
  * hosts6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#hosts6 SystemsnmpCommunity#hosts6}
  */
  readonly hosts6?: SystemsnmpCommunityHosts6[] | cdktf.IResolvable;
  /**
  * vdoms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#vdoms SystemsnmpCommunity#vdoms}
  */
  readonly vdoms?: SystemsnmpCommunityVdoms[] | cdktf.IResolvable;
}
export interface SystemsnmpCommunityHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#ha_direct SystemsnmpCommunity#ha_direct}
  */
  readonly haDirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#host_type SystemsnmpCommunity#host_type}
  */
  readonly hostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#id SystemsnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#interface SystemsnmpCommunity#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#interface_select_method SystemsnmpCommunity#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#ip SystemsnmpCommunity#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#source_ip SystemsnmpCommunity#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#vrf_select SystemsnmpCommunity#vrf_select}
  */
  readonly vrfSelect?: number;
}

export function systemsnmpCommunityHostsToTerraform(struct?: SystemsnmpCommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_direct: cdktf.stringToTerraform(struct!.haDirect),
    host_type: cdktf.stringToTerraform(struct!.hostType),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    ip: cdktf.stringToTerraform(struct!.ip),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    vrf_select: cdktf.numberToTerraform(struct!.vrfSelect),
  }
}


export function systemsnmpCommunityHostsToHclTerraform(struct?: SystemsnmpCommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_direct: {
      value: cdktf.stringToHclTerraform(struct!.haDirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktf.stringToHclTerraform(struct!.hostType),
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
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_select_method: {
      value: cdktf.stringToHclTerraform(struct!.interfaceSelectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_select: {
      value: cdktf.numberToHclTerraform(struct!.vrfSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemsnmpCommunityHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemsnmpCommunityHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haDirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.haDirect = this._haDirect;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSelectMethod = this._interfaceSelectMethod;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._vrfSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfSelect = this._vrfSelect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemsnmpCommunityHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._haDirect = undefined;
      this._hostType = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._interfaceSelectMethod = undefined;
      this._ip = undefined;
      this._sourceIp = undefined;
      this._vrfSelect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._haDirect = value.haDirect;
      this._hostType = value.hostType;
      this._id = value.id;
      this._interface = value.interface;
      this._interfaceSelectMethod = value.interfaceSelectMethod;
      this._ip = value.ip;
      this._sourceIp = value.sourceIp;
      this._vrfSelect = value.vrfSelect;
    }
  }

  // ha_direct - computed: true, optional: true, required: false
  private _haDirect?: string; 
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
  }
  public set haDirect(value: string) {
    this._haDirect = value;
  }
  public resetHaDirect() {
    this._haDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDirectInput() {
    return this._haDirect;
  }

  // host_type - computed: true, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
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

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
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

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }
}

export class SystemsnmpCommunityHostsList extends cdktf.ComplexList {
  public internalValue? : SystemsnmpCommunityHosts[] | cdktf.IResolvable

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
  public get(index: number): SystemsnmpCommunityHostsOutputReference {
    return new SystemsnmpCommunityHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemsnmpCommunityHosts6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#ha_direct SystemsnmpCommunity#ha_direct}
  */
  readonly haDirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#host_type SystemsnmpCommunity#host_type}
  */
  readonly hostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#id SystemsnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#interface SystemsnmpCommunity#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#interface_select_method SystemsnmpCommunity#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#ipv6 SystemsnmpCommunity#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#source_ipv6 SystemsnmpCommunity#source_ipv6}
  */
  readonly sourceIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#vrf_select SystemsnmpCommunity#vrf_select}
  */
  readonly vrfSelect?: number;
}

export function systemsnmpCommunityHosts6ToTerraform(struct?: SystemsnmpCommunityHosts6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_direct: cdktf.stringToTerraform(struct!.haDirect),
    host_type: cdktf.stringToTerraform(struct!.hostType),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    source_ipv6: cdktf.stringToTerraform(struct!.sourceIpv6),
    vrf_select: cdktf.numberToTerraform(struct!.vrfSelect),
  }
}


export function systemsnmpCommunityHosts6ToHclTerraform(struct?: SystemsnmpCommunityHosts6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_direct: {
      value: cdktf.stringToHclTerraform(struct!.haDirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktf.stringToHclTerraform(struct!.hostType),
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
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_select_method: {
      value: cdktf.stringToHclTerraform(struct!.interfaceSelectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_select: {
      value: cdktf.numberToHclTerraform(struct!.vrfSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemsnmpCommunityHosts6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemsnmpCommunityHosts6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haDirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.haDirect = this._haDirect;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSelectMethod = this._interfaceSelectMethod;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._sourceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv6 = this._sourceIpv6;
    }
    if (this._vrfSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfSelect = this._vrfSelect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemsnmpCommunityHosts6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._haDirect = undefined;
      this._hostType = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._interfaceSelectMethod = undefined;
      this._ipv6 = undefined;
      this._sourceIpv6 = undefined;
      this._vrfSelect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._haDirect = value.haDirect;
      this._hostType = value.hostType;
      this._id = value.id;
      this._interface = value.interface;
      this._interfaceSelectMethod = value.interfaceSelectMethod;
      this._ipv6 = value.ipv6;
      this._sourceIpv6 = value.sourceIpv6;
      this._vrfSelect = value.vrfSelect;
    }
  }

  // ha_direct - computed: true, optional: true, required: false
  private _haDirect?: string; 
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
  }
  public set haDirect(value: string) {
    this._haDirect = value;
  }
  public resetHaDirect() {
    this._haDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDirectInput() {
    return this._haDirect;
  }

  // host_type - computed: true, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
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

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // source_ipv6 - computed: true, optional: true, required: false
  private _sourceIpv6?: string; 
  public get sourceIpv6() {
    return this.getStringAttribute('source_ipv6');
  }
  public set sourceIpv6(value: string) {
    this._sourceIpv6 = value;
  }
  public resetSourceIpv6() {
    this._sourceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv6Input() {
    return this._sourceIpv6;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }
}

export class SystemsnmpCommunityHosts6List extends cdktf.ComplexList {
  public internalValue? : SystemsnmpCommunityHosts6[] | cdktf.IResolvable

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
  public get(index: number): SystemsnmpCommunityHosts6OutputReference {
    return new SystemsnmpCommunityHosts6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemsnmpCommunityVdoms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#name SystemsnmpCommunity#name}
  */
  readonly name?: string;
}

export function systemsnmpCommunityVdomsToTerraform(struct?: SystemsnmpCommunityVdoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemsnmpCommunityVdomsToHclTerraform(struct?: SystemsnmpCommunityVdoms | cdktf.IResolvable): any {
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

export class SystemsnmpCommunityVdomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemsnmpCommunityVdoms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemsnmpCommunityVdoms | cdktf.IResolvable | undefined) {
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

export class SystemsnmpCommunityVdomsList extends cdktf.ComplexList {
  public internalValue? : SystemsnmpCommunityVdoms[] | cdktf.IResolvable

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
  public get(index: number): SystemsnmpCommunityVdomsOutputReference {
    return new SystemsnmpCommunityVdomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community fortios_systemsnmp_community}
*/
export class SystemsnmpCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemsnmp_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemsnmpCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemsnmpCommunity to import
  * @param importFromId The id of the existing SystemsnmpCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemsnmpCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemsnmp_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_community fortios_systemsnmp_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemsnmpCommunityConfig
  */
  public constructor(scope: Construct, id: string, config: SystemsnmpCommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemsnmp_community',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._events = config.events;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._mibView = config.mibView;
    this._name = config.name;
    this._queryV1Port = config.queryV1Port;
    this._queryV1Status = config.queryV1Status;
    this._queryV2CPort = config.queryV2CPort;
    this._queryV2CStatus = config.queryV2CStatus;
    this._status = config.status;
    this._trapV1Lport = config.trapV1Lport;
    this._trapV1Rport = config.trapV1Rport;
    this._trapV1Status = config.trapV1Status;
    this._trapV2CLport = config.trapV2CLport;
    this._trapV2CRport = config.trapV2CRport;
    this._trapV2CStatus = config.trapV2CStatus;
    this._vdomparam = config.vdomparam;
    this._hosts.internalValue = config.hosts;
    this._hosts6.internalValue = config.hosts6;
    this._vdoms.internalValue = config.vdoms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // events - computed: true, optional: true, required: false
  private _events?: string; 
  public get events() {
    return this.getStringAttribute('events');
  }
  public set events(value: string) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // fosid - computed: false, optional: false, required: true
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
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

  // mib_view - computed: false, optional: true, required: false
  private _mibView?: string; 
  public get mibView() {
    return this.getStringAttribute('mib_view');
  }
  public set mibView(value: string) {
    this._mibView = value;
  }
  public resetMibView() {
    this._mibView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mibViewInput() {
    return this._mibView;
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

  // query_v1_port - computed: true, optional: true, required: false
  private _queryV1Port?: number; 
  public get queryV1Port() {
    return this.getNumberAttribute('query_v1_port');
  }
  public set queryV1Port(value: number) {
    this._queryV1Port = value;
  }
  public resetQueryV1Port() {
    this._queryV1Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1PortInput() {
    return this._queryV1Port;
  }

  // query_v1_status - computed: true, optional: true, required: false
  private _queryV1Status?: string; 
  public get queryV1Status() {
    return this.getStringAttribute('query_v1_status');
  }
  public set queryV1Status(value: string) {
    this._queryV1Status = value;
  }
  public resetQueryV1Status() {
    this._queryV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1StatusInput() {
    return this._queryV1Status;
  }

  // query_v2c_port - computed: true, optional: true, required: false
  private _queryV2CPort?: number; 
  public get queryV2CPort() {
    return this.getNumberAttribute('query_v2c_port');
  }
  public set queryV2CPort(value: number) {
    this._queryV2CPort = value;
  }
  public resetQueryV2CPort() {
    this._queryV2CPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CPortInput() {
    return this._queryV2CPort;
  }

  // query_v2c_status - computed: true, optional: true, required: false
  private _queryV2CStatus?: string; 
  public get queryV2CStatus() {
    return this.getStringAttribute('query_v2c_status');
  }
  public set queryV2CStatus(value: string) {
    this._queryV2CStatus = value;
  }
  public resetQueryV2CStatus() {
    this._queryV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CStatusInput() {
    return this._queryV2CStatus;
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

  // trap_v1_lport - computed: true, optional: true, required: false
  private _trapV1Lport?: number; 
  public get trapV1Lport() {
    return this.getNumberAttribute('trap_v1_lport');
  }
  public set trapV1Lport(value: number) {
    this._trapV1Lport = value;
  }
  public resetTrapV1Lport() {
    this._trapV1Lport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1LportInput() {
    return this._trapV1Lport;
  }

  // trap_v1_rport - computed: true, optional: true, required: false
  private _trapV1Rport?: number; 
  public get trapV1Rport() {
    return this.getNumberAttribute('trap_v1_rport');
  }
  public set trapV1Rport(value: number) {
    this._trapV1Rport = value;
  }
  public resetTrapV1Rport() {
    this._trapV1Rport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1RportInput() {
    return this._trapV1Rport;
  }

  // trap_v1_status - computed: true, optional: true, required: false
  private _trapV1Status?: string; 
  public get trapV1Status() {
    return this.getStringAttribute('trap_v1_status');
  }
  public set trapV1Status(value: string) {
    this._trapV1Status = value;
  }
  public resetTrapV1Status() {
    this._trapV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1StatusInput() {
    return this._trapV1Status;
  }

  // trap_v2c_lport - computed: true, optional: true, required: false
  private _trapV2CLport?: number; 
  public get trapV2CLport() {
    return this.getNumberAttribute('trap_v2c_lport');
  }
  public set trapV2CLport(value: number) {
    this._trapV2CLport = value;
  }
  public resetTrapV2CLport() {
    this._trapV2CLport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CLportInput() {
    return this._trapV2CLport;
  }

  // trap_v2c_rport - computed: true, optional: true, required: false
  private _trapV2CRport?: number; 
  public get trapV2CRport() {
    return this.getNumberAttribute('trap_v2c_rport');
  }
  public set trapV2CRport(value: number) {
    this._trapV2CRport = value;
  }
  public resetTrapV2CRport() {
    this._trapV2CRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CRportInput() {
    return this._trapV2CRport;
  }

  // trap_v2c_status - computed: true, optional: true, required: false
  private _trapV2CStatus?: string; 
  public get trapV2CStatus() {
    return this.getStringAttribute('trap_v2c_status');
  }
  public set trapV2CStatus(value: string) {
    this._trapV2CStatus = value;
  }
  public resetTrapV2CStatus() {
    this._trapV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CStatusInput() {
    return this._trapV2CStatus;
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

  // hosts - computed: false, optional: true, required: false
  private _hosts = new SystemsnmpCommunityHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: SystemsnmpCommunityHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // hosts6 - computed: false, optional: true, required: false
  private _hosts6 = new SystemsnmpCommunityHosts6List(this, "hosts6", false);
  public get hosts6() {
    return this._hosts6;
  }
  public putHosts6(value: SystemsnmpCommunityHosts6[] | cdktf.IResolvable) {
    this._hosts6.internalValue = value;
  }
  public resetHosts6() {
    this._hosts6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hosts6Input() {
    return this._hosts6.internalValue;
  }

  // vdoms - computed: false, optional: true, required: false
  private _vdoms = new SystemsnmpCommunityVdomsList(this, "vdoms", true);
  public get vdoms() {
    return this._vdoms;
  }
  public putVdoms(value: SystemsnmpCommunityVdoms[] | cdktf.IResolvable) {
    this._vdoms.internalValue = value;
  }
  public resetVdoms() {
    this._vdoms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomsInput() {
    return this._vdoms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      events: cdktf.stringToTerraform(this._events),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      mib_view: cdktf.stringToTerraform(this._mibView),
      name: cdktf.stringToTerraform(this._name),
      query_v1_port: cdktf.numberToTerraform(this._queryV1Port),
      query_v1_status: cdktf.stringToTerraform(this._queryV1Status),
      query_v2c_port: cdktf.numberToTerraform(this._queryV2CPort),
      query_v2c_status: cdktf.stringToTerraform(this._queryV2CStatus),
      status: cdktf.stringToTerraform(this._status),
      trap_v1_lport: cdktf.numberToTerraform(this._trapV1Lport),
      trap_v1_rport: cdktf.numberToTerraform(this._trapV1Rport),
      trap_v1_status: cdktf.stringToTerraform(this._trapV1Status),
      trap_v2c_lport: cdktf.numberToTerraform(this._trapV2CLport),
      trap_v2c_rport: cdktf.numberToTerraform(this._trapV2CRport),
      trap_v2c_status: cdktf.stringToTerraform(this._trapV2CStatus),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      hosts: cdktf.listMapper(systemsnmpCommunityHostsToTerraform, true)(this._hosts.internalValue),
      hosts6: cdktf.listMapper(systemsnmpCommunityHosts6ToTerraform, true)(this._hosts6.internalValue),
      vdoms: cdktf.listMapper(systemsnmpCommunityVdomsToTerraform, true)(this._vdoms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.stringToHclTerraform(this._events),
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
      mib_view: {
        value: cdktf.stringToHclTerraform(this._mibView),
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
      query_v1_port: {
        value: cdktf.numberToHclTerraform(this._queryV1Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_v1_status: {
        value: cdktf.stringToHclTerraform(this._queryV1Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_v2c_port: {
        value: cdktf.numberToHclTerraform(this._queryV2CPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_v2c_status: {
        value: cdktf.stringToHclTerraform(this._queryV2CStatus),
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
      trap_v1_lport: {
        value: cdktf.numberToHclTerraform(this._trapV1Lport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v1_rport: {
        value: cdktf.numberToHclTerraform(this._trapV1Rport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v1_status: {
        value: cdktf.stringToHclTerraform(this._trapV1Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_v2c_lport: {
        value: cdktf.numberToHclTerraform(this._trapV2CLport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v2c_rport: {
        value: cdktf.numberToHclTerraform(this._trapV2CRport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v2c_status: {
        value: cdktf.stringToHclTerraform(this._trapV2CStatus),
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
      hosts: {
        value: cdktf.listMapperHcl(systemsnmpCommunityHostsToHclTerraform, true)(this._hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemsnmpCommunityHostsList",
      },
      hosts6: {
        value: cdktf.listMapperHcl(systemsnmpCommunityHosts6ToHclTerraform, true)(this._hosts6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemsnmpCommunityHosts6List",
      },
      vdoms: {
        value: cdktf.listMapperHcl(systemsnmpCommunityVdomsToHclTerraform, true)(this._vdoms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemsnmpCommunityVdomsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
