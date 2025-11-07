// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemStandaloneclusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#asymmetric_traffic_control SystemStandalonecluster#asymmetric_traffic_control}
  */
  readonly asymmetricTrafficControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#dynamic_sort_subtable SystemStandalonecluster#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#encryption SystemStandalonecluster#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#get_all_tables SystemStandalonecluster#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#group_member_id SystemStandalonecluster#group_member_id}
  */
  readonly groupMemberId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#helper_traffic_bounce SystemStandalonecluster#helper_traffic_bounce}
  */
  readonly helperTrafficBounce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#id SystemStandalonecluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#layer2_connection SystemStandalonecluster#layer2_connection}
  */
  readonly layer2Connection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#psksecret SystemStandalonecluster#psksecret}
  */
  readonly psksecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#session_sync_dev SystemStandalonecluster#session_sync_dev}
  */
  readonly sessionSyncDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#standalone_group_id SystemStandalonecluster#standalone_group_id}
  */
  readonly standaloneGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#utm_traffic_bounce SystemStandalonecluster#utm_traffic_bounce}
  */
  readonly utmTrafficBounce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#vdomparam SystemStandalonecluster#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * cluster_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#cluster_peer SystemStandalonecluster#cluster_peer}
  */
  readonly clusterPeer?: SystemStandaloneclusterClusterPeer[] | cdktf.IResolvable;
  /**
  * monitor_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#monitor_interface SystemStandalonecluster#monitor_interface}
  */
  readonly monitorInterface?: SystemStandaloneclusterMonitorInterface[] | cdktf.IResolvable;
  /**
  * monitor_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#monitor_prefix SystemStandalonecluster#monitor_prefix}
  */
  readonly monitorPrefix?: SystemStandaloneclusterMonitorPrefix[] | cdktf.IResolvable;
  /**
  * pingsvr_monitor_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#pingsvr_monitor_interface SystemStandalonecluster#pingsvr_monitor_interface}
  */
  readonly pingsvrMonitorInterface?: SystemStandaloneclusterPingsvrMonitorInterface[] | cdktf.IResolvable;
}
export interface SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#name SystemStandalonecluster#name}
  */
  readonly name?: string;
}

export function systemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncToTerraform(struct?: SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncToHclTerraform(struct?: SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncList extends cdktf.ComplexList {
  public internalValue? : SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync[] | cdktf.IResolvable

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
  public get(index: number): SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncOutputReference {
    return new SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#dst_port_range SystemStandalonecluster#dst_port_range}
  */
  readonly dstPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#id SystemStandalonecluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#src_port_range SystemStandalonecluster#src_port_range}
  */
  readonly srcPortRange?: string;
}

export function systemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceToTerraform(struct?: SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_port_range: cdktf.stringToTerraform(struct!.dstPortRange),
    id: cdktf.numberToTerraform(struct!.id),
    src_port_range: cdktf.stringToTerraform(struct!.srcPortRange),
  }
}


export function systemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceToHclTerraform(struct?: SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_port_range: {
      value: cdktf.stringToHclTerraform(struct!.dstPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range: {
      value: cdktf.stringToHclTerraform(struct!.srcPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortRange = this._dstPortRange;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._srcPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRange = this._srcPortRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstPortRange = undefined;
      this._id = undefined;
      this._srcPortRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstPortRange = value.dstPortRange;
      this._id = value.id;
      this._srcPortRange = value.srcPortRange;
    }
  }

  // dst_port_range - computed: true, optional: true, required: false
  private _dstPortRange?: string; 
  public get dstPortRange() {
    return this.getStringAttribute('dst_port_range');
  }
  public set dstPortRange(value: string) {
    this._dstPortRange = value;
  }
  public resetDstPortRange() {
    this._dstPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortRangeInput() {
    return this._dstPortRange;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // src_port_range - computed: true, optional: true, required: false
  private _srcPortRange?: string; 
  public get srcPortRange() {
    return this.getStringAttribute('src_port_range');
  }
  public set srcPortRange(value: string) {
    this._srcPortRange = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange;
  }
}

export class SystemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceList extends cdktf.ComplexList {
  public internalValue? : SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService[] | cdktf.IResolvable

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
  public get(index: number): SystemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceOutputReference {
    return new SystemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemStandaloneclusterClusterPeerSessionSyncFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#dstaddr SystemStandalonecluster#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#dstaddr6 SystemStandalonecluster#dstaddr6}
  */
  readonly dstaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#dstintf SystemStandalonecluster#dstintf}
  */
  readonly dstintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#srcaddr SystemStandalonecluster#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#srcaddr6 SystemStandalonecluster#srcaddr6}
  */
  readonly srcaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#srcintf SystemStandalonecluster#srcintf}
  */
  readonly srcintf?: string;
  /**
  * custom_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#custom_service SystemStandalonecluster#custom_service}
  */
  readonly customService?: SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService[] | cdktf.IResolvable;
}

export function systemStandaloneclusterClusterPeerSessionSyncFilterToTerraform(struct?: SystemStandaloneclusterClusterPeerSessionSyncFilterOutputReference | SystemStandaloneclusterClusterPeerSessionSyncFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dstaddr: cdktf.stringToTerraform(struct!.dstaddr),
    dstaddr6: cdktf.stringToTerraform(struct!.dstaddr6),
    dstintf: cdktf.stringToTerraform(struct!.dstintf),
    srcaddr: cdktf.stringToTerraform(struct!.srcaddr),
    srcaddr6: cdktf.stringToTerraform(struct!.srcaddr6),
    srcintf: cdktf.stringToTerraform(struct!.srcintf),
    custom_service: cdktf.listMapper(systemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceToTerraform, true)(struct!.customService),
  }
}


export function systemStandaloneclusterClusterPeerSessionSyncFilterToHclTerraform(struct?: SystemStandaloneclusterClusterPeerSessionSyncFilterOutputReference | SystemStandaloneclusterClusterPeerSessionSyncFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dstaddr: {
      value: cdktf.stringToHclTerraform(struct!.dstaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstaddr6: {
      value: cdktf.stringToHclTerraform(struct!.dstaddr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstintf: {
      value: cdktf.stringToHclTerraform(struct!.dstintf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcaddr: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcaddr6: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcintf: {
      value: cdktf.stringToHclTerraform(struct!.srcintf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_service: {
      value: cdktf.listMapperHcl(systemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceToHclTerraform, true)(struct!.customService),
      isBlock: true,
      type: "list",
      storageClassType: "SystemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterClusterPeerSessionSyncFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemStandaloneclusterClusterPeerSessionSyncFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr = this._dstaddr;
    }
    if (this._dstaddr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr6 = this._dstaddr6;
    }
    if (this._dstintf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstintf = this._dstintf;
    }
    if (this._srcaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr;
    }
    if (this._srcaddr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr6 = this._srcaddr6;
    }
    if (this._srcintf !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcintf = this._srcintf;
    }
    if (this._customService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customService = this._customService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterClusterPeerSessionSyncFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstaddr = undefined;
      this._dstaddr6 = undefined;
      this._dstintf = undefined;
      this._srcaddr = undefined;
      this._srcaddr6 = undefined;
      this._srcintf = undefined;
      this._customService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstaddr = value.dstaddr;
      this._dstaddr6 = value.dstaddr6;
      this._dstintf = value.dstintf;
      this._srcaddr = value.srcaddr;
      this._srcaddr6 = value.srcaddr6;
      this._srcintf = value.srcintf;
      this._customService.internalValue = value.customService;
    }
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string; 
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }
  public set dstaddr(value: string) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstaddr6 - computed: true, optional: true, required: false
  private _dstaddr6?: string; 
  public get dstaddr6() {
    return this.getStringAttribute('dstaddr6');
  }
  public set dstaddr6(value: string) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
  }

  // dstintf - computed: false, optional: true, required: false
  private _dstintf?: string; 
  public get dstintf() {
    return this.getStringAttribute('dstintf');
  }
  public set dstintf(value: string) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: true, optional: true, required: false
  private _srcaddr6?: string; 
  public get srcaddr6() {
    return this.getStringAttribute('srcaddr6');
  }
  public set srcaddr6(value: string) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcintf - computed: false, optional: true, required: false
  private _srcintf?: string; 
  public get srcintf() {
    return this.getStringAttribute('srcintf');
  }
  public set srcintf(value: string) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // custom_service - computed: false, optional: true, required: false
  private _customService = new SystemStandaloneclusterClusterPeerSessionSyncFilterCustomServiceList(this, "custom_service", false);
  public get customService() {
    return this._customService;
  }
  public putCustomService(value: SystemStandaloneclusterClusterPeerSessionSyncFilterCustomService[] | cdktf.IResolvable) {
    this._customService.internalValue = value;
  }
  public resetCustomService() {
    this._customService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceInput() {
    return this._customService.internalValue;
  }
}
export interface SystemStandaloneclusterClusterPeerSyncvd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#name SystemStandalonecluster#name}
  */
  readonly name?: string;
}

export function systemStandaloneclusterClusterPeerSyncvdToTerraform(struct?: SystemStandaloneclusterClusterPeerSyncvd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemStandaloneclusterClusterPeerSyncvdToHclTerraform(struct?: SystemStandaloneclusterClusterPeerSyncvd | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterClusterPeerSyncvdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemStandaloneclusterClusterPeerSyncvd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterClusterPeerSyncvd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SystemStandaloneclusterClusterPeerSyncvdList extends cdktf.ComplexList {
  public internalValue? : SystemStandaloneclusterClusterPeerSyncvd[] | cdktf.IResolvable

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
  public get(index: number): SystemStandaloneclusterClusterPeerSyncvdOutputReference {
    return new SystemStandaloneclusterClusterPeerSyncvdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemStandaloneclusterClusterPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#hb_interval SystemStandalonecluster#hb_interval}
  */
  readonly hbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#hb_lost_threshold SystemStandalonecluster#hb_lost_threshold}
  */
  readonly hbLostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#ipsec_tunnel_sync SystemStandalonecluster#ipsec_tunnel_sync}
  */
  readonly ipsecTunnelSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#peerip SystemStandalonecluster#peerip}
  */
  readonly peerip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#peervd SystemStandalonecluster#peervd}
  */
  readonly peervd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#secondary_add_ipsec_routes SystemStandalonecluster#secondary_add_ipsec_routes}
  */
  readonly secondaryAddIpsecRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#sync_id SystemStandalonecluster#sync_id}
  */
  readonly syncId?: number;
  /**
  * down_intfs_before_sess_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#down_intfs_before_sess_sync SystemStandalonecluster#down_intfs_before_sess_sync}
  */
  readonly downIntfsBeforeSessSync?: SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync[] | cdktf.IResolvable;
  /**
  * session_sync_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#session_sync_filter SystemStandalonecluster#session_sync_filter}
  */
  readonly sessionSyncFilter?: SystemStandaloneclusterClusterPeerSessionSyncFilter;
  /**
  * syncvd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#syncvd SystemStandalonecluster#syncvd}
  */
  readonly syncvd?: SystemStandaloneclusterClusterPeerSyncvd[] | cdktf.IResolvable;
}

export function systemStandaloneclusterClusterPeerToTerraform(struct?: SystemStandaloneclusterClusterPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hb_interval: cdktf.numberToTerraform(struct!.hbInterval),
    hb_lost_threshold: cdktf.numberToTerraform(struct!.hbLostThreshold),
    ipsec_tunnel_sync: cdktf.stringToTerraform(struct!.ipsecTunnelSync),
    peerip: cdktf.stringToTerraform(struct!.peerip),
    peervd: cdktf.stringToTerraform(struct!.peervd),
    secondary_add_ipsec_routes: cdktf.stringToTerraform(struct!.secondaryAddIpsecRoutes),
    sync_id: cdktf.numberToTerraform(struct!.syncId),
    down_intfs_before_sess_sync: cdktf.listMapper(systemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncToTerraform, true)(struct!.downIntfsBeforeSessSync),
    session_sync_filter: systemStandaloneclusterClusterPeerSessionSyncFilterToTerraform(struct!.sessionSyncFilter),
    syncvd: cdktf.listMapper(systemStandaloneclusterClusterPeerSyncvdToTerraform, true)(struct!.syncvd),
  }
}


export function systemStandaloneclusterClusterPeerToHclTerraform(struct?: SystemStandaloneclusterClusterPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hb_interval: {
      value: cdktf.numberToHclTerraform(struct!.hbInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hb_lost_threshold: {
      value: cdktf.numberToHclTerraform(struct!.hbLostThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_tunnel_sync: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTunnelSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peerip: {
      value: cdktf.stringToHclTerraform(struct!.peerip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peervd: {
      value: cdktf.stringToHclTerraform(struct!.peervd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_add_ipsec_routes: {
      value: cdktf.stringToHclTerraform(struct!.secondaryAddIpsecRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_id: {
      value: cdktf.numberToHclTerraform(struct!.syncId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_intfs_before_sess_sync: {
      value: cdktf.listMapperHcl(systemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncToHclTerraform, true)(struct!.downIntfsBeforeSessSync),
      isBlock: true,
      type: "set",
      storageClassType: "SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncList",
    },
    session_sync_filter: {
      value: systemStandaloneclusterClusterPeerSessionSyncFilterToHclTerraform(struct!.sessionSyncFilter),
      isBlock: true,
      type: "list",
      storageClassType: "SystemStandaloneclusterClusterPeerSessionSyncFilterList",
    },
    syncvd: {
      value: cdktf.listMapperHcl(systemStandaloneclusterClusterPeerSyncvdToHclTerraform, true)(struct!.syncvd),
      isBlock: true,
      type: "set",
      storageClassType: "SystemStandaloneclusterClusterPeerSyncvdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterClusterPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemStandaloneclusterClusterPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hbInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbInterval = this._hbInterval;
    }
    if (this._hbLostThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbLostThreshold = this._hbLostThreshold;
    }
    if (this._ipsecTunnelSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTunnelSync = this._ipsecTunnelSync;
    }
    if (this._peerip !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerip = this._peerip;
    }
    if (this._peervd !== undefined) {
      hasAnyValues = true;
      internalValueResult.peervd = this._peervd;
    }
    if (this._secondaryAddIpsecRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAddIpsecRoutes = this._secondaryAddIpsecRoutes;
    }
    if (this._syncId !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncId = this._syncId;
    }
    if (this._downIntfsBeforeSessSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downIntfsBeforeSessSync = this._downIntfsBeforeSessSync?.internalValue;
    }
    if (this._sessionSyncFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSyncFilter = this._sessionSyncFilter?.internalValue;
    }
    if (this._syncvd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncvd = this._syncvd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterClusterPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hbInterval = undefined;
      this._hbLostThreshold = undefined;
      this._ipsecTunnelSync = undefined;
      this._peerip = undefined;
      this._peervd = undefined;
      this._secondaryAddIpsecRoutes = undefined;
      this._syncId = undefined;
      this._downIntfsBeforeSessSync.internalValue = undefined;
      this._sessionSyncFilter.internalValue = undefined;
      this._syncvd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hbInterval = value.hbInterval;
      this._hbLostThreshold = value.hbLostThreshold;
      this._ipsecTunnelSync = value.ipsecTunnelSync;
      this._peerip = value.peerip;
      this._peervd = value.peervd;
      this._secondaryAddIpsecRoutes = value.secondaryAddIpsecRoutes;
      this._syncId = value.syncId;
      this._downIntfsBeforeSessSync.internalValue = value.downIntfsBeforeSessSync;
      this._sessionSyncFilter.internalValue = value.sessionSyncFilter;
      this._syncvd.internalValue = value.syncvd;
    }
  }

  // hb_interval - computed: true, optional: true, required: false
  private _hbInterval?: number; 
  public get hbInterval() {
    return this.getNumberAttribute('hb_interval');
  }
  public set hbInterval(value: number) {
    this._hbInterval = value;
  }
  public resetHbInterval() {
    this._hbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbIntervalInput() {
    return this._hbInterval;
  }

  // hb_lost_threshold - computed: true, optional: true, required: false
  private _hbLostThreshold?: number; 
  public get hbLostThreshold() {
    return this.getNumberAttribute('hb_lost_threshold');
  }
  public set hbLostThreshold(value: number) {
    this._hbLostThreshold = value;
  }
  public resetHbLostThreshold() {
    this._hbLostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbLostThresholdInput() {
    return this._hbLostThreshold;
  }

  // ipsec_tunnel_sync - computed: true, optional: true, required: false
  private _ipsecTunnelSync?: string; 
  public get ipsecTunnelSync() {
    return this.getStringAttribute('ipsec_tunnel_sync');
  }
  public set ipsecTunnelSync(value: string) {
    this._ipsecTunnelSync = value;
  }
  public resetIpsecTunnelSync() {
    this._ipsecTunnelSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelSyncInput() {
    return this._ipsecTunnelSync;
  }

  // peerip - computed: true, optional: true, required: false
  private _peerip?: string; 
  public get peerip() {
    return this.getStringAttribute('peerip');
  }
  public set peerip(value: string) {
    this._peerip = value;
  }
  public resetPeerip() {
    this._peerip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeripInput() {
    return this._peerip;
  }

  // peervd - computed: true, optional: true, required: false
  private _peervd?: string; 
  public get peervd() {
    return this.getStringAttribute('peervd');
  }
  public set peervd(value: string) {
    this._peervd = value;
  }
  public resetPeervd() {
    this._peervd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peervdInput() {
    return this._peervd;
  }

  // secondary_add_ipsec_routes - computed: true, optional: true, required: false
  private _secondaryAddIpsecRoutes?: string; 
  public get secondaryAddIpsecRoutes() {
    return this.getStringAttribute('secondary_add_ipsec_routes');
  }
  public set secondaryAddIpsecRoutes(value: string) {
    this._secondaryAddIpsecRoutes = value;
  }
  public resetSecondaryAddIpsecRoutes() {
    this._secondaryAddIpsecRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddIpsecRoutesInput() {
    return this._secondaryAddIpsecRoutes;
  }

  // sync_id - computed: false, optional: true, required: false
  private _syncId?: number; 
  public get syncId() {
    return this.getNumberAttribute('sync_id');
  }
  public set syncId(value: number) {
    this._syncId = value;
  }
  public resetSyncId() {
    this._syncId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIdInput() {
    return this._syncId;
  }

  // down_intfs_before_sess_sync - computed: false, optional: true, required: false
  private _downIntfsBeforeSessSync = new SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSyncList(this, "down_intfs_before_sess_sync", true);
  public get downIntfsBeforeSessSync() {
    return this._downIntfsBeforeSessSync;
  }
  public putDownIntfsBeforeSessSync(value: SystemStandaloneclusterClusterPeerDownIntfsBeforeSessSync[] | cdktf.IResolvable) {
    this._downIntfsBeforeSessSync.internalValue = value;
  }
  public resetDownIntfsBeforeSessSync() {
    this._downIntfsBeforeSessSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downIntfsBeforeSessSyncInput() {
    return this._downIntfsBeforeSessSync.internalValue;
  }

  // session_sync_filter - computed: false, optional: true, required: false
  private _sessionSyncFilter = new SystemStandaloneclusterClusterPeerSessionSyncFilterOutputReference(this, "session_sync_filter");
  public get sessionSyncFilter() {
    return this._sessionSyncFilter;
  }
  public putSessionSyncFilter(value: SystemStandaloneclusterClusterPeerSessionSyncFilter) {
    this._sessionSyncFilter.internalValue = value;
  }
  public resetSessionSyncFilter() {
    this._sessionSyncFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSyncFilterInput() {
    return this._sessionSyncFilter.internalValue;
  }

  // syncvd - computed: false, optional: true, required: false
  private _syncvd = new SystemStandaloneclusterClusterPeerSyncvdList(this, "syncvd", true);
  public get syncvd() {
    return this._syncvd;
  }
  public putSyncvd(value: SystemStandaloneclusterClusterPeerSyncvd[] | cdktf.IResolvable) {
    this._syncvd.internalValue = value;
  }
  public resetSyncvd() {
    this._syncvd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncvdInput() {
    return this._syncvd.internalValue;
  }
}

export class SystemStandaloneclusterClusterPeerList extends cdktf.ComplexList {
  public internalValue? : SystemStandaloneclusterClusterPeer[] | cdktf.IResolvable

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
  public get(index: number): SystemStandaloneclusterClusterPeerOutputReference {
    return new SystemStandaloneclusterClusterPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemStandaloneclusterMonitorInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#name SystemStandalonecluster#name}
  */
  readonly name?: string;
}

export function systemStandaloneclusterMonitorInterfaceToTerraform(struct?: SystemStandaloneclusterMonitorInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemStandaloneclusterMonitorInterfaceToHclTerraform(struct?: SystemStandaloneclusterMonitorInterface | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterMonitorInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemStandaloneclusterMonitorInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterMonitorInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SystemStandaloneclusterMonitorInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemStandaloneclusterMonitorInterface[] | cdktf.IResolvable

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
  public get(index: number): SystemStandaloneclusterMonitorInterfaceOutputReference {
    return new SystemStandaloneclusterMonitorInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemStandaloneclusterMonitorPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#id SystemStandalonecluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#prefix SystemStandalonecluster#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#vdom SystemStandalonecluster#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#vrf SystemStandalonecluster#vrf}
  */
  readonly vrf?: number;
}

export function systemStandaloneclusterMonitorPrefixToTerraform(struct?: SystemStandaloneclusterMonitorPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    vdom: cdktf.stringToTerraform(struct!.vdom),
    vrf: cdktf.numberToTerraform(struct!.vrf),
  }
}


export function systemStandaloneclusterMonitorPrefixToHclTerraform(struct?: SystemStandaloneclusterMonitorPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.numberToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterMonitorPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemStandaloneclusterMonitorPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterMonitorPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._vdom = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._vdom = value.vdom;
      this._vrf = value.vrf;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class SystemStandaloneclusterMonitorPrefixList extends cdktf.ComplexList {
  public internalValue? : SystemStandaloneclusterMonitorPrefix[] | cdktf.IResolvable

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
  public get(index: number): SystemStandaloneclusterMonitorPrefixOutputReference {
    return new SystemStandaloneclusterMonitorPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemStandaloneclusterPingsvrMonitorInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#name SystemStandalonecluster#name}
  */
  readonly name?: string;
}

export function systemStandaloneclusterPingsvrMonitorInterfaceToTerraform(struct?: SystemStandaloneclusterPingsvrMonitorInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemStandaloneclusterPingsvrMonitorInterfaceToHclTerraform(struct?: SystemStandaloneclusterPingsvrMonitorInterface | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemStandaloneclusterPingsvrMonitorInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemStandaloneclusterPingsvrMonitorInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemStandaloneclusterPingsvrMonitorInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SystemStandaloneclusterPingsvrMonitorInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemStandaloneclusterPingsvrMonitorInterface[] | cdktf.IResolvable

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
  public get(index: number): SystemStandaloneclusterPingsvrMonitorInterfaceOutputReference {
    return new SystemStandaloneclusterPingsvrMonitorInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster fortios_system_standalonecluster}
*/
export class SystemStandalonecluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_standalonecluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemStandalonecluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemStandalonecluster to import
  * @param importFromId The id of the existing SystemStandalonecluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemStandalonecluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_standalonecluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_standalonecluster fortios_system_standalonecluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemStandaloneclusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemStandaloneclusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_standalonecluster',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asymmetricTrafficControl = config.asymmetricTrafficControl;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encryption = config.encryption;
    this._getAllTables = config.fetchAllTables;
    this._groupMemberId = config.groupMemberId;
    this._helperTrafficBounce = config.helperTrafficBounce;
    this._id = config.id;
    this._layer2Connection = config.layer2Connection;
    this._psksecret = config.psksecret;
    this._sessionSyncDev = config.sessionSyncDev;
    this._standaloneGroupId = config.standaloneGroupId;
    this._utmTrafficBounce = config.utmTrafficBounce;
    this._vdomparam = config.vdomparam;
    this._clusterPeer.internalValue = config.clusterPeer;
    this._monitorInterface.internalValue = config.monitorInterface;
    this._monitorPrefix.internalValue = config.monitorPrefix;
    this._pingsvrMonitorInterface.internalValue = config.pingsvrMonitorInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asymmetric_traffic_control - computed: true, optional: true, required: false
  private _asymmetricTrafficControl?: string; 
  public get asymmetricTrafficControl() {
    return this.getStringAttribute('asymmetric_traffic_control');
  }
  public set asymmetricTrafficControl(value: string) {
    this._asymmetricTrafficControl = value;
  }
  public resetAsymmetricTrafficControl() {
    this._asymmetricTrafficControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricTrafficControlInput() {
    return this._asymmetricTrafficControl;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // group_member_id - computed: false, optional: true, required: false
  private _groupMemberId?: number; 
  public get groupMemberId() {
    return this.getNumberAttribute('group_member_id');
  }
  public set groupMemberId(value: number) {
    this._groupMemberId = value;
  }
  public resetGroupMemberId() {
    this._groupMemberId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberIdInput() {
    return this._groupMemberId;
  }

  // helper_traffic_bounce - computed: true, optional: true, required: false
  private _helperTrafficBounce?: string; 
  public get helperTrafficBounce() {
    return this.getStringAttribute('helper_traffic_bounce');
  }
  public set helperTrafficBounce(value: string) {
    this._helperTrafficBounce = value;
  }
  public resetHelperTrafficBounce() {
    this._helperTrafficBounce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperTrafficBounceInput() {
    return this._helperTrafficBounce;
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

  // layer2_connection - computed: true, optional: true, required: false
  private _layer2Connection?: string; 
  public get layer2Connection() {
    return this.getStringAttribute('layer2_connection');
  }
  public set layer2Connection(value: string) {
    this._layer2Connection = value;
  }
  public resetLayer2Connection() {
    this._layer2Connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2ConnectionInput() {
    return this._layer2Connection;
  }

  // psksecret - computed: false, optional: true, required: false
  private _psksecret?: string; 
  public get psksecret() {
    return this.getStringAttribute('psksecret');
  }
  public set psksecret(value: string) {
    this._psksecret = value;
  }
  public resetPsksecret() {
    this._psksecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // session_sync_dev - computed: false, optional: true, required: false
  private _sessionSyncDev?: string; 
  public get sessionSyncDev() {
    return this.getStringAttribute('session_sync_dev');
  }
  public set sessionSyncDev(value: string) {
    this._sessionSyncDev = value;
  }
  public resetSessionSyncDev() {
    this._sessionSyncDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSyncDevInput() {
    return this._sessionSyncDev;
  }

  // standalone_group_id - computed: false, optional: true, required: false
  private _standaloneGroupId?: number; 
  public get standaloneGroupId() {
    return this.getNumberAttribute('standalone_group_id');
  }
  public set standaloneGroupId(value: number) {
    this._standaloneGroupId = value;
  }
  public resetStandaloneGroupId() {
    this._standaloneGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneGroupIdInput() {
    return this._standaloneGroupId;
  }

  // utm_traffic_bounce - computed: true, optional: true, required: false
  private _utmTrafficBounce?: string; 
  public get utmTrafficBounce() {
    return this.getStringAttribute('utm_traffic_bounce');
  }
  public set utmTrafficBounce(value: string) {
    this._utmTrafficBounce = value;
  }
  public resetUtmTrafficBounce() {
    this._utmTrafficBounce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmTrafficBounceInput() {
    return this._utmTrafficBounce;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // cluster_peer - computed: false, optional: true, required: false
  private _clusterPeer = new SystemStandaloneclusterClusterPeerList(this, "cluster_peer", false);
  public get clusterPeer() {
    return this._clusterPeer;
  }
  public putClusterPeer(value: SystemStandaloneclusterClusterPeer[] | cdktf.IResolvable) {
    this._clusterPeer.internalValue = value;
  }
  public resetClusterPeer() {
    this._clusterPeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPeerInput() {
    return this._clusterPeer.internalValue;
  }

  // monitor_interface - computed: false, optional: true, required: false
  private _monitorInterface = new SystemStandaloneclusterMonitorInterfaceList(this, "monitor_interface", true);
  public get monitorInterface() {
    return this._monitorInterface;
  }
  public putMonitorInterface(value: SystemStandaloneclusterMonitorInterface[] | cdktf.IResolvable) {
    this._monitorInterface.internalValue = value;
  }
  public resetMonitorInterface() {
    this._monitorInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInterfaceInput() {
    return this._monitorInterface.internalValue;
  }

  // monitor_prefix - computed: false, optional: true, required: false
  private _monitorPrefix = new SystemStandaloneclusterMonitorPrefixList(this, "monitor_prefix", false);
  public get monitorPrefix() {
    return this._monitorPrefix;
  }
  public putMonitorPrefix(value: SystemStandaloneclusterMonitorPrefix[] | cdktf.IResolvable) {
    this._monitorPrefix.internalValue = value;
  }
  public resetMonitorPrefix() {
    this._monitorPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPrefixInput() {
    return this._monitorPrefix.internalValue;
  }

  // pingsvr_monitor_interface - computed: false, optional: true, required: false
  private _pingsvrMonitorInterface = new SystemStandaloneclusterPingsvrMonitorInterfaceList(this, "pingsvr_monitor_interface", true);
  public get pingsvrMonitorInterface() {
    return this._pingsvrMonitorInterface;
  }
  public putPingsvrMonitorInterface(value: SystemStandaloneclusterPingsvrMonitorInterface[] | cdktf.IResolvable) {
    this._pingsvrMonitorInterface.internalValue = value;
  }
  public resetPingsvrMonitorInterface() {
    this._pingsvrMonitorInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingsvrMonitorInterfaceInput() {
    return this._pingsvrMonitorInterface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asymmetric_traffic_control: cdktf.stringToTerraform(this._asymmetricTrafficControl),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      encryption: cdktf.stringToTerraform(this._encryption),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      group_member_id: cdktf.numberToTerraform(this._groupMemberId),
      helper_traffic_bounce: cdktf.stringToTerraform(this._helperTrafficBounce),
      id: cdktf.stringToTerraform(this._id),
      layer2_connection: cdktf.stringToTerraform(this._layer2Connection),
      psksecret: cdktf.stringToTerraform(this._psksecret),
      session_sync_dev: cdktf.stringToTerraform(this._sessionSyncDev),
      standalone_group_id: cdktf.numberToTerraform(this._standaloneGroupId),
      utm_traffic_bounce: cdktf.stringToTerraform(this._utmTrafficBounce),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      cluster_peer: cdktf.listMapper(systemStandaloneclusterClusterPeerToTerraform, true)(this._clusterPeer.internalValue),
      monitor_interface: cdktf.listMapper(systemStandaloneclusterMonitorInterfaceToTerraform, true)(this._monitorInterface.internalValue),
      monitor_prefix: cdktf.listMapper(systemStandaloneclusterMonitorPrefixToTerraform, true)(this._monitorPrefix.internalValue),
      pingsvr_monitor_interface: cdktf.listMapper(systemStandaloneclusterPingsvrMonitorInterfaceToTerraform, true)(this._pingsvrMonitorInterface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asymmetric_traffic_control: {
        value: cdktf.stringToHclTerraform(this._asymmetricTrafficControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_id: {
        value: cdktf.numberToHclTerraform(this._groupMemberId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      helper_traffic_bounce: {
        value: cdktf.stringToHclTerraform(this._helperTrafficBounce),
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
      layer2_connection: {
        value: cdktf.stringToHclTerraform(this._layer2Connection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret: {
        value: cdktf.stringToHclTerraform(this._psksecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_sync_dev: {
        value: cdktf.stringToHclTerraform(this._sessionSyncDev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standalone_group_id: {
        value: cdktf.numberToHclTerraform(this._standaloneGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      utm_traffic_bounce: {
        value: cdktf.stringToHclTerraform(this._utmTrafficBounce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_peer: {
        value: cdktf.listMapperHcl(systemStandaloneclusterClusterPeerToHclTerraform, true)(this._clusterPeer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemStandaloneclusterClusterPeerList",
      },
      monitor_interface: {
        value: cdktf.listMapperHcl(systemStandaloneclusterMonitorInterfaceToHclTerraform, true)(this._monitorInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemStandaloneclusterMonitorInterfaceList",
      },
      monitor_prefix: {
        value: cdktf.listMapperHcl(systemStandaloneclusterMonitorPrefixToHclTerraform, true)(this._monitorPrefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemStandaloneclusterMonitorPrefixList",
      },
      pingsvr_monitor_interface: {
        value: cdktf.listMapperHcl(systemStandaloneclusterPingsvrMonitorInterfaceToHclTerraform, true)(this._pingsvrMonitorInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemStandaloneclusterPingsvrMonitorInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
