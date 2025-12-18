// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#arch_type OsManagementHubProfile#arch_type}
  */
  readonly archType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#compartment_id OsManagementHubProfile#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#defined_tags OsManagementHubProfile#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#description OsManagementHubProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#display_name OsManagementHubProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#freeform_tags OsManagementHubProfile#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#id OsManagementHubProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#is_default_profile OsManagementHubProfile#is_default_profile}
  */
  readonly isDefaultProfile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#lifecycle_stage_id OsManagementHubProfile#lifecycle_stage_id}
  */
  readonly lifecycleStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#managed_instance_group_id OsManagementHubProfile#managed_instance_group_id}
  */
  readonly managedInstanceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#management_station_id OsManagementHubProfile#management_station_id}
  */
  readonly managementStationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#os_family OsManagementHubProfile#os_family}
  */
  readonly osFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#profile_type OsManagementHubProfile#profile_type}
  */
  readonly profileType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#registration_type OsManagementHubProfile#registration_type}
  */
  readonly registrationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#software_source_ids OsManagementHubProfile#software_source_ids}
  */
  readonly softwareSourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#vendor_name OsManagementHubProfile#vendor_name}
  */
  readonly vendorName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#timeouts OsManagementHubProfile#timeouts}
  */
  readonly timeouts?: OsManagementHubProfileTimeouts;
}
export interface OsManagementHubProfileLifecycleEnvironment {
}

export function osManagementHubProfileLifecycleEnvironmentToTerraform(struct?: OsManagementHubProfileLifecycleEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubProfileLifecycleEnvironmentToHclTerraform(struct?: OsManagementHubProfileLifecycleEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubProfileLifecycleEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubProfileLifecycleEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubProfileLifecycleEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class OsManagementHubProfileLifecycleEnvironmentList extends cdktf.ComplexList {

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
  public get(index: number): OsManagementHubProfileLifecycleEnvironmentOutputReference {
    return new OsManagementHubProfileLifecycleEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubProfileLifecycleStage {
}

export function osManagementHubProfileLifecycleStageToTerraform(struct?: OsManagementHubProfileLifecycleStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubProfileLifecycleStageToHclTerraform(struct?: OsManagementHubProfileLifecycleStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubProfileLifecycleStageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubProfileLifecycleStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubProfileLifecycleStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class OsManagementHubProfileLifecycleStageList extends cdktf.ComplexList {

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
  public get(index: number): OsManagementHubProfileLifecycleStageOutputReference {
    return new OsManagementHubProfileLifecycleStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubProfileManagedInstanceGroup {
}

export function osManagementHubProfileManagedInstanceGroupToTerraform(struct?: OsManagementHubProfileManagedInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubProfileManagedInstanceGroupToHclTerraform(struct?: OsManagementHubProfileManagedInstanceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubProfileManagedInstanceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubProfileManagedInstanceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubProfileManagedInstanceGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class OsManagementHubProfileManagedInstanceGroupList extends cdktf.ComplexList {

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
  public get(index: number): OsManagementHubProfileManagedInstanceGroupOutputReference {
    return new OsManagementHubProfileManagedInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubProfileSoftwareSources {
}

export function osManagementHubProfileSoftwareSourcesToTerraform(struct?: OsManagementHubProfileSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osManagementHubProfileSoftwareSourcesToHclTerraform(struct?: OsManagementHubProfileSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsManagementHubProfileSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubProfileSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubProfileSoftwareSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mandatory_for_autonomous_linux - computed: true, optional: false, required: false
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }

  // software_source_type - computed: true, optional: false, required: false
  public get softwareSourceType() {
    return this.getStringAttribute('software_source_type');
  }
}

export class OsManagementHubProfileSoftwareSourcesList extends cdktf.ComplexList {

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
  public get(index: number): OsManagementHubProfileSoftwareSourcesOutputReference {
    return new OsManagementHubProfileSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#create OsManagementHubProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#delete OsManagementHubProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#update OsManagementHubProfile#update}
  */
  readonly update?: string;
}

export function osManagementHubProfileTimeoutsToTerraform(struct?: OsManagementHubProfileTimeouts | cdktf.IResolvable): any {
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


export function osManagementHubProfileTimeoutsToHclTerraform(struct?: OsManagementHubProfileTimeouts | cdktf.IResolvable): any {
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

export class OsManagementHubProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsManagementHubProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile oci_os_management_hub_profile}
*/
export class OsManagementHubProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubProfile to import
  * @param importFromId The id of the existing OsManagementHubProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/os_management_hub_profile oci_os_management_hub_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubProfileConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_profile',
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
    this._archType = config.archType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isDefaultProfile = config.isDefaultProfile;
    this._lifecycleStageId = config.lifecycleStageId;
    this._managedInstanceGroupId = config.managedInstanceGroupId;
    this._managementStationId = config.managementStationId;
    this._osFamily = config.osFamily;
    this._profileType = config.profileType;
    this._registrationType = config.registrationType;
    this._softwareSourceIds = config.softwareSourceIds;
    this._vendorName = config.vendorName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_type - computed: true, optional: true, required: false
  private _archType?: string; 
  public get archType() {
    return this.getStringAttribute('arch_type');
  }
  public set archType(value: string) {
    this._archType = value;
  }
  public resetArchType() {
    this._archType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archTypeInput() {
    return this._archType;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_default_profile - computed: true, optional: true, required: false
  private _isDefaultProfile?: boolean | cdktf.IResolvable; 
  public get isDefaultProfile() {
    return this.getBooleanAttribute('is_default_profile');
  }
  public set isDefaultProfile(value: boolean | cdktf.IResolvable) {
    this._isDefaultProfile = value;
  }
  public resetIsDefaultProfile() {
    this._isDefaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultProfileInput() {
    return this._isDefaultProfile;
  }

  // is_service_provided_profile - computed: true, optional: false, required: false
  public get isServiceProvidedProfile() {
    return this.getBooleanAttribute('is_service_provided_profile');
  }

  // lifecycle_environment - computed: true, optional: false, required: false
  private _lifecycleEnvironment = new OsManagementHubProfileLifecycleEnvironmentList(this, "lifecycle_environment", false);
  public get lifecycleEnvironment() {
    return this._lifecycleEnvironment;
  }

  // lifecycle_stage - computed: true, optional: false, required: false
  private _lifecycleStage = new OsManagementHubProfileLifecycleStageList(this, "lifecycle_stage", false);
  public get lifecycleStage() {
    return this._lifecycleStage;
  }

  // lifecycle_stage_id - computed: true, optional: true, required: false
  private _lifecycleStageId?: string; 
  public get lifecycleStageId() {
    return this.getStringAttribute('lifecycle_stage_id');
  }
  public set lifecycleStageId(value: string) {
    this._lifecycleStageId = value;
  }
  public resetLifecycleStageId() {
    this._lifecycleStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStageIdInput() {
    return this._lifecycleStageId;
  }

  // managed_instance_group - computed: true, optional: false, required: false
  private _managedInstanceGroup = new OsManagementHubProfileManagedInstanceGroupList(this, "managed_instance_group", false);
  public get managedInstanceGroup() {
    return this._managedInstanceGroup;
  }

  // managed_instance_group_id - computed: true, optional: true, required: false
  private _managedInstanceGroupId?: string; 
  public get managedInstanceGroupId() {
    return this.getStringAttribute('managed_instance_group_id');
  }
  public set managedInstanceGroupId(value: string) {
    this._managedInstanceGroupId = value;
  }
  public resetManagedInstanceGroupId() {
    this._managedInstanceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceGroupIdInput() {
    return this._managedInstanceGroupId;
  }

  // management_station_id - computed: true, optional: true, required: false
  private _managementStationId?: string; 
  public get managementStationId() {
    return this.getStringAttribute('management_station_id');
  }
  public set managementStationId(value: string) {
    this._managementStationId = value;
  }
  public resetManagementStationId() {
    this._managementStationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementStationIdInput() {
    return this._managementStationId;
  }

  // os_family - computed: true, optional: true, required: false
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // profile_type - computed: false, optional: false, required: true
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // profile_version - computed: true, optional: false, required: false
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }

  // registration_type - computed: true, optional: true, required: false
  private _registrationType?: string; 
  public get registrationType() {
    return this.getStringAttribute('registration_type');
  }
  public set registrationType(value: string) {
    this._registrationType = value;
  }
  public resetRegistrationType() {
    this._registrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationTypeInput() {
    return this._registrationType;
  }

  // software_source_ids - computed: true, optional: true, required: false
  private _softwareSourceIds?: string[]; 
  public get softwareSourceIds() {
    return this.getListAttribute('software_source_ids');
  }
  public set softwareSourceIds(value: string[]) {
    this._softwareSourceIds = value;
  }
  public resetSoftwareSourceIds() {
    this._softwareSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdsInput() {
    return this._softwareSourceIds;
  }

  // software_sources - computed: true, optional: false, required: false
  private _softwareSources = new OsManagementHubProfileSoftwareSourcesList(this, "software_sources", false);
  public get softwareSources() {
    return this._softwareSources;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_modified - computed: true, optional: false, required: false
  public get timeModified() {
    return this.getStringAttribute('time_modified');
  }

  // vendor_name - computed: true, optional: true, required: false
  private _vendorName?: string; 
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
  public set vendorName(value: string) {
    this._vendorName = value;
  }
  public resetVendorName() {
    this._vendorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNameInput() {
    return this._vendorName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubProfileTimeouts) {
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
      arch_type: cdktf.stringToTerraform(this._archType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_default_profile: cdktf.booleanToTerraform(this._isDefaultProfile),
      lifecycle_stage_id: cdktf.stringToTerraform(this._lifecycleStageId),
      managed_instance_group_id: cdktf.stringToTerraform(this._managedInstanceGroupId),
      management_station_id: cdktf.stringToTerraform(this._managementStationId),
      os_family: cdktf.stringToTerraform(this._osFamily),
      profile_type: cdktf.stringToTerraform(this._profileType),
      registration_type: cdktf.stringToTerraform(this._registrationType),
      software_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softwareSourceIds),
      vendor_name: cdktf.stringToTerraform(this._vendorName),
      timeouts: osManagementHubProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch_type: {
        value: cdktf.stringToHclTerraform(this._archType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default_profile: {
        value: cdktf.booleanToHclTerraform(this._isDefaultProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lifecycle_stage_id: {
        value: cdktf.stringToHclTerraform(this._lifecycleStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_instance_group_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_station_id: {
        value: cdktf.stringToHclTerraform(this._managementStationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_family: {
        value: cdktf.stringToHclTerraform(this._osFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_type: {
        value: cdktf.stringToHclTerraform(this._registrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._softwareSourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vendor_name: {
        value: cdktf.stringToHclTerraform(this._vendorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: osManagementHubProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
