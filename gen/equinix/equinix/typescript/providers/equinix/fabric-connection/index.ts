// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection additional information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#additional_info FabricConnection#additional_info}
  */
  readonly additionalInfo?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Connection bandwidth in Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#bandwidth FabricConnection#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Customer-provided connection description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#description FabricConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#id FabricConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Connection name. An alpha-numeric 24 characters string which can include only hyphens and underscores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#name FabricConnection#name}
  */
  readonly name: string;
  /**
  * Defines the connection type like EVPL_VC, EPL_VC, IPWAN_VC, IP_VC, ACCESS_EPL_VC, EVPLAN_VC, EPLAN_VC, EIA_VC, IA_VC, EC_VC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type: string;
  /**
  * a_side block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#a_side FabricConnection#a_side}
  */
  readonly aSide: FabricConnectionASide;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#notifications FabricConnection#notifications}
  */
  readonly notifications: FabricConnectionNotifications[] | cdktf.IResolvable;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#order FabricConnection#order}
  */
  readonly order?: FabricConnectionOrder;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#project FabricConnection#project}
  */
  readonly project?: FabricConnectionProject;
  /**
  * redundancy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#redundancy FabricConnection#redundancy}
  */
  readonly redundancy?: FabricConnectionRedundancy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#timeouts FabricConnection#timeouts}
  */
  readonly timeouts?: FabricConnectionTimeouts;
  /**
  * z_side block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#z_side FabricConnection#z_side}
  */
  readonly zSide: FabricConnectionZSide;
}
export interface FabricConnectionAccount {
}

export function fabricConnectionAccountToTerraform(struct?: FabricConnectionAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionAccountToHclTerraform(struct?: FabricConnectionAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }

  // global_cust_id - computed: true, optional: false, required: false
  public get globalCustId() {
    return this.getStringAttribute('global_cust_id');
  }

  // global_org_id - computed: true, optional: false, required: false
  public get globalOrgId() {
    return this.getStringAttribute('global_org_id');
  }

  // global_organization_name - computed: true, optional: false, required: false
  public get globalOrganizationName() {
    return this.getStringAttribute('global_organization_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}

export class FabricConnectionAccountList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionAccountOutputReference {
    return new FabricConnectionAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionChangeLog {
}

export function fabricConnectionChangeLogToTerraform(struct?: FabricConnectionChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionChangeLogToHclTerraform(struct?: FabricConnectionChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionChangeLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}

export class FabricConnectionChangeLogList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionChangeLogOutputReference {
    return new FabricConnectionChangeLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionOperationErrorsAdditionalInfo {
}

export function fabricConnectionOperationErrorsAdditionalInfoToTerraform(struct?: FabricConnectionOperationErrorsAdditionalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionOperationErrorsAdditionalInfoToHclTerraform(struct?: FabricConnectionOperationErrorsAdditionalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionOperationErrorsAdditionalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionOperationErrorsAdditionalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionOperationErrorsAdditionalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class FabricConnectionOperationErrorsAdditionalInfoList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionOperationErrorsAdditionalInfoOutputReference {
    return new FabricConnectionOperationErrorsAdditionalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionOperationErrors {
}

export function fabricConnectionOperationErrorsToTerraform(struct?: FabricConnectionOperationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionOperationErrorsToHclTerraform(struct?: FabricConnectionOperationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionOperationErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionOperationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionOperationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_info - computed: true, optional: false, required: false
  private _additionalInfo = new FabricConnectionOperationErrorsAdditionalInfoList(this, "additional_info", false);
  public get additionalInfo() {
    return this._additionalInfo;
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // help - computed: true, optional: false, required: false
  public get help() {
    return this.getStringAttribute('help');
  }
}

export class FabricConnectionOperationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionOperationErrorsOutputReference {
    return new FabricConnectionOperationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionOperation {
}

export function fabricConnectionOperationToTerraform(struct?: FabricConnectionOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionOperationToHclTerraform(struct?: FabricConnectionOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equinix_status - computed: true, optional: false, required: false
  public get equinixStatus() {
    return this.getStringAttribute('equinix_status');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new FabricConnectionOperationErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // provider_status - computed: true, optional: false, required: false
  public get providerStatus() {
    return this.getStringAttribute('provider_status');
  }
}

export class FabricConnectionOperationList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionOperationOutputReference {
    return new FabricConnectionOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionASideAccessPointAccount {
}

export function fabricConnectionASideAccessPointAccountToTerraform(struct?: FabricConnectionASideAccessPointAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionASideAccessPointAccountToHclTerraform(struct?: FabricConnectionASideAccessPointAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionASideAccessPointAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionASideAccessPointAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointAccount | cdktf.IResolvable | undefined) {
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

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }

  // global_cust_id - computed: true, optional: false, required: false
  public get globalCustId() {
    return this.getStringAttribute('global_cust_id');
  }

  // global_org_id - computed: true, optional: false, required: false
  public get globalOrgId() {
    return this.getStringAttribute('global_org_id');
  }

  // global_organization_name - computed: true, optional: false, required: false
  public get globalOrganizationName() {
    return this.getStringAttribute('global_organization_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}

export class FabricConnectionASideAccessPointAccountList extends cdktf.ComplexList {
  public internalValue? : FabricConnectionASideAccessPointAccount[] | cdktf.IResolvable

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
  public get(index: number): FabricConnectionASideAccessPointAccountOutputReference {
    return new FabricConnectionASideAccessPointAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionASideAccessPointGateway {
  /**
  * Equinix-assigned virtual gateway identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionASideAccessPointGatewayToTerraform(struct?: FabricConnectionASideAccessPointGatewayOutputReference | FabricConnectionASideAccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideAccessPointGatewayToHclTerraform(struct?: FabricConnectionASideAccessPointGatewayOutputReference | FabricConnectionASideAccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASideAccessPointInterface {
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#id FabricConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned interface identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionASideAccessPointInterfaceToTerraform(struct?: FabricConnectionASideAccessPointInterfaceOutputReference | FabricConnectionASideAccessPointInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideAccessPointInterfaceToHclTerraform(struct?: FabricConnectionASideAccessPointInterfaceOutputReference | FabricConnectionASideAccessPointInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASideAccessPointLinkProtocol {
  /**
  * Type of the link protocol - UNTAGGED, DOT1Q, QINQ, EVPN_VXLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Vlan Customer Tag information, vlanCTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#vlan_c_tag FabricConnection#vlan_c_tag}
  */
  readonly vlanCTag?: number;
  /**
  * Vlan Provider Tag information, vlanSTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#vlan_s_tag FabricConnection#vlan_s_tag}
  */
  readonly vlanSTag?: number;
  /**
  * Vlan Tag information, vlanTag value specified for DOT1Q connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#vlan_tag FabricConnection#vlan_tag}
  */
  readonly vlanTag?: number;
}

export function fabricConnectionASideAccessPointLinkProtocolToTerraform(struct?: FabricConnectionASideAccessPointLinkProtocolOutputReference | FabricConnectionASideAccessPointLinkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    vlan_c_tag: cdktf.numberToTerraform(struct!.vlanCTag),
    vlan_s_tag: cdktf.numberToTerraform(struct!.vlanSTag),
    vlan_tag: cdktf.numberToTerraform(struct!.vlanTag),
  }
}


export function fabricConnectionASideAccessPointLinkProtocolToHclTerraform(struct?: FabricConnectionASideAccessPointLinkProtocolOutputReference | FabricConnectionASideAccessPointLinkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_c_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanCTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_s_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanSTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointLinkProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointLinkProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanCTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanCTag = this._vlanCTag;
    }
    if (this._vlanSTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanSTag = this._vlanSTag;
    }
    if (this._vlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTag = this._vlanTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointLinkProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._vlanCTag = undefined;
      this._vlanSTag = undefined;
      this._vlanTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._vlanCTag = value.vlanCTag;
      this._vlanSTag = value.vlanSTag;
      this._vlanTag = value.vlanTag;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan_c_tag - computed: true, optional: true, required: false
  private _vlanCTag?: number; 
  public get vlanCTag() {
    return this.getNumberAttribute('vlan_c_tag');
  }
  public set vlanCTag(value: number) {
    this._vlanCTag = value;
  }
  public resetVlanCTag() {
    this._vlanCTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCTagInput() {
    return this._vlanCTag;
  }

  // vlan_s_tag - computed: true, optional: true, required: false
  private _vlanSTag?: number; 
  public get vlanSTag() {
    return this.getNumberAttribute('vlan_s_tag');
  }
  public set vlanSTag(value: number) {
    this._vlanSTag = value;
  }
  public resetVlanSTag() {
    this._vlanSTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanSTagInput() {
    return this._vlanSTag;
  }

  // vlan_tag - computed: true, optional: true, required: false
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }
}
export interface FabricConnectionASideAccessPointLocation {
  /**
  * IBX Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#ibx FabricConnection#ibx}
  */
  readonly ibx?: string;
  /**
  * Access point metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#metro_code FabricConnection#metro_code}
  */
  readonly metroCode?: string;
  /**
  * Access point metro name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#metro_name FabricConnection#metro_name}
  */
  readonly metroName?: string;
  /**
  * Access point region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#region FabricConnection#region}
  */
  readonly region?: string;
}

export function fabricConnectionASideAccessPointLocationToTerraform(struct?: FabricConnectionASideAccessPointLocationOutputReference | FabricConnectionASideAccessPointLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ibx: cdktf.stringToTerraform(struct!.ibx),
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
    metro_name: cdktf.stringToTerraform(struct!.metroName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function fabricConnectionASideAccessPointLocationToHclTerraform(struct?: FabricConnectionASideAccessPointLocationOutputReference | FabricConnectionASideAccessPointLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ibx: {
      value: cdktf.stringToHclTerraform(struct!.ibx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_code: {
      value: cdktf.stringToHclTerraform(struct!.metroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_name: {
      value: cdktf.stringToHclTerraform(struct!.metroName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ibx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibx = this._ibx;
    }
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    if (this._metroName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroName = this._metroName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ibx = undefined;
      this._metroCode = undefined;
      this._metroName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ibx = value.ibx;
      this._metroCode = value.metroCode;
      this._metroName = value.metroName;
      this._region = value.region;
    }
  }

  // ibx - computed: true, optional: true, required: false
  private _ibx?: string; 
  public get ibx() {
    return this.getStringAttribute('ibx');
  }
  public set ibx(value: string) {
    this._ibx = value;
  }
  public resetIbx() {
    this._ibx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibxInput() {
    return this._ibx;
  }

  // metro_code - computed: true, optional: true, required: false
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  public resetMetroCode() {
    this._metroCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // metro_name - computed: true, optional: true, required: false
  private _metroName?: string; 
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }
  public set metroName(value: string) {
    this._metroName = value;
  }
  public resetMetroName() {
    this._metroName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroNameInput() {
    return this._metroName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface FabricConnectionASideAccessPointNetwork {
  /**
  * Equinix-assigned Network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid: string;
}

export function fabricConnectionASideAccessPointNetworkToTerraform(struct?: FabricConnectionASideAccessPointNetworkOutputReference | FabricConnectionASideAccessPointNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideAccessPointNetworkToHclTerraform(struct?: FabricConnectionASideAccessPointNetworkOutputReference | FabricConnectionASideAccessPointNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASideAccessPointPortRedundancy {
}

export function fabricConnectionASideAccessPointPortRedundancyToTerraform(struct?: FabricConnectionASideAccessPointPortRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionASideAccessPointPortRedundancyToHclTerraform(struct?: FabricConnectionASideAccessPointPortRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionASideAccessPointPortRedundancyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionASideAccessPointPortRedundancy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointPortRedundancy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}

export class FabricConnectionASideAccessPointPortRedundancyList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionASideAccessPointPortRedundancyOutputReference {
    return new FabricConnectionASideAccessPointPortRedundancyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionASideAccessPointPort {
  /**
  * Equinix-assigned Port identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionASideAccessPointPortToTerraform(struct?: FabricConnectionASideAccessPointPortOutputReference | FabricConnectionASideAccessPointPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideAccessPointPortToHclTerraform(struct?: FabricConnectionASideAccessPointPortOutputReference | FabricConnectionASideAccessPointPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
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

  // redundancy - computed: true, optional: false, required: false
  private _redundancy = new FabricConnectionASideAccessPointPortRedundancyList(this, "redundancy", true);
  public get redundancy() {
    return this._redundancy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASideAccessPointProfileAccessPointTypeConfigs {
}

export function fabricConnectionASideAccessPointProfileAccessPointTypeConfigsToTerraform(struct?: FabricConnectionASideAccessPointProfileAccessPointTypeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionASideAccessPointProfileAccessPointTypeConfigsToHclTerraform(struct?: FabricConnectionASideAccessPointProfileAccessPointTypeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionASideAccessPointProfileAccessPointTypeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionASideAccessPointProfileAccessPointTypeConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointProfileAccessPointTypeConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class FabricConnectionASideAccessPointProfileAccessPointTypeConfigsList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionASideAccessPointProfileAccessPointTypeConfigsOutputReference {
    return new FabricConnectionASideAccessPointProfileAccessPointTypeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionASideAccessPointProfile {
  /**
  * Service profile type - L2_PROFILE, L3_PROFILE, ECIA_PROFILE, ECMC_PROFILE, IA_PROFILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type: string;
  /**
  * Equinix assigned service profile identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid: string;
}

export function fabricConnectionASideAccessPointProfileToTerraform(struct?: FabricConnectionASideAccessPointProfileOutputReference | FabricConnectionASideAccessPointProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideAccessPointProfileToHclTerraform(struct?: FabricConnectionASideAccessPointProfileOutputReference | FabricConnectionASideAccessPointProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // access_point_type_configs - computed: true, optional: false, required: false
  private _accessPointTypeConfigs = new FabricConnectionASideAccessPointProfileAccessPointTypeConfigsList(this, "access_point_type_configs", false);
  public get accessPointTypeConfigs() {
    return this._accessPointTypeConfigs;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASideAccessPointRouter {
  /**
  * Equinix-assigned virtual gateway identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionASideAccessPointRouterToTerraform(struct?: FabricConnectionASideAccessPointRouterOutputReference | FabricConnectionASideAccessPointRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideAccessPointRouterToHclTerraform(struct?: FabricConnectionASideAccessPointRouterOutputReference | FabricConnectionASideAccessPointRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASideAccessPointVirtualDevice {
  /**
  * Customer-assigned Virtual Device Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#name FabricConnection#name}
  */
  readonly name?: string;
  /**
  * Virtual Device type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned Virtual Device identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid: string;
}

export function fabricConnectionASideAccessPointVirtualDeviceToTerraform(struct?: FabricConnectionASideAccessPointVirtualDeviceOutputReference | FabricConnectionASideAccessPointVirtualDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideAccessPointVirtualDeviceToHclTerraform(struct?: FabricConnectionASideAccessPointVirtualDeviceOutputReference | FabricConnectionASideAccessPointVirtualDevice): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointVirtualDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPointVirtualDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPointVirtualDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASideAccessPoint {
  /**
  * Authentication key for provider based connections or Metal-Fabric Integration connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#authentication_key FabricConnection#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Peering Type- PRIVATE,MICROSOFT,PUBLIC, MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#peering_type FabricConnection#peering_type}
  */
  readonly peeringType?: string;
  /**
  * Network role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#role FabricConnection#role}
  */
  readonly role?: string;
  /**
  * Access point seller region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#seller_region FabricConnection#seller_region}
  */
  readonly sellerRegion?: string;
  /**
  * Access point type - COLO, VD, VG, SP, IGW, SUBNET, CLOUD_ROUTER, NETWORK, METAL_NETWORK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#account FabricConnection#account}
  */
  readonly account?: FabricConnectionASideAccessPointAccount[] | cdktf.IResolvable;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#gateway FabricConnection#gateway}
  */
  readonly gateway?: FabricConnectionASideAccessPointGateway;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#interface FabricConnection#interface}
  */
  readonly interface?: FabricConnectionASideAccessPointInterface;
  /**
  * link_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#link_protocol FabricConnection#link_protocol}
  */
  readonly linkProtocol?: FabricConnectionASideAccessPointLinkProtocol;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#location FabricConnection#location}
  */
  readonly location?: FabricConnectionASideAccessPointLocation;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#network FabricConnection#network}
  */
  readonly network?: FabricConnectionASideAccessPointNetwork;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#port FabricConnection#port}
  */
  readonly port?: FabricConnectionASideAccessPointPort;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#profile FabricConnection#profile}
  */
  readonly profile?: FabricConnectionASideAccessPointProfile;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#router FabricConnection#router}
  */
  readonly router?: FabricConnectionASideAccessPointRouter;
  /**
  * virtual_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#virtual_device FabricConnection#virtual_device}
  */
  readonly virtualDevice?: FabricConnectionASideAccessPointVirtualDevice;
}

export function fabricConnectionASideAccessPointToTerraform(struct?: FabricConnectionASideAccessPointOutputReference | FabricConnectionASideAccessPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    peering_type: cdktf.stringToTerraform(struct!.peeringType),
    role: cdktf.stringToTerraform(struct!.role),
    seller_region: cdktf.stringToTerraform(struct!.sellerRegion),
    type: cdktf.stringToTerraform(struct!.type),
    account: cdktf.listMapper(fabricConnectionASideAccessPointAccountToTerraform, true)(struct!.account),
    gateway: fabricConnectionASideAccessPointGatewayToTerraform(struct!.gateway),
    interface: fabricConnectionASideAccessPointInterfaceToTerraform(struct!.interface),
    link_protocol: fabricConnectionASideAccessPointLinkProtocolToTerraform(struct!.linkProtocol),
    location: fabricConnectionASideAccessPointLocationToTerraform(struct!.location),
    network: fabricConnectionASideAccessPointNetworkToTerraform(struct!.network),
    port: fabricConnectionASideAccessPointPortToTerraform(struct!.port),
    profile: fabricConnectionASideAccessPointProfileToTerraform(struct!.profile),
    router: fabricConnectionASideAccessPointRouterToTerraform(struct!.router),
    virtual_device: fabricConnectionASideAccessPointVirtualDeviceToTerraform(struct!.virtualDevice),
  }
}


export function fabricConnectionASideAccessPointToHclTerraform(struct?: FabricConnectionASideAccessPointOutputReference | FabricConnectionASideAccessPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peering_type: {
      value: cdktf.stringToHclTerraform(struct!.peeringType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seller_region: {
      value: cdktf.stringToHclTerraform(struct!.sellerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktf.listMapperHcl(fabricConnectionASideAccessPointAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointAccountList",
    },
    gateway: {
      value: fabricConnectionASideAccessPointGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointGatewayList",
    },
    interface: {
      value: fabricConnectionASideAccessPointInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointInterfaceList",
    },
    link_protocol: {
      value: fabricConnectionASideAccessPointLinkProtocolToHclTerraform(struct!.linkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointLinkProtocolList",
    },
    location: {
      value: fabricConnectionASideAccessPointLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointLocationList",
    },
    network: {
      value: fabricConnectionASideAccessPointNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointNetworkList",
    },
    port: {
      value: fabricConnectionASideAccessPointPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointPortList",
    },
    profile: {
      value: fabricConnectionASideAccessPointProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointProfileList",
    },
    router: {
      value: fabricConnectionASideAccessPointRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointRouterList",
    },
    virtual_device: {
      value: fabricConnectionASideAccessPointVirtualDeviceToHclTerraform(struct!.virtualDevice),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointVirtualDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAccessPointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideAccessPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._peeringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringType = this._peeringType;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sellerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sellerRegion = this._sellerRegion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._linkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkProtocol = this._linkProtocol?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._virtualDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDevice = this._virtualDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAccessPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationKey = undefined;
      this._peeringType = undefined;
      this._role = undefined;
      this._sellerRegion = undefined;
      this._type = undefined;
      this._account.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._linkProtocol.internalValue = undefined;
      this._location.internalValue = undefined;
      this._network.internalValue = undefined;
      this._port.internalValue = undefined;
      this._profile.internalValue = undefined;
      this._router.internalValue = undefined;
      this._virtualDevice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationKey = value.authenticationKey;
      this._peeringType = value.peeringType;
      this._role = value.role;
      this._sellerRegion = value.sellerRegion;
      this._type = value.type;
      this._account.internalValue = value.account;
      this._gateway.internalValue = value.gateway;
      this._interface.internalValue = value.interface;
      this._linkProtocol.internalValue = value.linkProtocol;
      this._location.internalValue = value.location;
      this._network.internalValue = value.network;
      this._port.internalValue = value.port;
      this._profile.internalValue = value.profile;
      this._router.internalValue = value.router;
      this._virtualDevice.internalValue = value.virtualDevice;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // peering_type - computed: false, optional: true, required: false
  private _peeringType?: string; 
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  public resetPeeringType() {
    this._peeringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType;
  }

  // provider_connection_id - computed: true, optional: false, required: false
  public get providerConnectionId() {
    return this.getStringAttribute('provider_connection_id');
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // seller_region - computed: false, optional: true, required: false
  private _sellerRegion?: string; 
  public get sellerRegion() {
    return this.getStringAttribute('seller_region');
  }
  public set sellerRegion(value: string) {
    this._sellerRegion = value;
  }
  public resetSellerRegion() {
    this._sellerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sellerRegionInput() {
    return this._sellerRegion;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // account - computed: false, optional: true, required: false
  private _account = new FabricConnectionASideAccessPointAccountList(this, "account", true);
  public get account() {
    return this._account;
  }
  public putAccount(value: FabricConnectionASideAccessPointAccount[] | cdktf.IResolvable) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new FabricConnectionASideAccessPointGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: FabricConnectionASideAccessPointGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new FabricConnectionASideAccessPointInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FabricConnectionASideAccessPointInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // link_protocol - computed: false, optional: true, required: false
  private _linkProtocol = new FabricConnectionASideAccessPointLinkProtocolOutputReference(this, "link_protocol");
  public get linkProtocol() {
    return this._linkProtocol;
  }
  public putLinkProtocol(value: FabricConnectionASideAccessPointLinkProtocol) {
    this._linkProtocol.internalValue = value;
  }
  public resetLinkProtocol() {
    this._linkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProtocolInput() {
    return this._linkProtocol.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new FabricConnectionASideAccessPointLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FabricConnectionASideAccessPointLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new FabricConnectionASideAccessPointNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: FabricConnectionASideAccessPointNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new FabricConnectionASideAccessPointPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: FabricConnectionASideAccessPointPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new FabricConnectionASideAccessPointProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: FabricConnectionASideAccessPointProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new FabricConnectionASideAccessPointRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: FabricConnectionASideAccessPointRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // virtual_device - computed: false, optional: true, required: false
  private _virtualDevice = new FabricConnectionASideAccessPointVirtualDeviceOutputReference(this, "virtual_device");
  public get virtualDevice() {
    return this._virtualDevice;
  }
  public putVirtualDevice(value: FabricConnectionASideAccessPointVirtualDevice) {
    this._virtualDevice.internalValue = value;
  }
  public resetVirtualDevice() {
    this._virtualDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDeviceInput() {
    return this._virtualDevice.internalValue;
  }
}
export interface FabricConnectionASideAdditionalInfo {
  /**
  * Additional information key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#key FabricConnection#key}
  */
  readonly key?: string;
  /**
  * Additional information value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#value FabricConnection#value}
  */
  readonly value?: string;
}

export function fabricConnectionASideAdditionalInfoToTerraform(struct?: FabricConnectionASideAdditionalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fabricConnectionASideAdditionalInfoToHclTerraform(struct?: FabricConnectionASideAdditionalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideAdditionalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionASideAdditionalInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideAdditionalInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FabricConnectionASideAdditionalInfoList extends cdktf.ComplexList {
  public internalValue? : FabricConnectionASideAdditionalInfo[] | cdktf.IResolvable

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
  public get(index: number): FabricConnectionASideAdditionalInfoOutputReference {
    return new FabricConnectionASideAdditionalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionASideServiceToken {
  /**
  * Token type - VC_TOKEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned service token identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionASideServiceTokenToTerraform(struct?: FabricConnectionASideServiceTokenOutputReference | FabricConnectionASideServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionASideServiceTokenToHclTerraform(struct?: FabricConnectionASideServiceTokenOutputReference | FabricConnectionASideServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASideServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASideServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionASide {
  /**
  * access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#access_point FabricConnection#access_point}
  */
  readonly accessPoint?: FabricConnectionASideAccessPoint;
  /**
  * additional_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#additional_info FabricConnection#additional_info}
  */
  readonly additionalInfo?: FabricConnectionASideAdditionalInfo[] | cdktf.IResolvable;
  /**
  * service_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#service_token FabricConnection#service_token}
  */
  readonly serviceToken?: FabricConnectionASideServiceToken;
}

export function fabricConnectionASideToTerraform(struct?: FabricConnectionASideOutputReference | FabricConnectionASide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point: fabricConnectionASideAccessPointToTerraform(struct!.accessPoint),
    additional_info: cdktf.listMapper(fabricConnectionASideAdditionalInfoToTerraform, true)(struct!.additionalInfo),
    service_token: fabricConnectionASideServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function fabricConnectionASideToHclTerraform(struct?: FabricConnectionASideOutputReference | FabricConnectionASide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point: {
      value: fabricConnectionASideAccessPointToHclTerraform(struct!.accessPoint),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideAccessPointList",
    },
    additional_info: {
      value: cdktf.listMapperHcl(fabricConnectionASideAdditionalInfoToHclTerraform, true)(struct!.additionalInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FabricConnectionASideAdditionalInfoList",
    },
    service_token: {
      value: fabricConnectionASideServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionASideServiceTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionASideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionASide | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPoint = this._accessPoint?.internalValue;
    }
    if (this._additionalInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInfo = this._additionalInfo?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionASide | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPoint.internalValue = undefined;
      this._additionalInfo.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPoint.internalValue = value.accessPoint;
      this._additionalInfo.internalValue = value.additionalInfo;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // access_point - computed: false, optional: true, required: false
  private _accessPoint = new FabricConnectionASideAccessPointOutputReference(this, "access_point");
  public get accessPoint() {
    return this._accessPoint;
  }
  public putAccessPoint(value: FabricConnectionASideAccessPoint) {
    this._accessPoint.internalValue = value;
  }
  public resetAccessPoint() {
    this._accessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointInput() {
    return this._accessPoint.internalValue;
  }

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo = new FabricConnectionASideAdditionalInfoList(this, "additional_info", false);
  public get additionalInfo() {
    return this._additionalInfo;
  }
  public putAdditionalInfo(value: FabricConnectionASideAdditionalInfo[] | cdktf.IResolvable) {
    this._additionalInfo.internalValue = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new FabricConnectionASideServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: FabricConnectionASideServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}
export interface FabricConnectionNotifications {
  /**
  * Array of contact emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#emails FabricConnection#emails}
  */
  readonly emails: string[];
  /**
  * Send interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#send_interval FabricConnection#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Notification Type - ALL,CONNECTION_APPROVAL,SALES_REP_NOTIFICATIONS, NOTIFICATIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type: string;
}

export function fabricConnectionNotificationsToTerraform(struct?: FabricConnectionNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    send_interval: cdktf.stringToTerraform(struct!.sendInterval),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricConnectionNotificationsToHclTerraform(struct?: FabricConnectionNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_interval: {
      value: cdktf.stringToHclTerraform(struct!.sendInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class FabricConnectionNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._sendInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendInterval = this._sendInterval;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emails = undefined;
      this._sendInterval = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emails = value.emails;
      this._sendInterval = value.sendInterval;
      this._type = value.type;
    }
  }

  // emails - computed: false, optional: false, required: true
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // send_interval - computed: false, optional: true, required: false
  private _sendInterval?: string; 
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }
  public set sendInterval(value: string) {
    this._sendInterval = value;
  }
  public resetSendInterval() {
    this._sendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalInput() {
    return this._sendInterval;
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
}

export class FabricConnectionNotificationsList extends cdktf.ComplexList {
  public internalValue? : FabricConnectionNotifications[] | cdktf.IResolvable

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
  public get(index: number): FabricConnectionNotificationsOutputReference {
    return new FabricConnectionNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionOrder {
  /**
  * Billing tier for connection bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#billing_tier FabricConnection#billing_tier}
  */
  readonly billingTier?: string;
  /**
  * Order Identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#order_id FabricConnection#order_id}
  */
  readonly orderId?: string;
  /**
  * Order Reference Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#order_number FabricConnection#order_number}
  */
  readonly orderNumber?: string;
  /**
  * Purchase order number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#purchase_order_number FabricConnection#purchase_order_number}
  */
  readonly purchaseOrderNumber?: string;
  /**
  * Term length in months; valid values are 1, 12, 24, 36 where 1 is the default value (for on-demand case)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#term_length FabricConnection#term_length}
  */
  readonly termLength?: number;
}

export function fabricConnectionOrderToTerraform(struct?: FabricConnectionOrderOutputReference | FabricConnectionOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_tier: cdktf.stringToTerraform(struct!.billingTier),
    order_id: cdktf.stringToTerraform(struct!.orderId),
    order_number: cdktf.stringToTerraform(struct!.orderNumber),
    purchase_order_number: cdktf.stringToTerraform(struct!.purchaseOrderNumber),
    term_length: cdktf.numberToTerraform(struct!.termLength),
  }
}


export function fabricConnectionOrderToHclTerraform(struct?: FabricConnectionOrderOutputReference | FabricConnectionOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_tier: {
      value: cdktf.stringToHclTerraform(struct!.billingTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_id: {
      value: cdktf.stringToHclTerraform(struct!.orderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_number: {
      value: cdktf.stringToHclTerraform(struct!.orderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purchase_order_number: {
      value: cdktf.stringToHclTerraform(struct!.purchaseOrderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    term_length: {
      value: cdktf.numberToHclTerraform(struct!.termLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingTier = this._billingTier;
    }
    if (this._orderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderId = this._orderId;
    }
    if (this._orderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderNumber = this._orderNumber;
    }
    if (this._purchaseOrderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.purchaseOrderNumber = this._purchaseOrderNumber;
    }
    if (this._termLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.termLength = this._termLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingTier = undefined;
      this._orderId = undefined;
      this._orderNumber = undefined;
      this._purchaseOrderNumber = undefined;
      this._termLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingTier = value.billingTier;
      this._orderId = value.orderId;
      this._orderNumber = value.orderNumber;
      this._purchaseOrderNumber = value.purchaseOrderNumber;
      this._termLength = value.termLength;
    }
  }

  // billing_tier - computed: true, optional: true, required: false
  private _billingTier?: string; 
  public get billingTier() {
    return this.getStringAttribute('billing_tier');
  }
  public set billingTier(value: string) {
    this._billingTier = value;
  }
  public resetBillingTier() {
    this._billingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTierInput() {
    return this._billingTier;
  }

  // order_id - computed: true, optional: true, required: false
  private _orderId?: string; 
  public get orderId() {
    return this.getStringAttribute('order_id');
  }
  public set orderId(value: string) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }

  // order_number - computed: true, optional: true, required: false
  private _orderNumber?: string; 
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }
  public set orderNumber(value: string) {
    this._orderNumber = value;
  }
  public resetOrderNumber() {
    this._orderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderNumberInput() {
    return this._orderNumber;
  }

  // purchase_order_number - computed: true, optional: true, required: false
  private _purchaseOrderNumber?: string; 
  public get purchaseOrderNumber() {
    return this.getStringAttribute('purchase_order_number');
  }
  public set purchaseOrderNumber(value: string) {
    this._purchaseOrderNumber = value;
  }
  public resetPurchaseOrderNumber() {
    this._purchaseOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchaseOrderNumberInput() {
    return this._purchaseOrderNumber;
  }

  // term_length - computed: false, optional: true, required: false
  private _termLength?: number; 
  public get termLength() {
    return this.getNumberAttribute('term_length');
  }
  public set termLength(value: number) {
    this._termLength = value;
  }
  public resetTermLength() {
    this._termLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termLengthInput() {
    return this._termLength;
  }
}
export interface FabricConnectionProject {
  /**
  * Project Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#project_id FabricConnection#project_id}
  */
  readonly projectId?: string;
}

export function fabricConnectionProjectToTerraform(struct?: FabricConnectionProjectOutputReference | FabricConnectionProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function fabricConnectionProjectToHclTerraform(struct?: FabricConnectionProjectOutputReference | FabricConnectionProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface FabricConnectionRedundancy {
  /**
  * Redundancy group identifier (Use the redundancy.0.group UUID of primary connection; e.g. one(equinix_fabric_connection.primary_port_connection.redundancy).group or equinix_fabric_connection.primary_port_connection.redundancy.0.group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#group FabricConnection#group}
  */
  readonly group?: string;
  /**
  * Connection priority in redundancy group - PRIMARY, SECONDARY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#priority FabricConnection#priority}
  */
  readonly priority?: string;
}

export function fabricConnectionRedundancyToTerraform(struct?: FabricConnectionRedundancyOutputReference | FabricConnectionRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function fabricConnectionRedundancyToHclTerraform(struct?: FabricConnectionRedundancyOutputReference | FabricConnectionRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionRedundancyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionRedundancy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionRedundancy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._priority = value.priority;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface FabricConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#create FabricConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#delete FabricConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#read FabricConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#update FabricConnection#update}
  */
  readonly update?: string;
}

export function fabricConnectionTimeoutsToTerraform(struct?: FabricConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fabricConnectionTimeoutsToHclTerraform(struct?: FabricConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface FabricConnectionZSideAccessPointAccount {
}

export function fabricConnectionZSideAccessPointAccountToTerraform(struct?: FabricConnectionZSideAccessPointAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionZSideAccessPointAccountToHclTerraform(struct?: FabricConnectionZSideAccessPointAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionZSideAccessPointAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionZSideAccessPointAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointAccount | cdktf.IResolvable | undefined) {
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

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }

  // global_cust_id - computed: true, optional: false, required: false
  public get globalCustId() {
    return this.getStringAttribute('global_cust_id');
  }

  // global_org_id - computed: true, optional: false, required: false
  public get globalOrgId() {
    return this.getStringAttribute('global_org_id');
  }

  // global_organization_name - computed: true, optional: false, required: false
  public get globalOrganizationName() {
    return this.getStringAttribute('global_organization_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}

export class FabricConnectionZSideAccessPointAccountList extends cdktf.ComplexList {
  public internalValue? : FabricConnectionZSideAccessPointAccount[] | cdktf.IResolvable

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
  public get(index: number): FabricConnectionZSideAccessPointAccountOutputReference {
    return new FabricConnectionZSideAccessPointAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionZSideAccessPointGateway {
  /**
  * Equinix-assigned virtual gateway identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionZSideAccessPointGatewayToTerraform(struct?: FabricConnectionZSideAccessPointGatewayOutputReference | FabricConnectionZSideAccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideAccessPointGatewayToHclTerraform(struct?: FabricConnectionZSideAccessPointGatewayOutputReference | FabricConnectionZSideAccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSideAccessPointInterface {
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#id FabricConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned interface identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionZSideAccessPointInterfaceToTerraform(struct?: FabricConnectionZSideAccessPointInterfaceOutputReference | FabricConnectionZSideAccessPointInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideAccessPointInterfaceToHclTerraform(struct?: FabricConnectionZSideAccessPointInterfaceOutputReference | FabricConnectionZSideAccessPointInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSideAccessPointLinkProtocol {
  /**
  * Type of the link protocol - UNTAGGED, DOT1Q, QINQ, EVPN_VXLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Vlan Customer Tag information, vlanCTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#vlan_c_tag FabricConnection#vlan_c_tag}
  */
  readonly vlanCTag?: number;
  /**
  * Vlan Provider Tag information, vlanSTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#vlan_s_tag FabricConnection#vlan_s_tag}
  */
  readonly vlanSTag?: number;
  /**
  * Vlan Tag information, vlanTag value specified for DOT1Q connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#vlan_tag FabricConnection#vlan_tag}
  */
  readonly vlanTag?: number;
}

export function fabricConnectionZSideAccessPointLinkProtocolToTerraform(struct?: FabricConnectionZSideAccessPointLinkProtocolOutputReference | FabricConnectionZSideAccessPointLinkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    vlan_c_tag: cdktf.numberToTerraform(struct!.vlanCTag),
    vlan_s_tag: cdktf.numberToTerraform(struct!.vlanSTag),
    vlan_tag: cdktf.numberToTerraform(struct!.vlanTag),
  }
}


export function fabricConnectionZSideAccessPointLinkProtocolToHclTerraform(struct?: FabricConnectionZSideAccessPointLinkProtocolOutputReference | FabricConnectionZSideAccessPointLinkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_c_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanCTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_s_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanSTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointLinkProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointLinkProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanCTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanCTag = this._vlanCTag;
    }
    if (this._vlanSTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanSTag = this._vlanSTag;
    }
    if (this._vlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTag = this._vlanTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointLinkProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._vlanCTag = undefined;
      this._vlanSTag = undefined;
      this._vlanTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._vlanCTag = value.vlanCTag;
      this._vlanSTag = value.vlanSTag;
      this._vlanTag = value.vlanTag;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan_c_tag - computed: true, optional: true, required: false
  private _vlanCTag?: number; 
  public get vlanCTag() {
    return this.getNumberAttribute('vlan_c_tag');
  }
  public set vlanCTag(value: number) {
    this._vlanCTag = value;
  }
  public resetVlanCTag() {
    this._vlanCTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCTagInput() {
    return this._vlanCTag;
  }

  // vlan_s_tag - computed: true, optional: true, required: false
  private _vlanSTag?: number; 
  public get vlanSTag() {
    return this.getNumberAttribute('vlan_s_tag');
  }
  public set vlanSTag(value: number) {
    this._vlanSTag = value;
  }
  public resetVlanSTag() {
    this._vlanSTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanSTagInput() {
    return this._vlanSTag;
  }

  // vlan_tag - computed: true, optional: true, required: false
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }
}
export interface FabricConnectionZSideAccessPointLocation {
  /**
  * IBX Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#ibx FabricConnection#ibx}
  */
  readonly ibx?: string;
  /**
  * Access point metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#metro_code FabricConnection#metro_code}
  */
  readonly metroCode?: string;
  /**
  * Access point metro name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#metro_name FabricConnection#metro_name}
  */
  readonly metroName?: string;
  /**
  * Access point region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#region FabricConnection#region}
  */
  readonly region?: string;
}

export function fabricConnectionZSideAccessPointLocationToTerraform(struct?: FabricConnectionZSideAccessPointLocationOutputReference | FabricConnectionZSideAccessPointLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ibx: cdktf.stringToTerraform(struct!.ibx),
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
    metro_name: cdktf.stringToTerraform(struct!.metroName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function fabricConnectionZSideAccessPointLocationToHclTerraform(struct?: FabricConnectionZSideAccessPointLocationOutputReference | FabricConnectionZSideAccessPointLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ibx: {
      value: cdktf.stringToHclTerraform(struct!.ibx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_code: {
      value: cdktf.stringToHclTerraform(struct!.metroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_name: {
      value: cdktf.stringToHclTerraform(struct!.metroName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ibx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibx = this._ibx;
    }
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    if (this._metroName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroName = this._metroName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ibx = undefined;
      this._metroCode = undefined;
      this._metroName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ibx = value.ibx;
      this._metroCode = value.metroCode;
      this._metroName = value.metroName;
      this._region = value.region;
    }
  }

  // ibx - computed: true, optional: true, required: false
  private _ibx?: string; 
  public get ibx() {
    return this.getStringAttribute('ibx');
  }
  public set ibx(value: string) {
    this._ibx = value;
  }
  public resetIbx() {
    this._ibx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibxInput() {
    return this._ibx;
  }

  // metro_code - computed: true, optional: true, required: false
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  public resetMetroCode() {
    this._metroCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // metro_name - computed: true, optional: true, required: false
  private _metroName?: string; 
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }
  public set metroName(value: string) {
    this._metroName = value;
  }
  public resetMetroName() {
    this._metroName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroNameInput() {
    return this._metroName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface FabricConnectionZSideAccessPointNetwork {
  /**
  * Equinix-assigned Network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid: string;
}

export function fabricConnectionZSideAccessPointNetworkToTerraform(struct?: FabricConnectionZSideAccessPointNetworkOutputReference | FabricConnectionZSideAccessPointNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideAccessPointNetworkToHclTerraform(struct?: FabricConnectionZSideAccessPointNetworkOutputReference | FabricConnectionZSideAccessPointNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSideAccessPointPortRedundancy {
}

export function fabricConnectionZSideAccessPointPortRedundancyToTerraform(struct?: FabricConnectionZSideAccessPointPortRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionZSideAccessPointPortRedundancyToHclTerraform(struct?: FabricConnectionZSideAccessPointPortRedundancy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionZSideAccessPointPortRedundancyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionZSideAccessPointPortRedundancy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointPortRedundancy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}

export class FabricConnectionZSideAccessPointPortRedundancyList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionZSideAccessPointPortRedundancyOutputReference {
    return new FabricConnectionZSideAccessPointPortRedundancyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionZSideAccessPointPort {
  /**
  * Equinix-assigned Port identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionZSideAccessPointPortToTerraform(struct?: FabricConnectionZSideAccessPointPortOutputReference | FabricConnectionZSideAccessPointPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideAccessPointPortToHclTerraform(struct?: FabricConnectionZSideAccessPointPortOutputReference | FabricConnectionZSideAccessPointPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
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

  // redundancy - computed: true, optional: false, required: false
  private _redundancy = new FabricConnectionZSideAccessPointPortRedundancyList(this, "redundancy", true);
  public get redundancy() {
    return this._redundancy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSideAccessPointProfileAccessPointTypeConfigs {
}

export function fabricConnectionZSideAccessPointProfileAccessPointTypeConfigsToTerraform(struct?: FabricConnectionZSideAccessPointProfileAccessPointTypeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricConnectionZSideAccessPointProfileAccessPointTypeConfigsToHclTerraform(struct?: FabricConnectionZSideAccessPointProfileAccessPointTypeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricConnectionZSideAccessPointProfileAccessPointTypeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionZSideAccessPointProfileAccessPointTypeConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointProfileAccessPointTypeConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class FabricConnectionZSideAccessPointProfileAccessPointTypeConfigsList extends cdktf.ComplexList {

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
  public get(index: number): FabricConnectionZSideAccessPointProfileAccessPointTypeConfigsOutputReference {
    return new FabricConnectionZSideAccessPointProfileAccessPointTypeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionZSideAccessPointProfile {
  /**
  * Service profile type - L2_PROFILE, L3_PROFILE, ECIA_PROFILE, ECMC_PROFILE, IA_PROFILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type: string;
  /**
  * Equinix assigned service profile identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid: string;
}

export function fabricConnectionZSideAccessPointProfileToTerraform(struct?: FabricConnectionZSideAccessPointProfileOutputReference | FabricConnectionZSideAccessPointProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideAccessPointProfileToHclTerraform(struct?: FabricConnectionZSideAccessPointProfileOutputReference | FabricConnectionZSideAccessPointProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // access_point_type_configs - computed: true, optional: false, required: false
  private _accessPointTypeConfigs = new FabricConnectionZSideAccessPointProfileAccessPointTypeConfigsList(this, "access_point_type_configs", false);
  public get accessPointTypeConfigs() {
    return this._accessPointTypeConfigs;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSideAccessPointRouter {
  /**
  * Equinix-assigned virtual gateway identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionZSideAccessPointRouterToTerraform(struct?: FabricConnectionZSideAccessPointRouterOutputReference | FabricConnectionZSideAccessPointRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideAccessPointRouterToHclTerraform(struct?: FabricConnectionZSideAccessPointRouterOutputReference | FabricConnectionZSideAccessPointRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSideAccessPointVirtualDevice {
  /**
  * Customer-assigned Virtual Device Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#name FabricConnection#name}
  */
  readonly name?: string;
  /**
  * Virtual Device type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned Virtual Device identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid: string;
}

export function fabricConnectionZSideAccessPointVirtualDeviceToTerraform(struct?: FabricConnectionZSideAccessPointVirtualDeviceOutputReference | FabricConnectionZSideAccessPointVirtualDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideAccessPointVirtualDeviceToHclTerraform(struct?: FabricConnectionZSideAccessPointVirtualDeviceOutputReference | FabricConnectionZSideAccessPointVirtualDevice): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointVirtualDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPointVirtualDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPointVirtualDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSideAccessPoint {
  /**
  * Authentication key for provider based connections or Metal-Fabric Integration connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#authentication_key FabricConnection#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Peering Type- PRIVATE,MICROSOFT,PUBLIC, MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#peering_type FabricConnection#peering_type}
  */
  readonly peeringType?: string;
  /**
  * Network role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#role FabricConnection#role}
  */
  readonly role?: string;
  /**
  * Access point seller region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#seller_region FabricConnection#seller_region}
  */
  readonly sellerRegion?: string;
  /**
  * Access point type - COLO, VD, VG, SP, IGW, SUBNET, CLOUD_ROUTER, NETWORK, METAL_NETWORK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#account FabricConnection#account}
  */
  readonly account?: FabricConnectionZSideAccessPointAccount[] | cdktf.IResolvable;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#gateway FabricConnection#gateway}
  */
  readonly gateway?: FabricConnectionZSideAccessPointGateway;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#interface FabricConnection#interface}
  */
  readonly interface?: FabricConnectionZSideAccessPointInterface;
  /**
  * link_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#link_protocol FabricConnection#link_protocol}
  */
  readonly linkProtocol?: FabricConnectionZSideAccessPointLinkProtocol;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#location FabricConnection#location}
  */
  readonly location?: FabricConnectionZSideAccessPointLocation;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#network FabricConnection#network}
  */
  readonly network?: FabricConnectionZSideAccessPointNetwork;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#port FabricConnection#port}
  */
  readonly port?: FabricConnectionZSideAccessPointPort;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#profile FabricConnection#profile}
  */
  readonly profile?: FabricConnectionZSideAccessPointProfile;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#router FabricConnection#router}
  */
  readonly router?: FabricConnectionZSideAccessPointRouter;
  /**
  * virtual_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#virtual_device FabricConnection#virtual_device}
  */
  readonly virtualDevice?: FabricConnectionZSideAccessPointVirtualDevice;
}

export function fabricConnectionZSideAccessPointToTerraform(struct?: FabricConnectionZSideAccessPointOutputReference | FabricConnectionZSideAccessPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    peering_type: cdktf.stringToTerraform(struct!.peeringType),
    role: cdktf.stringToTerraform(struct!.role),
    seller_region: cdktf.stringToTerraform(struct!.sellerRegion),
    type: cdktf.stringToTerraform(struct!.type),
    account: cdktf.listMapper(fabricConnectionZSideAccessPointAccountToTerraform, true)(struct!.account),
    gateway: fabricConnectionZSideAccessPointGatewayToTerraform(struct!.gateway),
    interface: fabricConnectionZSideAccessPointInterfaceToTerraform(struct!.interface),
    link_protocol: fabricConnectionZSideAccessPointLinkProtocolToTerraform(struct!.linkProtocol),
    location: fabricConnectionZSideAccessPointLocationToTerraform(struct!.location),
    network: fabricConnectionZSideAccessPointNetworkToTerraform(struct!.network),
    port: fabricConnectionZSideAccessPointPortToTerraform(struct!.port),
    profile: fabricConnectionZSideAccessPointProfileToTerraform(struct!.profile),
    router: fabricConnectionZSideAccessPointRouterToTerraform(struct!.router),
    virtual_device: fabricConnectionZSideAccessPointVirtualDeviceToTerraform(struct!.virtualDevice),
  }
}


export function fabricConnectionZSideAccessPointToHclTerraform(struct?: FabricConnectionZSideAccessPointOutputReference | FabricConnectionZSideAccessPoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peering_type: {
      value: cdktf.stringToHclTerraform(struct!.peeringType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seller_region: {
      value: cdktf.stringToHclTerraform(struct!.sellerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktf.listMapperHcl(fabricConnectionZSideAccessPointAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointAccountList",
    },
    gateway: {
      value: fabricConnectionZSideAccessPointGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointGatewayList",
    },
    interface: {
      value: fabricConnectionZSideAccessPointInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointInterfaceList",
    },
    link_protocol: {
      value: fabricConnectionZSideAccessPointLinkProtocolToHclTerraform(struct!.linkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointLinkProtocolList",
    },
    location: {
      value: fabricConnectionZSideAccessPointLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointLocationList",
    },
    network: {
      value: fabricConnectionZSideAccessPointNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointNetworkList",
    },
    port: {
      value: fabricConnectionZSideAccessPointPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointPortList",
    },
    profile: {
      value: fabricConnectionZSideAccessPointProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointProfileList",
    },
    router: {
      value: fabricConnectionZSideAccessPointRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointRouterList",
    },
    virtual_device: {
      value: fabricConnectionZSideAccessPointVirtualDeviceToHclTerraform(struct!.virtualDevice),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointVirtualDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAccessPointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideAccessPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._peeringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringType = this._peeringType;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sellerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sellerRegion = this._sellerRegion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._linkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkProtocol = this._linkProtocol?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    if (this._virtualDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDevice = this._virtualDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAccessPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationKey = undefined;
      this._peeringType = undefined;
      this._role = undefined;
      this._sellerRegion = undefined;
      this._type = undefined;
      this._account.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._linkProtocol.internalValue = undefined;
      this._location.internalValue = undefined;
      this._network.internalValue = undefined;
      this._port.internalValue = undefined;
      this._profile.internalValue = undefined;
      this._router.internalValue = undefined;
      this._virtualDevice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationKey = value.authenticationKey;
      this._peeringType = value.peeringType;
      this._role = value.role;
      this._sellerRegion = value.sellerRegion;
      this._type = value.type;
      this._account.internalValue = value.account;
      this._gateway.internalValue = value.gateway;
      this._interface.internalValue = value.interface;
      this._linkProtocol.internalValue = value.linkProtocol;
      this._location.internalValue = value.location;
      this._network.internalValue = value.network;
      this._port.internalValue = value.port;
      this._profile.internalValue = value.profile;
      this._router.internalValue = value.router;
      this._virtualDevice.internalValue = value.virtualDevice;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // peering_type - computed: false, optional: true, required: false
  private _peeringType?: string; 
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  public resetPeeringType() {
    this._peeringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType;
  }

  // provider_connection_id - computed: true, optional: false, required: false
  public get providerConnectionId() {
    return this.getStringAttribute('provider_connection_id');
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // seller_region - computed: false, optional: true, required: false
  private _sellerRegion?: string; 
  public get sellerRegion() {
    return this.getStringAttribute('seller_region');
  }
  public set sellerRegion(value: string) {
    this._sellerRegion = value;
  }
  public resetSellerRegion() {
    this._sellerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sellerRegionInput() {
    return this._sellerRegion;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // account - computed: false, optional: true, required: false
  private _account = new FabricConnectionZSideAccessPointAccountList(this, "account", true);
  public get account() {
    return this._account;
  }
  public putAccount(value: FabricConnectionZSideAccessPointAccount[] | cdktf.IResolvable) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new FabricConnectionZSideAccessPointGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: FabricConnectionZSideAccessPointGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new FabricConnectionZSideAccessPointInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FabricConnectionZSideAccessPointInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // link_protocol - computed: false, optional: true, required: false
  private _linkProtocol = new FabricConnectionZSideAccessPointLinkProtocolOutputReference(this, "link_protocol");
  public get linkProtocol() {
    return this._linkProtocol;
  }
  public putLinkProtocol(value: FabricConnectionZSideAccessPointLinkProtocol) {
    this._linkProtocol.internalValue = value;
  }
  public resetLinkProtocol() {
    this._linkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProtocolInput() {
    return this._linkProtocol.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new FabricConnectionZSideAccessPointLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FabricConnectionZSideAccessPointLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new FabricConnectionZSideAccessPointNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: FabricConnectionZSideAccessPointNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new FabricConnectionZSideAccessPointPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: FabricConnectionZSideAccessPointPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new FabricConnectionZSideAccessPointProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: FabricConnectionZSideAccessPointProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new FabricConnectionZSideAccessPointRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: FabricConnectionZSideAccessPointRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // virtual_device - computed: false, optional: true, required: false
  private _virtualDevice = new FabricConnectionZSideAccessPointVirtualDeviceOutputReference(this, "virtual_device");
  public get virtualDevice() {
    return this._virtualDevice;
  }
  public putVirtualDevice(value: FabricConnectionZSideAccessPointVirtualDevice) {
    this._virtualDevice.internalValue = value;
  }
  public resetVirtualDevice() {
    this._virtualDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDeviceInput() {
    return this._virtualDevice.internalValue;
  }
}
export interface FabricConnectionZSideAdditionalInfo {
  /**
  * Additional information key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#key FabricConnection#key}
  */
  readonly key?: string;
  /**
  * Additional information value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#value FabricConnection#value}
  */
  readonly value?: string;
}

export function fabricConnectionZSideAdditionalInfoToTerraform(struct?: FabricConnectionZSideAdditionalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fabricConnectionZSideAdditionalInfoToHclTerraform(struct?: FabricConnectionZSideAdditionalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideAdditionalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricConnectionZSideAdditionalInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideAdditionalInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FabricConnectionZSideAdditionalInfoList extends cdktf.ComplexList {
  public internalValue? : FabricConnectionZSideAdditionalInfo[] | cdktf.IResolvable

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
  public get(index: number): FabricConnectionZSideAdditionalInfoOutputReference {
    return new FabricConnectionZSideAdditionalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricConnectionZSideServiceToken {
  /**
  * Token type - VC_TOKEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#type FabricConnection#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned service token identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#uuid FabricConnection#uuid}
  */
  readonly uuid?: string;
}

export function fabricConnectionZSideServiceTokenToTerraform(struct?: FabricConnectionZSideServiceTokenOutputReference | FabricConnectionZSideServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricConnectionZSideServiceTokenToHclTerraform(struct?: FabricConnectionZSideServiceTokenOutputReference | FabricConnectionZSideServiceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSideServiceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSideServiceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricConnectionZSide {
  /**
  * access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#access_point FabricConnection#access_point}
  */
  readonly accessPoint?: FabricConnectionZSideAccessPoint;
  /**
  * additional_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#additional_info FabricConnection#additional_info}
  */
  readonly additionalInfo?: FabricConnectionZSideAdditionalInfo[] | cdktf.IResolvable;
  /**
  * service_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#service_token FabricConnection#service_token}
  */
  readonly serviceToken?: FabricConnectionZSideServiceToken;
}

export function fabricConnectionZSideToTerraform(struct?: FabricConnectionZSideOutputReference | FabricConnectionZSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point: fabricConnectionZSideAccessPointToTerraform(struct!.accessPoint),
    additional_info: cdktf.listMapper(fabricConnectionZSideAdditionalInfoToTerraform, true)(struct!.additionalInfo),
    service_token: fabricConnectionZSideServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function fabricConnectionZSideToHclTerraform(struct?: FabricConnectionZSideOutputReference | FabricConnectionZSide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point: {
      value: fabricConnectionZSideAccessPointToHclTerraform(struct!.accessPoint),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideAccessPointList",
    },
    additional_info: {
      value: cdktf.listMapperHcl(fabricConnectionZSideAdditionalInfoToHclTerraform, true)(struct!.additionalInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FabricConnectionZSideAdditionalInfoList",
    },
    service_token: {
      value: fabricConnectionZSideServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "set",
      storageClassType: "FabricConnectionZSideServiceTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricConnectionZSideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricConnectionZSide | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPoint = this._accessPoint?.internalValue;
    }
    if (this._additionalInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInfo = this._additionalInfo?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricConnectionZSide | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessPoint.internalValue = undefined;
      this._additionalInfo.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessPoint.internalValue = value.accessPoint;
      this._additionalInfo.internalValue = value.additionalInfo;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // access_point - computed: false, optional: true, required: false
  private _accessPoint = new FabricConnectionZSideAccessPointOutputReference(this, "access_point");
  public get accessPoint() {
    return this._accessPoint;
  }
  public putAccessPoint(value: FabricConnectionZSideAccessPoint) {
    this._accessPoint.internalValue = value;
  }
  public resetAccessPoint() {
    this._accessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointInput() {
    return this._accessPoint.internalValue;
  }

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo = new FabricConnectionZSideAdditionalInfoList(this, "additional_info", false);
  public get additionalInfo() {
    return this._additionalInfo;
  }
  public putAdditionalInfo(value: FabricConnectionZSideAdditionalInfo[] | cdktf.IResolvable) {
    this._additionalInfo.internalValue = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new FabricConnectionZSideServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: FabricConnectionZSideServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection equinix_fabric_connection}
*/
export class FabricConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricConnection to import
  * @param importFromId The id of the existing FabricConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_connection equinix_fabric_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: FabricConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_connection',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalInfo = config.additionalInfo;
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._aSide.internalValue = config.aSide;
    this._notifications.internalValue = config.notifications;
    this._order.internalValue = config.order;
    this._project.internalValue = config.project;
    this._redundancy.internalValue = config.redundancy;
    this._timeouts.internalValue = config.timeouts;
    this._zSide.internalValue = config.zSide;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  private _account = new FabricConnectionAccountList(this, "account", true);
  public get account() {
    return this._account;
  }

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get additionalInfo() {
    return this.interpolationForAttribute('additional_info');
  }
  public set additionalInfo(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricConnectionChangeLogList(this, "change_log", true);
  public get changeLog() {
    return this._changeLog;
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

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
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

  // is_remote - computed: true, optional: false, required: false
  public get isRemote() {
    return this.getBooleanAttribute('is_remote');
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

  // operation - computed: true, optional: false, required: false
  private _operation = new FabricConnectionOperationList(this, "operation", true);
  public get operation() {
    return this._operation;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // a_side - computed: false, optional: false, required: true
  private _aSide = new FabricConnectionASideOutputReference(this, "a_side");
  public get aSide() {
    return this._aSide;
  }
  public putASide(value: FabricConnectionASide) {
    this._aSide.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aSideInput() {
    return this._aSide.internalValue;
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications = new FabricConnectionNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: FabricConnectionNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // order - computed: false, optional: true, required: false
  private _order = new FabricConnectionOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }
  public putOrder(value: FabricConnectionOrder) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project = new FabricConnectionProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: FabricConnectionProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // redundancy - computed: false, optional: true, required: false
  private _redundancy = new FabricConnectionRedundancyOutputReference(this, "redundancy");
  public get redundancy() {
    return this._redundancy;
  }
  public putRedundancy(value: FabricConnectionRedundancy) {
    this._redundancy.internalValue = value;
  }
  public resetRedundancy() {
    this._redundancy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // z_side - computed: false, optional: false, required: true
  private _zSide = new FabricConnectionZSideOutputReference(this, "z_side");
  public get zSide() {
    return this._zSide;
  }
  public putZSide(value: FabricConnectionZSide) {
    this._zSide.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zSideInput() {
    return this._zSide.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._additionalInfo),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      a_side: fabricConnectionASideToTerraform(this._aSide.internalValue),
      notifications: cdktf.listMapper(fabricConnectionNotificationsToTerraform, true)(this._notifications.internalValue),
      order: fabricConnectionOrderToTerraform(this._order.internalValue),
      project: fabricConnectionProjectToTerraform(this._project.internalValue),
      redundancy: fabricConnectionRedundancyToTerraform(this._redundancy.internalValue),
      timeouts: fabricConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      z_side: fabricConnectionZSideToTerraform(this._zSide.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_info: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._additionalInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      a_side: {
        value: fabricConnectionASideToHclTerraform(this._aSide.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricConnectionASideList",
      },
      notifications: {
        value: cdktf.listMapperHcl(fabricConnectionNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricConnectionNotificationsList",
      },
      order: {
        value: fabricConnectionOrderToHclTerraform(this._order.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricConnectionOrderList",
      },
      project: {
        value: fabricConnectionProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricConnectionProjectList",
      },
      redundancy: {
        value: fabricConnectionRedundancyToHclTerraform(this._redundancy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricConnectionRedundancyList",
      },
      timeouts: {
        value: fabricConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricConnectionTimeouts",
      },
      z_side: {
        value: fabricConnectionZSideToHclTerraform(this._zSide.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricConnectionZSideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
