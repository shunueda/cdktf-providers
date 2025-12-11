// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubManagedInstanceUpdatePackagesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}
  */
  readonly packageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}
  */
  readonly updateTypes?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#timeouts OsManagementHubManagedInstanceUpdatePackagesManagement#timeouts}
  */
  readonly timeouts?: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts;
  /**
  * work_request_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#work_request_details OsManagementHubManagedInstanceUpdatePackagesManagement#work_request_details}
  */
  readonly workRequestDetails?: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails;
}
export interface OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}
  */
  readonly update?: string;
}

export function osManagementHubManagedInstanceUpdatePackagesManagementTimeoutsToTerraform(struct?: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function osManagementHubManagedInstanceUpdatePackagesManagementTimeoutsToHclTerraform(struct?: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
export interface OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}
  */
  readonly displayName?: string;
}

export function osManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsToTerraform(struct?: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference | OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function osManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsToHclTerraform(struct?: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference | OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management oci_os_management_hub_managed_instance_update_packages_management}
*/
export class OsManagementHubManagedInstanceUpdatePackagesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instance_update_packages_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubManagedInstanceUpdatePackagesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubManagedInstanceUpdatePackagesManagement to import
  * @param importFromId The id of the existing OsManagementHubManagedInstanceUpdatePackagesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubManagedInstanceUpdatePackagesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_managed_instance_update_packages_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/os_management_hub_managed_instance_update_packages_management oci_os_management_hub_managed_instance_update_packages_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubManagedInstanceUpdatePackagesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubManagedInstanceUpdatePackagesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instance_update_packages_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._managedInstanceId = config.managedInstanceId;
    this._packageNames = config.packageNames;
    this._updateTypes = config.updateTypes;
    this._timeouts.internalValue = config.timeouts;
    this._workRequestDetails.internalValue = config.workRequestDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // package_names - computed: false, optional: true, required: false
  private _packageNames?: string[]; 
  public get packageNames() {
    return this.getListAttribute('package_names');
  }
  public set packageNames(value: string[]) {
    this._packageNames = value;
  }
  public resetPackageNames() {
    this._packageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamesInput() {
    return this._packageNames;
  }

  // update_types - computed: false, optional: true, required: false
  private _updateTypes?: string[]; 
  public get updateTypes() {
    return this.getListAttribute('update_types');
  }
  public set updateTypes(value: string[]) {
    this._updateTypes = value;
  }
  public resetUpdateTypes() {
    this._updateTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTypesInput() {
    return this._updateTypes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // work_request_details - computed: false, optional: true, required: false
  private _workRequestDetails = new OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference(this, "work_request_details");
  public get workRequestDetails() {
    return this._workRequestDetails;
  }
  public putWorkRequestDetails(value: OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails) {
    this._workRequestDetails.internalValue = value;
  }
  public resetWorkRequestDetails() {
    this._workRequestDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workRequestDetailsInput() {
    return this._workRequestDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      package_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageNames),
      update_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._updateTypes),
      timeouts: osManagementHubManagedInstanceUpdatePackagesManagementTimeoutsToTerraform(this._timeouts.internalValue),
      work_request_details: osManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsToTerraform(this._workRequestDetails.internalValue),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      update_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._updateTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: osManagementHubManagedInstanceUpdatePackagesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts",
      },
      work_request_details: {
        value: osManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsToHclTerraform(this._workRequestDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
