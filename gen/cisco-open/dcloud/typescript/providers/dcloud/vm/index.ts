// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#cpu_qty Vm#cpu_qty}
  */
  readonly cpuQty?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#description Vm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#id Vm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#inventory_vm_id Vm#inventory_vm_id}
  */
  readonly inventoryVmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#memory_mb Vm#memory_mb}
  */
  readonly memoryMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#name Vm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#nested_hypervisor Vm#nested_hypervisor}
  */
  readonly nestedHypervisor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#os_family Vm#os_family}
  */
  readonly osFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#topology_uid Vm#topology_uid}
  */
  readonly topologyUid: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#advanced_settings Vm#advanced_settings}
  */
  readonly advancedSettings?: VmAdvancedSettings;
  /**
  * guest_automation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#guest_automation Vm#guest_automation}
  */
  readonly guestAutomation?: VmGuestAutomation;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#network_interfaces Vm#network_interfaces}
  */
  readonly networkInterfaces: VmNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * remote_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#remote_access Vm#remote_access}
  */
  readonly remoteAccess?: VmRemoteAccess;
}
export interface VmAdvancedSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#all_disks_non_persistent Vm#all_disks_non_persistent}
  */
  readonly allDisksNonPersistent: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#bios_uuid Vm#bios_uuid}
  */
  readonly biosUuid: string;
  /**
  * The EVC mode of the VM, defaults to the EVC mode of the inventory VM if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#evc_mode Vm#evc_mode}
  */
  readonly evcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#name_in_hypervisor Vm#name_in_hypervisor}
  */
  readonly nameInHypervisor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#not_started Vm#not_started}
  */
  readonly notStarted: boolean | cdktf.IResolvable;
}

export function vmAdvancedSettingsToTerraform(struct?: VmAdvancedSettingsOutputReference | VmAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_disks_non_persistent: cdktf.booleanToTerraform(struct!.allDisksNonPersistent),
    bios_uuid: cdktf.stringToTerraform(struct!.biosUuid),
    evc_mode: cdktf.stringToTerraform(struct!.evcMode),
    name_in_hypervisor: cdktf.stringToTerraform(struct!.nameInHypervisor),
    not_started: cdktf.booleanToTerraform(struct!.notStarted),
  }
}


export function vmAdvancedSettingsToHclTerraform(struct?: VmAdvancedSettingsOutputReference | VmAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_disks_non_persistent: {
      value: cdktf.booleanToHclTerraform(struct!.allDisksNonPersistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bios_uuid: {
      value: cdktf.stringToHclTerraform(struct!.biosUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evc_mode: {
      value: cdktf.stringToHclTerraform(struct!.evcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_in_hypervisor: {
      value: cdktf.stringToHclTerraform(struct!.nameInHypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_started: {
      value: cdktf.booleanToHclTerraform(struct!.notStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDisksNonPersistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDisksNonPersistent = this._allDisksNonPersistent;
    }
    if (this._biosUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.biosUuid = this._biosUuid;
    }
    if (this._evcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evcMode = this._evcMode;
    }
    if (this._nameInHypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameInHypervisor = this._nameInHypervisor;
    }
    if (this._notStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStarted = this._notStarted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allDisksNonPersistent = undefined;
      this._biosUuid = undefined;
      this._evcMode = undefined;
      this._nameInHypervisor = undefined;
      this._notStarted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allDisksNonPersistent = value.allDisksNonPersistent;
      this._biosUuid = value.biosUuid;
      this._evcMode = value.evcMode;
      this._nameInHypervisor = value.nameInHypervisor;
      this._notStarted = value.notStarted;
    }
  }

  // all_disks_non_persistent - computed: false, optional: false, required: true
  private _allDisksNonPersistent?: boolean | cdktf.IResolvable; 
  public get allDisksNonPersistent() {
    return this.getBooleanAttribute('all_disks_non_persistent');
  }
  public set allDisksNonPersistent(value: boolean | cdktf.IResolvable) {
    this._allDisksNonPersistent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allDisksNonPersistentInput() {
    return this._allDisksNonPersistent;
  }

  // bios_uuid - computed: false, optional: false, required: true
  private _biosUuid?: string; 
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }
  public set biosUuid(value: string) {
    this._biosUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get biosUuidInput() {
    return this._biosUuid;
  }

  // evc_mode - computed: false, optional: true, required: false
  private _evcMode?: string; 
  public get evcMode() {
    return this.getStringAttribute('evc_mode');
  }
  public set evcMode(value: string) {
    this._evcMode = value;
  }
  public resetEvcMode() {
    this._evcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evcModeInput() {
    return this._evcMode;
  }

  // name_in_hypervisor - computed: false, optional: false, required: true
  private _nameInHypervisor?: string; 
  public get nameInHypervisor() {
    return this.getStringAttribute('name_in_hypervisor');
  }
  public set nameInHypervisor(value: string) {
    this._nameInHypervisor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInHypervisorInput() {
    return this._nameInHypervisor;
  }

  // not_started - computed: false, optional: false, required: true
  private _notStarted?: boolean | cdktf.IResolvable; 
  public get notStarted() {
    return this.getBooleanAttribute('not_started');
  }
  public set notStarted(value: boolean | cdktf.IResolvable) {
    this._notStarted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notStartedInput() {
    return this._notStarted;
  }
}
export interface VmGuestAutomation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#command Vm#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#delay_seconds Vm#delay_seconds}
  */
  readonly delaySeconds: number;
}

export function vmGuestAutomationToTerraform(struct?: VmGuestAutomationOutputReference | VmGuestAutomation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    delay_seconds: cdktf.numberToTerraform(struct!.delaySeconds),
  }
}


export function vmGuestAutomationToHclTerraform(struct?: VmGuestAutomationOutputReference | VmGuestAutomation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.delaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmGuestAutomationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmGuestAutomation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._delaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delaySeconds = this._delaySeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmGuestAutomation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._delaySeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._delaySeconds = value.delaySeconds;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // delay_seconds - computed: false, optional: false, required: true
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
  }
}
export interface VmNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#ip_address Vm#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#mac_address Vm#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#network_uid Vm#network_uid}
  */
  readonly networkUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#rdp_auto_login Vm#rdp_auto_login}
  */
  readonly rdpAutoLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#rdp_enabled Vm#rdp_enabled}
  */
  readonly rdpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#ssh_enabled Vm#ssh_enabled}
  */
  readonly sshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#type Vm#type}
  */
  readonly type: string;
}

export function vmNetworkInterfacesToTerraform(struct?: VmNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    name: cdktf.stringToTerraform(struct!.name),
    network_uid: cdktf.stringToTerraform(struct!.networkUid),
    rdp_auto_login: cdktf.booleanToTerraform(struct!.rdpAutoLogin),
    rdp_enabled: cdktf.booleanToTerraform(struct!.rdpEnabled),
    ssh_enabled: cdktf.booleanToTerraform(struct!.sshEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vmNetworkInterfacesToHclTerraform(struct?: VmNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    rdp_auto_login: {
      value: cdktf.booleanToHclTerraform(struct!.rdpAutoLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rdp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rdpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUid = this._networkUid;
    }
    if (this._rdpAutoLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdpAutoLogin = this._rdpAutoLogin;
    }
    if (this._rdpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdpEnabled = this._rdpEnabled;
    }
    if (this._sshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshEnabled = this._sshEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._name = undefined;
      this._networkUid = undefined;
      this._rdpAutoLogin = undefined;
      this._rdpEnabled = undefined;
      this._sshEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._name = value.name;
      this._networkUid = value.networkUid;
      this._rdpAutoLogin = value.rdpAutoLogin;
      this._rdpEnabled = value.rdpEnabled;
      this._sshEnabled = value.sshEnabled;
      this._type = value.type;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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

  // rdp_auto_login - computed: false, optional: true, required: false
  private _rdpAutoLogin?: boolean | cdktf.IResolvable; 
  public get rdpAutoLogin() {
    return this.getBooleanAttribute('rdp_auto_login');
  }
  public set rdpAutoLogin(value: boolean | cdktf.IResolvable) {
    this._rdpAutoLogin = value;
  }
  public resetRdpAutoLogin() {
    this._rdpAutoLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpAutoLoginInput() {
    return this._rdpAutoLogin;
  }

  // rdp_enabled - computed: false, optional: true, required: false
  private _rdpEnabled?: boolean | cdktf.IResolvable; 
  public get rdpEnabled() {
    return this.getBooleanAttribute('rdp_enabled');
  }
  public set rdpEnabled(value: boolean | cdktf.IResolvable) {
    this._rdpEnabled = value;
  }
  public resetRdpEnabled() {
    this._rdpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpEnabledInput() {
    return this._rdpEnabled;
  }

  // ssh_enabled - computed: false, optional: true, required: false
  private _sshEnabled?: boolean | cdktf.IResolvable; 
  public get sshEnabled() {
    return this.getBooleanAttribute('ssh_enabled');
  }
  public set sshEnabled(value: boolean | cdktf.IResolvable) {
    this._sshEnabled = value;
  }
  public resetSshEnabled() {
    this._sshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEnabledInput() {
    return this._sshEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class VmNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : VmNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VmNetworkInterfacesOutputReference {
    return new VmNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmRemoteAccessDisplayCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#password Vm#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#username Vm#username}
  */
  readonly username: string;
}

export function vmRemoteAccessDisplayCredentialsToTerraform(struct?: VmRemoteAccessDisplayCredentialsOutputReference | VmRemoteAccessDisplayCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vmRemoteAccessDisplayCredentialsToHclTerraform(struct?: VmRemoteAccessDisplayCredentialsOutputReference | VmRemoteAccessDisplayCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmRemoteAccessDisplayCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmRemoteAccessDisplayCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmRemoteAccessDisplayCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface VmRemoteAccessInternalUrls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#description Vm#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#location Vm#location}
  */
  readonly location: string;
}

export function vmRemoteAccessInternalUrlsToTerraform(struct?: VmRemoteAccessInternalUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function vmRemoteAccessInternalUrlsToHclTerraform(struct?: VmRemoteAccessInternalUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmRemoteAccessInternalUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmRemoteAccessInternalUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmRemoteAccessInternalUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._location = value.location;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class VmRemoteAccessInternalUrlsList extends cdktf.ComplexList {
  public internalValue? : VmRemoteAccessInternalUrls[] | cdktf.IResolvable

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
  public get(index: number): VmRemoteAccessInternalUrlsOutputReference {
    return new VmRemoteAccessInternalUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmRemoteAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#password Vm#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#username Vm#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#vm_console_enabled Vm#vm_console_enabled}
  */
  readonly vmConsoleEnabled: boolean | cdktf.IResolvable;
  /**
  * display_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#display_credentials Vm#display_credentials}
  */
  readonly displayCredentials?: VmRemoteAccessDisplayCredentials;
  /**
  * internal_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#internal_urls Vm#internal_urls}
  */
  readonly internalUrls?: VmRemoteAccessInternalUrls[] | cdktf.IResolvable;
}

export function vmRemoteAccessToTerraform(struct?: VmRemoteAccessOutputReference | VmRemoteAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    vm_console_enabled: cdktf.booleanToTerraform(struct!.vmConsoleEnabled),
    display_credentials: vmRemoteAccessDisplayCredentialsToTerraform(struct!.displayCredentials),
    internal_urls: cdktf.listMapper(vmRemoteAccessInternalUrlsToTerraform, true)(struct!.internalUrls),
  }
}


export function vmRemoteAccessToHclTerraform(struct?: VmRemoteAccessOutputReference | VmRemoteAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_console_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vmConsoleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_credentials: {
      value: vmRemoteAccessDisplayCredentialsToHclTerraform(struct!.displayCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmRemoteAccessDisplayCredentialsList",
    },
    internal_urls: {
      value: cdktf.listMapperHcl(vmRemoteAccessInternalUrlsToHclTerraform, true)(struct!.internalUrls),
      isBlock: true,
      type: "list",
      storageClassType: "VmRemoteAccessInternalUrlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmRemoteAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmRemoteAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vmConsoleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmConsoleEnabled = this._vmConsoleEnabled;
    }
    if (this._displayCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayCredentials = this._displayCredentials?.internalValue;
    }
    if (this._internalUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUrls = this._internalUrls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmRemoteAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
      this._vmConsoleEnabled = undefined;
      this._displayCredentials.internalValue = undefined;
      this._internalUrls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
      this._vmConsoleEnabled = value.vmConsoleEnabled;
      this._displayCredentials.internalValue = value.displayCredentials;
      this._internalUrls.internalValue = value.internalUrls;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vm_console_enabled - computed: false, optional: false, required: true
  private _vmConsoleEnabled?: boolean | cdktf.IResolvable; 
  public get vmConsoleEnabled() {
    return this.getBooleanAttribute('vm_console_enabled');
  }
  public set vmConsoleEnabled(value: boolean | cdktf.IResolvable) {
    this._vmConsoleEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConsoleEnabledInput() {
    return this._vmConsoleEnabled;
  }

  // display_credentials - computed: false, optional: true, required: false
  private _displayCredentials = new VmRemoteAccessDisplayCredentialsOutputReference(this, "display_credentials");
  public get displayCredentials() {
    return this._displayCredentials;
  }
  public putDisplayCredentials(value: VmRemoteAccessDisplayCredentials) {
    this._displayCredentials.internalValue = value;
  }
  public resetDisplayCredentials() {
    this._displayCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayCredentialsInput() {
    return this._displayCredentials.internalValue;
  }

  // internal_urls - computed: false, optional: true, required: false
  private _internalUrls = new VmRemoteAccessInternalUrlsList(this, "internal_urls", false);
  public get internalUrls() {
    return this._internalUrls;
  }
  public putInternalUrls(value: VmRemoteAccessInternalUrls[] | cdktf.IResolvable) {
    this._internalUrls.internalValue = value;
  }
  public resetInternalUrls() {
    this._internalUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUrlsInput() {
    return this._internalUrls.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm dcloud_vm}
*/
export class Vm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vm to import
  * @param importFromId The id of the existing Vm that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/vm dcloud_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmConfig
  */
  public constructor(scope: Construct, id: string, config: VmConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_vm',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29',
        providerVersionConstraint: '0.1.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuQty = config.cpuQty;
    this._description = config.description;
    this._id = config.id;
    this._inventoryVmId = config.inventoryVmId;
    this._memoryMb = config.memoryMb;
    this._name = config.name;
    this._nestedHypervisor = config.nestedHypervisor;
    this._osFamily = config.osFamily;
    this._topologyUid = config.topologyUid;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._guestAutomation.internalValue = config.guestAutomation;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._remoteAccess.internalValue = config.remoteAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_qty - computed: false, optional: true, required: false
  private _cpuQty?: number; 
  public get cpuQty() {
    return this.getNumberAttribute('cpu_qty');
  }
  public set cpuQty(value: number) {
    this._cpuQty = value;
  }
  public resetCpuQty() {
    this._cpuQty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuQtyInput() {
    return this._cpuQty;
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

  // inventory_vm_id - computed: false, optional: false, required: true
  private _inventoryVmId?: string; 
  public get inventoryVmId() {
    return this.getStringAttribute('inventory_vm_id');
  }
  public set inventoryVmId(value: string) {
    this._inventoryVmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryVmIdInput() {
    return this._inventoryVmId;
  }

  // memory_mb - computed: false, optional: true, required: false
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  public resetMemoryMb() {
    this._memoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
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

  // nested_hypervisor - computed: false, optional: true, required: false
  private _nestedHypervisor?: boolean | cdktf.IResolvable; 
  public get nestedHypervisor() {
    return this.getBooleanAttribute('nested_hypervisor');
  }
  public set nestedHypervisor(value: boolean | cdktf.IResolvable) {
    this._nestedHypervisor = value;
  }
  public resetNestedHypervisor() {
    this._nestedHypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedHypervisorInput() {
    return this._nestedHypervisor;
  }

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
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

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new VmAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: VmAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // guest_automation - computed: false, optional: true, required: false
  private _guestAutomation = new VmGuestAutomationOutputReference(this, "guest_automation");
  public get guestAutomation() {
    return this._guestAutomation;
  }
  public putGuestAutomation(value: VmGuestAutomation) {
    this._guestAutomation.internalValue = value;
  }
  public resetGuestAutomation() {
    this._guestAutomation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAutomationInput() {
    return this._guestAutomation.internalValue;
  }

  // network_interfaces - computed: false, optional: false, required: true
  private _networkInterfaces = new VmNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: VmNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess = new VmRemoteAccessOutputReference(this, "remote_access");
  public get remoteAccess() {
    return this._remoteAccess;
  }
  public putRemoteAccess(value: VmRemoteAccess) {
    this._remoteAccess.internalValue = value;
  }
  public resetRemoteAccess() {
    this._remoteAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessInput() {
    return this._remoteAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_qty: cdktf.numberToTerraform(this._cpuQty),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      inventory_vm_id: cdktf.stringToTerraform(this._inventoryVmId),
      memory_mb: cdktf.numberToTerraform(this._memoryMb),
      name: cdktf.stringToTerraform(this._name),
      nested_hypervisor: cdktf.booleanToTerraform(this._nestedHypervisor),
      os_family: cdktf.stringToTerraform(this._osFamily),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
      advanced_settings: vmAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      guest_automation: vmGuestAutomationToTerraform(this._guestAutomation.internalValue),
      network_interfaces: cdktf.listMapper(vmNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      remote_access: vmRemoteAccessToTerraform(this._remoteAccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_qty: {
        value: cdktf.numberToHclTerraform(this._cpuQty),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      inventory_vm_id: {
        value: cdktf.stringToHclTerraform(this._inventoryVmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_mb: {
        value: cdktf.numberToHclTerraform(this._memoryMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nested_hypervisor: {
        value: cdktf.booleanToHclTerraform(this._nestedHypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_family: {
        value: cdktf.stringToHclTerraform(this._osFamily),
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
      advanced_settings: {
        value: vmAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmAdvancedSettingsList",
      },
      guest_automation: {
        value: vmGuestAutomationToHclTerraform(this._guestAutomation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmGuestAutomationList",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(vmNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmNetworkInterfacesList",
      },
      remote_access: {
        value: vmRemoteAccessToHclTerraform(this._remoteAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmRemoteAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
