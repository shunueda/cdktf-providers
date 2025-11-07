// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HwConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#custom_script_uid Hw#custom_script_uid}
  */
  readonly customScriptUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#hardware_console_enabled Hw#hardware_console_enabled}
  */
  readonly hardwareConsoleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#id Hw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#inventory_hw_id Hw#inventory_hw_id}
  */
  readonly inventoryHwId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#name Hw#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#power_control_enabled Hw#power_control_enabled}
  */
  readonly powerControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#shutdown_script_uid Hw#shutdown_script_uid}
  */
  readonly shutdownScriptUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#startup_script_uid Hw#startup_script_uid}
  */
  readonly startupScriptUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#template_config_script_uid Hw#template_config_script_uid}
  */
  readonly templateConfigScriptUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#topology_uid Hw#topology_uid}
  */
  readonly topologyUid: string;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#network_interfaces Hw#network_interfaces}
  */
  readonly networkInterfaces?: HwNetworkInterfaces[] | cdktf.IResolvable;
}
export interface HwNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#network_interface_id Hw#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#network_uid Hw#network_uid}
  */
  readonly networkUid: string;
}

export function hwNetworkInterfacesToTerraform(struct?: HwNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    network_uid: cdktf.stringToTerraform(struct!.networkUid),
  }
}


export function hwNetworkInterfacesToHclTerraform(struct?: HwNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_uid: {
      value: cdktf.stringToHclTerraform(struct!.networkUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HwNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HwNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._networkUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUid = this._networkUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HwNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkInterfaceId = undefined;
      this._networkUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkInterfaceId = value.networkInterfaceId;
      this._networkUid = value.networkUid;
    }
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // network_uid - computed: false, optional: false, required: true
  private _networkUid?: string; 
  public get networkUid() {
    return this.getStringAttribute('network_uid');
  }
  public set networkUid(value: string) {
    this._networkUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUidInput() {
    return this._networkUid;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class HwNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : HwNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): HwNetworkInterfacesOutputReference {
    return new HwNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw dcloud_hw}
*/
export class Hw extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_hw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hw to import
  * @param importFromId The id of the existing Hw that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_hw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/hw dcloud_hw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HwConfig
  */
  public constructor(scope: Construct, id: string, config: HwConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_hw',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customScriptUid = config.customScriptUid;
    this._hardwareConsoleEnabled = config.hardwareConsoleEnabled;
    this._id = config.id;
    this._inventoryHwId = config.inventoryHwId;
    this._name = config.name;
    this._powerControlEnabled = config.powerControlEnabled;
    this._shutdownScriptUid = config.shutdownScriptUid;
    this._startupScriptUid = config.startupScriptUid;
    this._templateConfigScriptUid = config.templateConfigScriptUid;
    this._topologyUid = config.topologyUid;
    this._networkInterfaces.internalValue = config.networkInterfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_script_uid - computed: false, optional: true, required: false
  private _customScriptUid?: string; 
  public get customScriptUid() {
    return this.getStringAttribute('custom_script_uid');
  }
  public set customScriptUid(value: string) {
    this._customScriptUid = value;
  }
  public resetCustomScriptUid() {
    this._customScriptUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScriptUidInput() {
    return this._customScriptUid;
  }

  // hardware_console_enabled - computed: false, optional: true, required: false
  private _hardwareConsoleEnabled?: boolean | cdktf.IResolvable; 
  public get hardwareConsoleEnabled() {
    return this.getBooleanAttribute('hardware_console_enabled');
  }
  public set hardwareConsoleEnabled(value: boolean | cdktf.IResolvable) {
    this._hardwareConsoleEnabled = value;
  }
  public resetHardwareConsoleEnabled() {
    this._hardwareConsoleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareConsoleEnabledInput() {
    return this._hardwareConsoleEnabled;
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

  // inventory_hw_id - computed: false, optional: false, required: true
  private _inventoryHwId?: string; 
  public get inventoryHwId() {
    return this.getStringAttribute('inventory_hw_id');
  }
  public set inventoryHwId(value: string) {
    this._inventoryHwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryHwIdInput() {
    return this._inventoryHwId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // power_control_enabled - computed: false, optional: true, required: false
  private _powerControlEnabled?: boolean | cdktf.IResolvable; 
  public get powerControlEnabled() {
    return this.getBooleanAttribute('power_control_enabled');
  }
  public set powerControlEnabled(value: boolean | cdktf.IResolvable) {
    this._powerControlEnabled = value;
  }
  public resetPowerControlEnabled() {
    this._powerControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerControlEnabledInput() {
    return this._powerControlEnabled;
  }

  // shutdown_script_uid - computed: false, optional: true, required: false
  private _shutdownScriptUid?: string; 
  public get shutdownScriptUid() {
    return this.getStringAttribute('shutdown_script_uid');
  }
  public set shutdownScriptUid(value: string) {
    this._shutdownScriptUid = value;
  }
  public resetShutdownScriptUid() {
    this._shutdownScriptUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptUidInput() {
    return this._shutdownScriptUid;
  }

  // startup_script_uid - computed: false, optional: true, required: false
  private _startupScriptUid?: string; 
  public get startupScriptUid() {
    return this.getStringAttribute('startup_script_uid');
  }
  public set startupScriptUid(value: string) {
    this._startupScriptUid = value;
  }
  public resetStartupScriptUid() {
    this._startupScriptUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptUidInput() {
    return this._startupScriptUid;
  }

  // template_config_script_uid - computed: false, optional: true, required: false
  private _templateConfigScriptUid?: string; 
  public get templateConfigScriptUid() {
    return this.getStringAttribute('template_config_script_uid');
  }
  public set templateConfigScriptUid(value: string) {
    this._templateConfigScriptUid = value;
  }
  public resetTemplateConfigScriptUid() {
    this._templateConfigScriptUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigScriptUidInput() {
    return this._templateConfigScriptUid;
  }

  // topology_uid - computed: false, optional: false, required: true
  private _topologyUid?: string; 
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }
  public set topologyUid(value: string) {
    this._topologyUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUidInput() {
    return this._topologyUid;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new HwNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: HwNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_script_uid: cdktf.stringToTerraform(this._customScriptUid),
      hardware_console_enabled: cdktf.booleanToTerraform(this._hardwareConsoleEnabled),
      id: cdktf.stringToTerraform(this._id),
      inventory_hw_id: cdktf.stringToTerraform(this._inventoryHwId),
      name: cdktf.stringToTerraform(this._name),
      power_control_enabled: cdktf.booleanToTerraform(this._powerControlEnabled),
      shutdown_script_uid: cdktf.stringToTerraform(this._shutdownScriptUid),
      startup_script_uid: cdktf.stringToTerraform(this._startupScriptUid),
      template_config_script_uid: cdktf.stringToTerraform(this._templateConfigScriptUid),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
      network_interfaces: cdktf.listMapper(hwNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_script_uid: {
        value: cdktf.stringToHclTerraform(this._customScriptUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_console_enabled: {
        value: cdktf.booleanToHclTerraform(this._hardwareConsoleEnabled),
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
      inventory_hw_id: {
        value: cdktf.stringToHclTerraform(this._inventoryHwId),
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
      power_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._powerControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_script_uid: {
        value: cdktf.stringToHclTerraform(this._shutdownScriptUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_script_uid: {
        value: cdktf.stringToHclTerraform(this._startupScriptUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_config_script_uid: {
        value: cdktf.stringToHclTerraform(this._templateConfigScriptUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_uid: {
        value: cdktf.stringToHclTerraform(this._topologyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(hwNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HwNetworkInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
