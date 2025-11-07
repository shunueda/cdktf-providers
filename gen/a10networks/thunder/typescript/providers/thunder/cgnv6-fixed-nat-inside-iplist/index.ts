// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6FixedNatInsideIplistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bind destination based Rule-List (Fixed NAT Rule-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#dest_rule_list Cgnv6FixedNatInsideIplist#dest_rule_list}
  */
  readonly destRuleList?: string;
  /**
  * Configure size of Dynamic pool (Default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#dynamic_pool_size Cgnv6FixedNatInsideIplist#dynamic_pool_size}
  */
  readonly dynamicPoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#id Cgnv6FixedNatInsideIplist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of IP List used to specify Inside Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#inside_ip_list Cgnv6FixedNatInsideIplist#inside_ip_list}
  */
  readonly insideIpList: string;
  /**
  * 'use-all-nat-ips': Use all the NAT IP addresses configured; 'use-least-nat-ips': Use the least number of NAT IP addresses required (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#method Cgnv6FixedNatInsideIplist#method}
  */
  readonly method?: string;
  /**
  * IPv4 End NAT Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#nat_end_address Cgnv6FixedNatInsideIplist#nat_end_address}
  */
  readonly natEndAddress?: string;
  /**
  * Name of IP List used to specify NAT addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#nat_ip_list Cgnv6FixedNatInsideIplist#nat_ip_list}
  */
  readonly natIpList?: string;
  /**
  * NAT Addresses IP Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#nat_netmask Cgnv6FixedNatInsideIplist#nat_netmask}
  */
  readonly natNetmask?: string;
  /**
  * Start NAT Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#nat_start_address Cgnv6FixedNatInsideIplist#nat_start_address}
  */
  readonly natStartAddress?: string;
  /**
  * Inside User Partition (Partition Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#partition Cgnv6FixedNatInsideIplist#partition}
  */
  readonly partition: string;
  /**
  * Configure Ports per Inside User (ports-per-user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#ports_per_user Cgnv6FixedNatInsideIplist#ports_per_user}
  */
  readonly portsPerUser?: number;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (Default: off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#respond_to_user_mac Cgnv6FixedNatInsideIplist#respond_to_user_mac}
  */
  readonly respondToUserMac?: number;
  /**
  * Configure per user quota on sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#session_quota Cgnv6FixedNatInsideIplist#session_quota}
  */
  readonly sessionQuota?: number;
  /**
  * Not using the first block of ports for NAT IPs smaller than the configured offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#skip_ports_on_rollover Cgnv6FixedNatInsideIplist#skip_ports_on_rollover}
  */
  readonly skipPortsOnRollover?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#uuid Cgnv6FixedNatInsideIplist#uuid}
  */
  readonly uuid?: string;
  /**
  * VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#vrid Cgnv6FixedNatInsideIplist#vrid}
  */
  readonly vrid?: number;
  /**
  * offset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#offset Cgnv6FixedNatInsideIplist#offset}
  */
  readonly offset?: Cgnv6FixedNatInsideIplistOffset;
  /**
  * usable_nat_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#usable_nat_ports Cgnv6FixedNatInsideIplist#usable_nat_ports}
  */
  readonly usableNatPorts?: Cgnv6FixedNatInsideIplistUsableNatPorts;
}
export interface Cgnv6FixedNatInsideIplistOffset {
  /**
  * Configure a numeric offset to the first NAT IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#numeric_offset Cgnv6FixedNatInsideIplist#numeric_offset}
  */
  readonly numericOffset?: number;
  /**
  * Randomly choose the first NAT IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#random Cgnv6FixedNatInsideIplist#random}
  */
  readonly random?: number;
}

export function cgnv6FixedNatInsideIplistOffsetToTerraform(struct?: Cgnv6FixedNatInsideIplistOffsetOutputReference | Cgnv6FixedNatInsideIplistOffset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_offset: cdktf.numberToTerraform(struct!.numericOffset),
    random: cdktf.numberToTerraform(struct!.random),
  }
}


export function cgnv6FixedNatInsideIplistOffsetToHclTerraform(struct?: Cgnv6FixedNatInsideIplistOffsetOutputReference | Cgnv6FixedNatInsideIplistOffset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    numeric_offset: {
      value: cdktf.numberToHclTerraform(struct!.numericOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    random: {
      value: cdktf.numberToHclTerraform(struct!.random),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6FixedNatInsideIplistOffsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6FixedNatInsideIplistOffset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericOffset = this._numericOffset;
    }
    if (this._random !== undefined) {
      hasAnyValues = true;
      internalValueResult.random = this._random;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6FixedNatInsideIplistOffset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numericOffset = undefined;
      this._random = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numericOffset = value.numericOffset;
      this._random = value.random;
    }
  }

  // numeric_offset - computed: false, optional: true, required: false
  private _numericOffset?: number; 
  public get numericOffset() {
    return this.getNumberAttribute('numeric_offset');
  }
  public set numericOffset(value: number) {
    this._numericOffset = value;
  }
  public resetNumericOffset() {
    this._numericOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericOffsetInput() {
    return this._numericOffset;
  }

  // random - computed: false, optional: true, required: false
  private _random?: number; 
  public get random() {
    return this.getNumberAttribute('random');
  }
  public set random(value: number) {
    this._random = value;
  }
  public resetRandom() {
    this._random = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random;
  }
}
export interface Cgnv6FixedNatInsideIplistUsableNatPorts {
  /**
  * End Port of Usable NAT Ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#usable_end_port Cgnv6FixedNatInsideIplist#usable_end_port}
  */
  readonly usableEndPort?: number;
  /**
  * Start Port of Usable NAT Ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#usable_start_port Cgnv6FixedNatInsideIplist#usable_start_port}
  */
  readonly usableStartPort?: number;
}

export function cgnv6FixedNatInsideIplistUsableNatPortsToTerraform(struct?: Cgnv6FixedNatInsideIplistUsableNatPortsOutputReference | Cgnv6FixedNatInsideIplistUsableNatPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    usable_end_port: cdktf.numberToTerraform(struct!.usableEndPort),
    usable_start_port: cdktf.numberToTerraform(struct!.usableStartPort),
  }
}


export function cgnv6FixedNatInsideIplistUsableNatPortsToHclTerraform(struct?: Cgnv6FixedNatInsideIplistUsableNatPortsOutputReference | Cgnv6FixedNatInsideIplistUsableNatPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    usable_end_port: {
      value: cdktf.numberToHclTerraform(struct!.usableEndPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usable_start_port: {
      value: cdktf.numberToHclTerraform(struct!.usableStartPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6FixedNatInsideIplistUsableNatPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6FixedNatInsideIplistUsableNatPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usableEndPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableEndPort = this._usableEndPort;
    }
    if (this._usableStartPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.usableStartPort = this._usableStartPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6FixedNatInsideIplistUsableNatPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usableEndPort = undefined;
      this._usableStartPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usableEndPort = value.usableEndPort;
      this._usableStartPort = value.usableStartPort;
    }
  }

  // usable_end_port - computed: false, optional: true, required: false
  private _usableEndPort?: number; 
  public get usableEndPort() {
    return this.getNumberAttribute('usable_end_port');
  }
  public set usableEndPort(value: number) {
    this._usableEndPort = value;
  }
  public resetUsableEndPort() {
    this._usableEndPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableEndPortInput() {
    return this._usableEndPort;
  }

  // usable_start_port - computed: false, optional: true, required: false
  private _usableStartPort?: number; 
  public get usableStartPort() {
    return this.getNumberAttribute('usable_start_port');
  }
  public set usableStartPort(value: number) {
    this._usableStartPort = value;
  }
  public resetUsableStartPort() {
    this._usableStartPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableStartPortInput() {
    return this._usableStartPort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist thunder_cgnv6_fixed_nat_inside_iplist}
*/
export class Cgnv6FixedNatInsideIplist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_inside_iplist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6FixedNatInsideIplist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6FixedNatInsideIplist to import
  * @param importFromId The id of the existing Cgnv6FixedNatInsideIplist that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6FixedNatInsideIplist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_inside_iplist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_fixed_nat_inside_iplist thunder_cgnv6_fixed_nat_inside_iplist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6FixedNatInsideIplistConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6FixedNatInsideIplistConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_inside_iplist',
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
    this._destRuleList = config.destRuleList;
    this._dynamicPoolSize = config.dynamicPoolSize;
    this._id = config.id;
    this._insideIpList = config.insideIpList;
    this._method = config.method;
    this._natEndAddress = config.natEndAddress;
    this._natIpList = config.natIpList;
    this._natNetmask = config.natNetmask;
    this._natStartAddress = config.natStartAddress;
    this._partition = config.partition;
    this._portsPerUser = config.portsPerUser;
    this._respondToUserMac = config.respondToUserMac;
    this._sessionQuota = config.sessionQuota;
    this._skipPortsOnRollover = config.skipPortsOnRollover;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
    this._offset.internalValue = config.offset;
    this._usableNatPorts.internalValue = config.usableNatPorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_rule_list - computed: false, optional: true, required: false
  private _destRuleList?: string; 
  public get destRuleList() {
    return this.getStringAttribute('dest_rule_list');
  }
  public set destRuleList(value: string) {
    this._destRuleList = value;
  }
  public resetDestRuleList() {
    this._destRuleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRuleListInput() {
    return this._destRuleList;
  }

  // dynamic_pool_size - computed: false, optional: true, required: false
  private _dynamicPoolSize?: number; 
  public get dynamicPoolSize() {
    return this.getNumberAttribute('dynamic_pool_size');
  }
  public set dynamicPoolSize(value: number) {
    this._dynamicPoolSize = value;
  }
  public resetDynamicPoolSize() {
    this._dynamicPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPoolSizeInput() {
    return this._dynamicPoolSize;
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

  // inside_ip_list - computed: false, optional: false, required: true
  private _insideIpList?: string; 
  public get insideIpList() {
    return this.getStringAttribute('inside_ip_list');
  }
  public set insideIpList(value: string) {
    this._insideIpList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpListInput() {
    return this._insideIpList;
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

  // nat_end_address - computed: false, optional: true, required: false
  private _natEndAddress?: string; 
  public get natEndAddress() {
    return this.getStringAttribute('nat_end_address');
  }
  public set natEndAddress(value: string) {
    this._natEndAddress = value;
  }
  public resetNatEndAddress() {
    this._natEndAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEndAddressInput() {
    return this._natEndAddress;
  }

  // nat_ip_list - computed: false, optional: true, required: false
  private _natIpList?: string; 
  public get natIpList() {
    return this.getStringAttribute('nat_ip_list');
  }
  public set natIpList(value: string) {
    this._natIpList = value;
  }
  public resetNatIpList() {
    this._natIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpListInput() {
    return this._natIpList;
  }

  // nat_netmask - computed: false, optional: true, required: false
  private _natNetmask?: string; 
  public get natNetmask() {
    return this.getStringAttribute('nat_netmask');
  }
  public set natNetmask(value: string) {
    this._natNetmask = value;
  }
  public resetNatNetmask() {
    this._natNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natNetmaskInput() {
    return this._natNetmask;
  }

  // nat_start_address - computed: false, optional: true, required: false
  private _natStartAddress?: string; 
  public get natStartAddress() {
    return this.getStringAttribute('nat_start_address');
  }
  public set natStartAddress(value: string) {
    this._natStartAddress = value;
  }
  public resetNatStartAddress() {
    this._natStartAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natStartAddressInput() {
    return this._natStartAddress;
  }

  // partition - computed: false, optional: false, required: true
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // ports_per_user - computed: false, optional: true, required: false
  private _portsPerUser?: number; 
  public get portsPerUser() {
    return this.getNumberAttribute('ports_per_user');
  }
  public set portsPerUser(value: number) {
    this._portsPerUser = value;
  }
  public resetPortsPerUser() {
    this._portsPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsPerUserInput() {
    return this._portsPerUser;
  }

  // respond_to_user_mac - computed: false, optional: true, required: false
  private _respondToUserMac?: number; 
  public get respondToUserMac() {
    return this.getNumberAttribute('respond_to_user_mac');
  }
  public set respondToUserMac(value: number) {
    this._respondToUserMac = value;
  }
  public resetRespondToUserMac() {
    this._respondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondToUserMacInput() {
    return this._respondToUserMac;
  }

  // session_quota - computed: false, optional: true, required: false
  private _sessionQuota?: number; 
  public get sessionQuota() {
    return this.getNumberAttribute('session_quota');
  }
  public set sessionQuota(value: number) {
    this._sessionQuota = value;
  }
  public resetSessionQuota() {
    this._sessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionQuotaInput() {
    return this._sessionQuota;
  }

  // skip_ports_on_rollover - computed: false, optional: true, required: false
  private _skipPortsOnRollover?: number; 
  public get skipPortsOnRollover() {
    return this.getNumberAttribute('skip_ports_on_rollover');
  }
  public set skipPortsOnRollover(value: number) {
    this._skipPortsOnRollover = value;
  }
  public resetSkipPortsOnRollover() {
    this._skipPortsOnRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipPortsOnRolloverInput() {
    return this._skipPortsOnRollover;
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // offset - computed: false, optional: true, required: false
  private _offset = new Cgnv6FixedNatInsideIplistOffsetOutputReference(this, "offset");
  public get offset() {
    return this._offset;
  }
  public putOffset(value: Cgnv6FixedNatInsideIplistOffset) {
    this._offset.internalValue = value;
  }
  public resetOffset() {
    this._offset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset.internalValue;
  }

  // usable_nat_ports - computed: false, optional: true, required: false
  private _usableNatPorts = new Cgnv6FixedNatInsideIplistUsableNatPortsOutputReference(this, "usable_nat_ports");
  public get usableNatPorts() {
    return this._usableNatPorts;
  }
  public putUsableNatPorts(value: Cgnv6FixedNatInsideIplistUsableNatPorts) {
    this._usableNatPorts.internalValue = value;
  }
  public resetUsableNatPorts() {
    this._usableNatPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNatPortsInput() {
    return this._usableNatPorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_rule_list: cdktf.stringToTerraform(this._destRuleList),
      dynamic_pool_size: cdktf.numberToTerraform(this._dynamicPoolSize),
      id: cdktf.stringToTerraform(this._id),
      inside_ip_list: cdktf.stringToTerraform(this._insideIpList),
      method: cdktf.stringToTerraform(this._method),
      nat_end_address: cdktf.stringToTerraform(this._natEndAddress),
      nat_ip_list: cdktf.stringToTerraform(this._natIpList),
      nat_netmask: cdktf.stringToTerraform(this._natNetmask),
      nat_start_address: cdktf.stringToTerraform(this._natStartAddress),
      partition: cdktf.stringToTerraform(this._partition),
      ports_per_user: cdktf.numberToTerraform(this._portsPerUser),
      respond_to_user_mac: cdktf.numberToTerraform(this._respondToUserMac),
      session_quota: cdktf.numberToTerraform(this._sessionQuota),
      skip_ports_on_rollover: cdktf.numberToTerraform(this._skipPortsOnRollover),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
      offset: cgnv6FixedNatInsideIplistOffsetToTerraform(this._offset.internalValue),
      usable_nat_ports: cgnv6FixedNatInsideIplistUsableNatPortsToTerraform(this._usableNatPorts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_rule_list: {
        value: cdktf.stringToHclTerraform(this._destRuleList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_pool_size: {
        value: cdktf.numberToHclTerraform(this._dynamicPoolSize),
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
      inside_ip_list: {
        value: cdktf.stringToHclTerraform(this._insideIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_end_address: {
        value: cdktf.stringToHclTerraform(this._natEndAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_list: {
        value: cdktf.stringToHclTerraform(this._natIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_netmask: {
        value: cdktf.stringToHclTerraform(this._natNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_start_address: {
        value: cdktf.stringToHclTerraform(this._natStartAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports_per_user: {
        value: cdktf.numberToHclTerraform(this._portsPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      respond_to_user_mac: {
        value: cdktf.numberToHclTerraform(this._respondToUserMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_quota: {
        value: cdktf.numberToHclTerraform(this._sessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_ports_on_rollover: {
        value: cdktf.numberToHclTerraform(this._skipPortsOnRollover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cgnv6FixedNatInsideIplistOffsetToHclTerraform(this._offset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6FixedNatInsideIplistOffsetList",
      },
      usable_nat_ports: {
        value: cgnv6FixedNatInsideIplistUsableNatPortsToHclTerraform(this._usableNatPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6FixedNatInsideIplistUsableNatPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
