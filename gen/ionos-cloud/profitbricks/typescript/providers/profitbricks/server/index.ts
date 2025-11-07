// https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#availability_zone Server#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#boot_image Server#boot_image}
  */
  readonly bootImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#cores Server#cores}
  */
  readonly cores: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#cpu_family Server#cpu_family}
  */
  readonly cpuFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#datacenter_id Server#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#image_name Server#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#image_password Server#image_password}
  */
  readonly imagePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#licence_type Server#licence_type}
  */
  readonly licenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#name Server#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#ram Server#ram}
  */
  readonly ram: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#ssh_key_path Server#ssh_key_path}
  */
  readonly sshKeyPath?: string[];
  /**
  * nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#nic Server#nic}
  */
  readonly nic: ServerNic;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#timeouts Server#timeouts}
  */
  readonly timeouts?: ServerTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#volume Server#volume}
  */
  readonly volume: ServerVolume;
}
export interface ServerNicFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#icmp_code Server#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#icmp_type Server#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#ip Server#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#ips Server#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#name Server#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#port_range_end Server#port_range_end}
  */
  readonly portRangeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#port_range_start Server#port_range_start}
  */
  readonly portRangeStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#protocol Server#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#source_ip Server#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#source_mac Server#source_mac}
  */
  readonly sourceMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#target_ip Server#target_ip}
  */
  readonly targetIp?: string;
}

export function serverNicFirewallToTerraform(struct?: ServerNicFirewallOutputReference | ServerNicFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.stringToTerraform(struct!.icmpCode),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    ip: cdktf.stringToTerraform(struct!.ip),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_mac: cdktf.stringToTerraform(struct!.sourceMac),
    target_ip: cdktf.stringToTerraform(struct!.targetIp),
  }
}


export function serverNicFirewallToHclTerraform(struct?: ServerNicFirewallOutputReference | ServerNicFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.stringToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpType),
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
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range_start: {
      value: cdktf.numberToHclTerraform(struct!.portRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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
    source_mac: {
      value: cdktf.stringToHclTerraform(struct!.sourceMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ip: {
      value: cdktf.stringToHclTerraform(struct!.targetIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNicFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNicFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    if (this._portRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeStart = this._portRangeStart;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMac = this._sourceMac;
    }
    if (this._targetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIp = this._targetIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNicFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._ip = undefined;
      this._ips = undefined;
      this._name = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._sourceIp = undefined;
      this._sourceMac = undefined;
      this._targetIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._ip = value.ip;
      this._ips = value.ips;
      this._name = value.name;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._sourceIp = value.sourceIp;
      this._sourceMac = value.sourceMac;
      this._targetIp = value.targetIp;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string; 
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // ip - computed: true, optional: true, required: false
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

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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

  // port_range_end - computed: false, optional: true, required: false
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  public resetPortRangeEnd() {
    this._portRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: true, required: false
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  public resetPortRangeStart() {
    this._portRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_ip - computed: false, optional: true, required: false
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

  // source_mac - computed: false, optional: true, required: false
  private _sourceMac?: string; 
  public get sourceMac() {
    return this.getStringAttribute('source_mac');
  }
  public set sourceMac(value: string) {
    this._sourceMac = value;
  }
  public resetSourceMac() {
    this._sourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMacInput() {
    return this._sourceMac;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: string; 
  public get targetIp() {
    return this.getStringAttribute('target_ip');
  }
  public set targetIp(value: string) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp;
  }
}
export interface ServerNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#dhcp Server#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#firewall_active Server#firewall_active}
  */
  readonly firewallActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#ip Server#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#lan Server#lan}
  */
  readonly lan: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#name Server#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#nat Server#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#firewall Server#firewall}
  */
  readonly firewall?: ServerNicFirewall;
}

export function serverNicToTerraform(struct?: ServerNicOutputReference | ServerNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    firewall_active: cdktf.booleanToTerraform(struct!.firewallActive),
    ip: cdktf.stringToTerraform(struct!.ip),
    lan: cdktf.numberToTerraform(struct!.lan),
    name: cdktf.stringToTerraform(struct!.name),
    nat: cdktf.booleanToTerraform(struct!.nat),
    firewall: serverNicFirewallToTerraform(struct!.firewall),
  }
}


export function serverNicToHclTerraform(struct?: ServerNicOutputReference | ServerNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall_active: {
      value: cdktf.booleanToHclTerraform(struct!.firewallActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan: {
      value: cdktf.numberToHclTerraform(struct!.lan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: cdktf.booleanToHclTerraform(struct!.nat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall: {
      value: serverNicFirewallToHclTerraform(struct!.firewall),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNicFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._firewallActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallActive = this._firewallActive;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._lan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lan = this._lan;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._firewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp = undefined;
      this._firewallActive = undefined;
      this._ip = undefined;
      this._lan = undefined;
      this._name = undefined;
      this._nat = undefined;
      this._firewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp = value.dhcp;
      this._firewallActive = value.firewallActive;
      this._ip = value.ip;
      this._lan = value.lan;
      this._name = value.name;
      this._nat = value.nat;
      this._firewall.internalValue = value.firewall;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // firewall_active - computed: false, optional: true, required: false
  private _firewallActive?: boolean | cdktf.IResolvable; 
  public get firewallActive() {
    return this.getBooleanAttribute('firewall_active');
  }
  public set firewallActive(value: boolean | cdktf.IResolvable) {
    this._firewallActive = value;
  }
  public resetFirewallActive() {
    this._firewallActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallActiveInput() {
    return this._firewallActive;
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

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // lan - computed: false, optional: false, required: true
  private _lan?: number; 
  public get lan() {
    return this.getNumberAttribute('lan');
  }
  public set lan(value: number) {
    this._lan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInput() {
    return this._lan;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
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

  // nat - computed: false, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall = new ServerNicFirewallOutputReference(this, "firewall");
  public get firewall() {
    return this._firewall;
  }
  public putFirewall(value: ServerNicFirewall) {
    this._firewall.internalValue = value;
  }
  public resetFirewall() {
    this._firewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall.internalValue;
  }
}
export interface ServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#create Server#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#default Server#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#delete Server#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#update Server#update}
  */
  readonly update?: string;
}

export function serverTimeoutsToTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serverTimeoutsToHclTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ServerVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#availability_zone Server#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#bus Server#bus}
  */
  readonly bus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#disk_type Server#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#image_name Server#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#image_password Server#image_password}
  */
  readonly imagePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#licence_type Server#licence_type}
  */
  readonly licenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#name Server#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#size Server#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#ssh_key_path Server#ssh_key_path}
  */
  readonly sshKeyPath?: string[];
}

export function serverVolumeToTerraform(struct?: ServerVolumeOutputReference | ServerVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    bus: cdktf.stringToTerraform(struct!.bus),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_password: cdktf.stringToTerraform(struct!.imagePassword),
    licence_type: cdktf.stringToTerraform(struct!.licenceType),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    ssh_key_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeyPath),
  }
}


export function serverVolumeToHclTerraform(struct?: ServerVolumeOutputReference | ServerVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bus: {
      value: cdktf.stringToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_password: {
      value: cdktf.stringToHclTerraform(struct!.imagePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    licence_type: {
      value: cdktf.stringToHclTerraform(struct!.licenceType),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_key_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeyPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imagePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePassword = this._imagePassword;
    }
    if (this._licenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenceType = this._licenceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._bus = undefined;
      this._diskType = undefined;
      this._imageName = undefined;
      this._imagePassword = undefined;
      this._licenceType = undefined;
      this._name = undefined;
      this._size = undefined;
      this._sshKeyPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._bus = value.bus;
      this._diskType = value.diskType;
      this._imageName = value.imageName;
      this._imagePassword = value.imagePassword;
      this._licenceType = value.licenceType;
      this._name = value.name;
      this._size = value.size;
      this._sshKeyPath = value.sshKeyPath;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // bus - computed: true, optional: true, required: false
  private _bus?: string; 
  public get bus() {
    return this.getStringAttribute('bus');
  }
  public set bus(value: string) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // image_aliases - computed: true, optional: false, required: false
  public get imageAliases() {
    return this.getListAttribute('image_aliases');
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_password - computed: false, optional: true, required: false
  private _imagePassword?: string; 
  public get imagePassword() {
    return this.getStringAttribute('image_password');
  }
  public set imagePassword(value: string) {
    this._imagePassword = value;
  }
  public resetImagePassword() {
    this._imagePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePasswordInput() {
    return this._imagePassword;
  }

  // licence_type - computed: true, optional: true, required: false
  private _licenceType?: string; 
  public get licenceType() {
    return this.getStringAttribute('licence_type');
  }
  public set licenceType(value: string) {
    this._licenceType = value;
  }
  public resetLicenceType() {
    this._licenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenceTypeInput() {
    return this._licenceType;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ssh_key_path - computed: false, optional: true, required: false
  private _sshKeyPath?: string[]; 
  public get sshKeyPath() {
    return this.getListAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string[]) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server profitbricks_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "profitbricks_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "profitbricks_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs/resources/server profitbricks_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'profitbricks_server',
      terraformGeneratorMetadata: {
        providerName: 'profitbricks',
        providerVersion: '1.6.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._bootImage = config.bootImage;
    this._cores = config.cores;
    this._cpuFamily = config.cpuFamily;
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._imageName = config.imageName;
    this._imagePassword = config.imagePassword;
    this._licenceType = config.licenceType;
    this._name = config.name;
    this._ram = config.ram;
    this._sshKeyPath = config.sshKeyPath;
    this._nic.internalValue = config.nic;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // boot_cdrom - computed: true, optional: false, required: false
  public get bootCdrom() {
    return this.getStringAttribute('boot_cdrom');
  }

  // boot_image - computed: true, optional: true, required: false
  private _bootImage?: string; 
  public get bootImage() {
    return this.getStringAttribute('boot_image');
  }
  public set bootImage(value: string) {
    this._bootImage = value;
  }
  public resetBootImage() {
    this._bootImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootImageInput() {
    return this._bootImage;
  }

  // boot_volume - computed: true, optional: false, required: false
  public get bootVolume() {
    return this.getStringAttribute('boot_volume');
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // cpu_family - computed: true, optional: true, required: false
  private _cpuFamily?: string; 
  public get cpuFamily() {
    return this.getStringAttribute('cpu_family');
  }
  public set cpuFamily(value: string) {
    this._cpuFamily = value;
  }
  public resetCpuFamily() {
    this._cpuFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFamilyInput() {
    return this._cpuFamily;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // firewallrule_id - computed: true, optional: false, required: false
  public get firewallruleId() {
    return this.getStringAttribute('firewallrule_id');
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

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_password - computed: true, optional: true, required: false
  private _imagePassword?: string; 
  public get imagePassword() {
    return this.getStringAttribute('image_password');
  }
  public set imagePassword(value: string) {
    this._imagePassword = value;
  }
  public resetImagePassword() {
    this._imagePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePasswordInput() {
    return this._imagePassword;
  }

  // licence_type - computed: false, optional: true, required: false
  private _licenceType?: string; 
  public get licenceType() {
    return this.getStringAttribute('licence_type');
  }
  public set licenceType(value: string) {
    this._licenceType = value;
  }
  public resetLicenceType() {
    this._licenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenceTypeInput() {
    return this._licenceType;
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

  // primary_ip - computed: true, optional: false, required: false
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }

  // primary_nic - computed: true, optional: false, required: false
  public get primaryNic() {
    return this.getStringAttribute('primary_nic');
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // ssh_key_path - computed: true, optional: true, required: false
  private _sshKeyPath?: string[]; 
  public get sshKeyPath() {
    return this.getListAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string[]) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // nic - computed: false, optional: false, required: true
  private _nic = new ServerNicOutputReference(this, "nic");
  public get nic() {
    return this._nic;
  }
  public putNic(value: ServerNic) {
    this._nic.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicInput() {
    return this._nic.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new ServerVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ServerVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      boot_image: cdktf.stringToTerraform(this._bootImage),
      cores: cdktf.numberToTerraform(this._cores),
      cpu_family: cdktf.stringToTerraform(this._cpuFamily),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      image_password: cdktf.stringToTerraform(this._imagePassword),
      licence_type: cdktf.stringToTerraform(this._licenceType),
      name: cdktf.stringToTerraform(this._name),
      ram: cdktf.numberToTerraform(this._ram),
      ssh_key_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyPath),
      nic: serverNicToTerraform(this._nic.internalValue),
      timeouts: serverTimeoutsToTerraform(this._timeouts.internalValue),
      volume: serverVolumeToTerraform(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_image: {
        value: cdktf.stringToHclTerraform(this._bootImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_family: {
        value: cdktf.stringToHclTerraform(this._cpuFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_password: {
        value: cdktf.stringToHclTerraform(this._imagePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      licence_type: {
        value: cdktf.stringToHclTerraform(this._licenceType),
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
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_key_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeyPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nic: {
        value: serverNicToHclTerraform(this._nic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerNicList",
      },
      timeouts: {
        value: serverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerTimeouts",
      },
      volume: {
        value: serverVolumeToHclTerraform(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
