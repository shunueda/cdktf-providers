// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Border priority of the fabric border device. A lower value indicates higher priority
  *   - Range: `1`-`9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#border_priority FabricDevice#border_priority}
  */
  readonly borderPriority?: number;
  /**
  * List of the border types of the fabric device. Allowed values are [LAYER_2, LAYER_3]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#border_types FabricDevice#border_types}
  */
  readonly borderTypes?: string[];
  /**
  * Set this to make the fabric border device the gateway of last resort for this site. Any unknown traffic will be sent to this fabric border device from edge nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#default_exit FabricDevice#default_exit}
  */
  readonly defaultExit?: boolean | cdktf.IResolvable;
  /**
  * List of the roles of the fabric device. Allowed values are [CONTROL_PLANE_NODE, EDGE_NODE, BORDER_NODE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#device_roles FabricDevice#device_roles}
  */
  readonly deviceRoles: string[];
  /**
  * ID of the fabric site/zone of this fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#fabric_id FabricDevice#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Set this to import external routes from other routing protocols (such as BGP) to the fabric control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#import_external_routes FabricDevice#import_external_routes}
  */
  readonly importExternalRoutes?: boolean | cdktf.IResolvable;
  /**
  * BGP Local autonomous system number of the fabric border device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#local_autonomous_system_number FabricDevice#local_autonomous_system_number}
  */
  readonly localAutonomousSystemNumber?: string;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#network_device_id FabricDevice#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Prepend autonomous system count of the fabric border device
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#prepend_autonomous_system_count FabricDevice#prepend_autonomous_system_count}
  */
  readonly prependAutonomousSystemCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device catalystcenter_fabric_device}
*/
export class FabricDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricDevice to import
  * @param importFromId The id of the existing FabricDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_device catalystcenter_fabric_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: FabricDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_device',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._borderPriority = config.borderPriority;
    this._borderTypes = config.borderTypes;
    this._defaultExit = config.defaultExit;
    this._deviceRoles = config.deviceRoles;
    this._fabricId = config.fabricId;
    this._importExternalRoutes = config.importExternalRoutes;
    this._localAutonomousSystemNumber = config.localAutonomousSystemNumber;
    this._networkDeviceId = config.networkDeviceId;
    this._prependAutonomousSystemCount = config.prependAutonomousSystemCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // border_priority - computed: false, optional: true, required: false
  private _borderPriority?: number; 
  public get borderPriority() {
    return this.getNumberAttribute('border_priority');
  }
  public set borderPriority(value: number) {
    this._borderPriority = value;
  }
  public resetBorderPriority() {
    this._borderPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderPriorityInput() {
    return this._borderPriority;
  }

  // border_types - computed: false, optional: true, required: false
  private _borderTypes?: string[]; 
  public get borderTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('border_types'));
  }
  public set borderTypes(value: string[]) {
    this._borderTypes = value;
  }
  public resetBorderTypes() {
    this._borderTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderTypesInput() {
    return this._borderTypes;
  }

  // default_exit - computed: false, optional: true, required: false
  private _defaultExit?: boolean | cdktf.IResolvable; 
  public get defaultExit() {
    return this.getBooleanAttribute('default_exit');
  }
  public set defaultExit(value: boolean | cdktf.IResolvable) {
    this._defaultExit = value;
  }
  public resetDefaultExit() {
    this._defaultExit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExitInput() {
    return this._defaultExit;
  }

  // device_roles - computed: false, optional: false, required: true
  private _deviceRoles?: string[]; 
  public get deviceRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('device_roles'));
  }
  public set deviceRoles(value: string[]) {
    this._deviceRoles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRolesInput() {
    return this._deviceRoles;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_external_routes - computed: false, optional: true, required: false
  private _importExternalRoutes?: boolean | cdktf.IResolvable; 
  public get importExternalRoutes() {
    return this.getBooleanAttribute('import_external_routes');
  }
  public set importExternalRoutes(value: boolean | cdktf.IResolvable) {
    this._importExternalRoutes = value;
  }
  public resetImportExternalRoutes() {
    this._importExternalRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importExternalRoutesInput() {
    return this._importExternalRoutes;
  }

  // local_autonomous_system_number - computed: false, optional: true, required: false
  private _localAutonomousSystemNumber?: string; 
  public get localAutonomousSystemNumber() {
    return this.getStringAttribute('local_autonomous_system_number');
  }
  public set localAutonomousSystemNumber(value: string) {
    this._localAutonomousSystemNumber = value;
  }
  public resetLocalAutonomousSystemNumber() {
    this._localAutonomousSystemNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAutonomousSystemNumberInput() {
    return this._localAutonomousSystemNumber;
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // prepend_autonomous_system_count - computed: false, optional: true, required: false
  private _prependAutonomousSystemCount?: number; 
  public get prependAutonomousSystemCount() {
    return this.getNumberAttribute('prepend_autonomous_system_count');
  }
  public set prependAutonomousSystemCount(value: number) {
    this._prependAutonomousSystemCount = value;
  }
  public resetPrependAutonomousSystemCount() {
    this._prependAutonomousSystemCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAutonomousSystemCountInput() {
    return this._prependAutonomousSystemCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      border_priority: cdktf.numberToTerraform(this._borderPriority),
      border_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._borderTypes),
      default_exit: cdktf.booleanToTerraform(this._defaultExit),
      device_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceRoles),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      import_external_routes: cdktf.booleanToTerraform(this._importExternalRoutes),
      local_autonomous_system_number: cdktf.stringToTerraform(this._localAutonomousSystemNumber),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
      prepend_autonomous_system_count: cdktf.numberToTerraform(this._prependAutonomousSystemCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      border_priority: {
        value: cdktf.numberToHclTerraform(this._borderPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      border_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._borderTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_exit: {
        value: cdktf.booleanToHclTerraform(this._defaultExit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_external_routes: {
        value: cdktf.booleanToHclTerraform(this._importExternalRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_autonomous_system_number: {
        value: cdktf.stringToHclTerraform(this._localAutonomousSystemNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_device_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepend_autonomous_system_count: {
        value: cdktf.numberToHclTerraform(this._prependAutonomousSystemCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
