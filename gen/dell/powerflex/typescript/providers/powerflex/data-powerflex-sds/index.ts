// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexSdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#filter DataPowerflexSds#filter}
  */
  readonly filter?: DataPowerflexSdsFilter;
}
export interface DataPowerflexSdsSdsDetailsCertificateInfo {
}

export function dataPowerflexSdsSdsDetailsCertificateInfoToTerraform(struct?: DataPowerflexSdsSdsDetailsCertificateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsCertificateInfoToHclTerraform(struct?: DataPowerflexSdsSdsDetailsCertificateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsCertificateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsCertificateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsCertificateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_from_asn1_format - computed: true, optional: false, required: false
  public get validFromAsn1Format() {
    return this.getStringAttribute('valid_from_asn1_format');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // valid_to_asn1_format - computed: true, optional: false, required: false
  public get validToAsn1Format() {
    return this.getStringAttribute('valid_to_asn1_format');
  }
}
export interface DataPowerflexSdsSdsDetailsIpListStruct {
}

export function dataPowerflexSdsSdsDetailsIpListStructToTerraform(struct?: DataPowerflexSdsSdsDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsIpListStructToHclTerraform(struct?: DataPowerflexSdsSdsDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSdsSdsDetailsIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataPowerflexSdsSdsDetailsIpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSdsSdsDetailsIpListStructOutputReference {
    return new DataPowerflexSdsSdsDetailsIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSdsSdsDetailsLinks {
}

export function dataPowerflexSdsSdsDetailsLinksToTerraform(struct?: DataPowerflexSdsSdsDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsLinksToHclTerraform(struct?: DataPowerflexSdsSdsDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSdsSdsDetailsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexSdsSdsDetailsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSdsSdsDetailsLinksOutputReference {
    return new DataPowerflexSdsSdsDetailsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSdsSdsDetailsRaidControllers {
}

export function dataPowerflexSdsSdsDetailsRaidControllersToTerraform(struct?: DataPowerflexSdsSdsDetailsRaidControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsRaidControllersToHclTerraform(struct?: DataPowerflexSdsSdsDetailsRaidControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsRaidControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSdsSdsDetailsRaidControllers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsRaidControllers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // battery_status - computed: true, optional: false, required: false
  public get batteryStatus() {
    return this.getStringAttribute('battery_status');
  }

  // driver_name - computed: true, optional: false, required: false
  public get driverName() {
    return this.getStringAttribute('driver_name');
  }

  // driver_version - computed: true, optional: false, required: false
  public get driverVersion() {
    return this.getStringAttribute('driver_version');
  }

  // firmware_version - computed: true, optional: false, required: false
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // pci_address - computed: true, optional: false, required: false
  public get pciAddress() {
    return this.getStringAttribute('pci_address');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
}

export class DataPowerflexSdsSdsDetailsRaidControllersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSdsSdsDetailsRaidControllersOutputReference {
    return new DataPowerflexSdsSdsDetailsRaidControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindow {
}

export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindow {
}

export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindow {
}

export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsConfigurationFailure {
}

export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsConfigurationFailureToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsConfigurationFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsConfigurationFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsConfigurationFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsConfigurationFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexSdsSdsDetailsSdsConfigurationFailureLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexSdsSdsDetailsSdsConfigurationFailureMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexSdsSdsDetailsSdsConfigurationFailureShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexSdsSdsDetailsSdsDecoupledLongWindow {
}

export function dataPowerflexSdsSdsDetailsSdsDecoupledLongWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupledLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsDecoupledLongWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupledLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsDecoupledLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsDecoupledLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsDecoupledLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsDecoupledMediumWindow {
}

export function dataPowerflexSdsSdsDetailsSdsDecoupledMediumWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupledMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsDecoupledMediumWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupledMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsDecoupledMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsDecoupledMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsDecoupledMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsDecoupledShortWindow {
}

export function dataPowerflexSdsSdsDetailsSdsDecoupledShortWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupledShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsDecoupledShortWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupledShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsDecoupledShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsDecoupledShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsDecoupledShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsDecoupled {
}

export function dataPowerflexSdsSdsDetailsSdsDecoupledToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsDecoupledToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsDecoupled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsDecoupledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsDecoupled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsDecoupled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexSdsSdsDetailsSdsDecoupledLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexSdsSdsDetailsSdsDecoupledMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexSdsSdsDetailsSdsDecoupledShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow {
}

export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow {
}

export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow {
}

export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_oscillation_count - computed: true, optional: false, required: false
  public get lastOscillationCount() {
    return this.getNumberAttribute('last_oscillation_count');
  }

  // last_oscillation_time - computed: true, optional: false, required: false
  public get lastOscillationTime() {
    return this.getNumberAttribute('last_oscillation_time');
  }

  // max_failures_count - computed: true, optional: false, required: false
  public get maxFailuresCount() {
    return this.getNumberAttribute('max_failures_count');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // window_size_in_sec - computed: true, optional: false, required: false
  public get windowSizeInSec() {
    return this.getNumberAttribute('window_size_in_sec');
  }
}
export interface DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailures {
}

export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresToTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresToHclTerraform(struct?: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexSdsSdsDetails {
}

export function dataPowerflexSdsSdsDetailsToTerraform(struct?: DataPowerflexSdsSdsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSdsSdsDetailsToHclTerraform(struct?: DataPowerflexSdsSdsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSdsSdsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSdsSdsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsSdsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_error - computed: true, optional: false, required: false
  public get authenticationError() {
    return this.getStringAttribute('authentication_error');
  }

  // certificate_info - computed: true, optional: false, required: false
  private _certificateInfo = new DataPowerflexSdsSdsDetailsCertificateInfoOutputReference(this, "certificate_info");
  public get certificateInfo() {
    return this._certificateInfo;
  }

  // configured_drl_mode - computed: true, optional: false, required: false
  public get configuredDrlMode() {
    return this.getStringAttribute('configured_drl_mode');
  }

  // drl_mode - computed: true, optional: false, required: false
  public get drlMode() {
    return this.getStringAttribute('drl_mode');
  }

  // fault_set_id - computed: true, optional: false, required: false
  public get faultSetId() {
    return this.getStringAttribute('fault_set_id');
  }

  // fgl_metadata_cache_size - computed: true, optional: false, required: false
  public get fglMetadataCacheSize() {
    return this.getNumberAttribute('fgl_metadata_cache_size');
  }

  // fgl_metadata_cache_state - computed: true, optional: false, required: false
  public get fglMetadataCacheState() {
    return this.getStringAttribute('fgl_metadata_cache_state');
  }

  // fgl_num_concurrent_writes - computed: true, optional: false, required: false
  public get fglNumConcurrentWrites() {
    return this.getNumberAttribute('fgl_num_concurrent_writes');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataPowerflexSdsSdsDetailsIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }

  // last_upgrade_time - computed: true, optional: false, required: false
  public get lastUpgradeTime() {
    return this.getNumberAttribute('last_upgrade_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexSdsSdsDetailsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // maintenance_state - computed: true, optional: false, required: false
  public get maintenanceState() {
    return this.getStringAttribute('maintenance_state');
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // mdm_connection_state - computed: true, optional: false, required: false
  public get mdmConnectionState() {
    return this.getStringAttribute('mdm_connection_state');
  }

  // membership_state - computed: true, optional: false, required: false
  public get membershipState() {
    return this.getStringAttribute('membership_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_io_buffers - computed: true, optional: false, required: false
  public get numIoBuffers() {
    return this.getNumberAttribute('num_io_buffers');
  }

  // num_restarts - computed: true, optional: false, required: false
  public get numRestarts() {
    return this.getNumberAttribute('num_restarts');
  }

  // on_vmware - computed: true, optional: false, required: false
  public get onVmware() {
    return this.getBooleanAttribute('on_vmware');
  }

  // performance_profile - computed: true, optional: false, required: false
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // raid_controllers - computed: true, optional: false, required: false
  private _raidControllers = new DataPowerflexSdsSdsDetailsRaidControllersList(this, "raid_controllers", false);
  public get raidControllers() {
    return this._raidControllers;
  }

  // rfcache_enabled - computed: true, optional: false, required: false
  public get rfcacheEnabled() {
    return this.getBooleanAttribute('rfcache_enabled');
  }

  // rfcache_error_api_version_mismatch - computed: true, optional: false, required: false
  public get rfcacheErrorApiVersionMismatch() {
    return this.getBooleanAttribute('rfcache_error_api_version_mismatch');
  }

  // rfcache_error_device_does_not_exist - computed: true, optional: false, required: false
  public get rfcacheErrorDeviceDoesNotExist() {
    return this.getBooleanAttribute('rfcache_error_device_does_not_exist');
  }

  // rfcache_error_inconsistent_cache_configuration - computed: true, optional: false, required: false
  public get rfcacheErrorInconsistentCacheConfiguration() {
    return this.getBooleanAttribute('rfcache_error_inconsistent_cache_configuration');
  }

  // rfcache_error_inconsistent_source_configuration - computed: true, optional: false, required: false
  public get rfcacheErrorInconsistentSourceConfiguration() {
    return this.getBooleanAttribute('rfcache_error_inconsistent_source_configuration');
  }

  // rfcache_error_invalid_driver_path - computed: true, optional: false, required: false
  public get rfcacheErrorInvalidDriverPath() {
    return this.getBooleanAttribute('rfcache_error_invalid_driver_path');
  }

  // rfcache_error_low_resources - computed: true, optional: false, required: false
  public get rfcacheErrorLowResources() {
    return this.getBooleanAttribute('rfcache_error_low_resources');
  }

  // rmcache_enabled - computed: true, optional: false, required: false
  public get rmcacheEnabled() {
    return this.getBooleanAttribute('rmcache_enabled');
  }

  // rmcache_frozen - computed: true, optional: false, required: false
  public get rmcacheFrozen() {
    return this.getBooleanAttribute('rmcache_frozen');
  }

  // rmcache_memory_allocation_state - computed: true, optional: false, required: false
  public get rmcacheMemoryAllocationState() {
    return this.getStringAttribute('rmcache_memory_allocation_state');
  }

  // rmcache_size - computed: true, optional: false, required: false
  public get rmcacheSize() {
    return this.getNumberAttribute('rmcache_size');
  }

  // sds_configuration_failure - computed: true, optional: false, required: false
  private _sdsConfigurationFailure = new DataPowerflexSdsSdsDetailsSdsConfigurationFailureOutputReference(this, "sds_configuration_failure");
  public get sdsConfigurationFailure() {
    return this._sdsConfigurationFailure;
  }

  // sds_decoupled - computed: true, optional: false, required: false
  private _sdsDecoupled = new DataPowerflexSdsSdsDetailsSdsDecoupledOutputReference(this, "sds_decoupled");
  public get sdsDecoupled() {
    return this._sdsDecoupled;
  }

  // sds_receive_buffer_allocation_failures - computed: true, optional: false, required: false
  private _sdsReceiveBufferAllocationFailures = new DataPowerflexSdsSdsDetailsSdsReceiveBufferAllocationFailuresOutputReference(this, "sds_receive_buffer_allocation_failures");
  public get sdsReceiveBufferAllocationFailures() {
    return this._sdsReceiveBufferAllocationFailures;
  }

  // sds_state - computed: true, optional: false, required: false
  public get sdsState() {
    return this.getStringAttribute('sds_state');
  }

  // software_version_info - computed: true, optional: false, required: false
  public get softwareVersionInfo() {
    return this.getStringAttribute('software_version_info');
  }
}

export class DataPowerflexSdsSdsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSdsSdsDetailsOutputReference {
    return new DataPowerflexSdsSdsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSdsFilter {
  /**
  * List of authentication_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#authentication_error DataPowerflexSds#authentication_error}
  */
  readonly authenticationError?: string[];
  /**
  * List of configured_drl_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#configured_drl_mode DataPowerflexSds#configured_drl_mode}
  */
  readonly configuredDrlMode?: string[];
  /**
  * List of drl_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#drl_mode DataPowerflexSds#drl_mode}
  */
  readonly drlMode?: string[];
  /**
  * List of fault_set_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#fault_set_id DataPowerflexSds#fault_set_id}
  */
  readonly faultSetId?: string[];
  /**
  * List of fgl_metadata_cache_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#fgl_metadata_cache_size DataPowerflexSds#fgl_metadata_cache_size}
  */
  readonly fglMetadataCacheSize?: number[];
  /**
  * List of fgl_metadata_cache_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#fgl_metadata_cache_state DataPowerflexSds#fgl_metadata_cache_state}
  */
  readonly fglMetadataCacheState?: string[];
  /**
  * List of fgl_num_concurrent_writes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#fgl_num_concurrent_writes DataPowerflexSds#fgl_num_concurrent_writes}
  */
  readonly fglNumConcurrentWrites?: number[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#id DataPowerflexSds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of last_upgrade_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#last_upgrade_time DataPowerflexSds#last_upgrade_time}
  */
  readonly lastUpgradeTime?: number[];
  /**
  * List of maintenance_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#maintenance_state DataPowerflexSds#maintenance_state}
  */
  readonly maintenanceState?: string[];
  /**
  * List of maintenance_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#maintenance_type DataPowerflexSds#maintenance_type}
  */
  readonly maintenanceType?: string[];
  /**
  * List of mdm_connection_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#mdm_connection_state DataPowerflexSds#mdm_connection_state}
  */
  readonly mdmConnectionState?: string[];
  /**
  * List of membership_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#membership_state DataPowerflexSds#membership_state}
  */
  readonly membershipState?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#name DataPowerflexSds#name}
  */
  readonly name?: string[];
  /**
  * List of num_io_buffers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#num_io_buffers DataPowerflexSds#num_io_buffers}
  */
  readonly numIoBuffers?: number[];
  /**
  * List of num_restarts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#num_restarts DataPowerflexSds#num_restarts}
  */
  readonly numRestarts?: number[];
  /**
  * Value for on_vmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#on_vmware DataPowerflexSds#on_vmware}
  */
  readonly onVmware?: boolean | cdktf.IResolvable;
  /**
  * List of performance_profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#performance_profile DataPowerflexSds#performance_profile}
  */
  readonly performanceProfile?: string[];
  /**
  * List of port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#port DataPowerflexSds#port}
  */
  readonly port?: number[];
  /**
  * Value for rfcache_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rfcache_enabled DataPowerflexSds#rfcache_enabled}
  */
  readonly rfcacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Value for rfcache_error_api_version_mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rfcache_error_api_version_mismatch DataPowerflexSds#rfcache_error_api_version_mismatch}
  */
  readonly rfcacheErrorApiVersionMismatch?: boolean | cdktf.IResolvable;
  /**
  * Value for rfcache_error_device_does_not_exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rfcache_error_device_does_not_exist DataPowerflexSds#rfcache_error_device_does_not_exist}
  */
  readonly rfcacheErrorDeviceDoesNotExist?: boolean | cdktf.IResolvable;
  /**
  * Value for rfcache_error_inconsistent_cache_configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rfcache_error_inconsistent_cache_configuration DataPowerflexSds#rfcache_error_inconsistent_cache_configuration}
  */
  readonly rfcacheErrorInconsistentCacheConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Value for rfcache_error_inconsistent_source_configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rfcache_error_inconsistent_source_configuration DataPowerflexSds#rfcache_error_inconsistent_source_configuration}
  */
  readonly rfcacheErrorInconsistentSourceConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Value for rfcache_error_invalid_driver_path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rfcache_error_invalid_driver_path DataPowerflexSds#rfcache_error_invalid_driver_path}
  */
  readonly rfcacheErrorInvalidDriverPath?: boolean | cdktf.IResolvable;
  /**
  * Value for rfcache_error_low_resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rfcache_error_low_resources DataPowerflexSds#rfcache_error_low_resources}
  */
  readonly rfcacheErrorLowResources?: boolean | cdktf.IResolvable;
  /**
  * Value for rmcache_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rmcache_enabled DataPowerflexSds#rmcache_enabled}
  */
  readonly rmcacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Value for rmcache_frozen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rmcache_frozen DataPowerflexSds#rmcache_frozen}
  */
  readonly rmcacheFrozen?: boolean | cdktf.IResolvable;
  /**
  * List of rmcache_memory_allocation_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rmcache_memory_allocation_state DataPowerflexSds#rmcache_memory_allocation_state}
  */
  readonly rmcacheMemoryAllocationState?: string[];
  /**
  * List of rmcache_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#rmcache_size DataPowerflexSds#rmcache_size}
  */
  readonly rmcacheSize?: number[];
  /**
  * List of sds_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#sds_state DataPowerflexSds#sds_state}
  */
  readonly sdsState?: string[];
  /**
  * List of software_version_info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#software_version_info DataPowerflexSds#software_version_info}
  */
  readonly softwareVersionInfo?: string[];
}

export function dataPowerflexSdsFilterToTerraform(struct?: DataPowerflexSdsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_error: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticationError),
    configured_drl_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configuredDrlMode),
    drl_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drlMode),
    fault_set_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.faultSetId),
    fgl_metadata_cache_size: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglMetadataCacheSize),
    fgl_metadata_cache_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fglMetadataCacheState),
    fgl_num_concurrent_writes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglNumConcurrentWrites),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    last_upgrade_time: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.lastUpgradeTime),
    maintenance_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maintenanceState),
    maintenance_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maintenanceType),
    mdm_connection_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mdmConnectionState),
    membership_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.membershipState),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    num_io_buffers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numIoBuffers),
    num_restarts: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numRestarts),
    on_vmware: cdktf.booleanToTerraform(struct!.onVmware),
    performance_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.performanceProfile),
    port: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.port),
    rfcache_enabled: cdktf.booleanToTerraform(struct!.rfcacheEnabled),
    rfcache_error_api_version_mismatch: cdktf.booleanToTerraform(struct!.rfcacheErrorApiVersionMismatch),
    rfcache_error_device_does_not_exist: cdktf.booleanToTerraform(struct!.rfcacheErrorDeviceDoesNotExist),
    rfcache_error_inconsistent_cache_configuration: cdktf.booleanToTerraform(struct!.rfcacheErrorInconsistentCacheConfiguration),
    rfcache_error_inconsistent_source_configuration: cdktf.booleanToTerraform(struct!.rfcacheErrorInconsistentSourceConfiguration),
    rfcache_error_invalid_driver_path: cdktf.booleanToTerraform(struct!.rfcacheErrorInvalidDriverPath),
    rfcache_error_low_resources: cdktf.booleanToTerraform(struct!.rfcacheErrorLowResources),
    rmcache_enabled: cdktf.booleanToTerraform(struct!.rmcacheEnabled),
    rmcache_frozen: cdktf.booleanToTerraform(struct!.rmcacheFrozen),
    rmcache_memory_allocation_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rmcacheMemoryAllocationState),
    rmcache_size: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rmcacheSize),
    sds_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sdsState),
    software_version_info: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.softwareVersionInfo),
  }
}


export function dataPowerflexSdsFilterToHclTerraform(struct?: DataPowerflexSdsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_error: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticationError),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    configured_drl_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configuredDrlMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    drl_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drlMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fault_set_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.faultSetId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fgl_metadata_cache_size: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglMetadataCacheSize),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_metadata_cache_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fglMetadataCacheState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fgl_num_concurrent_writes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglNumConcurrentWrites),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    last_upgrade_time: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.lastUpgradeTime),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    maintenance_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maintenanceState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maintenance_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maintenanceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mdm_connection_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mdmConnectionState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    membership_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.membershipState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    num_io_buffers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numIoBuffers),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    num_restarts: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numRestarts),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    on_vmware: {
      value: cdktf.booleanToHclTerraform(struct!.onVmware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.performanceProfile),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.port),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rfcache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rfcache_error_api_version_mismatch: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheErrorApiVersionMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rfcache_error_device_does_not_exist: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheErrorDeviceDoesNotExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rfcache_error_inconsistent_cache_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheErrorInconsistentCacheConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rfcache_error_inconsistent_source_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheErrorInconsistentSourceConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rfcache_error_invalid_driver_path: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheErrorInvalidDriverPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rfcache_error_low_resources: {
      value: cdktf.booleanToHclTerraform(struct!.rfcacheErrorLowResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rmcache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rmcacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rmcache_frozen: {
      value: cdktf.booleanToHclTerraform(struct!.rmcacheFrozen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rmcache_memory_allocation_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rmcacheMemoryAllocationState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rmcache_size: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rmcacheSize),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    sds_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sdsState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    software_version_info: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.softwareVersionInfo),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexSdsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSdsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationError = this._authenticationError;
    }
    if (this._configuredDrlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredDrlMode = this._configuredDrlMode;
    }
    if (this._drlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.drlMode = this._drlMode;
    }
    if (this._faultSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultSetId = this._faultSetId;
    }
    if (this._fglMetadataCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglMetadataCacheSize = this._fglMetadataCacheSize;
    }
    if (this._fglMetadataCacheState !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglMetadataCacheState = this._fglMetadataCacheState;
    }
    if (this._fglNumConcurrentWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglNumConcurrentWrites = this._fglNumConcurrentWrites;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lastUpgradeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpgradeTime = this._lastUpgradeTime;
    }
    if (this._maintenanceState !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceState = this._maintenanceState;
    }
    if (this._maintenanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceType = this._maintenanceType;
    }
    if (this._mdmConnectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmConnectionState = this._mdmConnectionState;
    }
    if (this._membershipState !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipState = this._membershipState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numIoBuffers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numIoBuffers = this._numIoBuffers;
    }
    if (this._numRestarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRestarts = this._numRestarts;
    }
    if (this._onVmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.onVmware = this._onVmware;
    }
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._rfcacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheEnabled = this._rfcacheEnabled;
    }
    if (this._rfcacheErrorApiVersionMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheErrorApiVersionMismatch = this._rfcacheErrorApiVersionMismatch;
    }
    if (this._rfcacheErrorDeviceDoesNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheErrorDeviceDoesNotExist = this._rfcacheErrorDeviceDoesNotExist;
    }
    if (this._rfcacheErrorInconsistentCacheConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheErrorInconsistentCacheConfiguration = this._rfcacheErrorInconsistentCacheConfiguration;
    }
    if (this._rfcacheErrorInconsistentSourceConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheErrorInconsistentSourceConfiguration = this._rfcacheErrorInconsistentSourceConfiguration;
    }
    if (this._rfcacheErrorInvalidDriverPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheErrorInvalidDriverPath = this._rfcacheErrorInvalidDriverPath;
    }
    if (this._rfcacheErrorLowResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfcacheErrorLowResources = this._rfcacheErrorLowResources;
    }
    if (this._rmcacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rmcacheEnabled = this._rmcacheEnabled;
    }
    if (this._rmcacheFrozen !== undefined) {
      hasAnyValues = true;
      internalValueResult.rmcacheFrozen = this._rmcacheFrozen;
    }
    if (this._rmcacheMemoryAllocationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.rmcacheMemoryAllocationState = this._rmcacheMemoryAllocationState;
    }
    if (this._rmcacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rmcacheSize = this._rmcacheSize;
    }
    if (this._sdsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsState = this._sdsState;
    }
    if (this._softwareVersionInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVersionInfo = this._softwareVersionInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSdsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationError = undefined;
      this._configuredDrlMode = undefined;
      this._drlMode = undefined;
      this._faultSetId = undefined;
      this._fglMetadataCacheSize = undefined;
      this._fglMetadataCacheState = undefined;
      this._fglNumConcurrentWrites = undefined;
      this._id = undefined;
      this._lastUpgradeTime = undefined;
      this._maintenanceState = undefined;
      this._maintenanceType = undefined;
      this._mdmConnectionState = undefined;
      this._membershipState = undefined;
      this._name = undefined;
      this._numIoBuffers = undefined;
      this._numRestarts = undefined;
      this._onVmware = undefined;
      this._performanceProfile = undefined;
      this._port = undefined;
      this._rfcacheEnabled = undefined;
      this._rfcacheErrorApiVersionMismatch = undefined;
      this._rfcacheErrorDeviceDoesNotExist = undefined;
      this._rfcacheErrorInconsistentCacheConfiguration = undefined;
      this._rfcacheErrorInconsistentSourceConfiguration = undefined;
      this._rfcacheErrorInvalidDriverPath = undefined;
      this._rfcacheErrorLowResources = undefined;
      this._rmcacheEnabled = undefined;
      this._rmcacheFrozen = undefined;
      this._rmcacheMemoryAllocationState = undefined;
      this._rmcacheSize = undefined;
      this._sdsState = undefined;
      this._softwareVersionInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationError = value.authenticationError;
      this._configuredDrlMode = value.configuredDrlMode;
      this._drlMode = value.drlMode;
      this._faultSetId = value.faultSetId;
      this._fglMetadataCacheSize = value.fglMetadataCacheSize;
      this._fglMetadataCacheState = value.fglMetadataCacheState;
      this._fglNumConcurrentWrites = value.fglNumConcurrentWrites;
      this._id = value.id;
      this._lastUpgradeTime = value.lastUpgradeTime;
      this._maintenanceState = value.maintenanceState;
      this._maintenanceType = value.maintenanceType;
      this._mdmConnectionState = value.mdmConnectionState;
      this._membershipState = value.membershipState;
      this._name = value.name;
      this._numIoBuffers = value.numIoBuffers;
      this._numRestarts = value.numRestarts;
      this._onVmware = value.onVmware;
      this._performanceProfile = value.performanceProfile;
      this._port = value.port;
      this._rfcacheEnabled = value.rfcacheEnabled;
      this._rfcacheErrorApiVersionMismatch = value.rfcacheErrorApiVersionMismatch;
      this._rfcacheErrorDeviceDoesNotExist = value.rfcacheErrorDeviceDoesNotExist;
      this._rfcacheErrorInconsistentCacheConfiguration = value.rfcacheErrorInconsistentCacheConfiguration;
      this._rfcacheErrorInconsistentSourceConfiguration = value.rfcacheErrorInconsistentSourceConfiguration;
      this._rfcacheErrorInvalidDriverPath = value.rfcacheErrorInvalidDriverPath;
      this._rfcacheErrorLowResources = value.rfcacheErrorLowResources;
      this._rmcacheEnabled = value.rmcacheEnabled;
      this._rmcacheFrozen = value.rmcacheFrozen;
      this._rmcacheMemoryAllocationState = value.rmcacheMemoryAllocationState;
      this._rmcacheSize = value.rmcacheSize;
      this._sdsState = value.sdsState;
      this._softwareVersionInfo = value.softwareVersionInfo;
    }
  }

  // authentication_error - computed: false, optional: true, required: false
  private _authenticationError?: string[]; 
  public get authenticationError() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_error'));
  }
  public set authenticationError(value: string[]) {
    this._authenticationError = value;
  }
  public resetAuthenticationError() {
    this._authenticationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationErrorInput() {
    return this._authenticationError;
  }

  // configured_drl_mode - computed: false, optional: true, required: false
  private _configuredDrlMode?: string[]; 
  public get configuredDrlMode() {
    return cdktf.Fn.tolist(this.getListAttribute('configured_drl_mode'));
  }
  public set configuredDrlMode(value: string[]) {
    this._configuredDrlMode = value;
  }
  public resetConfiguredDrlMode() {
    this._configuredDrlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredDrlModeInput() {
    return this._configuredDrlMode;
  }

  // drl_mode - computed: false, optional: true, required: false
  private _drlMode?: string[]; 
  public get drlMode() {
    return cdktf.Fn.tolist(this.getListAttribute('drl_mode'));
  }
  public set drlMode(value: string[]) {
    this._drlMode = value;
  }
  public resetDrlMode() {
    this._drlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drlModeInput() {
    return this._drlMode;
  }

  // fault_set_id - computed: false, optional: true, required: false
  private _faultSetId?: string[]; 
  public get faultSetId() {
    return cdktf.Fn.tolist(this.getListAttribute('fault_set_id'));
  }
  public set faultSetId(value: string[]) {
    this._faultSetId = value;
  }
  public resetFaultSetId() {
    this._faultSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultSetIdInput() {
    return this._faultSetId;
  }

  // fgl_metadata_cache_size - computed: false, optional: true, required: false
  private _fglMetadataCacheSize?: number[]; 
  public get fglMetadataCacheSize() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_metadata_cache_size')));
  }
  public set fglMetadataCacheSize(value: number[]) {
    this._fglMetadataCacheSize = value;
  }
  public resetFglMetadataCacheSize() {
    this._fglMetadataCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglMetadataCacheSizeInput() {
    return this._fglMetadataCacheSize;
  }

  // fgl_metadata_cache_state - computed: false, optional: true, required: false
  private _fglMetadataCacheState?: string[]; 
  public get fglMetadataCacheState() {
    return cdktf.Fn.tolist(this.getListAttribute('fgl_metadata_cache_state'));
  }
  public set fglMetadataCacheState(value: string[]) {
    this._fglMetadataCacheState = value;
  }
  public resetFglMetadataCacheState() {
    this._fglMetadataCacheState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglMetadataCacheStateInput() {
    return this._fglMetadataCacheState;
  }

  // fgl_num_concurrent_writes - computed: false, optional: true, required: false
  private _fglNumConcurrentWrites?: number[]; 
  public get fglNumConcurrentWrites() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_num_concurrent_writes')));
  }
  public set fglNumConcurrentWrites(value: number[]) {
    this._fglNumConcurrentWrites = value;
  }
  public resetFglNumConcurrentWrites() {
    this._fglNumConcurrentWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglNumConcurrentWritesInput() {
    return this._fglNumConcurrentWrites;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_upgrade_time - computed: false, optional: true, required: false
  private _lastUpgradeTime?: number[]; 
  public get lastUpgradeTime() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('last_upgrade_time')));
  }
  public set lastUpgradeTime(value: number[]) {
    this._lastUpgradeTime = value;
  }
  public resetLastUpgradeTime() {
    this._lastUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpgradeTimeInput() {
    return this._lastUpgradeTime;
  }

  // maintenance_state - computed: false, optional: true, required: false
  private _maintenanceState?: string[]; 
  public get maintenanceState() {
    return cdktf.Fn.tolist(this.getListAttribute('maintenance_state'));
  }
  public set maintenanceState(value: string[]) {
    this._maintenanceState = value;
  }
  public resetMaintenanceState() {
    this._maintenanceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStateInput() {
    return this._maintenanceState;
  }

  // maintenance_type - computed: false, optional: true, required: false
  private _maintenanceType?: string[]; 
  public get maintenanceType() {
    return cdktf.Fn.tolist(this.getListAttribute('maintenance_type'));
  }
  public set maintenanceType(value: string[]) {
    this._maintenanceType = value;
  }
  public resetMaintenanceType() {
    this._maintenanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTypeInput() {
    return this._maintenanceType;
  }

  // mdm_connection_state - computed: false, optional: true, required: false
  private _mdmConnectionState?: string[]; 
  public get mdmConnectionState() {
    return cdktf.Fn.tolist(this.getListAttribute('mdm_connection_state'));
  }
  public set mdmConnectionState(value: string[]) {
    this._mdmConnectionState = value;
  }
  public resetMdmConnectionState() {
    this._mdmConnectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmConnectionStateInput() {
    return this._mdmConnectionState;
  }

  // membership_state - computed: false, optional: true, required: false
  private _membershipState?: string[]; 
  public get membershipState() {
    return cdktf.Fn.tolist(this.getListAttribute('membership_state'));
  }
  public set membershipState(value: string[]) {
    this._membershipState = value;
  }
  public resetMembershipState() {
    this._membershipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipStateInput() {
    return this._membershipState;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_io_buffers - computed: false, optional: true, required: false
  private _numIoBuffers?: number[]; 
  public get numIoBuffers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_io_buffers')));
  }
  public set numIoBuffers(value: number[]) {
    this._numIoBuffers = value;
  }
  public resetNumIoBuffers() {
    this._numIoBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numIoBuffersInput() {
    return this._numIoBuffers;
  }

  // num_restarts - computed: false, optional: true, required: false
  private _numRestarts?: number[]; 
  public get numRestarts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_restarts')));
  }
  public set numRestarts(value: number[]) {
    this._numRestarts = value;
  }
  public resetNumRestarts() {
    this._numRestarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRestartsInput() {
    return this._numRestarts;
  }

  // on_vmware - computed: false, optional: true, required: false
  private _onVmware?: boolean | cdktf.IResolvable; 
  public get onVmware() {
    return this.getBooleanAttribute('on_vmware');
  }
  public set onVmware(value: boolean | cdktf.IResolvable) {
    this._onVmware = value;
  }
  public resetOnVmware() {
    this._onVmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onVmwareInput() {
    return this._onVmware;
  }

  // performance_profile - computed: false, optional: true, required: false
  private _performanceProfile?: string[]; 
  public get performanceProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('performance_profile'));
  }
  public set performanceProfile(value: string[]) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number[]; 
  public get port() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('port')));
  }
  public set port(value: number[]) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // rfcache_enabled - computed: false, optional: true, required: false
  private _rfcacheEnabled?: boolean | cdktf.IResolvable; 
  public get rfcacheEnabled() {
    return this.getBooleanAttribute('rfcache_enabled');
  }
  public set rfcacheEnabled(value: boolean | cdktf.IResolvable) {
    this._rfcacheEnabled = value;
  }
  public resetRfcacheEnabled() {
    this._rfcacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheEnabledInput() {
    return this._rfcacheEnabled;
  }

  // rfcache_error_api_version_mismatch - computed: false, optional: true, required: false
  private _rfcacheErrorApiVersionMismatch?: boolean | cdktf.IResolvable; 
  public get rfcacheErrorApiVersionMismatch() {
    return this.getBooleanAttribute('rfcache_error_api_version_mismatch');
  }
  public set rfcacheErrorApiVersionMismatch(value: boolean | cdktf.IResolvable) {
    this._rfcacheErrorApiVersionMismatch = value;
  }
  public resetRfcacheErrorApiVersionMismatch() {
    this._rfcacheErrorApiVersionMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheErrorApiVersionMismatchInput() {
    return this._rfcacheErrorApiVersionMismatch;
  }

  // rfcache_error_device_does_not_exist - computed: false, optional: true, required: false
  private _rfcacheErrorDeviceDoesNotExist?: boolean | cdktf.IResolvable; 
  public get rfcacheErrorDeviceDoesNotExist() {
    return this.getBooleanAttribute('rfcache_error_device_does_not_exist');
  }
  public set rfcacheErrorDeviceDoesNotExist(value: boolean | cdktf.IResolvable) {
    this._rfcacheErrorDeviceDoesNotExist = value;
  }
  public resetRfcacheErrorDeviceDoesNotExist() {
    this._rfcacheErrorDeviceDoesNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheErrorDeviceDoesNotExistInput() {
    return this._rfcacheErrorDeviceDoesNotExist;
  }

  // rfcache_error_inconsistent_cache_configuration - computed: false, optional: true, required: false
  private _rfcacheErrorInconsistentCacheConfiguration?: boolean | cdktf.IResolvable; 
  public get rfcacheErrorInconsistentCacheConfiguration() {
    return this.getBooleanAttribute('rfcache_error_inconsistent_cache_configuration');
  }
  public set rfcacheErrorInconsistentCacheConfiguration(value: boolean | cdktf.IResolvable) {
    this._rfcacheErrorInconsistentCacheConfiguration = value;
  }
  public resetRfcacheErrorInconsistentCacheConfiguration() {
    this._rfcacheErrorInconsistentCacheConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheErrorInconsistentCacheConfigurationInput() {
    return this._rfcacheErrorInconsistentCacheConfiguration;
  }

  // rfcache_error_inconsistent_source_configuration - computed: false, optional: true, required: false
  private _rfcacheErrorInconsistentSourceConfiguration?: boolean | cdktf.IResolvable; 
  public get rfcacheErrorInconsistentSourceConfiguration() {
    return this.getBooleanAttribute('rfcache_error_inconsistent_source_configuration');
  }
  public set rfcacheErrorInconsistentSourceConfiguration(value: boolean | cdktf.IResolvable) {
    this._rfcacheErrorInconsistentSourceConfiguration = value;
  }
  public resetRfcacheErrorInconsistentSourceConfiguration() {
    this._rfcacheErrorInconsistentSourceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheErrorInconsistentSourceConfigurationInput() {
    return this._rfcacheErrorInconsistentSourceConfiguration;
  }

  // rfcache_error_invalid_driver_path - computed: false, optional: true, required: false
  private _rfcacheErrorInvalidDriverPath?: boolean | cdktf.IResolvable; 
  public get rfcacheErrorInvalidDriverPath() {
    return this.getBooleanAttribute('rfcache_error_invalid_driver_path');
  }
  public set rfcacheErrorInvalidDriverPath(value: boolean | cdktf.IResolvable) {
    this._rfcacheErrorInvalidDriverPath = value;
  }
  public resetRfcacheErrorInvalidDriverPath() {
    this._rfcacheErrorInvalidDriverPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheErrorInvalidDriverPathInput() {
    return this._rfcacheErrorInvalidDriverPath;
  }

  // rfcache_error_low_resources - computed: false, optional: true, required: false
  private _rfcacheErrorLowResources?: boolean | cdktf.IResolvable; 
  public get rfcacheErrorLowResources() {
    return this.getBooleanAttribute('rfcache_error_low_resources');
  }
  public set rfcacheErrorLowResources(value: boolean | cdktf.IResolvable) {
    this._rfcacheErrorLowResources = value;
  }
  public resetRfcacheErrorLowResources() {
    this._rfcacheErrorLowResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfcacheErrorLowResourcesInput() {
    return this._rfcacheErrorLowResources;
  }

  // rmcache_enabled - computed: false, optional: true, required: false
  private _rmcacheEnabled?: boolean | cdktf.IResolvable; 
  public get rmcacheEnabled() {
    return this.getBooleanAttribute('rmcache_enabled');
  }
  public set rmcacheEnabled(value: boolean | cdktf.IResolvable) {
    this._rmcacheEnabled = value;
  }
  public resetRmcacheEnabled() {
    this._rmcacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmcacheEnabledInput() {
    return this._rmcacheEnabled;
  }

  // rmcache_frozen - computed: false, optional: true, required: false
  private _rmcacheFrozen?: boolean | cdktf.IResolvable; 
  public get rmcacheFrozen() {
    return this.getBooleanAttribute('rmcache_frozen');
  }
  public set rmcacheFrozen(value: boolean | cdktf.IResolvable) {
    this._rmcacheFrozen = value;
  }
  public resetRmcacheFrozen() {
    this._rmcacheFrozen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmcacheFrozenInput() {
    return this._rmcacheFrozen;
  }

  // rmcache_memory_allocation_state - computed: false, optional: true, required: false
  private _rmcacheMemoryAllocationState?: string[]; 
  public get rmcacheMemoryAllocationState() {
    return cdktf.Fn.tolist(this.getListAttribute('rmcache_memory_allocation_state'));
  }
  public set rmcacheMemoryAllocationState(value: string[]) {
    this._rmcacheMemoryAllocationState = value;
  }
  public resetRmcacheMemoryAllocationState() {
    this._rmcacheMemoryAllocationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmcacheMemoryAllocationStateInput() {
    return this._rmcacheMemoryAllocationState;
  }

  // rmcache_size - computed: false, optional: true, required: false
  private _rmcacheSize?: number[]; 
  public get rmcacheSize() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rmcache_size')));
  }
  public set rmcacheSize(value: number[]) {
    this._rmcacheSize = value;
  }
  public resetRmcacheSize() {
    this._rmcacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmcacheSizeInput() {
    return this._rmcacheSize;
  }

  // sds_state - computed: false, optional: true, required: false
  private _sdsState?: string[]; 
  public get sdsState() {
    return cdktf.Fn.tolist(this.getListAttribute('sds_state'));
  }
  public set sdsState(value: string[]) {
    this._sdsState = value;
  }
  public resetSdsState() {
    this._sdsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsStateInput() {
    return this._sdsState;
  }

  // software_version_info - computed: false, optional: true, required: false
  private _softwareVersionInfo?: string[]; 
  public get softwareVersionInfo() {
    return cdktf.Fn.tolist(this.getListAttribute('software_version_info'));
  }
  public set softwareVersionInfo(value: string[]) {
    this._softwareVersionInfo = value;
  }
  public resetSoftwareVersionInfo() {
    this._softwareVersionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInfoInput() {
    return this._softwareVersionInfo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds powerflex_sds}
*/
export class DataPowerflexSds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_sds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexSds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexSds to import
  * @param importFromId The id of the existing DataPowerflexSds that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexSds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_sds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/sds powerflex_sds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexSdsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexSdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_sds',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sds_details - computed: true, optional: false, required: false
  private _sdsDetails = new DataPowerflexSdsSdsDetailsList(this, "sds_details", false);
  public get sdsDetails() {
    return this._sdsDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexSdsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexSdsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexSdsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexSdsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexSdsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
