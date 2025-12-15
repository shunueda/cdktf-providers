// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default gateway mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#default_gateway Evpn#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Encapsulation type for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#encapsulation Evpn#encapsulation}
  */
  readonly encapsulation: string;
  /**
  * Multicast mode for EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#multicast_mode Evpn#multicast_mode}
  */
  readonly multicastMode?: string;
  /**
  * Disable EVPN Core isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#no_core_isolation Evpn#no_core_isolation}
  */
  readonly noCoreIsolation?: boolean | cdktf.IResolvable;
  /**
  * Routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#routing_instance Evpn#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Configure routing instance is an evpn instance-type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#routing_instance_evpn Evpn#routing_instance_evpn}
  */
  readonly routingInstanceEvpn?: boolean | cdktf.IResolvable;
  /**
  * duplicate_mac_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#duplicate_mac_detection Evpn#duplicate_mac_detection}
  */
  readonly duplicateMacDetection?: EvpnDuplicateMacDetection;
  /**
  * switch_or_ri_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#switch_or_ri_options Evpn#switch_or_ri_options}
  */
  readonly switchOrRiOptions?: EvpnSwitchOrRiOptions;
}
export interface EvpnDuplicateMacDetection {
  /**
  * Automatically unblock duplicate MACs after a time delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#auto_recovery_time Evpn#auto_recovery_time}
  */
  readonly autoRecoveryTime?: number;
  /**
  * Number of moves to trigger duplicate MAC detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#detection_threshold Evpn#detection_threshold}
  */
  readonly detectionThreshold?: number;
  /**
  * Time window for detection of duplicate MACs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#detection_window Evpn#detection_window}
  */
  readonly detectionWindow?: number;
}

export function evpnDuplicateMacDetectionToTerraform(struct?: EvpnDuplicateMacDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_recovery_time: cdktf.numberToTerraform(struct!.autoRecoveryTime),
    detection_threshold: cdktf.numberToTerraform(struct!.detectionThreshold),
    detection_window: cdktf.numberToTerraform(struct!.detectionWindow),
  }
}


export function evpnDuplicateMacDetectionToHclTerraform(struct?: EvpnDuplicateMacDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_recovery_time: {
      value: cdktf.numberToHclTerraform(struct!.autoRecoveryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_threshold: {
      value: cdktf.numberToHclTerraform(struct!.detectionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_window: {
      value: cdktf.numberToHclTerraform(struct!.detectionWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnDuplicateMacDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EvpnDuplicateMacDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRecoveryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRecoveryTime = this._autoRecoveryTime;
    }
    if (this._detectionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionThreshold = this._detectionThreshold;
    }
    if (this._detectionWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionWindow = this._detectionWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnDuplicateMacDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRecoveryTime = undefined;
      this._detectionThreshold = undefined;
      this._detectionWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRecoveryTime = value.autoRecoveryTime;
      this._detectionThreshold = value.detectionThreshold;
      this._detectionWindow = value.detectionWindow;
    }
  }

  // auto_recovery_time - computed: false, optional: true, required: false
  private _autoRecoveryTime?: number; 
  public get autoRecoveryTime() {
    return this.getNumberAttribute('auto_recovery_time');
  }
  public set autoRecoveryTime(value: number) {
    this._autoRecoveryTime = value;
  }
  public resetAutoRecoveryTime() {
    this._autoRecoveryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryTimeInput() {
    return this._autoRecoveryTime;
  }

  // detection_threshold - computed: false, optional: true, required: false
  private _detectionThreshold?: number; 
  public get detectionThreshold() {
    return this.getNumberAttribute('detection_threshold');
  }
  public set detectionThreshold(value: number) {
    this._detectionThreshold = value;
  }
  public resetDetectionThreshold() {
    this._detectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionThresholdInput() {
    return this._detectionThreshold;
  }

  // detection_window - computed: false, optional: true, required: false
  private _detectionWindow?: number; 
  public get detectionWindow() {
    return this.getNumberAttribute('detection_window');
  }
  public set detectionWindow(value: number) {
    this._detectionWindow = value;
  }
  public resetDetectionWindow() {
    this._detectionWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionWindowInput() {
    return this._detectionWindow;
  }
}
export interface EvpnSwitchOrRiOptions {
  /**
  * Route distinguisher for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#route_distinguisher Evpn#route_distinguisher}
  */
  readonly routeDistinguisher?: string;
  /**
  * Export policy for VRF instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#vrf_export Evpn#vrf_export}
  */
  readonly vrfExport?: string[];
  /**
  * Import policy for VRF instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#vrf_import Evpn#vrf_import}
  */
  readonly vrfImport?: string[];
  /**
  * VRF target community configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#vrf_target Evpn#vrf_target}
  */
  readonly vrfTarget?: string;
  /**
  * Auto derive import and export target community from BGP AS & L2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#vrf_target_auto Evpn#vrf_target_auto}
  */
  readonly vrfTargetAuto?: boolean | cdktf.IResolvable;
  /**
  * Target community to use when marking routes on export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#vrf_target_export Evpn#vrf_target_export}
  */
  readonly vrfTargetExport?: string;
  /**
  * Target community to use when filtering on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#vrf_target_import Evpn#vrf_target_import}
  */
  readonly vrfTargetImport?: string;
}

export function evpnSwitchOrRiOptionsToTerraform(struct?: EvpnSwitchOrRiOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_distinguisher: cdktf.stringToTerraform(struct!.routeDistinguisher),
    vrf_export: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vrfExport),
    vrf_import: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vrfImport),
    vrf_target: cdktf.stringToTerraform(struct!.vrfTarget),
    vrf_target_auto: cdktf.booleanToTerraform(struct!.vrfTargetAuto),
    vrf_target_export: cdktf.stringToTerraform(struct!.vrfTargetExport),
    vrf_target_import: cdktf.stringToTerraform(struct!.vrfTargetImport),
  }
}


export function evpnSwitchOrRiOptionsToHclTerraform(struct?: EvpnSwitchOrRiOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_distinguisher: {
      value: cdktf.stringToHclTerraform(struct!.routeDistinguisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_export: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vrfExport),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vrf_import: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vrfImport),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vrf_target: {
      value: cdktf.stringToHclTerraform(struct!.vrfTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_target_auto: {
      value: cdktf.booleanToHclTerraform(struct!.vrfTargetAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vrf_target_export: {
      value: cdktf.stringToHclTerraform(struct!.vrfTargetExport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_target_import: {
      value: cdktf.stringToHclTerraform(struct!.vrfTargetImport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnSwitchOrRiOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EvpnSwitchOrRiOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeDistinguisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDistinguisher = this._routeDistinguisher;
    }
    if (this._vrfExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfExport = this._vrfExport;
    }
    if (this._vrfImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfImport = this._vrfImport;
    }
    if (this._vrfTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTarget = this._vrfTarget;
    }
    if (this._vrfTargetAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTargetAuto = this._vrfTargetAuto;
    }
    if (this._vrfTargetExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTargetExport = this._vrfTargetExport;
    }
    if (this._vrfTargetImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTargetImport = this._vrfTargetImport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnSwitchOrRiOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeDistinguisher = undefined;
      this._vrfExport = undefined;
      this._vrfImport = undefined;
      this._vrfTarget = undefined;
      this._vrfTargetAuto = undefined;
      this._vrfTargetExport = undefined;
      this._vrfTargetImport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeDistinguisher = value.routeDistinguisher;
      this._vrfExport = value.vrfExport;
      this._vrfImport = value.vrfImport;
      this._vrfTarget = value.vrfTarget;
      this._vrfTargetAuto = value.vrfTargetAuto;
      this._vrfTargetExport = value.vrfTargetExport;
      this._vrfTargetImport = value.vrfTargetImport;
    }
  }

  // route_distinguisher - computed: false, optional: true, required: false
  private _routeDistinguisher?: string; 
  public get routeDistinguisher() {
    return this.getStringAttribute('route_distinguisher');
  }
  public set routeDistinguisher(value: string) {
    this._routeDistinguisher = value;
  }
  public resetRouteDistinguisher() {
    this._routeDistinguisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistinguisherInput() {
    return this._routeDistinguisher;
  }

  // vrf_export - computed: false, optional: true, required: false
  private _vrfExport?: string[]; 
  public get vrfExport() {
    return this.getListAttribute('vrf_export');
  }
  public set vrfExport(value: string[]) {
    this._vrfExport = value;
  }
  public resetVrfExport() {
    this._vrfExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfExportInput() {
    return this._vrfExport;
  }

  // vrf_import - computed: false, optional: true, required: false
  private _vrfImport?: string[]; 
  public get vrfImport() {
    return this.getListAttribute('vrf_import');
  }
  public set vrfImport(value: string[]) {
    this._vrfImport = value;
  }
  public resetVrfImport() {
    this._vrfImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfImportInput() {
    return this._vrfImport;
  }

  // vrf_target - computed: false, optional: true, required: false
  private _vrfTarget?: string; 
  public get vrfTarget() {
    return this.getStringAttribute('vrf_target');
  }
  public set vrfTarget(value: string) {
    this._vrfTarget = value;
  }
  public resetVrfTarget() {
    this._vrfTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetInput() {
    return this._vrfTarget;
  }

  // vrf_target_auto - computed: false, optional: true, required: false
  private _vrfTargetAuto?: boolean | cdktf.IResolvable; 
  public get vrfTargetAuto() {
    return this.getBooleanAttribute('vrf_target_auto');
  }
  public set vrfTargetAuto(value: boolean | cdktf.IResolvable) {
    this._vrfTargetAuto = value;
  }
  public resetVrfTargetAuto() {
    this._vrfTargetAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetAutoInput() {
    return this._vrfTargetAuto;
  }

  // vrf_target_export - computed: false, optional: true, required: false
  private _vrfTargetExport?: string; 
  public get vrfTargetExport() {
    return this.getStringAttribute('vrf_target_export');
  }
  public set vrfTargetExport(value: string) {
    this._vrfTargetExport = value;
  }
  public resetVrfTargetExport() {
    this._vrfTargetExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetExportInput() {
    return this._vrfTargetExport;
  }

  // vrf_target_import - computed: false, optional: true, required: false
  private _vrfTargetImport?: string; 
  public get vrfTargetImport() {
    return this.getStringAttribute('vrf_target_import');
  }
  public set vrfTargetImport(value: string) {
    this._vrfTargetImport = value;
  }
  public resetVrfTargetImport() {
    this._vrfTargetImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetImportInput() {
    return this._vrfTargetImport;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn junos_evpn}
*/
export class Evpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Evpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Evpn to import
  * @param importFromId The id of the existing Evpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Evpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/evpn junos_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_evpn',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGateway = config.defaultGateway;
    this._encapsulation = config.encapsulation;
    this._multicastMode = config.multicastMode;
    this._noCoreIsolation = config.noCoreIsolation;
    this._routingInstance = config.routingInstance;
    this._routingInstanceEvpn = config.routingInstanceEvpn;
    this._duplicateMacDetection.internalValue = config.duplicateMacDetection;
    this._switchOrRiOptions.internalValue = config.switchOrRiOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // encapsulation - computed: false, optional: false, required: true
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multicast_mode - computed: false, optional: true, required: false
  private _multicastMode?: string; 
  public get multicastMode() {
    return this.getStringAttribute('multicast_mode');
  }
  public set multicastMode(value: string) {
    this._multicastMode = value;
  }
  public resetMulticastMode() {
    this._multicastMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastModeInput() {
    return this._multicastMode;
  }

  // no_core_isolation - computed: false, optional: true, required: false
  private _noCoreIsolation?: boolean | cdktf.IResolvable; 
  public get noCoreIsolation() {
    return this.getBooleanAttribute('no_core_isolation');
  }
  public set noCoreIsolation(value: boolean | cdktf.IResolvable) {
    this._noCoreIsolation = value;
  }
  public resetNoCoreIsolation() {
    this._noCoreIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCoreIsolationInput() {
    return this._noCoreIsolation;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // routing_instance_evpn - computed: false, optional: true, required: false
  private _routingInstanceEvpn?: boolean | cdktf.IResolvable; 
  public get routingInstanceEvpn() {
    return this.getBooleanAttribute('routing_instance_evpn');
  }
  public set routingInstanceEvpn(value: boolean | cdktf.IResolvable) {
    this._routingInstanceEvpn = value;
  }
  public resetRoutingInstanceEvpn() {
    this._routingInstanceEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceEvpnInput() {
    return this._routingInstanceEvpn;
  }

  // duplicate_mac_detection - computed: false, optional: true, required: false
  private _duplicateMacDetection = new EvpnDuplicateMacDetectionOutputReference(this, "duplicate_mac_detection");
  public get duplicateMacDetection() {
    return this._duplicateMacDetection;
  }
  public putDuplicateMacDetection(value: EvpnDuplicateMacDetection) {
    this._duplicateMacDetection.internalValue = value;
  }
  public resetDuplicateMacDetection() {
    this._duplicateMacDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateMacDetectionInput() {
    return this._duplicateMacDetection.internalValue;
  }

  // switch_or_ri_options - computed: false, optional: true, required: false
  private _switchOrRiOptions = new EvpnSwitchOrRiOptionsOutputReference(this, "switch_or_ri_options");
  public get switchOrRiOptions() {
    return this._switchOrRiOptions;
  }
  public putSwitchOrRiOptions(value: EvpnSwitchOrRiOptions) {
    this._switchOrRiOptions.internalValue = value;
  }
  public resetSwitchOrRiOptions() {
    this._switchOrRiOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchOrRiOptionsInput() {
    return this._switchOrRiOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      multicast_mode: cdktf.stringToTerraform(this._multicastMode),
      no_core_isolation: cdktf.booleanToTerraform(this._noCoreIsolation),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      routing_instance_evpn: cdktf.booleanToTerraform(this._routingInstanceEvpn),
      duplicate_mac_detection: evpnDuplicateMacDetectionToTerraform(this._duplicateMacDetection.internalValue),
      switch_or_ri_options: evpnSwitchOrRiOptionsToTerraform(this._switchOrRiOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_mode: {
        value: cdktf.stringToHclTerraform(this._multicastMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_core_isolation: {
        value: cdktf.booleanToHclTerraform(this._noCoreIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance_evpn: {
        value: cdktf.booleanToHclTerraform(this._routingInstanceEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duplicate_mac_detection: {
        value: evpnDuplicateMacDetectionToHclTerraform(this._duplicateMacDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EvpnDuplicateMacDetection",
      },
      switch_or_ri_options: {
        value: evpnSwitchOrRiOptionsToHclTerraform(this._switchOrRiOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EvpnSwitchOrRiOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
