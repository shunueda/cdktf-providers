// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmSyntheticsMonitorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}
  */
  readonly isMaintenanceWindowActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}
  */
  readonly isMaintenanceWindowSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}
  */
  readonly monitorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}
  */
  readonly scriptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}
  */
  readonly vantagePoint?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#filter DataOciApmSyntheticsMonitors#filter}
  */
  readonly filter?: DataOciApmSyntheticsMonitorsFilter[] | cdktf.IResolvable;
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_allowed_failures_per_interval - computed: true, optional: false, required: false
  public get maxAllowedFailuresPerInterval() {
    return this.getNumberAttribute('max_allowed_failures_per_interval');
  }

  // min_allowed_runs_per_interval - computed: true, optional: false, required: false
  public get minAllowedRunsPerInterval() {
    return this.getNumberAttribute('min_allowed_runs_per_interval');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  private _clientCertificate = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList(this, "client_certificate", false);
  public get clientCertificate() {
    return this._clientCertificate;
  }

  // private_key - computed: true, optional: false, required: false
  private _privateKey = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList(this, "private_key", false);
  public get privateKey() {
    return this._privateKey;
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // vault_secret_id - computed: true, optional: false, required: false
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList(this, "password", false);
  public get password() {
    return this._password;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_wallet - computed: true, optional: false, required: false
  public get databaseWallet() {
    return this.getStringAttribute('database_wallet');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_override_dns - computed: true, optional: false, required: false
  public get isOverrideDns() {
    return this.getBooleanAttribute('is_override_dns');
  }

  // override_dns_ip - computed: true, optional: false, required: false
  public get overrideDnsIp() {
    return this.getStringAttribute('override_dns_ip');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }

  // vault_secret_id - computed: true, optional: false, required: false
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList(this, "password", false);
  public get password() {
    return this._password;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_hops - computed: true, optional: false, required: false
  public get numberOfHops() {
    return this.getNumberAttribute('number_of_hops');
  }

  // probe_mode - computed: true, optional: false, required: false
  public get probeMode() {
    return this.getStringAttribute('probe_mode');
  }

  // probe_per_hop - computed: true, optional: false, required: false
  public get probePerHop() {
    return this.getNumberAttribute('probe_per_hop');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // transmission_rate - computed: true, optional: false, required: false
  public get transmissionRate() {
    return this.getNumberAttribute('transmission_rate');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // header_value - computed: true, optional: false, required: false
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_headers - computed: true, optional: false, required: false
  private _authHeaders = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList(this, "auth_headers", false);
  public get authHeaders() {
    return this._authHeaders;
  }

  // auth_request_method - computed: true, optional: false, required: false
  public get authRequestMethod() {
    return this.getStringAttribute('auth_request_method');
  }

  // auth_request_post_body - computed: true, optional: false, required: false
  public get authRequestPostBody() {
    return this.getStringAttribute('auth_request_post_body');
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // auth_user_name - computed: true, optional: false, required: false
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }

  // auth_user_password - computed: true, optional: false, required: false
  public get authUserPassword() {
    return this.getStringAttribute('auth_user_password');
  }

  // oauth_scheme - computed: true, optional: false, required: false
  public get oauthScheme() {
    return this.getStringAttribute('oauth_scheme');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // header_value - computed: true, optional: false, required: false
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // param_name - computed: true, optional: false, required: false
  public get paramName() {
    return this.getStringAttribute('param_name');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate_details - computed: true, optional: false, required: false
  private _clientCertificateDetails = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList(this, "client_certificate_details", false);
  public get clientCertificateDetails() {
    return this._clientCertificateDetails;
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // database_authentication_details - computed: true, optional: false, required: false
  private _databaseAuthenticationDetails = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList(this, "database_authentication_details", false);
  public get databaseAuthenticationDetails() {
    return this._databaseAuthenticationDetails;
  }

  // database_connection_type - computed: true, optional: false, required: false
  public get databaseConnectionType() {
    return this.getStringAttribute('database_connection_type');
  }

  // database_role - computed: true, optional: false, required: false
  public get databaseRole() {
    return this.getStringAttribute('database_role');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_wallet_details - computed: true, optional: false, required: false
  private _databaseWalletDetails = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList(this, "database_wallet_details", false);
  public get databaseWalletDetails() {
    return this._databaseWalletDetails;
  }

  // dns_configuration - computed: true, optional: false, required: false
  private _dnsConfiguration = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList(this, "dns_configuration", false);
  public get dnsConfiguration() {
    return this._dnsConfiguration;
  }

  // download_size_limit_in_bytes - computed: true, optional: false, required: false
  public get downloadSizeLimitInBytes() {
    return this.getNumberAttribute('download_size_limit_in_bytes');
  }

  // ftp_basic_authentication_details - computed: true, optional: false, required: false
  private _ftpBasicAuthenticationDetails = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList(this, "ftp_basic_authentication_details", false);
  public get ftpBasicAuthenticationDetails() {
    return this._ftpBasicAuthenticationDetails;
  }

  // ftp_protocol - computed: true, optional: false, required: false
  public get ftpProtocol() {
    return this.getStringAttribute('ftp_protocol');
  }

  // ftp_request_type - computed: true, optional: false, required: false
  public get ftpRequestType() {
    return this.getStringAttribute('ftp_request_type');
  }

  // is_active_mode - computed: true, optional: false, required: false
  public get isActiveMode() {
    return this.getBooleanAttribute('is_active_mode');
  }

  // is_certificate_validation_enabled - computed: true, optional: false, required: false
  public get isCertificateValidationEnabled() {
    return this.getBooleanAttribute('is_certificate_validation_enabled');
  }

  // is_default_snapshot_enabled - computed: true, optional: false, required: false
  public get isDefaultSnapshotEnabled() {
    return this.getBooleanAttribute('is_default_snapshot_enabled');
  }

  // is_failure_retried - computed: true, optional: false, required: false
  public get isFailureRetried() {
    return this.getBooleanAttribute('is_failure_retried');
  }

  // is_query_recursive - computed: true, optional: false, required: false
  public get isQueryRecursive() {
    return this.getBooleanAttribute('is_query_recursive');
  }

  // is_redirection_enabled - computed: true, optional: false, required: false
  public get isRedirectionEnabled() {
    return this.getBooleanAttribute('is_redirection_enabled');
  }

  // name_server - computed: true, optional: false, required: false
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // req_authentication_details - computed: true, optional: false, required: false
  private _reqAuthenticationDetails = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList(this, "req_authentication_details", false);
  public get reqAuthenticationDetails() {
    return this._reqAuthenticationDetails;
  }

  // req_authentication_scheme - computed: true, optional: false, required: false
  public get reqAuthenticationScheme() {
    return this.getStringAttribute('req_authentication_scheme');
  }

  // request_headers - computed: true, optional: false, required: false
  private _requestHeaders = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList(this, "request_headers", false);
  public get requestHeaders() {
    return this._requestHeaders;
  }

  // request_method - computed: true, optional: false, required: false
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }

  // request_post_body - computed: true, optional: false, required: false
  public get requestPostBody() {
    return this.getStringAttribute('request_post_body');
  }

  // request_query_params - computed: true, optional: false, required: false
  private _requestQueryParams = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList(this, "request_query_params", false);
  public get requestQueryParams() {
    return this._requestQueryParams;
  }

  // upload_file_size_in_bytes - computed: true, optional: false, required: false
  public get uploadFileSizeInBytes() {
    return this.getNumberAttribute('upload_file_size_in_bytes');
  }

  // verify_response_codes - computed: true, optional: false, required: false
  public get verifyResponseCodes() {
    return this.getListAttribute('verify_response_codes');
  }

  // verify_response_content - computed: true, optional: false, required: false
  public get verifyResponseContent() {
    return this.getStringAttribute('verify_response_content');
  }

  // verify_texts - computed: true, optional: false, required: false
  private _verifyTexts = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList(this, "verify_texts", false);
  public get verifyTexts() {
    return this._verifyTexts;
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // param_name - computed: true, optional: false, required: false
  public get paramName() {
    return this.getStringAttribute('param_name');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_overwritten - computed: true, optional: false, required: false
  public get isOverwritten() {
    return this.getBooleanAttribute('is_overwritten');
  }

  // is_secret - computed: true, optional: false, required: false
  public get isSecret() {
    return this.getBooleanAttribute('is_secret');
  }

  // monitor_script_parameter - computed: true, optional: false, required: false
  private _monitorScriptParameter = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList(this, "monitor_script_parameter", false);
  public get monitorScriptParameter() {
    return this._monitorScriptParameter;
  }

  // param_name - computed: true, optional: false, required: false
  public get paramName() {
    return this.getStringAttribute('param_name');
  }

  // param_value - computed: true, optional: false, required: false
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // worker_list - computed: true, optional: false, required: false
  public get workerList() {
    return this.getListAttribute('worker_list');
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollectionItems {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionItemsToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apm_domain_id - computed: true, optional: false, required: false
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }

  // availability_configuration - computed: true, optional: false, required: false
  private _availabilityConfiguration = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList(this, "availability_configuration", false);
  public get availabilityConfiguration() {
    return this._availabilityConfiguration;
  }

  // batch_interval_in_seconds - computed: true, optional: false, required: false
  public get batchIntervalInSeconds() {
    return this.getNumberAttribute('batch_interval_in_seconds');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_ipv6 - computed: true, optional: false, required: false
  public get isIpv6() {
    return this.getBooleanAttribute('is_ipv6');
  }

  // is_run_now - computed: true, optional: false, required: false
  public get isRunNow() {
    return this.getBooleanAttribute('is_run_now');
  }

  // is_run_once - computed: true, optional: false, required: false
  public get isRunOnce() {
    return this.getBooleanAttribute('is_run_once');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // maintenance_window_schedule - computed: true, optional: false, required: false
  private _maintenanceWindowSchedule = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList(this, "maintenance_window_schedule", false);
  public get maintenanceWindowSchedule() {
    return this._maintenanceWindowSchedule;
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // repeat_interval_in_seconds - computed: true, optional: false, required: false
  public get repeatIntervalInSeconds() {
    return this.getNumberAttribute('repeat_interval_in_seconds');
  }

  // scheduling_policy - computed: true, optional: false, required: false
  public get schedulingPolicy() {
    return this.getStringAttribute('scheduling_policy');
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // script_name - computed: true, optional: false, required: false
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }

  // script_parameters - computed: true, optional: false, required: false
  private _scriptParameters = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList(this, "script_parameters", false);
  public get scriptParameters() {
    return this._scriptParameters;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // vantage_point_count - computed: true, optional: false, required: false
  public get vantagePointCount() {
    return this.getNumberAttribute('vantage_point_count');
  }

  // vantage_points - computed: true, optional: false, required: false
  private _vantagePoints = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList(this, "vantage_points", false);
  public get vantagePoints() {
    return this._vantagePoints;
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsMonitorCollection {
}

export function dataOciApmSyntheticsMonitorsMonitorCollectionToTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmSyntheticsMonitorsMonitorCollectionToHclTerraform(struct?: DataOciApmSyntheticsMonitorsMonitorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsMonitorCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsMonitorCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApmSyntheticsMonitorsMonitorCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApmSyntheticsMonitorsMonitorCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference {
    return new DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmSyntheticsMonitorsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#name DataOciApmSyntheticsMonitors#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#regex DataOciApmSyntheticsMonitors#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#values DataOciApmSyntheticsMonitors#values}
  */
  readonly values: string[];
}

export function dataOciApmSyntheticsMonitorsFilterToTerraform(struct?: DataOciApmSyntheticsMonitorsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciApmSyntheticsMonitorsFilterToHclTerraform(struct?: DataOciApmSyntheticsMonitorsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciApmSyntheticsMonitorsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmSyntheticsMonitorsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmSyntheticsMonitorsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciApmSyntheticsMonitorsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciApmSyntheticsMonitorsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciApmSyntheticsMonitorsFilterOutputReference {
    return new DataOciApmSyntheticsMonitorsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors oci_apm_synthetics_monitors}
*/
export class DataOciApmSyntheticsMonitors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_synthetics_monitors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmSyntheticsMonitors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmSyntheticsMonitors to import
  * @param importFromId The id of the existing DataOciApmSyntheticsMonitors that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmSyntheticsMonitors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_synthetics_monitors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_synthetics_monitors oci_apm_synthetics_monitors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmSyntheticsMonitorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmSyntheticsMonitorsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_synthetics_monitors',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isMaintenanceWindowActive = config.isMaintenanceWindowActive;
    this._isMaintenanceWindowSet = config.isMaintenanceWindowSet;
    this._monitorType = config.monitorType;
    this._scriptId = config.scriptId;
    this._status = config.status;
    this._vantagePoint = config.vantagePoint;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_maintenance_window_active - computed: false, optional: true, required: false
  private _isMaintenanceWindowActive?: boolean | cdktf.IResolvable; 
  public get isMaintenanceWindowActive() {
    return this.getBooleanAttribute('is_maintenance_window_active');
  }
  public set isMaintenanceWindowActive(value: boolean | cdktf.IResolvable) {
    this._isMaintenanceWindowActive = value;
  }
  public resetIsMaintenanceWindowActive() {
    this._isMaintenanceWindowActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMaintenanceWindowActiveInput() {
    return this._isMaintenanceWindowActive;
  }

  // is_maintenance_window_set - computed: false, optional: true, required: false
  private _isMaintenanceWindowSet?: boolean | cdktf.IResolvable; 
  public get isMaintenanceWindowSet() {
    return this.getBooleanAttribute('is_maintenance_window_set');
  }
  public set isMaintenanceWindowSet(value: boolean | cdktf.IResolvable) {
    this._isMaintenanceWindowSet = value;
  }
  public resetIsMaintenanceWindowSet() {
    this._isMaintenanceWindowSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMaintenanceWindowSetInput() {
    return this._isMaintenanceWindowSet;
  }

  // monitor_collection - computed: true, optional: false, required: false
  private _monitorCollection = new DataOciApmSyntheticsMonitorsMonitorCollectionList(this, "monitor_collection", false);
  public get monitorCollection() {
    return this._monitorCollection;
  }

  // monitor_type - computed: false, optional: true, required: false
  private _monitorType?: string; 
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }
  public set monitorType(value: string) {
    this._monitorType = value;
  }
  public resetMonitorType() {
    this._monitorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypeInput() {
    return this._monitorType;
  }

  // script_id - computed: false, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // status - computed: false, optional: true, required: false
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

  // vantage_point - computed: false, optional: true, required: false
  private _vantagePoint?: string; 
  public get vantagePoint() {
    return this.getStringAttribute('vantage_point');
  }
  public set vantagePoint(value: string) {
    this._vantagePoint = value;
  }
  public resetVantagePoint() {
    this._vantagePoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vantagePointInput() {
    return this._vantagePoint;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciApmSyntheticsMonitorsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciApmSyntheticsMonitorsFilter[] | cdktf.IResolvable) {
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
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_maintenance_window_active: cdktf.booleanToTerraform(this._isMaintenanceWindowActive),
      is_maintenance_window_set: cdktf.booleanToTerraform(this._isMaintenanceWindowSet),
      monitor_type: cdktf.stringToTerraform(this._monitorType),
      script_id: cdktf.stringToTerraform(this._scriptId),
      status: cdktf.stringToTerraform(this._status),
      vantage_point: cdktf.stringToTerraform(this._vantagePoint),
      filter: cdktf.listMapper(dataOciApmSyntheticsMonitorsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      is_maintenance_window_active: {
        value: cdktf.booleanToHclTerraform(this._isMaintenanceWindowActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_maintenance_window_set: {
        value: cdktf.booleanToHclTerraform(this._isMaintenanceWindowSet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor_type: {
        value: cdktf.stringToHclTerraform(this._monitorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_id: {
        value: cdktf.stringToHclTerraform(this._scriptId),
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
      vantage_point: {
        value: cdktf.stringToHclTerraform(this._vantagePoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciApmSyntheticsMonitorsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciApmSyntheticsMonitorsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
