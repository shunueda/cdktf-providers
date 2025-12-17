// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Role ARN of role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#assume_role AwsAccount#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * Should snapshots be deleted when the resource is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#delete_snapshots_on_destroy AwsAccount#delete_snapshots_on_destroy}
  */
  readonly deleteSnapshotsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Account name in Polaris. If not given the name is taken from AWS Organizations or, if the required permissions are missing, is derived from the AWS account ID and the named profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#name AwsAccount#name}
  */
  readonly name?: string;
  /**
  * When set to 'update' feature permissions can be updated by applying the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#permissions AwsAccount#permissions}
  */
  readonly permissions?: string;
  /**
  * AWS named profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#profile AwsAccount#profile}
  */
  readonly profile?: string;
  /**
  * cloud_native_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#cloud_native_protection AwsAccount#cloud_native_protection}
  */
  readonly cloudNativeProtection: AwsAccountCloudNativeProtection;
  /**
  * cyber_recovery_data_scanning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#cyber_recovery_data_scanning AwsAccount#cyber_recovery_data_scanning}
  */
  readonly cyberRecoveryDataScanning?: AwsAccountCyberRecoveryDataScanning;
  /**
  * data_scanning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#data_scanning AwsAccount#data_scanning}
  */
  readonly dataScanning?: AwsAccountDataScanning;
  /**
  * dspm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#dspm AwsAccount#dspm}
  */
  readonly dspm?: AwsAccountDspm;
  /**
  * exocompute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#exocompute AwsAccount#exocompute}
  */
  readonly exocompute?: AwsAccountExocompute;
  /**
  * outpost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#outpost AwsAccount#outpost}
  */
  readonly outpost?: AwsAccountOutpost;
}
export interface AwsAccountCloudNativeProtection {
  /**
  * Permission groups to assign to the Cloud Native Protection feature. Possible values are `BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#permission_groups AwsAccount#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Regions that RSC will monitor for instances to automatically protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#regions AwsAccount#regions}
  */
  readonly regions: string[];
}

export function awsAccountCloudNativeProtectionToTerraform(struct?: AwsAccountCloudNativeProtectionOutputReference | AwsAccountCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function awsAccountCloudNativeProtectionToHclTerraform(struct?: AwsAccountCloudNativeProtectionOutputReference | AwsAccountCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountCloudNativeProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountCloudNativeProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountCloudNativeProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._regions = value.regions;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // stack_arn - computed: true, optional: false, required: false
  public get stackArn() {
    return this.getStringAttribute('stack_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AwsAccountCyberRecoveryDataScanning {
  /**
  * Permission groups to assign to the Cyber Recovery Data Scanning feature. Possible values are `BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#permission_groups AwsAccount#permission_groups}
  */
  readonly permissionGroups: string[];
  /**
  * Regions to enable the Cyber Recovery Data Scanning feature in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#regions AwsAccount#regions}
  */
  readonly regions: string[];
}

export function awsAccountCyberRecoveryDataScanningToTerraform(struct?: AwsAccountCyberRecoveryDataScanningOutputReference | AwsAccountCyberRecoveryDataScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function awsAccountCyberRecoveryDataScanningToHclTerraform(struct?: AwsAccountCyberRecoveryDataScanningOutputReference | AwsAccountCyberRecoveryDataScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountCyberRecoveryDataScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountCyberRecoveryDataScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountCyberRecoveryDataScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._regions = value.regions;
    }
  }

  // permission_groups - computed: false, optional: false, required: true
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // stack_arn - computed: true, optional: false, required: false
  public get stackArn() {
    return this.getStringAttribute('stack_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AwsAccountDataScanning {
  /**
  * Permission groups to assign to the Data Scanning feature. Possible values are `BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#permission_groups AwsAccount#permission_groups}
  */
  readonly permissionGroups: string[];
  /**
  * Regions to enable the Data Scanning feature in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#regions AwsAccount#regions}
  */
  readonly regions: string[];
}

export function awsAccountDataScanningToTerraform(struct?: AwsAccountDataScanningOutputReference | AwsAccountDataScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function awsAccountDataScanningToHclTerraform(struct?: AwsAccountDataScanningOutputReference | AwsAccountDataScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountDataScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountDataScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountDataScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._regions = value.regions;
    }
  }

  // permission_groups - computed: false, optional: false, required: true
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // stack_arn - computed: true, optional: false, required: false
  public get stackArn() {
    return this.getStringAttribute('stack_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AwsAccountDspm {
  /**
  * Permission groups to assign to the DSPM feature. Possible values are `BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#permission_groups AwsAccount#permission_groups}
  */
  readonly permissionGroups: string[];
  /**
  * Regions to enable the DSPM feature in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#regions AwsAccount#regions}
  */
  readonly regions: string[];
}

export function awsAccountDspmToTerraform(struct?: AwsAccountDspmOutputReference | AwsAccountDspm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function awsAccountDspmToHclTerraform(struct?: AwsAccountDspmOutputReference | AwsAccountDspm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountDspmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountDspm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountDspm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._regions = value.regions;
    }
  }

  // permission_groups - computed: false, optional: false, required: true
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // stack_arn - computed: true, optional: false, required: false
  public get stackArn() {
    return this.getStringAttribute('stack_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AwsAccountExocompute {
  /**
  * Permission groups to assign to the Exocompute feature. Possible values are `BASIC` and `RSC_MANAGED_CLUSTER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#permission_groups AwsAccount#permission_groups}
  */
  readonly permissionGroups?: string[];
  /**
  * Regions to enable the Exocompute feature in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#regions AwsAccount#regions}
  */
  readonly regions: string[];
}

export function awsAccountExocomputeToTerraform(struct?: AwsAccountExocomputeOutputReference | AwsAccountExocompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
  }
}


export function awsAccountExocomputeToHclTerraform(struct?: AwsAccountExocomputeOutputReference | AwsAccountExocompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountExocomputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountExocompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountExocompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissionGroups = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissionGroups = value.permissionGroups;
      this._regions = value.regions;
    }
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // stack_arn - computed: true, optional: false, required: false
  public get stackArn() {
    return this.getStringAttribute('stack_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface AwsAccountOutpost {
  /**
  * AWS account ID of the outpost account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#outpost_account_id AwsAccount#outpost_account_id}
  */
  readonly outpostAccountId: string;
  /**
  * AWS named profile for the outpost account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#outpost_account_profile AwsAccount#outpost_account_profile}
  */
  readonly outpostAccountProfile?: string;
  /**
  * Permission groups to assign to the Outpost feature. Possible values are `BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#permission_groups AwsAccount#permission_groups}
  */
  readonly permissionGroups: string[];
}

export function awsAccountOutpostToTerraform(struct?: AwsAccountOutpostOutputReference | AwsAccountOutpost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outpost_account_id: cdktf.stringToTerraform(struct!.outpostAccountId),
    outpost_account_profile: cdktf.stringToTerraform(struct!.outpostAccountProfile),
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
  }
}


export function awsAccountOutpostToHclTerraform(struct?: AwsAccountOutpostOutputReference | AwsAccountOutpost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outpost_account_id: {
      value: cdktf.stringToHclTerraform(struct!.outpostAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outpost_account_profile: {
      value: cdktf.stringToHclTerraform(struct!.outpostAccountProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountOutpostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountOutpost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outpostAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostAccountId = this._outpostAccountId;
    }
    if (this._outpostAccountProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostAccountProfile = this._outpostAccountProfile;
    }
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountOutpost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outpostAccountId = undefined;
      this._outpostAccountProfile = undefined;
      this._permissionGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outpostAccountId = value.outpostAccountId;
      this._outpostAccountProfile = value.outpostAccountProfile;
      this._permissionGroups = value.permissionGroups;
    }
  }

  // outpost_account_id - computed: false, optional: false, required: true
  private _outpostAccountId?: string; 
  public get outpostAccountId() {
    return this.getStringAttribute('outpost_account_id');
  }
  public set outpostAccountId(value: string) {
    this._outpostAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostAccountIdInput() {
    return this._outpostAccountId;
  }

  // outpost_account_profile - computed: false, optional: true, required: false
  private _outpostAccountProfile?: string; 
  public get outpostAccountProfile() {
    return this.getStringAttribute('outpost_account_profile');
  }
  public set outpostAccountProfile(value: string) {
    this._outpostAccountProfile = value;
  }
  public resetOutpostAccountProfile() {
    this._outpostAccountProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostAccountProfileInput() {
    return this._outpostAccountProfile;
  }

  // permission_groups - computed: false, optional: false, required: true
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // stack_arn - computed: true, optional: false, required: false
  public get stackArn() {
    return this.getStringAttribute('stack_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account polaris_aws_account}
*/
export class AwsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAccount to import
  * @param importFromId The id of the existing AwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/resources/aws_account polaris_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assumeRole = config.assumeRole;
    this._deleteSnapshotsOnDestroy = config.deleteSnapshotsOnDestroy;
    this._name = config.name;
    this._permissions = config.permissions;
    this._profile = config.profile;
    this._cloudNativeProtection.internalValue = config.cloudNativeProtection;
    this._cyberRecoveryDataScanning.internalValue = config.cyberRecoveryDataScanning;
    this._dataScanning.internalValue = config.dataScanning;
    this._dspm.internalValue = config.dspm;
    this._exocompute.internalValue = config.exocompute;
    this._outpost.internalValue = config.outpost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: string; 
  public get assumeRole() {
    return this.getStringAttribute('assume_role');
  }
  public set assumeRole(value: string) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // delete_snapshots_on_destroy - computed: false, optional: true, required: false
  private _deleteSnapshotsOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteSnapshotsOnDestroy() {
    return this.getBooleanAttribute('delete_snapshots_on_destroy');
  }
  public set deleteSnapshotsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteSnapshotsOnDestroy = value;
  }
  public resetDeleteSnapshotsOnDestroy() {
    this._deleteSnapshotsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSnapshotsOnDestroyInput() {
    return this._deleteSnapshotsOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // cloud_native_protection - computed: false, optional: false, required: true
  private _cloudNativeProtection = new AwsAccountCloudNativeProtectionOutputReference(this, "cloud_native_protection");
  public get cloudNativeProtection() {
    return this._cloudNativeProtection;
  }
  public putCloudNativeProtection(value: AwsAccountCloudNativeProtection) {
    this._cloudNativeProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNativeProtectionInput() {
    return this._cloudNativeProtection.internalValue;
  }

  // cyber_recovery_data_scanning - computed: false, optional: true, required: false
  private _cyberRecoveryDataScanning = new AwsAccountCyberRecoveryDataScanningOutputReference(this, "cyber_recovery_data_scanning");
  public get cyberRecoveryDataScanning() {
    return this._cyberRecoveryDataScanning;
  }
  public putCyberRecoveryDataScanning(value: AwsAccountCyberRecoveryDataScanning) {
    this._cyberRecoveryDataScanning.internalValue = value;
  }
  public resetCyberRecoveryDataScanning() {
    this._cyberRecoveryDataScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberRecoveryDataScanningInput() {
    return this._cyberRecoveryDataScanning.internalValue;
  }

  // data_scanning - computed: false, optional: true, required: false
  private _dataScanning = new AwsAccountDataScanningOutputReference(this, "data_scanning");
  public get dataScanning() {
    return this._dataScanning;
  }
  public putDataScanning(value: AwsAccountDataScanning) {
    this._dataScanning.internalValue = value;
  }
  public resetDataScanning() {
    this._dataScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataScanningInput() {
    return this._dataScanning.internalValue;
  }

  // dspm - computed: false, optional: true, required: false
  private _dspm = new AwsAccountDspmOutputReference(this, "dspm");
  public get dspm() {
    return this._dspm;
  }
  public putDspm(value: AwsAccountDspm) {
    this._dspm.internalValue = value;
  }
  public resetDspm() {
    this._dspm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dspmInput() {
    return this._dspm.internalValue;
  }

  // exocompute - computed: false, optional: true, required: false
  private _exocompute = new AwsAccountExocomputeOutputReference(this, "exocompute");
  public get exocompute() {
    return this._exocompute;
  }
  public putExocompute(value: AwsAccountExocompute) {
    this._exocompute.internalValue = value;
  }
  public resetExocompute() {
    this._exocompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exocomputeInput() {
    return this._exocompute.internalValue;
  }

  // outpost - computed: false, optional: true, required: false
  private _outpost = new AwsAccountOutpostOutputReference(this, "outpost");
  public get outpost() {
    return this._outpost;
  }
  public putOutpost(value: AwsAccountOutpost) {
    this._outpost.internalValue = value;
  }
  public resetOutpost() {
    this._outpost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostInput() {
    return this._outpost.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assume_role: cdktf.stringToTerraform(this._assumeRole),
      delete_snapshots_on_destroy: cdktf.booleanToTerraform(this._deleteSnapshotsOnDestroy),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      profile: cdktf.stringToTerraform(this._profile),
      cloud_native_protection: awsAccountCloudNativeProtectionToTerraform(this._cloudNativeProtection.internalValue),
      cyber_recovery_data_scanning: awsAccountCyberRecoveryDataScanningToTerraform(this._cyberRecoveryDataScanning.internalValue),
      data_scanning: awsAccountDataScanningToTerraform(this._dataScanning.internalValue),
      dspm: awsAccountDspmToTerraform(this._dspm.internalValue),
      exocompute: awsAccountExocomputeToTerraform(this._exocompute.internalValue),
      outpost: awsAccountOutpostToTerraform(this._outpost.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assume_role: {
        value: cdktf.stringToHclTerraform(this._assumeRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_snapshots_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteSnapshotsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_native_protection: {
        value: awsAccountCloudNativeProtectionToHclTerraform(this._cloudNativeProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccountCloudNativeProtectionList",
      },
      cyber_recovery_data_scanning: {
        value: awsAccountCyberRecoveryDataScanningToHclTerraform(this._cyberRecoveryDataScanning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccountCyberRecoveryDataScanningList",
      },
      data_scanning: {
        value: awsAccountDataScanningToHclTerraform(this._dataScanning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccountDataScanningList",
      },
      dspm: {
        value: awsAccountDspmToHclTerraform(this._dspm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccountDspmList",
      },
      exocompute: {
        value: awsAccountExocomputeToHclTerraform(this._exocompute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccountExocomputeList",
      },
      outpost: {
        value: awsAccountOutpostToHclTerraform(this._outpost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccountOutpostList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
