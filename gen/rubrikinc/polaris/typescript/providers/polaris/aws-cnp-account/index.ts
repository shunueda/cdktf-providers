// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCnpAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS cloud type. Possible values are `STANDARD`, `CHINA` and `GOV`. Default value is `STANDARD`. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#cloud AwsCnpAccount#cloud}
  */
  readonly cloud?: string;
  /**
  * Should snapshots be deleted when the resource is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#delete_snapshots_on_destroy AwsCnpAccount#delete_snapshots_on_destroy}
  */
  readonly deleteSnapshotsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * External ID. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#external_id AwsCnpAccount#external_id}
  */
  readonly externalId?: string;
  /**
  * Account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#name AwsCnpAccount#name}
  */
  readonly name?: string;
  /**
  * AWS account ID. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#native_id AwsCnpAccount#native_id}
  */
  readonly nativeId: string;
  /**
  * Regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#regions AwsCnpAccount#regions}
  */
  readonly regions: string[];
  /**
  * feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#feature AwsCnpAccount#feature}
  */
  readonly feature: AwsCnpAccountFeature[] | cdktf.IResolvable;
}
export interface AwsCnpAccountTrustPolicies {
}

export function awsCnpAccountTrustPoliciesToTerraform(struct?: AwsCnpAccountTrustPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsCnpAccountTrustPoliciesToHclTerraform(struct?: AwsCnpAccountTrustPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsCnpAccountTrustPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsCnpAccountTrustPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCnpAccountTrustPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // role_key - computed: true, optional: false, required: false
  public get roleKey() {
    return this.getStringAttribute('role_key');
  }
}

export class AwsCnpAccountTrustPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): AwsCnpAccountTrustPoliciesOutputReference {
    return new AwsCnpAccountTrustPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsCnpAccountFeature {
  /**
  * RSC feature name. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_DYNAMODB_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `SERVERS_AND_APPS`, `EXOCOMPUTE` and `RDS_PROTECTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#name AwsCnpAccount#name}
  */
  readonly name: string;
  /**
  * RSC permission groups for the feature. Possible values are `BASIC` and `RSC_MANAGED_CLUSTER`. For backwards compatibility, `[]` is interpreted as all applicable permission groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#permission_groups AwsCnpAccount#permission_groups}
  */
  readonly permissionGroups: string[];
}

export function awsCnpAccountFeatureToTerraform(struct?: AwsCnpAccountFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
  }
}


export function awsCnpAccountFeatureToHclTerraform(struct?: AwsCnpAccountFeature | cdktf.IResolvable): any {
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

export class AwsCnpAccountFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsCnpAccountFeature | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsCnpAccountFeature | cdktf.IResolvable | undefined) {
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

export class AwsCnpAccountFeatureList extends cdktf.ComplexList {
  public internalValue? : AwsCnpAccountFeature[] | cdktf.IResolvable

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
  public get(index: number): AwsCnpAccountFeatureOutputReference {
    return new AwsCnpAccountFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account polaris_aws_cnp_account}
*/
export class AwsCnpAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_cnp_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCnpAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCnpAccount to import
  * @param importFromId The id of the existing AwsCnpAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCnpAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_cnp_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_cnp_account polaris_aws_cnp_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCnpAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCnpAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_cnp_account',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
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
    this._deleteSnapshotsOnDestroy = config.deleteSnapshotsOnDestroy;
    this._externalId = config.externalId;
    this._name = config.name;
    this._nativeId = config.nativeId;
    this._regions = config.regions;
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

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // native_id - computed: false, optional: false, required: true
  private _nativeId?: string; 
  public get nativeId() {
    return this.getStringAttribute('native_id');
  }
  public set nativeId(value: string) {
    this._nativeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeIdInput() {
    return this._nativeId;
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

  // trust_policies - computed: true, optional: false, required: false
  private _trustPolicies = new AwsCnpAccountTrustPoliciesList(this, "trust_policies", true);
  public get trustPolicies() {
    return this._trustPolicies;
  }

  // feature - computed: false, optional: false, required: true
  private _feature = new AwsCnpAccountFeatureList(this, "feature", true);
  public get feature() {
    return this._feature;
  }
  public putFeature(value: AwsCnpAccountFeature[] | cdktf.IResolvable) {
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
      delete_snapshots_on_destroy: cdktf.booleanToTerraform(this._deleteSnapshotsOnDestroy),
      external_id: cdktf.stringToTerraform(this._externalId),
      name: cdktf.stringToTerraform(this._name),
      native_id: cdktf.stringToTerraform(this._nativeId),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      feature: cdktf.listMapper(awsCnpAccountFeatureToTerraform, true)(this._feature.internalValue),
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
      delete_snapshots_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteSnapshotsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      native_id: {
        value: cdktf.stringToHclTerraform(this._nativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      feature: {
        value: cdktf.listMapperHcl(awsCnpAccountFeatureToHclTerraform, true)(this._feature.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsCnpAccountFeatureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
