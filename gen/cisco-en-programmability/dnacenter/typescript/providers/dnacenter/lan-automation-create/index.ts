// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LanAutomationCreateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#id LanAutomationCreate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#parameters LanAutomationCreate#parameters}
  */
  readonly parameters: LanAutomationCreateParameters;
}
export interface LanAutomationCreateItem {
}

export function lanAutomationCreateItemToTerraform(struct?: LanAutomationCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lanAutomationCreateItemToHclTerraform(struct?: LanAutomationCreateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LanAutomationCreateItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LanAutomationCreateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LanAutomationCreateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class LanAutomationCreateItemList extends cdktf.ComplexList {

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
  public get(index: number): LanAutomationCreateItemOutputReference {
    return new LanAutomationCreateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LanAutomationCreateParametersPayloadIpPools {
  /**
  * Name of the IP pool.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#ip_pool_name LanAutomationCreate#ip_pool_name}
  */
  readonly ipPoolName?: string;
  /**
  * Role of the IP pool. Supported roles are: MAIN_POOL and PHYSICAL_LINK_POOL.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#ip_pool_role LanAutomationCreate#ip_pool_role}
  */
  readonly ipPoolRole?: string;
}

export function lanAutomationCreateParametersPayloadIpPoolsToTerraform(struct?: LanAutomationCreateParametersPayloadIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_pool_name: cdktf.stringToTerraform(struct!.ipPoolName),
    ip_pool_role: cdktf.stringToTerraform(struct!.ipPoolRole),
  }
}


export function lanAutomationCreateParametersPayloadIpPoolsToHclTerraform(struct?: LanAutomationCreateParametersPayloadIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pool_role: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LanAutomationCreateParametersPayloadIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LanAutomationCreateParametersPayloadIpPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolName = this._ipPoolName;
    }
    if (this._ipPoolRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolRole = this._ipPoolRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LanAutomationCreateParametersPayloadIpPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPoolName = undefined;
      this._ipPoolRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPoolName = value.ipPoolName;
      this._ipPoolRole = value.ipPoolRole;
    }
  }

  // ip_pool_name - computed: true, optional: true, required: false
  private _ipPoolName?: string; 
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }
  public set ipPoolName(value: string) {
    this._ipPoolName = value;
  }
  public resetIpPoolName() {
    this._ipPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolNameInput() {
    return this._ipPoolName;
  }

  // ip_pool_role - computed: true, optional: true, required: false
  private _ipPoolRole?: string; 
  public get ipPoolRole() {
    return this.getStringAttribute('ip_pool_role');
  }
  public set ipPoolRole(value: string) {
    this._ipPoolRole = value;
  }
  public resetIpPoolRole() {
    this._ipPoolRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolRoleInput() {
    return this._ipPoolRole;
  }
}

export class LanAutomationCreateParametersPayloadIpPoolsList extends cdktf.ComplexList {
  public internalValue? : LanAutomationCreateParametersPayloadIpPools[] | cdktf.IResolvable

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
  public get(index: number): LanAutomationCreateParametersPayloadIpPoolsOutputReference {
    return new LanAutomationCreateParametersPayloadIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LanAutomationCreateParametersPayload {
  /**
  * Discovered device site name.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#discovered_device_site_name_hierarchy LanAutomationCreate#discovered_device_site_name_hierarchy}
  */
  readonly discoveredDeviceSiteNameHierarchy?: string;
  /**
  * Use /dna/intent/api/v1/file/namespace/nw_orch api to get the file id for the already uploaded file in nw_orch namespace.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#host_name_file_id LanAutomationCreate#host_name_file_id}
  */
  readonly hostNameFileId?: string;
  /**
  * Host name prefix which shall be assigned to the discovered device.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#host_name_prefix LanAutomationCreate#host_name_prefix}
  */
  readonly hostNamePrefix?: string;
  /**
  * IS-IS domain password in plain text.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#isis_domain_pwd LanAutomationCreate#isis_domain_pwd}
  */
  readonly isisDomainPwd?: string;
  /**
  * To enable underlay native multicast.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#multicast_enabled LanAutomationCreate#multicast_enabled}
  */
  readonly multicastEnabled?: string;
  /**
  * Peer seed management IP address.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#peer_device_managment_ipaddress LanAutomationCreate#peer_device_managment_ipaddress}
  */
  readonly peerDeviceManagmentIpaddress?: string;
  /**
  * The list of interfaces on primary seed via which the discovered devices are connected.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#primary_device_interface_names LanAutomationCreate#primary_device_interface_names}
  */
  readonly primaryDeviceInterfaceNames?: string[];
  /**
  * Primary seed management IP address.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#primary_device_managment_ipaddress LanAutomationCreate#primary_device_managment_ipaddress}
  */
  readonly primaryDeviceManagmentIpaddress?: string;
  /**
  * Advertise LAN Automation summary route into BGP. 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#redistribute_isis_to_bgp LanAutomationCreate#redistribute_isis_to_bgp}
  */
  readonly redistributeIsisToBgp?: string;
  /**
  * ip_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#ip_pools LanAutomationCreate#ip_pools}
  */
  readonly ipPools?: LanAutomationCreateParametersPayloadIpPools[] | cdktf.IResolvable;
}

export function lanAutomationCreateParametersPayloadToTerraform(struct?: LanAutomationCreateParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discovered_device_site_name_hierarchy: cdktf.stringToTerraform(struct!.discoveredDeviceSiteNameHierarchy),
    host_name_file_id: cdktf.stringToTerraform(struct!.hostNameFileId),
    host_name_prefix: cdktf.stringToTerraform(struct!.hostNamePrefix),
    isis_domain_pwd: cdktf.stringToTerraform(struct!.isisDomainPwd),
    multicast_enabled: cdktf.stringToTerraform(struct!.multicastEnabled),
    peer_device_managment_ipaddress: cdktf.stringToTerraform(struct!.peerDeviceManagmentIpaddress),
    primary_device_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryDeviceInterfaceNames),
    primary_device_managment_ipaddress: cdktf.stringToTerraform(struct!.primaryDeviceManagmentIpaddress),
    redistribute_isis_to_bgp: cdktf.stringToTerraform(struct!.redistributeIsisToBgp),
    ip_pools: cdktf.listMapper(lanAutomationCreateParametersPayloadIpPoolsToTerraform, true)(struct!.ipPools),
  }
}


export function lanAutomationCreateParametersPayloadToHclTerraform(struct?: LanAutomationCreateParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discovered_device_site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.discoveredDeviceSiteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_file_id: {
      value: cdktf.stringToHclTerraform(struct!.hostNameFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.hostNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isis_domain_pwd: {
      value: cdktf.stringToHclTerraform(struct!.isisDomainPwd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_enabled: {
      value: cdktf.stringToHclTerraform(struct!.multicastEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_device_managment_ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.peerDeviceManagmentIpaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_device_interface_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryDeviceInterfaceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_device_managment_ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.primaryDeviceManagmentIpaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redistribute_isis_to_bgp: {
      value: cdktf.stringToHclTerraform(struct!.redistributeIsisToBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pools: {
      value: cdktf.listMapperHcl(lanAutomationCreateParametersPayloadIpPoolsToHclTerraform, true)(struct!.ipPools),
      isBlock: true,
      type: "list",
      storageClassType: "LanAutomationCreateParametersPayloadIpPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LanAutomationCreateParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LanAutomationCreateParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveredDeviceSiteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredDeviceSiteNameHierarchy = this._discoveredDeviceSiteNameHierarchy;
    }
    if (this._hostNameFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNameFileId = this._hostNameFileId;
    }
    if (this._hostNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNamePrefix = this._hostNamePrefix;
    }
    if (this._isisDomainPwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisDomainPwd = this._isisDomainPwd;
    }
    if (this._multicastEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastEnabled = this._multicastEnabled;
    }
    if (this._peerDeviceManagmentIpaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerDeviceManagmentIpaddress = this._peerDeviceManagmentIpaddress;
    }
    if (this._primaryDeviceInterfaceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDeviceInterfaceNames = this._primaryDeviceInterfaceNames;
    }
    if (this._primaryDeviceManagmentIpaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDeviceManagmentIpaddress = this._primaryDeviceManagmentIpaddress;
    }
    if (this._redistributeIsisToBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributeIsisToBgp = this._redistributeIsisToBgp;
    }
    if (this._ipPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPools = this._ipPools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LanAutomationCreateParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveredDeviceSiteNameHierarchy = undefined;
      this._hostNameFileId = undefined;
      this._hostNamePrefix = undefined;
      this._isisDomainPwd = undefined;
      this._multicastEnabled = undefined;
      this._peerDeviceManagmentIpaddress = undefined;
      this._primaryDeviceInterfaceNames = undefined;
      this._primaryDeviceManagmentIpaddress = undefined;
      this._redistributeIsisToBgp = undefined;
      this._ipPools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveredDeviceSiteNameHierarchy = value.discoveredDeviceSiteNameHierarchy;
      this._hostNameFileId = value.hostNameFileId;
      this._hostNamePrefix = value.hostNamePrefix;
      this._isisDomainPwd = value.isisDomainPwd;
      this._multicastEnabled = value.multicastEnabled;
      this._peerDeviceManagmentIpaddress = value.peerDeviceManagmentIpaddress;
      this._primaryDeviceInterfaceNames = value.primaryDeviceInterfaceNames;
      this._primaryDeviceManagmentIpaddress = value.primaryDeviceManagmentIpaddress;
      this._redistributeIsisToBgp = value.redistributeIsisToBgp;
      this._ipPools.internalValue = value.ipPools;
    }
  }

  // discovered_device_site_name_hierarchy - computed: true, optional: true, required: false
  private _discoveredDeviceSiteNameHierarchy?: string; 
  public get discoveredDeviceSiteNameHierarchy() {
    return this.getStringAttribute('discovered_device_site_name_hierarchy');
  }
  public set discoveredDeviceSiteNameHierarchy(value: string) {
    this._discoveredDeviceSiteNameHierarchy = value;
  }
  public resetDiscoveredDeviceSiteNameHierarchy() {
    this._discoveredDeviceSiteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredDeviceSiteNameHierarchyInput() {
    return this._discoveredDeviceSiteNameHierarchy;
  }

  // host_name_file_id - computed: true, optional: true, required: false
  private _hostNameFileId?: string; 
  public get hostNameFileId() {
    return this.getStringAttribute('host_name_file_id');
  }
  public set hostNameFileId(value: string) {
    this._hostNameFileId = value;
  }
  public resetHostNameFileId() {
    this._hostNameFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameFileIdInput() {
    return this._hostNameFileId;
  }

  // host_name_prefix - computed: true, optional: true, required: false
  private _hostNamePrefix?: string; 
  public get hostNamePrefix() {
    return this.getStringAttribute('host_name_prefix');
  }
  public set hostNamePrefix(value: string) {
    this._hostNamePrefix = value;
  }
  public resetHostNamePrefix() {
    this._hostNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamePrefixInput() {
    return this._hostNamePrefix;
  }

  // isis_domain_pwd - computed: true, optional: true, required: false
  private _isisDomainPwd?: string; 
  public get isisDomainPwd() {
    return this.getStringAttribute('isis_domain_pwd');
  }
  public set isisDomainPwd(value: string) {
    this._isisDomainPwd = value;
  }
  public resetIsisDomainPwd() {
    this._isisDomainPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisDomainPwdInput() {
    return this._isisDomainPwd;
  }

  // multicast_enabled - computed: true, optional: true, required: false
  private _multicastEnabled?: string; 
  public get multicastEnabled() {
    return this.getStringAttribute('multicast_enabled');
  }
  public set multicastEnabled(value: string) {
    this._multicastEnabled = value;
  }
  public resetMulticastEnabled() {
    this._multicastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastEnabledInput() {
    return this._multicastEnabled;
  }

  // peer_device_managment_ipaddress - computed: true, optional: true, required: false
  private _peerDeviceManagmentIpaddress?: string; 
  public get peerDeviceManagmentIpaddress() {
    return this.getStringAttribute('peer_device_managment_ipaddress');
  }
  public set peerDeviceManagmentIpaddress(value: string) {
    this._peerDeviceManagmentIpaddress = value;
  }
  public resetPeerDeviceManagmentIpaddress() {
    this._peerDeviceManagmentIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDeviceManagmentIpaddressInput() {
    return this._peerDeviceManagmentIpaddress;
  }

  // primary_device_interface_names - computed: true, optional: true, required: false
  private _primaryDeviceInterfaceNames?: string[]; 
  public get primaryDeviceInterfaceNames() {
    return this.getListAttribute('primary_device_interface_names');
  }
  public set primaryDeviceInterfaceNames(value: string[]) {
    this._primaryDeviceInterfaceNames = value;
  }
  public resetPrimaryDeviceInterfaceNames() {
    this._primaryDeviceInterfaceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceInterfaceNamesInput() {
    return this._primaryDeviceInterfaceNames;
  }

  // primary_device_managment_ipaddress - computed: true, optional: true, required: false
  private _primaryDeviceManagmentIpaddress?: string; 
  public get primaryDeviceManagmentIpaddress() {
    return this.getStringAttribute('primary_device_managment_ipaddress');
  }
  public set primaryDeviceManagmentIpaddress(value: string) {
    this._primaryDeviceManagmentIpaddress = value;
  }
  public resetPrimaryDeviceManagmentIpaddress() {
    this._primaryDeviceManagmentIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceManagmentIpaddressInput() {
    return this._primaryDeviceManagmentIpaddress;
  }

  // redistribute_isis_to_bgp - computed: true, optional: true, required: false
  private _redistributeIsisToBgp?: string; 
  public get redistributeIsisToBgp() {
    return this.getStringAttribute('redistribute_isis_to_bgp');
  }
  public set redistributeIsisToBgp(value: string) {
    this._redistributeIsisToBgp = value;
  }
  public resetRedistributeIsisToBgp() {
    this._redistributeIsisToBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeIsisToBgpInput() {
    return this._redistributeIsisToBgp;
  }

  // ip_pools - computed: false, optional: true, required: false
  private _ipPools = new LanAutomationCreateParametersPayloadIpPoolsList(this, "ip_pools", false);
  public get ipPools() {
    return this._ipPools;
  }
  public putIpPools(value: LanAutomationCreateParametersPayloadIpPools[] | cdktf.IResolvable) {
    this._ipPools.internalValue = value;
  }
  public resetIpPools() {
    this._ipPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolsInput() {
    return this._ipPools.internalValue;
  }
}

export class LanAutomationCreateParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : LanAutomationCreateParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): LanAutomationCreateParametersPayloadOutputReference {
    return new LanAutomationCreateParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LanAutomationCreateParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#payload LanAutomationCreate#payload}
  */
  readonly payload?: LanAutomationCreateParametersPayload[] | cdktf.IResolvable;
}

export function lanAutomationCreateParametersToTerraform(struct?: LanAutomationCreateParametersOutputReference | LanAutomationCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(lanAutomationCreateParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function lanAutomationCreateParametersToHclTerraform(struct?: LanAutomationCreateParametersOutputReference | LanAutomationCreateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(lanAutomationCreateParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "LanAutomationCreateParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LanAutomationCreateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LanAutomationCreateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LanAutomationCreateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new LanAutomationCreateParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: LanAutomationCreateParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create dnacenter_lan_automation_create}
*/
export class LanAutomationCreate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_lan_automation_create";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LanAutomationCreate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LanAutomationCreate to import
  * @param importFromId The id of the existing LanAutomationCreate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LanAutomationCreate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_lan_automation_create", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/lan_automation_create dnacenter_lan_automation_create} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LanAutomationCreateConfig
  */
  public constructor(scope: Construct, id: string, config: LanAutomationCreateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_lan_automation_create',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new LanAutomationCreateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new LanAutomationCreateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: LanAutomationCreateParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: lanAutomationCreateParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: lanAutomationCreateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LanAutomationCreateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
