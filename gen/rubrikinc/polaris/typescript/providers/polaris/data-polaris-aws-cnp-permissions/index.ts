// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisAwsCnpPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS cloud type. Possible values are `STANDARD`, `CHINA` and `GOV`. Default value is `STANDARD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions#cloud DataPolarisAwsCnpPermissions#cloud}
  */
  readonly cloud?: string;
  /**
  * AWS EC2 recovery role path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions#ec2_recovery_role_path DataPolarisAwsCnpPermissions#ec2_recovery_role_path}
  */
  readonly ec2RecoveryRolePath?: string;
  /**
  * RSC artifact key for the AWS role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions#role_key DataPolarisAwsCnpPermissions#role_key}
  */
  readonly roleKey: string;
  /**
  * feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions#feature DataPolarisAwsCnpPermissions#feature}
  */
  readonly feature: DataPolarisAwsCnpPermissionsFeature[] | cdktf.IResolvable;
}
export interface DataPolarisAwsCnpPermissionsCustomerManagedPolicies {
}

export function dataPolarisAwsCnpPermissionsCustomerManagedPoliciesToTerraform(struct?: DataPolarisAwsCnpPermissionsCustomerManagedPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPolarisAwsCnpPermissionsCustomerManagedPoliciesToHclTerraform(struct?: DataPolarisAwsCnpPermissionsCustomerManagedPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPolarisAwsCnpPermissionsCustomerManagedPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPolarisAwsCnpPermissionsCustomerManagedPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPolarisAwsCnpPermissionsCustomerManagedPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature - computed: true, optional: false, required: false
  public get feature() {
    return this.getStringAttribute('feature');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }
}

export class DataPolarisAwsCnpPermissionsCustomerManagedPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataPolarisAwsCnpPermissionsCustomerManagedPoliciesOutputReference {
    return new DataPolarisAwsCnpPermissionsCustomerManagedPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPolarisAwsCnpPermissionsFeature {
  /**
  * RSC feature name. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_DYNAMODB_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `SERVERS_AND_APPS`, `EXOCOMPUTE` and `RDS_PROTECTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions#name DataPolarisAwsCnpPermissions#name}
  */
  readonly name: string;
  /**
  * RSC permission groups for the feature. Possible values are `BASIC` and `RSC_MANAGED_CLUSTER`. For backwards compatibility, `[]` is interpreted as all applicable permission groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions#permission_groups DataPolarisAwsCnpPermissions#permission_groups}
  */
  readonly permissionGroups: string[];
}

export function dataPolarisAwsCnpPermissionsFeatureToTerraform(struct?: DataPolarisAwsCnpPermissionsFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
  }
}


export function dataPolarisAwsCnpPermissionsFeatureToHclTerraform(struct?: DataPolarisAwsCnpPermissionsFeature | cdktf.IResolvable): any {
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

export class DataPolarisAwsCnpPermissionsFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPolarisAwsCnpPermissionsFeature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionGroups = this._permissionGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPolarisAwsCnpPermissionsFeature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissionGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissionGroups = value.permissionGroups;
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
}

export class DataPolarisAwsCnpPermissionsFeatureList extends cdktf.ComplexList {
  public internalValue? : DataPolarisAwsCnpPermissionsFeature[] | cdktf.IResolvable

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
  public get(index: number): DataPolarisAwsCnpPermissionsFeatureOutputReference {
    return new DataPolarisAwsCnpPermissionsFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions polaris_aws_cnp_permissions}
*/
export class DataPolarisAwsCnpPermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_cnp_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisAwsCnpPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisAwsCnpPermissions to import
  * @param importFromId The id of the existing DataPolarisAwsCnpPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisAwsCnpPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_cnp_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/aws_cnp_permissions polaris_aws_cnp_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisAwsCnpPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPolarisAwsCnpPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_cnp_permissions',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud = config.cloud;
    this._ec2RecoveryRolePath = config.ec2RecoveryRolePath;
    this._roleKey = config.roleKey;
    this._feature.internalValue = config.feature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // customer_managed_policies - computed: true, optional: false, required: false
  private _customerManagedPolicies = new DataPolarisAwsCnpPermissionsCustomerManagedPoliciesList(this, "customer_managed_policies", false);
  public get customerManagedPolicies() {
    return this._customerManagedPolicies;
  }

  // ec2_recovery_role_path - computed: false, optional: true, required: false
  private _ec2RecoveryRolePath?: string; 
  public get ec2RecoveryRolePath() {
    return this.getStringAttribute('ec2_recovery_role_path');
  }
  public set ec2RecoveryRolePath(value: string) {
    this._ec2RecoveryRolePath = value;
  }
  public resetEc2RecoveryRolePath() {
    this._ec2RecoveryRolePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2RecoveryRolePathInput() {
    return this._ec2RecoveryRolePath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_policies - computed: true, optional: false, required: false
  public get managedPolicies() {
    return this.getListAttribute('managed_policies');
  }

  // role_key - computed: false, optional: false, required: true
  private _roleKey?: string; 
  public get roleKey() {
    return this.getStringAttribute('role_key');
  }
  public set roleKey(value: string) {
    this._roleKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleKeyInput() {
    return this._roleKey;
  }

  // feature - computed: false, optional: false, required: true
  private _feature = new DataPolarisAwsCnpPermissionsFeatureList(this, "feature", true);
  public get feature() {
    return this._feature;
  }
  public putFeature(value: DataPolarisAwsCnpPermissionsFeature[] | cdktf.IResolvable) {
    this._feature.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.stringToTerraform(this._cloud),
      ec2_recovery_role_path: cdktf.stringToTerraform(this._ec2RecoveryRolePath),
      role_key: cdktf.stringToTerraform(this._roleKey),
      feature: cdktf.listMapper(dataPolarisAwsCnpPermissionsFeatureToTerraform, true)(this._feature.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_recovery_role_path: {
        value: cdktf.stringToHclTerraform(this._ec2RecoveryRolePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_key: {
        value: cdktf.stringToHclTerraform(this._roleKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature: {
        value: cdktf.listMapperHcl(dataPolarisAwsCnpPermissionsFeatureToHclTerraform, true)(this._feature.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataPolarisAwsCnpPermissionsFeatureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
