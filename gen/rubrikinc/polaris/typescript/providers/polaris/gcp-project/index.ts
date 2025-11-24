// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64 encoded GCP service account private key or path to GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#credentials GcpProject#credentials}
  */
  readonly credentials?: string;
  /**
  * Should snapshots be deleted when the resource is destroyed. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#delete_snapshots_on_destroy GcpProject#delete_snapshots_on_destroy}
  */
  readonly deleteSnapshotsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * GCP organization name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#organization_name GcpProject#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Signals that the permissions has been updated. **Deprecated:** use the `permissions` field of `feature` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#permissions_hash GcpProject#permissions_hash}
  */
  readonly permissionsHash?: string;
  /**
  * GCP project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#project GcpProject#project}
  */
  readonly project: string;
  /**
  * GCP project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#project_name GcpProject#project_name}
  */
  readonly projectName: string;
  /**
  * GCP project number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#project_number GcpProject#project_number}
  */
  readonly projectNumber: string;
  /**
  * cloud_native_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#cloud_native_protection GcpProject#cloud_native_protection}
  */
  readonly cloudNativeProtection?: GcpProjectCloudNativeProtection;
  /**
  * feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#feature GcpProject#feature}
  */
  readonly feature?: GcpProjectFeature[] | cdktf.IResolvable;
}
export interface GcpProjectCloudNativeProtection {
  /**
  * Status of the Cloud Native Protection feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#status GcpProject#status}
  */
  readonly status?: string;
}

export function gcpProjectCloudNativeProtectionToTerraform(struct?: GcpProjectCloudNativeProtectionOutputReference | GcpProjectCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function gcpProjectCloudNativeProtectionToHclTerraform(struct?: GcpProjectCloudNativeProtectionOutputReference | GcpProjectCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpProjectCloudNativeProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpProjectCloudNativeProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpProjectCloudNativeProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: true, optional: true, required: false
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
}
export interface GcpProjectFeature {
  /**
  * RSC feature name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#name GcpProject#name}
  */
  readonly name: string;
  /**
  * Permission groups for the RSC feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#permission_groups GcpProject#permission_groups}
  */
  readonly permissionGroups: string[];
  /**
  * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris_gcp_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#permissions GcpProject#permissions}
  */
  readonly permissions?: string;
}

export function gcpProjectFeatureToTerraform(struct?: GcpProjectFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionGroups),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function gcpProjectFeatureToHclTerraform(struct?: GcpProjectFeature | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpProjectFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpProjectFeature | cdktf.IResolvable | undefined {
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
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpProjectFeature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissionGroups = undefined;
      this._permissions = undefined;
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
      this._permissions = value.permissions;
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

  // permissions - computed: false, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class GcpProjectFeatureList extends cdktf.ComplexList {
  public internalValue? : GcpProjectFeature[] | cdktf.IResolvable

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
  public get(index: number): GcpProjectFeatureOutputReference {
    return new GcpProjectFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project polaris_gcp_project}
*/
export class GcpProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_gcp_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpProject to import
  * @param importFromId The id of the existing GcpProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_gcp_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/gcp_project polaris_gcp_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpProjectConfig
  */
  public constructor(scope: Construct, id: string, config: GcpProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_gcp_project',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentials = config.credentials;
    this._deleteSnapshotsOnDestroy = config.deleteSnapshotsOnDestroy;
    this._organizationName = config.organizationName;
    this._permissionsHash = config.permissionsHash;
    this._project = config.project;
    this._projectName = config.projectName;
    this._projectNumber = config.projectNumber;
    this._cloudNativeProtection.internalValue = config.cloudNativeProtection;
    this._feature.internalValue = config.feature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // permissions_hash - computed: false, optional: true, required: false
  private _permissionsHash?: string; 
  public get permissionsHash() {
    return this.getStringAttribute('permissions_hash');
  }
  public set permissionsHash(value: string) {
    this._permissionsHash = value;
  }
  public resetPermissionsHash() {
    this._permissionsHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsHashInput() {
    return this._permissionsHash;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_number - computed: false, optional: false, required: true
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }

  // cloud_native_protection - computed: false, optional: true, required: false
  private _cloudNativeProtection = new GcpProjectCloudNativeProtectionOutputReference(this, "cloud_native_protection");
  public get cloudNativeProtection() {
    return this._cloudNativeProtection;
  }
  public putCloudNativeProtection(value: GcpProjectCloudNativeProtection) {
    this._cloudNativeProtection.internalValue = value;
  }
  public resetCloudNativeProtection() {
    this._cloudNativeProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNativeProtectionInput() {
    return this._cloudNativeProtection.internalValue;
  }

  // feature - computed: false, optional: true, required: false
  private _feature = new GcpProjectFeatureList(this, "feature", true);
  public get feature() {
    return this._feature;
  }
  public putFeature(value: GcpProjectFeature[] | cdktf.IResolvable) {
    this._feature.internalValue = value;
  }
  public resetFeature() {
    this._feature.internalValue = undefined;
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
      credentials: cdktf.stringToTerraform(this._credentials),
      delete_snapshots_on_destroy: cdktf.booleanToTerraform(this._deleteSnapshotsOnDestroy),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      permissions_hash: cdktf.stringToTerraform(this._permissionsHash),
      project: cdktf.stringToTerraform(this._project),
      project_name: cdktf.stringToTerraform(this._projectName),
      project_number: cdktf.stringToTerraform(this._projectNumber),
      cloud_native_protection: gcpProjectCloudNativeProtectionToTerraform(this._cloudNativeProtection.internalValue),
      feature: cdktf.listMapper(gcpProjectFeatureToTerraform, true)(this._feature.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
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
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_hash: {
        value: cdktf.stringToHclTerraform(this._permissionsHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_number: {
        value: cdktf.stringToHclTerraform(this._projectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_native_protection: {
        value: gcpProjectCloudNativeProtectionToHclTerraform(this._cloudNativeProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpProjectCloudNativeProtectionList",
      },
      feature: {
        value: cdktf.listMapperHcl(gcpProjectFeatureToHclTerraform, true)(this._feature.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcpProjectFeatureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
