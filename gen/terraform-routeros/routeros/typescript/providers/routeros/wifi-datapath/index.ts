// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiDatapathConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#___path___ WifiDatapath#___path___}
  */
  readonly path?: string;
  /**
  * Bridge interface to add the interface as a bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#bridge WifiDatapath#bridge}
  */
  readonly bridge?: string;
  /**
  * Spanning tree protocol cost of the bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#bridge_cost WifiDatapath#bridge_cost}
  */
  readonly bridgeCost?: string;
  /**
  * Bridge horizon to use when adding as a bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#bridge_horizon WifiDatapath#bridge_horizon}
  */
  readonly bridgeHorizon?: string;
  /**
  * An option to toggle communication between clients connected to the same AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#client_isolation WifiDatapath#client_isolation}
  */
  readonly clientIsolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#comment WifiDatapath#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#disabled WifiDatapath#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#id WifiDatapath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List to which add the interface as a member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#interface_list WifiDatapath#interface_list}
  */
  readonly interfaceList?: string;
  /**
  * Name of the datapath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#name WifiDatapath#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#traffic_processing WifiDatapath#traffic_processing}
  */
  readonly trafficProcessing?: string;
  /**
  * Default VLAN ID to assign to client devices connecting to this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#vlan_id WifiDatapath#vlan_id}
  */
  readonly vlanId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath routeros_wifi_datapath}
*/
export class WifiDatapath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_datapath";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiDatapath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiDatapath to import
  * @param importFromId The id of the existing WifiDatapath that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiDatapath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_datapath", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/wifi_datapath routeros_wifi_datapath} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiDatapathConfig
  */
  public constructor(scope: Construct, id: string, config: WifiDatapathConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_datapath',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._bridge = config.bridge;
    this._bridgeCost = config.bridgeCost;
    this._bridgeHorizon = config.bridgeHorizon;
    this._clientIsolation = config.clientIsolation;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interfaceList = config.interfaceList;
    this._name = config.name;
    this._trafficProcessing = config.trafficProcessing;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // bridge_cost - computed: false, optional: true, required: false
  private _bridgeCost?: string; 
  public get bridgeCost() {
    return this.getStringAttribute('bridge_cost');
  }
  public set bridgeCost(value: string) {
    this._bridgeCost = value;
  }
  public resetBridgeCost() {
    this._bridgeCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeCostInput() {
    return this._bridgeCost;
  }

  // bridge_horizon - computed: false, optional: true, required: false
  private _bridgeHorizon?: string; 
  public get bridgeHorizon() {
    return this.getStringAttribute('bridge_horizon');
  }
  public set bridgeHorizon(value: string) {
    this._bridgeHorizon = value;
  }
  public resetBridgeHorizon() {
    this._bridgeHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeHorizonInput() {
    return this._bridgeHorizon;
  }

  // client_isolation - computed: false, optional: true, required: false
  private _clientIsolation?: boolean | cdktf.IResolvable; 
  public get clientIsolation() {
    return this.getBooleanAttribute('client_isolation');
  }
  public set clientIsolation(value: boolean | cdktf.IResolvable) {
    this._clientIsolation = value;
  }
  public resetClientIsolation() {
    this._clientIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIsolationInput() {
    return this._clientIsolation;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList?: string; 
  public get interfaceList() {
    return this.getStringAttribute('interface_list');
  }
  public set interfaceList(value: string) {
    this._interfaceList = value;
  }
  public resetInterfaceList() {
    this._interfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // traffic_processing - computed: false, optional: true, required: false
  private _trafficProcessing?: string; 
  public get trafficProcessing() {
    return this.getStringAttribute('traffic_processing');
  }
  public set trafficProcessing(value: string) {
    this._trafficProcessing = value;
  }
  public resetTrafficProcessing() {
    this._trafficProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficProcessingInput() {
    return this._trafficProcessing;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      bridge: cdktf.stringToTerraform(this._bridge),
      bridge_cost: cdktf.stringToTerraform(this._bridgeCost),
      bridge_horizon: cdktf.stringToTerraform(this._bridgeHorizon),
      client_isolation: cdktf.booleanToTerraform(this._clientIsolation),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface_list: cdktf.stringToTerraform(this._interfaceList),
      name: cdktf.stringToTerraform(this._name),
      traffic_processing: cdktf.stringToTerraform(this._trafficProcessing),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_cost: {
        value: cdktf.stringToHclTerraform(this._bridgeCost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_horizon: {
        value: cdktf.stringToHclTerraform(this._bridgeHorizon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_isolation: {
        value: cdktf.booleanToHclTerraform(this._clientIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_list: {
        value: cdktf.stringToHclTerraform(this._interfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_processing: {
        value: cdktf.stringToHclTerraform(this._trafficProcessing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
