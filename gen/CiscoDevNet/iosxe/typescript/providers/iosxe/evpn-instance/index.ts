// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#device EvpnInstance#device}
  */
  readonly device?: string;
  /**
  * evpn instance number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#evpn_instance_num EvpnInstance#evpn_instance_num}
  */
  readonly evpnInstanceNum: number;
  /**
  * Automatically set a route-target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_auto_route_target EvpnInstance#vlan_based_auto_route_target}
  */
  readonly vlanBasedAutoRouteTarget?: boolean | cdktf.IResolvable;
  /**
  * Automatically set a route-target (OBSOLETE, use auto-route-target-boolean)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_auto_route_target_legacy EvpnInstance#vlan_based_auto_route_target_legacy}
  */
  readonly vlanBasedAutoRouteTargetLegacy?: boolean | cdktf.IResolvable;
  /**
  * Advertise Default Gateway MAC/IP routes
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_default_gateway_advertise EvpnInstance#vlan_based_default_gateway_advertise}
  */
  readonly vlanBasedDefaultGatewayAdvertise?: string;
  /**
  * Data encapsulation method
  *   - Choices: `mpls`, `vxlan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_encapsulation EvpnInstance#vlan_based_encapsulation}
  */
  readonly vlanBasedEncapsulation?: string;
  /**
  * Disable IP local learning from dataplane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_ip_local_learning_disable EvpnInstance#vlan_based_ip_local_learning_disable}
  */
  readonly vlanBasedIpLocalLearningDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable IP local learning from dataplane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_ip_local_learning_enable EvpnInstance#vlan_based_ip_local_learning_enable}
  */
  readonly vlanBasedIpLocalLearningEnable?: boolean | cdktf.IResolvable;
  /**
  * Advertise L2 multicast capability
  *   - Choices: `disable`, `enable`, `sync-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_multicast_advertise EvpnInstance#vlan_based_multicast_advertise}
  */
  readonly vlanBasedMulticastAdvertise?: string;
  /**
  * ASN:nn or IP-address:nn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_rd EvpnInstance#vlan_based_rd}
  */
  readonly vlanBasedRd?: string;
  /**
  * Re-originate route-type 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_re_originate_route_type5 EvpnInstance#vlan_based_re_originate_route_type5}
  */
  readonly vlanBasedReOriginateRouteType5?: boolean | cdktf.IResolvable;
  /**
  * Ingress replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_replication_type_ingress EvpnInstance#vlan_based_replication_type_ingress}
  */
  readonly vlanBasedReplicationTypeIngress?: boolean | cdktf.IResolvable;
  /**
  * mp2mp replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_replication_type_mp2mp EvpnInstance#vlan_based_replication_type_mp2mp}
  */
  readonly vlanBasedReplicationTypeMp2Mp?: boolean | cdktf.IResolvable;
  /**
  * p2mp replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_replication_type_p2mp EvpnInstance#vlan_based_replication_type_p2mp}
  */
  readonly vlanBasedReplicationTypeP2Mp?: boolean | cdktf.IResolvable;
  /**
  * Static replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_replication_type_static EvpnInstance#vlan_based_replication_type_static}
  */
  readonly vlanBasedReplicationTypeStatic?: boolean | cdktf.IResolvable;
  /**
  * ASN:nn or IP-address:nn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_route_target_both_legacy EvpnInstance#vlan_based_route_target_both_legacy}
  */
  readonly vlanBasedRouteTargetBothLegacy?: string;
  /**
  * ASN:nn or IP-address:nn (Obsolete, use rt-value-entry)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_route_target_export_legacy EvpnInstance#vlan_based_route_target_export_legacy}
  */
  readonly vlanBasedRouteTargetExportLegacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_route_target_exports EvpnInstance#vlan_based_route_target_exports}
  */
  readonly vlanBasedRouteTargetExports?: EvpnInstanceVlanBasedRouteTargetExports[] | cdktf.IResolvable;
  /**
  * ASN:nn or IP-address:nn (Obsolete, use rt-value-entry)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_route_target_import_legacy EvpnInstance#vlan_based_route_target_import_legacy}
  */
  readonly vlanBasedRouteTargetImportLegacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_route_target_imports EvpnInstance#vlan_based_route_target_imports}
  */
  readonly vlanBasedRouteTargetImports?: EvpnInstanceVlanBasedRouteTargetImports[] | cdktf.IResolvable;
  /**
  * ASN:nn or IP-address:nn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#vlan_based_route_target_legacy EvpnInstance#vlan_based_route_target_legacy}
  */
  readonly vlanBasedRouteTargetLegacy?: string;
}
export interface EvpnInstanceVlanBasedRouteTargetExports {
  /**
  * ASN:nn or IP-address:nn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#route_target EvpnInstance#route_target}
  */
  readonly routeTarget: string;
}

export function evpnInstanceVlanBasedRouteTargetExportsToTerraform(struct?: EvpnInstanceVlanBasedRouteTargetExports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
  }
}


export function evpnInstanceVlanBasedRouteTargetExportsToHclTerraform(struct?: EvpnInstanceVlanBasedRouteTargetExports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnInstanceVlanBasedRouteTargetExportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnInstanceVlanBasedRouteTargetExports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnInstanceVlanBasedRouteTargetExports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
    }
  }

  // route_target - computed: false, optional: false, required: true
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }
}

export class EvpnInstanceVlanBasedRouteTargetExportsList extends cdktf.ComplexList {
  public internalValue? : EvpnInstanceVlanBasedRouteTargetExports[] | cdktf.IResolvable

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
  public get(index: number): EvpnInstanceVlanBasedRouteTargetExportsOutputReference {
    return new EvpnInstanceVlanBasedRouteTargetExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnInstanceVlanBasedRouteTargetImports {
  /**
  * ASN:nn or IP-address:nn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#route_target EvpnInstance#route_target}
  */
  readonly routeTarget: string;
}

export function evpnInstanceVlanBasedRouteTargetImportsToTerraform(struct?: EvpnInstanceVlanBasedRouteTargetImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
  }
}


export function evpnInstanceVlanBasedRouteTargetImportsToHclTerraform(struct?: EvpnInstanceVlanBasedRouteTargetImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnInstanceVlanBasedRouteTargetImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnInstanceVlanBasedRouteTargetImports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnInstanceVlanBasedRouteTargetImports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
    }
  }

  // route_target - computed: false, optional: false, required: true
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }
}

export class EvpnInstanceVlanBasedRouteTargetImportsList extends cdktf.ComplexList {
  public internalValue? : EvpnInstanceVlanBasedRouteTargetImports[] | cdktf.IResolvable

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
  public get(index: number): EvpnInstanceVlanBasedRouteTargetImportsOutputReference {
    return new EvpnInstanceVlanBasedRouteTargetImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance iosxe_evpn_instance}
*/
export class EvpnInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_evpn_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvpnInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvpnInstance to import
  * @param importFromId The id of the existing EvpnInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvpnInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_evpn_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/evpn_instance iosxe_evpn_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_evpn_instance',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
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
    this._vlanBasedAutoRouteTarget = config.vlanBasedAutoRouteTarget;
    this._vlanBasedAutoRouteTargetLegacy = config.vlanBasedAutoRouteTargetLegacy;
    this._vlanBasedDefaultGatewayAdvertise = config.vlanBasedDefaultGatewayAdvertise;
    this._vlanBasedEncapsulation = config.vlanBasedEncapsulation;
    this._vlanBasedIpLocalLearningDisable = config.vlanBasedIpLocalLearningDisable;
    this._vlanBasedIpLocalLearningEnable = config.vlanBasedIpLocalLearningEnable;
    this._vlanBasedMulticastAdvertise = config.vlanBasedMulticastAdvertise;
    this._vlanBasedRd = config.vlanBasedRd;
    this._vlanBasedReOriginateRouteType5 = config.vlanBasedReOriginateRouteType5;
    this._vlanBasedReplicationTypeIngress = config.vlanBasedReplicationTypeIngress;
    this._vlanBasedReplicationTypeMp2Mp = config.vlanBasedReplicationTypeMp2Mp;
    this._vlanBasedReplicationTypeP2Mp = config.vlanBasedReplicationTypeP2Mp;
    this._vlanBasedReplicationTypeStatic = config.vlanBasedReplicationTypeStatic;
    this._vlanBasedRouteTargetBothLegacy = config.vlanBasedRouteTargetBothLegacy;
    this._vlanBasedRouteTargetExportLegacy = config.vlanBasedRouteTargetExportLegacy;
    this._vlanBasedRouteTargetExports.internalValue = config.vlanBasedRouteTargetExports;
    this._vlanBasedRouteTargetImportLegacy = config.vlanBasedRouteTargetImportLegacy;
    this._vlanBasedRouteTargetImports.internalValue = config.vlanBasedRouteTargetImports;
    this._vlanBasedRouteTargetLegacy = config.vlanBasedRouteTargetLegacy;
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

  // vlan_based_auto_route_target - computed: false, optional: true, required: false
  private _vlanBasedAutoRouteTarget?: boolean | cdktf.IResolvable; 
  public get vlanBasedAutoRouteTarget() {
    return this.getBooleanAttribute('vlan_based_auto_route_target');
  }
  public set vlanBasedAutoRouteTarget(value: boolean | cdktf.IResolvable) {
    this._vlanBasedAutoRouteTarget = value;
  }
  public resetVlanBasedAutoRouteTarget() {
    this._vlanBasedAutoRouteTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedAutoRouteTargetInput() {
    return this._vlanBasedAutoRouteTarget;
  }

  // vlan_based_auto_route_target_legacy - computed: false, optional: true, required: false
  private _vlanBasedAutoRouteTargetLegacy?: boolean | cdktf.IResolvable; 
  public get vlanBasedAutoRouteTargetLegacy() {
    return this.getBooleanAttribute('vlan_based_auto_route_target_legacy');
  }
  public set vlanBasedAutoRouteTargetLegacy(value: boolean | cdktf.IResolvable) {
    this._vlanBasedAutoRouteTargetLegacy = value;
  }
  public resetVlanBasedAutoRouteTargetLegacy() {
    this._vlanBasedAutoRouteTargetLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedAutoRouteTargetLegacyInput() {
    return this._vlanBasedAutoRouteTargetLegacy;
  }

  // vlan_based_default_gateway_advertise - computed: false, optional: true, required: false
  private _vlanBasedDefaultGatewayAdvertise?: string; 
  public get vlanBasedDefaultGatewayAdvertise() {
    return this.getStringAttribute('vlan_based_default_gateway_advertise');
  }
  public set vlanBasedDefaultGatewayAdvertise(value: string) {
    this._vlanBasedDefaultGatewayAdvertise = value;
  }
  public resetVlanBasedDefaultGatewayAdvertise() {
    this._vlanBasedDefaultGatewayAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedDefaultGatewayAdvertiseInput() {
    return this._vlanBasedDefaultGatewayAdvertise;
  }

  // vlan_based_encapsulation - computed: false, optional: true, required: false
  private _vlanBasedEncapsulation?: string; 
  public get vlanBasedEncapsulation() {
    return this.getStringAttribute('vlan_based_encapsulation');
  }
  public set vlanBasedEncapsulation(value: string) {
    this._vlanBasedEncapsulation = value;
  }
  public resetVlanBasedEncapsulation() {
    this._vlanBasedEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedEncapsulationInput() {
    return this._vlanBasedEncapsulation;
  }

  // vlan_based_ip_local_learning_disable - computed: false, optional: true, required: false
  private _vlanBasedIpLocalLearningDisable?: boolean | cdktf.IResolvable; 
  public get vlanBasedIpLocalLearningDisable() {
    return this.getBooleanAttribute('vlan_based_ip_local_learning_disable');
  }
  public set vlanBasedIpLocalLearningDisable(value: boolean | cdktf.IResolvable) {
    this._vlanBasedIpLocalLearningDisable = value;
  }
  public resetVlanBasedIpLocalLearningDisable() {
    this._vlanBasedIpLocalLearningDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedIpLocalLearningDisableInput() {
    return this._vlanBasedIpLocalLearningDisable;
  }

  // vlan_based_ip_local_learning_enable - computed: false, optional: true, required: false
  private _vlanBasedIpLocalLearningEnable?: boolean | cdktf.IResolvable; 
  public get vlanBasedIpLocalLearningEnable() {
    return this.getBooleanAttribute('vlan_based_ip_local_learning_enable');
  }
  public set vlanBasedIpLocalLearningEnable(value: boolean | cdktf.IResolvable) {
    this._vlanBasedIpLocalLearningEnable = value;
  }
  public resetVlanBasedIpLocalLearningEnable() {
    this._vlanBasedIpLocalLearningEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedIpLocalLearningEnableInput() {
    return this._vlanBasedIpLocalLearningEnable;
  }

  // vlan_based_multicast_advertise - computed: false, optional: true, required: false
  private _vlanBasedMulticastAdvertise?: string; 
  public get vlanBasedMulticastAdvertise() {
    return this.getStringAttribute('vlan_based_multicast_advertise');
  }
  public set vlanBasedMulticastAdvertise(value: string) {
    this._vlanBasedMulticastAdvertise = value;
  }
  public resetVlanBasedMulticastAdvertise() {
    this._vlanBasedMulticastAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedMulticastAdvertiseInput() {
    return this._vlanBasedMulticastAdvertise;
  }

  // vlan_based_rd - computed: false, optional: true, required: false
  private _vlanBasedRd?: string; 
  public get vlanBasedRd() {
    return this.getStringAttribute('vlan_based_rd');
  }
  public set vlanBasedRd(value: string) {
    this._vlanBasedRd = value;
  }
  public resetVlanBasedRd() {
    this._vlanBasedRd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedRdInput() {
    return this._vlanBasedRd;
  }

  // vlan_based_re_originate_route_type5 - computed: false, optional: true, required: false
  private _vlanBasedReOriginateRouteType5?: boolean | cdktf.IResolvable; 
  public get vlanBasedReOriginateRouteType5() {
    return this.getBooleanAttribute('vlan_based_re_originate_route_type5');
  }
  public set vlanBasedReOriginateRouteType5(value: boolean | cdktf.IResolvable) {
    this._vlanBasedReOriginateRouteType5 = value;
  }
  public resetVlanBasedReOriginateRouteType5() {
    this._vlanBasedReOriginateRouteType5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedReOriginateRouteType5Input() {
    return this._vlanBasedReOriginateRouteType5;
  }

  // vlan_based_replication_type_ingress - computed: false, optional: true, required: false
  private _vlanBasedReplicationTypeIngress?: boolean | cdktf.IResolvable; 
  public get vlanBasedReplicationTypeIngress() {
    return this.getBooleanAttribute('vlan_based_replication_type_ingress');
  }
  public set vlanBasedReplicationTypeIngress(value: boolean | cdktf.IResolvable) {
    this._vlanBasedReplicationTypeIngress = value;
  }
  public resetVlanBasedReplicationTypeIngress() {
    this._vlanBasedReplicationTypeIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedReplicationTypeIngressInput() {
    return this._vlanBasedReplicationTypeIngress;
  }

  // vlan_based_replication_type_mp2mp - computed: false, optional: true, required: false
  private _vlanBasedReplicationTypeMp2Mp?: boolean | cdktf.IResolvable; 
  public get vlanBasedReplicationTypeMp2Mp() {
    return this.getBooleanAttribute('vlan_based_replication_type_mp2mp');
  }
  public set vlanBasedReplicationTypeMp2Mp(value: boolean | cdktf.IResolvable) {
    this._vlanBasedReplicationTypeMp2Mp = value;
  }
  public resetVlanBasedReplicationTypeMp2Mp() {
    this._vlanBasedReplicationTypeMp2Mp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedReplicationTypeMp2MpInput() {
    return this._vlanBasedReplicationTypeMp2Mp;
  }

  // vlan_based_replication_type_p2mp - computed: false, optional: true, required: false
  private _vlanBasedReplicationTypeP2Mp?: boolean | cdktf.IResolvable; 
  public get vlanBasedReplicationTypeP2Mp() {
    return this.getBooleanAttribute('vlan_based_replication_type_p2mp');
  }
  public set vlanBasedReplicationTypeP2Mp(value: boolean | cdktf.IResolvable) {
    this._vlanBasedReplicationTypeP2Mp = value;
  }
  public resetVlanBasedReplicationTypeP2Mp() {
    this._vlanBasedReplicationTypeP2Mp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedReplicationTypeP2MpInput() {
    return this._vlanBasedReplicationTypeP2Mp;
  }

  // vlan_based_replication_type_static - computed: false, optional: true, required: false
  private _vlanBasedReplicationTypeStatic?: boolean | cdktf.IResolvable; 
  public get vlanBasedReplicationTypeStatic() {
    return this.getBooleanAttribute('vlan_based_replication_type_static');
  }
  public set vlanBasedReplicationTypeStatic(value: boolean | cdktf.IResolvable) {
    this._vlanBasedReplicationTypeStatic = value;
  }
  public resetVlanBasedReplicationTypeStatic() {
    this._vlanBasedReplicationTypeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedReplicationTypeStaticInput() {
    return this._vlanBasedReplicationTypeStatic;
  }

  // vlan_based_route_target_both_legacy - computed: false, optional: true, required: false
  private _vlanBasedRouteTargetBothLegacy?: string; 
  public get vlanBasedRouteTargetBothLegacy() {
    return this.getStringAttribute('vlan_based_route_target_both_legacy');
  }
  public set vlanBasedRouteTargetBothLegacy(value: string) {
    this._vlanBasedRouteTargetBothLegacy = value;
  }
  public resetVlanBasedRouteTargetBothLegacy() {
    this._vlanBasedRouteTargetBothLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedRouteTargetBothLegacyInput() {
    return this._vlanBasedRouteTargetBothLegacy;
  }

  // vlan_based_route_target_export_legacy - computed: false, optional: true, required: false
  private _vlanBasedRouteTargetExportLegacy?: string; 
  public get vlanBasedRouteTargetExportLegacy() {
    return this.getStringAttribute('vlan_based_route_target_export_legacy');
  }
  public set vlanBasedRouteTargetExportLegacy(value: string) {
    this._vlanBasedRouteTargetExportLegacy = value;
  }
  public resetVlanBasedRouteTargetExportLegacy() {
    this._vlanBasedRouteTargetExportLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedRouteTargetExportLegacyInput() {
    return this._vlanBasedRouteTargetExportLegacy;
  }

  // vlan_based_route_target_exports - computed: false, optional: true, required: false
  private _vlanBasedRouteTargetExports = new EvpnInstanceVlanBasedRouteTargetExportsList(this, "vlan_based_route_target_exports", false);
  public get vlanBasedRouteTargetExports() {
    return this._vlanBasedRouteTargetExports;
  }
  public putVlanBasedRouteTargetExports(value: EvpnInstanceVlanBasedRouteTargetExports[] | cdktf.IResolvable) {
    this._vlanBasedRouteTargetExports.internalValue = value;
  }
  public resetVlanBasedRouteTargetExports() {
    this._vlanBasedRouteTargetExports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedRouteTargetExportsInput() {
    return this._vlanBasedRouteTargetExports.internalValue;
  }

  // vlan_based_route_target_import_legacy - computed: false, optional: true, required: false
  private _vlanBasedRouteTargetImportLegacy?: string; 
  public get vlanBasedRouteTargetImportLegacy() {
    return this.getStringAttribute('vlan_based_route_target_import_legacy');
  }
  public set vlanBasedRouteTargetImportLegacy(value: string) {
    this._vlanBasedRouteTargetImportLegacy = value;
  }
  public resetVlanBasedRouteTargetImportLegacy() {
    this._vlanBasedRouteTargetImportLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedRouteTargetImportLegacyInput() {
    return this._vlanBasedRouteTargetImportLegacy;
  }

  // vlan_based_route_target_imports - computed: false, optional: true, required: false
  private _vlanBasedRouteTargetImports = new EvpnInstanceVlanBasedRouteTargetImportsList(this, "vlan_based_route_target_imports", false);
  public get vlanBasedRouteTargetImports() {
    return this._vlanBasedRouteTargetImports;
  }
  public putVlanBasedRouteTargetImports(value: EvpnInstanceVlanBasedRouteTargetImports[] | cdktf.IResolvable) {
    this._vlanBasedRouteTargetImports.internalValue = value;
  }
  public resetVlanBasedRouteTargetImports() {
    this._vlanBasedRouteTargetImports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedRouteTargetImportsInput() {
    return this._vlanBasedRouteTargetImports.internalValue;
  }

  // vlan_based_route_target_legacy - computed: false, optional: true, required: false
  private _vlanBasedRouteTargetLegacy?: string; 
  public get vlanBasedRouteTargetLegacy() {
    return this.getStringAttribute('vlan_based_route_target_legacy');
  }
  public set vlanBasedRouteTargetLegacy(value: string) {
    this._vlanBasedRouteTargetLegacy = value;
  }
  public resetVlanBasedRouteTargetLegacy() {
    this._vlanBasedRouteTargetLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanBasedRouteTargetLegacyInput() {
    return this._vlanBasedRouteTargetLegacy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      evpn_instance_num: cdktf.numberToTerraform(this._evpnInstanceNum),
      vlan_based_auto_route_target: cdktf.booleanToTerraform(this._vlanBasedAutoRouteTarget),
      vlan_based_auto_route_target_legacy: cdktf.booleanToTerraform(this._vlanBasedAutoRouteTargetLegacy),
      vlan_based_default_gateway_advertise: cdktf.stringToTerraform(this._vlanBasedDefaultGatewayAdvertise),
      vlan_based_encapsulation: cdktf.stringToTerraform(this._vlanBasedEncapsulation),
      vlan_based_ip_local_learning_disable: cdktf.booleanToTerraform(this._vlanBasedIpLocalLearningDisable),
      vlan_based_ip_local_learning_enable: cdktf.booleanToTerraform(this._vlanBasedIpLocalLearningEnable),
      vlan_based_multicast_advertise: cdktf.stringToTerraform(this._vlanBasedMulticastAdvertise),
      vlan_based_rd: cdktf.stringToTerraform(this._vlanBasedRd),
      vlan_based_re_originate_route_type5: cdktf.booleanToTerraform(this._vlanBasedReOriginateRouteType5),
      vlan_based_replication_type_ingress: cdktf.booleanToTerraform(this._vlanBasedReplicationTypeIngress),
      vlan_based_replication_type_mp2mp: cdktf.booleanToTerraform(this._vlanBasedReplicationTypeMp2Mp),
      vlan_based_replication_type_p2mp: cdktf.booleanToTerraform(this._vlanBasedReplicationTypeP2Mp),
      vlan_based_replication_type_static: cdktf.booleanToTerraform(this._vlanBasedReplicationTypeStatic),
      vlan_based_route_target_both_legacy: cdktf.stringToTerraform(this._vlanBasedRouteTargetBothLegacy),
      vlan_based_route_target_export_legacy: cdktf.stringToTerraform(this._vlanBasedRouteTargetExportLegacy),
      vlan_based_route_target_exports: cdktf.listMapper(evpnInstanceVlanBasedRouteTargetExportsToTerraform, false)(this._vlanBasedRouteTargetExports.internalValue),
      vlan_based_route_target_import_legacy: cdktf.stringToTerraform(this._vlanBasedRouteTargetImportLegacy),
      vlan_based_route_target_imports: cdktf.listMapper(evpnInstanceVlanBasedRouteTargetImportsToTerraform, false)(this._vlanBasedRouteTargetImports.internalValue),
      vlan_based_route_target_legacy: cdktf.stringToTerraform(this._vlanBasedRouteTargetLegacy),
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
      vlan_based_auto_route_target: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedAutoRouteTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_auto_route_target_legacy: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedAutoRouteTargetLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_default_gateway_advertise: {
        value: cdktf.stringToHclTerraform(this._vlanBasedDefaultGatewayAdvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_based_encapsulation: {
        value: cdktf.stringToHclTerraform(this._vlanBasedEncapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_based_ip_local_learning_disable: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedIpLocalLearningDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_ip_local_learning_enable: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedIpLocalLearningEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_multicast_advertise: {
        value: cdktf.stringToHclTerraform(this._vlanBasedMulticastAdvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_based_rd: {
        value: cdktf.stringToHclTerraform(this._vlanBasedRd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_based_re_originate_route_type5: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedReOriginateRouteType5),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_replication_type_ingress: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedReplicationTypeIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_replication_type_mp2mp: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedReplicationTypeMp2Mp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_replication_type_p2mp: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedReplicationTypeP2Mp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_replication_type_static: {
        value: cdktf.booleanToHclTerraform(this._vlanBasedReplicationTypeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_based_route_target_both_legacy: {
        value: cdktf.stringToHclTerraform(this._vlanBasedRouteTargetBothLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_based_route_target_export_legacy: {
        value: cdktf.stringToHclTerraform(this._vlanBasedRouteTargetExportLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_based_route_target_exports: {
        value: cdktf.listMapperHcl(evpnInstanceVlanBasedRouteTargetExportsToHclTerraform, false)(this._vlanBasedRouteTargetExports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnInstanceVlanBasedRouteTargetExportsList",
      },
      vlan_based_route_target_import_legacy: {
        value: cdktf.stringToHclTerraform(this._vlanBasedRouteTargetImportLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_based_route_target_imports: {
        value: cdktf.listMapperHcl(evpnInstanceVlanBasedRouteTargetImportsToHclTerraform, false)(this._vlanBasedRouteTargetImports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnInstanceVlanBasedRouteTargetImportsList",
      },
      vlan_based_route_target_legacy: {
        value: cdktf.stringToHclTerraform(this._vlanBasedRouteTargetLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
