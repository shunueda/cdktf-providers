// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * software_source_availabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_availabilities OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_availabilities}
  */
  readonly softwareSourceAvailabilities: OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#timeouts OsManagementHubSoftwareSourceChangeAvailabilityManagement#timeouts}
  */
  readonly timeouts?: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts;
}
export interface OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#availability OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#availability_at_oci OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability_at_oci}
  */
  readonly availabilityAtOci?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_id OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_id}
  */
  readonly softwareSourceId: string;
}

export function osManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesToTerraform(struct?: OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    availability_at_oci: cdktf.stringToTerraform(struct!.availabilityAtOci),
    software_source_id: cdktf.stringToTerraform(struct!.softwareSourceId),
  }
}


export function osManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesToHclTerraform(struct?: OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_at_oci: {
      value: cdktf.stringToHclTerraform(struct!.availabilityAtOci),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_source_id: {
      value: cdktf.stringToHclTerraform(struct!.softwareSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._availabilityAtOci !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityAtOci = this._availabilityAtOci;
    }
    if (this._softwareSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareSourceId = this._softwareSourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._availabilityAtOci = undefined;
      this._softwareSourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._availabilityAtOci = value.availabilityAtOci;
      this._softwareSourceId = value.softwareSourceId;
    }
  }

  // availability - computed: true, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // availability_at_oci - computed: true, optional: true, required: false
  private _availabilityAtOci?: string; 
  public get availabilityAtOci() {
    return this.getStringAttribute('availability_at_oci');
  }
  public set availabilityAtOci(value: string) {
    this._availabilityAtOci = value;
  }
  public resetAvailabilityAtOci() {
    this._availabilityAtOci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityAtOciInput() {
    return this._availabilityAtOci;
  }

  // software_source_id - computed: false, optional: false, required: true
  private _softwareSourceId?: string; 
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }
  public set softwareSourceId(value: string) {
    this._softwareSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdInput() {
    return this._softwareSourceId;
  }
}

export class OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference {
    return new OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}
  */
  readonly update?: string;
}

export function osManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsToTerraform(struct?: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts | cdktf.IResolvable): any {
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


export function osManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsToHclTerraform(struct?: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management oci_os_management_hub_software_source_change_availability_management}
*/
export class OsManagementHubSoftwareSourceChangeAvailabilityManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_software_source_change_availability_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubSoftwareSourceChangeAvailabilityManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import
  * @param importFromId The id of the existing OsManagementHubSoftwareSourceChangeAvailabilityManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_software_source_change_availability_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_software_source_change_availability_management oci_os_management_hub_software_source_change_availability_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_software_source_change_availability_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._softwareSourceAvailabilities.internalValue = config.softwareSourceAvailabilities;
    this._timeouts.internalValue = config.timeouts;
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

  // software_source_availabilities - computed: false, optional: false, required: true
  private _softwareSourceAvailabilities = new OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList(this, "software_source_availabilities", false);
  public get softwareSourceAvailabilities() {
    return this._softwareSourceAvailabilities;
  }
  public putSoftwareSourceAvailabilities(value: OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities[] | cdktf.IResolvable) {
    this._softwareSourceAvailabilities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceAvailabilitiesInput() {
    return this._softwareSourceAvailabilities.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      software_source_availabilities: cdktf.listMapper(osManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesToTerraform, true)(this._softwareSourceAvailabilities.internalValue),
      timeouts: osManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsToTerraform(this._timeouts.internalValue),
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
      software_source_availabilities: {
        value: cdktf.listMapperHcl(osManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesToHclTerraform, true)(this._softwareSourceAvailabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList",
      },
      timeouts: {
        value: osManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
