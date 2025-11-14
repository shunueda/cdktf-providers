// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubManagementStationAssociateManagedInstancesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#id OsManagementHubManagementStationAssociateManagedInstancesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#managed_instances OsManagementHubManagementStationAssociateManagedInstancesManagement#managed_instances}
  */
  readonly managedInstances: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#management_station_id OsManagementHubManagementStationAssociateManagedInstancesManagement#management_station_id}
  */
  readonly managementStationId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#timeouts OsManagementHubManagementStationAssociateManagedInstancesManagement#timeouts}
  */
  readonly timeouts?: OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts;
  /**
  * work_request_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#work_request_details OsManagementHubManagementStationAssociateManagedInstancesManagement#work_request_details}
  */
  readonly workRequestDetails?: OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetails;
}
export interface OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#create OsManagementHubManagementStationAssociateManagedInstancesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#delete OsManagementHubManagementStationAssociateManagedInstancesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#update OsManagementHubManagementStationAssociateManagedInstancesManagement#update}
  */
  readonly update?: string;
}

export function osManagementHubManagementStationAssociateManagedInstancesManagementTimeoutsToTerraform(struct?: OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts | cdktf.IResolvable): any {
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


export function osManagementHubManagementStationAssociateManagedInstancesManagementTimeoutsToHclTerraform(struct?: OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubManagementStationAssociateManagedInstancesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts | cdktf.IResolvable | undefined) {
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
export interface OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#description OsManagementHubManagementStationAssociateManagedInstancesManagement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#display_name OsManagementHubManagementStationAssociateManagedInstancesManagement#display_name}
  */
  readonly displayName?: string;
}

export function osManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsToTerraform(struct?: OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsOutputReference | OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function osManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsToHclTerraform(struct?: OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsOutputReference | OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetails): any {
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

export class OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetails | undefined {
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

  public set internalValue(value: OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetails | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management oci_os_management_hub_management_station_associate_managed_instances_management}
*/
export class OsManagementHubManagementStationAssociateManagedInstancesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_management_station_associate_managed_instances_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubManagementStationAssociateManagedInstancesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubManagementStationAssociateManagedInstancesManagement to import
  * @param importFromId The id of the existing OsManagementHubManagementStationAssociateManagedInstancesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubManagementStationAssociateManagedInstancesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_management_station_associate_managed_instances_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/os_management_hub_management_station_associate_managed_instances_management oci_os_management_hub_management_station_associate_managed_instances_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubManagementStationAssociateManagedInstancesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubManagementStationAssociateManagedInstancesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_management_station_associate_managed_instances_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._managedInstances = config.managedInstances;
    this._managementStationId = config.managementStationId;
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

  // managed_instances - computed: false, optional: false, required: true
  private _managedInstances?: string[]; 
  public get managedInstances() {
    return this.getListAttribute('managed_instances');
  }
  public set managedInstances(value: string[]) {
    this._managedInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstancesInput() {
    return this._managedInstances;
  }

  // management_station_id - computed: false, optional: false, required: true
  private _managementStationId?: string; 
  public get managementStationId() {
    return this.getStringAttribute('management_station_id');
  }
  public set managementStationId(value: string) {
    this._managementStationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStationIdInput() {
    return this._managementStationId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubManagementStationAssociateManagedInstancesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts) {
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
  private _workRequestDetails = new OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsOutputReference(this, "work_request_details");
  public get workRequestDetails() {
    return this._workRequestDetails;
  }
  public putWorkRequestDetails(value: OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetails) {
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
      managed_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedInstances),
      management_station_id: cdktf.stringToTerraform(this._managementStationId),
      timeouts: osManagementHubManagementStationAssociateManagedInstancesManagementTimeoutsToTerraform(this._timeouts.internalValue),
      work_request_details: osManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsToTerraform(this._workRequestDetails.internalValue),
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
      managed_instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedInstances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      management_station_id: {
        value: cdktf.stringToHclTerraform(this._managementStationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: osManagementHubManagementStationAssociateManagedInstancesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubManagementStationAssociateManagedInstancesManagementTimeouts",
      },
      work_request_details: {
        value: osManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsToHclTerraform(this._workRequestDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubManagementStationAssociateManagedInstancesManagementWorkRequestDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
