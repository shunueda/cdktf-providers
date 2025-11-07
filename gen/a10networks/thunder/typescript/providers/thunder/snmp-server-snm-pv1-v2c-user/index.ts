// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerSnmPv1V2CUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#id SnmpServerSnmPv1V2CUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * define value of community string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#passwd SnmpServerSnmPv1V2CUser#passwd}
  */
  readonly passwd?: string;
  /**
  * SNMPv1/v2c community configuration key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#user SnmpServerSnmPv1V2CUser#user}
  */
  readonly user: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#user_tag SnmpServerSnmPv1V2CUser#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#uuid SnmpServerSnmPv1V2CUser#uuid}
  */
  readonly uuid?: string;
  /**
  * oid_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#oid_list SnmpServerSnmPv1V2CUser#oid_list}
  */
  readonly oidList?: SnmpServerSnmPv1V2CUserOidListStruct[] | cdktf.IResolvable;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#remote SnmpServerSnmPv1V2CUser#remote}
  */
  readonly remote?: SnmpServerSnmPv1V2CUserRemote;
}
export interface SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct {
  /**
  * DNS remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#dns_host SnmpServerSnmPv1V2CUser#dns_host}
  */
  readonly dnsHost?: string;
  /**
  * IPV4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_mask SnmpServerSnmPv1V2CUser#ipv4_mask}
  */
  readonly ipv4Mask?: string;
}

export function snmpServerSnmPv1V2CUserOidListRemoteHostListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_host: cdktf.stringToTerraform(struct!.dnsHost),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
  }
}


export function snmpServerSnmPv1V2CUserOidListRemoteHostListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_host: {
      value: cdktf.stringToHclTerraform(struct!.dnsHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidListRemoteHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsHost = this._dnsHost;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsHost = undefined;
      this._ipv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsHost = value.dnsHost;
      this._ipv4Mask = value.ipv4Mask;
    }
  }

  // dns_host - computed: false, optional: true, required: false
  private _dnsHost?: string; 
  public get dnsHost() {
    return this.getStringAttribute('dns_host');
  }
  public set dnsHost(value: string) {
    this._dnsHost = value;
  }
  public resetDnsHost() {
    this._dnsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHostInput() {
    return this._dnsHost;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }
}

export class SnmpServerSnmPv1V2CUserOidListRemoteHostListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserOidListRemoteHostListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserOidListRemoteHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct {
  /**
  * IPV4 remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_host SnmpServerSnmPv1V2CUser#ipv4_host}
  */
  readonly ipv4Host?: string;
  /**
  * IPV4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_mask SnmpServerSnmPv1V2CUser#ipv4_mask}
  */
  readonly ipv4Mask?: string;
}

export function snmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_host: cdktf.stringToTerraform(struct!.ipv4Host),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
  }
}


export function snmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Host = this._ipv4Host;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Host = undefined;
      this._ipv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Host = value.ipv4Host;
      this._ipv4Mask = value.ipv4Mask;
    }
  }

  // ipv4_host - computed: false, optional: true, required: false
  private _ipv4Host?: string; 
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
  public set ipv4Host(value: string) {
    this._ipv4Host = value;
  }
  public resetIpv4Host() {
    this._ipv4Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostInput() {
    return this._ipv4Host;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }
}

export class SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct {
  /**
  * IPV6 remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv6_host SnmpServerSnmPv1V2CUser#ipv6_host}
  */
  readonly ipv6Host?: string;
  /**
  * IPV6 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv6_mask SnmpServerSnmPv1V2CUser#ipv6_mask}
  */
  readonly ipv6Mask?: number;
}

export function snmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
    ipv6_mask: cdktf.numberToTerraform(struct!.ipv6Mask),
  }
}


export function snmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    if (this._ipv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mask = this._ipv6Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Host = undefined;
      this._ipv6Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Host = value.ipv6Host;
      this._ipv6Mask = value.ipv6Mask;
    }
  }

  // ipv6_host - computed: false, optional: true, required: false
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  public resetIpv6Host() {
    this._ipv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // ipv6_mask - computed: false, optional: true, required: false
  private _ipv6Mask?: number; 
  public get ipv6Mask() {
    return this.getNumberAttribute('ipv6_mask');
  }
  public set ipv6Mask(value: number) {
    this._ipv6Mask = value;
  }
  public resetIpv6Mask() {
    this._ipv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskInput() {
    return this._ipv6Mask;
  }
}

export class SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserOidListRemote {
  /**
  * host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#host_list SnmpServerSnmPv1V2CUser#host_list}
  */
  readonly hostList?: SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_list SnmpServerSnmPv1V2CUser#ipv4_list}
  */
  readonly ipv4List?: SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv6_list SnmpServerSnmPv1V2CUser#ipv6_list}
  */
  readonly ipv6List?: SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct[] | cdktf.IResolvable;
}

export function snmpServerSnmPv1V2CUserOidListRemoteToTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteOutputReference | SnmpServerSnmPv1V2CUserOidListRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_list: cdktf.listMapper(snmpServerSnmPv1V2CUserOidListRemoteHostListStructToTerraform, true)(struct!.hostList),
    ipv4_list: cdktf.listMapper(snmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(snmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructToTerraform, true)(struct!.ipv6List),
  }
}


export function snmpServerSnmPv1V2CUserOidListRemoteToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidListRemoteOutputReference | SnmpServerSnmPv1V2CUserOidListRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserOidListRemoteHostListStructToHclTerraform, true)(struct!.hostList),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserOidListRemoteHostListStructList",
    },
    ipv4_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidListRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerSnmPv1V2CUserOidListRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostList = this._hostList?.internalValue;
    }
    if (this._ipv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidListRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostList.internalValue = undefined;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostList.internalValue = value.hostList;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
    }
  }

  // host_list - computed: false, optional: true, required: false
  private _hostList = new SnmpServerSnmPv1V2CUserOidListRemoteHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }
  public putHostList(value: SnmpServerSnmPv1V2CUserOidListRemoteHostListStruct[] | cdktf.IResolvable) {
    this._hostList.internalValue = value;
  }
  public resetHostList() {
    this._hostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListInput() {
    return this._hostList.internalValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: SnmpServerSnmPv1V2CUserOidListRemoteIpv4ListStruct[] | cdktf.IResolvable) {
    this._ipv4List.internalValue = value;
  }
  public resetIpv4List() {
    this._ipv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: SnmpServerSnmPv1V2CUserOidListRemoteIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }
}
export interface SnmpServerSnmPv1V2CUserOidListStruct {
  /**
  * specific the oid (The oid value, object-key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#oid_val SnmpServerSnmPv1V2CUser#oid_val}
  */
  readonly oidVal: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#user_tag SnmpServerSnmPv1V2CUser#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#uuid SnmpServerSnmPv1V2CUser#uuid}
  */
  readonly uuid?: string;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#remote SnmpServerSnmPv1V2CUser#remote}
  */
  readonly remote?: SnmpServerSnmPv1V2CUserOidListRemote;
}

export function snmpServerSnmPv1V2CUserOidListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserOidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oid_val: cdktf.stringToTerraform(struct!.oidVal),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    remote: snmpServerSnmPv1V2CUserOidListRemoteToTerraform(struct!.remote),
  }
}


export function snmpServerSnmPv1V2CUserOidListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oid_val: {
      value: cdktf.stringToHclTerraform(struct!.oidVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote: {
      value: snmpServerSnmPv1V2CUserOidListRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserOidListRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserOidListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidVal = this._oidVal;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidVal = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._remote.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidVal = value.oidVal;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._remote.internalValue = value.remote;
    }
  }

  // oid_val - computed: false, optional: false, required: true
  private _oidVal?: string; 
  public get oidVal() {
    return this.getStringAttribute('oid_val');
  }
  public set oidVal(value: string) {
    this._oidVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidValInput() {
    return this._oidVal;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // remote - computed: false, optional: true, required: false
  private _remote = new SnmpServerSnmPv1V2CUserOidListRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: SnmpServerSnmPv1V2CUserOidListRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}

export class SnmpServerSnmPv1V2CUserOidListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserOidListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserOidListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserOidListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserRemoteHostListStruct {
  /**
  * DNS remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#dns_host SnmpServerSnmPv1V2CUser#dns_host}
  */
  readonly dnsHost?: string;
  /**
  * IPV4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_mask SnmpServerSnmPv1V2CUser#ipv4_mask}
  */
  readonly ipv4Mask?: string;
}

export function snmpServerSnmPv1V2CUserRemoteHostListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_host: cdktf.stringToTerraform(struct!.dnsHost),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
  }
}


export function snmpServerSnmPv1V2CUserRemoteHostListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_host: {
      value: cdktf.stringToHclTerraform(struct!.dnsHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserRemoteHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserRemoteHostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsHost = this._dnsHost;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserRemoteHostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsHost = undefined;
      this._ipv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsHost = value.dnsHost;
      this._ipv4Mask = value.ipv4Mask;
    }
  }

  // dns_host - computed: false, optional: true, required: false
  private _dnsHost?: string; 
  public get dnsHost() {
    return this.getStringAttribute('dns_host');
  }
  public set dnsHost(value: string) {
    this._dnsHost = value;
  }
  public resetDnsHost() {
    this._dnsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHostInput() {
    return this._dnsHost;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }
}

export class SnmpServerSnmPv1V2CUserRemoteHostListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserRemoteHostListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserRemoteHostListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserRemoteHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct {
  /**
  * IPV4 remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_host SnmpServerSnmPv1V2CUser#ipv4_host}
  */
  readonly ipv4Host?: string;
  /**
  * IPV4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_mask SnmpServerSnmPv1V2CUser#ipv4_mask}
  */
  readonly ipv4Mask?: string;
}

export function snmpServerSnmPv1V2CUserRemoteIpv4ListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_host: cdktf.stringToTerraform(struct!.ipv4Host),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
  }
}


export function snmpServerSnmPv1V2CUserRemoteIpv4ListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserRemoteIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Host = this._ipv4Host;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Host = undefined;
      this._ipv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Host = value.ipv4Host;
      this._ipv4Mask = value.ipv4Mask;
    }
  }

  // ipv4_host - computed: false, optional: true, required: false
  private _ipv4Host?: string; 
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
  public set ipv4Host(value: string) {
    this._ipv4Host = value;
  }
  public resetIpv4Host() {
    this._ipv4Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostInput() {
    return this._ipv4Host;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }
}

export class SnmpServerSnmPv1V2CUserRemoteIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserRemoteIpv4ListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserRemoteIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct {
  /**
  * IPV6 remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv6_host SnmpServerSnmPv1V2CUser#ipv6_host}
  */
  readonly ipv6Host?: string;
  /**
  * IPV6 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv6_mask SnmpServerSnmPv1V2CUser#ipv6_mask}
  */
  readonly ipv6Mask?: number;
}

export function snmpServerSnmPv1V2CUserRemoteIpv6ListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
    ipv6_mask: cdktf.numberToTerraform(struct!.ipv6Mask),
  }
}


export function snmpServerSnmPv1V2CUserRemoteIpv6ListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserRemoteIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    if (this._ipv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mask = this._ipv6Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Host = undefined;
      this._ipv6Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Host = value.ipv6Host;
      this._ipv6Mask = value.ipv6Mask;
    }
  }

  // ipv6_host - computed: false, optional: true, required: false
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  public resetIpv6Host() {
    this._ipv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // ipv6_mask - computed: false, optional: true, required: false
  private _ipv6Mask?: number; 
  public get ipv6Mask() {
    return this.getNumberAttribute('ipv6_mask');
  }
  public set ipv6Mask(value: number) {
    this._ipv6Mask = value;
  }
  public resetIpv6Mask() {
    this._ipv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskInput() {
    return this._ipv6Mask;
  }
}

export class SnmpServerSnmPv1V2CUserRemoteIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserRemoteIpv6ListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserRemoteIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserRemote {
  /**
  * host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#host_list SnmpServerSnmPv1V2CUser#host_list}
  */
  readonly hostList?: SnmpServerSnmPv1V2CUserRemoteHostListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv4_list SnmpServerSnmPv1V2CUser#ipv4_list}
  */
  readonly ipv4List?: SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#ipv6_list SnmpServerSnmPv1V2CUser#ipv6_list}
  */
  readonly ipv6List?: SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct[] | cdktf.IResolvable;
}

export function snmpServerSnmPv1V2CUserRemoteToTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteOutputReference | SnmpServerSnmPv1V2CUserRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_list: cdktf.listMapper(snmpServerSnmPv1V2CUserRemoteHostListStructToTerraform, true)(struct!.hostList),
    ipv4_list: cdktf.listMapper(snmpServerSnmPv1V2CUserRemoteIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(snmpServerSnmPv1V2CUserRemoteIpv6ListStructToTerraform, true)(struct!.ipv6List),
  }
}


export function snmpServerSnmPv1V2CUserRemoteToHclTerraform(struct?: SnmpServerSnmPv1V2CUserRemoteOutputReference | SnmpServerSnmPv1V2CUserRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserRemoteHostListStructToHclTerraform, true)(struct!.hostList),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserRemoteHostListStructList",
    },
    ipv4_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserRemoteIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserRemoteIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserRemoteIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserRemoteIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerSnmPv1V2CUserRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostList = this._hostList?.internalValue;
    }
    if (this._ipv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostList.internalValue = undefined;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostList.internalValue = value.hostList;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
    }
  }

  // host_list - computed: false, optional: true, required: false
  private _hostList = new SnmpServerSnmPv1V2CUserRemoteHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }
  public putHostList(value: SnmpServerSnmPv1V2CUserRemoteHostListStruct[] | cdktf.IResolvable) {
    this._hostList.internalValue = value;
  }
  public resetHostList() {
    this._hostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListInput() {
    return this._hostList.internalValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new SnmpServerSnmPv1V2CUserRemoteIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: SnmpServerSnmPv1V2CUserRemoteIpv4ListStruct[] | cdktf.IResolvable) {
    this._ipv4List.internalValue = value;
  }
  public resetIpv4List() {
    this._ipv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new SnmpServerSnmPv1V2CUserRemoteIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: SnmpServerSnmPv1V2CUserRemoteIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user thunder_snmp_server_SNMPv1_v2c_user}
*/
export class SnmpServerSnmPv1V2CUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_SNMPv1_v2c_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerSnmPv1V2CUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerSnmPv1V2CUser to import
  * @param importFromId The id of the existing SnmpServerSnmPv1V2CUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerSnmPv1V2CUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_SNMPv1_v2c_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user thunder_snmp_server_SNMPv1_v2c_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerSnmPv1V2CUserConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpServerSnmPv1V2CUserConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_SNMPv1_v2c_user',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._passwd = config.passwd;
    this._user = config.user;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._oidList.internalValue = config.oidList;
    this._remote.internalValue = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // passwd - computed: false, optional: true, required: false
  private _passwd?: string; 
  public get passwd() {
    return this.getStringAttribute('passwd');
  }
  public set passwd(value: string) {
    this._passwd = value;
  }
  public resetPasswd() {
    this._passwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdInput() {
    return this._passwd;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // oid_list - computed: false, optional: true, required: false
  private _oidList = new SnmpServerSnmPv1V2CUserOidListStructList(this, "oid_list", false);
  public get oidList() {
    return this._oidList;
  }
  public putOidList(value: SnmpServerSnmPv1V2CUserOidListStruct[] | cdktf.IResolvable) {
    this._oidList.internalValue = value;
  }
  public resetOidList() {
    this._oidList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidListInput() {
    return this._oidList.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new SnmpServerSnmPv1V2CUserRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: SnmpServerSnmPv1V2CUserRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      passwd: cdktf.stringToTerraform(this._passwd),
      user: cdktf.stringToTerraform(this._user),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      oid_list: cdktf.listMapper(snmpServerSnmPv1V2CUserOidListStructToTerraform, true)(this._oidList.internalValue),
      remote: snmpServerSnmPv1V2CUserRemoteToTerraform(this._remote.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd: {
        value: cdktf.stringToHclTerraform(this._passwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      oid_list: {
        value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserOidListStructToHclTerraform, true)(this._oidList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerSnmPv1V2CUserOidListStructList",
      },
      remote: {
        value: snmpServerSnmPv1V2CUserRemoteToHclTerraform(this._remote.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerSnmPv1V2CUserRemoteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
