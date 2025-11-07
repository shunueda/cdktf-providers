// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#credentials GcpProject#credentials}
  */
  readonly credentials?: string;
  /**
  * Should snapshots be deleted when the resource is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#delete_snapshots_on_destroy GcpProject#delete_snapshots_on_destroy}
  */
  readonly deleteSnapshotsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#id GcpProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#organization_name GcpProject#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Signals that the permissions has been updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#permissions_hash GcpProject#permissions_hash}
  */
  readonly permissionsHash?: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#project GcpProject#project}
  */
  readonly project?: string;
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#project_name GcpProject#project_name}
  */
  readonly projectName?: string;
  /**
  * Project number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#project_number GcpProject#project_number}
  */
  readonly projectNumber?: string;
  /**
  * cloud_native_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#cloud_native_protection GcpProject#cloud_native_protection}
  */
  readonly cloudNativeProtection: GcpProjectCloudNativeProtection;
}
export interface GcpProjectCloudNativeProtection {
}

export function gcpProjectCloudNativeProtectionToTerraform(struct?: GcpProjectCloudNativeProtectionOutputReference | GcpProjectCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gcpProjectCloudNativeProtectionToHclTerraform(struct?: GcpProjectCloudNativeProtectionOutputReference | GcpProjectCloudNativeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpProjectCloudNativeProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project polaris_gcp_project}
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
  * @param importFromId The id of the existing GcpProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_gcp_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/gcp_project polaris_gcp_project} Resource
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
    this._credentials = config.credentials;
    this._deleteSnapshotsOnDestroy = config.deleteSnapshotsOnDestroy;
    this._id = config.id;
    this._organizationName = config.organizationName;
    this._permissionsHash = config.permissionsHash;
    this._project = config.project;
    this._projectName = config.projectName;
    this._projectNumber = config.projectNumber;
    this._cloudNativeProtection.internalValue = config.cloudNativeProtection;
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

  // organization_name - computed: true, optional: true, required: false
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

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_number - computed: true, optional: true, required: false
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  public resetProjectNumber() {
    this._projectNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }

  // cloud_native_protection - computed: false, optional: false, required: true
  private _cloudNativeProtection = new GcpProjectCloudNativeProtectionOutputReference(this, "cloud_native_protection");
  public get cloudNativeProtection() {
    return this._cloudNativeProtection;
  }
  public putCloudNativeProtection(value: GcpProjectCloudNativeProtection) {
    this._cloudNativeProtection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNativeProtectionInput() {
    return this._cloudNativeProtection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: cdktf.stringToTerraform(this._credentials),
      delete_snapshots_on_destroy: cdktf.booleanToTerraform(this._deleteSnapshotsOnDestroy),
      id: cdktf.stringToTerraform(this._id),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      permissions_hash: cdktf.stringToTerraform(this._permissionsHash),
      project: cdktf.stringToTerraform(this._project),
      project_name: cdktf.stringToTerraform(this._projectName),
      project_number: cdktf.stringToTerraform(this._projectNumber),
      cloud_native_protection: gcpProjectCloudNativeProtectionToTerraform(this._cloudNativeProtection.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
