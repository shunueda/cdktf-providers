// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_clustersync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemClustersyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_clustersync#id DataFortiosSystemClustersync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_clustersync#sync_id DataFortiosSystemClustersync#sync_id}
  */
  readonly syncId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_clustersync#vdomparam DataFortiosSystemClustersync#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemClustersyncDownIntfsBeforeSessSync {
}

export function dataFortiosSystemClustersyncDownIntfsBeforeSessSyncToTerraform(struct?: DataFortiosSystemClustersyncDownIntfsBeforeSessSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemClustersyncDownIntfsBeforeSessSyncToHclTerraform(struct?: DataFortiosSystemClustersyncDownIntfsBeforeSessSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemClustersyncDownIntfsBeforeSessSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemClustersyncDownIntfsBeforeSessSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemClustersyncDownIntfsBeforeSessSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemClustersyncDownIntfsBeforeSessSyncList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemClustersyncDownIntfsBeforeSessSyncOutputReference {
    return new DataFortiosSystemClustersyncDownIntfsBeforeSessSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemClustersyncSessionSyncFilterCustomService {
}

export function dataFortiosSystemClustersyncSessionSyncFilterCustomServiceToTerraform(struct?: DataFortiosSystemClustersyncSessionSyncFilterCustomService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemClustersyncSessionSyncFilterCustomServiceToHclTerraform(struct?: DataFortiosSystemClustersyncSessionSyncFilterCustomService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemClustersyncSessionSyncFilterCustomServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemClustersyncSessionSyncFilterCustomService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemClustersyncSessionSyncFilterCustomService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dst_port_range - computed: true, optional: false, required: false
  public get dstPortRange() {
    return this.getStringAttribute('dst_port_range');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // src_port_range - computed: true, optional: false, required: false
  public get srcPortRange() {
    return this.getStringAttribute('src_port_range');
  }
}

export class DataFortiosSystemClustersyncSessionSyncFilterCustomServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemClustersyncSessionSyncFilterCustomServiceOutputReference {
    return new DataFortiosSystemClustersyncSessionSyncFilterCustomServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemClustersyncSessionSyncFilter {
}

export function dataFortiosSystemClustersyncSessionSyncFilterToTerraform(struct?: DataFortiosSystemClustersyncSessionSyncFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemClustersyncSessionSyncFilterToHclTerraform(struct?: DataFortiosSystemClustersyncSessionSyncFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemClustersyncSessionSyncFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemClustersyncSessionSyncFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemClustersyncSessionSyncFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_service - computed: true, optional: false, required: false
  private _customService = new DataFortiosSystemClustersyncSessionSyncFilterCustomServiceList(this, "custom_service", false);
  public get customService() {
    return this._customService;
  }

  // dstaddr - computed: true, optional: false, required: false
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }

  // dstaddr6 - computed: true, optional: false, required: false
  public get dstaddr6() {
    return this.getStringAttribute('dstaddr6');
  }

  // dstintf - computed: true, optional: false, required: false
  public get dstintf() {
    return this.getStringAttribute('dstintf');
  }

  // srcaddr - computed: true, optional: false, required: false
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }

  // srcaddr6 - computed: true, optional: false, required: false
  public get srcaddr6() {
    return this.getStringAttribute('srcaddr6');
  }

  // srcintf - computed: true, optional: false, required: false
  public get srcintf() {
    return this.getStringAttribute('srcintf');
  }
}

export class DataFortiosSystemClustersyncSessionSyncFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemClustersyncSessionSyncFilterOutputReference {
    return new DataFortiosSystemClustersyncSessionSyncFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemClustersyncSyncvd {
}

export function dataFortiosSystemClustersyncSyncvdToTerraform(struct?: DataFortiosSystemClustersyncSyncvd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemClustersyncSyncvdToHclTerraform(struct?: DataFortiosSystemClustersyncSyncvd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemClustersyncSyncvdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemClustersyncSyncvd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemClustersyncSyncvd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemClustersyncSyncvdList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemClustersyncSyncvdOutputReference {
    return new DataFortiosSystemClustersyncSyncvdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_clustersync fortios_system_clustersync}
*/
export class DataFortiosSystemClustersync extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_clustersync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemClustersync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemClustersync to import
  * @param importFromId The id of the existing DataFortiosSystemClustersync that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_clustersync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemClustersync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_clustersync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_clustersync fortios_system_clustersync} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemClustersyncConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemClustersyncConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_clustersync',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._syncId = config.syncId;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // down_intfs_before_sess_sync - computed: true, optional: false, required: false
  private _downIntfsBeforeSessSync = new DataFortiosSystemClustersyncDownIntfsBeforeSessSyncList(this, "down_intfs_before_sess_sync", false);
  public get downIntfsBeforeSessSync() {
    return this._downIntfsBeforeSessSync;
  }

  // hb_interval - computed: true, optional: false, required: false
  public get hbInterval() {
    return this.getNumberAttribute('hb_interval');
  }

  // hb_lost_threshold - computed: true, optional: false, required: false
  public get hbLostThreshold() {
    return this.getNumberAttribute('hb_lost_threshold');
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

  // ike_heartbeat_interval - computed: true, optional: false, required: false
  public get ikeHeartbeatInterval() {
    return this.getNumberAttribute('ike_heartbeat_interval');
  }

  // ike_monitor - computed: true, optional: false, required: false
  public get ikeMonitor() {
    return this.getStringAttribute('ike_monitor');
  }

  // ike_monitor_interval - computed: true, optional: false, required: false
  public get ikeMonitorInterval() {
    return this.getNumberAttribute('ike_monitor_interval');
  }

  // ipsec_tunnel_sync - computed: true, optional: false, required: false
  public get ipsecTunnelSync() {
    return this.getStringAttribute('ipsec_tunnel_sync');
  }

  // peerip - computed: true, optional: false, required: false
  public get peerip() {
    return this.getStringAttribute('peerip');
  }

  // peervd - computed: true, optional: false, required: false
  public get peervd() {
    return this.getStringAttribute('peervd');
  }

  // secondary_add_ipsec_routes - computed: true, optional: false, required: false
  public get secondaryAddIpsecRoutes() {
    return this.getStringAttribute('secondary_add_ipsec_routes');
  }

  // session_sync_filter - computed: true, optional: false, required: false
  private _sessionSyncFilter = new DataFortiosSystemClustersyncSessionSyncFilterList(this, "session_sync_filter", false);
  public get sessionSyncFilter() {
    return this._sessionSyncFilter;
  }

  // slave_add_ike_routes - computed: true, optional: false, required: false
  public get slaveAddIkeRoutes() {
    return this.getStringAttribute('slave_add_ike_routes');
  }

  // sync_id - computed: false, optional: false, required: true
  private _syncId?: number; 
  public get syncId() {
    return this.getNumberAttribute('sync_id');
  }
  public set syncId(value: number) {
    this._syncId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIdInput() {
    return this._syncId;
  }

  // syncvd - computed: true, optional: false, required: false
  private _syncvd = new DataFortiosSystemClustersyncSyncvdList(this, "syncvd", false);
  public get syncvd() {
    return this._syncvd;
  }

  // vdomparam - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sync_id: cdktf.numberToTerraform(this._syncId),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      sync_id: {
        value: cdktf.numberToHclTerraform(this._syncId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
