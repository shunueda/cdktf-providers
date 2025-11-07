// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexProtectionDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the protection domain instance. Conflicts with `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#id DataPowerflexProtectionDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#filter DataPowerflexProtectionDomain#filter}
  */
  readonly filter?: DataPowerflexProtectionDomainFilter;
}
export interface DataPowerflexProtectionDomainProtectionDomainsLinks {
}

export function dataPowerflexProtectionDomainProtectionDomainsLinksToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsLinksToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsLinks | undefined) {
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

export class DataPowerflexProtectionDomainProtectionDomainsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexProtectionDomainProtectionDomainsLinksOutputReference {
    return new DataPowerflexProtectionDomainProtectionDomainsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounter {
}

export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivity {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivityToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivityToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_server_conn_status - computed: true, optional: false, required: false
  public get clientServerConnStatus() {
    return this.getStringAttribute('client_server_conn_status');
  }

  // disconnected_client_id - computed: true, optional: false, required: false
  public get disconnectedClientId() {
    return this.getStringAttribute('disconnected_client_id');
  }

  // disconnected_client_name - computed: true, optional: false, required: false
  public get disconnectedClientName() {
    return this.getStringAttribute('disconnected_client_name');
  }

  // disconnected_server_id - computed: true, optional: false, required: false
  public get disconnectedServerId() {
    return this.getStringAttribute('disconnected_server_id');
  }

  // disconnected_server_ip - computed: true, optional: false, required: false
  public get disconnectedServerIp() {
    return this.getStringAttribute('disconnected_server_ip');
  }

  // disconnected_server_name - computed: true, optional: false, required: false
  public get disconnectedServerName() {
    return this.getStringAttribute('disconnected_server_name');
  }
}
export interface DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounter {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounter {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounter {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindow {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindowToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindowToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounter {
}

export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_window - computed: true, optional: false, required: false
  private _longWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterLongWindowOutputReference(this, "long_window");
  public get longWindow() {
    return this._longWindow;
  }

  // medium_window - computed: true, optional: false, required: false
  private _mediumWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterMediumWindowOutputReference(this, "medium_window");
  public get mediumWindow() {
    return this._mediumWindow;
  }

  // short_window - computed: true, optional: false, required: false
  private _shortWindow = new DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterShortWindowOutputReference(this, "short_window");
  public get shortWindow() {
    return this._shortWindow;
  }
}
export interface DataPowerflexProtectionDomainProtectionDomains {
}

export function dataPowerflexProtectionDomainProtectionDomainsToTerraform(struct?: DataPowerflexProtectionDomainProtectionDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexProtectionDomainProtectionDomainsToHclTerraform(struct?: DataPowerflexProtectionDomainProtectionDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexProtectionDomainProtectionDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexProtectionDomainProtectionDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainProtectionDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fgl_default_metadata_cache_size - computed: true, optional: false, required: false
  public get fglDefaultMetadataCacheSize() {
    return this.getNumberAttribute('fgl_default_metadata_cache_size');
  }

  // fgl_default_num_concurrent_writes - computed: true, optional: false, required: false
  public get fglDefaultNumConcurrentWrites() {
    return this.getNumberAttribute('fgl_default_num_concurrent_writes');
  }

  // fgl_metadata_cache_enabled - computed: true, optional: false, required: false
  public get fglMetadataCacheEnabled() {
    return this.getBooleanAttribute('fgl_metadata_cache_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexProtectionDomainProtectionDomainsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // mdm_sds_network_disconnections_counter - computed: true, optional: false, required: false
  private _mdmSdsNetworkDisconnectionsCounter = new DataPowerflexProtectionDomainProtectionDomainsMdmSdsNetworkDisconnectionsCounterOutputReference(this, "mdm_sds_network_disconnections_counter");
  public get mdmSdsNetworkDisconnectionsCounter() {
    return this._mdmSdsNetworkDisconnectionsCounter;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overall_io_network_throttling_enabled - computed: true, optional: false, required: false
  public get overallIoNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('overall_io_network_throttling_enabled');
  }

  // overall_io_network_throttling_in_kbps - computed: true, optional: false, required: false
  public get overallIoNetworkThrottlingInKbps() {
    return this.getNumberAttribute('overall_io_network_throttling_in_kbps');
  }

  // protected_maintenance_mode_network_throttling_enabled - computed: true, optional: false, required: false
  public get protectedMaintenanceModeNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('protected_maintenance_mode_network_throttling_enabled');
  }

  // protected_maintenance_mode_network_throttling_in_kbps - computed: true, optional: false, required: false
  public get protectedMaintenanceModeNetworkThrottlingInKbps() {
    return this.getNumberAttribute('protected_maintenance_mode_network_throttling_in_kbps');
  }

  // rebalance_network_throttling_enabled - computed: true, optional: false, required: false
  public get rebalanceNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('rebalance_network_throttling_enabled');
  }

  // rebalance_network_throttling_in_kbps - computed: true, optional: false, required: false
  public get rebalanceNetworkThrottlingInKbps() {
    return this.getNumberAttribute('rebalance_network_throttling_in_kbps');
  }

  // rebuild_network_throttling_enabled - computed: true, optional: false, required: false
  public get rebuildNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('rebuild_network_throttling_enabled');
  }

  // rebuild_network_throttling_in_kbps - computed: true, optional: false, required: false
  public get rebuildNetworkThrottlingInKbps() {
    return this.getNumberAttribute('rebuild_network_throttling_in_kbps');
  }

  // replication_capacity_max_ratio - computed: true, optional: false, required: false
  public get replicationCapacityMaxRatio() {
    return this.getNumberAttribute('replication_capacity_max_ratio');
  }

  // rf_cache_accp_id - computed: true, optional: false, required: false
  public get rfCacheAccpId() {
    return this.getStringAttribute('rf_cache_accp_id');
  }

  // rf_cache_enabled - computed: true, optional: false, required: false
  public get rfCacheEnabled() {
    return this.getBooleanAttribute('rf_cache_enabled');
  }

  // rf_cache_max_io_size_kb - computed: true, optional: false, required: false
  public get rfCacheMaxIoSizeKb() {
    return this.getNumberAttribute('rf_cache_max_io_size_kb');
  }

  // rf_cache_opertional_mode - computed: true, optional: false, required: false
  public get rfCacheOpertionalMode() {
    return this.getStringAttribute('rf_cache_opertional_mode');
  }

  // rf_cache_page_size_kb - computed: true, optional: false, required: false
  public get rfCachePageSizeKb() {
    return this.getNumberAttribute('rf_cache_page_size_kb');
  }

  // sdr_sds_connectivity - computed: true, optional: false, required: false
  private _sdrSdsConnectivity = new DataPowerflexProtectionDomainProtectionDomainsSdrSdsConnectivityOutputReference(this, "sdr_sds_connectivity");
  public get sdrSdsConnectivity() {
    return this._sdrSdsConnectivity;
  }

  // sds_configuration_failure_counter - computed: true, optional: false, required: false
  private _sdsConfigurationFailureCounter = new DataPowerflexProtectionDomainProtectionDomainsSdsConfigurationFailureCounterOutputReference(this, "sds_configuration_failure_counter");
  public get sdsConfigurationFailureCounter() {
    return this._sdsConfigurationFailureCounter;
  }

  // sds_decoupled_counter - computed: true, optional: false, required: false
  private _sdsDecoupledCounter = new DataPowerflexProtectionDomainProtectionDomainsSdsDecoupledCounterOutputReference(this, "sds_decoupled_counter");
  public get sdsDecoupledCounter() {
    return this._sdsDecoupledCounter;
  }

  // sds_receive_buffer_allocation_failures_counter - computed: true, optional: false, required: false
  private _sdsReceiveBufferAllocationFailuresCounter = new DataPowerflexProtectionDomainProtectionDomainsSdsReceiveBufferAllocationFailuresCounterOutputReference(this, "sds_receive_buffer_allocation_failures_counter");
  public get sdsReceiveBufferAllocationFailuresCounter() {
    return this._sdsReceiveBufferAllocationFailuresCounter;
  }

  // sds_sds_network_disconnections_counter - computed: true, optional: false, required: false
  private _sdsSdsNetworkDisconnectionsCounter = new DataPowerflexProtectionDomainProtectionDomainsSdsSdsNetworkDisconnectionsCounterOutputReference(this, "sds_sds_network_disconnections_counter");
  public get sdsSdsNetworkDisconnectionsCounter() {
    return this._sdsSdsNetworkDisconnectionsCounter;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // vtree_migration_network_throttling_enabled - computed: true, optional: false, required: false
  public get vtreeMigrationNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('vtree_migration_network_throttling_enabled');
  }

  // vtree_migration_network_throttling_in_kbps - computed: true, optional: false, required: false
  public get vtreeMigrationNetworkThrottlingInKbps() {
    return this.getNumberAttribute('vtree_migration_network_throttling_in_kbps');
  }
}

export class DataPowerflexProtectionDomainProtectionDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexProtectionDomainProtectionDomainsOutputReference {
    return new DataPowerflexProtectionDomainProtectionDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexProtectionDomainFilter {
  /**
  * List of fgl_default_metadata_cache_size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#fgl_default_metadata_cache_size DataPowerflexProtectionDomain#fgl_default_metadata_cache_size}
  */
  readonly fglDefaultMetadataCacheSize?: number[];
  /**
  * List of fgl_default_num_concurrent_writes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#fgl_default_num_concurrent_writes DataPowerflexProtectionDomain#fgl_default_num_concurrent_writes}
  */
  readonly fglDefaultNumConcurrentWrites?: number[];
  /**
  * Value for fgl_metadata_cache_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#fgl_metadata_cache_enabled DataPowerflexProtectionDomain#fgl_metadata_cache_enabled}
  */
  readonly fglMetadataCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#id DataPowerflexProtectionDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#name DataPowerflexProtectionDomain#name}
  */
  readonly name?: string[];
  /**
  * Value for overall_io_network_throttling_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#overall_io_network_throttling_enabled DataPowerflexProtectionDomain#overall_io_network_throttling_enabled}
  */
  readonly overallIoNetworkThrottlingEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of overall_io_network_throttling_in_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#overall_io_network_throttling_in_kbps DataPowerflexProtectionDomain#overall_io_network_throttling_in_kbps}
  */
  readonly overallIoNetworkThrottlingInKbps?: number[];
  /**
  * Value for protected_maintenance_mode_network_throttling_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#protected_maintenance_mode_network_throttling_enabled DataPowerflexProtectionDomain#protected_maintenance_mode_network_throttling_enabled}
  */
  readonly protectedMaintenanceModeNetworkThrottlingEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of protected_maintenance_mode_network_throttling_in_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#protected_maintenance_mode_network_throttling_in_kbps DataPowerflexProtectionDomain#protected_maintenance_mode_network_throttling_in_kbps}
  */
  readonly protectedMaintenanceModeNetworkThrottlingInKbps?: number[];
  /**
  * Value for rebalance_network_throttling_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rebalance_network_throttling_enabled DataPowerflexProtectionDomain#rebalance_network_throttling_enabled}
  */
  readonly rebalanceNetworkThrottlingEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of rebalance_network_throttling_in_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rebalance_network_throttling_in_kbps DataPowerflexProtectionDomain#rebalance_network_throttling_in_kbps}
  */
  readonly rebalanceNetworkThrottlingInKbps?: number[];
  /**
  * Value for rebuild_network_throttling_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rebuild_network_throttling_enabled DataPowerflexProtectionDomain#rebuild_network_throttling_enabled}
  */
  readonly rebuildNetworkThrottlingEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of rebuild_network_throttling_in_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rebuild_network_throttling_in_kbps DataPowerflexProtectionDomain#rebuild_network_throttling_in_kbps}
  */
  readonly rebuildNetworkThrottlingInKbps?: number[];
  /**
  * List of replication_capacity_max_ratio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#replication_capacity_max_ratio DataPowerflexProtectionDomain#replication_capacity_max_ratio}
  */
  readonly replicationCapacityMaxRatio?: number[];
  /**
  * List of rf_cache_accp_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rf_cache_accp_id DataPowerflexProtectionDomain#rf_cache_accp_id}
  */
  readonly rfCacheAccpId?: string[];
  /**
  * Value for rf_cache_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rf_cache_enabled DataPowerflexProtectionDomain#rf_cache_enabled}
  */
  readonly rfCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of rf_cache_max_io_size_kb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rf_cache_max_io_size_kb DataPowerflexProtectionDomain#rf_cache_max_io_size_kb}
  */
  readonly rfCacheMaxIoSizeKb?: number[];
  /**
  * List of rf_cache_opertional_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rf_cache_opertional_mode DataPowerflexProtectionDomain#rf_cache_opertional_mode}
  */
  readonly rfCacheOpertionalMode?: string[];
  /**
  * List of rf_cache_page_size_kb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#rf_cache_page_size_kb DataPowerflexProtectionDomain#rf_cache_page_size_kb}
  */
  readonly rfCachePageSizeKb?: number[];
  /**
  * List of state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#state DataPowerflexProtectionDomain#state}
  */
  readonly state?: string[];
  /**
  * List of system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#system_id DataPowerflexProtectionDomain#system_id}
  */
  readonly systemId?: string[];
  /**
  * Value for vtree_migration_network_throttling_enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#vtree_migration_network_throttling_enabled DataPowerflexProtectionDomain#vtree_migration_network_throttling_enabled}
  */
  readonly vtreeMigrationNetworkThrottlingEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of vtree_migration_network_throttling_in_kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#vtree_migration_network_throttling_in_kbps DataPowerflexProtectionDomain#vtree_migration_network_throttling_in_kbps}
  */
  readonly vtreeMigrationNetworkThrottlingInKbps?: number[];
}

export function dataPowerflexProtectionDomainFilterToTerraform(struct?: DataPowerflexProtectionDomainFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fgl_default_metadata_cache_size: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglDefaultMetadataCacheSize),
    fgl_default_num_concurrent_writes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fglDefaultNumConcurrentWrites),
    fgl_metadata_cache_enabled: cdktf.booleanToTerraform(struct!.fglMetadataCacheEnabled),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    overall_io_network_throttling_enabled: cdktf.booleanToTerraform(struct!.overallIoNetworkThrottlingEnabled),
    overall_io_network_throttling_in_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.overallIoNetworkThrottlingInKbps),
    protected_maintenance_mode_network_throttling_enabled: cdktf.booleanToTerraform(struct!.protectedMaintenanceModeNetworkThrottlingEnabled),
    protected_maintenance_mode_network_throttling_in_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protectedMaintenanceModeNetworkThrottlingInKbps),
    rebalance_network_throttling_enabled: cdktf.booleanToTerraform(struct!.rebalanceNetworkThrottlingEnabled),
    rebalance_network_throttling_in_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebalanceNetworkThrottlingInKbps),
    rebuild_network_throttling_enabled: cdktf.booleanToTerraform(struct!.rebuildNetworkThrottlingEnabled),
    rebuild_network_throttling_in_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rebuildNetworkThrottlingInKbps),
    replication_capacity_max_ratio: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.replicationCapacityMaxRatio),
    rf_cache_accp_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rfCacheAccpId),
    rf_cache_enabled: cdktf.booleanToTerraform(struct!.rfCacheEnabled),
    rf_cache_max_io_size_kb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rfCacheMaxIoSizeKb),
    rf_cache_opertional_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rfCacheOpertionalMode),
    rf_cache_page_size_kb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rfCachePageSizeKb),
    state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.state),
    system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemId),
    vtree_migration_network_throttling_enabled: cdktf.booleanToTerraform(struct!.vtreeMigrationNetworkThrottlingEnabled),
    vtree_migration_network_throttling_in_kbps: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vtreeMigrationNetworkThrottlingInKbps),
  }
}


export function dataPowerflexProtectionDomainFilterToHclTerraform(struct?: DataPowerflexProtectionDomainFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fgl_default_metadata_cache_size: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglDefaultMetadataCacheSize),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_default_num_concurrent_writes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fglDefaultNumConcurrentWrites),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    fgl_metadata_cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fglMetadataCacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    overall_io_network_throttling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.overallIoNetworkThrottlingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overall_io_network_throttling_in_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.overallIoNetworkThrottlingInKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    protected_maintenance_mode_network_throttling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.protectedMaintenanceModeNetworkThrottlingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protected_maintenance_mode_network_throttling_in_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.protectedMaintenanceModeNetworkThrottlingInKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebalance_network_throttling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rebalanceNetworkThrottlingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rebalance_network_throttling_in_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebalanceNetworkThrottlingInKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rebuild_network_throttling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rebuildNetworkThrottlingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rebuild_network_throttling_in_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rebuildNetworkThrottlingInKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    replication_capacity_max_ratio: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.replicationCapacityMaxRatio),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rf_cache_accp_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rfCacheAccpId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rf_cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rfCacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rf_cache_max_io_size_kb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rfCacheMaxIoSizeKb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    rf_cache_opertional_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rfCacheOpertionalMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rf_cache_page_size_kb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rfCachePageSizeKb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.state),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vtree_migration_network_throttling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vtreeMigrationNetworkThrottlingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vtree_migration_network_throttling_in_kbps: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vtreeMigrationNetworkThrottlingInKbps),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexProtectionDomainFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexProtectionDomainFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fglDefaultMetadataCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglDefaultMetadataCacheSize = this._fglDefaultMetadataCacheSize;
    }
    if (this._fglDefaultNumConcurrentWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglDefaultNumConcurrentWrites = this._fglDefaultNumConcurrentWrites;
    }
    if (this._fglMetadataCacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fglMetadataCacheEnabled = this._fglMetadataCacheEnabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overallIoNetworkThrottlingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallIoNetworkThrottlingEnabled = this._overallIoNetworkThrottlingEnabled;
    }
    if (this._overallIoNetworkThrottlingInKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallIoNetworkThrottlingInKbps = this._overallIoNetworkThrottlingInKbps;
    }
    if (this._protectedMaintenanceModeNetworkThrottlingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeNetworkThrottlingEnabled = this._protectedMaintenanceModeNetworkThrottlingEnabled;
    }
    if (this._protectedMaintenanceModeNetworkThrottlingInKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedMaintenanceModeNetworkThrottlingInKbps = this._protectedMaintenanceModeNetworkThrottlingInKbps;
    }
    if (this._rebalanceNetworkThrottlingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceNetworkThrottlingEnabled = this._rebalanceNetworkThrottlingEnabled;
    }
    if (this._rebalanceNetworkThrottlingInKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalanceNetworkThrottlingInKbps = this._rebalanceNetworkThrottlingInKbps;
    }
    if (this._rebuildNetworkThrottlingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildNetworkThrottlingEnabled = this._rebuildNetworkThrottlingEnabled;
    }
    if (this._rebuildNetworkThrottlingInKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildNetworkThrottlingInKbps = this._rebuildNetworkThrottlingInKbps;
    }
    if (this._replicationCapacityMaxRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationCapacityMaxRatio = this._replicationCapacityMaxRatio;
    }
    if (this._rfCacheAccpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfCacheAccpId = this._rfCacheAccpId;
    }
    if (this._rfCacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfCacheEnabled = this._rfCacheEnabled;
    }
    if (this._rfCacheMaxIoSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfCacheMaxIoSizeKb = this._rfCacheMaxIoSizeKb;
    }
    if (this._rfCacheOpertionalMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfCacheOpertionalMode = this._rfCacheOpertionalMode;
    }
    if (this._rfCachePageSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfCachePageSizeKb = this._rfCachePageSizeKb;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._vtreeMigrationNetworkThrottlingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationNetworkThrottlingEnabled = this._vtreeMigrationNetworkThrottlingEnabled;
    }
    if (this._vtreeMigrationNetworkThrottlingInKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtreeMigrationNetworkThrottlingInKbps = this._vtreeMigrationNetworkThrottlingInKbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexProtectionDomainFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fglDefaultMetadataCacheSize = undefined;
      this._fglDefaultNumConcurrentWrites = undefined;
      this._fglMetadataCacheEnabled = undefined;
      this._id = undefined;
      this._name = undefined;
      this._overallIoNetworkThrottlingEnabled = undefined;
      this._overallIoNetworkThrottlingInKbps = undefined;
      this._protectedMaintenanceModeNetworkThrottlingEnabled = undefined;
      this._protectedMaintenanceModeNetworkThrottlingInKbps = undefined;
      this._rebalanceNetworkThrottlingEnabled = undefined;
      this._rebalanceNetworkThrottlingInKbps = undefined;
      this._rebuildNetworkThrottlingEnabled = undefined;
      this._rebuildNetworkThrottlingInKbps = undefined;
      this._replicationCapacityMaxRatio = undefined;
      this._rfCacheAccpId = undefined;
      this._rfCacheEnabled = undefined;
      this._rfCacheMaxIoSizeKb = undefined;
      this._rfCacheOpertionalMode = undefined;
      this._rfCachePageSizeKb = undefined;
      this._state = undefined;
      this._systemId = undefined;
      this._vtreeMigrationNetworkThrottlingEnabled = undefined;
      this._vtreeMigrationNetworkThrottlingInKbps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fglDefaultMetadataCacheSize = value.fglDefaultMetadataCacheSize;
      this._fglDefaultNumConcurrentWrites = value.fglDefaultNumConcurrentWrites;
      this._fglMetadataCacheEnabled = value.fglMetadataCacheEnabled;
      this._id = value.id;
      this._name = value.name;
      this._overallIoNetworkThrottlingEnabled = value.overallIoNetworkThrottlingEnabled;
      this._overallIoNetworkThrottlingInKbps = value.overallIoNetworkThrottlingInKbps;
      this._protectedMaintenanceModeNetworkThrottlingEnabled = value.protectedMaintenanceModeNetworkThrottlingEnabled;
      this._protectedMaintenanceModeNetworkThrottlingInKbps = value.protectedMaintenanceModeNetworkThrottlingInKbps;
      this._rebalanceNetworkThrottlingEnabled = value.rebalanceNetworkThrottlingEnabled;
      this._rebalanceNetworkThrottlingInKbps = value.rebalanceNetworkThrottlingInKbps;
      this._rebuildNetworkThrottlingEnabled = value.rebuildNetworkThrottlingEnabled;
      this._rebuildNetworkThrottlingInKbps = value.rebuildNetworkThrottlingInKbps;
      this._replicationCapacityMaxRatio = value.replicationCapacityMaxRatio;
      this._rfCacheAccpId = value.rfCacheAccpId;
      this._rfCacheEnabled = value.rfCacheEnabled;
      this._rfCacheMaxIoSizeKb = value.rfCacheMaxIoSizeKb;
      this._rfCacheOpertionalMode = value.rfCacheOpertionalMode;
      this._rfCachePageSizeKb = value.rfCachePageSizeKb;
      this._state = value.state;
      this._systemId = value.systemId;
      this._vtreeMigrationNetworkThrottlingEnabled = value.vtreeMigrationNetworkThrottlingEnabled;
      this._vtreeMigrationNetworkThrottlingInKbps = value.vtreeMigrationNetworkThrottlingInKbps;
    }
  }

  // fgl_default_metadata_cache_size - computed: false, optional: true, required: false
  private _fglDefaultMetadataCacheSize?: number[]; 
  public get fglDefaultMetadataCacheSize() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_default_metadata_cache_size')));
  }
  public set fglDefaultMetadataCacheSize(value: number[]) {
    this._fglDefaultMetadataCacheSize = value;
  }
  public resetFglDefaultMetadataCacheSize() {
    this._fglDefaultMetadataCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglDefaultMetadataCacheSizeInput() {
    return this._fglDefaultMetadataCacheSize;
  }

  // fgl_default_num_concurrent_writes - computed: false, optional: true, required: false
  private _fglDefaultNumConcurrentWrites?: number[]; 
  public get fglDefaultNumConcurrentWrites() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fgl_default_num_concurrent_writes')));
  }
  public set fglDefaultNumConcurrentWrites(value: number[]) {
    this._fglDefaultNumConcurrentWrites = value;
  }
  public resetFglDefaultNumConcurrentWrites() {
    this._fglDefaultNumConcurrentWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglDefaultNumConcurrentWritesInput() {
    return this._fglDefaultNumConcurrentWrites;
  }

  // fgl_metadata_cache_enabled - computed: false, optional: true, required: false
  private _fglMetadataCacheEnabled?: boolean | cdktf.IResolvable; 
  public get fglMetadataCacheEnabled() {
    return this.getBooleanAttribute('fgl_metadata_cache_enabled');
  }
  public set fglMetadataCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._fglMetadataCacheEnabled = value;
  }
  public resetFglMetadataCacheEnabled() {
    this._fglMetadataCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglMetadataCacheEnabledInput() {
    return this._fglMetadataCacheEnabled;
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

  // overall_io_network_throttling_enabled - computed: false, optional: true, required: false
  private _overallIoNetworkThrottlingEnabled?: boolean | cdktf.IResolvable; 
  public get overallIoNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('overall_io_network_throttling_enabled');
  }
  public set overallIoNetworkThrottlingEnabled(value: boolean | cdktf.IResolvable) {
    this._overallIoNetworkThrottlingEnabled = value;
  }
  public resetOverallIoNetworkThrottlingEnabled() {
    this._overallIoNetworkThrottlingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallIoNetworkThrottlingEnabledInput() {
    return this._overallIoNetworkThrottlingEnabled;
  }

  // overall_io_network_throttling_in_kbps - computed: false, optional: true, required: false
  private _overallIoNetworkThrottlingInKbps?: number[]; 
  public get overallIoNetworkThrottlingInKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('overall_io_network_throttling_in_kbps')));
  }
  public set overallIoNetworkThrottlingInKbps(value: number[]) {
    this._overallIoNetworkThrottlingInKbps = value;
  }
  public resetOverallIoNetworkThrottlingInKbps() {
    this._overallIoNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallIoNetworkThrottlingInKbpsInput() {
    return this._overallIoNetworkThrottlingInKbps;
  }

  // protected_maintenance_mode_network_throttling_enabled - computed: false, optional: true, required: false
  private _protectedMaintenanceModeNetworkThrottlingEnabled?: boolean | cdktf.IResolvable; 
  public get protectedMaintenanceModeNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('protected_maintenance_mode_network_throttling_enabled');
  }
  public set protectedMaintenanceModeNetworkThrottlingEnabled(value: boolean | cdktf.IResolvable) {
    this._protectedMaintenanceModeNetworkThrottlingEnabled = value;
  }
  public resetProtectedMaintenanceModeNetworkThrottlingEnabled() {
    this._protectedMaintenanceModeNetworkThrottlingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeNetworkThrottlingEnabledInput() {
    return this._protectedMaintenanceModeNetworkThrottlingEnabled;
  }

  // protected_maintenance_mode_network_throttling_in_kbps - computed: false, optional: true, required: false
  private _protectedMaintenanceModeNetworkThrottlingInKbps?: number[]; 
  public get protectedMaintenanceModeNetworkThrottlingInKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_maintenance_mode_network_throttling_in_kbps')));
  }
  public set protectedMaintenanceModeNetworkThrottlingInKbps(value: number[]) {
    this._protectedMaintenanceModeNetworkThrottlingInKbps = value;
  }
  public resetProtectedMaintenanceModeNetworkThrottlingInKbps() {
    this._protectedMaintenanceModeNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeNetworkThrottlingInKbpsInput() {
    return this._protectedMaintenanceModeNetworkThrottlingInKbps;
  }

  // rebalance_network_throttling_enabled - computed: false, optional: true, required: false
  private _rebalanceNetworkThrottlingEnabled?: boolean | cdktf.IResolvable; 
  public get rebalanceNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('rebalance_network_throttling_enabled');
  }
  public set rebalanceNetworkThrottlingEnabled(value: boolean | cdktf.IResolvable) {
    this._rebalanceNetworkThrottlingEnabled = value;
  }
  public resetRebalanceNetworkThrottlingEnabled() {
    this._rebalanceNetworkThrottlingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceNetworkThrottlingEnabledInput() {
    return this._rebalanceNetworkThrottlingEnabled;
  }

  // rebalance_network_throttling_in_kbps - computed: false, optional: true, required: false
  private _rebalanceNetworkThrottlingInKbps?: number[]; 
  public get rebalanceNetworkThrottlingInKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebalance_network_throttling_in_kbps')));
  }
  public set rebalanceNetworkThrottlingInKbps(value: number[]) {
    this._rebalanceNetworkThrottlingInKbps = value;
  }
  public resetRebalanceNetworkThrottlingInKbps() {
    this._rebalanceNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceNetworkThrottlingInKbpsInput() {
    return this._rebalanceNetworkThrottlingInKbps;
  }

  // rebuild_network_throttling_enabled - computed: false, optional: true, required: false
  private _rebuildNetworkThrottlingEnabled?: boolean | cdktf.IResolvable; 
  public get rebuildNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('rebuild_network_throttling_enabled');
  }
  public set rebuildNetworkThrottlingEnabled(value: boolean | cdktf.IResolvable) {
    this._rebuildNetworkThrottlingEnabled = value;
  }
  public resetRebuildNetworkThrottlingEnabled() {
    this._rebuildNetworkThrottlingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildNetworkThrottlingEnabledInput() {
    return this._rebuildNetworkThrottlingEnabled;
  }

  // rebuild_network_throttling_in_kbps - computed: false, optional: true, required: false
  private _rebuildNetworkThrottlingInKbps?: number[]; 
  public get rebuildNetworkThrottlingInKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rebuild_network_throttling_in_kbps')));
  }
  public set rebuildNetworkThrottlingInKbps(value: number[]) {
    this._rebuildNetworkThrottlingInKbps = value;
  }
  public resetRebuildNetworkThrottlingInKbps() {
    this._rebuildNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildNetworkThrottlingInKbpsInput() {
    return this._rebuildNetworkThrottlingInKbps;
  }

  // replication_capacity_max_ratio - computed: false, optional: true, required: false
  private _replicationCapacityMaxRatio?: number[]; 
  public get replicationCapacityMaxRatio() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('replication_capacity_max_ratio')));
  }
  public set replicationCapacityMaxRatio(value: number[]) {
    this._replicationCapacityMaxRatio = value;
  }
  public resetReplicationCapacityMaxRatio() {
    this._replicationCapacityMaxRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationCapacityMaxRatioInput() {
    return this._replicationCapacityMaxRatio;
  }

  // rf_cache_accp_id - computed: false, optional: true, required: false
  private _rfCacheAccpId?: string[]; 
  public get rfCacheAccpId() {
    return cdktf.Fn.tolist(this.getListAttribute('rf_cache_accp_id'));
  }
  public set rfCacheAccpId(value: string[]) {
    this._rfCacheAccpId = value;
  }
  public resetRfCacheAccpId() {
    this._rfCacheAccpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheAccpIdInput() {
    return this._rfCacheAccpId;
  }

  // rf_cache_enabled - computed: false, optional: true, required: false
  private _rfCacheEnabled?: boolean | cdktf.IResolvable; 
  public get rfCacheEnabled() {
    return this.getBooleanAttribute('rf_cache_enabled');
  }
  public set rfCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._rfCacheEnabled = value;
  }
  public resetRfCacheEnabled() {
    this._rfCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheEnabledInput() {
    return this._rfCacheEnabled;
  }

  // rf_cache_max_io_size_kb - computed: false, optional: true, required: false
  private _rfCacheMaxIoSizeKb?: number[]; 
  public get rfCacheMaxIoSizeKb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rf_cache_max_io_size_kb')));
  }
  public set rfCacheMaxIoSizeKb(value: number[]) {
    this._rfCacheMaxIoSizeKb = value;
  }
  public resetRfCacheMaxIoSizeKb() {
    this._rfCacheMaxIoSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheMaxIoSizeKbInput() {
    return this._rfCacheMaxIoSizeKb;
  }

  // rf_cache_opertional_mode - computed: false, optional: true, required: false
  private _rfCacheOpertionalMode?: string[]; 
  public get rfCacheOpertionalMode() {
    return cdktf.Fn.tolist(this.getListAttribute('rf_cache_opertional_mode'));
  }
  public set rfCacheOpertionalMode(value: string[]) {
    this._rfCacheOpertionalMode = value;
  }
  public resetRfCacheOpertionalMode() {
    this._rfCacheOpertionalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheOpertionalModeInput() {
    return this._rfCacheOpertionalMode;
  }

  // rf_cache_page_size_kb - computed: false, optional: true, required: false
  private _rfCachePageSizeKb?: number[]; 
  public get rfCachePageSizeKb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rf_cache_page_size_kb')));
  }
  public set rfCachePageSizeKb(value: number[]) {
    this._rfCachePageSizeKb = value;
  }
  public resetRfCachePageSizeKb() {
    this._rfCachePageSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCachePageSizeKbInput() {
    return this._rfCachePageSizeKb;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return cdktf.Fn.tolist(this.getListAttribute('state'));
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string[]; 
  public get systemId() {
    return cdktf.Fn.tolist(this.getListAttribute('system_id'));
  }
  public set systemId(value: string[]) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // vtree_migration_network_throttling_enabled - computed: false, optional: true, required: false
  private _vtreeMigrationNetworkThrottlingEnabled?: boolean | cdktf.IResolvable; 
  public get vtreeMigrationNetworkThrottlingEnabled() {
    return this.getBooleanAttribute('vtree_migration_network_throttling_enabled');
  }
  public set vtreeMigrationNetworkThrottlingEnabled(value: boolean | cdktf.IResolvable) {
    this._vtreeMigrationNetworkThrottlingEnabled = value;
  }
  public resetVtreeMigrationNetworkThrottlingEnabled() {
    this._vtreeMigrationNetworkThrottlingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationNetworkThrottlingEnabledInput() {
    return this._vtreeMigrationNetworkThrottlingEnabled;
  }

  // vtree_migration_network_throttling_in_kbps - computed: false, optional: true, required: false
  private _vtreeMigrationNetworkThrottlingInKbps?: number[]; 
  public get vtreeMigrationNetworkThrottlingInKbps() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vtree_migration_network_throttling_in_kbps')));
  }
  public set vtreeMigrationNetworkThrottlingInKbps(value: number[]) {
    this._vtreeMigrationNetworkThrottlingInKbps = value;
  }
  public resetVtreeMigrationNetworkThrottlingInKbps() {
    this._vtreeMigrationNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationNetworkThrottlingInKbpsInput() {
    return this._vtreeMigrationNetworkThrottlingInKbps;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain powerflex_protection_domain}
*/
export class DataPowerflexProtectionDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_protection_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexProtectionDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexProtectionDomain to import
  * @param importFromId The id of the existing DataPowerflexProtectionDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexProtectionDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_protection_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/protection_domain powerflex_protection_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexProtectionDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexProtectionDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_protection_domain',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // protection_domains - computed: true, optional: false, required: false
  private _protectionDomains = new DataPowerflexProtectionDomainProtectionDomainsList(this, "protection_domains", false);
  public get protectionDomains() {
    return this._protectionDomains;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexProtectionDomainFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexProtectionDomainFilter) {
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
      id: cdktf.stringToTerraform(this._id),
      filter: dataPowerflexProtectionDomainFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataPowerflexProtectionDomainFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexProtectionDomainFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
