// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNetworkBasedDeviceHaV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_1_az_group SecurityNetworkBasedDeviceHaV3#host_1_az_group}
  */
  readonly host1AzGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_2_az_group SecurityNetworkBasedDeviceHaV3#host_2_az_group}
  */
  readonly host2AzGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#id SecurityNetworkBasedDeviceHaV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#license_kind SecurityNetworkBasedDeviceHaV3#license_kind}
  */
  readonly licenseKind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#locale SecurityNetworkBasedDeviceHaV3#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#operating_mode SecurityNetworkBasedDeviceHaV3#operating_mode}
  */
  readonly operatingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#tenant_id SecurityNetworkBasedDeviceHaV3#tenant_id}
  */
  readonly tenantId: string;
  /**
  * ha_link_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#ha_link_1 SecurityNetworkBasedDeviceHaV3#ha_link_1}
  */
  readonly haLink1: SecurityNetworkBasedDeviceHaV3HaLink1;
  /**
  * ha_link_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#ha_link_2 SecurityNetworkBasedDeviceHaV3#ha_link_2}
  */
  readonly haLink2: SecurityNetworkBasedDeviceHaV3HaLink2;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#port SecurityNetworkBasedDeviceHaV3#port}
  */
  readonly port?: SecurityNetworkBasedDeviceHaV3Port[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#timeouts SecurityNetworkBasedDeviceHaV3#timeouts}
  */
  readonly timeouts?: SecurityNetworkBasedDeviceHaV3Timeouts;
}
export interface SecurityNetworkBasedDeviceHaV3HaLink1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_1_ip_address SecurityNetworkBasedDeviceHaV3#host_1_ip_address}
  */
  readonly host1IpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_2_ip_address SecurityNetworkBasedDeviceHaV3#host_2_ip_address}
  */
  readonly host2IpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#network_id SecurityNetworkBasedDeviceHaV3#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#subnet_id SecurityNetworkBasedDeviceHaV3#subnet_id}
  */
  readonly subnetId: string;
}

export function securityNetworkBasedDeviceHaV3HaLink1ToTerraform(struct?: SecurityNetworkBasedDeviceHaV3HaLink1OutputReference | SecurityNetworkBasedDeviceHaV3HaLink1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_1_ip_address: cdktf.stringToTerraform(struct!.host1IpAddress),
    host_2_ip_address: cdktf.stringToTerraform(struct!.host2IpAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function securityNetworkBasedDeviceHaV3HaLink1ToHclTerraform(struct?: SecurityNetworkBasedDeviceHaV3HaLink1OutputReference | SecurityNetworkBasedDeviceHaV3HaLink1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_1_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.host1IpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_2_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.host2IpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNetworkBasedDeviceHaV3HaLink1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityNetworkBasedDeviceHaV3HaLink1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host1IpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.host1IpAddress = this._host1IpAddress;
    }
    if (this._host2IpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.host2IpAddress = this._host2IpAddress;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNetworkBasedDeviceHaV3HaLink1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host1IpAddress = undefined;
      this._host2IpAddress = undefined;
      this._networkId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host1IpAddress = value.host1IpAddress;
      this._host2IpAddress = value.host2IpAddress;
      this._networkId = value.networkId;
      this._subnetId = value.subnetId;
    }
  }

  // host_1_ip_address - computed: false, optional: false, required: true
  private _host1IpAddress?: string; 
  public get host1IpAddress() {
    return this.getStringAttribute('host_1_ip_address');
  }
  public set host1IpAddress(value: string) {
    this._host1IpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get host1IpAddressInput() {
    return this._host1IpAddress;
  }

  // host_2_ip_address - computed: false, optional: false, required: true
  private _host2IpAddress?: string; 
  public get host2IpAddress() {
    return this.getStringAttribute('host_2_ip_address');
  }
  public set host2IpAddress(value: string) {
    this._host2IpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get host2IpAddressInput() {
    return this._host2IpAddress;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface SecurityNetworkBasedDeviceHaV3HaLink2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_1_ip_address SecurityNetworkBasedDeviceHaV3#host_1_ip_address}
  */
  readonly host1IpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_2_ip_address SecurityNetworkBasedDeviceHaV3#host_2_ip_address}
  */
  readonly host2IpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#network_id SecurityNetworkBasedDeviceHaV3#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#subnet_id SecurityNetworkBasedDeviceHaV3#subnet_id}
  */
  readonly subnetId: string;
}

export function securityNetworkBasedDeviceHaV3HaLink2ToTerraform(struct?: SecurityNetworkBasedDeviceHaV3HaLink2OutputReference | SecurityNetworkBasedDeviceHaV3HaLink2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_1_ip_address: cdktf.stringToTerraform(struct!.host1IpAddress),
    host_2_ip_address: cdktf.stringToTerraform(struct!.host2IpAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function securityNetworkBasedDeviceHaV3HaLink2ToHclTerraform(struct?: SecurityNetworkBasedDeviceHaV3HaLink2OutputReference | SecurityNetworkBasedDeviceHaV3HaLink2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_1_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.host1IpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_2_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.host2IpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNetworkBasedDeviceHaV3HaLink2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityNetworkBasedDeviceHaV3HaLink2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host1IpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.host1IpAddress = this._host1IpAddress;
    }
    if (this._host2IpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.host2IpAddress = this._host2IpAddress;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNetworkBasedDeviceHaV3HaLink2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host1IpAddress = undefined;
      this._host2IpAddress = undefined;
      this._networkId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host1IpAddress = value.host1IpAddress;
      this._host2IpAddress = value.host2IpAddress;
      this._networkId = value.networkId;
      this._subnetId = value.subnetId;
    }
  }

  // host_1_ip_address - computed: false, optional: false, required: true
  private _host1IpAddress?: string; 
  public get host1IpAddress() {
    return this.getStringAttribute('host_1_ip_address');
  }
  public set host1IpAddress(value: string) {
    this._host1IpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get host1IpAddressInput() {
    return this._host1IpAddress;
  }

  // host_2_ip_address - computed: false, optional: false, required: true
  private _host2IpAddress?: string; 
  public get host2IpAddress() {
    return this.getStringAttribute('host_2_ip_address');
  }
  public set host2IpAddress(value: string) {
    this._host2IpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get host2IpAddressInput() {
    return this._host2IpAddress;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface SecurityNetworkBasedDeviceHaV3Port {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#comment SecurityNetworkBasedDeviceHaV3#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#enable SecurityNetworkBasedDeviceHaV3#enable}
  */
  readonly enable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#enable_ping SecurityNetworkBasedDeviceHaV3#enable_ping}
  */
  readonly enablePing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_1_ip_address SecurityNetworkBasedDeviceHaV3#host_1_ip_address}
  */
  readonly host1IpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_1_ip_address_prefix SecurityNetworkBasedDeviceHaV3#host_1_ip_address_prefix}
  */
  readonly host1IpAddressPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_2_ip_address SecurityNetworkBasedDeviceHaV3#host_2_ip_address}
  */
  readonly host2IpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#host_2_ip_address_prefix SecurityNetworkBasedDeviceHaV3#host_2_ip_address_prefix}
  */
  readonly host2IpAddressPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#mtu SecurityNetworkBasedDeviceHaV3#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#network_id SecurityNetworkBasedDeviceHaV3#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#preempt SecurityNetworkBasedDeviceHaV3#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#subnet_id SecurityNetworkBasedDeviceHaV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#vrrp_grp_id SecurityNetworkBasedDeviceHaV3#vrrp_grp_id}
  */
  readonly vrrpGrpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#vrrp_id SecurityNetworkBasedDeviceHaV3#vrrp_id}
  */
  readonly vrrpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#vrrp_ip_address SecurityNetworkBasedDeviceHaV3#vrrp_ip_address}
  */
  readonly vrrpIpAddress?: string;
}

export function securityNetworkBasedDeviceHaV3PortToTerraform(struct?: SecurityNetworkBasedDeviceHaV3Port | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    enable: cdktf.stringToTerraform(struct!.enable),
    enable_ping: cdktf.stringToTerraform(struct!.enablePing),
    host_1_ip_address: cdktf.stringToTerraform(struct!.host1IpAddress),
    host_1_ip_address_prefix: cdktf.numberToTerraform(struct!.host1IpAddressPrefix),
    host_2_ip_address: cdktf.stringToTerraform(struct!.host2IpAddress),
    host_2_ip_address_prefix: cdktf.numberToTerraform(struct!.host2IpAddressPrefix),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vrrp_grp_id: cdktf.stringToTerraform(struct!.vrrpGrpId),
    vrrp_id: cdktf.stringToTerraform(struct!.vrrpId),
    vrrp_ip_address: cdktf.stringToTerraform(struct!.vrrpIpAddress),
  }
}


export function securityNetworkBasedDeviceHaV3PortToHclTerraform(struct?: SecurityNetworkBasedDeviceHaV3Port | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ping: {
      value: cdktf.stringToHclTerraform(struct!.enablePing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_1_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.host1IpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_1_ip_address_prefix: {
      value: cdktf.numberToHclTerraform(struct!.host1IpAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_2_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.host2IpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_2_ip_address_prefix: {
      value: cdktf.numberToHclTerraform(struct!.host2IpAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_grp_id: {
      value: cdktf.stringToHclTerraform(struct!.vrrpGrpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_id: {
      value: cdktf.stringToHclTerraform(struct!.vrrpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.vrrpIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNetworkBasedDeviceHaV3PortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityNetworkBasedDeviceHaV3Port | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enablePing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePing = this._enablePing;
    }
    if (this._host1IpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.host1IpAddress = this._host1IpAddress;
    }
    if (this._host1IpAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.host1IpAddressPrefix = this._host1IpAddressPrefix;
    }
    if (this._host2IpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.host2IpAddress = this._host2IpAddress;
    }
    if (this._host2IpAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.host2IpAddressPrefix = this._host2IpAddressPrefix;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vrrpGrpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpGrpId = this._vrrpGrpId;
    }
    if (this._vrrpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpId = this._vrrpId;
    }
    if (this._vrrpIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpIpAddress = this._vrrpIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNetworkBasedDeviceHaV3Port | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._enable = undefined;
      this._enablePing = undefined;
      this._host1IpAddress = undefined;
      this._host1IpAddressPrefix = undefined;
      this._host2IpAddress = undefined;
      this._host2IpAddressPrefix = undefined;
      this._mtu = undefined;
      this._networkId = undefined;
      this._preempt = undefined;
      this._subnetId = undefined;
      this._vrrpGrpId = undefined;
      this._vrrpId = undefined;
      this._vrrpIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._enable = value.enable;
      this._enablePing = value.enablePing;
      this._host1IpAddress = value.host1IpAddress;
      this._host1IpAddressPrefix = value.host1IpAddressPrefix;
      this._host2IpAddress = value.host2IpAddress;
      this._host2IpAddressPrefix = value.host2IpAddressPrefix;
      this._mtu = value.mtu;
      this._networkId = value.networkId;
      this._preempt = value.preempt;
      this._subnetId = value.subnetId;
      this._vrrpGrpId = value.vrrpGrpId;
      this._vrrpId = value.vrrpId;
      this._vrrpIpAddress = value.vrrpIpAddress;
    }
  }

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

  // enable - computed: false, optional: false, required: true
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_ping - computed: false, optional: true, required: false
  private _enablePing?: string; 
  public get enablePing() {
    return this.getStringAttribute('enable_ping');
  }
  public set enablePing(value: string) {
    this._enablePing = value;
  }
  public resetEnablePing() {
    this._enablePing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePingInput() {
    return this._enablePing;
  }

  // host_1_ip_address - computed: true, optional: true, required: false
  private _host1IpAddress?: string; 
  public get host1IpAddress() {
    return this.getStringAttribute('host_1_ip_address');
  }
  public set host1IpAddress(value: string) {
    this._host1IpAddress = value;
  }
  public resetHost1IpAddress() {
    this._host1IpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get host1IpAddressInput() {
    return this._host1IpAddress;
  }

  // host_1_ip_address_prefix - computed: false, optional: true, required: false
  private _host1IpAddressPrefix?: number; 
  public get host1IpAddressPrefix() {
    return this.getNumberAttribute('host_1_ip_address_prefix');
  }
  public set host1IpAddressPrefix(value: number) {
    this._host1IpAddressPrefix = value;
  }
  public resetHost1IpAddressPrefix() {
    this._host1IpAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get host1IpAddressPrefixInput() {
    return this._host1IpAddressPrefix;
  }

  // host_2_ip_address - computed: true, optional: true, required: false
  private _host2IpAddress?: string; 
  public get host2IpAddress() {
    return this.getStringAttribute('host_2_ip_address');
  }
  public set host2IpAddress(value: string) {
    this._host2IpAddress = value;
  }
  public resetHost2IpAddress() {
    this._host2IpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get host2IpAddressInput() {
    return this._host2IpAddress;
  }

  // host_2_ip_address_prefix - computed: false, optional: true, required: false
  private _host2IpAddressPrefix?: number; 
  public get host2IpAddressPrefix() {
    return this.getNumberAttribute('host_2_ip_address_prefix');
  }
  public set host2IpAddressPrefix(value: number) {
    this._host2IpAddressPrefix = value;
  }
  public resetHost2IpAddressPrefix() {
    this._host2IpAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get host2IpAddressPrefixInput() {
    return this._host2IpAddressPrefix;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // preempt - computed: false, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vrrp_grp_id - computed: false, optional: true, required: false
  private _vrrpGrpId?: string; 
  public get vrrpGrpId() {
    return this.getStringAttribute('vrrp_grp_id');
  }
  public set vrrpGrpId(value: string) {
    this._vrrpGrpId = value;
  }
  public resetVrrpGrpId() {
    this._vrrpGrpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpGrpIdInput() {
    return this._vrrpGrpId;
  }

  // vrrp_id - computed: false, optional: true, required: false
  private _vrrpId?: string; 
  public get vrrpId() {
    return this.getStringAttribute('vrrp_id');
  }
  public set vrrpId(value: string) {
    this._vrrpId = value;
  }
  public resetVrrpId() {
    this._vrrpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpIdInput() {
    return this._vrrpId;
  }

  // vrrp_ip_address - computed: true, optional: true, required: false
  private _vrrpIpAddress?: string; 
  public get vrrpIpAddress() {
    return this.getStringAttribute('vrrp_ip_address');
  }
  public set vrrpIpAddress(value: string) {
    this._vrrpIpAddress = value;
  }
  public resetVrrpIpAddress() {
    this._vrrpIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpIpAddressInput() {
    return this._vrrpIpAddress;
  }
}

export class SecurityNetworkBasedDeviceHaV3PortList extends cdktf.ComplexList {
  public internalValue? : SecurityNetworkBasedDeviceHaV3Port[] | cdktf.IResolvable

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
  public get(index: number): SecurityNetworkBasedDeviceHaV3PortOutputReference {
    return new SecurityNetworkBasedDeviceHaV3PortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityNetworkBasedDeviceHaV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#create SecurityNetworkBasedDeviceHaV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#delete SecurityNetworkBasedDeviceHaV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#update SecurityNetworkBasedDeviceHaV3#update}
  */
  readonly update?: string;
}

export function securityNetworkBasedDeviceHaV3TimeoutsToTerraform(struct?: SecurityNetworkBasedDeviceHaV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function securityNetworkBasedDeviceHaV3TimeoutsToHclTerraform(struct?: SecurityNetworkBasedDeviceHaV3Timeouts | cdktf.IResolvable): any {
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

export class SecurityNetworkBasedDeviceHaV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNetworkBasedDeviceHaV3Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
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

  public set internalValue(value: SecurityNetworkBasedDeviceHaV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3 ecl_security_network_based_device_ha_v3}
*/
export class SecurityNetworkBasedDeviceHaV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_security_network_based_device_ha_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNetworkBasedDeviceHaV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNetworkBasedDeviceHaV3 to import
  * @param importFromId The id of the existing SecurityNetworkBasedDeviceHaV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNetworkBasedDeviceHaV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_security_network_based_device_ha_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/security_network_based_device_ha_v3 ecl_security_network_based_device_ha_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNetworkBasedDeviceHaV3Config
  */
  public constructor(scope: Construct, id: string, config: SecurityNetworkBasedDeviceHaV3Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_security_network_based_device_ha_v3',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host1AzGroup = config.host1AzGroup;
    this._host2AzGroup = config.host2AzGroup;
    this._id = config.id;
    this._licenseKind = config.licenseKind;
    this._locale = config.locale;
    this._operatingMode = config.operatingMode;
    this._tenantId = config.tenantId;
    this._haLink1.internalValue = config.haLink1;
    this._haLink2.internalValue = config.haLink2;
    this._port.internalValue = config.port;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_1_az_group - computed: false, optional: false, required: true
  private _host1AzGroup?: string; 
  public get host1AzGroup() {
    return this.getStringAttribute('host_1_az_group');
  }
  public set host1AzGroup(value: string) {
    this._host1AzGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get host1AzGroupInput() {
    return this._host1AzGroup;
  }

  // host_2_az_group - computed: false, optional: false, required: true
  private _host2AzGroup?: string; 
  public get host2AzGroup() {
    return this.getStringAttribute('host_2_az_group');
  }
  public set host2AzGroup(value: string) {
    this._host2AzGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get host2AzGroupInput() {
    return this._host2AzGroup;
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

  // license_kind - computed: false, optional: false, required: true
  private _licenseKind?: string; 
  public get licenseKind() {
    return this.getStringAttribute('license_kind');
  }
  public set licenseKind(value: string) {
    this._licenseKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKindInput() {
    return this._licenseKind;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // operating_mode - computed: false, optional: false, required: true
  private _operatingMode?: string; 
  public get operatingMode() {
    return this.getStringAttribute('operating_mode');
  }
  public set operatingMode(value: string) {
    this._operatingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingModeInput() {
    return this._operatingMode;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // ha_link_1 - computed: false, optional: false, required: true
  private _haLink1 = new SecurityNetworkBasedDeviceHaV3HaLink1OutputReference(this, "ha_link_1");
  public get haLink1() {
    return this._haLink1;
  }
  public putHaLink1(value: SecurityNetworkBasedDeviceHaV3HaLink1) {
    this._haLink1.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get haLink1Input() {
    return this._haLink1.internalValue;
  }

  // ha_link_2 - computed: false, optional: false, required: true
  private _haLink2 = new SecurityNetworkBasedDeviceHaV3HaLink2OutputReference(this, "ha_link_2");
  public get haLink2() {
    return this._haLink2;
  }
  public putHaLink2(value: SecurityNetworkBasedDeviceHaV3HaLink2) {
    this._haLink2.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get haLink2Input() {
    return this._haLink2.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new SecurityNetworkBasedDeviceHaV3PortList(this, "port", false);
  public get port() {
    return this._port;
  }
  public putPort(value: SecurityNetworkBasedDeviceHaV3Port[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityNetworkBasedDeviceHaV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityNetworkBasedDeviceHaV3Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_1_az_group: cdktf.stringToTerraform(this._host1AzGroup),
      host_2_az_group: cdktf.stringToTerraform(this._host2AzGroup),
      id: cdktf.stringToTerraform(this._id),
      license_kind: cdktf.stringToTerraform(this._licenseKind),
      locale: cdktf.stringToTerraform(this._locale),
      operating_mode: cdktf.stringToTerraform(this._operatingMode),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      ha_link_1: securityNetworkBasedDeviceHaV3HaLink1ToTerraform(this._haLink1.internalValue),
      ha_link_2: securityNetworkBasedDeviceHaV3HaLink2ToTerraform(this._haLink2.internalValue),
      port: cdktf.listMapper(securityNetworkBasedDeviceHaV3PortToTerraform, true)(this._port.internalValue),
      timeouts: securityNetworkBasedDeviceHaV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_1_az_group: {
        value: cdktf.stringToHclTerraform(this._host1AzGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_2_az_group: {
        value: cdktf.stringToHclTerraform(this._host2AzGroup),
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
      license_kind: {
        value: cdktf.stringToHclTerraform(this._licenseKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_mode: {
        value: cdktf.stringToHclTerraform(this._operatingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_link_1: {
        value: securityNetworkBasedDeviceHaV3HaLink1ToHclTerraform(this._haLink1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityNetworkBasedDeviceHaV3HaLink1List",
      },
      ha_link_2: {
        value: securityNetworkBasedDeviceHaV3HaLink2ToHclTerraform(this._haLink2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityNetworkBasedDeviceHaV3HaLink2List",
      },
      port: {
        value: cdktf.listMapperHcl(securityNetworkBasedDeviceHaV3PortToHclTerraform, true)(this._port.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityNetworkBasedDeviceHaV3PortList",
      },
      timeouts: {
        value: securityNetworkBasedDeviceHaV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNetworkBasedDeviceHaV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
