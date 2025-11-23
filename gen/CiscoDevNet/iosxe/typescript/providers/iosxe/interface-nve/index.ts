// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceNveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#delete_mode InterfaceNve#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Interface specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#description InterfaceNve#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#device InterfaceNve#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#host_reachability_protocol_bgp InterfaceNve#host_reachability_protocol_bgp}
  */
  readonly hostReachabilityProtocolBgp?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`4096`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#name InterfaceNve#name}
  */
  readonly name: number;
  /**
  * Shutdown the selected interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#shutdown InterfaceNve#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#source_interface_loopback InterfaceNve#source_interface_loopback}
  */
  readonly sourceInterfaceLoopback?: number;
  /**
  * Configure VNI information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#vni_vrfs InterfaceNve#vni_vrfs}
  */
  readonly vniVrfs?: InterfaceNveVniVrfs[] | cdktf.IResolvable;
  /**
  * Configure VNI information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#vnis InterfaceNve#vnis}
  */
  readonly vnis?: InterfaceNveVnis[] | cdktf.IResolvable;
}
export interface InterfaceNveVniVrfs {
  /**
  * VNI range or instance between 4096-16777215, example: 6010-6030 or 7115
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#vni_range InterfaceNve#vni_range}
  */
  readonly vniRange: string;
  /**
  * Specify a particular VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#vrf InterfaceNve#vrf}
  */
  readonly vrf?: string;
}

export function interfaceNveVniVrfsToTerraform(struct?: InterfaceNveVniVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vni_range: cdktf.stringToTerraform(struct!.vniRange),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function interfaceNveVniVrfsToHclTerraform(struct?: InterfaceNveVniVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vni_range: {
      value: cdktf.stringToHclTerraform(struct!.vniRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceNveVniVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceNveVniVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vniRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniRange = this._vniRange;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceNveVniVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vniRange = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vniRange = value.vniRange;
      this._vrf = value.vrf;
    }
  }

  // vni_range - computed: false, optional: false, required: true
  private _vniRange?: string; 
  public get vniRange() {
    return this.getStringAttribute('vni_range');
  }
  public set vniRange(value: string) {
    this._vniRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniRangeInput() {
    return this._vniRange;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
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

export class InterfaceNveVniVrfsList extends cdktf.ComplexList {
  public internalValue? : InterfaceNveVniVrfs[] | cdktf.IResolvable

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
  public get(index: number): InterfaceNveVniVrfsOutputReference {
    return new InterfaceNveVniVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceNveVnis {
  /**
  * Ingress Replication control-plane (BGP) signaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#ingress_replication InterfaceNve#ingress_replication}
  */
  readonly ingressReplication?: boolean | cdktf.IResolvable;
  /**
  * Starting Multicast Group IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#ipv4_multicast_group InterfaceNve#ipv4_multicast_group}
  */
  readonly ipv4MulticastGroup?: string;
  /**
  * Enable vxlan centralized gateway forwarding for routed traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#local_routing InterfaceNve#local_routing}
  */
  readonly localRouting?: boolean | cdktf.IResolvable;
  /**
  * VNI range or instance between 4096-16777215, example: 6010-6030 or 7115
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#vni_range InterfaceNve#vni_range}
  */
  readonly vniRange: string;
}

export function interfaceNveVnisToTerraform(struct?: InterfaceNveVnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_replication: cdktf.booleanToTerraform(struct!.ingressReplication),
    ipv4_multicast_group: cdktf.stringToTerraform(struct!.ipv4MulticastGroup),
    local_routing: cdktf.booleanToTerraform(struct!.localRouting),
    vni_range: cdktf.stringToTerraform(struct!.vniRange),
  }
}


export function interfaceNveVnisToHclTerraform(struct?: InterfaceNveVnis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_replication: {
      value: cdktf.booleanToHclTerraform(struct!.ingressReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_multicast_group: {
      value: cdktf.stringToHclTerraform(struct!.ipv4MulticastGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_routing: {
      value: cdktf.booleanToHclTerraform(struct!.localRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vni_range: {
      value: cdktf.stringToHclTerraform(struct!.vniRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceNveVnisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceNveVnis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressReplication = this._ingressReplication;
    }
    if (this._ipv4MulticastGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4MulticastGroup = this._ipv4MulticastGroup;
    }
    if (this._localRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRouting = this._localRouting;
    }
    if (this._vniRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniRange = this._vniRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceNveVnis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressReplication = undefined;
      this._ipv4MulticastGroup = undefined;
      this._localRouting = undefined;
      this._vniRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressReplication = value.ingressReplication;
      this._ipv4MulticastGroup = value.ipv4MulticastGroup;
      this._localRouting = value.localRouting;
      this._vniRange = value.vniRange;
    }
  }

  // ingress_replication - computed: false, optional: true, required: false
  private _ingressReplication?: boolean | cdktf.IResolvable; 
  public get ingressReplication() {
    return this.getBooleanAttribute('ingress_replication');
  }
  public set ingressReplication(value: boolean | cdktf.IResolvable) {
    this._ingressReplication = value;
  }
  public resetIngressReplication() {
    this._ingressReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressReplicationInput() {
    return this._ingressReplication;
  }

  // ipv4_multicast_group - computed: false, optional: true, required: false
  private _ipv4MulticastGroup?: string; 
  public get ipv4MulticastGroup() {
    return this.getStringAttribute('ipv4_multicast_group');
  }
  public set ipv4MulticastGroup(value: string) {
    this._ipv4MulticastGroup = value;
  }
  public resetIpv4MulticastGroup() {
    this._ipv4MulticastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MulticastGroupInput() {
    return this._ipv4MulticastGroup;
  }

  // local_routing - computed: false, optional: true, required: false
  private _localRouting?: boolean | cdktf.IResolvable; 
  public get localRouting() {
    return this.getBooleanAttribute('local_routing');
  }
  public set localRouting(value: boolean | cdktf.IResolvable) {
    this._localRouting = value;
  }
  public resetLocalRouting() {
    this._localRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoutingInput() {
    return this._localRouting;
  }

  // vni_range - computed: false, optional: false, required: true
  private _vniRange?: string; 
  public get vniRange() {
    return this.getStringAttribute('vni_range');
  }
  public set vniRange(value: string) {
    this._vniRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniRangeInput() {
    return this._vniRange;
  }
}

export class InterfaceNveVnisList extends cdktf.ComplexList {
  public internalValue? : InterfaceNveVnis[] | cdktf.IResolvable

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
  public get(index: number): InterfaceNveVnisOutputReference {
    return new InterfaceNveVnisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve iosxe_interface_nve}
*/
export class InterfaceNve extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_nve";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceNve resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceNve to import
  * @param importFromId The id of the existing InterfaceNve that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceNve to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_nve", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/interface_nve iosxe_interface_nve} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceNveConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceNveConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_nve',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._hostReachabilityProtocolBgp = config.hostReachabilityProtocolBgp;
    this._name = config.name;
    this._shutdown = config.shutdown;
    this._sourceInterfaceLoopback = config.sourceInterfaceLoopback;
    this._vniVrfs.internalValue = config.vniVrfs;
    this._vnis.internalValue = config.vnis;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // host_reachability_protocol_bgp - computed: false, optional: true, required: false
  private _hostReachabilityProtocolBgp?: boolean | cdktf.IResolvable; 
  public get hostReachabilityProtocolBgp() {
    return this.getBooleanAttribute('host_reachability_protocol_bgp');
  }
  public set hostReachabilityProtocolBgp(value: boolean | cdktf.IResolvable) {
    this._hostReachabilityProtocolBgp = value;
  }
  public resetHostReachabilityProtocolBgp() {
    this._hostReachabilityProtocolBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostReachabilityProtocolBgpInput() {
    return this._hostReachabilityProtocolBgp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // source_interface_loopback - computed: false, optional: true, required: false
  private _sourceInterfaceLoopback?: number; 
  public get sourceInterfaceLoopback() {
    return this.getNumberAttribute('source_interface_loopback');
  }
  public set sourceInterfaceLoopback(value: number) {
    this._sourceInterfaceLoopback = value;
  }
  public resetSourceInterfaceLoopback() {
    this._sourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceLoopbackInput() {
    return this._sourceInterfaceLoopback;
  }

  // vni_vrfs - computed: false, optional: true, required: false
  private _vniVrfs = new InterfaceNveVniVrfsList(this, "vni_vrfs", false);
  public get vniVrfs() {
    return this._vniVrfs;
  }
  public putVniVrfs(value: InterfaceNveVniVrfs[] | cdktf.IResolvable) {
    this._vniVrfs.internalValue = value;
  }
  public resetVniVrfs() {
    this._vniVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniVrfsInput() {
    return this._vniVrfs.internalValue;
  }

  // vnis - computed: false, optional: true, required: false
  private _vnis = new InterfaceNveVnisList(this, "vnis", false);
  public get vnis() {
    return this._vnis;
  }
  public putVnis(value: InterfaceNveVnis[] | cdktf.IResolvable) {
    this._vnis.internalValue = value;
  }
  public resetVnis() {
    this._vnis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnisInput() {
    return this._vnis.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      host_reachability_protocol_bgp: cdktf.booleanToTerraform(this._hostReachabilityProtocolBgp),
      name: cdktf.numberToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      source_interface_loopback: cdktf.numberToTerraform(this._sourceInterfaceLoopback),
      vni_vrfs: cdktf.listMapper(interfaceNveVniVrfsToTerraform, false)(this._vniVrfs.internalValue),
      vnis: cdktf.listMapper(interfaceNveVnisToTerraform, false)(this._vnis.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_reachability_protocol_bgp: {
        value: cdktf.booleanToHclTerraform(this._hostReachabilityProtocolBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.numberToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._sourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vni_vrfs: {
        value: cdktf.listMapperHcl(interfaceNveVniVrfsToHclTerraform, false)(this._vniVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceNveVniVrfsList",
      },
      vnis: {
        value: cdktf.listMapperHcl(interfaceNveVnisToHclTerraform, false)(this._vnis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceNveVnisList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
