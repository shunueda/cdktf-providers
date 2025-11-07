// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemClustersyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#device_name SystemClustersync#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#down_intfs_before_sess_sync SystemClustersync#down_intfs_before_sess_sync}
  */
  readonly downIntfsBeforeSessSync?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#hb_interval SystemClustersync#hb_interval}
  */
  readonly hbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#hb_lost_threshold SystemClustersync#hb_lost_threshold}
  */
  readonly hbLostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#id SystemClustersync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#ike_heartbeat_interval SystemClustersync#ike_heartbeat_interval}
  */
  readonly ikeHeartbeatInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#ike_monitor SystemClustersync#ike_monitor}
  */
  readonly ikeMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#ike_monitor_interval SystemClustersync#ike_monitor_interval}
  */
  readonly ikeMonitorInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#ike_seqjump_speed SystemClustersync#ike_seqjump_speed}
  */
  readonly ikeSeqjumpSpeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#ike_use_rfc6311 SystemClustersync#ike_use_rfc6311}
  */
  readonly ikeUseRfc6311?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#ipsec_tunnel_sync SystemClustersync#ipsec_tunnel_sync}
  */
  readonly ipsecTunnelSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#peerip SystemClustersync#peerip}
  */
  readonly peerip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#peervd SystemClustersync#peervd}
  */
  readonly peervd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#secondary_add_ipsec_routes SystemClustersync#secondary_add_ipsec_routes}
  */
  readonly secondaryAddIpsecRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#slave_add_ike_routes SystemClustersync#slave_add_ike_routes}
  */
  readonly slaveAddIkeRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#sync_id SystemClustersync#sync_id}
  */
  readonly syncId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#syncvd SystemClustersync#syncvd}
  */
  readonly syncvd?: string[];
  /**
  * session_sync_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#session_sync_filter SystemClustersync#session_sync_filter}
  */
  readonly sessionSyncFilter?: SystemClustersyncSessionSyncFilter;
}
export interface SystemClustersyncSessionSyncFilterCustomService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#dst_port_range SystemClustersync#dst_port_range}
  */
  readonly dstPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#id SystemClustersync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#src_port_range SystemClustersync#src_port_range}
  */
  readonly srcPortRange?: string;
}

export function systemClustersyncSessionSyncFilterCustomServiceToTerraform(struct?: SystemClustersyncSessionSyncFilterCustomService | cdktf.IResolvable): any {
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


export function systemClustersyncSessionSyncFilterCustomServiceToHclTerraform(struct?: SystemClustersyncSessionSyncFilterCustomService | cdktf.IResolvable): any {
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

export class SystemClustersyncSessionSyncFilterCustomServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemClustersyncSessionSyncFilterCustomService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemClustersyncSessionSyncFilterCustomService | cdktf.IResolvable | undefined) {
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

export class SystemClustersyncSessionSyncFilterCustomServiceList extends cdktf.ComplexList {
  public internalValue? : SystemClustersyncSessionSyncFilterCustomService[] | cdktf.IResolvable

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
  public get(index: number): SystemClustersyncSessionSyncFilterCustomServiceOutputReference {
    return new SystemClustersyncSessionSyncFilterCustomServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemClustersyncSessionSyncFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#dstaddr SystemClustersync#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#dstaddr6 SystemClustersync#dstaddr6}
  */
  readonly dstaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#dstintf SystemClustersync#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#srcaddr SystemClustersync#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#srcaddr6 SystemClustersync#srcaddr6}
  */
  readonly srcaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#srcintf SystemClustersync#srcintf}
  */
  readonly srcintf?: string;
  /**
  * custom_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#custom_service SystemClustersync#custom_service}
  */
  readonly customService?: SystemClustersyncSessionSyncFilterCustomService[] | cdktf.IResolvable;
}

export function systemClustersyncSessionSyncFilterToTerraform(struct?: SystemClustersyncSessionSyncFilterOutputReference | SystemClustersyncSessionSyncFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstaddr),
    dstaddr6: cdktf.stringToTerraform(struct!.dstaddr6),
    dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstintf),
    srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcaddr),
    srcaddr6: cdktf.stringToTerraform(struct!.srcaddr6),
    srcintf: cdktf.stringToTerraform(struct!.srcintf),
    custom_service: cdktf.listMapper(systemClustersyncSessionSyncFilterCustomServiceToTerraform, true)(struct!.customService),
  }
}


export function systemClustersyncSessionSyncFilterToHclTerraform(struct?: SystemClustersyncSessionSyncFilterOutputReference | SystemClustersyncSessionSyncFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dstaddr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstaddr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dstaddr6: {
      value: cdktf.stringToHclTerraform(struct!.dstaddr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstintf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstintf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    srcaddr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcaddr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
      value: cdktf.listMapperHcl(systemClustersyncSessionSyncFilterCustomServiceToHclTerraform, true)(struct!.customService),
      isBlock: true,
      type: "list",
      storageClassType: "SystemClustersyncSessionSyncFilterCustomServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemClustersyncSessionSyncFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemClustersyncSessionSyncFilter | undefined {
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

  public set internalValue(value: SystemClustersyncSessionSyncFilter | undefined) {
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
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return this.getListAttribute('dstaddr');
  }
  public set dstaddr(value: string[]) {
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

  // dstintf - computed: true, optional: true, required: false
  private _dstintf?: string[]; 
  public get dstintf() {
    return cdktf.Fn.tolist(this.getListAttribute('dstintf'));
  }
  public set dstintf(value: string[]) {
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
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return this.getListAttribute('srcaddr');
  }
  public set srcaddr(value: string[]) {
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
  private _customService = new SystemClustersyncSessionSyncFilterCustomServiceList(this, "custom_service", false);
  public get customService() {
    return this._customService;
  }
  public putCustomService(value: SystemClustersyncSessionSyncFilterCustomService[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync fmgdevice_system_clustersync}
*/
export class SystemClustersync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_clustersync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemClustersync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemClustersync to import
  * @param importFromId The id of the existing SystemClustersync that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemClustersync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_clustersync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync fmgdevice_system_clustersync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemClustersyncConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemClustersyncConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_clustersync',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._downIntfsBeforeSessSync = config.downIntfsBeforeSessSync;
    this._hbInterval = config.hbInterval;
    this._hbLostThreshold = config.hbLostThreshold;
    this._id = config.id;
    this._ikeHeartbeatInterval = config.ikeHeartbeatInterval;
    this._ikeMonitor = config.ikeMonitor;
    this._ikeMonitorInterval = config.ikeMonitorInterval;
    this._ikeSeqjumpSpeed = config.ikeSeqjumpSpeed;
    this._ikeUseRfc6311 = config.ikeUseRfc6311;
    this._ipsecTunnelSync = config.ipsecTunnelSync;
    this._peerip = config.peerip;
    this._peervd = config.peervd;
    this._secondaryAddIpsecRoutes = config.secondaryAddIpsecRoutes;
    this._slaveAddIkeRoutes = config.slaveAddIkeRoutes;
    this._syncId = config.syncId;
    this._syncvd = config.syncvd;
    this._sessionSyncFilter.internalValue = config.sessionSyncFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // down_intfs_before_sess_sync - computed: true, optional: true, required: false
  private _downIntfsBeforeSessSync?: string[]; 
  public get downIntfsBeforeSessSync() {
    return cdktf.Fn.tolist(this.getListAttribute('down_intfs_before_sess_sync'));
  }
  public set downIntfsBeforeSessSync(value: string[]) {
    this._downIntfsBeforeSessSync = value;
  }
  public resetDownIntfsBeforeSessSync() {
    this._downIntfsBeforeSessSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downIntfsBeforeSessSyncInput() {
    return this._downIntfsBeforeSessSync;
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

  // ike_heartbeat_interval - computed: false, optional: true, required: false
  private _ikeHeartbeatInterval?: number; 
  public get ikeHeartbeatInterval() {
    return this.getNumberAttribute('ike_heartbeat_interval');
  }
  public set ikeHeartbeatInterval(value: number) {
    this._ikeHeartbeatInterval = value;
  }
  public resetIkeHeartbeatInterval() {
    this._ikeHeartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeHeartbeatIntervalInput() {
    return this._ikeHeartbeatInterval;
  }

  // ike_monitor - computed: false, optional: true, required: false
  private _ikeMonitor?: string; 
  public get ikeMonitor() {
    return this.getStringAttribute('ike_monitor');
  }
  public set ikeMonitor(value: string) {
    this._ikeMonitor = value;
  }
  public resetIkeMonitor() {
    this._ikeMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeMonitorInput() {
    return this._ikeMonitor;
  }

  // ike_monitor_interval - computed: false, optional: true, required: false
  private _ikeMonitorInterval?: number; 
  public get ikeMonitorInterval() {
    return this.getNumberAttribute('ike_monitor_interval');
  }
  public set ikeMonitorInterval(value: number) {
    this._ikeMonitorInterval = value;
  }
  public resetIkeMonitorInterval() {
    this._ikeMonitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeMonitorIntervalInput() {
    return this._ikeMonitorInterval;
  }

  // ike_seqjump_speed - computed: false, optional: true, required: false
  private _ikeSeqjumpSpeed?: number; 
  public get ikeSeqjumpSpeed() {
    return this.getNumberAttribute('ike_seqjump_speed');
  }
  public set ikeSeqjumpSpeed(value: number) {
    this._ikeSeqjumpSpeed = value;
  }
  public resetIkeSeqjumpSpeed() {
    this._ikeSeqjumpSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSeqjumpSpeedInput() {
    return this._ikeSeqjumpSpeed;
  }

  // ike_use_rfc6311 - computed: false, optional: true, required: false
  private _ikeUseRfc6311?: string; 
  public get ikeUseRfc6311() {
    return this.getStringAttribute('ike_use_rfc6311');
  }
  public set ikeUseRfc6311(value: string) {
    this._ikeUseRfc6311 = value;
  }
  public resetIkeUseRfc6311() {
    this._ikeUseRfc6311 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeUseRfc6311Input() {
    return this._ikeUseRfc6311;
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
  private _peervd?: string[]; 
  public get peervd() {
    return cdktf.Fn.tolist(this.getListAttribute('peervd'));
  }
  public set peervd(value: string[]) {
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

  // slave_add_ike_routes - computed: false, optional: true, required: false
  private _slaveAddIkeRoutes?: string; 
  public get slaveAddIkeRoutes() {
    return this.getStringAttribute('slave_add_ike_routes');
  }
  public set slaveAddIkeRoutes(value: string) {
    this._slaveAddIkeRoutes = value;
  }
  public resetSlaveAddIkeRoutes() {
    this._slaveAddIkeRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveAddIkeRoutesInput() {
    return this._slaveAddIkeRoutes;
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

  // syncvd - computed: true, optional: true, required: false
  private _syncvd?: string[]; 
  public get syncvd() {
    return cdktf.Fn.tolist(this.getListAttribute('syncvd'));
  }
  public set syncvd(value: string[]) {
    this._syncvd = value;
  }
  public resetSyncvd() {
    this._syncvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncvdInput() {
    return this._syncvd;
  }

  // session_sync_filter - computed: false, optional: true, required: false
  private _sessionSyncFilter = new SystemClustersyncSessionSyncFilterOutputReference(this, "session_sync_filter");
  public get sessionSyncFilter() {
    return this._sessionSyncFilter;
  }
  public putSessionSyncFilter(value: SystemClustersyncSessionSyncFilter) {
    this._sessionSyncFilter.internalValue = value;
  }
  public resetSessionSyncFilter() {
    this._sessionSyncFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSyncFilterInput() {
    return this._sessionSyncFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      down_intfs_before_sess_sync: cdktf.listMapper(cdktf.stringToTerraform, false)(this._downIntfsBeforeSessSync),
      hb_interval: cdktf.numberToTerraform(this._hbInterval),
      hb_lost_threshold: cdktf.numberToTerraform(this._hbLostThreshold),
      id: cdktf.stringToTerraform(this._id),
      ike_heartbeat_interval: cdktf.numberToTerraform(this._ikeHeartbeatInterval),
      ike_monitor: cdktf.stringToTerraform(this._ikeMonitor),
      ike_monitor_interval: cdktf.numberToTerraform(this._ikeMonitorInterval),
      ike_seqjump_speed: cdktf.numberToTerraform(this._ikeSeqjumpSpeed),
      ike_use_rfc6311: cdktf.stringToTerraform(this._ikeUseRfc6311),
      ipsec_tunnel_sync: cdktf.stringToTerraform(this._ipsecTunnelSync),
      peerip: cdktf.stringToTerraform(this._peerip),
      peervd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peervd),
      secondary_add_ipsec_routes: cdktf.stringToTerraform(this._secondaryAddIpsecRoutes),
      slave_add_ike_routes: cdktf.stringToTerraform(this._slaveAddIkeRoutes),
      sync_id: cdktf.numberToTerraform(this._syncId),
      syncvd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syncvd),
      session_sync_filter: systemClustersyncSessionSyncFilterToTerraform(this._sessionSyncFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      down_intfs_before_sess_sync: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._downIntfsBeforeSessSync),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hb_interval: {
        value: cdktf.numberToHclTerraform(this._hbInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_lost_threshold: {
        value: cdktf.numberToHclTerraform(this._hbLostThreshold),
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
      ike_heartbeat_interval: {
        value: cdktf.numberToHclTerraform(this._ikeHeartbeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_monitor: {
        value: cdktf.stringToHclTerraform(this._ikeMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_monitor_interval: {
        value: cdktf.numberToHclTerraform(this._ikeMonitorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_seqjump_speed: {
        value: cdktf.numberToHclTerraform(this._ikeSeqjumpSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_use_rfc6311: {
        value: cdktf.stringToHclTerraform(this._ikeUseRfc6311),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_tunnel_sync: {
        value: cdktf.stringToHclTerraform(this._ipsecTunnelSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peerip: {
        value: cdktf.stringToHclTerraform(this._peerip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peervd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peervd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secondary_add_ipsec_routes: {
        value: cdktf.stringToHclTerraform(this._secondaryAddIpsecRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slave_add_ike_routes: {
        value: cdktf.stringToHclTerraform(this._slaveAddIkeRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_id: {
        value: cdktf.numberToHclTerraform(this._syncId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syncvd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syncvd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_sync_filter: {
        value: systemClustersyncSessionSyncFilterToHclTerraform(this._sessionSyncFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemClustersyncSessionSyncFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
