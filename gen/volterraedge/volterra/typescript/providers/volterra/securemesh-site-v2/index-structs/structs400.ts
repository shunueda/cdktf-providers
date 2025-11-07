import * as cdktf from 'cdktf';
import { SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface,
securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceToTerraform,
securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceToHclTerraform,
SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceOutputReference,
SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface,
securemeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceToTerraform,
securemeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform,
SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceOutputReference } from './structs0'
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
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

  // start_ip - computed: false, optional: true, required: false
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
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    pools: cdktf.listMapper(securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
    value: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._vlanId = value.vlanId;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    ethernet_interface: securemeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2KvmNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
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
    no_ipv4_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bond_interface: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4Address = this._noIpv4Address;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._bondInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondInterface = this._bondInterface?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    if (this._vlanInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterface = this._vlanInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
      this._labels = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._noIpv4Address = undefined;
      this._noIpv6Address = undefined;
      this._priority = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._bondInterface.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._networkOption.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
      this._vlanInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpClient = value.dhcpClient;
      this._labels = value.labels;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._name = value.name;
      this._noIpv4Address = value.noIpv4Address;
      this._noIpv6Address = value.noIpv6Address;
      this._priority = value.priority;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._bondInterface.internalValue = value.bondInterface;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._networkOption.internalValue = value.networkOption;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
      this._vlanInterface.internalValue = value.vlanInterface;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
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

  // no_ipv4_address - computed: false, optional: true, required: false
  private _noIpv4Address?: boolean | cdktf.IResolvable; 
  public get noIpv4Address() {
    return this.getBooleanAttribute('no_ipv4_address');
  }
  public set noIpv4Address(value: boolean | cdktf.IResolvable) {
    this._noIpv4Address = value;
  }
  public resetNoIpv4Address() {
    this._noIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4AddressInput() {
    return this._noIpv4Address;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
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

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // bond_interface - computed: false, optional: true, required: false
  private _bondInterface = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }

  // vlan_interface - computed: false, optional: true, required: false
  private _vlanInterface = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListVlanInterface) {
    this._vlanInterface.internalValue = value;
  }
  public resetVlanInterface() {
    this._vlanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfaceInput() {
    return this._vlanInterface.internalValue;
  }
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2KvmNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2KvmNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2KvmNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
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
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2KvmNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._publicIp = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._publicIp = value.publicIp;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // hostname - computed: false, optional: true, required: false
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // type - computed: false, optional: true, required: false
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2KvmNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2KvmNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2KvmNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2KvmNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2KvmNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2KvmNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2KvmNotManagedToTerraform(struct?: SecuremeshSiteV2KvmNotManagedOutputReference | SecuremeshSiteV2KvmNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2KvmNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2KvmNotManagedToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedOutputReference | SecuremeshSiteV2KvmNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2KvmNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2KvmNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2KvmNotManagedNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2Kvm {
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2KvmNotManaged;
}

export function securemeshSiteV2KvmToTerraform(struct?: SecuremeshSiteV2KvmOutputReference | SecuremeshSiteV2Kvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2KvmNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2KvmToHclTerraform(struct?: SecuremeshSiteV2KvmOutputReference | SecuremeshSiteV2Kvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_managed: {
      value: securemeshSiteV2KvmNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Kvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Kvm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2KvmNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2KvmNotManaged) {
    this._notManaged.internalValue = value;
  }
  public resetNotManaged() {
    this._notManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notManagedInput() {
    return this._notManaged.internalValue;
  }
}
export interface SecuremeshSiteV2LoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vip_vrrp_mode SecuremeshSiteV2#vip_vrrp_mode}
  */
  readonly vipVrrpMode?: string;
}

export function securemeshSiteV2LoadBalancingToTerraform(struct?: SecuremeshSiteV2LoadBalancingOutputReference | SecuremeshSiteV2LoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_vrrp_mode: cdktf.stringToTerraform(struct!.vipVrrpMode),
  }
}


export function securemeshSiteV2LoadBalancingToHclTerraform(struct?: SecuremeshSiteV2LoadBalancingOutputReference | SecuremeshSiteV2LoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_vrrp_mode: {
      value: cdktf.stringToHclTerraform(struct!.vipVrrpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LoadBalancingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipVrrpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipVrrpMode = this._vipVrrpMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vipVrrpMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vipVrrpMode = value.vipVrrpMode;
    }
  }

  // vip_vrrp_mode - computed: false, optional: true, required: false
  private _vipVrrpMode?: string; 
  public get vipVrrpMode() {
    return this.getStringAttribute('vip_vrrp_mode');
  }
  public set vipVrrpMode(value: string) {
    this._vipVrrpMode = value;
  }
  public resetVipVrrpMode() {
    this._vipVrrpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipVrrpModeInput() {
    return this._vipVrrpMode;
  }
}
export interface SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#attrs SecuremeshSiteV2#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gateway SecuremeshSiteV2#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_prefixes SecuremeshSiteV2#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface SecuremeshSiteV2#interface}
  */
  readonly interface?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterface;
}

export function securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
  }
}


export function securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesOutputReference {
    return new SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2LocalVrfSliConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_routes SecuremeshSiteV2#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteV2LocalVrfSliConfigStaticRoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteV2LocalVrfSliConfigStaticRoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSliConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSliConfigStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteV2LocalVrfSliConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#attrs SecuremeshSiteV2#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gateway SecuremeshSiteV2#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_prefixes SecuremeshSiteV2#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface SecuremeshSiteV2#interface}
  */
  readonly interface?: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterface;
}

export function securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct!.interface),
  }
}


export function securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesOutputReference {
    return new SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2LocalVrfSliConfigStaticV6Routes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_routes SecuremeshSiteV2#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteV2LocalVrfSliConfigStaticV6RoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteV2LocalVrfSliConfigStaticV6RoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesOutputReference | SecuremeshSiteV2LocalVrfSliConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSliConfigStaticV6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSliConfigStaticV6Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteV2LocalVrfSliConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#nameserver SecuremeshSiteV2#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#nameserver_v6 SecuremeshSiteV2#nameserver_v6}
  */
  readonly nameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_static_routes SecuremeshSiteV2#no_static_routes}
  */
  readonly noStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_v6_static_routes SecuremeshSiteV2#no_v6_static_routes}
  */
  readonly noV6StaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vip SecuremeshSiteV2#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vip_v6 SecuremeshSiteV2#vip_v6}
  */
  readonly vipV6?: string;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_routes SecuremeshSiteV2#static_routes}
  */
  readonly staticRoutes?: SecuremeshSiteV2LocalVrfSliConfigStaticRoutes;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_v6_routes SecuremeshSiteV2#static_v6_routes}
  */
  readonly staticV6Routes?: SecuremeshSiteV2LocalVrfSliConfigStaticV6Routes;
}

export function securemeshSiteV2LocalVrfSliConfigToTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigOutputReference | SecuremeshSiteV2LocalVrfSliConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
    nameserver_v6: cdktf.stringToTerraform(struct!.nameserverV6),
    no_static_routes: cdktf.booleanToTerraform(struct!.noStaticRoutes),
    no_v6_static_routes: cdktf.booleanToTerraform(struct!.noV6StaticRoutes),
    vip: cdktf.stringToTerraform(struct!.vip),
    vip_v6: cdktf.stringToTerraform(struct!.vipV6),
    static_routes: securemeshSiteV2LocalVrfSliConfigStaticRoutesToTerraform(struct!.staticRoutes),
    static_v6_routes: securemeshSiteV2LocalVrfSliConfigStaticV6RoutesToTerraform(struct!.staticV6Routes),
  }
}


export function securemeshSiteV2LocalVrfSliConfigToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSliConfigOutputReference | SecuremeshSiteV2LocalVrfSliConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nameserver: {
      value: cdktf.stringToHclTerraform(struct!.nameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.nameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_v6_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noV6StaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_v6: {
      value: cdktf.stringToHclTerraform(struct!.vipV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_routes: {
      value: securemeshSiteV2LocalVrfSliConfigStaticRoutesToHclTerraform(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSliConfigStaticRoutesList",
    },
    static_v6_routes: {
      value: securemeshSiteV2LocalVrfSliConfigStaticV6RoutesToHclTerraform(struct!.staticV6Routes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSliConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSliConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    if (this._nameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserverV6 = this._nameserverV6;
    }
    if (this._noStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticRoutes = this._noStaticRoutes;
    }
    if (this._noV6StaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noV6StaticRoutes = this._noV6StaticRoutes;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vipV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipV6 = this._vipV6;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    if (this._staticV6Routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticV6Routes = this._staticV6Routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSliConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._nameserver = undefined;
      this._nameserverV6 = undefined;
      this._noStaticRoutes = undefined;
      this._noV6StaticRoutes = undefined;
      this._vip = undefined;
      this._vipV6 = undefined;
      this._staticRoutes.internalValue = undefined;
      this._staticV6Routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._nameserver = value.nameserver;
      this._nameserverV6 = value.nameserverV6;
      this._noStaticRoutes = value.noStaticRoutes;
      this._noV6StaticRoutes = value.noV6StaticRoutes;
      this._vip = value.vip;
      this._vipV6 = value.vipV6;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._staticV6Routes.internalValue = value.staticV6Routes;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // nameserver_v6 - computed: false, optional: true, required: false
  private _nameserverV6?: string; 
  public get nameserverV6() {
    return this.getStringAttribute('nameserver_v6');
  }
  public set nameserverV6(value: string) {
    this._nameserverV6 = value;
  }
  public resetNameserverV6() {
    this._nameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverV6Input() {
    return this._nameserverV6;
  }

  // no_static_routes - computed: false, optional: true, required: false
  private _noStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noStaticRoutes() {
    return this.getBooleanAttribute('no_static_routes');
  }
  public set noStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noStaticRoutes = value;
  }
  public resetNoStaticRoutes() {
    this._noStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticRoutesInput() {
    return this._noStaticRoutes;
  }

  // no_v6_static_routes - computed: false, optional: true, required: false
  private _noV6StaticRoutes?: boolean | cdktf.IResolvable; 
  public get noV6StaticRoutes() {
    return this.getBooleanAttribute('no_v6_static_routes');
  }
  public set noV6StaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noV6StaticRoutes = value;
  }
  public resetNoV6StaticRoutes() {
    this._noV6StaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noV6StaticRoutesInput() {
    return this._noV6StaticRoutes;
  }

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_v6 - computed: false, optional: true, required: false
  private _vipV6?: string; 
  public get vipV6() {
    return this.getStringAttribute('vip_v6');
  }
  public set vipV6(value: string) {
    this._vipV6 = value;
  }
  public resetVipV6() {
    this._vipV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipV6Input() {
    return this._vipV6;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new SecuremeshSiteV2LocalVrfSliConfigStaticRoutesOutputReference(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteV2LocalVrfSliConfigStaticRoutes) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // static_v6_routes - computed: false, optional: true, required: false
  private _staticV6Routes = new SecuremeshSiteV2LocalVrfSliConfigStaticV6RoutesOutputReference(this, "static_v6_routes");
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: SecuremeshSiteV2LocalVrfSliConfigStaticV6Routes) {
    this._staticV6Routes.internalValue = value;
  }
  public resetStaticV6Routes() {
    this._staticV6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticV6RoutesInput() {
    return this._staticV6Routes.internalValue;
  }
}
export interface SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#attrs SecuremeshSiteV2#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gateway SecuremeshSiteV2#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_prefixes SecuremeshSiteV2#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface SecuremeshSiteV2#interface}
  */
  readonly interface?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterface;
}

export function securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceToTerraform(struct!.interface),
  }
}


export function securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesOutputReference {
    return new SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2LocalVrfSloConfigStaticRoutes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_routes SecuremeshSiteV2#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteV2LocalVrfSloConfigStaticRoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteV2LocalVrfSloConfigStaticRoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSloConfigStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSloConfigStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteV2LocalVrfSloConfigStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#attrs SecuremeshSiteV2#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gateway SecuremeshSiteV2#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_prefixes SecuremeshSiteV2#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface SecuremeshSiteV2#interface}
  */
  readonly interface?: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterface;
}

export function securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceToTerraform(struct!.interface),
  }
}


export function securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesOutputReference {
    return new SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2LocalVrfSloConfigStaticV6Routes {
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_routes SecuremeshSiteV2#static_routes}
  */
  readonly staticRoutes: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable;
}

export function securemeshSiteV2LocalVrfSloConfigStaticV6RoutesToTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_routes: cdktf.listMapper(securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function securemeshSiteV2LocalVrfSloConfigStaticV6RoutesToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesOutputReference | SecuremeshSiteV2LocalVrfSloConfigStaticV6Routes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_routes: {
      value: cdktf.listMapperHcl(securemeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSloConfigStaticV6Routes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSloConfigStaticV6Routes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}
export interface SecuremeshSiteV2LocalVrfSloConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#nameserver SecuremeshSiteV2#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#nameserver_v6 SecuremeshSiteV2#nameserver_v6}
  */
  readonly nameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_static_routes SecuremeshSiteV2#no_static_routes}
  */
  readonly noStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_v6_static_routes SecuremeshSiteV2#no_v6_static_routes}
  */
  readonly noV6StaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vip SecuremeshSiteV2#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vip_v6 SecuremeshSiteV2#vip_v6}
  */
  readonly vipV6?: string;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_routes SecuremeshSiteV2#static_routes}
  */
  readonly staticRoutes?: SecuremeshSiteV2LocalVrfSloConfigStaticRoutes;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_v6_routes SecuremeshSiteV2#static_v6_routes}
  */
  readonly staticV6Routes?: SecuremeshSiteV2LocalVrfSloConfigStaticV6Routes;
}

export function securemeshSiteV2LocalVrfSloConfigToTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigOutputReference | SecuremeshSiteV2LocalVrfSloConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
    nameserver_v6: cdktf.stringToTerraform(struct!.nameserverV6),
    no_static_routes: cdktf.booleanToTerraform(struct!.noStaticRoutes),
    no_v6_static_routes: cdktf.booleanToTerraform(struct!.noV6StaticRoutes),
    vip: cdktf.stringToTerraform(struct!.vip),
    vip_v6: cdktf.stringToTerraform(struct!.vipV6),
    static_routes: securemeshSiteV2LocalVrfSloConfigStaticRoutesToTerraform(struct!.staticRoutes),
    static_v6_routes: securemeshSiteV2LocalVrfSloConfigStaticV6RoutesToTerraform(struct!.staticV6Routes),
  }
}


export function securemeshSiteV2LocalVrfSloConfigToHclTerraform(struct?: SecuremeshSiteV2LocalVrfSloConfigOutputReference | SecuremeshSiteV2LocalVrfSloConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nameserver: {
      value: cdktf.stringToHclTerraform(struct!.nameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.nameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_v6_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noV6StaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_v6: {
      value: cdktf.stringToHclTerraform(struct!.vipV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_routes: {
      value: securemeshSiteV2LocalVrfSloConfigStaticRoutesToHclTerraform(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSloConfigStaticRoutesList",
    },
    static_v6_routes: {
      value: securemeshSiteV2LocalVrfSloConfigStaticV6RoutesToHclTerraform(struct!.staticV6Routes),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfSloConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrfSloConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    if (this._nameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserverV6 = this._nameserverV6;
    }
    if (this._noStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaticRoutes = this._noStaticRoutes;
    }
    if (this._noV6StaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noV6StaticRoutes = this._noV6StaticRoutes;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vipV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipV6 = this._vipV6;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    if (this._staticV6Routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticV6Routes = this._staticV6Routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrfSloConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._nameserver = undefined;
      this._nameserverV6 = undefined;
      this._noStaticRoutes = undefined;
      this._noV6StaticRoutes = undefined;
      this._vip = undefined;
      this._vipV6 = undefined;
      this._staticRoutes.internalValue = undefined;
      this._staticV6Routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._nameserver = value.nameserver;
      this._nameserverV6 = value.nameserverV6;
      this._noStaticRoutes = value.noStaticRoutes;
      this._noV6StaticRoutes = value.noV6StaticRoutes;
      this._vip = value.vip;
      this._vipV6 = value.vipV6;
      this._staticRoutes.internalValue = value.staticRoutes;
      this._staticV6Routes.internalValue = value.staticV6Routes;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // nameserver_v6 - computed: false, optional: true, required: false
  private _nameserverV6?: string; 
  public get nameserverV6() {
    return this.getStringAttribute('nameserver_v6');
  }
  public set nameserverV6(value: string) {
    this._nameserverV6 = value;
  }
  public resetNameserverV6() {
    this._nameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverV6Input() {
    return this._nameserverV6;
  }

  // no_static_routes - computed: false, optional: true, required: false
  private _noStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noStaticRoutes() {
    return this.getBooleanAttribute('no_static_routes');
  }
  public set noStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noStaticRoutes = value;
  }
  public resetNoStaticRoutes() {
    this._noStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaticRoutesInput() {
    return this._noStaticRoutes;
  }

  // no_v6_static_routes - computed: false, optional: true, required: false
  private _noV6StaticRoutes?: boolean | cdktf.IResolvable; 
  public get noV6StaticRoutes() {
    return this.getBooleanAttribute('no_v6_static_routes');
  }
  public set noV6StaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noV6StaticRoutes = value;
  }
  public resetNoV6StaticRoutes() {
    this._noV6StaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noV6StaticRoutesInput() {
    return this._noV6StaticRoutes;
  }

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_v6 - computed: false, optional: true, required: false
  private _vipV6?: string; 
  public get vipV6() {
    return this.getStringAttribute('vip_v6');
  }
  public set vipV6(value: string) {
    this._vipV6 = value;
  }
  public resetVipV6() {
    this._vipV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipV6Input() {
    return this._vipV6;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new SecuremeshSiteV2LocalVrfSloConfigStaticRoutesOutputReference(this, "static_routes");
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SecuremeshSiteV2LocalVrfSloConfigStaticRoutes) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // static_v6_routes - computed: false, optional: true, required: false
  private _staticV6Routes = new SecuremeshSiteV2LocalVrfSloConfigStaticV6RoutesOutputReference(this, "static_v6_routes");
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: SecuremeshSiteV2LocalVrfSloConfigStaticV6Routes) {
    this._staticV6Routes.internalValue = value;
  }
  public resetStaticV6Routes() {
    this._staticV6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticV6RoutesInput() {
    return this._staticV6Routes.internalValue;
  }
}
export interface SecuremeshSiteV2LocalVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_config SecuremeshSiteV2#default_config}
  */
  readonly defaultConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_sli_config SecuremeshSiteV2#default_sli_config}
  */
  readonly defaultSliConfig?: boolean | cdktf.IResolvable;
  /**
  * sli_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#sli_config SecuremeshSiteV2#sli_config}
  */
  readonly sliConfig?: SecuremeshSiteV2LocalVrfSliConfig;
  /**
  * slo_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#slo_config SecuremeshSiteV2#slo_config}
  */
  readonly sloConfig?: SecuremeshSiteV2LocalVrfSloConfig;
}

export function securemeshSiteV2LocalVrfToTerraform(struct?: SecuremeshSiteV2LocalVrfOutputReference | SecuremeshSiteV2LocalVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_config: cdktf.booleanToTerraform(struct!.defaultConfig),
    default_sli_config: cdktf.booleanToTerraform(struct!.defaultSliConfig),
    sli_config: securemeshSiteV2LocalVrfSliConfigToTerraform(struct!.sliConfig),
    slo_config: securemeshSiteV2LocalVrfSloConfigToTerraform(struct!.sloConfig),
  }
}


export function securemeshSiteV2LocalVrfToHclTerraform(struct?: SecuremeshSiteV2LocalVrfOutputReference | SecuremeshSiteV2LocalVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_config: {
      value: cdktf.booleanToHclTerraform(struct!.defaultConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_sli_config: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSliConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sli_config: {
      value: securemeshSiteV2LocalVrfSliConfigToHclTerraform(struct!.sliConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSliConfigList",
    },
    slo_config: {
      value: securemeshSiteV2LocalVrfSloConfigToHclTerraform(struct!.sloConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2LocalVrfSloConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LocalVrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LocalVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig;
    }
    if (this._defaultSliConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSliConfig = this._defaultSliConfig;
    }
    if (this._sliConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliConfig = this._sliConfig?.internalValue;
    }
    if (this._sloConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloConfig = this._sloConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LocalVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultConfig = undefined;
      this._defaultSliConfig = undefined;
      this._sliConfig.internalValue = undefined;
      this._sloConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultConfig = value.defaultConfig;
      this._defaultSliConfig = value.defaultSliConfig;
      this._sliConfig.internalValue = value.sliConfig;
      this._sloConfig.internalValue = value.sloConfig;
    }
  }

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig?: boolean | cdktf.IResolvable; 
  public get defaultConfig() {
    return this.getBooleanAttribute('default_config');
  }
  public set defaultConfig(value: boolean | cdktf.IResolvable) {
    this._defaultConfig = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig;
  }

  // default_sli_config - computed: false, optional: true, required: false
  private _defaultSliConfig?: boolean | cdktf.IResolvable; 
  public get defaultSliConfig() {
    return this.getBooleanAttribute('default_sli_config');
  }
  public set defaultSliConfig(value: boolean | cdktf.IResolvable) {
    this._defaultSliConfig = value;
  }
  public resetDefaultSliConfig() {
    this._defaultSliConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSliConfigInput() {
    return this._defaultSliConfig;
  }

  // sli_config - computed: false, optional: true, required: false
  private _sliConfig = new SecuremeshSiteV2LocalVrfSliConfigOutputReference(this, "sli_config");
  public get sliConfig() {
    return this._sliConfig;
  }
  public putSliConfig(value: SecuremeshSiteV2LocalVrfSliConfig) {
    this._sliConfig.internalValue = value;
  }
  public resetSliConfig() {
    this._sliConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliConfigInput() {
    return this._sliConfig.internalValue;
  }

  // slo_config - computed: false, optional: true, required: false
  private _sloConfig = new SecuremeshSiteV2LocalVrfSloConfigOutputReference(this, "slo_config");
  public get sloConfig() {
    return this._sloConfig;
  }
  public putSloConfig(value: SecuremeshSiteV2LocalVrfSloConfig) {
    this._sloConfig.internalValue = value;
  }
  public resetSloConfig() {
    this._sloConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloConfigInput() {
    return this._sloConfig.internalValue;
  }
}
export interface SecuremeshSiteV2LogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2LogReceiverToTerraform(struct?: SecuremeshSiteV2LogReceiverOutputReference | SecuremeshSiteV2LogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2LogReceiverToHclTerraform(struct?: SecuremeshSiteV2LogReceiverOutputReference | SecuremeshSiteV2LogReceiver): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2LogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2LogReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2LogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
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
    lacp: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._mac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._mac = value.mac;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mac - computed: false, optional: true, required: false
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
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
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

  // start_ip - computed: false, optional: true, required: false
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
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    pools: cdktf.listMapper(securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
    value: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._vlanId = value.vlanId;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    ethernet_interface: securemeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
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
    no_ipv4_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bond_interface: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4Address = this._noIpv4Address;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._bondInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondInterface = this._bondInterface?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    if (this._vlanInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterface = this._vlanInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
      this._labels = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._noIpv4Address = undefined;
      this._noIpv6Address = undefined;
      this._priority = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._bondInterface.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._networkOption.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
      this._vlanInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpClient = value.dhcpClient;
      this._labels = value.labels;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._name = value.name;
      this._noIpv4Address = value.noIpv4Address;
      this._noIpv6Address = value.noIpv6Address;
      this._priority = value.priority;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._bondInterface.internalValue = value.bondInterface;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._networkOption.internalValue = value.networkOption;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
      this._vlanInterface.internalValue = value.vlanInterface;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
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

  // no_ipv4_address - computed: false, optional: true, required: false
  private _noIpv4Address?: boolean | cdktf.IResolvable; 
  public get noIpv4Address() {
    return this.getBooleanAttribute('no_ipv4_address');
  }
  public set noIpv4Address(value: boolean | cdktf.IResolvable) {
    this._noIpv4Address = value;
  }
  public resetNoIpv4Address() {
    this._noIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4AddressInput() {
    return this._noIpv4Address;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
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

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // bond_interface - computed: false, optional: true, required: false
  private _bondInterface = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }

  // vlan_interface - computed: false, optional: true, required: false
  private _vlanInterface = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListVlanInterface) {
    this._vlanInterface.internalValue = value;
  }
  public resetVlanInterface() {
    this._vlanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfaceInput() {
    return this._vlanInterface.internalValue;
  }
}

export class SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2NutanixNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2NutanixNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2NutanixNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2NutanixNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
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
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2NutanixNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2NutanixNotManagedNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._publicIp = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._publicIp = value.publicIp;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // hostname - computed: false, optional: true, required: false
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // type - computed: false, optional: true, required: false
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2NutanixNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2NutanixNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2NutanixNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2NutanixNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2NutanixNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2NutanixNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2NutanixNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2NutanixNotManagedToTerraform(struct?: SecuremeshSiteV2NutanixNotManagedOutputReference | SecuremeshSiteV2NutanixNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2NutanixNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2NutanixNotManagedToHclTerraform(struct?: SecuremeshSiteV2NutanixNotManagedOutputReference | SecuremeshSiteV2NutanixNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2NutanixNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2NutanixNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2NutanixNotManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2NutanixNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2NutanixNotManagedNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2Nutanix {
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2NutanixNotManaged;
}

export function securemeshSiteV2NutanixToTerraform(struct?: SecuremeshSiteV2NutanixOutputReference | SecuremeshSiteV2Nutanix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2NutanixNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2NutanixToHclTerraform(struct?: SecuremeshSiteV2NutanixOutputReference | SecuremeshSiteV2Nutanix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_managed: {
      value: securemeshSiteV2NutanixNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2NutanixNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2NutanixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Nutanix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Nutanix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2NutanixNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2NutanixNotManaged) {
    this._notManaged.internalValue = value;
  }
  public resetNotManaged() {
    this._notManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notManagedInput() {
    return this._notManaged.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
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
    lacp: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._mac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._mac = value.mac;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mac - computed: false, optional: true, required: false
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
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
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

  // start_ip - computed: false, optional: true, required: false
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
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    pools: cdktf.listMapper(securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
    value: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._vlanId = value.vlanId;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2OciNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    ethernet_interface: securemeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2OciNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2OciNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
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
    no_ipv4_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bond_interface: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4Address = this._noIpv4Address;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._bondInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondInterface = this._bondInterface?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    if (this._vlanInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterface = this._vlanInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
      this._labels = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._noIpv4Address = undefined;
      this._noIpv6Address = undefined;
      this._priority = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._bondInterface.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._networkOption.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
      this._vlanInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpClient = value.dhcpClient;
      this._labels = value.labels;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._name = value.name;
      this._noIpv4Address = value.noIpv4Address;
      this._noIpv6Address = value.noIpv6Address;
      this._priority = value.priority;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._bondInterface.internalValue = value.bondInterface;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._networkOption.internalValue = value.networkOption;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
      this._vlanInterface.internalValue = value.vlanInterface;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
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

  // no_ipv4_address - computed: false, optional: true, required: false
  private _noIpv4Address?: boolean | cdktf.IResolvable; 
  public get noIpv4Address() {
    return this.getBooleanAttribute('no_ipv4_address');
  }
  public set noIpv4Address(value: boolean | cdktf.IResolvable) {
    this._noIpv4Address = value;
  }
  public resetNoIpv4Address() {
    this._noIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4AddressInput() {
    return this._noIpv4Address;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
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

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // bond_interface - computed: false, optional: true, required: false
  private _bondInterface = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }

  // vlan_interface - computed: false, optional: true, required: false
  private _vlanInterface = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListVlanInterface) {
    this._vlanInterface.internalValue = value;
  }
  public resetVlanInterface() {
    this._vlanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfaceInput() {
    return this._vlanInterface.internalValue;
  }
}

export class SecuremeshSiteV2OciNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OciNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OciNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2OciNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2OciNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2OciNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
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
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2OciNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OciNotManagedNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._publicIp = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._publicIp = value.publicIp;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // hostname - computed: false, optional: true, required: false
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // type - computed: false, optional: true, required: false
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new SecuremeshSiteV2OciNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2OciNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2OciNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OciNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OciNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2OciNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OciNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2OciNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2OciNotManagedToTerraform(struct?: SecuremeshSiteV2OciNotManagedOutputReference | SecuremeshSiteV2OciNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2OciNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2OciNotManagedToHclTerraform(struct?: SecuremeshSiteV2OciNotManagedOutputReference | SecuremeshSiteV2OciNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2OciNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OciNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OciNotManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2OciNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2OciNotManagedNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2Oci {
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2OciNotManaged;
}

export function securemeshSiteV2OciToTerraform(struct?: SecuremeshSiteV2OciOutputReference | SecuremeshSiteV2Oci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2OciNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2OciToHclTerraform(struct?: SecuremeshSiteV2OciOutputReference | SecuremeshSiteV2Oci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_managed: {
      value: securemeshSiteV2OciNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OciNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Oci | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Oci | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2OciNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2OciNotManaged) {
    this._notManaged.internalValue = value;
  }
  public resetNotManaged() {
    this._notManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notManagedInput() {
    return this._notManaged.internalValue;
  }
}
export interface SecuremeshSiteV2OfflineSurvivabilityMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#enable_offline_survivability_mode SecuremeshSiteV2#enable_offline_survivability_mode}
  */
  readonly enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_offline_survivability_mode SecuremeshSiteV2#no_offline_survivability_mode}
  */
  readonly noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2OfflineSurvivabilityModeToTerraform(struct?: SecuremeshSiteV2OfflineSurvivabilityModeOutputReference | SecuremeshSiteV2OfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_offline_survivability_mode: cdktf.booleanToTerraform(struct!.enableOfflineSurvivabilityMode),
    no_offline_survivability_mode: cdktf.booleanToTerraform(struct!.noOfflineSurvivabilityMode),
  }
}


export function securemeshSiteV2OfflineSurvivabilityModeToHclTerraform(struct?: SecuremeshSiteV2OfflineSurvivabilityModeOutputReference | SecuremeshSiteV2OfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.noOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OfflineSurvivabilityModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OfflineSurvivabilityMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOfflineSurvivabilityMode = this._enableOfflineSurvivabilityMode;
    }
    if (this._noOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOfflineSurvivabilityMode = this._noOfflineSurvivabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OfflineSurvivabilityMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOfflineSurvivabilityMode = undefined;
      this._noOfflineSurvivabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOfflineSurvivabilityMode = value.enableOfflineSurvivabilityMode;
      this._noOfflineSurvivabilityMode = value.noOfflineSurvivabilityMode;
    }
  }

  // enable_offline_survivability_mode - computed: false, optional: true, required: false
  private _enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get enableOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('enable_offline_survivability_mode');
  }
  public set enableOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._enableOfflineSurvivabilityMode = value;
  }
  public resetEnableOfflineSurvivabilityMode() {
    this._enableOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOfflineSurvivabilityModeInput() {
    return this._enableOfflineSurvivabilityMode;
  }

  // no_offline_survivability_mode - computed: false, optional: true, required: false
  private _noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get noOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('no_offline_survivability_mode');
  }
  public set noOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._noOfflineSurvivabilityMode = value;
  }
  public resetNoOfflineSurvivabilityMode() {
    this._noOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOfflineSurvivabilityModeInput() {
    return this._noOfflineSurvivabilityMode;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
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
    lacp: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._mac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._mac = value.mac;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mac - computed: false, optional: true, required: false
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
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
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

  // start_ip - computed: false, optional: true, required: false
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
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    pools: cdktf.listMapper(securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
    value: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._vlanId = value.vlanId;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    ethernet_interface: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
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
    no_ipv4_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bond_interface: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4Address = this._noIpv4Address;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._bondInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondInterface = this._bondInterface?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    if (this._vlanInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterface = this._vlanInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
      this._labels = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._noIpv4Address = undefined;
      this._noIpv6Address = undefined;
      this._priority = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._bondInterface.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._networkOption.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
      this._vlanInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpClient = value.dhcpClient;
      this._labels = value.labels;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._name = value.name;
      this._noIpv4Address = value.noIpv4Address;
      this._noIpv6Address = value.noIpv6Address;
      this._priority = value.priority;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._bondInterface.internalValue = value.bondInterface;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._networkOption.internalValue = value.networkOption;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
      this._vlanInterface.internalValue = value.vlanInterface;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
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

  // no_ipv4_address - computed: false, optional: true, required: false
  private _noIpv4Address?: boolean | cdktf.IResolvable; 
  public get noIpv4Address() {
    return this.getBooleanAttribute('no_ipv4_address');
  }
  public set noIpv4Address(value: boolean | cdktf.IResolvable) {
    this._noIpv4Address = value;
  }
  public resetNoIpv4Address() {
    this._noIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4AddressInput() {
    return this._noIpv4Address;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
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

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // bond_interface - computed: false, optional: true, required: false
  private _bondInterface = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }

  // vlan_interface - computed: false, optional: true, required: false
  private _vlanInterface = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListVlanInterface) {
    this._vlanInterface.internalValue = value;
  }
  public resetVlanInterface() {
    this._vlanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfaceInput() {
    return this._vlanInterface.internalValue;
  }
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OpenstackNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2OpenstackNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2OpenstackNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
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
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2OpenstackNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2OpenstackNotManagedNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._publicIp = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._publicIp = value.publicIp;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // hostname - computed: false, optional: true, required: false
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // type - computed: false, optional: true, required: false
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2OpenstackNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2OpenstackNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2OpenstackNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2OpenstackNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2OpenstackNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2OpenstackNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2OpenstackNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2OpenstackNotManagedToTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedOutputReference | SecuremeshSiteV2OpenstackNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2OpenstackNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2OpenstackNotManagedToHclTerraform(struct?: SecuremeshSiteV2OpenstackNotManagedOutputReference | SecuremeshSiteV2OpenstackNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2OpenstackNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2OpenstackNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2OpenstackNotManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2OpenstackNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2OpenstackNotManagedNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2Openstack {
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2OpenstackNotManaged;
}

export function securemeshSiteV2OpenstackToTerraform(struct?: SecuremeshSiteV2OpenstackOutputReference | SecuremeshSiteV2Openstack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2OpenstackNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2OpenstackToHclTerraform(struct?: SecuremeshSiteV2OpenstackOutputReference | SecuremeshSiteV2Openstack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_managed: {
      value: securemeshSiteV2OpenstackNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2OpenstackNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2OpenstackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Openstack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Openstack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2OpenstackNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2OpenstackNotManaged) {
    this._notManaged.internalValue = value;
  }
  public resetNotManaged() {
    this._notManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notManagedInput() {
    return this._notManaged.internalValue;
  }
}
export interface SecuremeshSiteV2PerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#jumbo SecuremeshSiteV2#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_jumbo SecuremeshSiteV2#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: SecuremeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedOutputReference | SecuremeshSiteV2PerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function securemeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: SecuremeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedOutputReference | SecuremeshSiteV2PerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2PerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2PerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface SecuremeshSiteV2PerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#perf_mode_l7_enhanced SecuremeshSiteV2#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#perf_mode_l3_enhanced SecuremeshSiteV2#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: SecuremeshSiteV2PerformanceEnhancementModePerfModeL3Enhanced;
}

export function securemeshSiteV2PerformanceEnhancementModeToTerraform(struct?: SecuremeshSiteV2PerformanceEnhancementModeOutputReference | SecuremeshSiteV2PerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: securemeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function securemeshSiteV2PerformanceEnhancementModeToHclTerraform(struct?: SecuremeshSiteV2PerformanceEnhancementModeOutputReference | SecuremeshSiteV2PerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: securemeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2PerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2PerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2PerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new SecuremeshSiteV2PerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: SecuremeshSiteV2PerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface SecuremeshSiteV2ReSelectSpecificRe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#primary_re SecuremeshSiteV2#primary_re}
  */
  readonly primaryRe?: string;
}

export function securemeshSiteV2ReSelectSpecificReToTerraform(struct?: SecuremeshSiteV2ReSelectSpecificReOutputReference | SecuremeshSiteV2ReSelectSpecificRe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_re: cdktf.stringToTerraform(struct!.primaryRe),
  }
}


export function securemeshSiteV2ReSelectSpecificReToHclTerraform(struct?: SecuremeshSiteV2ReSelectSpecificReOutputReference | SecuremeshSiteV2ReSelectSpecificRe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_re: {
      value: cdktf.stringToHclTerraform(struct!.primaryRe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2ReSelectSpecificReOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2ReSelectSpecificRe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryRe = this._primaryRe;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2ReSelectSpecificRe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryRe = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryRe = value.primaryRe;
    }
  }

  // primary_re - computed: false, optional: true, required: false
  private _primaryRe?: string; 
  public get primaryRe() {
    return this.getStringAttribute('primary_re');
  }
  public set primaryRe(value: string) {
    this._primaryRe = value;
  }
  public resetPrimaryRe() {
    this._primaryRe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryReInput() {
    return this._primaryRe;
  }
}
export interface SecuremeshSiteV2ReSelect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#geo_proximity SecuremeshSiteV2#geo_proximity}
  */
  readonly geoProximity?: boolean | cdktf.IResolvable;
  /**
  * specific_re block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#specific_re SecuremeshSiteV2#specific_re}
  */
  readonly specificRe?: SecuremeshSiteV2ReSelectSpecificRe;
}

export function securemeshSiteV2ReSelectToTerraform(struct?: SecuremeshSiteV2ReSelectOutputReference | SecuremeshSiteV2ReSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_proximity: cdktf.booleanToTerraform(struct!.geoProximity),
    specific_re: securemeshSiteV2ReSelectSpecificReToTerraform(struct!.specificRe),
  }
}


export function securemeshSiteV2ReSelectToHclTerraform(struct?: SecuremeshSiteV2ReSelectOutputReference | SecuremeshSiteV2ReSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_proximity: {
      value: cdktf.booleanToHclTerraform(struct!.geoProximity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_re: {
      value: securemeshSiteV2ReSelectSpecificReToHclTerraform(struct!.specificRe),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2ReSelectSpecificReList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2ReSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2ReSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoProximity !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoProximity = this._geoProximity;
    }
    if (this._specificRe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificRe = this._specificRe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2ReSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoProximity = undefined;
      this._specificRe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoProximity = value.geoProximity;
      this._specificRe.internalValue = value.specificRe;
    }
  }

  // geo_proximity - computed: false, optional: true, required: false
  private _geoProximity?: boolean | cdktf.IResolvable; 
  public get geoProximity() {
    return this.getBooleanAttribute('geo_proximity');
  }
  public set geoProximity(value: boolean | cdktf.IResolvable) {
    this._geoProximity = value;
  }
  public resetGeoProximity() {
    this._geoProximity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoProximityInput() {
    return this._geoProximity;
  }

  // specific_re - computed: false, optional: true, required: false
  private _specificRe = new SecuremeshSiteV2ReSelectSpecificReOutputReference(this, "specific_re");
  public get specificRe() {
    return this._specificRe;
  }
  public putSpecificRe(value: SecuremeshSiteV2ReSelectSpecificRe) {
    this._specificRe.internalValue = value;
  }
  public resetSpecificRe() {
    this._specificRe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReInput() {
    return this._specificRe.internalValue;
  }
}
export interface SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: securemeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
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
    lacp: {
      value: securemeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListBondInterfaceLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}
export interface SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2RseriesNotManagedNodeListInterfaceListEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._mac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._mac = value.mac;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mac - computed: false, optional: true, required: false
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
}
