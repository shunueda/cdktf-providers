// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedfishNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * nic_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#nic_filter DataRedfishNetwork#nic_filter}
  */
  readonly nicFilter?: DataRedfishNetworkNicFilter;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#redfish_server DataRedfishNetwork#redfish_server}
  */
  readonly redfishServer?: DataRedfishNetworkRedfishServer[] | cdktf.IResolvable;
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridging {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridgingToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridgingToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridgingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capable - computed: true, optional: false, required: false
  public get capable() {
    return this.getBooleanAttribute('capable');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpar {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNparToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNparToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNparOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // npar_capable - computed: true, optional: false, required: false
  public get nparCapable() {
    return this.getBooleanAttribute('npar_capable');
  }

  // npar_enabled - computed: true, optional: false, required: false
  public get nparEnabled() {
    return this.getBooleanAttribute('npar_enabled');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpiv {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpivToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpiv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpivToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpiv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpivOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpiv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpiv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_device_logins - computed: true, optional: false, required: false
  public get maxDeviceLogins() {
    return this.getNumberAttribute('max_device_logins');
  }

  // max_port_logins - computed: true, optional: false, required: false
  public get maxPortLogins() {
    return this.getNumberAttribute('max_port_logins');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriov {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriovToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriov): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriovToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriov): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriovOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriov | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriov | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sriov_vepa_capable - computed: true, optional: false, required: false
  public get sriovVepaCapable() {
    return this.getBooleanAttribute('sriov_vepa_capable');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunction {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunctionToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunctionToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_max_count - computed: true, optional: false, required: false
  public get deviceMaxCount() {
    return this.getNumberAttribute('device_max_count');
  }

  // min_assignment_group_size - computed: true, optional: false, required: false
  public get minAssignmentGroupSize() {
    return this.getNumberAttribute('min_assignment_group_size');
  }

  // network_port_max_count - computed: true, optional: false, required: false
  public get networkPortMaxCount() {
    return this.getNumberAttribute('network_port_max_count');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffload {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sriov - computed: true, optional: false, required: false
  private _sriov = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadSriovOutputReference(this, "sriov");
  public get sriov() {
    return this._sriov;
  }

  // virtual_function - computed: true, optional: false, required: false
  private _virtualFunction = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadVirtualFunctionOutputReference(this, "virtual_function");
  public get virtualFunction() {
    return this._virtualFunction;
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilities {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_center_bridging - computed: true, optional: false, required: false
  private _dataCenterBridging = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesDataCenterBridgingOutputReference(this, "data_center_bridging");
  public get dataCenterBridging() {
    return this._dataCenterBridging;
  }

  // npar - computed: true, optional: false, required: false
  private _npar = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNparOutputReference(this, "npar");
  public get npar() {
    return this._npar;
  }

  // npiv - computed: true, optional: false, required: false
  private _npiv = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesNpivOutputReference(this, "npiv");
  public get npiv() {
    return this._npiv;
  }

  // virtualization_offload - computed: true, optional: false, required: false
  private _virtualizationOffload = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesVirtualizationOffloadOutputReference(this, "virtualization_offload");
  public get virtualizationOffload() {
    return this._virtualizationOffload;
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterControllers {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterControllersToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterControllers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controller_capabilities - computed: true, optional: false, required: false
  private _controllerCapabilities = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersControllerCapabilitiesOutputReference(this, "controller_capabilities");
  public get controllerCapabilities() {
    return this._controllerCapabilities;
  }

  // firmware_package_version - computed: true, optional: false, required: false
  public get firmwarePackageVersion() {
    return this.getStringAttribute('firmware_package_version');
  }
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersOutputReference {
    return new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapterStatus {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterStatusToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterStatusToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkAdapter {
}

export function dataRedfishNetworkNetworkInterfacesNetworkAdapterToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkAdapterToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkAdapter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkAdapterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkAdapter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkAdapter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controllers - computed: true, optional: false, required: false
  private _controllers = new DataRedfishNetworkNetworkInterfacesNetworkAdapterControllersList(this, "controllers", false);
  public get controllers() {
    return this._controllers;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishNetworkNetworkInterfacesNetworkAdapterStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlan {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlanToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlanToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vlan_enabled - computed: true, optional: false, required: false
  public get vlanEnabled() {
    return this.getBooleanAttribute('vlan_enabled');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernet {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mtu_size - computed: true, optional: false, required: false
  public get mtuSize() {
    return this.getNumberAttribute('mtu_size');
  }

  // permanent_mac_address - computed: true, optional: false, required: false
  public get permanentMacAddress() {
    return this.getStringAttribute('permanent_mac_address');
  }

  // vlan - computed: true, optional: false, required: false
  private _vlan = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargets {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargetsToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargetsToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_priority - computed: true, optional: false, required: false
  public get bootPriority() {
    return this.getNumberAttribute('boot_priority');
  }

  // lun_id - computed: true, optional: false, required: false
  public get lunId() {
    return this.getStringAttribute('lun_id');
  }

  // wwpn - computed: true, optional: false, required: false
  public get wwpn() {
    return this.getStringAttribute('wwpn');
  }
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargetsOutputReference {
    return new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannel {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_fip_vlan_discovery - computed: true, optional: false, required: false
  public get allowFipVlanDiscovery() {
    return this.getBooleanAttribute('allow_fip_vlan_discovery');
  }

  // boot_targets - computed: true, optional: false, required: false
  private _bootTargets = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelBootTargetsList(this, "boot_targets", false);
  public get bootTargets() {
    return this._bootTargets;
  }

  // fcoe_active_vlan_id - computed: true, optional: false, required: false
  public get fcoeActiveVlanId() {
    return this.getNumberAttribute('fcoe_active_vlan_id');
  }

  // fcoe_local_vlan_id - computed: true, optional: false, required: false
  public get fcoeLocalVlanId() {
    return this.getNumberAttribute('fcoe_local_vlan_id');
  }

  // fibre_channel_id - computed: true, optional: false, required: false
  public get fibreChannelId() {
    return this.getStringAttribute('fibre_channel_id');
  }

  // permanent_wwnn - computed: true, optional: false, required: false
  public get permanentWwnn() {
    return this.getStringAttribute('permanent_wwnn');
  }

  // permanent_wwpn - computed: true, optional: false, required: false
  public get permanentWwpn() {
    return this.getStringAttribute('permanent_wwpn');
  }

  // wwn_source - computed: true, optional: false, required: false
  public get wwnSource() {
    return this.getStringAttribute('wwn_source');
  }

  // wwnn - computed: true, optional: false, required: false
  public get wwnn() {
    return this.getStringAttribute('wwnn');
  }

  // wwpn - computed: true, optional: false, required: false
  public get wwpn() {
    return this.getStringAttribute('wwpn');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBoot {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBootToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBootToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // chap_secret - computed: true, optional: false, required: false
  public get chapSecret() {
    return this.getStringAttribute('chap_secret');
  }

  // chap_username - computed: true, optional: false, required: false
  public get chapUsername() {
    return this.getStringAttribute('chap_username');
  }

  // initiator_default_gateway - computed: true, optional: false, required: false
  public get initiatorDefaultGateway() {
    return this.getStringAttribute('initiator_default_gateway');
  }

  // initiator_ip_address - computed: true, optional: false, required: false
  public get initiatorIpAddress() {
    return this.getStringAttribute('initiator_ip_address');
  }

  // initiator_name - computed: true, optional: false, required: false
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }

  // initiator_netmask - computed: true, optional: false, required: false
  public get initiatorNetmask() {
    return this.getStringAttribute('initiator_netmask');
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // ip_mask_dns_via_dhcp - computed: true, optional: false, required: false
  public get ipMaskDnsViaDhcp() {
    return this.getBooleanAttribute('ip_mask_dns_via_dhcp');
  }

  // mutual_chap_secret - computed: true, optional: false, required: false
  public get mutualChapSecret() {
    return this.getStringAttribute('mutual_chap_secret');
  }

  // mutual_chap_username - computed: true, optional: false, required: false
  public get mutualChapUsername() {
    return this.getStringAttribute('mutual_chap_username');
  }

  // primary_dns - computed: true, optional: false, required: false
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }

  // primary_lun - computed: true, optional: false, required: false
  public get primaryLun() {
    return this.getNumberAttribute('primary_lun');
  }

  // primary_target_ip_address - computed: true, optional: false, required: false
  public get primaryTargetIpAddress() {
    return this.getStringAttribute('primary_target_ip_address');
  }

  // primary_target_name - computed: true, optional: false, required: false
  public get primaryTargetName() {
    return this.getStringAttribute('primary_target_name');
  }

  // primary_target_tcp_port - computed: true, optional: false, required: false
  public get primaryTargetTcpPort() {
    return this.getNumberAttribute('primary_target_tcp_port');
  }

  // primary_vlan_enable - computed: true, optional: false, required: false
  public get primaryVlanEnable() {
    return this.getBooleanAttribute('primary_vlan_enable');
  }

  // primary_vlan_id - computed: true, optional: false, required: false
  public get primaryVlanId() {
    return this.getNumberAttribute('primary_vlan_id');
  }

  // router_advertisement_enabled - computed: true, optional: false, required: false
  public get routerAdvertisementEnabled() {
    return this.getBooleanAttribute('router_advertisement_enabled');
  }

  // secondary_dns - computed: true, optional: false, required: false
  public get secondaryDns() {
    return this.getStringAttribute('secondary_dns');
  }

  // secondary_lun - computed: true, optional: false, required: false
  public get secondaryLun() {
    return this.getNumberAttribute('secondary_lun');
  }

  // secondary_target_ip_address - computed: true, optional: false, required: false
  public get secondaryTargetIpAddress() {
    return this.getStringAttribute('secondary_target_ip_address');
  }

  // secondary_target_name - computed: true, optional: false, required: false
  public get secondaryTargetName() {
    return this.getStringAttribute('secondary_target_name');
  }

  // secondary_target_tcp_port - computed: true, optional: false, required: false
  public get secondaryTargetTcpPort() {
    return this.getNumberAttribute('secondary_target_tcp_port');
  }

  // secondary_vlan_enable - computed: true, optional: false, required: false
  public get secondaryVlanEnable() {
    return this.getBooleanAttribute('secondary_vlan_enable');
  }

  // secondary_vlan_id - computed: true, optional: false, required: false
  public get secondaryVlanId() {
    return this.getNumberAttribute('secondary_vlan_id');
  }

  // target_info_via_dhcp - computed: true, optional: false, required: false
  public get targetInfoViaDhcp() {
    return this.getBooleanAttribute('target_info_via_dhcp');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFc {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus - computed: true, optional: false, required: false
  public get bus() {
    return this.getNumberAttribute('bus');
  }

  // cable_length_metres - computed: true, optional: false, required: false
  public get cableLengthMetres() {
    return this.getNumberAttribute('cable_length_metres');
  }

  // chip_type - computed: true, optional: false, required: false
  public get chipType() {
    return this.getStringAttribute('chip_type');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getNumberAttribute('device');
  }

  // device_description - computed: true, optional: false, required: false
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // efi_version - computed: true, optional: false, required: false
  public get efiVersion() {
    return this.getStringAttribute('efi_version');
  }

  // fabric_login_retry_count - computed: true, optional: false, required: false
  public get fabricLoginRetryCount() {
    return this.getNumberAttribute('fabric_login_retry_count');
  }

  // fabric_login_timeout - computed: true, optional: false, required: false
  public get fabricLoginTimeout() {
    return this.getNumberAttribute('fabric_login_timeout');
  }

  // family_version - computed: true, optional: false, required: false
  public get familyVersion() {
    return this.getStringAttribute('family_version');
  }

  // fc_os_driver_version - computed: true, optional: false, required: false
  public get fcOsDriverVersion() {
    return this.getStringAttribute('fc_os_driver_version');
  }

  // fc_tape_enable - computed: true, optional: false, required: false
  public get fcTapeEnable() {
    return this.getStringAttribute('fc_tape_enable');
  }

  // fcoe_os_driver_version - computed: true, optional: false, required: false
  public get fcoeOsDriverVersion() {
    return this.getStringAttribute('fcoe_os_driver_version');
  }

  // frame_payload_size - computed: true, optional: false, required: false
  public get framePayloadSize() {
    return this.getStringAttribute('frame_payload_size');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getNumberAttribute('function');
  }

  // hard_zone_address - computed: true, optional: false, required: false
  public get hardZoneAddress() {
    return this.getNumberAttribute('hard_zone_address');
  }

  // hard_zone_enable - computed: true, optional: false, required: false
  public get hardZoneEnable() {
    return this.getStringAttribute('hard_zone_enable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier_type - computed: true, optional: false, required: false
  public get identifierType() {
    return this.getStringAttribute('identifier_type');
  }

  // iscsi_os_driver_version - computed: true, optional: false, required: false
  public get iscsiOsDriverVersion() {
    return this.getStringAttribute('iscsi_os_driver_version');
  }

  // lan_driver_version - computed: true, optional: false, required: false
  public get lanDriverVersion() {
    return this.getStringAttribute('lan_driver_version');
  }

  // link_down_timeout - computed: true, optional: false, required: false
  public get linkDownTimeout() {
    return this.getNumberAttribute('link_down_timeout');
  }

  // loop_reset_delay - computed: true, optional: false, required: false
  public get loopResetDelay() {
    return this.getNumberAttribute('loop_reset_delay');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // port_down_retry_count - computed: true, optional: false, required: false
  public get portDownRetryCount() {
    return this.getNumberAttribute('port_down_retry_count');
  }

  // port_down_timeout - computed: true, optional: false, required: false
  public get portDownTimeout() {
    return this.getNumberAttribute('port_down_timeout');
  }

  // port_login_retry_count - computed: true, optional: false, required: false
  public get portLoginRetryCount() {
    return this.getNumberAttribute('port_login_retry_count');
  }

  // port_login_timeout - computed: true, optional: false, required: false
  public get portLoginTimeout() {
    return this.getNumberAttribute('port_login_timeout');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // rdma_os_driver_version - computed: true, optional: false, required: false
  public get rdmaOsDriverVersion() {
    return this.getStringAttribute('rdma_os_driver_version');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // second_fc_target_lun - computed: true, optional: false, required: false
  public get secondFcTargetLun() {
    return this.getNumberAttribute('second_fc_target_lun');
  }

  // second_fc_target_wwpn - computed: true, optional: false, required: false
  public get secondFcTargetWwpn() {
    return this.getStringAttribute('second_fc_target_wwpn');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // transceiver_part_number - computed: true, optional: false, required: false
  public get transceiverPartNumber() {
    return this.getStringAttribute('transceiver_part_number');
  }

  // transceiver_serial_number - computed: true, optional: false, required: false
  public get transceiverSerialNumber() {
    return this.getStringAttribute('transceiver_serial_number');
  }

  // transceiver_vendor_name - computed: true, optional: false, required: false
  public get transceiverVendorName() {
    return this.getStringAttribute('transceiver_vendor_name');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilities {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilitiesToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilitiesToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fc_max_number_exchanges - computed: true, optional: false, required: false
  public get fcMaxNumberExchanges() {
    return this.getNumberAttribute('fc_max_number_exchanges');
  }

  // fc_max_number_out_standing_commands - computed: true, optional: false, required: false
  public get fcMaxNumberOutStandingCommands() {
    return this.getNumberAttribute('fc_max_number_out_standing_commands');
  }

  // feature_licensing_support - computed: true, optional: false, required: false
  public get featureLicensingSupport() {
    return this.getStringAttribute('feature_licensing_support');
  }

  // flex_addressing_support - computed: true, optional: false, required: false
  public get flexAddressingSupport() {
    return this.getStringAttribute('flex_addressing_support');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // on_chip_thermal_sensor - computed: true, optional: false, required: false
  public get onChipThermalSensor() {
    return this.getStringAttribute('on_chip_thermal_sensor');
  }

  // persistence_policy_support - computed: true, optional: false, required: false
  public get persistencePolicySupport() {
    return this.getStringAttribute('persistence_policy_support');
  }

  // uefi_support - computed: true, optional: false, required: false
  public get uefiSupport() {
    return this.getStringAttribute('uefi_support');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetrics {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetricsToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetricsToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fc_invalid_crcs - computed: true, optional: false, required: false
  public get fcInvalidCrcs() {
    return this.getNumberAttribute('fc_invalid_crcs');
  }

  // fc_link_failures - computed: true, optional: false, required: false
  public get fcLinkFailures() {
    return this.getNumberAttribute('fc_link_failures');
  }

  // fc_loss_of_signals - computed: true, optional: false, required: false
  public get fcLossOfSignals() {
    return this.getNumberAttribute('fc_loss_of_signals');
  }

  // fc_rx_kb_count - computed: true, optional: false, required: false
  public get fcRxKbCount() {
    return this.getNumberAttribute('fc_rx_kb_count');
  }

  // fc_rx_sequences - computed: true, optional: false, required: false
  public get fcRxSequences() {
    return this.getNumberAttribute('fc_rx_sequences');
  }

  // fc_rx_total_frames - computed: true, optional: false, required: false
  public get fcRxTotalFrames() {
    return this.getNumberAttribute('fc_rx_total_frames');
  }

  // fc_tx_kb_count - computed: true, optional: false, required: false
  public get fcTxKbCount() {
    return this.getNumberAttribute('fc_tx_kb_count');
  }

  // fc_tx_sequences - computed: true, optional: false, required: false
  public get fcTxSequences() {
    return this.getNumberAttribute('fc_tx_sequences');
  }

  // fc_tx_total_frames - computed: true, optional: false, required: false
  public get fcTxTotalFrames() {
    return this.getNumberAttribute('fc_tx_total_frames');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // os_driver_state - computed: true, optional: false, required: false
  public get osDriverState() {
    return this.getStringAttribute('os_driver_state');
  }

  // port_status - computed: true, optional: false, required: false
  public get portStatus() {
    return this.getStringAttribute('port_status');
  }

  // rx_input_power_mw - computed: true, optional: false, required: false
  public get rxInputPowerMw() {
    return this.getNumberAttribute('rx_input_power_mw');
  }

  // rx_input_power_status - computed: true, optional: false, required: false
  public get rxInputPowerStatus() {
    return this.getStringAttribute('rx_input_power_status');
  }

  // temperature_celsius - computed: true, optional: false, required: false
  public get temperatureCelsius() {
    return this.getNumberAttribute('temperature_celsius');
  }

  // temperature_status - computed: true, optional: false, required: false
  public get temperatureStatus() {
    return this.getStringAttribute('temperature_status');
  }

  // tx_bias_current_mw - computed: true, optional: false, required: false
  public get txBiasCurrentMw() {
    return this.getNumberAttribute('tx_bias_current_mw');
  }

  // tx_bias_current_status - computed: true, optional: false, required: false
  public get txBiasCurrentStatus() {
    return this.getStringAttribute('tx_bias_current_status');
  }

  // tx_output_power_mw - computed: true, optional: false, required: false
  public get txOutputPowerMw() {
    return this.getNumberAttribute('tx_output_power_mw');
  }

  // tx_output_power_status - computed: true, optional: false, required: false
  public get txOutputPowerStatus() {
    return this.getStringAttribute('tx_output_power_status');
  }

  // voltage_status - computed: true, optional: false, required: false
  public get voltageStatus() {
    return this.getStringAttribute('voltage_status');
  }

  // voltage_value_volts - computed: true, optional: false, required: false
  public get voltageValueVolts() {
    return this.getNumberAttribute('voltage_value_volts');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNic {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_number - computed: true, optional: false, required: false
  public get busNumber() {
    return this.getNumberAttribute('bus_number');
  }

  // cable_length_metres - computed: true, optional: false, required: false
  public get cableLengthMetres() {
    return this.getNumberAttribute('cable_length_metres');
  }

  // controller_bios_version - computed: true, optional: false, required: false
  public get controllerBiosVersion() {
    return this.getStringAttribute('controller_bios_version');
  }

  // data_bus_width - computed: true, optional: false, required: false
  public get dataBusWidth() {
    return this.getStringAttribute('data_bus_width');
  }

  // device_description - computed: true, optional: false, required: false
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }

  // efi_version - computed: true, optional: false, required: false
  public get efiVersion() {
    return this.getStringAttribute('efi_version');
  }

  // family_version - computed: true, optional: false, required: false
  public get familyVersion() {
    return this.getStringAttribute('family_version');
  }

  // fc_os_driver_version - computed: true, optional: false, required: false
  public get fcOsDriverVersion() {
    return this.getStringAttribute('fc_os_driver_version');
  }

  // fcoe_offload_mode - computed: true, optional: false, required: false
  public get fcoeOffloadMode() {
    return this.getStringAttribute('fcoe_offload_mode');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier_type - computed: true, optional: false, required: false
  public get identifierType() {
    return this.getStringAttribute('identifier_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // iscsi_offload_mode - computed: true, optional: false, required: false
  public get iscsiOffloadMode() {
    return this.getStringAttribute('iscsi_offload_mode');
  }

  // last_system_inventory_time - computed: true, optional: false, required: false
  public get lastSystemInventoryTime() {
    return this.getStringAttribute('last_system_inventory_time');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // link_duplex - computed: true, optional: false, required: false
  public get linkDuplex() {
    return this.getStringAttribute('link_duplex');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nic_mode - computed: true, optional: false, required: false
  public get nicMode() {
    return this.getStringAttribute('nic_mode');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // pci_device_id - computed: true, optional: false, required: false
  public get pciDeviceId() {
    return this.getStringAttribute('pci_device_id');
  }

  // pci_sub_device_id - computed: true, optional: false, required: false
  public get pciSubDeviceId() {
    return this.getStringAttribute('pci_sub_device_id');
  }

  // pci_sub_vendor_id - computed: true, optional: false, required: false
  public get pciSubVendorId() {
    return this.getStringAttribute('pci_sub_vendor_id');
  }

  // pci_vendor_id - computed: true, optional: false, required: false
  public get pciVendorId() {
    return this.getStringAttribute('pci_vendor_id');
  }

  // permanent_fcoe_emac_address - computed: true, optional: false, required: false
  public get permanentFcoeEmacAddress() {
    return this.getStringAttribute('permanent_fcoe_emac_address');
  }

  // permanent_iscsi_emac_address - computed: true, optional: false, required: false
  public get permanentIscsiEmacAddress() {
    return this.getStringAttribute('permanent_iscsi_emac_address');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // slot_length - computed: true, optional: false, required: false
  public get slotLength() {
    return this.getStringAttribute('slot_length');
  }

  // slot_type - computed: true, optional: false, required: false
  public get slotType() {
    return this.getStringAttribute('slot_type');
  }

  // snapi_state - computed: true, optional: false, required: false
  public get snapiState() {
    return this.getStringAttribute('snapi_state');
  }

  // snapi_support - computed: true, optional: false, required: false
  public get snapiSupport() {
    return this.getStringAttribute('snapi_support');
  }

  // transceiver_part_number - computed: true, optional: false, required: false
  public get transceiverPartNumber() {
    return this.getStringAttribute('transceiver_part_number');
  }

  // transceiver_serial_number - computed: true, optional: false, required: false
  public get transceiverSerialNumber() {
    return this.getStringAttribute('transceiver_serial_number');
  }

  // transceiver_vendor_name - computed: true, optional: false, required: false
  public get transceiverVendorName() {
    return this.getStringAttribute('transceiver_vendor_name');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // vpi_support - computed: true, optional: false, required: false
  public get vpiSupport() {
    return this.getStringAttribute('vpi_support');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilities {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilitiesToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilitiesToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bpe_support - computed: true, optional: false, required: false
  public get bpeSupport() {
    return this.getStringAttribute('bpe_support');
  }

  // congestion_notification - computed: true, optional: false, required: false
  public get congestionNotification() {
    return this.getStringAttribute('congestion_notification');
  }

  // dcb_exchange_protocol - computed: true, optional: false, required: false
  public get dcbExchangeProtocol() {
    return this.getStringAttribute('dcb_exchange_protocol');
  }

  // ets - computed: true, optional: false, required: false
  public get ets() {
    return this.getStringAttribute('ets');
  }

  // evb_modes_support - computed: true, optional: false, required: false
  public get evbModesSupport() {
    return this.getStringAttribute('evb_modes_support');
  }

  // fcoe_boot_support - computed: true, optional: false, required: false
  public get fcoeBootSupport() {
    return this.getStringAttribute('fcoe_boot_support');
  }

  // fcoe_max_ios_per_session - computed: true, optional: false, required: false
  public get fcoeMaxIosPerSession() {
    return this.getNumberAttribute('fcoe_max_ios_per_session');
  }

  // fcoe_max_npiv_per_port - computed: true, optional: false, required: false
  public get fcoeMaxNpivPerPort() {
    return this.getNumberAttribute('fcoe_max_npiv_per_port');
  }

  // fcoe_max_number_exchanges - computed: true, optional: false, required: false
  public get fcoeMaxNumberExchanges() {
    return this.getNumberAttribute('fcoe_max_number_exchanges');
  }

  // fcoe_max_number_logins - computed: true, optional: false, required: false
  public get fcoeMaxNumberLogins() {
    return this.getNumberAttribute('fcoe_max_number_logins');
  }

  // fcoe_max_number_of_fc_targets - computed: true, optional: false, required: false
  public get fcoeMaxNumberOfFcTargets() {
    return this.getNumberAttribute('fcoe_max_number_of_fc_targets');
  }

  // fcoe_max_number_outstanding_commands - computed: true, optional: false, required: false
  public get fcoeMaxNumberOutstandingCommands() {
    return this.getNumberAttribute('fcoe_max_number_outstanding_commands');
  }

  // fcoe_offload_support - computed: true, optional: false, required: false
  public get fcoeOffloadSupport() {
    return this.getStringAttribute('fcoe_offload_support');
  }

  // feature_licensing_support - computed: true, optional: false, required: false
  public get featureLicensingSupport() {
    return this.getStringAttribute('feature_licensing_support');
  }

  // flex_addressing_support - computed: true, optional: false, required: false
  public get flexAddressingSupport() {
    return this.getStringAttribute('flex_addressing_support');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipsec_offload_support - computed: true, optional: false, required: false
  public get ipsecOffloadSupport() {
    return this.getStringAttribute('ipsec_offload_support');
  }

  // iscsi_boot_support - computed: true, optional: false, required: false
  public get iscsiBootSupport() {
    return this.getStringAttribute('iscsi_boot_support');
  }

  // iscsi_offload_support - computed: true, optional: false, required: false
  public get iscsiOffloadSupport() {
    return this.getStringAttribute('iscsi_offload_support');
  }

  // mac_sec_support - computed: true, optional: false, required: false
  public get macSecSupport() {
    return this.getStringAttribute('mac_sec_support');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nic_partitioning_support - computed: true, optional: false, required: false
  public get nicPartitioningSupport() {
    return this.getStringAttribute('nic_partitioning_support');
  }

  // nw_management_pass_through - computed: true, optional: false, required: false
  public get nwManagementPassThrough() {
    return this.getStringAttribute('nw_management_pass_through');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // on_chip_thermal_sensor - computed: true, optional: false, required: false
  public get onChipThermalSensor() {
    return this.getStringAttribute('on_chip_thermal_sensor');
  }

  // open_flow_support - computed: true, optional: false, required: false
  public get openFlowSupport() {
    return this.getStringAttribute('open_flow_support');
  }

  // os_bmc_management_pass_through - computed: true, optional: false, required: false
  public get osBmcManagementPassThrough() {
    return this.getStringAttribute('os_bmc_management_pass_through');
  }

  // partition_wol_support - computed: true, optional: false, required: false
  public get partitionWolSupport() {
    return this.getStringAttribute('partition_wol_support');
  }

  // persistence_policy_support - computed: true, optional: false, required: false
  public get persistencePolicySupport() {
    return this.getStringAttribute('persistence_policy_support');
  }

  // priority_flow_control - computed: true, optional: false, required: false
  public get priorityFlowControl() {
    return this.getStringAttribute('priority_flow_control');
  }

  // pxe_boot_support - computed: true, optional: false, required: false
  public get pxeBootSupport() {
    return this.getStringAttribute('pxe_boot_support');
  }

  // rdma_support - computed: true, optional: false, required: false
  public get rdmaSupport() {
    return this.getStringAttribute('rdma_support');
  }

  // remote_phy - computed: true, optional: false, required: false
  public get remotePhy() {
    return this.getStringAttribute('remote_phy');
  }

  // tcp_chimney_support - computed: true, optional: false, required: false
  public get tcpChimneySupport() {
    return this.getStringAttribute('tcp_chimney_support');
  }

  // tcp_offload_engine_support - computed: true, optional: false, required: false
  public get tcpOffloadEngineSupport() {
    return this.getStringAttribute('tcp_offload_engine_support');
  }

  // uefi_support - computed: true, optional: false, required: false
  public get uefiSupport() {
    return this.getStringAttribute('uefi_support');
  }

  // veb - computed: true, optional: false, required: false
  public get veb() {
    return this.getStringAttribute('veb');
  }

  // veb_vepa_multi_channel - computed: true, optional: false, required: false
  public get vebVepaMultiChannel() {
    return this.getStringAttribute('veb_vepa_multi_channel');
  }

  // veb_vepa_single_channel - computed: true, optional: false, required: false
  public get vebVepaSingleChannel() {
    return this.getStringAttribute('veb_vepa_single_channel');
  }

  // virtual_link_control - computed: true, optional: false, required: false
  public get virtualLinkControl() {
    return this.getStringAttribute('virtual_link_control');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetrics {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetricsToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetricsToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discarded_pkts - computed: true, optional: false, required: false
  public get discardedPkts() {
    return this.getNumberAttribute('discarded_pkts');
  }

  // fc_crc_error_count - computed: true, optional: false, required: false
  public get fcCrcErrorCount() {
    return this.getNumberAttribute('fc_crc_error_count');
  }

  // fcoe_link_failures - computed: true, optional: false, required: false
  public get fcoeLinkFailures() {
    return this.getNumberAttribute('fcoe_link_failures');
  }

  // fcoe_pkt_rx_count - computed: true, optional: false, required: false
  public get fcoePktRxCount() {
    return this.getNumberAttribute('fcoe_pkt_rx_count');
  }

  // fcoe_pkt_tx_count - computed: true, optional: false, required: false
  public get fcoePktTxCount() {
    return this.getNumberAttribute('fcoe_pkt_tx_count');
  }

  // fcoe_rx_pkt_dropped_count - computed: true, optional: false, required: false
  public get fcoeRxPktDroppedCount() {
    return this.getNumberAttribute('fcoe_rx_pkt_dropped_count');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lan_fcs_rx_errors - computed: true, optional: false, required: false
  public get lanFcsRxErrors() {
    return this.getNumberAttribute('lan_fcs_rx_errors');
  }

  // lan_unicast_pkt_rx_count - computed: true, optional: false, required: false
  public get lanUnicastPktRxCount() {
    return this.getNumberAttribute('lan_unicast_pkt_rx_count');
  }

  // lan_unicast_pkt_tx_count - computed: true, optional: false, required: false
  public get lanUnicastPktTxCount() {
    return this.getNumberAttribute('lan_unicast_pkt_tx_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // os_driver_state - computed: true, optional: false, required: false
  public get osDriverState() {
    return this.getStringAttribute('os_driver_state');
  }

  // partition_link_status - computed: true, optional: false, required: false
  public get partitionLinkStatus() {
    return this.getStringAttribute('partition_link_status');
  }

  // partition_os_driver_state - computed: true, optional: false, required: false
  public get partitionOsDriverState() {
    return this.getStringAttribute('partition_os_driver_state');
  }

  // rdma_rx_total_bytes - computed: true, optional: false, required: false
  public get rdmaRxTotalBytes() {
    return this.getNumberAttribute('rdma_rx_total_bytes');
  }

  // rdma_rx_total_packets - computed: true, optional: false, required: false
  public get rdmaRxTotalPackets() {
    return this.getNumberAttribute('rdma_rx_total_packets');
  }

  // rdma_total_protection_errors - computed: true, optional: false, required: false
  public get rdmaTotalProtectionErrors() {
    return this.getNumberAttribute('rdma_total_protection_errors');
  }

  // rdma_total_protocol_errors - computed: true, optional: false, required: false
  public get rdmaTotalProtocolErrors() {
    return this.getNumberAttribute('rdma_total_protocol_errors');
  }

  // rdma_tx_total_bytes - computed: true, optional: false, required: false
  public get rdmaTxTotalBytes() {
    return this.getNumberAttribute('rdma_tx_total_bytes');
  }

  // rdma_tx_total_packets - computed: true, optional: false, required: false
  public get rdmaTxTotalPackets() {
    return this.getNumberAttribute('rdma_tx_total_packets');
  }

  // rdma_tx_total_read_req_pkts - computed: true, optional: false, required: false
  public get rdmaTxTotalReadReqPkts() {
    return this.getNumberAttribute('rdma_tx_total_read_req_pkts');
  }

  // rdma_tx_total_send_pkts - computed: true, optional: false, required: false
  public get rdmaTxTotalSendPkts() {
    return this.getNumberAttribute('rdma_tx_total_send_pkts');
  }

  // rdma_tx_total_write_pkts - computed: true, optional: false, required: false
  public get rdmaTxTotalWritePkts() {
    return this.getNumberAttribute('rdma_tx_total_write_pkts');
  }

  // rx_broadcast - computed: true, optional: false, required: false
  public get rxBroadcast() {
    return this.getNumberAttribute('rx_broadcast');
  }

  // rx_bytes - computed: true, optional: false, required: false
  public get rxBytes() {
    return this.getNumberAttribute('rx_bytes');
  }

  // rx_error_pkt_alignment_errors - computed: true, optional: false, required: false
  public get rxErrorPktAlignmentErrors() {
    return this.getNumberAttribute('rx_error_pkt_alignment_errors');
  }

  // rx_error_pkt_fcs_errors - computed: true, optional: false, required: false
  public get rxErrorPktFcsErrors() {
    return this.getNumberAttribute('rx_error_pkt_fcs_errors');
  }

  // rx_false_carrier_detection - computed: true, optional: false, required: false
  public get rxFalseCarrierDetection() {
    return this.getNumberAttribute('rx_false_carrier_detection');
  }

  // rx_input_power_mw - computed: true, optional: false, required: false
  public get rxInputPowerMw() {
    return this.getNumberAttribute('rx_input_power_mw');
  }

  // rx_input_power_status - computed: true, optional: false, required: false
  public get rxInputPowerStatus() {
    return this.getStringAttribute('rx_input_power_status');
  }

  // rx_jabber_pkt - computed: true, optional: false, required: false
  public get rxJabberPkt() {
    return this.getNumberAttribute('rx_jabber_pkt');
  }

  // rx_mutlicast_packets - computed: true, optional: false, required: false
  public get rxMutlicastPackets() {
    return this.getNumberAttribute('rx_mutlicast_packets');
  }

  // rx_pause_xoff_frames - computed: true, optional: false, required: false
  public get rxPauseXoffFrames() {
    return this.getNumberAttribute('rx_pause_xoff_frames');
  }

  // rx_pause_xon_frames - computed: true, optional: false, required: false
  public get rxPauseXonFrames() {
    return this.getNumberAttribute('rx_pause_xon_frames');
  }

  // rx_runt_pkt - computed: true, optional: false, required: false
  public get rxRuntPkt() {
    return this.getNumberAttribute('rx_runt_pkt');
  }

  // rx_unicast_packets - computed: true, optional: false, required: false
  public get rxUnicastPackets() {
    return this.getNumberAttribute('rx_unicast_packets');
  }

  // start_statistic_time - computed: true, optional: false, required: false
  public get startStatisticTime() {
    return this.getStringAttribute('start_statistic_time');
  }

  // statistic_time - computed: true, optional: false, required: false
  public get statisticTime() {
    return this.getStringAttribute('statistic_time');
  }

  // temperature_celsius - computed: true, optional: false, required: false
  public get temperatureCelsius() {
    return this.getNumberAttribute('temperature_celsius');
  }

  // temperature_status - computed: true, optional: false, required: false
  public get temperatureStatus() {
    return this.getStringAttribute('temperature_status');
  }

  // tx_bias_current_ma - computed: true, optional: false, required: false
  public get txBiasCurrentMa() {
    return this.getNumberAttribute('tx_bias_current_ma');
  }

  // tx_bias_current_status - computed: true, optional: false, required: false
  public get txBiasCurrentStatus() {
    return this.getStringAttribute('tx_bias_current_status');
  }

  // tx_broadcast - computed: true, optional: false, required: false
  public get txBroadcast() {
    return this.getNumberAttribute('tx_broadcast');
  }

  // tx_bytes - computed: true, optional: false, required: false
  public get txBytes() {
    return this.getNumberAttribute('tx_bytes');
  }

  // tx_error_pkt_excessive_collision - computed: true, optional: false, required: false
  public get txErrorPktExcessiveCollision() {
    return this.getNumberAttribute('tx_error_pkt_excessive_collision');
  }

  // tx_error_pkt_late_collision - computed: true, optional: false, required: false
  public get txErrorPktLateCollision() {
    return this.getNumberAttribute('tx_error_pkt_late_collision');
  }

  // tx_error_pkt_multiple_collision - computed: true, optional: false, required: false
  public get txErrorPktMultipleCollision() {
    return this.getNumberAttribute('tx_error_pkt_multiple_collision');
  }

  // tx_error_pkt_single_collision - computed: true, optional: false, required: false
  public get txErrorPktSingleCollision() {
    return this.getNumberAttribute('tx_error_pkt_single_collision');
  }

  // tx_mutlicast_packets - computed: true, optional: false, required: false
  public get txMutlicastPackets() {
    return this.getNumberAttribute('tx_mutlicast_packets');
  }

  // tx_output_power_mw - computed: true, optional: false, required: false
  public get txOutputPowerMw() {
    return this.getNumberAttribute('tx_output_power_mw');
  }

  // tx_output_power_status - computed: true, optional: false, required: false
  public get txOutputPowerStatus() {
    return this.getStringAttribute('tx_output_power_status');
  }

  // tx_pause_xoff_frames - computed: true, optional: false, required: false
  public get txPauseXoffFrames() {
    return this.getNumberAttribute('tx_pause_xoff_frames');
  }

  // tx_pause_xon_frames - computed: true, optional: false, required: false
  public get txPauseXonFrames() {
    return this.getNumberAttribute('tx_pause_xon_frames');
  }

  // tx_unicast_packets - computed: true, optional: false, required: false
  public get txUnicastPackets() {
    return this.getNumberAttribute('tx_unicast_packets');
  }

  // voltage_status - computed: true, optional: false, required: false
  public get voltageStatus() {
    return this.getStringAttribute('voltage_status');
  }

  // voltage_value_volts - computed: true, optional: false, required: false
  public get voltageValueVolts() {
    return this.getNumberAttribute('voltage_value_volts');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOem {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dell_fc - computed: true, optional: false, required: false
  private _dellFc = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcOutputReference(this, "dell_fc");
  public get dellFc() {
    return this._dellFc;
  }

  // dell_fc_port_capabilities - computed: true, optional: false, required: false
  private _dellFcPortCapabilities = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortCapabilitiesOutputReference(this, "dell_fc_port_capabilities");
  public get dellFcPortCapabilities() {
    return this._dellFcPortCapabilities;
  }

  // dell_fc_port_metrics - computed: true, optional: false, required: false
  private _dellFcPortMetrics = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellFcPortMetricsOutputReference(this, "dell_fc_port_metrics");
  public get dellFcPortMetrics() {
    return this._dellFcPortMetrics;
  }

  // dell_nic - computed: true, optional: false, required: false
  private _dellNic = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicOutputReference(this, "dell_nic");
  public get dellNic() {
    return this._dellNic;
  }

  // dell_nic_capabilities - computed: true, optional: false, required: false
  private _dellNicCapabilities = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicCapabilitiesOutputReference(this, "dell_nic_capabilities");
  public get dellNicCapabilities() {
    return this._dellNicCapabilities;
  }

  // dell_nic_port_metrics - computed: true, optional: false, required: false
  private _dellNicPortMetrics = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemDellNicPortMetricsOutputReference(this, "dell_nic_port_metrics");
  public get dellNicPortMetrics() {
    return this._dellNicPortMetrics;
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatus {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatusToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatusToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctions {
}

export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignable_physical_network_ports - computed: true, optional: false, required: false
  public get assignablePhysicalNetworkPorts() {
    return this.getListAttribute('assignable_physical_network_ports');
  }

  // assignable_physical_ports - computed: true, optional: false, required: false
  public get assignablePhysicalPorts() {
    return this.getListAttribute('assignable_physical_ports');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ethernet - computed: true, optional: false, required: false
  private _ethernet = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsEthernetOutputReference(this, "ethernet");
  public get ethernet() {
    return this._ethernet;
  }

  // fibre_channel - computed: true, optional: false, required: false
  private _fibreChannel = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsFibreChannelOutputReference(this, "fibre_channel");
  public get fibreChannel() {
    return this._fibreChannel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iscsi_boot - computed: true, optional: false, required: false
  private _iscsiBoot = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsIscsiBootOutputReference(this, "iscsi_boot");
  public get iscsiBoot() {
    return this._iscsiBoot;
  }

  // max_virtual_functions - computed: true, optional: false, required: false
  public get maxVirtualFunctions() {
    return this.getNumberAttribute('max_virtual_functions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_dev_func_capabilities - computed: true, optional: false, required: false
  public get netDevFuncCapabilities() {
    return this.getListAttribute('net_dev_func_capabilities');
  }

  // net_dev_func_type - computed: true, optional: false, required: false
  public get netDevFuncType() {
    return this.getStringAttribute('net_dev_func_type');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // oem - computed: true, optional: false, required: false
  private _oem = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOemOutputReference(this, "oem");
  public get oem() {
    return this._oem;
  }

  // physical_port_assignment - computed: true, optional: false, required: false
  public get physicalPortAssignment() {
    return this.getStringAttribute('physical_port_assignment');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOutputReference {
    return new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAlloc {
}

export function dataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAllocToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAlloc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAllocToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAlloc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAllocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAlloc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAlloc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_bw_alloc_percent - computed: true, optional: false, required: false
  public get maxBwAllocPercent() {
    return this.getNumberAttribute('max_bw_alloc_percent');
  }

  // network_device_function - computed: true, optional: false, required: false
  public get networkDeviceFunction() {
    return this.getStringAttribute('network_device_function');
  }
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAllocList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAllocOutputReference {
    return new DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAllocOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAlloc {
}

export function dataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAllocToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAlloc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAllocToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAlloc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAllocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAlloc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAlloc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_bw_alloc_percent - computed: true, optional: false, required: false
  public get minBwAllocPercent() {
    return this.getNumberAttribute('min_bw_alloc_percent');
  }

  // network_device_function - computed: true, optional: false, required: false
  public get networkDeviceFunction() {
    return this.getStringAttribute('network_device_function');
  }
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAllocList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAllocOutputReference {
    return new DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAllocOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiver {
}

export function dataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiverToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiverToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_description - computed: true, optional: false, required: false
  public get deviceDescription() {
    return this.getStringAttribute('device_description');
  }

  // fqdd - computed: true, optional: false, required: false
  public get fqdd() {
    return this.getStringAttribute('fqdd');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier_type - computed: true, optional: false, required: false
  public get identifierType() {
    return this.getStringAttribute('identifier_type');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // part_number - computed: true, optional: false, required: false
  public get partNumber() {
    return this.getStringAttribute('part_number');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkPortsOem {
}

export function dataRedfishNetworkNetworkInterfacesNetworkPortsOemToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkPortsOemToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsOem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsOemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkPortsOem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkPortsOem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dell_network_transceiver - computed: true, optional: false, required: false
  private _dellNetworkTransceiver = new DataRedfishNetworkNetworkInterfacesNetworkPortsOemDellNetworkTransceiverOutputReference(this, "dell_network_transceiver");
  public get dellNetworkTransceiver() {
    return this._dellNetworkTransceiver;
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkPortsStatus {
}

export function dataRedfishNetworkNetworkInterfacesNetworkPortsStatusToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkPortsStatusToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkPortsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkPortsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilities {
}

export function dataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilitiesToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilitiesToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_speed_negotiation - computed: true, optional: false, required: false
  public get autoSpeedNegotiation() {
    return this.getBooleanAttribute('auto_speed_negotiation');
  }

  // link_network_technology - computed: true, optional: false, required: false
  public get linkNetworkTechnology() {
    return this.getStringAttribute('link_network_technology');
  }

  // link_speed_mbps - computed: true, optional: false, required: false
  public get linkSpeedMbps() {
    return this.getNumberAttribute('link_speed_mbps');
  }
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilitiesOutputReference {
    return new DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNetworkInterfacesNetworkPorts {
}

export function dataRedfishNetworkNetworkInterfacesNetworkPortsToTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesNetworkPortsToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesNetworkPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesNetworkPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesNetworkPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_link_technology - computed: true, optional: false, required: false
  public get activeLinkTechnology() {
    return this.getStringAttribute('active_link_technology');
  }

  // associated_network_addresses - computed: true, optional: false, required: false
  public get associatedNetworkAddresses() {
    return this.getListAttribute('associated_network_addresses');
  }

  // current_link_speed_mbps - computed: true, optional: false, required: false
  public get currentLinkSpeedMbps() {
    return this.getNumberAttribute('current_link_speed_mbps');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // eee_enabled - computed: true, optional: false, required: false
  public get eeeEnabled() {
    return this.getBooleanAttribute('eee_enabled');
  }

  // flow_control_configuration - computed: true, optional: false, required: false
  public get flowControlConfiguration() {
    return this.getStringAttribute('flow_control_configuration');
  }

  // flow_control_status - computed: true, optional: false, required: false
  public get flowControlStatus() {
    return this.getStringAttribute('flow_control_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_dev_func_max_bw_alloc - computed: true, optional: false, required: false
  private _netDevFuncMaxBwAlloc = new DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMaxBwAllocList(this, "net_dev_func_max_bw_alloc", false);
  public get netDevFuncMaxBwAlloc() {
    return this._netDevFuncMaxBwAlloc;
  }

  // net_dev_func_min_bw_alloc - computed: true, optional: false, required: false
  private _netDevFuncMinBwAlloc = new DataRedfishNetworkNetworkInterfacesNetworkPortsNetDevFuncMinBwAllocList(this, "net_dev_func_min_bw_alloc", false);
  public get netDevFuncMinBwAlloc() {
    return this._netDevFuncMinBwAlloc;
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // oem - computed: true, optional: false, required: false
  private _oem = new DataRedfishNetworkNetworkInterfacesNetworkPortsOemOutputReference(this, "oem");
  public get oem() {
    return this._oem;
  }

  // physical_port_number - computed: true, optional: false, required: false
  public get physicalPortNumber() {
    return this.getStringAttribute('physical_port_number');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishNetworkNetworkInterfacesNetworkPortsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // supported_ethernet_capabilities - computed: true, optional: false, required: false
  public get supportedEthernetCapabilities() {
    return this.getListAttribute('supported_ethernet_capabilities');
  }

  // supported_link_capabilities - computed: true, optional: false, required: false
  private _supportedLinkCapabilities = new DataRedfishNetworkNetworkInterfacesNetworkPortsSupportedLinkCapabilitiesList(this, "supported_link_capabilities", false);
  public get supportedLinkCapabilities() {
    return this._supportedLinkCapabilities;
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // wake_on_lan_enabled - computed: true, optional: false, required: false
  public get wakeOnLanEnabled() {
    return this.getBooleanAttribute('wake_on_lan_enabled');
  }
}

export class DataRedfishNetworkNetworkInterfacesNetworkPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesNetworkPortsOutputReference {
    return new DataRedfishNetworkNetworkInterfacesNetworkPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNetworkInterfacesStatus {
}

export function dataRedfishNetworkNetworkInterfacesStatusToTerraform(struct?: DataRedfishNetworkNetworkInterfacesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesStatusToHclTerraform(struct?: DataRedfishNetworkNetworkInterfacesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfacesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfacesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishNetworkNetworkInterfaces {
}

export function dataRedfishNetworkNetworkInterfacesToTerraform(struct?: DataRedfishNetworkNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishNetworkNetworkInterfacesToHclTerraform(struct?: DataRedfishNetworkNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishNetworkNetworkInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRedfishNetworkNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_adapter - computed: true, optional: false, required: false
  private _networkAdapter = new DataRedfishNetworkNetworkInterfacesNetworkAdapterOutputReference(this, "network_adapter");
  public get networkAdapter() {
    return this._networkAdapter;
  }

  // network_device_functions - computed: true, optional: false, required: false
  private _networkDeviceFunctions = new DataRedfishNetworkNetworkInterfacesNetworkDeviceFunctionsList(this, "network_device_functions", false);
  public get networkDeviceFunctions() {
    return this._networkDeviceFunctions;
  }

  // network_ports - computed: true, optional: false, required: false
  private _networkPorts = new DataRedfishNetworkNetworkInterfacesNetworkPortsList(this, "network_ports", false);
  public get networkPorts() {
    return this._networkPorts;
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishNetworkNetworkInterfacesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class DataRedfishNetworkNetworkInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishNetworkNetworkInterfacesOutputReference {
    return new DataRedfishNetworkNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNicFilterSystemsNetworkAdapters {
  /**
  * Filter for network adapters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#network_adapter_id DataRedfishNetwork#network_adapter_id}
  */
  readonly networkAdapterId: string;
  /**
  * Filter for network device functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#network_device_function_ids DataRedfishNetwork#network_device_function_ids}
  */
  readonly networkDeviceFunctionIds?: string[];
  /**
  * Filter for network ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#network_port_ids DataRedfishNetwork#network_port_ids}
  */
  readonly networkPortIds?: string[];
}

export function dataRedfishNetworkNicFilterSystemsNetworkAdaptersToTerraform(struct?: DataRedfishNetworkNicFilterSystemsNetworkAdapters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_adapter_id: cdktf.stringToTerraform(struct!.networkAdapterId),
    network_device_function_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkDeviceFunctionIds),
    network_port_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkPortIds),
  }
}


export function dataRedfishNetworkNicFilterSystemsNetworkAdaptersToHclTerraform(struct?: DataRedfishNetworkNicFilterSystemsNetworkAdapters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_adapter_id: {
      value: cdktf.stringToHclTerraform(struct!.networkAdapterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_device_function_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkDeviceFunctionIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    network_port_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkPortIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishNetworkNicFilterSystemsNetworkAdaptersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishNetworkNicFilterSystemsNetworkAdapters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAdapterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAdapterId = this._networkAdapterId;
    }
    if (this._networkDeviceFunctionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDeviceFunctionIds = this._networkDeviceFunctionIds;
    }
    if (this._networkPortIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPortIds = this._networkPortIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNicFilterSystemsNetworkAdapters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAdapterId = undefined;
      this._networkDeviceFunctionIds = undefined;
      this._networkPortIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAdapterId = value.networkAdapterId;
      this._networkDeviceFunctionIds = value.networkDeviceFunctionIds;
      this._networkPortIds = value.networkPortIds;
    }
  }

  // network_adapter_id - computed: false, optional: false, required: true
  private _networkAdapterId?: string; 
  public get networkAdapterId() {
    return this.getStringAttribute('network_adapter_id');
  }
  public set networkAdapterId(value: string) {
    this._networkAdapterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAdapterIdInput() {
    return this._networkAdapterId;
  }

  // network_device_function_ids - computed: false, optional: true, required: false
  private _networkDeviceFunctionIds?: string[]; 
  public get networkDeviceFunctionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_device_function_ids'));
  }
  public set networkDeviceFunctionIds(value: string[]) {
    this._networkDeviceFunctionIds = value;
  }
  public resetNetworkDeviceFunctionIds() {
    this._networkDeviceFunctionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceFunctionIdsInput() {
    return this._networkDeviceFunctionIds;
  }

  // network_port_ids - computed: false, optional: true, required: false
  private _networkPortIds?: string[]; 
  public get networkPortIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_port_ids'));
  }
  public set networkPortIds(value: string[]) {
    this._networkPortIds = value;
  }
  public resetNetworkPortIds() {
    this._networkPortIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPortIdsInput() {
    return this._networkPortIds;
  }
}

export class DataRedfishNetworkNicFilterSystemsNetworkAdaptersList extends cdktf.ComplexList {
  public internalValue? : DataRedfishNetworkNicFilterSystemsNetworkAdapters[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishNetworkNicFilterSystemsNetworkAdaptersOutputReference {
    return new DataRedfishNetworkNicFilterSystemsNetworkAdaptersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNicFilterSystems {
  /**
  * Filter for nework adapters, network ports and network device functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#network_adapters DataRedfishNetwork#network_adapters}
  */
  readonly networkAdapters?: DataRedfishNetworkNicFilterSystemsNetworkAdapters[] | cdktf.IResolvable;
  /**
  * Filter for systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#system_id DataRedfishNetwork#system_id}
  */
  readonly systemId: string;
}

export function dataRedfishNetworkNicFilterSystemsToTerraform(struct?: DataRedfishNetworkNicFilterSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_adapters: cdktf.listMapper(dataRedfishNetworkNicFilterSystemsNetworkAdaptersToTerraform, false)(struct!.networkAdapters),
    system_id: cdktf.stringToTerraform(struct!.systemId),
  }
}


export function dataRedfishNetworkNicFilterSystemsToHclTerraform(struct?: DataRedfishNetworkNicFilterSystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_adapters: {
      value: cdktf.listMapperHcl(dataRedfishNetworkNicFilterSystemsNetworkAdaptersToHclTerraform, false)(struct!.networkAdapters),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedfishNetworkNicFilterSystemsNetworkAdaptersList",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishNetworkNicFilterSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishNetworkNicFilterSystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAdapters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAdapters = this._networkAdapters?.internalValue;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNicFilterSystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAdapters.internalValue = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAdapters.internalValue = value.networkAdapters;
      this._systemId = value.systemId;
    }
  }

  // network_adapters - computed: false, optional: true, required: false
  private _networkAdapters = new DataRedfishNetworkNicFilterSystemsNetworkAdaptersList(this, "network_adapters", false);
  public get networkAdapters() {
    return this._networkAdapters;
  }
  public putNetworkAdapters(value: DataRedfishNetworkNicFilterSystemsNetworkAdapters[] | cdktf.IResolvable) {
    this._networkAdapters.internalValue = value;
  }
  public resetNetworkAdapters() {
    this._networkAdapters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAdaptersInput() {
    return this._networkAdapters.internalValue;
  }

  // system_id - computed: false, optional: false, required: true
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

export class DataRedfishNetworkNicFilterSystemsList extends cdktf.ComplexList {
  public internalValue? : DataRedfishNetworkNicFilterSystems[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishNetworkNicFilterSystemsOutputReference {
    return new DataRedfishNetworkNicFilterSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishNetworkNicFilter {
  /**
  * Filter for systems, nework adapters, network ports and network device functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#systems DataRedfishNetwork#systems}
  */
  readonly systems?: DataRedfishNetworkNicFilterSystems[] | cdktf.IResolvable;
}

export function dataRedfishNetworkNicFilterToTerraform(struct?: DataRedfishNetworkNicFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    systems: cdktf.listMapper(dataRedfishNetworkNicFilterSystemsToTerraform, false)(struct!.systems),
  }
}


export function dataRedfishNetworkNicFilterToHclTerraform(struct?: DataRedfishNetworkNicFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    systems: {
      value: cdktf.listMapperHcl(dataRedfishNetworkNicFilterSystemsToHclTerraform, false)(struct!.systems),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedfishNetworkNicFilterSystemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishNetworkNicFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishNetworkNicFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systems = this._systems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkNicFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._systems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._systems.internalValue = value.systems;
    }
  }

  // systems - computed: false, optional: true, required: false
  private _systems = new DataRedfishNetworkNicFilterSystemsList(this, "systems", false);
  public get systems() {
    return this._systems;
  }
  public putSystems(value: DataRedfishNetworkNicFilterSystems[] | cdktf.IResolvable) {
    this._systems.internalValue = value;
  }
  public resetSystems() {
    this._systems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemsInput() {
    return this._systems.internalValue;
  }
}
export interface DataRedfishNetworkRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#endpoint DataRedfishNetwork#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#password DataRedfishNetwork#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#redfish_alias DataRedfishNetwork#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#ssl_insecure DataRedfishNetwork#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#user DataRedfishNetwork#user}
  */
  readonly user?: string;
}

export function dataRedfishNetworkRedfishServerToTerraform(struct?: DataRedfishNetworkRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataRedfishNetworkRedfishServerToHclTerraform(struct?: DataRedfishNetworkRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishNetworkRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishNetworkRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishNetworkRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class DataRedfishNetworkRedfishServerList extends cdktf.ComplexList {
  public internalValue? : DataRedfishNetworkRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishNetworkRedfishServerOutputReference {
    return new DataRedfishNetworkRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network redfish_network}
*/
export class DataRedfishNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedfishNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedfishNetwork to import
  * @param importFromId The id of the existing DataRedfishNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedfishNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/network redfish_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedfishNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRedfishNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'redfish_network',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._nicFilter.internalValue = config.nicFilter;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new DataRedfishNetworkNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // nic_attributes - computed: true, optional: false, required: false
  private _nicAttributes = new cdktf.StringMap(this, "nic_attributes");
  public get nicAttributes() {
    return this._nicAttributes;
  }

  // nic_filter - computed: false, optional: true, required: false
  private _nicFilter = new DataRedfishNetworkNicFilterOutputReference(this, "nic_filter");
  public get nicFilter() {
    return this._nicFilter;
  }
  public putNicFilter(value: DataRedfishNetworkNicFilter) {
    this._nicFilter.internalValue = value;
  }
  public resetNicFilter() {
    this._nicFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicFilterInput() {
    return this._nicFilter.internalValue;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new DataRedfishNetworkRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: DataRedfishNetworkRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nic_filter: dataRedfishNetworkNicFilterToTerraform(this._nicFilter.internalValue),
      redfish_server: cdktf.listMapper(dataRedfishNetworkRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nic_filter: {
        value: dataRedfishNetworkNicFilterToHclTerraform(this._nicFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRedfishNetworkNicFilter",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(dataRedfishNetworkRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRedfishNetworkRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
