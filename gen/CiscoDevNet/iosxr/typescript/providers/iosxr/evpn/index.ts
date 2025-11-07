// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#delete_mode Evpn#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#device Evpn#device}
  */
  readonly device?: string;
  /**
  * Specify interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#interfaces Evpn#interfaces}
  */
  readonly interfaces?: EvpnInterfaces[] | cdktf.IResolvable;
  /**
  * Configure EVPN router-id implicitly through Loopback Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#source_interface Evpn#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * SRv6 configuration for EVPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#srv6 Evpn#srv6}
  */
  readonly srv6?: boolean | cdktf.IResolvable;
  /**
  * Default locator to use for EVPN SID allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#srv6_locators Evpn#srv6_locators}
  */
  readonly srv6Locators?: EvpnSrv6Locators[] | cdktf.IResolvable;
  /**
  * Enable uSID wide function global knob
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#srv6_usid_allocation_wide_local_id_block Evpn#srv6_usid_allocation_wide_local_id_block}
  */
  readonly srv6UsidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable;
}
export interface EvpnInterfaces {
  /**
  * Ethernet Segment configuration commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#ethernet_segment_enable Evpn#ethernet_segment_enable}
  */
  readonly ethernetSegmentEnable?: boolean | cdktf.IResolvable;
  /**
  * ESI value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#ethernet_segment_esi_zero Evpn#ethernet_segment_esi_zero}
  */
  readonly ethernetSegmentEsiZero: string;
  /**
  * Specify interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#interface_name Evpn#interface_name}
  */
  readonly interfaceName: string;
}

export function evpnInterfacesToTerraform(struct?: EvpnInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_segment_enable: cdktf.booleanToTerraform(struct!.ethernetSegmentEnable),
    ethernet_segment_esi_zero: cdktf.stringToTerraform(struct!.ethernetSegmentEsiZero),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function evpnInterfacesToHclTerraform(struct?: EvpnInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_segment_enable: {
      value: cdktf.booleanToHclTerraform(struct!.ethernetSegmentEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ethernet_segment_esi_zero: {
      value: cdktf.stringToHclTerraform(struct!.ethernetSegmentEsiZero),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetSegmentEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetSegmentEnable = this._ethernetSegmentEnable;
    }
    if (this._ethernetSegmentEsiZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetSegmentEsiZero = this._ethernetSegmentEsiZero;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetSegmentEnable = undefined;
      this._ethernetSegmentEsiZero = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetSegmentEnable = value.ethernetSegmentEnable;
      this._ethernetSegmentEsiZero = value.ethernetSegmentEsiZero;
      this._interfaceName = value.interfaceName;
    }
  }

  // ethernet_segment_enable - computed: false, optional: true, required: false
  private _ethernetSegmentEnable?: boolean | cdktf.IResolvable; 
  public get ethernetSegmentEnable() {
    return this.getBooleanAttribute('ethernet_segment_enable');
  }
  public set ethernetSegmentEnable(value: boolean | cdktf.IResolvable) {
    this._ethernetSegmentEnable = value;
  }
  public resetEthernetSegmentEnable() {
    this._ethernetSegmentEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSegmentEnableInput() {
    return this._ethernetSegmentEnable;
  }

  // ethernet_segment_esi_zero - computed: false, optional: false, required: true
  private _ethernetSegmentEsiZero?: string; 
  public get ethernetSegmentEsiZero() {
    return this.getStringAttribute('ethernet_segment_esi_zero');
  }
  public set ethernetSegmentEsiZero(value: string) {
    this._ethernetSegmentEsiZero = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSegmentEsiZeroInput() {
    return this._ethernetSegmentEsiZero;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class EvpnInterfacesList extends cdktf.ComplexList {
  public internalValue? : EvpnInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EvpnInterfacesOutputReference {
    return new EvpnInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnSrv6Locators {
  /**
  * Default locator to use for EVPN SID allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#locator_name Evpn#locator_name}
  */
  readonly locatorName: string;
  /**
  * Enable uSID wide function knob for the locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#usid_allocation_wide_local_id_block Evpn#usid_allocation_wide_local_id_block}
  */
  readonly usidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable;
}

export function evpnSrv6LocatorsToTerraform(struct?: EvpnSrv6Locators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator_name: cdktf.stringToTerraform(struct!.locatorName),
    usid_allocation_wide_local_id_block: cdktf.booleanToTerraform(struct!.usidAllocationWideLocalIdBlock),
  }
}


export function evpnSrv6LocatorsToHclTerraform(struct?: EvpnSrv6Locators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator_name: {
      value: cdktf.stringToHclTerraform(struct!.locatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usid_allocation_wide_local_id_block: {
      value: cdktf.booleanToHclTerraform(struct!.usidAllocationWideLocalIdBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnSrv6LocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSrv6Locators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locatorName = this._locatorName;
    }
    if (this._usidAllocationWideLocalIdBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.usidAllocationWideLocalIdBlock = this._usidAllocationWideLocalIdBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnSrv6Locators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locatorName = undefined;
      this._usidAllocationWideLocalIdBlock = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locatorName = value.locatorName;
      this._usidAllocationWideLocalIdBlock = value.usidAllocationWideLocalIdBlock;
    }
  }

  // locator_name - computed: false, optional: false, required: true
  private _locatorName?: string; 
  public get locatorName() {
    return this.getStringAttribute('locator_name');
  }
  public set locatorName(value: string) {
    this._locatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorNameInput() {
    return this._locatorName;
  }

  // usid_allocation_wide_local_id_block - computed: false, optional: true, required: false
  private _usidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable; 
  public get usidAllocationWideLocalIdBlock() {
    return this.getBooleanAttribute('usid_allocation_wide_local_id_block');
  }
  public set usidAllocationWideLocalIdBlock(value: boolean | cdktf.IResolvable) {
    this._usidAllocationWideLocalIdBlock = value;
  }
  public resetUsidAllocationWideLocalIdBlock() {
    this._usidAllocationWideLocalIdBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usidAllocationWideLocalIdBlockInput() {
    return this._usidAllocationWideLocalIdBlock;
  }
}

export class EvpnSrv6LocatorsList extends cdktf.ComplexList {
  public internalValue? : EvpnSrv6Locators[] | cdktf.IResolvable

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
  public get(index: number): EvpnSrv6LocatorsOutputReference {
    return new EvpnSrv6LocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn iosxr_evpn}
*/
export class Evpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Evpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Evpn to import
  * @param importFromId The id of the existing Evpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Evpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn iosxr_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_evpn',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
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
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._interfaces.internalValue = config.interfaces;
    this._sourceInterface = config.sourceInterface;
    this._srv6 = config.srv6;
    this._srv6Locators.internalValue = config.srv6Locators;
    this._srv6UsidAllocationWideLocalIdBlock = config.srv6UsidAllocationWideLocalIdBlock;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new EvpnInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: EvpnInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // srv6 - computed: false, optional: true, required: false
  private _srv6?: boolean | cdktf.IResolvable; 
  public get srv6() {
    return this.getBooleanAttribute('srv6');
  }
  public set srv6(value: boolean | cdktf.IResolvable) {
    this._srv6 = value;
  }
  public resetSrv6() {
    this._srv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6Input() {
    return this._srv6;
  }

  // srv6_locators - computed: false, optional: true, required: false
  private _srv6Locators = new EvpnSrv6LocatorsList(this, "srv6_locators", false);
  public get srv6Locators() {
    return this._srv6Locators;
  }
  public putSrv6Locators(value: EvpnSrv6Locators[] | cdktf.IResolvable) {
    this._srv6Locators.internalValue = value;
  }
  public resetSrv6Locators() {
    this._srv6Locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6LocatorsInput() {
    return this._srv6Locators.internalValue;
  }

  // srv6_usid_allocation_wide_local_id_block - computed: false, optional: true, required: false
  private _srv6UsidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable; 
  public get srv6UsidAllocationWideLocalIdBlock() {
    return this.getBooleanAttribute('srv6_usid_allocation_wide_local_id_block');
  }
  public set srv6UsidAllocationWideLocalIdBlock(value: boolean | cdktf.IResolvable) {
    this._srv6UsidAllocationWideLocalIdBlock = value;
  }
  public resetSrv6UsidAllocationWideLocalIdBlock() {
    this._srv6UsidAllocationWideLocalIdBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6UsidAllocationWideLocalIdBlockInput() {
    return this._srv6UsidAllocationWideLocalIdBlock;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      interfaces: cdktf.listMapper(evpnInterfacesToTerraform, false)(this._interfaces.internalValue),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
      srv6: cdktf.booleanToTerraform(this._srv6),
      srv6_locators: cdktf.listMapper(evpnSrv6LocatorsToTerraform, false)(this._srv6Locators.internalValue),
      srv6_usid_allocation_wide_local_id_block: cdktf.booleanToTerraform(this._srv6UsidAllocationWideLocalIdBlock),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(evpnInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnInterfacesList",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srv6: {
        value: cdktf.booleanToHclTerraform(this._srv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      srv6_locators: {
        value: cdktf.listMapperHcl(evpnSrv6LocatorsToHclTerraform, false)(this._srv6Locators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSrv6LocatorsList",
      },
      srv6_usid_allocation_wide_local_id_block: {
        value: cdktf.booleanToHclTerraform(this._srv6UsidAllocationWideLocalIdBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
