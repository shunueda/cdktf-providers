// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#async_interval Gslb#async_interval}
  */
  readonly asyncInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#clear_on_max_retries Gslb#clear_on_max_retries}
  */
  readonly clearOnMaxRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#description Gslb#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#enable_config_by_members Gslb#enable_config_by_members}
  */
  readonly enableConfigByMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#error_resync_interval Gslb#error_resync_interval}
  */
  readonly errorResyncInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#fileobject_max_file_versions Gslb#fileobject_max_file_versions}
  */
  readonly fileobjectMaxFileVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#gs_member_fqdn_resolution_on_se Gslb#gs_member_fqdn_resolution_on_se}
  */
  readonly gsMemberFqdnResolutionOnSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#id Gslb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#is_federated Gslb#is_federated}
  */
  readonly isFederated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#leader_cluster_uuid Gslb#leader_cluster_uuid}
  */
  readonly leaderClusterUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#maintenance_mode Gslb#maintenance_mode}
  */
  readonly maintenanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#name Gslb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#send_interval Gslb#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#send_interval_prior_to_maintenance_mode Gslb#send_interval_prior_to_maintenance_mode}
  */
  readonly sendIntervalPriorToMaintenanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#short_probe_interval Gslb#short_probe_interval}
  */
  readonly shortProbeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#tenant_ref Gslb#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#tenant_scoped Gslb#tenant_scoped}
  */
  readonly tenantScoped?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#uuid Gslb#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#view_id Gslb#view_id}
  */
  readonly viewId?: string;
  /**
  * auto_tune_send_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#auto_tune_send_interval Gslb#auto_tune_send_interval}
  */
  readonly autoTuneSendInterval?: GslbAutoTuneSendInterval[] | cdktf.IResolvable;
  /**
  * client_ip_addr_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#client_ip_addr_group Gslb#client_ip_addr_group}
  */
  readonly clientIpAddrGroup?: GslbClientIpAddrGroup[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#configpb_attributes Gslb#configpb_attributes}
  */
  readonly configpbAttributes?: GslbConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * dns_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#dns_configs Gslb#dns_configs}
  */
  readonly dnsConfigs?: GslbDnsConfigs[] | cdktf.IResolvable;
  /**
  * leader_change_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#leader_change_info Gslb#leader_change_info}
  */
  readonly leaderChangeInfo?: GslbLeaderChangeInfo[] | cdktf.IResolvable;
  /**
  * sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#sites Gslb#sites}
  */
  readonly sites: GslbSites[] | cdktf.IResolvable;
  /**
  * third_party_sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#third_party_sites Gslb#third_party_sites}
  */
  readonly thirdPartySites?: GslbThirdPartySites[] | cdktf.IResolvable;
}
export interface GslbAutoTuneSendInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#auto_tune_send_interval_timeout Gslb#auto_tune_send_interval_timeout}
  */
  readonly autoTuneSendIntervalTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#enabled Gslb#enabled}
  */
  readonly enabled?: string;
}

export function gslbAutoTuneSendIntervalToTerraform(struct?: GslbAutoTuneSendInterval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_tune_send_interval_timeout: cdktf.stringToTerraform(struct!.autoTuneSendIntervalTimeout),
    enabled: cdktf.stringToTerraform(struct!.enabled),
  }
}


export function gslbAutoTuneSendIntervalToHclTerraform(struct?: GslbAutoTuneSendInterval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_tune_send_interval_timeout: {
      value: cdktf.stringToHclTerraform(struct!.autoTuneSendIntervalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbAutoTuneSendIntervalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbAutoTuneSendInterval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTuneSendIntervalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTuneSendIntervalTimeout = this._autoTuneSendIntervalTimeout;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbAutoTuneSendInterval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTuneSendIntervalTimeout = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTuneSendIntervalTimeout = value.autoTuneSendIntervalTimeout;
      this._enabled = value.enabled;
    }
  }

  // auto_tune_send_interval_timeout - computed: false, optional: true, required: false
  private _autoTuneSendIntervalTimeout?: string; 
  public get autoTuneSendIntervalTimeout() {
    return this.getStringAttribute('auto_tune_send_interval_timeout');
  }
  public set autoTuneSendIntervalTimeout(value: string) {
    this._autoTuneSendIntervalTimeout = value;
  }
  public resetAutoTuneSendIntervalTimeout() {
    this._autoTuneSendIntervalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTuneSendIntervalTimeoutInput() {
    return this._autoTuneSendIntervalTimeout;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class GslbAutoTuneSendIntervalList extends cdktf.ComplexList {
  public internalValue? : GslbAutoTuneSendInterval[] | cdktf.IResolvable

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
  public get(index: number): GslbAutoTuneSendIntervalOutputReference {
    return new GslbAutoTuneSendIntervalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbClientIpAddrGroupAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#addr Gslb#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#type Gslb#type}
  */
  readonly type: string;
}

export function gslbClientIpAddrGroupAddrsToTerraform(struct?: GslbClientIpAddrGroupAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbClientIpAddrGroupAddrsToHclTerraform(struct?: GslbClientIpAddrGroupAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbClientIpAddrGroupAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbClientIpAddrGroupAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbClientIpAddrGroupAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GslbClientIpAddrGroupAddrsList extends cdktf.ComplexList {
  public internalValue? : GslbClientIpAddrGroupAddrs[] | cdktf.IResolvable

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
  public get(index: number): GslbClientIpAddrGroupAddrsOutputReference {
    return new GslbClientIpAddrGroupAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbClientIpAddrGroupPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#addr Gslb#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#type Gslb#type}
  */
  readonly type: string;
}

export function gslbClientIpAddrGroupPrefixesIpAddrToTerraform(struct?: GslbClientIpAddrGroupPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbClientIpAddrGroupPrefixesIpAddrToHclTerraform(struct?: GslbClientIpAddrGroupPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbClientIpAddrGroupPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbClientIpAddrGroupPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbClientIpAddrGroupPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GslbClientIpAddrGroupPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : GslbClientIpAddrGroupPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): GslbClientIpAddrGroupPrefixesIpAddrOutputReference {
    return new GslbClientIpAddrGroupPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbClientIpAddrGroupPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#mask Gslb#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#ip_addr Gslb#ip_addr}
  */
  readonly ipAddr: GslbClientIpAddrGroupPrefixesIpAddr[] | cdktf.IResolvable;
}

export function gslbClientIpAddrGroupPrefixesToTerraform(struct?: GslbClientIpAddrGroupPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(gslbClientIpAddrGroupPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function gslbClientIpAddrGroupPrefixesToHclTerraform(struct?: GslbClientIpAddrGroupPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(gslbClientIpAddrGroupPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "GslbClientIpAddrGroupPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbClientIpAddrGroupPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbClientIpAddrGroupPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbClientIpAddrGroupPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new GslbClientIpAddrGroupPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: GslbClientIpAddrGroupPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class GslbClientIpAddrGroupPrefixesList extends cdktf.ComplexList {
  public internalValue? : GslbClientIpAddrGroupPrefixes[] | cdktf.IResolvable

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
  public get(index: number): GslbClientIpAddrGroupPrefixesOutputReference {
    return new GslbClientIpAddrGroupPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbClientIpAddrGroupRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#addr Gslb#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#type Gslb#type}
  */
  readonly type: string;
}

export function gslbClientIpAddrGroupRangesBeginToTerraform(struct?: GslbClientIpAddrGroupRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbClientIpAddrGroupRangesBeginToHclTerraform(struct?: GslbClientIpAddrGroupRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbClientIpAddrGroupRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbClientIpAddrGroupRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbClientIpAddrGroupRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GslbClientIpAddrGroupRangesBeginList extends cdktf.ComplexList {
  public internalValue? : GslbClientIpAddrGroupRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): GslbClientIpAddrGroupRangesBeginOutputReference {
    return new GslbClientIpAddrGroupRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbClientIpAddrGroupRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#addr Gslb#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#type Gslb#type}
  */
  readonly type: string;
}

export function gslbClientIpAddrGroupRangesEndToTerraform(struct?: GslbClientIpAddrGroupRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbClientIpAddrGroupRangesEndToHclTerraform(struct?: GslbClientIpAddrGroupRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbClientIpAddrGroupRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbClientIpAddrGroupRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbClientIpAddrGroupRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GslbClientIpAddrGroupRangesEndList extends cdktf.ComplexList {
  public internalValue? : GslbClientIpAddrGroupRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): GslbClientIpAddrGroupRangesEndOutputReference {
    return new GslbClientIpAddrGroupRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbClientIpAddrGroupRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#begin Gslb#begin}
  */
  readonly begin: GslbClientIpAddrGroupRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#end Gslb#end}
  */
  readonly end: GslbClientIpAddrGroupRangesEnd[] | cdktf.IResolvable;
}

export function gslbClientIpAddrGroupRangesToTerraform(struct?: GslbClientIpAddrGroupRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(gslbClientIpAddrGroupRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(gslbClientIpAddrGroupRangesEndToTerraform, true)(struct!.end),
  }
}


export function gslbClientIpAddrGroupRangesToHclTerraform(struct?: GslbClientIpAddrGroupRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(gslbClientIpAddrGroupRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "GslbClientIpAddrGroupRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(gslbClientIpAddrGroupRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "GslbClientIpAddrGroupRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbClientIpAddrGroupRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbClientIpAddrGroupRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbClientIpAddrGroupRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new GslbClientIpAddrGroupRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: GslbClientIpAddrGroupRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new GslbClientIpAddrGroupRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: GslbClientIpAddrGroupRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class GslbClientIpAddrGroupRangesList extends cdktf.ComplexList {
  public internalValue? : GslbClientIpAddrGroupRanges[] | cdktf.IResolvable

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
  public get(index: number): GslbClientIpAddrGroupRangesOutputReference {
    return new GslbClientIpAddrGroupRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbClientIpAddrGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#type Gslb#type}
  */
  readonly type?: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#addrs Gslb#addrs}
  */
  readonly addrs?: GslbClientIpAddrGroupAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#prefixes Gslb#prefixes}
  */
  readonly prefixes?: GslbClientIpAddrGroupPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#ranges Gslb#ranges}
  */
  readonly ranges?: GslbClientIpAddrGroupRanges[] | cdktf.IResolvable;
}

export function gslbClientIpAddrGroupToTerraform(struct?: GslbClientIpAddrGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    addrs: cdktf.listMapper(gslbClientIpAddrGroupAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(gslbClientIpAddrGroupPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(gslbClientIpAddrGroupRangesToTerraform, true)(struct!.ranges),
  }
}


export function gslbClientIpAddrGroupToHclTerraform(struct?: GslbClientIpAddrGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(gslbClientIpAddrGroupAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "GslbClientIpAddrGroupAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(gslbClientIpAddrGroupPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "GslbClientIpAddrGroupPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(gslbClientIpAddrGroupRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "GslbClientIpAddrGroupRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbClientIpAddrGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbClientIpAddrGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbClientIpAddrGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
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

  // addrs - computed: false, optional: true, required: false
  private _addrs = new GslbClientIpAddrGroupAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: GslbClientIpAddrGroupAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new GslbClientIpAddrGroupPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: GslbClientIpAddrGroupPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new GslbClientIpAddrGroupRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: GslbClientIpAddrGroupRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class GslbClientIpAddrGroupList extends cdktf.ComplexList {
  public internalValue? : GslbClientIpAddrGroup[] | cdktf.IResolvable

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
  public get(index: number): GslbClientIpAddrGroupOutputReference {
    return new GslbClientIpAddrGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#version Gslb#version}
  */
  readonly version?: string;
}

export function gslbConfigpbAttributesToTerraform(struct?: GslbConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function gslbConfigpbAttributesToHclTerraform(struct?: GslbConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GslbConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
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

export class GslbConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : GslbConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): GslbConfigpbAttributesOutputReference {
    return new GslbConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbDnsConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#domain_name Gslb#domain_name}
  */
  readonly domainName: string;
}

export function gslbDnsConfigsToTerraform(struct?: GslbDnsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
  }
}


export function gslbDnsConfigsToHclTerraform(struct?: GslbDnsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbDnsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbDnsConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbDnsConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
    }
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
}

export class GslbDnsConfigsList extends cdktf.ComplexList {
  public internalValue? : GslbDnsConfigs[] | cdktf.IResolvable

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
  public get(index: number): GslbDnsConfigsOutputReference {
    return new GslbDnsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbLeaderChangeInfoLeaderCandidates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#cluster_id Gslb#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#site_name Gslb#site_name}
  */
  readonly siteName?: string;
}

export function gslbLeaderChangeInfoLeaderCandidatesToTerraform(struct?: GslbLeaderChangeInfoLeaderCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    site_name: cdktf.stringToTerraform(struct!.siteName),
  }
}


export function gslbLeaderChangeInfoLeaderCandidatesToHclTerraform(struct?: GslbLeaderChangeInfoLeaderCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name: {
      value: cdktf.stringToHclTerraform(struct!.siteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbLeaderChangeInfoLeaderCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbLeaderChangeInfoLeaderCandidates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._siteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteName = this._siteName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbLeaderChangeInfoLeaderCandidates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._siteName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._siteName = value.siteName;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // site_name - computed: true, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }
}

export class GslbLeaderChangeInfoLeaderCandidatesList extends cdktf.ComplexList {
  public internalValue? : GslbLeaderChangeInfoLeaderCandidates[] | cdktf.IResolvable

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
  public get(index: number): GslbLeaderChangeInfoLeaderCandidatesOutputReference {
    return new GslbLeaderChangeInfoLeaderCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbLeaderChangeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#enabled Gslb#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#leader_change_mode Gslb#leader_change_mode}
  */
  readonly leaderChangeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#max_unsuccessful_probes Gslb#max_unsuccessful_probes}
  */
  readonly maxUnsuccessfulProbes?: string;
  /**
  * leader_candidates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#leader_candidates Gslb#leader_candidates}
  */
  readonly leaderCandidates?: GslbLeaderChangeInfoLeaderCandidates[] | cdktf.IResolvable;
}

export function gslbLeaderChangeInfoToTerraform(struct?: GslbLeaderChangeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    leader_change_mode: cdktf.stringToTerraform(struct!.leaderChangeMode),
    max_unsuccessful_probes: cdktf.stringToTerraform(struct!.maxUnsuccessfulProbes),
    leader_candidates: cdktf.listMapper(gslbLeaderChangeInfoLeaderCandidatesToTerraform, true)(struct!.leaderCandidates),
  }
}


export function gslbLeaderChangeInfoToHclTerraform(struct?: GslbLeaderChangeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leader_change_mode: {
      value: cdktf.stringToHclTerraform(struct!.leaderChangeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unsuccessful_probes: {
      value: cdktf.stringToHclTerraform(struct!.maxUnsuccessfulProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leader_candidates: {
      value: cdktf.listMapperHcl(gslbLeaderChangeInfoLeaderCandidatesToHclTerraform, true)(struct!.leaderCandidates),
      isBlock: true,
      type: "list",
      storageClassType: "GslbLeaderChangeInfoLeaderCandidatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbLeaderChangeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbLeaderChangeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._leaderChangeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaderChangeMode = this._leaderChangeMode;
    }
    if (this._maxUnsuccessfulProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnsuccessfulProbes = this._maxUnsuccessfulProbes;
    }
    if (this._leaderCandidates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaderCandidates = this._leaderCandidates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbLeaderChangeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._leaderChangeMode = undefined;
      this._maxUnsuccessfulProbes = undefined;
      this._leaderCandidates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._leaderChangeMode = value.leaderChangeMode;
      this._maxUnsuccessfulProbes = value.maxUnsuccessfulProbes;
      this._leaderCandidates.internalValue = value.leaderCandidates;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // leader_change_mode - computed: false, optional: true, required: false
  private _leaderChangeMode?: string; 
  public get leaderChangeMode() {
    return this.getStringAttribute('leader_change_mode');
  }
  public set leaderChangeMode(value: string) {
    this._leaderChangeMode = value;
  }
  public resetLeaderChangeMode() {
    this._leaderChangeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderChangeModeInput() {
    return this._leaderChangeMode;
  }

  // max_unsuccessful_probes - computed: false, optional: true, required: false
  private _maxUnsuccessfulProbes?: string; 
  public get maxUnsuccessfulProbes() {
    return this.getStringAttribute('max_unsuccessful_probes');
  }
  public set maxUnsuccessfulProbes(value: string) {
    this._maxUnsuccessfulProbes = value;
  }
  public resetMaxUnsuccessfulProbes() {
    this._maxUnsuccessfulProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnsuccessfulProbesInput() {
    return this._maxUnsuccessfulProbes;
  }

  // leader_candidates - computed: false, optional: true, required: false
  private _leaderCandidates = new GslbLeaderChangeInfoLeaderCandidatesList(this, "leader_candidates", false);
  public get leaderCandidates() {
    return this._leaderCandidates;
  }
  public putLeaderCandidates(value: GslbLeaderChangeInfoLeaderCandidates[] | cdktf.IResolvable) {
    this._leaderCandidates.internalValue = value;
  }
  public resetLeaderCandidates() {
    this._leaderCandidates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderCandidatesInput() {
    return this._leaderCandidates.internalValue;
  }
}

export class GslbLeaderChangeInfoList extends cdktf.ComplexList {
  public internalValue? : GslbLeaderChangeInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbLeaderChangeInfoOutputReference {
    return new GslbLeaderChangeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSitesDnsVses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#dns_vs_uuid Gslb#dns_vs_uuid}
  */
  readonly dnsVsUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#domain_names Gslb#domain_names}
  */
  readonly domainNames?: string[];
}

export function gslbSitesDnsVsesToTerraform(struct?: GslbSitesDnsVses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_vs_uuid: cdktf.stringToTerraform(struct!.dnsVsUuid),
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
  }
}


export function gslbSitesDnsVsesToHclTerraform(struct?: GslbSitesDnsVses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_vs_uuid: {
      value: cdktf.stringToHclTerraform(struct!.dnsVsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSitesDnsVsesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSitesDnsVses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsVsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsVsUuid = this._dnsVsUuid;
    }
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSitesDnsVses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsVsUuid = undefined;
      this._domainNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsVsUuid = value.dnsVsUuid;
      this._domainNames = value.domainNames;
    }
  }

  // dns_vs_uuid - computed: false, optional: false, required: true
  private _dnsVsUuid?: string; 
  public get dnsVsUuid() {
    return this.getStringAttribute('dns_vs_uuid');
  }
  public set dnsVsUuid(value: string) {
    this._dnsVsUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVsUuidInput() {
    return this._dnsVsUuid;
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }
}

export class GslbSitesDnsVsesList extends cdktf.ComplexList {
  public internalValue? : GslbSitesDnsVses[] | cdktf.IResolvable

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
  public get(index: number): GslbSitesDnsVsesOutputReference {
    return new GslbSitesDnsVsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSitesHmProxies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#proxy_type Gslb#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#site_uuid Gslb#site_uuid}
  */
  readonly siteUuid?: string;
}

export function gslbSitesHmProxiesToTerraform(struct?: GslbSitesHmProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    site_uuid: cdktf.stringToTerraform(struct!.siteUuid),
  }
}


export function gslbSitesHmProxiesToHclTerraform(struct?: GslbSitesHmProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_uuid: {
      value: cdktf.stringToHclTerraform(struct!.siteUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSitesHmProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSitesHmProxies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    if (this._siteUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUuid = this._siteUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSitesHmProxies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyType = undefined;
      this._siteUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyType = value.proxyType;
      this._siteUuid = value.siteUuid;
    }
  }

  // proxy_type - computed: false, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // site_uuid - computed: true, optional: true, required: false
  private _siteUuid?: string; 
  public get siteUuid() {
    return this.getStringAttribute('site_uuid');
  }
  public set siteUuid(value: string) {
    this._siteUuid = value;
  }
  public resetSiteUuid() {
    this._siteUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUuidInput() {
    return this._siteUuid;
  }
}

export class GslbSitesHmProxiesList extends cdktf.ComplexList {
  public internalValue? : GslbSitesHmProxies[] | cdktf.IResolvable

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
  public get(index: number): GslbSitesHmProxiesOutputReference {
    return new GslbSitesHmProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSitesIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#addr Gslb#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#type Gslb#type}
  */
  readonly type: string;
}

export function gslbSitesIpAddressesToTerraform(struct?: GslbSitesIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gslbSitesIpAddressesToHclTerraform(struct?: GslbSitesIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class GslbSitesIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSitesIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSitesIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GslbSitesIpAddressesList extends cdktf.ComplexList {
  public internalValue? : GslbSitesIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): GslbSitesIpAddressesOutputReference {
    return new GslbSitesIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSitesLocationLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#latitude Gslb#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#longitude Gslb#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#name Gslb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#tag Gslb#tag}
  */
  readonly tag?: string;
}

export function gslbSitesLocationLocationToTerraform(struct?: GslbSitesLocationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function gslbSitesLocationLocationToHclTerraform(struct?: GslbSitesLocationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
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

export class GslbSitesLocationLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSitesLocationLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSitesLocationLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // name - computed: true, optional: true, required: false
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

  // tag - computed: true, optional: true, required: false
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

export class GslbSitesLocationLocationList extends cdktf.ComplexList {
  public internalValue? : GslbSitesLocationLocation[] | cdktf.IResolvable

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
  public get(index: number): GslbSitesLocationLocationOutputReference {
    return new GslbSitesLocationLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSitesLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#source Gslb#source}
  */
  readonly source: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#location Gslb#location}
  */
  readonly location?: GslbSitesLocationLocation[] | cdktf.IResolvable;
}

export function gslbSitesLocationToTerraform(struct?: GslbSitesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    location: cdktf.listMapper(gslbSitesLocationLocationToTerraform, true)(struct!.location),
  }
}


export function gslbSitesLocationToHclTerraform(struct?: GslbSitesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.listMapperHcl(gslbSitesLocationLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "GslbSitesLocationLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSitesLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSitesLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSitesLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._location.internalValue = value.location;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GslbSitesLocationLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: GslbSitesLocationLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}

export class GslbSitesLocationList extends cdktf.ComplexList {
  public internalValue? : GslbSitesLocation[] | cdktf.IResolvable

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
  public get(index: number): GslbSitesLocationOutputReference {
    return new GslbSitesLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSitesReplicationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#replication_mode Gslb#replication_mode}
  */
  readonly replicationMode?: string;
}

export function gslbSitesReplicationPolicyToTerraform(struct?: GslbSitesReplicationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_mode: cdktf.stringToTerraform(struct!.replicationMode),
  }
}


export function gslbSitesReplicationPolicyToHclTerraform(struct?: GslbSitesReplicationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replication_mode: {
      value: cdktf.stringToHclTerraform(struct!.replicationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSitesReplicationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSitesReplicationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationMode = this._replicationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSitesReplicationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationMode = value.replicationMode;
    }
  }

  // replication_mode - computed: false, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
  }
}

export class GslbSitesReplicationPolicyList extends cdktf.ComplexList {
  public internalValue? : GslbSitesReplicationPolicy[] | cdktf.IResolvable

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
  public get(index: number): GslbSitesReplicationPolicyOutputReference {
    return new GslbSitesReplicationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#address Gslb#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#cluster_uuid Gslb#cluster_uuid}
  */
  readonly clusterUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#enabled Gslb#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#hm_shard_enabled Gslb#hm_shard_enabled}
  */
  readonly hmShardEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#member_type Gslb#member_type}
  */
  readonly memberType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#name Gslb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#password Gslb#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#port Gslb#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#ratio Gslb#ratio}
  */
  readonly ratio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#suspend_mode Gslb#suspend_mode}
  */
  readonly suspendMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#username Gslb#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#uuid Gslb#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_vses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#dns_vses Gslb#dns_vses}
  */
  readonly dnsVses?: GslbSitesDnsVses[] | cdktf.IResolvable;
  /**
  * hm_proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#hm_proxies Gslb#hm_proxies}
  */
  readonly hmProxies?: GslbSitesHmProxies[] | cdktf.IResolvable;
  /**
  * ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#ip_addresses Gslb#ip_addresses}
  */
  readonly ipAddresses?: GslbSitesIpAddresses[] | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#location Gslb#location}
  */
  readonly location?: GslbSitesLocation[] | cdktf.IResolvable;
  /**
  * replication_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#replication_policy Gslb#replication_policy}
  */
  readonly replicationPolicy?: GslbSitesReplicationPolicy[] | cdktf.IResolvable;
}

export function gslbSitesToTerraform(struct?: GslbSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cluster_uuid: cdktf.stringToTerraform(struct!.clusterUuid),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    hm_shard_enabled: cdktf.stringToTerraform(struct!.hmShardEnabled),
    member_type: cdktf.stringToTerraform(struct!.memberType),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    ratio: cdktf.stringToTerraform(struct!.ratio),
    suspend_mode: cdktf.stringToTerraform(struct!.suspendMode),
    username: cdktf.stringToTerraform(struct!.username),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns_vses: cdktf.listMapper(gslbSitesDnsVsesToTerraform, true)(struct!.dnsVses),
    hm_proxies: cdktf.listMapper(gslbSitesHmProxiesToTerraform, true)(struct!.hmProxies),
    ip_addresses: cdktf.listMapper(gslbSitesIpAddressesToTerraform, true)(struct!.ipAddresses),
    location: cdktf.listMapper(gslbSitesLocationToTerraform, true)(struct!.location),
    replication_policy: cdktf.listMapper(gslbSitesReplicationPolicyToTerraform, true)(struct!.replicationPolicy),
  }
}


export function gslbSitesToHclTerraform(struct?: GslbSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.clusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hm_shard_enabled: {
      value: cdktf.stringToHclTerraform(struct!.hmShardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_type: {
      value: cdktf.stringToHclTerraform(struct!.memberType),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio: {
      value: cdktf.stringToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend_mode: {
      value: cdktf.stringToHclTerraform(struct!.suspendMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
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
    dns_vses: {
      value: cdktf.listMapperHcl(gslbSitesDnsVsesToHclTerraform, true)(struct!.dnsVses),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSitesDnsVsesList",
    },
    hm_proxies: {
      value: cdktf.listMapperHcl(gslbSitesHmProxiesToHclTerraform, true)(struct!.hmProxies),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSitesHmProxiesList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(gslbSitesIpAddressesToHclTerraform, true)(struct!.ipAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSitesIpAddressesList",
    },
    location: {
      value: cdktf.listMapperHcl(gslbSitesLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "GslbSitesLocationList",
    },
    replication_policy: {
      value: cdktf.listMapperHcl(gslbSitesReplicationPolicyToHclTerraform, true)(struct!.replicationPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "GslbSitesReplicationPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._clusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUuid = this._clusterUuid;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hmShardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmShardEnabled = this._hmShardEnabled;
    }
    if (this._memberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberType = this._memberType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._suspendMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendMode = this._suspendMode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dnsVses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsVses = this._dnsVses?.internalValue;
    }
    if (this._hmProxies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmProxies = this._hmProxies?.internalValue;
    }
    if (this._ipAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._replicationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationPolicy = this._replicationPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._clusterUuid = undefined;
      this._enabled = undefined;
      this._hmShardEnabled = undefined;
      this._memberType = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._ratio = undefined;
      this._suspendMode = undefined;
      this._username = undefined;
      this._uuid = undefined;
      this._dnsVses.internalValue = undefined;
      this._hmProxies.internalValue = undefined;
      this._ipAddresses.internalValue = undefined;
      this._location.internalValue = undefined;
      this._replicationPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._clusterUuid = value.clusterUuid;
      this._enabled = value.enabled;
      this._hmShardEnabled = value.hmShardEnabled;
      this._memberType = value.memberType;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._ratio = value.ratio;
      this._suspendMode = value.suspendMode;
      this._username = value.username;
      this._uuid = value.uuid;
      this._dnsVses.internalValue = value.dnsVses;
      this._hmProxies.internalValue = value.hmProxies;
      this._ipAddresses.internalValue = value.ipAddresses;
      this._location.internalValue = value.location;
      this._replicationPolicy.internalValue = value.replicationPolicy;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cluster_uuid - computed: false, optional: false, required: true
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hm_shard_enabled - computed: false, optional: true, required: false
  private _hmShardEnabled?: string; 
  public get hmShardEnabled() {
    return this.getStringAttribute('hm_shard_enabled');
  }
  public set hmShardEnabled(value: string) {
    this._hmShardEnabled = value;
  }
  public resetHmShardEnabled() {
    this._hmShardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmShardEnabledInput() {
    return this._hmShardEnabled;
  }

  // member_type - computed: false, optional: true, required: false
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  public resetMemberType() {
    this._memberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ratio - computed: true, optional: true, required: false
  private _ratio?: string; 
  public get ratio() {
    return this.getStringAttribute('ratio');
  }
  public set ratio(value: string) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // suspend_mode - computed: false, optional: true, required: false
  private _suspendMode?: string; 
  public get suspendMode() {
    return this.getStringAttribute('suspend_mode');
  }
  public set suspendMode(value: string) {
    this._suspendMode = value;
  }
  public resetSuspendMode() {
    this._suspendMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendModeInput() {
    return this._suspendMode;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // dns_vses - computed: false, optional: true, required: false
  private _dnsVses = new GslbSitesDnsVsesList(this, "dns_vses", false);
  public get dnsVses() {
    return this._dnsVses;
  }
  public putDnsVses(value: GslbSitesDnsVses[] | cdktf.IResolvable) {
    this._dnsVses.internalValue = value;
  }
  public resetDnsVses() {
    this._dnsVses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVsesInput() {
    return this._dnsVses.internalValue;
  }

  // hm_proxies - computed: false, optional: true, required: false
  private _hmProxies = new GslbSitesHmProxiesList(this, "hm_proxies", false);
  public get hmProxies() {
    return this._hmProxies;
  }
  public putHmProxies(value: GslbSitesHmProxies[] | cdktf.IResolvable) {
    this._hmProxies.internalValue = value;
  }
  public resetHmProxies() {
    this._hmProxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmProxiesInput() {
    return this._hmProxies.internalValue;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses = new GslbSitesIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }
  public putIpAddresses(value: GslbSitesIpAddresses[] | cdktf.IResolvable) {
    this._ipAddresses.internalValue = value;
  }
  public resetIpAddresses() {
    this._ipAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GslbSitesLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: GslbSitesLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // replication_policy - computed: false, optional: true, required: false
  private _replicationPolicy = new GslbSitesReplicationPolicyList(this, "replication_policy", true);
  public get replicationPolicy() {
    return this._replicationPolicy;
  }
  public putReplicationPolicy(value: GslbSitesReplicationPolicy[] | cdktf.IResolvable) {
    this._replicationPolicy.internalValue = value;
  }
  public resetReplicationPolicy() {
    this._replicationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPolicyInput() {
    return this._replicationPolicy.internalValue;
  }
}

export class GslbSitesList extends cdktf.ComplexList {
  public internalValue? : GslbSites[] | cdktf.IResolvable

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
  public get(index: number): GslbSitesOutputReference {
    return new GslbSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbThirdPartySitesHmProxies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#proxy_type Gslb#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#site_uuid Gslb#site_uuid}
  */
  readonly siteUuid?: string;
}

export function gslbThirdPartySitesHmProxiesToTerraform(struct?: GslbThirdPartySitesHmProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    site_uuid: cdktf.stringToTerraform(struct!.siteUuid),
  }
}


export function gslbThirdPartySitesHmProxiesToHclTerraform(struct?: GslbThirdPartySitesHmProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_uuid: {
      value: cdktf.stringToHclTerraform(struct!.siteUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbThirdPartySitesHmProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbThirdPartySitesHmProxies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    if (this._siteUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUuid = this._siteUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbThirdPartySitesHmProxies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyType = undefined;
      this._siteUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyType = value.proxyType;
      this._siteUuid = value.siteUuid;
    }
  }

  // proxy_type - computed: false, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // site_uuid - computed: true, optional: true, required: false
  private _siteUuid?: string; 
  public get siteUuid() {
    return this.getStringAttribute('site_uuid');
  }
  public set siteUuid(value: string) {
    this._siteUuid = value;
  }
  public resetSiteUuid() {
    this._siteUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUuidInput() {
    return this._siteUuid;
  }
}

export class GslbThirdPartySitesHmProxiesList extends cdktf.ComplexList {
  public internalValue? : GslbThirdPartySitesHmProxies[] | cdktf.IResolvable

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
  public get(index: number): GslbThirdPartySitesHmProxiesOutputReference {
    return new GslbThirdPartySitesHmProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbThirdPartySitesLocationLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#latitude Gslb#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#longitude Gslb#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#name Gslb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#tag Gslb#tag}
  */
  readonly tag?: string;
}

export function gslbThirdPartySitesLocationLocationToTerraform(struct?: GslbThirdPartySitesLocationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function gslbThirdPartySitesLocationLocationToHclTerraform(struct?: GslbThirdPartySitesLocationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
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

export class GslbThirdPartySitesLocationLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbThirdPartySitesLocationLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbThirdPartySitesLocationLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // name - computed: true, optional: true, required: false
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

  // tag - computed: true, optional: true, required: false
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

export class GslbThirdPartySitesLocationLocationList extends cdktf.ComplexList {
  public internalValue? : GslbThirdPartySitesLocationLocation[] | cdktf.IResolvable

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
  public get(index: number): GslbThirdPartySitesLocationLocationOutputReference {
    return new GslbThirdPartySitesLocationLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbThirdPartySitesLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#source Gslb#source}
  */
  readonly source: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#location Gslb#location}
  */
  readonly location?: GslbThirdPartySitesLocationLocation[] | cdktf.IResolvable;
}

export function gslbThirdPartySitesLocationToTerraform(struct?: GslbThirdPartySitesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    location: cdktf.listMapper(gslbThirdPartySitesLocationLocationToTerraform, true)(struct!.location),
  }
}


export function gslbThirdPartySitesLocationToHclTerraform(struct?: GslbThirdPartySitesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.listMapperHcl(gslbThirdPartySitesLocationLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "GslbThirdPartySitesLocationLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbThirdPartySitesLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbThirdPartySitesLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbThirdPartySitesLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._location.internalValue = value.location;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GslbThirdPartySitesLocationLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: GslbThirdPartySitesLocationLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}

export class GslbThirdPartySitesLocationList extends cdktf.ComplexList {
  public internalValue? : GslbThirdPartySitesLocation[] | cdktf.IResolvable

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
  public get(index: number): GslbThirdPartySitesLocationOutputReference {
    return new GslbThirdPartySitesLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbThirdPartySites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#cluster_uuid Gslb#cluster_uuid}
  */
  readonly clusterUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#enabled Gslb#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#name Gslb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#ratio Gslb#ratio}
  */
  readonly ratio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#uuid Gslb#uuid}
  */
  readonly uuid?: string;
  /**
  * hm_proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#hm_proxies Gslb#hm_proxies}
  */
  readonly hmProxies?: GslbThirdPartySitesHmProxies[] | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#location Gslb#location}
  */
  readonly location?: GslbThirdPartySitesLocation[] | cdktf.IResolvable;
}

export function gslbThirdPartySitesToTerraform(struct?: GslbThirdPartySites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_uuid: cdktf.stringToTerraform(struct!.clusterUuid),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    ratio: cdktf.stringToTerraform(struct!.ratio),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    hm_proxies: cdktf.listMapper(gslbThirdPartySitesHmProxiesToTerraform, true)(struct!.hmProxies),
    location: cdktf.listMapper(gslbThirdPartySitesLocationToTerraform, true)(struct!.location),
  }
}


export function gslbThirdPartySitesToHclTerraform(struct?: GslbThirdPartySites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.clusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
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
    ratio: {
      value: cdktf.stringToHclTerraform(struct!.ratio),
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
    hm_proxies: {
      value: cdktf.listMapperHcl(gslbThirdPartySitesHmProxiesToHclTerraform, true)(struct!.hmProxies),
      isBlock: true,
      type: "list",
      storageClassType: "GslbThirdPartySitesHmProxiesList",
    },
    location: {
      value: cdktf.listMapperHcl(gslbThirdPartySitesLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "GslbThirdPartySitesLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbThirdPartySitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbThirdPartySites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUuid = this._clusterUuid;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._hmProxies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmProxies = this._hmProxies?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbThirdPartySites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterUuid = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._ratio = undefined;
      this._uuid = undefined;
      this._hmProxies.internalValue = undefined;
      this._location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterUuid = value.clusterUuid;
      this._enabled = value.enabled;
      this._name = value.name;
      this._ratio = value.ratio;
      this._uuid = value.uuid;
      this._hmProxies.internalValue = value.hmProxies;
      this._location.internalValue = value.location;
    }
  }

  // cluster_uuid - computed: true, optional: true, required: false
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  public resetClusterUuid() {
    this._clusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ratio - computed: true, optional: true, required: false
  private _ratio?: string; 
  public get ratio() {
    return this.getStringAttribute('ratio');
  }
  public set ratio(value: string) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
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

  // hm_proxies - computed: false, optional: true, required: false
  private _hmProxies = new GslbThirdPartySitesHmProxiesList(this, "hm_proxies", false);
  public get hmProxies() {
    return this._hmProxies;
  }
  public putHmProxies(value: GslbThirdPartySitesHmProxies[] | cdktf.IResolvable) {
    this._hmProxies.internalValue = value;
  }
  public resetHmProxies() {
    this._hmProxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmProxiesInput() {
    return this._hmProxies.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GslbThirdPartySitesLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: GslbThirdPartySitesLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}

export class GslbThirdPartySitesList extends cdktf.ComplexList {
  public internalValue? : GslbThirdPartySites[] | cdktf.IResolvable

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
  public get(index: number): GslbThirdPartySitesOutputReference {
    return new GslbThirdPartySitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb avi_gslb}
*/
export class Gslb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_gslb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslb to import
  * @param importFromId The id of the existing Gslb that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_gslb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/gslb avi_gslb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbConfig
  */
  public constructor(scope: Construct, id: string, config: GslbConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_gslb',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asyncInterval = config.asyncInterval;
    this._clearOnMaxRetries = config.clearOnMaxRetries;
    this._description = config.description;
    this._enableConfigByMembers = config.enableConfigByMembers;
    this._errorResyncInterval = config.errorResyncInterval;
    this._fileobjectMaxFileVersions = config.fileobjectMaxFileVersions;
    this._gsMemberFqdnResolutionOnSe = config.gsMemberFqdnResolutionOnSe;
    this._id = config.id;
    this._isFederated = config.isFederated;
    this._leaderClusterUuid = config.leaderClusterUuid;
    this._maintenanceMode = config.maintenanceMode;
    this._name = config.name;
    this._sendInterval = config.sendInterval;
    this._sendIntervalPriorToMaintenanceMode = config.sendIntervalPriorToMaintenanceMode;
    this._shortProbeInterval = config.shortProbeInterval;
    this._tenantRef = config.tenantRef;
    this._tenantScoped = config.tenantScoped;
    this._uuid = config.uuid;
    this._viewId = config.viewId;
    this._autoTuneSendInterval.internalValue = config.autoTuneSendInterval;
    this._clientIpAddrGroup.internalValue = config.clientIpAddrGroup;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._dnsConfigs.internalValue = config.dnsConfigs;
    this._leaderChangeInfo.internalValue = config.leaderChangeInfo;
    this._sites.internalValue = config.sites;
    this._thirdPartySites.internalValue = config.thirdPartySites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_interval - computed: false, optional: true, required: false
  private _asyncInterval?: string; 
  public get asyncInterval() {
    return this.getStringAttribute('async_interval');
  }
  public set asyncInterval(value: string) {
    this._asyncInterval = value;
  }
  public resetAsyncInterval() {
    this._asyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncIntervalInput() {
    return this._asyncInterval;
  }

  // clear_on_max_retries - computed: false, optional: true, required: false
  private _clearOnMaxRetries?: string; 
  public get clearOnMaxRetries() {
    return this.getStringAttribute('clear_on_max_retries');
  }
  public set clearOnMaxRetries(value: string) {
    this._clearOnMaxRetries = value;
  }
  public resetClearOnMaxRetries() {
    this._clearOnMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearOnMaxRetriesInput() {
    return this._clearOnMaxRetries;
  }

  // description - computed: true, optional: true, required: false
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

  // enable_config_by_members - computed: false, optional: true, required: false
  private _enableConfigByMembers?: string; 
  public get enableConfigByMembers() {
    return this.getStringAttribute('enable_config_by_members');
  }
  public set enableConfigByMembers(value: string) {
    this._enableConfigByMembers = value;
  }
  public resetEnableConfigByMembers() {
    this._enableConfigByMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfigByMembersInput() {
    return this._enableConfigByMembers;
  }

  // error_resync_interval - computed: false, optional: true, required: false
  private _errorResyncInterval?: string; 
  public get errorResyncInterval() {
    return this.getStringAttribute('error_resync_interval');
  }
  public set errorResyncInterval(value: string) {
    this._errorResyncInterval = value;
  }
  public resetErrorResyncInterval() {
    this._errorResyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResyncIntervalInput() {
    return this._errorResyncInterval;
  }

  // fileobject_max_file_versions - computed: false, optional: true, required: false
  private _fileobjectMaxFileVersions?: string; 
  public get fileobjectMaxFileVersions() {
    return this.getStringAttribute('fileobject_max_file_versions');
  }
  public set fileobjectMaxFileVersions(value: string) {
    this._fileobjectMaxFileVersions = value;
  }
  public resetFileobjectMaxFileVersions() {
    this._fileobjectMaxFileVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileobjectMaxFileVersionsInput() {
    return this._fileobjectMaxFileVersions;
  }

  // gs_member_fqdn_resolution_on_se - computed: false, optional: true, required: false
  private _gsMemberFqdnResolutionOnSe?: string; 
  public get gsMemberFqdnResolutionOnSe() {
    return this.getStringAttribute('gs_member_fqdn_resolution_on_se');
  }
  public set gsMemberFqdnResolutionOnSe(value: string) {
    this._gsMemberFqdnResolutionOnSe = value;
  }
  public resetGsMemberFqdnResolutionOnSe() {
    this._gsMemberFqdnResolutionOnSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsMemberFqdnResolutionOnSeInput() {
    return this._gsMemberFqdnResolutionOnSe;
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

  // is_federated - computed: false, optional: true, required: false
  private _isFederated?: string; 
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }
  public set isFederated(value: string) {
    this._isFederated = value;
  }
  public resetIsFederated() {
    this._isFederated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedInput() {
    return this._isFederated;
  }

  // leader_cluster_uuid - computed: false, optional: false, required: true
  private _leaderClusterUuid?: string; 
  public get leaderClusterUuid() {
    return this.getStringAttribute('leader_cluster_uuid');
  }
  public set leaderClusterUuid(value: string) {
    this._leaderClusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderClusterUuidInput() {
    return this._leaderClusterUuid;
  }

  // maintenance_mode - computed: false, optional: true, required: false
  private _maintenanceMode?: string; 
  public get maintenanceMode() {
    return this.getStringAttribute('maintenance_mode');
  }
  public set maintenanceMode(value: string) {
    this._maintenanceMode = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode;
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

  // send_interval - computed: false, optional: true, required: false
  private _sendInterval?: string; 
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }
  public set sendInterval(value: string) {
    this._sendInterval = value;
  }
  public resetSendInterval() {
    this._sendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalInput() {
    return this._sendInterval;
  }

  // send_interval_prior_to_maintenance_mode - computed: true, optional: true, required: false
  private _sendIntervalPriorToMaintenanceMode?: string; 
  public get sendIntervalPriorToMaintenanceMode() {
    return this.getStringAttribute('send_interval_prior_to_maintenance_mode');
  }
  public set sendIntervalPriorToMaintenanceMode(value: string) {
    this._sendIntervalPriorToMaintenanceMode = value;
  }
  public resetSendIntervalPriorToMaintenanceMode() {
    this._sendIntervalPriorToMaintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalPriorToMaintenanceModeInput() {
    return this._sendIntervalPriorToMaintenanceMode;
  }

  // short_probe_interval - computed: false, optional: true, required: false
  private _shortProbeInterval?: string; 
  public get shortProbeInterval() {
    return this.getStringAttribute('short_probe_interval');
  }
  public set shortProbeInterval(value: string) {
    this._shortProbeInterval = value;
  }
  public resetShortProbeInterval() {
    this._shortProbeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortProbeIntervalInput() {
    return this._shortProbeInterval;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // tenant_scoped - computed: false, optional: true, required: false
  private _tenantScoped?: string; 
  public get tenantScoped() {
    return this.getStringAttribute('tenant_scoped');
  }
  public set tenantScoped(value: string) {
    this._tenantScoped = value;
  }
  public resetTenantScoped() {
    this._tenantScoped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantScopedInput() {
    return this._tenantScoped;
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

  // view_id - computed: false, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }

  // auto_tune_send_interval - computed: false, optional: true, required: false
  private _autoTuneSendInterval = new GslbAutoTuneSendIntervalList(this, "auto_tune_send_interval", true);
  public get autoTuneSendInterval() {
    return this._autoTuneSendInterval;
  }
  public putAutoTuneSendInterval(value: GslbAutoTuneSendInterval[] | cdktf.IResolvable) {
    this._autoTuneSendInterval.internalValue = value;
  }
  public resetAutoTuneSendInterval() {
    this._autoTuneSendInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTuneSendIntervalInput() {
    return this._autoTuneSendInterval.internalValue;
  }

  // client_ip_addr_group - computed: false, optional: true, required: false
  private _clientIpAddrGroup = new GslbClientIpAddrGroupList(this, "client_ip_addr_group", true);
  public get clientIpAddrGroup() {
    return this._clientIpAddrGroup;
  }
  public putClientIpAddrGroup(value: GslbClientIpAddrGroup[] | cdktf.IResolvable) {
    this._clientIpAddrGroup.internalValue = value;
  }
  public resetClientIpAddrGroup() {
    this._clientIpAddrGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpAddrGroupInput() {
    return this._clientIpAddrGroup.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new GslbConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: GslbConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // dns_configs - computed: false, optional: true, required: false
  private _dnsConfigs = new GslbDnsConfigsList(this, "dns_configs", false);
  public get dnsConfigs() {
    return this._dnsConfigs;
  }
  public putDnsConfigs(value: GslbDnsConfigs[] | cdktf.IResolvable) {
    this._dnsConfigs.internalValue = value;
  }
  public resetDnsConfigs() {
    this._dnsConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigsInput() {
    return this._dnsConfigs.internalValue;
  }

  // leader_change_info - computed: false, optional: true, required: false
  private _leaderChangeInfo = new GslbLeaderChangeInfoList(this, "leader_change_info", true);
  public get leaderChangeInfo() {
    return this._leaderChangeInfo;
  }
  public putLeaderChangeInfo(value: GslbLeaderChangeInfo[] | cdktf.IResolvable) {
    this._leaderChangeInfo.internalValue = value;
  }
  public resetLeaderChangeInfo() {
    this._leaderChangeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderChangeInfoInput() {
    return this._leaderChangeInfo.internalValue;
  }

  // sites - computed: false, optional: false, required: true
  private _sites = new GslbSitesList(this, "sites", false);
  public get sites() {
    return this._sites;
  }
  public putSites(value: GslbSites[] | cdktf.IResolvable) {
    this._sites.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitesInput() {
    return this._sites.internalValue;
  }

  // third_party_sites - computed: false, optional: true, required: false
  private _thirdPartySites = new GslbThirdPartySitesList(this, "third_party_sites", false);
  public get thirdPartySites() {
    return this._thirdPartySites;
  }
  public putThirdPartySites(value: GslbThirdPartySites[] | cdktf.IResolvable) {
    this._thirdPartySites.internalValue = value;
  }
  public resetThirdPartySites() {
    this._thirdPartySites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartySitesInput() {
    return this._thirdPartySites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      async_interval: cdktf.stringToTerraform(this._asyncInterval),
      clear_on_max_retries: cdktf.stringToTerraform(this._clearOnMaxRetries),
      description: cdktf.stringToTerraform(this._description),
      enable_config_by_members: cdktf.stringToTerraform(this._enableConfigByMembers),
      error_resync_interval: cdktf.stringToTerraform(this._errorResyncInterval),
      fileobject_max_file_versions: cdktf.stringToTerraform(this._fileobjectMaxFileVersions),
      gs_member_fqdn_resolution_on_se: cdktf.stringToTerraform(this._gsMemberFqdnResolutionOnSe),
      id: cdktf.stringToTerraform(this._id),
      is_federated: cdktf.stringToTerraform(this._isFederated),
      leader_cluster_uuid: cdktf.stringToTerraform(this._leaderClusterUuid),
      maintenance_mode: cdktf.stringToTerraform(this._maintenanceMode),
      name: cdktf.stringToTerraform(this._name),
      send_interval: cdktf.stringToTerraform(this._sendInterval),
      send_interval_prior_to_maintenance_mode: cdktf.stringToTerraform(this._sendIntervalPriorToMaintenanceMode),
      short_probe_interval: cdktf.stringToTerraform(this._shortProbeInterval),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      tenant_scoped: cdktf.stringToTerraform(this._tenantScoped),
      uuid: cdktf.stringToTerraform(this._uuid),
      view_id: cdktf.stringToTerraform(this._viewId),
      auto_tune_send_interval: cdktf.listMapper(gslbAutoTuneSendIntervalToTerraform, true)(this._autoTuneSendInterval.internalValue),
      client_ip_addr_group: cdktf.listMapper(gslbClientIpAddrGroupToTerraform, true)(this._clientIpAddrGroup.internalValue),
      configpb_attributes: cdktf.listMapper(gslbConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      dns_configs: cdktf.listMapper(gslbDnsConfigsToTerraform, true)(this._dnsConfigs.internalValue),
      leader_change_info: cdktf.listMapper(gslbLeaderChangeInfoToTerraform, true)(this._leaderChangeInfo.internalValue),
      sites: cdktf.listMapper(gslbSitesToTerraform, true)(this._sites.internalValue),
      third_party_sites: cdktf.listMapper(gslbThirdPartySitesToTerraform, true)(this._thirdPartySites.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      async_interval: {
        value: cdktf.stringToHclTerraform(this._asyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_on_max_retries: {
        value: cdktf.stringToHclTerraform(this._clearOnMaxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_config_by_members: {
        value: cdktf.stringToHclTerraform(this._enableConfigByMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_resync_interval: {
        value: cdktf.stringToHclTerraform(this._errorResyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fileobject_max_file_versions: {
        value: cdktf.stringToHclTerraform(this._fileobjectMaxFileVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gs_member_fqdn_resolution_on_se: {
        value: cdktf.stringToHclTerraform(this._gsMemberFqdnResolutionOnSe),
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
      is_federated: {
        value: cdktf.stringToHclTerraform(this._isFederated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leader_cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._leaderClusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_mode: {
        value: cdktf.stringToHclTerraform(this._maintenanceMode),
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
      send_interval: {
        value: cdktf.stringToHclTerraform(this._sendInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_interval_prior_to_maintenance_mode: {
        value: cdktf.stringToHclTerraform(this._sendIntervalPriorToMaintenanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_probe_interval: {
        value: cdktf.stringToHclTerraform(this._shortProbeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_scoped: {
        value: cdktf.stringToHclTerraform(this._tenantScoped),
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
      view_id: {
        value: cdktf.stringToHclTerraform(this._viewId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_tune_send_interval: {
        value: cdktf.listMapperHcl(gslbAutoTuneSendIntervalToHclTerraform, true)(this._autoTuneSendInterval.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbAutoTuneSendIntervalList",
      },
      client_ip_addr_group: {
        value: cdktf.listMapperHcl(gslbClientIpAddrGroupToHclTerraform, true)(this._clientIpAddrGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbClientIpAddrGroupList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(gslbConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbConfigpbAttributesList",
      },
      dns_configs: {
        value: cdktf.listMapperHcl(gslbDnsConfigsToHclTerraform, true)(this._dnsConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbDnsConfigsList",
      },
      leader_change_info: {
        value: cdktf.listMapperHcl(gslbLeaderChangeInfoToHclTerraform, true)(this._leaderChangeInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbLeaderChangeInfoList",
      },
      sites: {
        value: cdktf.listMapperHcl(gslbSitesToHclTerraform, true)(this._sites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSitesList",
      },
      third_party_sites: {
        value: cdktf.listMapperHcl(gslbThirdPartySitesToHclTerraform, true)(this._thirdPartySites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbThirdPartySitesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
