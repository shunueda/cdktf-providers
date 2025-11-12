// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#delay_mechanism SystemPtp#delay_mechanism}
  */
  readonly delayMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#device_name SystemPtp#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#dynamic_sort_subtable SystemPtp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#id SystemPtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#interface SystemPtp#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#mode SystemPtp#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#request_interval SystemPtp#request_interval}
  */
  readonly requestInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#server_mode SystemPtp#server_mode}
  */
  readonly serverMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#status SystemPtp#status}
  */
  readonly status?: string;
  /**
  * server_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#server_interface SystemPtp#server_interface}
  */
  readonly serverInterface?: SystemPtpServerInterface[] | cdktf.IResolvable;
}
export interface SystemPtpServerInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#delay_mechanism SystemPtp#delay_mechanism}
  */
  readonly delayMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#id SystemPtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#server_interface_name SystemPtp#server_interface_name}
  */
  readonly serverInterfaceName?: string[];
}

export function systemPtpServerInterfaceToTerraform(struct?: SystemPtpServerInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_mechanism: cdktf.stringToTerraform(struct!.delayMechanism),
    id: cdktf.numberToTerraform(struct!.id),
    server_interface_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverInterfaceName),
  }
}


export function systemPtpServerInterfaceToHclTerraform(struct?: SystemPtpServerInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.delayMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_interface_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverInterfaceName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPtpServerInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPtpServerInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayMechanism = this._delayMechanism;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._serverInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverInterfaceName = this._serverInterfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPtpServerInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayMechanism = undefined;
      this._id = undefined;
      this._serverInterfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayMechanism = value.delayMechanism;
      this._id = value.id;
      this._serverInterfaceName = value.serverInterfaceName;
    }
  }

  // delay_mechanism - computed: true, optional: true, required: false
  private _delayMechanism?: string; 
  public get delayMechanism() {
    return this.getStringAttribute('delay_mechanism');
  }
  public set delayMechanism(value: string) {
    this._delayMechanism = value;
  }
  public resetDelayMechanism() {
    this._delayMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayMechanismInput() {
    return this._delayMechanism;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // server_interface_name - computed: true, optional: true, required: false
  private _serverInterfaceName?: string[]; 
  public get serverInterfaceName() {
    return cdktf.Fn.tolist(this.getListAttribute('server_interface_name'));
  }
  public set serverInterfaceName(value: string[]) {
    this._serverInterfaceName = value;
  }
  public resetServerInterfaceName() {
    this._serverInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInterfaceNameInput() {
    return this._serverInterfaceName;
  }
}

export class SystemPtpServerInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemPtpServerInterface[] | cdktf.IResolvable

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
  public get(index: number): SystemPtpServerInterfaceOutputReference {
    return new SystemPtpServerInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp fmgdevice_system_ptp}
*/
export class SystemPtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ptp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPtp to import
  * @param importFromId The id of the existing SystemPtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ptp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ptp fmgdevice_system_ptp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ptp',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delayMechanism = config.delayMechanism;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._interface = config.interface;
    this._mode = config.mode;
    this._requestInterval = config.requestInterval;
    this._serverMode = config.serverMode;
    this._status = config.status;
    this._serverInterface.internalValue = config.serverInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_mechanism - computed: false, optional: true, required: false
  private _delayMechanism?: string; 
  public get delayMechanism() {
    return this.getStringAttribute('delay_mechanism');
  }
  public set delayMechanism(value: string) {
    this._delayMechanism = value;
  }
  public resetDelayMechanism() {
    this._delayMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayMechanismInput() {
    return this._delayMechanism;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // request_interval - computed: true, optional: true, required: false
  private _requestInterval?: number; 
  public get requestInterval() {
    return this.getNumberAttribute('request_interval');
  }
  public set requestInterval(value: number) {
    this._requestInterval = value;
  }
  public resetRequestInterval() {
    this._requestInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIntervalInput() {
    return this._requestInterval;
  }

  // server_mode - computed: true, optional: true, required: false
  private _serverMode?: string; 
  public get serverMode() {
    return this.getStringAttribute('server_mode');
  }
  public set serverMode(value: string) {
    this._serverMode = value;
  }
  public resetServerMode() {
    this._serverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModeInput() {
    return this._serverMode;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // server_interface - computed: false, optional: true, required: false
  private _serverInterface = new SystemPtpServerInterfaceList(this, "server_interface", false);
  public get serverInterface() {
    return this._serverInterface;
  }
  public putServerInterface(value: SystemPtpServerInterface[] | cdktf.IResolvable) {
    this._serverInterface.internalValue = value;
  }
  public resetServerInterface() {
    this._serverInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInterfaceInput() {
    return this._serverInterface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_mechanism: cdktf.stringToTerraform(this._delayMechanism),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      mode: cdktf.stringToTerraform(this._mode),
      request_interval: cdktf.numberToTerraform(this._requestInterval),
      server_mode: cdktf.stringToTerraform(this._serverMode),
      status: cdktf.stringToTerraform(this._status),
      server_interface: cdktf.listMapper(systemPtpServerInterfaceToTerraform, true)(this._serverInterface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_mechanism: {
        value: cdktf.stringToHclTerraform(this._delayMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_interval: {
        value: cdktf.numberToHclTerraform(this._requestInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_mode: {
        value: cdktf.stringToHclTerraform(this._serverMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_interface: {
        value: cdktf.listMapperHcl(systemPtpServerInterfaceToHclTerraform, true)(this._serverInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemPtpServerInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
