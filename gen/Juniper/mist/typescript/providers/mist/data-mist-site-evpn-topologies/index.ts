// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_evpn_topologies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistSiteEvpnTopologiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_evpn_topologies#site_id DataMistSiteEvpnTopologies#site_id}
  */
  readonly siteId: string;
}
export interface DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlay {
}

export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlayToTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlayToHclTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as - computed: true, optional: false, required: false
  public get as() {
    return this.getNumberAttribute('as');
  }
}
export interface DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlay {
}

export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlayToTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlayToHclTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_base - computed: true, optional: false, required: false
  public get asBase() {
    return this.getNumberAttribute('as_base');
  }

  // routed_id_prefix - computed: true, optional: false, required: false
  public get routedIdPrefix() {
    return this.getStringAttribute('routed_id_prefix');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // use_ipv6 - computed: true, optional: false, required: false
  public get useIpv6() {
    return this.getBooleanAttribute('use_ipv6');
  }
}
export interface DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstances {
}

export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstancesToTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstancesToHclTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return this.getListAttribute('networks');
  }
}

export class DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstancesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstancesOutputReference {
    return new DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstancesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptions {
}

export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsToTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsToHclTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_loopback_subnet - computed: true, optional: false, required: false
  public get autoLoopbackSubnet() {
    return this.getStringAttribute('auto_loopback_subnet');
  }

  // auto_loopback_subnet6 - computed: true, optional: false, required: false
  public get autoLoopbackSubnet6() {
    return this.getStringAttribute('auto_loopback_subnet6');
  }

  // auto_router_id_subnet - computed: true, optional: false, required: false
  public get autoRouterIdSubnet() {
    return this.getStringAttribute('auto_router_id_subnet');
  }

  // auto_router_id_subnet6 - computed: true, optional: false, required: false
  public get autoRouterIdSubnet6() {
    return this.getStringAttribute('auto_router_id_subnet6');
  }

  // core_as_border - computed: true, optional: false, required: false
  public get coreAsBorder() {
    return this.getBooleanAttribute('core_as_border');
  }

  // overlay - computed: true, optional: false, required: false
  private _overlay = new DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOverlayOutputReference(this, "overlay");
  public get overlay() {
    return this._overlay;
  }

  // per_vlan_vga_v4_mac - computed: true, optional: false, required: false
  public get perVlanVgaV4Mac() {
    return this.getBooleanAttribute('per_vlan_vga_v4_mac');
  }

  // per_vlan_vga_v6_mac - computed: true, optional: false, required: false
  public get perVlanVgaV6Mac() {
    return this.getBooleanAttribute('per_vlan_vga_v6_mac');
  }

  // routed_at - computed: true, optional: false, required: false
  public get routedAt() {
    return this.getStringAttribute('routed_at');
  }

  // underlay - computed: true, optional: false, required: false
  private _underlay = new DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsUnderlayOutputReference(this, "underlay");
  public get underlay() {
    return this._underlay;
  }

  // vs_instances - computed: true, optional: false, required: false
  private _vsInstances = new DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsVsInstancesMap(this, "vs_instances");
  public get vsInstances() {
    return this._vsInstances;
  }
}
export interface DataMistSiteEvpnTopologiesSiteEvpnTopologies {
}

export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesToTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistSiteEvpnTopologiesSiteEvpnTopologiesToHclTerraform(struct?: DataMistSiteEvpnTopologiesSiteEvpnTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistSiteEvpnTopologiesSiteEvpnTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistSiteEvpnTopologiesSiteEvpnTopologies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistSiteEvpnTopologiesSiteEvpnTopologies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // evpn_options - computed: true, optional: false, required: false
  private _evpnOptions = new DataMistSiteEvpnTopologiesSiteEvpnTopologiesEvpnOptionsOutputReference(this, "evpn_options");
  public get evpnOptions() {
    return this._evpnOptions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pod_names - computed: true, optional: false, required: false
  private _podNames = new cdktf.StringMap(this, "pod_names");
  public get podNames() {
    return this._podNames;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
}

export class DataMistSiteEvpnTopologiesSiteEvpnTopologiesList extends cdktf.ComplexList {

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
  public get(index: number): DataMistSiteEvpnTopologiesSiteEvpnTopologiesOutputReference {
    return new DataMistSiteEvpnTopologiesSiteEvpnTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_evpn_topologies mist_site_evpn_topologies}
*/
export class DataMistSiteEvpnTopologies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_evpn_topologies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistSiteEvpnTopologies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistSiteEvpnTopologies to import
  * @param importFromId The id of the existing DataMistSiteEvpnTopologies that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_evpn_topologies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistSiteEvpnTopologies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_evpn_topologies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/data-sources/site_evpn_topologies mist_site_evpn_topologies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistSiteEvpnTopologiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistSiteEvpnTopologiesConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_evpn_topologies',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // site_evpn_topologies - computed: true, optional: false, required: false
  private _siteEvpnTopologies = new DataMistSiteEvpnTopologiesSiteEvpnTopologiesList(this, "site_evpn_topologies", true);
  public get siteEvpnTopologies() {
    return this._siteEvpnTopologies;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
