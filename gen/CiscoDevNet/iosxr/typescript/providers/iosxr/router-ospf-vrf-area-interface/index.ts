// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfVrfAreaInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter the OSPF area configuration submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#area_id RouterOspfVrfAreaInterface#area_id}
  */
  readonly areaId: string;
  /**
  * Interface cost
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#cost RouterOspfVrfAreaInterface#cost}
  */
  readonly cost?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#delete_mode RouterOspfVrfAreaInterface#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#device RouterOspfVrfAreaInterface#device}
  */
  readonly device?: string;
  /**
  * Enable routing on an interface 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#interface_name RouterOspfVrfAreaInterface#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#network_broadcast RouterOspfVrfAreaInterface#network_broadcast}
  */
  readonly networkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#network_non_broadcast RouterOspfVrfAreaInterface#network_non_broadcast}
  */
  readonly networkNonBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#network_point_to_multipoint RouterOspfVrfAreaInterface#network_point_to_multipoint}
  */
  readonly networkPointToMultipoint?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#network_point_to_point RouterOspfVrfAreaInterface#network_point_to_point}
  */
  readonly networkPointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Disable passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#passive_disable RouterOspfVrfAreaInterface#passive_disable}
  */
  readonly passiveDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#passive_enable RouterOspfVrfAreaInterface#passive_enable}
  */
  readonly passiveEnable?: boolean | cdktf.IResolvable;
  /**
  * Router priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#priority RouterOspfVrfAreaInterface#priority}
  */
  readonly priority?: number;
  /**
  * Name for this OSPF process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#process_name RouterOspfVrfAreaInterface#process_name}
  */
  readonly processName: string;
  /**
  * Name for this OSPF vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#vrf_name RouterOspfVrfAreaInterface#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface iosxr_router_ospf_vrf_area_interface}
*/
export class RouterOspfVrfAreaInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_ospf_vrf_area_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspfVrfAreaInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspfVrfAreaInterface to import
  * @param importFromId The id of the existing RouterOspfVrfAreaInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspfVrfAreaInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_ospf_vrf_area_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf_area_interface iosxr_router_ospf_vrf_area_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfVrfAreaInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspfVrfAreaInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_ospf_vrf_area_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaId = config.areaId;
    this._cost = config.cost;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._interfaceName = config.interfaceName;
    this._networkBroadcast = config.networkBroadcast;
    this._networkNonBroadcast = config.networkNonBroadcast;
    this._networkPointToMultipoint = config.networkPointToMultipoint;
    this._networkPointToPoint = config.networkPointToPoint;
    this._passiveDisable = config.passiveDisable;
    this._passiveEnable = config.passiveEnable;
    this._priority = config.priority;
    this._processName = config.processName;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

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

  // network_broadcast - computed: false, optional: true, required: false
  private _networkBroadcast?: boolean | cdktf.IResolvable; 
  public get networkBroadcast() {
    return this.getBooleanAttribute('network_broadcast');
  }
  public set networkBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkBroadcast = value;
  }
  public resetNetworkBroadcast() {
    this._networkBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkBroadcastInput() {
    return this._networkBroadcast;
  }

  // network_non_broadcast - computed: false, optional: true, required: false
  private _networkNonBroadcast?: boolean | cdktf.IResolvable; 
  public get networkNonBroadcast() {
    return this.getBooleanAttribute('network_non_broadcast');
  }
  public set networkNonBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkNonBroadcast = value;
  }
  public resetNetworkNonBroadcast() {
    this._networkNonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNonBroadcastInput() {
    return this._networkNonBroadcast;
  }

  // network_point_to_multipoint - computed: false, optional: true, required: false
  private _networkPointToMultipoint?: boolean | cdktf.IResolvable; 
  public get networkPointToMultipoint() {
    return this.getBooleanAttribute('network_point_to_multipoint');
  }
  public set networkPointToMultipoint(value: boolean | cdktf.IResolvable) {
    this._networkPointToMultipoint = value;
  }
  public resetNetworkPointToMultipoint() {
    this._networkPointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPointToMultipointInput() {
    return this._networkPointToMultipoint;
  }

  // network_point_to_point - computed: false, optional: true, required: false
  private _networkPointToPoint?: boolean | cdktf.IResolvable; 
  public get networkPointToPoint() {
    return this.getBooleanAttribute('network_point_to_point');
  }
  public set networkPointToPoint(value: boolean | cdktf.IResolvable) {
    this._networkPointToPoint = value;
  }
  public resetNetworkPointToPoint() {
    this._networkPointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPointToPointInput() {
    return this._networkPointToPoint;
  }

  // passive_disable - computed: false, optional: true, required: false
  private _passiveDisable?: boolean | cdktf.IResolvable; 
  public get passiveDisable() {
    return this.getBooleanAttribute('passive_disable');
  }
  public set passiveDisable(value: boolean | cdktf.IResolvable) {
    this._passiveDisable = value;
  }
  public resetPassiveDisable() {
    this._passiveDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveDisableInput() {
    return this._passiveDisable;
  }

  // passive_enable - computed: false, optional: true, required: false
  private _passiveEnable?: boolean | cdktf.IResolvable; 
  public get passiveEnable() {
    return this.getBooleanAttribute('passive_enable');
  }
  public set passiveEnable(value: boolean | cdktf.IResolvable) {
    this._passiveEnable = value;
  }
  public resetPassiveEnable() {
    this._passiveEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveEnableInput() {
    return this._passiveEnable;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // process_name - computed: false, optional: false, required: true
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_id: cdktf.stringToTerraform(this._areaId),
      cost: cdktf.numberToTerraform(this._cost),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      network_broadcast: cdktf.booleanToTerraform(this._networkBroadcast),
      network_non_broadcast: cdktf.booleanToTerraform(this._networkNonBroadcast),
      network_point_to_multipoint: cdktf.booleanToTerraform(this._networkPointToMultipoint),
      network_point_to_point: cdktf.booleanToTerraform(this._networkPointToPoint),
      passive_disable: cdktf.booleanToTerraform(this._passiveDisable),
      passive_enable: cdktf.booleanToTerraform(this._passiveEnable),
      priority: cdktf.numberToTerraform(this._priority),
      process_name: cdktf.stringToTerraform(this._processName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_id: {
        value: cdktf.stringToHclTerraform(this._areaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_non_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkNonBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_point_to_multipoint: {
        value: cdktf.booleanToHclTerraform(this._networkPointToMultipoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_point_to_point: {
        value: cdktf.booleanToHclTerraform(this._networkPointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive_disable: {
        value: cdktf.booleanToHclTerraform(this._passiveDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive_enable: {
        value: cdktf.booleanToHclTerraform(this._passiveEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_name: {
        value: cdktf.stringToHclTerraform(this._processName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
