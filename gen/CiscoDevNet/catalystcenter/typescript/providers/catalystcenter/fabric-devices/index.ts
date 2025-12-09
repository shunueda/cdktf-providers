// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricDevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of fabric devices to be managed in bulk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#fabric_devices FabricDevices#fabric_devices}
  */
  readonly fabricDevices: FabricDevicesFabricDevices[] | cdktf.IResolvable;
  /**
  * ID of the fabric this device belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#fabric_id FabricDevices#fabric_id}
  */
  readonly fabricId: string;
}
export interface FabricDevicesFabricDevices {
  /**
  * Border priority of the fabric border device. Allowed range is [1-9]. A lower value indicates higher priority. E.g., a priority of 1 takes precedence over 5. Default priority would be set to 10.
  *   - Range: `1`-`9`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#border_priority FabricDevices#border_priority}
  */
  readonly borderPriority?: number;
  /**
  * List of the border types of the fabric device. Allowed values are [LAYER_2, LAYER_3]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#border_types FabricDevices#border_types}
  */
  readonly borderTypes?: string[];
  /**
  * Set this to make the fabric border device the gateway of last resort for this site. Any unknown traffic will be sent to this fabric border device from edge nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#default_exit FabricDevices#default_exit}
  */
  readonly defaultExit?: boolean | cdktf.IResolvable;
  /**
  * List of the roles of the fabric device. Allowed values are [CONTROL_PLANE_NODE, EDGE_NODE, BORDER_NODE, WIRELESS_CONTROLLER_NODE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#device_roles FabricDevices#device_roles}
  */
  readonly deviceRoles: string[];
  /**
  * ID of the fabric of this fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#fabric_id FabricDevices#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Set this to import external routes from other routing protocols (such as BGP) to the fabric control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#import_external_routes FabricDevices#import_external_routes}
  */
  readonly importExternalRoutes?: boolean | cdktf.IResolvable;
  /**
  * BGP Local autonomous system number of the fabric border device. Allowed range is [1 to 4294967295].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#local_autonomous_system_number FabricDevices#local_autonomous_system_number}
  */
  readonly localAutonomousSystemNumber?: string;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#network_device_id FabricDevices#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Prepend autonomous system count of the fabric border device. Allowed range is [1 to 10].
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#prepend_autonomous_system_count FabricDevices#prepend_autonomous_system_count}
  */
  readonly prependAutonomousSystemCount?: number;
}

export function fabricDevicesFabricDevicesToTerraform(struct?: FabricDevicesFabricDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    border_priority: cdktf.numberToTerraform(struct!.borderPriority),
    border_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.borderTypes),
    default_exit: cdktf.booleanToTerraform(struct!.defaultExit),
    device_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceRoles),
    fabric_id: cdktf.stringToTerraform(struct!.fabricId),
    import_external_routes: cdktf.booleanToTerraform(struct!.importExternalRoutes),
    local_autonomous_system_number: cdktf.stringToTerraform(struct!.localAutonomousSystemNumber),
    network_device_id: cdktf.stringToTerraform(struct!.networkDeviceId),
    prepend_autonomous_system_count: cdktf.numberToTerraform(struct!.prependAutonomousSystemCount),
  }
}


export function fabricDevicesFabricDevicesToHclTerraform(struct?: FabricDevicesFabricDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    border_priority: {
      value: cdktf.numberToHclTerraform(struct!.borderPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    border_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.borderTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_exit: {
      value: cdktf.booleanToHclTerraform(struct!.defaultExit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fabric_id: {
      value: cdktf.stringToHclTerraform(struct!.fabricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_external_routes: {
      value: cdktf.booleanToHclTerraform(struct!.importExternalRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_autonomous_system_number: {
      value: cdktf.stringToHclTerraform(struct!.localAutonomousSystemNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_device_id: {
      value: cdktf.stringToHclTerraform(struct!.networkDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepend_autonomous_system_count: {
      value: cdktf.numberToHclTerraform(struct!.prependAutonomousSystemCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricDevicesFabricDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricDevicesFabricDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borderPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderPriority = this._borderPriority;
    }
    if (this._borderTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderTypes = this._borderTypes;
    }
    if (this._defaultExit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultExit = this._defaultExit;
    }
    if (this._deviceRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRoles = this._deviceRoles;
    }
    if (this._fabricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricId = this._fabricId;
    }
    if (this._importExternalRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.importExternalRoutes = this._importExternalRoutes;
    }
    if (this._localAutonomousSystemNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAutonomousSystemNumber = this._localAutonomousSystemNumber;
    }
    if (this._networkDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDeviceId = this._networkDeviceId;
    }
    if (this._prependAutonomousSystemCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.prependAutonomousSystemCount = this._prependAutonomousSystemCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricDevicesFabricDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._borderPriority = undefined;
      this._borderTypes = undefined;
      this._defaultExit = undefined;
      this._deviceRoles = undefined;
      this._fabricId = undefined;
      this._importExternalRoutes = undefined;
      this._localAutonomousSystemNumber = undefined;
      this._networkDeviceId = undefined;
      this._prependAutonomousSystemCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._borderPriority = value.borderPriority;
      this._borderTypes = value.borderTypes;
      this._defaultExit = value.defaultExit;
      this._deviceRoles = value.deviceRoles;
      this._fabricId = value.fabricId;
      this._importExternalRoutes = value.importExternalRoutes;
      this._localAutonomousSystemNumber = value.localAutonomousSystemNumber;
      this._networkDeviceId = value.networkDeviceId;
      this._prependAutonomousSystemCount = value.prependAutonomousSystemCount;
    }
  }

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
}

export class FabricDevicesFabricDevicesList extends cdktf.ComplexList {
  public internalValue? : FabricDevicesFabricDevices[] | cdktf.IResolvable

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
  public get(index: number): FabricDevicesFabricDevicesOutputReference {
    return new FabricDevicesFabricDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices catalystcenter_fabric_devices}
*/
export class FabricDevices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricDevices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricDevices to import
  * @param importFromId The id of the existing FabricDevices that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricDevices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_devices catalystcenter_fabric_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricDevicesConfig
  */
  public constructor(scope: Construct, id: string, config: FabricDevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_devices',
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
    this._fabricDevices.internalValue = config.fabricDevices;
    this._fabricId = config.fabricId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_devices - computed: false, optional: false, required: true
  private _fabricDevices = new FabricDevicesFabricDevicesList(this, "fabric_devices", true);
  public get fabricDevices() {
    return this._fabricDevices;
  }
  public putFabricDevices(value: FabricDevicesFabricDevices[] | cdktf.IResolvable) {
    this._fabricDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricDevicesInput() {
    return this._fabricDevices.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_devices: cdktf.listMapper(fabricDevicesFabricDevicesToTerraform, false)(this._fabricDevices.internalValue),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_devices: {
        value: cdktf.listMapperHcl(fabricDevicesFabricDevicesToHclTerraform, false)(this._fabricDevices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricDevicesFabricDevicesList",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
