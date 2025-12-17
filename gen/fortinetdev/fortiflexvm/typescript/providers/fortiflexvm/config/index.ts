// https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#account_id Config#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#config_id Config#config_id}
  */
  readonly configId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#id Config#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#name Config#name}
  */
  readonly name?: string;
  /**
  * Product Type ID, must be one of the following options:
  * 				FGT_VM_Bundle: FortiGate Virtual Machine - Service Bundle;
  * 				FMG_VM: FortiManager Virtual Machine;
  * 				FWB_VM: FortiWeb Virtual Machine - Service Bundle;
  * 				FGT_VM_LCS: FortiGate Virtual Machine - A La Carte Services;
  * 				FC_EMS_OP: FortiClient EMS On-Prem;
  * 				FAZ_VM: FortiAnalyzer Virtual Machine;
  * 				FPC_VM: FortiPortal Virtual Machine;
  * 				FAD_VM: FortiADC Virtual Machine;
  * 				FORTISOAR_VM: FortiSOAR Virtual Machine;
  * 				FORTIMAIL_VM: FortiMail Virtual Machine;
  * 				FORTINAC_VM: FortiNAC Virtual Machine;
  * 				FGT_HW: FortiGate Hardware;
  * 				FAP_HW: FortiAP Hardware;
  * 				FSW_HW: FortiSwitch Hardware;
  * 				FWBC_PRIVATE: FortiWeb Cloud - Private;
  * 				FWBC_PUBLIC: FortiWeb Cloud - Public;
  * 				FC_EMS_CLOUD: FortiClient EMS Cloud;
  * 				FORTISASE: FortiSASE;
  * 				FORTIEDR: FortiEDR MSSP;
  * 				FORTINDR_CLOUD: FortiNDR Cloud;
  * 				FORTIRECON: FortiRecon;
  * 				SIEM_CLOUD: FortiSIEM Cloud;				
  * 				FORTIAPPSEC: FortiAppSec;
  * 				FORTIDLP: FortiDLP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#product_type Config#product_type}
  */
  readonly productType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#program_serial_number Config#program_serial_number}
  */
  readonly programSerialNumber: string;
  /**
  * Configuration status, must be one of the following options:
  * 				ACTIVE: Enable a configuration;
  * 				DISABLED: Disable a configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#status Config#status}
  */
  readonly status?: string;
  /**
  * fad_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fad_vm Config#fad_vm}
  */
  readonly fadVm?: ConfigFadVm[] | cdktf.IResolvable;
  /**
  * fap_hw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fap_hw Config#fap_hw}
  */
  readonly fapHw?: ConfigFapHw[] | cdktf.IResolvable;
  /**
  * faz_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#faz_vm Config#faz_vm}
  */
  readonly fazVm?: ConfigFazVm[] | cdktf.IResolvable;
  /**
  * fc_ems_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fc_ems_cloud Config#fc_ems_cloud}
  */
  readonly fcEmsCloud?: ConfigFcEmsCloud[] | cdktf.IResolvable;
  /**
  * fc_ems_op block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fc_ems_op Config#fc_ems_op}
  */
  readonly fcEmsOp?: ConfigFcEmsOp[] | cdktf.IResolvable;
  /**
  * fgt_hw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fgt_hw Config#fgt_hw}
  */
  readonly fgtHw?: ConfigFgtHw[] | cdktf.IResolvable;
  /**
  * fgt_vm_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fgt_vm_bundle Config#fgt_vm_bundle}
  */
  readonly fgtVmBundle?: ConfigFgtVmBundle[] | cdktf.IResolvable;
  /**
  * fgt_vm_lcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fgt_vm_lcs Config#fgt_vm_lcs}
  */
  readonly fgtVmLcs?: ConfigFgtVmLcs[] | cdktf.IResolvable;
  /**
  * fmg_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fmg_vm Config#fmg_vm}
  */
  readonly fmgVm?: ConfigFmgVm[] | cdktf.IResolvable;
  /**
  * fortiappsec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortiappsec Config#fortiappsec}
  */
  readonly fortiappsec?: ConfigFortiappsec[] | cdktf.IResolvable;
  /**
  * fortidlp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortidlp Config#fortidlp}
  */
  readonly fortidlp?: ConfigFortidlp[] | cdktf.IResolvable;
  /**
  * fortiedr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortiedr Config#fortiedr}
  */
  readonly fortiedr?: ConfigFortiedr[] | cdktf.IResolvable;
  /**
  * fortimail_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortimail_vm Config#fortimail_vm}
  */
  readonly fortimailVm?: ConfigFortimailVm[] | cdktf.IResolvable;
  /**
  * fortinac_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortinac_vm Config#fortinac_vm}
  */
  readonly fortinacVm?: ConfigFortinacVm[] | cdktf.IResolvable;
  /**
  * fortindr_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortindr_cloud Config#fortindr_cloud}
  */
  readonly fortindrCloud?: ConfigFortindrCloud[] | cdktf.IResolvable;
  /**
  * fortirecon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortirecon Config#fortirecon}
  */
  readonly fortirecon?: ConfigFortirecon[] | cdktf.IResolvable;
  /**
  * fortisase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortisase Config#fortisase}
  */
  readonly fortisase?: ConfigFortisase[] | cdktf.IResolvable;
  /**
  * fortisoar_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortisoar_vm Config#fortisoar_vm}
  */
  readonly fortisoarVm?: ConfigFortisoarVm[] | cdktf.IResolvable;
  /**
  * fpc_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fpc_vm Config#fpc_vm}
  */
  readonly fpcVm?: ConfigFpcVm[] | cdktf.IResolvable;
  /**
  * fsw_hw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fsw_hw Config#fsw_hw}
  */
  readonly fswHw?: ConfigFswHw[] | cdktf.IResolvable;
  /**
  * fwb_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fwb_vm Config#fwb_vm}
  */
  readonly fwbVm?: ConfigFwbVm[] | cdktf.IResolvable;
  /**
  * fwbc_private block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fwbc_private Config#fwbc_private}
  */
  readonly fwbcPrivate?: ConfigFwbcPrivate[] | cdktf.IResolvable;
  /**
  * fwbc_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fwbc_public Config#fwbc_public}
  */
  readonly fwbcPublic?: ConfigFwbcPublic[] | cdktf.IResolvable;
  /**
  * siem_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#siem_cloud Config#siem_cloud}
  */
  readonly siemCloud?: ConfigSiemCloud[] | cdktf.IResolvable;
}
export interface ConfigFadVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#cpu_size Config#cpu_size}
  */
  readonly cpuSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFadVmToTerraform(struct?: ConfigFadVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_size: cdktf.stringToTerraform(struct!.cpuSize),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFadVmToHclTerraform(struct?: ConfigFadVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_size: {
      value: cdktf.stringToHclTerraform(struct!.cpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFadVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFadVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSize = this._cpuSize;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFadVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuSize = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuSize = value.cpuSize;
      this._servicePkg = value.servicePkg;
    }
  }

  // cpu_size - computed: true, optional: true, required: false
  private _cpuSize?: string; 
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }
  public set cpuSize(value: string) {
    this._cpuSize = value;
  }
  public resetCpuSize() {
    this._cpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSizeInput() {
    return this._cpuSize;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFadVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFadVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFadVmOutputReference {
    return new ConfigFadVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFapHw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#device_model Config#device_model}
  */
  readonly deviceModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFapHwToTerraform(struct?: ConfigFapHw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    device_model: cdktf.stringToTerraform(struct!.deviceModel),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFapHwToHclTerraform(struct?: ConfigFapHw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    device_model: {
      value: cdktf.stringToHclTerraform(struct!.deviceModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFapHwOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFapHw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._deviceModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceModel = this._deviceModel;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFapHw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._deviceModel = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._deviceModel = value.deviceModel;
      this._servicePkg = value.servicePkg;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // device_model - computed: true, optional: true, required: false
  private _deviceModel?: string; 
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }
  public set deviceModel(value: string) {
    this._deviceModel = value;
  }
  public resetDeviceModel() {
    this._deviceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelInput() {
    return this._deviceModel;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFapHwList extends cdktf.ComplexList {
  public internalValue? : ConfigFapHw[] | cdktf.IResolvable

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
  public get(index: number): ConfigFapHwOutputReference {
    return new ConfigFapHwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFazVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#adom_num Config#adom_num}
  */
  readonly adomNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#daily_storage Config#daily_storage}
  */
  readonly dailyStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#support_service Config#support_service}
  */
  readonly supportService?: string;
}

export function configFazVmToTerraform(struct?: ConfigFazVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    adom_num: cdktf.numberToTerraform(struct!.adomNum),
    daily_storage: cdktf.numberToTerraform(struct!.dailyStorage),
    support_service: cdktf.stringToTerraform(struct!.supportService),
  }
}


export function configFazVmToHclTerraform(struct?: ConfigFazVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    adom_num: {
      value: cdktf.numberToHclTerraform(struct!.adomNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daily_storage: {
      value: cdktf.numberToHclTerraform(struct!.dailyStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    support_service: {
      value: cdktf.stringToHclTerraform(struct!.supportService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFazVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFazVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._adomNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.adomNum = this._adomNum;
    }
    if (this._dailyStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyStorage = this._dailyStorage;
    }
    if (this._supportService !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportService = this._supportService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFazVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._adomNum = undefined;
      this._dailyStorage = undefined;
      this._supportService = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._adomNum = value.adomNum;
      this._dailyStorage = value.dailyStorage;
      this._supportService = value.supportService;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // adom_num - computed: true, optional: true, required: false
  private _adomNum?: number; 
  public get adomNum() {
    return this.getNumberAttribute('adom_num');
  }
  public set adomNum(value: number) {
    this._adomNum = value;
  }
  public resetAdomNum() {
    this._adomNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomNumInput() {
    return this._adomNum;
  }

  // daily_storage - computed: true, optional: true, required: false
  private _dailyStorage?: number; 
  public get dailyStorage() {
    return this.getNumberAttribute('daily_storage');
  }
  public set dailyStorage(value: number) {
    this._dailyStorage = value;
  }
  public resetDailyStorage() {
    this._dailyStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyStorageInput() {
    return this._dailyStorage;
  }

  // support_service - computed: true, optional: true, required: false
  private _supportService?: string; 
  public get supportService() {
    return this.getStringAttribute('support_service');
  }
  public set supportService(value: string) {
    this._supportService = value;
  }
  public resetSupportService() {
    this._supportService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportServiceInput() {
    return this._supportService;
  }
}

export class ConfigFazVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFazVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFazVmOutputReference {
    return new ConfigFazVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFcEmsCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#chromebook Config#chromebook}
  */
  readonly chromebook?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#epp_ztna_fgf_num Config#epp_ztna_fgf_num}
  */
  readonly eppZtnaFgfNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#epp_ztna_num Config#epp_ztna_num}
  */
  readonly eppZtnaNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#ztna_fgf_num Config#ztna_fgf_num}
  */
  readonly ztnaFgfNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#ztna_num Config#ztna_num}
  */
  readonly ztnaNum?: number;
}

export function configFcEmsCloudToTerraform(struct?: ConfigFcEmsCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    chromebook: cdktf.numberToTerraform(struct!.chromebook),
    epp_ztna_fgf_num: cdktf.numberToTerraform(struct!.eppZtnaFgfNum),
    epp_ztna_num: cdktf.numberToTerraform(struct!.eppZtnaNum),
    ztna_fgf_num: cdktf.numberToTerraform(struct!.ztnaFgfNum),
    ztna_num: cdktf.numberToTerraform(struct!.ztnaNum),
  }
}


export function configFcEmsCloudToHclTerraform(struct?: ConfigFcEmsCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    chromebook: {
      value: cdktf.numberToHclTerraform(struct!.chromebook),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    epp_ztna_fgf_num: {
      value: cdktf.numberToHclTerraform(struct!.eppZtnaFgfNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    epp_ztna_num: {
      value: cdktf.numberToHclTerraform(struct!.eppZtnaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ztna_fgf_num: {
      value: cdktf.numberToHclTerraform(struct!.ztnaFgfNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ztna_num: {
      value: cdktf.numberToHclTerraform(struct!.ztnaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFcEmsCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFcEmsCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._chromebook !== undefined) {
      hasAnyValues = true;
      internalValueResult.chromebook = this._chromebook;
    }
    if (this._eppZtnaFgfNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.eppZtnaFgfNum = this._eppZtnaFgfNum;
    }
    if (this._eppZtnaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.eppZtnaNum = this._eppZtnaNum;
    }
    if (this._ztnaFgfNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztnaFgfNum = this._ztnaFgfNum;
    }
    if (this._ztnaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztnaNum = this._ztnaNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFcEmsCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._chromebook = undefined;
      this._eppZtnaFgfNum = undefined;
      this._eppZtnaNum = undefined;
      this._ztnaFgfNum = undefined;
      this._ztnaNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._chromebook = value.chromebook;
      this._eppZtnaFgfNum = value.eppZtnaFgfNum;
      this._eppZtnaNum = value.eppZtnaNum;
      this._ztnaFgfNum = value.ztnaFgfNum;
      this._ztnaNum = value.ztnaNum;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // chromebook - computed: true, optional: true, required: false
  private _chromebook?: number; 
  public get chromebook() {
    return this.getNumberAttribute('chromebook');
  }
  public set chromebook(value: number) {
    this._chromebook = value;
  }
  public resetChromebook() {
    this._chromebook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromebookInput() {
    return this._chromebook;
  }

  // epp_ztna_fgf_num - computed: true, optional: true, required: false
  private _eppZtnaFgfNum?: number; 
  public get eppZtnaFgfNum() {
    return this.getNumberAttribute('epp_ztna_fgf_num');
  }
  public set eppZtnaFgfNum(value: number) {
    this._eppZtnaFgfNum = value;
  }
  public resetEppZtnaFgfNum() {
    this._eppZtnaFgfNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eppZtnaFgfNumInput() {
    return this._eppZtnaFgfNum;
  }

  // epp_ztna_num - computed: true, optional: true, required: false
  private _eppZtnaNum?: number; 
  public get eppZtnaNum() {
    return this.getNumberAttribute('epp_ztna_num');
  }
  public set eppZtnaNum(value: number) {
    this._eppZtnaNum = value;
  }
  public resetEppZtnaNum() {
    this._eppZtnaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eppZtnaNumInput() {
    return this._eppZtnaNum;
  }

  // ztna_fgf_num - computed: true, optional: true, required: false
  private _ztnaFgfNum?: number; 
  public get ztnaFgfNum() {
    return this.getNumberAttribute('ztna_fgf_num');
  }
  public set ztnaFgfNum(value: number) {
    this._ztnaFgfNum = value;
  }
  public resetZtnaFgfNum() {
    this._ztnaFgfNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaFgfNumInput() {
    return this._ztnaFgfNum;
  }

  // ztna_num - computed: true, optional: true, required: false
  private _ztnaNum?: number; 
  public get ztnaNum() {
    return this.getNumberAttribute('ztna_num');
  }
  public set ztnaNum(value: number) {
    this._ztnaNum = value;
  }
  public resetZtnaNum() {
    this._ztnaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaNumInput() {
    return this._ztnaNum;
  }
}

export class ConfigFcEmsCloudList extends cdktf.ComplexList {
  public internalValue? : ConfigFcEmsCloud[] | cdktf.IResolvable

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
  public get(index: number): ConfigFcEmsCloudOutputReference {
    return new ConfigFcEmsCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFcEmsOp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#chromebook Config#chromebook}
  */
  readonly chromebook?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#epp_ztna_num Config#epp_ztna_num}
  */
  readonly eppZtnaNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#support_service Config#support_service}
  */
  readonly supportService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#ztna_num Config#ztna_num}
  */
  readonly ztnaNum?: number;
}

export function configFcEmsOpToTerraform(struct?: ConfigFcEmsOp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    chromebook: cdktf.numberToTerraform(struct!.chromebook),
    epp_ztna_num: cdktf.numberToTerraform(struct!.eppZtnaNum),
    support_service: cdktf.stringToTerraform(struct!.supportService),
    ztna_num: cdktf.numberToTerraform(struct!.ztnaNum),
  }
}


export function configFcEmsOpToHclTerraform(struct?: ConfigFcEmsOp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    chromebook: {
      value: cdktf.numberToHclTerraform(struct!.chromebook),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    epp_ztna_num: {
      value: cdktf.numberToHclTerraform(struct!.eppZtnaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    support_service: {
      value: cdktf.stringToHclTerraform(struct!.supportService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ztna_num: {
      value: cdktf.numberToHclTerraform(struct!.ztnaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFcEmsOpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFcEmsOp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._chromebook !== undefined) {
      hasAnyValues = true;
      internalValueResult.chromebook = this._chromebook;
    }
    if (this._eppZtnaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.eppZtnaNum = this._eppZtnaNum;
    }
    if (this._supportService !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportService = this._supportService;
    }
    if (this._ztnaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztnaNum = this._ztnaNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFcEmsOp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._chromebook = undefined;
      this._eppZtnaNum = undefined;
      this._supportService = undefined;
      this._ztnaNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._chromebook = value.chromebook;
      this._eppZtnaNum = value.eppZtnaNum;
      this._supportService = value.supportService;
      this._ztnaNum = value.ztnaNum;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // chromebook - computed: true, optional: true, required: false
  private _chromebook?: number; 
  public get chromebook() {
    return this.getNumberAttribute('chromebook');
  }
  public set chromebook(value: number) {
    this._chromebook = value;
  }
  public resetChromebook() {
    this._chromebook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromebookInput() {
    return this._chromebook;
  }

  // epp_ztna_num - computed: true, optional: true, required: false
  private _eppZtnaNum?: number; 
  public get eppZtnaNum() {
    return this.getNumberAttribute('epp_ztna_num');
  }
  public set eppZtnaNum(value: number) {
    this._eppZtnaNum = value;
  }
  public resetEppZtnaNum() {
    this._eppZtnaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eppZtnaNumInput() {
    return this._eppZtnaNum;
  }

  // support_service - computed: true, optional: true, required: false
  private _supportService?: string; 
  public get supportService() {
    return this.getStringAttribute('support_service');
  }
  public set supportService(value: string) {
    this._supportService = value;
  }
  public resetSupportService() {
    this._supportService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportServiceInput() {
    return this._supportService;
  }

  // ztna_num - computed: true, optional: true, required: false
  private _ztnaNum?: number; 
  public get ztnaNum() {
    return this.getNumberAttribute('ztna_num');
  }
  public set ztnaNum(value: number) {
    this._ztnaNum = value;
  }
  public resetZtnaNum() {
    this._ztnaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaNumInput() {
    return this._ztnaNum;
  }
}

export class ConfigFcEmsOpList extends cdktf.ComplexList {
  public internalValue? : ConfigFcEmsOp[] | cdktf.IResolvable

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
  public get(index: number): ConfigFcEmsOpOutputReference {
    return new ConfigFcEmsOpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFgtHw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#device_model Config#device_model}
  */
  readonly deviceModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFgtHwToTerraform(struct?: ConfigFgtHw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    device_model: cdktf.stringToTerraform(struct!.deviceModel),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFgtHwToHclTerraform(struct?: ConfigFgtHw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    device_model: {
      value: cdktf.stringToHclTerraform(struct!.deviceModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFgtHwOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFgtHw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._deviceModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceModel = this._deviceModel;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFgtHw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._deviceModel = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._deviceModel = value.deviceModel;
      this._servicePkg = value.servicePkg;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // device_model - computed: true, optional: true, required: false
  private _deviceModel?: string; 
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }
  public set deviceModel(value: string) {
    this._deviceModel = value;
  }
  public resetDeviceModel() {
    this._deviceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelInput() {
    return this._deviceModel;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFgtHwList extends cdktf.ComplexList {
  public internalValue? : ConfigFgtHw[] | cdktf.IResolvable

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
  public get(index: number): ConfigFgtHwOutputReference {
    return new ConfigFgtHwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFgtVmBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#cloud_services Config#cloud_services}
  */
  readonly cloudServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#cpu_size Config#cpu_size}
  */
  readonly cpuSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortiguard_services Config#fortiguard_services}
  */
  readonly fortiguardServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#support_service Config#support_service}
  */
  readonly supportService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#vdom_num Config#vdom_num}
  */
  readonly vdomNum?: number;
}

export function configFgtVmBundleToTerraform(struct?: ConfigFgtVmBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudServices),
    cpu_size: cdktf.stringToTerraform(struct!.cpuSize),
    fortiguard_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fortiguardServices),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
    support_service: cdktf.stringToTerraform(struct!.supportService),
    vdom_num: cdktf.numberToTerraform(struct!.vdomNum),
  }
}


export function configFgtVmBundleToHclTerraform(struct?: ConfigFgtVmBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_size: {
      value: cdktf.stringToHclTerraform(struct!.cpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiguard_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fortiguardServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_service: {
      value: cdktf.stringToHclTerraform(struct!.supportService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom_num: {
      value: cdktf.numberToHclTerraform(struct!.vdomNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFgtVmBundleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFgtVmBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudServices = this._cloudServices;
    }
    if (this._cpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSize = this._cpuSize;
    }
    if (this._fortiguardServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiguardServices = this._fortiguardServices;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    if (this._supportService !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportService = this._supportService;
    }
    if (this._vdomNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdomNum = this._vdomNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFgtVmBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudServices = undefined;
      this._cpuSize = undefined;
      this._fortiguardServices = undefined;
      this._servicePkg = undefined;
      this._supportService = undefined;
      this._vdomNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudServices = value.cloudServices;
      this._cpuSize = value.cpuSize;
      this._fortiguardServices = value.fortiguardServices;
      this._servicePkg = value.servicePkg;
      this._supportService = value.supportService;
      this._vdomNum = value.vdomNum;
    }
  }

  // cloud_services - computed: true, optional: true, required: false
  private _cloudServices?: string[]; 
  public get cloudServices() {
    return this.getListAttribute('cloud_services');
  }
  public set cloudServices(value: string[]) {
    this._cloudServices = value;
  }
  public resetCloudServices() {
    this._cloudServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServicesInput() {
    return this._cloudServices;
  }

  // cpu_size - computed: true, optional: true, required: false
  private _cpuSize?: string; 
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }
  public set cpuSize(value: string) {
    this._cpuSize = value;
  }
  public resetCpuSize() {
    this._cpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSizeInput() {
    return this._cpuSize;
  }

  // fortiguard_services - computed: true, optional: true, required: false
  private _fortiguardServices?: string[]; 
  public get fortiguardServices() {
    return this.getListAttribute('fortiguard_services');
  }
  public set fortiguardServices(value: string[]) {
    this._fortiguardServices = value;
  }
  public resetFortiguardServices() {
    this._fortiguardServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardServicesInput() {
    return this._fortiguardServices;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }

  // support_service - computed: true, optional: true, required: false
  private _supportService?: string; 
  public get supportService() {
    return this.getStringAttribute('support_service');
  }
  public set supportService(value: string) {
    this._supportService = value;
  }
  public resetSupportService() {
    this._supportService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportServiceInput() {
    return this._supportService;
  }

  // vdom_num - computed: true, optional: true, required: false
  private _vdomNum?: number; 
  public get vdomNum() {
    return this.getNumberAttribute('vdom_num');
  }
  public set vdomNum(value: number) {
    this._vdomNum = value;
  }
  public resetVdomNum() {
    this._vdomNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomNumInput() {
    return this._vdomNum;
  }
}

export class ConfigFgtVmBundleList extends cdktf.ComplexList {
  public internalValue? : ConfigFgtVmBundle[] | cdktf.IResolvable

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
  public get(index: number): ConfigFgtVmBundleOutputReference {
    return new ConfigFgtVmBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFgtVmLcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#cloud_services Config#cloud_services}
  */
  readonly cloudServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#cpu_size Config#cpu_size}
  */
  readonly cpuSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#fortiguard_services Config#fortiguard_services}
  */
  readonly fortiguardServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#support_service Config#support_service}
  */
  readonly supportService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#vdom_num Config#vdom_num}
  */
  readonly vdomNum?: number;
}

export function configFgtVmLcsToTerraform(struct?: ConfigFgtVmLcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudServices),
    cpu_size: cdktf.stringToTerraform(struct!.cpuSize),
    fortiguard_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fortiguardServices),
    support_service: cdktf.stringToTerraform(struct!.supportService),
    vdom_num: cdktf.numberToTerraform(struct!.vdomNum),
  }
}


export function configFgtVmLcsToHclTerraform(struct?: ConfigFgtVmLcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_size: {
      value: cdktf.stringToHclTerraform(struct!.cpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiguard_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fortiguardServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    support_service: {
      value: cdktf.stringToHclTerraform(struct!.supportService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom_num: {
      value: cdktf.numberToHclTerraform(struct!.vdomNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFgtVmLcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFgtVmLcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudServices = this._cloudServices;
    }
    if (this._cpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSize = this._cpuSize;
    }
    if (this._fortiguardServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiguardServices = this._fortiguardServices;
    }
    if (this._supportService !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportService = this._supportService;
    }
    if (this._vdomNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdomNum = this._vdomNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFgtVmLcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudServices = undefined;
      this._cpuSize = undefined;
      this._fortiguardServices = undefined;
      this._supportService = undefined;
      this._vdomNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudServices = value.cloudServices;
      this._cpuSize = value.cpuSize;
      this._fortiguardServices = value.fortiguardServices;
      this._supportService = value.supportService;
      this._vdomNum = value.vdomNum;
    }
  }

  // cloud_services - computed: true, optional: true, required: false
  private _cloudServices?: string[]; 
  public get cloudServices() {
    return this.getListAttribute('cloud_services');
  }
  public set cloudServices(value: string[]) {
    this._cloudServices = value;
  }
  public resetCloudServices() {
    this._cloudServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServicesInput() {
    return this._cloudServices;
  }

  // cpu_size - computed: true, optional: true, required: false
  private _cpuSize?: string; 
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }
  public set cpuSize(value: string) {
    this._cpuSize = value;
  }
  public resetCpuSize() {
    this._cpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSizeInput() {
    return this._cpuSize;
  }

  // fortiguard_services - computed: true, optional: true, required: false
  private _fortiguardServices?: string[]; 
  public get fortiguardServices() {
    return this.getListAttribute('fortiguard_services');
  }
  public set fortiguardServices(value: string[]) {
    this._fortiguardServices = value;
  }
  public resetFortiguardServices() {
    this._fortiguardServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardServicesInput() {
    return this._fortiguardServices;
  }

  // support_service - computed: true, optional: true, required: false
  private _supportService?: string; 
  public get supportService() {
    return this.getStringAttribute('support_service');
  }
  public set supportService(value: string) {
    this._supportService = value;
  }
  public resetSupportService() {
    this._supportService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportServiceInput() {
    return this._supportService;
  }

  // vdom_num - computed: true, optional: true, required: false
  private _vdomNum?: number; 
  public get vdomNum() {
    return this.getNumberAttribute('vdom_num');
  }
  public set vdomNum(value: number) {
    this._vdomNum = value;
  }
  public resetVdomNum() {
    this._vdomNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomNumInput() {
    return this._vdomNum;
  }
}

export class ConfigFgtVmLcsList extends cdktf.ComplexList {
  public internalValue? : ConfigFgtVmLcs[] | cdktf.IResolvable

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
  public get(index: number): ConfigFgtVmLcsOutputReference {
    return new ConfigFgtVmLcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFmgVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#adom_num Config#adom_num}
  */
  readonly adomNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#managed_dev Config#managed_dev}
  */
  readonly managedDev?: number;
}

export function configFmgVmToTerraform(struct?: ConfigFmgVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adom_num: cdktf.numberToTerraform(struct!.adomNum),
    managed_dev: cdktf.numberToTerraform(struct!.managedDev),
  }
}


export function configFmgVmToHclTerraform(struct?: ConfigFmgVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adom_num: {
      value: cdktf.numberToHclTerraform(struct!.adomNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_dev: {
      value: cdktf.numberToHclTerraform(struct!.managedDev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFmgVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFmgVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adomNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.adomNum = this._adomNum;
    }
    if (this._managedDev !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDev = this._managedDev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFmgVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adomNum = undefined;
      this._managedDev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adomNum = value.adomNum;
      this._managedDev = value.managedDev;
    }
  }

  // adom_num - computed: true, optional: true, required: false
  private _adomNum?: number; 
  public get adomNum() {
    return this.getNumberAttribute('adom_num');
  }
  public set adomNum(value: number) {
    this._adomNum = value;
  }
  public resetAdomNum() {
    this._adomNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomNumInput() {
    return this._adomNum;
  }

  // managed_dev - computed: true, optional: true, required: false
  private _managedDev?: number; 
  public get managedDev() {
    return this.getNumberAttribute('managed_dev');
  }
  public set managedDev(value: number) {
    this._managedDev = value;
  }
  public resetManagedDev() {
    this._managedDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDevInput() {
    return this._managedDev;
  }
}

export class ConfigFmgVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFmgVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFmgVmOutputReference {
    return new ConfigFmgVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortiappsec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_types Config#service_types}
  */
  readonly serviceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#waf_addons Config#waf_addons}
  */
  readonly wafAddons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#waf_service_pkg Config#waf_service_pkg}
  */
  readonly wafServicePkg?: string;
}

export function configFortiappsecToTerraform(struct?: ConfigFortiappsec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceTypes),
    waf_addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wafAddons),
    waf_service_pkg: cdktf.stringToTerraform(struct!.wafServicePkg),
  }
}


export function configFortiappsecToHclTerraform(struct?: ConfigFortiappsec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    waf_addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wafAddons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    waf_service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.wafServicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortiappsecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortiappsec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTypes = this._serviceTypes;
    }
    if (this._wafAddons !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafAddons = this._wafAddons;
    }
    if (this._wafServicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafServicePkg = this._wafServicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortiappsec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceTypes = undefined;
      this._wafAddons = undefined;
      this._wafServicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceTypes = value.serviceTypes;
      this._wafAddons = value.wafAddons;
      this._wafServicePkg = value.wafServicePkg;
    }
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return this.getNumberAttribute('applications');
  }

  // health_checks - computed: true, optional: false, required: false
  public get healthChecks() {
    return this.getNumberAttribute('health_checks');
  }

  // qps - computed: true, optional: false, required: false
  public get qps() {
    return this.getNumberAttribute('qps');
  }

  // service_types - computed: true, optional: true, required: false
  private _serviceTypes?: string[]; 
  public get serviceTypes() {
    return this.getListAttribute('service_types');
  }
  public set serviceTypes(value: string[]) {
    this._serviceTypes = value;
  }
  public resetServiceTypes() {
    this._serviceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypesInput() {
    return this._serviceTypes;
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // waf_addons - computed: true, optional: true, required: false
  private _wafAddons?: string[]; 
  public get wafAddons() {
    return this.getListAttribute('waf_addons');
  }
  public set wafAddons(value: string[]) {
    this._wafAddons = value;
  }
  public resetWafAddons() {
    this._wafAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafAddonsInput() {
    return this._wafAddons;
  }

  // waf_service_pkg - computed: true, optional: true, required: false
  private _wafServicePkg?: string; 
  public get wafServicePkg() {
    return this.getStringAttribute('waf_service_pkg');
  }
  public set wafServicePkg(value: string) {
    this._wafServicePkg = value;
  }
  public resetWafServicePkg() {
    this._wafServicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafServicePkgInput() {
    return this._wafServicePkg;
  }
}

export class ConfigFortiappsecList extends cdktf.ComplexList {
  public internalValue? : ConfigFortiappsec[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortiappsecOutputReference {
    return new ConfigFortiappsecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortidlp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#endpoints Config#endpoints}
  */
  readonly endpoints?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFortidlpToTerraform(struct?: ConfigFortidlp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    endpoints: cdktf.numberToTerraform(struct!.endpoints),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFortidlpToHclTerraform(struct?: ConfigFortidlp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    endpoints: {
      value: cdktf.numberToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortidlpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortidlp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortidlp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._endpoints = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._endpoints = value.endpoints;
      this._servicePkg = value.servicePkg;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints?: number; 
  public get endpoints() {
    return this.getNumberAttribute('endpoints');
  }
  public set endpoints(value: number) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFortidlpList extends cdktf.ComplexList {
  public internalValue? : ConfigFortidlp[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortidlpOutputReference {
    return new ConfigFortidlpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortiedr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#repository_storage Config#repository_storage}
  */
  readonly repositoryStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFortiedrToTerraform(struct?: ConfigFortiedr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    repository_storage: cdktf.numberToTerraform(struct!.repositoryStorage),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFortiedrToHclTerraform(struct?: ConfigFortiedr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repository_storage: {
      value: cdktf.numberToHclTerraform(struct!.repositoryStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortiedrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortiedr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._repositoryStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryStorage = this._repositoryStorage;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortiedr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._repositoryStorage = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._repositoryStorage = value.repositoryStorage;
      this._servicePkg = value.servicePkg;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getNumberAttribute('endpoints');
  }

  // repository_storage - computed: true, optional: true, required: false
  private _repositoryStorage?: number; 
  public get repositoryStorage() {
    return this.getNumberAttribute('repository_storage');
  }
  public set repositoryStorage(value: number) {
    this._repositoryStorage = value;
  }
  public resetRepositoryStorage() {
    this._repositoryStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryStorageInput() {
    return this._repositoryStorage;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFortiedrList extends cdktf.ComplexList {
  public internalValue? : ConfigFortiedr[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortiedrOutputReference {
    return new ConfigFortiedrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortimailVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#cpu_size Config#cpu_size}
  */
  readonly cpuSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFortimailVmToTerraform(struct?: ConfigFortimailVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    cpu_size: cdktf.stringToTerraform(struct!.cpuSize),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFortimailVmToHclTerraform(struct?: ConfigFortimailVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_size: {
      value: cdktf.stringToHclTerraform(struct!.cpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortimailVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortimailVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._cpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSize = this._cpuSize;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortimailVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._cpuSize = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._cpuSize = value.cpuSize;
      this._servicePkg = value.servicePkg;
    }
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // cpu_size - computed: true, optional: true, required: false
  private _cpuSize?: string; 
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }
  public set cpuSize(value: string) {
    this._cpuSize = value;
  }
  public resetCpuSize() {
    this._cpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSizeInput() {
    return this._cpuSize;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFortimailVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFortimailVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortimailVmOutputReference {
    return new ConfigFortimailVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortinacVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#endpoints Config#endpoints}
  */
  readonly endpoints?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#support_service Config#support_service}
  */
  readonly supportService?: string;
}

export function configFortinacVmToTerraform(struct?: ConfigFortinacVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.numberToTerraform(struct!.endpoints),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
    support_service: cdktf.stringToTerraform(struct!.supportService),
  }
}


export function configFortinacVmToHclTerraform(struct?: ConfigFortinacVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.numberToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_service: {
      value: cdktf.stringToHclTerraform(struct!.supportService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortinacVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortinacVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    if (this._supportService !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportService = this._supportService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortinacVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._servicePkg = undefined;
      this._supportService = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._servicePkg = value.servicePkg;
      this._supportService = value.supportService;
    }
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints?: number; 
  public get endpoints() {
    return this.getNumberAttribute('endpoints');
  }
  public set endpoints(value: number) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }

  // support_service - computed: true, optional: true, required: false
  private _supportService?: string; 
  public get supportService() {
    return this.getStringAttribute('support_service');
  }
  public set supportService(value: string) {
    this._supportService = value;
  }
  public resetSupportService() {
    this._supportService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportServiceInput() {
    return this._supportService;
  }
}

export class ConfigFortinacVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFortinacVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortinacVmOutputReference {
    return new ConfigFortinacVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortindrCloud {
}

export function configFortindrCloudToTerraform(struct?: ConfigFortindrCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configFortindrCloudToHclTerraform(struct?: ConfigFortindrCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigFortindrCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortindrCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortindrCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // metered_usage - computed: true, optional: false, required: false
  public get meteredUsage() {
    return this.getNumberAttribute('metered_usage');
  }
}

export class ConfigFortindrCloudList extends cdktf.ComplexList {
  public internalValue? : ConfigFortindrCloud[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortindrCloudOutputReference {
    return new ConfigFortindrCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortirecon {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#asset_num Config#asset_num}
  */
  readonly assetNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#executive_num Config#executive_num}
  */
  readonly executiveNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#network_num Config#network_num}
  */
  readonly networkNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#vendor_num Config#vendor_num}
  */
  readonly vendorNum?: number;
}

export function configFortireconToTerraform(struct?: ConfigFortirecon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_num: cdktf.numberToTerraform(struct!.assetNum),
    executive_num: cdktf.numberToTerraform(struct!.executiveNum),
    network_num: cdktf.numberToTerraform(struct!.networkNum),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
    vendor_num: cdktf.numberToTerraform(struct!.vendorNum),
  }
}


export function configFortireconToHclTerraform(struct?: ConfigFortirecon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_num: {
      value: cdktf.numberToHclTerraform(struct!.assetNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    executive_num: {
      value: cdktf.numberToHclTerraform(struct!.executiveNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_num: {
      value: cdktf.numberToHclTerraform(struct!.networkNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_num: {
      value: cdktf.numberToHclTerraform(struct!.vendorNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortireconOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortirecon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetNum = this._assetNum;
    }
    if (this._executiveNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.executiveNum = this._executiveNum;
    }
    if (this._networkNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkNum = this._networkNum;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    if (this._vendorNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorNum = this._vendorNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortirecon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetNum = undefined;
      this._executiveNum = undefined;
      this._networkNum = undefined;
      this._servicePkg = undefined;
      this._vendorNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetNum = value.assetNum;
      this._executiveNum = value.executiveNum;
      this._networkNum = value.networkNum;
      this._servicePkg = value.servicePkg;
      this._vendorNum = value.vendorNum;
    }
  }

  // asset_num - computed: true, optional: true, required: false
  private _assetNum?: number; 
  public get assetNum() {
    return this.getNumberAttribute('asset_num');
  }
  public set assetNum(value: number) {
    this._assetNum = value;
  }
  public resetAssetNum() {
    this._assetNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNumInput() {
    return this._assetNum;
  }

  // executive_num - computed: true, optional: true, required: false
  private _executiveNum?: number; 
  public get executiveNum() {
    return this.getNumberAttribute('executive_num');
  }
  public set executiveNum(value: number) {
    this._executiveNum = value;
  }
  public resetExecutiveNum() {
    this._executiveNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executiveNumInput() {
    return this._executiveNum;
  }

  // network_num - computed: true, optional: true, required: false
  private _networkNum?: number; 
  public get networkNum() {
    return this.getNumberAttribute('network_num');
  }
  public set networkNum(value: number) {
    this._networkNum = value;
  }
  public resetNetworkNum() {
    this._networkNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNumInput() {
    return this._networkNum;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }

  // vendor_num - computed: true, optional: true, required: false
  private _vendorNum?: number; 
  public get vendorNum() {
    return this.getNumberAttribute('vendor_num');
  }
  public set vendorNum(value: number) {
    this._vendorNum = value;
  }
  public resetVendorNum() {
    this._vendorNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNumInput() {
    return this._vendorNum;
  }
}

export class ConfigFortireconList extends cdktf.ComplexList {
  public internalValue? : ConfigFortirecon[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortireconOutputReference {
    return new ConfigFortireconOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortisase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#additional_compute_region Config#additional_compute_region}
  */
  readonly additionalComputeRegion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#bandwidth Config#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#dedicated_ips Config#dedicated_ips}
  */
  readonly dedicatedIps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#locations Config#locations}
  */
  readonly locations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#users Config#users}
  */
  readonly users?: number;
}

export function configFortisaseToTerraform(struct?: ConfigFortisase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_compute_region: cdktf.numberToTerraform(struct!.additionalComputeRegion),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    dedicated_ips: cdktf.numberToTerraform(struct!.dedicatedIps),
    locations: cdktf.numberToTerraform(struct!.locations),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
    users: cdktf.numberToTerraform(struct!.users),
  }
}


export function configFortisaseToHclTerraform(struct?: ConfigFortisase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_compute_region: {
      value: cdktf.numberToHclTerraform(struct!.additionalComputeRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dedicated_ips: {
      value: cdktf.numberToHclTerraform(struct!.dedicatedIps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    locations: {
      value: cdktf.numberToHclTerraform(struct!.locations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.numberToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortisaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortisase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalComputeRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalComputeRegion = this._additionalComputeRegion;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._dedicatedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedIps = this._dedicatedIps;
    }
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortisase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalComputeRegion = undefined;
      this._bandwidth = undefined;
      this._dedicatedIps = undefined;
      this._locations = undefined;
      this._servicePkg = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalComputeRegion = value.additionalComputeRegion;
      this._bandwidth = value.bandwidth;
      this._dedicatedIps = value.dedicatedIps;
      this._locations = value.locations;
      this._servicePkg = value.servicePkg;
      this._users = value.users;
    }
  }

  // additional_compute_region - computed: true, optional: true, required: false
  private _additionalComputeRegion?: number; 
  public get additionalComputeRegion() {
    return this.getNumberAttribute('additional_compute_region');
  }
  public set additionalComputeRegion(value: number) {
    this._additionalComputeRegion = value;
  }
  public resetAdditionalComputeRegion() {
    this._additionalComputeRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalComputeRegionInput() {
    return this._additionalComputeRegion;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // dedicated_ips - computed: true, optional: true, required: false
  private _dedicatedIps?: number; 
  public get dedicatedIps() {
    return this.getNumberAttribute('dedicated_ips');
  }
  public set dedicatedIps(value: number) {
    this._dedicatedIps = value;
  }
  public resetDedicatedIps() {
    this._dedicatedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedIpsInput() {
    return this._dedicatedIps;
  }

  // locations - computed: true, optional: true, required: false
  private _locations?: number; 
  public get locations() {
    return this.getNumberAttribute('locations');
  }
  public set locations(value: number) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }

  // users - computed: true, optional: true, required: false
  private _users?: number; 
  public get users() {
    return this.getNumberAttribute('users');
  }
  public set users(value: number) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class ConfigFortisaseList extends cdktf.ComplexList {
  public internalValue? : ConfigFortisase[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortisaseOutputReference {
    return new ConfigFortisaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFortisoarVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#additional_users_license Config#additional_users_license}
  */
  readonly additionalUsersLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#addons Config#addons}
  */
  readonly addons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFortisoarVmToTerraform(struct?: ConfigFortisoarVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_users_license: cdktf.numberToTerraform(struct!.additionalUsersLicense),
    addons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addons),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFortisoarVmToHclTerraform(struct?: ConfigFortisoarVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_users_license: {
      value: cdktf.numberToHclTerraform(struct!.additionalUsersLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    addons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFortisoarVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFortisoarVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalUsersLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalUsersLicense = this._additionalUsersLicense;
    }
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFortisoarVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalUsersLicense = undefined;
      this._addons = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalUsersLicense = value.additionalUsersLicense;
      this._addons = value.addons;
      this._servicePkg = value.servicePkg;
    }
  }

  // additional_users_license - computed: true, optional: true, required: false
  private _additionalUsersLicense?: number; 
  public get additionalUsersLicense() {
    return this.getNumberAttribute('additional_users_license');
  }
  public set additionalUsersLicense(value: number) {
    this._additionalUsersLicense = value;
  }
  public resetAdditionalUsersLicense() {
    this._additionalUsersLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUsersLicenseInput() {
    return this._additionalUsersLicense;
  }

  // addons - computed: true, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return this.getListAttribute('addons');
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFortisoarVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFortisoarVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFortisoarVmOutputReference {
    return new ConfigFortisoarVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFpcVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#managed_dev Config#managed_dev}
  */
  readonly managedDev?: number;
}

export function configFpcVmToTerraform(struct?: ConfigFpcVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_dev: cdktf.numberToTerraform(struct!.managedDev),
  }
}


export function configFpcVmToHclTerraform(struct?: ConfigFpcVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_dev: {
      value: cdktf.numberToHclTerraform(struct!.managedDev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFpcVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFpcVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedDev !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDev = this._managedDev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFpcVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedDev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedDev = value.managedDev;
    }
  }

  // managed_dev - computed: true, optional: true, required: false
  private _managedDev?: number; 
  public get managedDev() {
    return this.getNumberAttribute('managed_dev');
  }
  public set managedDev(value: number) {
    this._managedDev = value;
  }
  public resetManagedDev() {
    this._managedDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDevInput() {
    return this._managedDev;
  }
}

export class ConfigFpcVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFpcVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFpcVmOutputReference {
    return new ConfigFpcVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFswHw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#device_model Config#device_model}
  */
  readonly deviceModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFswHwToTerraform(struct?: ConfigFswHw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_model: cdktf.stringToTerraform(struct!.deviceModel),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFswHwToHclTerraform(struct?: ConfigFswHw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_model: {
      value: cdktf.stringToHclTerraform(struct!.deviceModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFswHwOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFswHw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceModel = this._deviceModel;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFswHw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceModel = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceModel = value.deviceModel;
      this._servicePkg = value.servicePkg;
    }
  }

  // device_model - computed: true, optional: true, required: false
  private _deviceModel?: string; 
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }
  public set deviceModel(value: string) {
    this._deviceModel = value;
  }
  public resetDeviceModel() {
    this._deviceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelInput() {
    return this._deviceModel;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFswHwList extends cdktf.ComplexList {
  public internalValue? : ConfigFswHw[] | cdktf.IResolvable

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
  public get(index: number): ConfigFswHwOutputReference {
    return new ConfigFswHwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFwbVm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#cpu_size Config#cpu_size}
  */
  readonly cpuSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#service_pkg Config#service_pkg}
  */
  readonly servicePkg?: string;
}

export function configFwbVmToTerraform(struct?: ConfigFwbVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_size: cdktf.stringToTerraform(struct!.cpuSize),
    service_pkg: cdktf.stringToTerraform(struct!.servicePkg),
  }
}


export function configFwbVmToHclTerraform(struct?: ConfigFwbVm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_size: {
      value: cdktf.stringToHclTerraform(struct!.cpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pkg: {
      value: cdktf.stringToHclTerraform(struct!.servicePkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFwbVmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFwbVm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSize = this._cpuSize;
    }
    if (this._servicePkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePkg = this._servicePkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFwbVm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuSize = undefined;
      this._servicePkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuSize = value.cpuSize;
      this._servicePkg = value.servicePkg;
    }
  }

  // cpu_size - computed: true, optional: true, required: false
  private _cpuSize?: string; 
  public get cpuSize() {
    return this.getStringAttribute('cpu_size');
  }
  public set cpuSize(value: string) {
    this._cpuSize = value;
  }
  public resetCpuSize() {
    this._cpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSizeInput() {
    return this._cpuSize;
  }

  // service_pkg - computed: true, optional: true, required: false
  private _servicePkg?: string; 
  public get servicePkg() {
    return this.getStringAttribute('service_pkg');
  }
  public set servicePkg(value: string) {
    this._servicePkg = value;
  }
  public resetServicePkg() {
    this._servicePkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePkgInput() {
    return this._servicePkg;
  }
}

export class ConfigFwbVmList extends cdktf.ComplexList {
  public internalValue? : ConfigFwbVm[] | cdktf.IResolvable

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
  public get(index: number): ConfigFwbVmOutputReference {
    return new ConfigFwbVmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFwbcPrivate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#average_throughput Config#average_throughput}
  */
  readonly averageThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#web_applications Config#web_applications}
  */
  readonly webApplications?: number;
}

export function configFwbcPrivateToTerraform(struct?: ConfigFwbcPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_throughput: cdktf.numberToTerraform(struct!.averageThroughput),
    web_applications: cdktf.numberToTerraform(struct!.webApplications),
  }
}


export function configFwbcPrivateToHclTerraform(struct?: ConfigFwbcPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_throughput: {
      value: cdktf.numberToHclTerraform(struct!.averageThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_applications: {
      value: cdktf.numberToHclTerraform(struct!.webApplications),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFwbcPrivateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFwbcPrivate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageThroughput = this._averageThroughput;
    }
    if (this._webApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.webApplications = this._webApplications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFwbcPrivate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageThroughput = undefined;
      this._webApplications = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageThroughput = value.averageThroughput;
      this._webApplications = value.webApplications;
    }
  }

  // average_throughput - computed: true, optional: true, required: false
  private _averageThroughput?: number; 
  public get averageThroughput() {
    return this.getNumberAttribute('average_throughput');
  }
  public set averageThroughput(value: number) {
    this._averageThroughput = value;
  }
  public resetAverageThroughput() {
    this._averageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageThroughputInput() {
    return this._averageThroughput;
  }

  // web_applications - computed: true, optional: true, required: false
  private _webApplications?: number; 
  public get webApplications() {
    return this.getNumberAttribute('web_applications');
  }
  public set webApplications(value: number) {
    this._webApplications = value;
  }
  public resetWebApplications() {
    this._webApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationsInput() {
    return this._webApplications;
  }
}

export class ConfigFwbcPrivateList extends cdktf.ComplexList {
  public internalValue? : ConfigFwbcPrivate[] | cdktf.IResolvable

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
  public get(index: number): ConfigFwbcPrivateOutputReference {
    return new ConfigFwbcPrivateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigFwbcPublic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#average_throughput Config#average_throughput}
  */
  readonly averageThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#web_applications Config#web_applications}
  */
  readonly webApplications?: number;
}

export function configFwbcPublicToTerraform(struct?: ConfigFwbcPublic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_throughput: cdktf.numberToTerraform(struct!.averageThroughput),
    web_applications: cdktf.numberToTerraform(struct!.webApplications),
  }
}


export function configFwbcPublicToHclTerraform(struct?: ConfigFwbcPublic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_throughput: {
      value: cdktf.numberToHclTerraform(struct!.averageThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_applications: {
      value: cdktf.numberToHclTerraform(struct!.webApplications),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigFwbcPublicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigFwbcPublic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageThroughput = this._averageThroughput;
    }
    if (this._webApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.webApplications = this._webApplications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigFwbcPublic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageThroughput = undefined;
      this._webApplications = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageThroughput = value.averageThroughput;
      this._webApplications = value.webApplications;
    }
  }

  // average_throughput - computed: true, optional: true, required: false
  private _averageThroughput?: number; 
  public get averageThroughput() {
    return this.getNumberAttribute('average_throughput');
  }
  public set averageThroughput(value: number) {
    this._averageThroughput = value;
  }
  public resetAverageThroughput() {
    this._averageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageThroughputInput() {
    return this._averageThroughput;
  }

  // web_applications - computed: true, optional: true, required: false
  private _webApplications?: number; 
  public get webApplications() {
    return this.getNumberAttribute('web_applications');
  }
  public set webApplications(value: number) {
    this._webApplications = value;
  }
  public resetWebApplications() {
    this._webApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationsInput() {
    return this._webApplications;
  }
}

export class ConfigFwbcPublicList extends cdktf.ComplexList {
  public internalValue? : ConfigFwbcPublic[] | cdktf.IResolvable

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
  public get(index: number): ConfigFwbcPublicOutputReference {
    return new ConfigFwbcPublicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigSiemCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#additional_online_storage Config#additional_online_storage}
  */
  readonly additionalOnlineStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#archive_storage Config#archive_storage}
  */
  readonly archiveStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#compute_units Config#compute_units}
  */
  readonly computeUnits?: number;
}

export function configSiemCloudToTerraform(struct?: ConfigSiemCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_online_storage: cdktf.numberToTerraform(struct!.additionalOnlineStorage),
    archive_storage: cdktf.numberToTerraform(struct!.archiveStorage),
    compute_units: cdktf.numberToTerraform(struct!.computeUnits),
  }
}


export function configSiemCloudToHclTerraform(struct?: ConfigSiemCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_online_storage: {
      value: cdktf.numberToHclTerraform(struct!.additionalOnlineStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    archive_storage: {
      value: cdktf.numberToHclTerraform(struct!.archiveStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute_units: {
      value: cdktf.numberToHclTerraform(struct!.computeUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigSiemCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigSiemCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalOnlineStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalOnlineStorage = this._additionalOnlineStorage;
    }
    if (this._archiveStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveStorage = this._archiveStorage;
    }
    if (this._computeUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeUnits = this._computeUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigSiemCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalOnlineStorage = undefined;
      this._archiveStorage = undefined;
      this._computeUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalOnlineStorage = value.additionalOnlineStorage;
      this._archiveStorage = value.archiveStorage;
      this._computeUnits = value.computeUnits;
    }
  }

  // additional_online_storage - computed: true, optional: true, required: false
  private _additionalOnlineStorage?: number; 
  public get additionalOnlineStorage() {
    return this.getNumberAttribute('additional_online_storage');
  }
  public set additionalOnlineStorage(value: number) {
    this._additionalOnlineStorage = value;
  }
  public resetAdditionalOnlineStorage() {
    this._additionalOnlineStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOnlineStorageInput() {
    return this._additionalOnlineStorage;
  }

  // archive_storage - computed: true, optional: true, required: false
  private _archiveStorage?: number; 
  public get archiveStorage() {
    return this.getNumberAttribute('archive_storage');
  }
  public set archiveStorage(value: number) {
    this._archiveStorage = value;
  }
  public resetArchiveStorage() {
    this._archiveStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveStorageInput() {
    return this._archiveStorage;
  }

  // compute_units - computed: true, optional: true, required: false
  private _computeUnits?: number; 
  public get computeUnits() {
    return this.getNumberAttribute('compute_units');
  }
  public set computeUnits(value: number) {
    this._computeUnits = value;
  }
  public resetComputeUnits() {
    this._computeUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeUnitsInput() {
    return this._computeUnits;
  }
}

export class ConfigSiemCloudList extends cdktf.ComplexList {
  public internalValue? : ConfigSiemCloud[] | cdktf.IResolvable

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
  public get(index: number): ConfigSiemCloudOutputReference {
    return new ConfigSiemCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config fortiflexvm_config}
*/
export class Config extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiflexvm_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Config resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Config to import
  * @param importFromId The id of the existing Config that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Config to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiflexvm_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiflexvm/2.4.4/docs/resources/config fortiflexvm_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiflexvm_config',
      terraformGeneratorMetadata: {
        providerName: 'fortiflexvm',
        providerVersion: '2.4.4',
        providerVersionConstraint: '2.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._configId = config.configId;
    this._id = config.id;
    this._name = config.name;
    this._productType = config.productType;
    this._programSerialNumber = config.programSerialNumber;
    this._status = config.status;
    this._fadVm.internalValue = config.fadVm;
    this._fapHw.internalValue = config.fapHw;
    this._fazVm.internalValue = config.fazVm;
    this._fcEmsCloud.internalValue = config.fcEmsCloud;
    this._fcEmsOp.internalValue = config.fcEmsOp;
    this._fgtHw.internalValue = config.fgtHw;
    this._fgtVmBundle.internalValue = config.fgtVmBundle;
    this._fgtVmLcs.internalValue = config.fgtVmLcs;
    this._fmgVm.internalValue = config.fmgVm;
    this._fortiappsec.internalValue = config.fortiappsec;
    this._fortidlp.internalValue = config.fortidlp;
    this._fortiedr.internalValue = config.fortiedr;
    this._fortimailVm.internalValue = config.fortimailVm;
    this._fortinacVm.internalValue = config.fortinacVm;
    this._fortindrCloud.internalValue = config.fortindrCloud;
    this._fortirecon.internalValue = config.fortirecon;
    this._fortisase.internalValue = config.fortisase;
    this._fortisoarVm.internalValue = config.fortisoarVm;
    this._fpcVm.internalValue = config.fpcVm;
    this._fswHw.internalValue = config.fswHw;
    this._fwbVm.internalValue = config.fwbVm;
    this._fwbcPrivate.internalValue = config.fwbcPrivate;
    this._fwbcPublic.internalValue = config.fwbcPublic;
    this._siemCloud.internalValue = config.siemCloud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // product_type - computed: false, optional: false, required: true
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }

  // program_serial_number - computed: false, optional: false, required: true
  private _programSerialNumber?: string; 
  public get programSerialNumber() {
    return this.getStringAttribute('program_serial_number');
  }
  public set programSerialNumber(value: string) {
    this._programSerialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programSerialNumberInput() {
    return this._programSerialNumber;
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

  // fad_vm - computed: false, optional: true, required: false
  private _fadVm = new ConfigFadVmList(this, "fad_vm", false);
  public get fadVm() {
    return this._fadVm;
  }
  public putFadVm(value: ConfigFadVm[] | cdktf.IResolvable) {
    this._fadVm.internalValue = value;
  }
  public resetFadVm() {
    this._fadVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fadVmInput() {
    return this._fadVm.internalValue;
  }

  // fap_hw - computed: false, optional: true, required: false
  private _fapHw = new ConfigFapHwList(this, "fap_hw", false);
  public get fapHw() {
    return this._fapHw;
  }
  public putFapHw(value: ConfigFapHw[] | cdktf.IResolvable) {
    this._fapHw.internalValue = value;
  }
  public resetFapHw() {
    this._fapHw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fapHwInput() {
    return this._fapHw.internalValue;
  }

  // faz_vm - computed: false, optional: true, required: false
  private _fazVm = new ConfigFazVmList(this, "faz_vm", false);
  public get fazVm() {
    return this._fazVm;
  }
  public putFazVm(value: ConfigFazVm[] | cdktf.IResolvable) {
    this._fazVm.internalValue = value;
  }
  public resetFazVm() {
    this._fazVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazVmInput() {
    return this._fazVm.internalValue;
  }

  // fc_ems_cloud - computed: false, optional: true, required: false
  private _fcEmsCloud = new ConfigFcEmsCloudList(this, "fc_ems_cloud", false);
  public get fcEmsCloud() {
    return this._fcEmsCloud;
  }
  public putFcEmsCloud(value: ConfigFcEmsCloud[] | cdktf.IResolvable) {
    this._fcEmsCloud.internalValue = value;
  }
  public resetFcEmsCloud() {
    this._fcEmsCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcEmsCloudInput() {
    return this._fcEmsCloud.internalValue;
  }

  // fc_ems_op - computed: false, optional: true, required: false
  private _fcEmsOp = new ConfigFcEmsOpList(this, "fc_ems_op", false);
  public get fcEmsOp() {
    return this._fcEmsOp;
  }
  public putFcEmsOp(value: ConfigFcEmsOp[] | cdktf.IResolvable) {
    this._fcEmsOp.internalValue = value;
  }
  public resetFcEmsOp() {
    this._fcEmsOp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcEmsOpInput() {
    return this._fcEmsOp.internalValue;
  }

  // fgt_hw - computed: false, optional: true, required: false
  private _fgtHw = new ConfigFgtHwList(this, "fgt_hw", false);
  public get fgtHw() {
    return this._fgtHw;
  }
  public putFgtHw(value: ConfigFgtHw[] | cdktf.IResolvable) {
    this._fgtHw.internalValue = value;
  }
  public resetFgtHw() {
    this._fgtHw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtHwInput() {
    return this._fgtHw.internalValue;
  }

  // fgt_vm_bundle - computed: false, optional: true, required: false
  private _fgtVmBundle = new ConfigFgtVmBundleList(this, "fgt_vm_bundle", false);
  public get fgtVmBundle() {
    return this._fgtVmBundle;
  }
  public putFgtVmBundle(value: ConfigFgtVmBundle[] | cdktf.IResolvable) {
    this._fgtVmBundle.internalValue = value;
  }
  public resetFgtVmBundle() {
    this._fgtVmBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtVmBundleInput() {
    return this._fgtVmBundle.internalValue;
  }

  // fgt_vm_lcs - computed: false, optional: true, required: false
  private _fgtVmLcs = new ConfigFgtVmLcsList(this, "fgt_vm_lcs", false);
  public get fgtVmLcs() {
    return this._fgtVmLcs;
  }
  public putFgtVmLcs(value: ConfigFgtVmLcs[] | cdktf.IResolvable) {
    this._fgtVmLcs.internalValue = value;
  }
  public resetFgtVmLcs() {
    this._fgtVmLcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtVmLcsInput() {
    return this._fgtVmLcs.internalValue;
  }

  // fmg_vm - computed: false, optional: true, required: false
  private _fmgVm = new ConfigFmgVmList(this, "fmg_vm", false);
  public get fmgVm() {
    return this._fmgVm;
  }
  public putFmgVm(value: ConfigFmgVm[] | cdktf.IResolvable) {
    this._fmgVm.internalValue = value;
  }
  public resetFmgVm() {
    this._fmgVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgVmInput() {
    return this._fmgVm.internalValue;
  }

  // fortiappsec - computed: false, optional: true, required: false
  private _fortiappsec = new ConfigFortiappsecList(this, "fortiappsec", false);
  public get fortiappsec() {
    return this._fortiappsec;
  }
  public putFortiappsec(value: ConfigFortiappsec[] | cdktf.IResolvable) {
    this._fortiappsec.internalValue = value;
  }
  public resetFortiappsec() {
    this._fortiappsec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiappsecInput() {
    return this._fortiappsec.internalValue;
  }

  // fortidlp - computed: false, optional: true, required: false
  private _fortidlp = new ConfigFortidlpList(this, "fortidlp", false);
  public get fortidlp() {
    return this._fortidlp;
  }
  public putFortidlp(value: ConfigFortidlp[] | cdktf.IResolvable) {
    this._fortidlp.internalValue = value;
  }
  public resetFortidlp() {
    this._fortidlp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortidlpInput() {
    return this._fortidlp.internalValue;
  }

  // fortiedr - computed: false, optional: true, required: false
  private _fortiedr = new ConfigFortiedrList(this, "fortiedr", false);
  public get fortiedr() {
    return this._fortiedr;
  }
  public putFortiedr(value: ConfigFortiedr[] | cdktf.IResolvable) {
    this._fortiedr.internalValue = value;
  }
  public resetFortiedr() {
    this._fortiedr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiedrInput() {
    return this._fortiedr.internalValue;
  }

  // fortimail_vm - computed: false, optional: true, required: false
  private _fortimailVm = new ConfigFortimailVmList(this, "fortimail_vm", false);
  public get fortimailVm() {
    return this._fortimailVm;
  }
  public putFortimailVm(value: ConfigFortimailVm[] | cdktf.IResolvable) {
    this._fortimailVm.internalValue = value;
  }
  public resetFortimailVm() {
    this._fortimailVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortimailVmInput() {
    return this._fortimailVm.internalValue;
  }

  // fortinac_vm - computed: false, optional: true, required: false
  private _fortinacVm = new ConfigFortinacVmList(this, "fortinac_vm", false);
  public get fortinacVm() {
    return this._fortinacVm;
  }
  public putFortinacVm(value: ConfigFortinacVm[] | cdktf.IResolvable) {
    this._fortinacVm.internalValue = value;
  }
  public resetFortinacVm() {
    this._fortinacVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinacVmInput() {
    return this._fortinacVm.internalValue;
  }

  // fortindr_cloud - computed: false, optional: true, required: false
  private _fortindrCloud = new ConfigFortindrCloudList(this, "fortindr_cloud", false);
  public get fortindrCloud() {
    return this._fortindrCloud;
  }
  public putFortindrCloud(value: ConfigFortindrCloud[] | cdktf.IResolvable) {
    this._fortindrCloud.internalValue = value;
  }
  public resetFortindrCloud() {
    this._fortindrCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrCloudInput() {
    return this._fortindrCloud.internalValue;
  }

  // fortirecon - computed: false, optional: true, required: false
  private _fortirecon = new ConfigFortireconList(this, "fortirecon", false);
  public get fortirecon() {
    return this._fortirecon;
  }
  public putFortirecon(value: ConfigFortirecon[] | cdktf.IResolvable) {
    this._fortirecon.internalValue = value;
  }
  public resetFortirecon() {
    this._fortirecon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortireconInput() {
    return this._fortirecon.internalValue;
  }

  // fortisase - computed: false, optional: true, required: false
  private _fortisase = new ConfigFortisaseList(this, "fortisase", false);
  public get fortisase() {
    return this._fortisase;
  }
  public putFortisase(value: ConfigFortisase[] | cdktf.IResolvable) {
    this._fortisase.internalValue = value;
  }
  public resetFortisase() {
    this._fortisase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisaseInput() {
    return this._fortisase.internalValue;
  }

  // fortisoar_vm - computed: false, optional: true, required: false
  private _fortisoarVm = new ConfigFortisoarVmList(this, "fortisoar_vm", false);
  public get fortisoarVm() {
    return this._fortisoarVm;
  }
  public putFortisoarVm(value: ConfigFortisoarVm[] | cdktf.IResolvable) {
    this._fortisoarVm.internalValue = value;
  }
  public resetFortisoarVm() {
    this._fortisoarVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisoarVmInput() {
    return this._fortisoarVm.internalValue;
  }

  // fpc_vm - computed: false, optional: true, required: false
  private _fpcVm = new ConfigFpcVmList(this, "fpc_vm", false);
  public get fpcVm() {
    return this._fpcVm;
  }
  public putFpcVm(value: ConfigFpcVm[] | cdktf.IResolvable) {
    this._fpcVm.internalValue = value;
  }
  public resetFpcVm() {
    this._fpcVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpcVmInput() {
    return this._fpcVm.internalValue;
  }

  // fsw_hw - computed: false, optional: true, required: false
  private _fswHw = new ConfigFswHwList(this, "fsw_hw", false);
  public get fswHw() {
    return this._fswHw;
  }
  public putFswHw(value: ConfigFswHw[] | cdktf.IResolvable) {
    this._fswHw.internalValue = value;
  }
  public resetFswHw() {
    this._fswHw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswHwInput() {
    return this._fswHw.internalValue;
  }

  // fwb_vm - computed: false, optional: true, required: false
  private _fwbVm = new ConfigFwbVmList(this, "fwb_vm", false);
  public get fwbVm() {
    return this._fwbVm;
  }
  public putFwbVm(value: ConfigFwbVm[] | cdktf.IResolvable) {
    this._fwbVm.internalValue = value;
  }
  public resetFwbVm() {
    this._fwbVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwbVmInput() {
    return this._fwbVm.internalValue;
  }

  // fwbc_private - computed: false, optional: true, required: false
  private _fwbcPrivate = new ConfigFwbcPrivateList(this, "fwbc_private", false);
  public get fwbcPrivate() {
    return this._fwbcPrivate;
  }
  public putFwbcPrivate(value: ConfigFwbcPrivate[] | cdktf.IResolvable) {
    this._fwbcPrivate.internalValue = value;
  }
  public resetFwbcPrivate() {
    this._fwbcPrivate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwbcPrivateInput() {
    return this._fwbcPrivate.internalValue;
  }

  // fwbc_public - computed: false, optional: true, required: false
  private _fwbcPublic = new ConfigFwbcPublicList(this, "fwbc_public", false);
  public get fwbcPublic() {
    return this._fwbcPublic;
  }
  public putFwbcPublic(value: ConfigFwbcPublic[] | cdktf.IResolvable) {
    this._fwbcPublic.internalValue = value;
  }
  public resetFwbcPublic() {
    this._fwbcPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwbcPublicInput() {
    return this._fwbcPublic.internalValue;
  }

  // siem_cloud - computed: false, optional: true, required: false
  private _siemCloud = new ConfigSiemCloudList(this, "siem_cloud", false);
  public get siemCloud() {
    return this._siemCloud;
  }
  public putSiemCloud(value: ConfigSiemCloud[] | cdktf.IResolvable) {
    this._siemCloud.internalValue = value;
  }
  public resetSiemCloud() {
    this._siemCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siemCloudInput() {
    return this._siemCloud.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      product_type: cdktf.stringToTerraform(this._productType),
      program_serial_number: cdktf.stringToTerraform(this._programSerialNumber),
      status: cdktf.stringToTerraform(this._status),
      fad_vm: cdktf.listMapper(configFadVmToTerraform, true)(this._fadVm.internalValue),
      fap_hw: cdktf.listMapper(configFapHwToTerraform, true)(this._fapHw.internalValue),
      faz_vm: cdktf.listMapper(configFazVmToTerraform, true)(this._fazVm.internalValue),
      fc_ems_cloud: cdktf.listMapper(configFcEmsCloudToTerraform, true)(this._fcEmsCloud.internalValue),
      fc_ems_op: cdktf.listMapper(configFcEmsOpToTerraform, true)(this._fcEmsOp.internalValue),
      fgt_hw: cdktf.listMapper(configFgtHwToTerraform, true)(this._fgtHw.internalValue),
      fgt_vm_bundle: cdktf.listMapper(configFgtVmBundleToTerraform, true)(this._fgtVmBundle.internalValue),
      fgt_vm_lcs: cdktf.listMapper(configFgtVmLcsToTerraform, true)(this._fgtVmLcs.internalValue),
      fmg_vm: cdktf.listMapper(configFmgVmToTerraform, true)(this._fmgVm.internalValue),
      fortiappsec: cdktf.listMapper(configFortiappsecToTerraform, true)(this._fortiappsec.internalValue),
      fortidlp: cdktf.listMapper(configFortidlpToTerraform, true)(this._fortidlp.internalValue),
      fortiedr: cdktf.listMapper(configFortiedrToTerraform, true)(this._fortiedr.internalValue),
      fortimail_vm: cdktf.listMapper(configFortimailVmToTerraform, true)(this._fortimailVm.internalValue),
      fortinac_vm: cdktf.listMapper(configFortinacVmToTerraform, true)(this._fortinacVm.internalValue),
      fortindr_cloud: cdktf.listMapper(configFortindrCloudToTerraform, true)(this._fortindrCloud.internalValue),
      fortirecon: cdktf.listMapper(configFortireconToTerraform, true)(this._fortirecon.internalValue),
      fortisase: cdktf.listMapper(configFortisaseToTerraform, true)(this._fortisase.internalValue),
      fortisoar_vm: cdktf.listMapper(configFortisoarVmToTerraform, true)(this._fortisoarVm.internalValue),
      fpc_vm: cdktf.listMapper(configFpcVmToTerraform, true)(this._fpcVm.internalValue),
      fsw_hw: cdktf.listMapper(configFswHwToTerraform, true)(this._fswHw.internalValue),
      fwb_vm: cdktf.listMapper(configFwbVmToTerraform, true)(this._fwbVm.internalValue),
      fwbc_private: cdktf.listMapper(configFwbcPrivateToTerraform, true)(this._fwbcPrivate.internalValue),
      fwbc_public: cdktf.listMapper(configFwbcPublicToTerraform, true)(this._fwbcPublic.internalValue),
      siem_cloud: cdktf.listMapper(configSiemCloudToTerraform, true)(this._siemCloud.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      product_type: {
        value: cdktf.stringToHclTerraform(this._productType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_serial_number: {
        value: cdktf.stringToHclTerraform(this._programSerialNumber),
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
      fad_vm: {
        value: cdktf.listMapperHcl(configFadVmToHclTerraform, true)(this._fadVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFadVmList",
      },
      fap_hw: {
        value: cdktf.listMapperHcl(configFapHwToHclTerraform, true)(this._fapHw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFapHwList",
      },
      faz_vm: {
        value: cdktf.listMapperHcl(configFazVmToHclTerraform, true)(this._fazVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFazVmList",
      },
      fc_ems_cloud: {
        value: cdktf.listMapperHcl(configFcEmsCloudToHclTerraform, true)(this._fcEmsCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFcEmsCloudList",
      },
      fc_ems_op: {
        value: cdktf.listMapperHcl(configFcEmsOpToHclTerraform, true)(this._fcEmsOp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFcEmsOpList",
      },
      fgt_hw: {
        value: cdktf.listMapperHcl(configFgtHwToHclTerraform, true)(this._fgtHw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFgtHwList",
      },
      fgt_vm_bundle: {
        value: cdktf.listMapperHcl(configFgtVmBundleToHclTerraform, true)(this._fgtVmBundle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFgtVmBundleList",
      },
      fgt_vm_lcs: {
        value: cdktf.listMapperHcl(configFgtVmLcsToHclTerraform, true)(this._fgtVmLcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFgtVmLcsList",
      },
      fmg_vm: {
        value: cdktf.listMapperHcl(configFmgVmToHclTerraform, true)(this._fmgVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFmgVmList",
      },
      fortiappsec: {
        value: cdktf.listMapperHcl(configFortiappsecToHclTerraform, true)(this._fortiappsec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortiappsecList",
      },
      fortidlp: {
        value: cdktf.listMapperHcl(configFortidlpToHclTerraform, true)(this._fortidlp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortidlpList",
      },
      fortiedr: {
        value: cdktf.listMapperHcl(configFortiedrToHclTerraform, true)(this._fortiedr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortiedrList",
      },
      fortimail_vm: {
        value: cdktf.listMapperHcl(configFortimailVmToHclTerraform, true)(this._fortimailVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortimailVmList",
      },
      fortinac_vm: {
        value: cdktf.listMapperHcl(configFortinacVmToHclTerraform, true)(this._fortinacVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortinacVmList",
      },
      fortindr_cloud: {
        value: cdktf.listMapperHcl(configFortindrCloudToHclTerraform, true)(this._fortindrCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortindrCloudList",
      },
      fortirecon: {
        value: cdktf.listMapperHcl(configFortireconToHclTerraform, true)(this._fortirecon.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortireconList",
      },
      fortisase: {
        value: cdktf.listMapperHcl(configFortisaseToHclTerraform, true)(this._fortisase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortisaseList",
      },
      fortisoar_vm: {
        value: cdktf.listMapperHcl(configFortisoarVmToHclTerraform, true)(this._fortisoarVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFortisoarVmList",
      },
      fpc_vm: {
        value: cdktf.listMapperHcl(configFpcVmToHclTerraform, true)(this._fpcVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFpcVmList",
      },
      fsw_hw: {
        value: cdktf.listMapperHcl(configFswHwToHclTerraform, true)(this._fswHw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFswHwList",
      },
      fwb_vm: {
        value: cdktf.listMapperHcl(configFwbVmToHclTerraform, true)(this._fwbVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFwbVmList",
      },
      fwbc_private: {
        value: cdktf.listMapperHcl(configFwbcPrivateToHclTerraform, true)(this._fwbcPrivate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFwbcPrivateList",
      },
      fwbc_public: {
        value: cdktf.listMapperHcl(configFwbcPublicToHclTerraform, true)(this._fwbcPublic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigFwbcPublicList",
      },
      siem_cloud: {
        value: cdktf.listMapperHcl(configSiemCloudToHclTerraform, true)(this._siemCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigSiemCloudList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
