// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmDeployVmwareConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of DNS servers to assign to each deployed instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#dns_servers CmDeployVmware#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#instance CmDeployVmware#instance}
  */
  readonly instance: CmDeployVmwareInstance;
  /**
  * List of l1networks to assign to deployed instance, each l1network is a block of attributes like name, vlans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#l1_networks CmDeployVmware#l1_networks}
  */
  readonly l1Networks?: CmDeployVmwareL1Networks[] | cdktf.IResolvable;
  /**
  * List of NTP servers to assign to each deployed instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#ntp_servers CmDeployVmware#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * The number of seconds to wait for instance deployment to finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#timeout CmDeployVmware#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#vsphere_provider CmDeployVmware#vsphere_provider}
  */
  readonly vsphereProvider: CmDeployVmwareVsphereProvider;
}
export interface CmDeployVmwareInstance {
  /**
  * The number of virtual processor cores to configure on the VM.Default is `8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#cpu CmDeployVmware#cpu}
  */
  readonly cpu?: number;
  /**
  * Name of the vSphere network to use as the BIG-IP Next external network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#external_network_name CmDeployVmware#external_network_name}
  */
  readonly externalNetworkName: string;
  /**
  * Name of the vSphere network to use as the BIG-IP Next HA Control plane network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#ha_control_plane_network_name CmDeployVmware#ha_control_plane_network_name}
  */
  readonly haControlPlaneNetworkName?: string;
  /**
  * Name of the vSphere network to use as the BIG-IP Next HA data plane network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#ha_data_plane_network_name CmDeployVmware#ha_data_plane_network_name}
  */
  readonly haDataPlaneNetworkName?: string;
  /**
  * Name of VM Deployed on vSphere,it should be `unique` string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#instance_hostname CmDeployVmware#instance_hostname}
  */
  readonly instanceHostname: string;
  /**
  * Name of the vSphere network to use as the BIG-IP Next internal network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#internal_network_name CmDeployVmware#internal_network_name}
  */
  readonly internalNetworkName?: string;
  /**
  * The amount of memory in MB to configure on the VM.Default is `16384`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#memory CmDeployVmware#memory}
  */
  readonly memory?: number;
  /**
  * Management address to be used for deployed BIG-IP Next Instance in vsphere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#mgmt_address CmDeployVmware#mgmt_address}
  */
  readonly mgmtAddress: string;
  /**
  * Management gateway address to be used for deployed BIG-IP Next instance in vsphere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#mgmt_gateway CmDeployVmware#mgmt_gateway}
  */
  readonly mgmtGateway: string;
  /**
  * The management network name to be used for deployed BIG-IP Next Instance in vSphere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#mgmt_network_name CmDeployVmware#mgmt_network_name}
  */
  readonly mgmtNetworkName: string;
  /**
  * Management password of deployed BIG-IP Next instance in vpshere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#mgmt_password CmDeployVmware#mgmt_password}
  */
  readonly mgmtPassword: string;
  /**
  * Management address prefix to be used for deployed BIG-IP Next instance in vsphere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#mgmt_prefix CmDeployVmware#mgmt_prefix}
  */
  readonly mgmtPrefix: number;
  /**
  * Management username of deployed BIG-IP Next instance in vpshere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#mgmt_user CmDeployVmware#mgmt_user}
  */
  readonly mgmtUser: string;
}

export function cmDeployVmwareInstanceToTerraform(struct?: CmDeployVmwareInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    external_network_name: cdktf.stringToTerraform(struct!.externalNetworkName),
    ha_control_plane_network_name: cdktf.stringToTerraform(struct!.haControlPlaneNetworkName),
    ha_data_plane_network_name: cdktf.stringToTerraform(struct!.haDataPlaneNetworkName),
    instance_hostname: cdktf.stringToTerraform(struct!.instanceHostname),
    internal_network_name: cdktf.stringToTerraform(struct!.internalNetworkName),
    memory: cdktf.numberToTerraform(struct!.memory),
    mgmt_address: cdktf.stringToTerraform(struct!.mgmtAddress),
    mgmt_gateway: cdktf.stringToTerraform(struct!.mgmtGateway),
    mgmt_network_name: cdktf.stringToTerraform(struct!.mgmtNetworkName),
    mgmt_password: cdktf.stringToTerraform(struct!.mgmtPassword),
    mgmt_prefix: cdktf.numberToTerraform(struct!.mgmtPrefix),
    mgmt_user: cdktf.stringToTerraform(struct!.mgmtUser),
  }
}


export function cmDeployVmwareInstanceToHclTerraform(struct?: CmDeployVmwareInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_network_name: {
      value: cdktf.stringToHclTerraform(struct!.externalNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_control_plane_network_name: {
      value: cdktf.stringToHclTerraform(struct!.haControlPlaneNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_data_plane_network_name: {
      value: cdktf.stringToHclTerraform(struct!.haDataPlaneNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_hostname: {
      value: cdktf.stringToHclTerraform(struct!.instanceHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_network_name: {
      value: cdktf.stringToHclTerraform(struct!.internalNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgmt_address: {
      value: cdktf.stringToHclTerraform(struct!.mgmtAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_gateway: {
      value: cdktf.stringToHclTerraform(struct!.mgmtGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_network_name: {
      value: cdktf.stringToHclTerraform(struct!.mgmtNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_password: {
      value: cdktf.stringToHclTerraform(struct!.mgmtPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_prefix: {
      value: cdktf.numberToHclTerraform(struct!.mgmtPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgmt_user: {
      value: cdktf.stringToHclTerraform(struct!.mgmtUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmDeployVmwareInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmDeployVmwareInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._externalNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNetworkName = this._externalNetworkName;
    }
    if (this._haControlPlaneNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.haControlPlaneNetworkName = this._haControlPlaneNetworkName;
    }
    if (this._haDataPlaneNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.haDataPlaneNetworkName = this._haDataPlaneNetworkName;
    }
    if (this._instanceHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceHostname = this._instanceHostname;
    }
    if (this._internalNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalNetworkName = this._internalNetworkName;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._mgmtAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtAddress = this._mgmtAddress;
    }
    if (this._mgmtGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtGateway = this._mgmtGateway;
    }
    if (this._mgmtNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtNetworkName = this._mgmtNetworkName;
    }
    if (this._mgmtPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtPassword = this._mgmtPassword;
    }
    if (this._mgmtPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtPrefix = this._mgmtPrefix;
    }
    if (this._mgmtUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtUser = this._mgmtUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmDeployVmwareInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._externalNetworkName = undefined;
      this._haControlPlaneNetworkName = undefined;
      this._haDataPlaneNetworkName = undefined;
      this._instanceHostname = undefined;
      this._internalNetworkName = undefined;
      this._memory = undefined;
      this._mgmtAddress = undefined;
      this._mgmtGateway = undefined;
      this._mgmtNetworkName = undefined;
      this._mgmtPassword = undefined;
      this._mgmtPrefix = undefined;
      this._mgmtUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._externalNetworkName = value.externalNetworkName;
      this._haControlPlaneNetworkName = value.haControlPlaneNetworkName;
      this._haDataPlaneNetworkName = value.haDataPlaneNetworkName;
      this._instanceHostname = value.instanceHostname;
      this._internalNetworkName = value.internalNetworkName;
      this._memory = value.memory;
      this._mgmtAddress = value.mgmtAddress;
      this._mgmtGateway = value.mgmtGateway;
      this._mgmtNetworkName = value.mgmtNetworkName;
      this._mgmtPassword = value.mgmtPassword;
      this._mgmtPrefix = value.mgmtPrefix;
      this._mgmtUser = value.mgmtUser;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // external_network_name - computed: false, optional: false, required: true
  private _externalNetworkName?: string; 
  public get externalNetworkName() {
    return this.getStringAttribute('external_network_name');
  }
  public set externalNetworkName(value: string) {
    this._externalNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkNameInput() {
    return this._externalNetworkName;
  }

  // ha_control_plane_network_name - computed: false, optional: true, required: false
  private _haControlPlaneNetworkName?: string; 
  public get haControlPlaneNetworkName() {
    return this.getStringAttribute('ha_control_plane_network_name');
  }
  public set haControlPlaneNetworkName(value: string) {
    this._haControlPlaneNetworkName = value;
  }
  public resetHaControlPlaneNetworkName() {
    this._haControlPlaneNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haControlPlaneNetworkNameInput() {
    return this._haControlPlaneNetworkName;
  }

  // ha_data_plane_network_name - computed: false, optional: true, required: false
  private _haDataPlaneNetworkName?: string; 
  public get haDataPlaneNetworkName() {
    return this.getStringAttribute('ha_data_plane_network_name');
  }
  public set haDataPlaneNetworkName(value: string) {
    this._haDataPlaneNetworkName = value;
  }
  public resetHaDataPlaneNetworkName() {
    this._haDataPlaneNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDataPlaneNetworkNameInput() {
    return this._haDataPlaneNetworkName;
  }

  // instance_hostname - computed: false, optional: false, required: true
  private _instanceHostname?: string; 
  public get instanceHostname() {
    return this.getStringAttribute('instance_hostname');
  }
  public set instanceHostname(value: string) {
    this._instanceHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceHostnameInput() {
    return this._instanceHostname;
  }

  // internal_network_name - computed: false, optional: true, required: false
  private _internalNetworkName?: string; 
  public get internalNetworkName() {
    return this.getStringAttribute('internal_network_name');
  }
  public set internalNetworkName(value: string) {
    this._internalNetworkName = value;
  }
  public resetInternalNetworkName() {
    this._internalNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNetworkNameInput() {
    return this._internalNetworkName;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // mgmt_address - computed: false, optional: false, required: true
  private _mgmtAddress?: string; 
  public get mgmtAddress() {
    return this.getStringAttribute('mgmt_address');
  }
  public set mgmtAddress(value: string) {
    this._mgmtAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtAddressInput() {
    return this._mgmtAddress;
  }

  // mgmt_gateway - computed: false, optional: false, required: true
  private _mgmtGateway?: string; 
  public get mgmtGateway() {
    return this.getStringAttribute('mgmt_gateway');
  }
  public set mgmtGateway(value: string) {
    this._mgmtGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtGatewayInput() {
    return this._mgmtGateway;
  }

  // mgmt_network_name - computed: false, optional: false, required: true
  private _mgmtNetworkName?: string; 
  public get mgmtNetworkName() {
    return this.getStringAttribute('mgmt_network_name');
  }
  public set mgmtNetworkName(value: string) {
    this._mgmtNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetworkNameInput() {
    return this._mgmtNetworkName;
  }

  // mgmt_password - computed: false, optional: false, required: true
  private _mgmtPassword?: string; 
  public get mgmtPassword() {
    return this.getStringAttribute('mgmt_password');
  }
  public set mgmtPassword(value: string) {
    this._mgmtPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPasswordInput() {
    return this._mgmtPassword;
  }

  // mgmt_prefix - computed: false, optional: false, required: true
  private _mgmtPrefix?: number; 
  public get mgmtPrefix() {
    return this.getNumberAttribute('mgmt_prefix');
  }
  public set mgmtPrefix(value: number) {
    this._mgmtPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPrefixInput() {
    return this._mgmtPrefix;
  }

  // mgmt_user - computed: false, optional: false, required: true
  private _mgmtUser?: string; 
  public get mgmtUser() {
    return this.getStringAttribute('mgmt_user');
  }
  public set mgmtUser(value: string) {
    this._mgmtUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtUserInput() {
    return this._mgmtUser;
  }
}
export interface CmDeployVmwareL1NetworksVlans {
  /**
  * List of self ips to be mapped for l1Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#self_ips CmDeployVmware#self_ips}
  */
  readonly selfIps: string[];
  /**
  * Name of vlan to be mapped for l1Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#vlan_name CmDeployVmware#vlan_name}
  */
  readonly vlanName: string;
  /**
  * Vlan tag to be mapped for l1Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#vlan_tag CmDeployVmware#vlan_tag}
  */
  readonly vlanTag: number;
}

export function cmDeployVmwareL1NetworksVlansToTerraform(struct?: CmDeployVmwareL1NetworksVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selfIps),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
    vlan_tag: cdktf.numberToTerraform(struct!.vlanTag),
  }
}


export function cmDeployVmwareL1NetworksVlansToHclTerraform(struct?: CmDeployVmwareL1NetworksVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selfIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmDeployVmwareL1NetworksVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmDeployVmwareL1NetworksVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selfIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfIps = this._selfIps;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    if (this._vlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTag = this._vlanTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmDeployVmwareL1NetworksVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selfIps = undefined;
      this._vlanName = undefined;
      this._vlanTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selfIps = value.selfIps;
      this._vlanName = value.vlanName;
      this._vlanTag = value.vlanTag;
    }
  }

  // self_ips - computed: false, optional: false, required: true
  private _selfIps?: string[]; 
  public get selfIps() {
    return this.getListAttribute('self_ips');
  }
  public set selfIps(value: string[]) {
    this._selfIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfIpsInput() {
    return this._selfIps;
  }

  // vlan_name - computed: false, optional: false, required: true
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // vlan_tag - computed: false, optional: false, required: true
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }
}

export class CmDeployVmwareL1NetworksVlansList extends cdktf.ComplexList {
  public internalValue? : CmDeployVmwareL1NetworksVlans[] | cdktf.IResolvable

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
  public get(index: number): CmDeployVmwareL1NetworksVlansOutputReference {
    return new CmDeployVmwareL1NetworksVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmDeployVmwareL1Networks {
  /**
  * Name of l1Newwork to assign to deployed instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#name CmDeployVmware#name}
  */
  readonly name: string;
  /**
  * List of vlans to be mapped for l1Network,each vlan is a block of attributes like vlan_name,vlan_tag,self_ips
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#vlans CmDeployVmware#vlans}
  */
  readonly vlans: CmDeployVmwareL1NetworksVlans[] | cdktf.IResolvable;
}

export function cmDeployVmwareL1NetworksToTerraform(struct?: CmDeployVmwareL1Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlans: cdktf.listMapper(cmDeployVmwareL1NetworksVlansToTerraform, false)(struct!.vlans),
  }
}


export function cmDeployVmwareL1NetworksToHclTerraform(struct?: CmDeployVmwareL1Networks | cdktf.IResolvable): any {
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
    vlans: {
      value: cdktf.listMapperHcl(cmDeployVmwareL1NetworksVlansToHclTerraform, false)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "CmDeployVmwareL1NetworksVlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmDeployVmwareL1NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmDeployVmwareL1Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmDeployVmwareL1Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vlans.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vlans.internalValue = value.vlans;
    }
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

  // vlans - computed: false, optional: false, required: true
  private _vlans = new CmDeployVmwareL1NetworksVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: CmDeployVmwareL1NetworksVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }
}

export class CmDeployVmwareL1NetworksList extends cdktf.ComplexList {
  public internalValue? : CmDeployVmwareL1Networks[] | cdktf.IResolvable

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
  public get(index: number): CmDeployVmwareL1NetworksOutputReference {
    return new CmDeployVmwareL1NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmDeployVmwareVsphereProvider {
  /**
  * The vSphere cluster to create the VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#cluster_name CmDeployVmware#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The vSphere Content Library from where `vm_template_name` can be used to create the VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#content_library CmDeployVmware#content_library}
  */
  readonly contentLibrary: string;
  /**
  * The vSphere datacenter to create the VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#datacenter_name CmDeployVmware#datacenter_name}
  */
  readonly datacenterName: string;
  /**
  * The vSphere datastore to create the VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#datastore_name CmDeployVmware#datastore_name}
  */
  readonly datastoreName: string;
  /**
  * Name of provider to be used for deploying VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#provider_name CmDeployVmware#provider_name}
  */
  readonly providerName: string;
  /**
  * The vSphere resource pool name to create the VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#resource_pool_name CmDeployVmware#resource_pool_name}
  */
  readonly resourcePoolName: string;
  /**
  * The vSphere VM template name to create the VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#vm_template_name CmDeployVmware#vm_template_name}
  */
  readonly vmTemplateName: string;
}

export function cmDeployVmwareVsphereProviderToTerraform(struct?: CmDeployVmwareVsphereProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    content_library: cdktf.stringToTerraform(struct!.contentLibrary),
    datacenter_name: cdktf.stringToTerraform(struct!.datacenterName),
    datastore_name: cdktf.stringToTerraform(struct!.datastoreName),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    resource_pool_name: cdktf.stringToTerraform(struct!.resourcePoolName),
    vm_template_name: cdktf.stringToTerraform(struct!.vmTemplateName),
  }
}


export function cmDeployVmwareVsphereProviderToHclTerraform(struct?: CmDeployVmwareVsphereProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_library: {
      value: cdktf.stringToHclTerraform(struct!.contentLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_name: {
      value: cdktf.stringToHclTerraform(struct!.datacenterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore_name: {
      value: cdktf.stringToHclTerraform(struct!.datastoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.resourcePoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_template_name: {
      value: cdktf.stringToHclTerraform(struct!.vmTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmDeployVmwareVsphereProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmDeployVmwareVsphereProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._contentLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLibrary = this._contentLibrary;
    }
    if (this._datacenterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterName = this._datacenterName;
    }
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._resourcePoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePoolName = this._resourcePoolName;
    }
    if (this._vmTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmTemplateName = this._vmTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmDeployVmwareVsphereProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._contentLibrary = undefined;
      this._datacenterName = undefined;
      this._datastoreName = undefined;
      this._providerName = undefined;
      this._resourcePoolName = undefined;
      this._vmTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._contentLibrary = value.contentLibrary;
      this._datacenterName = value.datacenterName;
      this._datastoreName = value.datastoreName;
      this._providerName = value.providerName;
      this._resourcePoolName = value.resourcePoolName;
      this._vmTemplateName = value.vmTemplateName;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // content_library - computed: false, optional: false, required: true
  private _contentLibrary?: string; 
  public get contentLibrary() {
    return this.getStringAttribute('content_library');
  }
  public set contentLibrary(value: string) {
    this._contentLibrary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLibraryInput() {
    return this._contentLibrary;
  }

  // datacenter_name - computed: false, optional: false, required: true
  private _datacenterName?: string; 
  public get datacenterName() {
    return this.getStringAttribute('datacenter_name');
  }
  public set datacenterName(value: string) {
    this._datacenterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterNameInput() {
    return this._datacenterName;
  }

  // datastore_name - computed: false, optional: false, required: true
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // resource_pool_name - computed: false, optional: false, required: true
  private _resourcePoolName?: string; 
  public get resourcePoolName() {
    return this.getStringAttribute('resource_pool_name');
  }
  public set resourcePoolName(value: string) {
    this._resourcePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolNameInput() {
    return this._resourcePoolName;
  }

  // vm_template_name - computed: false, optional: false, required: true
  private _vmTemplateName?: string; 
  public get vmTemplateName() {
    return this.getStringAttribute('vm_template_name');
  }
  public set vmTemplateName(value: string) {
    this._vmTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTemplateNameInput() {
    return this._vmTemplateName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware bigipnext_cm_deploy_vmware}
*/
export class CmDeployVmware extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_deploy_vmware";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmDeployVmware resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmDeployVmware to import
  * @param importFromId The id of the existing CmDeployVmware that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmDeployVmware to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_deploy_vmware", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_deploy_vmware bigipnext_cm_deploy_vmware} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmDeployVmwareConfig
  */
  public constructor(scope: Construct, id: string, config: CmDeployVmwareConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_deploy_vmware',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsServers = config.dnsServers;
    this._instance.internalValue = config.instance;
    this._l1Networks.internalValue = config.l1Networks;
    this._ntpServers = config.ntpServers;
    this._timeout = config.timeout;
    this._vsphereProvider.internalValue = config.vsphereProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new CmDeployVmwareInstanceOutputReference(this, "instance");
  public get instance() {
    return this._instance;
  }
  public putInstance(value: CmDeployVmwareInstance) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // l1_networks - computed: false, optional: true, required: false
  private _l1Networks = new CmDeployVmwareL1NetworksList(this, "l1_networks", false);
  public get l1Networks() {
    return this._l1Networks;
  }
  public putL1Networks(value: CmDeployVmwareL1Networks[] | cdktf.IResolvable) {
    this._l1Networks.internalValue = value;
  }
  public resetL1Networks() {
    this._l1Networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l1NetworksInput() {
    return this._l1Networks.internalValue;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // vsphere_provider - computed: false, optional: false, required: true
  private _vsphereProvider = new CmDeployVmwareVsphereProviderOutputReference(this, "vsphere_provider");
  public get vsphereProvider() {
    return this._vsphereProvider;
  }
  public putVsphereProvider(value: CmDeployVmwareVsphereProvider) {
    this._vsphereProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereProviderInput() {
    return this._vsphereProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      instance: cmDeployVmwareInstanceToTerraform(this._instance.internalValue),
      l1_networks: cdktf.listMapper(cmDeployVmwareL1NetworksToTerraform, false)(this._l1Networks.internalValue),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      timeout: cdktf.numberToTerraform(this._timeout),
      vsphere_provider: cmDeployVmwareVsphereProviderToTerraform(this._vsphereProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance: {
        value: cmDeployVmwareInstanceToHclTerraform(this._instance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmDeployVmwareInstance",
      },
      l1_networks: {
        value: cdktf.listMapperHcl(cmDeployVmwareL1NetworksToHclTerraform, false)(this._l1Networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmDeployVmwareL1NetworksList",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vsphere_provider: {
        value: cmDeployVmwareVsphereProviderToHclTerraform(this._vsphereProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmDeployVmwareVsphereProvider",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
