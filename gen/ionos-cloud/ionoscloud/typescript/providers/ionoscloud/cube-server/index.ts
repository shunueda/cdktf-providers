// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CubeServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to true, allows the update of immutable fields by destroying and re-creating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#allow_replace CubeServer#allow_replace}
  */
  readonly allowReplace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#availability_zone CubeServer#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}
  */
  readonly bootCdrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#boot_image CubeServer#boot_image}
  */
  readonly bootImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The hostname of the resource. Allowed characters are a-z, 0-9 and - (minus). Hostname should not start with minus and should not be longer than 63 characters. If no value provided explicitly, it will be populated with the name of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#hostname CubeServer#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#id CubeServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#image_name CubeServer#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#image_password CubeServer#image_password}
  */
  readonly imagePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#name CubeServer#name}
  */
  readonly name: string;
  /**
  * The list of Security Group IDs for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#security_groups_ids CubeServer#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}
  */
  readonly sshKeyPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#template_uuid CubeServer#template_uuid}
  */
  readonly templateUuid: string;
  /**
  * Sets the power state of the cube server. Possible values: `RUNNING` or `SUSPENDED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#vm_state CubeServer#vm_state}
  */
  readonly vmState?: string;
  /**
  * nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#nic CubeServer#nic}
  */
  readonly nic: CubeServerNic;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#timeouts CubeServer#timeouts}
  */
  readonly timeouts?: CubeServerTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#volume CubeServer#volume}
  */
  readonly volume: CubeServerVolume;
}
export interface CubeServerNicFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#icmp_code CubeServer#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#icmp_type CubeServer#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#name CubeServer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#port_range_end CubeServer#port_range_end}
  */
  readonly portRangeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#port_range_start CubeServer#port_range_start}
  */
  readonly portRangeStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#protocol CubeServer#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#source_ip CubeServer#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#source_mac CubeServer#source_mac}
  */
  readonly sourceMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#target_ip CubeServer#target_ip}
  */
  readonly targetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#type CubeServer#type}
  */
  readonly type?: string;
}

export function cubeServerNicFirewallToTerraform(struct?: CubeServerNicFirewallOutputReference | CubeServerNicFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.stringToTerraform(struct!.icmpCode),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    name: cdktf.stringToTerraform(struct!.name),
    port_range_end: cdktf.numberToTerraform(struct!.portRangeEnd),
    port_range_start: cdktf.numberToTerraform(struct!.portRangeStart),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_mac: cdktf.stringToTerraform(struct!.sourceMac),
    target_ip: cdktf.stringToTerraform(struct!.targetIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cubeServerNicFirewallToHclTerraform(struct?: CubeServerNicFirewallOutputReference | CubeServerNicFirewall): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CubeServerNicFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CubeServerNicFirewall | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CubeServerNicFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._name = undefined;
      this._portRangeEnd = undefined;
      this._portRangeStart = undefined;
      this._protocol = undefined;
      this._sourceIp = undefined;
      this._sourceMac = undefined;
      this._targetIp = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._name = value.name;
      this._portRangeEnd = value.portRangeEnd;
      this._portRangeStart = value.portRangeStart;
      this._protocol = value.protocol;
      this._sourceIp = value.sourceIp;
      this._sourceMac = value.sourceMac;
      this._targetIp = value.targetIp;
      this._type = value.type;
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
}
export interface CubeServerNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#dhcp CubeServer#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this NIC receives an IPv6 address through DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#dhcpv6 CubeServer#dhcpv6}
  */
  readonly dhcpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#firewall_active CubeServer#firewall_active}
  */
  readonly firewallActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#firewall_type CubeServer#firewall_type}
  */
  readonly firewallType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#ips CubeServer#ips}
  */
  readonly ips?: string[];
  /**
  * IPv6 CIDR block assigned to the NIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#ipv6_cidr_block CubeServer#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Collection for IPv6 addresses assigned to a nic. Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#ipv6_ips CubeServer#ipv6_ips}
  */
  readonly ipv6Ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#lan CubeServer#lan}
  */
  readonly lan: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#mac CubeServer#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#name CubeServer#name}
  */
  readonly name?: string;
  /**
  * The list of Security Group IDs for the NIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#security_groups_ids CubeServer#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#firewall CubeServer#firewall}
  */
  readonly firewall?: CubeServerNicFirewall;
}

export function cubeServerNicToTerraform(struct?: CubeServerNicOutputReference | CubeServerNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    dhcpv6: cdktf.booleanToTerraform(struct!.dhcpv6),
    firewall_active: cdktf.booleanToTerraform(struct!.firewallActive),
    firewall_type: cdktf.stringToTerraform(struct!.firewallType),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    ipv6_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Ips),
    lan: cdktf.numberToTerraform(struct!.lan),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    firewall: cubeServerNicFirewallToTerraform(struct!.firewall),
  }
}


export function cubeServerNicToHclTerraform(struct?: CubeServerNicOutputReference | CubeServerNic): any {
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
    dhcpv6: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpv6),
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
    firewall_type: {
      value: cdktf.stringToHclTerraform(struct!.firewallType),
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
    ipv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lan: {
      value: cdktf.numberToHclTerraform(struct!.lan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    firewall: {
      value: cubeServerNicFirewallToHclTerraform(struct!.firewall),
      isBlock: true,
      type: "list",
      storageClassType: "CubeServerNicFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CubeServerNicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CubeServerNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dhcpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6 = this._dhcpv6;
    }
    if (this._firewallActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallActive = this._firewallActive;
    }
    if (this._firewallType !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallType = this._firewallType;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._ipv6Ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Ips = this._ipv6Ips;
    }
    if (this._lan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lan = this._lan;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._firewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CubeServerNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp = undefined;
      this._dhcpv6 = undefined;
      this._firewallActive = undefined;
      this._firewallType = undefined;
      this._ips = undefined;
      this._ipv6CidrBlock = undefined;
      this._ipv6Ips = undefined;
      this._lan = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._securityGroupsIds = undefined;
      this._firewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp = value.dhcp;
      this._dhcpv6 = value.dhcpv6;
      this._firewallActive = value.firewallActive;
      this._firewallType = value.firewallType;
      this._ips = value.ips;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._ipv6Ips = value.ipv6Ips;
      this._lan = value.lan;
      this._mac = value.mac;
      this._name = value.name;
      this._securityGroupsIds = value.securityGroupsIds;
      this._firewall.internalValue = value.firewall;
    }
  }

  // device_number - computed: true, optional: false, required: false
  public get deviceNumber() {
    return this.getNumberAttribute('device_number');
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

  // dhcpv6 - computed: false, optional: true, required: false
  private _dhcpv6?: boolean | cdktf.IResolvable; 
  public get dhcpv6() {
    return this.getBooleanAttribute('dhcpv6');
  }
  public set dhcpv6(value: boolean | cdktf.IResolvable) {
    this._dhcpv6 = value;
  }
  public resetDhcpv6() {
    this._dhcpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6;
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

  // firewall_type - computed: true, optional: true, required: false
  private _firewallType?: string; 
  public get firewallType() {
    return this.getStringAttribute('firewall_type');
  }
  public set firewallType(value: string) {
    this._firewallType = value;
  }
  public resetFirewallType() {
    this._firewallType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypeInput() {
    return this._firewallType;
  }

  // ips - computed: true, optional: true, required: false
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

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6_ips - computed: true, optional: true, required: false
  private _ipv6Ips?: string[]; 
  public get ipv6Ips() {
    return this.getListAttribute('ipv6_ips');
  }
  public set ipv6Ips(value: string[]) {
    this._ipv6Ips = value;
  }
  public resetIpv6Ips() {
    this._ipv6Ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IpsInput() {
    return this._ipv6Ips;
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

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // pci_slot - computed: true, optional: false, required: false
  public get pciSlot() {
    return this.getNumberAttribute('pci_slot');
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups_ids'));
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall = new CubeServerNicFirewallOutputReference(this, "firewall");
  public get firewall() {
    return this._firewall;
  }
  public putFirewall(value: CubeServerNicFirewall) {
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
export interface CubeServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#create CubeServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#default CubeServer#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#delete CubeServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#update CubeServer#update}
  */
  readonly update?: string;
}

export function cubeServerTimeoutsToTerraform(struct?: CubeServerTimeouts | cdktf.IResolvable): any {
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


export function cubeServerTimeoutsToHclTerraform(struct?: CubeServerTimeouts | cdktf.IResolvable): any {
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

export class CubeServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CubeServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CubeServerTimeouts | cdktf.IResolvable | undefined) {
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
export interface CubeServerVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#availability_zone CubeServer#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The uuid of the Backup Unit that user has access to. The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#backup_unit_id CubeServer#backup_unit_id}
  */
  readonly backupUnitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#bus CubeServer#bus}
  */
  readonly bus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#disk_type CubeServer#disk_type}
  */
  readonly diskType: string;
  /**
  * If set to `true` will expose the serial id of the disk attached to the server. If set to `false` will not expose the serial id. Some operating systems or software solutions require the serial id to be exposed to work properly. Exposing the serial can influence licensed software (e.g. Windows) behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#expose_serial CubeServer#expose_serial}
  */
  readonly exposeSerial?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#image_password CubeServer#image_password}
  */
  readonly imagePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#licence_type CubeServer#licence_type}
  */
  readonly licenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#name CubeServer#name}
  */
  readonly name?: string;
  /**
  * Indicates if the image requires the legacy BIOS for compatibility or specific needs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#require_legacy_bios CubeServer#require_legacy_bios}
  */
  readonly requireLegacyBios?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}
  */
  readonly sshKeyPath?: string[];
  /**
  * The cloud-init configuration for the volume as base64 encoded string. The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#user_data CubeServer#user_data}
  */
  readonly userData?: string;
}

export function cubeServerVolumeToTerraform(struct?: CubeServerVolumeOutputReference | CubeServerVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    backup_unit_id: cdktf.stringToTerraform(struct!.backupUnitId),
    bus: cdktf.stringToTerraform(struct!.bus),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    expose_serial: cdktf.booleanToTerraform(struct!.exposeSerial),
    image_password: cdktf.stringToTerraform(struct!.imagePassword),
    licence_type: cdktf.stringToTerraform(struct!.licenceType),
    name: cdktf.stringToTerraform(struct!.name),
    require_legacy_bios: cdktf.booleanToTerraform(struct!.requireLegacyBios),
    ssh_key_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeyPath),
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function cubeServerVolumeToHclTerraform(struct?: CubeServerVolumeOutputReference | CubeServerVolume): any {
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
    backup_unit_id: {
      value: cdktf.stringToHclTerraform(struct!.backupUnitId),
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
    expose_serial: {
      value: cdktf.booleanToHclTerraform(struct!.exposeSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    require_legacy_bios: {
      value: cdktf.booleanToHclTerraform(struct!.requireLegacyBios),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_key_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeyPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CubeServerVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CubeServerVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._backupUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupUnitId = this._backupUnitId;
    }
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._exposeSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeSerial = this._exposeSerial;
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
    if (this._requireLegacyBios !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLegacyBios = this._requireLegacyBios;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CubeServerVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._backupUnitId = undefined;
      this._bus = undefined;
      this._diskType = undefined;
      this._exposeSerial = undefined;
      this._imagePassword = undefined;
      this._licenceType = undefined;
      this._name = undefined;
      this._requireLegacyBios = undefined;
      this._sshKeyPath = undefined;
      this._userData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._backupUnitId = value.backupUnitId;
      this._bus = value.bus;
      this._diskType = value.diskType;
      this._exposeSerial = value.exposeSerial;
      this._imagePassword = value.imagePassword;
      this._licenceType = value.licenceType;
      this._name = value.name;
      this._requireLegacyBios = value.requireLegacyBios;
      this._sshKeyPath = value.sshKeyPath;
      this._userData = value.userData;
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

  // backup_unit_id - computed: true, optional: true, required: false
  private _backupUnitId?: string; 
  public get backupUnitId() {
    return this.getStringAttribute('backup_unit_id');
  }
  public set backupUnitId(value: string) {
    this._backupUnitId = value;
  }
  public resetBackupUnitId() {
    this._backupUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupUnitIdInput() {
    return this._backupUnitId;
  }

  // boot_server - computed: true, optional: false, required: false
  public get bootServer() {
    return this.getStringAttribute('boot_server');
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

  // cpu_hot_plug - computed: true, optional: false, required: false
  public get cpuHotPlug() {
    return this.getBooleanAttribute('cpu_hot_plug');
  }

  // device_number - computed: true, optional: false, required: false
  public get deviceNumber() {
    return this.getNumberAttribute('device_number');
  }

  // disc_virtio_hot_plug - computed: true, optional: false, required: false
  public get discVirtioHotPlug() {
    return this.getBooleanAttribute('disc_virtio_hot_plug');
  }

  // disc_virtio_hot_unplug - computed: true, optional: false, required: false
  public get discVirtioHotUnplug() {
    return this.getBooleanAttribute('disc_virtio_hot_unplug');
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

  // expose_serial - computed: true, optional: true, required: false
  private _exposeSerial?: boolean | cdktf.IResolvable; 
  public get exposeSerial() {
    return this.getBooleanAttribute('expose_serial');
  }
  public set exposeSerial(value: boolean | cdktf.IResolvable) {
    this._exposeSerial = value;
  }
  public resetExposeSerial() {
    this._exposeSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeSerialInput() {
    return this._exposeSerial;
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

  // nic_hot_plug - computed: true, optional: false, required: false
  public get nicHotPlug() {
    return this.getBooleanAttribute('nic_hot_plug');
  }

  // nic_hot_unplug - computed: true, optional: false, required: false
  public get nicHotUnplug() {
    return this.getBooleanAttribute('nic_hot_unplug');
  }

  // pci_slot - computed: true, optional: false, required: false
  public get pciSlot() {
    return this.getNumberAttribute('pci_slot');
  }

  // ram_hot_plug - computed: true, optional: false, required: false
  public get ramHotPlug() {
    return this.getBooleanAttribute('ram_hot_plug');
  }

  // require_legacy_bios - computed: true, optional: true, required: false
  private _requireLegacyBios?: boolean | cdktf.IResolvable; 
  public get requireLegacyBios() {
    return this.getBooleanAttribute('require_legacy_bios');
  }
  public set requireLegacyBios(value: boolean | cdktf.IResolvable) {
    this._requireLegacyBios = value;
  }
  public resetRequireLegacyBios() {
    this._requireLegacyBios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLegacyBiosInput() {
    return this._requireLegacyBios;
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

  // user_data - computed: true, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server ionoscloud_cube_server}
*/
export class CubeServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_cube_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CubeServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CubeServer to import
  * @param importFromId The id of the existing CubeServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CubeServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_cube_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/cube_server ionoscloud_cube_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CubeServerConfig
  */
  public constructor(scope: Construct, id: string, config: CubeServerConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_cube_server',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowReplace = config.allowReplace;
    this._availabilityZone = config.availabilityZone;
    this._bootCdrom = config.bootCdrom;
    this._bootImage = config.bootImage;
    this._datacenterId = config.datacenterId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageName = config.imageName;
    this._imagePassword = config.imagePassword;
    this._name = config.name;
    this._securityGroupsIds = config.securityGroupsIds;
    this._sshKeyPath = config.sshKeyPath;
    this._templateUuid = config.templateUuid;
    this._vmState = config.vmState;
    this._nic.internalValue = config.nic;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_replace - computed: false, optional: true, required: false
  private _allowReplace?: boolean | cdktf.IResolvable; 
  public get allowReplace() {
    return this.getBooleanAttribute('allow_replace');
  }
  public set allowReplace(value: boolean | cdktf.IResolvable) {
    this._allowReplace = value;
  }
  public resetAllowReplace() {
    this._allowReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplaceInput() {
    return this._allowReplace;
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

  // boot_cdrom - computed: true, optional: true, required: false
  private _bootCdrom?: string; 
  public get bootCdrom() {
    return this.getStringAttribute('boot_cdrom');
  }
  public set bootCdrom(value: string) {
    this._bootCdrom = value;
  }
  public resetBootCdrom() {
    this._bootCdrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootCdromInput() {
    return this._bootCdrom;
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

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // inline_volume_ids - computed: true, optional: false, required: false
  public get inlineVolumeIds() {
    return this.getListAttribute('inline_volume_ids');
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

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups_ids'));
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
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

  // template_uuid - computed: false, optional: false, required: true
  private _templateUuid?: string; 
  public get templateUuid() {
    return this.getStringAttribute('template_uuid');
  }
  public set templateUuid(value: string) {
    this._templateUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUuidInput() {
    return this._templateUuid;
  }

  // vm_state - computed: true, optional: true, required: false
  private _vmState?: string; 
  public get vmState() {
    return this.getStringAttribute('vm_state');
  }
  public set vmState(value: string) {
    this._vmState = value;
  }
  public resetVmState() {
    this._vmState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStateInput() {
    return this._vmState;
  }

  // nic - computed: false, optional: false, required: true
  private _nic = new CubeServerNicOutputReference(this, "nic");
  public get nic() {
    return this._nic;
  }
  public putNic(value: CubeServerNic) {
    this._nic.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicInput() {
    return this._nic.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CubeServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CubeServerTimeouts) {
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
  private _volume = new CubeServerVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: CubeServerVolume) {
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
      allow_replace: cdktf.booleanToTerraform(this._allowReplace),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      boot_cdrom: cdktf.stringToTerraform(this._bootCdrom),
      boot_image: cdktf.stringToTerraform(this._bootImage),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      image_password: cdktf.stringToTerraform(this._imagePassword),
      name: cdktf.stringToTerraform(this._name),
      security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupsIds),
      ssh_key_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyPath),
      template_uuid: cdktf.stringToTerraform(this._templateUuid),
      vm_state: cdktf.stringToTerraform(this._vmState),
      nic: cubeServerNicToTerraform(this._nic.internalValue),
      timeouts: cubeServerTimeoutsToTerraform(this._timeouts.internalValue),
      volume: cubeServerVolumeToTerraform(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_replace: {
        value: cdktf.booleanToHclTerraform(this._allowReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_cdrom: {
        value: cdktf.stringToHclTerraform(this._bootCdrom),
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
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupsIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_key_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeyPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template_uuid: {
        value: cdktf.stringToHclTerraform(this._templateUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_state: {
        value: cdktf.stringToHclTerraform(this._vmState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic: {
        value: cubeServerNicToHclTerraform(this._nic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CubeServerNicList",
      },
      timeouts: {
        value: cubeServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CubeServerTimeouts",
      },
      volume: {
        value: cubeServerVolumeToHclTerraform(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CubeServerVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
