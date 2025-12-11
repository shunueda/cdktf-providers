// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/evpn_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeEvpnInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/evpn_instance#device DataIosxeEvpnInstance#device}
  */
  readonly device?: string;
  /**
  * evpn instance number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/evpn_instance#evpn_instance_num DataIosxeEvpnInstance#evpn_instance_num}
  */
  readonly evpnInstanceNum: number;
}
export interface DataIosxeEvpnInstanceVlanBasedRouteTargetExports {
}

export function dataIosxeEvpnInstanceVlanBasedRouteTargetExportsToTerraform(struct?: DataIosxeEvpnInstanceVlanBasedRouteTargetExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeEvpnInstanceVlanBasedRouteTargetExportsToHclTerraform(struct?: DataIosxeEvpnInstanceVlanBasedRouteTargetExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeEvpnInstanceVlanBasedRouteTargetExportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeEvpnInstanceVlanBasedRouteTargetExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeEvpnInstanceVlanBasedRouteTargetExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
}

export class DataIosxeEvpnInstanceVlanBasedRouteTargetExportsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeEvpnInstanceVlanBasedRouteTargetExportsOutputReference {
    return new DataIosxeEvpnInstanceVlanBasedRouteTargetExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeEvpnInstanceVlanBasedRouteTargetImports {
}

export function dataIosxeEvpnInstanceVlanBasedRouteTargetImportsToTerraform(struct?: DataIosxeEvpnInstanceVlanBasedRouteTargetImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeEvpnInstanceVlanBasedRouteTargetImportsToHclTerraform(struct?: DataIosxeEvpnInstanceVlanBasedRouteTargetImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeEvpnInstanceVlanBasedRouteTargetImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeEvpnInstanceVlanBasedRouteTargetImports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeEvpnInstanceVlanBasedRouteTargetImports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_target - computed: true, optional: false, required: false
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
}

export class DataIosxeEvpnInstanceVlanBasedRouteTargetImportsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeEvpnInstanceVlanBasedRouteTargetImportsOutputReference {
    return new DataIosxeEvpnInstanceVlanBasedRouteTargetImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/evpn_instance iosxe_evpn_instance}
*/
export class DataIosxeEvpnInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_evpn_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeEvpnInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeEvpnInstance to import
  * @param importFromId The id of the existing DataIosxeEvpnInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/evpn_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeEvpnInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_evpn_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/evpn_instance iosxe_evpn_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeEvpnInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeEvpnInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_evpn_instance',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._evpnInstanceNum = config.evpnInstanceNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // evpn_instance_num - computed: false, optional: false, required: true
  private _evpnInstanceNum?: number; 
  public get evpnInstanceNum() {
    return this.getNumberAttribute('evpn_instance_num');
  }
  public set evpnInstanceNum(value: number) {
    this._evpnInstanceNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnInstanceNumInput() {
    return this._evpnInstanceNum;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vlan_based_auto_route_target - computed: true, optional: false, required: false
  public get vlanBasedAutoRouteTarget() {
    return this.getBooleanAttribute('vlan_based_auto_route_target');
  }

  // vlan_based_auto_route_target_legacy - computed: true, optional: false, required: false
  public get vlanBasedAutoRouteTargetLegacy() {
    return this.getBooleanAttribute('vlan_based_auto_route_target_legacy');
  }

  // vlan_based_default_gateway_advertise - computed: true, optional: false, required: false
  public get vlanBasedDefaultGatewayAdvertise() {
    return this.getStringAttribute('vlan_based_default_gateway_advertise');
  }

  // vlan_based_encapsulation - computed: true, optional: false, required: false
  public get vlanBasedEncapsulation() {
    return this.getStringAttribute('vlan_based_encapsulation');
  }

  // vlan_based_ip_local_learning_disable - computed: true, optional: false, required: false
  public get vlanBasedIpLocalLearningDisable() {
    return this.getBooleanAttribute('vlan_based_ip_local_learning_disable');
  }

  // vlan_based_ip_local_learning_enable - computed: true, optional: false, required: false
  public get vlanBasedIpLocalLearningEnable() {
    return this.getBooleanAttribute('vlan_based_ip_local_learning_enable');
  }

  // vlan_based_multicast_advertise - computed: true, optional: false, required: false
  public get vlanBasedMulticastAdvertise() {
    return this.getStringAttribute('vlan_based_multicast_advertise');
  }

  // vlan_based_rd - computed: true, optional: false, required: false
  public get vlanBasedRd() {
    return this.getStringAttribute('vlan_based_rd');
  }

  // vlan_based_re_originate_route_type5 - computed: true, optional: false, required: false
  public get vlanBasedReOriginateRouteType5() {
    return this.getBooleanAttribute('vlan_based_re_originate_route_type5');
  }

  // vlan_based_replication_type_ingress - computed: true, optional: false, required: false
  public get vlanBasedReplicationTypeIngress() {
    return this.getBooleanAttribute('vlan_based_replication_type_ingress');
  }

  // vlan_based_replication_type_mp2mp - computed: true, optional: false, required: false
  public get vlanBasedReplicationTypeMp2Mp() {
    return this.getBooleanAttribute('vlan_based_replication_type_mp2mp');
  }

  // vlan_based_replication_type_p2mp - computed: true, optional: false, required: false
  public get vlanBasedReplicationTypeP2Mp() {
    return this.getBooleanAttribute('vlan_based_replication_type_p2mp');
  }

  // vlan_based_replication_type_static - computed: true, optional: false, required: false
  public get vlanBasedReplicationTypeStatic() {
    return this.getBooleanAttribute('vlan_based_replication_type_static');
  }

  // vlan_based_route_target_both_legacy - computed: true, optional: false, required: false
  public get vlanBasedRouteTargetBothLegacy() {
    return this.getStringAttribute('vlan_based_route_target_both_legacy');
  }

  // vlan_based_route_target_export_legacy - computed: true, optional: false, required: false
  public get vlanBasedRouteTargetExportLegacy() {
    return this.getStringAttribute('vlan_based_route_target_export_legacy');
  }

  // vlan_based_route_target_exports - computed: true, optional: false, required: false
  private _vlanBasedRouteTargetExports = new DataIosxeEvpnInstanceVlanBasedRouteTargetExportsList(this, "vlan_based_route_target_exports", false);
  public get vlanBasedRouteTargetExports() {
    return this._vlanBasedRouteTargetExports;
  }

  // vlan_based_route_target_import_legacy - computed: true, optional: false, required: false
  public get vlanBasedRouteTargetImportLegacy() {
    return this.getStringAttribute('vlan_based_route_target_import_legacy');
  }

  // vlan_based_route_target_imports - computed: true, optional: false, required: false
  private _vlanBasedRouteTargetImports = new DataIosxeEvpnInstanceVlanBasedRouteTargetImportsList(this, "vlan_based_route_target_imports", false);
  public get vlanBasedRouteTargetImports() {
    return this._vlanBasedRouteTargetImports;
  }

  // vlan_based_route_target_legacy - computed: true, optional: false, required: false
  public get vlanBasedRouteTargetLegacy() {
    return this.getStringAttribute('vlan_based_route_target_legacy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      evpn_instance_num: cdktf.numberToTerraform(this._evpnInstanceNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evpn_instance_num: {
        value: cdktf.numberToHclTerraform(this._evpnInstanceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
