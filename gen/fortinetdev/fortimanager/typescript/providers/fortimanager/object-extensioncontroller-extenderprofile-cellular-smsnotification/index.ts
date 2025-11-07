// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#adom ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#dynamic_sort_subtable ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#extender_profile ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#id ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#scopetype ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#status ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#status}
  */
  readonly status?: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#alert ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#alert}
  */
  readonly alert?: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlert;
  /**
  * receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#receiver ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#receiver}
  */
  readonly receiver?: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver[] | cdktf.IResolvable;
}
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#data_exhausted ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#data_exhausted}
  */
  readonly dataExhausted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#fgt_backup_mode_switch ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#fgt_backup_mode_switch}
  */
  readonly fgtBackupModeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#low_signal_strength ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#low_signal_strength}
  */
  readonly lowSignalStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#mode_switch ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#mode_switch}
  */
  readonly modeSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#os_image_fallback ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#os_image_fallback}
  */
  readonly osImageFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#session_disconnect ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#session_disconnect}
  */
  readonly sessionDisconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#system_reboot ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#system_reboot}
  */
  readonly systemReboot?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_exhausted: cdktf.stringToTerraform(struct!.dataExhausted),
    fgt_backup_mode_switch: cdktf.stringToTerraform(struct!.fgtBackupModeSwitch),
    low_signal_strength: cdktf.stringToTerraform(struct!.lowSignalStrength),
    mode_switch: cdktf.stringToTerraform(struct!.modeSwitch),
    os_image_fallback: cdktf.stringToTerraform(struct!.osImageFallback),
    session_disconnect: cdktf.stringToTerraform(struct!.sessionDisconnect),
    system_reboot: cdktf.stringToTerraform(struct!.systemReboot),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertOutputReference | ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_exhausted: {
      value: cdktf.stringToHclTerraform(struct!.dataExhausted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fgt_backup_mode_switch: {
      value: cdktf.stringToHclTerraform(struct!.fgtBackupModeSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_signal_strength: {
      value: cdktf.stringToHclTerraform(struct!.lowSignalStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode_switch: {
      value: cdktf.stringToHclTerraform(struct!.modeSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_image_fallback: {
      value: cdktf.stringToHclTerraform(struct!.osImageFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_disconnect: {
      value: cdktf.stringToHclTerraform(struct!.sessionDisconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_reboot: {
      value: cdktf.stringToHclTerraform(struct!.systemReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataExhausted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExhausted = this._dataExhausted;
    }
    if (this._fgtBackupModeSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fgtBackupModeSwitch = this._fgtBackupModeSwitch;
    }
    if (this._lowSignalStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSignalStrength = this._lowSignalStrength;
    }
    if (this._modeSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeSwitch = this._modeSwitch;
    }
    if (this._osImageFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImageFallback = this._osImageFallback;
    }
    if (this._sessionDisconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDisconnect = this._sessionDisconnect;
    }
    if (this._systemReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReboot = this._systemReboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataExhausted = undefined;
      this._fgtBackupModeSwitch = undefined;
      this._lowSignalStrength = undefined;
      this._modeSwitch = undefined;
      this._osImageFallback = undefined;
      this._sessionDisconnect = undefined;
      this._systemReboot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataExhausted = value.dataExhausted;
      this._fgtBackupModeSwitch = value.fgtBackupModeSwitch;
      this._lowSignalStrength = value.lowSignalStrength;
      this._modeSwitch = value.modeSwitch;
      this._osImageFallback = value.osImageFallback;
      this._sessionDisconnect = value.sessionDisconnect;
      this._systemReboot = value.systemReboot;
    }
  }

  // data_exhausted - computed: true, optional: true, required: false
  private _dataExhausted?: string; 
  public get dataExhausted() {
    return this.getStringAttribute('data_exhausted');
  }
  public set dataExhausted(value: string) {
    this._dataExhausted = value;
  }
  public resetDataExhausted() {
    this._dataExhausted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExhaustedInput() {
    return this._dataExhausted;
  }

  // fgt_backup_mode_switch - computed: true, optional: true, required: false
  private _fgtBackupModeSwitch?: string; 
  public get fgtBackupModeSwitch() {
    return this.getStringAttribute('fgt_backup_mode_switch');
  }
  public set fgtBackupModeSwitch(value: string) {
    this._fgtBackupModeSwitch = value;
  }
  public resetFgtBackupModeSwitch() {
    this._fgtBackupModeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtBackupModeSwitchInput() {
    return this._fgtBackupModeSwitch;
  }

  // low_signal_strength - computed: true, optional: true, required: false
  private _lowSignalStrength?: string; 
  public get lowSignalStrength() {
    return this.getStringAttribute('low_signal_strength');
  }
  public set lowSignalStrength(value: string) {
    this._lowSignalStrength = value;
  }
  public resetLowSignalStrength() {
    this._lowSignalStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSignalStrengthInput() {
    return this._lowSignalStrength;
  }

  // mode_switch - computed: true, optional: true, required: false
  private _modeSwitch?: string; 
  public get modeSwitch() {
    return this.getStringAttribute('mode_switch');
  }
  public set modeSwitch(value: string) {
    this._modeSwitch = value;
  }
  public resetModeSwitch() {
    this._modeSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeSwitchInput() {
    return this._modeSwitch;
  }

  // os_image_fallback - computed: true, optional: true, required: false
  private _osImageFallback?: string; 
  public get osImageFallback() {
    return this.getStringAttribute('os_image_fallback');
  }
  public set osImageFallback(value: string) {
    this._osImageFallback = value;
  }
  public resetOsImageFallback() {
    this._osImageFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageFallbackInput() {
    return this._osImageFallback;
  }

  // session_disconnect - computed: true, optional: true, required: false
  private _sessionDisconnect?: string; 
  public get sessionDisconnect() {
    return this.getStringAttribute('session_disconnect');
  }
  public set sessionDisconnect(value: string) {
    this._sessionDisconnect = value;
  }
  public resetSessionDisconnect() {
    this._sessionDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDisconnectInput() {
    return this._sessionDisconnect;
  }

  // system_reboot - computed: true, optional: true, required: false
  private _systemReboot?: string; 
  public get systemReboot() {
    return this.getStringAttribute('system_reboot');
  }
  public set systemReboot(value: string) {
    this._systemReboot = value;
  }
  public resetSystemReboot() {
    this._systemReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRebootInput() {
    return this._systemReboot;
  }
}
export interface ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#alert ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#alert}
  */
  readonly alert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#name ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#phone_number ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#status ObjectExtensioncontrollerExtenderprofileCellularSmsnotification#status}
  */
  readonly status?: string;
}

export function objectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._name = undefined;
      this._phoneNumber = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._name = value.name;
      this._phoneNumber = value.phoneNumber;
      this._status = value.status;
    }
  }

  // alert - computed: true, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return cdktf.Fn.tolist(this.getListAttribute('alert'));
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
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

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
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
}

export class ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification}
*/
export class ObjectExtensioncontrollerExtenderprofileCellularSmsnotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileCellularSmsnotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileCellularSmsnotification to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileCellularSmsnotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileCellularSmsnotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_cellular_smsnotification fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_cellular_smsnotification',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._alert.internalValue = config.alert;
    this._receiver.internalValue = config.receiver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // alert - computed: false, optional: true, required: false
  private _alert = new ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // receiver - computed: false, optional: true, required: false
  private _receiver = new ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverList(this, "receiver", false);
  public get receiver() {
    return this._receiver;
  }
  public putReceiver(value: ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiver[] | cdktf.IResolvable) {
    this._receiver.internalValue = value;
  }
  public resetReceiver() {
    this._receiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      alert: objectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertToTerraform(this._alert.internalValue),
      receiver: cdktf.listMapper(objectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverToTerraform, true)(this._receiver.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      alert: {
        value: objectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertToHclTerraform(this._alert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationAlertList",
      },
      receiver: {
        value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverToHclTerraform, true)(this._receiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileCellularSmsnotificationReceiverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
