// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * PKI Certificate identifier to be used by the PCE for authenticating the VEN. The ID should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#agent_to_pce_certificate_authentication_id ManagedWorkload#agent_to_pce_certificate_authentication_id}
  */
  readonly agentToPceCertificateAuthenticationId?: string;
  /**
  * Data center for Workload. The data_center should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#data_center ManagedWorkload#data_center}
  */
  readonly dataCenter?: string;
  /**
  * Data center Zone for Workload. The data_center_zone should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#data_center_zone ManagedWorkload#data_center_zone}
  */
  readonly dataCenterZone?: string;
  /**
  * The long description of the workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#description ManagedWorkload#description}
  */
  readonly description?: string;
  /**
  * Enforcement mode of workload(s) to return. Allowed values for enforcement modes are "idle","visibility_only","full", and "selective". Default value: "visibility_only" 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#enforcement_mode ManagedWorkload#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#external_data_reference ManagedWorkload#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#external_data_set ManagedWorkload#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#id ManagedWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Workload interface names to ignore (e.g. `eth0`). Ignored interfaces will not be included in policy configuration provided by the PCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#ignored_interface_names ManagedWorkload#ignored_interface_names}
  */
  readonly ignoredInterfaceNames?: string[];
  /**
  * Name of the Workload. The name should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#name ManagedWorkload#name}
  */
  readonly name?: string;
  /**
  * The Kerberos Service Principal Name (SPN). The SPN should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#service_principal_name ManagedWorkload#service_principal_name}
  */
  readonly servicePrincipalName?: string;
  /**
  * Service provider for Workload. The service_provider should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#service_provider ManagedWorkload#service_provider}
  */
  readonly serviceProvider?: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#labels ManagedWorkload#labels}
  */
  readonly labels?: ManagedWorkloadLabels[] | cdktf.IResolvable;
}
export interface ManagedWorkloadContainerCluster {
}

export function managedWorkloadContainerClusterToTerraform(struct?: ManagedWorkloadContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadContainerClusterToHclTerraform(struct?: ManagedWorkloadContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadContainerClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadContainerCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadContainerCluster | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ManagedWorkloadContainerClusterList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadContainerClusterOutputReference {
    return new ManagedWorkloadContainerClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadDetectedVulnerabilitiesPortWideExposure {
}

export function managedWorkloadDetectedVulnerabilitiesPortWideExposureToTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesPortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadDetectedVulnerabilitiesPortWideExposureToHclTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesPortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadDetectedVulnerabilitiesPortWideExposureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadDetectedVulnerabilitiesPortWideExposure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadDetectedVulnerabilitiesPortWideExposure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getBooleanAttribute('any');
  }

  // ip_list - computed: true, optional: false, required: false
  public get ipList() {
    return this.getBooleanAttribute('ip_list');
  }
}

export class ManagedWorkloadDetectedVulnerabilitiesPortWideExposureList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadDetectedVulnerabilitiesPortWideExposureOutputReference {
    return new ManagedWorkloadDetectedVulnerabilitiesPortWideExposureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadDetectedVulnerabilitiesVulnerability {
}

export function managedWorkloadDetectedVulnerabilitiesVulnerabilityToTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadDetectedVulnerabilitiesVulnerabilityToHclTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadDetectedVulnerabilitiesVulnerabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadDetectedVulnerabilitiesVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadDetectedVulnerabilitiesVulnerability | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }
}

export class ManagedWorkloadDetectedVulnerabilitiesVulnerabilityList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadDetectedVulnerabilitiesVulnerabilityOutputReference {
    return new ManagedWorkloadDetectedVulnerabilitiesVulnerabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReport {
}

export function managedWorkloadDetectedVulnerabilitiesVulnerabilityReportToTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadDetectedVulnerabilitiesVulnerabilityReportToHclTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReport | undefined) {
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
}

export class ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReportList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReportOutputReference {
    return new ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadDetectedVulnerabilitiesWorkload {
}

export function managedWorkloadDetectedVulnerabilitiesWorkloadToTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadDetectedVulnerabilitiesWorkloadToHclTerraform(struct?: ManagedWorkloadDetectedVulnerabilitiesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadDetectedVulnerabilitiesWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadDetectedVulnerabilitiesWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadDetectedVulnerabilitiesWorkload | undefined) {
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
}

export class ManagedWorkloadDetectedVulnerabilitiesWorkloadList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadDetectedVulnerabilitiesWorkloadOutputReference {
    return new ManagedWorkloadDetectedVulnerabilitiesWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadDetectedVulnerabilities {
}

export function managedWorkloadDetectedVulnerabilitiesToTerraform(struct?: ManagedWorkloadDetectedVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadDetectedVulnerabilitiesToHclTerraform(struct?: ManagedWorkloadDetectedVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadDetectedVulnerabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadDetectedVulnerabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadDetectedVulnerabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_exposure - computed: true, optional: false, required: false
  public get portExposure() {
    return this.getNumberAttribute('port_exposure');
  }

  // port_wide_exposure - computed: true, optional: false, required: false
  private _portWideExposure = new ManagedWorkloadDetectedVulnerabilitiesPortWideExposureList(this, "port_wide_exposure", false);
  public get portWideExposure() {
    return this._portWideExposure;
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getNumberAttribute('proto');
  }

  // vulnerability - computed: true, optional: false, required: false
  private _vulnerability = new ManagedWorkloadDetectedVulnerabilitiesVulnerabilityList(this, "vulnerability", true);
  public get vulnerability() {
    return this._vulnerability;
  }

  // vulnerability_report - computed: true, optional: false, required: false
  private _vulnerabilityReport = new ManagedWorkloadDetectedVulnerabilitiesVulnerabilityReportList(this, "vulnerability_report", true);
  public get vulnerabilityReport() {
    return this._vulnerabilityReport;
  }

  // workload - computed: true, optional: false, required: false
  private _workload = new ManagedWorkloadDetectedVulnerabilitiesWorkloadList(this, "workload", false);
  public get workload() {
    return this._workload;
  }
}

export class ManagedWorkloadDetectedVulnerabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadDetectedVulnerabilitiesOutputReference {
    return new ManagedWorkloadDetectedVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadFirewallCoexistence {
}

export function managedWorkloadFirewallCoexistenceToTerraform(struct?: ManagedWorkloadFirewallCoexistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadFirewallCoexistenceToHclTerraform(struct?: ManagedWorkloadFirewallCoexistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadFirewallCoexistenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadFirewallCoexistence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadFirewallCoexistence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // illumio_primary - computed: true, optional: false, required: false
  public get illumioPrimary() {
    return this.getBooleanAttribute('illumio_primary');
  }
}

export class ManagedWorkloadFirewallCoexistenceList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadFirewallCoexistenceOutputReference {
    return new ManagedWorkloadFirewallCoexistenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadInterfaces {
}

export function managedWorkloadInterfacesToTerraform(struct?: ManagedWorkloadInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadInterfacesToHclTerraform(struct?: ManagedWorkloadInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getNumberAttribute('cidr_block');
  }

  // default_gateway_address - computed: true, optional: false, required: false
  public get defaultGatewayAddress() {
    return this.getStringAttribute('default_gateway_address');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // link_state - computed: true, optional: false, required: false
  public get linkState() {
    return this.getStringAttribute('link_state');
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  private _network = new cdktf.StringMap(this, "network");
  public get network() {
    return this._network;
  }

  // network_detection_mode - computed: true, optional: false, required: false
  public get networkDetectionMode() {
    return this.getStringAttribute('network_detection_mode');
  }
}

export class ManagedWorkloadInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadInterfacesOutputReference {
    return new ManagedWorkloadInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadSelectivelyEnforcedServices {
}

export function managedWorkloadSelectivelyEnforcedServicesToTerraform(struct?: ManagedWorkloadSelectivelyEnforcedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadSelectivelyEnforcedServicesToHclTerraform(struct?: ManagedWorkloadSelectivelyEnforcedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadSelectivelyEnforcedServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadSelectivelyEnforcedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadSelectivelyEnforcedServices | undefined) {
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getNumberAttribute('proto');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class ManagedWorkloadSelectivelyEnforcedServicesList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadSelectivelyEnforcedServicesOutputReference {
    return new ManagedWorkloadSelectivelyEnforcedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadServicesOpenServicePorts {
}

export function managedWorkloadServicesOpenServicePortsToTerraform(struct?: ManagedWorkloadServicesOpenServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadServicesOpenServicePortsToHclTerraform(struct?: ManagedWorkloadServicesOpenServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadServicesOpenServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadServicesOpenServicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadServicesOpenServicePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // package - computed: true, optional: false, required: false
  public get package() {
    return this.getStringAttribute('package');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // process_name - computed: true, optional: false, required: false
  public get processName() {
    return this.getStringAttribute('process_name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // win_service_name - computed: true, optional: false, required: false
  public get winServiceName() {
    return this.getStringAttribute('win_service_name');
  }
}

export class ManagedWorkloadServicesOpenServicePortsList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadServicesOpenServicePortsOutputReference {
    return new ManagedWorkloadServicesOpenServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadServices {
}

export function managedWorkloadServicesToTerraform(struct?: ManagedWorkloadServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadServicesToHclTerraform(struct?: ManagedWorkloadServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // open_service_ports - computed: true, optional: false, required: false
  private _openServicePorts = new ManagedWorkloadServicesOpenServicePortsList(this, "open_service_ports", false);
  public get openServicePorts() {
    return this._openServicePorts;
  }

  // uptime_seconds - computed: true, optional: false, required: false
  public get uptimeSeconds() {
    return this.getNumberAttribute('uptime_seconds');
  }
}

export class ManagedWorkloadServicesList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadServicesOutputReference {
    return new ManagedWorkloadServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure {
}

export function managedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureToTerraform(struct?: ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureToHclTerraform(struct?: ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getBooleanAttribute('any');
  }

  // ip_list - computed: true, optional: false, required: false
  public get ipList() {
    return this.getBooleanAttribute('ip_list');
  }
}

export class ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference {
    return new ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadVulnerabilitiesSummary {
}

export function managedWorkloadVulnerabilitiesSummaryToTerraform(struct?: ManagedWorkloadVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedWorkloadVulnerabilitiesSummaryToHclTerraform(struct?: ManagedWorkloadVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedWorkloadVulnerabilitiesSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadVulnerabilitiesSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadVulnerabilitiesSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_vulnerability_score - computed: true, optional: false, required: false
  public get maxVulnerabilityScore() {
    return this.getNumberAttribute('max_vulnerability_score');
  }

  // num_vulnerabilities - computed: true, optional: false, required: false
  public get numVulnerabilities() {
    return this.getNumberAttribute('num_vulnerabilities');
  }

  // vulnerability_exposure_score - computed: true, optional: false, required: false
  public get vulnerabilityExposureScore() {
    return this.getNumberAttribute('vulnerability_exposure_score');
  }

  // vulnerability_score - computed: true, optional: false, required: false
  public get vulnerabilityScore() {
    return this.getNumberAttribute('vulnerability_score');
  }

  // vulnerable_port_exposure - computed: true, optional: false, required: false
  public get vulnerablePortExposure() {
    return this.getNumberAttribute('vulnerable_port_exposure');
  }

  // vulnerable_port_wide_exposure - computed: true, optional: false, required: false
  private _vulnerablePortWideExposure = new ManagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureList(this, "vulnerable_port_wide_exposure", false);
  public get vulnerablePortWideExposure() {
    return this._vulnerablePortWideExposure;
  }
}

export class ManagedWorkloadVulnerabilitiesSummaryList extends cdktf.ComplexList {

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
  public get(index: number): ManagedWorkloadVulnerabilitiesSummaryOutputReference {
    return new ManagedWorkloadVulnerabilitiesSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedWorkloadLabels {
  /**
  * URI of label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#href ManagedWorkload#href}
  */
  readonly href: string;
}

export function managedWorkloadLabelsToTerraform(struct?: ManagedWorkloadLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function managedWorkloadLabelsToHclTerraform(struct?: ManagedWorkloadLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedWorkloadLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedWorkloadLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedWorkloadLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class ManagedWorkloadLabelsList extends cdktf.ComplexList {
  public internalValue? : ManagedWorkloadLabels[] | cdktf.IResolvable

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
  public get(index: number): ManagedWorkloadLabelsOutputReference {
    return new ManagedWorkloadLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload illumio-core_managed_workload}
*/
export class ManagedWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_managed_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedWorkload to import
  * @param importFromId The id of the existing ManagedWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_managed_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/managed_workload illumio-core_managed_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedWorkloadConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagedWorkloadConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_managed_workload',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentToPceCertificateAuthenticationId = config.agentToPceCertificateAuthenticationId;
    this._dataCenter = config.dataCenter;
    this._dataCenterZone = config.dataCenterZone;
    this._description = config.description;
    this._enforcementMode = config.enforcementMode;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._ignoredInterfaceNames = config.ignoredInterfaceNames;
    this._name = config.name;
    this._servicePrincipalName = config.servicePrincipalName;
    this._serviceProvider = config.serviceProvider;
    this._labels.internalValue = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_to_pce_certificate_authentication_id - computed: false, optional: true, required: false
  private _agentToPceCertificateAuthenticationId?: string; 
  public get agentToPceCertificateAuthenticationId() {
    return this.getStringAttribute('agent_to_pce_certificate_authentication_id');
  }
  public set agentToPceCertificateAuthenticationId(value: string) {
    this._agentToPceCertificateAuthenticationId = value;
  }
  public resetAgentToPceCertificateAuthenticationId() {
    this._agentToPceCertificateAuthenticationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentToPceCertificateAuthenticationIdInput() {
    return this._agentToPceCertificateAuthenticationId;
  }

  // blocked_connection_action - computed: true, optional: false, required: false
  public get blockedConnectionAction() {
    return this.getStringAttribute('blocked_connection_action');
  }

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // container_cluster - computed: true, optional: false, required: false
  private _containerCluster = new ManagedWorkloadContainerClusterList(this, "container_cluster", false);
  public get containerCluster() {
    return this._containerCluster;
  }

  // containers_inherit_host_policy - computed: true, optional: false, required: false
  public get containersInheritHostPolicy() {
    return this.getBooleanAttribute('containers_inherit_host_policy');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // data_center - computed: false, optional: true, required: false
  private _dataCenter?: string; 
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }
  public set dataCenter(value: string) {
    this._dataCenter = value;
  }
  public resetDataCenter() {
    this._dataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
  }

  // data_center_zone - computed: false, optional: true, required: false
  private _dataCenterZone?: string; 
  public get dataCenterZone() {
    return this.getStringAttribute('data_center_zone');
  }
  public set dataCenterZone(value: string) {
    this._dataCenterZone = value;
  }
  public resetDataCenterZone() {
    this._dataCenterZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterZoneInput() {
    return this._dataCenterZone;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
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

  // detected_vulnerabilities - computed: true, optional: false, required: false
  private _detectedVulnerabilities = new ManagedWorkloadDetectedVulnerabilitiesList(this, "detected_vulnerabilities", false);
  public get detectedVulnerabilities() {
    return this._detectedVulnerabilities;
  }

  // distinguished_name - computed: true, optional: false, required: false
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // firewall_coexistence - computed: true, optional: false, required: false
  private _firewallCoexistence = new ManagedWorkloadFirewallCoexistenceList(this, "firewall_coexistence", false);
  public get firewallCoexistence() {
    return this._firewallCoexistence;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // ignored_interface_names - computed: false, optional: true, required: false
  private _ignoredInterfaceNames?: string[]; 
  public get ignoredInterfaceNames() {
    return this.getListAttribute('ignored_interface_names');
  }
  public set ignoredInterfaceNames(value: string[]) {
    this._ignoredInterfaceNames = value;
  }
  public resetIgnoredInterfaceNames() {
    this._ignoredInterfaceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredInterfaceNamesInput() {
    return this._ignoredInterfaceNames;
  }

  // ike_authentication_certificate - computed: true, optional: false, required: false
  private _ikeAuthenticationCertificate = new cdktf.StringMap(this, "ike_authentication_certificate");
  public get ikeAuthenticationCertificate() {
    return this._ikeAuthenticationCertificate;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new ManagedWorkloadInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
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

  // online - computed: true, optional: false, required: false
  public get online() {
    return this.getBooleanAttribute('online');
  }

  // os_detail - computed: true, optional: false, required: false
  public get osDetail() {
    return this.getStringAttribute('os_detail');
  }

  // os_id - computed: true, optional: false, required: false
  public get osId() {
    return this.getStringAttribute('os_id');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // selectively_enforced_services - computed: true, optional: false, required: false
  private _selectivelyEnforcedServices = new ManagedWorkloadSelectivelyEnforcedServicesList(this, "selectively_enforced_services", false);
  public get selectivelyEnforcedServices() {
    return this._selectivelyEnforcedServices;
  }

  // service_principal_name - computed: false, optional: true, required: false
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  public resetServicePrincipalName() {
    this._servicePrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName;
  }

  // service_provider - computed: false, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // services - computed: true, optional: false, required: false
  private _services = new ManagedWorkloadServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // ven - computed: true, optional: false, required: false
  private _ven = new cdktf.StringMap(this, "ven");
  public get ven() {
    return this._ven;
  }

  // visibility_level - computed: true, optional: false, required: false
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }

  // vulnerabilities_summary - computed: true, optional: false, required: false
  private _vulnerabilitiesSummary = new ManagedWorkloadVulnerabilitiesSummaryList(this, "vulnerabilities_summary", false);
  public get vulnerabilitiesSummary() {
    return this._vulnerabilitiesSummary;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ManagedWorkloadLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ManagedWorkloadLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_to_pce_certificate_authentication_id: cdktf.stringToTerraform(this._agentToPceCertificateAuthenticationId),
      data_center: cdktf.stringToTerraform(this._dataCenter),
      data_center_zone: cdktf.stringToTerraform(this._dataCenterZone),
      description: cdktf.stringToTerraform(this._description),
      enforcement_mode: cdktf.stringToTerraform(this._enforcementMode),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      ignored_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredInterfaceNames),
      name: cdktf.stringToTerraform(this._name),
      service_principal_name: cdktf.stringToTerraform(this._servicePrincipalName),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
      labels: cdktf.listMapper(managedWorkloadLabelsToTerraform, true)(this._labels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_to_pce_certificate_authentication_id: {
        value: cdktf.stringToHclTerraform(this._agentToPceCertificateAuthenticationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center: {
        value: cdktf.stringToHclTerraform(this._dataCenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center_zone: {
        value: cdktf.stringToHclTerraform(this._dataCenterZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_mode: {
        value: cdktf.stringToHclTerraform(this._enforcementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      ignored_interface_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredInterfaceNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal_name: {
        value: cdktf.stringToHclTerraform(this._servicePrincipalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(managedWorkloadLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagedWorkloadLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
