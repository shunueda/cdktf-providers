// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnmanagedWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * PKI Certificate identifier to be used by the PCE for authenticating the VEN. The ID should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#agent_to_pce_certificate_authentication_id UnmanagedWorkload#agent_to_pce_certificate_authentication_id}
  */
  readonly agentToPceCertificateAuthenticationId?: string;
  /**
  * Data center for Workload. The data_center should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#data_center UnmanagedWorkload#data_center}
  */
  readonly dataCenter?: string;
  /**
  * Data center Zone for Workload. The data_center_zone should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#data_center_zone UnmanagedWorkload#data_center_zone}
  */
  readonly dataCenterZone?: string;
  /**
  * The long description of the workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#description UnmanagedWorkload#description}
  */
  readonly description?: string;
  /**
  * X.509 Subject distinguished name. The name should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#distinguished_name UnmanagedWorkload#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Enforcement mode of workload(s) to return. Allowed values for enforcement modes are "idle","visibility_only","full", and "selective". Default value: "visibility_only" 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#enforcement_mode UnmanagedWorkload#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#external_data_reference UnmanagedWorkload#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#external_data_set UnmanagedWorkload#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * The hostname of this workload. The hostname should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#hostname UnmanagedWorkload#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#id UnmanagedWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Workload. The name should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#name UnmanagedWorkload#name}
  */
  readonly name?: string;
  /**
  * Determines if this workload is online. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#online UnmanagedWorkload#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * Additional OS details - just displayed to end-user. The os_details should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#os_detail UnmanagedWorkload#os_detail}
  */
  readonly osDetail?: string;
  /**
  * OS identifier for Workload. The os_id should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#os_id UnmanagedWorkload#os_id}
  */
  readonly osId?: string;
  /**
  * The public IP address of the server. The public IP should in the IPv4 or IPv6 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#public_ip UnmanagedWorkload#public_ip}
  */
  readonly publicIp?: string;
  /**
  * The Kerberos Service Principal Name (SPN). The SPN should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#service_principal_name UnmanagedWorkload#service_principal_name}
  */
  readonly servicePrincipalName?: string;
  /**
  * Service provider for Workload. The service_provider should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#service_provider UnmanagedWorkload#service_provider}
  */
  readonly serviceProvider?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#interfaces UnmanagedWorkload#interfaces}
  */
  readonly interfaces?: UnmanagedWorkloadInterfaces[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#labels UnmanagedWorkload#labels}
  */
  readonly labels?: UnmanagedWorkloadLabels[] | cdktf.IResolvable;
}
export interface UnmanagedWorkloadContainerCluster {
}

export function unmanagedWorkloadContainerClusterToTerraform(struct?: UnmanagedWorkloadContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadContainerClusterToHclTerraform(struct?: UnmanagedWorkloadContainerCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadContainerClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadContainerCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadContainerCluster | undefined) {
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

export class UnmanagedWorkloadContainerClusterList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadContainerClusterOutputReference {
    return new UnmanagedWorkloadContainerClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposure {
}

export function unmanagedWorkloadDetectedVulnerabilitiesPortWideExposureToTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadDetectedVulnerabilitiesPortWideExposureToHclTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposure | undefined) {
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

export class UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposureList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposureOutputReference {
    return new UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadDetectedVulnerabilitiesVulnerability {
}

export function unmanagedWorkloadDetectedVulnerabilitiesVulnerabilityToTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadDetectedVulnerabilitiesVulnerabilityToHclTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesVulnerability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadDetectedVulnerabilitiesVulnerability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadDetectedVulnerabilitiesVulnerability | undefined) {
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

export class UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityOutputReference {
    return new UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReport {
}

export function unmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReportToTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReportToHclTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReport | undefined) {
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

export class UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReportList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReportOutputReference {
    return new UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadDetectedVulnerabilitiesWorkload {
}

export function unmanagedWorkloadDetectedVulnerabilitiesWorkloadToTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadDetectedVulnerabilitiesWorkloadToHclTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilitiesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadDetectedVulnerabilitiesWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadDetectedVulnerabilitiesWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadDetectedVulnerabilitiesWorkload | undefined) {
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

export class UnmanagedWorkloadDetectedVulnerabilitiesWorkloadList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadDetectedVulnerabilitiesWorkloadOutputReference {
    return new UnmanagedWorkloadDetectedVulnerabilitiesWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadDetectedVulnerabilities {
}

export function unmanagedWorkloadDetectedVulnerabilitiesToTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadDetectedVulnerabilitiesToHclTerraform(struct?: UnmanagedWorkloadDetectedVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadDetectedVulnerabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadDetectedVulnerabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadDetectedVulnerabilities | undefined) {
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
  private _portWideExposure = new UnmanagedWorkloadDetectedVulnerabilitiesPortWideExposureList(this, "port_wide_exposure", false);
  public get portWideExposure() {
    return this._portWideExposure;
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getNumberAttribute('proto');
  }

  // vulnerability - computed: true, optional: false, required: false
  private _vulnerability = new UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityList(this, "vulnerability", true);
  public get vulnerability() {
    return this._vulnerability;
  }

  // vulnerability_report - computed: true, optional: false, required: false
  private _vulnerabilityReport = new UnmanagedWorkloadDetectedVulnerabilitiesVulnerabilityReportList(this, "vulnerability_report", true);
  public get vulnerabilityReport() {
    return this._vulnerabilityReport;
  }

  // workload - computed: true, optional: false, required: false
  private _workload = new UnmanagedWorkloadDetectedVulnerabilitiesWorkloadList(this, "workload", false);
  public get workload() {
    return this._workload;
  }
}

export class UnmanagedWorkloadDetectedVulnerabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadDetectedVulnerabilitiesOutputReference {
    return new UnmanagedWorkloadDetectedVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadFirewallCoexistence {
}

export function unmanagedWorkloadFirewallCoexistenceToTerraform(struct?: UnmanagedWorkloadFirewallCoexistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadFirewallCoexistenceToHclTerraform(struct?: UnmanagedWorkloadFirewallCoexistence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadFirewallCoexistenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadFirewallCoexistence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadFirewallCoexistence | undefined) {
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

export class UnmanagedWorkloadFirewallCoexistenceList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadFirewallCoexistenceOutputReference {
    return new UnmanagedWorkloadFirewallCoexistenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadSelectivelyEnforcedServices {
}

export function unmanagedWorkloadSelectivelyEnforcedServicesToTerraform(struct?: UnmanagedWorkloadSelectivelyEnforcedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadSelectivelyEnforcedServicesToHclTerraform(struct?: UnmanagedWorkloadSelectivelyEnforcedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadSelectivelyEnforcedServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadSelectivelyEnforcedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadSelectivelyEnforcedServices | undefined) {
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

export class UnmanagedWorkloadSelectivelyEnforcedServicesList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadSelectivelyEnforcedServicesOutputReference {
    return new UnmanagedWorkloadSelectivelyEnforcedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadServicesOpenServicePorts {
}

export function unmanagedWorkloadServicesOpenServicePortsToTerraform(struct?: UnmanagedWorkloadServicesOpenServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadServicesOpenServicePortsToHclTerraform(struct?: UnmanagedWorkloadServicesOpenServicePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadServicesOpenServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadServicesOpenServicePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadServicesOpenServicePorts | undefined) {
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

export class UnmanagedWorkloadServicesOpenServicePortsList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadServicesOpenServicePortsOutputReference {
    return new UnmanagedWorkloadServicesOpenServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadServices {
}

export function unmanagedWorkloadServicesToTerraform(struct?: UnmanagedWorkloadServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadServicesToHclTerraform(struct?: UnmanagedWorkloadServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadServices | undefined) {
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
  private _openServicePorts = new UnmanagedWorkloadServicesOpenServicePortsList(this, "open_service_ports", false);
  public get openServicePorts() {
    return this._openServicePorts;
  }

  // uptime_seconds - computed: true, optional: false, required: false
  public get uptimeSeconds() {
    return this.getNumberAttribute('uptime_seconds');
  }
}

export class UnmanagedWorkloadServicesList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadServicesOutputReference {
    return new UnmanagedWorkloadServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure {
}

export function unmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureToTerraform(struct?: UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureToHclTerraform(struct?: UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposure | undefined) {
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

export class UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference {
    return new UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadVulnerabilitiesSummary {
}

export function unmanagedWorkloadVulnerabilitiesSummaryToTerraform(struct?: UnmanagedWorkloadVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function unmanagedWorkloadVulnerabilitiesSummaryToHclTerraform(struct?: UnmanagedWorkloadVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UnmanagedWorkloadVulnerabilitiesSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadVulnerabilitiesSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadVulnerabilitiesSummary | undefined) {
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
  private _vulnerablePortWideExposure = new UnmanagedWorkloadVulnerabilitiesSummaryVulnerablePortWideExposureList(this, "vulnerable_port_wide_exposure", false);
  public get vulnerablePortWideExposure() {
    return this._vulnerablePortWideExposure;
  }
}

export class UnmanagedWorkloadVulnerabilitiesSummaryList extends cdktf.ComplexList {

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
  public get(index: number): UnmanagedWorkloadVulnerabilitiesSummaryOutputReference {
    return new UnmanagedWorkloadVulnerabilitiesSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadInterfaces {
  /**
  * Interface IP address. Must be in IPv4 or IPv6 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#address UnmanagedWorkload#address}
  */
  readonly address: string;
  /**
  * Interface CIDR block bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#cidr_block UnmanagedWorkload#cidr_block}
  */
  readonly cidrBlock?: number;
  /**
  * Interface Default Gateway IP address. Must be in IPv4 or IPv6 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#default_gateway_address UnmanagedWorkload#default_gateway_address}
  */
  readonly defaultGatewayAddress?: string;
  /**
  * User-friendly interface name. Can be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#friendly_name UnmanagedWorkload#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Interface link state. Allowed values are "up", "down", and "unknown"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#link_state UnmanagedWorkload#link_state}
  */
  readonly linkState?: string;
  /**
  * Interface name. Can be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#name UnmanagedWorkload#name}
  */
  readonly name: string;
}

export function unmanagedWorkloadInterfacesToTerraform(struct?: UnmanagedWorkloadInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cidr_block: cdktf.numberToTerraform(struct!.cidrBlock),
    default_gateway_address: cdktf.stringToTerraform(struct!.defaultGatewayAddress),
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    link_state: cdktf.stringToTerraform(struct!.linkState),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function unmanagedWorkloadInterfacesToHclTerraform(struct?: UnmanagedWorkloadInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.numberToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.defaultGatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_state: {
      value: cdktf.stringToHclTerraform(struct!.linkState),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnmanagedWorkloadInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._defaultGatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGatewayAddress = this._defaultGatewayAddress;
    }
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    if (this._linkState !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkState = this._linkState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnmanagedWorkloadInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cidrBlock = undefined;
      this._defaultGatewayAddress = undefined;
      this._friendlyName = undefined;
      this._linkState = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cidrBlock = value.cidrBlock;
      this._defaultGatewayAddress = value.defaultGatewayAddress;
      this._friendlyName = value.friendlyName;
      this._linkState = value.linkState;
      this._name = value.name;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: number; 
  public get cidrBlock() {
    return this.getNumberAttribute('cidr_block');
  }
  public set cidrBlock(value: number) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // default_gateway_address - computed: false, optional: true, required: false
  private _defaultGatewayAddress?: string; 
  public get defaultGatewayAddress() {
    return this.getStringAttribute('default_gateway_address');
  }
  public set defaultGatewayAddress(value: string) {
    this._defaultGatewayAddress = value;
  }
  public resetDefaultGatewayAddress() {
    this._defaultGatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayAddressInput() {
    return this._defaultGatewayAddress;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // link_state - computed: false, optional: true, required: false
  private _linkState?: string; 
  public get linkState() {
    return this.getStringAttribute('link_state');
  }
  public set linkState(value: string) {
    this._linkState = value;
  }
  public resetLinkState() {
    this._linkState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateInput() {
    return this._linkState;
  }

  // loopback - computed: true, optional: false, required: false
  public get loopback() {
    return this.getBooleanAttribute('loopback');
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

export class UnmanagedWorkloadInterfacesList extends cdktf.ComplexList {
  public internalValue? : UnmanagedWorkloadInterfaces[] | cdktf.IResolvable

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
  public get(index: number): UnmanagedWorkloadInterfacesOutputReference {
    return new UnmanagedWorkloadInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnmanagedWorkloadLabels {
  /**
  * URI of label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#href UnmanagedWorkload#href}
  */
  readonly href: string;
}

export function unmanagedWorkloadLabelsToTerraform(struct?: UnmanagedWorkloadLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function unmanagedWorkloadLabelsToHclTerraform(struct?: UnmanagedWorkloadLabels | cdktf.IResolvable): any {
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

export class UnmanagedWorkloadLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnmanagedWorkloadLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UnmanagedWorkloadLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class UnmanagedWorkloadLabelsList extends cdktf.ComplexList {
  public internalValue? : UnmanagedWorkloadLabels[] | cdktf.IResolvable

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
  public get(index: number): UnmanagedWorkloadLabelsOutputReference {
    return new UnmanagedWorkloadLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload illumio-core_unmanaged_workload}
*/
export class UnmanagedWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_unmanaged_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnmanagedWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnmanagedWorkload to import
  * @param importFromId The id of the existing UnmanagedWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnmanagedWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_unmanaged_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/unmanaged_workload illumio-core_unmanaged_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnmanagedWorkloadConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UnmanagedWorkloadConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_unmanaged_workload',
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
    this._distinguishedName = config.distinguishedName;
    this._enforcementMode = config.enforcementMode;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._hostname = config.hostname;
    this._id = config.id;
    this._name = config.name;
    this._online = config.online;
    this._osDetail = config.osDetail;
    this._osId = config.osId;
    this._publicIp = config.publicIp;
    this._servicePrincipalName = config.servicePrincipalName;
    this._serviceProvider = config.serviceProvider;
    this._interfaces.internalValue = config.interfaces;
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
  private _containerCluster = new UnmanagedWorkloadContainerClusterList(this, "container_cluster", false);
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
  private _detectedVulnerabilities = new UnmanagedWorkloadDetectedVulnerabilitiesList(this, "detected_vulnerabilities", false);
  public get detectedVulnerabilities() {
    return this._detectedVulnerabilities;
  }

  // distinguished_name - computed: false, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
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
  private _firewallCoexistence = new UnmanagedWorkloadFirewallCoexistenceList(this, "firewall_coexistence", false);
  public get firewallCoexistence() {
    return this._firewallCoexistence;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ignored_interface_names - computed: true, optional: false, required: false
  public get ignoredInterfaceNames() {
    return this.getListAttribute('ignored_interface_names');
  }

  // ike_authentication_certificate - computed: true, optional: false, required: false
  private _ikeAuthenticationCertificate = new cdktf.StringMap(this, "ike_authentication_certificate");
  public get ikeAuthenticationCertificate() {
    return this._ikeAuthenticationCertificate;
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

  // online - computed: false, optional: true, required: false
  private _online?: boolean | cdktf.IResolvable; 
  public get online() {
    return this.getBooleanAttribute('online');
  }
  public set online(value: boolean | cdktf.IResolvable) {
    this._online = value;
  }
  public resetOnline() {
    this._online = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineInput() {
    return this._online;
  }

  // os_detail - computed: false, optional: true, required: false
  private _osDetail?: string; 
  public get osDetail() {
    return this.getStringAttribute('os_detail');
  }
  public set osDetail(value: string) {
    this._osDetail = value;
  }
  public resetOsDetail() {
    this._osDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDetailInput() {
    return this._osDetail;
  }

  // os_id - computed: false, optional: true, required: false
  private _osId?: string; 
  public get osId() {
    return this.getStringAttribute('os_id');
  }
  public set osId(value: string) {
    this._osId = value;
  }
  public resetOsId() {
    this._osId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osIdInput() {
    return this._osId;
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // selectively_enforced_services - computed: true, optional: false, required: false
  private _selectivelyEnforcedServices = new UnmanagedWorkloadSelectivelyEnforcedServicesList(this, "selectively_enforced_services", false);
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
  private _services = new UnmanagedWorkloadServicesList(this, "services", false);
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
  private _vulnerabilitiesSummary = new UnmanagedWorkloadVulnerabilitiesSummaryList(this, "vulnerabilities_summary", false);
  public get vulnerabilitiesSummary() {
    return this._vulnerabilitiesSummary;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new UnmanagedWorkloadInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: UnmanagedWorkloadInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new UnmanagedWorkloadLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: UnmanagedWorkloadLabels[] | cdktf.IResolvable) {
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
      distinguished_name: cdktf.stringToTerraform(this._distinguishedName),
      enforcement_mode: cdktf.stringToTerraform(this._enforcementMode),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      online: cdktf.booleanToTerraform(this._online),
      os_detail: cdktf.stringToTerraform(this._osDetail),
      os_id: cdktf.stringToTerraform(this._osId),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      service_principal_name: cdktf.stringToTerraform(this._servicePrincipalName),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
      interfaces: cdktf.listMapper(unmanagedWorkloadInterfacesToTerraform, true)(this._interfaces.internalValue),
      labels: cdktf.listMapper(unmanagedWorkloadLabelsToTerraform, true)(this._labels.internalValue),
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
      distinguished_name: {
        value: cdktf.stringToHclTerraform(this._distinguishedName),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      online: {
        value: cdktf.booleanToHclTerraform(this._online),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_detail: {
        value: cdktf.stringToHclTerraform(this._osDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_id: {
        value: cdktf.stringToHclTerraform(this._osId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
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
      interfaces: {
        value: cdktf.listMapperHcl(unmanagedWorkloadInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UnmanagedWorkloadInterfacesList",
      },
      labels: {
        value: cdktf.listMapperHcl(unmanagedWorkloadLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UnmanagedWorkloadLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
