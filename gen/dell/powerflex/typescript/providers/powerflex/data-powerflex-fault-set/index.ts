// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexFaultSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set#filter DataPowerflexFaultSet#filter}
  */
  readonly filter?: DataPowerflexFaultSetFilter;
}
export interface DataPowerflexFaultSetFaultSetDetailsLinks {
}

export function dataPowerflexFaultSetFaultSetDetailsLinksToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsLinksToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsLinks | undefined) {
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

export class DataPowerflexFaultSetFaultSetDetailsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFaultSetFaultSetDetailsLinksOutputReference {
    return new DataPowerflexFaultSetFaultSetDetailsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfo {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfoToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfoToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfo | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStruct {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStructToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStructToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStruct | undefined) {
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

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStructOutputReference {
    return new DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinks {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsLinksToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsLinksToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinks | undefined) {
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

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinksOutputReference {
    return new DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllers {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllersToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllersToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllers | undefined) {
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

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllersOutputReference {
    return new DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailure {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupled {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindow | undefined) {
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
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailures {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexFaultSetFaultSetDetailsSdsDetails {
}

export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsToTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsSdsDetailsToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetailsSdsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFaultSetFaultSetDetailsSdsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetailsSdsDetails | undefined) {
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
  private _certificateInfo = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsCertificateInfoOutputReference(this, "certificate_info");
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
  private _ipList = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }

  // last_upgrade_time - computed: true, optional: false, required: false
  public get lastUpgradeTime() {
    return this.getNumberAttribute('last_upgrade_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsLinksList(this, "links", false);
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

  // raid_controllers - computed: true, optional: false, required: false
  private _raidControllers = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsRaidControllersList(this, "raid_controllers", false);
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
  private _sdsConfigurationFailure = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsConfigurationFailureOutputReference(this, "sds_configuration_failure");
  public get sdsConfigurationFailure() {
    return this._sdsConfigurationFailure;
  }

  // sds_decoupled - computed: true, optional: false, required: false
  private _sdsDecoupled = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsDecoupledOutputReference(this, "sds_decoupled");
  public get sdsDecoupled() {
    return this._sdsDecoupled;
  }

  // sds_receive_buffer_allocation_failures - computed: true, optional: false, required: false
  private _sdsReceiveBufferAllocationFailures = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsSdsReceiveBufferAllocationFailuresOutputReference(this, "sds_receive_buffer_allocation_failures");
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

export class DataPowerflexFaultSetFaultSetDetailsSdsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFaultSetFaultSetDetailsSdsDetailsOutputReference {
    return new DataPowerflexFaultSetFaultSetDetailsSdsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFaultSetFaultSetDetails {
}

export function dataPowerflexFaultSetFaultSetDetailsToTerraform(struct?: DataPowerflexFaultSetFaultSetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFaultSetFaultSetDetailsToHclTerraform(struct?: DataPowerflexFaultSetFaultSetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFaultSetFaultSetDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFaultSetFaultSetDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFaultSetDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexFaultSetFaultSetDetailsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // sds_details - computed: true, optional: false, required: false
  private _sdsDetails = new DataPowerflexFaultSetFaultSetDetailsSdsDetailsList(this, "sds_details", false);
  public get sdsDetails() {
    return this._sdsDetails;
  }
}

export class DataPowerflexFaultSetFaultSetDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFaultSetFaultSetDetailsOutputReference {
    return new DataPowerflexFaultSetFaultSetDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFaultSetFilter {
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set#id DataPowerflexFaultSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set#name DataPowerflexFaultSet#name}
  */
  readonly name?: string[];
  /**
  * List of protection_domain_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set#protection_domain_id DataPowerflexFaultSet#protection_domain_id}
  */
  readonly protectionDomainId?: string[];
}

export function dataPowerflexFaultSetFilterToTerraform(struct?: DataPowerflexFaultSetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    protection_domain_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectionDomainId),
  }
}


export function dataPowerflexFaultSetFilterToHclTerraform(struct?: DataPowerflexFaultSetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
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
    protection_domain_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectionDomainId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexFaultSetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFaultSetFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectionDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomainId = this._protectionDomainId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFaultSetFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._protectionDomainId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._protectionDomainId = value.protectionDomainId;
    }
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

  // protection_domain_id - computed: false, optional: true, required: false
  private _protectionDomainId?: string[]; 
  public get protectionDomainId() {
    return cdktf.Fn.tolist(this.getListAttribute('protection_domain_id'));
  }
  public set protectionDomainId(value: string[]) {
    this._protectionDomainId = value;
  }
  public resetProtectionDomainId() {
    this._protectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set powerflex_fault_set}
*/
export class DataPowerflexFaultSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_fault_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexFaultSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexFaultSet to import
  * @param importFromId The id of the existing DataPowerflexFaultSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexFaultSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_fault_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/fault_set powerflex_fault_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexFaultSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexFaultSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_fault_set',
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

  // fault_set_details - computed: true, optional: false, required: false
  private _faultSetDetails = new DataPowerflexFaultSetFaultSetDetailsList(this, "fault_set_details", true);
  public get faultSetDetails() {
    return this._faultSetDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexFaultSetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexFaultSetFilter) {
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
      filter: dataPowerflexFaultSetFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexFaultSetFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexFaultSetFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
