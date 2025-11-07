// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTrunkConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#action InterfaceTrunk#action}
  */
  readonly action?: string;
  /**
  * (Only for LACP trunks) Attempt auto-recovery after ports-treshold is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#do_auto_recovery InterfaceTrunk#do_auto_recovery}
  */
  readonly doAutoRecovery?: number;
  /**
  * Enable Gaming Protocol Compliance Check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#gaming_protocol_compliance InterfaceTrunk#gaming_protocol_compliance}
  */
  readonly gamingProtocolCompliance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#id InterfaceTrunk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ifnum InterfaceTrunk#ifnum}
  */
  readonly ifnum: number;
  /**
  * Disable L3 forwarding between VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#l3_vlan_fwd_disable InterfaceTrunk#l3_vlan_fwd_disable}
  */
  readonly l3VlanFwdDisable?: number;
  /**
  * 'enable': Enable MAC learning; 'disable': Disable MAC learning; 'dmac-only': Enable destination MAC learning only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mac_learning InterfaceTrunk#mac_learning}
  */
  readonly macLearning?: string;
  /**
  * Interface mtu (Interface MTU, default 1 (min MTU is 1280 for IPv6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mtu InterfaceTrunk#mtu}
  */
  readonly mtu?: number;
  /**
  * Name for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#name InterfaceTrunk#name}
  */
  readonly name?: string;
  /**
  * Threshold for the minimum number of ports that need to be UP for the trunk to remain UP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ports_threshold InterfaceTrunk#ports_threshold}
  */
  readonly portsThreshold?: number;
  /**
  * Disable SYNC bit modify for ports-threshold do-auto-recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#sync_modify_disable InterfaceTrunk#sync_modify_disable}
  */
  readonly syncModifyDisable?: number;
  /**
  * Timer to re-check the threshold under certain conditions (Time in seconds (Default: 10))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#timer InterfaceTrunk#timer}
  */
  readonly timer?: number;
  /**
  * The trap source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#trap_source InterfaceTrunk#trap_source}
  */
  readonly trapSource?: number;
  /**
  * Update and use received L2 information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#update_l2_info InterfaceTrunk#update_l2_info}
  */
  readonly updateL2Info?: number;
  /**
  * Enable HW based load balacing decision rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#use_hw_hash InterfaceTrunk#use_hw_hash}
  */
  readonly useHwHash?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#user_tag InterfaceTrunk#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * Mark trunk as a virtual wire interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#virtual_wire InterfaceTrunk#virtual_wire}
  */
  readonly virtualWire?: number;
  /**
  * 'enable': Enable VLAN learning; 'disable': Disable VLAN learning;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#vlan_learning InterfaceTrunk#vlan_learning}
  */
  readonly vlanLearning?: string;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#access_list InterfaceTrunk#access_list}
  */
  readonly accessList?: InterfaceTrunkAccessListStruct;
  /**
  * bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#bfd InterfaceTrunk#bfd}
  */
  readonly bfd?: InterfaceTrunkBfd;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ddos InterfaceTrunk#ddos}
  */
  readonly ddos?: InterfaceTrunkDdos;
  /**
  * icmp_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#icmp_rate_limit InterfaceTrunk#icmp_rate_limit}
  */
  readonly icmpRateLimit?: InterfaceTrunkIcmpRateLimit;
  /**
  * icmpv6_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#icmpv6_rate_limit InterfaceTrunk#icmpv6_rate_limit}
  */
  readonly icmpv6RateLimit?: InterfaceTrunkIcmpv6RateLimit;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ip InterfaceTrunk#ip}
  */
  readonly ip?: InterfaceTrunkIp;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ipv6 InterfaceTrunk#ipv6}
  */
  readonly ipv6?: InterfaceTrunkIpv6;
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#isis InterfaceTrunk#isis}
  */
  readonly isis?: InterfaceTrunkIsis;
  /**
  * lw_4o6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#lw_4o6 InterfaceTrunk#lw_4o6}
  */
  readonly lw4O6?: InterfaceTrunkLw4O6;
  /**
  * map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#map InterfaceTrunk#map}
  */
  readonly map?: InterfaceTrunkMap;
  /**
  * nptv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#nptv6 InterfaceTrunk#nptv6}
  */
  readonly nptv6?: InterfaceTrunkNptv6;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#sampling_enable InterfaceTrunk#sampling_enable}
  */
  readonly samplingEnable?: InterfaceTrunkSamplingEnable[] | cdktf.IResolvable;
  /**
  * spanning_tree block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#spanning_tree InterfaceTrunk#spanning_tree}
  */
  readonly spanningTree?: InterfaceTrunkSpanningTree;
}
export interface InterfaceTrunkAccessListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#acl_id InterfaceTrunk#acl_id}
  */
  readonly aclId?: number;
  /**
  * Apply an access list (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#acl_name InterfaceTrunk#acl_name}
  */
  readonly aclName?: string;
}

export function interfaceTrunkAccessListStructToTerraform(struct?: InterfaceTrunkAccessListStructOutputReference | InterfaceTrunkAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
  }
}


export function interfaceTrunkAccessListStructToHclTerraform(struct?: InterfaceTrunkAccessListStructOutputReference | InterfaceTrunkAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkAccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclId = undefined;
      this._aclName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclId = value.aclId;
      this._aclName = value.aclName;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }
}
export interface InterfaceTrunkBfdAuthentication {
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#key_id InterfaceTrunk#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': Keyed MD5; 'meticulous-md5': Meticulous Keyed MD5; 'meticulous-sha1': Meticulous Keyed SHA1; 'sha1': Keyed SHA1; 'simple': Simple Password;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#method InterfaceTrunk#method}
  */
  readonly method?: string;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#password InterfaceTrunk#password}
  */
  readonly password?: string;
}

export function interfaceTrunkBfdAuthenticationToTerraform(struct?: InterfaceTrunkBfdAuthenticationOutputReference | InterfaceTrunkBfdAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.numberToTerraform(struct!.keyId),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceTrunkBfdAuthenticationToHclTerraform(struct?: InterfaceTrunkBfdAuthenticationOutputReference | InterfaceTrunkBfdAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkBfdAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkBfdAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkBfdAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._method = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._method = value.method;
      this._password = value.password;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface InterfaceTrunkBfdIntervalCfg {
  /**
  * Transmit interval between BFD packets (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#interval InterfaceTrunk#interval}
  */
  readonly interval?: number;
  /**
  * Minimum receive interval capability (Milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#min_rx InterfaceTrunk#min_rx}
  */
  readonly minRx?: number;
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#multiplier InterfaceTrunk#multiplier}
  */
  readonly multiplier?: number;
}

export function interfaceTrunkBfdIntervalCfgToTerraform(struct?: InterfaceTrunkBfdIntervalCfgOutputReference | InterfaceTrunkBfdIntervalCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    min_rx: cdktf.numberToTerraform(struct!.minRx),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
  }
}


export function interfaceTrunkBfdIntervalCfgToHclTerraform(struct?: InterfaceTrunkBfdIntervalCfgOutputReference | InterfaceTrunkBfdIntervalCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rx: {
      value: cdktf.numberToHclTerraform(struct!.minRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkBfdIntervalCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkBfdIntervalCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRx = this._minRx;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkBfdIntervalCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._minRx = undefined;
      this._multiplier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._minRx = value.minRx;
      this._multiplier = value.multiplier;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // min_rx - computed: false, optional: true, required: false
  private _minRx?: number; 
  public get minRx() {
    return this.getNumberAttribute('min_rx');
  }
  public set minRx(value: number) {
    this._minRx = value;
  }
  public resetMinRx() {
    this._minRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxInput() {
    return this._minRx;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }
}
export interface InterfaceTrunkBfdPerMemberPort {
  /**
  * IPv6 local-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ipv6_local InterfaceTrunk#ipv6_local}
  */
  readonly ipv6Local?: string;
  /**
  * IPv6 neighbor-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ipv6_nbr InterfaceTrunk#ipv6_nbr}
  */
  readonly ipv6Nbr?: string;
  /**
  * IPv4 local-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#local_address InterfaceTrunk#local_address}
  */
  readonly localAddress?: string;
  /**
  * IPv4 neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#neighbor_address InterfaceTrunk#neighbor_address}
  */
  readonly neighborAddress?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkBfdPerMemberPortToTerraform(struct?: InterfaceTrunkBfdPerMemberPortOutputReference | InterfaceTrunkBfdPerMemberPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_local: cdktf.stringToTerraform(struct!.ipv6Local),
    ipv6_nbr: cdktf.stringToTerraform(struct!.ipv6Nbr),
    local_address: cdktf.stringToTerraform(struct!.localAddress),
    neighbor_address: cdktf.stringToTerraform(struct!.neighborAddress),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkBfdPerMemberPortToHclTerraform(struct?: InterfaceTrunkBfdPerMemberPortOutputReference | InterfaceTrunkBfdPerMemberPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_local: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Local),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_nbr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Nbr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_address: {
      value: cdktf.stringToHclTerraform(struct!.localAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_address: {
      value: cdktf.stringToHclTerraform(struct!.neighborAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkBfdPerMemberPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkBfdPerMemberPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Local !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Local = this._ipv6Local;
    }
    if (this._ipv6Nbr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Nbr = this._ipv6Nbr;
    }
    if (this._localAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress;
    }
    if (this._neighborAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAddress = this._neighborAddress;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkBfdPerMemberPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Local = undefined;
      this._ipv6Nbr = undefined;
      this._localAddress = undefined;
      this._neighborAddress = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Local = value.ipv6Local;
      this._ipv6Nbr = value.ipv6Nbr;
      this._localAddress = value.localAddress;
      this._neighborAddress = value.neighborAddress;
      this._uuid = value.uuid;
    }
  }

  // ipv6_local - computed: false, optional: true, required: false
  private _ipv6Local?: string; 
  public get ipv6Local() {
    return this.getStringAttribute('ipv6_local');
  }
  public set ipv6Local(value: string) {
    this._ipv6Local = value;
  }
  public resetIpv6Local() {
    this._ipv6Local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LocalInput() {
    return this._ipv6Local;
  }

  // ipv6_nbr - computed: false, optional: true, required: false
  private _ipv6Nbr?: string; 
  public get ipv6Nbr() {
    return this.getStringAttribute('ipv6_nbr');
  }
  public set ipv6Nbr(value: string) {
    this._ipv6Nbr = value;
  }
  public resetIpv6Nbr() {
    this._ipv6Nbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NbrInput() {
    return this._ipv6Nbr;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // neighbor_address - computed: false, optional: true, required: false
  private _neighborAddress?: string; 
  public get neighborAddress() {
    return this.getStringAttribute('neighbor_address');
  }
  public set neighborAddress(value: string) {
    this._neighborAddress = value;
  }
  public resetNeighborAddress() {
    this._neighborAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAddressInput() {
    return this._neighborAddress;
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
}
export interface InterfaceTrunkBfd {
  /**
  * Demand mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#demand InterfaceTrunk#demand}
  */
  readonly demand?: number;
  /**
  * Enable BFD Echo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#echo InterfaceTrunk#echo}
  */
  readonly echo?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication InterfaceTrunk#authentication}
  */
  readonly authentication?: InterfaceTrunkBfdAuthentication;
  /**
  * interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#interval_cfg InterfaceTrunk#interval_cfg}
  */
  readonly intervalCfg?: InterfaceTrunkBfdIntervalCfg;
  /**
  * per_member_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#per_member_port InterfaceTrunk#per_member_port}
  */
  readonly perMemberPort?: InterfaceTrunkBfdPerMemberPort;
}

export function interfaceTrunkBfdToTerraform(struct?: InterfaceTrunkBfdOutputReference | InterfaceTrunkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    demand: cdktf.numberToTerraform(struct!.demand),
    echo: cdktf.numberToTerraform(struct!.echo),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceTrunkBfdAuthenticationToTerraform(struct!.authentication),
    interval_cfg: interfaceTrunkBfdIntervalCfgToTerraform(struct!.intervalCfg),
    per_member_port: interfaceTrunkBfdPerMemberPortToTerraform(struct!.perMemberPort),
  }
}


export function interfaceTrunkBfdToHclTerraform(struct?: InterfaceTrunkBfdOutputReference | InterfaceTrunkBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    demand: {
      value: cdktf.numberToHclTerraform(struct!.demand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo: {
      value: cdktf.numberToHclTerraform(struct!.echo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: interfaceTrunkBfdAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkBfdAuthenticationList",
    },
    interval_cfg: {
      value: interfaceTrunkBfdIntervalCfgToHclTerraform(struct!.intervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkBfdIntervalCfgList",
    },
    per_member_port: {
      value: interfaceTrunkBfdPerMemberPortToHclTerraform(struct!.perMemberPort),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkBfdPerMemberPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._demand !== undefined) {
      hasAnyValues = true;
      internalValueResult.demand = this._demand;
    }
    if (this._echo !== undefined) {
      hasAnyValues = true;
      internalValueResult.echo = this._echo;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._intervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalCfg = this._intervalCfg?.internalValue;
    }
    if (this._perMemberPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMemberPort = this._perMemberPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._demand = undefined;
      this._echo = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._intervalCfg.internalValue = undefined;
      this._perMemberPort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._demand = value.demand;
      this._echo = value.echo;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._intervalCfg.internalValue = value.intervalCfg;
      this._perMemberPort.internalValue = value.perMemberPort;
    }
  }

  // demand - computed: false, optional: true, required: false
  private _demand?: number; 
  public get demand() {
    return this.getNumberAttribute('demand');
  }
  public set demand(value: number) {
    this._demand = value;
  }
  public resetDemand() {
    this._demand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandInput() {
    return this._demand;
  }

  // echo - computed: false, optional: true, required: false
  private _echo?: number; 
  public get echo() {
    return this.getNumberAttribute('echo');
  }
  public set echo(value: number) {
    this._echo = value;
  }
  public resetEcho() {
    this._echo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoInput() {
    return this._echo;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceTrunkBfdAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceTrunkBfdAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // interval_cfg - computed: false, optional: true, required: false
  private _intervalCfg = new InterfaceTrunkBfdIntervalCfgOutputReference(this, "interval_cfg");
  public get intervalCfg() {
    return this._intervalCfg;
  }
  public putIntervalCfg(value: InterfaceTrunkBfdIntervalCfg) {
    this._intervalCfg.internalValue = value;
  }
  public resetIntervalCfg() {
    this._intervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalCfgInput() {
    return this._intervalCfg.internalValue;
  }

  // per_member_port - computed: false, optional: true, required: false
  private _perMemberPort = new InterfaceTrunkBfdPerMemberPortOutputReference(this, "per_member_port");
  public get perMemberPort() {
    return this._perMemberPort;
  }
  public putPerMemberPort(value: InterfaceTrunkBfdPerMemberPort) {
    this._perMemberPort.internalValue = value;
  }
  public resetPerMemberPort() {
    this._perMemberPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMemberPortInput() {
    return this._perMemberPort.internalValue;
  }
}
export interface InterfaceTrunkDdos {
  /**
  * DDoS inside (trusted) or outside (untrusted) interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inside InterfaceTrunk#inside}
  */
  readonly inside?: number;
  /**
  * DDoS inside (trusted) or outside (untrusted) interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#outside InterfaceTrunk#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkDdosToTerraform(struct?: InterfaceTrunkDdosOutputReference | InterfaceTrunkDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkDdosToHclTerraform(struct?: InterfaceTrunkDdosOutputReference | InterfaceTrunkDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkDdosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkDdos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkDdos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceTrunkIcmpRateLimit {
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#lockup InterfaceTrunk#lockup}
  */
  readonly lockup?: number;
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#lockup_period InterfaceTrunk#lockup_period}
  */
  readonly lockupPeriod?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#normal InterfaceTrunk#normal}
  */
  readonly normal?: number;
}

export function interfaceTrunkIcmpRateLimitToTerraform(struct?: InterfaceTrunkIcmpRateLimitOutputReference | InterfaceTrunkIcmpRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockup: cdktf.numberToTerraform(struct!.lockup),
    lockup_period: cdktf.numberToTerraform(struct!.lockupPeriod),
    normal: cdktf.numberToTerraform(struct!.normal),
  }
}


export function interfaceTrunkIcmpRateLimitToHclTerraform(struct?: InterfaceTrunkIcmpRateLimitOutputReference | InterfaceTrunkIcmpRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockup: {
      value: cdktf.numberToHclTerraform(struct!.lockup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_period: {
      value: cdktf.numberToHclTerraform(struct!.lockupPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    normal: {
      value: cdktf.numberToHclTerraform(struct!.normal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIcmpRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIcmpRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockup = this._lockup;
    }
    if (this._lockupPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupPeriod = this._lockupPeriod;
    }
    if (this._normal !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIcmpRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockup = undefined;
      this._lockupPeriod = undefined;
      this._normal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockup = value.lockup;
      this._lockupPeriod = value.lockupPeriod;
      this._normal = value.normal;
    }
  }

  // lockup - computed: false, optional: true, required: false
  private _lockup?: number; 
  public get lockup() {
    return this.getNumberAttribute('lockup');
  }
  public set lockup(value: number) {
    this._lockup = value;
  }
  public resetLockup() {
    this._lockup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupInput() {
    return this._lockup;
  }

  // lockup_period - computed: false, optional: true, required: false
  private _lockupPeriod?: number; 
  public get lockupPeriod() {
    return this.getNumberAttribute('lockup_period');
  }
  public set lockupPeriod(value: number) {
    this._lockupPeriod = value;
  }
  public resetLockupPeriod() {
    this._lockupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupPeriodInput() {
    return this._lockupPeriod;
  }

  // normal - computed: false, optional: true, required: false
  private _normal?: number; 
  public get normal() {
    return this.getNumberAttribute('normal');
  }
  public set normal(value: number) {
    this._normal = value;
  }
  public resetNormal() {
    this._normal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal;
  }
}
export interface InterfaceTrunkIcmpv6RateLimit {
  /**
  * Lockup period (second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#lockup_period_v6 InterfaceTrunk#lockup_period_v6}
  */
  readonly lockupPeriodV6?: number;
  /**
  * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP packet for a time period)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#lockup_v6 InterfaceTrunk#lockup_v6}
  */
  readonly lockupV6?: number;
  /**
  * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#normal_v6 InterfaceTrunk#normal_v6}
  */
  readonly normalV6?: number;
}

export function interfaceTrunkIcmpv6RateLimitToTerraform(struct?: InterfaceTrunkIcmpv6RateLimitOutputReference | InterfaceTrunkIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockup_period_v6: cdktf.numberToTerraform(struct!.lockupPeriodV6),
    lockup_v6: cdktf.numberToTerraform(struct!.lockupV6),
    normal_v6: cdktf.numberToTerraform(struct!.normalV6),
  }
}


export function interfaceTrunkIcmpv6RateLimitToHclTerraform(struct?: InterfaceTrunkIcmpv6RateLimitOutputReference | InterfaceTrunkIcmpv6RateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockup_period_v6: {
      value: cdktf.numberToHclTerraform(struct!.lockupPeriodV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_v6: {
      value: cdktf.numberToHclTerraform(struct!.lockupV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    normal_v6: {
      value: cdktf.numberToHclTerraform(struct!.normalV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIcmpv6RateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIcmpv6RateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockupPeriodV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupPeriodV6 = this._lockupPeriodV6;
    }
    if (this._lockupV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupV6 = this._lockupV6;
    }
    if (this._normalV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalV6 = this._normalV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIcmpv6RateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockupPeriodV6 = undefined;
      this._lockupV6 = undefined;
      this._normalV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockupPeriodV6 = value.lockupPeriodV6;
      this._lockupV6 = value.lockupV6;
      this._normalV6 = value.normalV6;
    }
  }

  // lockup_period_v6 - computed: false, optional: true, required: false
  private _lockupPeriodV6?: number; 
  public get lockupPeriodV6() {
    return this.getNumberAttribute('lockup_period_v6');
  }
  public set lockupPeriodV6(value: number) {
    this._lockupPeriodV6 = value;
  }
  public resetLockupPeriodV6() {
    this._lockupPeriodV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupPeriodV6Input() {
    return this._lockupPeriodV6;
  }

  // lockup_v6 - computed: false, optional: true, required: false
  private _lockupV6?: number; 
  public get lockupV6() {
    return this.getNumberAttribute('lockup_v6');
  }
  public set lockupV6(value: number) {
    this._lockupV6 = value;
  }
  public resetLockupV6() {
    this._lockupV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupV6Input() {
    return this._lockupV6;
  }

  // normal_v6 - computed: false, optional: true, required: false
  private _normalV6?: number; 
  public get normalV6() {
    return this.getNumberAttribute('normal_v6');
  }
  public set normalV6(value: number) {
    this._normalV6 = value;
  }
  public resetNormalV6() {
    this._normalV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalV6Input() {
    return this._normalV6;
  }
}
export interface InterfaceTrunkIpAddressListStruct {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ipv4_address InterfaceTrunk#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ipv4_netmask InterfaceTrunk#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function interfaceTrunkIpAddressListStructToTerraform(struct?: InterfaceTrunkIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function interfaceTrunkIpAddressListStructToHclTerraform(struct?: InterfaceTrunkIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
    }
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }
}

export class InterfaceTrunkIpAddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpAddressListStructOutputReference {
    return new InterfaceTrunkIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpHelperAddressListStruct {
  /**
  * Helper address for DHCP packets (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#helper_address InterfaceTrunk#helper_address}
  */
  readonly helperAddress?: string;
}

export function interfaceTrunkIpHelperAddressListStructToTerraform(struct?: InterfaceTrunkIpHelperAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    helper_address: cdktf.stringToTerraform(struct!.helperAddress),
  }
}


export function interfaceTrunkIpHelperAddressListStructToHclTerraform(struct?: InterfaceTrunkIpHelperAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    helper_address: {
      value: cdktf.stringToHclTerraform(struct!.helperAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpHelperAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpHelperAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helperAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperAddress = this._helperAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpHelperAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helperAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helperAddress = value.helperAddress;
    }
  }

  // helper_address - computed: false, optional: true, required: false
  private _helperAddress?: string; 
  public get helperAddress() {
    return this.getStringAttribute('helper_address');
  }
  public set helperAddress(value: string) {
    this._helperAddress = value;
  }
  public resetHelperAddress() {
    this._helperAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressInput() {
    return this._helperAddress;
  }
}

export class InterfaceTrunkIpHelperAddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpHelperAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpHelperAddressListStructOutputReference {
    return new InterfaceTrunkIpHelperAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpNat {
  /**
  * Configure interface as inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inside InterfaceTrunk#inside}
  */
  readonly inside?: number;
  /**
  * Configure interface as outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#outside InterfaceTrunk#outside}
  */
  readonly outside?: number;
}

export function interfaceTrunkIpNatToTerraform(struct?: InterfaceTrunkIpNatOutputReference | InterfaceTrunkIpNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
  }
}


export function interfaceTrunkIpNatToHclTerraform(struct?: InterfaceTrunkIpNatOutputReference | InterfaceTrunkIpNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }
}
export interface InterfaceTrunkIpOspfOspfGlobalAuthenticationCfg {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication InterfaceTrunk#authentication}
  */
  readonly authentication?: number;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#value InterfaceTrunk#value}
  */
  readonly value?: string;
}

export function interfaceTrunkIpOspfOspfGlobalAuthenticationCfgToTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceTrunkIpOspfOspfGlobalAuthenticationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function interfaceTrunkIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalAuthenticationCfgOutputReference | InterfaceTrunkIpOspfOspfGlobalAuthenticationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class InterfaceTrunkIpOspfOspfGlobalAuthenticationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpOspfOspfGlobalAuthenticationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfGlobalAuthenticationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication = value.authentication;
      this._value = value.value;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
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
}
export interface InterfaceTrunkIpOspfOspfGlobalBfdCfg {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#bfd InterfaceTrunk#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#disable InterfaceTrunk#disable}
  */
  readonly disable?: number;
}

export function interfaceTrunkIpOspfOspfGlobalBfdCfgToTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalBfdCfgOutputReference | InterfaceTrunkIpOspfOspfGlobalBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceTrunkIpOspfOspfGlobalBfdCfgToHclTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalBfdCfgOutputReference | InterfaceTrunkIpOspfOspfGlobalBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfGlobalBfdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpOspfOspfGlobalBfdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfGlobalBfdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }
}
export interface InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfg {
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#database_filter InterfaceTrunk#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#out InterfaceTrunk#out}
  */
  readonly out?: number;
}

export function interfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    out: cdktf.numberToTerraform(struct!.out),
  }
}


export function interfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgOutputReference | InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseFilter = undefined;
      this._out = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseFilter = value.databaseFilter;
      this._out = value.out;
    }
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }
}
export interface InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5 {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#md5_value InterfaceTrunk#md5_value}
  */
  readonly md5Value?: string;
}

export function interfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
  }
}


export function interfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5OutputReference | InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._md5Value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._md5Value = value.md5Value;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }
}
export interface InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg {
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#message_digest_key InterfaceTrunk#message_digest_key}
  */
  readonly messageDigestKey?: number;
  /**
  * md5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#md5 InterfaceTrunk#md5}
  */
  readonly md5?: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5;
}

export function interfaceTrunkIpOspfOspfGlobalMessageDigestCfgToTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
    md5: interfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5ToTerraform(struct!.md5),
  }
}


export function interfaceTrunkIpOspfOspfGlobalMessageDigestCfgToHclTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5: {
      value: interfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageDigestKey = undefined;
      this._md5.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageDigestKey = value.messageDigestKey;
      this._md5.internalValue = value.md5;
    }
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }
}

export class InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgOutputReference {
    return new InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpOspfOspfGlobalNetwork {
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#broadcast InterfaceTrunk#broadcast}
  */
  readonly broadcast?: number;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#non_broadcast InterfaceTrunk#non_broadcast}
  */
  readonly nonBroadcast?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#p2mp_nbma InterfaceTrunk#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#point_to_multipoint InterfaceTrunk#point_to_multipoint}
  */
  readonly pointToMultipoint?: number;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#point_to_point InterfaceTrunk#point_to_point}
  */
  readonly pointToPoint?: number;
}

export function interfaceTrunkIpOspfOspfGlobalNetworkToTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalNetworkOutputReference | InterfaceTrunkIpOspfOspfGlobalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: cdktf.numberToTerraform(struct!.broadcast),
    non_broadcast: cdktf.numberToTerraform(struct!.nonBroadcast),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
    point_to_multipoint: cdktf.numberToTerraform(struct!.pointToMultipoint),
    point_to_point: cdktf.numberToTerraform(struct!.pointToPoint),
  }
}


export function interfaceTrunkIpOspfOspfGlobalNetworkToHclTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalNetworkOutputReference | InterfaceTrunkIpOspfOspfGlobalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: cdktf.numberToHclTerraform(struct!.broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_broadcast: {
      value: cdktf.numberToHclTerraform(struct!.nonBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_multipoint: {
      value: cdktf.numberToHclTerraform(struct!.pointToMultipoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_point: {
      value: cdktf.numberToHclTerraform(struct!.pointToPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfGlobalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpOspfOspfGlobalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast;
    }
    if (this._nonBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonBroadcast = this._nonBroadcast;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    if (this._pointToMultipoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToMultipoint = this._pointToMultipoint;
    }
    if (this._pointToPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToPoint = this._pointToPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfGlobalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broadcast = undefined;
      this._nonBroadcast = undefined;
      this._p2MpNbma = undefined;
      this._pointToMultipoint = undefined;
      this._pointToPoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broadcast = value.broadcast;
      this._nonBroadcast = value.nonBroadcast;
      this._p2MpNbma = value.p2MpNbma;
      this._pointToMultipoint = value.pointToMultipoint;
      this._pointToPoint = value.pointToPoint;
    }
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: number; 
  public get broadcast() {
    return this.getNumberAttribute('broadcast');
  }
  public set broadcast(value: number) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // non_broadcast - computed: false, optional: true, required: false
  private _nonBroadcast?: number; 
  public get nonBroadcast() {
    return this.getNumberAttribute('non_broadcast');
  }
  public set nonBroadcast(value: number) {
    this._nonBroadcast = value;
  }
  public resetNonBroadcast() {
    this._nonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonBroadcastInput() {
    return this._nonBroadcast;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }

  // point_to_multipoint - computed: false, optional: true, required: false
  private _pointToMultipoint?: number; 
  public get pointToMultipoint() {
    return this.getNumberAttribute('point_to_multipoint');
  }
  public set pointToMultipoint(value: number) {
    this._pointToMultipoint = value;
  }
  public resetPointToMultipoint() {
    this._pointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToMultipointInput() {
    return this._pointToMultipoint;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: number; 
  public get pointToPoint() {
    return this.getNumberAttribute('point_to_point');
  }
  public set pointToPoint(value: number) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }
}
export interface InterfaceTrunkIpOspfOspfGlobal {
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication_key InterfaceTrunk#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#cost InterfaceTrunk#cost}
  */
  readonly cost?: number;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#dead_interval InterfaceTrunk#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * 'all': All functionality;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#disable InterfaceTrunk#disable}
  */
  readonly disable?: string;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval InterfaceTrunk#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPF interface MTU (MTU size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mtu InterfaceTrunk#mtu}
  */
  readonly mtu?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mtu_ignore InterfaceTrunk#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#priority InterfaceTrunk#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#retransmit_interval InterfaceTrunk#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#transmit_delay InterfaceTrunk#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication_cfg InterfaceTrunk#authentication_cfg}
  */
  readonly authenticationCfg?: InterfaceTrunkIpOspfOspfGlobalAuthenticationCfg;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#bfd_cfg InterfaceTrunk#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceTrunkIpOspfOspfGlobalBfdCfg;
  /**
  * database_filter_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#database_filter_cfg InterfaceTrunk#database_filter_cfg}
  */
  readonly databaseFilterCfg?: InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfg;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#message_digest_cfg InterfaceTrunk#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#network InterfaceTrunk#network}
  */
  readonly network?: InterfaceTrunkIpOspfOspfGlobalNetwork;
}

export function interfaceTrunkIpOspfOspfGlobalToTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalOutputReference | InterfaceTrunkIpOspfOspfGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    disable: cdktf.stringToTerraform(struct!.disable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication_cfg: interfaceTrunkIpOspfOspfGlobalAuthenticationCfgToTerraform(struct!.authenticationCfg),
    bfd_cfg: interfaceTrunkIpOspfOspfGlobalBfdCfgToTerraform(struct!.bfdCfg),
    database_filter_cfg: interfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgToTerraform(struct!.databaseFilterCfg),
    message_digest_cfg: cdktf.listMapper(interfaceTrunkIpOspfOspfGlobalMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
    network: interfaceTrunkIpOspfOspfGlobalNetworkToTerraform(struct!.network),
  }
}


export function interfaceTrunkIpOspfOspfGlobalToHclTerraform(struct?: InterfaceTrunkIpOspfOspfGlobalOutputReference | InterfaceTrunkIpOspfOspfGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.stringToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_cfg: {
      value: interfaceTrunkIpOspfOspfGlobalAuthenticationCfgToHclTerraform(struct!.authenticationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfGlobalAuthenticationCfgList",
    },
    bfd_cfg: {
      value: interfaceTrunkIpOspfOspfGlobalBfdCfgToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfGlobalBfdCfgList",
    },
    database_filter_cfg: {
      value: interfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgToHclTerraform(struct!.databaseFilterCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgList",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpOspfOspfGlobalMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgList",
    },
    network: {
      value: interfaceTrunkIpOspfOspfGlobalNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfGlobalNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpOspfOspfGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authenticationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationCfg = this._authenticationCfg?.internalValue;
    }
    if (this._bfdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdCfg = this._bfdCfg?.internalValue;
    }
    if (this._databaseFilterCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilterCfg = this._databaseFilterCfg?.internalValue;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._disable = undefined;
      this._helloInterval = undefined;
      this._mtu = undefined;
      this._mtuIgnore = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._authenticationCfg.internalValue = undefined;
      this._bfdCfg.internalValue = undefined;
      this._databaseFilterCfg.internalValue = undefined;
      this._messageDigestCfg.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._disable = value.disable;
      this._helloInterval = value.helloInterval;
      this._mtu = value.mtu;
      this._mtuIgnore = value.mtuIgnore;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._authenticationCfg.internalValue = value.authenticationCfg;
      this._bfdCfg.internalValue = value.bfdCfg;
      this._databaseFilterCfg.internalValue = value.databaseFilterCfg;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
      this._network.internalValue = value.network;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // authentication_cfg - computed: false, optional: true, required: false
  private _authenticationCfg = new InterfaceTrunkIpOspfOspfGlobalAuthenticationCfgOutputReference(this, "authentication_cfg");
  public get authenticationCfg() {
    return this._authenticationCfg;
  }
  public putAuthenticationCfg(value: InterfaceTrunkIpOspfOspfGlobalAuthenticationCfg) {
    this._authenticationCfg.internalValue = value;
  }
  public resetAuthenticationCfg() {
    this._authenticationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCfgInput() {
    return this._authenticationCfg.internalValue;
  }

  // bfd_cfg - computed: false, optional: true, required: false
  private _bfdCfg = new InterfaceTrunkIpOspfOspfGlobalBfdCfgOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceTrunkIpOspfOspfGlobalBfdCfg) {
    this._bfdCfg.internalValue = value;
  }
  public resetBfdCfg() {
    this._bfdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdCfgInput() {
    return this._bfdCfg.internalValue;
  }

  // database_filter_cfg - computed: false, optional: true, required: false
  private _databaseFilterCfg = new InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfgOutputReference(this, "database_filter_cfg");
  public get databaseFilterCfg() {
    return this._databaseFilterCfg;
  }
  public putDatabaseFilterCfg(value: InterfaceTrunkIpOspfOspfGlobalDatabaseFilterCfg) {
    this._databaseFilterCfg.internalValue = value;
  }
  public resetDatabaseFilterCfg() {
    this._databaseFilterCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterCfgInput() {
    return this._databaseFilterCfg.internalValue;
  }

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceTrunkIpOspfOspfGlobalMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceTrunkIpOspfOspfGlobalMessageDigestCfg[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new InterfaceTrunkIpOspfOspfGlobalNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: InterfaceTrunkIpOspfOspfGlobalNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface InterfaceTrunkIpOspfOspfIpListMessageDigestCfg {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#md5_value InterfaceTrunk#md5_value}
  */
  readonly md5Value?: string;
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#message_digest_key InterfaceTrunk#message_digest_key}
  */
  readonly messageDigestKey?: number;
}

export function interfaceTrunkIpOspfOspfIpListMessageDigestCfgToTerraform(struct?: InterfaceTrunkIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
  }
}


export function interfaceTrunkIpOspfOspfIpListMessageDigestCfgToHclTerraform(struct?: InterfaceTrunkIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfIpListMessageDigestCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfIpListMessageDigestCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5Value = undefined;
      this._messageDigestKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5Value = value.md5Value;
      this._messageDigestKey = value.messageDigestKey;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }
}

export class InterfaceTrunkIpOspfOspfIpListMessageDigestCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpOspfOspfIpListMessageDigestCfgOutputReference {
    return new InterfaceTrunkIpOspfOspfIpListMessageDigestCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpOspfOspfIpListStruct {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication InterfaceTrunk#authentication}
  */
  readonly authentication?: number;
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication_key InterfaceTrunk#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#cost InterfaceTrunk#cost}
  */
  readonly cost?: number;
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#database_filter InterfaceTrunk#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#dead_interval InterfaceTrunk#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval InterfaceTrunk#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Address of interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ip_addr InterfaceTrunk#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mtu_ignore InterfaceTrunk#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#out InterfaceTrunk#out}
  */
  readonly out?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#priority InterfaceTrunk#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#retransmit_interval InterfaceTrunk#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#transmit_delay InterfaceTrunk#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#value InterfaceTrunk#value}
  */
  readonly value?: string;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#message_digest_cfg InterfaceTrunk#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceTrunkIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable;
}

export function interfaceTrunkIpOspfOspfIpListStructToTerraform(struct?: InterfaceTrunkIpOspfOspfIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    out: cdktf.numberToTerraform(struct!.out),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.stringToTerraform(struct!.value),
    message_digest_cfg: cdktf.listMapper(interfaceTrunkIpOspfOspfIpListMessageDigestCfgToTerraform, true)(struct!.messageDigestCfg),
  }
}


export function interfaceTrunkIpOspfOspfIpListStructToHclTerraform(struct?: InterfaceTrunkIpOspfOspfIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
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
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpOspfOspfIpListMessageDigestCfgToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfIpListMessageDigestCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOspfIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpOspfOspfIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspfOspfIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._databaseFilter = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._ipAddr = undefined;
      this._mtuIgnore = undefined;
      this._out = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._messageDigestCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._databaseFilter = value.databaseFilter;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._ipAddr = value.ipAddr;
      this._mtuIgnore = value.mtuIgnore;
      this._out = value.out;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._value = value.value;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceTrunkIpOspfOspfIpListMessageDigestCfgList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceTrunkIpOspfOspfIpListMessageDigestCfg[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }
}

export class InterfaceTrunkIpOspfOspfIpListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpOspfOspfIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpOspfOspfIpListStructOutputReference {
    return new InterfaceTrunkIpOspfOspfIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpOspf {
  /**
  * ospf_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ospf_global InterfaceTrunk#ospf_global}
  */
  readonly ospfGlobal?: InterfaceTrunkIpOspfOspfGlobal;
  /**
  * ospf_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ospf_ip_list InterfaceTrunk#ospf_ip_list}
  */
  readonly ospfIpList?: InterfaceTrunkIpOspfOspfIpListStruct[] | cdktf.IResolvable;
}

export function interfaceTrunkIpOspfToTerraform(struct?: InterfaceTrunkIpOspfOutputReference | InterfaceTrunkIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf_global: interfaceTrunkIpOspfOspfGlobalToTerraform(struct!.ospfGlobal),
    ospf_ip_list: cdktf.listMapper(interfaceTrunkIpOspfOspfIpListStructToTerraform, true)(struct!.ospfIpList),
  }
}


export function interfaceTrunkIpOspfToHclTerraform(struct?: InterfaceTrunkIpOspfOutputReference | InterfaceTrunkIpOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf_global: {
      value: interfaceTrunkIpOspfOspfGlobalToHclTerraform(struct!.ospfGlobal),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfGlobalList",
    },
    ospf_ip_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIpOspfOspfIpListStructToHclTerraform, true)(struct!.ospfIpList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfOspfIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospfGlobal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfGlobal = this._ospfGlobal?.internalValue;
    }
    if (this._ospfIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfIpList = this._ospfIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospfGlobal.internalValue = undefined;
      this._ospfIpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospfGlobal.internalValue = value.ospfGlobal;
      this._ospfIpList.internalValue = value.ospfIpList;
    }
  }

  // ospf_global - computed: false, optional: true, required: false
  private _ospfGlobal = new InterfaceTrunkIpOspfOspfGlobalOutputReference(this, "ospf_global");
  public get ospfGlobal() {
    return this._ospfGlobal;
  }
  public putOspfGlobal(value: InterfaceTrunkIpOspfOspfGlobal) {
    this._ospfGlobal.internalValue = value;
  }
  public resetOspfGlobal() {
    this._ospfGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfGlobalInput() {
    return this._ospfGlobal.internalValue;
  }

  // ospf_ip_list - computed: false, optional: true, required: false
  private _ospfIpList = new InterfaceTrunkIpOspfOspfIpListStructList(this, "ospf_ip_list", false);
  public get ospfIpList() {
    return this._ospfIpList;
  }
  public putOspfIpList(value: InterfaceTrunkIpOspfOspfIpListStruct[] | cdktf.IResolvable) {
    this._ospfIpList.internalValue = value;
  }
  public resetOspfIpList() {
    this._ospfIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfIpListInput() {
    return this._ospfIpList.internalValue;
  }
}
export interface InterfaceTrunkIpRipAuthenticationKeyChain {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#key_chain InterfaceTrunk#key_chain}
  */
  readonly keyChain?: string;
}

export function interfaceTrunkIpRipAuthenticationKeyChainToTerraform(struct?: InterfaceTrunkIpRipAuthenticationKeyChainOutputReference | InterfaceTrunkIpRipAuthenticationKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
  }
}


export function interfaceTrunkIpRipAuthenticationKeyChainToHclTerraform(struct?: InterfaceTrunkIpRipAuthenticationKeyChainOutputReference | InterfaceTrunkIpRipAuthenticationKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: cdktf.stringToHclTerraform(struct!.keyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipAuthenticationKeyChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRipAuthenticationKeyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRipAuthenticationKeyChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain = value.keyChain;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain?: string; 
  public get keyChain() {
    return this.getStringAttribute('key_chain');
  }
  public set keyChain(value: string) {
    this._keyChain = value;
  }
  public resetKeyChain() {
    this._keyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain;
  }
}
export interface InterfaceTrunkIpRipAuthenticationMode {
  /**
  * 'md5': Keyed message digest; 'text': Clear text authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mode InterfaceTrunk#mode}
  */
  readonly mode?: string;
}

export function interfaceTrunkIpRipAuthenticationModeToTerraform(struct?: InterfaceTrunkIpRipAuthenticationModeOutputReference | InterfaceTrunkIpRipAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceTrunkIpRipAuthenticationModeToHclTerraform(struct?: InterfaceTrunkIpRipAuthenticationModeOutputReference | InterfaceTrunkIpRipAuthenticationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipAuthenticationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRipAuthenticationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRipAuthenticationMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface InterfaceTrunkIpRipAuthenticationStr {
  /**
  * The RIP authentication string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#string InterfaceTrunk#string}
  */
  readonly string?: string;
}

export function interfaceTrunkIpRipAuthenticationStrToTerraform(struct?: InterfaceTrunkIpRipAuthenticationStrOutputReference | InterfaceTrunkIpRipAuthenticationStr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function interfaceTrunkIpRipAuthenticationStrToHclTerraform(struct?: InterfaceTrunkIpRipAuthenticationStrOutputReference | InterfaceTrunkIpRipAuthenticationStr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipAuthenticationStrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRipAuthenticationStr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRipAuthenticationStr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._string = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._string = value.string;
    }
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}
export interface InterfaceTrunkIpRipAuthentication {
  /**
  * key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#key_chain InterfaceTrunk#key_chain}
  */
  readonly keyChain?: InterfaceTrunkIpRipAuthenticationKeyChain;
  /**
  * mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mode InterfaceTrunk#mode}
  */
  readonly mode?: InterfaceTrunkIpRipAuthenticationMode;
  /**
  * str block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#str InterfaceTrunk#str}
  */
  readonly str?: InterfaceTrunkIpRipAuthenticationStr;
}

export function interfaceTrunkIpRipAuthenticationToTerraform(struct?: InterfaceTrunkIpRipAuthenticationOutputReference | InterfaceTrunkIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: interfaceTrunkIpRipAuthenticationKeyChainToTerraform(struct!.keyChain),
    mode: interfaceTrunkIpRipAuthenticationModeToTerraform(struct!.mode),
    str: interfaceTrunkIpRipAuthenticationStrToTerraform(struct!.str),
  }
}


export function interfaceTrunkIpRipAuthenticationToHclTerraform(struct?: InterfaceTrunkIpRipAuthenticationOutputReference | InterfaceTrunkIpRipAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: interfaceTrunkIpRipAuthenticationKeyChainToHclTerraform(struct!.keyChain),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipAuthenticationKeyChainList",
    },
    mode: {
      value: interfaceTrunkIpRipAuthenticationModeToHclTerraform(struct!.mode),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipAuthenticationModeList",
    },
    str: {
      value: interfaceTrunkIpRipAuthenticationStrToHclTerraform(struct!.str),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipAuthenticationStrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRipAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain?.internalValue;
    }
    if (this._mode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode?.internalValue;
    }
    if (this._str?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRipAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain.internalValue = undefined;
      this._mode.internalValue = undefined;
      this._str.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain.internalValue = value.keyChain;
      this._mode.internalValue = value.mode;
      this._str.internalValue = value.str;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain = new InterfaceTrunkIpRipAuthenticationKeyChainOutputReference(this, "key_chain");
  public get keyChain() {
    return this._keyChain;
  }
  public putKeyChain(value: InterfaceTrunkIpRipAuthenticationKeyChain) {
    this._keyChain.internalValue = value;
  }
  public resetKeyChain() {
    this._keyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode = new InterfaceTrunkIpRipAuthenticationModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: InterfaceTrunkIpRipAuthenticationMode) {
    this._mode.internalValue = value;
  }
  public resetMode() {
    this._mode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode.internalValue;
  }

  // str - computed: false, optional: true, required: false
  private _str = new InterfaceTrunkIpRipAuthenticationStrOutputReference(this, "str");
  public get str() {
    return this._str;
  }
  public putStr(value: InterfaceTrunkIpRipAuthenticationStr) {
    this._str.internalValue = value;
  }
  public resetStr() {
    this._str.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str.internalValue;
  }
}
export interface InterfaceTrunkIpRipReceiveCfg {
  /**
  * Advertisement reception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#receive InterfaceTrunk#receive}
  */
  readonly receive?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#version InterfaceTrunk#version}
  */
  readonly version?: string;
}

export function interfaceTrunkIpRipReceiveCfgToTerraform(struct?: InterfaceTrunkIpRipReceiveCfgOutputReference | InterfaceTrunkIpRipReceiveCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.numberToTerraform(struct!.receive),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceTrunkIpRipReceiveCfgToHclTerraform(struct?: InterfaceTrunkIpRipReceiveCfgOutputReference | InterfaceTrunkIpRipReceiveCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive: {
      value: cdktf.numberToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipReceiveCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRipReceiveCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRipReceiveCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._version = value.version;
    }
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: number; 
  public get receive() {
    return this.getNumberAttribute('receive');
  }
  public set receive(value: number) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceTrunkIpRipSendCfg {
  /**
  * Advertisement transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#send InterfaceTrunk#send}
  */
  readonly send?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-compatible': RIPv1-compatible; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#version InterfaceTrunk#version}
  */
  readonly version?: string;
}

export function interfaceTrunkIpRipSendCfgToTerraform(struct?: InterfaceTrunkIpRipSendCfgOutputReference | InterfaceTrunkIpRipSendCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send: cdktf.numberToTerraform(struct!.send),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceTrunkIpRipSendCfgToHclTerraform(struct?: InterfaceTrunkIpRipSendCfgOutputReference | InterfaceTrunkIpRipSendCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send: {
      value: cdktf.numberToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipSendCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRipSendCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRipSendCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._send = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._send = value.send;
      this._version = value.version;
    }
  }

  // send - computed: false, optional: true, required: false
  private _send?: number; 
  public get send() {
    return this.getNumberAttribute('send');
  }
  public set send(value: number) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceTrunkIpRipSplitHorizonCfg {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#state InterfaceTrunk#state}
  */
  readonly state?: string;
}

export function interfaceTrunkIpRipSplitHorizonCfgToTerraform(struct?: InterfaceTrunkIpRipSplitHorizonCfgOutputReference | InterfaceTrunkIpRipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceTrunkIpRipSplitHorizonCfgToHclTerraform(struct?: InterfaceTrunkIpRipSplitHorizonCfgOutputReference | InterfaceTrunkIpRipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipSplitHorizonCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRipSplitHorizonCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRipSplitHorizonCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface InterfaceTrunkIpRip {
  /**
  * Enable receiving packet through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#receive_packet InterfaceTrunk#receive_packet}
  */
  readonly receivePacket?: number;
  /**
  * Enable sending packets through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#send_packet InterfaceTrunk#send_packet}
  */
  readonly sendPacket?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication InterfaceTrunk#authentication}
  */
  readonly authentication?: InterfaceTrunkIpRipAuthentication;
  /**
  * receive_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#receive_cfg InterfaceTrunk#receive_cfg}
  */
  readonly receiveCfg?: InterfaceTrunkIpRipReceiveCfg;
  /**
  * send_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#send_cfg InterfaceTrunk#send_cfg}
  */
  readonly sendCfg?: InterfaceTrunkIpRipSendCfg;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#split_horizon_cfg InterfaceTrunk#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceTrunkIpRipSplitHorizonCfg;
}

export function interfaceTrunkIpRipToTerraform(struct?: InterfaceTrunkIpRipOutputReference | InterfaceTrunkIpRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive_packet: cdktf.numberToTerraform(struct!.receivePacket),
    send_packet: cdktf.numberToTerraform(struct!.sendPacket),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceTrunkIpRipAuthenticationToTerraform(struct!.authentication),
    receive_cfg: interfaceTrunkIpRipReceiveCfgToTerraform(struct!.receiveCfg),
    send_cfg: interfaceTrunkIpRipSendCfgToTerraform(struct!.sendCfg),
    split_horizon_cfg: interfaceTrunkIpRipSplitHorizonCfgToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceTrunkIpRipToHclTerraform(struct?: InterfaceTrunkIpRipOutputReference | InterfaceTrunkIpRip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive_packet: {
      value: cdktf.numberToHclTerraform(struct!.receivePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_packet: {
      value: cdktf.numberToHclTerraform(struct!.sendPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: interfaceTrunkIpRipAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipAuthenticationList",
    },
    receive_cfg: {
      value: interfaceTrunkIpRipReceiveCfgToHclTerraform(struct!.receiveCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipReceiveCfgList",
    },
    send_cfg: {
      value: interfaceTrunkIpRipSendCfgToHclTerraform(struct!.sendCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipSendCfgList",
    },
    split_horizon_cfg: {
      value: interfaceTrunkIpRipSplitHorizonCfgToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipSplitHorizonCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receivePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivePacket = this._receivePacket;
    }
    if (this._sendPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPacket = this._sendPacket;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._receiveCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveCfg = this._receiveCfg?.internalValue;
    }
    if (this._sendCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCfg = this._sendCfg?.internalValue;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receivePacket = undefined;
      this._sendPacket = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._receiveCfg.internalValue = undefined;
      this._sendCfg.internalValue = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receivePacket = value.receivePacket;
      this._sendPacket = value.sendPacket;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._receiveCfg.internalValue = value.receiveCfg;
      this._sendCfg.internalValue = value.sendCfg;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
    }
  }

  // receive_packet - computed: false, optional: true, required: false
  private _receivePacket?: number; 
  public get receivePacket() {
    return this.getNumberAttribute('receive_packet');
  }
  public set receivePacket(value: number) {
    this._receivePacket = value;
  }
  public resetReceivePacket() {
    this._receivePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivePacketInput() {
    return this._receivePacket;
  }

  // send_packet - computed: false, optional: true, required: false
  private _sendPacket?: number; 
  public get sendPacket() {
    return this.getNumberAttribute('send_packet');
  }
  public set sendPacket(value: number) {
    this._sendPacket = value;
  }
  public resetSendPacket() {
    this._sendPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPacketInput() {
    return this._sendPacket;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceTrunkIpRipAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceTrunkIpRipAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // receive_cfg - computed: false, optional: true, required: false
  private _receiveCfg = new InterfaceTrunkIpRipReceiveCfgOutputReference(this, "receive_cfg");
  public get receiveCfg() {
    return this._receiveCfg;
  }
  public putReceiveCfg(value: InterfaceTrunkIpRipReceiveCfg) {
    this._receiveCfg.internalValue = value;
  }
  public resetReceiveCfg() {
    this._receiveCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveCfgInput() {
    return this._receiveCfg.internalValue;
  }

  // send_cfg - computed: false, optional: true, required: false
  private _sendCfg = new InterfaceTrunkIpRipSendCfgOutputReference(this, "send_cfg");
  public get sendCfg() {
    return this._sendCfg;
  }
  public putSendCfg(value: InterfaceTrunkIpRipSendCfg) {
    this._sendCfg.internalValue = value;
  }
  public resetSendCfg() {
    this._sendCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCfgInput() {
    return this._sendCfg.internalValue;
  }

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceTrunkIpRipSplitHorizonCfgOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceTrunkIpRipSplitHorizonCfg) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceTrunkIpRouterIsis {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#tag InterfaceTrunk#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkIpRouterIsisToTerraform(struct?: InterfaceTrunkIpRouterIsisOutputReference | InterfaceTrunkIpRouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkIpRouterIsisToHclTerraform(struct?: InterfaceTrunkIpRouterIsisOutputReference | InterfaceTrunkIpRouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRouterIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRouterIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRouterIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
}
export interface InterfaceTrunkIpRouter {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#isis InterfaceTrunk#isis}
  */
  readonly isis?: InterfaceTrunkIpRouterIsis;
}

export function interfaceTrunkIpRouterToTerraform(struct?: InterfaceTrunkIpRouterOutputReference | InterfaceTrunkIpRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceTrunkIpRouterIsisToTerraform(struct!.isis),
  }
}


export function interfaceTrunkIpRouterToHclTerraform(struct?: InterfaceTrunkIpRouterOutputReference | InterfaceTrunkIpRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceTrunkIpRouterIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRouterIsisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceTrunkIpRouterIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceTrunkIpRouterIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }
}
export interface InterfaceTrunkIpStatefulFirewall {
  /**
  * Access-list for traffic from the outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#access_list InterfaceTrunk#access_list}
  */
  readonly accessList?: number;
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#acl_id InterfaceTrunk#acl_id}
  */
  readonly aclId?: number;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#class_list InterfaceTrunk#class_list}
  */
  readonly classList?: string;
  /**
  * Inside (private) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inside InterfaceTrunk#inside}
  */
  readonly inside?: number;
  /**
  * Outside (public) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#outside InterfaceTrunk#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkIpStatefulFirewallToTerraform(struct?: InterfaceTrunkIpStatefulFirewallOutputReference | InterfaceTrunkIpStatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.numberToTerraform(struct!.accessList),
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    class_list: cdktf.stringToTerraform(struct!.classList),
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkIpStatefulFirewallToHclTerraform(struct?: InterfaceTrunkIpStatefulFirewallOutputReference | InterfaceTrunkIpStatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.numberToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpStatefulFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpStatefulFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpStatefulFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessList = undefined;
      this._aclId = undefined;
      this._classList = undefined;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessList = value.accessList;
      this._aclId = value.aclId;
      this._classList = value.classList;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: number; 
  public get accessList() {
    return this.getNumberAttribute('access_list');
  }
  public set accessList(value: number) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceTrunkIp {
  /**
  * Allow traffic to be associated with promiscuous VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#allow_promiscuous_vip InterfaceTrunk#allow_promiscuous_vip}
  */
  readonly allowPromiscuousVip?: number;
  /**
  * This interface connects to spoofing cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#cache_spoofing_port InterfaceTrunk#cache_spoofing_port}
  */
  readonly cacheSpoofingPort?: number;
  /**
  * Client facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#client InterfaceTrunk#client}
  */
  readonly client?: number;
  /**
  * Use DHCP to configure IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#dhcp InterfaceTrunk#dhcp}
  */
  readonly dhcp?: number;
  /**
  * Enable Membership Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#generate_membership_query InterfaceTrunk#generate_membership_query}
  */
  readonly generateMembershipQuery?: number;
  /**
  * Maximum Response Time (Max Response Time (Default is 100))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#max_resp_time InterfaceTrunk#max_resp_time}
  */
  readonly maxRespTime?: number;
  /**
  * 1 - 255 (Default is 125)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#query_interval InterfaceTrunk#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Server facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#server InterfaceTrunk#server}
  */
  readonly server?: number;
  /**
  * Redirect SLB traffic across partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#slb_partition_redirect InterfaceTrunk#slb_partition_redirect}
  */
  readonly slbPartitionRedirect?: number;
  /**
  * Enable SYN-cookie on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#syn_cookie InterfaceTrunk#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Ignore TTL decrement for a received packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ttl_ignore InterfaceTrunk#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * Set the interface as unnumbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#unnumbered InterfaceTrunk#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#address_list InterfaceTrunk#address_list}
  */
  readonly addressList?: InterfaceTrunkIpAddressListStruct[] | cdktf.IResolvable;
  /**
  * helper_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#helper_address_list InterfaceTrunk#helper_address_list}
  */
  readonly helperAddressList?: InterfaceTrunkIpHelperAddressListStruct[] | cdktf.IResolvable;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#nat InterfaceTrunk#nat}
  */
  readonly nat?: InterfaceTrunkIpNat;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ospf InterfaceTrunk#ospf}
  */
  readonly ospf?: InterfaceTrunkIpOspf;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#rip InterfaceTrunk#rip}
  */
  readonly rip?: InterfaceTrunkIpRip;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#router InterfaceTrunk#router}
  */
  readonly router?: InterfaceTrunkIpRouter;
  /**
  * stateful_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#stateful_firewall InterfaceTrunk#stateful_firewall}
  */
  readonly statefulFirewall?: InterfaceTrunkIpStatefulFirewall;
}

export function interfaceTrunkIpToTerraform(struct?: InterfaceTrunkIpOutputReference | InterfaceTrunkIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_promiscuous_vip: cdktf.numberToTerraform(struct!.allowPromiscuousVip),
    cache_spoofing_port: cdktf.numberToTerraform(struct!.cacheSpoofingPort),
    client: cdktf.numberToTerraform(struct!.client),
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    generate_membership_query: cdktf.numberToTerraform(struct!.generateMembershipQuery),
    max_resp_time: cdktf.numberToTerraform(struct!.maxRespTime),
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    server: cdktf.numberToTerraform(struct!.server),
    slb_partition_redirect: cdktf.numberToTerraform(struct!.slbPartitionRedirect),
    syn_cookie: cdktf.numberToTerraform(struct!.synCookie),
    ttl_ignore: cdktf.numberToTerraform(struct!.ttlIgnore),
    unnumbered: cdktf.numberToTerraform(struct!.unnumbered),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    address_list: cdktf.listMapper(interfaceTrunkIpAddressListStructToTerraform, true)(struct!.addressList),
    helper_address_list: cdktf.listMapper(interfaceTrunkIpHelperAddressListStructToTerraform, true)(struct!.helperAddressList),
    nat: interfaceTrunkIpNatToTerraform(struct!.nat),
    ospf: interfaceTrunkIpOspfToTerraform(struct!.ospf),
    rip: interfaceTrunkIpRipToTerraform(struct!.rip),
    router: interfaceTrunkIpRouterToTerraform(struct!.router),
    stateful_firewall: interfaceTrunkIpStatefulFirewallToTerraform(struct!.statefulFirewall),
  }
}


export function interfaceTrunkIpToHclTerraform(struct?: InterfaceTrunkIpOutputReference | InterfaceTrunkIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_promiscuous_vip: {
      value: cdktf.numberToHclTerraform(struct!.allowPromiscuousVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_spoofing_port: {
      value: cdktf.numberToHclTerraform(struct!.cacheSpoofingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client: {
      value: cdktf.numberToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generate_membership_query: {
      value: cdktf.numberToHclTerraform(struct!.generateMembershipQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_resp_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRespTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_interval: {
      value: cdktf.numberToHclTerraform(struct!.queryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.numberToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_partition_redirect: {
      value: cdktf.numberToHclTerraform(struct!.slbPartitionRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie: {
      value: cdktf.numberToHclTerraform(struct!.synCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_ignore: {
      value: cdktf.numberToHclTerraform(struct!.ttlIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unnumbered: {
      value: cdktf.numberToHclTerraform(struct!.unnumbered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIpAddressListStructToHclTerraform, true)(struct!.addressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpAddressListStructList",
    },
    helper_address_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIpHelperAddressListStructToHclTerraform, true)(struct!.helperAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpHelperAddressListStructList",
    },
    nat: {
      value: interfaceTrunkIpNatToHclTerraform(struct!.nat),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpNatList",
    },
    ospf: {
      value: interfaceTrunkIpOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpOspfList",
    },
    rip: {
      value: interfaceTrunkIpRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRipList",
    },
    router: {
      value: interfaceTrunkIpRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpRouterList",
    },
    stateful_firewall: {
      value: interfaceTrunkIpStatefulFirewallToHclTerraform(struct!.statefulFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpStatefulFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPromiscuousVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPromiscuousVip = this._allowPromiscuousVip;
    }
    if (this._cacheSpoofingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSpoofingPort = this._cacheSpoofingPort;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._generateMembershipQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMembershipQuery = this._generateMembershipQuery;
    }
    if (this._maxRespTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRespTime = this._maxRespTime;
    }
    if (this._queryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInterval = this._queryInterval;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._slbPartitionRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbPartitionRedirect = this._slbPartitionRedirect;
    }
    if (this._synCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookie = this._synCookie;
    }
    if (this._ttlIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlIgnore = this._ttlIgnore;
    }
    if (this._unnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumbered = this._unnumbered;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._addressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressList = this._addressList?.internalValue;
    }
    if (this._helperAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperAddressList = this._helperAddressList?.internalValue;
    }
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._statefulFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulFirewall = this._statefulFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPromiscuousVip = undefined;
      this._cacheSpoofingPort = undefined;
      this._client = undefined;
      this._dhcp = undefined;
      this._generateMembershipQuery = undefined;
      this._maxRespTime = undefined;
      this._queryInterval = undefined;
      this._server = undefined;
      this._slbPartitionRedirect = undefined;
      this._synCookie = undefined;
      this._ttlIgnore = undefined;
      this._unnumbered = undefined;
      this._uuid = undefined;
      this._addressList.internalValue = undefined;
      this._helperAddressList.internalValue = undefined;
      this._nat.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._router.internalValue = undefined;
      this._statefulFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPromiscuousVip = value.allowPromiscuousVip;
      this._cacheSpoofingPort = value.cacheSpoofingPort;
      this._client = value.client;
      this._dhcp = value.dhcp;
      this._generateMembershipQuery = value.generateMembershipQuery;
      this._maxRespTime = value.maxRespTime;
      this._queryInterval = value.queryInterval;
      this._server = value.server;
      this._slbPartitionRedirect = value.slbPartitionRedirect;
      this._synCookie = value.synCookie;
      this._ttlIgnore = value.ttlIgnore;
      this._unnumbered = value.unnumbered;
      this._uuid = value.uuid;
      this._addressList.internalValue = value.addressList;
      this._helperAddressList.internalValue = value.helperAddressList;
      this._nat.internalValue = value.nat;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._router.internalValue = value.router;
      this._statefulFirewall.internalValue = value.statefulFirewall;
    }
  }

  // allow_promiscuous_vip - computed: false, optional: true, required: false
  private _allowPromiscuousVip?: number; 
  public get allowPromiscuousVip() {
    return this.getNumberAttribute('allow_promiscuous_vip');
  }
  public set allowPromiscuousVip(value: number) {
    this._allowPromiscuousVip = value;
  }
  public resetAllowPromiscuousVip() {
    this._allowPromiscuousVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPromiscuousVipInput() {
    return this._allowPromiscuousVip;
  }

  // cache_spoofing_port - computed: false, optional: true, required: false
  private _cacheSpoofingPort?: number; 
  public get cacheSpoofingPort() {
    return this.getNumberAttribute('cache_spoofing_port');
  }
  public set cacheSpoofingPort(value: number) {
    this._cacheSpoofingPort = value;
  }
  public resetCacheSpoofingPort() {
    this._cacheSpoofingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSpoofingPortInput() {
    return this._cacheSpoofingPort;
  }

  // client - computed: false, optional: true, required: false
  private _client?: number; 
  public get client() {
    return this.getNumberAttribute('client');
  }
  public set client(value: number) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // generate_membership_query - computed: false, optional: true, required: false
  private _generateMembershipQuery?: number; 
  public get generateMembershipQuery() {
    return this.getNumberAttribute('generate_membership_query');
  }
  public set generateMembershipQuery(value: number) {
    this._generateMembershipQuery = value;
  }
  public resetGenerateMembershipQuery() {
    this._generateMembershipQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMembershipQueryInput() {
    return this._generateMembershipQuery;
  }

  // max_resp_time - computed: false, optional: true, required: false
  private _maxRespTime?: number; 
  public get maxRespTime() {
    return this.getNumberAttribute('max_resp_time');
  }
  public set maxRespTime(value: number) {
    this._maxRespTime = value;
  }
  public resetMaxRespTime() {
    this._maxRespTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRespTimeInput() {
    return this._maxRespTime;
  }

  // query_interval - computed: false, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // slb_partition_redirect - computed: false, optional: true, required: false
  private _slbPartitionRedirect?: number; 
  public get slbPartitionRedirect() {
    return this.getNumberAttribute('slb_partition_redirect');
  }
  public set slbPartitionRedirect(value: number) {
    this._slbPartitionRedirect = value;
  }
  public resetSlbPartitionRedirect() {
    this._slbPartitionRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbPartitionRedirectInput() {
    return this._slbPartitionRedirect;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceTrunkIpAddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceTrunkIpAddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // helper_address_list - computed: false, optional: true, required: false
  private _helperAddressList = new InterfaceTrunkIpHelperAddressListStructList(this, "helper_address_list", false);
  public get helperAddressList() {
    return this._helperAddressList;
  }
  public putHelperAddressList(value: InterfaceTrunkIpHelperAddressListStruct[] | cdktf.IResolvable) {
    this._helperAddressList.internalValue = value;
  }
  public resetHelperAddressList() {
    this._helperAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressListInput() {
    return this._helperAddressList.internalValue;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new InterfaceTrunkIpNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: InterfaceTrunkIpNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceTrunkIpOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceTrunkIpOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceTrunkIpRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceTrunkIpRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceTrunkIpRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceTrunkIpRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // stateful_firewall - computed: false, optional: true, required: false
  private _statefulFirewall = new InterfaceTrunkIpStatefulFirewallOutputReference(this, "stateful_firewall");
  public get statefulFirewall() {
    return this._statefulFirewall;
  }
  public putStatefulFirewall(value: InterfaceTrunkIpStatefulFirewall) {
    this._statefulFirewall.internalValue = value;
  }
  public resetStatefulFirewall() {
    this._statefulFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulFirewallInput() {
    return this._statefulFirewall.internalValue;
  }
}
export interface InterfaceTrunkIpv6AccessListCfg {
  /**
  * ACL applied on incoming packets to this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inbound InterfaceTrunk#inbound}
  */
  readonly inbound?: number;
  /**
  * Apply ACL rules to incoming packets on this interface (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#v6_acl_name InterfaceTrunk#v6_acl_name}
  */
  readonly v6AclName?: string;
}

export function interfaceTrunkIpv6AccessListCfgToTerraform(struct?: InterfaceTrunkIpv6AccessListCfgOutputReference | InterfaceTrunkIpv6AccessListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.numberToTerraform(struct!.inbound),
    v6_acl_name: cdktf.stringToTerraform(struct!.v6AclName),
  }
}


export function interfaceTrunkIpv6AccessListCfgToHclTerraform(struct?: InterfaceTrunkIpv6AccessListCfgOutputReference | InterfaceTrunkIpv6AccessListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_acl_name: {
      value: cdktf.stringToHclTerraform(struct!.v6AclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6AccessListCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6AccessListCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._v6AclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6AclName = this._v6AclName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6AccessListCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inbound = undefined;
      this._v6AclName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inbound = value.inbound;
      this._v6AclName = value.v6AclName;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // v6_acl_name - computed: false, optional: true, required: false
  private _v6AclName?: string; 
  public get v6AclName() {
    return this.getStringAttribute('v6_acl_name');
  }
  public set v6AclName(value: string) {
    this._v6AclName = value;
  }
  public resetV6AclName() {
    this._v6AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AclNameInput() {
    return this._v6AclName;
  }
}
export interface InterfaceTrunkIpv6AddressListStruct {
  /**
  * 'anycast': Configure an IPv6 anycast address; 'link-local': Configure an IPv6 link local address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#address_type InterfaceTrunk#address_type}
  */
  readonly addressType?: string;
  /**
  * Set the IPv6 address of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ipv6_addr InterfaceTrunk#ipv6_addr}
  */
  readonly ipv6Addr?: string;
}

export function interfaceTrunkIpv6AddressListStructToTerraform(struct?: InterfaceTrunkIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function interfaceTrunkIpv6AddressListStructToHclTerraform(struct?: InterfaceTrunkIpv6AddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6AddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6AddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6AddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._ipv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }
}

export class InterfaceTrunkIpv6AddressListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6AddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6AddressListStructOutputReference {
    return new InterfaceTrunkIpv6AddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6Nat {
  /**
  * Configure interface as NAT inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inside InterfaceTrunk#inside}
  */
  readonly inside?: number;
  /**
  * Configure interface as NAT outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#outside InterfaceTrunk#outside}
  */
  readonly outside?: number;
}

export function interfaceTrunkIpv6NatToTerraform(struct?: InterfaceTrunkIpv6NatOutputReference | InterfaceTrunkIpv6Nat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
  }
}


export function interfaceTrunkIpv6NatToHclTerraform(struct?: InterfaceTrunkIpv6NatOutputReference | InterfaceTrunkIpv6Nat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6NatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6Nat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6Nat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }
}
export interface InterfaceTrunkIpv6OspfCostCfg {
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#cost InterfaceTrunk#cost}
  */
  readonly cost?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceTrunkIpv6OspfCostCfgToTerraform(struct?: InterfaceTrunkIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceTrunkIpv6OspfCostCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfCostCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfCostCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfCostCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfCostCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._instanceId = value.instanceId;
    }
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceTrunkIpv6OspfCostCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfCostCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfCostCfgOutputReference {
    return new InterfaceTrunkIpv6OspfCostCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfDeadIntervalCfg {
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#dead_interval InterfaceTrunk#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceTrunkIpv6OspfDeadIntervalCfgToTerraform(struct?: InterfaceTrunkIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceTrunkIpv6OspfDeadIntervalCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfDeadIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfDeadIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfDeadIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadInterval = value.deadInterval;
      this._instanceId = value.instanceId;
    }
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceTrunkIpv6OspfDeadIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfDeadIntervalCfgOutputReference {
    return new InterfaceTrunkIpv6OspfDeadIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfHelloIntervalCfg {
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval InterfaceTrunk#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceTrunkIpv6OspfHelloIntervalCfgToTerraform(struct?: InterfaceTrunkIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceTrunkIpv6OspfHelloIntervalCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfHelloIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfHelloIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfHelloIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
    }
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceTrunkIpv6OspfHelloIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfHelloIntervalCfgOutputReference {
    return new InterfaceTrunkIpv6OspfHelloIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfMtuIgnoreCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mtu_ignore InterfaceTrunk#mtu_ignore}
  */
  readonly mtuIgnore?: number;
}

export function interfaceTrunkIpv6OspfMtuIgnoreCfgToTerraform(struct?: InterfaceTrunkIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
  }
}


export function interfaceTrunkIpv6OspfMtuIgnoreCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfMtuIgnoreCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfMtuIgnoreCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfMtuIgnoreCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._mtuIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._mtuIgnore = value.mtuIgnore;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }
}

export class InterfaceTrunkIpv6OspfMtuIgnoreCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfMtuIgnoreCfgOutputReference {
    return new InterfaceTrunkIpv6OspfMtuIgnoreCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfNeighborCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#neig_inst InterfaceTrunk#neig_inst}
  */
  readonly neigInst?: number;
  /**
  * OSPFv3 neighbor (Neighbor IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#neighbor InterfaceTrunk#neighbor}
  */
  readonly neighbor?: string;
  /**
  * OSPF cost for point-to-multipoint neighbor (metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#neighbor_cost InterfaceTrunk#neighbor_cost}
  */
  readonly neighborCost?: number;
  /**
  * OSPF dead-router polling interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#neighbor_poll_interval InterfaceTrunk#neighbor_poll_interval}
  */
  readonly neighborPollInterval?: number;
  /**
  * OSPF priority of non-broadcast neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#neighbor_priority InterfaceTrunk#neighbor_priority}
  */
  readonly neighborPriority?: number;
}

export function interfaceTrunkIpv6OspfNeighborCfgToTerraform(struct?: InterfaceTrunkIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neig_inst: cdktf.numberToTerraform(struct!.neigInst),
    neighbor: cdktf.stringToTerraform(struct!.neighbor),
    neighbor_cost: cdktf.numberToTerraform(struct!.neighborCost),
    neighbor_poll_interval: cdktf.numberToTerraform(struct!.neighborPollInterval),
    neighbor_priority: cdktf.numberToTerraform(struct!.neighborPriority),
  }
}


export function interfaceTrunkIpv6OspfNeighborCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfNeighborCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neig_inst: {
      value: cdktf.numberToHclTerraform(struct!.neigInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor: {
      value: cdktf.stringToHclTerraform(struct!.neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_cost: {
      value: cdktf.numberToHclTerraform(struct!.neighborCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.neighborPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_priority: {
      value: cdktf.numberToHclTerraform(struct!.neighborPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfNeighborCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfNeighborCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neigInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.neigInst = this._neigInst;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._neighborCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCost = this._neighborCost;
    }
    if (this._neighborPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPollInterval = this._neighborPollInterval;
    }
    if (this._neighborPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPriority = this._neighborPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfNeighborCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neigInst = undefined;
      this._neighbor = undefined;
      this._neighborCost = undefined;
      this._neighborPollInterval = undefined;
      this._neighborPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neigInst = value.neigInst;
      this._neighbor = value.neighbor;
      this._neighborCost = value.neighborCost;
      this._neighborPollInterval = value.neighborPollInterval;
      this._neighborPriority = value.neighborPriority;
    }
  }

  // neig_inst - computed: false, optional: true, required: false
  private _neigInst?: number; 
  public get neigInst() {
    return this.getNumberAttribute('neig_inst');
  }
  public set neigInst(value: number) {
    this._neigInst = value;
  }
  public resetNeigInst() {
    this._neigInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neigInstInput() {
    return this._neigInst;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // neighbor_cost - computed: false, optional: true, required: false
  private _neighborCost?: number; 
  public get neighborCost() {
    return this.getNumberAttribute('neighbor_cost');
  }
  public set neighborCost(value: number) {
    this._neighborCost = value;
  }
  public resetNeighborCost() {
    this._neighborCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCostInput() {
    return this._neighborCost;
  }

  // neighbor_poll_interval - computed: false, optional: true, required: false
  private _neighborPollInterval?: number; 
  public get neighborPollInterval() {
    return this.getNumberAttribute('neighbor_poll_interval');
  }
  public set neighborPollInterval(value: number) {
    this._neighborPollInterval = value;
  }
  public resetNeighborPollInterval() {
    this._neighborPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPollIntervalInput() {
    return this._neighborPollInterval;
  }

  // neighbor_priority - computed: false, optional: true, required: false
  private _neighborPriority?: number; 
  public get neighborPriority() {
    return this.getNumberAttribute('neighbor_priority');
  }
  public set neighborPriority(value: number) {
    this._neighborPriority = value;
  }
  public resetNeighborPriority() {
    this._neighborPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPriorityInput() {
    return this._neighborPriority;
  }
}

export class InterfaceTrunkIpv6OspfNeighborCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfNeighborCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfNeighborCfgOutputReference {
    return new InterfaceTrunkIpv6OspfNeighborCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfNetworkListStruct {
  /**
  * 'broadcast': Specify OSPF broadcast multi-access network; 'non-broadcast': Specify OSPF NBMA network; 'point-to-point': Specify OSPF point-to-point network; 'point-to-multipoint': Specify OSPF point-to-multipoint network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#broadcast_type InterfaceTrunk#broadcast_type}
  */
  readonly broadcastType?: string;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#network_instance_id InterfaceTrunk#network_instance_id}
  */
  readonly networkInstanceId?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#p2mp_nbma InterfaceTrunk#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
}

export function interfaceTrunkIpv6OspfNetworkListStructToTerraform(struct?: InterfaceTrunkIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_type: cdktf.stringToTerraform(struct!.broadcastType),
    network_instance_id: cdktf.numberToTerraform(struct!.networkInstanceId),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
  }
}


export function interfaceTrunkIpv6OspfNetworkListStructToHclTerraform(struct?: InterfaceTrunkIpv6OspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_type: {
      value: cdktf.stringToHclTerraform(struct!.broadcastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.networkInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfNetworkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastType = this._broadcastType;
    }
    if (this._networkInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInstanceId = this._networkInstanceId;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfNetworkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastType = undefined;
      this._networkInstanceId = undefined;
      this._p2MpNbma = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastType = value.broadcastType;
      this._networkInstanceId = value.networkInstanceId;
      this._p2MpNbma = value.p2MpNbma;
    }
  }

  // broadcast_type - computed: false, optional: true, required: false
  private _broadcastType?: string; 
  public get broadcastType() {
    return this.getStringAttribute('broadcast_type');
  }
  public set broadcastType(value: string) {
    this._broadcastType = value;
  }
  public resetBroadcastType() {
    this._broadcastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastTypeInput() {
    return this._broadcastType;
  }

  // network_instance_id - computed: false, optional: true, required: false
  private _networkInstanceId?: number; 
  public get networkInstanceId() {
    return this.getNumberAttribute('network_instance_id');
  }
  public set networkInstanceId(value: number) {
    this._networkInstanceId = value;
  }
  public resetNetworkInstanceId() {
    this._networkInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstanceIdInput() {
    return this._networkInstanceId;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }
}

export class InterfaceTrunkIpv6OspfNetworkListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfNetworkListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfNetworkListStructOutputReference {
    return new InterfaceTrunkIpv6OspfNetworkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfPriorityCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#priority InterfaceTrunk#priority}
  */
  readonly priority?: number;
}

export function interfaceTrunkIpv6OspfPriorityCfgToTerraform(struct?: InterfaceTrunkIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceTrunkIpv6OspfPriorityCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfPriorityCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfPriorityCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfPriorityCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfPriorityCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._priority = value.priority;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class InterfaceTrunkIpv6OspfPriorityCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfPriorityCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfPriorityCfgOutputReference {
    return new InterfaceTrunkIpv6OspfPriorityCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfRetransmitIntervalCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#retransmit_interval InterfaceTrunk#retransmit_interval}
  */
  readonly retransmitInterval?: number;
}

export function interfaceTrunkIpv6OspfRetransmitIntervalCfgToTerraform(struct?: InterfaceTrunkIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
  }
}


export function interfaceTrunkIpv6OspfRetransmitIntervalCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfRetransmitIntervalCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfRetransmitIntervalCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._retransmitInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._retransmitInterval = value.retransmitInterval;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }
}

export class InterfaceTrunkIpv6OspfRetransmitIntervalCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfRetransmitIntervalCfgOutputReference {
    return new InterfaceTrunkIpv6OspfRetransmitIntervalCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6OspfTransmitDelayCfg {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#transmit_delay InterfaceTrunk#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function interfaceTrunkIpv6OspfTransmitDelayCfgToTerraform(struct?: InterfaceTrunkIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function interfaceTrunkIpv6OspfTransmitDelayCfgToHclTerraform(struct?: InterfaceTrunkIpv6OspfTransmitDelayCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfTransmitDelayCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6OspfTransmitDelayCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }
}

export class InterfaceTrunkIpv6OspfTransmitDelayCfgList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6OspfTransmitDelayCfgOutputReference {
    return new InterfaceTrunkIpv6OspfTransmitDelayCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6Ospf {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#bfd InterfaceTrunk#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#disable InterfaceTrunk#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * cost_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#cost_cfg InterfaceTrunk#cost_cfg}
  */
  readonly costCfg?: InterfaceTrunkIpv6OspfCostCfg[] | cdktf.IResolvable;
  /**
  * dead_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#dead_interval_cfg InterfaceTrunk#dead_interval_cfg}
  */
  readonly deadIntervalCfg?: InterfaceTrunkIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable;
  /**
  * hello_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval_cfg InterfaceTrunk#hello_interval_cfg}
  */
  readonly helloIntervalCfg?: InterfaceTrunkIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable;
  /**
  * mtu_ignore_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mtu_ignore_cfg InterfaceTrunk#mtu_ignore_cfg}
  */
  readonly mtuIgnoreCfg?: InterfaceTrunkIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable;
  /**
  * neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#neighbor_cfg InterfaceTrunk#neighbor_cfg}
  */
  readonly neighborCfg?: InterfaceTrunkIpv6OspfNeighborCfg[] | cdktf.IResolvable;
  /**
  * network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#network_list InterfaceTrunk#network_list}
  */
  readonly networkList?: InterfaceTrunkIpv6OspfNetworkListStruct[] | cdktf.IResolvable;
  /**
  * priority_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#priority_cfg InterfaceTrunk#priority_cfg}
  */
  readonly priorityCfg?: InterfaceTrunkIpv6OspfPriorityCfg[] | cdktf.IResolvable;
  /**
  * retransmit_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#retransmit_interval_cfg InterfaceTrunk#retransmit_interval_cfg}
  */
  readonly retransmitIntervalCfg?: InterfaceTrunkIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable;
  /**
  * transmit_delay_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#transmit_delay_cfg InterfaceTrunk#transmit_delay_cfg}
  */
  readonly transmitDelayCfg?: InterfaceTrunkIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable;
}

export function interfaceTrunkIpv6OspfToTerraform(struct?: InterfaceTrunkIpv6OspfOutputReference | InterfaceTrunkIpv6Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cost_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfCostCfgToTerraform, true)(struct!.costCfg),
    dead_interval_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfDeadIntervalCfgToTerraform, true)(struct!.deadIntervalCfg),
    hello_interval_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfHelloIntervalCfgToTerraform, true)(struct!.helloIntervalCfg),
    mtu_ignore_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfMtuIgnoreCfgToTerraform, true)(struct!.mtuIgnoreCfg),
    neighbor_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfNeighborCfgToTerraform, true)(struct!.neighborCfg),
    network_list: cdktf.listMapper(interfaceTrunkIpv6OspfNetworkListStructToTerraform, true)(struct!.networkList),
    priority_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfPriorityCfgToTerraform, true)(struct!.priorityCfg),
    retransmit_interval_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfRetransmitIntervalCfgToTerraform, true)(struct!.retransmitIntervalCfg),
    transmit_delay_cfg: cdktf.listMapper(interfaceTrunkIpv6OspfTransmitDelayCfgToTerraform, true)(struct!.transmitDelayCfg),
  }
}


export function interfaceTrunkIpv6OspfToHclTerraform(struct?: InterfaceTrunkIpv6OspfOutputReference | InterfaceTrunkIpv6Ospf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfCostCfgToHclTerraform, true)(struct!.costCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfCostCfgList",
    },
    dead_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfDeadIntervalCfgToHclTerraform, true)(struct!.deadIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfDeadIntervalCfgList",
    },
    hello_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfHelloIntervalCfgToHclTerraform, true)(struct!.helloIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfHelloIntervalCfgList",
    },
    mtu_ignore_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfMtuIgnoreCfgToHclTerraform, true)(struct!.mtuIgnoreCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfMtuIgnoreCfgList",
    },
    neighbor_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfNeighborCfgToHclTerraform, true)(struct!.neighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfNeighborCfgList",
    },
    network_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfNetworkListStructToHclTerraform, true)(struct!.networkList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfNetworkListStructList",
    },
    priority_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfPriorityCfgToHclTerraform, true)(struct!.priorityCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfPriorityCfgList",
    },
    retransmit_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfRetransmitIntervalCfgToHclTerraform, true)(struct!.retransmitIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfRetransmitIntervalCfgList",
    },
    transmit_delay_cfg: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6OspfTransmitDelayCfgToHclTerraform, true)(struct!.transmitDelayCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfTransmitDelayCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6Ospf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._costCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCfg = this._costCfg?.internalValue;
    }
    if (this._deadIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadIntervalCfg = this._deadIntervalCfg?.internalValue;
    }
    if (this._helloIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalCfg = this._helloIntervalCfg?.internalValue;
    }
    if (this._mtuIgnoreCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnoreCfg = this._mtuIgnoreCfg?.internalValue;
    }
    if (this._neighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCfg = this._neighborCfg?.internalValue;
    }
    if (this._networkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkList = this._networkList?.internalValue;
    }
    if (this._priorityCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCfg = this._priorityCfg?.internalValue;
    }
    if (this._retransmitIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitIntervalCfg = this._retransmitIntervalCfg?.internalValue;
    }
    if (this._transmitDelayCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelayCfg = this._transmitDelayCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6Ospf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
      this._uuid = undefined;
      this._costCfg.internalValue = undefined;
      this._deadIntervalCfg.internalValue = undefined;
      this._helloIntervalCfg.internalValue = undefined;
      this._mtuIgnoreCfg.internalValue = undefined;
      this._neighborCfg.internalValue = undefined;
      this._networkList.internalValue = undefined;
      this._priorityCfg.internalValue = undefined;
      this._retransmitIntervalCfg.internalValue = undefined;
      this._transmitDelayCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
      this._uuid = value.uuid;
      this._costCfg.internalValue = value.costCfg;
      this._deadIntervalCfg.internalValue = value.deadIntervalCfg;
      this._helloIntervalCfg.internalValue = value.helloIntervalCfg;
      this._mtuIgnoreCfg.internalValue = value.mtuIgnoreCfg;
      this._neighborCfg.internalValue = value.neighborCfg;
      this._networkList.internalValue = value.networkList;
      this._priorityCfg.internalValue = value.priorityCfg;
      this._retransmitIntervalCfg.internalValue = value.retransmitIntervalCfg;
      this._transmitDelayCfg.internalValue = value.transmitDelayCfg;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // cost_cfg - computed: false, optional: true, required: false
  private _costCfg = new InterfaceTrunkIpv6OspfCostCfgList(this, "cost_cfg", false);
  public get costCfg() {
    return this._costCfg;
  }
  public putCostCfg(value: InterfaceTrunkIpv6OspfCostCfg[] | cdktf.IResolvable) {
    this._costCfg.internalValue = value;
  }
  public resetCostCfg() {
    this._costCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCfgInput() {
    return this._costCfg.internalValue;
  }

  // dead_interval_cfg - computed: false, optional: true, required: false
  private _deadIntervalCfg = new InterfaceTrunkIpv6OspfDeadIntervalCfgList(this, "dead_interval_cfg", false);
  public get deadIntervalCfg() {
    return this._deadIntervalCfg;
  }
  public putDeadIntervalCfg(value: InterfaceTrunkIpv6OspfDeadIntervalCfg[] | cdktf.IResolvable) {
    this._deadIntervalCfg.internalValue = value;
  }
  public resetDeadIntervalCfg() {
    this._deadIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalCfgInput() {
    return this._deadIntervalCfg.internalValue;
  }

  // hello_interval_cfg - computed: false, optional: true, required: false
  private _helloIntervalCfg = new InterfaceTrunkIpv6OspfHelloIntervalCfgList(this, "hello_interval_cfg", false);
  public get helloIntervalCfg() {
    return this._helloIntervalCfg;
  }
  public putHelloIntervalCfg(value: InterfaceTrunkIpv6OspfHelloIntervalCfg[] | cdktf.IResolvable) {
    this._helloIntervalCfg.internalValue = value;
  }
  public resetHelloIntervalCfg() {
    this._helloIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalCfgInput() {
    return this._helloIntervalCfg.internalValue;
  }

  // mtu_ignore_cfg - computed: false, optional: true, required: false
  private _mtuIgnoreCfg = new InterfaceTrunkIpv6OspfMtuIgnoreCfgList(this, "mtu_ignore_cfg", false);
  public get mtuIgnoreCfg() {
    return this._mtuIgnoreCfg;
  }
  public putMtuIgnoreCfg(value: InterfaceTrunkIpv6OspfMtuIgnoreCfg[] | cdktf.IResolvable) {
    this._mtuIgnoreCfg.internalValue = value;
  }
  public resetMtuIgnoreCfg() {
    this._mtuIgnoreCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreCfgInput() {
    return this._mtuIgnoreCfg.internalValue;
  }

  // neighbor_cfg - computed: false, optional: true, required: false
  private _neighborCfg = new InterfaceTrunkIpv6OspfNeighborCfgList(this, "neighbor_cfg", false);
  public get neighborCfg() {
    return this._neighborCfg;
  }
  public putNeighborCfg(value: InterfaceTrunkIpv6OspfNeighborCfg[] | cdktf.IResolvable) {
    this._neighborCfg.internalValue = value;
  }
  public resetNeighborCfg() {
    this._neighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCfgInput() {
    return this._neighborCfg.internalValue;
  }

  // network_list - computed: false, optional: true, required: false
  private _networkList = new InterfaceTrunkIpv6OspfNetworkListStructList(this, "network_list", false);
  public get networkList() {
    return this._networkList;
  }
  public putNetworkList(value: InterfaceTrunkIpv6OspfNetworkListStruct[] | cdktf.IResolvable) {
    this._networkList.internalValue = value;
  }
  public resetNetworkList() {
    this._networkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListInput() {
    return this._networkList.internalValue;
  }

  // priority_cfg - computed: false, optional: true, required: false
  private _priorityCfg = new InterfaceTrunkIpv6OspfPriorityCfgList(this, "priority_cfg", false);
  public get priorityCfg() {
    return this._priorityCfg;
  }
  public putPriorityCfg(value: InterfaceTrunkIpv6OspfPriorityCfg[] | cdktf.IResolvable) {
    this._priorityCfg.internalValue = value;
  }
  public resetPriorityCfg() {
    this._priorityCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCfgInput() {
    return this._priorityCfg.internalValue;
  }

  // retransmit_interval_cfg - computed: false, optional: true, required: false
  private _retransmitIntervalCfg = new InterfaceTrunkIpv6OspfRetransmitIntervalCfgList(this, "retransmit_interval_cfg", false);
  public get retransmitIntervalCfg() {
    return this._retransmitIntervalCfg;
  }
  public putRetransmitIntervalCfg(value: InterfaceTrunkIpv6OspfRetransmitIntervalCfg[] | cdktf.IResolvable) {
    this._retransmitIntervalCfg.internalValue = value;
  }
  public resetRetransmitIntervalCfg() {
    this._retransmitIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalCfgInput() {
    return this._retransmitIntervalCfg.internalValue;
  }

  // transmit_delay_cfg - computed: false, optional: true, required: false
  private _transmitDelayCfg = new InterfaceTrunkIpv6OspfTransmitDelayCfgList(this, "transmit_delay_cfg", false);
  public get transmitDelayCfg() {
    return this._transmitDelayCfg;
  }
  public putTransmitDelayCfg(value: InterfaceTrunkIpv6OspfTransmitDelayCfg[] | cdktf.IResolvable) {
    this._transmitDelayCfg.internalValue = value;
  }
  public resetTransmitDelayCfg() {
    this._transmitDelayCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayCfgInput() {
    return this._transmitDelayCfg.internalValue;
  }
}
export interface InterfaceTrunkIpv6RipSplitHorizonCfg {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#state InterfaceTrunk#state}
  */
  readonly state?: string;
}

export function interfaceTrunkIpv6RipSplitHorizonCfgToTerraform(struct?: InterfaceTrunkIpv6RipSplitHorizonCfgOutputReference | InterfaceTrunkIpv6RipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceTrunkIpv6RipSplitHorizonCfgToHclTerraform(struct?: InterfaceTrunkIpv6RipSplitHorizonCfgOutputReference | InterfaceTrunkIpv6RipSplitHorizonCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RipSplitHorizonCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6RipSplitHorizonCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RipSplitHorizonCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface InterfaceTrunkIpv6Rip {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#split_horizon_cfg InterfaceTrunk#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceTrunkIpv6RipSplitHorizonCfg;
}

export function interfaceTrunkIpv6RipToTerraform(struct?: InterfaceTrunkIpv6RipOutputReference | InterfaceTrunkIpv6Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    split_horizon_cfg: interfaceTrunkIpv6RipSplitHorizonCfgToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceTrunkIpv6RipToHclTerraform(struct?: InterfaceTrunkIpv6RipOutputReference | InterfaceTrunkIpv6Rip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_horizon_cfg: {
      value: interfaceTrunkIpv6RipSplitHorizonCfgToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RipSplitHorizonCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6Rip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6Rip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
    }
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

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceTrunkIpv6RipSplitHorizonCfgOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceTrunkIpv6RipSplitHorizonCfg) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceTrunkIpv6RouterIsis {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#tag InterfaceTrunk#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkIpv6RouterIsisToTerraform(struct?: InterfaceTrunkIpv6RouterIsisOutputReference | InterfaceTrunkIpv6RouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkIpv6RouterIsisToHclTerraform(struct?: InterfaceTrunkIpv6RouterIsisOutputReference | InterfaceTrunkIpv6RouterIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6RouterIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
}
export interface InterfaceTrunkIpv6RouterOspfAreaListStruct {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#area_id_addr InterfaceTrunk#area_id_addr}
  */
  readonly areaIdAddr?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#area_id_num InterfaceTrunk#area_id_num}
  */
  readonly areaIdNum?: number;
  /**
  * Set the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_id InterfaceTrunk#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Set the OSPFv3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#tag InterfaceTrunk#tag}
  */
  readonly tag?: string;
}

export function interfaceTrunkIpv6RouterOspfAreaListStructToTerraform(struct?: InterfaceTrunkIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id_addr: cdktf.stringToTerraform(struct!.areaIdAddr),
    area_id_num: cdktf.numberToTerraform(struct!.areaIdNum),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function interfaceTrunkIpv6RouterOspfAreaListStructToHclTerraform(struct?: InterfaceTrunkIpv6RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id_addr: {
      value: cdktf.stringToHclTerraform(struct!.areaIdAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_id_num: {
      value: cdktf.numberToHclTerraform(struct!.areaIdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterOspfAreaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIdAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdAddr = this._areaIdAddr;
    }
    if (this._areaIdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdNum = this._areaIdNum;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterOspfAreaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIdAddr = undefined;
      this._areaIdNum = undefined;
      this._instanceId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIdAddr = value.areaIdAddr;
      this._areaIdNum = value.areaIdNum;
      this._instanceId = value.instanceId;
      this._tag = value.tag;
    }
  }

  // area_id_addr - computed: false, optional: true, required: false
  private _areaIdAddr?: string; 
  public get areaIdAddr() {
    return this.getStringAttribute('area_id_addr');
  }
  public set areaIdAddr(value: string) {
    this._areaIdAddr = value;
  }
  public resetAreaIdAddr() {
    this._areaIdAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdAddrInput() {
    return this._areaIdAddr;
  }

  // area_id_num - computed: false, optional: true, required: false
  private _areaIdNum?: number; 
  public get areaIdNum() {
    return this.getNumberAttribute('area_id_num');
  }
  public set areaIdNum(value: number) {
    this._areaIdNum = value;
  }
  public resetAreaIdNum() {
    this._areaIdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdNumInput() {
    return this._areaIdNum;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class InterfaceTrunkIpv6RouterOspfAreaListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6RouterOspfAreaListStructOutputReference {
    return new InterfaceTrunkIpv6RouterOspfAreaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6RouterOspf {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#area_list InterfaceTrunk#area_list}
  */
  readonly areaList?: InterfaceTrunkIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable;
}

export function interfaceTrunkIpv6RouterOspfToTerraform(struct?: InterfaceTrunkIpv6RouterOspfOutputReference | InterfaceTrunkIpv6RouterOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    area_list: cdktf.listMapper(interfaceTrunkIpv6RouterOspfAreaListStructToTerraform, true)(struct!.areaList),
  }
}


export function interfaceTrunkIpv6RouterOspfToHclTerraform(struct?: InterfaceTrunkIpv6RouterOspfOutputReference | InterfaceTrunkIpv6RouterOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6RouterOspfAreaListStructToHclTerraform, true)(struct!.areaList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterOspfAreaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6RouterOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._areaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._areaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._areaList.internalValue = value.areaList;
    }
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

  // area_list - computed: false, optional: true, required: false
  private _areaList = new InterfaceTrunkIpv6RouterOspfAreaListStructList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: InterfaceTrunkIpv6RouterOspfAreaListStruct[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }
}
export interface InterfaceTrunkIpv6RouterRipng {
  /**
  * RIP Routing for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#rip InterfaceTrunk#rip}
  */
  readonly rip?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkIpv6RouterRipngToTerraform(struct?: InterfaceTrunkIpv6RouterRipngOutputReference | InterfaceTrunkIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkIpv6RouterRipngToHclTerraform(struct?: InterfaceTrunkIpv6RouterRipngOutputReference | InterfaceTrunkIpv6RouterRipng): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterRipngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6RouterRipng | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterRipng | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rip = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rip = value.rip;
      this._uuid = value.uuid;
    }
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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
}
export interface InterfaceTrunkIpv6Router {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#isis InterfaceTrunk#isis}
  */
  readonly isis?: InterfaceTrunkIpv6RouterIsis;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ospf InterfaceTrunk#ospf}
  */
  readonly ospf?: InterfaceTrunkIpv6RouterOspf;
  /**
  * ripng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ripng InterfaceTrunk#ripng}
  */
  readonly ripng?: InterfaceTrunkIpv6RouterRipng;
}

export function interfaceTrunkIpv6RouterToTerraform(struct?: InterfaceTrunkIpv6RouterOutputReference | InterfaceTrunkIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceTrunkIpv6RouterIsisToTerraform(struct!.isis),
    ospf: interfaceTrunkIpv6RouterOspfToTerraform(struct!.ospf),
    ripng: interfaceTrunkIpv6RouterRipngToTerraform(struct!.ripng),
  }
}


export function interfaceTrunkIpv6RouterToHclTerraform(struct?: InterfaceTrunkIpv6RouterOutputReference | InterfaceTrunkIpv6Router): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceTrunkIpv6RouterIsisToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterIsisList",
    },
    ospf: {
      value: interfaceTrunkIpv6RouterOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterOspfList",
    },
    ripng: {
      value: interfaceTrunkIpv6RouterRipngToHclTerraform(struct!.ripng),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterRipngList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6Router | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ripng?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripng = this._ripng?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6Router | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._ripng.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
      this._ospf.internalValue = value.ospf;
      this._ripng.internalValue = value.ripng;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceTrunkIpv6RouterIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceTrunkIpv6RouterIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceTrunkIpv6RouterOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceTrunkIpv6RouterOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ripng - computed: false, optional: true, required: false
  private _ripng = new InterfaceTrunkIpv6RouterRipngOutputReference(this, "ripng");
  public get ripng() {
    return this._ripng;
  }
  public putRipng(value: InterfaceTrunkIpv6RouterRipng) {
    this._ripng.internalValue = value;
  }
  public resetRipng() {
    this._ripng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngInput() {
    return this._ripng.internalValue;
  }
}
export interface InterfaceTrunkIpv6RouterAdverMtu {
  /**
  * Set Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#adver_mtu InterfaceTrunk#adver_mtu}
  */
  readonly adverMtu?: number;
  /**
  * Disable Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#adver_mtu_disable InterfaceTrunk#adver_mtu_disable}
  */
  readonly adverMtuDisable?: number;
}

export function interfaceTrunkIpv6RouterAdverMtuToTerraform(struct?: InterfaceTrunkIpv6RouterAdverMtuOutputReference | InterfaceTrunkIpv6RouterAdverMtu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adver_mtu: cdktf.numberToTerraform(struct!.adverMtu),
    adver_mtu_disable: cdktf.numberToTerraform(struct!.adverMtuDisable),
  }
}


export function interfaceTrunkIpv6RouterAdverMtuToHclTerraform(struct?: InterfaceTrunkIpv6RouterAdverMtuOutputReference | InterfaceTrunkIpv6RouterAdverMtu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adver_mtu: {
      value: cdktf.numberToHclTerraform(struct!.adverMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_mtu_disable: {
      value: cdktf.numberToHclTerraform(struct!.adverMtuDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterAdverMtuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6RouterAdverMtu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adverMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtu = this._adverMtu;
    }
    if (this._adverMtuDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtuDisable = this._adverMtuDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterAdverMtu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adverMtu = undefined;
      this._adverMtuDisable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adverMtu = value.adverMtu;
      this._adverMtuDisable = value.adverMtuDisable;
    }
  }

  // adver_mtu - computed: false, optional: true, required: false
  private _adverMtu?: number; 
  public get adverMtu() {
    return this.getNumberAttribute('adver_mtu');
  }
  public set adverMtu(value: number) {
    this._adverMtu = value;
  }
  public resetAdverMtu() {
    this._adverMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuInput() {
    return this._adverMtu;
  }

  // adver_mtu_disable - computed: false, optional: true, required: false
  private _adverMtuDisable?: number; 
  public get adverMtuDisable() {
    return this.getNumberAttribute('adver_mtu_disable');
  }
  public set adverMtuDisable(value: number) {
    this._adverMtuDisable = value;
  }
  public resetAdverMtuDisable() {
    this._adverMtuDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuDisableInput() {
    return this._adverMtuDisable;
  }
}
export interface InterfaceTrunkIpv6RouterAdverPrefixListStruct {
  /**
  * Specify that the Prefix is not usable for autoconfiguration (default:autonomous)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#not_autonomous InterfaceTrunk#not_autonomous}
  */
  readonly notAutonomous?: number;
  /**
  * Specify that the Prefix is not On-Link (default: on-link)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#not_on_link InterfaceTrunk#not_on_link}
  */
  readonly notOnLink?: number;
  /**
  * Specify Prefix Preferred Lifetime (default:604800) (Prefix Advertised Preferred Lifetime (default: 604800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#preferred_lifetime InterfaceTrunk#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Set Router Advertisement On-Link Prefix (IPv6 On-Link Prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#prefix InterfaceTrunk#prefix}
  */
  readonly prefix?: string;
  /**
  * Specify Valid Lifetime (default:2592000) (Prefix Advertised Valid Lifetime (default: 2592000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#valid_lifetime InterfaceTrunk#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function interfaceTrunkIpv6RouterAdverPrefixListStructToTerraform(struct?: InterfaceTrunkIpv6RouterAdverPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_autonomous: cdktf.numberToTerraform(struct!.notAutonomous),
    not_on_link: cdktf.numberToTerraform(struct!.notOnLink),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
  }
}


export function interfaceTrunkIpv6RouterAdverPrefixListStructToHclTerraform(struct?: InterfaceTrunkIpv6RouterAdverPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_autonomous: {
      value: cdktf.numberToHclTerraform(struct!.notAutonomous),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_on_link: {
      value: cdktf.numberToHclTerraform(struct!.notOnLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterAdverPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIpv6RouterAdverPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAutonomous !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAutonomous = this._notAutonomous;
    }
    if (this._notOnLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.notOnLink = this._notOnLink;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterAdverPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAutonomous = undefined;
      this._notOnLink = undefined;
      this._preferredLifetime = undefined;
      this._prefix = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAutonomous = value.notAutonomous;
      this._notOnLink = value.notOnLink;
      this._preferredLifetime = value.preferredLifetime;
      this._prefix = value.prefix;
      this._validLifetime = value.validLifetime;
    }
  }

  // not_autonomous - computed: false, optional: true, required: false
  private _notAutonomous?: number; 
  public get notAutonomous() {
    return this.getNumberAttribute('not_autonomous');
  }
  public set notAutonomous(value: number) {
    this._notAutonomous = value;
  }
  public resetNotAutonomous() {
    this._notAutonomous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAutonomousInput() {
    return this._notAutonomous;
  }

  // not_on_link - computed: false, optional: true, required: false
  private _notOnLink?: number; 
  public get notOnLink() {
    return this.getNumberAttribute('not_on_link');
  }
  public set notOnLink(value: number) {
    this._notOnLink = value;
  }
  public resetNotOnLink() {
    this._notOnLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOnLinkInput() {
    return this._notOnLink;
  }

  // preferred_lifetime - computed: false, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // valid_lifetime - computed: false, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}

export class InterfaceTrunkIpv6RouterAdverPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIpv6RouterAdverPrefixListStructOutputReference {
    return new InterfaceTrunkIpv6RouterAdverPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIpv6RouterAdverVrid {
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#adver_vrid InterfaceTrunk#adver_vrid}
  */
  readonly adverVrid?: number;
  /**
  * Default VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#adver_vrid_default InterfaceTrunk#adver_vrid_default}
  */
  readonly adverVridDefault?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#floating_ip InterfaceTrunk#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#floating_ip_default_vrid InterfaceTrunk#floating_ip_default_vrid}
  */
  readonly floatingIpDefaultVrid?: string;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#use_floating_ip InterfaceTrunk#use_floating_ip}
  */
  readonly useFloatingIp?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#use_floating_ip_default_vrid InterfaceTrunk#use_floating_ip_default_vrid}
  */
  readonly useFloatingIpDefaultVrid?: number;
}

export function interfaceTrunkIpv6RouterAdverVridToTerraform(struct?: InterfaceTrunkIpv6RouterAdverVridOutputReference | InterfaceTrunkIpv6RouterAdverVrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adver_vrid: cdktf.numberToTerraform(struct!.adverVrid),
    adver_vrid_default: cdktf.numberToTerraform(struct!.adverVridDefault),
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    floating_ip_default_vrid: cdktf.stringToTerraform(struct!.floatingIpDefaultVrid),
    use_floating_ip: cdktf.numberToTerraform(struct!.useFloatingIp),
    use_floating_ip_default_vrid: cdktf.numberToTerraform(struct!.useFloatingIpDefaultVrid),
  }
}


export function interfaceTrunkIpv6RouterAdverVridToHclTerraform(struct?: InterfaceTrunkIpv6RouterAdverVridOutputReference | InterfaceTrunkIpv6RouterAdverVrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adver_vrid: {
      value: cdktf.numberToHclTerraform(struct!.adverVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_vrid_default: {
      value: cdktf.numberToHclTerraform(struct!.adverVridDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip_default_vrid: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_floating_ip: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_floating_ip_default_vrid: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterAdverVridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6RouterAdverVrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adverVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVrid = this._adverVrid;
    }
    if (this._adverVridDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVridDefault = this._adverVridDefault;
    }
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._floatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpDefaultVrid = this._floatingIpDefaultVrid;
    }
    if (this._useFloatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIp = this._useFloatingIp;
    }
    if (this._useFloatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIpDefaultVrid = this._useFloatingIpDefaultVrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterAdverVrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adverVrid = undefined;
      this._adverVridDefault = undefined;
      this._floatingIp = undefined;
      this._floatingIpDefaultVrid = undefined;
      this._useFloatingIp = undefined;
      this._useFloatingIpDefaultVrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adverVrid = value.adverVrid;
      this._adverVridDefault = value.adverVridDefault;
      this._floatingIp = value.floatingIp;
      this._floatingIpDefaultVrid = value.floatingIpDefaultVrid;
      this._useFloatingIp = value.useFloatingIp;
      this._useFloatingIpDefaultVrid = value.useFloatingIpDefaultVrid;
    }
  }

  // adver_vrid - computed: false, optional: true, required: false
  private _adverVrid?: number; 
  public get adverVrid() {
    return this.getNumberAttribute('adver_vrid');
  }
  public set adverVrid(value: number) {
    this._adverVrid = value;
  }
  public resetAdverVrid() {
    this._adverVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridInput() {
    return this._adverVrid;
  }

  // adver_vrid_default - computed: false, optional: true, required: false
  private _adverVridDefault?: number; 
  public get adverVridDefault() {
    return this.getNumberAttribute('adver_vrid_default');
  }
  public set adverVridDefault(value: number) {
    this._adverVridDefault = value;
  }
  public resetAdverVridDefault() {
    this._adverVridDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridDefaultInput() {
    return this._adverVridDefault;
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // floating_ip_default_vrid - computed: false, optional: true, required: false
  private _floatingIpDefaultVrid?: string; 
  public get floatingIpDefaultVrid() {
    return this.getStringAttribute('floating_ip_default_vrid');
  }
  public set floatingIpDefaultVrid(value: string) {
    this._floatingIpDefaultVrid = value;
  }
  public resetFloatingIpDefaultVrid() {
    this._floatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpDefaultVridInput() {
    return this._floatingIpDefaultVrid;
  }

  // use_floating_ip - computed: false, optional: true, required: false
  private _useFloatingIp?: number; 
  public get useFloatingIp() {
    return this.getNumberAttribute('use_floating_ip');
  }
  public set useFloatingIp(value: number) {
    this._useFloatingIp = value;
  }
  public resetUseFloatingIp() {
    this._useFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpInput() {
    return this._useFloatingIp;
  }

  // use_floating_ip_default_vrid - computed: false, optional: true, required: false
  private _useFloatingIpDefaultVrid?: number; 
  public get useFloatingIpDefaultVrid() {
    return this.getNumberAttribute('use_floating_ip_default_vrid');
  }
  public set useFloatingIpDefaultVrid(value: number) {
    this._useFloatingIpDefaultVrid = value;
  }
  public resetUseFloatingIpDefaultVrid() {
    this._useFloatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpDefaultVridInput() {
    return this._useFloatingIpDefaultVrid;
  }
}
export interface InterfaceTrunkIpv6RouterAdver {
  /**
  * 'enable': Enable Router Advertisements on this interface; 'disable': Disable Router Advertisements on this interface;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#action InterfaceTrunk#action}
  */
  readonly action?: string;
  /**
  * Set Router Advertisement Default Lifetime (default: 1800) (Default Lifetime (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#default_lifetime InterfaceTrunk#default_lifetime}
  */
  readonly defaultLifetime?: number;
  /**
  * Set Router Advertisement Hop Limit (default: 255) (Max Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hop_limit InterfaceTrunk#hop_limit}
  */
  readonly hopLimit?: number;
  /**
  * 'enable': Enable the Managed Address Configuration flag; 'disable': Disable the Managed Address Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#managed_config_action InterfaceTrunk#managed_config_action}
  */
  readonly managedConfigAction?: string;
  /**
  * Set Router Advertisement Max Interval (default: 600) (Min Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#max_interval InterfaceTrunk#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Set Router Advertisement Min Interval (default: 200) (Max Number of Router Solicitations to process per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#min_interval InterfaceTrunk#min_interval}
  */
  readonly minInterval?: number;
  /**
  * 'enable': Enable the Other Stateful Configuration flag; 'disable': Disable the Other Stateful Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#other_config_action InterfaceTrunk#other_config_action}
  */
  readonly otherConfigAction?: string;
  /**
  * Rate Limit the processing of incoming Router Solicitations (Max Number of Router Solicitations to process per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#rate_limit InterfaceTrunk#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Set Router Advertisement Reachable ime (default: 0) (Reachable Time (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#reachable_time InterfaceTrunk#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Set Router Advertisement Retransmit Timer (default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#retransmit_timer InterfaceTrunk#retransmit_timer}
  */
  readonly retransmitTimer?: number;
  /**
  * mtu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mtu InterfaceTrunk#mtu}
  */
  readonly mtu?: InterfaceTrunkIpv6RouterAdverMtu;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#prefix_list InterfaceTrunk#prefix_list}
  */
  readonly prefixList?: InterfaceTrunkIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable;
  /**
  * vrid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#vrid InterfaceTrunk#vrid}
  */
  readonly vrid?: InterfaceTrunkIpv6RouterAdverVrid;
}

export function interfaceTrunkIpv6RouterAdverToTerraform(struct?: InterfaceTrunkIpv6RouterAdverOutputReference | InterfaceTrunkIpv6RouterAdver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    default_lifetime: cdktf.numberToTerraform(struct!.defaultLifetime),
    hop_limit: cdktf.numberToTerraform(struct!.hopLimit),
    managed_config_action: cdktf.stringToTerraform(struct!.managedConfigAction),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_config_action: cdktf.stringToTerraform(struct!.otherConfigAction),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    retransmit_timer: cdktf.numberToTerraform(struct!.retransmitTimer),
    mtu: interfaceTrunkIpv6RouterAdverMtuToTerraform(struct!.mtu),
    prefix_list: cdktf.listMapper(interfaceTrunkIpv6RouterAdverPrefixListStructToTerraform, true)(struct!.prefixList),
    vrid: interfaceTrunkIpv6RouterAdverVridToTerraform(struct!.vrid),
  }
}


export function interfaceTrunkIpv6RouterAdverToHclTerraform(struct?: InterfaceTrunkIpv6RouterAdverOutputReference | InterfaceTrunkIpv6RouterAdver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.defaultLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_config_action: {
      value: cdktf.stringToHclTerraform(struct!.managedConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_config_action: {
      value: cdktf.stringToHclTerraform(struct!.otherConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_timer: {
      value: cdktf.numberToHclTerraform(struct!.retransmitTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: interfaceTrunkIpv6RouterAdverMtuToHclTerraform(struct!.mtu),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterAdverMtuList",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6RouterAdverPrefixListStructToHclTerraform, true)(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterAdverPrefixListStructList",
    },
    vrid: {
      value: interfaceTrunkIpv6RouterAdverVridToHclTerraform(struct!.vrid),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterAdverVridList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6RouterAdverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6RouterAdver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._defaultLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLifetime = this._defaultLifetime;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._managedConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedConfigAction = this._managedConfigAction;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfigAction = this._otherConfigAction;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmitTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitTimer = this._retransmitTimer;
    }
    if (this._mtu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    if (this._vrid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6RouterAdver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._defaultLifetime = undefined;
      this._hopLimit = undefined;
      this._managedConfigAction = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherConfigAction = undefined;
      this._rateLimit = undefined;
      this._reachableTime = undefined;
      this._retransmitTimer = undefined;
      this._mtu.internalValue = undefined;
      this._prefixList.internalValue = undefined;
      this._vrid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._defaultLifetime = value.defaultLifetime;
      this._hopLimit = value.hopLimit;
      this._managedConfigAction = value.managedConfigAction;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherConfigAction = value.otherConfigAction;
      this._rateLimit = value.rateLimit;
      this._reachableTime = value.reachableTime;
      this._retransmitTimer = value.retransmitTimer;
      this._mtu.internalValue = value.mtu;
      this._prefixList.internalValue = value.prefixList;
      this._vrid.internalValue = value.vrid;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // default_lifetime - computed: false, optional: true, required: false
  private _defaultLifetime?: number; 
  public get defaultLifetime() {
    return this.getNumberAttribute('default_lifetime');
  }
  public set defaultLifetime(value: number) {
    this._defaultLifetime = value;
  }
  public resetDefaultLifetime() {
    this._defaultLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLifetimeInput() {
    return this._defaultLifetime;
  }

  // hop_limit - computed: false, optional: true, required: false
  private _hopLimit?: number; 
  public get hopLimit() {
    return this.getNumberAttribute('hop_limit');
  }
  public set hopLimit(value: number) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // managed_config_action - computed: false, optional: true, required: false
  private _managedConfigAction?: string; 
  public get managedConfigAction() {
    return this.getStringAttribute('managed_config_action');
  }
  public set managedConfigAction(value: string) {
    this._managedConfigAction = value;
  }
  public resetManagedConfigAction() {
    this._managedConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedConfigActionInput() {
    return this._managedConfigAction;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: false, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_config_action - computed: false, optional: true, required: false
  private _otherConfigAction?: string; 
  public get otherConfigAction() {
    return this.getStringAttribute('other_config_action');
  }
  public set otherConfigAction(value: string) {
    this._otherConfigAction = value;
  }
  public resetOtherConfigAction() {
    this._otherConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigActionInput() {
    return this._otherConfigAction;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // reachable_time - computed: false, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmit_timer - computed: false, optional: true, required: false
  private _retransmitTimer?: number; 
  public get retransmitTimer() {
    return this.getNumberAttribute('retransmit_timer');
  }
  public set retransmitTimer(value: number) {
    this._retransmitTimer = value;
  }
  public resetRetransmitTimer() {
    this._retransmitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitTimerInput() {
    return this._retransmitTimer;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu = new InterfaceTrunkIpv6RouterAdverMtuOutputReference(this, "mtu");
  public get mtu() {
    return this._mtu;
  }
  public putMtu(value: InterfaceTrunkIpv6RouterAdverMtu) {
    this._mtu.internalValue = value;
  }
  public resetMtu() {
    this._mtu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new InterfaceTrunkIpv6RouterAdverPrefixListStructList(this, "prefix_list", false);
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: InterfaceTrunkIpv6RouterAdverPrefixListStruct[] | cdktf.IResolvable) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid = new InterfaceTrunkIpv6RouterAdverVridOutputReference(this, "vrid");
  public get vrid() {
    return this._vrid;
  }
  public putVrid(value: InterfaceTrunkIpv6RouterAdverVrid) {
    this._vrid.internalValue = value;
  }
  public resetVrid() {
    this._vrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid.internalValue;
  }
}
export interface InterfaceTrunkIpv6StatefulFirewall {
  /**
  * Access-list for traffic from the outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#access_list InterfaceTrunk#access_list}
  */
  readonly accessList?: number;
  /**
  * Access-list Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#acl_name InterfaceTrunk#acl_name}
  */
  readonly aclName?: string;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#class_list InterfaceTrunk#class_list}
  */
  readonly classList?: string;
  /**
  * Inside (private) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inside InterfaceTrunk#inside}
  */
  readonly inside?: number;
  /**
  * Outside (public) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#outside InterfaceTrunk#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkIpv6StatefulFirewallToTerraform(struct?: InterfaceTrunkIpv6StatefulFirewallOutputReference | InterfaceTrunkIpv6StatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.numberToTerraform(struct!.accessList),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    class_list: cdktf.stringToTerraform(struct!.classList),
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkIpv6StatefulFirewallToHclTerraform(struct?: InterfaceTrunkIpv6StatefulFirewallOutputReference | InterfaceTrunkIpv6StatefulFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.numberToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6StatefulFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6StatefulFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6StatefulFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessList = undefined;
      this._aclName = undefined;
      this._classList = undefined;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessList = value.accessList;
      this._aclName = value.aclName;
      this._classList = value.classList;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: number; 
  public get accessList() {
    return this.getNumberAttribute('access_list');
  }
  public set accessList(value: number) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceTrunkIpv6 {
  /**
  * Enable IPv6 processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ipv6_enable InterfaceTrunk#ipv6_enable}
  */
  readonly ipv6Enable?: number;
  /**
  * Ignore TTL decrement for a received packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ttl_ignore InterfaceTrunk#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * access_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#access_list_cfg InterfaceTrunk#access_list_cfg}
  */
  readonly accessListCfg?: InterfaceTrunkIpv6AccessListCfg;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#address_list InterfaceTrunk#address_list}
  */
  readonly addressList?: InterfaceTrunkIpv6AddressListStruct[] | cdktf.IResolvable;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#nat InterfaceTrunk#nat}
  */
  readonly nat?: InterfaceTrunkIpv6Nat;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#ospf InterfaceTrunk#ospf}
  */
  readonly ospf?: InterfaceTrunkIpv6Ospf;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#rip InterfaceTrunk#rip}
  */
  readonly rip?: InterfaceTrunkIpv6Rip;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#router InterfaceTrunk#router}
  */
  readonly router?: InterfaceTrunkIpv6Router;
  /**
  * router_adver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#router_adver InterfaceTrunk#router_adver}
  */
  readonly routerAdver?: InterfaceTrunkIpv6RouterAdver;
  /**
  * stateful_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#stateful_firewall InterfaceTrunk#stateful_firewall}
  */
  readonly statefulFirewall?: InterfaceTrunkIpv6StatefulFirewall;
}

export function interfaceTrunkIpv6ToTerraform(struct?: InterfaceTrunkIpv6OutputReference | InterfaceTrunkIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_enable: cdktf.numberToTerraform(struct!.ipv6Enable),
    ttl_ignore: cdktf.numberToTerraform(struct!.ttlIgnore),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    access_list_cfg: interfaceTrunkIpv6AccessListCfgToTerraform(struct!.accessListCfg),
    address_list: cdktf.listMapper(interfaceTrunkIpv6AddressListStructToTerraform, true)(struct!.addressList),
    nat: interfaceTrunkIpv6NatToTerraform(struct!.nat),
    ospf: interfaceTrunkIpv6OspfToTerraform(struct!.ospf),
    rip: interfaceTrunkIpv6RipToTerraform(struct!.rip),
    router: interfaceTrunkIpv6RouterToTerraform(struct!.router),
    router_adver: interfaceTrunkIpv6RouterAdverToTerraform(struct!.routerAdver),
    stateful_firewall: interfaceTrunkIpv6StatefulFirewallToTerraform(struct!.statefulFirewall),
  }
}


export function interfaceTrunkIpv6ToHclTerraform(struct?: InterfaceTrunkIpv6OutputReference | InterfaceTrunkIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_enable: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_ignore: {
      value: cdktf.numberToHclTerraform(struct!.ttlIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_list_cfg: {
      value: interfaceTrunkIpv6AccessListCfgToHclTerraform(struct!.accessListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6AccessListCfgList",
    },
    address_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIpv6AddressListStructToHclTerraform, true)(struct!.addressList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6AddressListStructList",
    },
    nat: {
      value: interfaceTrunkIpv6NatToHclTerraform(struct!.nat),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6NatList",
    },
    ospf: {
      value: interfaceTrunkIpv6OspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6OspfList",
    },
    rip: {
      value: interfaceTrunkIpv6RipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RipList",
    },
    router: {
      value: interfaceTrunkIpv6RouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterList",
    },
    router_adver: {
      value: interfaceTrunkIpv6RouterAdverToHclTerraform(struct!.routerAdver),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6RouterAdverList",
    },
    stateful_firewall: {
      value: interfaceTrunkIpv6StatefulFirewallToHclTerraform(struct!.statefulFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIpv6StatefulFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enable = this._ipv6Enable;
    }
    if (this._ttlIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlIgnore = this._ttlIgnore;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._accessListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessListCfg = this._accessListCfg?.internalValue;
    }
    if (this._addressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressList = this._addressList?.internalValue;
    }
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._routerAdver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdver = this._routerAdver?.internalValue;
    }
    if (this._statefulFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulFirewall = this._statefulFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Enable = undefined;
      this._ttlIgnore = undefined;
      this._uuid = undefined;
      this._accessListCfg.internalValue = undefined;
      this._addressList.internalValue = undefined;
      this._nat.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._router.internalValue = undefined;
      this._routerAdver.internalValue = undefined;
      this._statefulFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Enable = value.ipv6Enable;
      this._ttlIgnore = value.ttlIgnore;
      this._uuid = value.uuid;
      this._accessListCfg.internalValue = value.accessListCfg;
      this._addressList.internalValue = value.addressList;
      this._nat.internalValue = value.nat;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._router.internalValue = value.router;
      this._routerAdver.internalValue = value.routerAdver;
      this._statefulFirewall.internalValue = value.statefulFirewall;
    }
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: number; 
  public get ipv6Enable() {
    return this.getNumberAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: number) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
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

  // access_list_cfg - computed: false, optional: true, required: false
  private _accessListCfg = new InterfaceTrunkIpv6AccessListCfgOutputReference(this, "access_list_cfg");
  public get accessListCfg() {
    return this._accessListCfg;
  }
  public putAccessListCfg(value: InterfaceTrunkIpv6AccessListCfg) {
    this._accessListCfg.internalValue = value;
  }
  public resetAccessListCfg() {
    this._accessListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListCfgInput() {
    return this._accessListCfg.internalValue;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceTrunkIpv6AddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceTrunkIpv6AddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new InterfaceTrunkIpv6NatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: InterfaceTrunkIpv6Nat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceTrunkIpv6OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceTrunkIpv6Ospf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceTrunkIpv6RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceTrunkIpv6Rip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceTrunkIpv6RouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceTrunkIpv6Router) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // router_adver - computed: false, optional: true, required: false
  private _routerAdver = new InterfaceTrunkIpv6RouterAdverOutputReference(this, "router_adver");
  public get routerAdver() {
    return this._routerAdver;
  }
  public putRouterAdver(value: InterfaceTrunkIpv6RouterAdver) {
    this._routerAdver.internalValue = value;
  }
  public resetRouterAdver() {
    this._routerAdver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdverInput() {
    return this._routerAdver.internalValue;
  }

  // stateful_firewall - computed: false, optional: true, required: false
  private _statefulFirewall = new InterfaceTrunkIpv6StatefulFirewallOutputReference(this, "stateful_firewall");
  public get statefulFirewall() {
    return this._statefulFirewall;
  }
  public putStatefulFirewall(value: InterfaceTrunkIpv6StatefulFirewall) {
    this._statefulFirewall.internalValue = value;
  }
  public resetStatefulFirewall() {
    this._statefulFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulFirewallInput() {
    return this._statefulFirewall.internalValue;
  }
}
export interface InterfaceTrunkIsisAuthenticationKeyChainListStruct {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#key_chain InterfaceTrunk#key_chain}
  */
  readonly keyChain?: string;
  /**
  * 'level-1': Specify authentication key-chain for level-1 PDUs; 'level-2': Specify authentication key-chain for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
}

export function interfaceTrunkIsisAuthenticationKeyChainListStructToTerraform(struct?: InterfaceTrunkIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceTrunkIsisAuthenticationKeyChainListStructToHclTerraform(struct?: InterfaceTrunkIsisAuthenticationKeyChainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: cdktf.stringToHclTerraform(struct!.keyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisAuthenticationKeyChainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisAuthenticationKeyChainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyChain = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyChain = value.keyChain;
      this._level = value.level;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain?: string; 
  public get keyChain() {
    return this.getStringAttribute('key_chain');
  }
  public set keyChain(value: string) {
    this._keyChain = value;
  }
  public resetKeyChain() {
    this._keyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceTrunkIsisAuthenticationKeyChainListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisAuthenticationKeyChainListStructOutputReference {
    return new InterfaceTrunkIsisAuthenticationKeyChainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisAuthenticationModeListStruct {
  /**
  * 'level-1': Specify authentication mode for level-1 PDUs; 'level-2': Specify authentication mode for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
  /**
  * 'md5': Keyed message digest;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mode InterfaceTrunk#mode}
  */
  readonly mode?: string;
}

export function interfaceTrunkIsisAuthenticationModeListStructToTerraform(struct?: InterfaceTrunkIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceTrunkIsisAuthenticationModeListStructToHclTerraform(struct?: InterfaceTrunkIsisAuthenticationModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisAuthenticationModeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisAuthenticationModeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._mode = value.mode;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class InterfaceTrunkIsisAuthenticationModeListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisAuthenticationModeListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisAuthenticationModeListStructOutputReference {
    return new InterfaceTrunkIsisAuthenticationModeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisAuthenticationSendOnlyListStruct {
  /**
  * 'level-1': Specify authentication send-only for level-1 PDUs; 'level-2': Specify authentication send-only for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
  /**
  * Authentication send-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#send_only InterfaceTrunk#send_only}
  */
  readonly sendOnly?: number;
}

export function interfaceTrunkIsisAuthenticationSendOnlyListStructToTerraform(struct?: InterfaceTrunkIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    send_only: cdktf.numberToTerraform(struct!.sendOnly),
  }
}


export function interfaceTrunkIsisAuthenticationSendOnlyListStructToHclTerraform(struct?: InterfaceTrunkIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_only: {
      value: cdktf.numberToHclTerraform(struct!.sendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisAuthenticationSendOnlyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._sendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnly = this._sendOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisAuthenticationSendOnlyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._sendOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._sendOnly = value.sendOnly;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // send_only - computed: false, optional: true, required: false
  private _sendOnly?: number; 
  public get sendOnly() {
    return this.getNumberAttribute('send_only');
  }
  public set sendOnly(value: number) {
    this._sendOnly = value;
  }
  public resetSendOnly() {
    this._sendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyInput() {
    return this._sendOnly;
  }
}

export class InterfaceTrunkIsisAuthenticationSendOnlyListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisAuthenticationSendOnlyListStructOutputReference {
    return new InterfaceTrunkIsisAuthenticationSendOnlyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisAuthentication {
  /**
  * key_chain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#key_chain_list InterfaceTrunk#key_chain_list}
  */
  readonly keyChainList?: InterfaceTrunkIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable;
  /**
  * mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mode_list InterfaceTrunk#mode_list}
  */
  readonly modeList?: InterfaceTrunkIsisAuthenticationModeListStruct[] | cdktf.IResolvable;
  /**
  * send_only_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#send_only_list InterfaceTrunk#send_only_list}
  */
  readonly sendOnlyList?: InterfaceTrunkIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable;
}

export function interfaceTrunkIsisAuthenticationToTerraform(struct?: InterfaceTrunkIsisAuthenticationOutputReference | InterfaceTrunkIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_list: cdktf.listMapper(interfaceTrunkIsisAuthenticationKeyChainListStructToTerraform, true)(struct!.keyChainList),
    mode_list: cdktf.listMapper(interfaceTrunkIsisAuthenticationModeListStructToTerraform, true)(struct!.modeList),
    send_only_list: cdktf.listMapper(interfaceTrunkIsisAuthenticationSendOnlyListStructToTerraform, true)(struct!.sendOnlyList),
  }
}


export function interfaceTrunkIsisAuthenticationToHclTerraform(struct?: InterfaceTrunkIsisAuthenticationOutputReference | InterfaceTrunkIsisAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisAuthenticationKeyChainListStructToHclTerraform, true)(struct!.keyChainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisAuthenticationKeyChainListStructList",
    },
    mode_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisAuthenticationModeListStructToHclTerraform, true)(struct!.modeList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisAuthenticationModeListStructList",
    },
    send_only_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisAuthenticationSendOnlyListStructToHclTerraform, true)(struct!.sendOnlyList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisAuthenticationSendOnlyListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIsisAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChainList = this._keyChainList?.internalValue;
    }
    if (this._modeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeList = this._modeList?.internalValue;
    }
    if (this._sendOnlyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnlyList = this._sendOnlyList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChainList.internalValue = undefined;
      this._modeList.internalValue = undefined;
      this._sendOnlyList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChainList.internalValue = value.keyChainList;
      this._modeList.internalValue = value.modeList;
      this._sendOnlyList.internalValue = value.sendOnlyList;
    }
  }

  // key_chain_list - computed: false, optional: true, required: false
  private _keyChainList = new InterfaceTrunkIsisAuthenticationKeyChainListStructList(this, "key_chain_list", false);
  public get keyChainList() {
    return this._keyChainList;
  }
  public putKeyChainList(value: InterfaceTrunkIsisAuthenticationKeyChainListStruct[] | cdktf.IResolvable) {
    this._keyChainList.internalValue = value;
  }
  public resetKeyChainList() {
    this._keyChainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainListInput() {
    return this._keyChainList.internalValue;
  }

  // mode_list - computed: false, optional: true, required: false
  private _modeList = new InterfaceTrunkIsisAuthenticationModeListStructList(this, "mode_list", false);
  public get modeList() {
    return this._modeList;
  }
  public putModeList(value: InterfaceTrunkIsisAuthenticationModeListStruct[] | cdktf.IResolvable) {
    this._modeList.internalValue = value;
  }
  public resetModeList() {
    this._modeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeListInput() {
    return this._modeList.internalValue;
  }

  // send_only_list - computed: false, optional: true, required: false
  private _sendOnlyList = new InterfaceTrunkIsisAuthenticationSendOnlyListStructList(this, "send_only_list", false);
  public get sendOnlyList() {
    return this._sendOnlyList;
  }
  public putSendOnlyList(value: InterfaceTrunkIsisAuthenticationSendOnlyListStruct[] | cdktf.IResolvable) {
    this._sendOnlyList.internalValue = value;
  }
  public resetSendOnlyList() {
    this._sendOnlyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyListInput() {
    return this._sendOnlyList.internalValue;
  }
}
export interface InterfaceTrunkIsisBfdCfg {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#bfd InterfaceTrunk#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#disable InterfaceTrunk#disable}
  */
  readonly disable?: number;
}

export function interfaceTrunkIsisBfdCfgToTerraform(struct?: InterfaceTrunkIsisBfdCfgOutputReference | InterfaceTrunkIsisBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceTrunkIsisBfdCfgToHclTerraform(struct?: InterfaceTrunkIsisBfdCfgOutputReference | InterfaceTrunkIsisBfdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisBfdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIsisBfdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisBfdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }
}
export interface InterfaceTrunkIsisCsnpIntervalListStruct {
  /**
  * Set CSNP interval in seconds (CSNP interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#csnp_interval InterfaceTrunk#csnp_interval}
  */
  readonly csnpInterval?: number;
  /**
  * 'level-1': Speficy interval for level-1 CSNPs; 'level-2': Specify interval for level-2 CSNPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
}

export function interfaceTrunkIsisCsnpIntervalListStructToTerraform(struct?: InterfaceTrunkIsisCsnpIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csnp_interval: cdktf.numberToTerraform(struct!.csnpInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceTrunkIsisCsnpIntervalListStructToHclTerraform(struct?: InterfaceTrunkIsisCsnpIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csnp_interval: {
      value: cdktf.numberToHclTerraform(struct!.csnpInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisCsnpIntervalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisCsnpIntervalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csnpInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpInterval = this._csnpInterval;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisCsnpIntervalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csnpInterval = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csnpInterval = value.csnpInterval;
      this._level = value.level;
    }
  }

  // csnp_interval - computed: false, optional: true, required: false
  private _csnpInterval?: number; 
  public get csnpInterval() {
    return this.getNumberAttribute('csnp_interval');
  }
  public set csnpInterval(value: number) {
    this._csnpInterval = value;
  }
  public resetCsnpInterval() {
    this._csnpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalInput() {
    return this._csnpInterval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceTrunkIsisCsnpIntervalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisCsnpIntervalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisCsnpIntervalListStructOutputReference {
    return new InterfaceTrunkIsisCsnpIntervalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisHelloIntervalListStruct {
  /**
  * Set Hello interval in seconds (Hello interval value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval InterfaceTrunk#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
}

export function interfaceTrunkIsisHelloIntervalListStructToTerraform(struct?: InterfaceTrunkIsisHelloIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceTrunkIsisHelloIntervalListStructToHclTerraform(struct?: InterfaceTrunkIsisHelloIntervalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisHelloIntervalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisHelloIntervalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisHelloIntervalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._level = value.level;
    }
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceTrunkIsisHelloIntervalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisHelloIntervalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisHelloIntervalListStructOutputReference {
    return new InterfaceTrunkIsisHelloIntervalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisHelloIntervalMinimalListStruct {
  /**
  * Set Hello holdtime 1 second, interval depends on multiplier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval_minimal InterfaceTrunk#hello_interval_minimal}
  */
  readonly helloIntervalMinimal?: number;
  /**
  * 'level-1': Specify hello-interval for level-1 IIHs; 'level-2': Specify hello-interval for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
}

export function interfaceTrunkIsisHelloIntervalMinimalListStructToTerraform(struct?: InterfaceTrunkIsisHelloIntervalMinimalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval_minimal: cdktf.numberToTerraform(struct!.helloIntervalMinimal),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceTrunkIsisHelloIntervalMinimalListStructToHclTerraform(struct?: InterfaceTrunkIsisHelloIntervalMinimalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval_minimal: {
      value: cdktf.numberToHclTerraform(struct!.helloIntervalMinimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisHelloIntervalMinimalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisHelloIntervalMinimalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloIntervalMinimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalMinimal = this._helloIntervalMinimal;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisHelloIntervalMinimalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloIntervalMinimal = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloIntervalMinimal = value.helloIntervalMinimal;
      this._level = value.level;
    }
  }

  // hello_interval_minimal - computed: false, optional: true, required: false
  private _helloIntervalMinimal?: number; 
  public get helloIntervalMinimal() {
    return this.getNumberAttribute('hello_interval_minimal');
  }
  public set helloIntervalMinimal(value: number) {
    this._helloIntervalMinimal = value;
  }
  public resetHelloIntervalMinimal() {
    this._helloIntervalMinimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalMinimalInput() {
    return this._helloIntervalMinimal;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceTrunkIsisHelloIntervalMinimalListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisHelloIntervalMinimalListStructOutputReference {
    return new InterfaceTrunkIsisHelloIntervalMinimalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisHelloMultiplierListStruct {
  /**
  * Set multiplier for Hello holding time (Hello multiplier value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_multiplier InterfaceTrunk#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * 'level-1': Specify hello multiplier for level-1 IIHs; 'level-2': Specify hello multiplier for level-2 IIHs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
}

export function interfaceTrunkIsisHelloMultiplierListStructToTerraform(struct?: InterfaceTrunkIsisHelloMultiplierListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_multiplier: cdktf.numberToTerraform(struct!.helloMultiplier),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function interfaceTrunkIsisHelloMultiplierListStructToHclTerraform(struct?: InterfaceTrunkIsisHelloMultiplierListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.helloMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisHelloMultiplierListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisHelloMultiplierListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplier = this._helloMultiplier;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisHelloMultiplierListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloMultiplier = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloMultiplier = value.helloMultiplier;
      this._level = value.level;
    }
  }

  // hello_multiplier - computed: false, optional: true, required: false
  private _helloMultiplier?: number; 
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }
  public set helloMultiplier(value: number) {
    this._helloMultiplier = value;
  }
  public resetHelloMultiplier() {
    this._helloMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierInput() {
    return this._helloMultiplier;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class InterfaceTrunkIsisHelloMultiplierListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisHelloMultiplierListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisHelloMultiplierListStructOutputReference {
    return new InterfaceTrunkIsisHelloMultiplierListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisMeshGroup {
  /**
  * Block LSPs on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#blocked InterfaceTrunk#blocked}
  */
  readonly blocked?: number;
  /**
  * Mesh group number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#value InterfaceTrunk#value}
  */
  readonly value?: number;
}

export function interfaceTrunkIsisMeshGroupToTerraform(struct?: InterfaceTrunkIsisMeshGroupOutputReference | InterfaceTrunkIsisMeshGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.numberToTerraform(struct!.blocked),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function interfaceTrunkIsisMeshGroupToHclTerraform(struct?: InterfaceTrunkIsisMeshGroupOutputReference | InterfaceTrunkIsisMeshGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked: {
      value: cdktf.numberToHclTerraform(struct!.blocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisMeshGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIsisMeshGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocked = this._blocked;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisMeshGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blocked = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blocked = value.blocked;
      this._value = value.value;
    }
  }

  // blocked - computed: false, optional: true, required: false
  private _blocked?: number; 
  public get blocked() {
    return this.getNumberAttribute('blocked');
  }
  public set blocked(value: number) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InterfaceTrunkIsisMetricListStruct {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
  /**
  * Configure the metric for interface (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#metric InterfaceTrunk#metric}
  */
  readonly metric?: number;
}

export function interfaceTrunkIsisMetricListStructToTerraform(struct?: InterfaceTrunkIsisMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function interfaceTrunkIsisMetricListStructToHclTerraform(struct?: InterfaceTrunkIsisMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._metric = value.metric;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class InterfaceTrunkIsisMetricListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisMetricListStructOutputReference {
    return new InterfaceTrunkIsisMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisPasswordListStruct {
  /**
  * 'level-1': Specify password for level-1 PDUs; 'level-2': Specify password for level-2 PDUs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
  /**
  * Configure the authentication password for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#password InterfaceTrunk#password}
  */
  readonly password?: string;
}

export function interfaceTrunkIsisPasswordListStructToTerraform(struct?: InterfaceTrunkIsisPasswordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function interfaceTrunkIsisPasswordListStructToHclTerraform(struct?: InterfaceTrunkIsisPasswordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisPasswordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisPasswordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisPasswordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._password = value.password;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class InterfaceTrunkIsisPasswordListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisPasswordListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisPasswordListStructOutputReference {
    return new InterfaceTrunkIsisPasswordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisPriorityListStruct {
  /**
  * 'level-1': Specify priority for level-1 routing; 'level-2': Specify priority for level-2 routing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
  /**
  * Set priority for Designated Router election (Priority value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#priority InterfaceTrunk#priority}
  */
  readonly priority?: number;
}

export function interfaceTrunkIsisPriorityListStructToTerraform(struct?: InterfaceTrunkIsisPriorityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceTrunkIsisPriorityListStructToHclTerraform(struct?: InterfaceTrunkIsisPriorityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisPriorityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisPriorityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisPriorityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._priority = value.priority;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class InterfaceTrunkIsisPriorityListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisPriorityListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisPriorityListStructOutputReference {
    return new InterfaceTrunkIsisPriorityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsisWideMetricListStruct {
  /**
  * 'level-1': Apply metric to level-1 links; 'level-2': Apply metric to level-2 links;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#level InterfaceTrunk#level}
  */
  readonly level?: string;
  /**
  * Configure the wide metric for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#wide_metric InterfaceTrunk#wide_metric}
  */
  readonly wideMetric?: number;
}

export function interfaceTrunkIsisWideMetricListStructToTerraform(struct?: InterfaceTrunkIsisWideMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    wide_metric: cdktf.numberToTerraform(struct!.wideMetric),
  }
}


export function interfaceTrunkIsisWideMetricListStructToHclTerraform(struct?: InterfaceTrunkIsisWideMetricListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wide_metric: {
      value: cdktf.numberToHclTerraform(struct!.wideMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisWideMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkIsisWideMetricListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._wideMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetric = this._wideMetric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsisWideMetricListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._wideMetric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._wideMetric = value.wideMetric;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // wide_metric - computed: false, optional: true, required: false
  private _wideMetric?: number; 
  public get wideMetric() {
    return this.getNumberAttribute('wide_metric');
  }
  public set wideMetric(value: number) {
    this._wideMetric = value;
  }
  public resetWideMetric() {
    this._wideMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricInput() {
    return this._wideMetric;
  }
}

export class InterfaceTrunkIsisWideMetricListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkIsisWideMetricListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkIsisWideMetricListStructOutputReference {
    return new InterfaceTrunkIsisWideMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkIsis {
  /**
  * 'level-1': Level-1 only adjacencies are formed; 'level-1-2': Level-1-2 adjacencies are formed; 'level-2-only': Level-2 only adjacencies are formed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#circuit_type InterfaceTrunk#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Set LSP transmission interval (LSP transmission interval (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#lsp_interval InterfaceTrunk#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * 'broadcast': Specify IS-IS broadcast multi-access network; 'point-to-point': Specify IS-IS point-to-point network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#network InterfaceTrunk#network}
  */
  readonly network?: string;
  /**
  * Add padding to IS-IS hello packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#padding InterfaceTrunk#padding}
  */
  readonly padding?: number;
  /**
  * Set per-LSP retransmission interval (Interval between retransmissions of the same LSP (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#retransmit_interval InterfaceTrunk#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#authentication InterfaceTrunk#authentication}
  */
  readonly authentication?: InterfaceTrunkIsisAuthentication;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#bfd_cfg InterfaceTrunk#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceTrunkIsisBfdCfg;
  /**
  * csnp_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#csnp_interval_list InterfaceTrunk#csnp_interval_list}
  */
  readonly csnpIntervalList?: InterfaceTrunkIsisCsnpIntervalListStruct[] | cdktf.IResolvable;
  /**
  * hello_interval_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval_list InterfaceTrunk#hello_interval_list}
  */
  readonly helloIntervalList?: InterfaceTrunkIsisHelloIntervalListStruct[] | cdktf.IResolvable;
  /**
  * hello_interval_minimal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_interval_minimal_list InterfaceTrunk#hello_interval_minimal_list}
  */
  readonly helloIntervalMinimalList?: InterfaceTrunkIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable;
  /**
  * hello_multiplier_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#hello_multiplier_list InterfaceTrunk#hello_multiplier_list}
  */
  readonly helloMultiplierList?: InterfaceTrunkIsisHelloMultiplierListStruct[] | cdktf.IResolvable;
  /**
  * mesh_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mesh_group InterfaceTrunk#mesh_group}
  */
  readonly meshGroup?: InterfaceTrunkIsisMeshGroup;
  /**
  * metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#metric_list InterfaceTrunk#metric_list}
  */
  readonly metricList?: InterfaceTrunkIsisMetricListStruct[] | cdktf.IResolvable;
  /**
  * password_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#password_list InterfaceTrunk#password_list}
  */
  readonly passwordList?: InterfaceTrunkIsisPasswordListStruct[] | cdktf.IResolvable;
  /**
  * priority_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#priority_list InterfaceTrunk#priority_list}
  */
  readonly priorityList?: InterfaceTrunkIsisPriorityListStruct[] | cdktf.IResolvable;
  /**
  * wide_metric_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#wide_metric_list InterfaceTrunk#wide_metric_list}
  */
  readonly wideMetricList?: InterfaceTrunkIsisWideMetricListStruct[] | cdktf.IResolvable;
}

export function interfaceTrunkIsisToTerraform(struct?: InterfaceTrunkIsisOutputReference | InterfaceTrunkIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_type: cdktf.stringToTerraform(struct!.circuitType),
    lsp_interval: cdktf.numberToTerraform(struct!.lspInterval),
    network: cdktf.stringToTerraform(struct!.network),
    padding: cdktf.numberToTerraform(struct!.padding),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceTrunkIsisAuthenticationToTerraform(struct!.authentication),
    bfd_cfg: interfaceTrunkIsisBfdCfgToTerraform(struct!.bfdCfg),
    csnp_interval_list: cdktf.listMapper(interfaceTrunkIsisCsnpIntervalListStructToTerraform, true)(struct!.csnpIntervalList),
    hello_interval_list: cdktf.listMapper(interfaceTrunkIsisHelloIntervalListStructToTerraform, true)(struct!.helloIntervalList),
    hello_interval_minimal_list: cdktf.listMapper(interfaceTrunkIsisHelloIntervalMinimalListStructToTerraform, true)(struct!.helloIntervalMinimalList),
    hello_multiplier_list: cdktf.listMapper(interfaceTrunkIsisHelloMultiplierListStructToTerraform, true)(struct!.helloMultiplierList),
    mesh_group: interfaceTrunkIsisMeshGroupToTerraform(struct!.meshGroup),
    metric_list: cdktf.listMapper(interfaceTrunkIsisMetricListStructToTerraform, true)(struct!.metricList),
    password_list: cdktf.listMapper(interfaceTrunkIsisPasswordListStructToTerraform, true)(struct!.passwordList),
    priority_list: cdktf.listMapper(interfaceTrunkIsisPriorityListStructToTerraform, true)(struct!.priorityList),
    wide_metric_list: cdktf.listMapper(interfaceTrunkIsisWideMetricListStructToTerraform, true)(struct!.wideMetricList),
  }
}


export function interfaceTrunkIsisToHclTerraform(struct?: InterfaceTrunkIsisOutputReference | InterfaceTrunkIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lsp_interval: {
      value: cdktf.numberToHclTerraform(struct!.lspInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.numberToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: interfaceTrunkIsisAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisAuthenticationList",
    },
    bfd_cfg: {
      value: interfaceTrunkIsisBfdCfgToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisBfdCfgList",
    },
    csnp_interval_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisCsnpIntervalListStructToHclTerraform, true)(struct!.csnpIntervalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisCsnpIntervalListStructList",
    },
    hello_interval_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisHelloIntervalListStructToHclTerraform, true)(struct!.helloIntervalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisHelloIntervalListStructList",
    },
    hello_interval_minimal_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisHelloIntervalMinimalListStructToHclTerraform, true)(struct!.helloIntervalMinimalList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisHelloIntervalMinimalListStructList",
    },
    hello_multiplier_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisHelloMultiplierListStructToHclTerraform, true)(struct!.helloMultiplierList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisHelloMultiplierListStructList",
    },
    mesh_group: {
      value: interfaceTrunkIsisMeshGroupToHclTerraform(struct!.meshGroup),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisMeshGroupList",
    },
    metric_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisMetricListStructToHclTerraform, true)(struct!.metricList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisMetricListStructList",
    },
    password_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisPasswordListStructToHclTerraform, true)(struct!.passwordList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisPasswordListStructList",
    },
    priority_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisPriorityListStructToHclTerraform, true)(struct!.priorityList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisPriorityListStructList",
    },
    wide_metric_list: {
      value: cdktf.listMapperHcl(interfaceTrunkIsisWideMetricListStructToHclTerraform, true)(struct!.wideMetricList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkIsisWideMetricListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkIsisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitType = this._circuitType;
    }
    if (this._lspInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lspInterval = this._lspInterval;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._bfdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdCfg = this._bfdCfg?.internalValue;
    }
    if (this._csnpIntervalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csnpIntervalList = this._csnpIntervalList?.internalValue;
    }
    if (this._helloIntervalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalList = this._helloIntervalList?.internalValue;
    }
    if (this._helloIntervalMinimalList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalMinimalList = this._helloIntervalMinimalList?.internalValue;
    }
    if (this._helloMultiplierList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloMultiplierList = this._helloMultiplierList?.internalValue;
    }
    if (this._meshGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGroup = this._meshGroup?.internalValue;
    }
    if (this._metricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricList = this._metricList?.internalValue;
    }
    if (this._passwordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordList = this._passwordList?.internalValue;
    }
    if (this._priorityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityList = this._priorityList?.internalValue;
    }
    if (this._wideMetricList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideMetricList = this._wideMetricList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._circuitType = undefined;
      this._lspInterval = undefined;
      this._network = undefined;
      this._padding = undefined;
      this._retransmitInterval = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._bfdCfg.internalValue = undefined;
      this._csnpIntervalList.internalValue = undefined;
      this._helloIntervalList.internalValue = undefined;
      this._helloIntervalMinimalList.internalValue = undefined;
      this._helloMultiplierList.internalValue = undefined;
      this._meshGroup.internalValue = undefined;
      this._metricList.internalValue = undefined;
      this._passwordList.internalValue = undefined;
      this._priorityList.internalValue = undefined;
      this._wideMetricList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._circuitType = value.circuitType;
      this._lspInterval = value.lspInterval;
      this._network = value.network;
      this._padding = value.padding;
      this._retransmitInterval = value.retransmitInterval;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._bfdCfg.internalValue = value.bfdCfg;
      this._csnpIntervalList.internalValue = value.csnpIntervalList;
      this._helloIntervalList.internalValue = value.helloIntervalList;
      this._helloIntervalMinimalList.internalValue = value.helloIntervalMinimalList;
      this._helloMultiplierList.internalValue = value.helloMultiplierList;
      this._meshGroup.internalValue = value.meshGroup;
      this._metricList.internalValue = value.metricList;
      this._passwordList.internalValue = value.passwordList;
      this._priorityList.internalValue = value.priorityList;
      this._wideMetricList.internalValue = value.wideMetricList;
    }
  }

  // circuit_type - computed: false, optional: true, required: false
  private _circuitType?: string; 
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }
  public set circuitType(value: string) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // lsp_interval - computed: false, optional: true, required: false
  private _lspInterval?: number; 
  public get lspInterval() {
    return this.getNumberAttribute('lsp_interval');
  }
  public set lspInterval(value: number) {
    this._lspInterval = value;
  }
  public resetLspInterval() {
    this._lspInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspIntervalInput() {
    return this._lspInterval;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: number; 
  public get padding() {
    return this.getNumberAttribute('padding');
  }
  public set padding(value: number) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceTrunkIsisAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceTrunkIsisAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // bfd_cfg - computed: false, optional: true, required: false
  private _bfdCfg = new InterfaceTrunkIsisBfdCfgOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceTrunkIsisBfdCfg) {
    this._bfdCfg.internalValue = value;
  }
  public resetBfdCfg() {
    this._bfdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdCfgInput() {
    return this._bfdCfg.internalValue;
  }

  // csnp_interval_list - computed: false, optional: true, required: false
  private _csnpIntervalList = new InterfaceTrunkIsisCsnpIntervalListStructList(this, "csnp_interval_list", false);
  public get csnpIntervalList() {
    return this._csnpIntervalList;
  }
  public putCsnpIntervalList(value: InterfaceTrunkIsisCsnpIntervalListStruct[] | cdktf.IResolvable) {
    this._csnpIntervalList.internalValue = value;
  }
  public resetCsnpIntervalList() {
    this._csnpIntervalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalListInput() {
    return this._csnpIntervalList.internalValue;
  }

  // hello_interval_list - computed: false, optional: true, required: false
  private _helloIntervalList = new InterfaceTrunkIsisHelloIntervalListStructList(this, "hello_interval_list", false);
  public get helloIntervalList() {
    return this._helloIntervalList;
  }
  public putHelloIntervalList(value: InterfaceTrunkIsisHelloIntervalListStruct[] | cdktf.IResolvable) {
    this._helloIntervalList.internalValue = value;
  }
  public resetHelloIntervalList() {
    this._helloIntervalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalListInput() {
    return this._helloIntervalList.internalValue;
  }

  // hello_interval_minimal_list - computed: false, optional: true, required: false
  private _helloIntervalMinimalList = new InterfaceTrunkIsisHelloIntervalMinimalListStructList(this, "hello_interval_minimal_list", false);
  public get helloIntervalMinimalList() {
    return this._helloIntervalMinimalList;
  }
  public putHelloIntervalMinimalList(value: InterfaceTrunkIsisHelloIntervalMinimalListStruct[] | cdktf.IResolvable) {
    this._helloIntervalMinimalList.internalValue = value;
  }
  public resetHelloIntervalMinimalList() {
    this._helloIntervalMinimalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalMinimalListInput() {
    return this._helloIntervalMinimalList.internalValue;
  }

  // hello_multiplier_list - computed: false, optional: true, required: false
  private _helloMultiplierList = new InterfaceTrunkIsisHelloMultiplierListStructList(this, "hello_multiplier_list", false);
  public get helloMultiplierList() {
    return this._helloMultiplierList;
  }
  public putHelloMultiplierList(value: InterfaceTrunkIsisHelloMultiplierListStruct[] | cdktf.IResolvable) {
    this._helloMultiplierList.internalValue = value;
  }
  public resetHelloMultiplierList() {
    this._helloMultiplierList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierListInput() {
    return this._helloMultiplierList.internalValue;
  }

  // mesh_group - computed: false, optional: true, required: false
  private _meshGroup = new InterfaceTrunkIsisMeshGroupOutputReference(this, "mesh_group");
  public get meshGroup() {
    return this._meshGroup;
  }
  public putMeshGroup(value: InterfaceTrunkIsisMeshGroup) {
    this._meshGroup.internalValue = value;
  }
  public resetMeshGroup() {
    this._meshGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupInput() {
    return this._meshGroup.internalValue;
  }

  // metric_list - computed: false, optional: true, required: false
  private _metricList = new InterfaceTrunkIsisMetricListStructList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }
  public putMetricList(value: InterfaceTrunkIsisMetricListStruct[] | cdktf.IResolvable) {
    this._metricList.internalValue = value;
  }
  public resetMetricList() {
    this._metricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricListInput() {
    return this._metricList.internalValue;
  }

  // password_list - computed: false, optional: true, required: false
  private _passwordList = new InterfaceTrunkIsisPasswordListStructList(this, "password_list", false);
  public get passwordList() {
    return this._passwordList;
  }
  public putPasswordList(value: InterfaceTrunkIsisPasswordListStruct[] | cdktf.IResolvable) {
    this._passwordList.internalValue = value;
  }
  public resetPasswordList() {
    this._passwordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordListInput() {
    return this._passwordList.internalValue;
  }

  // priority_list - computed: false, optional: true, required: false
  private _priorityList = new InterfaceTrunkIsisPriorityListStructList(this, "priority_list", false);
  public get priorityList() {
    return this._priorityList;
  }
  public putPriorityList(value: InterfaceTrunkIsisPriorityListStruct[] | cdktf.IResolvable) {
    this._priorityList.internalValue = value;
  }
  public resetPriorityList() {
    this._priorityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityListInput() {
    return this._priorityList.internalValue;
  }

  // wide_metric_list - computed: false, optional: true, required: false
  private _wideMetricList = new InterfaceTrunkIsisWideMetricListStructList(this, "wide_metric_list", false);
  public get wideMetricList() {
    return this._wideMetricList;
  }
  public putWideMetricList(value: InterfaceTrunkIsisWideMetricListStruct[] | cdktf.IResolvable) {
    this._wideMetricList.internalValue = value;
  }
  public resetWideMetricList() {
    this._wideMetricList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricListInput() {
    return this._wideMetricList.internalValue;
  }
}
export interface InterfaceTrunkLw4O6 {
  /**
  * Configure LW-4over6 outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inside InterfaceTrunk#inside}
  */
  readonly inside?: number;
  /**
  * Configure LW-4over6 inside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#outside InterfaceTrunk#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkLw4O6ToTerraform(struct?: InterfaceTrunkLw4O6OutputReference | InterfaceTrunkLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkLw4O6ToHclTerraform(struct?: InterfaceTrunkLw4O6OutputReference | InterfaceTrunkLw4O6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkLw4O6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkLw4O6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkLw4O6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceTrunkMap {
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#inside InterfaceTrunk#inside}
  */
  readonly inside?: number;
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#map_t_inside InterfaceTrunk#map_t_inside}
  */
  readonly mapTInside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#map_t_outside InterfaceTrunk#map_t_outside}
  */
  readonly mapTOutside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#outside InterfaceTrunk#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkMapToTerraform(struct?: InterfaceTrunkMapOutputReference | InterfaceTrunkMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.numberToTerraform(struct!.inside),
    map_t_inside: cdktf.numberToTerraform(struct!.mapTInside),
    map_t_outside: cdktf.numberToTerraform(struct!.mapTOutside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkMapToHclTerraform(struct?: InterfaceTrunkMapOutputReference | InterfaceTrunkMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_inside: {
      value: cdktf.numberToHclTerraform(struct!.mapTInside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map_t_outside: {
      value: cdktf.numberToHclTerraform(struct!.mapTOutside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._mapTInside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTInside = this._mapTInside;
    }
    if (this._mapTOutside !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTOutside = this._mapTOutside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._mapTInside = undefined;
      this._mapTOutside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._mapTInside = value.mapTInside;
      this._mapTOutside = value.mapTOutside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // map_t_inside - computed: false, optional: true, required: false
  private _mapTInside?: number; 
  public get mapTInside() {
    return this.getNumberAttribute('map_t_inside');
  }
  public set mapTInside(value: number) {
    this._mapTInside = value;
  }
  public resetMapTInside() {
    this._mapTInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTInsideInput() {
    return this._mapTInside;
  }

  // map_t_outside - computed: false, optional: true, required: false
  private _mapTOutside?: number; 
  public get mapTOutside() {
    return this.getNumberAttribute('map_t_outside');
  }
  public set mapTOutside(value: number) {
    this._mapTOutside = value;
  }
  public resetMapTOutside() {
    this._mapTOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTOutsideInput() {
    return this._mapTOutside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}
export interface InterfaceTrunkNptv6DomainListStruct {
  /**
  * 'inside': This interface is connected to NPTv6 inside networks; 'outside': This interface is connected to NPTv6 outside networks;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#bind_type InterfaceTrunk#bind_type}
  */
  readonly bindType: string;
  /**
  * NPTv6 domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#domain_name InterfaceTrunk#domain_name}
  */
  readonly domainName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
}

export function interfaceTrunkNptv6DomainListStructToTerraform(struct?: InterfaceTrunkNptv6DomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_type: cdktf.stringToTerraform(struct!.bindType),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceTrunkNptv6DomainListStructToHclTerraform(struct?: InterfaceTrunkNptv6DomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_type: {
      value: cdktf.stringToHclTerraform(struct!.bindType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkNptv6DomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkNptv6DomainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindType = this._bindType;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkNptv6DomainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindType = undefined;
      this._domainName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindType = value.bindType;
      this._domainName = value.domainName;
      this._uuid = value.uuid;
    }
  }

  // bind_type - computed: false, optional: false, required: true
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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
}

export class InterfaceTrunkNptv6DomainListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkNptv6DomainListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkNptv6DomainListStructOutputReference {
    return new InterfaceTrunkNptv6DomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkNptv6 {
  /**
  * domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#domain_list InterfaceTrunk#domain_list}
  */
  readonly domainList?: InterfaceTrunkNptv6DomainListStruct[] | cdktf.IResolvable;
}

export function interfaceTrunkNptv6ToTerraform(struct?: InterfaceTrunkNptv6OutputReference | InterfaceTrunkNptv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_list: cdktf.listMapper(interfaceTrunkNptv6DomainListStructToTerraform, true)(struct!.domainList),
  }
}


export function interfaceTrunkNptv6ToHclTerraform(struct?: InterfaceTrunkNptv6OutputReference | InterfaceTrunkNptv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_list: {
      value: cdktf.listMapperHcl(interfaceTrunkNptv6DomainListStructToHclTerraform, true)(struct!.domainList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkNptv6DomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkNptv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkNptv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainList = this._domainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkNptv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainList.internalValue = value.domainList;
    }
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList = new InterfaceTrunkNptv6DomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }
  public putDomainList(value: InterfaceTrunkNptv6DomainListStruct[] | cdktf.IResolvable) {
    this._domainList.internalValue = value;
  }
  public resetDomainList() {
    this._domainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList.internalValue;
  }
}
export interface InterfaceTrunkSamplingEnable {
  /**
  * 'all': all; 'num_pkts': num_pkts; 'num_total_bytes': num_total_bytes; 'num_unicast_pkts': num_unicast_pkts; 'num_broadcast_pkts': num_broadcast_pkts; 'num_multicast_pkts': num_multicast_pkts; 'num_tx_pkts': num_tx_pkts; 'num_total_tx_bytes': num_total_tx_bytes; 'num_unicast_tx_pkts': num_unicast_tx_pkts; 'num_broadcast_tx_pkts': num_broadcast_tx_pkts; 'num_multicast_tx_pkts': num_multicast_tx_pkts; 'dropped_dis_rx_pkts': dropped_dis_rx_pkts; 'dropped_rx_pkts': dropped_rx_pkts; 'dropped_dis_tx_pkts': dropped_dis_tx_pkts; 'dropped_tx_pkts': dropped_tx_pkts;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#counters1 InterfaceTrunk#counters1}
  */
  readonly counters1?: string;
}

export function interfaceTrunkSamplingEnableToTerraform(struct?: InterfaceTrunkSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function interfaceTrunkSamplingEnableToHclTerraform(struct?: InterfaceTrunkSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class InterfaceTrunkSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkSamplingEnableOutputReference {
    return new InterfaceTrunkSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkSpanningTreeInstanceListStruct {
  /**
  * Instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_start InterfaceTrunk#instance_start}
  */
  readonly instanceStart?: number;
  /**
  * Path cost (Limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#mstp_path_cost InterfaceTrunk#mstp_path_cost}
  */
  readonly mstpPathCost?: number;
}

export function interfaceTrunkSpanningTreeInstanceListStructToTerraform(struct?: InterfaceTrunkSpanningTreeInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_start: cdktf.numberToTerraform(struct!.instanceStart),
    mstp_path_cost: cdktf.numberToTerraform(struct!.mstpPathCost),
  }
}


export function interfaceTrunkSpanningTreeInstanceListStructToHclTerraform(struct?: InterfaceTrunkSpanningTreeInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_start: {
      value: cdktf.numberToHclTerraform(struct!.instanceStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mstp_path_cost: {
      value: cdktf.numberToHclTerraform(struct!.mstpPathCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkSpanningTreeInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceTrunkSpanningTreeInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceStart = this._instanceStart;
    }
    if (this._mstpPathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.mstpPathCost = this._mstpPathCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkSpanningTreeInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceStart = undefined;
      this._mstpPathCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceStart = value.instanceStart;
      this._mstpPathCost = value.mstpPathCost;
    }
  }

  // instance_start - computed: false, optional: true, required: false
  private _instanceStart?: number; 
  public get instanceStart() {
    return this.getNumberAttribute('instance_start');
  }
  public set instanceStart(value: number) {
    this._instanceStart = value;
  }
  public resetInstanceStart() {
    this._instanceStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStartInput() {
    return this._instanceStart;
  }

  // mstp_path_cost - computed: false, optional: true, required: false
  private _mstpPathCost?: number; 
  public get mstpPathCost() {
    return this.getNumberAttribute('mstp_path_cost');
  }
  public set mstpPathCost(value: number) {
    this._mstpPathCost = value;
  }
  public resetMstpPathCost() {
    this._mstpPathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mstpPathCostInput() {
    return this._mstpPathCost;
  }
}

export class InterfaceTrunkSpanningTreeInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceTrunkSpanningTreeInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceTrunkSpanningTreeInstanceListStructOutputReference {
    return new InterfaceTrunkSpanningTreeInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceTrunkSpanningTree {
  /**
  * Enable admin-edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#admin_edge InterfaceTrunk#admin_edge}
  */
  readonly adminEdge?: number;
  /**
  * Enable auto-edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#auto_edge InterfaceTrunk#auto_edge}
  */
  readonly autoEdge?: number;
  /**
  * Path cost (Limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#path_cost InterfaceTrunk#path_cost}
  */
  readonly pathCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#uuid InterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#instance_list InterfaceTrunk#instance_list}
  */
  readonly instanceList?: InterfaceTrunkSpanningTreeInstanceListStruct[] | cdktf.IResolvable;
}

export function interfaceTrunkSpanningTreeToTerraform(struct?: InterfaceTrunkSpanningTreeOutputReference | InterfaceTrunkSpanningTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_edge: cdktf.numberToTerraform(struct!.adminEdge),
    auto_edge: cdktf.numberToTerraform(struct!.autoEdge),
    path_cost: cdktf.numberToTerraform(struct!.pathCost),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    instance_list: cdktf.listMapper(interfaceTrunkSpanningTreeInstanceListStructToTerraform, true)(struct!.instanceList),
  }
}


export function interfaceTrunkSpanningTreeToHclTerraform(struct?: InterfaceTrunkSpanningTreeOutputReference | InterfaceTrunkSpanningTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_edge: {
      value: cdktf.numberToHclTerraform(struct!.adminEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_edge: {
      value: cdktf.numberToHclTerraform(struct!.autoEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_cost: {
      value: cdktf.numberToHclTerraform(struct!.pathCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_list: {
      value: cdktf.listMapperHcl(interfaceTrunkSpanningTreeInstanceListStructToHclTerraform, true)(struct!.instanceList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceTrunkSpanningTreeInstanceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceTrunkSpanningTreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceTrunkSpanningTree | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEdge = this._adminEdge;
    }
    if (this._autoEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEdge = this._autoEdge;
    }
    if (this._pathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathCost = this._pathCost;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._instanceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceList = this._instanceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceTrunkSpanningTree | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEdge = undefined;
      this._autoEdge = undefined;
      this._pathCost = undefined;
      this._uuid = undefined;
      this._instanceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEdge = value.adminEdge;
      this._autoEdge = value.autoEdge;
      this._pathCost = value.pathCost;
      this._uuid = value.uuid;
      this._instanceList.internalValue = value.instanceList;
    }
  }

  // admin_edge - computed: false, optional: true, required: false
  private _adminEdge?: number; 
  public get adminEdge() {
    return this.getNumberAttribute('admin_edge');
  }
  public set adminEdge(value: number) {
    this._adminEdge = value;
  }
  public resetAdminEdge() {
    this._adminEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEdgeInput() {
    return this._adminEdge;
  }

  // auto_edge - computed: false, optional: true, required: false
  private _autoEdge?: number; 
  public get autoEdge() {
    return this.getNumberAttribute('auto_edge');
  }
  public set autoEdge(value: number) {
    this._autoEdge = value;
  }
  public resetAutoEdge() {
    this._autoEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEdgeInput() {
    return this._autoEdge;
  }

  // path_cost - computed: false, optional: true, required: false
  private _pathCost?: number; 
  public get pathCost() {
    return this.getNumberAttribute('path_cost');
  }
  public set pathCost(value: number) {
    this._pathCost = value;
  }
  public resetPathCost() {
    this._pathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathCostInput() {
    return this._pathCost;
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

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new InterfaceTrunkSpanningTreeInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: InterfaceTrunkSpanningTreeInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk thunder_interface_trunk}
*/
export class InterfaceTrunk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_trunk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTrunk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTrunk to import
  * @param importFromId The id of the existing InterfaceTrunk that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTrunk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_trunk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_trunk thunder_interface_trunk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTrunkConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTrunkConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_trunk',
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
    this._action = config.action;
    this._doAutoRecovery = config.doAutoRecovery;
    this._gamingProtocolCompliance = config.gamingProtocolCompliance;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._l3VlanFwdDisable = config.l3VlanFwdDisable;
    this._macLearning = config.macLearning;
    this._mtu = config.mtu;
    this._name = config.name;
    this._portsThreshold = config.portsThreshold;
    this._syncModifyDisable = config.syncModifyDisable;
    this._timer = config.timer;
    this._trapSource = config.trapSource;
    this._updateL2Info = config.updateL2Info;
    this._useHwHash = config.useHwHash;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._virtualWire = config.virtualWire;
    this._vlanLearning = config.vlanLearning;
    this._accessList.internalValue = config.accessList;
    this._bfd.internalValue = config.bfd;
    this._ddos.internalValue = config.ddos;
    this._icmpRateLimit.internalValue = config.icmpRateLimit;
    this._icmpv6RateLimit.internalValue = config.icmpv6RateLimit;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._isis.internalValue = config.isis;
    this._lw4O6.internalValue = config.lw4O6;
    this._map.internalValue = config.map;
    this._nptv6.internalValue = config.nptv6;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._spanningTree.internalValue = config.spanningTree;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
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

  // do_auto_recovery - computed: false, optional: true, required: false
  private _doAutoRecovery?: number; 
  public get doAutoRecovery() {
    return this.getNumberAttribute('do_auto_recovery');
  }
  public set doAutoRecovery(value: number) {
    this._doAutoRecovery = value;
  }
  public resetDoAutoRecovery() {
    this._doAutoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doAutoRecoveryInput() {
    return this._doAutoRecovery;
  }

  // gaming_protocol_compliance - computed: false, optional: true, required: false
  private _gamingProtocolCompliance?: number; 
  public get gamingProtocolCompliance() {
    return this.getNumberAttribute('gaming_protocol_compliance');
  }
  public set gamingProtocolCompliance(value: number) {
    this._gamingProtocolCompliance = value;
  }
  public resetGamingProtocolCompliance() {
    this._gamingProtocolCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gamingProtocolComplianceInput() {
    return this._gamingProtocolCompliance;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: number; 
  public get ifnum() {
    return this.getNumberAttribute('ifnum');
  }
  public set ifnum(value: number) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // l3_vlan_fwd_disable - computed: false, optional: true, required: false
  private _l3VlanFwdDisable?: number; 
  public get l3VlanFwdDisable() {
    return this.getNumberAttribute('l3_vlan_fwd_disable');
  }
  public set l3VlanFwdDisable(value: number) {
    this._l3VlanFwdDisable = value;
  }
  public resetL3VlanFwdDisable() {
    this._l3VlanFwdDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3VlanFwdDisableInput() {
    return this._l3VlanFwdDisable;
  }

  // mac_learning - computed: false, optional: true, required: false
  private _macLearning?: string; 
  public get macLearning() {
    return this.getStringAttribute('mac_learning');
  }
  public set macLearning(value: string) {
    this._macLearning = value;
  }
  public resetMacLearning() {
    this._macLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLearningInput() {
    return this._macLearning;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // ports_threshold - computed: false, optional: true, required: false
  private _portsThreshold?: number; 
  public get portsThreshold() {
    return this.getNumberAttribute('ports_threshold');
  }
  public set portsThreshold(value: number) {
    this._portsThreshold = value;
  }
  public resetPortsThreshold() {
    this._portsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsThresholdInput() {
    return this._portsThreshold;
  }

  // sync_modify_disable - computed: false, optional: true, required: false
  private _syncModifyDisable?: number; 
  public get syncModifyDisable() {
    return this.getNumberAttribute('sync_modify_disable');
  }
  public set syncModifyDisable(value: number) {
    this._syncModifyDisable = value;
  }
  public resetSyncModifyDisable() {
    this._syncModifyDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModifyDisableInput() {
    return this._syncModifyDisable;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // trap_source - computed: false, optional: true, required: false
  private _trapSource?: number; 
  public get trapSource() {
    return this.getNumberAttribute('trap_source');
  }
  public set trapSource(value: number) {
    this._trapSource = value;
  }
  public resetTrapSource() {
    this._trapSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapSourceInput() {
    return this._trapSource;
  }

  // update_l2_info - computed: false, optional: true, required: false
  private _updateL2Info?: number; 
  public get updateL2Info() {
    return this.getNumberAttribute('update_l2_info');
  }
  public set updateL2Info(value: number) {
    this._updateL2Info = value;
  }
  public resetUpdateL2Info() {
    this._updateL2Info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateL2InfoInput() {
    return this._updateL2Info;
  }

  // use_hw_hash - computed: false, optional: true, required: false
  private _useHwHash?: number; 
  public get useHwHash() {
    return this.getNumberAttribute('use_hw_hash');
  }
  public set useHwHash(value: number) {
    this._useHwHash = value;
  }
  public resetUseHwHash() {
    this._useHwHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHwHashInput() {
    return this._useHwHash;
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

  // virtual_wire - computed: false, optional: true, required: false
  private _virtualWire?: number; 
  public get virtualWire() {
    return this.getNumberAttribute('virtual_wire');
  }
  public set virtualWire(value: number) {
    this._virtualWire = value;
  }
  public resetVirtualWire() {
    this._virtualWire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireInput() {
    return this._virtualWire;
  }

  // vlan_learning - computed: false, optional: true, required: false
  private _vlanLearning?: string; 
  public get vlanLearning() {
    return this.getStringAttribute('vlan_learning');
  }
  public set vlanLearning(value: string) {
    this._vlanLearning = value;
  }
  public resetVlanLearning() {
    this._vlanLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanLearningInput() {
    return this._vlanLearning;
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList = new InterfaceTrunkAccessListStructOutputReference(this, "access_list");
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: InterfaceTrunkAccessListStruct) {
    this._accessList.internalValue = value;
  }
  public resetAccessList() {
    this._accessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList.internalValue;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new InterfaceTrunkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: InterfaceTrunkBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new InterfaceTrunkDdosOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: InterfaceTrunkDdos) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }

  // icmp_rate_limit - computed: false, optional: true, required: false
  private _icmpRateLimit = new InterfaceTrunkIcmpRateLimitOutputReference(this, "icmp_rate_limit");
  public get icmpRateLimit() {
    return this._icmpRateLimit;
  }
  public putIcmpRateLimit(value: InterfaceTrunkIcmpRateLimit) {
    this._icmpRateLimit.internalValue = value;
  }
  public resetIcmpRateLimit() {
    this._icmpRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateLimitInput() {
    return this._icmpRateLimit.internalValue;
  }

  // icmpv6_rate_limit - computed: false, optional: true, required: false
  private _icmpv6RateLimit = new InterfaceTrunkIcmpv6RateLimitOutputReference(this, "icmpv6_rate_limit");
  public get icmpv6RateLimit() {
    return this._icmpv6RateLimit;
  }
  public putIcmpv6RateLimit(value: InterfaceTrunkIcmpv6RateLimit) {
    this._icmpv6RateLimit.internalValue = value;
  }
  public resetIcmpv6RateLimit() {
    this._icmpv6RateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RateLimitInput() {
    return this._icmpv6RateLimit.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new InterfaceTrunkIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: InterfaceTrunkIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new InterfaceTrunkIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InterfaceTrunkIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceTrunkIsisOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceTrunkIsis) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // lw_4o6 - computed: false, optional: true, required: false
  private _lw4O6 = new InterfaceTrunkLw4O6OutputReference(this, "lw_4o6");
  public get lw4O6() {
    return this._lw4O6;
  }
  public putLw4O6(value: InterfaceTrunkLw4O6) {
    this._lw4O6.internalValue = value;
  }
  public resetLw4O6() {
    this._lw4O6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6Input() {
    return this._lw4O6.internalValue;
  }

  // map - computed: false, optional: true, required: false
  private _map = new InterfaceTrunkMapOutputReference(this, "map");
  public get map() {
    return this._map;
  }
  public putMap(value: InterfaceTrunkMap) {
    this._map.internalValue = value;
  }
  public resetMap() {
    this._map.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }

  // nptv6 - computed: false, optional: true, required: false
  private _nptv6 = new InterfaceTrunkNptv6OutputReference(this, "nptv6");
  public get nptv6() {
    return this._nptv6;
  }
  public putNptv6(value: InterfaceTrunkNptv6) {
    this._nptv6.internalValue = value;
  }
  public resetNptv6() {
    this._nptv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nptv6Input() {
    return this._nptv6.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new InterfaceTrunkSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: InterfaceTrunkSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // spanning_tree - computed: false, optional: true, required: false
  private _spanningTree = new InterfaceTrunkSpanningTreeOutputReference(this, "spanning_tree");
  public get spanningTree() {
    return this._spanningTree;
  }
  public putSpanningTree(value: InterfaceTrunkSpanningTree) {
    this._spanningTree.internalValue = value;
  }
  public resetSpanningTree() {
    this._spanningTree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanningTreeInput() {
    return this._spanningTree.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      do_auto_recovery: cdktf.numberToTerraform(this._doAutoRecovery),
      gaming_protocol_compliance: cdktf.numberToTerraform(this._gamingProtocolCompliance),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.numberToTerraform(this._ifnum),
      l3_vlan_fwd_disable: cdktf.numberToTerraform(this._l3VlanFwdDisable),
      mac_learning: cdktf.stringToTerraform(this._macLearning),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ports_threshold: cdktf.numberToTerraform(this._portsThreshold),
      sync_modify_disable: cdktf.numberToTerraform(this._syncModifyDisable),
      timer: cdktf.numberToTerraform(this._timer),
      trap_source: cdktf.numberToTerraform(this._trapSource),
      update_l2_info: cdktf.numberToTerraform(this._updateL2Info),
      use_hw_hash: cdktf.numberToTerraform(this._useHwHash),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_wire: cdktf.numberToTerraform(this._virtualWire),
      vlan_learning: cdktf.stringToTerraform(this._vlanLearning),
      access_list: interfaceTrunkAccessListStructToTerraform(this._accessList.internalValue),
      bfd: interfaceTrunkBfdToTerraform(this._bfd.internalValue),
      ddos: interfaceTrunkDdosToTerraform(this._ddos.internalValue),
      icmp_rate_limit: interfaceTrunkIcmpRateLimitToTerraform(this._icmpRateLimit.internalValue),
      icmpv6_rate_limit: interfaceTrunkIcmpv6RateLimitToTerraform(this._icmpv6RateLimit.internalValue),
      ip: interfaceTrunkIpToTerraform(this._ip.internalValue),
      ipv6: interfaceTrunkIpv6ToTerraform(this._ipv6.internalValue),
      isis: interfaceTrunkIsisToTerraform(this._isis.internalValue),
      lw_4o6: interfaceTrunkLw4O6ToTerraform(this._lw4O6.internalValue),
      map: interfaceTrunkMapToTerraform(this._map.internalValue),
      nptv6: interfaceTrunkNptv6ToTerraform(this._nptv6.internalValue),
      sampling_enable: cdktf.listMapper(interfaceTrunkSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      spanning_tree: interfaceTrunkSpanningTreeToTerraform(this._spanningTree.internalValue),
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
      do_auto_recovery: {
        value: cdktf.numberToHclTerraform(this._doAutoRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gaming_protocol_compliance: {
        value: cdktf.numberToHclTerraform(this._gamingProtocolCompliance),
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
      ifnum: {
        value: cdktf.numberToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_vlan_fwd_disable: {
        value: cdktf.numberToHclTerraform(this._l3VlanFwdDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_learning: {
        value: cdktf.stringToHclTerraform(this._macLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports_threshold: {
        value: cdktf.numberToHclTerraform(this._portsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_modify_disable: {
        value: cdktf.numberToHclTerraform(this._syncModifyDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_source: {
        value: cdktf.numberToHclTerraform(this._trapSource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_l2_info: {
        value: cdktf.numberToHclTerraform(this._updateL2Info),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_hw_hash: {
        value: cdktf.numberToHclTerraform(this._useHwHash),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      virtual_wire: {
        value: cdktf.numberToHclTerraform(this._virtualWire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_learning: {
        value: cdktf.stringToHclTerraform(this._vlanLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_list: {
        value: interfaceTrunkAccessListStructToHclTerraform(this._accessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkAccessListStructList",
      },
      bfd: {
        value: interfaceTrunkBfdToHclTerraform(this._bfd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkBfdList",
      },
      ddos: {
        value: interfaceTrunkDdosToHclTerraform(this._ddos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkDdosList",
      },
      icmp_rate_limit: {
        value: interfaceTrunkIcmpRateLimitToHclTerraform(this._icmpRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkIcmpRateLimitList",
      },
      icmpv6_rate_limit: {
        value: interfaceTrunkIcmpv6RateLimitToHclTerraform(this._icmpv6RateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkIcmpv6RateLimitList",
      },
      ip: {
        value: interfaceTrunkIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkIpList",
      },
      ipv6: {
        value: interfaceTrunkIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkIpv6List",
      },
      isis: {
        value: interfaceTrunkIsisToHclTerraform(this._isis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkIsisList",
      },
      lw_4o6: {
        value: interfaceTrunkLw4O6ToHclTerraform(this._lw4O6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkLw4O6List",
      },
      map: {
        value: interfaceTrunkMapToHclTerraform(this._map.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkMapList",
      },
      nptv6: {
        value: interfaceTrunkNptv6ToHclTerraform(this._nptv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkNptv6List",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(interfaceTrunkSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkSamplingEnableList",
      },
      spanning_tree: {
        value: interfaceTrunkSpanningTreeToHclTerraform(this._spanningTree.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceTrunkSpanningTreeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
